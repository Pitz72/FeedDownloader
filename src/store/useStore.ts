import { create } from 'zustand';
import type { Feed, DownloadProgress, QueueItem, FailedDownload, UpdateStatus } from '../types';

const speedCache = new Map<string, { loaded: number; time: number }>();

// L27: post-completion cleanup timers, keyed by URL. Tracked (not fire-and-forget)
// so that clicking "Re-download" within the 2s window cancels the pending deletion
// — otherwise the stale timer wipes the freshly started download and the row flickers.
const cleanupTimers = new Map<string, ReturnType<typeof setTimeout>>();
function cancelCleanup(url: string): void {
    const t = cleanupTimers.get(url);
    if (t) { clearTimeout(t); cleanupTimers.delete(url); }
}

// URLs that belong to the CURRENT batch. Module-level (not in state) to avoid
// re-renders. When set, only completions of these URLs count toward the batch —
// so a single, non-batch download finishing mid-batch can't inflate the counter.
let batchUrls: Set<string> | null = null;

export interface AppState {
    currentFeed: Feed | null;
    feeds: Feed[];
    // Download progress keyed by enclosure URL. L28 (by design): two episodes that
    // share the exact same enclosure URL therefore share one progress entry — the
    // download itself is deduplicated by URL upstream, so this correctly mirrors
    // that a single transfer is in flight for both rows.
    downloads: Record<string, DownloadProgress>;

    setCurrentFeed: (feed: Feed | null) => void;
    setFeeds: (feeds: Feed[]) => void;
    updateDownload: (progress: DownloadProgress) => void;

    batchTotal: number;
    batchCompleted: number;
    isBatchDownloading: boolean;
    startBatch: (total: number, urls?: string[]) => void;
    incrementBatch: (url?: string) => void;
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

    // F1 — Archive view
    viewMode: 'feeds' | 'archive';
    setViewMode: (mode: 'feeds' | 'archive') => void;

    // G1 — Download panel visibility
    downloadPanelOpen: boolean;
    setDownloadPanelOpen: (open: boolean) => void;

    // N1 — auto-update status (persistent in-app banner + Settings)
    updateStatus: UpdateStatus;
    setUpdateStatus: (status: UpdateStatus) => void;
    // dismissed by the user for the current status episode
    updateBannerDismissed: boolean;
    setUpdateBannerDismissed: (dismissed: boolean) => void;
}

export const useStore = create<AppState>((set) => ({
    currentFeed: null,
    feeds: [],
    downloads: {},

    setCurrentFeed: (feed) => set({ currentFeed: feed }),
    setFeeds: (feeds) => set({ feeds }),
    updateDownload: (progress) => {
        // M32: a cancelled download disappears immediately — no green check, no
        // "archived" tag on an episode that was never downloaded.
        if (progress.cancelled) {
            speedCache.delete(progress.url);
            cancelCleanup(progress.url);
            set((state) => {
                const updated = { ...state.downloads };
                delete updated[progress.url];
                return { downloads: updated };
            });
            return;
        }
        // L27: a fresh in-flight tick means a (re-)download is active — cancel any
        // pending post-completion cleanup so it doesn't erase the new run.
        if (!progress.completed && !progress.error) {
            cancelCleanup(progress.url);
        }
        const enriched: DownloadProgress = { ...progress };
        // L9: speed is computable from loaded bytes alone; only ETA needs a total.
        if (!progress.completed && !progress.error && progress.loaded > 0) {
            const prev = speedCache.get(progress.url);
            const now = Date.now();
            if (prev && now > prev.time) {
                const dt = (now - prev.time) / 1000;
                const db = progress.loaded - prev.loaded;
                if (db >= 0 && dt > 0) {
                    enriched.speed = db / dt;
                    enriched.eta = enriched.speed > 0 && progress.total > 0
                        ? Math.round((progress.total - progress.loaded) / enriched.speed)
                        : undefined;
                }
            }
            speedCache.set(progress.url, { loaded: progress.loaded, time: Date.now() });
        }
        if (progress.completed || progress.error) {
            speedCache.delete(progress.url);
        }
        set((state) => ({
            downloads: {
                ...state.downloads,
                [progress.url]: { ...state.downloads[progress.url], ...enriched }
            }
        }));
        // Schedule cleanup after 2s to let the UI render the final state
        if (progress.completed || progress.error) {
            cancelCleanup(progress.url); // avoid stacking duplicate timers
            const timer = setTimeout(() => {
                cleanupTimers.delete(progress.url);
                set((state) => {
                    const updated = { ...state.downloads };
                    delete updated[progress.url];
                    return { downloads: updated };
                });
            }, 2000);
            cleanupTimers.set(progress.url, timer);
        }
    },

    // Batch Download State
    batchTotal: 0,
    batchCompleted: 0,
    isBatchDownloading: false,

    startBatch: (total, urls) => set((state) => {
        if (urls) {
            if (batchUrls && state.isBatchDownloading) {
                urls.forEach(u => batchUrls!.add(u)); // merge into the running batch
            } else {
                batchUrls = new Set(urls);
            }
        }
        if (state.isBatchDownloading) {
            return { batchTotal: state.batchTotal + total };
        }
        return { batchTotal: total, batchCompleted: 0, isBatchDownloading: true, downloadPanelOpen: true };
    }),
    incrementBatch: (url) => set((state) => {
        // B5: ignore completions outside an active batch (e.g. single downloads
        // while idle), and — when we know the batch's URLs — completions that
        // don't belong to this batch.
        if (!state.isBatchDownloading) return {};
        if (batchUrls && url) {
            if (!batchUrls.has(url)) return {};
            batchUrls.delete(url);
        }
        const newCompleted = state.batchCompleted + 1;
        const isFinished = newCompleted >= state.batchTotal;
        if (isFinished) batchUrls = null;
        return {
            batchCompleted: newCompleted,
            isBatchDownloading: !isFinished
        };
    }),
    resetBatch: () => { batchUrls = null; set({ batchTotal: 0, batchCompleted: 0, isBatchDownloading: false, batchFailed: [] }); },
    stopBatch: async () => {
        batchUrls = null;
        speedCache.clear();
        cleanupTimers.forEach(clearTimeout);
        cleanupTimers.clear();
        // S11: also drop the per-episode progress entries — aborted in-flight
        // downloads never send a final progress event, so without this their
        // rows stay stuck on a frozen spinner until app restart.
        set({ isBatchDownloading: false, batchTotal: 0, batchCompleted: 0, queueItems: [], batchFailed: [], downloads: {} });
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

    // F1 — Archive view
    viewMode: 'feeds',
    setViewMode: (mode) => set({ viewMode: mode }),

    // G1 — Download panel visibility
    downloadPanelOpen: false,
    setDownloadPanelOpen: (open) => set({ downloadPanelOpen: open }),

    // N1 — auto-update status
    updateStatus: { type: 'idle' },
    setUpdateStatus: (status) => set({ updateStatus: status, updateBannerDismissed: false }),
    updateBannerDismissed: false,
    setUpdateBannerDismissed: (dismissed) => set({ updateBannerDismissed: dismissed }),
}));

// L40: the download panel counts as "visible" while a batch runs, or briefly
// after it finishes (to show the completion summary). This derived flag lived,
// copy-pasted, in DownloadPanel, EpisodeDetailPanel and ToastContext — now a
// single selector: `useStore(selectPanelVisible)`.
export const selectPanelVisible = (s: AppState): boolean =>
    s.isBatchDownloading || (s.batchCompleted > 0 && s.batchCompleted >= s.batchTotal);
