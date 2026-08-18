import type { FailedDownload } from '../../shared/types';

/**
 * BatchTracker — batch download state manager, generation-aware.
 *
 * Two problems it solves:
 *
 * 1. **Premature completion** — individual START_DOWNLOAD calls increment the
 *    batch total one-by-one while async queue tasks complete concurrently. A
 *    stabilisation window (SEAL_DELAY_MS) ensures every download in a burst is
 *    registered before any completion is evaluated.
 *
 * 2. **Batch merging (B3)** — there is no explicit "batch start" signal from the
 *    renderer; bursts are inferred from the seal window. Previously a `track()`
 *    arriving while a *sealed* batch was still draining reopened it, merging two
 *    logically distinct batches (wrong totals, mixed failure lists). Now each
 *    burst is an independent **generation** with its own counters and failure
 *    list. A `track()` after the current generation is sealed starts a fresh one.
 *
 * Each download captures its generation id from `track()` and passes it back to
 * `recordFailure()` / `complete()`, so concurrent batches never cross-talk.
 */
interface Generation {
    id: number;
    total: number;
    completed: number;
    sealed: boolean;
    sealTimer: ReturnType<typeof setTimeout> | null;
    failed: FailedDownload[];
}

export interface BatchResult {
    total: number;
    failed: FailedDownload[];
}

export class BatchTracker {
    private generations = new Map<number, Generation>();
    private nextId = 1;
    /** id of the generation currently accepting new track() calls */
    private currentId: number | null = null;

    /** Debounce window in ms — time to wait after last track() before sealing */
    private readonly SEAL_DELAY_MS = 200;

    /**
     * Fired when a generation becomes complete *at seal time* — i.e. every
     * download finished before the seal window elapsed, so the last complete()
     * ran while still unsealed and returned null. Without this the batch would
     * never emit BATCH_COMPLETED and the generation would leak. The result is
     * the same object complete() returns on the normal path.
     */
    constructor(private readonly onSealedComplete?: (result: BatchResult) => void) {}

    private get current(): Generation | null {
        return this.currentId !== null ? this.generations.get(this.currentId) ?? null : null;
    }

    /**
     * Register a new download. Joins the current generation if it is still
     * accepting (active and not yet sealed); otherwise opens a new generation.
     * @returns the generation id this download belongs to.
     */
    track(): number {
        let gen = this.current;
        if (!gen || gen.sealed) {
            // Start a fresh generation (no active one, or the active one sealed).
            gen = { id: this.nextId++, total: 0, completed: 0, sealed: false, sealTimer: null, failed: [] };
            this.generations.set(gen.id, gen);
            this.currentId = gen.id;
        }

        gen.total++;
        gen.sealed = false;

        // Reset the seal timer: the generation seals SEAL_DELAY_MS after its LAST track().
        if (gen.sealTimer) clearTimeout(gen.sealTimer);
        const sealingId = gen.id;
        gen.sealTimer = setTimeout(() => {
            const g = this.generations.get(sealingId);
            if (!g) return;
            g.sealed = true;
            g.sealTimer = null;
            // If every download already finished before the seal fired, complete()
            // returned null each time (still unsealed) — so close the batch here.
            if (g.completed >= g.total) {
                const result: BatchResult = { total: g.total, failed: g.failed };
                this.generations.delete(g.id);
                if (this.currentId === g.id) this.currentId = null;
                this.onSealedComplete?.(result);
            }
        }, this.SEAL_DELAY_MS);

        return gen.id;
    }

    /** Record a failed download against its generation (kept separate per batch). */
    recordFailure(genId: number, failure: FailedDownload): void {
        const gen = this.generations.get(genId);
        if (gen) gen.failed.push(failure);
    }

    /**
     * Mark one download of a generation as completed.
     * @param genId generation id from track(); omitted → the current generation (legacy).
     * @returns `{ total, failed }` when that generation is fully complete (and sealed),
     *          else `null`.
     */
    complete(genId?: number): BatchResult | null {
        const gen = genId !== undefined ? this.generations.get(genId) : this.current;
        if (!gen) return null;

        gen.completed++;

        if (gen.sealed && gen.completed >= gen.total) {
            const result: BatchResult = { total: gen.total, failed: gen.failed };
            if (gen.sealTimer) clearTimeout(gen.sealTimer);
            this.generations.delete(gen.id);
            if (this.currentId === gen.id) this.currentId = null;
            return result;
        }

        return null;
    }

    /** Force-reset all state across every generation (used by STOP_BATCH). */
    reset(): void {
        for (const gen of this.generations.values()) {
            if (gen.sealTimer) clearTimeout(gen.sealTimer);
        }
        this.generations.clear();
        this.currentId = null;
    }

    // ── Introspection (reflects the current generation) ──────────────
    get total(): number { return this.current?.total ?? 0; }
    get completed(): number { return this.current?.completed ?? 0; }
    /** True if any generation is still in flight. */
    get active(): boolean { return this.generations.size > 0; }
    get sealed(): boolean { return this.current?.sealed ?? false; }
}
