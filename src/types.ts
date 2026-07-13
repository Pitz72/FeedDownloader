// ============================================================
// Runtime FeedDownloader Pro — Re-export from shared types
// This file exists for backward-compatibility with renderer imports.
// The canonical source is ../shared/types.ts
// ============================================================

export type {
    Episode,
    Feed,
    FeedEntry,
    DownloadProgress,
    ArchiveEntry,
    ArchiveStats,
    DownloadRequest,
    DownloadResult,
    QueueItem,
    FailedDownload,
    UpdateStatus,
} from '../shared/types';

export { IPC_CHANNELS } from '../shared/types';
