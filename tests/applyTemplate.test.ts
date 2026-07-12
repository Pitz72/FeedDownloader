import { describe, it, expect } from 'vitest';
import { applyTemplate, DEFAULT_NAMING_TEMPLATE } from '../electron/utils/applyTemplate';

// Midday UTC keeps the local-time date components stable across timezones
// (getFullYear/getMonth/getDate use local time).
const PUB_DATE = '2024-03-05T12:00:00Z';

describe('applyTemplate', () => {

    // ── Token substitution ────────────────────────────────────
    describe('should substitute all supported tokens', () => {
        it('should substitute {title}', () => {
            expect(applyTemplate('{title}', { title: 'Episode One', podcast: 'My Pod' }))
                .toBe('Episode One');
        });

        it('should substitute {podcast}', () => {
            expect(applyTemplate('{podcast}', { title: 'Ep', podcast: 'My Pod' }))
                .toBe('My Pod');
        });

        it('should substitute {date} as YYYY-MM-DD', () => {
            expect(applyTemplate('{date}', { title: 'Ep', podcast: 'P', pubDate: PUB_DATE }))
                .toBe('2024-03-05');
        });

        it('should substitute {year}, {month}, {day} with zero-padding', () => {
            expect(applyTemplate('{year}/{month}/{day}', { title: 'Ep', podcast: 'P', pubDate: PUB_DATE }))
                .toBe('2024/03/05');
        });

        it('should handle a combined template', () => {
            expect(applyTemplate('{podcast} - {date} - {title}', {
                title: 'Pilot', podcast: 'Show', pubDate: PUB_DATE,
            })).toBe('Show - 2024-03-05 - Pilot');
        });

        it('should replace repeated occurrences of the same token', () => {
            expect(applyTemplate('{title}_{title}', { title: 'X', podcast: 'P' }))
                .toBe('X_X');
        });

        it('should parse a typical RFC 2822 RSS pubDate', () => {
            expect(applyTemplate('{date}', {
                title: 'Ep', podcast: 'P', pubDate: 'Tue, 05 Mar 2024 12:00:00 GMT',
            })).toBe('2024-03-05');
        });
    });

    // ── Case-insensitive tokens ───────────────────────────────
    describe('should match tokens case-insensitively', () => {
        it('should substitute {TITLE} and {Title}', () => {
            expect(applyTemplate('{TITLE}-{Title}', { title: 'x', podcast: 'P' })).toBe('x-x');
        });

        it('should substitute {DATE}', () => {
            expect(applyTemplate('{DATE}', { title: 'Ep', podcast: 'P', pubDate: PUB_DATE }))
                .toBe('2024-03-05');
        });
    });

    // ── Invalid / missing dates ───────────────────────────────
    describe('should fall back to "unknown" for invalid or missing dates', () => {
        it('should use "unknown" when pubDate is missing', () => {
            expect(applyTemplate('{date}|{year}|{month}|{day}', { title: 'Ep', podcast: 'P' }))
                .toBe('unknown|unknown|unknown|unknown');
        });

        it('should use "unknown" when pubDate is an empty string', () => {
            expect(applyTemplate('{date}', { title: 'Ep', podcast: 'P', pubDate: '' }))
                .toBe('unknown');
        });

        it('should use "unknown" when pubDate is unparseable', () => {
            expect(applyTemplate('{date}', { title: 'Ep', podcast: 'P', pubDate: 'not a date' }))
                .toBe('unknown');
        });

        it('should still substitute non-date tokens when the date is invalid', () => {
            expect(applyTemplate('{podcast} {title} {date}', {
                title: 'Ep', podcast: 'P', pubDate: 'garbage',
            })).toBe('P Ep unknown');
        });
    });

    // ── Non-token text / unknown tokens ───────────────────────
    describe('should leave non-token text untouched', () => {
        it('should keep literal text around tokens', () => {
            expect(applyTemplate('EP - {title}.final', { title: 'x', podcast: 'P' }))
                .toBe('EP - x.final');
        });

        it('should leave unknown tokens as-is', () => {
            expect(applyTemplate('{episode}-{title}', { title: 'x', podcast: 'P' }))
                .toBe('{episode}-x');
        });

        it('should return an empty template unchanged', () => {
            expect(applyTemplate('', { title: 'x', podcast: 'P' })).toBe('');
        });
    });

    // ── Special characters in values ──────────────────────────
    describe('should preserve special characters in substituted values', () => {
        it('should preserve punctuation and unicode in the title', () => {
            const title = 'Ep. 5: "Café" & <friends> (part 1/2)!';
            expect(applyTemplate('{title}', { title, podcast: 'P' })).toBe(title);
        });

        it('should preserve regex-special characters in values', () => {
            expect(applyTemplate('{title}', { title: 'a.b*c+d?e[f]g', podcast: 'P' }))
                .toBe('a.b*c+d?e[f]g');
        });

        it('should round-trip "$&" and other $-sequences verbatim', () => {
            // Function replacements: $-sequences in values must never be
            // interpreted as String.replace patterns.
            expect(applyTemplate('{title}', { title: 'a$&b', podcast: 'P' }))
                .toBe('a$&b');
            expect(applyTemplate('{title}', { title: 'price $$9', podcast: 'P' }))
                .toBe('price $$9');
        });

        it('documents current behavior: a value containing a token string gets re-substituted', () => {
            // Tokens are replaced sequentially, so "{podcast}" appearing inside
            // the title is itself expanded by the following replace pass.
            expect(applyTemplate('{title}', { title: 'see {podcast} here', podcast: 'POD' }))
                .toBe('see POD here');
        });
    });

    // ── Default template ──────────────────────────────────────
    describe('DEFAULT_NAMING_TEMPLATE', () => {
        it('should be {title}', () => {
            expect(DEFAULT_NAMING_TEMPLATE).toBe('{title}');
        });
    });
});
