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

    const doctype = /<!DOCTYPE/i.exec(xml);
    if (!doctype) return false;

    // A DOCTYPE is only meaningful in the prolog — before the root element. The
    // root element is the first `<` that starts an element name (skipping the XML
    // declaration `<?…?>`, comments `<!--…-->`, and markup declarations `<!…>`,
    // which all begin with `<?`/`<!`). Anything that merely *looks* like a DOCTYPE
    // deeper in the body (e.g. inside a CDATA description) is not a real DOCTYPE.
    const rootEl = /<[A-Za-z_:]/.exec(xml);
    const rootIndex = rootEl ? rootEl.index : xml.length;
    if (doctype.index >= rootIndex) return false;

    // Inspect the ENTIRE DOCTYPE declaration (from `<!DOCTYPE` up to the root
    // element, internal subset included) rather than a fixed-size prefix window —
    // otherwise the entity definition can simply be padded past the cutoff to
    // evade detection.
    const decl = xml.slice(doctype.index, rootIndex);

    return /<!ENTITY/i.test(decl) || /\b(?:SYSTEM|PUBLIC)\b/i.test(decl);
}
