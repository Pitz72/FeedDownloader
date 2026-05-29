import axios from 'axios';
import fs from 'fs-extra';
import { createThrottleStream } from '../utils/throttleStream';
import { SAFE_AXIOS_CONFIG } from '../utils/safeHttp';

/** Timeout for the initial HTTP connection (ms) */
const CONNECTION_TIMEOUT_MS = 30_000; // 30s

/** If no data is received for this long, abort the download (ms) */
const STALL_TIMEOUT_MS = 60_000; // 60s

export class DownloadService {
    async downloadFile(url: string, outputPath: string, onProgress: (loaded: number, total: number) => void, speedLimitKBps?: number, attempts = 3, signal?: AbortSignal) {
        for (let i = 0; i < attempts; i++) {
            try {
                await this.attemptDownload(url, outputPath, onProgress, speedLimitKBps, signal);
                return; // Success
            } catch (error: unknown) {
                const err = error as { code?: string; message?: string };

                // Critical Errors - Do not retry
                if (err.message === 'DOWNLOAD_ABORTED') throw error; // abort is permanent
                if (err.code === 'ENOSPC') throw new Error("DISK_FULL: No space left on device.");
                if (err.code === 'EPERM' || err.code === 'EACCES') throw new Error("PERMISSION_DENIED: Access denied to write file.");
                if (err.message === 'DISK_FULL') throw error;
                if (err.message === 'DOWNLOAD_TIMEOUT') throw error;
                if (err.message === 'DOWNLOAD_STALLED') throw error;
                if (err.message === 'EPISODE_NOT_FOUND') throw error;

                console.error(`Download attempt ${i + 1} failed:`, error);

                // on integrity failure, delete .part to force a fresh download
                if (err.message === 'INTEGRITY_CHECK_FAILED') {
                    await fs.remove(`${outputPath}.part`).catch(() => { });
                }
                // For other transient errors, keep .part file so next attempt can resume
                await fs.remove(outputPath).catch(() => { });

                if (i === attempts - 1) throw error; // Throw on last attempt

                // Exponential backoff: 1s, 2s, 4s...
                await new Promise(resolve => setTimeout(resolve, 1000 * Math.pow(2, i)));
            }
        }
    }

    private async attemptDownload(url: string, outputPath: string, onProgress: (loaded: number, total: number) => void, speedLimitKBps?: number, signal?: AbortSignal) {
        const tempPath = `${outputPath}.part`;

        let resumedBytes = 0;
        try {
            const stat = await fs.stat(tempPath);
            resumedBytes = stat.size;
        } catch {
            // No partial file — start from scratch
        }

        let writer: fs.WriteStream | null = null;

        try {
            const response = await axios({
                url,
                method: 'GET',
                responseType: 'stream',
                timeout: CONNECTION_TIMEOUT_MS,
                signal,
                // Inspect any status ourselves instead of letting axios throw on 4xx/5xx,
                // so 404 → EPISODE_NOT_FOUND is reachable (axios default rejects ≥400).
                validateStatus: () => true,
                ...SAFE_AXIOS_CONFIG, // SSRF: validate resolved IP on every hop
                ...(resumedBytes > 0 ? { headers: { Range: `bytes=${resumedBytes}-` } } : {}),
            });

            // ── Status handling ──────────────────────────────────
            // (status is undefined under the unit-test mocks; guard so they pass)
            const status = response.status;
            if (status === 404) {
                response.data?.destroy?.();
                await fs.remove(tempPath).catch(() => { });
                throw new Error('EPISODE_NOT_FOUND');
            }
            // Server can't honor our Range (e.g. .part already complete): reset & retry fresh
            if (status === 416) {
                response.data?.destroy?.();
                await fs.remove(tempPath).catch(() => { });
                throw new Error('RANGE_RESET'); // retryable
            }
            if (status !== undefined && status !== 200 && status !== 206) {
                response.data?.destroy?.();
                throw new Error(`HTTP_${status}`); // retryable transient
            }

            const isResuming = resumedBytes > 0 && status === 206;

            // server ignored Range (200 not 206): discard partial, start fresh
            if (resumedBytes > 0 && status === 200) {
                await fs.remove(tempPath).catch(() => { });
                resumedBytes = 0;
            }

            writer = isResuming
                ? fs.createWriteStream(tempPath, { flags: 'a' }) // append to partial
                : fs.createWriteStream(tempPath);

            const contentLength = response.headers['content-length'];
            // for 206 responses, Content-Length is remaining bytes; add resumed offset for total
            const totalBytes = contentLength
                ? (isResuming ? resumedBytes + parseInt(contentLength) : parseInt(contentLength))
                : 0;

            let loaded = resumedBytes; // Start progress counter from resume offset

            const throttle = speedLimitKBps && speedLimitKBps > 0
                ? createThrottleStream(speedLimitKBps * 1024)
                : null;

            return await new Promise<void>((resolve, reject) => {
                // ── Single-settle guard + centralized teardown ───
                let settled = false;
                let stallTimer: ReturnType<typeof setTimeout> | null = null;

                const cleanup = () => {
                    if (stallTimer) { clearTimeout(stallTimer); stallTimer = null; }
                    if (signal) signal.removeEventListener('abort', onAbort);
                };
                const done = () => {
                    if (settled) return;
                    settled = true;
                    cleanup();
                    resolve();
                };
                const fail = (err: unknown) => {
                    if (settled) return;
                    settled = true;
                    cleanup();
                    reject(err);
                };

                // Abort: tear down streams immediately (also covers mid-throttle delays
                // and the window between 'finish' and rename).
                function onAbort() {
                    response.data?.destroy?.();
                    writer?.destroy?.();
                    throttle?.destroy?.();
                    fail(new Error('DOWNLOAD_ABORTED'));
                }
                if (signal) {
                    if (signal.aborted) { onAbort(); return; }
                    signal.addEventListener('abort', onAbort);
                }

                // Abort if no data arrives for STALL_TIMEOUT_MS
                const resetStallTimer = () => {
                    if (stallTimer) clearTimeout(stallTimer);
                    stallTimer = setTimeout(() => {
                        response.data?.destroy?.();
                        writer?.close?.();
                        // keep .part on stall so the next attempt can resume
                        fail(new Error('DOWNLOAD_STALLED'));
                    }, STALL_TIMEOUT_MS);
                };
                resetStallTimer();

                // Progress + stall reset: listen on the raw (network) stream
                response.data.on('data', (chunk: Buffer) => {
                    loaded += chunk.length;
                    resetStallTimer();
                    if (totalBytes > 0) {
                        onProgress(loaded, totalBytes);
                    }
                });

                // Network/source errors (ECONNRESET etc.) — previously unhandled, which
                // left the stall timer armed and could reject a settled promise late.
                response.data.on('error', (err: NodeJS.ErrnoException) => {
                    writer?.close?.();
                    // keep .part for resume on transient network failure
                    fail(err);
                });

                // Pipe: through throttle if active, direct otherwise
                if (throttle) {
                    response.data.pipe(throttle).pipe(writer!);
                } else {
                    response.data.pipe(writer!);
                }

                writer!.on('finish', async () => {
                    if (settled) return;
                    if (stallTimer) { clearTimeout(stallTimer); stallTimer = null; }

                    // skip integrity check on resumed partial content
                    if (contentLength && !isResuming) {
                        const expected = parseInt(contentLength);
                        if (expected > 0 && Math.abs(loaded - expected) / expected > 0.01) {
                            await fs.remove(tempPath).catch(() => { });
                            fail(new Error('INTEGRITY_CHECK_FAILED'));
                            return;
                        }
                    }

                    try {
                        await fs.rename(tempPath, outputPath);
                        done();
                    } catch (e) {
                        fail(e);
                    }
                });

                writer!.on('error', async (err: NodeJS.ErrnoException) => {
                    await fs.remove(tempPath).catch(() => { });
                    if (err.code === 'ENOSPC') fail(new Error('DISK_FULL'));
                    else fail(err);
                });
            });
        } catch (error) {
            if (writer) writer.close();

            const axiosErr = error as { code?: string };
            if (axiosErr.code === 'ERR_CANCELED') {
                await fs.remove(tempPath).catch(() => {});
                throw new Error('DOWNLOAD_ABORTED');
            }
            if (axiosErr.code === 'ECONNABORTED') {
                throw new Error('DOWNLOAD_TIMEOUT');
            }
            throw error;
        }
    }
}
