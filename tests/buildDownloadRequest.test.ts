import { describe, it, expect } from 'vitest';
import { buildDownloadRequest, feedImageUrl } from '../shared/buildDownloadRequest';
import type { Episode } from '../shared/types';

const feed = { url: 'https://a.com/feed', title: 'My Show', image: { url: 'https://a.com/cover.jpg' } };

describe('buildDownloadRequest (v1.6.0)', () => {
    it('returns null for an episode without enclosure', () => {
        expect(buildDownloadRequest(feed, { title: 'x' })).toBeNull();
    });

    it('maps the episode and its metadata', () => {
        const ep: Episode = {
            title: 'Ep 1',
            guid: 'g-1',
            pubDate: 'Mon, 01 Jan 2024 10:00:00 GMT',
            link: 'https://a.com/ep1',
            content: '<p>Notes</p>',
            enclosure: { url: 'https://cdn.a.com/1', type: 'audio/x-m4a', length: '12345' },
            itunes: { duration: '01:02:03', season: '2', episode: '7', episodeType: 'full', image: 'https://a.com/ep1.jpg' },
        };
        expect(buildDownloadRequest(feed, ep)).toEqual({
            url: 'https://cdn.a.com/1',
            title: 'Ep 1',
            podcastTitle: 'My Show',
            guid: 'g-1',
            pubDate: 'Mon, 01 Jan 2024 10:00:00 GMT',
            feedImageUrl: 'https://a.com/cover.jpg',
            episodeImageUrl: 'https://a.com/ep1.jpg',
            feedUrl: 'https://a.com/feed',
            enclosureType: 'audio/x-m4a',
            meta: {
                description: '<p>Notes</p>',
                link: 'https://a.com/ep1',
                duration: '01:02:03',
                season: '2',
                episode: '7',
                episodeType: 'full',
                enclosureLength: 12345,
            },
        });
    });

    it('falls back to the enclosure URL as guid and to isoDate', () => {
        const r = buildDownloadRequest(feed, { title: 't', isoDate: '2024-01-01T00:00:00Z', enclosure: { url: 'https://cdn/x.mp3' } });
        expect(r?.guid).toBe('https://cdn/x.mp3');
        expect(r?.pubDate).toBe('2024-01-01T00:00:00Z');
        expect(r?.meta?.enclosureLength).toBeUndefined();
    });

    it('takes the type of the enclosure actually chosen (audio preferred)', () => {
        const r = buildDownloadRequest(feed, {
            title: 't',
            enclosures: [{ url: 'https://cdn/v.mp4', type: 'video/mp4' }, { url: 'https://cdn/a', type: 'audio/ogg' }],
        });
        expect(r?.url).toBe('https://cdn/a');
        expect(r?.enclosureType).toBe('audio/ogg');
    });
});

describe('feedImageUrl', () => {
    it('accepts string, object and iTunes shapes', () => {
        expect(feedImageUrl({ image: 'https://x/1.jpg' })).toBe('https://x/1.jpg');
        expect(feedImageUrl({ image: { url: 'https://x/2.jpg' } })).toBe('https://x/2.jpg');
        expect(feedImageUrl({ itunes: { image: 'https://x/3.jpg' } })).toBe('https://x/3.jpg');
        expect(feedImageUrl({})).toBeUndefined();
    });
});
