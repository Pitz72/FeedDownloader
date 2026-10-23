# Piano v1.6.0 — audit, funzioni d'archivio, interfaccia «Runtime Violet»

Documento di passaggio tra sessioni (23 ottobre 2026). Ramo di lavoro: `feat/v1.6.0`
(partito da `master` @ `ec89146`, v1.5.1). **Niente è ancora su `master` né pubblicato.**

Richiesta dell'utente, in sintesi: audit approfondito con correzione di tutte le criticità
(gravissime, gravi, medie, lievi); chiarire se si può scaricare «dal giorno X al giorno Y»;
verificare le funzioni e proporre/aggiungere quelle utili a un **downloader di massa per
archiviazione** (non un aggregatore); design omologato a **Titan Desktop** ma nella catena
**viola** del marchio FeedDownloader; riorganizzare l'intera interfaccia. Precisazione
successiva: **app desktop, orientamento orizzontale** — pannelli affiancati, non colonne
impilate da pagina web.

---

## 1. Risposta alla domanda sul periodo

Sì, si poteva già: filtro «Data» (Da/A) + «Scarica tutti» scaricava solo gli episodi filtrati.
Ma era nascosto dietro un pulsante a scomparsa e il pulsante diceva «Scarica tutti», quindi
non si capiva. Nella 1.6.0: fascia filtri sempre visibile con **Periodo** (preset: ultimi
30/90 giorni, 12 mesi, quest'anno, l'anno scorso, date scelte) + **Dal / Al**; il pulsante
dice esattamente cosa fa («Scarica i 23 filtrati»), la conferma riporta periodo, stima dello
spazio, spazio libero e cartella; il pannello a destra mostra la stima in tempo reale.

---

## 2. Criticità trovate (tutte corrette nel ramo, salvo dove indicato)

### Gravi
1. **SHA-256 e dimensione registrati PRIMA dei tag ID3** (`ipc.ts`, START_DOWNLOAD): con
   l'ID3 attivo ogni MP3 risultava «corrotto» alla Verifica e la riparazione per impronta
   falliva. Ora: tag → hash/metadati → registrazione. Per i file già colpiti: azione
   «Accetta i file attuali come riferimento» (REBASELINE_ARCHIVE).
2. **`NodeID3.write` distruttivo e sincrono**: cancellava i tag dell'editore (capitoli,
   commenti, copertina) e bloccava il main process leggendo/riscrivendo l'intero file. Ora
   `NodeID3.Promise.update`, copertina aggiunta solo se assente.
3. **Archivio legato alla cartella CORRENTE**: le righe avevano solo nome file + podcast;
   cambiando cartella in Impostazioni (senza migrare) l'intera libreria diventava «mancante»,
   con l'invito a «segnare come da scaricare» → rischio di riscaricare tutto. Ora colonna
   `archive.baseDir` (backfill all'avvio), risoluzione con fallback (`resolveArchivedPath`),
   scelta esplicita «Sposta l'archivio / Solo per i nuovi download».
4. **Offline: il banner prometteva «download in pausa» ma nulla li fermava**: un calo di rete
   svuotava un batch in fallimenti in un minuto (3 tentativi ravvicinati). Ora pausa
   automatica della coda (`NOTIFY_OFFLINE`, `pauseReason: 'offline'`) e ripresa al ritorno.
5. **Download singoli invisibili**: il pannello compariva solo durante un «batch»; un download
   avviato dalla riga non si vedeva, non si poteva fermare né mettere in pausa. Ora vista
   **Download** permanente (coda / non riusciti / completati) + stato nella barra in alto.

### Medie
6. Coda persa a ogni chiusura/crash → tabella `pending_downloads`, offerta di ripresa all'avvio.
7. «Sincronizza» del feed accodava TUTTI gli episodi mancanti senza conferma → rimosso;
   «Aggiorna» ricarica il feed, lo scaricamento passa sempre dalla conferma.
8. Estensione dedotta solo dall'URL: senza estensione ogni file diventava `.mp3` anche se
   M4A/MP4 → `extractExtension(url, mime)` con il `type` dell'enclosure.
9. Import OPML sovrascriveva titolo e azzerava la copertina dei feed già presenti → `INSERT OR IGNORE`.
10. Limite di banda per singolo file (3 paralleli × 500 KB/s = 1,5 MB/s) → `SharedRateLimiter` globale.
11. `getFeeds()` caricava l'intera tabella downloads + JSON di ogni feed a OGNI download
    completato (quadratico su librerie grandi) → calcolo in SQL (`json_each`).
12. Pannello dettaglio: `getArchive()` dell'intero archivio a ogni apertura e a ogni download → `GET_ARCHIVE_ENTRY`.
13. Payload del feed duplicato (`items` + `episodes`) tra worker, main e renderer → `items` eliminato.
14. Nuovo feed senza baseline: badge vuoto e episodi usciti prima del primo controllo mai
    annunciati → seeding in ADD_FEED dalla cache del parse.
15. Aprire a mano un feed con archivio automatico «consumava» i nuovi episodi (segnati come
    noti) → in PARSE_FEED si accodano prima di marcarli.
16. Migrazione parziale: cartella ripuntata anche se metà podcast non si spostava → `baseDir`
    aggiornato per podcast spostato; migrazione possibile anche dalla cartella predefinita.
17. M3U ordinato per stringa RFC 822 (ordine per giorno della settimana) → ordinamento per data vera.
18. «Mostra nella cartella» cercava per podcast + TITOLO (sbagliava con titoli duplicati) → per guid + feed.
19. Verifica integrità: hash dell'intero archivio senza avanzamento né stop (ore su NAS) →
    modalità **Rapida** (presenza + dimensione) / **Completa** (SHA-256), avanzamento, «Ferma».
20. User-Agent di default `axios/1.x` rifiutato da diverse CDN → UA identificabile ovunque.
21. Sidecar: «Ep.mp3» ed «Ep.m4a» condividevano «Ep.json» (sovrascrittura) → anche il sidecar
    è riservato nel controllo collisioni.
22. Menu Electron di default nei build: Ctrl+R ricaricava l'interfaccia a metà download,
    Ctrl+Shift+I apriva DevTools → `Menu.setApplicationMenu(null)` nei build; zoom gestito a mano.
23. Font da Google Fonts a ogni avvio (rete + IP a terzi) → Inter e Fira Code inclusi.
24. Accessibilità: testo a 9–10 px, contrasti ~3:1 (`--fg-4`), azioni visibili solo al
    passaggio del mouse, toast di 3 s non sospendibili → design system verificato WCAG 2.2 AA.

### Lievi
25. Anno ID3 «NaN» con date non valide. 26. Notifiche in inglese se la lingua arrivava come
«it-IT». 27. Codice errore con il messaggio attaccato («DISK_FULL: …») → la tabella errori non
lo riconosceva. 28. CSV senza URL del feed, file e cartella. 29. Template accettato di
qualunque lunghezza. 30. `index.html` con `lang="en"` fisso e favicon inesistente. 31. Ctrl+A
apriva l'Archivio invece di selezionare gli episodi. 32. Concorrenza nelle Impostazioni solo
1/3/5 (il main accetta 1–10). 33. Etichetta «SHA-256 verificato» per un'impronta solo
registrata. 34. Numero «#01» della riga era l'indice filtrato, non il numero d'episodio.

---

## 3. Funzioni nuove per l'archiviazione (fatte nel main, UI in corso)
- **Archivio automatico per feed** (colonna `feeds.autoDownload`): i nuovi episodi trovati
  dai controlli vengono accodati da soli; all'attivazione si chiede se scaricare anche i mancanti.
- **Coda persistente** con ripresa dopo chiusura/crash.
- **Pausa automatica offline**.
- **Sidecar arricchito** (`feeddownloader.episode/1`: note, numerazione, enclosure, impronta…)
  + `podcast.json` e `cover.*` per cartella (opzione «Salva i metadati accanto ai file»).
- **Token** `{season}` `{episode}` nel modello dei nomi.
- **Controlla tutti** su richiesta (`REFRESH_ALL`, avanzamento, riepilogo).
- **Verifica Rapida/Completa**, «Accetta come riferimento», riparazione su tutte le cartelle.
- **5 tentativi** per download; stima dello spazio con la dimensione dichiarata dal feed.
- **Accessibilità** (standard Titan): zoom 80–180 % (Ctrl +/−/0), «Riduci animazioni».

Suggerite ma non fatte (da proporre all'utente): finestra oraria di download (es. solo di
notte), deduplica tra feed per impronta, sottocartelle per anno nel modello dei nomi,
esportazione JSON del catalogo, autenticazione per feed privati con utente/password.

---

## 4. Stato del codice

### Fatto e verificato
- Main: `shared/types.ts`, `shared/buildDownloadRequest.ts`, `electron/ipc.ts` (enqueueDownload
  unico, run counters, QUEUE_STATE, pending, offline, refresh, health, rebaseline, zoom…),
  `DatabaseService`/`LibraryService`, `DownloadService`, `FeedService`, utils, `main.ts`,
  `preload.ts` (tipo `Api` esportato; `src/vite-env.d.ts` lo usa).
- Test main-side: **413/413 verdi** (+19 nuovi: `tests/DatabaseV16.test.ts`,
  `tests/buildDownloadRequest.test.ts`, casi in applyTemplate/extractExtension/throttle/ID3).
- Design system: `src/theme/palette.css` (fonte unica), `src/theme/contrast-checks.json`,
  `scripts/check-contrast.mjs` (**59/59 coppie AA**), `scripts/check-locales.mjs`,
  primitive in `src/components/ui/` (Button, Controls, Dialog con variante `right` e `bare`,
  Toast, ConfirmDialog), `src/index.css`, `src/lib/*`, store riscritto.
- Viste scritte: TopBar, Sidebar, IntroScreen (omologata a Titan, viola), FeedView **già in
  layout orizzontale** (elenco + pannello fisso a destra ≥1280 px, finestra sotto),
  EpisodeRow, EpisodeDetail (EpisodePanel/EpisodeDialog), DownloadsView, ArchiveView,
  AddFeedDialog, HealthCheckDialog, SettingsDialog, CommandPalette, DocsDialogs, LibraryHome.
- `tsc` (renderer e main), ESLint, `check:locales`: puliti.
- Banco di prova UI: `npm run preview:ui` → http://localhost:5198 (`scripts/ui-preview/`,
  mock in `mock-api.ts`; parametri `?empty ?offline ?pending ?whatsnew ?reduce`).
  NB: nel pannello browser il ridimensionamento a 1440×900 fa sembrare la pagina «piccola in
  alto a sinistra»: è un effetto dello screenshot, il layout misura correttamente (verificato via JS).

### Da fare (in quest'ordine)
1. **Layout orizzontale delle viste restanti** (richiesta esplicita dell'utente):
   - `DownloadsView`: intestazione compatta su una riga; corpo a due colonne — coda (attivi +
     in attesa, scorrimento proprio) a sinistra; a destra colonna fissa (~420 px) con
     download interrotti, non riusciti e completati. Togliere i `customScrollParent` su
     `#main-content`: ogni pannello scorre per conto suo.
   - `ArchiveView`: colonna sinistra (~280 px) con ricerca, elenco dei podcast con conteggi
     (clic = filtro), periodo; tabella a destra con scorrimento proprio.
   - `LibraryHome`: cruscotto a tutta larghezza — tabella di tutti i feed (titolo, da
     scaricare, archiviati, automatico, ultimo controllo; clic = apri) e colonna destra con
     stato coda, azioni rapide, scorciatoie. Benvenuto (libreria vuota) a due colonne.
   - `SettingsDialog`: `size="xl"` e **schede verticali a sinistra** (aggiungere
     `orientation="vertical"` a `Tabs`: frecce su/giù, `aria-orientation`).
   - Controllare a 960×620 (minimo finestra), 1366×768, 1920×1080 e zoom 125 %/180 %.
2. **Test renderer**: riscrivere `tests/useStore.test.ts` per il nuovo store (non esistono
   più startBatch/incrementBatch/batchFailed; ci sono failures, retryFailures, completed,
   queueState, stopQueue). Poi `npm test` completo (pretest/posttest fanno lo switch ABI).
3. **Verifiche**: `npm run lint`, `npm run check:locales`, `npm run check:contrast`,
   `tsc` + `tsc -p tsconfig.electron.json`; ESLint su `scripts/ui-preview/*.ts` (fuori da
   tsconfig: valutare un `tsconfig` per il banco di prova).
4. **CSP** in `electron/main.ts`: togliere `fonts.googleapis.com` / `fonts.gstatic.com`
   (font ora inclusi).
5. **Prova nell'app vera** (`npm run dev`): aggiungere un feed reale, scaricare un periodo,
   pausa/ripresa, stacco di rete (pausa automatica), chiusura con coda piena e ripresa,
   archivio automatico con «Controlla i feed», Verifica rapida e completa con ID3 attivo,
   cambio cartella «solo per i nuovi».
6. **Documentazione**: `package.json` → 1.6.0; `docs/changelog/1.6.0.md`; note in-code
   `'1.6.0'` in `src/lib/releaseNotes.ts` (IT/EN); `README_MASTER.md` e `README_EN.md`
   (sono la Guida in-app: descrivono la vecchia interfaccia); `README.md`, `CONTRIBUTING.md`
   (nuovi script `check:*`, `preview:ui`), `docs/ROADMAP.md`; job `verify` di
   `.github/workflows/build.yml` con `check:locales` e `check:contrast`.
   I manuali PDF in `docs/user/` vanno rivisti contro la nuova interfaccia: lavoro a parte,
   da proporre come sessione separata.
7. **Git**: commit sul ramo, poi merge in `master` + push (protocollo del progetto). La
   release (workflow_dispatch) solo su conferma dell'utente.
8. **Memoria**: aggiornare `project_next_session_backlog.md` / `MEMORY.md`.
