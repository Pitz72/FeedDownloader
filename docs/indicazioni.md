# Analisi Evolutiva: Verso l'Archiviazione Digitale Professionale

Questo documento delinea le linee guida e i suggerimenti tecnici per l'evoluzione di **Runtime FeedDownloader Pro**, focalizzandosi sulla sua identità di strumento di **archiviazione di massa** (Data Hoarding) piuttosto che di semplice aggregatore di ascolto.

> **Legenda:** ✅ = Implementato | 🔲 = Da fare

---

### 1. Robustezza e Integrità del Dato (Core Archiving)
L'obiettivo è garantire che ogni file scaricato sia identico alla sorgente e che il processo sia resiliente alle interruzioni.
- ✅ **Verifica Integrità (Checksum/Size) (v0.5.0):** Controllo post-download sulla dimensione del file (header `Content-Length` vs bytes scritti, tolleranza ±1%).
- ✅ **Resume dei Download (HTTP 206) (v0.6.1):** Riavvio automatico dal punto di interruzione via header `Range: bytes=N-`; il file `.part` viene conservato su errori transitori e ripreso al tentativo successivo.
- ✅ **Rilevamento Episodi "Ghost" (v0.5.0):** Gestione esplicita degli errori 404 con toast dedicato (`episode_not_found`) e nessun tentativo di retry.

### 2. Organizzazione e Metadati (Library Management)
I file archiviati devono essere auto-esplicativi e organizzati secondo standard bibliotecari.
- ✅ **Template di Naming Personalizzabili (v0.5.4):** Permettere la definizione di strutture cartelle/file dinamiche, es: `[YYYY-MM-DD] - [Podcast Name] - [Episode Title].mp3`.
- ✅ **Tagging ID3 Automatico (v0.6.4):** Iniezione dei metadati (Titolo, Artista, Anno, Cover Art) direttamente nel file audio leggendoli dal feed RSS.
- ✅ **Sidecar Files (Metadata Backup) (v0.5.5):** Salvataggio di file `.json` con titolo, podcast, data e URL sorgente accanto a ogni episodio scaricato.

### 3. Efficienza di Massa (Workflow Automation)
Gestione intelligente delle risorse per evitare ban dai CDN e ottimizzare i tempi.
- ✅ **Download Paralleli Configurabili (v0.4.0):** Selettore per limitare i download paralleli (1, 3, 5 simultanei).
- ✅ **Throttling Velocità di Trasferimento (v0.6.5):** Limitazione della velocità in KB/s per non saturare la rete o attivare protezioni anti-bot.
- ✅ **Filtri per Data (v0.4.0):** Filtro per intervallo di date di pubblicazione degli episodi.
- ✅ **Filtri Avanzati (v0.6.6):** Filtro per keyword nel titolo (già presente) e filtro per durata (min/max minuti). `parseDurationMinutes` supporta HH:MM:SS, MM:SS e secondi puri; durata mostrata in ogni riga episodio.
- ✅ **Sincronizzazione Incrementale Smart (v0.5.3):** Funzione "Sync New" che rianalizza il feed e mette in coda automaticamente solo i nuovi episodi non ancora presenti nel database.

### 4. Gestione dello Storage (Safety)
Prevenzione degli errori legati alla capacità fisica dei dischi.
- ✅ **Pre-allocazione dello Spazio (v0.6.9):** Controllo preventivo della disponibilità su disco in base alla somma dei pesi stimati degli episodi (128 kbps × durata). Blocco critico < 200 MB; avviso se spazio < stima × 1.2.
- ✅ **Migrazione Archivio (v0.6.10):** Funzionalità integrata per spostare l'intero archivio su un altro drive (es. NAS) con barra di avanzamento in tempo reale. Il DB non richiede aggiornamenti (archivia solo podcastTitle + filename relativi).

### 5. UX — Finestra Impostazioni Ridisegnata
Le impostazioni erano ospitate in un modal troppo lungo e difficile da consultare.

✅ **Redesign Impostazioni (v0.6.7):** `SettingsModal` ridisegnata con layout a **due colonne** (`max-w-5xl`):
- **Sidebar sinistra** con 5 categorie con icone: Generale, Download, Metadati, Archivio, Avanzate
- **Area destra** scrollabile con animazione fade tra categorie (`AnimatePresence`)
- Fix posizionamento v0.6.8: modal spostato al root level in `App.tsx`

---

### 6. Analisi e Reporting (Insights)
Fornire all'utente una visione chiara dello stato del proprio archivio.
- ✅ **Statistiche Archivio (v0.4.0):** Dashboard con file totali scaricati, podcast distinti e periodo dell'archivio.
- ✅ **Report di Salute (Health Check) (v0.6.0):** Dashboard con totale in DB, file presenti/mancanti su disco, spazio occupato e lista dei file mancanti.
- 🔲 **Esportazione Log Avanzata (v0.6.11):** Includere nel CSV dettagli tecnici come bitrate, frequenza di campionamento e stato di validazione del file.

---
*Documento redatto il 16 febbraio 2026 come roadmap per lo sviluppo futuro. Aggiornato il 21 marzo 2026 con lo stato di implementazione. Aggiornato il 26 marzo 2026: segnate ✅ le feature implementate in v0.5.0–v0.6.6; aggiunta sezione 5 su refactor finestra impostazioni. Aggiornato il 26 marzo 2026 (sera): segnate ✅ le sezioni 4 e 5 implementate in v0.6.7–v0.6.10; unico DA FARE rimasto è §6 Esportazione Log Avanzata (v0.6.11).*
