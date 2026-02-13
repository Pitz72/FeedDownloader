import axios from 'axios';
import fs from 'fs-extra';

export class DownloadService {
    async downloadFile(url: string, outputPath: string, onProgress: (loaded: number, total: number) => void) {
        const writer = fs.createWriteStream(outputPath);

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
                writer.on('finish', () => resolve());
                writer.on('error', reject);
            });
        } catch (error) {
            console.error('Download failed:', error);
            throw error;
        }
    }
}
