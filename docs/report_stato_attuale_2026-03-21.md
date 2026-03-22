# Report: Stato Attuale e Piano di Sviluppo

> Generato il 21 marzo 2026. Aggiornato il 22 marzo 2026 dopo il rilascio di v0.5.0.
> Verifica effettuata confrontando il codice sorgente reale con la documentazione delle criticità.
> **Versione corrente: v0.5.0**

---

## ✅ Tutto ciò che è stato risolto o implementato

### Criticità dal report v0.4.0 — tutte chiuse

| # | Criticità | Priorità | Risolto in |
|:-:|-----------|:--------:|:----------:|
| 1 | Notifica OS hardcoded in italiano | 🟡 Media | **v0.4.10** |
| 2 | `fetchDownloaded()` fuori da `useEffect` | 🟡 Media | Accettabile — pattern `[]` deps valido |
| 3 | IntroScreen non skippabile | 🟡 Media | **v0.4.10** |
| 4 | `<img>` senza `alt` in Sidebar | 🟢 Lieve | v0.4.9 |
| 5 | Import `package.json` nel Renderer | 🟢 Lieve | v0.4.9 |
| 6 | Codice debug residuo in `main.ts` | 🟢 Lieve | v0.4.9 |
| 7 | `isOnline` statico in EpisodeList | 🟢 Lieve | v0.4.9 |
| 8 | `downloads` Record senza cleanup | 🟢 Lieve | v0.4.9 |
| 9 | ESLint non integrato nel build | 🟢 Lieve | v0.4.9 |
| 10 | `dist-electron` non in `.gitignore` | 🟢 Lieve | v0.4.9 |

**La fase di bonifica è completamente chiusa.**

---

### Funzionalità implementate nel progetto (v0.4.x)

| Feature | Versione |
|---------|---------|
| Architettura push events (no polling) | v0.4.0 |
| Download paralleli configurabili (1 / 3 / 5) | v0.4.0 |
| Filtri per data di pubblicazione | v0.4.0 |
| Statistiche archivio (dashboard) | v0.4.0 |
| Notifiche OS al completamento batch | v0.4.0 |
| Suite test Vitest (189 test) | v0.4.1 |
| `getSafePath` estratto e testato | v0.4.1 |
| BatchTracker con seal window anti race condition | v0.4.2 |
| Estensione reale dal URL con whitelist | v0.4.3 |
| Validazione anti-SSRF a 5 livelli | v0.4.4 |
| `shared/types.ts` — 20 `any` eliminati | v0.4.5 |
| Migrazione da `electron-store` a SQLite (WAL) | v0.4.6 |
| Timeout 30s/60s + backoff esponenziale | v0.4.7 |
| `pushEvent` helper centralizzato + try/catch | v0.4.8 |
| Fix CSV export | v0.4.8 |
| Hook reattivo `useOnlineStatus` | v0.4.9 |
| Costante build-time `__APP_VERSION__` | v0.4.9 |
| Cleanup ritardato `downloads` Record (2s) | v0.4.9 |
| ESLint come primo step del build | v0.4.9 |
| Notifiche OS localizzate in 8 lingue | v0.4.10 |
| IntroScreen skippabile (click + pulsante) | v0.4.10 |
| Canale IPC `SET_LOCALE` per sync locale Main | v0.4.10 |
| Drag & Drop URL RSS sull'input | v0.5.0 |
| Scorciatoie tastiera: Esc (modali), Ctrl+F (filtro) | v0.5.0 |
| Tray icon — minimizza nella barra di sistema | v0.5.0 |
| Verifica integrità file (Content-Length vs bytes scritti) | v0.5.0 |
| Rilevamento episodi ghost (404) con toast dedicato | v0.5.0 |

---

## 🔲 Non ancora considerato — Sviluppi futuri

Nessun blocco critico aperto. Tutto ciò che segue è sviluppo opzionale, ordinato per rapporto utilità/complessità.

### ✅ ~~Breve termine~~ — COMPLETATO in v0.5.0

Tutte le 5 feature breve termine sono state implementate. Vedi [changelog/0.5.0.md](changelog/0.5.0.md).

### 🟡 Medio termine — complessità media, valore archivistico diretto

| Feature | Motivazione | Riferimento tecnico |
|---------|-------------|---------------------|
| **Sidecar metadata `.json`** | Show notes + metadati accanto al file audio | 1 write extra per download in `DownloadService` |
| **Template naming personalizzabile** | `[YYYY-MM-DD] - [Podcast] - [Titolo].mp3` | UI in Impostazioni + logica in `getSafePath` |
| **Resume HTTP 206** | Riprende download interrotti senza ripartire | `axios` header `Range`, gestione file `.part` |
| **Health Check archivio** | Verifica che i file DB esistano ancora su disco | Cross-reference `archive` table vs `fs.exists()` |
| **Tagging ID3** | Metadati nel file audio (titolo, artista, cover) | Libreria `node-id3` o `music-metadata` |
| **Throttling velocità** | Evita saturazione rete / ban CDN | Opzione KB/s in `QueueService` |
| **Filtri avanzati** | Keyword nel titolo, durata episodio | Filtro lato Renderer su array `episodes` |
| **Electron Auto-Update** | Aggiornamento automatico via `electron-updater` | Richiede server di distribuzione o GitHub Releases |

### 🔴 Lungo termine — alta complessità

| Feature | Motivazione | Riferimento tecnico |
|---------|-------------|---------------------|
| **Auto-sync schedulato** | Scarica nuovi episodi automaticamente | `node-cron` + stato "feed monitorato" in SQLite |
| **Supporto feed video** | YouTube/video podcast con `yt-dlp` | Dipendenza esterna, gestione formati complessa |
| **Player audio integrato** | Ascolto diretto nell'app | `<audio>` HTML5 + WaveSurfer.js |
| **Archivio cloud** | Backup su S3 / Google Drive / Dropbox | Multi-provider, gestione credenziali sicure |
| **Migrazione archivio (NAS/drive)** | Sposta file + DB su altro percorso | UI wizard + aggiornamento path in SQLite |
| **Pre-allocazione spazio disco** | Controllo preventivo prima del batch | Somma `Content-Length` vs `statvfs` |

---

## 📋 Changelog di riferimento

| Versione | Tema |
|----------|------|
| [v0.5.0](changelog/0.5.0.md) | UX Upgrade — drag & drop, shortcuts, tray icon, integrity check, ghost 404 |
| [v0.4.10](changelog/0.4.10.md) | Media Cleanup — notifiche OS localizzate, IntroScreen skippabile |
| [v0.4.9](changelog/0.4.9.md) | Lieve Cleanup — 7 criticità lievi, useOnlineStatus, __APP_VERSION__ |
| [v0.4.8](changelog/0.4.8.md) | Code Hygiene — utility centralizzata, try/catch, fix CSV |
| [v0.4.7](changelog/0.4.7.md) | Timeout Shield — timeout 30s/60s, backoff esponenziale |
| [v0.4.6](changelog/0.4.6.md) | SQLite Core — migrazione da electron-store |
| [v0.4.5](changelog/0.4.5.md) | Type Safety — shared/types.ts, 20 `any` eliminati |
| [v0.4.4](changelog/0.4.4.md) | URL Guard — validazione anti-SSRF a 5 livelli |
| [v0.4.3](changelog/0.4.3.md) | True Extension — estensione reale dal URL |
| [v0.4.2](changelog/0.4.2.md) | Batch Integrity — BatchTracker seal window |
| [v0.4.1](changelog/0.4.1.md) | Test Foundation — 81 test Vitest |
| [v0.4.0](changelog/0.4.0.md) | Architettura Solida — push events, concorrenza, filtri, notifiche |
