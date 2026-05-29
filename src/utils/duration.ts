/**
 * Shared duration parsing/formatting (L1).
 *
 * Previously EpisodeList and EpisodeDetailPanel each carried their own
 * `parseDurationMinutes` / `formatDuration`, which could (and did) diverge — e.g.
 * one dropped the seconds component while the other kept it. This is the single
 * source of truth used by both.
 *
 * Accepts the two iTunes <itunes:duration> shapes: a plain seconds integer
 * ("3600") or a colon-separated clock ("HH:MM:SS" or "MM:SS").
 */

/** Parse a duration string to total seconds, or null if unrecognized. */
export function parseDurationSeconds(duration?: string): number | null {
    if (!duration) return null;
    const trimmed = duration.trim();
    if (/^\d+$/.test(trimmed)) return parseInt(trimmed, 10);
    const parts = trimmed.split(':').map(p => parseInt(p, 10));
    if (parts.some(isNaN)) return null;
    if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
    if (parts.length === 2) return parts[0] * 60 + parts[1];
    return null;
}

/** Parse a duration string to whole minutes, or null if unrecognized. */
export function parseDurationMinutes(duration?: string): number | null {
    const sec = parseDurationSeconds(duration);
    return sec === null ? null : Math.floor(sec / 60);
}

/**
 * Format a duration into a short label ("1h 30m" / "45 min") and a long label
 * with seconds ("1h 30m 12s" / "45m 12s"), or null if unrecognized.
 */
export function formatDuration(duration?: string): { short: string; long: string } | null {
    const totalSec = parseDurationSeconds(duration);
    if (totalSec === null) return null;
    const h = Math.floor(totalSec / 3600);
    const m = Math.floor((totalSec % 3600) / 60);
    const s = totalSec % 60;
    const short = h > 0 ? `${h}h ${m}m` : `${m} min`;
    const long = h > 0 ? `${h}h ${m}m ${s}s` : `${m}m ${s}s`;
    return { short, long };
}
