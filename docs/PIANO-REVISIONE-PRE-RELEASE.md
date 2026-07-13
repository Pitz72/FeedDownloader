# Piano di Revisione Pre-Rilascio — Lavoro Residuo

**Audit originale:** 12 luglio 2026 su v1.3.12 (5 audit paralleli, escluso player audio)
**Ultimo aggiornamento:** 13 luglio 2026

Lo stato di partenza e tutto il lavoro **già completato** è documentato nei log di
sviluppo: le 14 **gravi** (S1–S14) sono state chiuse in **v1.3.13**
([changelog](changelog/1.3.13.md)), i **medi** e ~30 lievi in **v1.3.14**
([changelog](changelog/1.3.14.md)), e l'intera sezione **v1.4.0** (N1, N2, M18, M10,
M9, L3 + feature documentali) in **v1.4.0** ([changelog](changelog/1.4.0.md)). Questo
documento elenca **solo ciò che resta da fare**.

---

## ✅ v1.4.0 — chiusa (13 lug 2026)

N1 (banner update persistente + fix race lingua/timing/retry), N2 (refresh all'avvio +
default 6h + check al ritorno online), M18 (X→tray), M10 (badge via
`currentEpisodeGuids`), M9 (parsing in utility process con fallback in-process), L3
(redirect 301/308 con migrazione identità feed), changelog in-app, manuali PDF in-app
(B1), ARCHITECTURE.md/CONTRIBUTING.md (B3/B4), riconciliazione archivio↔disco all'avvio,
pulizia `.part` orfani. Dettaglio nel [changelog 1.4.0](changelog/1.4.0.md). Suite 312/312.

---

## 🟢 Lievi residui (rifiniture, nessuno bloccante)

### Correttezza minore

* **L9** — Content-Length assente: nessun progresso né check integrità (il download completa comunque, solo UX) — `DownloadService`
* **L10** — "SHA-256 integrity" è solo storage, mai confronto: riformulare la dicitura in doc/marketing o aggiungere verifica reale nel Health Check
* **L14** — La tabella `downloads` cresce per sempre (guid orfani di feed rimossi); `getDownloadedEpisodes` carica tutto in memoria
* **L15** — Double-counting righe archive legacy senza feedUrl condivise per titolo — `DatabaseService.getFeeds:100-106` (area M10)
* **L16** — `SELECT *` in getArchive/exportCSV: NULL passati al renderer come null non undefined
* **L17** — Handler IPC/listener autoUpdater ri-registrabili se la finestra venisse ricreata (percorso oggi morto; rilevante se M18 cambia il lifecycle)
* **L18** — `OPEN_FOLDER` non vincolato a baseDir (impatto minimo)
* **L19** — Con speed-limit il progresso conta byte di rete, non di disco → barra al 100% prima del completamento reale
* **NUOVO (dai test M37)** — `xmlSafety`: la finestra di ispezione di 8192 caratteri è aggirabile con padding prima dell'ENTITY; DTD esterna (`SYSTEM "http://..."`) senza ENTITY inline non flaggata. Mitigato a valle (i parser non espandono entità), ma il guard da solo è bypassabile.

### UI/UX

* **L27** — Cleanup progressi a 2s keyed per URL: "Riscarica" immediato flikkera — `useStore.ts`
* **L28** — Due episodi con lo stesso enclosure URL condividono la entry `downloads` → stesso progresso su entrambe le righe (by design, valutare)
* **L29 (parziale)** — `formatBytes` in EpisodeList ancora con punto decimale fisso (ArchiveView già locale-aware)
* **L37 (parziale)** — Forme `_one` mancanti per `progress.n_failed`, `toast.sync_queued`, `settings.health_and_more` ("1 download falliti")
* **L38** — Immagini remote senza `loading="lazy"`, `onError` fallback iniziali, `referrerPolicy="no-referrer"` (Sidebar/EpisodeList/Palette)
* **L39 (parziale)** — Chiavi orfane storiche nei JSON (`sidebar.invalid_date`, `archive.files_count/podcasts_count`, `onboarding.hint_url/hint_folder`, `episodes.detail_source_link/detail_estimated_size/detail_downloaded_on`, `episodes.count`, `app.language`)
* **L40** — `panelVisible` duplicato in 3 punti con la stessa formula → selettore condiviso nello store
* Focus management completo dei modali (focus trap + ritorno focus all'invocatore) — in v1.3.14 fatto solo il minimo (ESC/aria/autofocus)

### Repo / distribuzione

* **L43** — Build Linux non riproducibile in locale (`build/icons/` PNG generati solo in CI): committare i PNG o script `icons:linux`
* **L44** — `DISTRIBUZIONE/` e `gumroad/` fermi a v1.3.0 (che ha l'auto-update rotto!): **ricaricare gli ZIP aggiornati su Gumroad dopo la prossima release**
* **L45** — Code signing assente: SmartScreen "Unknown publisher" a ogni install/update — citarlo nella pagina di vendita; lungo termine: certificato OV/EV o Azure Trusted Signing
* **L46** — Documenti d'epoca in root (`articolo_annuncio_feeddownloader.md`) → spostare in archivio/MATERIALE
* **L47** — `scripts/` (Vivliostyle PDF) non documentato: una riga in docs su come rigenerare i PDF
* **L48 (residuo)** — Toolchain dev EOL: ESLint 8 + typescript-eslint 7 (flat config), Vite 5 → 7 (electron-builder già portato a 26 in v1.3.14, obbligato da Electron 43)

---

## 🧪 Buchi di test residui

1. **`known_episodes`**: zero test unit sul layer dati (getKnownGuids/markGuidsAsKnown/findNewGuids/removeKnownEpisodes) — la feature v1.3.12 resta scoperta.
2. Utils non testati: `throttleStream`, `validateNetworkPath`, `writeId3Tags`.
3. DatabaseService: `getArchiveByPodcast`, `removeMissingFiles` con array enorme (>32k, ora chunked ma non testato), `touchFeed`, settings corrotti (guardie L1), CSV con valori `=...` (M14), upsert archive con metadati diversi (M13), rolling window `downloaded > episodeCount`.
4. Zero test UI (vitest è `environment: node`, niente jsdom/testing-library) e zero test su `ipc.ts` (>1000 righe) / `main.ts` — estrarre gli handler IPC in funzioni testabili.
5. Nuove superfici v1.3.13/14 senza test dedicati: If-Range/resume (S1), dedup coda (S3), richieste condizionali 304 (M6), dedup pagine (M8), decodifica charset (L4).

---

## 📅 v1.5.0 — Fondamenta residue

* Migrazione ESLint 9 flat config + typescript-eslint 8; Vite 7 (L48)
* M9 parsing in worker (se i feed grandi risultano un problema reale)
* Valutazione ritorno macOS (config rimossa in v1.3.14 perché mai buildata/testata) e code signing (L45)

---

## ✅ Verificato solido (invariato — non toccare)

* SSRF a doppio livello (lessicale + DNS per hop) su feed, paginazione, download, cover ID3 — ora coperto anche da ~50 test.
* XXE/DOCTYPE guard su feed e OPML (con i due limiti noti sopra), cap dimensioni body.
* Preload/CSP/permessi/navigation hardening; AbortController single-settle; rename atomico.
* DB: statement preparati ovunque, WAL, transazioni, migrazione composita (guid, feedUrl) testata, recovery da corruzione testata.
* Renderer: zero XSS, listener IPC StrictMode-safe, Zustand con selettori granulari.
* CI: gate bloccante, artifactName senza spazi (auto-update funzionante), latest.yml Win+Linux.
* TypeScript strict, zero `any`, suite 298/298.
