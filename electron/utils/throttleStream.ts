import { Transform, TransformCallback } from 'stream';

/**
 * Crea un Transform stream che limita il throughput a `bytesPerSecond`.
 * Se bytesPerSecond <= 0, restituisce null (nessun throttling).
 */
export function createThrottleStream(bytesPerSecond: number): Transform | null {
    if (bytesPerSecond <= 0) return null;

    const startTime = Date.now();
    let bytesSent = 0;

    return new Transform({
        transform(chunk: Buffer, _encoding: string, callback: TransformCallback) {
            bytesSent += chunk.length;
            const elapsed = (Date.now() - startTime) / 1000; // secondi
            const expectedTime = bytesSent / bytesPerSecond;   // secondi al rate target
            const delay = Math.max(0, (expectedTime - elapsed) * 1000);

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
