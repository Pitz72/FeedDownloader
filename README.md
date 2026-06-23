# 🎙️ Runtime FeedDownloader Pro

> **Il modo più potente per archiviare i tuoi podcast.**

![Version](https://img.shields.io/badge/version-1.3.12-blue)
![Build](https://github.com/Ecosystem-Runtime/FeedDownloader/actions/workflows/build.yml/badge.svg)
![Electron](https://img.shields.io/badge/Electron-30-47848F?logo=electron)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Windows](https://img.shields.io/badge/Windows-0078D6?logo=windows&logoColor=white)
![macOS](https://img.shields.io/badge/macOS-000000?logo=apple&logoColor=white)
![Linux](https://img.shields.io/badge/Linux-FCC624?logo=linux&logoColor=black)

## Panoramica

**Runtime FeedDownloader Pro** è un'applicazione desktop per l'archiviazione massiva di podcast RSS. Scarica, organizza e cataloga episodi da qualsiasi feed RSS con resilienza di rete, download paralleli configurabili e un'interfaccia moderna.

### ✨ Caratteristiche Principali

- 📚 **Libreria Feed Permanente** — Barra laterale ridimensionabile con tutti i feed salvati, badge "N nuovi episodi", ricerca e ordinamento A–Z (v1.1.x–v1.2.3)
- 🗂️ **Vista Archivio** — Tab dedicata per consultare e cercare l'intero archivio di episodi scaricati (v1.1.22)
- 📥 **Pannello Download** — Drawer laterale con coda, velocità, tempo stimato e log errori per ogni batch; FAB minimizzato (v1.2.3)
- 📝 **Dettaglio Episodio** — Click su un episodio apre un pannello con metadati completi, dati archivio (checksum, bitrate) e show notes (v1.2.2)
- ⌨️ **Palette Comandi (Ctrl+K)** — Accesso rapido a tutte le azioni principali e ai feed salvati (v1.2.4)
- 🔁 **Aggiornamento Automatico Feed** — Timer in background (6/12/24h) con notifica OS per i nuovi episodi (v1.2.0)
- ☑️ **Selezione Multipla** — Ctrl+click / Shift+click per scaricare interi intervalli di episodi (v1.1.18)
- 🎶 **Export Playlist M3U** — Genera playlist compatibili con qualsiasi player audio locale (v1.1.21)
- ⚡ **Velocità e Tempo Stimato** — Visualizzati inline per ogni download attivo (v1.1.19)
- 🔄 **Sync All con progresso per-feed** — Ogni feed mostra spinner/✓/✗ durante la sincronizzazione globale (v1.2.2)
- 🚀 **Auto-Update** — Aggiornamenti automatici integrati tramite GitHub (v0.7.5)
- 🔌 **Supporto NAS/SMB** — Validazione automatica e timeout per percorsi di rete (v0.7.5)
- 🛡️ **Integrità Dati** — Checksum SHA-256 e metadati audio (bitrate/Hz) post-download (v0.7.4)
- 📂 **Migrazione Archivio** — Sposta l'intera libreria in un nuovo percorso con un click (v0.6.10)
- 🧠 **Smart Truncate** — Prevenzione automatica dei limiti `MAX_PATH` di Windows
- 💾 **Download Resilienti** — Timeout 30s/60s, retry con backoff esponenziale, file `.part`, protezione disco pieno
- 🔒 **URL Validation** — Protezione anti-SSRF a 5 livelli
- 🩺 **Health Check** — Ripristino automatico degli episodi mancanti su disco (v0.7.6)
- ⚙️ **Concorrenza Configurabile** — 1, 3 o 5 download paralleli
- 🧪 **Test Suite** — ~189 test automatici con Vitest
- 🌍 **8 Lingue** — IT, EN, FR, DE, ES, PT, RU, ZH
- 📂 **OPML / CSV** — Importa, esporta e cataloga

### 🌐 Documentation

| Lingua | Guida |
|--------|-------|
| 🇮🇹 Italiano | [README_MASTER.md](README_MASTER.md) |
| 🇬🇧 English | [README_EN.md](README_EN.md) |
| 🇫🇷 Français | [README_FR.md](README_FR.md) |
| 🇩🇪 Deutsch | [README_DE.md](README_DE.md) |
| 🇪🇸 Español | [README_ES.md](README_ES.md) |
| 🇵🇹 Português | [README_PT.md](README_PT.md) |
| 🇷🇺 Русский | [README_RU.md](README_RU.md) |
| 🇨🇳 中文 | [README_CN.md](README_CN.md) |

### 📋 Changelog

La cronologia completa delle versioni si trova in [`docs/changelog/`](docs/changelog/).

## Download

| Piattaforma | Formato | Link |
|---|---|---|
| Windows 10/11 | NSIS Installer (`.exe`) | [GitHub Releases](https://github.com/Ecosystem-Runtime/FeedDownloader-Releases/releases) |
| Linux | AppImage / `.deb` | [GitHub Releases](https://github.com/Ecosystem-Runtime/FeedDownloader-Releases/releases) |

I build sono prodotti da GitHub Actions con trigger manuale (workflow dispatch). macOS non è attualmente distribuito tramite CI.

## Quick Start (sviluppo)

```bash
# Installa dipendenze
npm install

# Avvia in modalità sviluppo
npm run dev

# Build locale (no publish)
npm run build

# Build + publish su GitHub Releases (richiede tag v*)
npm run release
```

## Stack Tecnologico

| Layer | Tecnologia |
|-------|-----------|
| Desktop | Electron 30 |
| UI | React 18 + TypeScript |
| Build | Vite 5 |
| Stile | Tailwind CSS v4 |
| Animazioni | Framer Motion |
| Stato | Zustand 5 |
| i18n | i18next |
| Persistenza | better-sqlite3 (SQLite) |
| Download Queue | p-queue |
| Virtualizzazione | react-virtuoso |
| Test | Vitest |

## Requisiti di Sistema

| Piattaforma | Requisito minimo |
|---|---|
| Windows | 10 / 11 (64-bit) |
| macOS | 11.0 Big Sur o superiore |
| Linux | Ubuntu 20.04+, Debian 11+, Fedora 34+ (o equivalente) |

- **RAM:** 4 GB (raccomandato)
- **Disco:** Spazio sufficiente per gli archivi podcast

---

*Creato con ❤️ da [Runtime](https://github.com/runtime)*
