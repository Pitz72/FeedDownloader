// ============================================================
// Runtime FeedDownloader Pro — Shared Type Definitions
// ============================================================

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
}

export interface Feed {
    url: string;
    title: string;
    image?: string | { url: string };
    description?: string;
    episodes: Episode[];
    lastUpdated?: string;
}

export interface DownloadProgress {
    url: string;
    loaded: number;
    total: number;
    completed?: boolean;
    error?: boolean;
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

// IPC Channel names — Single source of truth
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
    // v0.4.0 new
    GET_CONCURRENCY: 'get-concurrency',
    SET_CONCURRENCY: 'set-concurrency',
    GET_ARCHIVE_STATS: 'get-archive-stats',
} as const;
