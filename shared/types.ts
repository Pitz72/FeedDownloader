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
    itunes?: { duration?: string };
}

export interface Feed {
    url: string;
    title: string;
    image?: string | { url: string };
    description?: string;
    episodes: Episode[];
    lastUpdated?: string;
}

/** Lightweight feed entry for the sidebar (no episodes) */
export interface FeedEntry {
    url: string;
    title: string;
    image?: string | { url: string };
    lastUpdated?: string;
}

export interface DownloadProgress {
    url: string;
    loaded: number;
    total: number;
    completed?: boolean;
    error?: boolean;
    notFound?: boolean; // v0.5.0 — ghost episode: server returned 404
}

export interface ArchiveEntry {
    guid: string;
    podcastTitle: string;
    title: string;
    pubDate: string;
    downloadedAt: string;
    filename?: string;
}

export interface ArchiveStats {
    totalFiles: number;
    totalPodcasts: number;
    oldestDate: string | null;
    newestDate: string | null;
}

export interface HealthCheckResult {
    total: number;
    present: number;
    missing: number;
    totalSizeBytes: number;
    missingFiles: { title: string; podcast: string; filename: string }[];
}

export interface DownloadRequest {
    url: string;
    title: string;
    podcastTitle: string;
    guid: string;
    pubDate?: string;
    feedImageUrl?: string;  // URL immagine del feed per cover art ID3 (v0.6.4)
}

export interface DownloadResult {
    status: 'queued';
}

// v0.6.9 — Disk space info returned by CHECK_DISK_SPACE
export interface DiskSpaceInfo {
    freeBytes: number;
    totalBytes: number;
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
    // ID3 Tagging (v0.6.4)
    GET_ID3_ENABLED: 'get-id3-enabled',
    SET_ID3_ENABLED: 'set-id3-enabled',
    // Speed Throttle (v0.6.5)
    GET_SPEED_LIMIT: 'get-speed-limit',
    SET_SPEED_LIMIT: 'set-speed-limit',
    // Disk Space (v0.6.9)
    CHECK_DISK_SPACE: 'check-disk-space',
} as const;
