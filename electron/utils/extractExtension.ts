import path from 'path';

/** Known audio/media extensions that should be preserved as-is */
const KNOWN_EXTENSIONS = new Set([
    '.mp3', '.m4a', '.m4b', '.aac', '.ogg', '.oga', '.opus',
    '.wav', '.flac', '.wma', '.webm',
    '.mp4', '.m4v', '.mov', '.avi', '.mkv',
    '.pdf', '.epub', '.zip',
]);

/**
 * Extract the real file extension from a download URL.
 *
 * Handles common podcast CDN patterns:
 * - `https://cdn.example.com/episode-42.m4a`
 * - `https://cdn.example.com/episode.mp3?token=abc123&expires=999`
 * - `https://cdn.example.com/download/ep/12345`  (no extension → fallback)
 *
 * @param url  The enclosure/download URL
 * @returns    The extension including the dot (e.g. `.m4a`), or `.mp3` as fallback
 */
export function extractExtension(url: string): string {
    try {
        // Strip query string and fragment before extracting the path
        const urlObj = new URL(url);
        const pathname = urlObj.pathname;

        const ext = path.extname(pathname).toLowerCase();

        // Only return the extension if it's a known media type
        // This prevents garbage like `.php`, `.aspx`, `.cgi` from leaking through
        if (ext && KNOWN_EXTENSIONS.has(ext)) {
            return ext;
        }
    } catch {
        // Invalid URL — fall through to default
    }

    return '.mp3';
}
