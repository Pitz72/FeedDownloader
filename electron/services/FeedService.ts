import Parser from 'rss-parser';
import axios from 'axios';
import { SAFE_AXIOS_CONFIG } from '../utils/safeHttp';
import { hasDangerousDoctype } from '../utils/xmlSafety';

export class FeedService {
  private parser: Parser;

  /** Maximum number of paginated pages to fetch (safety limit). */
  private static readonly MAX_PAGES = 20;

  constructor() {
    this.parser = new Parser();
  }

  /**
   * Fetch a single feed page with all security checks applied.
   * Extracted as a reusable helper so every page (first and subsequent)
   * goes through the same SSRF / DOCTYPE / content-type validation.
   */
  private async fetchPage(url: string): Promise<string> {
    const response = await axios.get<string>(url, {
      timeout: 15000,
      responseType: 'text',
      // M4: bound the response size — a feed is small; this stops a hostile or
      // misbehaving server from streaming an unbounded body into memory.
      maxContentLength: 15 * 1024 * 1024,
      maxBodyLength: 15 * 1024 * 1024,
      ...SAFE_AXIOS_CONFIG, // SSRF: validate resolved IP on every hop
      headers: { 'Accept': 'application/rss+xml, application/atom+xml, application/xml, text/xml, */*' }
    });

    // M4: reject XML that declares a DOCTYPE with entity definitions — an XXE /
    // billion-laughs vector. rss-parser's underlying XML layer does not expand
    // external entities, but we refuse such documents explicitly rather than rely on it.
    if (hasDangerousDoctype(response.data)) {
      throw new Error('INVALID_FEED_TYPE: Feed contains a disallowed DOCTYPE declaration.');
    }

    const contentType = response.headers['content-type'] || '';
    const isHtml = contentType.includes('text/html') || contentType.includes('application/html');
    const isXml = ['xml', 'rss', 'atom', 'rdf'].some(t => contentType.includes(t));

    if (isHtml && !isXml) {
      throw new Error('INVALID_FEED_TYPE: The URL points to a webpage, not an RSS feed.');
    }

    return response.data;
  }

  /**
   * Extract the "next page" URL from raw XML following RFC 5005.
   * Looks for `<atom:link rel="next" href="...">` or `<link rel="next" href="...">`.
   * Returns the href value, or null if no next page is found.
   */
  private extractNextPageUrl(xml: string): string | null {
    // Match both atom:link and link variants, with rel and href in either order.
    const pattern =
      /<(?:atom:)?link\s[^>]*?rel\s*=\s*["']next["'][^>]*?href\s*=\s*["']([^"']+)["'][^>]*?\/?>/i;
    const match = xml.match(pattern);
    if (match) return match[1];

    // Also handle the case where href appears before rel in the tag.
    const patternReversed =
      /<(?:atom:)?link\s[^>]*?href\s*=\s*["']([^"']+)["'][^>]*?rel\s*=\s*["']next["'][^>]*?\/?>/i;
    const matchReversed = xml.match(patternReversed);
    if (matchReversed) return matchReversed[1];

    return null;
  }

  async parseFeed(url: string) {
    try {
      // --- Page 1 ---
      const firstPageXml = await this.fetchPage(url);

      const feed = await this.parser.parseString(firstPageXml) as Record<string, unknown> & {
        image?: unknown; itunes?: { image?: unknown }; items: Record<string, unknown>[];
      };

      // Fix for Anchor.fm / iTunes feeds where image is in 'itunes.image'
      if (!feed.image && feed.itunes && feed.itunes.image) {
        feed.image = feed.itunes.image;
      }

      // Collect all items starting from the first page
      const allItems: Record<string, unknown>[] = [...feed.items];

      // --- Pagination: RFC 5005 <atom:link rel="next"> ---
      let nextUrl = this.extractNextPageUrl(firstPageXml);
      let pageCount = 1;

      while (nextUrl && pageCount < FeedService.MAX_PAGES) {
        pageCount++;
        console.log(`[FeedService] Fetching paginated feed page ${pageCount}: ${nextUrl}`);

        const pageXml = await this.fetchPage(nextUrl);
        const pageFeed = await this.parser.parseString(pageXml) as Record<string, unknown> & {
          items: Record<string, unknown>[];
        };

        if (pageFeed.items && pageFeed.items.length > 0) {
          allItems.push(...pageFeed.items);
          console.log(`[FeedService] Page ${pageCount}: +${pageFeed.items.length} items (total: ${allItems.length})`);
        } else {
          console.log(`[FeedService] Page ${pageCount}: no items found, stopping pagination.`);
          break;
        }

        nextUrl = this.extractNextPageUrl(pageXml);
      }

      if (pageCount >= FeedService.MAX_PAGES && nextUrl) {
        console.warn(`[FeedService] Pagination safety limit reached (${FeedService.MAX_PAGES} pages). Some episodes may be missing.`);
      }

      if (pageCount > 1) {
        console.log(`[FeedService] Pagination complete: ${pageCount} pages, ${allItems.length} total items.`);
      }

      // Replace items with the full aggregated list
      feed.items = allItems;

      // Map 'items' to 'episodes' for UI consistency
      feed.episodes = feed.items.map((item) => ({
        title: item.title,
        pubDate: item.pubDate,
        link: item.link,
        enclosure: item.enclosure,
        enclosures: item.enclosures,
        content: item.content,
        contentSnippet: item.contentSnippet,
        guid: item.guid,
        isoDate: item.isoDate,
        itunes: item.itunes,
      }));

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
