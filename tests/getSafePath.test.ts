import { describe, it, expect } from 'vitest';
import { getSafePath } from '../electron/utils/getSafePath';
import path from 'path';

describe('getSafePath', () => {

    // ── Basic Path Construction ──────────────────────────────────
    it('should build a valid path with sanitised names', () => {
        const result = getSafePath('/downloads', 'My Podcast', 'Episode 1');
        expect(result).toBe(path.join('/downloads', 'My Podcast', 'Episode 1.mp3'));
    });

    it('should default to .mp3 extension', () => {
        const result = getSafePath('/dl', 'Pod', 'Ep');
        expect(result).toMatch(/\.mp3$/);
    });

    it('should use custom extension when provided', () => {
        const result = getSafePath('/dl', 'Pod', 'Ep', '.m4a');
        expect(result).toMatch(/\.m4a$/);
    });

    // ── Sanitisation ─────────────────────────────────────────────
    it('should strip dangerous characters from podcast title', () => {
        const result = getSafePath('/dl', 'Pod/Cast\\Name:?', 'Episode');
        // sanitize-filename removes /\:? etc
        expect(result).not.toContain('/Cast');
        expect(result).not.toContain('\\Name');
        expect(result).not.toContain(':');
        expect(result).not.toContain('?');
    });

    it('should strip dangerous characters from episode title', () => {
        const result = getSafePath('/dl', 'Pod', 'Ep<>|"test"');
        expect(result).not.toContain('<');
        expect(result).not.toContain('>');
        expect(result).not.toContain('|');
    });

    // ── Truncation (MAX_PATH = 250) ──────────────────────────────
    it('should truncate episode title when path exceeds MAX_PATH', () => {
        const longTitle = 'A'.repeat(300);
        const result = getSafePath('/dl', 'Pod', longTitle);
        expect(result.length).toBeLessThanOrEqual(250);
    });

    it('should keep episode title intact when path is within MAX_PATH', () => {
        const title = 'Short Title';
        const result = getSafePath('/dl', 'Pod', title);
        expect(result).toContain('Short Title');
    });

    it('should truncate to 5 chars when folder path alone nearly exceeds MAX_PATH', () => {
        const longPodcast = 'P'.repeat(240);
        const result = getSafePath('/dl', longPodcast, 'My Episode Title');
        const basename = path.basename(result, '.mp3');
        expect(basename.length).toBeLessThanOrEqual(5);
    });

    // ── Edge Cases ───────────────────────────────────────────────
    it('should handle empty podcast title', () => {
        const result = getSafePath('/dl', '', 'Episode');
        expect(result).toBe(path.join('/dl', 'Episode.mp3'));
    });

    it('should fall back to "episode" for empty or reserved episode titles (L8)', () => {
        // empty title and Windows-reserved names (CON, PRN…) sanitize to ''
        expect(getSafePath('/dl', 'Podcast', '')).toBe(path.join('/dl', 'Podcast', 'episode.mp3'));
        expect(getSafePath('/dl', 'Podcast', 'CON')).toBe(path.join('/dl', 'Podcast', 'episode.mp3'));
    });

    it('should handle unicode characters in titles', () => {
        const result = getSafePath('/dl', 'Café Podcast', 'Épisode Spécial');
        expect(result).toContain('Café Podcast');
        expect(result).toContain('Épisode Spécial');
    });

    it('should handle dots in episode title', () => {
        const result = getSafePath('/dl', 'Pod', 'E01.Part.2');
        expect(result).toMatch(/\.mp3$/);
        expect(result).toContain('E01.Part.2');
    });
});
