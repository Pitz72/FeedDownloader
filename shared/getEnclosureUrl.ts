import type { Episode } from './types';

/**
 * Extract the enclosure URL from an Episode.
 *
 * Podcast episodes can expose their media URL in two ways:
 * - `episode.enclosure.url` (standard RSS 2.0)
 * - `episode.enclosures[0].url` (some parsers normalize to an array)
 *
 * L6: when multiple enclosures exist (e.g. audio + video), prefer the one
 * declared as audio/* instead of blindly taking the first.
 *
 * @returns The media URL string, or `undefined` if no enclosure found.
 */
export function getEnclosureUrl(episode: Episode): string | undefined {
    const candidates = [
        ...(episode.enclosure ? [episode.enclosure] : []),
        ...(episode.enclosures ?? []),
    ].filter(e => e?.url);
    if (candidates.length === 0) return undefined;

    const audio = candidates.find(e => e.type?.toLowerCase().startsWith('audio/'));
    return (audio ?? candidates[0]).url;
}
