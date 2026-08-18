/**
 * XML safety helper (M4).
 *
 * Both the feed parser (rss-parser) and the OPML parser (fast-xml-parser) are
 * configured to NOT expand external entities, so they are not vulnerable to XXE
 * out of the box. This guard makes the policy explicit and refuses, up front, any
 * document whose DOCTYPE either defines an `<!ENTITY ...>` (the shape used for
 * classic XXE and "billion laughs" entity-expansion attacks) or references an
 * external subset via `SYSTEM`/`PUBLIC` (which pulls a remote/local DTD).
 */
export function hasDangerousDoctype(xml: string): boolean {
    if (!xml) return false;

    // Strip comments and CDATA sections FIRST. Both are inert to the XML parser,
    // but their raw text can otherwise be used to evade the checks below: a fake
    // element inside a comment (`<!--<a>-->`) placed before the real `<!ENTITY`
    // would move the detected "root element" ahead of the entity definition, and a
    // fake `<!DOCTYPE…>` inside a CDATA section deep in the body could masquerade
    // as a real one. Removing them closes both bypasses.
    const stripped = xml
        .replace(/<!--[\s\S]*?-->/g, '')
        .replace(/<!\[CDATA\[[\s\S]*?\]\]>/g, '');

    const doctype = /<!DOCTYPE/i.exec(stripped);
    if (!doctype) return false;

    // A DOCTYPE is only meaningful in the prolog — before the root element. The
    // root element is the first `<` that starts an element name (the XML
    // declaration `<?…?>` and markup declarations `<!…>` begin with `<?`/`<!`).
    const rootEl = /<[A-Za-z_:]/.exec(stripped);
    const rootIndex = rootEl ? rootEl.index : stripped.length;
    if (doctype.index >= rootIndex) return false;

    // Delimit the DOCTYPE declaration exactly: it ends at the first '>' that is
    // NOT inside an internal subset '[ … ]'. Scanning this precise range (rather
    // than a fixed-size window) means an entity definition can't be padded past a
    // cutoff to evade detection.
    let end = stripped.length;
    let depth = 0;
    for (let i = doctype.index; i < stripped.length; i++) {
        const ch = stripped[i];
        if (ch === '[') depth++;
        else if (ch === ']') { if (depth > 0) depth--; }
        else if (ch === '>' && depth === 0) { end = i; break; }
    }
    const decl = stripped.slice(doctype.index, end + 1);

    return /<!ENTITY/i.test(decl) || /\b(?:SYSTEM|PUBLIC)\b/i.test(decl);
}
