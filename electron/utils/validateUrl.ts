/**
 * URL Validator — first line of SSRF defense in the Electron main process.
 *
 * This is a fast, lexical pre-check on URLs passed from the renderer:
 * - Only HTTP/HTTPS protocols allowed
 * - Blocks literal private/reserved IPs (RFC 1918, RFC 4193, loopback, CGNAT,
 *   IPv4-mapped IPv6, and numeric/octal/hex notations via net.isIP)
 * - Blocks well-known internal hostnames
 *
 * It does NOT (and cannot) defend against DNS rebinding or redirects to private
 * hosts — a hostname that resolves to a private IP passes here. That second,
 * authoritative layer lives in safeHttp.ts: the http(s) agents re-validate the
 * resolved IP on every connection and redirect hop. Keep both in place.
 */

import { isPrivateIp } from './safeHttp';

/** Blocked hostnames */
const BLOCKED_HOSTNAMES = new Set([
    'localhost',
    'localhost.localdomain',
    'ip6-localhost',
    'ip6-loopback',
    '0.0.0.0',
    '[::]',
    '[::1]',
]);

export interface ValidationResult {
    valid: boolean;
    error?: string;
}

/**
 * Validate a URL for safe external fetching.
 *
 * @param url - The URL string to validate
 * @returns `{ valid: true }` if safe, `{ valid: false, error: string }` if unsafe
 */
export function validateUrl(url: string): ValidationResult {
    // ── Empty / whitespace ───────────────────────────────────
    if (!url || !url.trim()) {
        return { valid: false, error: 'URL_EMPTY' };
    }

    const trimmed = url.trim();

    // ── Parse URL ────────────────────────────────────────────
    let parsed: URL;
    try {
        parsed = new URL(trimmed);
    } catch {
        return { valid: false, error: 'URL_INVALID' };
    }

    // ── Protocol whitelist ───────────────────────────────────
    const protocol = parsed.protocol.toLowerCase();
    if (protocol !== 'http:' && protocol !== 'https:') {
        return { valid: false, error: 'URL_PROTOCOL_BLOCKED' };
    }

    // ── Hostname checks ──────────────────────────────────────
    const hostname = parsed.hostname.toLowerCase();

    if (!hostname) {
        return { valid: false, error: 'URL_NO_HOST' };
    }

    // Block known internal hostnames
    if (BLOCKED_HOSTNAMES.has(hostname)) {
        return { valid: false, error: 'URL_PRIVATE_HOST' };
    }

    // Block any literal private/reserved IP — covers IPv4 (incl. CGNAT),
    // IPv6 loopback/ULA/link-local, and IPv4-mapped IPv6. Numeric/octal/hex
    // hostnames that aren't literal IPs fall through and are caught at connect
    // time by the safeHttp agent lookup once resolved.
    if (isPrivateIp(hostname)) {
        return { valid: false, error: 'URL_PRIVATE_IP' };
    }

    // ── URL looks safe ───────────────────────────────────────
    return { valid: true };
}
