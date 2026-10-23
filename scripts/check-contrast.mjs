/**
 * Verifica il contrasto della palette di FeedDownloader secondo WCAG 2.2 (standard Titan).
 *
 * Legge src/theme/palette.css — la stessa fonte da cui Tailwind ricava classi e
 * variabili — e misura ogni coppia testo/sfondo dichiarata in
 * src/theme/contrast-checks.json:
 *   text        ≥ 4.5:1  (1.4.3, testo normale)
 *   ui          ≥ 3:1    (1.4.11, bordi di controlli, icone, anello di focus)
 *   ui-fill     ≥ 3:1    (1.4.11, riempimento di un controllo rispetto allo sfondo)
 *   decorative  solo riportata: testo disabilitato, esente per 1.4.3
 *
 * Esce con errore se una coppia non regge: un colore nuovo non entra senza passare di qui.
 * Uso: npm run check:contrast   (opzione --all per stampare anche le coppie che passano)
 */
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const css = readFileSync(join(root, 'src/theme/palette.css'), 'utf-8');
const { checks } = JSON.parse(readFileSync(join(root, 'src/theme/contrast-checks.json'), 'utf-8'));
const showAll = process.argv.includes('--all');

const colors = {};
for (const m of css.matchAll(/--color-([a-z0-9-]+):\s*(#[0-9a-f]{6})\s*;/gi)) colors[m[1]] = m[2];

const channel = (c) => {
    const s = c / 255;
    return s <= 0.04045 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
};
const luminance = (hex) => {
    const n = parseInt(hex.slice(1), 16);
    return 0.2126 * channel((n >> 16) & 255) + 0.7152 * channel((n >> 8) & 255) + 0.0722 * channel(n & 255);
};
export const ratio = (a, b) => {
    const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
    return (hi + 0.05) / (lo + 0.05);
};

const MIN = { text: 4.5, ui: 3, 'ui-fill': 3, decorative: 0 };
let failures = 0;
let count = 0;

for (const check of checks) {
    for (const bg of check.bg) {
        const fg = colors[check.fg];
        const back = colors[bg];
        if (!fg || !back) {
            console.error(`✗ colore sconosciuto: ${check.fg} su ${bg}`);
            failures++;
            continue;
        }
        const r = ratio(fg, back);
        const min = MIN[check.kind];
        const ok = r >= min;
        count++;
        if (!ok) failures++;
        if (!ok || showAll) {
            const mark = check.kind === 'decorative' ? '·' : ok ? '✓' : '✗';
            console.log(`${mark} ${check.fg.padEnd(14)} su ${bg.padEnd(16)} ${r.toFixed(2).padStart(6)}:1  (${check.kind}${min ? ` ≥ ${min}` : ''})`);
        }
    }
}

if (failures) {
    console.error(`\n✗ ${failures} coppie sotto la soglia WCAG 2.2 AA.`);
    process.exit(1);
}
console.log(`✓ ${count} coppie di colori verificate: tutte conformi a WCAG 2.2 AA.`);
