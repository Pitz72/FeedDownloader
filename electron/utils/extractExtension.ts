import path from 'path';

/** Known audio/media extensions that should be preserved as-is */
const KNOWN_EXTENSIONS = new Set([
    '.mp3', '.m4a', '.m4b', '.aac', '.ogg', '.oga', '.opus',
    '.wav', '.flac', '.wma', '.webm',
    '.mp4', '.m4v', '.mov', '.avi', '.mkv',
    '.pdf', '.epub', '.zip',
]);

/**
 * v1.6.0 — MIME type → extension, for enclosures whose URL carries no
 * extension (`/download/ep/12345`). The feed declares the type in
 * `<enclosure type="…">`; before this an M4A behind such a URL was saved
 * as `.mp3`, which players and the ID3 writer then misread.
 */
const MIME_EXTENSIONS: Record<string, string> = {
    'audio/mpeg': '.mp3',
    'audio/mp3': '.mp3',
    'audio/mpeg3': '.mp3',
    'audio/x-mpeg': '.mp3',
    'audio/mp4': '.m4a',
    'audio/m4a': '.m4a',
    'audio/x-m4a': '.m4a',
    'audio/x-m4b': '.m4b',
    'audio/aac': '.aac',
    'audio/aacp': '.aac',
    'audio/x-aac': '.aac',
    'audio/ogg': '.ogg',
    'audio/vorbis': '.ogg',
    'audio/opus': '.opus',
    'audio/flac': '.flac',
    'audio/x-flac': '.flac',
    'audio/wav': '.wav',
    'audio/x-wav': '.wav',
    'audio/wave': '.wav',
    'audio/webm': '.webm',
    'audio/x-ms-wma': '.wma',
    'video/mp4': '.mp4',
    'video/x-m4v': '.m4v',
    'video/quicktime': '.mov',
    'video/webm': '.webm',
    'video/x-matroska': '.mkv',
    'video/x-msvideo': '.avi',
    'application/pdf': '.pdf',
    'application/epub+zip': '.epub',
};

/** Extension for a MIME type, or undefined when unknown. Parameters (`; codecs=…`) are ignored. */
export function extensionForMime(mimeType?: string): string | undefined {
    if (!mimeType) return undefined;
    const base = mimeType.split(';')[0].trim().toLowerCase();
    return MIME_EXTENSIONS[base];
}

/**
 * Extract the real file extension from a download URL.
 *
 * Handles common podcast CDN patterns:
 * - `https://cdn.example.com/episode-42.m4a`
 * - `https://cdn.example.com/episode.mp3?token=abc123&expires=999`
 * - `https://cdn.example.com/download/ep/12345`  (no extension → MIME type, then fallback)
 *
 * @param url       The enclosure/download URL
 * @param mimeType  The enclosure's declared type, used when the URL has no known extension
 * @returns         The extension including the dot (e.g. `.m4a`), or `.mp3` as fallback
 */
export function extractExtension(url: string, mimeType?: string): string {
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
        // Invalid URL — fall through to the MIME type / default
    }

    return extensionForMime(mimeType) ?? '.mp3';
}
