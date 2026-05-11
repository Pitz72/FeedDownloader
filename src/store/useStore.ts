import { create } from 'zustand';
import type { Feed, DownloadProgress, QueueItem, FailedDownload } from '../types';

export interface AppState {
    currentFeed: Feed | null;
    feeds: Feed[];
    downloads: Record<string, DownloadProgress>;

    setCurrentFeed: (feed: Feed | null) => void;
    setFeeds: (feeds: Feed[]) => void;
    updateDownload: (progress: DownloadProgress) => void;

    batchTotal: number;
    batchCompleted: number;
    isBatchDownloading: boolean;
    startBatch: (total: number) => void;
    incrementBatch: () => void;
    resetBatch: () => void;
    stopBatch: () => Promise<void>;

    // E1 — Queue visibility
    queueItems: QueueItem[];
    setQueueItems: (items: QueueItem[]) => void;

    // E3 — Failure tracking
    batchFailed: FailedDownload[];
    setBatchFailed: (failed: FailedDownload[]) => void;

    // E6 — Download path visible in UI
    downloadPath: string;
    setDownloadPath: (path: string) => void;
}

export const useStore = create<AppState>((set) => ({
    currentFeed: null,
    feeds: [],
    downloads: {},

    setCurrentFeed: (feed) => set({ currentFeed: feed }),
    setFeeds: (feeds) => set({ feeds }),
    updateDownload: (progress) => {
        set((state) => ({
            downloads: {
                ...state.downloads,
                [progress.url]: { ...state.downloads[progress.url], ...progress }
            }
        }));
        // Schedule cleanup after 2s to let the UI render the final state
        if (progress.completed || progress.error) {
            setTimeout(() => set((state) => {
                const updated = { ...state.downloads };
                delete updated[progress.url];
                return { downloads: updated };
            }), 2000);
        }
    },

    // Batch Download State
    batchTotal: 0,
    batchCompleted: 0,
    isBatchDownloading: false,

    startBatch: (total) => set((state) => {
        if (state.isBatchDownloading) {
            return { batchTotal: state.batchTotal + total };
        }
        return { batchTotal: total, batchCompleted: 0, isBatchDownloading: true };
    }),
    incrementBatch: () => set((state) => {
        const newCompleted = state.batchCompleted + 1;
        const isFinished = newCompleted >= state.batchTotal;
        return {
            batchCompleted: newCompleted,
            isBatchDownloading: !isFinished
        };
    }),
    resetBatch: () => set({ batchTotal: 0, batchCompleted: 0, isBatchDownloading: false, batchFailed: [] }),
    stopBatch: async () => {
        set({ isBatchDownloading: false, batchTotal: 0, batchCompleted: 0, queueItems: [], batchFailed: [] });
        await window.api.stopBatch();
    },

    // E1 — Queue visibility
    queueItems: [],
    setQueueItems: (items) => set({ queueItems: items }),

    // E3 — Failure tracking
    batchFailed: [],
    setBatchFailed: (failed) => set({ batchFailed: failed }),

    // E6 — Download path visible in UI
    downloadPath: '',
    setDownloadPath: (path) => set({ downloadPath: path }),
}));
