import Parser from 'rss-parser';
import axios from 'axios';
import { SAFE_AXIOS_CONFIG } from '../utils/safeHttp';

export class FeedService {
  private parser: Parser;

  constructor() {
    this.parser = new Parser();
  }

  async parseFeed(url: string) {
    try {
      // Single HTTP request: fetch content + check Content-Type in one shot
      const response = await axios.get<string>(url, {
        timeout: 15000,
        responseType: 'text',
        ...SAFE_AXIOS_CONFIG, // SSRF: validate resolved IP on every hop
        headers: { 'Accept': 'application/rss+xml, application/atom+xml, application/xml, text/xml, */*' }
      });

      const contentType = response.headers['content-type'] || '';
      const isHtml = contentType.includes('text/html') || contentType.includes('application/html');
      const isXml = ['xml', 'rss', 'atom', 'rdf'].some(t => contentType.includes(t));

      if (isHtml && !isXml) {
        throw new Error('INVALID_FEED_TYPE: The URL points to a webpage, not an RSS feed.');
      }

      const feed = await this.parser.parseString(response.data) as Record<string, unknown> & {
        image?: unknown; itunes?: { image?: unknown }; items: Record<string, unknown>[];
      };

      // Fix for Anchor.fm / iTunes feeds where image is in 'itunes.image'
      if (!feed.image && feed.itunes && feed.itunes.image) {
        feed.image = feed.itunes.image;
      }

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
