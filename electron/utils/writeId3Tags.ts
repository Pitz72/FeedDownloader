import NodeID3 from 'node-id3';
import axios from 'axios';
import path from 'path';

interface Id3Input {
    title: string;
    podcastTitle: string;
    pubDate?: string;
    feedImageUrl?: string;
}

export async function writeId3Tags(filePath: string, data: Id3Input): Promise<void> {
    // Solo .mp3
    if (path.extname(filePath).toLowerCase() !== '.mp3') return;

    const tags: NodeID3.Tags = {
        title: data.title,
        artist: data.podcastTitle,
        album: data.podcastTitle,
        year: data.pubDate ? new Date(data.pubDate).getFullYear().toString() : undefined,
    };

    // Cover art: scarica se URL disponibile
    if (data.feedImageUrl) {
        try {
            const response = await axios.get(data.feedImageUrl, {
                responseType: 'arraybuffer',
                timeout: 10000,
            });
            const mime = (response.headers['content-type'] || 'image/jpeg').split(';')[0];
            tags.image = {
                mime,
                type: { id: 3, name: 'front cover' },
                description: '',
                imageBuffer: Buffer.from(response.data),
            };
        } catch {
            // Cover art non critica: continua senza
        }
    }

    NodeID3.write(tags, filePath);
}
