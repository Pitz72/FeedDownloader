import { describe, it, expect, vi, beforeEach } from 'vitest';
import { DownloadService } from '../electron/services/DownloadService';
import { EventEmitter } from 'events';
import { Writable } from 'stream';

// ── Mock fs-extra ────────────────────────────────────────────────
vi.mock('fs-extra', () => ({
    default: {
        createWriteStream: vi.fn(),
        rename: vi.fn().mockResolvedValue(undefined),
        remove: vi.fn().mockResolvedValue(undefined),
    },
}));

import fs from 'fs-extra';

// ── Mock axios ───────────────────────────────────────────────────
vi.mock('axios', () => {
    return {
        default: vi.fn(),
    };
});

import axios from 'axios';

// Helper: create a mock writable stream
function createMockWriter() {
    const emitter = new EventEmitter();
    const writer = Object.assign(emitter, {
        close: vi.fn(),
        write: vi.fn(),
        end: vi.fn(),
    }) as unknown as Writable & { close: ReturnType<typeof vi.fn> };
    return writer;
}

// Helper: create a mock readable stream (response.data)
function createMockDataStream(chunks: Buffer[]) {
    const emitter = new EventEmitter();
    const stream = Object.assign(emitter, {
        pipe: vi.fn().mockImplementation((writer: EventEmitter) => {
            // Emit data chunks
            for (const chunk of chunks) {
                emitter.emit('data', chunk);
            }
            // Then signal finish on writer
            setTimeout(() => writer.emit('finish'), 5);
            return writer;
        }),
        destroy: vi.fn(),
    });
    return stream;
}


describe('DownloadService', () => {
    let service: DownloadService;
    let mockWriter: ReturnType<typeof createMockWriter>;

    beforeEach(() => {
        service = new DownloadService();
        mockWriter = createMockWriter();
        (fs.createWriteStream as ReturnType<typeof vi.fn>).mockReturnValue(mockWriter);
        vi.clearAllMocks();
        // Re-setup default mock for createWriteStream after clearAllMocks
        (fs.createWriteStream as ReturnType<typeof vi.fn>).mockReturnValue(mockWriter);
    });

    it('should download a file successfully', async () => {
        const chunk = Buffer.from('audio data here');
        const dataStream = createMockDataStream([chunk]);

        (axios as unknown as ReturnType<typeof vi.fn>).mockResolvedValue({
            headers: { 'content-length': String(chunk.length) },
            data: dataStream,
        });

        const onProgress = vi.fn();

        const downloadPromise = service.downloadFile('https://cdn.com/ep.mp3', '/tmp/ep.mp3', onProgress);

        // Wait for the stream to finish
        await new Promise(r => setTimeout(r, 20));
        mockWriter.emit('finish');

        await downloadPromise;

        expect(onProgress).toHaveBeenCalled();
        expect(fs.rename).toHaveBeenCalledWith('/tmp/ep.mp3.part', '/tmp/ep.mp3');
    });

    it('should pass timeout option to axios', async () => {
        const chunk = Buffer.from('data');
        const dataStream = createMockDataStream([chunk]);

        (axios as unknown as ReturnType<typeof vi.fn>).mockResolvedValue({
            headers: { 'content-length': String(chunk.length) },
            data: dataStream,
        });

        const downloadPromise = service.downloadFile('https://cdn.com/ep.mp3', '/tmp/ep.mp3', vi.fn());

        await new Promise(r => setTimeout(r, 20));
        mockWriter.emit('finish');
        await downloadPromise;

        // Verify axios was called with a timeout option
        expect(axios).toHaveBeenCalledWith(expect.objectContaining({
            timeout: 30_000,
        }));
    });

    it('should report progress with loaded and total', async () => {
        const chunk1 = Buffer.alloc(50);
        const chunk2 = Buffer.alloc(50);
        const dataStream = createMockDataStream([chunk1, chunk2]);

        (axios as unknown as ReturnType<typeof vi.fn>).mockResolvedValue({
            headers: { 'content-length': '100' },
            data: dataStream,
        });

        const progressCalls: [number, number][] = [];
        const onProgress = (loaded: number, total: number) => {
            progressCalls.push([loaded, total]);
        };

        const downloadPromise = service.downloadFile('https://cdn.com/ep.mp3', '/tmp/ep.mp3', onProgress);

        await new Promise(r => setTimeout(r, 20));
        mockWriter.emit('finish');

        await downloadPromise;

        expect(progressCalls.length).toBeGreaterThanOrEqual(2);
        expect(progressCalls[progressCalls.length - 1][0]).toBe(100);
        expect(progressCalls[progressCalls.length - 1][1]).toBe(100);
    });

    it('should throw DISK_FULL on ENOSPC and NOT retry', async () => {
        (axios as unknown as ReturnType<typeof vi.fn>).mockRejectedValue(
            Object.assign(new Error('No space'), { code: 'ENOSPC' })
        );

        await expect(
            service.downloadFile('https://cdn.com/ep.mp3', '/tmp/ep.mp3', vi.fn())
        ).rejects.toThrow('DISK_FULL');

        expect(axios).toHaveBeenCalledTimes(1);
    });

    it('should throw PERMISSION_DENIED on EPERM and NOT retry', async () => {
        (axios as unknown as ReturnType<typeof vi.fn>).mockRejectedValue(
            Object.assign(new Error('Permission denied'), { code: 'EPERM' })
        );

        await expect(
            service.downloadFile('https://cdn.com/ep.mp3', '/tmp/ep.mp3', vi.fn())
        ).rejects.toThrow('PERMISSION_DENIED');

        expect(axios).toHaveBeenCalledTimes(1);
    });

    it('should throw PERMISSION_DENIED on EACCES and NOT retry', async () => {
        (axios as unknown as ReturnType<typeof vi.fn>).mockRejectedValue(
            Object.assign(new Error('Access denied'), { code: 'EACCES' })
        );

        await expect(
            service.downloadFile('https://cdn.com/ep.mp3', '/tmp/ep.mp3', vi.fn())
        ).rejects.toThrow('PERMISSION_DENIED');
    });

    it('should throw DOWNLOAD_TIMEOUT on ECONNABORTED and NOT retry', async () => {
        (axios as unknown as ReturnType<typeof vi.fn>).mockRejectedValue(
            Object.assign(new Error('timeout exceeded'), { code: 'ECONNABORTED' })
        );

        await expect(
            service.downloadFile('https://cdn.com/ep.mp3', '/tmp/ep.mp3', vi.fn())
        ).rejects.toThrow('DOWNLOAD_TIMEOUT');

        // Should not retry on timeout
        expect(axios).toHaveBeenCalledTimes(1);
    });

    it('should retry up to 3 times on transient errors', async () => {
        (axios as unknown as ReturnType<typeof vi.fn>)
            .mockRejectedValueOnce(new Error('Network error'))
            .mockRejectedValueOnce(new Error('Network error'))
            .mockRejectedValueOnce(new Error('Network error'));

        await expect(
            service.downloadFile('https://cdn.com/ep.mp3', '/tmp/ep.mp3', vi.fn())
        ).rejects.toThrow('Network error');

        expect(axios).toHaveBeenCalledTimes(3);
    });

    it('should succeed on retry after transient failure', async () => {
        const chunk = Buffer.from('data');
        const dataStream = createMockDataStream([chunk]);

        // First attempt fails, second succeeds
        (axios as unknown as ReturnType<typeof vi.fn>)
            .mockRejectedValueOnce(new Error('Temporary failure'))
            .mockResolvedValueOnce({
                headers: { 'content-length': String(chunk.length) },
                data: dataStream,
            });

        const downloadPromise = service.downloadFile('https://cdn.com/ep.mp3', '/tmp/ep.mp3', vi.fn());

        // Wait for exponential backoff (1s for first retry) + stream
        await new Promise(r => setTimeout(r, 1200));
        mockWriter.emit('finish');

        await downloadPromise;

        expect(axios).toHaveBeenCalledTimes(2);
        expect(fs.rename).toHaveBeenCalled();
    });

    it('should throw EPISODE_NOT_FOUND on HTTP 404 and NOT retry', async () => {
        const dataStream = createMockDataStream([]);
        (axios as unknown as ReturnType<typeof vi.fn>).mockResolvedValue({
            status: 404,
            headers: {},
            data: dataStream,
        });

        await expect(
            service.downloadFile('https://cdn.com/gone.mp3', '/tmp/gone.mp3', vi.fn())
        ).rejects.toThrow('EPISODE_NOT_FOUND');

        // 404 is permanent: must not retry
        expect(axios).toHaveBeenCalledTimes(1);
    });

    it('should retry on transient HTTP 5xx status', async () => {
        const errStream = createMockDataStream([]);
        const okChunk = Buffer.from('data');
        const okStream = createMockDataStream([okChunk]);
        (axios as unknown as ReturnType<typeof vi.fn>)
            .mockResolvedValueOnce({ status: 503, headers: {}, data: errStream })
            .mockResolvedValueOnce({ status: 200, headers: { 'content-length': String(okChunk.length) }, data: okStream });

        const downloadPromise = service.downloadFile('https://cdn.com/ep.mp3', '/tmp/ep.mp3', vi.fn());
        await new Promise(r => setTimeout(r, 1200)); // backoff 1s + stream
        mockWriter.emit('finish');
        await downloadPromise;

        expect(axios).toHaveBeenCalledTimes(2);
        expect(fs.rename).toHaveBeenCalled();
    });

    it('should clean up partial files on error', async () => {
        (axios as unknown as ReturnType<typeof vi.fn>)
            .mockRejectedValueOnce(new Error('Fail 1'))
            .mockRejectedValueOnce(new Error('Fail 2'))
            .mockRejectedValueOnce(new Error('Fail 3'));

        await service.downloadFile('https://cdn.com/ep.mp3', '/tmp/ep.mp3', vi.fn()).catch(() => { });

        expect(fs.remove).toHaveBeenCalled();
    });
});
