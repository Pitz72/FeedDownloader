# Piano di Revisione Totale Pre-Rilascio — FeedDownloader Pro

**Data audit:** 12 luglio 2026
**Versione auditata:** v1.3.12 (master `fe4a826`, pubblicata sul bridge)
**Metodo:** 5 audit paralleli e indipendenti su tutta la codebase (~9.700 righe): processo main Electron, motore download/feed, layer dati SQLite, renderer React, build/CI/test/documentazione. Escluso il player audio come richiesto (nota: nessun componente player è presente nel codice attuale).

---

## Sintesi esecutiva

| Gravità | Trovati | Giudizio |
|---------|---------|----------|
| 🔴 Gravissimi | **0** | Nessun percorso di perdita dati garantita, RCE o XSS. Le difese storiche (SSRF a doppio livello, XXE/DOCTYPE, path traversal, CSP, contextIsolation) sono verificate solide e applicate ovunque. |
| 🟠 Gravi | **14** | Funzioni rotte in uso reale: corruzione silenziosa su resume, episodi senza GUID mai archiviati, doppia istanza, DB corrotto = app inavviabile, 63 chiavi i18n mancanti, dipendenze vulnerabili. |
| 🟡 Medi | **~34** | Leak progressivi, batch che non terminano, UX degradata, performance su archivi grandi. |
| 🟢 Lievi | **~45** | Rifiniture, accessibilità, coerenza, igiene repo. |

La base è sana: la release NON è compromessa da difetti catastrofici, ma i 14 gravi vanno chiusi prima del "rilascio totale".

---

## 🟠 GRAVI — da chiudere prima del rilascio

### Motore download

| ID | Difetto | Dove | Scenario di fallimento | Fix |
|----|---------|------|------------------------|-----|
| **S1** | Resume `.part` senza `If-Range`/ETag → **corruzione audio silenziosa**; sul ramo resume il check Content-Length è saltato del tutto | `DownloadService.ts:71,192-193` | Download interrotto al 40%, l'host aggiorna l'MP3, retry → byte nuovi appesi a prefisso vecchio, file inascoltabile marcato valido in archivio | Inviare `If-Range: <ETag\|Last-Modified>` col `Range`; su resume validare comunque la size totale |
| **S2** | Episodi **senza `<guid>`** scaricati ma mai registrati in downloads/archive | `ipc.ts:359` | Feed che usa solo `<link>`: nessun badge "scaricato", riscaricabile all'infinito, invisibile ad archivio/health check/rilevamento nuovi | Fallback GUID deterministico (hash di enclosure URL o link+pubDate) |
| **S3** | Stesso episodio accodabile due volte → `episodio.mp3` + `episodio_2.mp3` e doppia voce archivio | `ipc.ts:289-298,359-373` | Doppio click o "scarica tutti" premuto due volte | Dedup in coda per guid/URL contro activeDownloads+coda+isDownloaded |

### Layer dati

| ID | Difetto | Dove | Scenario | Fix |
|----|---------|------|----------|-----|
| **S4** | DB corrotto/inapribile all'avvio → **crash senza messaggio, app brickata** (istanza creata a livello modulo, zero try/catch) | `DatabaseService.ts:23-29` + `ipc.ts:24` | Blackout durante checkpoint WAL → l'app non parte mai più senza intervento manuale | try/catch su apertura; su errore rinominare in `.corrupt-<ts>`, ripartire con DB nuovo, `dialog.showErrorBox` |
| **S5** | Migrazioni: `catch {}` ingoia **qualsiasi** errore ALTER (non solo "duplicate column"); niente `PRAGMA user_version` | `DatabaseService.ts:72-81` | Upgrade con disco pieno → ALTER falliti in silenzio → `addArchiveEntry` fallisce → episodi scaricati mai registrati | Filtrare il catch su `duplicate column name` (rilanciare il resto); migrazioni numerate via `user_version` in transazione |
| **S6** | `guid` PRIMARY KEY **globale** su downloads/archive: collisioni tra feed diversi (guid `"1"`, `"2"` frequentissimi) → falsi "già scaricato" o riga archivio scartata | `DatabaseService.ts:40-45,191` | Due podcast con guid non univoci → file su disco orfano, invisibile ovunque | Chiave composta `(guid, feedUrl)` con migrazione — merita una minor dedicata |
| **S7** | `markAsDownloaded` + `addArchiveEntry` non atomici | `ipc.ts:360-361` | Crash tra i due statement → episodio "scaricato" ma assente dall'archivio, per sempre | Metodo `recordDownload(entry)` in unica `db.transaction` (~5 righe) |

### Main process

| ID | Difetto | Dove | Scenario | Fix |
|----|---------|------|----------|-----|
| **S8** | **Manca il single-instance lock** | `main.ts` (assente) | Doppio avvio → due processi sullo stesso SQLite, "database is locked", tray/notifiche/refresh doppi, download duplicati | `app.requestSingleInstanceLock()` + handler `second-instance` → show/focus |

### Renderer

| ID | Difetto | Dove | Scenario | Fix |
|----|---------|------|----------|-----|
| **S9** | Race: risposta stale di `parseFeed` sovrascrive il feed selezionato | `Sidebar.tsx:90-101`, `CommandPalette.tsx:65-75`, `UrlInput.tsx:15-39` | Click A (lento, paginato) poi B (veloce) → in lista compaiono gli episodi di A con B evidenziato; "Scarica tutti" scarica il feed sbagliato | Ref con URL dell'ultima richiesta, scartare risposte non corrispondenti |
| **S10** | **63 chiavi i18n usate nel codice assenti da TUTTI gli 8 JSON** → default inline in italiano mostrati a utenti EN/DE/RU/ZH… (`banner.offline`, `common.close`, `progress.*`, `episodes.tag_*`, `onboarding.step*`, `intro.*`, `crumbs.*`, `cmd.action_*_desc`, ecc.) | trasversale (elenco completo via script diff chiavi) | Utente tedesco vede "Sei offline · i download sono in pausa…" | Aggiungere le 63 chiavi a tutti gli 8 file di lingua |
| **S11** | `stopBatch` non pulisce `downloads`/`speedCache` → righe episodio **congelate in "downloading"** fino a riavvio | `useStore.ts:128-132` + `ipc.ts:409-417,482-493` | Stop batch con file in-flight → spinner e barre ferme per sempre | `set({ downloads: {} })` + `speedCache.clear()` in `stopBatch` |

### Dipendenze e distribuzione

| ID | Difetto | Dove | Scenario | Fix |
|----|---------|------|----------|-----|
| **S12** | `npm audit`: **3 high, 2 moderate** — axios ≤1.15.2 (SSRF bypass NO_PROXY, prototype pollution), fast-xml-parser ≤5.6.0 (DoS via entity expansion), form-data (CRLF) | `package.json` | Il vettore SSRF chiuso a livello app viene riaperto dalla libreria sottostante; feed malevolo può congelare il main | `npm audit fix` (patch disponibili non-breaking) + rilancio suite |
| **S13** | **Electron 30 EOL da ~21 mesi** (Chromium 124, ~2 anni di CVE mancanti) mentre l'app renderizza contenuto remoto | `package.json` | Exploit Chromium noti contro il renderer | Upgrade a Electron in supporto (35+) in release dedicata; script `rebuild:electron` già pronto |
| **S14** | README_*.md **impacchettati in ogni installer** fermi all'era 0.6/0.7 (9 versioni fa) | `README_EN/CN/DE/ES/FR/PT/RU.md` + `build.extraResources` | Ogni utente v1.3.12 legge documentazione preistorica | Aggiornare gli 8 README alla 1.3.x o toglierli da extraResources |

---

## 🟡 MEDI

### Download / feed

| ID | Difetto | Dove | Fix |
|----|---------|------|-----|
| M1 | `reservedTargets` in leak su STOP_BATCH (i pending scartati non eseguono mai il `finally`) → suffissi `_2/_3` spuri fino a riavvio | `ipc.ts:51,298,482-493` | `reservedTargets.clear()` in STOP_BATCH (una riga) |
| M2 | `.part` orfano su abort a metà stream (ramo `onAbort` non rimuove il file; solo il ramo `ERR_CANCELED` lo fa) | `DownloadService.ts:141-146,223-225` | Uniformare i due percorsi; decidere policy resume vs pulizia |
| M3 | `DOWNLOAD_TIMEOUT`/`DOWNLOAD_STALLED` classificati permanenti → niente retry per un buco di rete di 60s | `DownloadService.ts:26-27` | Trattarli come transitori nel loop di retry |
| M4 | Tolleranza integrità 0,1% relativa: su 100 MB tollera ~100 KB mancanti | `DownloadService.ts:198` | Tolleranza assoluta (es. 64 byte) |
| M5 | Budget MAX_PATH non conta `.part` (+5), suffisso `_N`, né folderPath profondi (NAS) → `ENAMETOOLONG` | `getSafePath.ts:19-33` + `ipc.ts:295` | Includere `.part`+margine nel budget; validare il path completo |
| M6 | Nessuna richiesta condizionale (ETag/If-Modified-Since): ogni refresh riscarica TUTTE le pagine di TUTTI i feed → rischio rate-limit (critico se si abilita N2) | `FeedService.ts:22-32` + `ipc.ts:101-137` | Persistere ETag/Last-Modified per feed, gestire 304 |
| M7 | Errore su una pagina successiva della paginazione perde l'intero feed (anche le pagine già raccolte) | `FeedService.ts:121-135` | try/catch per pagina; su errore `break` conservando `allItems` |
| M8 | Nessuna dedup GUID tra pagine → episodi duplicati in UI e conteggi gonfiati | `FeedService.ts:102/127` | Dedup di `allItems` per guid/enclosure |
| M9 | Parsing sincrono fino a 15 MB × 20 pagine sul main thread → freeze UI | `FeedService.ts:92/122` | Worker/utility process, o cap più bassi |

### Layer dati

| ID | Difetto | Dove | Fix |
|----|---------|------|-----|
| M10 | Badge `newCount = episodeCount − downloaded`: sbagliato con rolling window (sempre 0) e con episodi rimossi dal feed (gonfiato); `known_episodes` esiste ma serve solo le notifiche | `DatabaseService.ts:105-116` | Derivare newCount dai guid correnti del feed NOT IN downloads |
| M11 | `known_episodes` cresce senza bound; popolata anche per feed solo "provati" e mai aggiunti; mai potata (e guid instabili ri-notificano gli stessi episodi) | `ipc.ts:216` + `DatabaseService.ts:366-377` | Seed solo per feed in libreria; potatura/cap per feed |
| M12 | **Zero indici** sulle colonne interrogate: `archive(feedUrl/podcastTitle/downloadedAt)`, `known_episodes(feedUrl)` (la PK `(guid,feedUrl)` non copre il lookup per feedUrl → full scan a ogni refresh di ogni feed) | `DatabaseService.ts` init | 4 `CREATE INDEX IF NOT EXISTS` (beneficio immediato su archivi 10k+) |
| M13 | `addArchiveEntry` INSERT OR IGNORE: metadati mai aggiornabili (righe legacy senza feedUrl mai sanate; re-download con template diverso → Health Check segnala file "mancante" che esiste col nome nuovo) | `DatabaseService.ts:191` | `ON CONFLICT(guid) DO UPDATE` sui campi file/integrità |
| M14 | Export CSV senza protezione da formula injection (`=HYPERLINK(...)` da titolo feed malevolo eseguito in Excel) | `DatabaseService.ts:226-231` | Prefisso `'` per valori che iniziano con `= + - @` TAB |
| M15 | Health Check solo manuale; `removeMissingFiles` non chunka la lista guid (>32k placeholder → errore SQLite) | `ipc.ts:743-787`, `DatabaseService.ts:169-177` | Batch da 500; valutare check leggero all'avvio |

### Main process

| ID | Difetto | Dove | Fix |
|----|---------|------|-----|
| M16 | `SET_CONCURRENCY` passa il valore grezzo a PQueue (clamp solo sulla persistenza): `0` → coda bloccata per sempre | `ipc.ts:644-648` | Clamp unico 1..10 usato per entrambi |
| M17 | Rejection non gestite nel timer auto-refresh (tick durante shutdown → unhandledRejection su DB chiuso) | `ipc.ts:167,94-139` | `.catch()` sul tick + guardia in-flight/quitting |
| M18 | La X chiude l'app nonostante esista il tray (timer e download muoiono); `window-all-closed` → quit su tutte le piattaforme | `main.ts:43-93,218-225` | `close` → `hide()` salvo `app.isQuitting` (prerequisito per N2) |

### Renderer

| ID | Difetto | Dove | Fix |
|----|---------|------|-----|
| M19 | Batch mai terminante con enclosure URL duplicati (`batchTotal` conta i dup, il Set li deduplica) | `useStore.ts:97-126` | Dedup degli URL prima di `startBatch` |
| M20 | "Invalid Date" letteralmente a schermo (il try/catch di ArchiveView è inefficace: `toLocaleDateString` non lancia) | `EpisodeList.tsx:71-73`, `EpisodeDetailPanel.tsx:68-70`, `ArchiveView.tsx:19-22` | Guard `isNaN(d.getTime())` → "—" (come già fa Sidebar) |
| M21 | Offline disabilita anche l'Archivio (dati 100% locali) | `App.tsx:258-262` | Bloccare solo la vista feed / le azioni di rete |
| M22 | EpisodeList senza empty state (0 episodi o filtri senza risultati → schermo vuoto) | `EpisodeList.tsx:846-852` | EmptyState come in Sidebar/Archivio/Palette |
| M23 | Command palette mostra scorciatoie fantasma (⌘S/⌘A/⌘, senza alcun handler) | `CommandPalette.tsx:84,112,138` | Registrarle in App.tsx o rimuovere i badge |
| M24 | SettingsModal senza ESC; nessun modale ha focus trap né ritorno focus; role/aria-modal mancanti su Settings/Palette | `SettingsModal.tsx` | ESC + role/aria-modal + autofocus (minimo) |
| M25 | Indicatore "Connesso/Offline" in sidebar non reattivo (`navigator.onLine` letto una volta; `useOnlineStatus` esiste ma non è usato lì) | `Sidebar.tsx:150` | `useOnlineStatus()` |
| M26 | "Sincronizza" accoda i nuovi episodi ma non aggiorna la lista (download "al buio") | `EpisodeList.tsx:499-531` | `setCurrentFeed(freshFeed)` dopo il parse |
| M27 | Enter non protetto durante caricamento (palette e UrlInput) → parse doppi concorrenti | `CommandPalette.tsx:184-193`, `UrlInput.tsx:95` | Early-return se loading |
| M28 | `downloadedGuids.includes()` O(n·m) in filtro+render+contatore: milioni di confronti per keystroke su feed paginati grandi | `EpisodeList.tsx:343,460,485,507,537,590` | `Set` memoizzato |
| M29 | DownloadPanel sottoscrive l'intero oggetto `downloads` → re-render totale a ogni tick di ogni download | `DownloadPanel.tsx:128` | Lookup per-slice dentro QueueRow |
| M30 | Select lingua rotto con codici regionali (`en-US` non matcha nessuna option) | `SettingsModal.tsx:270` | `i18n.language.split('-')[0]` |
| M31 | Righe episodio non accessibili da tastiera (niente tabIndex/role; selezione multipla solo mouse) | `EpisodeList.tsx:79-92` | tabIndex + Enter/Space |
| M32 | Episodio annullato mostrato come completato (check verde + "ARCHIVIATO" su file mai scaricato) | `ipc.ts:318,416` + `EpisodeList.tsx:66` | Flag `cancelled: true` distinto da `completed` |

### Build / repo

| ID | Difetto | Dove | Fix |
|----|---------|------|-----|
| M33 | `build.files` include `node_modules` intero: le lib bundlate da Vite (react, framer-motion, i18next…) finiscono DUE volte nell'asar → installer gonfio di decine di MB | `package.json:104-109` | Spostare in devDependencies ciò che è bundlato dal renderer |
| M34 | Config electron-builder duplicata/morta a livello root (`files`/`extraResources` top-level ignorati) | `package.json:28-41` | Eliminare le righe duplicate |
| M35 | Target macOS dichiarato ma mai buildato/firmato/testato | `package.json` build.mac vs workflow | Rimuovere la sezione mac (o annotare in ROADMAP) |
| M36 | `docs/ROADMAP.md` "fonte di verità" ferma a v1.2.4 (8 release fa) | `docs/ROADMAP.md` | Aggiornare a v1.3.12 + N1/N2 |
| M37 | Zero test su `ipc.ts` (961 righe), `main.ts`, componenti React; utils non testati inclusi **xmlSafety.ts e safeHttp.ts (security-critical)** | `tests/` | Priorità: xmlSafety, safeHttp; poi estrarre gli handler IPC in funzioni testabili |
| M38 | Igiene: `MATERIALE/ gumroad/ screenshot/ brand/ downloads/ *.zip` non ignorati (un `git add .` committa binari e materiale di vendita); `.claude/settings.local.json` e una worktree risultano tracciati nonostante la regola | `.gitignore` | Aggiornare .gitignore + `git rm --cached` |

---

## 🟢 LIEVI (rifiniture)

### Correttezza minore

* **L1** — `getConcurrency`/`getSpeedLimit`: `parseInt` senza guardia NaN su settings corrotti (`DatabaseService.ts:296,329`)
* **L2** — Import OPML: xmlUrl non validati (anche `file://`) e N insert fuori transazione, nessun tetto outline (`LibraryService.ts:172-179`)
* **L3** — 301 permanente non aggiorna l'URL feed in DB → redirect a ogni fetch
* **L4** — Encoding non-UTF-8 senza charset → mojibake in titoli e filename (`FeedService` responseType text)
* **L5** — GUID duplicato nella stessa pagina conta doppio nei "nuovi" (`ipc.ts:126`)
* **L6** — `getEnclosureUrl` prende sempre il primo enclosure, senza preferenza audio (`getEnclosureUrl.ts:17`)
* **L7** — 429 senza rispetto di `Retry-After` (backoff fisso 1/2/4s)
* **L8** — Nomi riservati Windows (CON/PRN/AUX) → filename degenere `.mp3`
* **L9** — Content-Length assente: nessun progresso né check integrità (completa comunque)
* **L10** — "SHA-256 integrity" è solo storage, mai confronto: la dicitura in doc/marketing è fuorviante — riformulare o aggiungere verifica reale nel Health Check
* **L11** — `SET_AUTO_REFRESH_INTERVAL` usa il valore grezzo per il timer di sessione (incoerenza col whitelist DB al riavvio) (`ipc.ts:897-901`)
* **L12** — M3U: titolo feed non sanificato da `\r\n` → iniezione righe nella playlist (`ipc.ts:885`)
* **L13** — `START_DOWNLOAD`: campi non-URL non type-checkati (TypeError su podcastTitle non stringa) (`ipc.ts:263-281`)
* **L14** — `downloads` table cresce per sempre (guid orfani di feed rimossi); `getDownloadedEpisodes` carica tutto in memoria
* **L15** — Double-counting righe archive legacy senza feedUrl condivise per titolo (`DatabaseService.ts:100-106`)
* **L16** — `SELECT *` in getArchive/exportCSV: NULL passati al renderer come null non undefined
* **L17** — `registerIpcHandlers`/listener autoUpdater ri-registrabili se la finestra venisse ricreata; handler catturano `mainWindow` per closure (fragilità, oggi percorso morto)
* **L18** — `OPEN_FOLDER` non vincolato a baseDir (impatto minimo)
* **L19** — Progress con speed-limit conta byte di rete, non di disco → barra al 100% prima del completamento reale

### UI / UX / a11y

* **L20** — Ctrl+K non matcha con CapsLock (`e.key === 'k'`) (`App.tsx:72`)
* **L21** — Ctrl+F morto nella vista Archivio (`App.tsx:75-80`)
* **L22** — Filtro date: mezzanotte UTC vs pubDate locali → off-by-one ai margini (`EpisodeList.tsx:323-336`)
* **L23** — Primo shift-click senza anchor sembra "morto" (`EpisodeList.tsx:418-437`)
* **L24** — Tag "NUOVO" appare solo su riga selezionata — semantica fuorviante (`EpisodeList.tsx:121`)
* **L25** — "Sync completato" (success) anche con 100% feed falliti, seguito da toast d'errore contraddittorio (`Sidebar.tsx:139-140`)
* **L26** — Cestino "Rimuovi" invisibile: opacity 0 sul bottone, hover non legato alla riga (`Sidebar.tsx:352-363`)
* **L27** — Cleanup 2s keyed per URL: "Riscarica" immediato flikkera (`useStore.ts:83-89`)
* **L28** — Due episodi stesso enclosure → progresso condiviso su entrambe le righe
* **L29** — Formati byte/GB con punto decimale fisso non locale-aware (`ArchiveView.tsx:215`)
* **L30** — Placeholder ricerca archivio promette "data, durata" ma filtra solo titolo/show (`ArchiveView.tsx:211`)
* **L31** — `getArchive` fallito mostrato come "archivio vuoto" invece di errore (`ArchiveView.tsx:64-68`)
* **L32** — `loadSettings` senza catch: IPC fallita = unhandled rejection e settings parziali (`SettingsModal.tsx:61-83`)
* **L33** — HelpModal resta aperto "orfano" se Settings viene chiuso dal backdrop (`SettingsModal.tsx:762`)
* **L34** — "Build" in IntroScreen = data odierna a runtime, non data build reale (`IntroScreen.tsx:59`)
* **L35** — Toast: close senza aria-label; durata fissa 3s anche per errori, nessuna pausa su hover (`ToastContext.tsx:77`)
* **L36** — OnboardHero: frasi spezzate in 3 chiavi attorno ai `<kbd>` — intraducibili in de/ru/zh (`OnboardHero.tsx:31-48`)
* **L37** — Plurali: `_one/_other` scelti a mano con `=== 1` (il russo perde la forma "few"); `progress.n_failed` senza `_one` → "1 download falliti"
* **L38** — Immagini remote senza `loading="lazy"`, `onError` fallback, `referrerPolicy` (Sidebar/EpisodeList/Palette)
* **L39** — Chiavi orfane nei JSON di lingua (11 chiavi mai usate)
* **L40** — `panelVisible` duplicato in 3 punti con la stessa formula → selettore condiviso nello store
* **L41** — Virtuoso senza `computeItemKey` per GUID
* **L42** — speedCache module-level mai svuotata su stop (leak contenuto, assorbito da S11)

### Repo / distribuzione

* **L43** — Build Linux non riproducibile in locale (`build/icons/` PNG generati solo in CI)
* **L44** — `DISTRIBUZIONE/` e `gumroad/` fermi a v1.3.0 (che ha l'auto-update rotto!): ricaricare gli ZIP 1.3.12 su Gumroad
* **L45** — Code signing assente (L6 storico): SmartScreen a ogni install/update — citarlo nella pagina di vendita; valutare Azure Trusted Signing a lungo termine
* **L46** — Documenti d'epoca in root (`articolo_annuncio_feeddownloader.md`) → spostare in archivio/MATERIALE
* **L47** — `scripts/` (Vivliostyle PDF) vivo ma non documentato → una riga in docs su come rigenerare i PDF
* **L48** — Toolchain dev EOL: ESLint 8 + typescript-eslint 7, electron-builder 24, Vite 5 → migrazione in release di manutenzione

---

## 🔵 Feature mancanti / previste dalla roadmap

### N1 — Notifica update sempre visibile all'avvio (pianificata, 🔲)

L'audit del main process ha individuato le **cause concrete** del mancato funzionamento attuale:

1. Race sulla lingua: `uiLocale` parte `'en'` e arriva via `SET_LOCALE` dopo; con check a `setTimeout(3000)` la notifica può uscire in inglese.
2. Timing: il check non è agganciato a `ready-to-show`; toast emesse nei primissimi secondi vengono soppresse da Windows/Focus Assist.
3. Nessun retry se `checkForUpdates()` fallisce al boot (rete lenta) — `.catch(console.error)` ingoia tutto.
4. Icona toast: `VITE_PUBLIC/logo.png` potrebbe non esistere in `dist/` a runtime → Windows scarta la toast in silenzio.

**Implementazione consigliata (come da roadmap):** banner/indicatore in-app persistente in topbar con azione "Riavvia e installa" (non affidarsi alla Notification OS), + check spostato dopo `ready-to-show`+`SET_LOCALE` con retry.

### N2 — Check automatico nuovi episodi all'avvio + ciclico (pianificata, 🔲)

`runBackgroundRefresh` esiste già (F3). Serve: run all'avvio post-init, default 6h per nuove installazioni, check al ritorno online. **Prerequisiti emersi dall'audit:** M18 (close-to-tray, altrimenti il ciclo muore alla X), M6 (richieste condizionali ETag/304, altrimenti si martellano gli host a ogni ciclo), M17 (catch sul tick), M11 (bound su known_episodes).

### Altre feature dalla memoria di progetto / roadmap

* **Changelog in-app** (pianificata) — i file esistono già in `docs/changelog/1.x.y.md`: modal o sezione nel HelpModal che li renderizza via react-markdown già presente in deps.
* **B1 — Manuali in-app** (roadmap 🔲): IPC `OPEN_HELP` → `shell.openPath()` sul PDF della lingua corrente + upgrade HelpModal con QUICKSTART.
* **B3 — ARCHITECTURE.md** e **B4 — CONTRIBUTING.md** (roadmap 🔲): utili se il "rilascio totale" prevede visibilità del codice; B2 (scientific paper) è opzionale.

### Feature sensate emerse dall'audit (proposte nuove)

* **Riconciliazione archivio↔filesystem all'avvio** (estensione dell'Health Check esistente): check leggero non bloccante che segnala i file mancanti senza aspettare l'apertura manuale del pannello (da M15).
* **Pulizia `.part` orfani**: azione in Impostazioni → Manutenzione che elenca e rimuove i `.part` non associati a download attivi (conseguenza di M2).
* **Preferenza enclosure audio** su feed multi-enclosure (da L6).
* **Rispetto `Retry-After`** su 429 — cortesia verso gli host, importante se N2 attiva il polling di default (da L7).

---

## 🧪 Buchi di copertura test (gate CI)

1. **`known_episodes` — la feature di punta della v1.3.12 ha zero test** sul layer dati (getKnownGuids/markGuidsAsKnown/findNewGuids/removeKnownEpisodes).
2. **Nessun test di migrazione**: aprire un DB con schema v1.0.0 e verificare che gli ALTER lo portino allo schema corrente.
3. **`xmlSafety.ts` e `safeHttp.ts` non testati** — sono le utility security-critical.
4. Non testati: `applyTemplate`, `throttleStream`, `validateNetworkPath`, `writeId3Tags`, `getArchiveByPodcast`, `removeMissingFiles` (incluso array enorme), `touchFeed`, settings corrotti, CSV con valori `=...`, rolling window `downloaded > episodeCount`.
5. Zero test UI (vitest è `environment: node`) e zero test su ipc.ts/main.ts.
6. Tutti i test DB usano `:memory:` — mai esercitato il percorso file reale (WAL, riapertura).

---

## 📅 Sequenza di lavoro proposta

### v1.3.13 — "Correttezza critica" (hotfix, ~1-2 sessioni)

Fix piccoli e ad alto impatto, quasi tutti poche righe:

* S4 recovery DB corrotto · S5 catch selettivo migrazioni · S7 transazione download+archivio · S8 single-instance lock
* S2 fallback GUID · S3 dedup coda · S11 stopBatch pulito · S9 guard anti-stale parseFeed
* S12 `npm audit fix` · M1 reservedTargets.clear() · M12 quattro CREATE INDEX · M16 clamp concurrency · M17 catch timer
* S10 le 63 chiavi i18n (lavoro meccanico sugli 8 JSON)
* S14 README installer aggiornati · M36 ROADMAP.md aggiornata · M38 .gitignore

### v1.3.14 — "Robustezza download e rifiniture UX" (~2-3 sessioni)

* S1 If-Range + M4 tolleranza assoluta · M2 .part orfani · M3 retry stall/timeout · M7 pagina rotta non perde il feed · M8 dedup pagine · M5 budget path
* M19–M32 (blocco UX renderer: Invalid Date, empty state, archivio offline, ESC/focus, select lingua, Set memoizzato, cancelled≠completed, ecc.)
* M14 CSV injection · M13 upsert archive · M15 chunking health check
* Lievi a scelta dal blocco UI/UX (L20-L42, molti sono da 1-5 righe)

### v1.4.0 — "Notifiche e background" (feature release)

* **N1** banner update in-app persistente (con i 4 fix di causa individuati)
* **N2** check nuovi episodi all'avvio + ciclico (con i prerequisiti M18 close-to-tray, M6 ETag/304, M11 bound known_episodes)
* M10 newCount basato su known_episodes (coerente con N2)
* Changelog in-app + B1 manuali in-app
* Test: known_episodes, migrazioni, xmlSafety, safeHttp (portare il gate a coprire le superfici critiche)

### v1.5.0 — "Fondamenta" (release di manutenzione, worktree dedicata)

* S13 upgrade Electron 35+ (con giro completo ABI better-sqlite3 e test su Win+Linux)
* S6 migrazione schema `(guid, feedUrl)` su downloads/archive
* M33 dieta dipendenze (dedup asar) · M35 rimozione config mac · L48 ESLint 9/Vite/electron-builder
* M9 parsing in worker (se i feed grandi risultano un problema reale)
* L44 refresh distribuzione Gumroad · L45 valutazione code signing

---

## ✅ Verificato solido (non toccare)

* SSRF: doppio livello (validateUrl lessicale + secureLookup con rivalidazione IP a ogni hop/redirect) applicato a feed, pagine successive, download, cover ID3.
* XXE/billion-laughs: `hasDangerousDoctype` su feed e OPML; cap 15MB/pagina, 10MB cover, 5MB OPML.
* Paginazione: loop prevenuto (visited set + MAX_PAGES 20).
* Preload/CSP/permessi/navigation hardening: contextIsolation, API tipizzate, deny-all permessi, CSP restrittiva, openExternal filtrato.
* AbortController: teardown centralizzato single-settle, nessun timer orfano.
* Gestione ENOSPC/404/416/EPERM corretta; rename atomico intra-directory.
* DB: statement preparati ovunque (zero injection), WAL + close pulito, transazioni sulle delete, upsert feed corretto, seed known_episodes anti-valanga.
* Renderer: zero XSS (niente dangerouslySetInnerHTML, stripHtml corretto), listener IPC tutti con unsubscribe (StrictMode-safe), Zustand con selettori granulari, empty state presenti quasi ovunque.
* i18n: gli 8 file di lingua sono perfettamente allineati TRA LORO (il problema S10 è solo di chiavi mancanti ovunque).
* CI: gate bloccante lint+typecheck×2+vitest, glob artifact corretto, latest.yml Win+Linux, artifactName senza spazi (bug storico auto-update resta risolto).
* TypeScript strict, zero `any` nei sorgenti.
