import type { Episode, Feed } from '../../shared/types';
import { buildDownloadRequest } from '../../shared/buildDownloadRequest';
import { parseDurationSeconds } from '../utils/duration';
import { useStore } from '../store/useStore';

// S9: only the latest openFeed request may update state (stale responses dropped)
let latestFeedRequest: string | null = null;

/**
 * Open a feed in the main area. `force` skips the 5-minute cache ("Aggiorna").
 * Resolves to the parsed feed, or null when a later request superseded it.
 */
export async function openFeed(url: string, opts: { force?: boolean } = {}): Promise<Feed | null> {
    latestFeedRequest = url;
    const parsed = await window.api.parseFeed(url, opts);
    if (latestFeedRequest !== url) return null;
    const feed = { ...parsed, url };
    const { setCurrentFeed, setView } = useStore.getState();
    setCurrentFeed(feed);
    setView('feed');
    return feed;
}

/** Stable identity of an episode inside its feed (guid, fallback enclosure URL). */
export function episodeKey(episode: Episode): string {
    return episode.guid || episode.enclosure?.url || episode.enclosures?.[0]?.url || '';
}

export interface QueueOutcome { queued: number; duplicates: number; failed: number; skipped: number }

/**
 * Queue episodes of a feed for download. Episodes without an enclosure are
 * skipped; URLs already queued come back as duplicates (S3).
 */
export async function queueEpisodes(feed: Feed, episodes: Episode[]): Promise<QueueOutcome> {
    const out: QueueOutcome = { queued: 0, duplicates: 0, failed: 0, skipped: 0 };
    const requests = episodes
        .map(ep => buildDownloadRequest(feed, ep))
        .filter((r): r is NonNullable<typeof r> => { if (!r) out.skipped++; return !!r; });
    // Same enclosure listed twice in one feed: one download.
    const seen = new Set<string>();
    const unique = requests.filter(r => { if (seen.has(r.url)) { out.duplicates++; return false; } seen.add(r.url); return true; });
    await Promise.all(unique.map(async (req) => {
        try {
            const res = await window.api.startDownload(req);
            if (res.status === 'queued') out.queued++; else out.duplicates++;
        } catch {
            out.failed++;
        }
    }));
    return out;
}

/**
 * Bytes an episode list will take: the enclosure length declared by the feed
 * when present, otherwise duration × 192 kbps, otherwise 45 minutes.
 */
export function estimateBytes(episodes: Episode[]): number {
    const BYTES_PER_SECOND = 24_000; // 192 kbps — a realistic default for modern podcasts
    const DEFAULT_SECONDS = 45 * 60;
    return episodes.reduce((total, ep) => {
        const declared = ep.enclosure?.length ? parseInt(ep.enclosure.length, 10) : NaN;
        if (Number.isFinite(declared) && declared > 100_000) return total + declared;
        const secs = parseDurationSeconds(ep.itunes?.duration);
        return total + (secs ?? DEFAULT_SECONDS) * BYTES_PER_SECOND;
    }, 0);
}

const ERROR_KEYS: Record<string, string> = {
    EPISODE_NOT_FOUND: 'errors.not_found',
    DOWNLOAD_STALLED: 'errors.stalled',
    DOWNLOAD_TIMEOUT: 'errors.timeout',
    DISK_FULL: 'errors.disk_full',
    INTEGRITY_CHECK_FAILED: 'errors.integrity',
    PERMISSION_DENIED: 'errors.permission',
    INVALID_CONTENT_TYPE: 'errors.content_type',
    FILE_TOO_LARGE: 'errors.too_large',
    SSRF_BLOCKED_PRIVATE_IP: 'errors.private_ip',
    URL_PRIVATE_IP: 'errors.private_ip',
    URL_PRIVATE_HOST: 'errors.private_ip',
};

/** i18n key that explains a download error code. */
export function errorKey(code: string): string {
    if (ERROR_KEYS[code]) return ERROR_KEYS[code];
    if (/^HTTP_4\d\d$/.test(code)) return 'errors.http_client';
    if (/^HTTP_5\d\d$/.test(code)) return 'errors.http_server';
    if (/ENOTFOUND|EAI_AGAIN|ECONNREFUSED|ECONNRESET|ETIMEDOUT|socket hang up/i.test(code)) return 'errors.network';
    return 'errors.unknown';
}

/** Turn a feed-parse failure into an i18n key for the user. */
export function feedErrorKey(err: unknown): string {
    const msg = err instanceof Error ? err.message : String(err ?? '');
    if (msg.includes('INVALID_FEED_TYPE')) return 'feedError.not_a_feed';
    if (msg.includes('RATE_LIMITED')) return 'feedError.rate_limited';
    if (msg.includes('URL_INVALID') || msg.includes('URL_EMPTY') || msg.includes('URL_PROTOCOL')) return 'feedError.invalid_url';
    if (msg.includes('URL_PRIVATE') || msg.includes('SSRF')) return 'feedError.private';
    if (/status code 404|\b404\b/.test(msg)) return 'feedError.not_found';
    if (/status code 40[13]/.test(msg)) return 'feedError.forbidden';
    if (/ENOTFOUND|EAI_AGAIN|Network Error|ECONN|ETIMEDOUT|timeout/i.test(msg)) return 'feedError.network';
    return 'feedError.generic';
}

/**
 * v1.6.0 — normalise what the user pasted into a feed URL: trims, drops a
 * leading "feed:" / "podcast:" scheme and adds https:// when missing.
 */
export function normaliseFeedUrl(raw: string): string {
    let s = raw.trim();
    s = s.replace(/^(feed|podcast|pcast|itpc):\/\//i, 'https://').replace(/^(feed|podcast):/i, '');
    if (s && !/^[a-z][a-z0-9+.-]*:\/\//i.test(s)) s = `https://${s}`;
    return s;
}
