import axios from 'axios';
import fs from 'fs-extra';

export class DownloadService {
    async downloadFile(url: string, outputPath: string, onProgress: (loaded: number, total: number) => void, attempts = 3) {
        for (let i = 0; i < attempts; i++) {
            try {
                await this.attemptDownload(url, outputPath, onProgress);
                return; // Success
            } catch (error: any) {
                // Critical Errors - Do not retry
                if (error.code === 'ENOSPC') throw new Error("DISK_FULL: No space left on device.");
                if (error.code === 'EPERM' || error.code === 'EACCES') throw new Error("PERMISSION_DENIED: Access denied to write file.");
                if (error.message === 'DISK_FULL') throw error;

                console.error(`Download attempt ${i + 1} failed:`, error);

                // Cleanup partial file (check both .part and final just in case)
                await fs.remove(`${outputPath}.part`).catch(() => { });
                await fs.remove(outputPath).catch(() => { });

                if (i === attempts - 1) throw error; // Throw on last attempt

                // Backoff 1s
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
        }
    }

    private async attemptDownload(url: string, outputPath: string, onProgress: (loaded: number, total: number) => void) {
        const tempPath = `${outputPath}.part`;
        const writer = fs.createWriteStream(tempPath);

        try {
            const response = await axios({
                url,
                method: 'GET',
                responseType: 'stream',
            });

            const totalLength = response.headers['content-length'];

            let loaded = 0;
            response.data.on('data', (chunk: any) => {
                loaded += chunk.length;
                if (totalLength) {
                    onProgress(loaded, parseInt(totalLength));
                }
            });

            response.data.pipe(writer);

            return new Promise<void>((resolve, reject) => {
                writer.on('finish', async () => {
                    try {
                        // Rename .part to final
                        await fs.rename(tempPath, outputPath);
                        resolve();
                    } catch (e) {
                        reject(e);
                    }
                });
                writer.on('error', async (err: any) => {
                    // Cleanup .part file
                    await fs.remove(tempPath).catch(() => { });

                    // Normalize error codes
                    if (err.code === 'ENOSPC') reject(new Error('DISK_FULL'));
                    else reject(err);
                });
            });
        } catch (error) {
            writer.close();
            // Cleanup .part file on catch
            await fs.remove(tempPath).catch(() => { });
            throw error;
        }
    }
}
