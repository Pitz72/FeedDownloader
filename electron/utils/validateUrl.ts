/**
 * URL Validator — prevents SSRF attacks in the Electron main process.
 *
 * Validates that URLs passed from the renderer are safe to fetch:
 * - Only HTTP/HTTPS protocols allowed
 * - Blocks private/reserved IP ranges (RFC 1918, RFC 4193, loopback)
 * - Blocks well-known internal hostnames
 */

/** Private IPv4 ranges and loopback */
const PRIVATE_IPV4_PATTERNS = [
    /^127\./,                    // 127.0.0.0/8 (loopback)
    /^10\./,                     // 10.0.0.0/8
    /^172\.(1[6-9]|2\d|3[01])\./, // 172.16.0.0/12
    /^192\.168\./,               // 192.168.0.0/16
    /^169\.254\./,               // 169.254.0.0/16 (link-local)
    /^0\./,                      // 0.0.0.0/8
];

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

    // Block IPv6 loopback (URL normalizes [::1] to just ::1)
    if (hostname === '::1' || hostname === '[::1]') {
        return { valid: false, error: 'URL_PRIVATE_HOST' };
    }

    // Block private IPv4 ranges
    for (const pattern of PRIVATE_IPV4_PATTERNS) {
        if (pattern.test(hostname)) {
            return { valid: false, error: 'URL_PRIVATE_IP' };
        }
    }

    // Block IPv6 private ranges (fc00::/7 — unique local, fe80::/10 — link-local)
    // URL() normalizes [fc00::1] to fc00::1 (no brackets)
    const hostForIpv6 = hostname.replace(/^\[|\]$/g, '');
    if (hostForIpv6.startsWith('fc') || hostForIpv6.startsWith('fd') || hostForIpv6.startsWith('fe80')) {
        return { valid: false, error: 'URL_PRIVATE_IP' };
    }

    // ── URL looks safe ───────────────────────────────────────
    return { valid: true };
}
