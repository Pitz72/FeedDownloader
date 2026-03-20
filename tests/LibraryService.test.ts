import { describe, it, expect, beforeEach, vi } from 'vitest';
import { LibraryService } from '../electron/services/LibraryService';
import { DatabaseService } from '../electron/services/DatabaseService';

// Mock electron's app module
vi.mock('electron', () => ({
    app: { getPath: () => '/tmp' }
}));

describe('LibraryService', () => {
    let service: LibraryService;

    beforeEach(() => {
        // Inject in-memory DatabaseService for isolation
        const db = new DatabaseService(':memory:');
        service = new LibraryService(db);
    });

    // ── Feeds CRUD ───────────────────────────────────────────
    describe('Feeds CRUD', () => {
        it('should return empty array when no feeds exist', () => {
            expect(service.getFeeds()).toEqual([]);
        });

        it('should add a feed', () => {
            service.addFeed({ url: 'https://example.com/rss', title: 'Test Pod' });
            const feeds = service.getFeeds();
            expect(feeds).toHaveLength(1);
            expect(feeds[0].url).toBe('https://example.com/rss');
        });

        it('should not add duplicate feeds', () => {
            service.addFeed({ url: 'https://example.com/rss', title: 'First' });
            service.addFeed({ url: 'https://example.com/rss', title: 'Duplicate' });
            expect(service.getFeeds()).toHaveLength(1);
        });

        it('should add multiple feeds with different URLs', () => {
            service.addFeed({ url: 'https://a.com/rss', title: 'A' });
            service.addFeed({ url: 'https://b.com/rss', title: 'B' });
            service.addFeed({ url: 'https://c.com/rss', title: 'C' });
            expect(service.getFeeds()).toHaveLength(3);
        });

        it('should remove a feed by URL', () => {
            service.addFeed({ url: 'https://a.com/rss', title: 'A' });
            service.addFeed({ url: 'https://b.com/rss', title: 'B' });
            service.removeFeed('https://a.com/rss');
            const feeds = service.getFeeds();
            expect(feeds).toHaveLength(1);
            expect(feeds[0].title).toBe('B');
        });

        it('should not crash when removing a non-existing feed', () => {
            service.removeFeed('https://nonexistent.com');
            expect(service.getFeeds()).toEqual([]);
        });
    });

    // ── Downloads ────────────────────────────────────────────
    describe('Downloads', () => {
        it('should return empty array when no downloads', () => {
            expect(service.getDownloadedEpisodes()).toEqual([]);
        });

        it('should mark a GUID as downloaded', () => {
            service.markAsDownloaded('episode-guid-1');
            expect(service.getDownloadedEpisodes()).toContain('episode-guid-1');
        });

        it('should not duplicate GUIDs', () => {
            service.markAsDownloaded('guid-1');
            service.markAsDownloaded('guid-1');
            expect(service.getDownloadedEpisodes()).toHaveLength(1);
        });

        it('should remove a single downloaded episode', () => {
            service.markAsDownloaded('guid-1');
            service.markAsDownloaded('guid-2');
            service.removeDownloadedEpisode('guid-1');
            const eps = service.getDownloadedEpisodes();
            expect(eps).toHaveLength(1);
            expect(eps).not.toContain('guid-1');
        });

        it('should reset the entire download history', () => {
            service.markAsDownloaded('guid-1');
            service.markAsDownloaded('guid-2');
            service.resetDownloadHistory();
            expect(service.getDownloadedEpisodes()).toEqual([]);
        });
    });

    // ── Archive & CSV ────────────────────────────────────────
    describe('Archive', () => {
        it('should add an archive entry', () => {
            service.addArchiveEntry({ guid: 'g1', podcastTitle: 'P', title: 'E', pubDate: '2024-01', downloadedAt: '2024-02' });
            const csv = service.exportArchiveCSV();
            expect(csv).toContain('P');
            expect(csv).toContain('E');
        });

        it('should not duplicate archive entries', () => {
            const entry = { guid: 'g1', podcastTitle: 'P', title: 'E', pubDate: '2024', downloadedAt: '2024' };
            service.addArchiveEntry(entry);
            service.addArchiveEntry(entry);
            // CSV should contain exactly one data row
            const lines = service.exportArchiveCSV().trim().split('\n');
            expect(lines).toHaveLength(2); // header + 1 data row
        });

        it('should remove archive entry when removing a download', () => {
            service.markAsDownloaded('g1');
            service.addArchiveEntry({ guid: 'g1', podcastTitle: 'P', title: 'E', pubDate: '2024', downloadedAt: '2024' });
            service.removeDownloadedEpisode('g1');
            const lines = service.exportArchiveCSV().trim().split('\n');
            expect(lines).toHaveLength(1); // header only
        });

        it('should reset archive with download history', () => {
            service.addArchiveEntry({ guid: 'g1', podcastTitle: 'P', title: 'E', pubDate: '2024', downloadedAt: '2024' });
            service.resetDownloadHistory();
            const lines = service.exportArchiveCSV().trim().split('\n');
            expect(lines).toHaveLength(1); // header only
        });

        it('should export CSV with escaped double-quotes', () => {
            service.addArchiveEntry({ guid: 'g1', podcastTitle: 'The "Test" Show', title: 'Ep "1"', pubDate: '2024', downloadedAt: '2024' });
            const csv = service.exportArchiveCSV();
            expect(csv).toContain('The ""Test"" Show');
            expect(csv).toContain('Ep ""1""');
        });

        it('should export empty CSV with just headers', () => {
            const csv = service.exportArchiveCSV();
            expect(csv).toContain('Podcast,Episode Title');
            expect(csv.trim().split('\n')).toHaveLength(1);
        });
    });

    // ── Archive Stats ────────────────────────────────────────
    describe('Archive Stats', () => {
        it('should return zeros for empty archive', () => {
            const stats = service.getArchiveStats();
            expect(stats).toEqual({ totalFiles: 0, totalPodcasts: 0, oldestDate: null, newestDate: null });
        });

        it('should count distinct podcasts', () => {
            service.addArchiveEntry({ guid: 'g1', podcastTitle: 'Pod A', title: 'E1', pubDate: '2024', downloadedAt: '2024-01' });
            service.addArchiveEntry({ guid: 'g2', podcastTitle: 'Pod B', title: 'E2', pubDate: '2024', downloadedAt: '2024-02' });
            service.addArchiveEntry({ guid: 'g3', podcastTitle: 'Pod A', title: 'E3', pubDate: '2024', downloadedAt: '2024-03' });
            const stats = service.getArchiveStats();
            expect(stats.totalFiles).toBe(3);
            expect(stats.totalPodcasts).toBe(2);
        });

        it('should find oldest and newest dates', () => {
            service.addArchiveEntry({ guid: 'g1', podcastTitle: 'P', title: 'E1', pubDate: '2024', downloadedAt: '2024-01-01T00:00:00Z' });
            service.addArchiveEntry({ guid: 'g2', podcastTitle: 'P', title: 'E2', pubDate: '2024', downloadedAt: '2024-12-31T00:00:00Z' });
            const stats = service.getArchiveStats();
            expect(stats.oldestDate).toBe('2024-01-01T00:00:00Z');
            expect(stats.newestDate).toBe('2024-12-31T00:00:00Z');
        });
    });

    // ── Concurrency ──────────────────────────────────────────
    describe('Concurrency', () => {
        it('should default to 3', () => {
            expect(service.getConcurrency()).toBe(3);
        });

        it('should set concurrency within limits', () => {
            service.setConcurrency(7);
            expect(service.getConcurrency()).toBe(7);
        });

        it('should clamp to minimum 1', () => {
            service.setConcurrency(0);
            expect(service.getConcurrency()).toBe(1);
        });

        it('should clamp to maximum 10', () => {
            service.setConcurrency(99);
            expect(service.getConcurrency()).toBe(10);
        });
    });

    // ── Download Path ────────────────────────────────────────
    describe('Download Path', () => {
        it('should return empty string by default', () => {
            expect(service.getDownloadPath()).toBe('');
        });

        it('should set and get download path', () => {
            service.setDownloadPath('/my/podcasts');
            expect(service.getDownloadPath()).toBe('/my/podcasts');
        });
    });

    // ── OPML ─────────────────────────────────────────────────
    describe('OPML', () => {
        it('should import feeds from OPML with nested outlines', async () => {
            const opml = `<?xml version="1.0"?>
                <opml version="2.0">
                <body>
                    <outline text="Tech" title="Tech">
                        <outline text="Pod A" xmlUrl="https://a.com/rss" />
                        <outline text="Pod B" xmlUrl="https://b.com/rss" />
                    </outline>
                    <outline text="Pod C" xmlUrl="https://c.com/rss" />
                </body></opml>`;
            const count = await service.importOPML(opml);
            expect(count).toBe(3);
            expect(service.getFeeds()).toHaveLength(3);
        });

        it('should not duplicate feeds on re-import', async () => {
            const opml = `<opml version="2.0"><body><outline text="P" xmlUrl="https://a.com/rss" /></body></opml>`;
            await service.importOPML(opml);
            await service.importOPML(opml);
            expect(service.getFeeds()).toHaveLength(1);
        });

        it('should export all feeds as OPML', () => {
            service.addFeed({ url: 'https://a.com/rss', title: 'Alpha' });
            service.addFeed({ url: 'https://b.com/rss', title: 'Beta' });
            const opml = service.exportOPML();
            expect(opml).toContain('xmlUrl');
            expect(opml).toContain('Alpha');
            expect(opml).toContain('Beta');
        });

        it('should handle empty export gracefully', () => {
            const opml = service.exportOPML();
            expect(opml).toContain('opml');
        });
    });
});
