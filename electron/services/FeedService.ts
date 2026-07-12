import Parser from 'rss-parser';
import axios from 'axios';
import { SAFE_AXIOS_CONFIG } from '../utils/safeHttp';
import { hasDangerousDoctype } from '../utils/xmlSafety';
import { validateUrl } from '../utils/validateUrl';

export class FeedService {
  private parser: Parser;

  /** Maximum number of paginated pages to fetch (safety limit). */
  private static readonly MAX_PAGES = 20;

  constructor() {
    this.parser = new Parser();
  }

  /**
   * L4: decode a response body honoring its declared charset — assuming UTF-8
   * produces mojibake in titles (and therefore filenames) for legacy feeds.
   * The charset comes from the Content-Type header or the XML prolog.
   */
  private decodeBody(data: unknown, contentType: string): string {
    if (typeof data === 'string') return data;
    const buf = Buffer.isBuffer(data) ? data : Buffer.from(data as ArrayBuffer);
    let charset = contentType.match(/charset=["']?([\w-]+)/i)?.[1];
    if (!charset) {
      const prolog = buf.subarray(0, 200).toString('latin1');
      charset = prolog.match(/encoding=["']([\w-]+)["']/i)?.[1];
    }
    if (charset && !/^utf-?8$/i.test(charset)) {
      try {
        return new TextDecoder(charset).decode(buf);
      } catch { /* unknown label → fall back to UTF-8 */ }
    }
    return buf.toString('utf-8');
  }

  /**
   * Fetch a single feed page with all security checks applied.
   * Extracted as a reusable helper so every page (first and subsequent)
   * goes through the same SSRF / DOCTYPE / content-type validation.
   *
   * M6: when `conditional` validators are provided, the request is sent with
   * If-None-Match / If-Modified-Since; a 304 returns null (nothing changed).
   */
  private async fetchPage(
    url: string,
    conditional?: { etag?: string; lastModified?: string },
  ): Promise<{ xml: string; etag?: string; lastModified?: string } | null> {
    const conditionalHeaders: Record<string, string> = {};
    if (conditional?.etag) conditionalHeaders['If-None-Match'] = conditional.etag;
    if (conditional?.lastModified) conditionalHeaders['If-Modified-Since'] = conditional.lastModified;

    const response = await axios.get(url, {
      timeout: 15000,
      // L4: raw bytes, decoded below with the declared charset
      responseType: 'arraybuffer',
      // M4: bound the response size — a feed is small; this stops a hostile or
      // misbehaving server from streaming an unbounded body into memory.
      maxContentLength: 15 * 1024 * 1024,
      maxBodyLength: 15 * 1024 * 1024,
      validateStatus: (s) => (s >= 200 && s < 300) || s === 304,
      ...SAFE_AXIOS_CONFIG, // SSRF: validate resolved IP on every hop
      headers: {
        'Accept': 'application/rss+xml, application/atom+xml, application/xml, text/xml, */*',
        ...conditionalHeaders,
      }
    });

    if (response.status === 304) return null;

    const contentType = String(response.headers['content-type'] || '');
    const xml = this.decodeBody(response.data, contentType);

    // M4: reject XML that declares a DOCTYPE with entity definitions — an XXE /
    // billion-laughs vector. rss-parser's underlying XML layer does not expand
    // external entities, but we refuse such documents explicitly rather than rely on it.
    if (hasDangerousDoctype(xml)) {
      throw new Error('INVALID_FEED_TYPE: Feed contains a disallowed DOCTYPE declaration.');
    }

    const isHtml = contentType.includes('text/html') || contentType.includes('application/html');
    const isXml = ['xml', 'rss', 'atom', 'rdf'].some(t => contentType.includes(t));

    if (isHtml && !isXml) {
      throw new Error('INVALID_FEED_TYPE: The URL points to a webpage, not an RSS feed.');
    }

    const rawEtag = response.headers['etag'];
    const rawLastModified = response.headers['last-modified'];
    return {
      xml,
      etag: typeof rawEtag === 'string' ? rawEtag : undefined,
      lastModified: typeof rawLastModified === 'string' ? rawLastModified : undefined,
    };
  }

  /**
   * Extract the "next page" URL from raw XML following RFC 5005.
   * Looks for `<atom:link rel="next" href="...">` or `<link rel="next" href="...">`.
   *
   * The raw href is resolved against `baseUrl` (RFC 5005 links may be relative)
   * and then run through `validateUrl` — the same SSRF/protocol pre-check applied
   * to the user-supplied feed URL. A hostile feed must not be able to walk
   * pagination onto an internal host or a non-http(s) scheme. Returns an absolute,
   * validated URL, or null if there is no next page or it fails validation.
   */
  private extractNextPageUrl(xml: string, baseUrl: string): string | null {
    // Match both atom:link and link variants, with rel and href in either order.
    const pattern =
      /<(?:atom:)?link\s[^>]*?rel\s*=\s*["']next["'][^>]*?href\s*=\s*["']([^"']+)["'][^>]*?\/?>/i;
    const patternReversed =
      /<(?:atom:)?link\s[^>]*?href\s*=\s*["']([^"']+)["'][^>]*?rel\s*=\s*["']next["'][^>]*?\/?>/i;

    const raw = xml.match(pattern)?.[1] ?? xml.match(patternReversed)?.[1];
    if (!raw) return null;

    // Resolve relative hrefs against the page that contained them.
    let absolute: string;
    try {
      absolute = new URL(raw, baseUrl).toString();
    } catch {
      return null;
    }

    if (!validateUrl(absolute).valid) {
      console.warn(`[FeedService] Ignoring unsafe pagination link: ${absolute}`);
      return null;
    }
    return absolute;
  }

  /**
   * Parse a feed (following RFC 5005 pagination).
   *
   * M6: pass `conditional` (stored ETag/Last-Modified) to make the first-page
   * request conditional — returns null when the server answers 304, meaning
   * nothing changed since the stored validators. The fresh validators are
   * exposed on the returned feed as `httpEtag` / `httpLastModified`.
   */
  async parseFeed(url: string, conditional?: { etag?: string; lastModified?: string }) {
    try {
      // --- Page 1 ---
      const firstPage = await this.fetchPage(url, conditional);
      if (firstPage === null) return null; // 304 Not Modified
      const firstPageXml = firstPage.xml;

      const feed = await this.parser.parseString(firstPageXml) as Record<string, unknown> & {
        image?: unknown; itunes?: { image?: unknown }; items: Record<string, unknown>[];
      };
      feed.httpEtag = firstPage.etag;
      feed.httpLastModified = firstPage.lastModified;

      // Fix for Anchor.fm / iTunes feeds where image is in 'itunes.image'
      if (!feed.image && feed.itunes && feed.itunes.image) {
        feed.image = feed.itunes.image;
      }

      // Collect all items starting from the first page
      const allItems: Record<string, unknown>[] = [...feed.items];

      // --- Pagination: RFC 5005 <atom:link rel="next"> ---
      // `visited` guards against a feed whose next-links form a cycle (e.g. a
      // page pointing back to itself), which would otherwise burn all MAX_PAGES.
      const visited = new Set<string>([url]);
      let currentUrl = url;
      let nextUrl = this.extractNextPageUrl(firstPageXml, currentUrl);
      let pageCount = 1;

      while (nextUrl && pageCount < FeedService.MAX_PAGES) {
        if (visited.has(nextUrl)) {
          console.warn(`[FeedService] Pagination cycle detected at ${nextUrl}, stopping.`);
          break;
        }
        visited.add(nextUrl);
        pageCount++;
        console.log(`[FeedService] Fetching paginated feed page ${pageCount}: ${nextUrl}`);

        // M7: a broken later page (malformed XML, timeout) must not throw away
        // the episodes already collected from the previous pages.
        let pageXml: string;
        let pageItems: Record<string, unknown>[];
        try {
          const page = await this.fetchPage(nextUrl);
          pageXml = page!.xml; // non-conditional fetch never returns null
          const pageFeed = await this.parser.parseString(pageXml) as Record<string, unknown> & {
            items: Record<string, unknown>[];
          };
          pageItems = pageFeed.items ?? [];
        } catch (pageErr) {
          console.warn(`[FeedService] Page ${pageCount} failed (${(pageErr as Error).message}) — keeping ${allItems.length} items from previous pages.`);
          break;
        }

        if (pageItems.length > 0) {
          allItems.push(...pageItems);
          console.log(`[FeedService] Page ${pageCount}: +${pageItems.length} items (total: ${allItems.length})`);
        } else {
          console.log(`[FeedService] Page ${pageCount}: no items found, stopping pagination.`);
          break;
        }

        currentUrl = nextUrl;
        nextUrl = this.extractNextPageUrl(pageXml, currentUrl);
      }

      if (pageCount >= FeedService.MAX_PAGES && nextUrl) {
        console.warn(`[FeedService] Pagination safety limit reached (${FeedService.MAX_PAGES} pages). Some episodes may be missing.`);
      }

      if (pageCount > 1) {
        console.log(`[FeedService] Pagination complete: ${pageCount} pages, ${allItems.length} total items.`);
      }

      // M8: overlapping pagination windows repeat episodes across page
      // boundaries — dedupe by GUID (fallback: enclosure URL), keeping order.
      const seenKeys = new Set<string>();
      const dedupedItems = allItems.filter((item) => {
        const key = (item.guid as string | undefined)
          || (item.enclosure as { url?: string } | undefined)?.url;
        if (!key) return true; // no identity — keep rather than drop
        if (seenKeys.has(key)) return false;
        seenKeys.add(key);
        return true;
      });

      // Replace items with the full aggregated list
      feed.items = dedupedItems;

      // Map 'items' to 'episodes' for UI consistency
      feed.episodes = feed.items.map((item) => {
        // S2: feeds without <guid> exist in the wild — without a fallback those
        // episodes were downloaded but never recorded (no history, no archive,
        // no new-episode detection). The enclosure URL is stable across fetches.
        const enclosureUrl = (item.enclosure as { url?: string } | undefined)?.url
          || (item.enclosures as { url?: string }[] | undefined)?.[0]?.url;
        const fallbackGuid = enclosureUrl
          || (item.link && item.pubDate ? `${item.link}|${item.pubDate}` : undefined);
        return {
          title: item.title,
          pubDate: item.pubDate,
          link: item.link,
          enclosure: item.enclosure,
          enclosures: item.enclosures,
          content: item.content,
          contentSnippet: item.contentSnippet,
          guid: item.guid || fallbackGuid,
          isoDate: item.isoDate,
          itunes: item.itunes,
        };
      });

      return feed;
    } catch (error: unknown) {
      console.error('Error parsing feed:', error);
      const errMsg = error instanceof Error ? error.message : String(error);
      if (errMsg.includes('INVALID_FEED_TYPE')) {
        throw error;
      }
      throw new Error('FAILED_TO_PARSE: Could not parse feed. ' + errMsg);
    }
  }
}
