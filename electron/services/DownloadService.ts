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
                ...SAFE_AXIOS_CONFIG, // SSRF: validate resolved IP on every hop
                ...(resumedBytes > 0 ? { headers: { Range: `bytes=${resumedBytes}-` } } : {}),
            });

            // 404 means file was removed from server
            if (response.status === 404) {
                await fs.remove(tempPath).catch(() => { });
                throw new Error('EPISODE_NOT_FOUND');
            }

            const isResuming = resumedBytes > 0 && response.status === 206;

            // server ignored Range (200 not 206): discard partial, start fresh
            if (resumedBytes > 0 && response.status === 200) {
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

            return new Promise<void>((resolve, reject) => {
                // abort if no data received for STALL_TIMEOUT_MS
                let stallTimer: ReturnType<typeof setTimeout> | null = null;

                const resetStallTimer = () => {
                    if (stallTimer) clearTimeout(stallTimer);
                    stallTimer = setTimeout(() => {
                        response.data.destroy();
                        writer!.close();
                        // keep .part on stall so next attempt can resume
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

                    // skip integrity check on resumed partial content
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
