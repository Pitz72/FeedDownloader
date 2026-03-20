import { describe, it, expect } from 'vitest';
import { validateUrl } from '../electron/utils/validateUrl';

describe('validateUrl', () => {

    // ── Valid URLs ────────────────────────────────────────────
    describe('should accept valid external URLs', () => {
        it('should accept HTTPS URL', () => {
            expect(validateUrl('https://example.com/feed.xml')).toEqual({ valid: true });
        });

        it('should accept HTTP URL', () => {
            expect(validateUrl('http://example.com/rss')).toEqual({ valid: true });
        });

        it('should accept URL with port', () => {
            expect(validateUrl('https://example.com:8080/feed')).toEqual({ valid: true });
        });

        it('should accept URL with path and query', () => {
            expect(validateUrl('https://example.com/api/feed?format=rss&id=123')).toEqual({ valid: true });
        });

        it('should accept URL with subdomains', () => {
            expect(validateUrl('https://feeds.podcasts.example.com/show/rss')).toEqual({ valid: true });
        });

        it('should accept URL with authentication', () => {
            expect(validateUrl('https://user:pass@example.com/feed')).toEqual({ valid: true });
        });

        it('should accept URL with IP address (public)', () => {
            expect(validateUrl('http://203.0.113.50/feed.xml')).toEqual({ valid: true });
        });

        it('should trim whitespace from URL', () => {
            expect(validateUrl('  https://example.com/feed  ')).toEqual({ valid: true });
        });
    });

    // ── Empty / Invalid ──────────────────────────────────────
    describe('should reject empty and invalid URLs', () => {
        it('should reject empty string', () => {
            const result = validateUrl('');
            expect(result.valid).toBe(false);
            expect(result.error).toBe('URL_EMPTY');
        });

        it('should reject whitespace-only string', () => {
            const result = validateUrl('   ');
            expect(result.valid).toBe(false);
            expect(result.error).toBe('URL_EMPTY');
        });

        it('should reject unparseable URL', () => {
            const result = validateUrl('not a url at all');
            expect(result.valid).toBe(false);
            expect(result.error).toBe('URL_INVALID');
        });

        it('should reject URL without scheme', () => {
            const result = validateUrl('example.com/feed');
            expect(result.valid).toBe(false);
            expect(result.error).toBe('URL_INVALID');
        });
    });

    // ── Protocol blocking ────────────────────────────────────
    describe('should block dangerous protocols', () => {
        it('should block file:// protocol', () => {
            const result = validateUrl('file:///etc/passwd');
            expect(result.valid).toBe(false);
            expect(result.error).toBe('URL_PROTOCOL_BLOCKED');
        });

        it('should block ftp:// protocol', () => {
            const result = validateUrl('ftp://ftp.example.com/files');
            expect(result.valid).toBe(false);
            expect(result.error).toBe('URL_PROTOCOL_BLOCKED');
        });

        it('should block javascript: protocol', () => {
            const result = validateUrl('javascript:alert(1)');
            expect(result.valid).toBe(false);
            expect(result.error).toBe('URL_PROTOCOL_BLOCKED');
        });

        it('should block data: protocol', () => {
            const result = validateUrl('data:text/html,<script>alert(1)</script>');
            expect(result.valid).toBe(false);
            expect(result.error).toBe('URL_PROTOCOL_BLOCKED');
        });

        it('should block gopher: protocol', () => {
            const result = validateUrl('gopher://evil.com/');
            expect(result.valid).toBe(false);
            expect(result.error).toBe('URL_PROTOCOL_BLOCKED');
        });
    });

    // ── Private IP ranges (RFC 1918) ─────────────────────────
    describe('should block private IPv4 ranges', () => {
        it('should block 127.0.0.1 (loopback)', () => {
            const result = validateUrl('http://127.0.0.1/feed');
            expect(result.valid).toBe(false);
            expect(result.error).toBe('URL_PRIVATE_IP');
        });

        it('should block 127.x.x.x range', () => {
            const result = validateUrl('http://127.255.255.255/feed');
            expect(result.valid).toBe(false);
            expect(result.error).toBe('URL_PRIVATE_IP');
        });

        it('should block 10.x.x.x (Class A private)', () => {
            const result = validateUrl('http://10.0.0.1/feed');
            expect(result.valid).toBe(false);
            expect(result.error).toBe('URL_PRIVATE_IP');
        });

        it('should block 172.16.x.x (Class B private)', () => {
            const result = validateUrl('http://172.16.0.1/feed');
            expect(result.valid).toBe(false);
            expect(result.error).toBe('URL_PRIVATE_IP');
        });

        it('should block 172.31.x.x (upper bound of Class B private)', () => {
            const result = validateUrl('http://172.31.255.255/feed');
            expect(result.valid).toBe(false);
            expect(result.error).toBe('URL_PRIVATE_IP');
        });

        it('should NOT block 172.32.x.x (outside private range)', () => {
            expect(validateUrl('http://172.32.0.1/feed')).toEqual({ valid: true });
        });

        it('should block 192.168.x.x (Class C private)', () => {
            const result = validateUrl('http://192.168.1.100/feed');
            expect(result.valid).toBe(false);
            expect(result.error).toBe('URL_PRIVATE_IP');
        });

        it('should block 169.254.x.x (link-local)', () => {
            const result = validateUrl('http://169.254.169.254/latest/meta-data/');
            expect(result.valid).toBe(false);
            expect(result.error).toBe('URL_PRIVATE_IP');
        });

        it('should block 0.0.0.0', () => {
            const result = validateUrl('http://0.0.0.0/feed');
            expect(result.valid).toBe(false);
        });
    });

    // ── Hostname blocking ────────────────────────────────────
    describe('should block internal hostnames', () => {
        it('should block localhost', () => {
            const result = validateUrl('http://localhost/feed');
            expect(result.valid).toBe(false);
            expect(result.error).toBe('URL_PRIVATE_HOST');
        });

        it('should block localhost with port', () => {
            const result = validateUrl('http://localhost:3000/api');
            expect(result.valid).toBe(false);
            expect(result.error).toBe('URL_PRIVATE_HOST');
        });

        it('should block LOCALHOST (case insensitive)', () => {
            const result = validateUrl('http://LOCALHOST/feed');
            expect(result.valid).toBe(false);
            expect(result.error).toBe('URL_PRIVATE_HOST');
        });

        it('should block localhost.localdomain', () => {
            const result = validateUrl('http://localhost.localdomain/feed');
            expect(result.valid).toBe(false);
            expect(result.error).toBe('URL_PRIVATE_HOST');
        });
    });

    // ── IPv6 blocking ────────────────────────────────────────
    describe('should block private IPv6 addresses', () => {
        it('should block [::1] (IPv6 loopback)', () => {
            const result = validateUrl('http://[::1]/feed');
            expect(result.valid).toBe(false);
        });

        it('should block fc00:: (unique-local)', () => {
            const result = validateUrl('http://[fc00::1]/feed');
            expect(result.valid).toBe(false);
        });

        it('should block fd00:: (unique-local)', () => {
            const result = validateUrl('http://[fd12:3456::1]/feed');
            expect(result.valid).toBe(false);
        });

        it('should block fe80:: (link-local)', () => {
            const result = validateUrl('http://[fe80::1]/feed');
            expect(result.valid).toBe(false);
        });
    });
});
