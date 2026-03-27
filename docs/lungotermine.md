# Roadmap Lungo Termine — Runtime FeedDownloader Pro

> Documento creato il 27 marzo 2026 consolidando le indicazioni provenienti da:
> - `archivio/report_analisi_v040_rimanenti.md` (generato 20 marzo 2026)
> - `archivio/report_stato_attuale_2026-03-21.md` (generato 21 marzo 2026)
>
> **Legenda:** 🔲 = Da fare | ✅ = Già implementato

---

## Stato di partenza

Tutto il "breve termine" e il "medio termine" originale sono stati completati entro la v0.7.4:

| Feature | Implementata in |
|---------|----------------|
| Throttling velocità download (KB/s) | v0.6.5 |
| Hook `useOnlineStatus` reattivo | v0.4.9 |
| Resume download HTTP 206 | v0.6.1 |
| Tagging ID3 automatico (titolo, artista, cover) | v0.6.4 |
| Sidecar metadata `.json` | v0.5.5 |
| Template naming personalizzabile | v0.5.4 |
| Health Check archivio | v0.6.0 |
| Scorciatoie tastiera (Esc, Ctrl+F) | v0.5.0 |
| Drag & Drop URL RSS sull'input | v0.5.0 |
| Tray icon (minimizza nella system tray) | v0.5.0 |
| Migrazione archivio su NAS/altro drive | v0.6.10 |
| Pre-allocazione spazio disco prima del batch | v0.6.9 |
| Filtri avanzati (keyword AND, durata) | v0.6.6 / v0.7.4 |
| Verifica integrità SHA-256 + metadati audio | v0.7.4 |

---

## 🔲 Da Fare — Lungo Termine

### 1. Auto-sync Schedulato

**Motivazione**: Permettere all'app di controllare periodicamente i feed preferiti e scaricare automaticamente i nuovi episodi, anche con l'app in background (tray), senza intervento manuale.

**Dettaglio tecnico** (da report):
- Libreria `node-cron` per scheduling in-process nel Main process
- Nuovo campo in SQLite: `feeds.autoSync BOOLEAN DEFAULT 0` e `feeds.syncInterval TEXT` (es. `daily`, `hourly`)
- Toggle per attivare/disattivare l'auto-sync per singolo feed nella Sidebar o nelle Settings
- Al trigger della cron: chiamare `FeedService.parseFeed()` + confronto GUID con tabella `downloads` + accodare in `QueueService` solo i nuovi
- Notifica OS al completamento (già localizzata in 8 lingue via `uiLocale`)
- Considerare: interval minimo ragionevole per evitare ban CDN (es. non più di 1 check/ora per feed)

**Complessità**: 🔴 Alta

---

### 2. Player Audio Integrato

**Motivazione**: Permettere all'utente di ascoltare in anteprima un episodio direttamente nell'app prima o durante il download, senza aprire un player esterno.

**Dettaglio tecnico** (da report):
- Tag `<audio>` HTML5 nativo nel Renderer come base
- Libreria `WaveSurfer.js` per waveform visuale e controlli avanzati (seek, zoom, playback speed)
- Sorgente audio: sia URL remoto (streaming diretto dal feed) sia file locale già scaricato
- Integrazione nella riga episodio: bottone "play" accanto a "download"
- Mini-player persistente in basso (stile Spotify) che rimane visibile durante la navigazione
- Considerare: conflitto con download attivo dello stesso file

**Complessità**: 🔴 Alta

---

### 3. Supporto Feed Video

**Motivazione**: Estendere il software oltre i podcast audio, supportando video podcast e feed YouTube (es. channel RSS), mantenendo la stessa UX di archiviazione massiva.

**Dettaglio tecnico** (da report):
- Dipendenza esterna `yt-dlp` (eseguibile standalone, non npm) per download da YouTube/feed video
- Gestione formati multipli: MP4, MKV, WEBM — con selezione qualità preferita (1080p, 720p, audio-only)
- Il tipo di enclosure (`video/mp4` vs `audio/mpeg`) determina quale engine usare: `DownloadService` (direct HTTP) vs `yt-dlp` wrapper
- Nuova colonna in `archive`: `mediaType TEXT` (`audio` / `video`)
- UI: icona diversa nella lista episodi per video vs audio
- Considerare: dimensioni file video molto più grandi → impatto su pre-allocazione spazio e progress bar

**Complessità**: 🔴 Alta

---

### 4. Archivio Cloud

**Motivazione**: Offrire un backup automatico dei file scaricati su storage cloud, utile per utenti che vogliono ridondanza o accesso da più dispositivi.

**Dettaglio tecnico** (da report):
- Multi-provider: Amazon S3, Google Drive, Dropbox (architettura a plugin per aggiungerne altri)
- Gestione credenziali sicura: token OAuth2 criptati in SQLite (non in chiaro)
- Modalità: sync one-way (locale → cloud) post-download, o sync bidirezionale
- UI in Impostazioni: sezione "Cloud Backup" con selezione provider, bucket/folder, toggle attiva/disattiva
- Considerare: gestione bandwidth, rate limiting, costi di storage, e privacy dei dati audio

**Complessità**: 🔴 Alta

---

### 5. Supporto Percorsi di Rete (SMB/NFS)

**Motivazione**: Permettere il download diretto su NAS o share di rete montati come percorsi SMB/NFS, senza dover fare migrazione manuale dopo il download.

**Dettaglio tecnico** (da report):
- Attualmente la "Migrazione Archivio" (v0.6.10) sposta file già scaricati su un nuovo path
- Questa feature riguarda il supporto nativo a path UNC (`\\server\share`) o mount points `/Volumes/NAS/`
- Principale sfida: `statfs` per controllo spazio su percorsi di rete (comportamento diverso per SMB su Windows vs macOS)
- Verifica connettività prima del batch: `fs.access(path, fs.constants.W_OK)`
- Considerare: latenza di rete + timeout allungati per `DownloadService` su NAS lenti

**Complessità**: 🟡 Media

---

### 6. Electron Auto-Update

**Motivazione**: Consentire all'app di aggiornarsi automaticamente quando viene rilasciata una nuova versione, senza richiedere download manuale dell'installer.

**Dettaglio tecnico** (da report):
- Libreria `electron-updater` (parte di `electron-builder`)
- Richiede un server di distribuzione: GitHub Releases (gratuito) o server custom con `latest.yml`
- Flusso: app controlla update all'avvio → mostra notifica "Aggiornamento disponibile" → download in background → riavvio per installare
- Il file `latest.yml` generato da `electron-builder` contiene hash SHA-512 per verifica integrità
- Considerare: firma del codice (code signing) per Windows — richiesto per installer firmati e update silenzioso senza UAC

**Complessità**: 🟡 Media

---

### 7. Plugin System

**Motivazione**: Rendere il software estensibile da terze parti o dallo stesso sviluppatore, supportando parser personalizzati, provider di feed non-standard, o interfacce export custom.

**Dettaglio tecnico** (da report):
- Architettura estensibile: plugin come moduli Node.js caricati dinamicamente dal Main process
- Tipologie di plugin: `FeedParser` (parser custom per feed non-RSS), `DownloadHandler` (engine alternativo per tipi speciali), `ExportFormatter` (formati export aggiuntivi oltre CSV/OPML)
- Gestione sicurezza: sandbox per plugin di terze parti (no accesso FS non autorizzato)
- UI: pannello "Plugin" in Impostazioni con lista, attiva/disattiva, installazione da path locale
- Considerare: molto alta complessità architetturale — da affrontare solo dopo stabilizzazione del core

**Complessità**: 🔴 Alta

---

## Priorità Suggerita

Ordinando per rapporto **utilità pratica / complessità implementativa**:

| Priorità | Feature | Complessità | Valore |
|:---:|---|:---:|---|
| 1 | **Electron Auto-Update** | 🟡 Media | Essenziale per distribuzione professionale |
| 2 | **Auto-sync Schedulato** | 🔴 Alta | Core del data hoarding automatico |
| 3 | **Supporto NAS/SMB** | 🟡 Media | Utenti NAS numerosi, già preparato con migrazione |
| 4 | **Player Audio** | 🔴 Alta | UX molto migliorativa |
| 5 | **Supporto Feed Video** | 🔴 Alta | Espansione significativa del target |
| 6 | **Archivio Cloud** | 🔴 Alta | Feature premium, complessità alta |
| 7 | **Plugin System** | 🔴 Alta | Infrastruttura, ultima da fare |

---

*Documento da mantenere aggiornato spuntando le voci completate e aggiungendo dettagli tecnici al progredire dello sviluppo.*
