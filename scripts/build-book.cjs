const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

async function main() {
  console.log('Inizializzazione generazione Libro Editoriale (Vivliostyle)...');
  
  const manualDir = path.join(__dirname, '../docs/user/manual-it');
  const bookDir = path.join(manualDir, 'book');
  
  if (!fs.existsSync(bookDir)) {
    fs.mkdirSync(bookDir, { recursive: true });
  }

  // 1. Il marchio di copertina è il marchio attuale del progetto: il sorgente
  // vettoriale dell'icona dell'applicazione. Fino ad agosto 2026 il manuale
  // portava ancora brand/RFDP_trasp.png, di febbraio, che il programma non usa più.
  const svgLogoPath = path.join(__dirname, '../branding/feeddownloader-cover.svg');
  const pngLogoPath = path.join(__dirname, '../resources/icon.png');
  let logoBase64 = '';
  if (fs.existsSync(svgLogoPath)) {
    // SVG: vettoriale (nitido in stampa) e con la trasparenza attorno allo
    // squircle, che il PNG del packaging ha perso — è RGB senza canale alfa, e
    // sul blu notte della copertina si vedeva un riquadro bianco.
    logoBase64 = 'data:image/svg+xml;base64,' + fs.readFileSync(svgLogoPath).toString('base64');
  } else if (fs.existsSync(pngLogoPath)) {
    logoBase64 = 'data:image/png;base64,' + fs.readFileSync(pngLogoPath).toString('base64');
  }

  // 1-bis. Metadati di copertina letti da 00-copertina.md, che resta la fonte
  // unica: sottotitolo, versione, edizione e citazione stanno nel Markdown e non
  // più cablati qui dentro (prima il PDF usciva senza numero di versione).
  const coverMd = fs.readFileSync(path.join(manualDir, '00-copertina.md'), 'utf8');
  const pick = (re, fallback) => {
    const m = coverMd.match(re);
    return m ? m[1].trim() : fallback;
  };
  const mdSubtitle = pick(/^##\s+(.+)$/m, "Manuale d'uso avanzato");
  const mdVersion = pick(/^###\s+Versione\s+(.+)$/m, '');
  const mdEdition = pick(/^\*\*Edizione:\*\*\s*(.+)$/m, '');
  const mdLicense = pick(/^\*\*Licenza:\*\*\s*(.+)$/m, '');
  const mdQuote = pick(/^>\s*\*«([\s\S]*?)»\*/m, '')
    .replace(/^>\s?/gm, '')
    .replace(/\s+/g, ' ')
    .trim();
  const coverEdition = [mdVersion && `Versione ${mdVersion}`, mdEdition]
    .filter(Boolean)
    .join(' · ');

  // 2. Crea la Cover in HTML
  const coverHtml = `
<!DOCTYPE html>
<html lang="it">
<head>
<meta charset="UTF-8">
</head>
<body>
  <section class="cover" id="copertina">
    <div class="cover-content">
      <img src="${logoBase64}" class="cover-logo" alt="Logo">
      <h1>Runtime<br>FeedDownloader<br>Pro</h1>
      <h2>${mdSubtitle}</h2>
      <div class="cover-meta">
        <p class="edition">${coverEdition}</p>
        <p class="company">Ecosystem Runtime | Digital Core</p>
        ${mdLicense ? `<p class="license">Licenza ${mdLicense}</p>` : ''}
      </div>
    </div>
    <div class="cover-footer">
      <div class="quote-box">
        <p class="quote">«${mdQuote}»</p>
      </div>
    </div>
  </section>
</body>
</html>`;
  fs.writeFileSync(path.join(bookDir, 'cover.html'), coverHtml);

  // 3. Crea il foglio di stile Avanzato (Paged Media CSS)
  const themeCss = `
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700&family=Lora:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap');

:root {
  --night-blue: #0A1128;
  --accent: #2980B9;
  --text-main: #2C3E50;
  --text-muted: #7F8C8D;
  --bg-light: #F8F9FA;
  --font-body: 'Lora', serif;
  --font-headings: 'Inter', sans-serif;
  --font-cover: 'Cinzel', serif;
}

/* SETUP PAGINA A5 (Formato Libretto Software) */
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
  background-color: var(--night-blue);
  @bottom-center { content: normal; }
  @top-left { content: normal; }
  @top-right { content: normal; }
}

/* Margini speculari per rilegatura */
@page :left {
  margin-left: 15mm;
  margin-right: 20mm;
}
@page :right {
  margin-left: 20mm;
  margin-right: 15mm;
}

/* Pagine vuote (es. retro copertina) senza numeri */
@page :blank {
  @bottom-center { content: normal; }
}

/* BODY E TIPOGRAFIA BASE */
body {
  font-family: var(--font-body);
  font-size: 9.5pt;
  line-height: 1.6;
  color: var(--text-main);
  /* Bandiera a destra. Il giustificato, su una colonna A5 stretta, apriva
     fiumi bianchi fra le parole e obbligava a sillabare. */
  text-align: left;
  hyphens: manual;
}

/* COPERTINA - BLU NOTTE */
section.cover {
  page: cover;
  break-after: page;
  color: white;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 14mm 20mm 20mm 20mm;
  text-align: center;
}

.cover-content {
  flex-grow: 1;
}

.cover-logo {
  /* Il marchio è l'elemento forte della copertina: gli spazi attorno sono
     stretti perché titolo su tre righe, riga di licenza e citazione a fondo
     pagina devono starci tutti dentro l'altezza dell'A5. */
  width: 220px;
  margin-bottom: 8mm;
  filter: drop-shadow(0 4px 10px rgba(0,0,0,0.5));
}

section.cover h1 {
  font-family: var(--font-cover);
  font-size: 26pt;
  line-height: 1.2;
  margin: 0 0 10mm 0;
  color: white;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-bottom: none;
  break-before: avoid;
  /* Il body ha hyphens: auto e il titolo lo ereditava: a 26pt il nome del
     prodotto non ci stava in larghezza e usciva spezzato (FeedDown-loader). */
  hyphens: none;
  text-align: center;
}

section.cover h2 {
  font-family: var(--font-headings);
  font-size: 14pt;
  font-weight: 300;
  color: #8bb4e7;
  letter-spacing: 1px;
  margin-top: 0;
  border: none;
}

.cover-meta {
  margin-top: 12mm;
  font-family: var(--font-headings);
  font-size: 9pt;
  color: #AAB7B8;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.cover-meta p { margin: 0 0 2mm 0; }
.cover-meta .license { margin-top: 4mm; }

.cover-footer {
  padding-bottom: 10mm;
}

.quote-box {
  border-top: 1px solid rgba(255,255,255,0.2);
  border-bottom: 1px solid rgba(255,255,255,0.2);
  padding: 15px 0;
  margin: 0 auto;
  width: 80%;
}

.quote {
  font-family: var(--font-body);
  font-style: italic;
  font-size: 9pt;
  color: #D5D8DC;
  margin: 0;
  line-height: 1.5;
}

/* INTESTAZIONI CAPITOLI E SEZIONI */
h1 {
  font-family: var(--font-headings);
  color: var(--night-blue);
  font-size: 20pt;
  font-weight: 700;
  break-before: right; /* Ogni capitolo inizia sulla pagina di destra */
  margin-top: 0;
  margin-bottom: 15mm;
  padding-bottom: 5mm;
  border-bottom: 2px solid var(--accent);
  line-height: 1.2;
}

h2 {
  font-family: var(--font-headings);
  font-size: 14pt;
  font-weight: 600;
  color: var(--night-blue);
  margin-top: 2em;
  margin-bottom: 0.8em;
  break-after: avoid; /* Non spezzare il titolo dal testo */
}

h3 {
  font-family: var(--font-headings);
  font-size: 11pt;
  font-weight: 600;
  color: var(--text-main);
  margin-top: 1.5em;
  margin-bottom: 0.5em;
  break-after: avoid;
}

/* TESTO E PARAGRAFI */
p {
  margin-top: 0;
  margin-bottom: 1em;
}

strong {
  font-weight: 600;
  color: var(--night-blue);
}

a {
  color: var(--accent);
  text-decoration: none;
}

/* LISTE */
ul, ol {
  margin-top: 0;
  margin-bottom: 1em;
  padding-left: 20px;
}

li {
  margin-bottom: 0.3em;
}

/* CODICE */
code {
  font-family: 'Consolas', 'Courier New', monospace;
  background-color: var(--bg-light);
  padding: 2px 4px;
  border-radius: 3px;
  font-size: 8pt;
  color: #C0392B;
}

pre {
  background-color: var(--bg-light);
  padding: 12px;
  border-left: 3px solid var(--accent);
  border-radius: 0 4px 4px 0;
  overflow-x: auto;
  font-size: 8pt;
  line-height: 1.4;
  margin-bottom: 1.5em;
  break-inside: avoid; /* Evita di spezzare blocchi di codice a metà pagina */
}

pre code {
  background-color: transparent;
  padding: 0;
  color: var(--text-main);
}

/* CITAZIONI E NOTE */
blockquote {
  margin: 1.5em 0;
  padding: 10px 15px;
  background-color: var(--bg-light);
  border-left: 4px solid var(--accent);
  color: #34495E;
  font-style: italic;
  font-size: 9pt;
  break-inside: avoid;
}

blockquote p:last-child {
  margin-bottom: 0;
}

/* TABELLE */
table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5em 0;
  font-family: var(--font-headings);
  font-size: 8.5pt;
  break-inside: auto;
}

tr {
  break-inside: avoid;
  break-after: auto;
}

th, td {
  border-bottom: 1px solid #E5E7E9;
  padding: 8px 10px;
  text-align: left;
}

th {
  background-color: var(--night-blue);
  color: white;
  font-weight: 500;
  border-bottom: 2px solid var(--night-blue);
}

hr {
  border: 0;
  height: 1px;
  background: #E5E7E9;
  margin: 2em 0;
}
`;
  fs.writeFileSync(path.join(bookDir, 'theme.css'), themeCss);

  // 4. Genera la Configurazione per Vivliostyle
  const configJs = `
export default {
  title: 'Runtime FeedDownloader Pro - Manuale',
  author: 'Ecosystem Runtime',
  language: 'it',
  theme: 'book/theme.css',
  entry: [
    'book/cover.html',
    '01-introduzione.md',
    '02-installazione.md',
    '03-interfaccia.md',
    '04-primo-archivio.md',
    '05-gestione-feed.md',
    '06-motore-download.md',
    '07-nas-e-rete.md',
    '08-organizzazione-file.md',
    '09-integrita-e-metadati.md',
    '10-impostazioni-avanzate.md',
    '11-troubleshooting.md'
  ],
  output: [
    {
      path: 'Manuale_FeedDownloader_Pro_Box.pdf',
      format: 'pdf',
    }
  ],
};
`;
  fs.writeFileSync(path.join(manualDir, 'vivliostyle.config.js'), configJs);

  console.log('Tutti i file sorgente per Vivliostyle sono stati creati con successo.');
  
  // 6. Esegui la Build
  try {
    console.log('Avvio rendering PDF tramite Vivliostyle CLI (Paged Media Typography)...');
    execSync('npx --yes @vivliostyle/cli build', { 
        cwd: manualDir,
        stdio: 'inherit' 
    });
    console.log('\\n>>> SUCCESSO! Il manuale editoriale è stato generato in: docs/user/manual-it/Manuale_FeedDownloader_Pro_Box.pdf');
  } catch (err) {
    console.error('Errore durante la generazione:', err.message);
  }
}

main();
