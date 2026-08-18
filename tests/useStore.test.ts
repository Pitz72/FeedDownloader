import { describe, it, expect, beforeEach, vi } from 'vitest';

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
const { useStore } = await import('../src/store/useStore');

describe('useStore (Zustand)', () => {

    beforeEach(() => {
        // Reset store to initial state before each test
        useStore.setState({
            currentFeed: null,
            feeds: [],
            downloads: {},
            batchTotal: 0,
            batchCompleted: 0,
            isBatchDownloading: false,
            batchFailed: [],
            isQueuePaused: false,
        });
        vi.clearAllMocks();
        mockStartDownload.mockResolvedValue({ status: 'queued' });
    });

    // ── Feeds ────────────────────────────────────────────────────
    describe('Feed state', () => {
        it('should start with null currentFeed', () => {
            expect(useStore.getState().currentFeed).toBeNull();
        });

        it('should set currentFeed', () => {
            const feed = { url: 'https://a.com', title: 'A', episodes: [] };
            useStore.getState().setCurrentFeed(feed);
            expect(useStore.getState().currentFeed).toEqual(feed);
        });

        it('should clear currentFeed with null', () => {
            useStore.getState().setCurrentFeed({ url: 'https://a.com', title: 'A', episodes: [] });
            useStore.getState().setCurrentFeed(null);
            expect(useStore.getState().currentFeed).toBeNull();
        });

        it('should set feeds array', () => {
            const feeds = [
                { url: 'https://a.com', title: 'A', episodes: [] },
                { url: 'https://b.com', title: 'B', episodes: [] },
            ];
            useStore.getState().setFeeds(feeds);
            expect(useStore.getState().feeds).toHaveLength(2);
        });
    });

    // ── Downloads Progress ───────────────────────────────────────
    describe('Download progress', () => {
        it('should start with empty downloads', () => {
            expect(useStore.getState().downloads).toEqual({});
        });

        it('should track download progress by URL', () => {
            useStore.getState().updateDownload({ url: 'http://dl.com/ep1.mp3', loaded: 50, total: 100 });
            const state = useStore.getState();
            // `paused: false` is set explicitly on every regular tick (v1.5.0)
            expect(state.downloads['http://dl.com/ep1.mp3']).toEqual({ url: 'http://dl.com/ep1.mp3', loaded: 50, total: 100, paused: false });
        });

        it('should update existing download progress', () => {
            useStore.getState().updateDownload({ url: 'http://dl.com/ep1.mp3', loaded: 50, total: 100 });
            useStore.getState().updateDownload({ url: 'http://dl.com/ep1.mp3', loaded: 100, total: 100, completed: true });
            const dl = useStore.getState().downloads['http://dl.com/ep1.mp3'];
            expect(dl.loaded).toBe(100);
            expect(dl.completed).toBe(true);
        });

        it('should track multiple downloads independently', () => {
            useStore.getState().updateDownload({ url: 'http://dl.com/ep1.mp3', loaded: 30, total: 100 });
            useStore.getState().updateDownload({ url: 'http://dl.com/ep2.mp3', loaded: 70, total: 200 });
            const state = useStore.getState();
            expect(Object.keys(state.downloads)).toHaveLength(2);
            expect(state.downloads['http://dl.com/ep1.mp3'].loaded).toBe(30);
            expect(state.downloads['http://dl.com/ep2.mp3'].loaded).toBe(70);
        });
    });

    // ── Batch Download ───────────────────────────────────────────
    describe('Batch download state', () => {
        it('should start with batch inactive', () => {
            const state = useStore.getState();
            expect(state.isBatchDownloading).toBe(false);
            expect(state.batchTotal).toBe(0);
            expect(state.batchCompleted).toBe(0);
        });

        it('should start a batch download', () => {
            useStore.getState().startBatch(10);
            const state = useStore.getState();
            expect(state.isBatchDownloading).toBe(true);
            expect(state.batchTotal).toBe(10);
            expect(state.batchCompleted).toBe(0);
        });

        it('should add to batch total when already downloading', () => {
            useStore.getState().startBatch(5);
            useStore.getState().startBatch(3);
            expect(useStore.getState().batchTotal).toBe(8);
        });

        it('should increment batch completed', () => {
            useStore.getState().startBatch(3);
            useStore.getState().incrementBatch();
            expect(useStore.getState().batchCompleted).toBe(1);
            expect(useStore.getState().isBatchDownloading).toBe(true);
        });

        it('should mark batch as finished when all completed', () => {
            useStore.getState().startBatch(2);
            useStore.getState().incrementBatch();
            useStore.getState().incrementBatch();
            expect(useStore.getState().isBatchDownloading).toBe(false);
            expect(useStore.getState().batchCompleted).toBe(2);
        });

        it('should reset batch state', () => {
            useStore.getState().startBatch(5);
            useStore.getState().incrementBatch();
            useStore.getState().resetBatch();
            const state = useStore.getState();
            expect(state.batchTotal).toBe(0);
            expect(state.batchCompleted).toBe(0);
            expect(state.isBatchDownloading).toBe(false);
        });

        it('should call window.api.stopBatch when stopping batch', async () => {
            useStore.getState().startBatch(5);
            await useStore.getState().stopBatch();
            expect(mockStopBatch).toHaveBeenCalledOnce();
            expect(useStore.getState().isBatchDownloading).toBe(false);
        });
    });

    // ── Pause/Resume (v1.5.0) ────────────────────────────────────
    describe('Queue pause/resume', () => {
        it('pauseQueue sets the flag and calls the API', async () => {
            await useStore.getState().pauseQueue();
            expect(useStore.getState().isQueuePaused).toBe(true);
            expect(mockPauseQueue).toHaveBeenCalledOnce();
        });

        it('resumeQueue clears the flag and calls the API', async () => {
            await useStore.getState().pauseQueue();
            await useStore.getState().resumeQueue();
            expect(useStore.getState().isQueuePaused).toBe(false);
            expect(mockResumeQueue).toHaveBeenCalledOnce();
        });

        it('stopBatch clears the paused flag', async () => {
            await useStore.getState().pauseQueue();
            await useStore.getState().stopBatch();
            expect(useStore.getState().isQueuePaused).toBe(false);
        });

        it('a paused progress tick freezes the row (no speed/eta), a later tick unfreezes it', () => {
            const url = 'http://dl.com/ep1.mp3';
            useStore.getState().updateDownload({ url, loaded: 50, total: 100 });
            useStore.getState().updateDownload({ url, loaded: 60, total: 100, paused: true });
            let dl = useStore.getState().downloads[url];
            expect(dl.paused).toBe(true);
            expect(dl.loaded).toBe(60);
            expect(dl.speed).toBeUndefined();
            // resume: regular ticks come without the paused flag → row unfreezes
            useStore.getState().updateDownload({ url, loaded: 70, total: 100 });
            dl = useStore.getState().downloads[url];
            expect(dl.paused).toBe(false);
            expect(dl.loaded).toBe(70);
        });
    });

    // ── Retry failed (v1.5.0) ────────────────────────────────────
    describe('retryFailed', () => {
        const failedWithRequest = {
            title: 'Ep 1', podcastTitle: 'Show', errorCode: 'HTTP_503',
            request: { url: 'http://dl.com/ep1.mp3', title: 'Ep 1', podcastTitle: 'Show', guid: 'g1' },
        };
        const failedWithoutRequest = { title: 'Ep 2', podcastTitle: 'Show', errorCode: 'HTTP_500' };

        it('re-queues only failures that carry a request snapshot and clears the list', async () => {
            useStore.setState({ batchFailed: [failedWithRequest, failedWithoutRequest] });
            await useStore.getState().retryFailed();
            expect(mockStartDownload).toHaveBeenCalledTimes(1);
            expect(mockStartDownload).toHaveBeenCalledWith(failedWithRequest.request);
            expect(useStore.getState().batchFailed).toEqual([]);
            expect(useStore.getState().isBatchDownloading).toBe(true);
            expect(useStore.getState().batchTotal).toBe(1);
        });

        it('does nothing when no failure has a request snapshot', async () => {
            useStore.setState({ batchFailed: [failedWithoutRequest] });
            await useStore.getState().retryFailed();
            expect(mockStartDownload).not.toHaveBeenCalled();
            expect(useStore.getState().isBatchDownloading).toBe(false);
        });

        it('advances the batch counter for duplicates', async () => {
            mockStartDownload.mockResolvedValue({ status: 'duplicate' });
            useStore.setState({ batchFailed: [failedWithRequest] });
            await useStore.getState().retryFailed();
            // the only request was a duplicate → batch immediately complete
            expect(useStore.getState().batchCompleted).toBe(1);
            expect(useStore.getState().isBatchDownloading).toBe(false);
        });
    });
});
