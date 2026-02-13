/// <reference types="vite/client" />

interface Window {
    api: {
        parseFeed: (url: string) => Promise<any>;
        getFeeds: () => Promise<any[]>;
        addFeed: (feed: any) => Promise<any[]>;
        removeFeed: (url: string) => Promise<any[]>;
        startDownload: (data: { url: string; title: string; podcastTitle: string; guid: string }) => Promise<any>;
        getDownloadedEpisodes: () => Promise<string[]>;
        onDownloadProgress: (callback: (event: any, data: any) => void) => () => void;
        removeDownloadProgressListener: () => void;
        chooseFolder: () => Promise<string | null>;
        getDownloadPath: () => Promise<string>;
        setDownloadPath: (path: string) => Promise<void>;
        stopBatch: () => Promise<void>;
        showInFolder: (podcastTitle: string, title: string) => Promise<void>;
        removeDownloadedEpisode: (guid: string) => Promise<void>;
        resetDownloadHistory: () => Promise<void>;
        getHelpContent: (lang: string) => Promise<string>;
    };
    electron: {
        ipcRenderer: {
            invoke(channel: string, ...args: any[]): Promise<any>;
            on(channel: string, listener: (event: any, ...args: any[]) => void): void;
            removeListener(channel: string, listener: (...args: any[]) => void): void;
        }
    }
}
