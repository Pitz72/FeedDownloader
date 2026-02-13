import Parser from 'rss-parser';

export class FeedService {
  private parser: Parser;

  constructor() {
    this.parser = new Parser();
  }

  async parseFeed(url: string) {
    try {
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
    } catch (error) {
      console.error('Error parsing feed:', error);
      throw error;
    }
  }
}
