# Roadmap FeedDownloader Pro — Fonte di Verità

**Versione di riferimento:** 1.5.1
**Ultimo aggiornamento:** 18 agosto 2026 — release v1.5.1

> **Stato release:** **v1.5.1 pubblicata il 18 ago 2026 su `Pitz72/FeedDownloader`** — rifinitura
> della schermata iniziale (via la finta riga di stato, blocco alzato) e banner in testata al
> README. La **v1.5.0**, del giorno prima, è stata la prima release
> da progetto aperto (licenza MIT, sorgente pubblico). Da questa versione le release escono
> sulla repo del progetto e non più sulla repo ponte, che va in dismissione
> ([PIANO-APERTURA.md](PIANO-APERTURA.md), Fase 5). Contenuto della v1.5.0: pausa/riprendi dei
> download, riprova falliti, riparazione archivio per checksum, ripristino guidato del
> DB, guardie Content-Type/dimensione, notifica nuovi episodi cliccabile, ricerca
> episodi nella palette, allineamento allo standard di distribuzione Titan (icona
> definitiva e ora con il canale alfa, whats-new nel main, note di rilascio in-code IT/EN,
> auto-update col consenso, installer con asar snellito), ESLint 9 + Vite 7. macOS escluso in
> via definitiva (solo auto-compilazione). N1 e N2 (sotto) sono stati chiusi in v1.4.0.

Questo è l'unico documento autorevole per tutto il lavoro pendente post-v1.0.0.
I documenti precedenti (`roadmap_technical_fixes.md`, `roadmap_documentation_2026.md`) sono archiviati in `archivio/`.

> **Audit totale 12 luglio 2026** — vedi [PIANO-REVISIONE-PRE-RELEASE.md](PIANO-REVISIONE-PRE-RELEASE.md):
> le 14 **gravi** (S1–S14) sono state chiuse in **v1.3.13**; i **medi** e la maggior parte dei
> **lievi** in **v1.3.14** (dettaglio nei changelog). Rimandati alla release feature v1.4.0:
> M9 (parsing in worker), M10 (newCount via known_episodes), M18 (chiudi-nel-tray), L3
> (aggiornamento URL feed su 301) — accoppiati a N1/N2 qui sotto.

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
| B1 | Documentazione | Integrazione manuali in-app | — | ✅ v1.4.0 |
| B2 | Documentazione | Scientific Paper IT + EN | — | ✅ v1.5.0 (`docs/academic/`) |
| B3 | Documentazione | ARCHITECTURE.md | — | ✅ v1.4.0 |
| B4 | Documentazione | CONTRIBUTING.md | — | ✅ v1.4.0 |
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
| F1 | Feature | Vista archivio integrata in-app | 🟣 | ✅ v1.1.22 |
| F2 | Feature | Badge "N nuovi" per feed in sidebar | 🟣 | ✅ v1.1.20 |
| F3 | Feature | Auto-refresh feed periodico in background | 🟣 | ✅ v1.2.0 |
| F4 | Feature | Selezione multipla episodi (Shift/Ctrl+click) | 🟣 | ✅ v1.1.18 |
| F5 | Feature | Export playlist M3U | 🟣 | ✅ v1.1.21 |
| F6 | Feature | Velocità/ETA inline per download attivo | 🟣 | ✅ v1.1.19 |
| G1 | UI/UX | Pannello download laterale (replace GlobalProgressBar) | ⚪ | ✅ v1.2.3 |
| G2 | UI/UX | Sidebar ridimensionabile via drag | ⚪ | ✅ v1.2.3 |
| G3 | UI/UX | Command palette Ctrl+K | ⚪ | ✅ v1.2.4 |
| G4 | UI/UX | Pannello dettaglio episodio (click) | ⚪ | ✅ v1.2.2 |
| G5 | UI/UX | Sync All con progresso per-feed | ⚪ | ✅ v1.2.2 |
| G6 | UI/UX | Toast stack — gestione collisioni con GlobalProgressBar | ⚪ | ✅ v1.2.1 |
| G7 | UI/UX | Onboarding guidato primo avvio | ⚪ | ✅ v1.2.1 |

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

### C1 🔴 ✅ v1.0.5 `showInFolder` ignora naming template e estensione

- **Stato:** ✅ v1.0.5
- **Fix applicato:** Passato `enclosureUrl` dalla chiamata renderer; nell'handler `SHOW_IN_FOLDER` applicato `applyTemplate(namingTemplate, ...)` esattamente come in `START_DOWNLOAD` prima di `getSafePath`. Estensione ricavata dall'URL reale dell'enclosure.

### C2 🔴 ✅ v1.0.5 Collisione silenziosa su titoli episodio identici

- **Stato:** ✅ v1.0.5
- **Fix applicato:** Prima del rename `.part → target`, verifica esistenza del file. In caso di collisione, aggiunge suffisso `_2`, `_3`, ecc. con ciclo `do…while` fino a trovare un path libero.

### C3 🟠 ✅ v1.0.6 `Sync All` sequenziale — blocco su molti feed

- **Stato:** ✅ v1.0.6
- **File:** `src/components/Sidebar.tsx`
- **Fix applicato:** Sostituito loop `for…of` con `Promise.allSettled(feeds.map(...))` — tutti i feed vengono parsati in parallelo. Feedback "Sincronizzando..." durante l'operazione.

### C4 🟠 ✅ v1.0.7 `stopBatch` non annulla i download in-flight

- **Stato:** ✅ v1.0.7
- **File:** `electron/ipc.ts`
- **Fix applicato:** `DownloadService` espone un `AbortController` per ogni download attivo; `stopBatch` chiama `abort()` su tutti i controller registrati in `activeDownloads` Map, oltre a svuotare la coda `p-queue`.

### C5 🟠 ✅ v1.0.8 Filtro "New" include episodi attualmente in download

- **Stato:** ✅ v1.0.8
- **File:** `src/components/EpisodeList.tsx`
- **Fix applicato:** Il filtro `statusFilter === 'new'` esclude ora anche gli URL presenti in `downloads` (store Zustand), non solo i guid in `downloadedGuids`.

### C6 🟠 ✅ v1.0.9 `addFeed` — metadata sidebar non si aggiorna mai

- **Stato:** ✅ v1.0.9
- **File:** `electron/services/DatabaseService.ts`
- **Fix applicato:** Sostituito `INSERT OR IGNORE` con upsert: `INSERT OR REPLACE` che aggiorna titolo, immagine e `lastUpdated` ad ogni ri-aggiunta del feed.

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

### F1 🟣 ✅ v1.1.22 Vista archivio integrata in-app

- **Stato:** ✅ v1.1.22
- **File:** `shared/types.ts`, `electron/ipc.ts`, `electron/preload.ts`, `src/vite-env.d.ts`, `src/store/useStore.ts`, `src/components/ArchiveView.tsx`, `src/components/Sidebar.tsx`, `src/App.tsx`, `src/locales/*.json`
- **Implementazione:** Tab bar sidebar Feed/Archivio. Vista archivio con tabella virtualizzata (react-virtuoso): ricerca per titolo/podcast, filtro per singolo podcast (dropdown), ordinamento per data download, data pubblicazione, dimensione, bitrate. Header con statistiche (N file, M podcast, totale GB). Pulsante "Mostra in cartella" on-hover. Aggiornamento automatico ad ogni download completato via `onDownloadsUpdated`.

### F2 🟣 ✅ v1.1.20 Badge "N nuovi" per feed nella sidebar

- **Stato:** ✅ v1.1.20
- **File:** `shared/types.ts`, `electron/services/DatabaseService.ts`, `electron/services/LibraryService.ts`, `electron/ipc.ts`, `src/components/Sidebar.tsx`
- **Implementazione:** `episodeCount` persistito in DB ad ogni parse; `getFeeds()` computa `newCount = MAX(0, episodeCount - downloadedByPodcastTitle)` via JOIN con archive. Badge pill (9px, colore primary) nella sidebar accanto alla data. `FEEDS_UPDATED` pushato anche al completamento di ogni download per aggiornamento in tempo reale.

### F3 🟣 ✅ v1.2.0 Auto-refresh feed periodico in background

- **Stato:** ✅ v1.2.0
- **File:** `shared/types.ts`, `electron/services/DatabaseService.ts`, `electron/services/LibraryService.ts`, `electron/ipc.ts`, `electron/preload.ts`, `src/vite-env.d.ts`, `src/components/SettingsModal.tsx`, `src/locales/*.json`
- **Implementazione:** Impostazione `autoRefreshInterval` (0/6/12/24 ore) persista in DB. Timer `setInterval` avviato al boot in `registerIpcHandlers` con l'intervallo salvato. Ogni tick: invalida cache, fa fresh fetch di tutti i feed via `Promise.allSettled`, confronta `episodeCount` nuovo vs salvato, aggiorna DB + invia `FEEDS_UPDATED`. Se ci sono nuovi episodi, invia notifica OS localizzata in 8 lingue. UI nella tab Generale di Impostazioni: selettore preset a 4 pulsanti (Disattivato / 6 ore / 12 ore / 24 ore). Riconfigurazione del timer immediata al cambio impostazione.

### F4 🟣 ✅ v1.1.18 Selezione multipla episodi (Shift/Ctrl+click)

- **Stato:** ✅ v1.1.18
- **File:** `src/components/EpisodeList.tsx`, `src/locales/*.json`
- **Implementazione:** `selectedGuids: Set<string>` + `lastSelectedGuidRef` + `filteredEpisodesRef`. Click semplice → selezione singola, Ctrl/Cmd+click → toggle individuale, Shift+click → range. Checkbox visibile on-hover e quando selezionato. Pulsante "Scarica Selezionati (N)" appare nel podcast header. Selezione azzerata al cambio feed e dopo avvio download.

### F5 🟣 ✅ v1.1.21 Export playlist M3U

- **Stato:** ✅ v1.1.21
- **File:** `shared/types.ts`, `electron/services/DatabaseService.ts`, `electron/services/LibraryService.ts`, `electron/ipc.ts`, `electron/preload.ts`, `src/vite-env.d.ts`, `src/components/EpisodeList.tsx`, `src/locales/*.json`
- **Implementazione:** Pulsante "Esporta M3U" nel podcast header. Handler IPC queries archive per podcastTitle, genera M3U con path assoluti locali, apre dialogo di salvataggio nativo. Ritorna true/false/null per feedback toast differenziato (success / nessun episodio / annullato). i18n completo in 8 lingue.

### F6 🟣 ✅ v1.1.19 Velocità e ETA inline per download attivo

- **Stato:** ✅ v1.1.19
- **File:** `shared/types.ts`, `src/store/useStore.ts`, `src/components/EpisodeList.tsx`
- **Implementazione:** `speed` e `eta` aggiunti a `DownloadProgress`. `speedCache` module-level in `useStore` per calcolo delta-based. UI nella riga episodio: percentuale + velocità (KB/s o MB/s) + ETA (`Xs`/`Xm Ys`/`Xh Ym`) visualizzati in stacking verticale durante il download.

---

## G — Upgrade Interfaccia e Usabilità ⚪

### G1 ⚪ ✅ v1.2.3 Pannello download laterale

- **Stato:** ✅ v1.2.3
- **File:** `src/components/DownloadPanel.tsx`, `src/store/useStore.ts`, `src/context/ToastContext.tsx`, `src/components/EpisodeDetailPanel.tsx`
- **Implementazione:** `GlobalProgressBar.tsx` eliminato e sostituito con `DownloadPanel` — drawer fisso a destra (380px, z-50, top 56px). Framer-motion spring slide-in/out. Header con contatore N/M, stop button, close button. Lista coda scrollabile con `QueueRow` (spinner/schedule icon, titolo, podcast, %, velocità, ETA, progress bar inline, cancel button hover-reveal). Sezione fallimenti espandibile post-completamento. FAB (floating action button) bottom-right quando pannello chiuso. `startBatch` in Zustand apre il pannello automaticamente. Toasts si spostano a sinistra del pannello quando aperto (`right: calc(380px + 1rem)`). `EpisodeDetailPanel` trasla a `right: 380px` quando DownloadPanel è visibile.

### G2 ⚪ ✅ v1.2.3 Sidebar ridimensionabile via drag

- **Stato:** ✅ v1.2.3
- **File:** `src/App.tsx`, `src/components/Sidebar.tsx`
- **Implementazione:** Drag handle (4px, cursor col-resize) tra sidebar e area principale. `useRef` per isDragging/dragStartX/dragStartWidth (nessun re-render durante drag). `setSidebarWidth` su mousemove per aggiornamento in tempo reale. Limiti: min 240px, max 640px, default 456px. Persistenza in `localStorage` (chiave `sidebarWidth`). Highlight handle on hover con `rgba(173,198,255,0.3)`. `document.body.style.cursor/userSelect` durante drag per evitare selezione accidentale.

### G3 ⚪ ✅ v1.2.4 Command palette (Ctrl+K)

- **Stato:** ✅ v1.2.4
- **File:** `src/components/CommandPalette.tsx`, `src/App.tsx`, `src/components/Sidebar.tsx`, `src/components/UrlInput.tsx`
- **Implementazione:** Overlay backdrop-blur con modal 560px, spring animation framer-motion. Input di ricerca con filtro real-time. Gruppo Azioni (5 comandi: Impostazioni, Sync All, Aggiungi Feed, Vai Archivio, Vai Feed) + gruppo Feed (top 5 quando query vuota, filtrati per query). Navigazione ↑↓ Enter ESC, scroll automatico active item. Selezione feed: parseFeed async con spinner loading per quel feed. "Sync All" tramite CustomEvent `feeddownloader:syncall` catturato da Sidebar. "Aggiungi Feed" focalizza `#url-feed-input`. Tutti i testi in 8 lingue.

### G4 ⚪ ✅ v1.2.2 Pannello dettaglio episodio

- **Stato:** ✅ v1.2.2
- **File:** `src/components/EpisodeDetailPanel.tsx`, `src/components/EpisodeList.tsx`
- **Implementazione:** Click semplice su riga episodio apre pannello fisso laterale (380px, sotto header). Contenuto: meta (data, durata, dimensione enclosure), azioni contestuali (Scarica/Riscarica/Reset/Apri Cartella), dati archivio se scaricato (downloadedAt, fileSize, bitrate, sampleRate, filename, checksum SHA-256), link sorgente con copia, show notes HTML-stripped con preservazione newline. Ctrl/Shift+click riservati alla selezione multipla (F4 invariato). Pannello chiuso al cambio feed.

### G5 ⚪ ✅ v1.2.2 Sync All con progressivo per-feed

- **Stato:** ✅ v1.2.2
- **File:** `src/components/Sidebar.tsx`
- **Implementazione:** Sostituito `isSyncingAll: boolean` con `syncStatuses: Map<string, 'syncing'|'done'|'error'>`. Durante Sync All, ogni thumbnail feed mostra spinner `sync` animato (in corso), `check_circle` verde (completato) o `error` rosso (fallito). Bottone mostra "Sincronizzando... N/M" con counter in tempo reale. Stati visibili 2,5s poi reset automatico.

### G6 ⚪ ✅ v1.2.1 Toast stack — gestione collisioni con GlobalProgressBar

- **Stato:** ✅ v1.2.1
- **File:** `src/context/ToastContext.tsx`
- **Implementazione:** `ToastProvider` legge `isBatchDownloading`, `batchCompleted`, `batchTotal` da Zustand. Quando `progressBarVisible` è true, il container dei toast si sposta a `bottom: 340px` (con `transition 0.3s ease`), liberando lo spazio occupato dal pannello. Al termine del batch il container torna a `bottom: 1rem`.

### G7 ⚪ ✅ v1.2.1 Onboarding guidato al primo avvio

- **Stato:** ✅ v1.2.1
- **File:** `src/App.tsx`
- **Implementazione:** Al mount, `AppContent` chiama `window.api.getFeeds()`: se la lista è vuota e `localStorage.onboardingDone` non è impostato, mostra `OnboardingHint` tra `UrlInput` e `EpisodeList`. Il callout contiene: riga principale con icona RSS e testo guida URL; riga secondaria con icona cartella e suggerimento Impostazioni → Download. Scompare automaticamente quando viene aggiunto il primo feed (listener `onFeedsUpdated`) o manualmente tramite il pulsante ×. Flag `localStorage.onboardingDone` persiste tra i riavvii.

---

## Pianificato — post v1.3.11 (da affrontare in una prossima versione)

Raccolto dal feedback d'uso del 29 maggio 2026 (auto-update riparato in v1.3.11).

### N1 ⚪🔵 Notifica aggiornamento sempre visibile all'avvio — ✅ v1.4.0 (banner topbar persistente; dalla v1.5.0 con consenso esplicito al download)

- **Problema:** l'auto-update ora scarica correttamente, ma la notifica OS aggiunta in
  v1.3.11 **non compare** (probabilmente soppressa da Windows / Assistente notifiche, o non
  emessa al momento giusto). Lo stato "in download" e il pulsante "Riavvia per installare"
  sono visibili **solo** dentro Impostazioni → Aggiornamenti.
- **Obiettivo:** la presenza di un aggiornamento (disponibile / in download / pronto) deve
  essere segnalata **sempre e comunque all'avvio**, in modo visibile fuori dalle Impostazioni.
- **Direzione:** non affidarsi alla sola `Notification` OS — aggiungere un **banner/indicatore
  in-app persistente** (es. nella topbar o un toast non effimero) con azione "Riavvia e installa"
  raggiungibile direttamente. Verificare anche perché la Notification OS non appaia
  (permessi/Focus Assist, timing rispetto al `ready-to-show`).

### N2 🔵 Check automatico nuovi episodi all'avvio + ciclico con notifica — ✅ v1.4.0 (avvio + ciclo 6h default + ritorno online; dalla v1.5.0 la notifica è cliccabile)

- **Problema:** il conteggio "N nuovi" e l'eventuale notifica si aggiornano **solo** quando
  l'utente clicca sul feed. Esiste già `runBackgroundRefresh` (F3) con notifica OS, ma è legato
  all'intervallo di auto-refresh che di **default è 0 (spento)**.
- **Obiettivo:** il software deve controllare i feed **automaticamente all'avvio** e poi
  **ciclicamente**, notificando i nuovi episodi senza alcuna interazione.
- **Direzione:** eseguire un `runBackgroundRefresh` all'avvio (dopo l'init) e abilitare un
  intervallo di default sensato (es. 6h) per le nuove installazioni; mantenere la notifica già
  presente in `runBackgroundRefresh`. Valutare un check anche al ritorno online.

> Nota: la cover art per-episodio (v1.3.10) è confermata OK — nessun intervento.

---

## Archivio roadmap precedenti

| Documento | Archiviato | Contenuto originale |
|-----------|-----------|---------------------|
| [archivio/roadmap_technical_fixes.md](archivio/roadmap_technical_fixes.md) | 11 mag 2026 | Fix tecnici post-v1.0.0 (ora A1–A3) |
| [archivio/roadmap_documentation_2026.md](archivio/roadmap_documentation_2026.md) | 11 mag 2026 | Piano documentazione multilingua (ora B1–B4) |
| [archivio/lungotermine.md](archivio/lungotermine.md) | 28 mar 2026 | Roadmap lungo termine — tutto completato/abortito in v0.7.5 |
| [archivio/indicazioni.md](archivio/indicazioni.md) | — | Backlog feature — tutto completato in v0.7.4 |
