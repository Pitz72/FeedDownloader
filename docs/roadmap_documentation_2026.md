# Roadmap Documentazione Multilingua: FeedDownloader Pro (v0.7.5)

**Data:** 28 marzo 2026
**Obiettivo:** Creare un ecosistema documentale completo (User + Tech + Academic) in 8 lingue per la distribuzione professionale del software.

---

## 1. Architettura della Documentazione

Il set documentale sarà diviso in tre livelli:

### Livello 1: Utente Finale (End-User) - 8 Lingue
*   ✅ **`README_USER_<lang>.md`**: Pagina di benvenuto, filosofia "Database-First" e requisiti.
*   ✅ **`QUICKSTART_<lang>.md`**: Guida rapida in 5 passi (Analisi, Destinazione, Download, Gestione, Export).
*   ✅ **`USER_MANUAL_v075_<lang>.md`**: Manuale esteso con dettagli su: *(IT completato in docs/user/manual-it/ — 12 capitoli)*
    *   Gestione NAS/SMB (Timeout 8s).
    *   Template di rinomina file (Tokens).
    *   Integrità SHA-256 e metadati.
    *   Migrazione archivio e Health Check.
    *   Troubleshooting (Errori 404, SSRF, Spazio Disco).

### Livello 2: Tecnico/Sviluppatore (Developer) - IT/EN
*   **`ARCHITECTURE.md`**: Dettaglio su Electron IPC, schema SQLite, Service Layer e validazione SSRF a 5 livelli.
*   **`CONTRIBUTING.md`**: Standard di codifica, setup ambiente e workflow Vitest.

### Livello 3: Scientifico/Accademico (Academic) - IT/EN
*   **`SCIENTIFIC_PAPER_FEEDDOWNLOADER_V075_<lang>.md`**: Articolo tecnico-scientifico focalizzato su:
    *   Resilienza dei dati audio nell'era digitale.
    *   Architettura "Database-First" vs "Filesystem-Only".
    *   Sicurezza nelle applicazioni desktop: Difesa proattiva contro SSRF.
    *   Metodologie di download resiliente e stall detection.

---

## 2. Piano Operativo (Fasi di Esecuzione)

### Fase 1: Consolidamento Master (Italiano) - ✅ COMPLETATA (28 marzo 2026)
1.  ✅ **Redazione Manuale Esteso (IT):** 12 capitoli scritti in `docs/user/manual-it/`.
2.  ✅ **Revisione linguistica (IT):** Tutti i 12 capitoli revisionati (prosa tecnica, uniformazione terminologica, preparazione alla traduzione).
3.  **Redazione Scientific Paper (IT):** non avviata.

### Fase 2: Localizzazione Core (Inglese) - ✅ COMPLETATA (28 marzo 2026)
1.  ✅ Traduzione professionale del Manuale in Inglese (EN-GB) — 12 file in `docs/user/en-GB/`.

### Fase 3: Localizzazione Massiva (6 Lingue rimanenti) - ✅ COMPLETATA (28 marzo 2026)
1.  ✅ Traduzione del Manuale in FR, DE, ES, PT, RU, ZH — 12 file per lingua, cartelle `fr-FR/`, `de-DE/`, `es-ES/`, `pt-PT/`, `ru-RU/`, `zh-CN/`.
2.  ✅ Terminologia UI coerente per ogni lingua, nomi file identici all'originale italiano.

### Fase 4: Integrazione e Build - ✅ IN COMPLETAMENTO
1.  [ ] Integrazione dei nuovi file nel sistema di Help dell'app (aggiornamento `ipc.ts` se necessario).
2.  ✅ **Generazione PDF editoriale** del manuale in tutte le 8 lingue completata con successo tramite Vivliostyle (Paged Media).

---

## 3. Dettaglio Contenuti (Esempio Struttura Paper)

**Titolo:** *Archiviazione Resiliente di Asset Audio: L'approccio Database-First in FeedDownloader Pro*
- **Abstract:** La fragilità dei feed RSS e la persistenza dei dati.
- **Introduction:** Il problema dei contenuti "Ghost" e la centralizzazione dei CDN.
- **Technical Architecture:** 
    - Il ruolo di SQLite nella persistenza dello stato.
    - Gestione dei thread e concorrenza configurabile.
- **Network Resilience:** Analisi dei meccanismi di timeout e verifica SHA-256.
- **Security:** Implementazione della validazione SSRF a 5 livelli in ambiente Electron.
- **Conclusions:** Risultati sperimentali su archivi di >10.000 episodi.

---

## 4. Prossimi Passi Immediati
- ✅ Creazione del folder `docs/user/` e `docs/academic/`.
- ✅ Stesura e revisione del **User Manual (IT)** — 12 capitoli completi.
- ✅ Localizzazione del manuale in 7 lingue (EN-GB, FR, DE, ES, PT, RU, ZH).
- ✅ Generazione **PDF editoriale** del manuale in tutte le 8 lingue completata (script `build-all-books.cjs`).
- [ ] Stesura della prima bozza del **Scientific Paper (IT)**.

---
*Piano approvato per la distribuzione Ecosystem Runtime | Digital Core.*
