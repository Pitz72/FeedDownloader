import { describe, it, expect, vi, beforeEach } from 'vitest';
import http from 'node:http';
import https from 'node:https';
import dns from 'node:dns';
import type net from 'node:net';
import {
    isPrivateIp,
    safeHttpAgent,
    safeHttpsAgent,
    SAFE_AXIOS_CONFIG,
} from '../electron/utils/safeHttp';

vi.mock('node:dns', () => {
    const lookup = vi.fn();
    return { default: { lookup }, lookup };
});

const dnsLookupMock = dns.lookup as unknown as ReturnType<typeof vi.fn>;

/** The secureLookup installed on the agents (not exported directly). */
type LookupFn = (
    hostname: string,
    options: unknown,
    callback?: (err: NodeJS.ErrnoException | null, address: unknown, family?: number) => void,
) => void;

function getSecureLookup(agent: http.Agent): LookupFn {
    const lookup = (agent as unknown as { options: { lookup?: net.LookupFunction } }).options.lookup;
    expect(typeof lookup).toBe('function');
    return lookup as unknown as LookupFn;
}

/** Run the agent lookup against a mocked DNS resolution and capture the callback result. */
function resolveThrough(
    dnsResult: { err?: NodeJS.ErrnoException | null; address?: unknown; family?: number },
    invokeWithOptionsArity = true,
): Promise<{ err: NodeJS.ErrnoException | null; address: unknown; family?: number }> {
    dnsLookupMock.mockImplementation(
        (_hostname: string, _opts: unknown, cb: (e: unknown, a: unknown, f?: number) => void) => {
            cb(dnsResult.err ?? null, dnsResult.address, dnsResult.family);
        },
    );
    const secureLookup = getSecureLookup(safeHttpAgent);
    return new Promise((resolve) => {
        const cb = (err: NodeJS.ErrnoException | null, address: unknown, family?: number) =>
            resolve({ err, address, family });
        if (invokeWithOptionsArity) {
            secureLookup('feeds.example.com', {}, cb);
        } else {
            // two-arity form: (hostname, callback)
            secureLookup('feeds.example.com', cb);
        }
    });
}

describe('safeHttp', () => {

    beforeEach(() => {
        dnsLookupMock.mockReset();
    });

    // ── isPrivateIp: public addresses ─────────────────────────
    describe('isPrivateIp should allow public addresses', () => {
        it('should allow 8.8.8.8', () => {
            expect(isPrivateIp('8.8.8.8')).toBe(false);
        });

        it('should allow 93.184.216.34 (example.com)', () => {
            expect(isPrivateIp('93.184.216.34')).toBe(false);
        });

        it('should allow 172.15.0.1 (just below the 172.16/12 private block)', () => {
            expect(isPrivateIp('172.15.0.1')).toBe(false);
        });

        it('should allow 172.32.0.1 (just above the 172.16/12 private block)', () => {
            expect(isPrivateIp('172.32.0.1')).toBe(false);
        });

        it('should allow 100.63.255.255 (just below CGNAT range)', () => {
            expect(isPrivateIp('100.63.255.255')).toBe(false);
        });

        it('should allow 100.128.0.1 (just above CGNAT range)', () => {
            expect(isPrivateIp('100.128.0.1')).toBe(false);
        });

        it('should allow 9.255.255.255 and 11.0.0.1 (borders of 10/8)', () => {
            expect(isPrivateIp('9.255.255.255')).toBe(false);
            expect(isPrivateIp('11.0.0.1')).toBe(false);
        });

        it('should allow a public IPv6 address (2001:4860:4860::8888)', () => {
            expect(isPrivateIp('2001:4860:4860::8888')).toBe(false);
        });

        it('should allow an IPv4-mapped IPv6 of a public address (::ffff:8.8.8.8)', () => {
            expect(isPrivateIp('::ffff:8.8.8.8')).toBe(false);
        });
    });

    // ── isPrivateIp: loopback ─────────────────────────────────
    describe('isPrivateIp should block loopback', () => {
        it('should block 127.0.0.1', () => {
            expect(isPrivateIp('127.0.0.1')).toBe(true);
        });

        it('should block the whole 127/8 range (127.255.255.255)', () => {
            expect(isPrivateIp('127.255.255.255')).toBe(true);
        });

        it('should block ::1', () => {
            expect(isPrivateIp('::1')).toBe(true);
        });

        it('should block bracketed [::1]', () => {
            expect(isPrivateIp('[::1]')).toBe(true);
        });
    });

    // ── isPrivateIp: RFC 1918 private ranges ──────────────────
    describe('isPrivateIp should block private IPv4 ranges', () => {
        it('should block 10.0.0.1 (10/8)', () => {
            expect(isPrivateIp('10.0.0.1')).toBe(true);
        });

        it('should block 172.16.0.1 and 172.31.255.255 (172.16/12 bounds)', () => {
            expect(isPrivateIp('172.16.0.1')).toBe(true);
            expect(isPrivateIp('172.31.255.255')).toBe(true);
        });

        it('should block 192.168.1.100 (192.168/16)', () => {
            expect(isPrivateIp('192.168.1.100')).toBe(true);
        });
    });

    // ── isPrivateIp: link-local ───────────────────────────────
    describe('isPrivateIp should block link-local addresses', () => {
        it('should block 169.254.169.254 (cloud metadata endpoint)', () => {
            expect(isPrivateIp('169.254.169.254')).toBe(true);
        });

        it('should block fe80::1', () => {
            expect(isPrivateIp('fe80::1')).toBe(true);
        });

        it('should block the full fe80::/10 (fe9x/feax/febx prefixes)', () => {
            expect(isPrivateIp('fe90::1')).toBe(true);
            expect(isPrivateIp('fea0::1')).toBe(true);
            expect(isPrivateIp('febf::1')).toBe(true);
        });

        it('should block link-local with a zone id (fe80::1%eth0)', () => {
            expect(isPrivateIp('fe80::1%eth0')).toBe(true);
        });

        it('should be case-insensitive for IPv6 (FE80::1)', () => {
            expect(isPrivateIp('FE80::1')).toBe(true);
        });
    });

    // ── isPrivateIp: CGNAT / ULA / other reserved ─────────────
    describe('isPrivateIp should block CGNAT, ULA and reserved ranges', () => {
        it('should block 100.64.0.1 and 100.127.255.255 (CGNAT 100.64/10 bounds)', () => {
            expect(isPrivateIp('100.64.0.1')).toBe(true);
            expect(isPrivateIp('100.127.255.255')).toBe(true);
        });

        it('should block fc00::1 and fd12:3456::1 (ULA fc00::/7)', () => {
            expect(isPrivateIp('fc00::1')).toBe(true);
            expect(isPrivateIp('fd12:3456::1')).toBe(true);
        });

        it('should block 0.0.0.0 and the whole 0/8', () => {
            expect(isPrivateIp('0.0.0.0')).toBe(true);
            expect(isPrivateIp('0.1.2.3')).toBe(true);
        });

        it('should block :: (IPv6 unspecified)', () => {
            expect(isPrivateIp('::')).toBe(true);
        });

        it('should block 192.0.0.1 (192.0.0/24 IETF protocol assignments)', () => {
            expect(isPrivateIp('192.0.0.1')).toBe(true);
        });

        it('should block 198.18.0.1 and 198.19.255.255 (benchmarking 198.18/15)', () => {
            expect(isPrivateIp('198.18.0.1')).toBe(true);
            expect(isPrivateIp('198.19.255.255')).toBe(true);
        });

        it('should block multicast and reserved (224.0.0.1, 240.0.0.1, 255.255.255.255)', () => {
            expect(isPrivateIp('224.0.0.1')).toBe(true);
            expect(isPrivateIp('240.0.0.1')).toBe(true);
            expect(isPrivateIp('255.255.255.255')).toBe(true);
        });
    });

    // ── isPrivateIp: IPv4-mapped IPv6 unwrapping ──────────────
    describe('isPrivateIp should unwrap IPv4-mapped IPv6', () => {
        it('should block ::ffff:192.168.1.1', () => {
            expect(isPrivateIp('::ffff:192.168.1.1')).toBe(true);
        });

        it('should block ::ffff:127.0.0.1', () => {
            expect(isPrivateIp('::ffff:127.0.0.1')).toBe(true);
        });

        it('should block ::ffff:10.0.0.5', () => {
            expect(isPrivateIp('::ffff:10.0.0.5')).toBe(true);
        });

        it('should block ::FFFF:169.254.169.254 (uppercase mapped prefix)', () => {
            expect(isPrivateIp('::FFFF:169.254.169.254')).toBe(true);
        });
    });

    // ── isPrivateIp: other IPv6 embedding schemes carrying a private IPv4 ──
    describe('isPrivateIp should unwrap 6to4 / NAT64 / IPv4-compatible embeddings', () => {
        it('should block IPv4-compatible ::127.0.0.1 (loopback)', () => {
            expect(isPrivateIp('::127.0.0.1')).toBe(true);
        });
        it('should block 6to4 wrapping a private IPv4 (2002:c0a8:0101::)', () => {
            expect(isPrivateIp('2002:c0a8:0101::')).toBe(true); // 192.168.1.1
        });
        it('should block NAT64 wrapping loopback (64:ff9b::7f00:1)', () => {
            expect(isPrivateIp('64:ff9b::7f00:1')).toBe(true); // 127.0.0.1
        });
        it('should allow 6to4 wrapping a public IPv4 (2002:0808:0808::)', () => {
            expect(isPrivateIp('2002:0808:0808::')).toBe(false); // 8.8.8.8
        });
        it('should allow NAT64 wrapping a public IPv4 (64:ff9b::0808:0808)', () => {
            expect(isPrivateIp('64:ff9b::0808:0808')).toBe(false); // 8.8.8.8
        });
    });

    // ── isPrivateIp: non-IP / malformed input ─────────────────
    describe('isPrivateIp should treat non-IP strings as not-private (agent re-checks after DNS)', () => {
        it('should return false for a hostname', () => {
            expect(isPrivateIp('localhost')).toBe(false);
        });

        it('should return false for malformed IPv4 (999.1.1.1, 1.2.3)', () => {
            expect(isPrivateIp('999.1.1.1')).toBe(false);
            expect(isPrivateIp('1.2.3')).toBe(false);
        });

        it('should tolerate surrounding whitespace on a literal IP', () => {
            expect(isPrivateIp('  127.0.0.1  ')).toBe(true);
        });
    });

    // ── secureLookup (via the agents' lookup option) ──────────
    describe('secureLookup should validate every DNS resolution', () => {
        it('should pass through a public resolution', async () => {
            const res = await resolveThrough({ address: '93.184.216.34', family: 4 });
            expect(res.err).toBeNull();
            expect(res.address).toBe('93.184.216.34');
            expect(res.family).toBe(4);
        });

        it('should block resolution to a loopback IP (DNS rebinding to 127.0.0.1)', async () => {
            const res = await resolveThrough({ address: '127.0.0.1', family: 4 });
            expect(res.err).toBeInstanceOf(Error);
            expect(res.err?.message).toBe('SSRF_BLOCKED_PRIVATE_IP');
        });

        it('should block resolution to a private IP (192.168.1.10)', async () => {
            const res = await resolveThrough({ address: '192.168.1.10', family: 4 });
            expect(res.err?.message).toBe('SSRF_BLOCKED_PRIVATE_IP');
        });

        it('should block resolution to the metadata endpoint (169.254.169.254)', async () => {
            const res = await resolveThrough({ address: '169.254.169.254', family: 4 });
            expect(res.err?.message).toBe('SSRF_BLOCKED_PRIVATE_IP');
        });

        it('should block resolution to an IPv4-mapped private IPv6', async () => {
            const res = await resolveThrough({ address: '::ffff:10.0.0.1', family: 6 });
            expect(res.err?.message).toBe('SSRF_BLOCKED_PRIVATE_IP');
        });

        it('should block resolution to ::1', async () => {
            const res = await resolveThrough({ address: '::1', family: 6 });
            expect(res.err?.message).toBe('SSRF_BLOCKED_PRIVATE_IP');
        });

        it('should block an all:true result set if ANY entry is private', async () => {
            const res = await resolveThrough({
                address: [
                    { address: '93.184.216.34', family: 4 },
                    { address: '10.0.0.1', family: 4 },
                ],
            });
            expect(res.err?.message).toBe('SSRF_BLOCKED_PRIVATE_IP');
        });

        it('should pass through an all:true result set of only public entries', async () => {
            const entries = [
                { address: '93.184.216.34', family: 4 },
                { address: '2001:4860:4860::8888', family: 6 },
            ];
            const res = await resolveThrough({ address: entries });
            expect(res.err).toBeNull();
            expect(res.address).toEqual(entries);
        });

        it('should propagate DNS errors unchanged', async () => {
            const enotfound = Object.assign(new Error('getaddrinfo ENOTFOUND'), { code: 'ENOTFOUND' });
            const res = await resolveThrough({ err: enotfound });
            expect(res.err).toBe(enotfound);
        });

        it('should support the two-arity (hostname, callback) form', async () => {
            const res = await resolveThrough({ address: '127.0.0.1', family: 4 }, false);
            expect(res.err?.message).toBe('SSRF_BLOCKED_PRIVATE_IP');
        });

        it('should delegate the actual resolution to dns.lookup', async () => {
            await resolveThrough({ address: '93.184.216.34', family: 4 });
            expect(dnsLookupMock).toHaveBeenCalledTimes(1);
            expect(dnsLookupMock.mock.calls[0][0]).toBe('feeds.example.com');
        });
    });

    // ── SAFE_AXIOS_CONFIG shape ───────────────────────────────
    describe('SAFE_AXIOS_CONFIG', () => {
        it('should cap redirects at 5', () => {
            expect(SAFE_AXIOS_CONFIG.maxRedirects).toBe(5);
        });

        it('should wire in the SSRF-safe http agent', () => {
            expect(SAFE_AXIOS_CONFIG.httpAgent).toBe(safeHttpAgent);
            expect(SAFE_AXIOS_CONFIG.httpAgent).toBeInstanceOf(http.Agent);
        });

        it('should wire in the SSRF-safe https agent', () => {
            expect(SAFE_AXIOS_CONFIG.httpsAgent).toBe(safeHttpsAgent);
            expect(SAFE_AXIOS_CONFIG.httpsAgent).toBeInstanceOf(https.Agent);
        });

        it('both agents should carry a custom lookup (the SSRF guard)', () => {
            const httpLookup = getSecureLookup(safeHttpAgent);
            const httpsLookup = getSecureLookup(safeHttpsAgent as unknown as http.Agent);
            expect(typeof httpLookup).toBe('function');
            expect(typeof httpsLookup).toBe('function');
            // Same guard installed on both agents.
            expect(httpLookup).toBe(httpsLookup);
        });
    });
});
