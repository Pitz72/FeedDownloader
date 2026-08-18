# Documentazione — Runtime FeedDownloader Pro

Indice di tutta la documentazione del progetto.

---

## Il progetto

| File | Cosa contiene |
|------|---------------|
| [../README.md](../README.md) | Panoramica, caratteristiche, download, privacy, licenza |
| [../LICENSE](../LICENSE) | Licenza **MIT** — © 2026 Simone Pizzi (Runtime Radio) |
| [../SECURITY.md](../SECURITY.md) | Modello di sicurezza, difese anti-SSRF, come segnalare una vulnerabilità |
| [../CONTRIBUTING.md](../CONTRIBUTING.md) | Come contribuire: ambiente, stile, gate di qualità, pull request |
| [ARCHITECTURE.md](ARCHITECTURE.md) | Architettura: processi, IPC, database, motore di download |
| [PIANO-APERTURA.md](PIANO-APERTURA.md) | Piano di apertura del sorgente e ritiro dal commercio (in corso) |
| [academic/paper-it.md](academic/paper-it.md) · [academic/paper-en.md](academic/paper-en.md) | Articolo tecnico sulla progettazione del programma, 🇮🇹 e 🇬🇧 |

---

## Documentazione per chi usa il programma

| File | Lingua | Cosa contiene |
|------|--------|---------------|
| [../README_MASTER.md](../README_MASTER.md) | 🇮🇹 | Guida in-app: tutto quello che il programma sa fare |
| [../README_EN.md](../README_EN.md) | 🇬🇧 | La stessa guida, in inglese |
| [user/QUICKSTART_it.md](user/QUICKSTART_it.md) | 🇮🇹 | Guida rapida: dal primo avvio al primo archivio |
| [user/QUICKSTART_en.md](user/QUICKSTART_en.md) | 🇬🇧 | Quick start |
| [user/manual-it/](user/manual-it/) | 🇮🇹 | Manuale completo in 11 capitoli, sorgente del PDF |
| [user/en-GB/](user/en-GB/) | 🇬🇧 | Manuale completo in inglese, sorgente del PDF |

I due PDF si generano con `node scripts/build-book.cjs` (italiano) e
`node scripts/build-all-books.cjs` (inglese) — vedi [scripts/README.md](../scripts/README.md).

---

## Changelog

Cronologia completa delle versioni in [`changelog/`](changelog/).

| Versione | Data | Tema |
|----------|------|------|
| [1.0.4](changelog/1.0.4.md) | 11 mag 2026 | Compatibilità Linux completata: Wayland nativo, tray double-click, hint GNOME AppIndicator |
| [1.0.3](changelog/1.0.3.md) | 11 mag 2026 | Fix monitor secondario Linux, menu contestuale, sidebar +200px, ricerca e ordinamento A–Z |
| [1.0.0](changelog/1.0.0.md) | 30 mar 2026 | Release Ufficiale — v1.0.0 stabile, infrastruttura auto-update su bridge repository pubblico |
| [0.7.6](changelog/0.7.6.md) | 29 mar 2026 | Health Check: Ripristino Episodi Mancanti — pulsante "Segna come non scaricati", transazione atomica SQLite |
| [0.7.5](changelog/0.7.5.md) | 28 mar 2026 | Supporto NAS/SMB + Electron Auto-Update |
| [0.6.6](changelog/0.6.6.md) | 26 mar 2026 | Filtro Durata Episodi — filtro min/max minuti, parseDurationMinutes (HH:MM:SS/MM:SS/sec), durata in ogni riga |
| [0.6.5](changelog/0.6.5.md) | 26 mar 2026 | Throttling Velocità — limite KB/s configurabile per i download, Transform stream puro Node.js |
| [0.6.4](changelog/0.6.4.md) | 26 mar 2026 | Tagging ID3 Automatico — iniezione metadati (titolo, artista, anno, copertina) nei file .mp3 scaricati |
| [0.6.3](changelog/0.6.3.md) | 26 mar 2026 | Feed Cache + Spinner — cache in-memory 5 min, risposta istantanea ai click ripetuti |
| [0.6.2](changelog/0.6.2.md) | 26 mar 2026 | Fix chiusura app — X termina il processo (rimosso minimize-to-tray) |
| [0.6.1](changelog/0.6.1.md) | 26 mar 2026 | Resume Download — ripartenza automatica dei download interrotti via HTTP 206 Range |
| [0.6.0](changelog/0.6.0.md) | 26 mar 2026 | Health Check Archivio — verifica quali file scaricati esistono su disco, dashboard totale/presenti/mancanti/dimensione |
| [0.5.5](changelog/0.5.5.md) | 26 mar 2026 | Sidecar Metadata .json — file .json opzionale accanto a ogni audio scaricato |
| [0.5.4](changelog/0.5.4.md) | 26 mar 2026 | Template Naming — template personalizzabile per il nome file degli episodi scaricati |
| [0.5.3](changelog/0.5.3.md) | 26 mar 2026 | Sincronizzazione Incrementale Smart — Sync New, ri-analisi feed + coda automatica nuovi episodi |
| [0.5.2](changelog/0.5.2.md) | 26 mar 2026 | Filtro Stato Episodi — All / Da scaricare / Scaricati, localizzato in 8 lingue |
| [0.5.1](changelog/0.5.1.md) | 26 mar 2026 | Security Hardening & Cleanup — nodeIntegration esplicito, rate limit PARSE_FEED, rimozione electron-store |
| [0.5.0](changelog/0.5.0.md) | 22 mar 2026 | UX Upgrade — drag & drop, shortcuts, tray icon, integrity check, ghost 404 |
| [0.4.9](changelog/0.4.9.md) | 21 mar 2026 | Lieve Cleanup — 7 criticità lievi risolte, useOnlineStatus, __APP_VERSION__, ESLint nel build |
| [0.4.8](changelog/0.4.8.md) | 20 mar 2026 | Code Hygiene — utility centralizzata, try/catch push events, fix CSV |
| [0.4.7](changelog/0.4.7.md) | 20 mar 2026 | Timeout Shield — timeout 30s/60s, backoff esponenziale, no reload() |
| [0.4.6](changelog/0.4.6.md) | 20 mar 2026 | SQLite Core — migrazione da electron-store a better-sqlite3 |
| [0.4.5](changelog/0.4.5.md) | 20 mar 2026 | Type Safety — shared/types.ts, 20 `any` eliminati |
| [0.4.4](changelog/0.4.4.md) | 20 mar 2026 | URL Guard — validazione anti-SSRF a 5 livelli |
| [0.4.3](changelog/0.4.3.md) | 20 mar 2026 | True Extension — estensione reale dal URL con whitelist |
| [0.4.2](changelog/0.4.2.md) | 20 mar 2026 | Batch Integrity — BatchTracker con seal window anti race condition |
| [0.4.1](changelog/0.4.1.md) | 20 mar 2026 | Test Foundation — 81 test Vitest, getSafePath estratto |
| [0.4.0](changelog/0.4.0.md) | 24 feb 2026 | Architettura Solida — push events, concorrenza, filtri data, notifiche OS |
| [0.3.x](changelog/0.3.3.md) | feb 2026 | Fix e miglioramenti vari |
| [0.2.x](changelog/0.2.4.md) | feb 2026 | Maturità e documentazione |
| [0.1.x](changelog/0.1.9.md) | feb 2026 | Stabilità e performance |
| [0.0.x](changelog/0.0.9.md) | feb 2026 | Fondamenta e funzionalità core |

---

## Roadmap

- [ROADMAP.md](ROADMAP.md) — __Fonte di verità unica__ — tutti i lavori pendenti post-v1.0.0 (fix tecnici + documentazione)
- [archivio/roadmap_technical_fixes.md](archivio/roadmap_technical_fixes.md) — ⚠️ Archiviato (contenuto integrato in ROADMAP.md)
- [archivio/roadmap_documentation_2026.md](archivio/roadmap_documentation_2026.md) — ⚠️ Archiviato (contenuto integrato in ROADMAP.md)
- [archivio/indicazioni.md](archivio/indicazioni.md) — ⚠️ Archivio storico (tutto completato in v0.7.4)
- [archivio/lungotermine.md](archivio/lungotermine.md) — ⚠️ Archivio storico (tutto completato/abortito in v0.7.5)

---

## Piani chiusi

| File | Chiuso con | Note |
|------|-----------|------|
| [archivio/PIANO-REVISIONE-PRE-RELEASE.md](archivio/PIANO-REVISIONE-PRE-RELEASE.md) | v1.5.0 | Audit del 12 luglio 2026 e lavoro residuo |
| [archivio/PIANO-STANDARD-DISTRIBUZIONE-TITAN.md](archivio/PIANO-STANDARD-DISTRIBUZIONE-TITAN.md) | v1.5.0 | Allineamento allo standard di distribuzione Titan |
| [archivio/aggiornamento-documentazione-roadmap.md](archivio/aggiornamento-documentazione-roadmap.md) | v1.2.4 e seguenti | Aggiornamento della documentazione; il Tier 4 è decaduto |
| [archivio/report_multilingual_verification_2026-03-28.md](archivio/report_multilingual_verification_2026-03-28.md) | v1.4.2 | Verifica delle otto lingue di allora, oggi due |

---

## Report e Analisi

| File | Periodo coperto | Note |
|------|----------------|------|
| [report_stato_attuale_2026-03-21.md](archivio/report_stato_attuale_2026-03-21.md) | v0.5.0 | Verifica codice reale: tutte le criticità chiuse, roadmap medio/lungo termine |
| [report_analisi_v040_rimanenti.md](archivio/report_analisi_v040_rimanenti.md) | post v0.4.0 | ⚠️ Archivio storico |
| [report_analysis_v021.md](archivio/report_analysis_v021.md) | v0.2.1 | ⚠️ Archivio storico |
| [report_verification_code_vs_docs.md](archivio/report_verification_code_vs_docs.md) | v0.0.2 – v0.2.1 | ⚠️ Archivio storico |
| [report_analysis_v013.md](archivio/report_analysis_v013.md) | v0.1.3 | ⚠️ Archivio storico |

---

## Interventi Documentazione

| File | Data | Note |
|------|------|------|
| [docs-cleanup-2026-03-21.md](archivio/docs-cleanup-2026-03-21.md) | 21 mar 2026 | Pulizia e allineamento documentazione — COMPLETATO |
