/// <reference types="vite/client" />

interface ArchiveStatsType {
    totalFiles: number;
    totalPodcasts: number;
    oldestDate: string | null;
    newestDate: string | null;
}

interface Window {
    api: {
        parseFeed: (url: string) => Promise<any>;
        getFeeds: () => Promise<{ url: string; title: string; lastUpdated: string; image?: any }[]>;
        addFeed: (feed: any) => Promise<any[]>;
        removeFeed: (url: string) => Promise<any[]>;
        startDownload: (data: { url: string; title: string; podcastTitle: string; guid: string; pubDate?: string }) => Promise<{ status: string }>;
        getDownloadedEpisodes: () => Promise<string[]>;
        onDownloadProgress: (callback: (event: any, data: { url: string; loaded: number; total: number; completed?: boolean; error?: boolean }) => void) => () => void;
        chooseFolder: () => Promise<string | null>;
        getDownloadPath: () => Promise<string>;
        setDownloadPath: (path: string) => Promise<boolean>;
        stopBatch: () => Promise<boolean>;
        showInFolder: (podcastTitle: string, title: string) => Promise<void>;
        removeDownloadedEpisode: (guid: string) => Promise<boolean>;
        resetDownloadHistory: () => Promise<boolean>;
        getHelpContent: (lang: string) => Promise<string>;
        importOPML: () => Promise<{ count: number }>;
        exportOPML: () => Promise<boolean>;
        exportArchiveCSV: () => Promise<boolean>;
        // v0.4.0 — Push events
        onFeedsUpdated: (callback: (event: any, feeds: any[]) => void) => () => void;
        onDownloadsUpdated: (callback: (event: any, guids: string[]) => void) => () => void;
        onBatchCompleted: (callback: (event: any, data: { total: number }) => void) => () => void;
        // v0.4.0 — Concurrency
        getConcurrency: () => Promise<number>;
        setConcurrency: (n: number) => Promise<boolean>;
        // v0.4.0 — Archive Stats
        getArchiveStats: () => Promise<ArchiveStatsType>;
    };
}
