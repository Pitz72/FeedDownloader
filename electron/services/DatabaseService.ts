import Database from 'better-sqlite3';
import { app } from 'electron';
import path from 'path';
import type { FeedEntry, ArchiveEntry, ArchiveStats } from '../../shared/types';

/**
 * DatabaseService — SQLite persistence layer via better-sqlite3.
 *
 * Replaces electron-store (JSON file) with a real database:
 * - Atomic operations (no read-modify-write cycles on large arrays)
 * - Indexed lookups (O(1) instead of O(n) array scans)
 * - WAL mode for concurrent reads
 * - Scalable to thousands of entries without performance degradation
 */
export class DatabaseService {
    private db: Database.Database;

    constructor(dbPath?: string) {
        const resolvedPath = dbPath || path.join(
            app.getPath('userData'),
            'feeddownloader.sqlite'
        );
        this.db = new Database(resolvedPath);
        this.init();
    }

    private init(): void {
        // Enable WAL mode for better concurrent performance
        this.db.pragma('journal_mode = WAL');
        this.db.pragma('foreign_keys = ON');

        this.db.exec(`
            CREATE TABLE IF NOT EXISTS feeds (
                url     TEXT PRIMARY KEY,
                title   TEXT NOT NULL DEFAULT '',
                image   TEXT,
                lastUpdated TEXT
            );

            CREATE TABLE IF NOT EXISTS downloads (
                guid TEXT PRIMARY KEY
            );

            CREATE TABLE IF NOT EXISTS archive (
                guid          TEXT PRIMARY KEY,
                podcastTitle  TEXT NOT NULL DEFAULT '',
                title         TEXT NOT NULL DEFAULT '',
                pubDate       TEXT NOT NULL DEFAULT '',
                downloadedAt  TEXT NOT NULL DEFAULT '',
                filename      TEXT
            );

            CREATE TABLE IF NOT EXISTS settings (
                key   TEXT PRIMARY KEY,
                value TEXT
            );
        `);

        // v0.7.4 — Add integrity/metadata columns (no-op if already present)
        for (const sql of [
            'ALTER TABLE archive ADD COLUMN fileSize INTEGER',
            'ALTER TABLE archive ADD COLUMN checksum TEXT',
            'ALTER TABLE archive ADD COLUMN bitrate INTEGER',
            'ALTER TABLE archive ADD COLUMN sampleRate INTEGER',
        ]) {
            try { this.db.exec(sql); } catch { /* column already exists */ }
        }
    }

    // ── Feeds ────────────────────────────────────────────────

    getFeeds(): FeedEntry[] {
        return this.db.prepare('SELECT url, title, image, lastUpdated FROM feeds ORDER BY rowid').all() as FeedEntry[];
    }

    addFeed(feed: FeedEntry): void {
        this.db.prepare(
            'INSERT OR IGNORE INTO feeds (url, title, image, lastUpdated) VALUES (?, ?, ?, ?)'
        ).run(
            feed.url,
            feed.title,
            typeof feed.image === 'string' ? feed.image : (feed.image?.url || null),
            feed.lastUpdated || null
        );
    }

    removeFeed(url: string): void {
        this.db.prepare('DELETE FROM feeds WHERE url = ?').run(url);
    }

    // ── Downloads ────────────────────────────────────────────

    getDownloadedEpisodes(): string[] {
        const rows = this.db.prepare('SELECT guid FROM downloads').all() as { guid: string }[];
        return rows.map(r => r.guid);
    }

    markAsDownloaded(guid: string): void {
        this.db.prepare('INSERT OR IGNORE INTO downloads (guid) VALUES (?)').run(guid);
    }

    isDownloaded(guid: string): boolean {
        const row = this.db.prepare('SELECT 1 FROM downloads WHERE guid = ?').get(guid);
        return !!row;
    }

    removeDownloadedEpisode(guid: string): void {
        const removeDownload = this.db.prepare('DELETE FROM downloads WHERE guid = ?');
        const removeArchive = this.db.prepare('DELETE FROM archive WHERE guid = ?');

        const transaction = this.db.transaction(() => {
            removeDownload.run(guid);
            removeArchive.run(guid);
        });
        transaction();
    }

    resetDownloadHistory(): void {
        const transaction = this.db.transaction(() => {
            this.db.prepare('DELETE FROM downloads').run();
            this.db.prepare('DELETE FROM archive').run();
        });
        transaction();
    }

    // ── Archive ──────────────────────────────────────────────

    addArchiveEntry(entry: ArchiveEntry): void {
        this.db.prepare(
            `INSERT OR IGNORE INTO archive
             (guid, podcastTitle, title, pubDate, downloadedAt, filename, fileSize, checksum, bitrate, sampleRate)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
        ).run(
            entry.guid,
            entry.podcastTitle,
            entry.title,
            entry.pubDate,
            entry.downloadedAt,
            entry.filename || null,
            entry.fileSize ?? null,
            entry.checksum ?? null,
            entry.bitrate ?? null,
            entry.sampleRate ?? null,
        );
    }

    getArchive(): ArchiveEntry[] {
        return this.db.prepare('SELECT * FROM archive ORDER BY downloadedAt DESC').all() as ArchiveEntry[];
    }

    exportArchiveCSV(): string {
        const rows = this.db.prepare('SELECT * FROM archive ORDER BY downloadedAt DESC').all() as ArchiveEntry[];

        // v0.4.8 — UTF-8 BOM for Excel compatibility
        // v0.7.4 — Extended with file size, bitrate, sample rate, checksum, validation status
        let csv = '\uFEFFPodcast,Episode Title,Publish Date,Downloaded At,File Size (bytes),Bitrate (kbps),Sample Rate (Hz),SHA-256 Checksum,Validation Status,GUID\n';

        rows.forEach(r => {
            const escape = (val: string | number | null | undefined) => {
                const s = String(val ?? '');
                const escaped = s.replace(/"/g, '""').replace(/[\n\r]+/g, ' ');
                return `"${escaped}"`;
            };
            // Entries with checksum = integrity verified at download; legacy entries = no checksum stored
            const validationStatus = r.checksum ? 'OK' : (r.filename ? 'LEGACY' : 'UNKNOWN');

            csv += [
                escape(r.podcastTitle),
                escape(r.title),
                escape(r.pubDate),
                escape(r.downloadedAt),
                escape(r.fileSize),
                escape(r.bitrate),
                escape(r.sampleRate),
                escape(r.checksum),
                escape(validationStatus),
                escape(r.guid),
            ].join(',') + '\n';
        });

        return csv;
    }

    getArchiveStats(): ArchiveStats {
        const countRow = this.db.prepare(
            'SELECT COUNT(*) as total, COUNT(DISTINCT podcastTitle) as podcasts FROM archive'
        ).get() as { total: number; podcasts: number };

        if (countRow.total === 0) {
            return { totalFiles: 0, totalPodcasts: 0, oldestDate: null, newestDate: null };
        }

        const dateRow = this.db.prepare(
            'SELECT MIN(downloadedAt) as oldest, MAX(downloadedAt) as newest FROM archive WHERE downloadedAt IS NOT NULL'
        ).get() as { oldest: string | null; newest: string | null };

        return {
            totalFiles: countRow.total,
            totalPodcasts: countRow.podcasts,
            oldestDate: dateRow.oldest,
            newestDate: dateRow.newest,
        };
    }

    // ── Settings ─────────────────────────────────────────────

    getSetting(key: string): string | null {
        const row = this.db.prepare('SELECT value FROM settings WHERE key = ?').get(key) as { value: string } | undefined;
        return row?.value ?? null;
    }

    setSetting(key: string, value: string): void {
        this.db.prepare(
            'INSERT OR REPLACE INTO settings (key, value) VALUES (?, ?)'
        ).run(key, value);
    }

    getDownloadPath(): string {
        return this.getSetting('downloadPath') || '';
    }

    setDownloadPath(downloadPath: string): void {
        this.setSetting('downloadPath', downloadPath);
    }

    getConcurrency(): number {
        const val = this.getSetting('concurrency');
        return val ? parseInt(val, 10) : 3;
    }

    setConcurrency(n: number): void {
        this.setSetting('concurrency', String(Math.max(1, Math.min(n, 10))));
    }

    getNamingTemplate(): string {
        return this.getSetting('namingTemplate') || '{title}';
    }

    setNamingTemplate(template: string): void {
        this.setSetting('namingTemplate', template);
    }

    getSidecarEnabled(): boolean {
        return this.getSetting('sidecarEnabled') === 'true';
    }

    setSidecarEnabled(enabled: boolean): void {
        this.setSetting('sidecarEnabled', String(enabled));
    }

    getId3Enabled(): boolean {
        return this.getSetting('id3Enabled') === 'true';
    }

    setId3Enabled(enabled: boolean): void {
        this.setSetting('id3Enabled', String(enabled));
    }

    getSpeedLimit(): number {
        const val = this.getSetting('speedLimitKBps');
        return val ? parseInt(val, 10) : 0; // 0 = unlimited
    }

    setSpeedLimit(kbps: number): void {
        this.setSetting('speedLimitKBps', String(Math.max(0, Math.floor(kbps))));
    }

    // ── Lifecycle ────────────────────────────────────────────

    close(): void {
        this.db.close();
    }
}
