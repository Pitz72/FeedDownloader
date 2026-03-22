import { describe, it, expect, beforeEach, vi } from 'vitest';
import { DatabaseService } from '../electron/services/DatabaseService';

// Mock electron's app module to avoid needing the real Electron runtime
vi.mock('electron', () => ({
    app: { getPath: () => '/tmp' }
}));

describe('DatabaseService', () => {
    let db: DatabaseService;

    beforeEach(() => {
        // Use in-memory SQLite for tests — fast, isolated, no cleanup needed
        db = new DatabaseService(':memory:');
    });

    // ── Feeds CRUD ───────────────────────────────────────────
    describe('Feeds', () => {
        it('should return empty array when no feeds', () => {
            expect(db.getFeeds()).toEqual([]);
        });

        it('should add and retrieve a feed', () => {
            db.addFeed({ url: 'https://example.com/feed', title: 'Test' });
            const feeds = db.getFeeds();
            expect(feeds).toHaveLength(1);
            expect(feeds[0].url).toBe('https://example.com/feed');
            expect(feeds[0].title).toBe('Test');
        });

        it('should ignore duplicate feeds (same URL)', () => {
            db.addFeed({ url: 'https://example.com/feed', title: 'First' });
            db.addFeed({ url: 'https://example.com/feed', title: 'Second' });
            expect(db.getFeeds()).toHaveLength(1);
        });

        it('should store image as string', () => {
            db.addFeed({ url: 'https://a.com/f', title: 'T', image: 'https://img.com/pic.jpg' });
            expect(db.getFeeds()[0].image).toBe('https://img.com/pic.jpg');
        });

        it('should extract URL from image object', () => {
            db.addFeed({ url: 'https://a.com/f', title: 'T', image: { url: 'https://img.com/pic.jpg' } });
            expect(db.getFeeds()[0].image).toBe('https://img.com/pic.jpg');
        });

        it('should remove a feed by URL', () => {
            db.addFeed({ url: 'https://a.com/1', title: 'A' });
            db.addFeed({ url: 'https://a.com/2', title: 'B' });
            db.removeFeed('https://a.com/1');
            const feeds = db.getFeeds();
            expect(feeds).toHaveLength(1);
            expect(feeds[0].url).toBe('https://a.com/2');
        });

        it('should handle removing non-existent feed gracefully', () => {
            db.removeFeed('https://nonexistent.com/feed');
            expect(db.getFeeds()).toEqual([]);
        });
    });

    // ── Downloads ────────────────────────────────────────────
    describe('Downloads', () => {
        it('should return empty array when no downloads', () => {
            expect(db.getDownloadedEpisodes()).toEqual([]);
        });

        it('should mark a GUID as downloaded', () => {
            db.markAsDownloaded('guid-1');
            expect(db.getDownloadedEpisodes()).toContain('guid-1');
        });

        it('should not duplicate GUIDs', () => {
            db.markAsDownloaded('guid-1');
            db.markAsDownloaded('guid-1');
            expect(db.getDownloadedEpisodes()).toHaveLength(1);
        });

        it('should check if downloaded', () => {
            db.markAsDownloaded('guid-1');
            expect(db.isDownloaded('guid-1')).toBe(true);
            expect(db.isDownloaded('guid-2')).toBe(false);
        });

        it('should remove a single downloaded episode and its archive entry', () => {
            db.markAsDownloaded('guid-1');
            db.addArchiveEntry({ guid: 'guid-1', podcastTitle: 'P', title: 'E', pubDate: '2024-01-01', downloadedAt: '2024-01-02' });
            db.removeDownloadedEpisode('guid-1');
            expect(db.getDownloadedEpisodes()).toEqual([]);
            expect(db.getArchive()).toEqual([]);
        });

        it('should reset all download history and archive', () => {
            db.markAsDownloaded('guid-1');
            db.markAsDownloaded('guid-2');
            db.addArchiveEntry({ guid: 'guid-1', podcastTitle: 'P', title: 'E', pubDate: '2024-01-01', downloadedAt: '2024-01-02' });
            db.resetDownloadHistory();
            expect(db.getDownloadedEpisodes()).toEqual([]);
            expect(db.getArchive()).toEqual([]);
        });
    });

    // ── Archive ──────────────────────────────────────────────
    describe('Archive', () => {
        it('should add an archive entry', () => {
            db.addArchiveEntry({ guid: 'g1', podcastTitle: 'Pod', title: 'Ep1', pubDate: '2024-01', downloadedAt: '2024-02' });
            expect(db.getArchive()).toHaveLength(1);
        });

        it('should not duplicate archive entries', () => {
            const entry = { guid: 'g1', podcastTitle: 'P', title: 'E', pubDate: '2024-01', downloadedAt: '2024-02' };
            db.addArchiveEntry(entry);
            db.addArchiveEntry(entry);
            expect(db.getArchive()).toHaveLength(1);
        });

        it('should export CSV with correct headers', () => {
            const csv = db.exportArchiveCSV();
            expect(csv).toContain('Podcast,Episode Title,Publish Date,Downloaded At,GUID');
        });

        it('should export CSV with escaped quotes', () => {
            db.addArchiveEntry({ guid: 'g1', podcastTitle: 'The "Great" Show', title: 'Ep "One"', pubDate: '2024', downloadedAt: '2024' });
            const csv = db.exportArchiveCSV();
            expect(csv).toContain('The ""Great"" Show');
            expect(csv).toContain('Ep ""One""');
        });
    });

    // ── Archive Stats ────────────────────────────────────────
    describe('Archive Stats', () => {
        it('should return zero stats for empty archive', () => {
            const stats = db.getArchiveStats();
            expect(stats).toEqual({ totalFiles: 0, totalPodcasts: 0, oldestDate: null, newestDate: null });
        });

        it('should count distinct podcasts', () => {
            db.addArchiveEntry({ guid: 'g1', podcastTitle: 'Pod A', title: 'E1', pubDate: '2024', downloadedAt: '2024-01' });
            db.addArchiveEntry({ guid: 'g2', podcastTitle: 'Pod B', title: 'E2', pubDate: '2024', downloadedAt: '2024-02' });
            db.addArchiveEntry({ guid: 'g3', podcastTitle: 'Pod A', title: 'E3', pubDate: '2024', downloadedAt: '2024-03' });
            const stats = db.getArchiveStats();
            expect(stats.totalFiles).toBe(3);
            expect(stats.totalPodcasts).toBe(2);
        });

        it('should find oldest and newest dates', () => {
            db.addArchiveEntry({ guid: 'g1', podcastTitle: 'P', title: 'E1', pubDate: '2024', downloadedAt: '2024-01-01T00:00:00Z' });
            db.addArchiveEntry({ guid: 'g2', podcastTitle: 'P', title: 'E2', pubDate: '2024', downloadedAt: '2024-06-15T00:00:00Z' });
            const stats = db.getArchiveStats();
            expect(stats.oldestDate).toBe('2024-01-01T00:00:00Z');
            expect(stats.newestDate).toBe('2024-06-15T00:00:00Z');
        });
    });

    // ── Settings ─────────────────────────────────────────────
    describe('Settings', () => {
        it('should return empty string for unset download path', () => {
            expect(db.getDownloadPath()).toBe('');
        });

        it('should set and get download path', () => {
            db.setDownloadPath('/my/downloads');
            expect(db.getDownloadPath()).toBe('/my/downloads');
        });

        it('should return default concurrency of 3', () => {
            expect(db.getConcurrency()).toBe(3);
        });

        it('should set concurrency within limits', () => {
            db.setConcurrency(5);
            expect(db.getConcurrency()).toBe(5);
        });

        it('should clamp concurrency to minimum 1', () => {
            db.setConcurrency(0);
            expect(db.getConcurrency()).toBe(1);
        });

        it('should clamp concurrency to maximum 10', () => {
            db.setConcurrency(99);
            expect(db.getConcurrency()).toBe(10);
        });

        it('should set and get arbitrary settings', () => {
            db.setSetting('theme', 'dark');
            expect(db.getSetting('theme')).toBe('dark');
        });

        it('should return null for unset setting', () => {
            expect(db.getSetting('nonexistent')).toBeNull();
        });
    });
});
