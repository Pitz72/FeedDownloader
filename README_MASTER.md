# Runtime FeedDownloader Pro
**Il modo più potente per archiviare i tuoi podcast.**

## Cos'è
Runtime FeedDownloader Pro è uno strumento professionale progettato per archivisti, editori e appassionati che necessitano di scaricare interi cataloghi di podcast per la conservazione offline.
A differenza dei normali player, questo software è ottimizzato per il download massivo (Batch), la resilienza di rete e l'organizzazione su file system.

## Caratteristiche Principali
- **Motore "Database-First":** Il sistema ricorda cosa hai scaricato indipendentemente dai file su disco (SQLite).
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

## Istruzioni Rapide
1.  **Analizza:** Incolla l'URL del feed RSS nella barra principale e premi "Analizza".
2.  **Scegli Cartella:** Clicca l'icona della cartella per decidere dove salvare l'archivio.
3.  **Scarica:** Usa il tasto "Scarica Tutto" per l'intero archivio o scarica i singoli episodi manualmente.
4.  **Gestisci:** Usa le Impostazioni (ingranaggio) per configurare concorrenza, lingua, importare/esportare feed OPML e visualizzare le statistiche archivio.

## Requisiti di Sistema
Il software è Cross-Platform e gira nativamente su:
- **Windows**: 10/11 (64-bit)
- **macOS**: 11.0 (Big Sur) o superiore (Intel & Apple Silicon)
- **Linux**: Distribuzioni moderne (Ubuntu, Debian, Fedora) tramite AppImage o .deb
- Connessione Internet attiva

*Sviluppato con tecnologia Electron & React per garantire prestazioni e stabilità.*
