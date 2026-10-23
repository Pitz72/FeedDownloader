import type { DownloadRequest, Episode, Feed } from './types';
import { getEnclosureUrl } from './getEnclosureUrl';

/** The feed's cover URL, whichever shape the parser produced. */
export function feedImageUrl(feed: Pick<Feed, 'image'> & { itunes?: { image?: string } }): string | undefined {
    if (typeof feed.image === 'string' && feed.image) return feed.image;
    if (feed.image && typeof feed.image === 'object' && feed.image.url) return feed.image.url;
    return feed.itunes?.image || undefined;
}

/** The enclosure the download will fetch (same choice as getEnclosureUrl). */
function chosenEnclosure(episode: Episode): { url: string; type?: string; length?: string } | undefined {
    const url = getEnclosureUrl(episode);
    if (!url) return undefined;
    const all = [...(episode.enclosure ? [episode.enclosure] : []), ...(episode.enclosures ?? [])];
    return all.find(e => e?.url === url) ?? { url };
}

/**
 * v1.6.0 — one place that turns (feed, episode) into a DownloadRequest.
 *
 * The renderer (manual downloads) and the main process (automatic archiving
 * after a refresh) must build exactly the same request: same guid fallback,
 * same cover priority, same metadata for the sidecar. Returns null when the
 * episode has no downloadable enclosure.
 */
export function buildDownloadRequest(feed: Pick<Feed, 'url' | 'title' | 'image'> & { itunes?: { image?: string } }, episode: Episode): DownloadRequest | null {
    const enclosure = chosenEnclosure(episode);
    if (!enclosure) return null;
    const length = enclosure.length ? parseInt(enclosure.length, 10) : NaN;
    return {
        url: enclosure.url,
        title: episode.title || '',
        podcastTitle: feed.title || '',
        // S2: feeds without <guid> exist — the enclosure URL is the stable fallback
        guid: episode.guid || enclosure.url,
        pubDate: episode.pubDate || episode.isoDate,
        feedImageUrl: feedImageUrl(feed),
        episodeImageUrl: episode.itunes?.image,
        feedUrl: feed.url,
        enclosureType: enclosure.type,
        meta: {
            description: episode.content || episode.description || episode.contentSnippet || undefined,
            link: episode.link,
            duration: episode.itunes?.duration,
            season: episode.itunes?.season,
            episode: episode.itunes?.episode,
            episodeType: episode.itunes?.episodeType,
            enclosureLength: Number.isFinite(length) && length > 0 ? length : undefined,
        },
    };
}
