const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { buildCoverHtml, themeCss } = require('./book-theme.cjs');

// Con --no-build prepara copertina, tema e configurazione senza lanciare Vivliostyle.
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

  // 1. Extract localized text from 00-copertina.md
  const copertinaPath = path.join(manualDir, '00-copertina.md');
  let subtitle = 'Advanced User Manual';
  let quote = '';
  let edition = '';
  let license = '';
  let version = '';

  if (fs.existsSync(copertinaPath)) {
    const copertinaContent = fs.readFileSync(copertinaPath, 'utf8');

    // Extract Subtitle (##)
    const subtitleMatch = copertinaContent.match(/^##\s+(.*)$/m);
    if (subtitleMatch) subtitle = subtitleMatch[1].trim();

    // Extract Quote
    const quoteRegex = />\s+\*?"([^*]*)"\*/s;
    const preciseQuoteMatch = copertinaContent.match(quoteRegex);
    if (preciseQuoteMatch) {
       // Gli a capo del Markdown non sono a capo tipografici: il testo scorre.
       quote = preciseQuoteMatch[1].replace(/^>\s?/gm, '').replace(/\s+/g, ' ').trim();
    }

    // Extract Version (### Version 1.6.0)
    const versionMatch = copertinaContent.match(/^###\s+(?:Versione|Version)\s+(.+)$/im);
    if (versionMatch) version = versionMatch[0].replace(/^###\s+/, '').trim();

    // Extract Licence (the label is kept as written, so each cover reads in its own language)
    const licenseMatch = copertinaContent.match(/^\*\*(Licenza|Licence|License):?\*\*\s*(.+)$/im);
    if (licenseMatch) license = `${licenseMatch[1]} ${licenseMatch[2].trim()}`;

    // Extract Edition
    const editionMatch = copertinaContent.match(/^\*\*(?:Edizione|Edition):?\*\*\s*(.+)$/im);
    if (editionMatch) edition = editionMatch[1].trim();
  }

  // 2. Copertina nel viola del design system dell'app (book-theme.cjs)
  fs.writeFileSync(path.join(bookDir, 'cover.html'), buildCoverHtml({
    lang: langFolder.split('-')[0],
    subtitle,
    version,
    edition,
    license,
    quote: quote ? `“${quote}”` : '',
  }));

  // 3. Foglio di stile (Paged Media CSS), lo stesso dell'edizione italiana
  fs.writeFileSync(path.join(bookDir, 'theme.css'), themeCss);

  // 4. Gather Markdown files (01 to 11)
  const mdFiles = fs.readdirSync(manualDir)
    .filter(f => f.endsWith('.md') && f !== '00-copertina.md' && !f.includes('manuale-completo'))
    .sort();

  const entriesStr = mdFiles.map(f => `    '${f}'`).join(',\n');

  const pdfFileName = `FeedDownloader_Pro_Manual_${langFolder}.pdf`;

  // 5. Genera la Configurazione per Vivliostyle
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
  if (process.argv.includes('--no-build')) return;

  // 6. Esegui la Build (su Windows da PowerShell: da Git Bash Vivliostyle esce
  // subito senza produrre il PDF)
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
  console.log('\n*** TUTTI I MANUALI SONO STATI GENERATI CON SUCCESSO! ***');
}

main();
