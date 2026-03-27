# Analisi Evolutiva: Verso l'Archiviazione Digitale Professionale

Questo documento delinea le linee guida e i suggerimenti tecnici per l'evoluzione di **Runtime FeedDownloader Pro**, focalizzandosi sulla sua identità di strumento di **archiviazione di massa** (Data Hoarding) piuttosto che di semplice aggregatore di ascolto.

> **Legenda:** ✅ = Implementato | 🔲 = Da fare

---

### 1. Robustezza e Integrità del Dato (Core Archiving)
L'obiettivo è garantire che ogni file scaricato sia identico alla sorgente e che il processo sia resiliente alle interruzioni.
- 🔲 **Verifica Integrità (Checksum/Size):** Implementare un controllo post-download sulla dimensione del file (header `Content-Length`) o verifica hash (MD5/SHA) dove disponibile.
- ✅ **Resume dei Download (HTTP 206) (v0.6.1):** I download interrotti riprendono dal punto di blocco tramite range request HTTP 206.
- ✅ **Rilevamento Episodi "Ghost" / Health Check (v0.6.0):** Dashboard di salute con controllo integrità file su disco, conteggio presenti/mancanti e ore totali archiviate.

### 2. Organizzazione e Metadati (Library Management)
I file archiviati devono essere auto-esplicativi e organizzati secondo standard bibliotecari.
- ✅ **Template di Naming Personalizzabili (v0.6.x):** Struttura nome file configurabile con variabili dinamiche (data, titolo podcast, titolo episodio).
- ✅ **Tagging ID3 Automatico (v0.6.4):** Iniezione metadati (Titolo, Artista, Anno, Cover Art) nel file audio letti dal feed RSS tramite `node-id3`.
- ✅ **Sidecar Files (v0.6.x):** Salvataggio file `.json` con show notes e metadati completi a fianco di ogni file audio (opzione attivabile in Impostazioni).

### 3. Efficienza di Massa (Workflow Automation)
Gestione intelligente delle risorse per evitare ban dai CDN e ottimizzare i tempi.
- ✅ **Download Paralleli Configurabili (v0.4.0):** Selettore per limitare i download paralleli (1, 3, 5 simultanei).
- ✅ **Throttling Velocità di Trasferimento (v0.6.5):** Limitazione della velocità in KB/s configurabile in Impostazioni.
- ✅ **Filtri per Data (v0.4.0):** Filtro per intervallo di date di pubblicazione degli episodi.
- ✅ **Filtri per Durata (v0.6.6):** Filtro per durata minima/massima degli episodi (pill buttons nella toolbar episodi).
- 🔲 **Filtri Avanzati:** Filtrare per keyword nel titolo.
- ✅ **Sincronizzazione Incrementale Smart (v0.6.x):** La funzione "Sync" scarica solo i nuovi episodi ignorando quelli già presenti nel database.

### 4. Gestione dello Storage (Safety)
Prevenzione degli errori legati alla capacità fisica dei dischi.
- ✅ **Pre-allocazione dello Spazio (v0.6.9):** Controllo preventivo della disponibilità su disco prima di avviare un batch di download.
- ✅ **Migrazione Archivio (v0.6.10):** Funzionalità integrata per spostare archivio + database su un altro drive (es. NAS) mantenendo i puntatori.

### 5. Analisi e Reporting (Insights)
Fornire all'utente una visione chiara dello stato del proprio archivio.
- ✅ **Statistiche Archivio (v0.4.0):** Dashboard con file totali scaricati, podcast distinti e periodo dell'archivio.
- ✅ **Health Check (v0.6.0):** Controllo integrità file su disco con contatori presenti/mancanti e ore totali archiviate.
- 🔲 **Esportazione CSV Log:** Esportazione log dettagliato con bitrate, frequenza di campionamento e stato di validazione.

### 6. Interfaccia Utente (UI/UX)
Identità visiva coerente e moderna per uno strumento da power user.
- ✅ **Design System "Obsidian Command" (v0.7.0):** Palette OLED, CSS custom properties semantiche, bento cards, tri-font (Epilogue / Inter / Space Grotesk), animazioni Framer Motion.
- ✅ **Fix bundling font Material Symbols (v0.7.0):** Import `@fontsource-variable/material-symbols-outlined` spostato in `main.tsx` per corretta inclusione WOFF2 da Vite.
- ✅ **Bento episodi + Virtuoso scroll fix (v0.7.0):** Layout bento per la lista episodi; `customScrollParent` su `<main id="main-scroll">` per Virtuoso virtual list.
- ✅ **Allineamento CSS vars — IntroScreen + ConfirmModal (v0.7.1):** Token `--color-warning` introdotto; tutti i colori hardcoded sostituiti con CSS vars.
- ✅ **Allineamento CSS vars — SettingsModal + HelpModal + Sidebar (v0.7.2):** Redesign completo; Sidebar mostra `—` per feed mai sincronizzati; Esc chiude HelpModal.
- ✅ **Allineamento CSS vars — GlobalProgressBar (v0.7.3):** Pannello glass con `backdropFilter`, icone Material Symbols, gradiente barra avanzamento, hover semantici.

---
*Documento redatto il 16 febbraio 2026 come roadmap per lo sviluppo futuro. Aggiornato il 27 marzo 2026 con lo stato completo di implementazione fino alla v0.7.3.*
