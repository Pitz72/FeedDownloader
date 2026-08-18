# Piano di Revisione Pre-Rilascio — Lavoro Residuo

> ⚠️ **Archiviato il 18 agosto 2026.** Il lavoro residuo qui elencato è stato chiuso con la
> v1.5.0, e le voci operative (ZIP su Gumroad, PDF sulla repo ponte) sono decadute con
> l'apertura del sorgente. Il piano in corso è [PIANO-APERTURA.md](../PIANO-APERTURA.md).

**Audit originale:** 12 luglio 2026 su v1.3.12 (5 audit paralleli, escluso player audio)
**Ultimo aggiornamento:** 13 luglio 2026

Lo stato di partenza e tutto il lavoro **già completato** è documentato nei changelog:
le 14 **gravi** (S1–S14) in **v1.3.13**, i **medi** e ~30 lievi in **v1.3.14**, l'intera
sezione funzionale **v1.4.0** (N1, N2, M18, M10, M9, L3 + feature documentali), e infine
**tutti i lievi residui di codice + i buchi di test unit-testabili in v1.4.1**
([changelog 1.4.1](changelog/1.4.1.md)). Questo documento elenca **solo ciò che resta**.

---

## ✅ v1.4.1 — chiusa (13 lug 2026)

Rifinitura completa dei 🟢 lievi di codice: L9 (progresso indeterminato), L10 (verifica
SHA-256 reale nell'Health Check), L14 (`DOWNLOADS_UPDATED` senza payload), L15
(double-counting legacy per titolo), L16 (colonne esplicite + null→undefined), L17
(listener autoUpdater idempotenti), L18 (`OPEN_FOLDER` vincolato a baseDir), L19 (progresso
post-throttle), L27 (flicker Riscarica), L28 (documentato by-design), L29 (`formatBytes`
locale-aware unificato), L37 (`_one`), L38 (immagini remote lazy/no-referrer/fallback), L39
(chiavi orfane), L40 (selettore `panelVisible` condiviso), guard XML (padding + DTD esterno),
focus-trap completo dei modali, L43/L46/L47 (icone Linux + archivio + doc `scripts/`).
Buchi di test colmati: `known_episodes`, `throttleStream`, `validateNetworkPath`,
`writeId3Tags`, `format`, `getArchiveByPodcast`, `removeMissingFiles` (chunking), `touchFeed`,
guardie settings, M14/M13, L9/L15/L16. Suite **356/356**. Dettaglio nel changelog.

---

## 🧪 Buchi di test residui (richiedono infrastruttura / refactor)

1. **Handler IPC / `main.ts`**: `ipc.ts` (>1000 righe) e `main.ts` non hanno test —
   servirebbe estrarre gli handler in funzioni pure testabili (include L10 verifica
   Health Check e L18 containment, oggi inline negli handler).
2. **Zero test UI**: vitest è `environment: node` (niente jsdom/testing-library) — coprire
   i componenti richiede aggiungere l'ambiente jsdom.
3. **Superfici di servizio non ancora coperte**: If-Range/resume (S1), dedup coda (S3),
   richieste condizionali 304 (M6), dedup pagine (M8), decodifica charset (L4),
   `FeedParserPool` fallback in-process, riconciliazione archivio, `CLEAN_PART_FILES`.

*(→ candidati per una sessione di test dedicata, insieme all'ambiente jsdom.)*

---

## 📅 v1.5.0 — Fondamenta residue

* Migrazione **ESLint 9** flat config + typescript-eslint 8; **Vite 7** (L48) — RISCHIOSO,
  validare il gate `--max-warnings 0` e l'emissione multi-entry `feedWorker.js`/`main.js`.
* Valutazione ritorno **macOS** (config rimossa in v1.3.14 perché mai buildata/testata) e
  **code signing** (L45: SmartScreen "Unknown publisher").

---

## 🔧 Operativo (fuori codice)

* **L44** — `DISTRIBUZIONE/` e `gumroad/` fermi a v1.3.0 (auto-update rotto!): **ricaricare
  gli ZIP aggiornati su Gumroad dopo la release** (build via `workflow_dispatch` sul bridge).
* Caricare gli 8 PDF manuali su `FeedDownloader-Releases/manuals/` (feature B1 di v1.4.0).

---

## ✅ Verificato solido (invariato — non toccare)

* SSRF a doppio livello (lessicale + DNS per hop) su feed, paginazione, download, cover ID3.
* XXE/DOCTYPE guard su feed e OPML (ora senza la finestra 8192 e con blocco DTD esterni),
  cap dimensioni body.
* Preload/CSP/permessi/navigation hardening; AbortController single-settle; rename atomico.
* DB: statement preparati ovunque, WAL, transazioni, migrazione composita (guid, feedUrl),
  recovery da corruzione — tutti testati.
* Renderer: zero XSS, listener IPC StrictMode-safe, Zustand con selettori granulari.
* CI: gate bloccante, artifactName senza spazi (auto-update funzionante), latest.yml Win+Linux.
* TypeScript strict, zero `any`, suite 356/356.
