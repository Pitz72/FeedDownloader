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

        // F3-fix: Track known episode GUIDs per feed for accurate new-episode detection.
        // The old approach compared raw episode counts, which broke for feeds with
        // a rolling window (publishing new episodes while removing old ones).
        this.db.exec(`
            CREATE TABLE IF NOT EXISTS known_episodes (
                guid    TEXT NOT NULL,
                feedUrl TEXT NOT NULL,
                firstSeen TEXT NOT NULL DEFAULT (datetime('now')),
                PRIMARY KEY (guid, feedUrl)
            );
        `);

        // idempotent: add integrity/metadata columns if not already present
        for (const sql of [
            'ALTER TABLE archive ADD COLUMN fileSize INTEGER',
            'ALTER TABLE archive ADD COLUMN checksum TEXT',
            'ALTER TABLE archive ADD COLUMN bitrate INTEGER',
            'ALTER TABLE archive ADD COLUMN sampleRate INTEGER',
            'ALTER TABLE archive ADD COLUMN feedUrl TEXT',
            'ALTER TABLE feeds ADD COLUMN episodeCount INTEGER',
        ]) {
            try { this.db.exec(sql); } catch { /* column already exists */ }
        }
    }

    // ── Feeds ────────────────────────────────────────────────

    getFeeds(): FeedEntry[] {
        const feeds = this.db.prepare(
            'SELECT url, title, image, lastUpdated, episodeCount FROM feeds ORDER BY rowid'
        ).all() as (FeedEntry & { episodeCount: number | null })[];

        // Downloaded-count correlation (B6): prefer feedUrl (exact), fall back to
        // podcastTitle for legacy rows written before feedUrl existed. Title-only
        // correlation mis-attributed counts across feeds sharing a title or after
        // a feed was renamed.
        const byUrl = this.db.prepare(
            "SELECT feedUrl, COUNT(*) AS cnt FROM archive WHERE feedUrl IS NOT NULL AND feedUrl != '' GROUP BY feedUrl"
        ).all() as { feedUrl: string; cnt: number }[];
        const urlMap = new Map(byUrl.map(r => [r.feedUrl, r.cnt]));

        const byTitle = this.db.prepare(
            "SELECT podcastTitle, COUNT(*) AS cnt FROM archive WHERE feedUrl IS NULL OR feedUrl = '' GROUP BY podcastTitle"
        ).all() as { podcastTitle: string; cnt: number }[];
        const titleMap = new Map(byTitle.map(r => [r.podcastTitle, r.cnt]));

        return feeds.map(f => {
            const downloaded = (urlMap.get(f.url) ?? 0) + (titleMap.get(f.title) ?? 0);
            return {
                url: f.url,
                title: f.title,
                image: f.image,
                lastUpdated: f.lastUpdated,
                newCount: f.episodeCount != null
                    ? Math.max(0, f.episodeCount - downloaded)
                    : null,
            };
        });
    }

    updateEpisodeCount(url: string, count: number): void {
        this.db.prepare('UPDATE feeds SET episodeCount = ? WHERE url = ?').run(count, url);
    }

    addFeed(feed: FeedEntry): void {
        const image = typeof feed.image === 'string' ? feed.image : (feed.image?.url || null);
        this.db.prepare(`
            INSERT INTO feeds (url, title, image, lastUpdated) VALUES (?, ?, ?, ?)
            ON CONFLICT(url) DO UPDATE SET
                title       = excluded.title,
                image       = excluded.image,
                lastUpdated = excluded.lastUpdated
        `).run(feed.url, feed.title, image, feed.lastUpdated || null);
    }

    removeFeed(url: string): void {
        this.db.prepare('DELETE FROM feeds WHERE url = ?').run(url);
    }

    touchFeed(url: string, lastUpdated: string): void {
        this.db.prepare('UPDATE feeds SET lastUpdated = ? WHERE url = ?').run(lastUpdated, url);
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

    removeMissingFiles(guids: string[]): void {
        if (guids.length === 0) return;
        const placeholders = guids.map(() => '?').join(',');
        const transaction = this.db.transaction(() => {
            this.db.prepare(`DELETE FROM downloads WHERE guid IN (${placeholders})`).run(...guids);
            this.db.prepare(`DELETE FROM archive WHERE guid IN (${placeholders})`).run(...guids);
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
             (guid, podcastTitle, title, pubDate, downloadedAt, filename, fileSize, checksum, bitrate, sampleRate, feedUrl)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
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
            entry.feedUrl ?? null,
        );
    }

    getArchive(): ArchiveEntry[] {
        return this.db.prepare('SELECT * FROM archive ORDER BY downloadedAt DESC').all() as ArchiveEntry[];
    }

    getArchiveByPodcast(podcastTitle: string): ArchiveEntry[] {
        return this.db.prepare(
            'SELECT * FROM archive WHERE podcastTitle = ? ORDER BY pubDate DESC'
        ).all(podcastTitle) as ArchiveEntry[];
    }

    exportArchiveCSV(): string {
        const rows = this.db.prepare('SELECT * FROM archive ORDER BY downloadedAt DESC').all() as ArchiveEntry[];

        
        // UTF-8 BOM for Excel compatibility
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

    getAutoRefreshInterval(): number {
        const val = this.getSetting('autoRefreshInterval');
        const parsed = val ? parseInt(val, 10) : 0;
        return [0, 6, 12, 24].includes(parsed) ? parsed : 0;
    }

    setAutoRefreshInterval(hours: number): void {
        this.setSetting('autoRefreshInterval', String(hours));
    }

    getEpisodeCount(url: string): number | null {
        const row = this.db.prepare('SELECT episodeCount FROM feeds WHERE url = ?').get(url) as { episodeCount: number | null } | undefined;
        return row?.episodeCount ?? null;
    }

    // ── Known Episodes (F3-fix) ──────────────────────────────

    /**
     * Return the set of GUIDs already known for the given feed.
     */
    getKnownGuids(feedUrl: string): Set<string> {
        const rows = this.db.prepare(
            'SELECT guid FROM known_episodes WHERE feedUrl = ?'
        ).all(feedUrl) as { guid: string }[];
        return new Set(rows.map(r => r.guid));
    }

    /**
     * Record a batch of GUIDs as known for the given feed (INSERT OR IGNORE).
     */
    markGuidsAsKnown(feedUrl: string, guids: string[]): void {
        if (guids.length === 0) return;
        const stmt = this.db.prepare(
            'INSERT OR IGNORE INTO known_episodes (guid, feedUrl) VALUES (?, ?)'
        );
        const transaction = this.db.transaction((items: string[]) => {
            for (const guid of items) {
                stmt.run(guid, feedUrl);
            }
        });
        transaction(guids);
    }

    /**
     * Return GUIDs from `currentGuids` that are NOT yet known for this feed.
     */
    findNewGuids(feedUrl: string, currentGuids: string[]): string[] {
        if (currentGuids.length === 0) return [];
        const known = this.getKnownGuids(feedUrl);
        return currentGuids.filter(g => g && !known.has(g));
    }

    /**
     * Remove known-episode records for a feed (called when a feed is deleted).
     */
    removeKnownEpisodes(feedUrl: string): void {
        this.db.prepare('DELETE FROM known_episodes WHERE feedUrl = ?').run(feedUrl);
    }

    // ── Lifecycle ────────────────────────────────────────────

    close(): void {
        this.db.close();
    }
}
