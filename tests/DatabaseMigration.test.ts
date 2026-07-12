import { describe, it, expect, afterEach, vi } from 'vitest';
import Database from 'better-sqlite3';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { DatabaseService } from '../electron/services/DatabaseService';

// Mock electron's app module to avoid needing the real Electron runtime
vi.mock('electron', () => ({
    app: { getPath: () => os.tmpdir() }
}));

/**
 * Upgrade-path tests (S4/S5/S6): open a database created with the legacy
 * schema (guid-only primary keys, no integrity columns) and verify that
 * init() migrates it without losing data, plus the corruption-recovery path.
 */
describe('DatabaseService — migration & recovery', () => {
    const tempFiles: string[] = [];

    function tempDbPath(): string {
        const p = path.join(os.tmpdir(), `fdl-migration-test-${Date.now()}-${Math.random().toString(36).slice(2)}.sqlite`);
        tempFiles.push(p);
        return p;
    }

    afterEach(() => {
        for (const p of tempFiles.splice(0)) {
            for (const f of fs.readdirSync(path.dirname(p)).filter(f => f.startsWith(path.basename(p)))) {
                try { fs.rmSync(path.join(path.dirname(p), f), { force: true }); } catch { /* locked on Windows */ }
            }
        }
    });

    function createLegacyDb(p: string): void {
        const raw = new Database(p);
        raw.exec(`
            CREATE TABLE feeds (
                url     TEXT PRIMARY KEY,
                title   TEXT NOT NULL DEFAULT '',
                image   TEXT,
                lastUpdated TEXT
            );
            CREATE TABLE downloads (
                guid TEXT PRIMARY KEY
            );
            CREATE TABLE archive (
                guid          TEXT PRIMARY KEY,
                podcastTitle  TEXT NOT NULL DEFAULT '',
                title         TEXT NOT NULL DEFAULT '',
                pubDate       TEXT NOT NULL DEFAULT '',
                downloadedAt  TEXT NOT NULL DEFAULT '',
                filename      TEXT
            );
            CREATE TABLE settings (
                key   TEXT PRIMARY KEY,
                value TEXT
            );
            INSERT INTO feeds (url, title) VALUES ('https://old.example/feed', 'Old Feed');
            INSERT INTO downloads (guid) VALUES ('legacy-guid-1'), ('legacy-guid-2');
            INSERT INTO archive (guid, podcastTitle, title, pubDate, downloadedAt, filename)
                VALUES ('legacy-guid-1', 'Old Feed', 'Ep 1', '2024-01-01', '2024-01-02', 'ep1.mp3');
        `);
        raw.close();
    }

    it('migrates a v1.0.0-era database preserving downloads and archive', () => {
        const p = tempDbPath();
        createLegacyDb(p);

        const db = new DatabaseService(p);
        expect(db.recoveredFromError).toBe(false);

        // Legacy rows survive and match any feed (feedUrl = '' fallback)
        expect(db.getDownloadedEpisodes()).toEqual(expect.arrayContaining(['legacy-guid-1', 'legacy-guid-2']));
        expect(db.getDownloadedEpisodes('https://old.example/feed')).toContain('legacy-guid-1');
        expect(db.isDownloaded('legacy-guid-1', 'https://whatever.example/feed')).toBe(true);
        expect(db.getArchive()).toHaveLength(1);
        expect(db.getFeeds()[0].title).toBe('Old Feed');
        db.close();
    });

    it('keeps colliding GUIDs from different feeds separate after migration (S6)', () => {
        const p = tempDbPath();
        createLegacyDb(p);

        const db = new DatabaseService(p);
        // Same GUID, two different feeds → two independent records
        db.recordDownload({ guid: '1', feedUrl: 'https://a.example/feed', podcastTitle: 'A', title: 'A1', pubDate: '', downloadedAt: '2026-01-01' });
        db.recordDownload({ guid: '1', feedUrl: 'https://b.example/feed', podcastTitle: 'B', title: 'B1', pubDate: '', downloadedAt: '2026-01-02' });

        expect(db.isDownloaded('1', 'https://a.example/feed')).toBe(true);
        expect(db.isDownloaded('1', 'https://b.example/feed')).toBe(true);
        expect(db.isDownloaded('1', 'https://c.example/feed')).toBe(false);
        expect(db.getArchive().filter(e => e.guid === '1')).toHaveLength(2);
        expect(db.getDownloadedEpisodes('https://a.example/feed')).toContain('1');
        expect(db.getDownloadedEpisodes('https://c.example/feed')).not.toContain('1');
        db.close();
    });

    it('is idempotent — reopening a migrated database changes nothing', () => {
        const p = tempDbPath();
        createLegacyDb(p);

        const first = new DatabaseService(p);
        first.close();
        const second = new DatabaseService(p);
        expect(second.recoveredFromError).toBe(false);
        expect(second.getDownloadedEpisodes()).toHaveLength(2);
        expect(second.getArchive()).toHaveLength(1);
        second.close();
    });

    it('recovers from a corrupted database file instead of crashing (S4)', () => {
        const p = tempDbPath();
        fs.writeFileSync(p, 'this is definitely not a sqlite database — corrupted content');

        const db = new DatabaseService(p);
        expect(db.recoveredFromError).toBe(true);
        // Fresh, working database
        expect(db.getFeeds()).toEqual([]);
        db.addFeed({ url: 'https://new.example/feed', title: 'New' });
        expect(db.getFeeds()).toHaveLength(1);
        db.close();

        // The damaged file was kept aside, not deleted
        const siblings = fs.readdirSync(path.dirname(p)).filter(f => f.startsWith(path.basename(p)) && f.includes('.corrupt-'));
        expect(siblings.length).toBeGreaterThan(0);
    });
});
