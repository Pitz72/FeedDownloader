/**
 * BatchTracker — Thread-safe batch download state manager.
 *
 * Solves the race condition where individual START_DOWNLOAD calls
 * increment `total` one-by-one while async queue tasks complete
 * concurrently, causing premature `completed >= total` checks.
 *
 * Strategy: use a stabilisation window. After the last `track()` call,
 * wait a short debounce before allowing completion checks. This ensures
 * all downloads in a burst are registered before any completion is evaluated.
 */
export class BatchTracker {
    private _total = 0;
    private _completed = 0;
    private _active = false;
    private _sealed = false;
    private _sealTimer: ReturnType<typeof setTimeout> | null = null;

    /** Debounce window in ms — time to wait after last track() before sealing */
    private readonly SEAL_DELAY_MS = 200;

    /**
     * Register a new download in the batch.
     * Resets the seal timer on every call so the batch isn't
     * considered "sealed" until all downloads have been queued.
     */
    track(): void {
        this._total++;
        this._active = true;
        this._sealed = false;

        // Reset the seal timer: the batch is only sealed
        // SEAL_DELAY_MS after the LAST track() call
        if (this._sealTimer) {
            clearTimeout(this._sealTimer);
        }
        this._sealTimer = setTimeout(() => {
            this._sealed = true;
            this._sealTimer = null;
        }, this.SEAL_DELAY_MS);
    }

    /**
     * Mark one download as completed.
     * Returns the total count if the entire batch is now complete,
     * or `null` if the batch is still in progress.
     *
     * A batch is considered complete ONLY when:
     * 1. It has been sealed (no new track() calls for SEAL_DELAY_MS)
     * 2. All tracked downloads have completed
     */
    complete(): number | null {
        this._completed++;

        if (this._sealed && this._completed >= this._total && this._active) {
            const total = this._total;
            this.reset();
            return total;
        }

        return null;
    }

    /** Force-reset all state (used by STOP_BATCH) */
    reset(): void {
        this._total = 0;
        this._completed = 0;
        this._active = false;
        this._sealed = false;
        if (this._sealTimer) {
            clearTimeout(this._sealTimer);
            this._sealTimer = null;
        }
    }

    get total(): number { return this._total; }
    get completed(): number { return this._completed; }
    get active(): boolean { return this._active; }
    get sealed(): boolean { return this._sealed; }
}
