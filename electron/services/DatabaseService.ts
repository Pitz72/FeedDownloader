import Database from 'better-sqlite3';
import { app } from 'electron';
import path from 'path';
import fs from 'node:fs';
import type { FeedEntry, ArchiveEntry, ArchiveStats, DownloadRequest } from '../../shared/types';

/** Raw archive row as stored in SQLite — nullable columns, before mapping to ArchiveEntry. */
interface ArchiveRow {
    guid: string;
    feedUrl: string | null;
    podcastTitle: string;
    title: string;
    pubDate: string;
    downloadedAt: string;
    filename: string | null;
    fileSize: number | null;
    checksum: string | null;
    bitrate: number | null;
    sampleRate: number | null;
    baseDir: string | null;
}

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

    /** True when the on-disk DB was unreadable and had to be replaced with a
     *  fresh one (the damaged files are kept aside as `.corrupt-<timestamp>`). */
    public recoveredFromError = false;

    constructor(dbPath?: string) {
        const resolvedPath = dbPath || path.join(
            app.getPath('userData'),
            'feeddownloader.sqlite'
        );
        let opened: Database.Database | null = null;
        try {
            opened = new Database(resolvedPath);
            this.db = opened;
            this.init();
        } catch (err) {
            try { opened?.close(); } catch { /* not open */ }
            // A corrupted file would otherwise make the app permanently unable
            // to start. Move the damaged DB aside (never delete user data) and
            // start over with an empty one. In-memory DBs (tests) can't recover.
            if (resolvedPath === ':memory:') throw err;

            // Only genuine corruption justifies moving the DB aside. A transient
            // or environmental failure (disk full during a migration ALTER, the
            // WAL locked by an antivirus scan, a momentary permission error) must
            // propagate untouched — renaming a HEALTHY database would silently
            // reset the user's whole library the next time there's free space.
            const code = (err as { code?: string }).code ?? '';
            const message = (err as Error).message ?? '';
            const isCorruption =
                /^SQLITE_(CORRUPT|NOTADB)/.test(code) ||
                /malformed|file is not a database|not a database/i.test(message);
            if (!isCorruption) {
                console.error('[DB] Database open/init failed (non-corruption) — not recovering:', err);
                throw err;
            }

            console.error('[DB] Database file is corrupt, attempting recovery:', err);
            const stamp = new Date().toISOString().replace(/[:.]/g, '-');
            for (const suffix of ['', '-wal', '-shm']) {
                const file = resolvedPath + suffix;
                try {
                    if (fs.existsSync(file)) fs.renameSync(file, `${resolvedPath}.corrupt-${stamp}${suffix}`);
                } catch (renameErr) {
                    console.error(`[DB] Could not move damaged file ${file}:`, renameErr);
                }
            }
            this.db = new Database(resolvedPath);
            this.init();
            this.recoveredFromError = true;
        }
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
                guid    TEXT NOT NULL,
                feedUrl TEXT NOT NULL DEFAULT '',
                PRIMARY KEY (guid, feedUrl)
            );

            CREATE TABLE IF NOT EXISTS archive (
                guid          TEXT NOT NULL,
                feedUrl       TEXT NOT NULL DEFAULT '',
                podcastTitle  TEXT NOT NULL DEFAULT '',
                title         TEXT NOT NULL DEFAULT '',
                pubDate       TEXT NOT NULL DEFAULT '',
                downloadedAt  TEXT NOT NULL DEFAULT '',
                filename      TEXT,
                fileSize      INTEGER,
                checksum      TEXT,
                bitrate       INTEGER,
                sampleRate    INTEGER,
                PRIMARY KEY (guid, feedUrl)
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

        // idempotent: add integrity/metadata columns if not already present.
        // S5: only "duplicate column" may be swallowed — any other failure
        // (disk full, readonly DB, I/O error) must propagate, otherwise later
        // INSERTs fail silently and downloads are never recorded.
        for (const sql of [
            'ALTER TABLE archive ADD COLUMN fileSize INTEGER',
            'ALTER TABLE archive ADD COLUMN checksum TEXT',
            'ALTER TABLE archive ADD COLUMN bitrate INTEGER',
            'ALTER TABLE archive ADD COLUMN sampleRate INTEGER',
            'ALTER TABLE archive ADD COLUMN feedUrl TEXT',
            'ALTER TABLE feeds ADD COLUMN episodeCount INTEGER',
            // M6: HTTP validators for conditional feed refresh (304)
            'ALTER TABLE feeds ADD COLUMN httpEtag TEXT',
            'ALTER TABLE feeds ADD COLUMN httpLastModified TEXT',
            // M10: JSON array of the GUIDs in the feed's CURRENT window — the badge
            // is derived from these (minus what's downloaded), not from
            // episodeCount − downloaded, which mis-counts rolling-window feeds.
            'ALTER TABLE feeds ADD COLUMN currentEpisodeGuids TEXT',
            // v1.6.0: per-feed automatic archiving of new episodes
            'ALTER TABLE feeds ADD COLUMN autoDownload INTEGER NOT NULL DEFAULT 0',
            // v1.6.0: the download folder each file was written to (see ArchiveEntry.baseDir)
            'ALTER TABLE archive ADD COLUMN baseDir TEXT',
        ]) {
            try {
                this.db.exec(sql);
            } catch (err) {
                if (!/duplicate column name/i.test(String((err as Error).message))) throw err;
            }
        }

        this.migrateToCompositeKeys();

        // v1.6.0: downloads still queued when the app quits (or crashes) — kept so
        // a multi-hour batch survives a restart instead of being silently lost.
        this.db.exec(`
            CREATE TABLE IF NOT EXISTS pending_downloads (
                url     TEXT PRIMARY KEY,
                request TEXT NOT NULL,
                addedAt TEXT NOT NULL
            );
        `);

        // M11: known_episodes was seeded for every parsed URL, even feeds only
        // "tried" and never added to the library — prune orphans once at boot.
        this.db.prepare(
            'DELETE FROM known_episodes WHERE feedUrl NOT IN (SELECT url FROM feeds)'
        ).run();

        // Indexes for the hot queries: per-feed download lookups, per-feed
        // archive counts (run on every getFeeds), archive sorting/filtering,
        // and known-episode lookups (the (guid, feedUrl) PK can't serve a
        // feedUrl-only scan).
        this.db.exec(`
            CREATE INDEX IF NOT EXISTS idx_downloads_feedUrl ON downloads (feedUrl);
            CREATE INDEX IF NOT EXISTS idx_archive_feedUrl ON archive (feedUrl);
            CREATE INDEX IF NOT EXISTS idx_archive_podcastTitle ON archive (podcastTitle);
            CREATE INDEX IF NOT EXISTS idx_archive_downloadedAt ON archive (downloadedAt);
            CREATE INDEX IF NOT EXISTS idx_known_episodes_feedUrl ON known_episodes (feedUrl);
        `);
    }

    /**
     * S6: GUIDs are only unique within a feed — plenty of real feeds use "1",
     * "2", or a page URL. The original schema keyed downloads/archive on guid
     * alone, so two feeds with colliding GUIDs produced false "already
     * downloaded" states and silently dropped archive rows. Rebuild both
     * tables with a (guid, feedUrl) key; legacy rows keep feedUrl = '' and act
     * as a match-any-feed fallback so existing libraries stay recognized.
     */
    private migrateToCompositeKeys(): void {
        const downloadsCols = this.db.pragma('table_info(downloads)') as { name: string }[];
        if (downloadsCols.some(c => c.name === 'feedUrl')) return; // already migrated

        const migrate = this.db.transaction(() => {
            this.db.exec(`
                CREATE TABLE downloads_new (
                    guid    TEXT NOT NULL,
                    feedUrl TEXT NOT NULL DEFAULT '',
                    PRIMARY KEY (guid, feedUrl)
                );
                INSERT OR IGNORE INTO downloads_new (guid, feedUrl)
                    SELECT guid, '' FROM downloads;
                DROP TABLE downloads;
                ALTER TABLE downloads_new RENAME TO downloads;

                CREATE TABLE archive_new (
                    guid          TEXT NOT NULL,
                    feedUrl       TEXT NOT NULL DEFAULT '',
                    podcastTitle  TEXT NOT NULL DEFAULT '',
                    title         TEXT NOT NULL DEFAULT '',
                    pubDate       TEXT NOT NULL DEFAULT '',
                    downloadedAt  TEXT NOT NULL DEFAULT '',
                    filename      TEXT,
                    fileSize      INTEGER,
                    checksum      TEXT,
                    bitrate       INTEGER,
                    sampleRate    INTEGER,
                    baseDir       TEXT,
                    PRIMARY KEY (guid, feedUrl)
                );
                INSERT OR IGNORE INTO archive_new
                    (guid, feedUrl, podcastTitle, title, pubDate, downloadedAt, filename, fileSize, checksum, bitrate, sampleRate, baseDir)
                    SELECT guid, COALESCE(feedUrl, ''), podcastTitle, title, pubDate, downloadedAt, filename, fileSize, checksum, bitrate, sampleRate, baseDir
                    FROM archive;
                DROP TABLE archive;
                ALTER TABLE archive_new RENAME TO archive;
            `);
        });
        migrate();
        console.log('[DB] Migrated downloads/archive to composite (guid, feedUrl) keys.');
    }

    // ── Feeds ────────────────────────────────────────────────

    getFeeds(): FeedEntry[] {
        // M10: badge = episodes in the CURRENT feed window that aren't downloaded.
        // The old "episodeCount − downloaded" formula broke for rolling-window
        // feeds: once old downloaded episodes drop out of the window, `downloaded`
        // exceeds `episodeCount` and the badge sticks at 0 even when genuinely new
        // episodes appear. Legacy download rows (feedUrl = '') match any feed.
        //
        // v1.6.0: computed in SQL (json_each + the (guid, feedUrl) primary key)
        // instead of loading the whole downloads table and parsing every window
        // in JS. This runs after EVERY completed download, so on a library of
        // tens of thousands of episodes the old approach made each completion
        // cost a full table scan.
        const feeds = this.db.prepare(`
            SELECT f.url, f.title, f.image, f.lastUpdated, f.episodeCount, f.autoDownload,
                   CASE WHEN f.currentEpisodeGuids IS NULL OR json_valid(f.currentEpisodeGuids) = 0
                             OR json_type(f.currentEpisodeGuids) != 'array' THEN NULL ELSE (
                       SELECT COUNT(DISTINCT j.value) FROM json_each(f.currentEpisodeGuids) j
                       WHERE j.type = 'text' AND j.value != '' AND NOT EXISTS (
                           SELECT 1 FROM downloads d
                           WHERE d.guid = j.value AND (d.feedUrl = f.url OR d.feedUrl = '')
                       )
                   ) END AS currentNew
            FROM feeds f ORDER BY f.rowid
        `).all() as (Omit<FeedEntry, 'autoDownload'> & { episodeCount: number | null; autoDownload: number | null; currentNew: number | null })[];

        // Fallback for feeds that haven't been re-parsed since the M10 upgrade
        // (currentEpisodeGuids still null): keep the previous count-based estimate.
        const needsFallback = feeds.some(f => f.currentNew === null);
        let urlMap = new Map<string, number>();
        let titleMap = new Map<string, number>();
        if (needsFallback) {
            const byUrl = this.db.prepare(
                "SELECT feedUrl, COUNT(*) AS cnt FROM archive WHERE feedUrl IS NOT NULL AND feedUrl != '' GROUP BY feedUrl"
            ).all() as { feedUrl: string; cnt: number }[];
            urlMap = new Map(byUrl.map(r => [r.feedUrl, r.cnt]));
            const byTitle = this.db.prepare(
                "SELECT podcastTitle, COUNT(*) AS cnt FROM archive WHERE feedUrl IS NULL OR feedUrl = '' GROUP BY podcastTitle"
            ).all() as { podcastTitle: string; cnt: number }[];
            titleMap = new Map(byTitle.map(r => [r.podcastTitle, r.cnt]));
        }
        // L15: legacy archive rows (feedUrl = '') are attributed by title. If two
        // feeds share a title, the same legacy rows must not be counted for both —
        // credit them to the first feed with that title only.
        const legacyTitlesConsumed = new Set<string>();

        return feeds.map(f => {
            let newCount: number | null;
            if (f.currentNew !== null) {
                newCount = f.currentNew;
            } else {
                let legacy = 0;
                if (!legacyTitlesConsumed.has(f.title)) {
                    legacy = titleMap.get(f.title) ?? 0;
                    legacyTitlesConsumed.add(f.title);
                }
                const downloaded = (urlMap.get(f.url) ?? 0) + legacy;
                newCount = f.episodeCount != null ? Math.max(0, f.episodeCount - downloaded) : null;
            }
            return {
                url: f.url,
                title: f.title,
                image: f.image,
                lastUpdated: f.lastUpdated,
                newCount,
                autoDownload: !!f.autoDownload,
            };
        });
    }

    updateEpisodeCount(url: string, count: number): void {
        this.db.prepare('UPDATE feeds SET episodeCount = ? WHERE url = ?').run(count, url);
    }

    /**
     * M10: persist the GUIDs in the feed's current window so the sidebar badge
     * can be computed as "current episodes not yet downloaded". Called after every
     * successful parse / background refresh, where the current window is known.
     */
    setCurrentEpisodeGuids(url: string, guids: string[]): void {
        const unique = Array.from(new Set(guids.filter(g => typeof g === 'string' && g.length > 0)));
        this.db.prepare('UPDATE feeds SET currentEpisodeGuids = ? WHERE url = ?').run(JSON.stringify(unique), url);
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

    /**
     * v1.6.0 — insert only if the URL is new. OPML import used the upsert above,
     * so re-importing a list overwrote every existing feed's title with the OPML
     * text and its cover with NULL. Returns true when a row was added.
     */
    addFeedIfMissing(feed: FeedEntry): boolean {
        const image = typeof feed.image === 'string' ? feed.image : (feed.image?.url || null);
        return this.db.prepare(
            'INSERT OR IGNORE INTO feeds (url, title, image, lastUpdated) VALUES (?, ?, ?, ?)'
        ).run(feed.url, feed.title, image, feed.lastUpdated || null).changes > 0;
    }

    removeFeed(url: string): void {
        this.db.prepare('DELETE FROM feeds WHERE url = ?').run(url);
    }

    /** v1.6.0 — store the feed's real title/cover after a parse; never blanks either. */
    updateFeedIdentity(url: string, title?: string, image?: string): void {
        if (title) this.db.prepare('UPDATE feeds SET title = ? WHERE url = ?').run(title, url);
        if (image) this.db.prepare('UPDATE feeds SET image = ? WHERE url = ?').run(image, url);
    }

    /** v1.6.0 — automatic archiving of new episodes for one feed. */
    setFeedAutoDownload(url: string, enabled: boolean): void {
        this.db.prepare('UPDATE feeds SET autoDownload = ? WHERE url = ?').run(enabled ? 1 : 0, url);
    }

    getFeedAutoDownload(url: string): boolean {
        const row = this.db.prepare('SELECT autoDownload FROM feeds WHERE url = ?').get(url) as { autoDownload: number | null } | undefined;
        return !!row?.autoDownload;
    }

    /**
     * L3: a feed permanently moved (301/308) — re-point its identity to the new
     * URL, carrying every dependent row across (the feed URL is a foreign key in
     * downloads / archive / known_episodes). Skipped when the target URL is
     * already a known feed, to avoid PRIMARY KEY collisions. The child updates
     * use OR IGNORE + a cleanup DELETE so a rare pre-existing (guid, newUrl) row
     * doesn't abort the whole migration. Returns true when the move happened.
     */
    updateFeedUrl(oldUrl: string, newUrl: string): boolean {
        if (!oldUrl || !newUrl || oldUrl === newUrl) return false;
        if (!this.hasFeed(oldUrl) || this.hasFeed(newUrl)) return false;
        const tx = this.db.transaction(() => {
            this.db.prepare('UPDATE feeds SET url = ? WHERE url = ?').run(newUrl, oldUrl);
            for (const table of ['downloads', 'archive', 'known_episodes']) {
                this.db.prepare(`UPDATE OR IGNORE ${table} SET feedUrl = ? WHERE feedUrl = ?`).run(newUrl, oldUrl);
                this.db.prepare(`DELETE FROM ${table} WHERE feedUrl = ?`).run(oldUrl);
            }
        });
        tx();
        console.log(`[DB] Feed permanently moved: ${oldUrl} → ${newUrl}`);
        return true;
    }

    hasFeed(url: string): boolean {
        return !!this.db.prepare('SELECT 1 FROM feeds WHERE url = ?').get(url);
    }

    /** L2: bulk insert for OPML import — one transaction instead of N commits.
     *  v1.6.0: feeds already in the library are left untouched; returns how many
     *  were actually added. */
    addFeedsBulk(feeds: FeedEntry[]): number {
        let added = 0;
        const transaction = this.db.transaction((items: FeedEntry[]) => {
            for (const feed of items) if (this.addFeedIfMissing(feed)) added++;
        });
        transaction(feeds);
        return added;
    }

    // ── HTTP validators (M6: conditional refresh) ────────────────

    getFeedValidators(url: string): { etag?: string; lastModified?: string } | null {
        const row = this.db.prepare(
            'SELECT httpEtag, httpLastModified FROM feeds WHERE url = ?'
        ).get(url) as { httpEtag: string | null; httpLastModified: string | null } | undefined;
        if (!row || (!row.httpEtag && !row.httpLastModified)) return null;
        return { etag: row.httpEtag ?? undefined, lastModified: row.httpLastModified ?? undefined };
    }

    setFeedValidators(url: string, etag?: string, lastModified?: string): void {
        this.db.prepare(
            'UPDATE feeds SET httpEtag = ?, httpLastModified = ? WHERE url = ?'
        ).run(etag ?? null, lastModified ?? null, url);
    }

    touchFeed(url: string, lastUpdated: string): void {
        this.db.prepare('UPDATE feeds SET lastUpdated = ? WHERE url = ?').run(lastUpdated, url);
    }

    // ── Downloads ────────────────────────────────────────────

    /**
     * GUIDs downloaded for a specific feed (legacy rows with feedUrl = ''
     * match every feed), or every GUID when no feed is given.
     */
    getDownloadedEpisodes(feedUrl?: string): string[] {
        const rows = (feedUrl !== undefined
            ? this.db.prepare("SELECT DISTINCT guid FROM downloads WHERE feedUrl IN (?, '')").all(feedUrl)
            : this.db.prepare('SELECT DISTINCT guid FROM downloads').all()
        ) as { guid: string }[];
        return rows.map(r => r.guid);
    }

    markAsDownloaded(guid: string, feedUrl = ''): void {
        this.db.prepare('INSERT OR IGNORE INTO downloads (guid, feedUrl) VALUES (?, ?)').run(guid, feedUrl);
    }

    isDownloaded(guid: string, feedUrl = ''): boolean {
        const row = this.db.prepare(
            "SELECT 1 FROM downloads WHERE guid = ? AND feedUrl IN (?, '')"
        ).get(guid, feedUrl);
        return !!row;
    }

    /**
     * Remove an episode from history + archive. When `feedUrl` is given the delete
     * is scoped to that feed (plus legacy feedUrl='' rows that match any feed), so
     * an episode whose GUID collides with another feed's — the very reason S6
     * introduced the composite key — isn't silently wiped from both. Without a
     * feedUrl the delete falls back to guid-only (legacy callers / tests).
     */
    removeDownloadedEpisode(guid: string, feedUrl?: string): void {
        const transaction = this.db.transaction(() => {
            if (feedUrl !== undefined) {
                this.db.prepare("DELETE FROM downloads WHERE guid = ? AND feedUrl IN (?, '')").run(guid, feedUrl);
                this.db.prepare("DELETE FROM archive WHERE guid = ? AND feedUrl IN (?, '')").run(guid, feedUrl);
            } else {
                this.db.prepare('DELETE FROM downloads WHERE guid = ?').run(guid);
                this.db.prepare('DELETE FROM archive WHERE guid = ?').run(guid);
            }
        });
        transaction();
    }

    removeMissingFiles(items: Array<string | { guid: string; feedUrl?: string }>): void {
        // M15: validate the renderer-supplied list and chunk it — a single
        // IN (...) with tens of thousands of placeholders exceeds SQLite's
        // variable limit and throws.
        // S6: entries carrying a feedUrl are deleted with the composite key so a
        // shared GUID isn't removed across feeds; bare-guid entries keep the
        // legacy chunked behaviour.
        const normalized = items
            .map(it => (typeof it === 'string' ? { guid: it } : it))
            .filter((it): it is { guid: string; feedUrl?: string } =>
                !!it && typeof it.guid === 'string' && it.guid.length > 0);
        if (normalized.length === 0) return;

        const scoped = normalized.filter(v => typeof v.feedUrl === 'string' && v.feedUrl.length > 0);
        const guidOnly = normalized
            .filter(v => !(typeof v.feedUrl === 'string' && v.feedUrl.length > 0))
            .map(v => v.guid);

        const CHUNK = 500;
        const transaction = this.db.transaction(() => {
            for (const v of scoped) {
                this.db.prepare("DELETE FROM downloads WHERE guid = ? AND feedUrl IN (?, '')").run(v.guid, v.feedUrl);
                this.db.prepare("DELETE FROM archive WHERE guid = ? AND feedUrl IN (?, '')").run(v.guid, v.feedUrl);
            }
            for (let i = 0; i < guidOnly.length; i += CHUNK) {
                const chunk = guidOnly.slice(i, i + CHUNK);
                const placeholders = chunk.map(() => '?').join(',');
                this.db.prepare(`DELETE FROM downloads WHERE guid IN (${placeholders})`).run(...chunk);
                this.db.prepare(`DELETE FROM archive WHERE guid IN (${placeholders})`).run(...chunk);
            }
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

    /**
     * v1.5.0 — Guided archive repair: re-point an archive row to a file found on
     * disk by checksum. Feed-scoped when a feedUrl is known (S6: shared GUIDs
     * across feeds must not be re-linked together); legacy rows (feedUrl='')
     * match the empty-string arm of the composite key.
     */
    updateArchiveFilename(guid: string, feedUrl: string | undefined, filename: string): void {
        if (typeof feedUrl === 'string' && feedUrl.length > 0) {
            this.db.prepare("UPDATE archive SET filename = ? WHERE guid = ? AND feedUrl IN (?, '')").run(filename, guid, feedUrl);
        } else {
            this.db.prepare('UPDATE archive SET filename = ? WHERE guid = ?').run(filename, guid);
        }
    }

    // ── Archive ──────────────────────────────────────────────

    addArchiveEntry(entry: ArchiveEntry): void {
        // M13: a re-download must refresh the file metadata — with INSERT OR
        // IGNORE, a new filename (changed naming template) left the archive
        // pointing at the old name and Health Check reported a ghost missing file.
        this.db.prepare(
            `INSERT INTO archive
             (guid, podcastTitle, title, pubDate, downloadedAt, filename, fileSize, checksum, bitrate, sampleRate, feedUrl, baseDir)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
             ON CONFLICT(guid, feedUrl) DO UPDATE SET
                podcastTitle = excluded.podcastTitle,
                title        = excluded.title,
                downloadedAt = excluded.downloadedAt,
                filename     = excluded.filename,
                fileSize     = excluded.fileSize,
                checksum     = excluded.checksum,
                bitrate      = excluded.bitrate,
                sampleRate   = excluded.sampleRate,
                baseDir      = excluded.baseDir`
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
            entry.feedUrl ?? '',
            entry.baseDir ?? null,
        );
    }

    /**
     * S7: mark-as-downloaded + archive row in a single transaction — a crash
     * between the two writes would leave an episode flagged as downloaded but
     * invisible to Archive and Health Check, forever.
     */
    recordDownload(entry: ArchiveEntry): void {
        const transaction = this.db.transaction(() => {
            this.markAsDownloaded(entry.guid, entry.feedUrl ?? '');
            this.addArchiveEntry(entry);
        });
        transaction();
    }

    // L16: explicit column list instead of `SELECT *` — the order and set of
    // columns are pinned (not dependent on ALTER ordering), and every nullable
    // column is mapped to `undefined` so the renderer sees the optional-field
    // shape declared in ArchiveEntry, never a raw SQL `null`.
    private static readonly ARCHIVE_COLUMNS =
        'guid, feedUrl, podcastTitle, title, pubDate, downloadedAt, filename, fileSize, checksum, bitrate, sampleRate, baseDir';

    private rowToArchiveEntry(r: ArchiveRow): ArchiveEntry {
        return {
            guid: r.guid,
            podcastTitle: r.podcastTitle,
            title: r.title,
            pubDate: r.pubDate,
            downloadedAt: r.downloadedAt,
            feedUrl: r.feedUrl ?? undefined,
            filename: r.filename ?? undefined,
            fileSize: r.fileSize ?? undefined,
            checksum: r.checksum ?? undefined,
            bitrate: r.bitrate ?? undefined,
            sampleRate: r.sampleRate ?? undefined,
            baseDir: r.baseDir ?? undefined,
        };
    }

    getArchive(): ArchiveEntry[] {
        return (this.db.prepare(
            `SELECT ${DatabaseService.ARCHIVE_COLUMNS} FROM archive ORDER BY downloadedAt DESC`
        ).all() as ArchiveRow[]).map(r => this.rowToArchiveEntry(r));
    }

    /**
     * The real on-disk filename recorded for a downloaded episode, matched by
     * podcast + episode title (most recent download wins). Used by "Show in
     * folder" so it reveals the actual file even when the naming template changed
     * or a collision suffix (`_2`) was applied after download — recomputing the
     * name from the current template would point at a non-existent path.
     */
    getArchiveFilename(podcastTitle: string, title: string): string | null {
        const row = this.db.prepare(
            `SELECT filename FROM archive
             WHERE podcastTitle = ? AND title = ? AND filename IS NOT NULL
             ORDER BY downloadedAt DESC LIMIT 1`
        ).get(podcastTitle, title) as { filename: string | null } | undefined;
        return row?.filename ?? null;
    }

    /**
     * v1.6.0 — one archive row by identity. Feed-scoped (S6) with the legacy
     * feedUrl = '' arm as fallback; the feed's own row wins over a legacy one.
     */
    getArchiveEntry(guid: string, feedUrl?: string): ArchiveEntry | null {
        const row = (feedUrl
            ? this.db.prepare(
                `SELECT ${DatabaseService.ARCHIVE_COLUMNS} FROM archive
                 WHERE guid = ? AND feedUrl IN (?, '') ORDER BY (feedUrl = '') ASC LIMIT 1`
            ).get(guid, feedUrl)
            : this.db.prepare(
                `SELECT ${DatabaseService.ARCHIVE_COLUMNS} FROM archive WHERE guid = ? ORDER BY downloadedAt DESC LIMIT 1`
            ).get(guid)) as ArchiveRow | undefined;
        return row ? this.rowToArchiveEntry(row) : null;
    }

    /**
     * Archive rows of one podcast, newest publication first. v1.6.0: sorted on
     * the parsed date — `ORDER BY pubDate` compared the raw RFC 822 strings
     * ("Mon, 02 Jan…"), which orders by weekday name, so exported M3U playlists
     * came out shuffled.
     */
    getArchiveByPodcast(podcastTitle: string): ArchiveEntry[] {
        const rows = (this.db.prepare(
            `SELECT ${DatabaseService.ARCHIVE_COLUMNS} FROM archive WHERE podcastTitle = ?`
        ).all(podcastTitle) as ArchiveRow[]).map(r => this.rowToArchiveEntry(r));
        const time = (e: ArchiveEntry) => { const t = Date.parse(e.pubDate); return Number.isNaN(t) ? 0 : t; };
        return rows.sort((a, b) => time(b) - time(a));
    }

    /** v1.6.0 — archive rows that belong to a feed: its own rows plus legacy
     *  (feedUrl = '') rows attributed by podcast title. */
    getArchiveByFeed(feedUrl: string, podcastTitle: string): ArchiveEntry[] {
        return (this.db.prepare(
            `SELECT ${DatabaseService.ARCHIVE_COLUMNS} FROM archive
             WHERE feedUrl = ? OR ((feedUrl IS NULL OR feedUrl = '') AND podcastTitle = ?)`
        ).all(feedUrl, podcastTitle) as ArchiveRow[]).map(r => this.rowToArchiveEntry(r));
    }

    /**
     * v1.6.0 — record where existing files live. Rows written before baseDir
     * existed resolved against whatever folder was current, so they are pinned
     * once to the folder in use at upgrade time. Returns the rows updated.
     */
    backfillArchiveBaseDir(baseDir: string): number {
        return this.db.prepare('UPDATE archive SET baseDir = ? WHERE baseDir IS NULL OR baseDir = \'\'').run(baseDir).changes;
    }

    /** v1.6.0 — re-point rows to a new folder after an archive migration. */
    setArchiveBaseDir(items: Array<{ guid: string; feedUrl?: string }>, baseDir: string): void {
        const stmt = this.db.prepare("UPDATE archive SET baseDir = ? WHERE guid = ? AND feedUrl = ?");
        const tx = this.db.transaction(() => {
            for (const it of items) stmt.run(baseDir, it.guid, it.feedUrl ?? '');
        });
        tx();
    }

    /**
     * v1.6.0 — accept the file currently on disk as the new reference (after the
     * user has checked it): store its size and SHA-256 so the Health Check stops
     * reporting it. Needed for files tagged by versions that hashed before
     * writing ID3 tags.
     */
    rebaselineArchiveEntry(guid: string, feedUrl: string | undefined, fileSize: number, checksum: string): void {
        this.db.prepare("UPDATE archive SET fileSize = ?, checksum = ? WHERE guid = ? AND feedUrl = ?")
            .run(fileSize, checksum, guid, feedUrl ?? '');
    }

    exportArchiveCSV(): string {
        const rows = (this.db.prepare(
            `SELECT ${DatabaseService.ARCHIVE_COLUMNS} FROM archive ORDER BY downloadedAt DESC`
        ).all() as ArchiveRow[]).map(r => this.rowToArchiveEntry(r));

        
        // UTF-8 BOM for Excel compatibility
        // v1.6.0: Feed URL, File and Folder appended (after GUID, so existing
        // spreadsheets that read the first ten columns keep working).
        let csv = '\uFEFFPodcast,Episode Title,Publish Date,Downloaded At,File Size (bytes),Bitrate (kbps),Sample Rate (Hz),SHA-256 Checksum,Validation Status,GUID,Feed URL,File,Folder\n';

        rows.forEach(r => {
            const escape = (val: string | number | null | undefined) => {
                let s = String(val ?? '');
                // M14: feed titles are untrusted input — a value starting with
                // = + - @ or TAB is executed as a formula by Excel/Calc.
                if (/^[=+\-@\t]/.test(s)) s = `'${s}`;
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
                escape(r.feedUrl),
                escape(r.filename),
                escape(r.baseDir),
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
        const parsed = parseInt(this.getSetting('concurrency') ?? '', 10);
        // L1: a corrupted setting must not propagate NaN into the queue
        return Number.isFinite(parsed) ? Math.max(1, Math.min(parsed, 10)) : 3;
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
        const parsed = parseInt(this.getSetting('speedLimitKBps') ?? '', 10);
        // L1: NaN here would silently break the throttle stream
        return Number.isFinite(parsed) && parsed >= 0 ? parsed : 0; // 0 = unlimited
    }

    setSpeedLimit(kbps: number): void {
        this.setSetting('speedLimitKBps', String(Math.max(0, Math.floor(kbps))));
    }

    // v1.5.0 — "What's new" tracking (Titan pattern): the version whose in-app
    // changelog the user has already been shown. Lives in the main DB, not in
    // renderer localStorage, so it survives and predates the renderer.
    getLastSeenVersion(): string | null {
        return this.getSetting('lastSeenVersion');
    }

    setLastSeenVersion(version: string): void {
        this.setSetting('lastSeenVersion', version);
    }

    // v1.5.0 — per-file size cap in MB (0 = unlimited), same shape as the speed limit
    getFileSizeLimitMB(): number {
        const parsed = parseInt(this.getSetting('fileSizeLimitMB') ?? '', 10);
        return Number.isFinite(parsed) && parsed >= 0 ? parsed : 0;
    }

    setFileSizeLimitMB(mb: number): void {
        this.setSetting('fileSizeLimitMB', String(Math.max(0, Math.floor(mb))));
    }

    getAutoRefreshInterval(): number {
        const val = this.getSetting('autoRefreshInterval');
        const parsed = val ? parseInt(val, 10) : 0;
        return [0, 6, 12, 24].includes(parsed) ? parsed : 0;
    }

    setAutoRefreshInterval(hours: number): void {
        this.setSetting('autoRefreshInterval', String(hours));
    }

    // v1.6.0 — accessibility preferences (Titan standard)
    getUiZoom(): number {
        const z = parseFloat(this.getSetting('uiZoom') ?? '');
        return Number.isFinite(z) && z >= 0.5 && z <= 3 ? z : 1;
    }

    setUiZoom(zoom: number): void {
        this.setSetting('uiZoom', String(zoom));
    }

    getReduceMotion(): boolean {
        return this.getSetting('reduceMotion') === 'true';
    }

    setReduceMotion(enabled: boolean): void {
        this.setSetting('reduceMotion', String(enabled));
    }

    // ── Pending downloads (v1.6.0) ───────────────────────────
    // A queued download is written here when accepted and removed when it ends
    // (done, failed, cancelled). Whatever is left at boot was interrupted by a
    // quit or a crash, and is offered for resume.

    addPendingDownload(request: DownloadRequest): void {
        this.db.prepare('INSERT OR REPLACE INTO pending_downloads (url, request, addedAt) VALUES (?, ?, ?)')
            .run(request.url, JSON.stringify(request), new Date().toISOString());
    }

    removePendingDownload(url: string): void {
        this.db.prepare('DELETE FROM pending_downloads WHERE url = ?').run(url);
    }

    getPendingDownloads(): DownloadRequest[] {
        const rows = this.db.prepare('SELECT request FROM pending_downloads ORDER BY addedAt, rowid').all() as { request: string }[];
        const out: DownloadRequest[] = [];
        for (const r of rows) {
            try {
                const req = JSON.parse(r.request) as DownloadRequest;
                if (req && typeof req.url === 'string' && req.url) out.push(req);
            } catch { /* corrupt row — skipped, removed by the next clear */ }
        }
        return out;
    }

    clearPendingDownloads(): void {
        this.db.prepare('DELETE FROM pending_downloads').run();
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

    // ── Guided DB restore (v1.5.0) ───────────────────────────

    /** True when the library holds no user data at all — the state a fresh DB
     *  created by the corruption recovery is in. */
    isEmpty(): boolean {
        for (const table of ['feeds', 'archive', 'downloads']) {
            const row = this.db.prepare(`SELECT COUNT(*) AS c FROM ${table}`).get() as { c: number };
            if (row.c > 0) return false;
        }
        return true;
    }

    /**
     * Best-effort salvage of a damaged database file into this (fresh) one.
     * SQLite corruption is usually local: most tables/rows remain readable, so
     * each table is read independently and every recoverable row is inserted
     * with INSERT OR IGNORE. A table (or the whole file) that can't be read
     * contributes zero rows instead of failing the restore. The source file is
     * opened read-only and never modified.
     */
    salvageFromCorrupt(corruptPath: string): { feeds: number; archive: number; downloads: number; knownEpisodes: number; settings: number } {
        const result = { feeds: 0, archive: 0, downloads: 0, knownEpisodes: 0, settings: 0 };
        const src = new Database(corruptPath, { readonly: true });
        try {
            const readRows = (table: string): Record<string, unknown>[] => {
                try {
                    return src.prepare(`SELECT * FROM ${table}`).all() as Record<string, unknown>[];
                } catch (e) {
                    console.error(`[DB-Restore] Table "${table}" unreadable, skipping:`, e);
                    return [];
                }
            };
            const s = (v: unknown): string | null => (typeof v === 'string' ? v : null);
            const num = (v: unknown): number | null => (typeof v === 'number' && Number.isFinite(v) ? v : null);

            // Rows are inserted one by one (auto-commit), NOT in a transaction:
            // a single poisoned row must cost only itself, not the whole table.
            const insFeed = this.db.prepare(
                `INSERT OR IGNORE INTO feeds (url, title, image, lastUpdated, episodeCount, httpEtag, httpLastModified, currentEpisodeGuids, autoDownload)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
            );
            for (const r of readRows('feeds')) {
                const url = s(r.url);
                if (!url) continue;
                try {
                    result.feeds += insFeed.run(url, s(r.title) ?? '', s(r.image), s(r.lastUpdated),
                        num(r.episodeCount), s(r.httpEtag), s(r.httpLastModified), s(r.currentEpisodeGuids),
                        num(r.autoDownload) ? 1 : 0).changes;
                } catch { /* poisoned row */ }
            }

            const insArchive = this.db.prepare(
                `INSERT OR IGNORE INTO archive (guid, feedUrl, podcastTitle, title, pubDate, downloadedAt, filename, fileSize, checksum, bitrate, sampleRate, baseDir)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
            );
            for (const r of readRows('archive')) {
                const guid = s(r.guid);
                if (!guid) continue;
                try {
                    result.archive += insArchive.run(guid, s(r.feedUrl) ?? '', s(r.podcastTitle) ?? '', s(r.title) ?? '',
                        s(r.pubDate) ?? '', s(r.downloadedAt) ?? '', s(r.filename),
                        num(r.fileSize), s(r.checksum), num(r.bitrate), num(r.sampleRate), s(r.baseDir)).changes;
                } catch { /* poisoned row */ }
            }

            const insDownload = this.db.prepare('INSERT OR IGNORE INTO downloads (guid, feedUrl) VALUES (?, ?)');
            for (const r of readRows('downloads')) {
                const guid = s(r.guid);
                if (!guid) continue;
                try { result.downloads += insDownload.run(guid, s(r.feedUrl) ?? '').changes; } catch { /* poisoned row */ }
            }

            const insKnown = this.db.prepare('INSERT OR IGNORE INTO known_episodes (guid, feedUrl) VALUES (?, ?)');
            for (const r of readRows('known_episodes')) {
                const guid = s(r.guid);
                const feedUrl = s(r.feedUrl);
                if (!guid || !feedUrl) continue;
                try { result.knownEpisodes += insKnown.run(guid, feedUrl).changes; } catch { /* poisoned row */ }
            }

            const insSetting = this.db.prepare('INSERT OR IGNORE INTO settings (key, value) VALUES (?, ?)');
            for (const r of readRows('settings')) {
                const key = s(r.key);
                if (!key) continue;
                try { result.settings += insSetting.run(key, s(r.value)).changes; } catch { /* poisoned row */ }
            }

            // M11-consistency: drop salvaged known_episodes rows whose feed didn't
            // make it over, mirroring the boot-time orphan pruning.
            this.db.prepare('DELETE FROM known_episodes WHERE feedUrl NOT IN (SELECT url FROM feeds)').run();
        } finally {
            try { src.close(); } catch { /* already closed */ }
        }
        return result;
    }

    // ── Lifecycle ────────────────────────────────────────────

    close(): void {
        this.db.close();
    }
}
