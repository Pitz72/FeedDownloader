/**
 * XML safety helper (M4).
 *
 * Both the feed parser (rss-parser) and the OPML parser (fast-xml-parser) are
 * configured to NOT expand external entities, so they are not vulnerable to XXE
 * out of the box. This guard makes the policy explicit and refuses, up front, any
 * document that declares a DOCTYPE with an `<!ENTITY ...>` definition — the shape
 * used for classic XXE and "billion laughs" entity-expansion attacks.
 */
export function hasDangerousDoctype(xml: string): boolean {
    if (!xml) return false;
    // Only inspect the prolog: a DOCTYPE is only meaningful before the root element.
    const head = xml.slice(0, 8192);
    if (!/<!DOCTYPE/i.test(head)) return false;
    return /<!ENTITY/i.test(head);
}
