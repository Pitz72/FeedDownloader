import { describe, it, expect, vi, beforeEach } from 'vitest';
import { FeedService } from '../electron/services/FeedService';

// ── Mock axios ───────────────────────────────────────────────────
// The current FeedService fetches each page with a single `axios.get`
// (responseType: 'text') and validates the raw body — there is no HEAD
// pre-flight anymore (replaced by the SSRF-safe GET in the v1.3.x audit).
vi.mock('axios', () => {
    return {
        default: {
            get: vi.fn(),
        },
    };
});

// ── Mock rss-parser ──────────────────────────────────────────────
// The service calls `parser.parseString(xml)`, not `parseURL`.
vi.mock('rss-parser', () => {
    return {
        default: class MockParser {
            async parseString(_xml: string) {
                return {
                    title: 'Test Podcast',
                    items: [
                        {
                            title: 'Episode 1',
                            pubDate: 'Mon, 01 Jan 2026 00:00:00 GMT',
                            guid: 'ep-001',
                            enclosure: { url: 'https://cdn.example.com/ep1.mp3' },
                        },
                        {
                            title: 'Episode 2',
                            pubDate: 'Tue, 02 Jan 2026 00:00:00 GMT',
                            guid: 'ep-002',
                            enclosure: { url: 'https://cdn.example.com/ep2.mp3' },
                        },
                    ],
                };
            }
        },
    };
});

import axios from 'axios';

const XML_NO_NEXT = '<?xml version="1.0"?><rss><channel><title>Test Podcast</title></channel></rss>';

/** Helper: an axios GET response with an XML content-type and the given body. */
function xmlResponse(data: string) {
    return { headers: { 'content-type': 'application/rss+xml' }, data };
}

describe('FeedService', () => {
    let service: FeedService;

    beforeEach(() => {
        service = new FeedService();
        vi.clearAllMocks();
    });

    it('should parse a valid feed and return episodes', async () => {
        (axios.get as ReturnType<typeof vi.fn>).mockResolvedValue(xmlResponse(XML_NO_NEXT));

        const result = await service.parseFeed('https://example.com/feed.xml');

        expect(result.title).toBe('Test Podcast');
        expect(result.episodes).toHaveLength(2);
        expect(result.episodes[0].title).toBe('Episode 1');
        expect(result.episodes[0].guid).toBe('ep-001');
        expect(result.episodes[1].enclosure.url).toContain('ep2.mp3');
    });

    it('should map items to episodes with correct fields', async () => {
        (axios.get as ReturnType<typeof vi.fn>).mockResolvedValue(xmlResponse(XML_NO_NEXT));

        const result = await service.parseFeed('https://example.com/feed.xml');
        const ep = result.episodes[0];

        expect(ep).toHaveProperty('title');
        expect(ep).toHaveProperty('pubDate');
        expect(ep).toHaveProperty('guid');
        expect(ep).toHaveProperty('enclosure');
    });

    it('should reject HTML content type', async () => {
        (axios.get as ReturnType<typeof vi.fn>).mockResolvedValue({
            headers: { 'content-type': 'text/html; charset=utf-8' },
            data: '<html><body>Not a feed</body></html>',
        });

        await expect(service.parseFeed('https://example.com/page'))
            .rejects.toThrow('INVALID_FEED_TYPE');
    });

    it('should reject a feed with a dangerous DOCTYPE (XXE guard)', async () => {
        (axios.get as ReturnType<typeof vi.fn>).mockResolvedValue({
            headers: { 'content-type': 'application/xml' },
            data: '<?xml version="1.0"?><!DOCTYPE rss [<!ENTITY x "y">]><rss></rss>',
        });

        await expect(service.parseFeed('https://example.com/evil.xml'))
            .rejects.toThrow('INVALID_FEED_TYPE');
    });

    it('should use itunes image when feed.image is missing', async () => {
        (axios.get as ReturnType<typeof vi.fn>).mockResolvedValue(xmlResponse(XML_NO_NEXT));

        const parserProto = Object.getPrototypeOf((service as unknown as { parser: object }).parser);
        vi.spyOn(parserProto, 'parseString').mockResolvedValueOnce({
            title: 'iTunes Pod',
            itunes: { image: 'https://img.example.com/cover.jpg' },
            items: [],
        });

        const result = await service.parseFeed('https://example.com/feed.xml');
        expect(result.image).toBe('https://img.example.com/cover.jpg');
    });

    it('should throw FAILED_TO_PARSE for generic parse errors', async () => {
        (axios.get as ReturnType<typeof vi.fn>).mockResolvedValue(xmlResponse(XML_NO_NEXT));

        const parserProto = Object.getPrototypeOf((service as unknown as { parser: object }).parser);
        vi.spyOn(parserProto, 'parseString').mockRejectedValueOnce(new Error('XML malformed'));

        await expect(service.parseFeed('https://example.com/broken'))
            .rejects.toThrow('FAILED_TO_PARSE');
    });

    it('should allow content types that include xml even with other tokens', async () => {
        (axios.get as ReturnType<typeof vi.fn>).mockResolvedValue({
            headers: { 'content-type': 'text/xml; charset=utf-8' },
            data: XML_NO_NEXT,
        });

        const result = await service.parseFeed('https://example.com/feed.xml');
        expect(result.episodes).toHaveLength(2);
    });

    // ── RFC 5005 pagination ──────────────────────────────────────
    it('should follow atom:link rel="next" and aggregate all pages', async () => {
        const page1 = `<?xml version="1.0"?><rss><channel>
            <atom:link rel="next" href="https://example.com/feed?page=2" />
        </channel></rss>`;
        const page2 = XML_NO_NEXT; // no next link → pagination stops

        (axios.get as ReturnType<typeof vi.fn>)
            .mockResolvedValueOnce(xmlResponse(page1))
            .mockResolvedValueOnce(xmlResponse(page2));

        const parserProto = Object.getPrototypeOf((service as unknown as { parser: object }).parser);
        vi.spyOn(parserProto, 'parseString')
            .mockResolvedValueOnce({
                title: 'Paged Podcast',
                items: [{ title: 'P1-E1', guid: 'a' }, { title: 'P1-E2', guid: 'b' }],
            })
            .mockResolvedValueOnce({
                title: 'Paged Podcast',
                items: [{ title: 'P2-E1', guid: 'c' }],
            });

        const result = await service.parseFeed('https://example.com/feed.xml');

        expect(axios.get).toHaveBeenCalledTimes(2);
        expect(result.episodes).toHaveLength(3);
        expect(result.episodes.map((e: { guid: string }) => e.guid)).toEqual(['a', 'b', 'c']);
    });

    it('should not paginate when there is no next link', async () => {
        (axios.get as ReturnType<typeof vi.fn>).mockResolvedValue(xmlResponse(XML_NO_NEXT));

        await service.parseFeed('https://example.com/feed.xml');
        expect(axios.get).toHaveBeenCalledTimes(1);
    });

    it('should ignore an unsafe (private-IP) pagination link (SSRF guard)', async () => {
        const page1 = `<?xml version="1.0"?><rss><channel>
            <atom:link rel="next" href="http://127.0.0.1:8080/admin" />
        </channel></rss>`;
        (axios.get as ReturnType<typeof vi.fn>).mockResolvedValue(xmlResponse(page1));

        const result = await service.parseFeed('https://example.com/feed.xml');

        // validateUrl rejects the loopback target → no second fetch.
        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(result.episodes).toHaveLength(2);
    });

    it('should resolve a relative rel="next" href against the page URL', async () => {
        const page1 = `<?xml version="1.0"?><rss><channel>
            <atom:link rel="next" href="feed?page=2" />
        </channel></rss>`;
        const get = axios.get as ReturnType<typeof vi.fn>;
        get
            .mockResolvedValueOnce(xmlResponse(page1))
            .mockResolvedValueOnce(xmlResponse(XML_NO_NEXT));

        await service.parseFeed('https://example.com/feed.xml');

        expect(get).toHaveBeenCalledTimes(2);
        // Second call must use the absolute, resolved URL.
        expect(get.mock.calls[1][0]).toBe('https://example.com/feed?page=2');
    });
});
