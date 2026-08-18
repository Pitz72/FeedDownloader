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

/** Expand any IPv6 literal to its 8 hextets (handles `::` and an embedded IPv4
 *  tail), or null if malformed. */
function expandIpv6(addr: string): number[] | null {
    let s = addr;
    let tail: number[] = [];
    const v4 = s.match(/(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})$/);
    if (v4) {
        const o = ipv4Octets(v4[1]);
        if (!o) return null;
        tail = [(o[0] << 8) | o[1], (o[2] << 8) | o[3]];
        s = s.slice(0, v4.index); // keeps the trailing ':' / '::'
    }
    const hasDouble = s.includes('::');
    const [headStr, tailStr = ''] = s.split('::');
    const head = headStr ? headStr.split(':').filter(Boolean).map(h => parseInt(h, 16)) : [];
    const mid = tailStr ? tailStr.split(':').filter(Boolean).map(h => parseInt(h, 16)) : [];
    let hextets: number[];
    if (hasDouble) {
        const missing = 8 - (head.length + mid.length + tail.length);
        if (missing < 0) return null;
        hextets = [...head, ...Array(missing).fill(0), ...mid, ...tail];
    } else {
        hextets = [...head, ...mid, ...tail];
    }
    if (hextets.length !== 8 || hextets.some(h => !Number.isInteger(h) || h < 0 || h > 0xffff)) return null;
    return hextets;
}

/** Format two IPv6 hextets as the dotted-decimal IPv4 they encode. */
function hextetsToIpv4(a: number, b: number): string {
    return `${(a >> 8) & 0xff}.${a & 0xff}.${(b >> 8) & 0xff}.${b & 0xff}`;
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

        // Reject transition/embedding schemes that carry an IPv4 address which
        // itself is private/reserved — otherwise a hostname resolving to e.g.
        // `::7f00:1` (IPv4-compatible ::127.0.0.1), 6to4 `2002:7f00:1::`, or NAT64
        // `64:ff9b::7f00:1` would tunnel to an internal target.
        const h = expandIpv6(addr);
        if (h) {
            const embeddedIsPrivate = (a: number, b: number) => isPrivateIpv4(hextetsToIpv4(a, b));
            // IPv4-mapped / IPv4-compatible: ::/96 or ::ffff:0:0/96 (last 32 bits)
            if (h[0] === 0 && h[1] === 0 && h[2] === 0 && h[3] === 0 && h[4] === 0 && (h[5] === 0 || h[5] === 0xffff)) {
                return embeddedIsPrivate(h[6], h[7]);
            }
            if (h[0] === 0x2002) return embeddedIsPrivate(h[1], h[2]);          // 6to4 2002::/16
            if (h[0] === 0x0064 && h[1] === 0xff9b) return embeddedIsPrivate(h[6], h[7]); // NAT64 64:ff9b::/96
        }
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
