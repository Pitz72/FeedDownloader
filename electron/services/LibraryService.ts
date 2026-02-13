import Store from 'electron-store';

interface Feed {
    url: string;
    title: string;
    lastUpdated: string;
}

export class LibraryService {
    private store: Store;

    constructor() {
        this.store = new Store();
    }

    getFeeds(): Feed[] {
        return (this.store.get('feeds') as Feed[]) || [];
    }

    addFeed(feed: Feed) {
        const feeds = this.getFeeds();
        if (!feeds.find((f) => f.url === feed.url)) {
            feeds.push(feed);
            this.store.set('feeds', feeds);
        }
    }

    removeFeed(url: string) {
        const feeds = this.getFeeds().filter((f) => f.url !== url);
        this.store.set('feeds', feeds);
    }

    getDownloadPath(): string {
        return (this.store.get('downloadPath') as string) || '';
    }

    setDownloadPath(path: string) {
        this.store.set('downloadPath', path);
    }

    markAsDownloaded(guid: string) {
        const downloads = (this.store.get('downloads') as string[]) || [];
        if (!downloads.includes(guid)) {
            downloads.push(guid);
            this.store.set('downloads', downloads);
        }
    }

    isDownloaded(guid: string): boolean {
        const downloads = (this.store.get('downloads') as string[]) || [];
        return downloads.includes(guid);
    }

    getDownloadedEpisodes(): string[] {
        return (this.store.get('downloads') as string[]) || [];
    }

    removeDownloadedEpisode(guid: string) {
        const downloads = (this.store.get('downloads') as string[]) || [];
        const newDownloads = downloads.filter(id => id !== guid);
        this.store.set('downloads', newDownloads);
    }

    resetDownloadHistory() {
        this.store.set('downloads', []);
    }
}
