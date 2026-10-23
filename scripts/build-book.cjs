const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { buildCoverHtml, themeCss } = require('./book-theme.cjs');

// Manuale italiano (manual-it). L'edizione inglese la costruisce
// build-all-books.cjs; copertina e tema sono condivisi in book-theme.cjs.
// Con --no-build prepara copertina, tema e configurazione senza lanciare Vivliostyle.
async function main() {
  console.log('Inizializzazione generazione Libro Editoriale (Vivliostyle)...');

  const manualDir = path.join(__dirname, '../docs/user/manual-it');
  const bookDir = path.join(manualDir, 'book');

  if (!fs.existsSync(bookDir)) {
    fs.mkdirSync(bookDir, { recursive: true });
  }

  // 1. Metadati di copertina letti da 00-copertina.md, che resta la fonte
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

  // 2. Copertina nel viola del design system dell'app (book-theme.cjs)
  fs.writeFileSync(path.join(bookDir, 'cover.html'), buildCoverHtml({
    lang: 'it',
    subtitle: mdSubtitle,
    version: mdVersion && `Versione ${mdVersion}`,
    edition: mdEdition,
    license: mdLicense && `Licenza ${mdLicense}`,
    quote: `«${mdQuote}»`,
  }));

  // 3. Foglio di stile (Paged Media CSS), lo stesso dell'edizione inglese
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
  if (process.argv.includes('--no-build')) return;

  // 5. Esegui la Build (su Windows da PowerShell: da Git Bash Vivliostyle esce
  // subito senza produrre il PDF)
  try {
    console.log('Avvio rendering PDF tramite Vivliostyle CLI (Paged Media Typography)...');
    execSync('npx --yes @vivliostyle/cli build', {
        cwd: manualDir,
        stdio: 'inherit'
    });
    console.log('\n>>> SUCCESSO! Il manuale editoriale è stato generato in: docs/user/manual-it/Manuale_FeedDownloader_Pro_Box.pdf');
  } catch (err) {
    console.error('Errore durante la generazione:', err.message);
  }
}

main();
