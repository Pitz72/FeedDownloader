# Roadmap FeedDownloader Pro — Fonte di Verità

**Versione di riferimento:** 1.1.0
**Ultimo aggiornamento:** 11 maggio 2026

Questo è l'unico documento autorevole per tutto il lavoro pendente post-v1.0.0.
I documenti precedenti (`roadmap_technical_fixes.md`, `roadmap_documentation_2026.md`) sono archiviati in `archivio/`.

---

## Legenda

| Segnalino | Significato |
|-----------|-------------|
| 🔴 | Bug **gravissimo** — perdita dati silenziosa o funzione rotta in modo non ovvio |
| 🟠 | Bug **grave** — funzionalità degradata o comportamento errato in uso reale |
| 🟡 | Bug **medio** — impatto su performance o UX, non blocca il flusso principale |
| 🟢 | Bug **lieve** — codice fragile, dettaglio minore, marginalità tecnica |
| 🔵 | **Feature essenziale mancante** — assente ma attesa in un tool professionale |
| 🟣 | **Feature suggerita** — aggiunta di valore significativa |
| ⚪ | **Upgrade UI/UX** — miglioramento interfaccia e usabilità |
| ✅ | Implementato |
| 🔲 | Non avviato |
| 🚧 | In lavorazione |

---

## Stato rapido

| ID | Area | Titolo | Priorità | Stato |
|----|------|--------|----------|-------|
| A1 | Fix tecnico | Finestra su monitor secondario (Linux) | — | ✅ v1.0.3 |
| A2 | Fix tecnico | Menu contestuale — incolla via mouse | — | ✅ v1.0.3 |
| A3 | Cross-platform | Integrazione nativa Linux (Wayland/tray) | — | ✅ v1.0.4 |
| B1 | Documentazione | Integrazione manuali in-app | — | 🔲 |
| B2 | Documentazione | Scientific Paper IT + EN | — | 🔲 |
| B3 | Documentazione | ARCHITECTURE.md | — | 🔲 |
| B4 | Documentazione | CONTRIBUTING.md | — | 🔲 |
| C1 | Bug | `showInFolder` ignora naming template + estensione | 🔴 | ✅ v1.0.5 |
| C2 | Bug | Collisione silenziosa su titoli identici | 🔴 | ✅ v1.0.5 |
| C3 | Bug | `Sync All` sequenziale — blocco su molti feed | 🟠 | ✅ v1.0.6 |
| C4 | Bug | `stopBatch` non annulla i download in-flight | 🟠 | ✅ v1.0.7 |
| C5 | Bug | Filtro "New" include episodi in download | 🟠 | ✅ v1.0.8 |
| C6 | Bug | `addFeed` INSERT OR IGNORE — metadata sidebar stale | 🟠 | ✅ v1.0.9 |
| C7 | Bug | `FeedService` fa due richieste HTTP per feed | 🟠 | ✅ v1.1.0 |
| D1 | Bug | Filtri episodi non si resettano al cambio feed | 🟡 | ✅ v1.1.1 |
| D2 | Bug | `import()` dinamico di librerie dentro loop/callback | 🟡 | 🔲 |
| D3 | Bug | `renderEpisodeRow` non memoized — Virtuoso ri-renderizza tutto | 🟡 | 🔲 |
| D4 | Bug | macOS: `titleBarStyle: hidden` senza compensazione traffic light | 🟡 | 🔲 |
| D5 | Bug | `statfs` richiede Node ≥ 18.15.0, declared `>=18.0.0` | 🟡 | 🔲 |
| D6 | Bug | `SettingsModal` apre senza skeleton — valori flikkano | 🟡 | 🔲 |
| D7 | Bug | Stima disco usa 128 kbps fisso | 🟢 | 🔲 |
| D8 | Bug | `country-flag-icons` inutilizzato in `dependencies` | 🟢 | 🔲 |
| D9 | Bug | Hover state gestiti via JS `onMouseEnter/Leave` invece di CSS | 🟢 | 🔲 |
| D10 | Bug | Commenti `// vX.Y.Z —` inquinano il codice | 🟢 | 🔲 |
| D11 | Bug | Download button invisibile da tastiera (`opacity-0`) | 🟢 | 🔲 |
| E1 | Feature | Vista coda download con episodi in-flight | 🔵 | 🔲 |
| E2 | Feature | Rimozione/pausa singolo elemento dalla coda | 🔵 | 🔲 |
| E3 | Feature | Tracking fallimenti nel batch (log errori) | 🔵 | 🔲 |
| E4 | Feature | Ordinamento episodi (data asc/desc, durata) | 🔵 | 🔲 |
| E5 | Feature | Re-download episodio già scaricato | 🔵 | 🔲 |
| E6 | Feature | Path download visibile nella UI principale | 🔵 | 🔲 |
| E7 | Feature | `lastUpdated` sidebar aggiornato al sync | 🔵 | 🔲 |
| F1 | Feature | Vista archivio integrata in-app | 🟣 | 🔲 |
| F2 | Feature | Badge "N nuovi" per feed in sidebar | 🟣 | 🔲 |
| F3 | Feature | Auto-refresh feed periodico in background | 🟣 | 🔲 |
| F4 | Feature | Selezione multipla episodi (Shift/Ctrl+click) | 🟣 | 🔲 |
| F5 | Feature | Export playlist M3U | 🟣 | 🔲 |
| F6 | Feature | Velocità/ETA inline per download attivo | 🟣 | 🔲 |
| G1 | UI/UX | Pannello download laterale (replace GlobalProgressBar) | ⚪ | 🔲 |
| G2 | UI/UX | Sidebar ridimensionabile via drag | ⚪ | 🔲 |
| G3 | UI/UX | Command palette Ctrl+K | ⚪ | 🔲 |
| G4 | UI/UX | Pannello dettaglio episodio (click) | ⚪ | 🔲 |
| G5 | UI/UX | Sync All con progresso per-feed | ⚪ | 🔲 |
| G6 | UI/UX | Toast stack — gestione collisioni con GlobalProgressBar | ⚪ | 🔲 |
| G7 | UI/UX | Onboarding guidato primo avvio | ⚪ | 🔲 |

---

## A — Fix Tecnici e Cross-Platform (completati)

### A1 — Posizionamento finestra su monitor secondario (Linux)

- **Stato:** ✅ Implementato in v1.0.3
- **File coinvolto:** `electron/main.ts`
- `screen.getPrimaryDisplay().workArea` → `win.setPosition(x, y)` prima di `maximize()`

### A2 — Menu contestuale mancante (incolla via mouse)

- **Stato:** ✅ Implementato in v1.0.3
- **File coinvolto:** `electron/main.ts`
- `win.webContents.on('context-menu', ...)` con `cut/copy/paste/selectAll` su elementi editabili

### A3 — Integrazione nativa Linux

- **Stato:** ✅ Implementato in v1.0.4
- **File coinvolto:** `electron/main.ts`
- Wayland: `ozone-platform-hint = auto`; tray `double-click` fallback; GNOME AppIndicator hint

---

## B — Documentazione

### B1 — Integrazione manuali in-app

- **Stato:** 🔲 Pianificato
- Canale IPC `OPEN_HELP` → `shell.openPath()` sul PDF della lingua corrente in `resources/`
- **File:** `electron/ipc.ts`, `src/components/SettingsModal.tsx`

### B2 — Scientific Paper (IT + EN)

- **Stato:** 🔲 Non avviato
- Abstract + architettura DB-First + network resilience + SSRF security
- **Output:** `docs/academic/SCIENTIFIC_PAPER_IT.md` + `_EN.md`

### B3 — ARCHITECTURE.md

- **Stato:** 🔲 Non avviato
- IPC layer, SQLite schema, service layer, SSRF validation — per sviluppatori

### B4 — CONTRIBUTING.md

- **Stato:** 🔲 Non avviato
- Setup env, standard TypeScript, Vitest workflow, regole commit

---

## C — Bug Critici 🔴🟠

### C1 🔴 `showInFolder` ignora naming template e estensione

- **Stato:** 🔲
- **File:** `electron/ipc.ts:338-349`, `electron/preload.ts:22`
- **Problema:** L'handler `SHOW_IN_FOLDER` ricostruisce il path con `getSafePath(baseDir, podcastTitle, title, ext)` usando il titolo grezzo, ignorando completamente il naming template (es. `{date} - {title}`). Il file non viene trovato. In aggiunta, il renderer chiama `window.api.showInFolder(podcastTitle, episodeTitle)` senza passare `enclosureUrl`, quindi `ext` è sempre hardcoded `.mp3` anche per file `.m4a`, `.ogg`, `.opus`.
- **Fix:** Passare l'`enclosureUrl` dalla chiamata renderer; nell'handler applicare `applyTemplate(namingTemplate, ...)` esattamente come in `START_DOWNLOAD` prima di `getSafePath`.

### C2 🔴 Collisione silenziosa su titoli episodio identici

- **Stato:** 🔲
- **File:** `electron/utils/getSafePath.ts`
- **Problema:** Nessun controllo di esistenza del file. Due episodi con titolo identico dopo sanitizzazione (titoli corti, numerici, o solo punteggiatura) si sovrascrivono silenziosamente. La seconda scrittura cancella la prima senza alcun avviso all'utente.
- **Fix:** Prima del rename `.part → target`, verificare se `outputPath` esiste già; in caso aggiungere un suffisso `_2`, `_3`, ecc.

### C3 🟠 `Sync All` sequenziale — blocco su molti feed

- **Stato:** 🔲
- **File:** `src/components/Sidebar.tsx:88-100`
- **Problema:** Loop `for...of` con `await window.api.parseFeed(feed.url)` — ogni richiesta aspetta la risposta prima di partire con la successiva. Con 30 feed e latenza media 2s → ~60 secondi bloccati. Il pulsante nel frattempo non dà feedback di avanzamento.
- **Fix:** `Promise.allSettled(feeds.map(...))` con aggiornamento UI per feed completato; feedback "Sincronizzando 4/12".

### C4 🟠 `stopBatch` non annulla i download in-flight

- **Stato:** 🔲
- **File:** `electron/ipc.ts:260-264`
- **Problema:** `queueService.clear()` rimuove i pending dalla coda `p-queue`, ma i download già avviati da `p-queue` (in-flight) continuano fino al completamento. Scrittura file, aggiornamento DB, emit eventi — tutto prosegue. L'utente vede "Stop" ma i file continuano ad accumularsi su disco.
- **Fix:** `DownloadService` deve esporre un `AbortController` per cancel; `stopBatch` deve chiamare `abort()` sui download attivi.

### C5 🟠 Filtro "New" include episodi attualmente in download

- **Stato:** 🔲
- **File:** `src/components/EpisodeList.tsx:137-143`
- **Problema:** `statusFilter === 'new'` filtra via i guid in `downloadedGuids` (completati) ma non considera i download in corso. Gli episodi in download appaiono ancora nel filtro "Nuovi" con il pulsante di download visibile accanto allo spinner.
- **Fix:** Escludere anche gli URL presenti in `downloads` (store) dal filtro "new".

### C6 🟠 `addFeed` — metadata sidebar non si aggiorna mai

- **Stato:** 🔲
- **File:** `electron/services/DatabaseService.ts:76-85`
- **Problema:** `INSERT OR IGNORE` significa che un feed già presente nel DB non viene mai aggiornato. Titolo, immagine e `lastUpdated` restano quelli della prima aggiunta. Dopo "Sync New" il feed viene riparse in memoria ma la sidebar mostra dati stale finché l'utente non rimuove e ri-aggiunge il feed.
- **Fix:** Sostituire con `INSERT OR REPLACE` oppure aggiungere `UPDATE feeds SET title=?, image=?, lastUpdated=? WHERE url=?` dopo la insert.

### C7 🟠 ✅ v1.1.0 `FeedService` fa due richieste HTTP per ogni parse

- **Stato:** ✅ v1.1.0
- **File:** `electron/services/FeedService.ts`
- **Problema:** Prima `axios.head()` (o GET stream fallback), poi `parser.parseURL()` che fa un'ulteriore GET completa. Risultato: 2-3 connessioni per feed. Inutile per feed XML standard; causa rate-limiting su feed server con limiti stretti.
- **Fix applicato:** Rimosso il pre-check HEAD. Singola `axios.get()` con `responseType: 'text'`; content-type letto dall'header della risposta; contenuto passato a `parser.parseString(response.data)`. Ridotto da 2–3 richieste a 1 per ogni parsing.

---

## D — Bug Medi e Lievi 🟡🟢

### D1 🟡 ✅ v1.1.1 Filtri episodi persistono al cambio feed

- **Stato:** ✅ v1.1.1
- **File:** `src/components/EpisodeList.tsx`
- **Fix applicato:** `useEffect` con dipendenza `[currentFeed?.url]` azzera tutti gli stati filtro (searchQuery, dateFrom, dateTo, statusFilter, minDuration, maxDuration e i relativi flag `show*`) al cambio feed.

### D2 🟡 `import()` dinamico di librerie dentro loop e callback

- **Stato:** 🔲
- **File:** `electron/ipc.ts:169` (music-metadata), `electron/ipc.ts:494` (sanitize-filename)
- **Problema:** `await import('music-metadata')` è chiamato dentro il callback di ogni download completato; `await import('sanitize-filename')` dentro il `for...of` dell'health check. Node cachea le dynamic import ma il pattern è scorretto e introduce overhead al primo ciclo.
- **Fix:** Convertire entrambi in import statici in cima a `ipc.ts`.

### D3 🟡 `renderEpisodeRow` non memoized — Virtuoso ri-renderizza tutto

- **Stato:** 🔲
- **File:** `src/components/EpisodeList.tsx:269`
- **Problema:** La funzione è definita dentro il corpo del componente senza `useCallback`. Ogni aggiornamento di stato (ogni tick di progress download) crea una nuova referenza, forzando Virtuoso a ri-renderizzare tutte le righe visibili.
- **Fix:** `useCallback(renderEpisodeRow, [dependencies])`.

### D4 🟡 macOS: `titleBarStyle: hidden` senza padding per traffic light

- **Stato:** 🔲
- **File:** `electron/main.ts:103`
- **Problema:** `titleBarStyle: 'hidden'` nasconde la barra nativa ma i tre pulsanti (semaforo) rimangono e overlappano il contenuto React. Il header dell'app (`h-14`) non ha padding-left sufficiente su macOS. Il pulsante Settings e il titolo vengono parzialmente oscurati.
- **Fix:** Aggiungere `trafficLightPosition` nella config BrowserWindow e un CSS `env(titlebar-area-x)` o padding condizionale per piattaforma.

### D5 🟡 `statfs` richiede Node ≥ 18.15.0

- **Stato:** 🔲
- **File:** `electron/ipc.ts:19`, `package.json:36`
- **Problema:** `import { statfs } from 'fs/promises'` è disponibile da Node 18.15.0. `package.json` dichiara `"node": ">=18.0.0"`. Su ambienti con Node 18.0–18.14 il check disco fallisce con `TypeError`.
- **Fix:** Alzare il requisito a `>=18.15.0` in `package.json`, oppure wrappare la chiamata in try/catch con fallback `null`.

### D6 🟡 `SettingsModal` apre senza skeleton — valori iniziali flikkano

- **Stato:** 🔲
- **File:** `src/components/SettingsModal.tsx:56-77`
- **Problema:** Il modal si apre immediatamente mostrando i valori di default (`downloadPath = ''`, `concurrency = 3`, ecc.) mentre `loadSettings()` esegue le chiamate IPC asincrone. I campi si aggiornano visibilmente dopo ~50-100ms.
- **Fix:** Aggiungere uno stato `isLoadingSettings` con un overlay/skeleton sul pannello destra durante il caricamento iniziale.

### D7 🟢 Stima disco usa bitrate costante 128 kbps

- **Stato:** 🔲
- **File:** `src/components/EpisodeList.tsx:99`
- **Problema:** `BYTES_PER_SECOND = 16_000` corrisponde a 128 kbps. La maggior parte dei podcast attuali è a 192–256 kbps. La stima può essere errata del 50–100%, riducendo l'utilità del controllo spazio disco.
- **Fix:** Leggere il bitrate dall'`itunes:duration` quando disponibile; altrimenti usare 192 kbps come default più realistico.

### D8 🟢 `country-flag-icons` in production dependencies — non usato

- **Stato:** 🔲
- **File:** `package.json:47`
- **Problema:** Il pacchetto è in `dependencies` ma non viene importato da nessun file nel progetto. Aggiunge ~150KB al bundle e rumore nel lockfile.
- **Fix:** `npm uninstall country-flag-icons`.

### D9 🟢 Hover state gestiti via JS `onMouseEnter/Leave` invece di CSS

- **Stato:** 🔲
- **File:** Diffuso — `Sidebar.tsx`, `EpisodeList.tsx`, `SettingsModal.tsx`, `App.tsx`
- **Problema:** Centinaia di righe `onMouseEnter={e => e.currentTarget.style.color = 'var(--color-primary)'}`. Più lento del CSS (ogni hover triggera JS), impossibile da tematizzare centralmente, genera hydration noise.
- **Fix:** Definire classi utility Tailwind/CSS nel design system (`hover:text-primary`, `hover:bg-surface-high`) e sostituire gli handler inline.

### D10 🟢 Commenti `// vX.Y.Z —` inquinano il codice sorgente

- **Stato:** 🔲
- **File:** Diffuso — `ipc.ts`, `EpisodeList.tsx`, `DownloadService.ts`, altri
- **Problema:** ~80 commenti del tipo `// v0.5.0 — Ghost episode detection` annotano quando è stata aggiunta una feature. Questo è il ruolo di `CHANGELOG.md` e `git log`, non del codice sorgente. Rendono difficile la lettura del flusso logico.
- **Fix:** Rimozione progressiva durante refactoring; mantenere solo commenti sul "perché" non sul "quando".

### D11 🟢 Pulsante download invisibile da navigazione tastiera

- **Stato:** 🔲
- **File:** `src/components/EpisodeList.tsx:364`
- **Problema:** Il pulsante download ha `opacity-0 group-hover:opacity-100`. Il `focus:opacity-100` c'è ma non è visivamente evidente. Un utente che naviga con Tab non vede il pulsante attivato e non ha feedback visivo del focus.
- **Fix:** Aggiungere `focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-primary` e assicurarsi che lo stile focus sia visibile nel tema dark.

---

## E — Funzionalità Essenziali Mancanti 🔵

### E1 🔵 Vista coda download

- **Stato:** 🔲
- **Descrizione:** L'utente avvia 200 download e vede solo "47/200" nella GlobalProgressBar. Non sa cosa si sta scaricando in questo momento, cosa è in coda, quale episodio ha fallito. Zero visibilità sull'engine.
- **Approccio:** Esporre da `QueueService` la lista dei task pending; passare al renderer via push event l'episodio attualmente in download; mostrare una lista scrollabile nel pannello download (vedi G1).

### E2 🔵 Rimozione/pausa singolo elemento dalla coda

- **Stato:** 🔲
- **Descrizione:** `stopBatch` è un interruttore nucleare. Non è possibile togliere dalla coda un singolo episodio o mettere in pausa un download specifico. Fondamentale per uso reale con batch grandi.
- **Approccio:** `QueueService` deve associare un ID univoco a ogni task; nuovo canale IPC `CANCEL_DOWNLOAD(id)` che chiama `abort()` sull'`AbortController` del task specifico.

### E3 🔵 Tracking fallimenti nel batch

- **Stato:** 🔲
- **Descrizione:** Episodi che falliscono (404, timeout, server error) non vengono registrati. Un batch di 200 con 10 errori mostra "Completato!" come se tutti fossero andati a buon fine. L'utente non sa cosa è mancato.
- **Approccio:** Tabella `download_errors` nel DB (guid, url, error_code, timestamp); dopo batch mostrare "195 OK, 5 falliti" con lista dei titoli falliti nel GlobalProgressBar.

### E4 🔵 Ordinamento episodi

- **Stato:** 🔲
- **Descrizione:** Gli episodi sono sempre nell'ordine del feed RSS (tipicamente più recenti prima). Non c'è modo di invertire per ascolto sequenziale di podcast narrativi o storici.
- **Approccio:** Toggle `▲/▼` nella filter bar; `[...filteredEpisodes].reverse()` o sort per `pubDate`. Persistere la preferenza per feed.

### E5 🔵 Re-download di un episodio già scaricato

- **Stato:** 🔲
- **Descrizione:** Se un file è corrotto, l'utente deve fare reset status manuale + ri-download. Non esiste un pulsante "Riscarca" diretto. Per l'uso Data Hoarding (verifica integrità + re-fetch) è una funzione attesa.
- **Approccio:** Aggiungere nel menu hover episodio (accanto a folder_open e restart_alt) un terzo pulsante `download` visibile anche sugli episodi completati.

### E6 🔵 Path download visibile nella UI principale

- **Stato:** 🔲
- **Descrizione:** L'utente non sa dove vanno i file senza aprire Settings. Il path attivo non è mostrato da nessuna parte nella UI principale. Per un tool di archiviazione massiva è un'informazione critica sempre visibile.
- **Approccio:** Footer della sidebar o riga sotto l'input URL con il path troncato e icona folder; click → apre la cartella in explorer.

### E7 🔵 `lastUpdated` sidebar non si aggiorna dopo sync

- **Stato:** 🔲
- **File:** `electron/services/DatabaseService.ts:76-85` (vedi anche C6)
- **Descrizione:** Dopo "Sync New" il feed viene riparse in memoria ma il record `feeds` nel DB non viene aggiornato (`INSERT OR IGNORE`). La data mostrata in sidebar è sempre quella del primo add e non riflette l'ultimo sync.
- **Fix:** Parte del fix C6 — `INSERT OR REPLACE` o UPDATE aggiorna anche `lastUpdated`.

---

## F — Funzionalità Suggerite 🟣

### F1 🟣 Vista archivio integrata in-app

- **Stato:** 🔲
- **Descrizione:** L'archivio esiste nel DB e nell'export CSV, ma non è navigabile dall'app. Una scheda "Archivio" con tabella virtualizzata (react-virtuoso), ricerca per titolo/podcast, ordinamento per data/dimensione, e filtro per podcast. Mostrerebbe anche checksum e bitrate.

### F2 🟣 Badge "N nuovi" per feed nella sidebar

- **Stato:** 🔲
- **Descrizione:** Ogni voce feed mostra quanti episodi non sono ancora stati scaricati — calcolato al momento del parse. L'utente vede subito quale feed ha episodi da scaricare senza aprirlo.

### F3 🟣 Auto-refresh feed periodico in background

- **Stato:** 🔲
- **Descrizione:** Background refresh configurabile (ogni 6/12/24 ore) con notifica OS quando un feed ha nuovi episodi. Oggi l'utente deve aprire l'app e cliccare manualmente per scoprire novità.

### F4 🟣 Selezione multipla episodi (Shift/Ctrl+click)

- **Stato:** 🔲
- **Descrizione:** Permettere di selezionare episodi specifici per un batch selettivo, non necessariamente tutti i filtrati. Fondamentale per download parziali di feed molto lunghi.

### F5 🟣 Export playlist M3U

- **Stato:** 🔲
- **Descrizione:** Esportare la lista degli episodi scaricati (o di un feed) come file `.m3u` con i path locali, per aprirli direttamente in VLC, mpv, Plex o qualsiasi media player esterno.

### F6 🟣 Velocità e ETA inline per download attivo

- **Stato:** 🔲
- **Descrizione:** Nella riga episodio durante il download, mostrare velocità attuale (MB/s), byte scaricati/totali, ETA stimato. Oggi si vede solo la percentuale. Il backend ha già `loaded` e `total` — manca solo il calcolo di velocità (delta bytes / delta time).

---

## G — Upgrade Interfaccia e Usabilità ⚪

### G1 ⚪ Pannello download laterale

- **Stato:** 🔲
- **Descrizione:** Sostituire o affiancare il GlobalProgressBar floating con un drawer laterale che mostra la lista completa dei download in corso (nome episodio, podcast, velocità, ETA, pulsante cancel individuale) e i completati/falliti della sessione. Molto più professionale del widget 320px in basso a destra.

### G2 ⚪ Sidebar ridimensionabile via drag

- **Stato:** 🔲
- **Descrizione:** La sidebar è fissa a 456px. Su monitor da 13" è troppa, su 27" è poca. Un divider drag-resizable con persistenza della larghezza nel DB settings.

### G3 ⚪ Command palette (Ctrl+K)

- **Stato:** 🔲
- **Descrizione:** Ricerca unificata: feed, episodi, azioni (Impostazioni, Sync All, Aggiungi feed, Apri archivio). Standard nelle app desktop moderne, rende l'app completamente navigabile da tastiera.

### G4 ⚪ Pannello dettaglio episodio

- **Stato:** 🔲
- **Descrizione:** Click su un episodio apre un side panel (o modal) con: descrizione completa / show notes, link originale, durata, data, dimensione stimata, stato download con data e checksum se scaricato. Oggi gli episodi sono righe cliccabili che non fanno nulla.

### G5 ⚪ Sync All con progressivo per-feed

- **Stato:** 🔲
- **Descrizione:** Durante Sync All la sidebar non cambia. Ogni voce feed dovrebbe mostrare uno spinner individuale mentre è in corso il suo parse, e un check (✓) o errore (✗) al completamento. Il bottone diventa "Sincronizzando... 4/12".

### G6 ⚪ Toast stack — gestione collisioni con GlobalProgressBar

- **Stato:** 🔲
- **Descrizione:** Il GlobalProgressBar (bottom-right) e i toast (presumibilmente bottom) possono sovrapporsi durante batch download intensi con molti errori. Serve un sistema di stacking che sposti i toast sopra la progress bar quando è visibile.

### G7 ⚪ Onboarding guidato al primo avvio

- **Stato:** 🔲
- **Descrizione:** Dopo l'IntroScreen, la sidebar è vuota con solo "Nessun feed". Un tooltip/callout guidato ("Incolla qui l'URL di un feed RSS") e un suggerimento per scegliere la cartella di download prima del primo utilizzo migliorerebbero significativamente l'adozione.

---

## Archivio roadmap precedenti

| Documento | Archiviato | Contenuto originale |
|-----------|-----------|---------------------|
| [archivio/roadmap_technical_fixes.md](archivio/roadmap_technical_fixes.md) | 11 mag 2026 | Fix tecnici post-v1.0.0 (ora A1–A3) |
| [archivio/roadmap_documentation_2026.md](archivio/roadmap_documentation_2026.md) | 11 mag 2026 | Piano documentazione multilingua (ora B1–B4) |
| [archivio/lungotermine.md](archivio/lungotermine.md) | 28 mar 2026 | Roadmap lungo termine — tutto completato/abortito in v0.7.5 |
| [archivio/indicazioni.md](archivio/indicazioni.md) | — | Backlog feature — tutto completato in v0.7.4 |
