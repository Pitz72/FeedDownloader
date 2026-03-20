import { describe, it, expect } from 'vitest';
import { extractExtension } from '../electron/utils/extractExtension';

describe('extractExtension', () => {

    // ── Standard URLs ────────────────────────────────────────────
    it('should extract .mp3 from a simple MP3 URL', () => {
        expect(extractExtension('https://cdn.example.com/episode-42.mp3')).toBe('.mp3');
    });

    it('should extract .m4a from an M4A URL', () => {
        expect(extractExtension('https://cdn.example.com/episode.m4a')).toBe('.m4a');
    });

    it('should extract .ogg from an OGG URL', () => {
        expect(extractExtension('https://cdn.example.com/audio.ogg')).toBe('.ogg');
    });

    it('should extract .opus from an OPUS URL', () => {
        expect(extractExtension('https://cdn.example.com/podcast.opus')).toBe('.opus');
    });

    it('should extract .wav from a WAV URL', () => {
        expect(extractExtension('https://cdn.example.com/recording.wav')).toBe('.wav');
    });

    it('should extract .flac from a FLAC URL', () => {
        expect(extractExtension('https://cdn.example.com/hires.flac')).toBe('.flac');
    });

    it('should extract .aac from an AAC URL', () => {
        expect(extractExtension('https://cdn.example.com/stream.aac')).toBe('.aac');
    });

    // ── Video formats ────────────────────────────────────────────
    it('should extract .mp4 from a video URL', () => {
        expect(extractExtension('https://cdn.example.com/video.mp4')).toBe('.mp4');
    });

    it('should extract .mkv from a video URL', () => {
        expect(extractExtension('https://cdn.example.com/video.mkv')).toBe('.mkv');
    });

    // ── Non-media formats ────────────────────────────────────────
    it('should extract .pdf from a PDF URL', () => {
        expect(extractExtension('https://cdn.example.com/notes.pdf')).toBe('.pdf');
    });

    // ── URLs with query strings ──────────────────────────────────
    it('should strip query string before extracting extension', () => {
        expect(extractExtension('https://cdn.example.com/ep.m4a?token=abc&expires=999')).toBe('.m4a');
    });

    it('should strip fragment before extracting extension', () => {
        expect(extractExtension('https://cdn.example.com/ep.ogg#t=30')).toBe('.ogg');
    });

    it('should handle complex CDN URLs with paths and queries', () => {
        expect(extractExtension('https://dts.podtrac.com/redirect.mp3/cdn.simplecast.com/audio/abcdef/ep123.mp3')).toBe('.mp3');
    });

    // ── Case insensitivity ───────────────────────────────────────
    it('should handle uppercase extensions', () => {
        expect(extractExtension('https://cdn.example.com/ep.MP3')).toBe('.mp3');
    });

    it('should handle mixed case extensions', () => {
        expect(extractExtension('https://cdn.example.com/ep.M4a')).toBe('.m4a');
    });

    // ── Fallback to .mp3 ─────────────────────────────────────────
    it('should fallback to .mp3 when URL has no extension', () => {
        expect(extractExtension('https://cdn.example.com/download/12345')).toBe('.mp3');
    });

    it('should fallback to .mp3 for server-side script extensions', () => {
        expect(extractExtension('https://cdn.example.com/stream.php?id=42')).toBe('.mp3');
    });

    it('should fallback to .mp3 for .aspx URLs', () => {
        expect(extractExtension('https://cdn.example.com/download.aspx?file=ep1')).toBe('.mp3');
    });

    it('should fallback to .mp3 for .html URLs', () => {
        expect(extractExtension('https://example.com/podcast/episode.html')).toBe('.mp3');
    });

    it('should fallback to .mp3 for invalid URLs', () => {
        expect(extractExtension('not-a-valid-url')).toBe('.mp3');
    });

    it('should fallback to .mp3 for empty string', () => {
        expect(extractExtension('')).toBe('.mp3');
    });

    // ── Edge cases ───────────────────────────────────────────────
    it('should handle URLs with multiple dots', () => {
        expect(extractExtension('https://cdn.example.com/my.podcast.episode.42.m4a')).toBe('.m4a');
    });

    it('should handle URL-encoded characters in path', () => {
        expect(extractExtension('https://cdn.example.com/my%20podcast/ep%2001.ogg')).toBe('.ogg');
    });
});
