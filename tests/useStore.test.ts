import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import type { CompletedDownload, FailedDownload, QueueItem, QueueState } from '../shared/types';

// ── Mock window.api ──────────────────────────────────────────────
const mockStopBatch = vi.fn().mockResolvedValue(true);
const mockPauseQueue = vi.fn().mockResolvedValue(true);
const mockResumeQueue = vi.fn().mockResolvedValue(true);
const mockStartDownload = vi.fn().mockResolvedValue({ status: 'queued' });
vi.stubGlobal('window', {
    api: {
        stopBatch: mockStopBatch,
        pauseQueue: mockPauseQueue,
        resumeQueue: mockResumeQueue,
        startDownload: mockStartDownload,
    },
});

// Import AFTER mocking window.api
const { useStore, selectQueueCounts } = await import('../src/store/useStore');

const IDLE: QueueState = { paused: false, pauseReason: null, run: { total: 0, completed: 0, failed: 0, cancelled: 0 } };

const failure = (url: string | null, extra: Partial<FailedDownload> = {}): FailedDownload => ({
    title: `Ep ${url}`, podcastTitle: 'Show', errorCode: 'HTTP_503',
    ...(url ? { request: { url, title: `Ep ${url}`, podcastTitle: 'Show', guid: `g-${url}` } } : {}),
    ...extra,
});

const done = (url: string): CompletedDownload => ({
    url, guid: `g-${url}`, feedUrl: 'https://f', title: url, podcastTitle: 'Show', filename: `${url}.mp3`, completedAt: '2026-10-23T10:00:00Z',
});

const item = (taskId: string, status: QueueItem['status']): QueueItem => ({
    taskId, url: `http://dl/${taskId}.mp3`, title: taskId, podcastTitle: 'Show', status,
});

describe('useStore (Zustand, v1.6.0)', () => {

    beforeEach(() => {
        useStore.setState({
            view: 'home',
            currentFeed: null,
            feeds: [],
            downloads: {},
            queueItems: [],
            queueState: IDLE,
            failures: [],
            completed: [],
            refresh: null,
        });
        vi.clearAllMocks();
        mockStartDownload.mockResolvedValue({ status: 'queued' });
    });

    // ── Navigazione ──────────────────────────────────────────────
    describe('Navigation', () => {
        it('opens on the library dashboard', async () => {
            vi.resetModules();
            const fresh = await import('../src/store/useStore');
            expect(fresh.useStore.getState().view).toBe('home');
        });

        it('switches view', () => {
            useStore.getState().setView('downloads');
            expect(useStore.getState().view).toBe('downloads');
        });

        it('sets and clears currentFeed', () => {
            const feed = { url: 'https://a.com', title: 'A', episodes: [] };
            useStore.getState().setCurrentFeed(feed);
            expect(useStore.getState().currentFeed).toEqual(feed);
            useStore.getState().setCurrentFeed(null);
            expect(useStore.getState().currentFeed).toBeNull();
        });

        it('sets the library', () => {
            useStore.getState().setFeeds([{ url: 'https://a.com', title: 'A' }, { url: 'https://b.com', title: 'B' }]);
            expect(useStore.getState().feeds).toHaveLength(2);
        });
    });

    // ── Avanzamento ──────────────────────────────────────────────
    describe('Download progress', () => {
        afterEach(() => { vi.useRealTimers(); });

        it('tracks progress by URL, with paused explicitly false on regular ticks', () => {
            useStore.getState().updateDownload({ url: 'http://dl.com/ep1.mp3', loaded: 50, total: 100 });
            expect(useStore.getState().downloads['http://dl.com/ep1.mp3']).toEqual({ url: 'http://dl.com/ep1.mp3', loaded: 50, total: 100, paused: false });
        });

        it('tracks several downloads independently', () => {
            useStore.getState().updateDownload({ url: 'http://dl.com/ep1.mp3', loaded: 30, total: 100 });
            useStore.getState().updateDownload({ url: 'http://dl.com/ep2.mp3', loaded: 70, total: 200 });
            const { downloads } = useStore.getState();
            expect(Object.keys(downloads)).toHaveLength(2);
            expect(downloads['http://dl.com/ep2.mp3'].loaded).toBe(70);
        });

        it('a cancelled download disappears at once (M32)', () => {
            const url = 'http://dl.com/ep1.mp3';
            useStore.getState().updateDownload({ url, loaded: 50, total: 100 });
            useStore.getState().updateDownload({ url, loaded: 0, total: 0, cancelled: true });
            expect(useStore.getState().downloads[url]).toBeUndefined();
        });

        it('a completed download is cleaned up after 2 s', () => {
            vi.useFakeTimers();
            const url = 'http://dl.com/ep1.mp3';
            useStore.getState().updateDownload({ url, loaded: 100, total: 100, completed: true });
            expect(useStore.getState().downloads[url].completed).toBe(true);
            vi.advanceTimersByTime(2000);
            expect(useStore.getState().downloads[url]).toBeUndefined();
        });

        it('a fresh tick cancels the pending cleanup of a re-download (L27)', () => {
            vi.useFakeTimers();
            const url = 'http://dl.com/ep1.mp3';
            useStore.getState().updateDownload({ url, loaded: 100, total: 100, completed: true });
            useStore.getState().updateDownload({ url, loaded: 10, total: 100 });
            vi.advanceTimersByTime(2500);
            expect(useStore.getState().downloads[url].loaded).toBe(10);
        });

        it('a paused tick freezes the row (no speed/eta), a later tick unfreezes it', () => {
            const url = 'http://dl.com/ep1.mp3';
            useStore.getState().updateDownload({ url, loaded: 50, total: 100 });
            useStore.getState().updateDownload({ url, loaded: 60, total: 100, paused: true });
            let dl = useStore.getState().downloads[url];
            expect(dl.paused).toBe(true);
            expect(dl.speed).toBeUndefined();
            useStore.getState().updateDownload({ url, loaded: 70, total: 100 });
            dl = useStore.getState().downloads[url];
            expect(dl.paused).toBe(false);
            expect(dl.loaded).toBe(70);
        });
    });

    // ── Coda (il main è l'unica fonte di verità) ─────────────────
    describe('Queue', () => {
        it('counts active, waiting and paused items', () => {
            useStore.getState().setQueueItems([item('a', 'downloading'), item('b', 'pending'), item('c', 'pending'), item('d', 'paused')]);
            expect(selectQueueCounts(useStore.getState())).toEqual({ active: 1, waiting: 2, paused: 1, total: 4 });
        });

        it('pauseQueue is optimistic and calls the API', async () => {
            await useStore.getState().pauseQueue();
            expect(useStore.getState().queueState).toMatchObject({ paused: true, pauseReason: 'user' });
            expect(mockPauseQueue).toHaveBeenCalledOnce();
        });

        it('resumeQueue clears the pause and calls the API', async () => {
            useStore.getState().setQueueState({ ...IDLE, paused: true, pauseReason: 'offline' });
            await useStore.getState().resumeQueue();
            expect(useStore.getState().queueState).toMatchObject({ paused: false, pauseReason: null });
            expect(mockResumeQueue).toHaveBeenCalledOnce();
        });

        it('stopQueue empties queue and progress rows (S11) and calls the API', async () => {
            useStore.getState().setQueueItems([item('a', 'downloading')]);
            useStore.getState().setQueueState({ paused: true, pauseReason: 'user', run: { total: 5, completed: 2, failed: 0, cancelled: 0 } });
            useStore.getState().updateDownload({ url: 'http://dl/a.mp3', loaded: 10, total: 100 });
            await useStore.getState().stopQueue();
            const s = useStore.getState();
            expect(s.queueItems).toEqual([]);
            expect(s.downloads).toEqual({});
            expect(s.queueState).toEqual(IDLE);
            expect(mockStopBatch).toHaveBeenCalledOnce();
        });

        it('takes the queue state pushed by the main process as is', () => {
            const pushed: QueueState = { paused: true, pauseReason: 'offline', run: { total: 9, completed: 4, failed: 1, cancelled: 0 } };
            useStore.getState().setQueueState(pushed);
            expect(useStore.getState().queueState).toEqual(pushed);
        });
    });

    // ── Non riusciti ─────────────────────────────────────────────
    describe('Failures', () => {
        it('newest first; the same episode failing again replaces its entry', () => {
            useStore.getState().addFailure(failure('a'));
            useStore.getState().addFailure(failure('b'));
            useStore.getState().addFailure(failure('a', { errorCode: 'DOWNLOAD_STALLED' }));
            const list = useStore.getState().failures;
            expect(list.map(f => f.request?.url)).toEqual(['a', 'b']);
            expect(list[0].errorCode).toBe('DOWNLOAD_STALLED');
        });

        it('dismisses one and clears all', () => {
            useStore.getState().addFailure(failure('a'));
            useStore.getState().addFailure(failure('b'));
            useStore.getState().dismissFailure('a');
            expect(useStore.getState().failures.map(f => f.request?.url)).toEqual(['b']);
            useStore.getState().clearFailures();
            expect(useStore.getState().failures).toEqual([]);
        });

        it('retryFailures re-queues every failure with a request snapshot', async () => {
            useStore.setState({ failures: [failure('a'), failure(null), failure('b')] });
            const n = await useStore.getState().retryFailures();
            expect(n).toBe(2);
            expect(mockStartDownload).toHaveBeenCalledTimes(2);
            expect(mockStartDownload).toHaveBeenCalledWith(failure('a').request);
            // the one without a snapshot can't be retried and stays listed
            expect(useStore.getState().failures).toHaveLength(1);
            expect(useStore.getState().failures[0].request).toBeUndefined();
        });

        it('retryFailures(urls) touches only the given ones', async () => {
            useStore.setState({ failures: [failure('a'), failure('b')] });
            const n = await useStore.getState().retryFailures(['b']);
            expect(n).toBe(1);
            expect(mockStartDownload).toHaveBeenCalledWith(failure('b').request);
            expect(useStore.getState().failures.map(f => f.request?.url)).toEqual(['a']);
        });

        it('duplicates are not counted as queued', async () => {
            mockStartDownload.mockResolvedValue({ status: 'duplicate' });
            useStore.setState({ failures: [failure('a')] });
            expect(await useStore.getState().retryFailures()).toBe(0);
            expect(useStore.getState().failures).toEqual([]);
        });

        it('a request refused up front goes back into the list', async () => {
            mockStartDownload.mockRejectedValueOnce(new Error('INVALID_URL'));
            useStore.setState({ failures: [failure('a')] });
            expect(await useStore.getState().retryFailures()).toBe(0);
            expect(useStore.getState().failures.map(f => f.request?.url)).toEqual(['a']);
        });

        it('returns 0 and calls nothing when there is nothing to retry', async () => {
            useStore.setState({ failures: [failure(null)] });
            expect(await useStore.getState().retryFailures()).toBe(0);
            expect(mockStartDownload).not.toHaveBeenCalled();
        });
    });

    // ── Completati della sessione ────────────────────────────────
    describe('Completed', () => {
        it('newest first, without duplicates, and clearable', () => {
            useStore.getState().addCompleted(done('a'));
            useStore.getState().addCompleted(done('b'));
            useStore.getState().addCompleted(done('a'));
            expect(useStore.getState().completed.map(c => c.url)).toEqual(['a', 'b']);
            useStore.getState().clearCompleted();
            expect(useStore.getState().completed).toEqual([]);
        });

        it('keeps the newest 500', () => {
            for (let i = 0; i < 520; i++) useStore.getState().addCompleted(done(`u${i}`));
            const list = useStore.getState().completed;
            expect(list).toHaveLength(500);
            expect(list[0].url).toBe('u519');
        });
    });

    // ── Controllo dei feed e aggiornamenti ───────────────────────
    describe('Refresh and update notice', () => {
        it('tracks the "check all" progress', () => {
            useStore.getState().setRefresh({ done: 2, total: 5 });
            expect(useStore.getState().refresh).toEqual({ done: 2, total: 5 });
            useStore.getState().setRefresh(null);
            expect(useStore.getState().refresh).toBeNull();
        });

        it('a dismissed update notice comes back only when the kind of news changes', () => {
            useStore.getState().setUpdateStatus({ type: 'downloading', percent: 10 });
            useStore.getState().setUpdateNoticeDismissed(true);
            useStore.getState().setUpdateStatus({ type: 'downloading', percent: 40 });
            expect(useStore.getState().updateNoticeDismissed).toBe(true);
            useStore.getState().setUpdateStatus({ type: 'ready' });
            expect(useStore.getState().updateNoticeDismissed).toBe(false);
        });
    });
});
