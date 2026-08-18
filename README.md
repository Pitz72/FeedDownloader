# 🎙️ Runtime FeedDownloader Pro

> **Il modo più potente per archiviare i tuoi podcast.**

![Version](https://img.shields.io/badge/version-1.5.0-blue)
![Build](https://github.com/Ecosystem-Runtime/FeedDownloader/actions/workflows/build.yml/badge.svg)
![Electron](https://img.shields.io/badge/Electron-43-47848F?logo=electron)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Windows](https://img.shields.io/badge/Windows-0078D6?logo=windows&logoColor=white)
![Linux](https://img.shields.io/badge/Linux-FCC624?logo=linux&logoColor=black)

## Panoramica

**Runtime FeedDownloader Pro** è un'applicazione desktop per l'archiviazione massiva di podcast RSS. Scarica, organizza e cataloga episodi da qualsiasi feed RSS con resilienza di rete, download paralleli configurabili e un'interfaccia moderna.

### ✨ Caratteristiche principali

**Feed e libreria**
- **Libreria permanente** — barra laterale ridimensionabile, ricerca, ordinamento A–Z; i feed restano fra le sessioni
- **Badge DA SCARICARE** — quanti episodi mancano all'archivio, riconosciuti per GUID e non per conteggio (v1.3.12)
- **Feed paginati RFC 5005** — segue i link `rel="next"` e ricompone il catalogo, fino a 20 pagine (v1.3.12)
- **Aggiornamento automatico** — all'avvio, ogni 6/12/24 ore e al ritorno della connessione, con notifica di sistema cliccabile (v1.4.0, v1.5.0)

**Download**
- **Batch con coda gestita** — 1, 3 o 5 trasferimenti paralleli, selezione multipla, annullamento singolo
- **Pausa e Riprendi** — singolo download o intera coda, senza perdere l'avanzamento: la ripresa usa HTTP Range + If-Range (v1.5.0)
- **Riprova falliti** — rimette in coda in un clic tutti gli episodi in errore di un lotto (v1.5.0)
- **Limiti configurabili** — velocità complessiva e dimensione massima per file (v1.5.0)
- **Trasferimenti resilienti** — timeout 30s, stall detection 60s, 3 tentativi con backoff, `Retry-After` rispettato, file `.part`

**Integrità**
- **SHA-256 su ogni file**, con bitrate e sample rate estratti dal file stesso (v0.7.4)
- **Health Check** — verifica presenza e ricalcola le impronte, segnalando i file alterati (v1.4.1)
- **Ripara archivio** — ritrova per checksum i file rinominati a mano e li riaggancia (v1.5.0)
- **Ripristino guidato del database** dal backup automatico in caso di corruzione (v1.5.0)
- **Rifiuto dei contenuti non audio** quando il server risponde con una pagina web (v1.5.0)

**Interfaccia**
- **Palette comandi (Ctrl+K)** — azioni, feed e ricerca fra gli episodi del feed aperto (v1.2.4, v1.5.0)
- **Pannello download** e **pannello di dettaglio episodio** con metadati e dati d'archivio
- **Vista Archivio**, **export M3U**, **riduzione nell'area di notifica**, **changelog in-app**

**Sistema**
- **Aggiornamenti col consenso** — nessun download né installazione automatici (v1.5.0)
- **Anti-SSRF a 5 livelli**, con ri-verifica dell'IP a ogni connessione e redirect
- **NAS/SMB** con validazione a timeout, senza bloccare l'interfaccia
- **394 test automatici** con Vitest, gate bloccante in CI
- **Due lingue**: italiano e inglese

### 🌐 Documentazione

| Lingua | Guida in-app | Manuale completo |
|--------|--------------|------------------|
| 🇮🇹 Italiano | [README_MASTER.md](README_MASTER.md) | [docs/user/manual-it](docs/user/manual-it/) |
| 🇬🇧 English | [README_EN.md](README_EN.md) | [docs/user/en-GB](docs/user/en-GB/) |

I PDF dei manuali sono pubblicati nella cartella `manuals/` della [repo delle release](https://github.com/Ecosystem-Runtime/FeedDownloader-Releases) e si aprono anche dall'app.

### 📋 Changelog

La cronologia completa delle versioni si trova in [`docs/changelog/`](docs/changelog/).

## Download

| Piattaforma | Formato | Link |
|---|---|---|
| Windows 10/11 | NSIS Installer (`.exe`) | [GitHub Releases](https://github.com/Ecosystem-Runtime/FeedDownloader-Releases/releases) |
| Linux | AppImage / `.deb` | [GitHub Releases](https://github.com/Ecosystem-Runtime/FeedDownloader-Releases/releases) |

I build sono prodotti da GitHub Actions con trigger manuale (workflow dispatch).

> **macOS non è supportato** (decisione definitiva, agosto 2026): nessun build ufficiale
> viene distribuito né lo sarà. Chi vuole usare l'app su macOS può **auto-compilarla**
> dai sorgenti (`npm install && npm run build` su un Mac aggiunge da sé il target,
> ma senza firma, notarizzazione né supporto). Le piattaforme di distribuzione sono
> Windows e Linux, come per le altre app desktop Runtime (standard Titan).
>
> **Code-signing (limite noto L6):** i binari Windows/Linux non sono firmati con un
> certificato commerciale — SmartScreen può mostrare un avviso al primo avvio.
> La firma richiede un certificato OV/EV a pagamento con verifica d'identità;
> la valutazione resta aperta ma non è pianificata per la v1.5.0.

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
| Desktop | Electron 43 |
| UI | React 18 + TypeScript |
| Build | Vite 7 |
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
| Linux | Ubuntu 20.04+, Debian 11+, Fedora 34+ (o equivalente) |
| macOS | *non supportato* — solo auto-compilazione dai sorgenti |

- **RAM:** 4 GB (raccomandato)
- **Disco:** Spazio sufficiente per gli archivi podcast

---

*Creato da [Ecosystem Runtime](https://github.com/Ecosystem-Runtime) · software gratuito*
