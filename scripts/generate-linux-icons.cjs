#!/usr/bin/env node
/**
 * L43: regenerate the Linux PNG icon set that electron-builder expects under
 * `build/icons/` (referenced by `build.linux.icon` in package.json).
 *
 * These PNGs used to be produced only by the CI job, so a local `electron-builder`
 * Linux run had no icons and wasn't reproducible. They are now committed to the
 * repo; run this script to refresh them whenever `public/logo.png` changes.
 *
 * Requires ImageMagick (`magick` on v7, `convert` on v6) — the same tool the CI uses.
 */
const { execFileSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const SIZES = [16, 24, 32, 48, 64, 96, 128, 256, 512];
const SOURCE = path.join('public', 'logo.png');
const OUT_DIR = path.join('build', 'icons');

function resolveMagick() {
    for (const [cmd, args] of [['magick', ['-version']], ['convert', ['-version']]]) {
        try {
            execFileSync(cmd, args, { stdio: 'ignore' });
            return cmd;
        } catch {
            /* try next */
        }
    }
    return null;
}

function main() {
    if (!fs.existsSync(SOURCE)) {
        console.error(`[icons] source not found: ${SOURCE}`);
        process.exit(1);
    }
    const magick = resolveMagick();
    if (!magick) {
        console.error('[icons] ImageMagick not found. Install it (magick/convert) and retry.');
        process.exit(1);
    }
    fs.mkdirSync(OUT_DIR, { recursive: true });
    for (const size of SIZES) {
        const out = path.join(OUT_DIR, `${size}x${size}.png`);
        // `<magick|convert> <src> -resize NxN <out>` — the same invocation the CI runs.
        execFileSync(magick, [SOURCE, '-resize', `${size}x${size}`, out], { stdio: 'inherit' });
        console.log(`[icons] ${out}`);
    }
    console.log(`[icons] done — ${SIZES.length} sizes written to ${OUT_DIR}`);
}

main();
