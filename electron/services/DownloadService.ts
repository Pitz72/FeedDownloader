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
                const err = error as { code?: string; message?: string; retryAfterMs?: number };

                // Critical Errors - Do not retry
                if (err.message === 'DOWNLOAD_ABORTED') {
                    // M2: an explicit user cancel must not leave .part garbage
                    // behind (the resume of a cancelled download is unwanted).
                    await fs.remove(`${outputPath}.part`).catch(() => { });
                    await fs.remove(`${outputPath}.part.meta`).catch(() => { });
                    throw error;
                }
                if (err.code === 'ENOSPC') throw new Error("DISK_FULL: No space left on device.");
                if (err.code === 'EPERM' || err.code === 'EACCES') throw new Error("PERMISSION_DENIED: Access denied to write file.");
                if (err.message === 'DISK_FULL') throw error;
                if (err.message === 'EPISODE_NOT_FOUND') throw error;
                // M3: timeouts and stalls are typically transient (a 60s network
                // gap) — they now go through the retry loop and, since the .part
                // is kept, the next attempt resumes instead of restarting.

                console.error(`Download attempt ${i + 1} failed:`, error);

                // on integrity failure, delete .part to force a fresh download
                if (err.message === 'INTEGRITY_CHECK_FAILED') {
                    await fs.remove(`${outputPath}.part`).catch(() => { });
                    await fs.remove(`${outputPath}.part.meta`).catch(() => { });
                }
                // For other transient errors, keep .part file so next attempt can resume
                await fs.remove(outputPath).catch(() => { });

                if (i === attempts - 1) throw error; // Throw on last attempt

                // L7: honor Retry-After on 429 (capped at 60s); otherwise
                // exponential backoff: 1s, 2s, 4s...
                const delay = err.retryAfterMs !== undefined
                    ? Math.min(err.retryAfterMs, 60_000)
                    : 1000 * Math.pow(2, i);
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }
    }

    private async attemptDownload(url: string, outputPath: string, onProgress: (loaded: number, total: number) => void, speedLimitKBps?: number, signal?: AbortSignal) {
        const tempPath = `${outputPath}.part`;
        // S1: resuming blindly can splice bytes of a *changed* remote file onto a
        // stale prefix — silent audio corruption. The validator (ETag or
        // Last-Modified) of the response that created the .part is persisted next
        // to it and sent back as If-Range; a changed file then returns 200 (full
        // body) instead of 206 and the stale partial is discarded.
        const metaPath = `${tempPath}.meta`;
        const removeTemp = async () => {
            await fs.remove(tempPath).catch(() => { });
            await fs.remove(metaPath).catch(() => { });
        };

        let resumedBytes = 0;
        try {
            const stat = await fs.stat(tempPath);
            resumedBytes = stat.size;
        } catch {
            // No partial file — start from scratch
        }

        let resumeValidator: string | null = null;
        if (resumedBytes > 0) {
            try {
                const meta = await fs.readJson(metaPath) as { validator?: string };
                resumeValidator = typeof meta?.validator === 'string' && meta.validator ? meta.validator : null;
            } catch {
                resumeValidator = null;
            }
            if (!resumeValidator) {
                // No validator stored (old .part or server sent none): a resume
                // can't be verified, so start fresh.
                await removeTemp();
                resumedBytes = 0;
            }
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
                ...(resumedBytes > 0 ? { headers: { Range: `bytes=${resumedBytes}-`, 'If-Range': resumeValidator! } } : {}),
            });

            // ── Status handling ──────────────────────────────────
            // (status is undefined under the unit-test mocks; guard so they pass)
            const status = response.status;
            if (status === 404) {
                response.data?.destroy?.();
                await removeTemp();
                throw new Error('EPISODE_NOT_FOUND');
            }
            // Server can't honor our Range (e.g. .part already complete): reset & retry fresh
            if (status === 416) {
                response.data?.destroy?.();
                await removeTemp();
                throw new Error('RANGE_RESET'); // retryable
            }
            if (status !== undefined && status !== 200 && status !== 206) {
                response.data?.destroy?.();
                const httpError = new Error(`HTTP_${status}`) as Error & { retryAfterMs?: number };
                if (status === 429) {
                    const retryAfter = parseInt(String(response.headers['retry-after'] ?? ''), 10);
                    if (Number.isFinite(retryAfter) && retryAfter > 0) httpError.retryAfterMs = retryAfter * 1000;
                }
                throw httpError; // retryable transient
            }

            const isResuming = resumedBytes > 0 && status === 206;

            // server ignored Range, or If-Range detected a changed file (200 not
            // 206): discard partial, start fresh
            if (resumedBytes > 0 && status === 200) {
                await removeTemp();
                resumedBytes = 0;
            }

            if (!isResuming) {
                const rawValidator = response.headers['etag'] || response.headers['last-modified'];
                const validator = typeof rawValidator === 'string' ? rawValidator : undefined;
                if (validator) {
                    try { void fs.writeJson(metaPath, { validator }).catch(() => { }); } catch { /* best-effort: without it the next attempt starts fresh */ }
                }
            }

            writer = isResuming
                ? fs.createWriteStream(tempPath, { flags: 'a' }) // append to partial
                : fs.createWriteStream(tempPath);

            const contentLength = response.headers['content-length'] != null ? String(response.headers['content-length']) : '';
            // for 206 responses, prefer the authoritative total from Content-Range
            // ("bytes start-end/total"); fall back to resumed offset + remainder
            const rangeTotal = String(response.headers['content-range'] ?? '').match(/\/(\d+)\s*$/)?.[1];
            const totalBytes = isResuming
                ? (rangeTotal ? parseInt(rangeTotal) : (contentLength ? resumedBytes + parseInt(contentLength) : 0))
                : (contentLength ? parseInt(contentLength) : 0);

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

                // Stall watchdog: any activity on the raw network stream keeps the
                // download alive, independent of how progress is measured below.
                response.data.on('data', resetStallTimer);

                // L19: with a speed limit, progress must count bytes leaving the
                // throttle (i.e. reaching disk), not the faster network arrival —
                // otherwise the bar hits 100% while the throttle is still draining.
                // Without a throttle the two streams are the same.
                // L9: when the server sends no Content-Length (totalBytes === 0) we
                // still report loaded bytes so the UI can show an indeterminate,
                // moving indicator instead of a frozen 0%.
                const progressSource: NodeJS.EventEmitter = throttle ?? response.data;
                progressSource.on('data', (chunk: Buffer) => {
                    loaded += chunk.length;
                    onProgress(loaded, totalBytes);
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

                    // S1: size check applies to resumed transfers too — totalBytes
                    // already accounts for the resumed offset (Content-Range total).
                    // M4: absolute tolerance. The old 0.1% relative tolerance let
                    // ~100 KB (seconds of audio) go missing on a 100 MB file; a
                    // correct transfer matches the expected size to the byte, so
                    // only trailing-byte quirks are absorbed.
                    if (totalBytes > 0 && Math.abs(loaded - totalBytes) > 64) {
                        await removeTemp();
                        fail(new Error('INTEGRITY_CHECK_FAILED'));
                        return;
                    }

                    try {
                        await fs.rename(tempPath, outputPath);
                        await fs.remove(metaPath).catch(() => { });
                        done();
                    } catch (e) {
                        fail(e);
                    }
                });

                writer!.on('error', async (err: NodeJS.ErrnoException) => {
                    await removeTemp();
                    if (err.code === 'ENOSPC') fail(new Error('DISK_FULL'));
                    else fail(err);
                });
            });
        } catch (error) {
            if (writer) writer.close();

            const axiosErr = error as { code?: string };
            if (axiosErr.code === 'ERR_CANCELED') {
                await removeTemp();
                throw new Error('DOWNLOAD_ABORTED');
            }
            if (axiosErr.code === 'ECONNABORTED') {
                throw new Error('DOWNLOAD_TIMEOUT');
            }
            throw error;
        }
    }
}
