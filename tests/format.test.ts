import { describe, it, expect } from 'vitest';
import { formatBytes, formatSpeed } from '../src/utils/format';

describe('formatBytes', () => {
    it('returns em dash for a missing size', () => {
        expect(formatBytes(undefined)).toBe('—');
        expect(formatBytes(null)).toBe('—');
    });

    it('scales into KB / MB / GB', () => {
        expect(formatBytes(2048, 'en')).toBe('2 KB');
        expect(formatBytes(1.5 * 1024 ** 2, 'en')).toBe('1.5 MB');
        expect(formatBytes(2 * 1024 ** 3, 'en')).toBe('2 GB');
    });

    it('is locale-aware for the decimal separator (L29)', () => {
        expect(formatBytes(1.5 * 1024 ** 2, 'en')).toBe('1.5 MB');
        expect(formatBytes(1.5 * 1024 ** 2, 'it')).toBe('1,5 MB');
        expect(formatBytes(1.5 * 1024 ** 2, 'de')).toBe('1,5 MB');
    });
});

describe('formatSpeed', () => {
    it('scales into B/s, KB/s, MB/s', () => {
        expect(formatSpeed(500, 'en')).toBe('500 B/s');
        expect(formatSpeed(1.5 * 1024 ** 2, 'en')).toBe('1.5 MB/s');
    });

    it('is locale-aware', () => {
        expect(formatSpeed(1.5 * 1024 ** 2, 'it')).toBe('1,5 MB/s');
    });
});
