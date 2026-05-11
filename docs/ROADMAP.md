# Roadmap FeedDownloader Pro — Fonte di Verità

**Versione di riferimento:** 1.1.17
**Ultimo aggiornamento:** 12 maggio 2026

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
| D2 | Bug | `import()` dinamico di librerie dentro loop/callback | 🟡 | ✅ v1.1.2 |
| D3 | Bug | `renderEpisodeRow` non memoized — Virtuoso ri-renderizza tutto | 🟡 | ✅ v1.1.3 |
| D4 | Bug | macOS: `titleBarStyle: hidden` senza compensazione traffic light | 🟡 | ✅ v1.1.4 |
| D5 | Bug | `statfs` richiede Node ≥ 18.15.0, declared `>=18.0.0` | 🟡 | ✅ v1.1.5 |
| D6 | Bug | `SettingsModal` apre senza skeleton — valori flikkano | 🟡 | ✅ v1.1.6 |
| D7 | Bug | Stima disco usa 128 kbps fisso | 🟢 | ✅ v1.1.7 |
| D8 | Bug | `country-flag-icons` inutilizzato in `dependencies` | 🟢 | ✅ v1.1.8 |
| D9 | Bug | Hover state gestiti via JS `onMouseEnter/Leave` invece di CSS | 🟢 | ✅ v1.1.9 |
| D10 | Bug | Commenti `// vX.Y.Z —` inquinano il codice | 🟢 | ✅ v1.1.10 |
| D11 | Bug | Download button invisibile da tastiera (`opacity-0`) | 🟢 | ✅ v1.1.11 |
| E1 | Feature | Vista coda download con episodi in-flight | 🔵 | ✅ v1.1.13 |
| E2 | Feature | Rimozione/pausa singolo elemento dalla coda | 🔵 | ✅ v1.1.13 |
| E3 | Feature | Tracking fallimenti nel batch (log errori) | 🔵 | ✅ v1.1.13 |
| E4 | Feature | Ordinamento episodi (data asc/desc, durata) | 🔵 | ✅ v1.1.14 |
| E5 | Feature | Re-download episodio già scaricato | 🔵 | ✅ v1.1.15 |
| E6 | Feature | Path download visibile nella UI principale | 🔵 | ✅ v1.1.16 |
| E7 | Feature | `lastUpdated` sidebar aggiornato al sync | 🔵 | ✅ v1.1.17 |
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

### D2 🟡 ✅ v1.1.2 `import()` dinamico di librerie dentro loop e callback

- **Stato:** ✅ v1.1.2
- **File:** `electron/ipc.ts`
- **Fix applicato:** Convertiti in import statici in cima: `shell` aggiunto all'import electron, `parseAudioMetadata` da music-metadata, `sanitize` da sanitize-filename. Rimossi tutti e tre gli `await import()` inline.

### D3 🟡 ✅ v1.1.3 `renderEpisodeRow` non memoized — Virtuoso ri-renderizza tutto

- **Stato:** ✅ v1.1.3
- **File:** `src/components/EpisodeList.tsx`
- **Fix applicato:** `parseDurationMinutes`/`formatDuration`/`formatBytes` spostate fuori dal componente; `handleDownload` e `handleResetStatus` avvolte in `useCallback`; `renderEpisodeRow` avvolta in `useCallback` con dipendenze `[downloads, downloadedGuids, currentFeed, t, isOnline, handleDownload, handleResetStatus]`.

### D4 🟡 ✅ v1.1.4 macOS: `titleBarStyle: hidden` senza padding per traffic light

- **Stato:** ✅ v1.1.4
- **File:** `electron/main.ts`, `electron/preload.ts`, `src/App.tsx`
- **Fix applicato:** `trafficLightPosition: { x: 16, y: 14 }` in BrowserWindow; `dataset.platform = process.platform` nel preload per rilevamento sincrono; `pl-20` condizionale nell'header React su macOS.

### D5 🟡 ✅ v1.1.5 `statfs` richiede Node ≥ 18.15.0

- **Stato:** ✅ v1.1.5
- **File:** `package.json`
- **Fix applicato:** `engines.node` aggiornato a `">=18.15.0"` — allineato alla versione minima effettiva richiesta da `fs.statfs`.

### D6 🟡 ✅ v1.1.6 `SettingsModal` apre senza skeleton — valori iniziali flikkano

- **Stato:** ✅ v1.1.6
- **File:** `src/components/SettingsModal.tsx`
- **Fix applicato:** Stato `isLoadingSettings` + skeleton animato nel pannello destro durante `loadSettings()`; contenuto reale nascosto con `display:none` fino al completamento delle chiamate IPC.

### D7 🟢 ✅ v1.1.7 Stima disco usa bitrate costante 128 kbps

- **Stato:** ✅ v1.1.7
- **File:** `src/components/EpisodeList.tsx`
- **Fix applicato:** `BYTES_PER_SECOND` aggiornato da `16_000` (128 kbps) a `24_000` (192 kbps) come default più realistico per i podcast moderni.

### D8 🟢 ✅ v1.1.8 / v1.1.12 `country-flag-icons` in production dependencies

- **Stato:** ✅ v1.1.12
- **File:** `package.json`, `src/components/IntroScreen.tsx`
- **Fix originale (v1.1.8):** `npm uninstall country-flag-icons` — rimosso sulla base dell'assunzione errata che non fosse usato.
- **Correzione (v1.1.12):** Il pacchetto era usato da `IntroScreen.tsx` per 8 bandiere SVG. Reinstallato come dipendenza reale. Gli SVG React components (`GB`, `IT`, `FR`, …) ripristinati. Le emoji Unicode introdotte come workaround in v1.1.11 rimosse (Windows non le renderizza come bandiere).

### D9 🟢 ✅ v1.1.9 Hover state gestiti via JS `onMouseEnter/Leave` invece di CSS

- **Stato:** ✅ v1.1.9
- **File:** `src/index.css` + tutti i componenti TSX
- **Fix applicato:** Tutti gli `onMouseEnter`/`onMouseLeave` rimossi da 10 file. Aggiunte classi utility CSS nel design system: `.hover-text-primary`, `.hover-text-surface`, `.hover-bg-surface-high`, `.hover-bg-container`, `.hover-bg-highest`, `.hover-danger`, `.hover-stop`, `.feed-item`, `.settings-nav-item`, `.episode-row`, `.lang-btn-hover` e altre. Per i pattern con background rgba (dove lo stile inline impedisce l'override), usato `!important` circoscritto alle regole `:hover`.

### D10 🟢 ✅ v1.1.10 Commenti `// vX.Y.Z —` inquinano il codice sorgente

- **Stato:** ✅ v1.1.10
- **File:** `src/App.tsx`, `src/i18n.ts`, `src/components/EpisodeList.tsx`, `src/components/ConfirmModal.tsx`, `src/components/SettingsModal.tsx`, `src/components/UrlInput.tsx`, `src/vite-env.d.ts`, `electron/ipc.ts`, `electron/main.ts`, `electron/preload.ts`, `electron/services/DatabaseService.ts`, `electron/services/DownloadService.ts`, `electron/services/LibraryService.ts`
- **Fix applicato:** Rimossi ~50 commenti `// vX.Y.Z —`. Dove il testo conteneva il "perché" è stato conservato il commento senza prefisso versione; dove descriveva solo "cosa fa il codice" è stato rimosso completamente.

### D11 🟢 ✅ v1.1.11 Pulsante download invisibile da navigazione tastiera

- **Stato:** ✅ v1.1.11
- **File:** `src/components/EpisodeList.tsx`
- **Fix applicato:** Sostituito `focus:opacity-100` con `focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]`. Il pulsante diventa visibile e con anello di focus colorato quando raggiunto via Tab, senza interferire col comportamento mouse.

---

## E — Funzionalità Essenziali Mancanti 🔵

### E1 🔵 ✅ v1.1.13 Vista coda download

- **Stato:** ✅ v1.1.13
- **File:** `electron/ipc.ts`, `src/store/useStore.ts`, `src/App.tsx`, `src/components/GlobalProgressBar.tsx`
- **Fix applicato:** Mappa `queueItems: Map<string, QueueItem>` nel main process; evento IPC `QUEUE_UPDATED` inviato al renderer ad ogni modifica. `GlobalProgressBar` mostra lista scrollabile (max 168px) con icona spinning per i task in download e icona schedule per i pending.

### E2 🔵 ✅ v1.1.13 Cancellazione singolo download dalla coda

- **Stato:** ✅ v1.1.13
- **File:** `electron/ipc.ts`, `electron/preload.ts`, `src/components/GlobalProgressBar.tsx`
- **Fix applicato:** UUID `taskId` per ogni task; handler IPC `CANCEL_DOWNLOAD`; per task pending → marcato in `cancelledTaskIds` (saltato al suo turno); per task in-flight → `AbortController.abort()`. Pulsante × appare on-hover su ogni riga della coda.

### E3 🔵 ✅ v1.1.13 Tracking fallimenti nel batch

- **Stato:** ✅ v1.1.13
- **File:** `electron/ipc.ts`, `src/store/useStore.ts`, `src/App.tsx`, `src/components/GlobalProgressBar.tsx`
- **Fix applicato:** Array `failedDownloads: FailedDownload[]` accumulato durante il batch; inviato con `BATCH_COMPLETED`. `GlobalProgressBar` mostra bottone espandibile con conteggio errori e lista titoli con codice errore tradotto (via `ERROR_CODE_MAP`). Progress bar diventa gradiente rosso se ci sono fallimenti.

### E4 🔵 ✅ v1.1.14 Ordinamento episodi

- **Stato:** ✅ v1.1.14
- **File:** `src/components/EpisodeList.tsx`, `src/locales/*.json`
- **Fix applicato:** Pulsante `Ordina` (icona `swap_vert`) nella filter bar apre un pannello con 5 opzioni: ordine del feed (default), data più recente, data meno recente, durata più lunga, durata più corta. Il sort è applicato in `filteredEpisodes` useMemo dopo tutti gli altri filtri. Reset automatico al cambio feed. Chiavi i18n in tutte e 8 le lingue.

### E5 🔵 ✅ v1.1.15 Re-download di un episodio già scaricato

- **Stato:** ✅ v1.1.15
- **File:** `src/components/EpisodeList.tsx`, `src/locales/*.json`
- **Fix applicato:** Pulsante `download` on-hover aggiunto nella riga degli episodi completati (prima di `restart_alt` e `folder_open`). Chiama `handleDownload(episode)` direttamente senza necessità di reset manuale dello stato. Disabilitato offline.

### E6 🔵 ✅ v1.1.16 Path download visibile nella UI principale

- **Stato:** ✅ v1.1.16
- **File:** `shared/types.ts`, `electron/ipc.ts`, `electron/preload.ts`, `src/vite-env.d.ts`, `src/store/useStore.ts`, `src/App.tsx`, `src/components/EpisodeList.tsx`, `src/components/SettingsModal.tsx`, `src/components/Sidebar.tsx`
- **Fix applicato:** Footer sidebar mostra le ultime 2 componenti del path attivo (es. `Documenti/Podcast`) con icona `folder`. Click → `shell.openPath()` via nuovo IPC `OPEN_FOLDER`. Path salvato in Zustand store (`downloadPath`), inizializzato in `App.tsx` al mount, aggiornato da `EpisodeList` e `SettingsModal` ad ogni cambio.

### E7 🔵 ✅ v1.1.17 `lastUpdated` sidebar aggiornato al sync

- **Stato:** ✅ v1.1.17
- **File:** `electron/services/DatabaseService.ts`, `electron/services/LibraryService.ts`, `electron/ipc.ts`
- **Fix applicato:** Aggiunto `touchFeed(url, lastUpdated)` in `DatabaseService` (`UPDATE feeds SET lastUpdated = ? WHERE url = ?`) e passthrough in `LibraryService`. In `ipc.ts`, handler `PARSE_FEED`: dopo ogni fetch di rete (non su cache hit), chiama `touchFeed` con `new Date().toISOString()` e pusha `FEEDS_UPDATED` per aggiornare la sidebar in tempo reale. Su cache hit la data resta invariata (nessuna fetch reale avvenuta).

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
