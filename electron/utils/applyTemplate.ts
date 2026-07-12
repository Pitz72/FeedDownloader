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
 */
export function applyTemplate(template: string, context: {
    title: string;
    podcast: string;
    pubDate?: string;
}): string {
    const date = context.pubDate ? new Date(context.pubDate) : null;
    const isValidDate = date && !isNaN(date.getTime());

    const year  = isValidDate ? String(date!.getFullYear()) : 'unknown';
    const month = isValidDate ? String(date!.getMonth() + 1).padStart(2, '0') : 'unknown';
    const day   = isValidDate ? String(date!.getDate()).padStart(2, '0') : 'unknown';
    const dateStr = isValidDate ? `${year}-${month}-${day}` : 'unknown';

    // Function replacements: a literal value containing `$&`/`$'`/`$$` must not
    // be interpreted as a String.replace pattern (title "a$&b" broke filenames).
    return template
        .replace(/\{title\}/gi, () => context.title)
        .replace(/\{podcast\}/gi, () => context.podcast)
        .replace(/\{date\}/gi, () => dateStr)
        .replace(/\{year\}/gi, () => year)
        .replace(/\{month\}/gi, () => month)
        .replace(/\{day\}/gi, () => day);
}

export const DEFAULT_NAMING_TEMPLATE = '{title}';
