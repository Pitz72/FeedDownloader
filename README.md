# 🎙️ Runtime FeedDownloader Pro

> **Il modo più potente per archiviare i tuoi podcast.**

![Version](https://img.shields.io/badge/version-0.4.0-blue)
![Electron](https://img.shields.io/badge/Electron-30-47848F?logo=electron)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)

## Panoramica

**Runtime FeedDownloader Pro** è un'applicazione desktop per l'archiviazione massiva di podcast RSS. Scarica, organizza e cataloga episodi da qualsiasi feed RSS con resilienza di rete, download paralleli configurabili e un'interfaccia moderna.

### ✨ Caratteristiche Principali

- 🔄 **Batch Download** — Scarica tutti gli episodi con un solo click
- 🛡️ **Database-First** — Stato di download indipendente dal filesystem
- 🧠 **Smart Truncate** — Prevenzione automatica dei limiti `MAX_PATH` di Windows
- 💾 **Download Resilienti** — Retry automatici, file `.part`, protezione disco pieno
- 📊 **Statistiche Archivio** — Dashboard con contatori e periodi (v0.4.0)
- ⚡ **Concorrenza Configurabile** — 1, 3 o 5 download paralleli (v0.4.0)
- 📅 **Filtri per Data** — Filtra episodi per intervallo date (v0.4.0)
- 🔔 **Notifiche OS** — Notifica nativa al completamento batch (v0.4.0)
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

## Quick Start

```bash
# Installa dipendenze
npm install

# Avvia in modalità sviluppo
npm run dev

# Build di produzione
npm run build
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
| Persistenza | electron-store |
| Download Queue | p-queue |
| Virtualizzazione | react-virtuoso |

## Requisiti di Sistema

- **OS:** Windows 10+, macOS 10.15+, Linux
- **RAM:** 4 GB (raccomandato)
- **Disco:** Spazio sufficiente per gli archivi podcast

---

*Creato con ❤️ da [Runtime](https://github.com/runtime)*
