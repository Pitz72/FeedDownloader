import { describe, it, expect } from 'vitest';
import { Transform } from 'stream';
import { createThrottleStream, SharedRateLimiter } from '../electron/utils/throttleStream';

describe('createThrottleStream', () => {
    it('returns null when the rate is 0 (unlimited)', () => {
        expect(createThrottleStream(0)).toBeNull();
    });

    it('returns null for a negative rate', () => {
        expect(createThrottleStream(-1)).toBeNull();
    });

    it('returns a Transform stream for a positive rate', () => {
        const t = createThrottleStream(1024);
        expect(t).toBeInstanceOf(Transform);
        t?.destroy();
    });

    it('passes every byte through unchanged (throttling delays, never drops)', async () => {
        const throttle = createThrottleStream(1024 * 1024)!; // 1 MB/s — fast enough for the test
        const chunks = [Buffer.from('hello '), Buffer.from('throttled '), Buffer.from('world')];
        const received: Buffer[] = [];

        await new Promise<void>((resolve, reject) => {
            throttle.on('data', (c: Buffer) => received.push(c));
            throttle.on('end', resolve);
            throttle.on('error', reject);
            for (const c of chunks) throttle.write(c);
            throttle.end();
        });

        expect(Buffer.concat(received).toString()).toBe('hello throttled world');
    });
});

// v1.6.0 — one budget for all downloads in flight
describe('SharedRateLimiter', () => {
    it('never delays when the rate is 0 (unlimited)', () => {
        const l = new SharedRateLimiter(0);
        expect(l.reserve(10_000_000)).toBe(0);
    });

    it('books chunks from different streams on ONE timeline', () => {
        const l = new SharedRateLimiter(1000); // 1000 B/s
        const a = l.reserve(500); // stream A: ~500 ms
        const b = l.reserve(500); // stream B: queued after A → ~1000 ms
        expect(a).toBeGreaterThanOrEqual(450);
        expect(a).toBeLessThanOrEqual(550);
        expect(b).toBeGreaterThanOrEqual(950);
        expect(b).toBeLessThanOrEqual(1050);
    });

    it('applies a new rate at once', () => {
        const l = new SharedRateLimiter(1000);
        l.reserve(5000);
        l.setRate(0);
        expect(l.reserve(5000)).toBe(0);
        expect(l.rate).toBe(0);
    });
});
