import Store from 'electron-store';
import { XMLParser, XMLBuilder } from 'fast-xml-parser';

interface Feed {
    url: string;
    title: string;
    lastUpdated: string;
}

interface ArchiveEntry {
    guid: string;
    podcastTitle: string;
    title: string;
    pubDate: string;
    downloadedAt: string;
    filename?: string;
}

interface ArchiveStats {
    totalFiles: number;
    totalPodcasts: number;
    oldestDate: string | null;
    newestDate: string | null;
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

    // Archive / CSV Support
    addArchiveEntry(entry: ArchiveEntry) {
        const archive = (this.store.get('archive') as ArchiveEntry[]) || [];
        if (!archive.find(e => e.guid === entry.guid)) {
            archive.push(entry);
            this.store.set('archive', archive);
        }
    }

    exportArchiveCSV(): string {
        const archive = (this.store.get('archive') as ArchiveEntry[]) || [];
        let csv = "Podcast,Episode Title,Publish Date,Downloaded At,GUID\n";

        archive.forEach(entry => {
            const row = [
                `"${entry.podcastTitle.replace(/"/g, '""')}"`,
                `"${entry.title.replace(/"/g, '""')}"`,
                `"${entry.pubDate}"`,
                `"${entry.downloadedAt}"`,
                `"${entry.guid}"`
            ].join(",");
            csv += row + "\n";
        });

        return csv;
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

        const archive = (this.store.get('archive') as ArchiveEntry[]) || [];
        const newArchive = archive.filter(e => e.guid !== guid);
        this.store.set('archive', newArchive);
    }

    resetDownloadHistory() {
        this.store.set('downloads', []);
        this.store.set('archive', []);
    }

    // Concurrency settings
    getConcurrency(): number {
        return (this.store.get('concurrency') as number) || 3;
    }

    setConcurrency(n: number) {
        this.store.set('concurrency', Math.max(1, Math.min(n, 10)));
    }

    // Archive Statistics
    getArchiveStats(): ArchiveStats {
        const archive = (this.store.get('archive') as ArchiveEntry[]) || [];

        if (archive.length === 0) {
            return { totalFiles: 0, totalPodcasts: 0, oldestDate: null, newestDate: null };
        }

        const podcasts = new Set(archive.map(e => e.podcastTitle));
        const dates = archive
            .map(e => e.downloadedAt)
            .filter(d => d)
            .sort();

        return {
            totalFiles: archive.length,
            totalPodcasts: podcasts.size,
            oldestDate: dates[0] || null,
            newestDate: dates[dates.length - 1] || null,
        };
    }

    // OPML Support
    async importOPML(xmlContent: string): Promise<number> {
        const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: "" });
        const result = parser.parse(xmlContent);

        let count = 0;

        const traverse = (node: any) => {
            if (Array.isArray(node)) {
                node.forEach(child => traverse(child));
            } else if (typeof node === 'object') {
                if (node.xmlUrl) {
                    this.addFeed({
                        url: node.xmlUrl,
                        title: node.text || node.title || 'Imported Feed',
                        lastUpdated: new Date().toISOString()
                    });
                    count++;
                }

                if (node.outline) {
                    traverse(node.outline);
                }
            }
        }

        if (result.opml && result.opml.body && result.opml.body.outline) {
            traverse(result.opml.body.outline);
        }

        return count;
    }

    exportOPML(): string {
        const feeds = this.getFeeds();
        const builder = new XMLBuilder({ ignoreAttributes: false, format: true, suppressEmptyNode: true });

        const opmlObj = {
            opml: {
                '@_version': '2.0',
                head: {
                    title: 'FeedDownloader Export',
                    dateCreated: new Date().toUTCString()
                },
                body: {
                    outline: feeds.map(f => ({
                        '@_text': f.title,
                        '@_title': f.title,
                        '@_type': 'rss',
                        '@_xmlUrl': f.url
                    }))
                }
            }
        };

        return builder.build(opmlObj);
    }
}
