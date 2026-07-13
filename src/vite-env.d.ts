/// <reference types="vite/client" />

// Re-export shared types for use in global declarations
import type { Feed, FeedEntry, DownloadProgress, DownloadRequest, DownloadResult, ArchiveEntry, ArchiveStats, HealthCheckResult, DiskSpaceInfo, MigrationResult, MigrationProgress, PathValidationResult, UpdateStatus, QueueItem, FailedDownload } from '../shared/types'

declare global {
    const __APP_VERSION__: string;
    interface Window {
        api: {
            parseFeed: (url: string) => Promise<Feed>;
            getFeeds: () => Promise<FeedEntry[]>;
            addFeed: (feed: FeedEntry) => Promise<FeedEntry[]>;
            removeFeed: (url: string) => Promise<FeedEntry[]>;
            startDownload: (data: DownloadRequest) => Promise<DownloadResult>;
            getDownloadedEpisodes: (feedUrl?: string) => Promise<string[]>;
            onDownloadProgress: (callback: (event: Electron.IpcRendererEvent, data: DownloadProgress) => void) => () => void;
            chooseFolder: () => Promise<string | null>;
            getDownloadPath: () => Promise<string>;
            setDownloadPath: (path: string) => Promise<boolean>;
            stopBatch: () => Promise<boolean>;
            cancelDownload: (taskId: string) => Promise<boolean>;
            showInFolder: (podcastTitle: string, title: string, enclosureUrl?: string, pubDate?: string) => Promise<void>;
            removeDownloadedEpisode: (guid: string) => Promise<boolean>;
            resetDownloadHistory: () => Promise<boolean>;
            getHelpContent: (lang: string) => Promise<string>;
            importOPML: () => Promise<{ count: number }>;
            exportOPML: () => Promise<boolean>;
            exportArchiveCSV: () => Promise<boolean>;
            // Push events
            onFeedsUpdated: (callback: (event: Electron.IpcRendererEvent, feeds: FeedEntry[]) => void) => () => void;
            onDownloadsUpdated: (callback: (event: Electron.IpcRendererEvent) => void) => () => void;
            onBatchCompleted: (callback: (event: Electron.IpcRendererEvent, data: { total: number; failed: FailedDownload[] }) => void) => () => void;
            onQueueUpdated: (callback: (event: Electron.IpcRendererEvent, items: QueueItem[]) => void) => () => void;
            // Concurrency
            getConcurrency: () => Promise<number>;
            setConcurrency: (n: number) => Promise<boolean>;
            // Archive Stats
            getArchiveStats: () => Promise<ArchiveStats>;
            // Locale Sync
            setLocale: (locale: string) => Promise<boolean>;
            // Naming Template
            getNamingTemplate: () => Promise<string>;
            setNamingTemplate: (template: string) => Promise<boolean>;
            // Sidecar JSON
            getSidecarEnabled: () => Promise<boolean>;
            setSidecarEnabled: (enabled: boolean) => Promise<boolean>;
            // Health Check
            runHealthCheck: () => Promise<HealthCheckResult>;
            // Mark missing as not downloaded
            markMissingNotDownloaded: (guids: string[]) => Promise<boolean>;
            // ID3 Tagging
            getId3Enabled: () => Promise<boolean>;
            setId3Enabled: (enabled: boolean) => Promise<boolean>;
            // Speed Throttle
            getSpeedLimit: () => Promise<number>;
            setSpeedLimit: (kbps: number) => Promise<boolean>;
            // Disk Space
            checkDiskSpace: (dirPath: string) => Promise<DiskSpaceInfo | null>;
            // Archive Migration
            migrateArchive: (newPath: string) => Promise<MigrationResult>;
            onMigrationProgress: (callback: (event: Electron.IpcRendererEvent, data: MigrationProgress) => void) => () => void;
            // Network Path Validation
            validatePath: (dirPath: string) => Promise<PathValidationResult>;
            // Open folder in file manager
            openFolder: (dirPath: string) => Promise<void>;
            // M3U Export
            exportM3U: (podcastTitle: string) => Promise<boolean | null>;
            // Archive view (F1)
            getArchive: () => Promise<ArchiveEntry[]>;
            openArchiveFile: (podcastTitle: string, filename: string) => Promise<boolean>;
            // Auto-Update
            checkForUpdate: () => Promise<void>;
            installUpdate: () => Promise<void>;
            onUpdateStatus: (callback: (event: Electron.IpcRendererEvent, status: UpdateStatus) => void) => () => void;
            // Auto-Refresh (F3)
            getAutoRefreshInterval: () => Promise<number>;
            setAutoRefreshInterval: (hours: number) => Promise<boolean>;
            // N2 — connectivity regained
            notifyOnline: () => Promise<boolean>;
            // Changelog in-app (v1.4.0)
            getChangelog: (version?: string) => Promise<string>;
            // B1 — open bundled PDF manual for a language
            openManualPdf: (lang: string) => Promise<boolean>;
            // Maintenance — clean orphaned .part files
            cleanPartFiles: () => Promise<number>;
        };
    }
}

export {};
