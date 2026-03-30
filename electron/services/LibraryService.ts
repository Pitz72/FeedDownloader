import { XMLParser, XMLBuilder } from 'fast-xml-parser';
import { DatabaseService } from './DatabaseService';
import type { FeedEntry, ArchiveEntry, ArchiveStats } from '../../shared/types';

/**
 * LibraryService — high-level persistence API.
 *
 * v0.4.6: Backed by DatabaseService (SQLite) instead of electron-store (JSON).
 * OPML import/export logic lives here; all CRUD is delegated to DatabaseService.
 */
export class LibraryService {
    private db: DatabaseService;

    constructor(db?: DatabaseService) {
        this.db = db || new DatabaseService();
    }

    // ── Feeds ────────────────────────────────────────────────

    getFeeds(): FeedEntry[] {
        return this.db.getFeeds();
    }

    addFeed(feed: FeedEntry): void {
        this.db.addFeed(feed);
    }

    removeFeed(url: string): void {
        this.db.removeFeed(url);
    }

    // ── Downloads ────────────────────────────────────────────

    getDownloadedEpisodes(): string[] {
        return this.db.getDownloadedEpisodes();
    }

    markAsDownloaded(guid: string): void {
        this.db.markAsDownloaded(guid);
    }

    isDownloaded(guid: string): boolean {
        return this.db.isDownloaded(guid);
    }

    removeDownloadedEpisode(guid: string): void {
        this.db.removeDownloadedEpisode(guid);
    }

    // v0.7.6 — Batch removal for missing files detected by health check
    removeMissingFiles(guids: string[]): void {
        this.db.removeMissingFiles(guids);
    }

    resetDownloadHistory(): void {
        this.db.resetDownloadHistory();
    }

    // ── Archive ──────────────────────────────────────────────

    addArchiveEntry(entry: ArchiveEntry): void {
        this.db.addArchiveEntry(entry);
    }

    exportArchiveCSV(): string {
        return this.db.exportArchiveCSV();
    }

    getArchive(): ArchiveEntry[] {
        return this.db.getArchive();
    }

    getArchiveStats(): ArchiveStats {
        return this.db.getArchiveStats();
    }

    // ── Settings ─────────────────────────────────────────────

    getDownloadPath(): string {
        return this.db.getDownloadPath();
    }

    setDownloadPath(downloadPath: string): void {
        this.db.setDownloadPath(downloadPath);
    }

    getConcurrency(): number {
        return this.db.getConcurrency();
    }

    setConcurrency(n: number): void {
        this.db.setConcurrency(n);
    }

    getNamingTemplate(): string {
        return this.db.getNamingTemplate();
    }

    setNamingTemplate(template: string): void {
        this.db.setNamingTemplate(template);
    }

    getSidecarEnabled(): boolean {
        return this.db.getSidecarEnabled();
    }

    setSidecarEnabled(enabled: boolean): void {
        this.db.setSidecarEnabled(enabled);
    }

    getId3Enabled(): boolean {
        return this.db.getId3Enabled();
    }

    setId3Enabled(enabled: boolean): void {
        this.db.setId3Enabled(enabled);
    }

    getSpeedLimit(): number { return this.db.getSpeedLimit(); }
    setSpeedLimit(kbps: number): void { this.db.setSpeedLimit(kbps); }

    // ── OPML ─────────────────────────────────────────────────

    async importOPML(xmlContent: string): Promise<number> {
        const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: "" });
        const result = parser.parse(xmlContent);

        let count = 0;

        interface OPMLNode {
            xmlUrl?: string;
            text?: string;
            title?: string;
            outline?: OPMLNode | OPMLNode[];
        }

        const traverse = (node: OPMLNode | OPMLNode[]) => {
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
