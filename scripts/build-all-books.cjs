const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

async function buildBookForLanguage(langFolder) {
  console.log(`\n======================================================`);
  console.log(`Inizializzazione generazione PDF per la lingua: [${langFolder}]`);
  console.log(`======================================================`);
  
  const manualDir = path.join(__dirname, '../docs/user', langFolder);
  const bookDir = path.join(manualDir, 'book');
  
  if (!fs.existsSync(manualDir)) {
    console.error(`Cartella non trovata: ${manualDir}`);
    return;
  }

  if (!fs.existsSync(bookDir)) {
    fs.mkdirSync(bookDir, { recursive: true });
  }

  // 1. Leggi Logo e converti in Base64
  const logoPath = path.join(__dirname, '../brand/RFDP_trasp.png');
  let logoBase64 = '';
  if (fs.existsSync(logoPath)) {
    logoBase64 = 'data:image/png;base64,' + fs.readFileSync(logoPath).toString('base64');
  }

  // 2. Extract localized text from 00-copertina.md
  const copertinaPath = path.join(manualDir, '00-copertina.md');
  let subtitle = 'Manuale d\'Uso Avanzato';
  let quote = '"I contenuti digitali sono fragili. Un dominio scade, un CDN si spegne, una piattaforma chiude.<br>L\'unica copia che non scomparirà mai è quella che hai salvato tu."';
  let edition = 'Edizione 2026';

  if (fs.existsSync(copertinaPath)) {
    const copertinaContent = fs.readFileSync(copertinaPath, 'utf8');
    
    // Extract Subtitle (##)
    const subtitleMatch = copertinaContent.match(/^##\s+(.*)$/m);
    if (subtitleMatch) subtitle = subtitleMatch[1].trim();

    // Extract Quote
    const quoteRegex = />\s+\*?"([^*]*)"\*/s;
    const preciseQuoteMatch = copertinaContent.match(quoteRegex);
    if (preciseQuoteMatch) {
       let rawQuote = preciseQuoteMatch[1];
       rawQuote = rawQuote.replace(/\n>\s*/g, '<br>'); // Keep line breaks
       quote = `"${rawQuote}"`;
    }

    // Extract Edition
    const editionLines = copertinaContent.split('\n');
    for (const line of editionLines) {
      if (line.match(/^\*\*(Edizione|Edition|Edición|Édition|Edição|Издание|版本):?\*\*/i)) {
        edition = line.replace(/^\*\*(Edizione|Edition|Edición|Édition|Edição|Издание|版本):?\*\*\s*/i, '').trim();
        break;
      }
    }
  }

  // 3. Crea la Cover in HTML
  const coverHtml = `
<!DOCTYPE html>
<html lang="${langFolder.split('-')[0]}">
<head>
<meta charset="UTF-8">
</head>
<body>
  <section class="cover" id="copertina">
    <div class="cover-content">
      <img src="${logoBase64}" class="cover-logo" alt="Logo">
      <h1>Runtime FeedDownloader Pro</h1>
      <h2>${subtitle}</h2>
      <div class="cover-meta">
        <p class="edition">${edition}</p>
        <p class="company">Ecosystem Runtime | Digital Core</p>
      </div>
    </div>
    <div class="cover-footer">
      <div class="quote-box">
        <p class="quote">${quote}</p>
      </div>
    </div>
  </section>
</body>
</html>`;
  fs.writeFileSync(path.join(bookDir, 'cover.html'), coverHtml);

  // 4. Crea il foglio di stile Avanzato (Paged Media CSS)
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

@page :left {
  margin-left: 15mm;
  margin-right: 20mm;
}
@page :right {
  margin-left: 20mm;
  margin-right: 15mm;
}

@page :blank {
  @bottom-center { content: normal; }
}

body {
  font-family: var(--font-body);
  font-size: 9.5pt;
  line-height: 1.6;
  color: var(--text-main);
  text-align: justify;
  hyphens: auto;
}

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
  padding: 40mm 20mm 20mm 20mm;
  text-align: center;
}

.cover-content { flex-grow: 1; }
.cover-logo { width: 110px; margin-bottom: 30mm; filter: drop-shadow(0 4px 10px rgba(0,0,0,0.5)); }

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
  margin-top: 25mm;
  font-family: var(--font-headings);
  font-size: 9pt;
  color: #AAB7B8;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.cover-footer { padding-bottom: 10mm; }

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

h1 {
  font-family: var(--font-headings);
  color: var(--night-blue);
  font-size: 20pt;
  font-weight: 700;
  break-before: right;
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
  break-after: avoid;
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

p { margin-top: 0; margin-bottom: 1em; }
strong { font-weight: 600; color: var(--night-blue); }
a { color: var(--accent); text-decoration: none; }
ul, ol { margin-top: 0; margin-bottom: 1em; padding-left: 20px; }
li { margin-bottom: 0.3em; }
code { font-family: 'Consolas', 'Courier New', monospace; background-color: var(--bg-light); padding: 2px 4px; border-radius: 3px; font-size: 8pt; color: #C0392B; }
pre { background-color: var(--bg-light); padding: 12px; border-left: 3px solid var(--accent); border-radius: 0 4px 4px 0; overflow-x: auto; font-size: 8pt; line-height: 1.4; margin-bottom: 1.5em; break-inside: avoid; }
pre code { background-color: transparent; padding: 0; color: var(--text-main); }
blockquote { margin: 1.5em 0; padding: 10px 15px; background-color: var(--bg-light); border-left: 4px solid var(--accent); color: #34495E; font-style: italic; font-size: 9pt; break-inside: avoid; }
blockquote p:last-child { margin-bottom: 0; }
table { width: 100%; border-collapse: collapse; margin: 1.5em 0; font-family: var(--font-headings); font-size: 8.5pt; break-inside: auto; }
tr { break-inside: avoid; break-after: auto; }
th, td { border-bottom: 1px solid #E5E7E9; padding: 8px 10px; text-align: left; }
th { background-color: var(--night-blue); color: white; font-weight: 500; border-bottom: 2px solid var(--night-blue); }
hr { border: 0; height: 1px; background: #E5E7E9; margin: 2em 0; }
`;
  fs.writeFileSync(path.join(bookDir, 'theme.css'), themeCss);

  // 5. Gather Markdown files (01 to 11)
  const mdFiles = fs.readdirSync(manualDir)
    .filter(f => f.endsWith('.md') && f !== '00-copertina.md' && !f.includes('manuale-completo'))
    .sort();

  const entriesStr = mdFiles.map(f => `    '${f}'`).join(',\n');

  const pdfFileName = `FeedDownloader_Pro_Manual_${langFolder}.pdf`;

  // 6. Genera la Configurazione per Vivliostyle
  const configJs = `
export default {
  title: 'Runtime FeedDownloader Pro - ${subtitle.replace(/'/g, "\\'")}',
  author: 'Ecosystem Runtime',
  language: '${langFolder.split('-')[0]}',
  theme: 'book/theme.css',
  entry: [
    'book/cover.html',
${entriesStr}
  ],
  output: [
    {
      path: '${pdfFileName}',
      format: 'pdf',
    }
  ],
};
`;
  fs.writeFileSync(path.join(manualDir, 'vivliostyle.config.js'), configJs);
  
  // 7. Esegui la Build
  try {
    console.log(`Avvio rendering PDF tramite Vivliostyle per ${langFolder}...`);
    execSync('npx --yes @vivliostyle/cli build', { 
        cwd: manualDir,
        stdio: 'inherit' 
    });
    console.log(`>>> SUCCESSO! Il manuale per ${langFolder} è stato generato: docs/user/${langFolder}/${pdfFileName}`);
  } catch (err) {
    console.error(`Errore durante la generazione per ${langFolder}:`, err.message);
  }
}

async function main() {
  // The app ships two languages: the Italian manual is built by build-book.cjs
  // (manual-it); this script handles the English edition.
  const languages = ['en-GB'];
  for (const lang of languages) {
    await buildBookForLanguage(lang);
  }
  console.log('\\n*** TUTTI I MANUALI SONO STATI GENERATI CON SUCCESSO! ***');
}

main();
