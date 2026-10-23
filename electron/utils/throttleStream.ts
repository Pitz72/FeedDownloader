import { Transform, TransformCallback } from 'stream';

/**
 * v1.6.0 — one bandwidth budget shared by every download in flight.
 *
 * The speed limit used to be applied per file: with 3 parallel downloads a
 * "500 KB/s" setting really meant 1.5 MB/s. Each chunk now books its
 * transmission time on a single shared timeline, so the sum of all transfers
 * stays at the configured rate whatever the concurrency.
 */
export class SharedRateLimiter {
    private nextFree = 0;

    constructor(private bytesPerSecond: number) {}

    get rate(): number { return this.bytesPerSecond; }

    setRate(bytesPerSecond: number): void {
        this.bytesPerSecond = bytesPerSecond;
        this.nextFree = 0;
    }

    /** Book `bytes` on the shared timeline; returns how long (ms) the caller must wait. */
    reserve(bytes: number): number {
        if (this.bytesPerSecond <= 0) return 0;
        const now = Date.now();
        const start = Math.max(now, this.nextFree);
        this.nextFree = start + (bytes / this.bytesPerSecond) * 1000;
        return Math.max(0, this.nextFree - now);
    }
}

/** Transform that delays chunks according to a (possibly shared) limiter. */
export function createLimitedStream(limiter: SharedRateLimiter): Transform {
    return new Transform({
        transform(chunk: Buffer, _encoding: string, callback: TransformCallback) {
            const delay = limiter.reserve(chunk.length);
            if (delay > 0) {
                setTimeout(() => {
                    this.push(chunk);
                    callback();
                }, delay);
            } else {
                this.push(chunk);
                callback();
            }
        }
    });
}

/**
 * Crea un Transform stream che limita il throughput a `bytesPerSecond`.
 * Se bytesPerSecond <= 0, restituisce null (nessun throttling).
 * Limite privato del singolo stream; per il limite globale usare
 * `createLimitedStream` con un `SharedRateLimiter` condiviso.
 */
export function createThrottleStream(bytesPerSecond: number): Transform | null {
    if (bytesPerSecond <= 0) return null;
    return createLimitedStream(new SharedRateLimiter(bytesPerSecond));
}
