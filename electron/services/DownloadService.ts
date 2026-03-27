import axios from 'axios';
import fs from 'fs-extra';
import { createThrottleStream } from '../utils/throttleStream';

/** Timeout for the initial HTTP connection (ms) */
const CONNECTION_TIMEOUT_MS = 30_000; // 30s

/** If no data is received for this long, abort the download (ms) */
const STALL_TIMEOUT_MS = 60_000; // 60s

export class DownloadService {
    async downloadFile(url: string, outputPath: string, onProgress: (loaded: number, total: number) => void, speedLimitKBps?: number, attempts = 3) {
        for (let i = 0; i < attempts; i++) {
            try {
                await this.attemptDownload(url, outputPath, onProgress, speedLimitKBps);
                return; // Success
            } catch (error: unknown) {
                const err = error as { code?: string; message?: string };

                // Critical Errors - Do not retry
                if (err.code === 'ENOSPC') throw new Error("DISK_FULL: No space left on device.");
                if (err.code === 'EPERM' || err.code === 'EACCES') throw new Error("PERMISSION_DENIED: Access denied to write file.");
                if (err.message === 'DISK_FULL') throw error;
                if (err.message === 'DOWNLOAD_TIMEOUT') throw error;
                if (err.message === 'DOWNLOAD_STALLED') throw error;
                if (err.message === 'EPISODE_NOT_FOUND') throw error; // v0.5.0 — 404 is permanent, no retry

                console.error(`Download attempt ${i + 1} failed:`, error);

                // v0.6.1 — On integrity failure, delete .part to force a fresh download
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

    private async attemptDownload(url: string, outputPath: string, onProgress: (loaded: number, total: number) => void, speedLimitKBps?: number) {
        const tempPath = `${outputPath}.part`;

        // v0.6.1 — Check for existing partial download to resume via HTTP Range
        let resumedBytes = 0;
        try {
            const stat = await fs.stat(tempPath);
            resumedBytes = stat.size;
        } catch {
            // No partial file — start from scratch
        }

        let writer: fs.WriteStream | null = null;

        try {
            // v0.4.7 — connection timeout prevents hanging on unresponsive servers
            // v0.6.1 — include Range header when resuming a partial download
            const response = await axios({
                url,
                method: 'GET',
                responseType: 'stream',
                timeout: CONNECTION_TIMEOUT_MS,
                ...(resumedBytes > 0 ? { headers: { Range: `bytes=${resumedBytes}-` } } : {}),
            });

            // v0.5.0 — Ghost episode detection: 404 means file was removed from server
            if (response.status === 404) {
                await fs.remove(tempPath).catch(() => { });
                throw new Error('EPISODE_NOT_FOUND');
            }

            // v0.6.1 — Server returned 206 Partial Content: resume is active
            const isResuming = resumedBytes > 0 && response.status === 206;

            // v0.6.1 — Server ignored Range (responded 200): discard partial file, start fresh
            if (resumedBytes > 0 && response.status === 200) {
                await fs.remove(tempPath).catch(() => { });
                resumedBytes = 0;
            }

            writer = isResuming
                ? fs.createWriteStream(tempPath, { flags: 'a' }) // append to partial
                : fs.createWriteStream(tempPath);

            const contentLength = response.headers['content-length'];
            // v0.6.1 — For 206 responses, Content-Length is remaining bytes; add resumed offset for total
            const totalBytes = contentLength
                ? (isResuming ? resumedBytes + parseInt(contentLength) : parseInt(contentLength))
                : 0;

            let loaded = resumedBytes; // Start progress counter from resume offset

            // v0.6.5 — crea throttle stream se limite configurato
            const throttle = speedLimitKBps && speedLimitKBps > 0
                ? createThrottleStream(speedLimitKBps * 1024)
                : null;

            return new Promise<void>((resolve, reject) => {
                // v0.4.7 — stall detection: abort if no data received for STALL_TIMEOUT_MS
                let stallTimer: ReturnType<typeof setTimeout> | null = null;

                const resetStallTimer = () => {
                    if (stallTimer) clearTimeout(stallTimer);
                    stallTimer = setTimeout(() => {
                        response.data.destroy();
                        writer!.close();
                        // v0.6.1 — Keep .part file on stall so next attempt can resume
                        reject(new Error('DOWNLOAD_STALLED'));
                    }, STALL_TIMEOUT_MS);
                };

                // Start the stall timer
                resetStallTimer();

                // Stall detection e progress: ascolta sul raw stream (network)
                response.data.on('data', (chunk: Buffer) => {
                    loaded += chunk.length;
                    resetStallTimer(); // Got data — reset the stall timer
                    if (totalBytes > 0) {
                        onProgress(loaded, totalBytes);
                    }
                });

                // Pipe: attraverso throttle se attivo, diretto altrimenti
                if (throttle) {
                    response.data.pipe(throttle).pipe(writer!);
                } else {
                    response.data.pipe(writer!);
                }

                writer!.on('finish', async () => {
                    if (stallTimer) clearTimeout(stallTimer);

                    // v0.5.0 — Integrity check: only for full downloads (not resumed partial content)
                    if (contentLength && !isResuming) {
                        const expected = parseInt(contentLength);
                        if (expected > 0 && Math.abs(loaded - expected) / expected > 0.01) {
                            await fs.remove(tempPath).catch(() => { });
                            reject(new Error('INTEGRITY_CHECK_FAILED'));
                            return;
                        }
                    }

                    try {
                        await fs.rename(tempPath, outputPath);
                        resolve();
                    } catch (e) {
                        reject(e);
                    }
                });

                writer!.on('error', async (err: NodeJS.ErrnoException) => {
                    if (stallTimer) clearTimeout(stallTimer);
                    await fs.remove(tempPath).catch(() => { });

                    if (err.code === 'ENOSPC') reject(new Error('DISK_FULL'));
                    else reject(err);
                });
            });
        } catch (error) {
            if (writer) writer.close();

            // v0.4.7 — wrap axios timeout as DOWNLOAD_TIMEOUT
            const axiosErr = error as { code?: string };
            if (axiosErr.code === 'ECONNABORTED') {
                throw new Error('DOWNLOAD_TIMEOUT');
            }
            throw error;
        }
    }
}
