/// <reference types="vite/client" />

// Re-export shared types for use in global declarations
import type { Feed, FeedEntry, DownloadProgress, DownloadRequest, DownloadResult, ArchiveStats, HealthCheckResult, DiskSpaceInfo } from '../shared/types'

declare global {
    const __APP_VERSION__: string;
    interface Window {
        api: {
            parseFeed: (url: string) => Promise<Feed>;
            getFeeds: () => Promise<FeedEntry[]>;
            addFeed: (feed: FeedEntry) => Promise<FeedEntry[]>;
            removeFeed: (url: string) => Promise<FeedEntry[]>;
            startDownload: (data: DownloadRequest) => Promise<DownloadResult>;
            getDownloadedEpisodes: () => Promise<string[]>;
            onDownloadProgress: (callback: (event: Electron.IpcRendererEvent, data: DownloadProgress) => void) => () => void;
            chooseFolder: () => Promise<string | null>;
            getDownloadPath: () => Promise<string>;
            setDownloadPath: (path: string) => Promise<boolean>;
            stopBatch: () => Promise<boolean>;
            showInFolder: (podcastTitle: string, title: string, enclosureUrl?: string) => Promise<void>;
            removeDownloadedEpisode: (guid: string) => Promise<boolean>;
            resetDownloadHistory: () => Promise<boolean>;
            getHelpContent: (lang: string) => Promise<string>;
            importOPML: () => Promise<{ count: number }>;
            exportOPML: () => Promise<boolean>;
            exportArchiveCSV: () => Promise<boolean>;
            // Push events
            onFeedsUpdated: (callback: (event: Electron.IpcRendererEvent, feeds: FeedEntry[]) => void) => () => void;
            onDownloadsUpdated: (callback: (event: Electron.IpcRendererEvent, guids: string[]) => void) => () => void;
            onBatchCompleted: (callback: (event: Electron.IpcRendererEvent, data: { total: number }) => void) => () => void;
            // Concurrency
            getConcurrency: () => Promise<number>;
            setConcurrency: (n: number) => Promise<boolean>;
            // Archive Stats
            getArchiveStats: () => Promise<ArchiveStats>;
            // Locale Sync (v0.4.10)
            setLocale: (locale: string) => Promise<boolean>;
            // Naming Template (v0.5.4)
            getNamingTemplate: () => Promise<string>;
            setNamingTemplate: (template: string) => Promise<boolean>;
            // Sidecar JSON (v0.5.5)
            getSidecarEnabled: () => Promise<boolean>;
            setSidecarEnabled: (enabled: boolean) => Promise<boolean>;
            // Health Check (v0.6.0)
            runHealthCheck: () => Promise<HealthCheckResult>;
            // ID3 Tagging (v0.6.4)
            getId3Enabled: () => Promise<boolean>;
            setId3Enabled: (enabled: boolean) => Promise<boolean>;
            // Speed Throttle (v0.6.5)
            getSpeedLimit: () => Promise<number>;
            setSpeedLimit: (kbps: number) => Promise<boolean>;
            // Disk Space (v0.6.9)
            checkDiskSpace: (dirPath: string) => Promise<DiskSpaceInfo | null>;
        };
    }
}

export {};
