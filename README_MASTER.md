# Runtime FeedDownloader Pro
**Il modo più potente per archiviare i tuoi podcast.**

## Cos'è
Runtime FeedDownloader Pro è uno strumento professionale progettato per archivisti, editori e appassionati che necessitano di scaricare interi cataloghi di podcast per la conservazione offline.
A differenza dei normali player, questo software è ottimizzato per il download massivo (Batch), la resilienza di rete e l'organizzazione su file system.

## Caratteristiche Principali
- **Motore "Database-First":** Il sistema ricorda cosa hai scaricato indipendentemente dai file su disco (SQLite).
- **Auto-Update:** Aggiornamenti automatici integrati tramite GitHub Releases (v1.0.0).
- **Supporto NAS/SMB:** Validazione nativa e timeout (8s) per percorsi di rete per prevenire freeze dell'interfaccia (v0.7.5).
- **Health Check:** Ripristino automatico degli episodi mancanti su disco con rincosincronizzazione del database (v0.7.6).
- **Integrità Dati:** Calcolo automatico SHA-256 e estrazione metadati audio (bitrate, sample rate) post-download (v0.7.4).
- **Migrazione Archivio:** Sposta l'intera libreria in un nuovo percorso/disco con aggiornamento automatico del DB (v0.6.10).
- **Batch Download:** Scarica centinaia di episodi con un click, con gestione intelligente della coda e concorrenza configurabile (1, 3 o 5 download paralleli).
- **Download Resilienti:** Timeout di connessione (30s) e stall detection (60s), retry automatici con backoff esponenziale, file `.part` anti-corruzione.
- **Sicurezza URL:** Validazione anti-SSRF a 5 livelli — blocca protocolli pericolosi, IP privati e indirizzi cloud metadata.
- **Estensione Reale:** Rileva e salva il formato corretto del file (`.m4a`, `.ogg`, `.opus`, `.flac`…) invece di forzare sempre `.mp3`.
- **Portabilità Dati:** Importa ed Esporta i tuoi feed tramite standard OPML. Genera report CSV dettagliati del tuo archivio.
- **Statistiche Archivio:** Dashboard con numero di file scaricati, podcast distinti e periodo dell'archivio.
- **Filtri per Data:** Filtra gli episodi visibili per intervallo di pubblicazione.
- **Notifiche OS:** Notifica nativa del sistema operativo al completamento di un batch.
- **Smart Truncate:** Rinomina automaticamente i file per evitare errori di lunghezza percorso su Windows.
- **Performance:** Lista virtualizzata — gestisce feed con migliaia di episodi senza rallentamenti.
- **Help Integrato:** Guida utente completa consultabile direttamente all'interno dell'applicazione.

## Certificazione Multilingua (v1.0.0)
Il software è ufficialmente certificato per il supporto completo in **8 lingue**:
- **Italiano (IT)** — Lingua nativa e di riferimento.
- **English (EN)** — Lingua di fallback globale.
- **Français (FR)**, **Deutsch (DE)**, **Español (ES)**, **Português (PT)**, **Русский (RU)**, **中文 (ZH)**.

La verifica condotta il 29 marzo 2026 conferma la copertura del 100% per:
1.  **Interfaccia Utente (UI):** Tutti i componenti React e i modali.
2.  **Notifiche di Sistema:** Messaggi OS localizzati tramite il processo Main.
3.  **Documentazione:** Help manuale presente in formato nativo per ogni lingua.
4.  **Integrità dei Dati:** Gestione corretta dei caratteri speciali e codifiche internazionali (UTF-8).

## Istruzioni Rapide
1.  **Analizza:** Incolla l'URL del feed RSS nella barra principale e premi "Analizza".
2.  **Scegli Cartella:** Clicca l'icona della cartella per decidere dove salvare l'archivio.
3.  **Scarica:** Usa il tasto "Scarica Tutto" per l'intero archivio o scarica i singoli episodi manualmente.
4.  **Gestisci:** Usa le Impostazioni (ingranaggio) per configurare concorrenza, lingua, importare/esportare feed OPML e visualizzare le statistiche archivio.

## Requisiti di Sistema
Il software è Cross-Platform e gira nativamente su:
- **Windows**: 10/11 (64-bit) — installer NSIS (`.exe`)
- **macOS**: 11.0 (Big Sur) o superiore, Intel & Apple Silicon — Disk Image (`.dmg`) o `.zip`
- **Linux**: Distribuzioni moderne (Ubuntu 20.04+, Debian 11+, Fedora 34+) — `.AppImage` o `.deb`
- Connessione Internet attiva

## Download

I pacchetti per tutte le piattaforme sono disponibili su [GitHub Releases](https://github.com/Pitz72/FeedDownloader-Releases/releases) e vengono generati automaticamente tramite GitHub Actions.

| Piattaforma | Formato | Note |
|---|---|---|
| Windows 10/11 | `.exe` (installer NSIS) | Software non firmato — vedi nota SmartScreen |
| macOS 11+ | `.dmg` / `.zip` | Software non firmato — vedi nota Gatekeeper |
| Linux | `.AppImage` / `.deb` | Nessuna firma richiesta |

**Windows — avviso SmartScreen:** Al primo avvio, Windows Defender potrebbe mostrare la schermata "PC protetto da Windows — Autore sconosciuto". Il software è sicuro. Fare clic su **Ulteriori informazioni** → **Esegui comunque**.

**macOS — avviso Gatekeeper:** Il pacchetto non è firmato con un certificato Apple Developer. Al primo avvio, macOS potrebbe bloccarlo. Per aprirlo: fare clic destro sull'app → **Apri**, oppure andare in **Impostazioni di sistema → Privacy e sicurezza → Apri comunque**.

*Sviluppato con tecnologia Electron & React per garantire prestazioni e stabilità.*
