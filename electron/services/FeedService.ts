import Parser from 'rss-parser';
import axios from 'axios';

export class FeedService {
  private parser: Parser;

  constructor() {
    this.parser = new Parser();
  }

  async parseFeed(url: string) {
    try {
      // 1. Validate Content-Type
      const headResponse = await axios.head(url, { timeout: 5000 }).catch(() => null);
      // Fallback to GET with stream if HEAD fails (some servers block HEAD)

      let contentType = headResponse?.headers['content-type'] || '';

      if (!headResponse) {
        // Try a lightweight GET
        const getResponse = await axios.get(url, {
          responseType: 'stream',
          timeout: 5000
        });
        contentType = getResponse.headers['content-type'] || '';
        getResponse.data.destroy(); // Close stream immediately
      }

      const validTypes = ['xml', 'rss', 'atom', 'rdf'];
      const isHtml = contentType.includes('text/html') || contentType.includes('application/html');
      const isXml = validTypes.some(t => contentType.includes(t));

      // Strict check: if it explicitly says HTML, reject it.
      if (isHtml && !isXml) {
        throw new Error("INVALID_FEED_TYPE: The URL points to a webpage, not an RSS feed.");
      }

      // 2. Parse
      const feed: any = await this.parser.parseURL(url);

      // Map 'items' to 'episodes' for UI consistency
      feed.episodes = feed.items.map((item: any) => ({
        title: item.title,
        pubDate: item.pubDate,
        link: item.link,
        enclosure: item.enclosure,
        enclosures: item.enclosures,
        content: item.content,
        contentSnippet: item.contentSnippet,
        guid: item.guid,
        isoDate: item.isoDate,
      }));

      return feed;
    } catch (error: any) {
      console.error('Error parsing feed:', error);
      if (error.message.includes('INVALID_FEED_TYPE')) {
        throw error; // Rethrow custom error
      }
      throw new Error("FAILED_TO_PARSE: Could not parse feed. " + error.message);
    }
  }
}
