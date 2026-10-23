import { describe, it, expect, beforeEach, vi } from 'vitest';
import { DatabaseService } from '../electron/services/DatabaseService';
import { LibraryService } from '../electron/services/LibraryService';

vi.mock('electron', () => ({
    app: { getPath: () => '/tmp' }
}));

/** v1.6.0 — persistence behind automatic archiving, archive folders and the resumable queue. */
describe('DatabaseService v1.6.0', () => {
    let db: DatabaseService;

    beforeEach(() => {
        db = new DatabaseService(':memory:');
    });

    describe('automatic archiving flag', () => {
        it('is off by default and exposed by getFeeds', () => {
            db.addFeed({ url: 'https://a.com/f', title: 'A' });
            expect(db.getFeeds()[0].autoDownload).toBe(false);
            expect(db.getFeedAutoDownload('https://a.com/f')).toBe(false);
        });

        it('can be switched on and off', () => {
            db.addFeed({ url: 'https://a.com/f', title: 'A' });
            db.setFeedAutoDownload('https://a.com/f', true);
            expect(db.getFeeds()[0].autoDownload).toBe(true);
            db.setFeedAutoDownload('https://a.com/f', false);
            expect(db.getFeedAutoDownload('https://a.com/f')).toBe(false);
        });

        it('survives the upsert of addFeed (re-adding the same URL)', () => {
            db.addFeed({ url: 'https://a.com/f', title: 'A' });
            db.setFeedAutoDownload('https://a.com/f', true);
            db.addFeed({ url: 'https://a.com/f', title: 'A renamed' });
            expect(db.getFeedAutoDownload('https://a.com/f')).toBe(true);
        });
    });

    describe('archive totals per feed (library dashboard)', () => {
        it('counts archived episodes and bytes by feedUrl, legacy rows by title once', () => {
            db.addFeed({ url: 'https://a.com/f', title: 'Show' });
            db.addFeed({ url: 'https://b.com/f', title: 'Show' });
            db.addFeed({ url: 'https://c.com/f', title: 'Empty' });
            db.updateEpisodeCount('https://a.com/f', 10);
            db.addArchiveEntry({ guid: 'a1', feedUrl: 'https://a.com/f', podcastTitle: 'Show', title: '1', pubDate: '', downloadedAt: '', fileSize: 100 });
            db.addArchiveEntry({ guid: 'a2', feedUrl: 'https://a.com/f', podcastTitle: 'Show', title: '2', pubDate: '', downloadedAt: '' });
            db.addArchiveEntry({ guid: 'b1', feedUrl: 'https://b.com/f', podcastTitle: 'Show', title: '3', pubDate: '', downloadedAt: '', fileSize: 7 });
            db.addArchiveEntry({ guid: 'x1', feedUrl: '', podcastTitle: 'Show', title: 'old', pubDate: '', downloadedAt: '', fileSize: 50 });

            const byUrl = new Map(db.getFeeds().map(f => [f.url, f]));
            expect(byUrl.get('https://a.com/f')).toMatchObject({ archivedCount: 3, archivedBytes: 150, episodeCount: 10 });
            expect(byUrl.get('https://b.com/f')).toMatchObject({ archivedCount: 1, archivedBytes: 7, episodeCount: null });
            expect(byUrl.get('https://c.com/f')).toMatchObject({ archivedCount: 0, archivedBytes: 0 });
        });
    });

    describe('feed identity', () => {
        it('stores the real title and cover, never blanking them', () => {
            db.addFeed({ url: 'https://a.com/f', title: 'Imported Feed' });
            db.updateFeedIdentity('https://a.com/f', 'Real Title', 'https://img/c.jpg');
            expect(db.getFeeds()[0]).toMatchObject({ title: 'Real Title', image: 'https://img/c.jpg' });
            db.updateFeedIdentity('https://a.com/f', undefined, undefined);
            expect(db.getFeeds()[0]).toMatchObject({ title: 'Real Title', image: 'https://img/c.jpg' });
        });
    });

    describe('OPML import does not overwrite existing feeds', () => {
        it('keeps title and cover of a feed already in the library', async () => {
            const lib = new LibraryService(db);
            db.addFeed({ url: 'https://a.com/rss', title: 'My Title', image: 'https://img/a.jpg' });
            const added = await lib.importOPML('<opml version="2.0"><body><outline text="OPML text" xmlUrl="https://a.com/rss" /><outline text="New" xmlUrl="https://b.com/rss" /></body></opml>');
            expect(added).toBe(1); // only the new one counts
            const a = db.getFeeds().find(f => f.url === 'https://a.com/rss')!;
            expect(a.title).toBe('My Title');
            expect(a.image).toBe('https://img/a.jpg');
        });
    });

    describe('badge computed in SQL', () => {
        it('ignores a corrupt window and falls back to the count estimate', () => {
            db.addFeed({ url: 'https://a.com/f', title: 'A' });
            db.updateEpisodeCount('https://a.com/f', 4);
            // simulate a damaged JSON value written by an old/crashed version
            (db as unknown as { db: { prepare: (s: string) => { run: (...a: unknown[]) => void } } }).db
                .prepare("UPDATE feeds SET currentEpisodeGuids = 'not json' WHERE url = ?").run('https://a.com/f');
            expect(db.getFeeds()[0].newCount).toBe(4);
        });

        it('counts each guid once even if stored twice', () => {
            db.addFeed({ url: 'https://a.com/f', title: 'A' });
            (db as unknown as { db: { prepare: (s: string) => { run: (...a: unknown[]) => void } } }).db
                .prepare("UPDATE feeds SET currentEpisodeGuids = '[\"a\",\"a\",\"b\"]' WHERE url = ?").run('https://a.com/f');
            expect(db.getFeeds()[0].newCount).toBe(2);
        });
    });

    describe('archive rows', () => {
        it('getArchiveEntry prefers the feed row over a legacy row', () => {
            db.addArchiveEntry({ guid: 'g', feedUrl: '', podcastTitle: 'P', title: 'legacy', pubDate: '', downloadedAt: '2024-01-01' });
            db.addArchiveEntry({ guid: 'g', feedUrl: 'https://a.com/f', podcastTitle: 'P', title: 'own', pubDate: '', downloadedAt: '2023-01-01' });
            expect(db.getArchiveEntry('g', 'https://a.com/f')?.title).toBe('own');
            expect(db.getArchiveEntry('g', 'https://other.com/f')?.title).toBe('legacy');
            expect(db.getArchiveEntry('missing', 'https://a.com/f')).toBeNull();
        });

        it('orders a podcast by the PARSED publication date (RFC 822 strings)', () => {
            // lexicographic order would be Mon < Sat < Wed — the old M3U bug
            db.addArchiveEntry({ guid: '1', podcastTitle: 'P', title: 'Jan', pubDate: 'Mon, 01 Jan 2024 10:00:00 GMT', downloadedAt: 'x' });
            db.addArchiveEntry({ guid: '2', podcastTitle: 'P', title: 'Mar', pubDate: 'Wed, 06 Mar 2024 10:00:00 GMT', downloadedAt: 'x' });
            db.addArchiveEntry({ guid: '3', podcastTitle: 'P', title: 'Feb', pubDate: 'Sat, 10 Feb 2024 10:00:00 GMT', downloadedAt: 'x' });
            expect(db.getArchiveByPodcast('P').map(r => r.title)).toEqual(['Mar', 'Feb', 'Jan']);
        });

        it('getArchiveByFeed includes legacy rows of the same podcast title', () => {
            db.addArchiveEntry({ guid: '1', feedUrl: 'https://a.com/f', podcastTitle: 'P', title: 'own', pubDate: '', downloadedAt: '' });
            db.addArchiveEntry({ guid: '2', feedUrl: '', podcastTitle: 'P', title: 'legacy', pubDate: '', downloadedAt: '' });
            db.addArchiveEntry({ guid: '3', feedUrl: 'https://b.com/f', podcastTitle: 'Q', title: 'other', pubDate: '', downloadedAt: '' });
            expect(db.getArchiveByFeed('https://a.com/f', 'P').map(r => r.title).sort()).toEqual(['legacy', 'own']);
        });

        it('records the folder each file was written to, and pins old rows once', () => {
            db.addArchiveEntry({ guid: 'old', podcastTitle: 'P', title: 'old', pubDate: '', downloadedAt: '' });
            db.addArchiveEntry({ guid: 'new', podcastTitle: 'P', title: 'new', pubDate: '', downloadedAt: '', baseDir: 'D:\\Archive' });
            expect(db.backfillArchiveBaseDir('C:\\Downloads')).toBe(1);
            expect(db.getArchiveEntry('old')?.baseDir).toBe('C:\\Downloads');
            expect(db.getArchiveEntry('new')?.baseDir).toBe('D:\\Archive');
            // idempotent: nothing left to pin
            expect(db.backfillArchiveBaseDir('E:\\Elsewhere')).toBe(0);
        });

        it('re-points rows after a migration', () => {
            db.addArchiveEntry({ guid: 'a', feedUrl: 'f', podcastTitle: 'P', title: 'a', pubDate: '', downloadedAt: '', baseDir: 'C:\\Old' });
            db.setArchiveBaseDir([{ guid: 'a', feedUrl: 'f' }], 'D:\\New');
            expect(db.getArchiveEntry('a', 'f')?.baseDir).toBe('D:\\New');
        });

        it('rebaselines size and checksum of one row', () => {
            db.addArchiveEntry({ guid: 'a', feedUrl: 'f', podcastTitle: 'P', title: 'a', pubDate: '', downloadedAt: '', fileSize: 10, checksum: 'old' });
            db.rebaselineArchiveEntry('a', 'f', 12, 'new');
            expect(db.getArchiveEntry('a', 'f')).toMatchObject({ fileSize: 12, checksum: 'new' });
        });

        it('exports feed URL, file and folder in the CSV', () => {
            db.addArchiveEntry({ guid: 'a', feedUrl: 'https://a.com/f', podcastTitle: 'P', title: 'a', pubDate: '', downloadedAt: '', filename: 'a.mp3', baseDir: 'C:\\Arch' });
            const csv = db.exportArchiveCSV();
            expect(csv).toContain('GUID,Feed URL,File,Folder');
            expect(csv).toContain('"https://a.com/f","a.mp3","C:\\Arch"');
        });
    });

    describe('pending downloads (resumable queue)', () => {
        const req = (url: string) => ({ url, title: 't', podcastTitle: 'P', guid: url, meta: { season: '1' } });

        it('round-trips requests in insertion order', () => {
            db.addPendingDownload(req('https://a.com/1.mp3'));
            db.addPendingDownload(req('https://a.com/2.mp3'));
            const list = db.getPendingDownloads();
            expect(list.map(r => r.url)).toEqual(['https://a.com/1.mp3', 'https://a.com/2.mp3']);
            expect(list[0].meta?.season).toBe('1');
        });

        it('replaces a request with the same URL instead of duplicating it', () => {
            db.addPendingDownload(req('https://a.com/1.mp3'));
            db.addPendingDownload(req('https://a.com/1.mp3'));
            expect(db.getPendingDownloads()).toHaveLength(1);
        });

        it('removes one and clears all', () => {
            db.addPendingDownload(req('https://a.com/1.mp3'));
            db.addPendingDownload(req('https://a.com/2.mp3'));
            db.removePendingDownload('https://a.com/1.mp3');
            expect(db.getPendingDownloads().map(r => r.url)).toEqual(['https://a.com/2.mp3']);
            db.clearPendingDownloads();
            expect(db.getPendingDownloads()).toEqual([]);
        });

        it('skips a corrupt row instead of failing', () => {
            (db as unknown as { db: { prepare: (s: string) => { run: (...a: unknown[]) => void } } }).db
                .prepare("INSERT INTO pending_downloads (url, request, addedAt) VALUES ('x', '{broken', 'now')").run();
            db.addPendingDownload(req('https://a.com/ok.mp3'));
            expect(db.getPendingDownloads().map(r => r.url)).toEqual(['https://a.com/ok.mp3']);
        });
    });

    describe('accessibility preferences', () => {
        it('defaults to 100% zoom and full motion', () => {
            expect(db.getUiZoom()).toBe(1);
            expect(db.getReduceMotion()).toBe(false);
        });

        it('persists them and rejects absurd zoom values', () => {
            db.setUiZoom(1.25);
            db.setReduceMotion(true);
            expect(db.getUiZoom()).toBe(1.25);
            expect(db.getReduceMotion()).toBe(true);
            db.setUiZoom(40);
            expect(db.getUiZoom()).toBe(1);
        });
    });
});
