/**
 * Hardened HTTP layer — SSRF defense for the Electron main process.
 *
 * The renderer can pass arbitrary feed/enclosure URLs, and remote feeds can
 * point at attacker-controlled hosts. A purely lexical hostname check (see
 * validateUrl) is bypassable two ways:
 *   1. HTTP redirects to an internal host (302 → http://127.0.0.1/…)
 *   2. DNS rebinding — a public hostname that resolves to a private IP.
 *
 * The real defense lives here: a custom DNS `lookup` installed on the http(s)
 * agents. Node resolves the hostname for EVERY connection — the initial request
 * AND every redirect hop — and we reject the connection if the resolved IP is
 * private/reserved. This closes both bypasses at the socket layer.
 */

import net from 'node:net';
import dns from 'node:dns';
import http from 'node:http';
import https from 'node:https';

/** Parse a dotted-decimal IPv4 string into its 4 octets, or null if malformed. */
function ipv4Octets(ip: string): number[] | null {
    const m = ip.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);
    if (!m) return null;
    const parts = m.slice(1).map(Number);
    if (parts.some((p) => p > 255)) return null;
    return parts;
}

function isPrivateIpv4(ip: string): boolean {
    const p = ipv4Octets(ip);
    if (!p) return false;
    const [a, b, c] = p;
    if (a === 0) return true;                       // 0.0.0.0/8
    if (a === 10) return true;                      // 10.0.0.0/8
    if (a === 127) return true;                     // 127.0.0.0/8 loopback
    if (a === 169 && b === 254) return true;        // 169.254.0.0/16 link-local
    if (a === 172 && b >= 16 && b <= 31) return true; // 172.16.0.0/12
    if (a === 192 && b === 168) return true;        // 192.168.0.0/16
    if (a === 100 && b >= 64 && b <= 127) return true; // 100.64.0.0/10 CGNAT
    if (a === 192 && b === 0 && c === 0) return true;  // 192.0.0.0/24
    if (a === 198 && (b === 18 || b === 19)) return true; // 198.18.0.0/15 benchmarking
    if (a >= 224) return true;                      // 224+ multicast / 240+ reserved
    return false;
}

/**
 * True if the given address is a private, loopback, link-local or otherwise
 * non-routable IP. Accepts any notation `net.isIP` understands and unwraps
 * IPv4-mapped IPv6 (`::ffff:127.0.0.1`) and zone ids.
 */
export function isPrivateIp(ip: string): boolean {
    let addr = ip.trim().toLowerCase().replace(/^\[|\]$/g, '');
    const pct = addr.indexOf('%'); // strip IPv6 zone id (fe80::1%eth0)
    if (pct !== -1) addr = addr.slice(0, pct);

    const kind = net.isIP(addr);
    if (kind === 4) return isPrivateIpv4(addr);
    if (kind === 6) {
        const mapped = addr.match(/^::ffff:(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})$/);
        if (mapped) return isPrivateIpv4(mapped[1]);
        if (addr === '::1' || addr === '::') return true;          // loopback / unspecified
        if (addr.startsWith('fc') || addr.startsWith('fd')) return true; // fc00::/7 ULA
        if (/^fe[89ab]/.test(addr)) return true;                    // fe80::/10 link-local
        return false;
    }
    // Not a literal IP — caller relies on the agent lookup to resolve & re-check.
    return false;
}

/**
 * DNS lookup that rejects any resolution to a private/reserved IP.
 * Installed on the agents below so it runs on every connection and redirect hop.
 */
const secureLookup = ((hostname: string, options: unknown, callback: unknown) => {
    // dns.lookup has two arities; normalize to (hostname, options, cb)
    const cb = (typeof options === 'function' ? options : callback) as (
        err: NodeJS.ErrnoException | null,
        address: unknown,
        family?: number,
    ) => void;
    const opts = (typeof options === 'function' ? {} : options) as dns.LookupOptions;

    dns.lookup(hostname, opts, (err, address, family) => {
        if (err) {
            cb(err, address, family);
            return;
        }
        const entries = Array.isArray(address)
            ? address
            : [{ address: address as string, family: family as number }];
        for (const e of entries) {
            if (isPrivateIp(e.address)) {
                cb(new Error('SSRF_BLOCKED_PRIVATE_IP'), '', 0);
                return;
            }
        }
        cb(null, address, family);
    });
}) as unknown as net.LookupFunction;

/** http(s) agents that validate every resolved IP before connecting. */
export const safeHttpAgent = new http.Agent({ lookup: secureLookup });
export const safeHttpsAgent = new https.Agent({ lookup: secureLookup });

/**
 * axios config fragment that wires in the SSRF-safe agents and a sane redirect
 * cap. Each redirect hop reconnects through the agents → its IP is re-validated.
 */
export const SAFE_AXIOS_CONFIG = {
    httpAgent: safeHttpAgent,
    httpsAgent: safeHttpsAgent,
    maxRedirects: 5,
} as const;
