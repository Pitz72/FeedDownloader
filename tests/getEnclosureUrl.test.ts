import { describe, it, expect } from 'vitest';
import { getEnclosureUrl } from '../shared/getEnclosureUrl';
import type { Episode } from '../shared/types';

describe('getEnclosureUrl', () => {
    it('should return enclosure.url when present', () => {
        const ep: Episode = { title: 'Test', enclosure: { url: 'https://cdn.com/ep.mp3' } };
        expect(getEnclosureUrl(ep)).toBe('https://cdn.com/ep.mp3');
    });

    it('should return first enclosures[].url when enclosure is missing', () => {
        const ep: Episode = {
            title: 'Test',
            enclosures: [
                { url: 'https://cdn.com/ep1.mp3' },
                { url: 'https://cdn.com/ep2.mp3' },
            ],
        };
        expect(getEnclosureUrl(ep)).toBe('https://cdn.com/ep1.mp3');
    });

    it('should prefer enclosure.url over enclosures[]', () => {
        const ep: Episode = {
            title: 'Test',
            enclosure: { url: 'https://main.com/ep.mp3' },
            enclosures: [{ url: 'https://alt.com/ep.mp3' }],
        };
        expect(getEnclosureUrl(ep)).toBe('https://main.com/ep.mp3');
    });

    it('should return undefined when no enclosure at all', () => {
        const ep: Episode = { title: 'Test' };
        expect(getEnclosureUrl(ep)).toBeUndefined();
    });

    it('should return undefined for empty enclosures array', () => {
        const ep: Episode = { title: 'Test', enclosures: [] };
        expect(getEnclosureUrl(ep)).toBeUndefined();
    });

    it('should handle enclosure with empty url', () => {
        const ep: Episode = { title: 'Test', enclosure: { url: '' } };
        // Empty string is falsy — falls through to enclosures. Since enclosures is missing, returns undefined.
        expect(getEnclosureUrl(ep)).toBeUndefined();
    });
});
