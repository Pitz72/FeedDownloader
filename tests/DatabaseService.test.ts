import { describe, it, expect, beforeEach, vi } from 'vitest';
import { DatabaseService } from '../electron/services/DatabaseService';
import path from 'node:path';
import os from 'node:os';
import fs from 'node:fs';

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

        // B6 — newCount correlated by feedUrl, not by shared title
        it('should count downloaded episodes per feed by feedUrl, not shared title', () => {
            db.addFeed({ url: 'https://a.com/feed', title: 'Daily News' });
            db.addFeed({ url: 'https://b.com/feed', title: 'Daily News' }); // same title!
            db.updateEpisodeCount('https://a.com/feed', 10);
            db.updateEpisodeCount('https://b.com/feed', 5);
            // 3 downloads, all from feed A
            ['a1', 'a2', 'a3'].forEach(g =>
                db.addArchiveEntry({ guid: g, podcastTitle: 'Daily News', title: g, pubDate: '', downloadedAt: '', feedUrl: 'https://a.com/feed' }));

            const feeds = db.getFeeds();
            const a = feeds.find(f => f.url === 'https://a.com/feed');
            const b = feeds.find(f => f.url === 'https://b.com/feed');
            expect(a?.newCount).toBe(7); // 10 - 3
            expect(b?.newCount).toBe(5); // 5 - 0 (NOT 5 - 3, the old title-based bug)
        });

        it('should fall back to title for legacy archive rows without feedUrl', () => {
            db.addFeed({ url: 'https://a.com/feed', title: 'Show' });
            db.updateEpisodeCount('https://a.com/feed', 4);
            db.addArchiveEntry({ guid: 'g1', podcastTitle: 'Show', title: 'x', pubDate: '', downloadedAt: '' }); // no feedUrl
            expect(db.getFeeds()[0].newCount).toBe(3); // 4 - 1 via title fallback
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

        it('should scope removeDownloadedEpisode by feedUrl (S6 composite key)', () => {
            // Two feeds share the GUID "1" — removing it from feed A must not touch B.
            db.recordDownload({ guid: '1', podcastTitle: 'A', title: 'EA', pubDate: '', downloadedAt: '', feedUrl: 'fa' });
            db.recordDownload({ guid: '1', podcastTitle: 'B', title: 'EB', pubDate: '', downloadedAt: '', feedUrl: 'fb' });
            db.removeDownloadedEpisode('1', 'fa');
            expect(db.isDownloaded('1', 'fa')).toBe(false);
            expect(db.isDownloaded('1', 'fb')).toBe(true);
            expect(db.getArchive().map(r => r.feedUrl)).toEqual(['fb']);
        });

        it('should scope removeMissingFiles by feedUrl when composite keys are given', () => {
            db.recordDownload({ guid: '1', podcastTitle: 'A', title: 'EA', pubDate: '', downloadedAt: '', feedUrl: 'fa' });
            db.recordDownload({ guid: '1', podcastTitle: 'B', title: 'EB', pubDate: '', downloadedAt: '', feedUrl: 'fb' });
            db.removeMissingFiles([{ guid: '1', feedUrl: 'fa' }]);
            expect(db.isDownloaded('1', 'fa')).toBe(false);
            expect(db.isDownloaded('1', 'fb')).toBe(true);
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
            // v0.7.4: extended header with integrity columns (size/bitrate/sample rate/checksum/status)
            expect(csv).toContain('Podcast,Episode Title,Publish Date,Downloaded At,File Size (bytes),Bitrate (kbps),Sample Rate (Hz),SHA-256 Checksum,Validation Status,GUID');
        });

        it('should export CSV with escaped quotes', () => {
            db.addArchiveEntry({ guid: 'g1', podcastTitle: 'The "Great" Show', title: 'Ep "One"', pubDate: '2024', downloadedAt: '2024' });
            const csv = db.exportArchiveCSV();
            expect(csv).toContain('The ""Great"" Show');
            expect(csv).toContain('Ep ""One""');
        });

        // ── Guided archive repair (v1.5.0) ───────────────────
        describe('updateArchiveFilename', () => {
            it('re-links the filename of a feed-scoped entry', () => {
                db.addArchiveEntry({ guid: 'g1', podcastTitle: 'P', title: 'E', pubDate: '2024', downloadedAt: '2024', filename: 'old.mp3', feedUrl: 'https://a.com/feed' });
                db.updateArchiveFilename('g1', 'https://a.com/feed', 'renamed.mp3');
                expect(db.getArchive()[0].filename).toBe('renamed.mp3');
            });

            it('does not touch an entry with the same guid on a different feed', () => {
                db.addArchiveEntry({ guid: 'g1', podcastTitle: 'A', title: 'E', pubDate: '2024', downloadedAt: '2024', filename: 'a.mp3', feedUrl: 'https://a.com/feed' });
                db.addArchiveEntry({ guid: 'g1', podcastTitle: 'B', title: 'E', pubDate: '2024', downloadedAt: '2024', filename: 'b.mp3', feedUrl: 'https://b.com/feed' });
                db.updateArchiveFilename('g1', 'https://a.com/feed', 'renamed.mp3');
                const files = db.getArchive().map(e => e.filename).sort();
                expect(files).toEqual(['b.mp3', 'renamed.mp3']);
            });

            it('falls back to guid-only for legacy entries without feedUrl', () => {
                db.addArchiveEntry({ guid: 'g1', podcastTitle: 'P', title: 'E', pubDate: '2024', downloadedAt: '2024', filename: 'old.mp3' });
                db.updateArchiveFilename('g1', undefined, 'renamed.mp3');
                expect(db.getArchive()[0].filename).toBe('renamed.mp3');
            });
        });
    });

    // ── Guided DB restore (v1.5.0) ───────────────────────────
    describe('Guided DB restore', () => {
        it('isEmpty is true for a fresh DB and false once any data exists', () => {
            expect(db.isEmpty()).toBe(true);
            db.addFeed({ url: 'https://a.com/feed', title: 'A' });
            expect(db.isEmpty()).toBe(false);
        });

        it('salvages feeds, archive, downloads and settings from another DB file', () => {
            const tmp = path.join(os.tmpdir(), `fd-salvage-${Date.now()}-${Math.random().toString(36).slice(2)}.sqlite`);
            const src = new DatabaseService(tmp);
            try {
                src.addFeed({ url: 'https://a.com/feed', title: 'Pod A', image: 'https://img/a.png' });
                src.recordDownload({
                    guid: 'g1', podcastTitle: 'Pod A', title: 'Ep 1', pubDate: '2026-01-01',
                    downloadedAt: '2026-01-02', filename: 'ep1.mp3', feedUrl: 'https://a.com/feed',
                    fileSize: 123, checksum: 'abc',
                });
                src.setDownloadPath('/some/path');
                src.close();

                const result = db.salvageFromCorrupt(tmp);
                expect(result.feeds).toBe(1);
                expect(result.archive).toBe(1);
                expect(result.downloads).toBe(1);
                expect(result.settings).toBeGreaterThanOrEqual(1);

                expect(db.getFeeds()[0].url).toBe('https://a.com/feed');
                const entry = db.getArchive()[0];
                expect(entry.guid).toBe('g1');
                expect(entry.filename).toBe('ep1.mp3');
                expect(entry.checksum).toBe('abc');
                expect(db.isEmpty()).toBe(false);
            } finally {
                for (const suffix of ['', '-wal', '-shm']) {
                    try { fs.unlinkSync(tmp + suffix); } catch { /* not created */ }
                }
            }
        });

        it('does not overwrite rows already present in the target DB', () => {
            const tmp = path.join(os.tmpdir(), `fd-salvage-${Date.now()}-${Math.random().toString(36).slice(2)}.sqlite`);
            const src = new DatabaseService(tmp);
            try {
                src.addFeed({ url: 'https://a.com/feed', title: 'Old Title' });
                src.close();

                db.addFeed({ url: 'https://a.com/feed', title: 'Current Title' });
                const result = db.salvageFromCorrupt(tmp);
                expect(result.feeds).toBe(0); // INSERT OR IGNORE — existing row wins
                expect(db.getFeeds()[0].title).toBe('Current Title');
            } finally {
                for (const suffix of ['', '-wal', '-shm']) {
                    try { fs.unlinkSync(tmp + suffix); } catch { /* not created */ }
                }
            }
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

    // ── M10: rolling-window-safe badge count ─────────────────
    describe('newCount from currentEpisodeGuids (M10)', () => {
        const url = 'https://ex.com/feed';

        it('counts current-window guids not yet downloaded', () => {
            db.addFeed({ url, title: 'Feed' });
            db.setCurrentEpisodeGuids(url, ['a', 'b', 'c']);
            db.markAsDownloaded('a', url);
            expect(db.getFeeds()[0].newCount).toBe(2);
        });

        it('is 0 when every current episode is downloaded', () => {
            db.addFeed({ url, title: 'Feed' });
            db.setCurrentEpisodeGuids(url, ['a', 'b']);
            db.markAsDownloaded('a', url);
            db.markAsDownloaded('b', url);
            expect(db.getFeeds()[0].newCount).toBe(0);
        });

        it('does not go negative when downloads fell out of the rolling window', () => {
            // window is [c, d]; a and b were downloaded long ago but rolled off
            db.addFeed({ url, title: 'Feed' });
            db.setCurrentEpisodeGuids(url, ['c', 'd']);
            db.markAsDownloaded('a', url);
            db.markAsDownloaded('b', url);
            db.markAsDownloaded('c', url);
            // only d is new (c downloaded); the stale a/b must not distort it
            expect(db.getFeeds()[0].newCount).toBe(1);
        });

        it('treats legacy feedUrl="" downloads as matching any feed', () => {
            db.addFeed({ url, title: 'Feed' });
            db.setCurrentEpisodeGuids(url, ['a', 'b']);
            db.markAsDownloaded('a', ''); // legacy row
            expect(db.getFeeds()[0].newCount).toBe(1);
        });

        it('falls back to episodeCount − downloaded when no current guids stored', () => {
            db.addFeed({ url, title: 'Feed' });
            db.updateEpisodeCount(url, 5);
            // no setCurrentEpisodeGuids → legacy path
            expect(db.getFeeds()[0].newCount).toBe(5);
        });
    });

    // ── L3: permanent-redirect feed URL migration ────────────
    describe('updateFeedUrl (L3)', () => {
        const oldUrl = 'https://old.com/feed';
        const newUrl = 'https://new.com/feed';

        it('re-points the feed and carries downloads/archive/known across', () => {
            db.addFeed({ url: oldUrl, title: 'Feed' });
            db.markAsDownloaded('g1', oldUrl);
            db.recordDownload({ guid: 'g1', feedUrl: oldUrl, podcastTitle: 'Feed', title: 'E1', pubDate: '', downloadedAt: '' });
            db.markGuidsAsKnown(oldUrl, ['g1', 'g2']);

            expect(db.updateFeedUrl(oldUrl, newUrl)).toBe(true);

            expect(db.hasFeed(oldUrl)).toBe(false);
            expect(db.hasFeed(newUrl)).toBe(true);
            expect(db.isDownloaded('g1', newUrl)).toBe(true);
            expect(db.getKnownGuids(newUrl).has('g2')).toBe(true);
            expect(db.getKnownGuids(oldUrl).size).toBe(0);
        });

        it('refuses to migrate onto an already-existing feed', () => {
            db.addFeed({ url: oldUrl, title: 'A' });
            db.addFeed({ url: newUrl, title: 'B' });
            expect(db.updateFeedUrl(oldUrl, newUrl)).toBe(false);
            expect(db.hasFeed(oldUrl)).toBe(true);
        });

        it('is a no-op for unknown or identical URLs', () => {
            expect(db.updateFeedUrl('https://missing.com/f', newUrl)).toBe(false);
            db.addFeed({ url: oldUrl, title: 'A' });
            expect(db.updateFeedUrl(oldUrl, oldUrl)).toBe(false);
        });
    });

    // ── Known Episodes (F3-fix) ──────────────────────────────
    describe('Known Episodes', () => {
        const feed = 'https://a.com/f';

        it('starts with no known guids for a feed', () => {
            expect(db.getKnownGuids(feed).size).toBe(0);
        });

        it('marks and retrieves known guids', () => {
            db.markGuidsAsKnown(feed, ['a', 'b', 'c']);
            const known = db.getKnownGuids(feed);
            expect(known.has('a')).toBe(true);
            expect(known.has('c')).toBe(true);
            expect(known.size).toBe(3);
        });

        it('markGuidsAsKnown is idempotent (INSERT OR IGNORE)', () => {
            db.markGuidsAsKnown(feed, ['a', 'b']);
            db.markGuidsAsKnown(feed, ['b', 'c']);
            expect(db.getKnownGuids(feed).size).toBe(3);
        });

        it('no-ops on an empty guid list', () => {
            db.markGuidsAsKnown(feed, []);
            expect(db.getKnownGuids(feed).size).toBe(0);
        });

        it('findNewGuids returns only guids not yet known', () => {
            db.markGuidsAsKnown(feed, ['a', 'b']);
            expect(db.findNewGuids(feed, ['a', 'b', 'c', 'd'])).toEqual(['c', 'd']);
        });

        it('findNewGuids returns [] for an empty input', () => {
            expect(db.findNewGuids(feed, [])).toEqual([]);
        });

        it('findNewGuids ignores falsy guids', () => {
            db.markGuidsAsKnown(feed, ['a']);
            expect(db.findNewGuids(feed, ['', 'a', 'b'])).toEqual(['b']);
        });

        it('scopes known guids per feed', () => {
            db.markGuidsAsKnown('https://a.com/1', ['x']);
            db.markGuidsAsKnown('https://a.com/2', ['y']);
            expect(db.getKnownGuids('https://a.com/1').has('y')).toBe(false);
            expect(db.findNewGuids('https://a.com/2', ['x', 'y'])).toEqual(['x']);
        });

        it('removeKnownEpisodes clears only the given feed', () => {
            db.markGuidsAsKnown('https://a.com/1', ['x']);
            db.markGuidsAsKnown('https://a.com/2', ['y']);
            db.removeKnownEpisodes('https://a.com/1');
            expect(db.getKnownGuids('https://a.com/1').size).toBe(0);
            expect(db.getKnownGuids('https://a.com/2').size).toBe(1);
        });
    });

    // ── getArchiveByPodcast ──────────────────────────────────
    describe('getArchiveByPodcast', () => {
        it('returns only entries for the given podcast, newest pubDate first', () => {
            db.addArchiveEntry({ guid: 'g1', podcastTitle: 'Pod A', title: 'Old', pubDate: '2024-01-01', downloadedAt: '2024-02' });
            db.addArchiveEntry({ guid: 'g2', podcastTitle: 'Pod A', title: 'New', pubDate: '2024-06-01', downloadedAt: '2024-02' });
            db.addArchiveEntry({ guid: 'g3', podcastTitle: 'Pod B', title: 'Other', pubDate: '2024-03-01', downloadedAt: '2024-02' });
            const rows = db.getArchiveByPodcast('Pod A');
            expect(rows.map(r => r.title)).toEqual(['New', 'Old']);
        });

        it('returns [] for an unknown podcast', () => {
            expect(db.getArchiveByPodcast('Nope')).toEqual([]);
        });
    });

    // ── removeMissingFiles ───────────────────────────────────
    describe('removeMissingFiles', () => {
        it('removes downloads and archive rows for the given guids', () => {
            db.recordDownload({ guid: 'g1', podcastTitle: 'P', title: 'E1', pubDate: '', downloadedAt: '', feedUrl: 'f' });
            db.recordDownload({ guid: 'g2', podcastTitle: 'P', title: 'E2', pubDate: '', downloadedAt: '', feedUrl: 'f' });
            db.removeMissingFiles(['g1']);
            expect(db.isDownloaded('g1', 'f')).toBe(false);
            expect(db.isDownloaded('g2', 'f')).toBe(true);
            expect(db.getArchive().map(r => r.guid)).toEqual(['g2']);
        });

        it('ignores non-string entries and no-ops on an empty list', () => {
            db.recordDownload({ guid: 'g1', podcastTitle: 'P', title: 'E1', pubDate: '', downloadedAt: '', feedUrl: 'f' });
            // @ts-expect-error — exercising the runtime guard against bad payloads
            db.removeMissingFiles([null, 123, '', undefined]);
            expect(db.isDownloaded('g1', 'f')).toBe(true);
        });

        it('handles more than one chunk (>500 guids) in a single call', () => {
            const guids = Array.from({ length: 1200 }, (_, i) => `g${i}`);
            for (const g of guids) db.recordDownload({ guid: g, podcastTitle: 'P', title: g, pubDate: '', downloadedAt: '', feedUrl: 'f' });
            expect(db.getArchive()).toHaveLength(1200);
            db.removeMissingFiles(guids);
            expect(db.getArchive()).toHaveLength(0);
            expect(db.getDownloadedEpisodes('f')).toEqual([]);
        });
    });

    // ── touchFeed ────────────────────────────────────────────
    describe('touchFeed', () => {
        it('updates lastUpdated for an existing feed', () => {
            db.addFeed({ url: 'https://a.com/f', title: 'A', lastUpdated: '2024-01-01' });
            db.touchFeed('https://a.com/f', '2024-09-09');
            expect(db.getFeeds()[0].lastUpdated).toBe('2024-09-09');
        });

        it('is a no-op for an unknown feed', () => {
            db.touchFeed('https://missing.com/f', '2024-09-09');
            expect(db.getFeeds()).toEqual([]);
        });
    });

    // ── Settings guards (L1) ─────────────────────────────────
    describe('Settings guards', () => {
        it('getSpeedLimit falls back to 0 on a corrupted value', () => {
            db.setSetting('speedLimitKBps', 'not-a-number');
            expect(db.getSpeedLimit()).toBe(0);
        });

        it('getSpeedLimit rejects negatives', () => {
            db.setSetting('speedLimitKBps', '-50');
            expect(db.getSpeedLimit()).toBe(0);
        });

        it('getSpeedLimit round-trips a valid value', () => {
            db.setSpeedLimit(512);
            expect(db.getSpeedLimit()).toBe(512);
        });

        it('getAutoRefreshInterval only accepts 0/6/12/24', () => {
            db.setSetting('autoRefreshInterval', '999');
            expect(db.getAutoRefreshInterval()).toBe(0);
            db.setAutoRefreshInterval(6);
            expect(db.getAutoRefreshInterval()).toBe(6);
        });
    });

    // ── CSV formula injection (M14) + validation status ──────
    describe('exportArchiveCSV safety', () => {
        it('neutralizes formula-injection payloads in untrusted fields', () => {
            db.addArchiveEntry({ guid: 'g1', podcastTitle: '=SUM(A1:A9)', title: '@cmd', pubDate: '2024', downloadedAt: '2024' });
            const csv = db.exportArchiveCSV();
            expect(csv).toContain(`"'=SUM(A1:A9)"`);
            expect(csv).toContain(`"'@cmd"`);
        });

        it('marks entries with a checksum OK and legacy ones LEGACY', () => {
            db.addArchiveEntry({ guid: 'g1', podcastTitle: 'P', title: 'withck', pubDate: '2024', downloadedAt: '2024', filename: 'a.mp3', checksum: 'abc' });
            db.addArchiveEntry({ guid: 'g2', podcastTitle: 'P', title: 'legacy', pubDate: '2024', downloadedAt: '2024', filename: 'b.mp3' });
            const csv = db.exportArchiveCSV();
            expect(csv).toContain('"OK"');
            expect(csv).toContain('"LEGACY"');
        });
    });

    // ── addArchiveEntry upsert refresh (M13) ─────────────────
    describe('addArchiveEntry upsert', () => {
        it('refreshes metadata on conflict instead of ignoring it', () => {
            db.addArchiveEntry({ guid: 'g1', feedUrl: 'f', podcastTitle: 'P', title: 'E', pubDate: '2024', downloadedAt: '2024-01', filename: 'old.mp3', fileSize: 100 });
            db.addArchiveEntry({ guid: 'g1', feedUrl: 'f', podcastTitle: 'P', title: 'E', pubDate: '2024', downloadedAt: '2024-02', filename: 'new.mp3', fileSize: 200 });
            const rows = db.getArchive();
            expect(rows).toHaveLength(1);
            expect(rows[0].filename).toBe('new.mp3');
            expect(rows[0].fileSize).toBe(200);
        });
    });

    // ── getArchive null → undefined (L16) ────────────────────
    describe('getArchive shape', () => {
        it('maps absent nullable columns to undefined, not null', () => {
            db.addArchiveEntry({ guid: 'g1', podcastTitle: 'P', title: 'E', pubDate: '2024', downloadedAt: '2024' });
            const row = db.getArchive()[0];
            expect(row.fileSize).toBeUndefined();
            expect(row.checksum).toBeUndefined();
            expect(row.bitrate).toBeUndefined();
            expect(row.sampleRate).toBeUndefined();
            // present columns unaffected
            expect(row.guid).toBe('g1');
        });
    });

    // ── getFeeds legacy-title dedup (L15) ────────────────────
    describe('getFeeds legacy-title attribution (L15)', () => {
        it('credits legacy archive rows to only the first feed sharing a title', () => {
            db.addFeed({ url: 'https://a.com/1', title: 'Same' });
            db.addFeed({ url: 'https://a.com/2', title: 'Same' });
            db.updateEpisodeCount('https://a.com/1', 5);
            db.updateEpisodeCount('https://a.com/2', 5);
            // two legacy archive rows (feedUrl = '') under the shared title
            db.addArchiveEntry({ guid: 'x1', feedUrl: '', podcastTitle: 'Same', title: 'a', pubDate: '', downloadedAt: '' });
            db.addArchiveEntry({ guid: 'x2', feedUrl: '', podcastTitle: 'Same', title: 'b', pubDate: '', downloadedAt: '' });

            const feeds = db.getFeeds();
            const first = feeds.find(f => f.url === 'https://a.com/1')!;
            const second = feeds.find(f => f.url === 'https://a.com/2')!;
            expect(first.newCount).toBe(3);  // 5 − 2 legacy
            expect(second.newCount).toBe(5); // legacy already consumed → not double-counted
        });
    });
});
