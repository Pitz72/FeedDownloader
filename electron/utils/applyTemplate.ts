/**
 * applyTemplate — v0.5.4
 *
 * Applies a naming template to produce an episode filename (without extension).
 * Supported tokens:
 *   {title}       — episode title
 *   {podcast}     — podcast name
 *   {date}        — episode publish date as YYYY-MM-DD (or "unknown" if missing)
 *   {year}        — 4-digit year from pubDate
 *   {month}       — 2-digit month from pubDate
 *   {day}         — 2-digit day from pubDate
 *   {season}      — v1.6.0: <itunes:season>, 2 digits ("00" if the feed has none)
 *   {episode}     — v1.6.0: <itunes:episode>, 2 digits ("00" if the feed has none)
 */
export function applyTemplate(template: string, context: {
    title: string;
    podcast: string;
    pubDate?: string;
    season?: string;
    episode?: string;
}): string {
    const date = context.pubDate ? new Date(context.pubDate) : null;
    const isValidDate = date && !isNaN(date.getTime());

    const year  = isValidDate ? String(date!.getFullYear()) : 'unknown';
    const month = isValidDate ? String(date!.getMonth() + 1).padStart(2, '0') : 'unknown';
    const day   = isValidDate ? String(date!.getDate()).padStart(2, '0') : 'unknown';
    const dateStr = isValidDate ? `${year}-${month}-${day}` : 'unknown';

    // Only plain non-negative integers count — feeds put all sorts of text here.
    const number = (raw?: string): string => {
        const s = String(raw ?? '').trim();
        return /^\d+$/.test(s) ? String(parseInt(s, 10)).padStart(2, '0') : '00';
    };
    const season = number(context.season);
    const episode = number(context.episode);

    // Function replacements: a literal value containing `$&`/`$'`/`$$` must not
    // be interpreted as a String.replace pattern (title "a$&b" broke filenames).
    return template
        .replace(/\{title\}/gi, () => context.title)
        .replace(/\{podcast\}/gi, () => context.podcast)
        .replace(/\{date\}/gi, () => dateStr)
        .replace(/\{year\}/gi, () => year)
        .replace(/\{month\}/gi, () => month)
        .replace(/\{day\}/gi, () => day)
        .replace(/\{season\}/gi, () => season)
        .replace(/\{episode\}/gi, () => episode);
}

export const DEFAULT_NAMING_TEMPLATE = '{title}';
