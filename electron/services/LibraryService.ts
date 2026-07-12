import { XMLParser, XMLBuilder } from 'fast-xml-parser';
import { DatabaseService } from './DatabaseService';
import { hasDangerousDoctype } from '../utils/xmlSafety';
import { validateUrl } from '../utils/validateUrl';
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

    /** True when the on-disk DB was damaged and replaced at startup. */
    get wasRecovered(): boolean {
        return this.db.recoveredFromError;
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

    hasFeed(url: string): boolean {
        return this.db.hasFeed(url);
    }

    getFeedValidators(url: string): { etag?: string; lastModified?: string } | null {
        return this.db.getFeedValidators(url);
    }

    setFeedValidators(url: string, etag?: string, lastModified?: string): void {
        this.db.setFeedValidators(url, etag, lastModified);
    }

    /** L4: close the database on app shutdown. */
    close(): void {
        this.db.close();
    }

    touchFeed(url: string, lastUpdated: string): void {
        this.db.touchFeed(url, lastUpdated);
    }

    updateEpisodeCount(url: string, count: number): void {
        this.db.updateEpisodeCount(url, count);
    }

    // ── Downloads ────────────────────────────────────────────

    getDownloadedEpisodes(feedUrl?: string): string[] {
        return this.db.getDownloadedEpisodes(feedUrl);
    }

    markAsDownloaded(guid: string, feedUrl = ''): void {
        this.db.markAsDownloaded(guid, feedUrl);
    }

    isDownloaded(guid: string, feedUrl = ''): boolean {
        return this.db.isDownloaded(guid, feedUrl);
    }

    removeDownloadedEpisode(guid: string): void {
        this.db.removeDownloadedEpisode(guid);
    }

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

    recordDownload(entry: ArchiveEntry): void {
        this.db.recordDownload(entry);
    }

    exportArchiveCSV(): string {
        return this.db.exportArchiveCSV();
    }

    getArchive(): ArchiveEntry[] {
        return this.db.getArchive();
    }

    getArchiveByPodcast(podcastTitle: string): ArchiveEntry[] {
        return this.db.getArchiveByPodcast(podcastTitle);
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

    getAutoRefreshInterval(): number { return this.db.getAutoRefreshInterval(); }
    setAutoRefreshInterval(hours: number): void { this.db.setAutoRefreshInterval(hours); }
    getEpisodeCount(url: string): number | null { return this.db.getEpisodeCount(url); }

    // ── Known Episodes (F3-fix) ──────────────────────────────
    getKnownGuids(feedUrl: string): Set<string> { return this.db.getKnownGuids(feedUrl); }
    markGuidsAsKnown(feedUrl: string, guids: string[]): void { this.db.markGuidsAsKnown(feedUrl, guids); }
    findNewGuids(feedUrl: string, currentGuids: string[]): string[] { return this.db.findNewGuids(feedUrl, currentGuids); }
    removeKnownEpisodes(feedUrl: string): void { this.db.removeKnownEpisodes(feedUrl); }

    // ── OPML ─────────────────────────────────────────────────

    async importOPML(xmlContent: string): Promise<number> {
        // M4: refuse OPML with a DOCTYPE entity definition (XXE / entity expansion).
        if (hasDangerousDoctype(xmlContent)) {
            throw new Error('INVALID_OPML: File contains a disallowed DOCTYPE declaration.');
        }
        const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: "" });
        const result = parser.parse(xmlContent);

        interface OPMLNode {
            xmlUrl?: string;
            text?: string;
            title?: string;
            outline?: OPMLNode | OPMLNode[];
        }

        // L2: collect first, then validate + bulk-insert in one transaction.
        // A cap keeps a hostile OPML from flooding the library.
        const MAX_OPML_FEEDS = 2000;
        const collected: FeedEntry[] = [];

        const traverse = (node: OPMLNode | OPMLNode[]) => {
            if (collected.length >= MAX_OPML_FEEDS) return;
            if (Array.isArray(node)) {
                node.forEach(child => traverse(child));
            } else if (typeof node === 'object') {
                // Only http(s) URLs that pass the same SSRF pre-check as manual
                // input — file:// or internal hosts must not enter the library.
                if (node.xmlUrl && validateUrl(node.xmlUrl).valid) {
                    collected.push({
                        url: node.xmlUrl,
                        title: node.text || node.title || 'Imported Feed',
                        lastUpdated: new Date().toISOString()
                    });
                }

                if (node.outline) {
                    traverse(node.outline);
                }
            }
        }

        if (result.opml && result.opml.body && result.opml.body.outline) {
            traverse(result.opml.body.outline);
        }

        this.db.addFeedsBulk(collected);
        return collected.length;
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
