// ============================================================
// Runtime FeedDownloader Pro — Shared Type Definitions
// Single source of truth for both main and renderer processes.
// ============================================================

// ── Data Models ──────────────────────────────────────────────

export interface Episode {
    title: string;
    pubDate?: string;
    link?: string;
    enclosure?: { url: string; type?: string; length?: string };
    enclosures?: { url: string; type?: string; length?: string }[];
    content?: string;
    contentSnippet?: string;
    guid?: string;
    isoDate?: string;
    description?: string;
    itunes?: { duration?: string; image?: string; season?: string; episode?: string; episodeType?: string };
}

export interface Feed {
    url: string;
    title: string;
    image?: string | { url: string };
    description?: string;
    link?: string;
    language?: string;
    creator?: string;
    copyright?: string;
    itunes?: { author?: string; image?: string; categories?: string[]; owner?: { name?: string; email?: string } };
    episodes: Episode[];
    lastUpdated?: string;
}

/** Lightweight feed entry for the sidebar (no episodes) */
export interface FeedEntry {
    url: string;
    title: string;
    image?: string | { url: string };
    lastUpdated?: string;
    newCount?: number | null;  // undownloaded episodes — computed server-side
    /** v1.6.0 — "archivio automatico": new episodes found by a refresh are
     *  downloaded without asking. */
    autoDownload?: boolean;
    /** v1.6.0 — episodes in the feed at the last parse (null: never parsed). */
    episodeCount?: number | null;
    /** v1.6.0 — archived episodes and bytes for this feed (legacy rows by title). */
    archivedCount?: number;
    archivedBytes?: number;
}

/** v1.6.0 — per-feed archive figures for the feed header. */
export interface FeedStats {
    archivedCount: number;
    archivedBytes: number;
    /** Folder that holds this podcast's files (resolved, absolute). */
    folder: string;
}

export interface DownloadProgress {
    url: string;
    loaded: number;
    total: number;
    completed?: boolean;
    error?: boolean;
    // M32: user-cancelled — advances the batch counter but must NOT render the
    // episode as downloaded (it previously reused `completed`)
    cancelled?: boolean;
    notFound?: boolean;
    // v1.5.0 — download paused by the user: non-terminal, the row stays in the
    // panel with its progress frozen until resumed or cancelled
    paused?: boolean;
    speed?: number;  // bytes/sec — computed in store
    eta?: number;    // seconds remaining — computed in store
}

export interface QueueItem {
    taskId: string;
    title: string;
    podcastTitle: string;
    url: string;
    status: 'pending' | 'downloading' | 'paused';
}

/**
 * v1.6.0 — queue-wide state pushed by the main process (single source of truth:
 * the renderer no longer keeps its own batch counters).
 *
 * A "run" starts when work is queued while the queue is idle and ends when the
 * queue drains; its counters drive the overall progress bar.
 */
export interface QueueState {
    paused: boolean;
    /** Why the queue is paused: by the user, or automatically while offline. */
    pauseReason: 'user' | 'offline' | null;
    run: { total: number; completed: number; failed: number; cancelled: number };
}

/** v1.6.0 — downloads interrupted by a quit/crash, offered for resume at boot. */
export interface PendingDownloads {
    count: number;
    podcasts: string[];
}

/** v1.6.0 — a successfully archived episode, pushed for the session list. */
export interface CompletedDownload {
    url: string;
    guid: string;
    feedUrl?: string;
    title: string;
    podcastTitle: string;
    filename: string;
    fileSize?: number;
    completedAt: string;
}

export interface FailedDownload {
    title: string;
    podcastTitle: string;
    errorCode: string;
    /** v1.5.0 — snapshot of the original request, so the renderer can re-queue
     *  the exact same download ("Retry failed"). Optional for backward compat. */
    request?: DownloadRequest;
    /** v1.6.0 — when it failed (ISO), for the Downloads view. */
    failedAt?: string;
}

export interface ArchiveEntry {
    guid: string;
    podcastTitle: string;
    title: string;
    pubDate: string;
    downloadedAt: string;
    filename?: string;
    feedUrl?: string;     // v1.3.5 — feed origin, for accurate per-feed counts (B6)
    fileSize?: number;    // v0.7.4 — bytes on disk
    checksum?: string;    // v0.7.4 — SHA-256 hex
    bitrate?: number;     // v0.7.4 — kbps
    sampleRate?: number;  // v0.7.4 — Hz
    /** v1.6.0 — the download folder the file was written to. The archive used to
     *  resolve every file against the CURRENT folder, so changing it in Settings
     *  turned the whole library "missing". */
    baseDir?: string;
}

export interface ArchiveStats {
    totalFiles: number;
    totalPodcasts: number;
    oldestDate: string | null;
    newestDate: string | null;
}

/** v1.6.0 — quick = presence + byte size; full = also re-hash every file (SHA-256). */
export type HealthCheckMode = 'quick' | 'full';

export interface HealthCheckFile { guid: string; feedUrl?: string; title: string; podcast: string; filename: string }

export interface HealthCheckResult {
    /** v1.6.0 — which verification produced this report. Absent = full (legacy). */
    mode?: HealthCheckMode;
    /** v1.6.0 — true when the user stopped the check: counters cover what was examined. */
    cancelled?: boolean;
    total: number;
    present: number;
    missing: number;
    /** L10: present files whose stored SHA-256 (full) or byte size (quick) no
     *  longer matches the file on disk. */
    corrupted: number;
    totalSizeBytes: number;
    missingFiles: HealthCheckFile[];
    /** L10: files that exist but fail the re-check (silent corruption / tampering). */
    corruptedFiles: HealthCheckFile[];
}

/** v1.6.0 — Health Check progress push. */
export interface HealthCheckProgress {
    done: number;
    total: number;
}

// v1.5.0 — Guided archive repair: re-link "missing" entries to files found by
// SHA-256 in the podcast folder (manual renames, template changes).
export interface ArchiveRepairResult {
    /** Candidate files actually hashed during the scan. */
    scanned: number;
    repaired: number;
    repairedFiles: { guid: string; title: string; podcast: string; oldFilename: string; newFilename: string }[];
    /** Missing entries with a stored checksum for which no matching file was found. */
    unmatched: number;
    /** Missing entries without a stored checksum — impossible to match safely. */
    unrepairable: number;
}

export interface DownloadRequest {
    url: string;
    title: string;
    podcastTitle: string;
    guid: string;
    pubDate?: string;
    feedImageUrl?: string;     // URL cover di default del podcast per ID3 (v0.6.4)
    episodeImageUrl?: string;  // URL cover specifica dell'episodio, ha priorità (v1.3.10)
    feedUrl?: string;          // v1.3.5 — URL del feed di origine (B6)
    /** v1.6.0 — MIME type declared by the feed's <enclosure>: decides the file
     *  extension when the URL has none (it used to fall back to .mp3 blindly). */
    enclosureType?: string;
    /** v1.6.0 — what the archive keeps beside the audio (sidecar JSON, naming tokens). */
    meta?: EpisodeMeta;
}

/** v1.6.0 — episode metadata preserved in the sidecar and used by naming tokens. */
export interface EpisodeMeta {
    description?: string;
    link?: string;
    duration?: string;
    season?: string;
    episode?: string;
    episodeType?: string;
    enclosureLength?: number;
}

export interface DownloadResult {
    // 'duplicate': the same enclosure URL is already queued or downloading —
    // the request was ignored (S3)
    status: 'queued' | 'duplicate';
}

// v0.6.9 — Disk space info returned by CHECK_DISK_SPACE
export interface DiskSpaceInfo {
    freeBytes: number;
    totalBytes: number;
}

// v0.7.5 — Network path validation
export interface PathValidationResult {
    ok: boolean;
    isNetworkPath: boolean;
    error?: 'TIMEOUT' | 'NOT_WRITABLE' | string;
}

// v0.7.5 — Auto-Update status (push event payload)
export type UpdateStatus =
    | { type: 'idle' }
    | { type: 'checking' }
    | { type: 'not-available' }
    | { type: 'available'; version: string }
    | { type: 'downloading'; percent: number }
    | { type: 'ready' }
    | { type: 'error'; message: string };

// v0.6.10 — Archive NAS migration
export interface MigrationResult {
    moved: number;
    errors: number;
    newPath: string;
    /** True only when the download path was actually re-pointed to newPath.
     *  False when the migration was refused or moved nothing, so the renderer
     *  must NOT show newPath as the active folder. */
    pathChanged: boolean;
    /** Set when the migration was refused up front, before moving anything. */
    refused?: 'busy' | 'nested-path';
}

export interface MigrationProgress {
    moved: number;
    total: number;
    currentFolder: string;
}

// ── IPC Channel Constants ────────────────────────────────────
// Used by both ipc.ts (main) and preload.ts / vite-env.d.ts (renderer)

export const IPC_CHANNELS = {
    PARSE_FEED: 'parse-feed',
    GET_FEEDS: 'get-feeds',
    ADD_FEED: 'add-feed',
    REMOVE_FEED: 'remove-feed',
    START_DOWNLOAD: 'start-download',
    DOWNLOAD_PROGRESS: 'download-progress',
    CHOOSE_FOLDER: 'choose-folder',
    GET_DOWNLOAD_PATH: 'get-download-path',
    SET_DOWNLOAD_PATH: 'set-download-path',
    GET_DOWNLOADED_EPISODES: 'get-downloaded-episodes',
    IMPORT_OPML: 'import-opml',
    EXPORT_OPML: 'export-opml',
    EXPORT_ARCHIVE_CSV: 'export-archive-csv',
    STOP_BATCH: 'stop-batch',
    REMOVE_HISTORY_ITEM: 'remove-history-item',
    RESET_HISTORY: 'reset-history',
    SHOW_IN_FOLDER: 'show-in-folder',
    GET_HELP_CONTENT: 'get-help-content',
    // Push events (main → renderer)
    FEEDS_UPDATED: 'feeds-updated',
    DOWNLOADS_UPDATED: 'downloads-updated',
    BATCH_COMPLETED: 'batch-completed',
    QUEUE_UPDATED: 'queue-updated',
    // Queue management
    CANCEL_DOWNLOAD: 'cancel-download',
    // Pause/Resume (v1.5.0) — non-destructive: keeps .part/.part.meta and
    // resumes via HTTP Range + If-Range
    PAUSE_DOWNLOAD: 'pause-download',
    RESUME_DOWNLOAD: 'resume-download',
    PAUSE_QUEUE: 'pause-queue',
    RESUME_QUEUE: 'resume-queue',
    // Concurrency & Stats
    GET_CONCURRENCY: 'get-concurrency',
    SET_CONCURRENCY: 'set-concurrency',
    GET_ARCHIVE_STATS: 'get-archive-stats',
    // UI locale sync (renderer → main, for OS notifications)
    SET_LOCALE: 'set-locale',
    // Naming Template (v0.5.4)
    GET_NAMING_TEMPLATE: 'get-naming-template',
    SET_NAMING_TEMPLATE: 'set-naming-template',
    // Sidecar JSON (v0.5.5)
    GET_SIDECAR_ENABLED: 'get-sidecar-enabled',
    SET_SIDECAR_ENABLED: 'set-sidecar-enabled',
    // Health Check (v0.6.0)
    RUN_HEALTH_CHECK: 'run-health-check',
    // v0.7.6 — Mark missing files as not downloaded
    MARK_MISSING_NOT_DOWNLOADED: 'mark-missing-not-downloaded',
    // v1.5.0 — Guided archive repair (re-link missing files by checksum)
    REPAIR_ARCHIVE: 'repair-archive',
    // ID3 Tagging (v0.6.4)
    GET_ID3_ENABLED: 'get-id3-enabled',
    SET_ID3_ENABLED: 'set-id3-enabled',
    // Speed Throttle (v0.6.5)
    GET_SPEED_LIMIT: 'get-speed-limit',
    SET_SPEED_LIMIT: 'set-speed-limit',
    // File Size Cap (v1.5.0) — MB, 0 = unlimited
    GET_FILE_SIZE_LIMIT: 'get-file-size-limit',
    SET_FILE_SIZE_LIMIT: 'set-file-size-limit',
    // v1.5.0 — push: clicking the new-episodes OS notification opens this feed
    OPEN_FEED: 'open-feed',
    // Disk Space (v0.6.9)
    CHECK_DISK_SPACE: 'check-disk-space',
    // Archive Migration (v0.6.10)
    MIGRATE_ARCHIVE: 'migrate-archive',
    MIGRATION_PROGRESS: 'migration-progress',
    // Network Path Validation (v0.7.5)
    VALIDATE_PATH: 'validate-path',
    // Auto-Update (v0.7.5)
    CHECK_FOR_UPDATE: 'check-for-update',
    INSTALL_UPDATE: 'install-update',
    // v1.5.0 — consent step (Titan): download starts only on explicit request
    DOWNLOAD_UPDATE: 'download-update',
    UPDATE_STATUS: 'update-status',
    // Open a directory in the system file manager
    OPEN_FOLDER: 'open-folder',
    // M3U playlist export (F5)
    EXPORT_M3U: 'export-m3u',
    // Archive view (F1)
    GET_ARCHIVE: 'get-archive',
    OPEN_ARCHIVE_FILE: 'open-archive-file',
    // Auto-refresh (F3)
    GET_AUTO_REFRESH_INTERVAL: 'get-auto-refresh-interval',
    SET_AUTO_REFRESH_INTERVAL: 'set-auto-refresh-interval',
    // N2 — renderer tells main it regained connectivity → trigger a refresh
    NOTIFY_ONLINE: 'notify-online',
    // Changelog in-app (v1.4.0)
    GET_CHANGELOG: 'get-changelog',
    // v1.5.0 — Titan pattern: decide-once whether to auto-open the changelog
    CONSUME_WHATS_NEW: 'consume-whats-new',
    // B1 — open the bundled PDF manual for the current language
    OPEN_MANUAL_PDF: 'open-manual-pdf',
    // v1.5.0 — apre nel browser un indirizzo del progetto (contatti, donazioni,
    // repository). Il main accetta solo una lista chiusa di host: il renderer non
    // può far aprire un URL arbitrario.
    OPEN_EXTERNAL: 'open-external',
    // Maintenance (v1.4.0) — remove orphaned .part temp files
    CLEAN_PART_FILES: 'clean-part-files',

    // ── v1.6.0 ──────────────────────────────────────────────
    // push: queue-wide state (pause, reason, run counters)
    QUEUE_STATE: 'queue-state',
    GET_QUEUE_STATE: 'get-queue-state',
    // push: one failed download (with its request, for "Retry")
    DOWNLOAD_FAILED: 'download-failed',
    // push: one archived episode, for the session's "Completed" list
    DOWNLOAD_COMPLETED: 'download-completed',
    // renderer → main: connectivity lost (auto-pause the queue)
    NOTIFY_OFFLINE: 'notify-offline',
    // downloads left in the queue when the app last quit
    GET_PENDING_DOWNLOADS: 'get-pending-downloads',
    RESUME_PENDING_DOWNLOADS: 'resume-pending-downloads',
    DISCARD_PENDING_DOWNLOADS: 'discard-pending-downloads',
    // check every feed now (same path as the background refresh) + progress push
    REFRESH_ALL: 'refresh-all',
    REFRESH_PROGRESS: 'refresh-progress',
    // per-feed automatic archiving
    SET_FEED_AUTO_DOWNLOAD: 'set-feed-auto-download',
    GET_FEED_STATS: 'get-feed-stats',
    // one archive row (detail panel) instead of the whole archive
    GET_ARCHIVE_ENTRY: 'get-archive-entry',
    // reveal an archived episode by its identity (guid + feed), not by title
    SHOW_ARCHIVED_EPISODE: 'show-archived-episode',
    // Health Check progress + cancel, and "accept the file on disk as reference"
    HEALTH_CHECK_PROGRESS: 'health-check-progress',
    CANCEL_HEALTH_CHECK: 'cancel-health-check',
    REBASELINE_ARCHIVE: 'rebaseline-archive',
    // accessibility preferences (Titan standard): interface zoom, reduced motion
    GET_UI_ZOOM: 'get-ui-zoom',
    SET_UI_ZOOM: 'set-ui-zoom',
    UI_ZOOM_CHANGED: 'ui-zoom-changed',
    GET_REDUCE_MOTION: 'get-reduce-motion',
    SET_REDUCE_MOTION: 'set-reduce-motion',
    // the folder the next downloads go to (resolved default when unset)
    GET_EFFECTIVE_DOWNLOAD_PATH: 'get-effective-download-path',
} as const;
