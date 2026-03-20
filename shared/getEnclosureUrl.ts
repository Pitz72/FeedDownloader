import type { Episode } from './types';

/**
 * Extract the enclosure URL from an Episode.
 *
 * Podcast episodes can expose their media URL in two ways:
 * - `episode.enclosure.url` (standard RSS 2.0)
 * - `episode.enclosures[0].url` (some parsers normalize to an array)
 *
 * This utility centralizes the extraction logic that was previously
 * duplicated in 3 places in EpisodeList.tsx.
 *
 * @returns The media URL string, or `undefined` if no enclosure found.
 */
export function getEnclosureUrl(episode: Episode): string | undefined {
    return episode.enclosure?.url
        || (episode.enclosures && episode.enclosures.length > 0
            ? episode.enclosures[0].url
            : undefined);
}
