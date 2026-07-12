# Runtime FeedDownloader Pro

Versione 1.3.13

Il modo più potente per archiviare i tuoi podcast.

## Cos'è

Runtime FeedDownloader Pro è uno strumento professionale progettato per archivisti, editori e appassionati che necessitano di scaricare interi cataloghi di podcast per la conservazione offline.
A differenza dei normali player, questo software è ottimizzato per il download massivo (Batch), la resilienza di rete e l'organizzazione strutturata su file system.

## Caratteristiche Principali

### Gestione dei feed

* **Libreria Feed Permanente:** Gestisce più podcast contemporaneamente con barra laterale ridimensionabile, ricerca e ordinamento A–Z; i feed restano salvati tra le sessioni.
* **Badge "Da Scaricare":** Indicatore numerico per ogni feed che segnala quanti episodi non sono ancora presenti nel tuo archivio.
* **Rilevamento Nuovi Episodi:** Basato sui GUID degli episodi, non sul semplice conteggio — le notifiche sono affidabili anche con i podcast "a finestra mobile" che rimuovono le puntate vecchie.
* **Feed Paginati (RFC 5005):** Segue automaticamente i link alle pagine successive del feed, ricostruendo l'intero catalogo anche quando il provider (Apple Podcasts, Libsyn, Blubrry…) pubblica solo gli episodi recenti nella prima pagina.
* **Sync All con progresso per-feed:** Aggiorna tutti i feed in parallelo; ogni thumbnail mostra il proprio stato in tempo reale.
* **Aggiornamento Automatico dei Feed:** Timer in background (6/12/24h) con notifica OS per i nuovi episodi.

### Download e coda

* **Batch Download:** Scarica centinaia di episodi con un click, con gestione intelligente della coda e concorrenza configurabile (1, 3 o 5 download paralleli).
* **Limite di Velocità:** Banda massima di download configurabile nelle Impostazioni (0 = illimitato).
* **Pannello Download:** Drawer laterale con coda, velocità (KB/s), tempo stimato e log errori per ogni batch. Pulsante flottante per riaprirlo senza perdere i download.
* **Velocità e Tempo Stimato:** Visualizzati inline per ogni download attivo nella riga episodio.
* **Cancellazione Singola:** Cancella un singolo download dalla coda senza fermare gli altri.
* **Riscarica Episodio:** Possibilità di riscaricare un episodio già presente nell'archivio.
* **Selezione Multipla:** Ctrl+click / Shift+click per selezionare intervalli di episodi e scaricarli insieme.

### Interfaccia e navigazione

* **Design Moderno "Electric Azure on Deep Dark":** Interfaccia scura completamente ridisegnata, veloce e leggibile.
* **Palette Comandi (Ctrl+K):** Accesso rapido a tutte le azioni principali e ai feed salvati senza usare il mouse.
* **Pannello Dettaglio Episodio:** Click su un episodio apre un pannello con metadati completi, dati archivio e show notes.
* **Ordinamento Episodi:** Ordina la lista per data, titolo o durata, oltre all'ordine originale del feed.
* **Vista Archivio:** Tab dedicata per consultare, cercare e ordinare l'intero archivio di tutti gli episodi scaricati.
* **Export Playlist M3U:** Genera playlist locali compatibili con qualsiasi player audio.
* **Onboarding Guidato:** Suggerimenti al primo avvio per iniziare subito.

### Resilienza e integrità

* **Motore "Database-First":** Il sistema ricorda cosa hai scaricato indipendentemente dai file su disco (SQLite).
* **Download Resilienti:** Timeout di connessione (30s) e stall detection (60s), retry automatici con backoff esponenziale, file `.part` anti-corruzione.
* **Integrità Dati:** Calcolo automatico SHA-256 e estrazione metadati audio (bitrate, sample rate) post-download.
* **Health Check:** Ripristino automatico degli episodi mancanti su disco con risincronizzazione del database.

### Organizzazione e portabilità

* **Estensione Reale:** Rileva e salva il formato corretto del file (`.m4a`, `.ogg`, `.opus`, `.flac`…) invece di forzare sempre `.mp3`.
* **Tag ID3 con Copertina:** Scrive automaticamente i tag ID3 nei file `.mp3`, con priorità alla copertina specifica dell'episodio quando disponibile.
* **Template Rinomina:** Token personalizzabili (`{{title}}`, `{{date}}`, `{{podcast}}`) per nomi file organizzati.
* **Portabilità Dati:** Importa ed Esporta feed tramite standard OPML. Genera report CSV dettagliati del tuo archivio.
* **Migrazione Archivio:** Sposta l'intera libreria in un nuovo percorso/disco con aggiornamento automatico del DB.
* **Supporto NAS/SMB:** Validazione nativa e timeout (8s) per percorsi di rete, senza freeze dell'interfaccia.

### Sistema e sicurezza

* **Auto-Update con Notifica:** Aggiornamenti automatici tramite GitHub Releases, con notifica di sistema quando un update è disponibile e quando è pronto da installare.
* **Sicurezza URL:** Validazione anti-SSRF a livello di connessione — blocca protocolli pericolosi, IP privati, indirizzi riservati e redirect ostili, per ogni pagina di feed.
* **Smart Truncate:** Rinomina automaticamente i file per evitare errori di lunghezza percorso su Windows.
* **Performance:** Lista virtualizzata — gestisce feed con migliaia di episodi senza rallentamenti.
* **Help Integrato:** Guida utente consultabile direttamente all'interno dell'applicazione.

## Certificazione Multilingua

Il software supporta completamente **8 lingue**: Italiano (IT), English (EN), Français (FR), Deutsch (DE), Español (ES), Português (PT), Русский (RU), 中文 (ZH). L'interfaccia, le notifiche di sistema e la documentazione sono disponibili in tutte le lingue.

## Istruzioni Rapide

1. **Analizza:** Incolla l'URL del feed RSS nella barra principale e premi "Analizza". Il feed viene aggiunto alla barra laterale per gli accessi futuri.
2. **Scegli Cartella:** In Impostazioni → Archivio, imposta la cartella dove salvare i file. Il percorso è sempre visibile nel footer della barra laterale.
3. **Scarica:** Usa il tasto "Scarica Tutto" per l'intero archivio, oppure seleziona gli episodi con Ctrl+click e usa "Scarica Selezionati".
4. **Monitora:** Il Pannello Download si apre automaticamente con la coda, la velocità e il tempo stimato per ogni file.
5. **Gestisci:** Usa Ctrl+K per la Palette Comandi, o le Impostazioni (⚙) per concorrenza, limite di velocità, template, OPML e statistiche archivio.

## Requisiti di Sistema

Il software è Cross-Platform e gira nativamente su:

* **Windows**: 10/11 (64-bit) — installer NSIS (`.exe`)
* **Linux**: Distribuzioni moderne (Ubuntu 20.04+, Debian 11+, Fedora 34+) — `.AppImage` o `.deb`
* **macOS**: 11.0 (Big Sur) o superiore — supportato dal codice, ma i pacchetti macOS non sono attualmente distribuiti
* Connessione Internet attiva

## Download

I pacchetti ufficiali sono disponibili su [GitHub Releases](https://github.com/Ecosystem-Runtime/FeedDownloader-Releases/releases) e vengono generati tramite GitHub Actions.

| Piattaforma | Formato | Note |
|---|---|---|
| Windows 10/11 | `.exe` (installer NSIS) | Software non firmato — vedi nota SmartScreen |
| Linux | `.AppImage` / `.deb` | Nessuna firma richiesta |

**Windows — avviso SmartScreen:** Al primo avvio, Windows Defender potrebbe mostrare la schermata "PC protetto da Windows — Autore sconosciuto". Il software è sicuro. Fare clic su **Ulteriori informazioni** → **Esegui comunque**.

**macOS:** I pacchetti `.dmg` non vengono attualmente pubblicati; è possibile compilare l'app dal codice sorgente.

*Sviluppato con tecnologia Electron & React per garantire prestazioni e stabilità.*
