/*
 * Copertina e foglio di stile dei manuali PDF (dalla 1.6.0), condivisi da
 * build-book.cjs (italiano) e build-all-books.cjs (inglese).
 *
 * La copertina riprende la schermata d'ingresso dell'app: la stessa tavolozza
 * «Runtime Violet» (src/theme/palette.css), il cielo con poche stelle ferme e il
 * marchio dentro l'orbita in prospettiva di FeedOrbit.tsx, con la cometa ferma
 * davanti alla piastrella e la sua scia. Le pagine interne usano gli stessi viola
 * su fondo bianco, al posto del blu notte della 1.5.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

/** Colori dal design system dell'app (palette.css). */
const C = {
  canvas: '#0c0a18',
  surface1: '#110e21',
  line: '#272042',
  lineStrong: '#7d6eab',
  fg: '#f3effd',
  fg2: '#d2cae9',
  fg3: '#b0a6cf',
  primary: '#7c3aed',
  primaryPressed: '#5b21b6',
  accent: '#bba0ff',
  accentStrong: '#d3bafe',
  brand: '#9962fc',
  tile: '#160925',
};

/** La seconda riga del titolo, come nella schermata d'ingresso (app.edition). */
const EDITION_LINE = { it: 'Archivio di podcast', en: 'Podcast archiver' };

function dataUri(file, mime) {
  const full = path.join(ROOT, file);
  return fs.existsSync(full) ? `data:${mime};base64,${fs.readFileSync(full).toString('base64')}` : '';
}

/** Cielo: stelle ferme con lo stesso generatore a seme fisso dell'intro, più fitte in alto. */
function starsSvg() {
  let seed = 20261023;
  const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const dots = [];
  for (let i = 0; i < 90; i++) {
    const big = rnd() > 0.88;
    const x = rnd() * 148;
    const y = Math.pow(rnd(), 1.5) * 150;
    // le stelle si diradano scendendo verso il titolo
    const fade = Math.max(0, 1 - y / 150);
    const opacity = (0.16 + rnd() * (big ? 0.55 : 0.4)) * (0.35 + 0.65 * fade);
    dots.push(`<circle cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" r="${big ? 0.42 : 0.22}" fill="${C.fg2}" opacity="${opacity.toFixed(3)}"/>`);
  }
  return `<svg class="cover-stars" viewBox="0 0 148 210" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">${dots.join('')}</svg>`;
}

/*
 * Il marchio nell'orbita: geometria di FeedOrbit.tsx (1 unità = 1 px dell'app),
 * fermata all'ultimo fotogramma ma con la scia ancora visibile. La profondità è
 * lo stesso trucco a due strati: l'orbita disegnata una volta sul semipiano
 * «dietro», bucata dove c'è la piastrella, e una volta sul semipiano «davanti».
 */
function orbitSvg() {
  const W = 260, H = 140, CX = W / 2, CY = H / 2;
  const LOGO = 100, LOGO_X = CX - LOGO / 2, LOGO_Y = CY - LOGO / 2;
  const INSET = LOGO * 0.04, TILE = LOGO - INSET * 2, TILE_R = LOGO * 0.2;
  const RX = 118, RY = 31, TILT_DEG = -28;
  const TILT = (TILT_DEG * Math.PI) / 180, COS = Math.cos(TILT), SIN = Math.sin(TILT);
  const pt = (t) => [CX + RX * Math.cos(t) * COS - RY * Math.sin(t) * SIN, CY + RX * Math.cos(t) * SIN + RY * Math.sin(t) * COS];
  const half = (side) => {
    const L = 1000, ux = COS * L, uy = SIN * L, nx = -SIN * L * side, ny = COS * L * side;
    return `M${CX + ux},${CY + uy} L${CX + ux + nx},${CY + uy + ny} L${CX - ux + nx},${CY - uy + ny} L${CX - ux},${CY - uy} Z`;
  };
  const T_END = 0.27 * Math.PI;

  const trail = [];
  // la scia: tanti punti fitti che si assottigliano e sfumano, come una coda
  for (let i = 26; i >= 1; i--) {
    const [x, y] = pt(T_END - i * 0.045);
    trail.push(`<circle cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" r="${Math.max(0.45, 2.5 - i * 0.08).toFixed(2)}" fill="${C.accent}" opacity="${(Math.pow(1 - i / 27, 1.4) * 0.8).toFixed(3)}"/>`);
  }
  const [hx, hy] = pt(T_END);
  const rings = `
      <ellipse cx="${CX}" cy="${CY}" rx="${RX + 14}" ry="${RY + 11}" transform="rotate(${TILT_DEG} ${CX} ${CY})" fill="none" stroke="${C.accent}" stroke-width="0.8" stroke-opacity="0.24"/>
      <ellipse cx="${CX}" cy="${CY}" rx="${RX}" ry="${RY}" transform="rotate(${TILT_DEG} ${CX} ${CY})" fill="none" stroke="${C.accent}" stroke-width="1.3" stroke-opacity="0.62"/>
      ${trail.join('')}
      <circle cx="${hx.toFixed(2)}" cy="${hy.toFixed(2)}" r="8" fill="${C.accent}" opacity="0.55" filter="url(#cv-glow)"/>
      <circle cx="${hx.toFixed(2)}" cy="${hy.toFixed(2)}" r="3" fill="${C.accentStrong}"/>`;

  const icon = dataUri('branding/feeddownloader-icon.svg', 'image/svg+xml');
  return `
  <svg class="cover-orbit" viewBox="-8 -12 276 164" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="cv-halo" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="${C.brand}" stop-opacity="0.42"/>
        <stop offset="0.6" stop-color="${C.brand}" stop-opacity="0.1"/>
        <stop offset="1" stop-color="${C.brand}" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="cv-sheen" x1="0" y1="0" x2="1" y2="0.35">
        <stop offset="0.25" stop-color="#ece4ff" stop-opacity="0"/>
        <stop offset="0.5" stop-color="#ece4ff" stop-opacity="0.16"/>
        <stop offset="0.75" stop-color="#ece4ff" stop-opacity="0"/>
      </linearGradient>
      <clipPath id="cv-front"><path d="${half(1)}"/></clipPath>
      <clipPath id="cv-back"><path d="${half(-1)}"/></clipPath>
      <clipPath id="cv-tile"><rect x="${LOGO_X + INSET}" y="${LOGO_Y + INSET}" width="${TILE}" height="${TILE}" rx="${TILE_R}"/></clipPath>
      <mask id="cv-hole" maskUnits="userSpaceOnUse" x="-260" y="-140" width="780" height="420">
        <rect x="-260" y="-140" width="780" height="420" fill="#fff"/>
        <rect x="${LOGO_X + INSET}" y="${LOGO_Y + INSET}" width="${TILE}" height="${TILE}" rx="${TILE_R}" fill="#000"/>
      </mask>
      <filter id="cv-glow" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="3"/></filter>
    </defs>
    <ellipse cx="${CX}" cy="${CY}" rx="92" ry="72" fill="url(#cv-halo)"/>
    <g clip-path="url(#cv-back)" mask="url(#cv-hole)">${rings}
    </g>
    <image href="${icon}" x="${LOGO_X}" y="${LOGO_Y}" width="${LOGO}" height="${LOGO}"/>
    <rect x="${LOGO_X + INSET}" y="${LOGO_Y + INSET}" width="${TILE}" height="${TILE}" fill="url(#cv-sheen)" clip-path="url(#cv-tile)"/>
    <g clip-path="url(#cv-front)">${rings}
    </g>
  </svg>`;
}

const escapeHtml = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/**
 * L'HTML della copertina. `quote` arriva già con le sue virgolette tipografiche;
 * `meta` è l'elenco delle righe sotto il titolo (versione, edizione…).
 */
function buildCoverHtml({ lang, subtitle, version, edition, license, quote }) {
  const ru = dataUri('branding/runtime-utilities/RuntimeUtilities_Bianco.svg', 'image/svg+xml');
  const editionLine = EDITION_LINE[lang] || EDITION_LINE.en;
  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="UTF-8">
</head>
<body>
  <section class="cover" id="copertina">
    <div class="cover-glow" aria-hidden="true"></div>
    ${starsSvg()}
    <div class="cover-content">
      ${orbitSvg()}
      <h1 class="cover-title">Runtime FeedDownloader Pro<span class="cover-edition">${escapeHtml(editionLine)}</span></h1>
      <div class="cover-rule" aria-hidden="true"></div>
      <p class="cover-subtitle">${escapeHtml(subtitle)}</p>
      <p class="cover-version">${[version, edition].filter(Boolean).map(escapeHtml).join(' · ')}</p>
    </div>
    <div class="cover-footer">
      <div class="quote-box"><p class="quote">${escapeHtml(quote)}</p></div>
      <div class="cover-sign">
        <span class="cover-sign-line" aria-hidden="true"></span>
        ${ru ? `<img class="cover-ru" src="${ru}" alt="Runtime Utilities">` : ''}
        <span class="cover-sign-line right" aria-hidden="true"></span>
      </div>
      <p class="cover-company">Ecosystem Runtime | Digital Core${license ? ` · ${escapeHtml(license)}` : ''}</p>
    </div>
  </section>
</body>
</html>`;
}

const themeCss = `
@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600;700&family=Fira+Code:wght@400;500&display=swap');

:root {
  /* Runtime Violet, adattato alla stampa su carta bianca */
  --ink: #1b1238;            /* titoli: viola quasi nero */
  --accent: ${C.primary};
  --accent-deep: ${C.primaryPressed};
  --accent-soft: #f5f0ff;    /* fondo di citazioni e codice */
  --rule: #e7defc;
  --text-main: #2a2540;
  --text-muted: #6b6290;
  --font-body: 'Lora', serif;
  --font-headings: 'Inter', sans-serif;
  --font-mono: 'Fira Code', Consolas, 'Courier New', monospace;
}

/* PAGINA A5 (formato libretto) */
@page {
  size: A5;
  margin: 20mm 15mm 20mm 15mm;
  @bottom-center {
    content: counter(page);
    font-family: var(--font-headings);
    font-size: 8pt;
    color: var(--text-muted);
  }
}

@page cover {
  margin: 0;
  background-color: ${C.canvas};
  @bottom-center { content: normal; }
  @top-left { content: normal; }
  @top-right { content: normal; }
}

/* Margini speculari per la rilegatura */
@page :left { margin-left: 15mm; margin-right: 20mm; }
@page :right { margin-left: 20mm; margin-right: 15mm; }
@page :blank { @bottom-center { content: normal; } }

body {
  font-family: var(--font-body);
  font-size: 9.5pt;
  line-height: 1.6;
  color: var(--text-main);
  /* Bandiera a destra: il giustificato, su una colonna A5 stretta, apriva fiumi
     bianchi fra le parole e obbligava a sillabare. */
  text-align: left;
  hyphens: manual;
}

/* ── COPERTINA ─────────────────────────────────────────────── */
section.cover {
  page: cover;
  break-after: page;
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16mm 15mm 12mm 15mm;
  text-align: center;
  color: ${C.fg};
  background-color: ${C.canvas};
  font-family: var(--font-headings);
}

/* L'alone viola che scende dall'alto, come nella schermata d'ingresso */
.cover-glow {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(85% 48% at 50% 0%, rgba(124, 58, 237, 0.42), rgba(124, 58, 237, 0.10) 58%, transparent 82%),
    radial-gradient(70% 26% at 50% 104%, rgba(153, 98, 252, 0.22), transparent 72%);
}

.cover-stars {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.cover-content, .cover-footer { position: relative; }

.cover-orbit {
  display: block;
  width: 112mm;
  margin: 8mm auto 2mm auto;
}

section.cover h1.cover-title {
  font-family: var(--font-headings);
  font-size: 21pt;
  font-weight: 600;
  line-height: 1.18;
  letter-spacing: -0.02em;
  color: ${C.fg};
  margin: 0;
  padding: 0;
  border: none;
  break-before: avoid;
  white-space: nowrap;
  hyphens: none;
  text-align: center;
}
section.cover h1.cover-title::before { content: none; }

.cover-edition {
  display: block;
  margin-top: 1mm;
  color: ${C.accent};
  font-weight: 600;
  letter-spacing: -0.025em;
}

.cover-rule {
  width: 46mm;
  height: 0.3mm;
  margin: 7mm auto 6mm auto;
  background: linear-gradient(90deg, transparent, rgba(187, 160, 255, 0.85), transparent);
}

.cover-subtitle {
  display: inline-block;
  margin: 0;
  padding: 1.6mm 4.5mm;
  border: 0.25mm solid rgba(187, 160, 255, 0.55);
  border-radius: 10mm;
  background: rgba(124, 58, 237, 0.16);
  font-size: 8.5pt;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${C.accentStrong};
}

.cover-version {
  margin: 4.5mm 0 0 0;
  font-family: var(--font-mono);
  font-size: 8.5pt;
  color: ${C.fg3};
  letter-spacing: 0.02em;
}

.cover-footer { padding-bottom: 2mm; }

.quote-box {
  margin: 0 auto;
  width: 92%;
  box-sizing: border-box;
  padding: 4mm 5.5mm;
  border: 0.25mm solid ${C.line};
  border-radius: 3mm;
  background: rgba(17, 14, 33, 0.78);
}

.quote {
  font-family: var(--font-body);
  font-style: italic;
  font-size: 8.5pt;
  line-height: 1.55;
  color: ${C.fg2};
  margin: 0;
}

.cover-sign {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4mm;
  margin-top: 7mm;
}
.cover-sign-line {
  flex: 1;
  max-width: 22mm;
  height: 0.25mm;
  background: linear-gradient(90deg, transparent, rgba(125, 110, 171, 0.7));
}
.cover-sign-line.right { background: linear-gradient(270deg, transparent, rgba(125, 110, 171, 0.7)); }
.cover-ru { height: 8mm; opacity: 0.85; }

.cover-company {
  margin: 3mm 0 0 0;
  font-size: 7.5pt;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${C.fg3};
}

/* ── CAPITOLI E SEZIONI ────────────────────────────────────── */
h1 {
  font-family: var(--font-headings);
  color: var(--ink);
  font-size: 20pt;
  font-weight: 700;
  letter-spacing: -0.015em;
  break-before: right; /* ogni capitolo inizia sulla pagina di destra */
  margin-top: 0;
  margin-bottom: 14mm;
  padding-bottom: 5mm;
  border-bottom: 0.3mm solid var(--rule);
  line-height: 1.2;
}

/* La barretta viola sopra il titolo del capitolo, dalla scia della copertina */
h1::before {
  content: '';
  display: block;
  width: 16mm;
  height: 1.2mm;
  margin-bottom: 6mm;
  border-radius: 1mm;
  background: linear-gradient(90deg, var(--accent), #d3bafe);
}

h2 {
  font-family: var(--font-headings);
  font-size: 14pt;
  font-weight: 600;
  color: var(--ink);
  margin-top: 2em;
  margin-bottom: 0.8em;
  break-after: avoid; /* non separare il titolo dal testo */
}

h3 {
  font-family: var(--font-headings);
  font-size: 11pt;
  font-weight: 600;
  color: var(--accent-deep);
  margin-top: 1.5em;
  margin-bottom: 0.5em;
  break-after: avoid;
}

p { margin-top: 0; margin-bottom: 1em; }
strong { font-weight: 600; color: var(--ink); }
a { color: var(--accent); text-decoration: none; }

ul, ol { margin-top: 0; margin-bottom: 1em; padding-left: 20px; }
li { margin-bottom: 0.3em; }
li::marker { color: var(--accent); }

/* CODICE (senza legature: Fira Code unirebbe «//» negli indirizzi) */
code, pre {
  font-variant-ligatures: none;
  font-feature-settings: 'liga' 0, 'calt' 0;
}
code {
  font-family: var(--font-mono);
  background-color: var(--accent-soft);
  padding: 1px 4px;
  border-radius: 3px;
  font-size: 7.8pt;
  color: var(--accent-deep);
}
pre {
  background-color: var(--accent-soft);
  padding: 12px;
  border-left: 3px solid var(--accent);
  border-radius: 0 4px 4px 0;
  overflow-x: auto;
  font-size: 7.8pt;
  line-height: 1.45;
  margin-bottom: 1.5em;
  break-inside: avoid; /* niente blocchi di codice spezzati a metà pagina */
}
pre code { background-color: transparent; padding: 0; color: var(--text-main); }

/* CITAZIONI E NOTE */
blockquote {
  margin: 1.5em 0;
  padding: 10px 15px;
  background-color: var(--accent-soft);
  border-left: 4px solid var(--accent);
  color: #3b3357;
  font-style: italic;
  font-size: 9pt;
  break-inside: avoid;
}
blockquote p:last-child { margin-bottom: 0; }

/* TABELLE */
table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5em 0;
  font-family: var(--font-headings);
  font-size: 8.3pt;
  break-inside: auto;
}
tr { break-inside: avoid; break-after: auto; }
th, td { border-bottom: 1px solid var(--rule); padding: 7px 9px; text-align: left; vertical-align: top; }
th { background-color: #241a45; color: #ffffff; font-weight: 500; border-bottom: 2px solid var(--accent); }
tbody tr:nth-child(even) td { background-color: #faf8ff; }

hr { border: 0; height: 1px; background: var(--rule); margin: 2em 0; }
`;

module.exports = { buildCoverHtml, themeCss, EDITION_LINE };
