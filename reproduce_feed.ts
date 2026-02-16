
import Parser from 'rss-parser';

const parser = new Parser();
const url = 'https://anchor.fm/s/5ce01620/podcast/rss';

(async () => {
  try {
    const feed = await parser.parseURL(url);
    console.log('Feed Title:', feed.title);
    console.log('Feed Image:', feed.image);
    console.log('Feed iTunes Image:', feed.itunes?.image);
    
    if (feed.items.length > 0) {
        const firstItem = feed.items[0];
        console.log('First Episode Title:', firstItem.title);
        console.log('Enclosure:', firstItem.enclosure);
        console.log('Enclosures:', firstItem.enclosures); // check if array exists
        console.log('iTunes Image:', firstItem.itunes?.image);
    }
  } catch (err) {
    console.error(err);
  }
})();
