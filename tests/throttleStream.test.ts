import { describe, it, expect } from 'vitest';
import { Transform } from 'stream';
import { createThrottleStream } from '../electron/utils/throttleStream';

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
