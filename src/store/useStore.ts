import { create } from 'zustand';
import type {
    Feed, FeedEntry, DownloadProgress, QueueItem, QueueState, FailedDownload, CompletedDownload, UpdateStatus,
} from '../../shared/types';

const speedCache = new Map<string, { loaded: number; time: number }>();

// L27: post-completion cleanup timers, keyed by URL. Tracked (not fire-and-forget)
// so that clicking "Re-download" within the 2s window cancels the pending deletion
// — otherwise the stale timer wipes the freshly started download and the row flickers.
const cleanupTimers = new Map<string, ReturnType<typeof setTimeout>>();
function cancelCleanup(url: string): void {
    const t = cleanupTimers.get(url);
    if (t) { clearTimeout(t); cleanupTimers.delete(url); }
}

/** How many archived episodes the session list keeps (newest first). */
const COMPLETED_KEEP = 500;

export type View = 'feed' | 'archive' | 'downloads';

const IDLE_QUEUE: QueueState = { paused: false, pauseReason: null, run: { total: 0, completed: 0, failed: 0, cancelled: 0 } };

export interface AppState {
    // ── Navigation ──
    view: View;
    setView: (view: View) => void;
    currentFeed: Feed | null;
    setCurrentFeed: (feed: Feed | null) => void;
    /** The library (sidebar, palette, top bar share it). */
    feeds: FeedEntry[];
    setFeeds: (feeds: FeedEntry[]) => void;
    /** Folder new downloads go to (resolved: the default when none was chosen). */
    downloadPath: string;
    setDownloadPath: (path: string) => void;

    // ── Download progress ──
    // Keyed by enclosure URL. L28 (by design): two episodes that share the exact
    // same enclosure URL share one progress entry — the download itself is
    // deduplicated by URL upstream, so this mirrors that a single transfer is in flight.
    downloads: Record<string, DownloadProgress>;
    updateDownload: (progress: DownloadProgress) => void;

    // ── Queue (v1.6.0: the main process is the single source of truth) ──
    queueItems: QueueItem[];
    setQueueItems: (items: QueueItem[]) => void;
    queueState: QueueState;
    setQueueState: (state: QueueState) => void;
    pauseQueue: () => Promise<void>;
    resumeQueue: () => Promise<void>;
    stopQueue: () => Promise<void>;

    // ── Session results ──
    failures: FailedDownload[];
    addFailure: (failure: FailedDownload) => void;
    dismissFailure: (url: string) => void;
    clearFailures: () => void;
    /** Re-queue failed downloads (all, or the given URLs) with their original request. */
    retryFailures: (urls?: string[]) => Promise<number>;
    completed: CompletedDownload[];
    addCompleted: (done: CompletedDownload) => void;
    clearCompleted: () => void;

    // ── "Check all" progress ──
    refresh: { done: number; total: number } | null;
    setRefresh: (p: { done: number; total: number } | null) => void;

    // ── N1: auto-update status (top bar notice + Settings) ──
    updateStatus: UpdateStatus;
    setUpdateStatus: (status: UpdateStatus) => void;
    updateNoticeDismissed: boolean;
    setUpdateNoticeDismissed: (dismissed: boolean) => void;
}

export const useStore = create<AppState>((set, get) => ({
    view: 'feed',
    setView: (view) => set({ view }),
    currentFeed: null,
    setCurrentFeed: (feed) => set({ currentFeed: feed }),
    feeds: [],
    setFeeds: (feeds) => set({ feeds }),
    downloadPath: '',
    setDownloadPath: (path) => set({ downloadPath: path }),

    downloads: {},
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
        // v1.5.0: pause is non-terminal — freeze the row where it is. Drop the
        // speed sample so the next resumed tick doesn't compute a bogus rate
        // across the paused gap, and blank speed/ETA on the frozen row.
        if (progress.paused) {
            speedCache.delete(progress.url);
            cancelCleanup(progress.url);
            set((state) => ({
                downloads: {
                    ...state.downloads,
                    [progress.url]: { ...state.downloads[progress.url], ...progress, speed: undefined, eta: undefined }
                }
            }));
            return;
        }
        // L27: a fresh in-flight tick means a (re-)download is active — cancel any
        // pending post-completion cleanup so it doesn't erase the new run.
        if (!progress.completed && !progress.error) {
            cancelCleanup(progress.url);
        }
        // `paused: false` is explicit — the row merge below would otherwise keep
        // a stale `paused: true` from before a resume (the main process omits the
        // flag on regular progress ticks).
        const enriched: DownloadProgress = { ...progress, paused: false };
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

    queueItems: [],
    setQueueItems: (items) => set({ queueItems: items }),
    queueState: IDLE_QUEUE,
    setQueueState: (queueState) => set({ queueState }),
    pauseQueue: async () => {
        // optimistic; the QUEUE_STATE push confirms it
        set((s) => ({ queueState: { ...s.queueState, paused: true, pauseReason: 'user' } }));
        await window.api.pauseQueue();
    },
    resumeQueue: async () => {
        set((s) => ({ queueState: { ...s.queueState, paused: false, pauseReason: null } }));
        await window.api.resumeQueue();
    },
    stopQueue: async () => {
        speedCache.clear();
        cleanupTimers.forEach(clearTimeout);
        cleanupTimers.clear();
        // S11: also drop the per-episode progress entries — aborted in-flight
        // downloads may never send a final progress event, so without this their
        // rows stay stuck on a frozen spinner until app restart.
        set({ queueItems: [], downloads: {}, queueState: IDLE_QUEUE });
        await window.api.stopBatch();
    },

    failures: [],
    addFailure: (failure) => set((s) => {
        const url = failure.request?.url;
        // the same episode failing again replaces its previous entry
        const rest = url ? s.failures.filter(f => f.request?.url !== url) : s.failures;
        return { failures: [failure, ...rest] };
    }),
    dismissFailure: (url) => set((s) => ({ failures: s.failures.filter(f => f.request?.url !== url) })),
    clearFailures: () => set({ failures: [] }),
    retryFailures: async (urls) => {
        const wanted = urls ? new Set(urls) : null;
        const targets = get().failures.filter(f => f.request && (!wanted || wanted.has(f.request.url)));
        if (targets.length === 0) return 0;
        const retried = new Set(targets.map(f => f.request!.url));
        set((s) => ({ failures: s.failures.filter(f => !f.request || !retried.has(f.request.url)) }));
        let queued = 0;
        for (const f of targets) {
            try {
                const res = await window.api.startDownload(f.request!);
                if (res.status === 'queued') queued++;
            } catch {
                // refused up front (invalid URL): back into the list
                get().addFailure(f);
            }
        }
        return queued;
    },
    completed: [],
    addCompleted: (done) => set((s) => ({ completed: [done, ...s.completed.filter(c => c.url !== done.url)].slice(0, COMPLETED_KEEP) })),
    clearCompleted: () => set({ completed: [] }),

    refresh: null,
    setRefresh: (refresh) => set({ refresh }),

    updateStatus: { type: 'idle' },
    setUpdateStatus: (status) => set((state) => ({
        updateStatus: status,
        // Only un-dismiss the notice when the KIND of news changes. Otherwise
        // every 'downloading' percent tick is a fresh setUpdateStatus call that
        // would resurrect a notice the user just closed mid-download.
        updateNoticeDismissed: status.type === state.updateStatus.type ? state.updateNoticeDismissed : false,
    })),
    updateNoticeDismissed: false,
    setUpdateNoticeDismissed: (dismissed) => set({ updateNoticeDismissed: dismissed }),
}));

/** Numbers for the top bar and the Downloads view. */
export function selectQueueCounts(s: AppState): { active: number; waiting: number; paused: number; total: number } {
    let active = 0, waiting = 0, paused = 0;
    for (const q of s.queueItems) {
        if (q.status === 'downloading') active++;
        else if (q.status === 'paused') paused++;
        else waiting++;
    }
    return { active, waiting, paused, total: s.queueItems.length };
}
