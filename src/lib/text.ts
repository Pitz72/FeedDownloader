/** Show notes come as HTML: keep paragraphs, drop markup, decode entities (once). */
export function stripHtml(html: string): string {
    return html
        .replace(/<br\s*\/?>/gi, '\n')
        .replace(/<\/p>/gi, '\n\n')
        .replace(/<\/li>/gi, '\n')
        .replace(/<[^>]*>/g, '')
        // Named entities (except &amp;) and numeric entities first, then &amp;
        // LAST — decoding &amp; first turns "&amp;lt;" into "&lt;" and then into
        // "<" (double decode), and left numeric entities like &#8217; untouched.
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#0*39;/g, "'")
        .replace(/&nbsp;/g, ' ')
        .replace(/&#x([0-9a-f]+);/gi, (_m, hex) => { const n = parseInt(hex, 16); return n >= 0 && n <= 0x10FFFF ? String.fromCodePoint(n) : _m; })
        .replace(/&#(\d+);/g, (_m, dec) => { const n = parseInt(dec, 10); return n >= 0 && n <= 0x10FFFF ? String.fromCodePoint(n) : _m; })
        .replace(/&amp;/g, '&')
        .replace(/\n{3,}/g, '\n\n')
        .trim();
}
