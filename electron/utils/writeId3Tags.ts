import NodeID3 from 'node-id3';
import axios from 'axios';
import path from 'path';
import { validateUrl } from './validateUrl';
import { SAFE_AXIOS_CONFIG, USER_AGENT } from './safeHttp';

interface Id3Input {
    title: string;
    podcastTitle: string;
    pubDate?: string;
    feedImageUrl?: string;
    episodeImageUrl?: string;
}

/** Scarica una cover sicura (SSRF-validata) e la converte in tag immagine ID3. */
async function fetchCover(imageUrl: string): Promise<NodeID3.Tags['image'] | null> {
    if (!validateUrl(imageUrl).valid) return null;
    try {
        const response = await axios.get(imageUrl, {
            responseType: 'arraybuffer',
            timeout: 10000,
            maxContentLength: 10 * 1024 * 1024, // una cover non supera qualche MB
            ...SAFE_AXIOS_CONFIG, // SSRF: validate resolved IP on every hop
            headers: { 'User-Agent': USER_AGENT },
        });
        const mime = String(response.headers['content-type'] || 'image/jpeg').split(';')[0];
        return {
            mime,
            type: { id: 3, name: 'front cover' },
            description: '',
            imageBuffer: Buffer.from(response.data),
        };
    } catch {
        // Cover art non critica: il chiamante prova il fallback successivo
        return null;
    }
}

/**
 * Write title/artist/album/year (and a cover when the file has none) into an MP3.
 *
 * v1.6.0 — archive-safe:
 * - `update`, not `write`: the publisher's own frames (chapters, comments,
 *   links, their cover) used to be wiped and replaced by our four fields;
 * - the embedded cover is kept when present — ours is only a fallback;
 * - the async API: the synchronous one read and rewrote the whole file on the
 *   main thread, freezing the app for seconds on long episodes;
 * - the caller now hashes the file AFTER this, so the stored SHA-256 matches
 *   what is on disk (it used to be computed before, and every tagged MP3 was
 *   then reported as corrupted by the Health Check).
 */
export async function writeId3Tags(filePath: string, data: Id3Input): Promise<void> {
    // Solo .mp3
    if (path.extname(filePath).toLowerCase() !== '.mp3') return;

    const pubYear = data.pubDate ? new Date(data.pubDate).getFullYear() : NaN;
    const tags: NodeID3.Tags = {
        title: data.title,
        artist: data.podcastTitle,
        album: data.podcastTitle,
        year: Number.isFinite(pubYear) ? String(pubYear) : undefined,
    };

    let hasCover = false;
    try {
        const existing = await NodeID3.Promise.read(filePath, { include: ['APIC'], noRaw: true });
        hasCover = !!existing?.image;
    } catch {
        hasCover = false; // unreadable tag block: behave as if there were none
    }

    if (!hasCover) {
        // Cover art (v1.3.10): prima la cover specifica dell'episodio, poi quella del feed
        // come fallback — anche se il download della cover episodio fallisce. URL distinte
        // e ordinate per priorità, deduplicate.
        const candidates = [data.episodeImageUrl, data.feedImageUrl]
            .filter((u): u is string => !!u)
            .filter((u, i, arr) => arr.indexOf(u) === i);
        for (const candidate of candidates) {
            const image = await fetchCover(candidate);
            if (image) {
                tags.image = image;
                break;
            }
        }
    }

    await NodeID3.Promise.update(tags, filePath);
}
