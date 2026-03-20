import axios from 'axios';
import fs from 'fs-extra';

/** Timeout for the initial HTTP connection (ms) */
const CONNECTION_TIMEOUT_MS = 30_000; // 30s

/** If no data is received for this long, abort the download (ms) */
const STALL_TIMEOUT_MS = 60_000; // 60s

export class DownloadService {
    async downloadFile(url: string, outputPath: string, onProgress: (loaded: number, total: number) => void, attempts = 3) {
        for (let i = 0; i < attempts; i++) {
            try {
                await this.attemptDownload(url, outputPath, onProgress);
                return; // Success
            } catch (error: unknown) {
                const err = error as { code?: string; message?: string };

                // Critical Errors - Do not retry
                if (err.code === 'ENOSPC') throw new Error("DISK_FULL: No space left on device.");
                if (err.code === 'EPERM' || err.code === 'EACCES') throw new Error("PERMISSION_DENIED: Access denied to write file.");
                if (err.message === 'DISK_FULL') throw error;
                if (err.message === 'DOWNLOAD_TIMEOUT') throw error;
                if (err.message === 'DOWNLOAD_STALLED') throw error;

                console.error(`Download attempt ${i + 1} failed:`, error);

                // Cleanup partial file
                await fs.remove(`${outputPath}.part`).catch(() => { });
                await fs.remove(outputPath).catch(() => { });

                if (i === attempts - 1) throw error; // Throw on last attempt

                // Exponential backoff: 1s, 2s, 4s...
                await new Promise(resolve => setTimeout(resolve, 1000 * Math.pow(2, i)));
            }
        }
    }

    private async attemptDownload(url: string, outputPath: string, onProgress: (loaded: number, total: number) => void) {
        const tempPath = `${outputPath}.part`;
        const writer = fs.createWriteStream(tempPath);

        try {
            // v0.4.7 — connection timeout prevents hanging on unresponsive servers
            const response = await axios({
                url,
                method: 'GET',
                responseType: 'stream',
                timeout: CONNECTION_TIMEOUT_MS,
            });

            const totalLength = response.headers['content-length'];

            let loaded = 0;

            return new Promise<void>((resolve, reject) => {
                // v0.4.7 — stall detection: abort if no data received for STALL_TIMEOUT_MS
                let stallTimer: ReturnType<typeof setTimeout> | null = null;

                const resetStallTimer = () => {
                    if (stallTimer) clearTimeout(stallTimer);
                    stallTimer = setTimeout(() => {
                        response.data.destroy();
                        writer.close();
                        fs.remove(tempPath).catch(() => { });
                        reject(new Error('DOWNLOAD_STALLED'));
                    }, STALL_TIMEOUT_MS);
                };

                // Start the stall timer
                resetStallTimer();

                response.data.on('data', (chunk: Buffer) => {
                    loaded += chunk.length;
                    resetStallTimer(); // Got data — reset the stall timer
                    if (totalLength) {
                        onProgress(loaded, parseInt(totalLength));
                    }
                });

                response.data.pipe(writer);

                writer.on('finish', async () => {
                    if (stallTimer) clearTimeout(stallTimer);
                    try {
                        await fs.rename(tempPath, outputPath);
                        resolve();
                    } catch (e) {
                        reject(e);
                    }
                });

                writer.on('error', async (err: NodeJS.ErrnoException) => {
                    if (stallTimer) clearTimeout(stallTimer);
                    await fs.remove(tempPath).catch(() => { });

                    if (err.code === 'ENOSPC') reject(new Error('DISK_FULL'));
                    else reject(err);
                });
            });
        } catch (error) {
            writer.close();
            await fs.remove(tempPath).catch(() => { });

            // v0.4.7 — wrap axios timeout as DOWNLOAD_TIMEOUT
            const axiosErr = error as { code?: string };
            if (axiosErr.code === 'ECONNABORTED') {
                throw new Error('DOWNLOAD_TIMEOUT');
            }
            throw error;
        }
    }
}
