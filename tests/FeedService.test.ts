import { describe, it, expect, vi, beforeEach } from 'vitest';
import { FeedService } from '../electron/services/FeedService';

// ── Mock axios ───────────────────────────────────────────────────
vi.mock('axios', () => {
    return {
        default: Object.assign(
            vi.fn(), // axios() callable mock
            {
                head: vi.fn(),
                get: vi.fn(),
            },
        ),
    };
});

// ── Mock rss-parser ──────────────────────────────────────────────
vi.mock('rss-parser', () => {
    return {
        default: class MockParser {
            async parseURL(_url: string) {
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

describe('FeedService', () => {
    let service: FeedService;

    beforeEach(() => {
        service = new FeedService();
        vi.clearAllMocks();
    });

    it('should parse a valid feed and return episodes', async () => {
        // Mock HEAD request returning XML content type
        (axios.head as ReturnType<typeof vi.fn>).mockResolvedValue({
            headers: { 'content-type': 'application/rss+xml' },
        });

        const result = await service.parseFeed('https://example.com/feed.xml');

        expect(result.title).toBe('Test Podcast');
        expect(result.episodes).toHaveLength(2);
        expect(result.episodes[0].title).toBe('Episode 1');
        expect(result.episodes[0].guid).toBe('ep-001');
        expect(result.episodes[1].enclosure.url).toContain('ep2.mp3');
    });

    it('should map items to episodes with correct fields', async () => {
        (axios.head as ReturnType<typeof vi.fn>).mockResolvedValue({
            headers: { 'content-type': 'application/xml' },
        });

        const result = await service.parseFeed('https://example.com/feed.xml');
        const ep = result.episodes[0];

        expect(ep).toHaveProperty('title');
        expect(ep).toHaveProperty('pubDate');
        expect(ep).toHaveProperty('guid');
        expect(ep).toHaveProperty('enclosure');
    });

    it('should reject HTML content type', async () => {
        (axios.head as ReturnType<typeof vi.fn>).mockResolvedValue({
            headers: { 'content-type': 'text/html; charset=utf-8' },
        });

        await expect(service.parseFeed('https://example.com/page'))
            .rejects.toThrow('INVALID_FEED_TYPE');
    });

    it('should fallback to GET when HEAD fails', async () => {
        // HEAD fails
        (axios.head as ReturnType<typeof vi.fn>).mockRejectedValue(new Error('HEAD not allowed'));
        // GET succeeds with XML content type
        (axios.get as ReturnType<typeof vi.fn>).mockResolvedValue({
            headers: { 'content-type': 'application/rss+xml' },
            data: { destroy: vi.fn() },
        });

        const result = await service.parseFeed('https://example.com/feed.xml');
        expect(result.episodes).toHaveLength(2);
        expect(axios.get).toHaveBeenCalled();
    });

    it('should use itunes image when feed.image is missing', async () => {
        (axios.head as ReturnType<typeof vi.fn>).mockResolvedValue({
            headers: { 'content-type': 'application/xml' },
        });

        // Spy on the parser's parseURL to return a feed with itunes image
        const parserProto = Object.getPrototypeOf((service as any).parser);
        vi.spyOn(parserProto, 'parseURL').mockResolvedValueOnce({
            title: 'iTunes Pod',
            itunes: { image: 'https://img.example.com/cover.jpg' },
            items: [],
        });

        const result = await service.parseFeed('https://example.com/feed.xml');
        expect(result.image).toBe('https://img.example.com/cover.jpg');
    });

    it('should throw FAILED_TO_PARSE for generic parse errors', async () => {
        (axios.head as ReturnType<typeof vi.fn>).mockResolvedValue({
            headers: { 'content-type': 'application/xml' },
        });

        // Spy on the parser's parseURL to throw an error
        const parserProto = Object.getPrototypeOf((service as any).parser);
        vi.spyOn(parserProto, 'parseURL').mockRejectedValueOnce(new Error('XML malformed'));

        await expect(service.parseFeed('https://example.com/broken'))
            .rejects.toThrow('FAILED_TO_PARSE');
    });

    it('should allow content types that include xml even with other tokens', async () => {
        (axios.head as ReturnType<typeof vi.fn>).mockResolvedValue({
            headers: { 'content-type': 'text/xml; charset=utf-8' },
        });

        const result = await service.parseFeed('https://example.com/feed.xml');
        expect(result.episodes).toHaveLength(2);
    });
});
