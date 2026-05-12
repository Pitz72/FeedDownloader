# Runtime FeedDownloader Pro

Il modo più potente per archiviare i tuoi podcast.

## Cos'è

Runtime FeedDownloader Pro è uno strumento professionale progettato per archivisti, editori e appassionati che necessitano di scaricare interi cataloghi di podcast per la conservazione offline.
A differenza dei normali player, questo software è ottimizzato per il download massivo (Batch), la resilienza di rete e l'organizzazione strutturata su file system.

## Caratteristiche Principali

### Gestione dei feed

- **Libreria Feed Permanente:** Gestisce più podcast contemporaneamente con barra laterale ridimensionabile; i feed restano salvati tra le sessioni.
- **Badge Episodi Nuovi:** Indicatore numerico per ogni feed che segnala quanti nuovi episodi sono disponibili dall'ultimo download.
- **Sync All con progresso per-feed:** Aggiorna tutti i feed in parallelo; ogni thumbnail mostra il proprio stato in tempo reale.
- **Aggiornamento Automatico:** Timer in background (6/12/24h) con notifica OS per i nuovi episodi.

### Download e coda

- **Batch Download:** Scarica centinaia di episodi con un click, con gestione intelligente della coda e concorrenza configurabile (1, 3 o 5 download paralleli).
- **Pannello Download:** Drawer laterale con coda, velocità (KB/s), tempo stimato e log errori per ogni batch. Pulsante flottante per riaprirlo senza perdere i download.
- **Velocità e Tempo Stimato:** Visualizzati inline per ogni download attivo nella riga episodio.
- **Cancellazione Singola:** Cancella un singolo download dalla coda senza fermare gli altri.
- **Riscarica Episodio:** Possibilità di riscaricciare un episodio già presente nell'archivio.
- **Selezione Multipla:** Ctrl+click / Shift+click per selezionare intervalli di episodi e scaricarli insieme.

### Interfaccia e navigazione

- **Palette Comandi (Ctrl+K):** Accesso rapido a tutte le azioni principali e ai feed salvati senza usare il mouse.
- **Pannello Dettaglio Episodio:** Click su un episodio apre un pannello con metadati completi, dati archivio e show notes.
- **Vista Archivio:** Tab dedicata per consultare e cercare l'intero archivio di tutti gli episodi scaricati.
- **Export Playlist M3U:** Genera playlist locali compatibili con qualsiasi player audio.

### Resilienza e integrità

- **Motore "Database-First":** Il sistema ricorda cosa hai scaricato indipendentemente dai file su disco (SQLite).
- **Download Resilienti:** Timeout di connessione (30s) e stall detection (60s), retry automatici con backoff esponenziale, file `.part` anti-corruzione.
- **Integrità Dati:** Calcolo automatico SHA-256 e estrazione metadati audio (bitrate, sample rate) post-download.
- **Health Check:** Ripristino automatico degli episodi mancanti su disco con risincronizzazione del database.

### Organizzazione e portabilità

- **Estensione Reale:** Rileva e salva il formato corretto del file (`.m4a`, `.ogg`, `.opus`, `.flac`…) invece di forzare sempre `.mp3`.
- **Template Rinomina:** Token personalizzabili (`{{title}}`, `{{date}}`, `{{podcast}}`) per nomi file organizzati.
- **Portabilità Dati:** Importa ed Esporta feed tramite standard OPML. Genera report CSV dettagliati del tuo archivio.
- **Migrazione Archivio:** Sposta l'intera libreria in un nuovo percorso/disco con aggiornamento automatico del DB.
- **Supporto NAS/SMB:** Validazione nativa e timeout (8s) per percorsi di rete, senza freeze dell'interfaccia.

### Sistema e sicurezza

- **Auto-Update:** Aggiornamenti automatici integrati tramite GitHub Releases.
- **Sicurezza URL:** Validazione anti-SSRF a 5 livelli — blocca protocolli pericolosi, IP privati e indirizzi riservati.
- **Smart Truncate:** Rinomina automaticamente i file per evitare errori di lunghezza percorso su Windows.
- **Performance:** Lista virtualizzata — gestisce feed con migliaia di episodi senza rallentamenti.
- **Help Integrato:** Guida utente consultabile direttamente all'interno dell'applicazione.

## Certificazione Multilingua

Il software supporta completamente **8 lingue**: Italiano (IT), English (EN), Français (FR), Deutsch (DE), Español (ES), Português (PT), Русский (RU), 中文 (ZH). L'interfaccia, le notifiche di sistema e la documentazione sono disponibili in tutte le lingue.

## Istruzioni Rapide

1. **Analizza:** Incolla l'URL del feed RSS nella barra principale e premi "Analizza". Il feed viene aggiunto alla barra laterale per gli accessi futuri.
2. **Scegli Cartella:** In Impostazioni → Archivio, imposta la cartella dove salvare i file. Il percorso è sempre visibile nel footer della barra laterale.
3. **Scarica:** Usa il tasto "Scarica Tutto" per l'intero archivio, oppure seleziona gli episodi con Ctrl+click e usa "Scarica Selezionati".
4. **Monitora:** Il Pannello Download si apre automaticamente con la coda, la velocità e il tempo stimato per ogni file.
5. **Gestisci:** Usa Ctrl+K per la Palette Comandi, o le Impostazioni (⚙) per concorrenza, template, OPML e statistiche archivio.

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