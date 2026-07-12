import path from 'path';
import sanitize from 'sanitize-filename';

/**
 * Build a safe, filesystem-friendly path for a downloaded episode.
 * - Sanitises folder and file name
 * - Truncates if the resulting path exceeds MAX_PATH
 * - Appends the given extension (default `.mp3`)
 */
export function getSafePath(
    baseDir: string,
    podcastTitle: string,
    episodeTitle: string,
    ext: string = '.mp3',
): string {
    const sanitizedPodcast = sanitize(podcastTitle);
    let sanitizedTitle = sanitize(episodeTitle);

    // L8: Windows-reserved names (CON, PRN, AUX…) sanitize to an empty string,
    // which would produce a degenerate hidden filename like ".mp3".
    if (!sanitizedTitle) sanitizedTitle = 'episode';

    // M5: budget must cover what gets appended to this path at download time:
    // the ".part.meta" suffix (10 chars) and the collision suffix "_NN".
    const MAX_PATH = 250;
    const APPENDED_RESERVE = '.part.meta'.length + '_99'.length;

    const folderPath = path.join(baseDir, sanitizedPodcast);
    const separators = 1;

    const occupied = folderPath.length + separators + ext.length + APPENDED_RESERVE;
    const available = MAX_PATH - occupied;

    if (available < 1) {
        sanitizedTitle = sanitizedTitle.substring(0, 5);
    } else if (sanitizedTitle.length > available) {
        sanitizedTitle = sanitizedTitle.substring(0, available);
    }

    return path.join(folderPath, `${sanitizedTitle}${ext}`);
}
