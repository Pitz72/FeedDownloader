/**
 * Locale-aware human-readable byte size.
 *
 * L29: the decimal separator follows the active i18n locale (e.g. "1,5 MB" in
 * Italian, "1.5 MB" in English) instead of a hard-coded dot. Pass `i18n.language`
 * as `locale`. Returns "—" for a missing size.
 */
export function formatBytes(bytes: number | undefined | null, locale?: string): string {
    if (bytes == null) return '—';
    if (bytes >= 1024 ** 3) return `${(bytes / 1024 ** 3).toLocaleString(locale, { maximumFractionDigits: 1 })} GB`;
    if (bytes >= 1024 ** 2) return `${(bytes / 1024 ** 2).toLocaleString(locale, { maximumFractionDigits: 1 })} MB`;
    // Below 1 KB, show bytes rather than rounding to a misleading "0 KB".
    if (bytes < 1024) return `${Math.round(bytes).toLocaleString(locale)} B`;
    return `${(bytes / 1024).toLocaleString(locale, { maximumFractionDigits: 0 })} KB`;
}

/** Locale-aware transfer speed (bytes/second → B/s · KB/s · MB/s). */
export function formatSpeed(bytesPerSec: number, locale?: string): string {
    if (bytesPerSec >= 1024 ** 2) return `${(bytesPerSec / 1024 ** 2).toLocaleString(locale, { maximumFractionDigits: 1 })} MB/s`;
    if (bytesPerSec >= 1024) return `${(bytesPerSec / 1024).toLocaleString(locale, { maximumFractionDigits: 0 })} KB/s`;
    return `${Math.round(bytesPerSec).toLocaleString(locale)} B/s`;
}
