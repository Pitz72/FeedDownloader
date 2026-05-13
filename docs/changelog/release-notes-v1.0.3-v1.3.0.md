# Da v1.0.3 a v1.3.0 — Cronaca tecnica di uno sprint di sviluppo

*Runtime FeedDownloader Pro · Maggio 2026*

---

## Contesto

La v1.0.0 di Runtime FeedDownloader Pro era una release funzionale ma imperfetta: core stabile, ma con un debito tecnico significativo e molte feature mancanti rispetto alla visione originale. Le versioni successive — dalla 1.0.3 alla 1.3.0 — sono state sviluppate in un singolo sprint intensivo tra l'11 e il 13 maggio 2026, con 37 versioni patch che hanno portato il progetto dalla prima release pubblica a un'applicazione matura e completamente ridisegnata.

Questo articolo documenta ogni intervento, raggruppato per tema, con i dettagli implementativi esatti.

---

## 1. Fix cross-platform e correzioni Linux (v1.0.3 – v1.0.4)

### v1.0.3 — Monitor secondario, menu contestuale, sidebar

La prima release post-1.0.0 ha affrontato tre problemi segnalati su Linux Mint.

**Monitor secondario (A1).** Su Linux, `win.maximize()` senza coordinate esplicite lasciava al window manager la scelta del display, causando l'apertura della finestra sul monitor sbagliato. Fix: in `electron/main.ts`, prima di `maximize()`, si interroga `screen.getPrimaryDisplay()` per ottenere le coordinate `workArea` e si esegue `win.setPosition(x, y)` per ancorare la finestra al display principale. Su Windows e macOS il comportamento rimane invariato.

**Menu contestuale (A2).** Electron pacchettizzato disabilita i menu nativi nei webview. Nessun handler esisteva, rendendo impossibile incollare testo via tasto destro. Fix: aggiunto `win.webContents.on('context-menu', ...)` in `electron/main.ts`; il menu generato con `Menu.buildFromTemplate` espone `cut`, `copy`, `paste`, `selectAll` sugli elementi editabili e solo `copy` sulle selezioni di testo puro.

**Sidebar.** In questa stessa release la sidebar ha ricevuto tre miglioramenti: larghezza aumentata da 256 px a 456 px per ridurre i troncamenti sui titoli lunghi; campo di ricerca real-time (case-insensitive, con pulsante × per il reset istantaneo); pulsante ordinamento A–Z (`sort_by_alpha`) che alterna tra ordine di inserimento e `localeCompare` alfabetico, cumulativo con la ricerca. Aggiunte le chiavi i18n `sidebar.search_placeholder`, `sidebar.sort_alpha`, `sidebar.no_results` in tutte e 8 le lingue.

### v1.0.4 — Wayland e tray Linux (A3)

Su Linux moderno la sessione grafica è tipicamente Wayland. Senza intervento, Electron forza XWayland: funziona, ma introduce latenza e scaling non nitido.

**Wayland nativo.** Aggiunto `app.commandLine.appendSwitch('ozone-platform-hint', 'auto')` prima di `app.whenReady()` su Linux. Electron sceglie automaticamente tra X11 e Wayland in base alla sessione attiva.

**Tray double-click.** Su certi setup GNOME con AppIndicator, l'evento `click` sulla tray non viene emesso: il DE lo intercetta e produce `double-click`. Fix: registrazione di `tray.on('double-click', toggleWindow)` in aggiunta al `click` esistente, riusando la stessa funzione estratta.

**GNOME puro.** Su GNOME senza AppIndicator, la creazione della tray icon fallisce silenziosamente. Il catch ora emette `console.warn` con il link diretto all'estensione corretta (`extensions.gnome.org/extension/615/`).

---

## 2. Bug critici del core (v1.0.5 – v1.1.0)

Sette bug classificati come "critici" (C1–C7) risolti in versioni sequenziali.

### v1.0.5 — showInFolder e collision check (C1, C2)

**C1 — showInFolder con naming template.** L'handler `SHOW_IN_FOLDER` ricostruiva il percorso usando il titolo grezzo dell'episodio, ignorando il naming template configurato e hardcodando l'estensione `.mp3`. Fix: aggiunto parametro `pubDate` all'IPC; applicato `applyTemplate(namingTemplate, ...)` prima di `getSafePath`, esattamente come in `START_DOWNLOAD`; estensione derivata dall'URL enclosure reale. Modificati: `electron/ipc.ts`, `electron/preload.ts`, `src/vite-env.d.ts`, `src/components/EpisodeList.tsx`.

**C2 — Collision silenzioso su titoli identici.** Se due episodi producevano lo stesso nome file dopo sanitizzazione, il secondo download sovrascriveva il primo senza avviso. Fix: dopo il calcolo di `baseSafePath`, verifica dell'esistenza del file; se presente, aggiunta progressiva del suffisso `_2`, `_3`, … fino a trovare un nome libero.

### v1.0.6 — Sync All parallelo (C3)

`handleSyncAll` usava un loop `for...of` con `await` sincrono. Con 30 feed a 2 secondi di latenza media, l'operazione impiegava ~60 secondi bloccando il renderer. Fix: `Promise.allSettled(feeds.map(...))` per esecuzione parallela; stato `isSyncingAll` con spinner animato; pulsante disabilitato durante la sync; toast di errore aggiuntivo se alcuni feed falliscono.

### v1.0.7 — stopBatch con AbortController (C4)

`queueService.clear()` svuotava la coda in attesa ma non interrompeva i download già avviati da `p-queue`. Fix su due livelli:

In `DownloadService.ts`: aggiunto parametro `signal?: AbortSignal` a `downloadFile` e `attemptDownload`; il segnale viene passato ad axios; `CanceledError` con `code: 'ERR_CANCELED'` viene catturato e rilancia come `DOWNLOAD_ABORTED`; `DOWNLOAD_ABORTED` è escluso dalla lista dei tentativi di retry.

In `ipc.ts`: aggiunta mappa `activeDownloads: Map<string, AbortController>` a livello di modulo; ogni download crea e registra un controller, rimosso nel `finally`; `STOP_BATCH` chiama `controller.abort()` su tutti i download attivi prima di pulire la coda. Gli errori `DOWNLOAD_ABORTED` sono silenziosi lato renderer (nessun toast, nessun progress event).

### v1.0.8 — Filtro "Da scaricare" e download in corso (C5)

Il filtro `'new'` escludeva solo gli episodi già completati, non quelli in download. Un episodio con spinner attivo appariva ancora nella lista "Da scaricare" con il pulsante di download cliccabile. Fix: nel `useMemo` di `EpisodeList.tsx`, aggiunta variabile `isInProgress` che verifica la presenza dell'URL nell'oggetto `downloads` dello store; per il filtro `'new'`: incluso solo se `!isDownloaded && !isInProgress`; `downloads` aggiunto alle dipendenze del memo.

### v1.0.9 — Upsert SQLite per addFeed (C6)

`addFeed` usava `INSERT OR IGNORE`, non aggiornando mai titolo, immagine o `lastUpdated` per feed già presenti. Fix: sostituzione con upsert SQLite 3.24+:

```sql
INSERT INTO feeds ... ON CONFLICT(url) DO UPDATE SET title=..., image=..., lastUpdated=...
```

L'approccio preserva il `rowid` originale (e quindi l'ordine di inserimento nella sidebar), a differenza di `INSERT OR REPLACE` che eliminerebbe e ricreerebbe il record.

### v1.1.0 — Singola richiesta HTTP per feed (C7)

`parseFeed` effettuava 2–3 richieste HTTP: `axios.head()` per rilevare redirect/content-type, poi `parser.parseURL(url)` che eseguiva un ulteriore `GET` interno. Fix: rimosso il pre-check HEAD; singola `axios.get()` con `responseType: 'text'`; content-type letto dall'header della risposta; contenuto passato direttamente a `parser.parseString(response.data)`. Risultato: da 2–3 richieste a 1 per ogni parse, minore latenza, comportamento più robusto con server che rispondono diversamente a HEAD vs GET.

---

## 3. Bug minori e ottimizzazioni (v1.1.1 – v1.1.12)

### v1.1.1 — Reset filtri al cambio feed (D1)

I filtri (`searchQuery`, `dateFrom`, `dateTo`, `statusFilter`, `minDuration`, `maxDuration`) vivevano in stato locale di `EpisodeList` e non si resettavano al cambio feed. Risultato: spostarsi su un feed diverso con un filtro data attivo mostrava "0 episodi". Fix: `useEffect` con dipendenza `[currentFeed?.url]` che azzera tutti i filtri.

### v1.1.2 — Import statici (D2)

Tre librerie erano caricate con `await import()` inline: `music-metadata` ad ogni download completato, `shell` da Electron in `SHOW_IN_FOLDER`, `sanitize-filename` dentro il loop dell'health check. Node.js le cachea dopo il primo caricamento, ma il pattern introduce overhead misurabile al primo ciclo. Fix: import statici in cima a `electron/ipc.ts` per tutte e tre.

### v1.1.3 — Memoizzazione renderEpisodeRow (D3)

`renderEpisodeRow` in `EpisodeList.tsx` era ridefinita ad ogni render. Ogni tick di progresso download aggiornava lo store e forzava Virtuoso a ri-renderizzare tutte le righe visibili. Fix: `parseDurationMinutes`, `formatDuration`, `formatBytes` spostate fuori dal componente come funzioni pure; `handleDownload` e `handleResetStatus` avvolte in `useCallback` con dipendenze minime; `renderEpisodeRow` in `useCallback` con deps `[downloads, downloadedGuids, currentFeed, t, isOnline, ...]`.

### v1.1.4 — Traffic light macOS (D4)

Con `titleBarStyle: 'hidden'`, i pulsanti semaforo overlappavano il contenuto header. Fix in tre file: `trafficLightPosition: { x: 16, y: 14 }` in `electron/main.ts`; `document.documentElement.dataset.platform = process.platform` nel preload (sincrono, senza round-trip IPC); in `App.tsx`, `isMac` derivato dal dataset per applicare `pl-20` condizionale nell'header.

### v1.1.5 — engines.node corretto (D5)

`package.json` dichiarava `"node": ">=18.0.0"` ma `fs.statfs` (usato per il check spazio disco) è disponibile solo da Node 18.15.0. Fix: aggiornato a `">=18.15.0"`.

### v1.1.6 — Skeleton SettingsModal (D6)

Il modal si apriva mostrando i valori default (~50–100ms di latency IPC) prima di aggiornarsi con i valori reali, causando un flickering visibile. Fix: stato `isLoadingSettings`; durante il caricamento, overlay skeleton animato (`animate-pulse`) con placeholder per label e campi; il contenuto reale è nascosto via `display: none`.

### v1.1.7 — Stima spazio disco (D7)

La costante `BYTES_PER_SECOND = 16_000` (128 kbps) sottostimava di circa il 50% gli episodi moderni (tipicamente 192–256 kbps). Aggiornata a `24_000` (192 kbps).

### v1.1.8 – v1.1.12 — Ciclo D8/D9/D10/D11 e hotfix critici

**D8** — `country-flag-icons` rimosso da `dependencies` (erroneamente considerato inutilizzato).

**D9** — Tutti gli hover state migrati da JS (`onMouseEnter`/`onMouseLeave`) a CSS puro con classi utility in `src/index.css`. File modificati: App.tsx, Sidebar, EpisodeList, SettingsModal, ConfirmModal, GlobalProgressBar, HelpModal, IntroScreen, UrlInput.

**D10** — Rimossi ~50 commenti `// vX.Y.Z —` da 13 file sorgente. Quelli con informazione utile sul "perché" sono stati mantenuti senza prefisso versione.

**D11** — Pulsante download: `focus:opacity-100` sostituito con `focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]` per accessibilità da tastiera senza impatto sul comportamento mouse.

**Hotfix in v1.1.12 (due bug critici introdotti dalle patch precedenti):**

*Preload crash.* Il modulo ESM del preload in Electron 30 viene valutato asincronicamente; `document.documentElement` è `null` al momento dell'evaluation. L'accesso diretto causava `TypeError` che interrompeva il preload prima di `contextBridge.exposeInMainWorld`, rendendo `window.api` undefined nell'intera applicazione. Fix: accesso condizionale con check `readyState` + listener `DOMContentLoaded` come fallback.

*Flag SVG.* In v1.1.8 `country-flag-icons` era stato rimosso sulla base dell'assunzione errata che non fosse usato; in realtà `IntroScreen.tsx` lo importava per 8 bandiere SVG React. In v1.1.11 era stato sostituito con emoji Unicode che su Windows vengono renderizzate come sigle testuali ("GB", "IT") invece che come bandiere. Fix: libreria reinstallata, SVG React components ripristinati.

---

## 4. Feature essenziali mancanti (v1.1.13 – v1.1.17)

### v1.1.13 — Coda download, cancellazione singola, tracking fallimenti (E1, E2, E3)

Tre feature strettamente correlate implementate in un'unica versione.

**E1 — Vista coda.** `GlobalProgressBar` mostra ora una lista scrollabile di tutti i download in corso e in coda. Ogni riga include stato visivo (spinner per i task attivi, icona pending per i task in attesa), titolo episodio e nome podcast.

**E2 — Cancellazione singola.** Ogni riga della coda espone on-hover un pulsante ×. I task pending vengono saltati silenziosamente; i task in-flight vengono abortiti via `AbortController`. Il contatore batch si aggiorna correttamente in entrambi i casi. Lato core: ogni task riceve un `taskId` UUID; mappa `queueItems` e set `cancelledTaskIds` in `ipc.ts`; handler `CANCEL_DOWNLOAD` IPC.

**E3 — Tracking fallimenti.** Al completamento del batch, se ci sono errori, il pannello mostra un bottone espandibile con conteggio e lista dei titoli con il messaggio di errore tradotto. La barra di progresso diventa un gradiente rosso. Array `failedDownloads[]` accumulato durante il batch e incluso nel payload `BATCH_COMPLETED`.

Aggiunte 9 chiavi i18n per i codici di errore (`error_not_found`, `error_stalled`, `error_timeout`, `error_disk_full`, `error_integrity`, `error_permission`, `error_unknown`, `cancel_item`, `n_failed`) in tutte e 8 le lingue.

### v1.1.14 — Ordinamento episodi (E4)

Pulsante **Ordina** (`swap_vert`) aggiunto alla filter bar. Il pannello espandibile offre 5 opzioni: ordine RSS originale (default), data discendente, data ascendente, durata discendente, durata ascendente. Indicatore punto sul pulsante quando attivo un ordinamento non-default. Reset al cambio feed. Gestione `pubDate` e `itunes.duration` nel `useMemo` di `filteredEpisodes`.

### v1.1.15 — Re-download episodio (E5)

Per gli episodi già completati (check verde), aggiunto on-hover un pulsante `download` prima dei pulsanti esistenti. Il click avvia immediatamente un nuovo download senza passare per reset manuale dello stato. Disabilitato offline. Caso d'uso principale: riscaricare un file corrotto o cancellato per errore, operazione frequente nel contesto del data hoarding.

### v1.1.16 — Path download nella sidebar (E6)

Il percorso della cartella di download è ora sempre visibile nel footer della sidebar, abbreviato alle ultime due componenti (`Documenti/Podcast`). Click → apertura della cartella nel file manager via nuovo IPC `OPEN_FOLDER` → `shell.openPath()`. Il path si aggiorna in tempo reale al cambio cartella (da EpisodeList, SettingsModal, migrazione archivio) tramite `downloadPath: string` nello Zustand store, inizializzato al mount via `window.api.getDownloadPath()`.

### v1.1.17 — lastUpdated al sync (E7)

`PARSE_FEED` effettuava la fetch di rete ma non aggiornava `lastUpdated` nel DB. Solo la prima aggiunta del feed scriveva la data. Fix: aggiunto `touchFeed(url, lastUpdated)` in `DatabaseService` (`UPDATE feeds SET lastUpdated = ? WHERE url = ?`); chiamato in `ipc.ts` dopo ogni fetch di rete (non su cache hit); seguito da push `FEEDS_UPDATED` per aggiornare la sidebar in tempo reale.

---

## 5. Feature aggiuntive (v1.1.18 – v1.1.22)

### v1.1.18 — Selezione multipla (F4)

Sistema di selezione completo per download batch selettivo:

* Click → seleziona/deseleziona singolo episodio
* Ctrl/Cmd+click → toggle individuale senza perdere la selezione
* Shift+click → range dall'ultimo selezionato al corrente
* Checkbox visibile on-hover e su righe selezionate (background primary tintato + bordo sinistro)
* Pulsante "Scarica Selezionati (N)" nel podcast header, attivo quando almeno un episodio è selezionato

Dettagli implementativi notevoli: `selectedGuids: Set<string>` come stato React (nuovo oggetto Set ad ogni update per garantire re-render corretto); `lastSelectedGuidRef` e `filteredEpisodesRef` come refs per lo shift-range senza ricreazione del callback; `handleRowClick` con deps vuote — legge solo refs. Le action buttons chiamano `e.stopPropagation()` per non triggerare il row handler.

### v1.1.19 — Velocità e ETA inline (F6)

Speed e ETA visualizzati direttamente nella riga episodio durante il download, senza aprire il pannello di progresso. Formato speed: KB/s o MB/s. Formato ETA: `Xs` / `Xm Ys` / `Xh Ym`. Non mostrati al primo tick o se velocità = 0.

Implementazione: `speed?: number; eta?: number` aggiunti a `DownloadProgress` in `shared/types.ts`; `speedCache: Map<string, { loaded: number; time: number }>` module-level in `useStore.ts`; calcolo in `updateDownload`: `speed = Δbytes / Δseconds`, `eta = remaining / speed`; cache pulita su `completed`/`error`.

### v1.1.20 — Badge episodi nuovi (F2)

Badge numerico (background primary, testo bianco, 9px) accanto alla data di ogni feed in sidebar, mostra il conteggio degli episodi non ancora scaricati. Sparisce quando il conteggio scende a zero. Aggiornato ad ogni download completato via push `FEEDS_UPDATED`.

Implementazione lato DB: nuova colonna `feeds.episodeCount INTEGER` aggiunta con `ALTER TABLE` idempotente in `init()`; `updateEpisodeCount(url, count)` chiamato in `PARSE_FEED` dopo ogni fetch di rete; `getFeeds()` refactored con JOIN archive per calcolare `newCount = MAX(0, episodeCount - downloadedByTitle)`.

### v1.1.21 — Export playlist M3U (F5)

Pulsante "Esporta M3U" (`playlist_add_check`) nel podcast header. Dialogo di salvataggio nativo con nome suggerito `<podcast>.m3u`. Il file include header `#EXTM3U` e voci `#EXTINF:-1,<titolo>` + path assoluto locale per ogni episodio scaricato, ordinati per data di pubblicazione discendente. Toast differenziato: success se esportato, info se nessun episodio scaricato, silenzio se dialogo annullato.

Nuovo canale IPC `EXPORT_M3U`; `getArchiveByPodcast(podcastTitle)` in `DatabaseService`; handler che costruisce i path con `path.join(baseDir, sanitize(podcastTitle), filename)` (stessa logica dell'health check).

### v1.1.22 — Vista archivio integrata (F1)

L'archivio degli episodi scaricati è navigabile direttamente dall'app, senza esportare CSV.

**Navigazione.** Due tab nella sidebar: **Feed** (default) e **Archivio** (icona `inventory_2`). Switching istantaneo; `viewMode: 'feeds' | 'archive'` in Zustand store.

**Tabella archivio.** Virtualizzata con react-virtuoso. Colonne: Podcast, Episodio, Scaricato il, Dimensione, Bitrate. Ordinamento cliccabile su tutte le colonne numeriche/date. Ricerca full-text per titolo e podcast. Filtro dropdown per singolo podcast. Statistiche in header: N file · M podcast · occupazione totale. Pulsante "Mostra in cartella" on-hover per ogni riga con file presente su disco. Ricarica automatica ad ogni download completato via `onDownloadsUpdated`.

Nuovi canali IPC: `GET_ARCHIVE`, `OPEN_ARCHIVE_FILE`. Nuovo componente: `src/components/ArchiveView.tsx`. Chiavi i18n `archive.*` e `sidebar.tab_*` in tutte e 8 le lingue.

---

## 6. Feature avanzate (v1.2.0 – v1.2.4)

### v1.2.0 — Auto-refresh in background (F3)

Timer di aggiornamento automatico configurabile: Disattivato / 6h / 12h / 24h. UI nella tab **Generale** di Impostazioni con 4 pulsanti preset.

Comportamento: il timer parte all'avvio con l'intervallo salvato in DB; ogni ciclo invalida la cache in-memory e forza fetch HTTP per tutti i feed via `Promise.allSettled`; confronta il nuovo `episodeCount` con il valore precedente in DB; se il conteggio è aumentato, invia una `Notification` Electron localizzata in 8 lingue; push `FEEDS_UPDATED` al renderer. Cambiare l'intervallo nelle Impostazioni annulla il vecchio timer e ne avvia uno nuovo immediatamente.

### v1.2.1 — Toast, onboarding, copia titolo (G6, G7, Extra)

**G6 — Toast senza collisioni.** `ToastProvider` osserva `isBatchDownloading`, `batchCompleted`, `batchTotal` dallo store. Quando il pannello download è visibile, i toast salgono a `bottom: 340px` con transizione CSS 0.3s.

**G7 — Onboarding al primo avvio.** Callout animato tra URL bar e lista episodi. Scompare automaticamente al primo feed aggiunto o via pulsante ×. Flag `localStorage.onboardingDone` evita la ripresentazione.

**Extra — Copia titolo.** Pulsante `content_copy` on-hover su ogni riga episodio. Copia via `navigator.clipboard.writeText`; toast "Titolo copiato". Funziona su tutti gli stati.

### v1.2.2 — Sync progressivo per-feed e pannello dettaglio episodio (G5, G4)

**G5 — Sync All per-feed.** Sostituito `isSyncingAll: boolean` con `syncStatuses: Map<string, 'syncing' | 'done' | 'error'>`. Ogni voce feed mostra spinner individuale durante il parse, poi check verde o icona errore. Il pulsante "Sincronizza Tutti" diventa "Sincronizzando… N/M" con counter real-time. Gli stati rimangono visibili per 2,5 secondi poi si ripristinano.

**G4 — Pannello dettaglio episodio.** Click semplice su una riga apre un pannello laterale fisso (380px, lato destro). Contenuto: metadati (data, durata, dimensione enclosure stimata), azioni contestuali (Scarica/Riscarica, Dimentica, Apri Cartella a seconda dello stato), dati archivio se scaricato (data download, dimensione reale, bitrate, sampleRate, nome file, checksum SHA-256), link sorgente con pulsante copia, show notes con HTML strippato e a-capo preservati. Ctrl/Cmd+click e Shift+click continuano a fare selezione multipla. `EpisodeDetailPanel.tsx` creato come nuovo componente.

### v1.2.3 — Sidebar ridimensionabile e pannello download laterale (G2, G1)

**G2 — Sidebar resize.** Handle drag da 4px sul bordo destro della sidebar. Min 240px, max 640px, default 456px. Persistenza via `localStorage`. Implementazione: listener `mousemove`/`mouseup` sul documento con `requestAnimationFrame` throttle.

**G1 — DownloadPanel (sostituzione GlobalProgressBar).** Il widget floating viene sostituito con un drawer laterale a piena altezza animato con framer-motion (spring slide-in da destra). Caratteristiche: lista coda per ogni download con progress bar 2px, velocità, ETA, pulsante cancellazione on-hover; sezione fallimenti espandibile post-batch; FAB 52px in basso a destra quando il pannello è minimizzato (con badge danger sul conteggio residuo). I toast si spostano di 380px a sinistra quando il pannello è aperto. Il pannello dettaglio episodio (G4) trasla lateralmente per non sovrapporsi.

### v1.2.4 — Command Palette (G3)

`Ctrl+K` (o `Cmd+K` su macOS) apre una palette di comandi: overlay full-screen con backdrop-blur, input di ricerca con tag "esc", sezione **Azioni rapide** (Sync All, Aggiungi Feed, Vai Archivio, Vai Feed, Apri Impostazioni) con shortcut keys visualizzate, sezione **Salta al feed** con thumbnail tintate e filtro per titolo.

Navigazione da tastiera: ↑↓ per navigare, Enter per selezionare, Esc per chiudere, `Ctrl+K` per toggle. Azioni eseguite via `CustomEvent` (`feeddownloader:syncall`) e manipolazione DOM diretta (`document.getElementById('url-feed-input').focus()`). I18n: sezione `cmd` in tutte e 8 le lingue.

---

## 7. Redesign integrale — Electric Azure on Deep Dark (v1.3.0)

La v1.3.0 è il punto di arrivo dello sprint: un redesign completo dell'interfaccia ispirato al bundle di design "FeedDownloader Pro" (Claude Design, maggio 2026). La logica applicativa, le API IPC e i servizi sono invariati. Cambiano il design system, la struttura visuale dei componenti e l'identità grafica.

### Il nuovo design system

**Palette superfici** — transizione da grigi neutri a scuri caldi quasi-neri:

* `--bg #0a0a0c`, `--bg-deep #060608`
* `--surf-1 #111116` → `--surf-2 #16161d` → `--surf-3 #1d1d25` → `--surf-4 #25252f`
* Bordi: `--border #25262e`, `--border-soft rgba(255,255,255,0.06)`, `--border-hard rgba(255,255,255,0.12)`

**Primary — Electric Azure:**

* `--azure #4b8eff` (bottone principale)
* `--azure-hi #75abff` (hover), `--azure-lo #2b6fe6` (active)
* `--azure-soft #adc6ff` (testo accent su dark)
* `--azure-glow` / `--azure-glow-sm` per shadow e ring

**Tipografia:**

* `--font-display` = Epilogue (titoli e headline)
* `--font-body` = Inter (testo corrente, via Google Fonts CDN)
* `--font-mono` = JetBrains Mono (kicker, meta, valori tecnici, via Google Fonts CDN)

**Border radius:** sm 4px / md 8px / lg 12px / xl 16px / pill 999px.

I token Tailwind v4 (`@theme`) e gli alias `--color-*` legacy sono rimappati al nuovo sistema per compatibilità progressiva con i componenti non ancora migrati.

### Componenti ridisegnati

**App shell.** Nuovo container `.app-shell` flex full-viewport; `.banner-stack` per banner offline e (pronto) update; `.topbar` 52px con gradiente azzurro sul titolo, crumbs dinamiche della vista corrente, `.kbd-pill` "Cerca azioni (Ctrl+K)" e bottone impostazioni.

**Sidebar.** Ridisegno completo: brand mark con glow azure, `.sb-tabs` Feeds/Archivio con active state tintato, `.sb-search` + sort, `.sb-list` con `.feed-item` (border-left azure quando attivo), `.feed-thumb` con 6 tint deterministici via hash URL (iniziali come fallback se manca l'immagine), `.feed-badge` per i nuovi episodi, stati sync-all inline (spinner → check → error), `.sb-footer` con `.btn-primary-sync`, `.folder-pill` e `.sb-version` con dot connessione.

**OnboardHero.** Nuovo componente `OnboardHero.tsx` in sostituzione del vecchio callout: hero full-bleed con mark azure glow, kicker, titolo 44px bold, 3 step cards numerate.

**UrlInput.** Ghost button cartella, campo input con `.drag-hint` contestuale durante drag&drop, pulsante "Analizza" gradient azure.

**EpisodeList.** `.feed-header` con thumbnail 72px, kicker monospace, h2 28px; striscia statistiche monospace (totali · archiviati · selezionati + CTA download); `.ep-row` con stati distinti `selected`/`downloading`/`downloaded`, progress bar azure + speed/eta inline durante il download; lista virtualizzata Virtuoso wrappata in `.ep-list`.

**EpisodeDetailPanel.** Riscritto: 480px, `.detail-cta-row` con primary e ghost actions, sezione archivio in griglia 2-col con checksum SHA-256 formattato in blocchi da 4 caratteri, show notes con paragrafi separati.

**DownloadPanel.** Riscritto: header con spinner ring animato + "N attivi · M in coda" + counter; `.dl-overall` progress 4px con glow; `.dl-item` con stati visual distinti; `.dl-failed` separata a fine batch; `.dl-footer` con hint + stop/pulisci contestuale; `.dl-fab` con badge danger.

**SettingsModal.** Shell con backdrop blur e `.settings-modal` 1040×700; `.settings-nav` 240px con header versione, nav list con active state tinted. I 5 pannelli di categoria (generale/download/metadata/archive/avanzate) ereditano la palette via alias.

**CommandPalette.** `.palette` 640px con shadow e glow azure, input grande, shortcut keys visualizzate (`⌘S`, `⌘A`, `⌘,`), `.feed-thumb tint-N` 24px con hash identico alla sidebar.

**ArchiveView.** Restyling con `.archive-search` input grande + `.archive-stats`, `.section-heading` mono dark, filtri coerenti con i nuovi token.

**IntroScreen.** Struttura invariata; eredita la nuova palette via alias. I selettori lingua usano SVG vettoriali da `country-flag-icons` (fix definitivo per il problema delle emoji su Windows).

### File nuovi e modificati

Nuovo: `src/styles/components.css` (~1100 righe) — tutte le classi del design system; `src/components/OnboardHero.tsx`.

Riscritti: `src/index.css` (token system), `src/App.tsx` (shell + topbar), tutti i componenti UI sopra elencati.

### Note tecniche

Font Inter e JetBrains Mono caricati via Google Fonts CDN; Epilogue, Space Grotesk e Material Symbols restano bundled via `@fontsource/*`. Nessuna breaking change a livello di storage (SQLite, localStorage, settings JSON). Build verificata: lint clean, `tsc --noEmit` clean, Vite build 941 moduli in ~2 secondi.

---

## Riepilogo per numeri

| Categoria | Versioni | Interventi |
|-----------|----------|-----------|
| Fix Linux/cross-platform | v1.0.3 – v1.0.4 | 5 fix |
| Bug critici core (C1–C7) | v1.0.5 – v1.1.0 | 7 fix |
| Bug minori e ottimizzazioni (D1–D11) | v1.1.1 – v1.1.12 | 12 fix + 2 hotfix |
| Feature essenziali (E1–E7) | v1.1.13 – v1.1.17 | 7 feature |
| Feature aggiuntive (F1–F6) | v1.1.18 – v1.1.22 | 6 feature |
| UX e polish (G1–G7 + extra) | v1.2.0 – v1.2.4 | 9 miglioramenti |
| Redesign integrale | v1.3.0 | ~15 componenti ridisegnati |

Totale: **37 versioni**, **46 interventi classificati**, un redesign completo dell'interfaccia.
