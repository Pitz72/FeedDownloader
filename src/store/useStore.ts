import { create } from 'zustand';
import type { Feed, DownloadProgress } from '../types';

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
}

export const useStore = create<AppState>((set) => ({
    currentFeed: null,
    feeds: [],
    downloads: {},

    setCurrentFeed: (feed) => set({ currentFeed: feed }),
    setFeeds: (feeds) => set({ feeds }),
    updateDownload: (progress) => set((state) => ({
        downloads: {
            ...state.downloads,
            [progress.url]: { ...state.downloads[progress.url], ...progress }
        }
    })),

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
    resetBatch: () => set({ batchTotal: 0, batchCompleted: 0, isBatchDownloading: false }),
    stopBatch: async () => {
        set({ isBatchDownloading: false, batchTotal: 0, batchCompleted: 0 });
        await window.api.stopBatch();
    }
}));
