/**
 * Verifica le traduzioni (standard Titan): IT ed EN devono avere le stesse
 * chiavi, e ogni chiave usata nel codice deve esistere in entrambe.
 *
 * - Chiavi statiche: le chiamate t('…') in src/.
 * - Chiavi dinamiche: le stringhe 'errors.…' e 'feedError.…' in src/lib/actions.ts.
 * - Plurali: una chiave usata con { count } può esistere come base o come _one/_other.
 *
 * Uso: npm run check:locales
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const load = (lang) => JSON.parse(readFileSync(join(root, 'src/locales', `${lang}.json`), 'utf-8'));

const flatten = (obj, prefix = '', out = new Set()) => {
    for (const [k, v] of Object.entries(obj)) {
        const key = prefix ? `${prefix}.${k}` : k;
        if (v && typeof v === 'object') flatten(v, key, out);
        else out.add(key);
    }
    return out;
};

const it = flatten(load('it'));
const en = flatten(load('en'));
let problems = 0;
const report = (msg) => { console.error(`✗ ${msg}`); problems++; };

for (const k of it) if (!en.has(k)) report(`manca in en.json: ${k}`);
for (const k of en) if (!it.has(k)) report(`manca in it.json: ${k}`);

const files = [];
const walk = (dir) => {
    for (const name of readdirSync(dir)) {
        const full = join(dir, name);
        if (statSync(full).isDirectory()) walk(full);
        else if (/\.(tsx?|jsx?)$/.test(name)) files.push(full);
    }
};
walk(join(root, 'src'));

const used = new Set();
for (const f of files) {
    const src = readFileSync(f, 'utf-8');
    for (const m of src.matchAll(/\bt\(\s*['`]([a-zA-Z0-9_]+\.[a-zA-Z0-9_.]+)['`]/g)) used.add(m[1]);
    if (f.endsWith(join('lib', 'actions.ts'))) {
        for (const m of src.matchAll(/'((?:errors|feedError)\.[a-z_]+)'/g)) used.add(m[1]);
    }
}

const exists = (set, key) => set.has(key) || (set.has(`${key}_one`) && set.has(`${key}_other`));
for (const key of [...used].sort()) {
    if (!exists(it, key)) report(`usata nel codice ma assente in it.json: ${key}`);
    if (!exists(en, key)) report(`usata nel codice ma assente in en.json: ${key}`);
}

if (problems) {
    console.error(`\n✗ ${problems} problemi nelle traduzioni.`);
    process.exit(1);
}
console.log(`✓ ${used.size} chiavi usate, ${it.size} definite: italiano e inglese allineati.`);
