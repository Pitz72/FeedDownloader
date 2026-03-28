# Roadmap Lungo Termine — Runtime FeedDownloader Pro

> Documento creato il 27 marzo 2026 consolidando le indicazioni provenienti da:
> - `archivio/report_analisi_v040_rimanenti.md` (generato 20 marzo 2026)
> - `archivio/report_stato_attuale_2026-03-21.md` (generato 21 marzo 2026)
>
> Aggiornato il 28 marzo 2026 — v0.7.5 completata.
> **Stato: COMPLETATO — Archiviato il 28 marzo 2026. Tutte le feature implementate o deliberatamente abortite.**
>
> **Legenda:** 🔲 = Da fare | ✅ = Già implementato | ❌ = Abortito

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

## ✅ Implementate in v0.7.5

### 5. Supporto Percorsi di Rete (SMB/NFS) ✅

**Implementata in**: v0.7.5 (28 marzo 2026)

Validazione nativa dei percorsi di rete prima di salvarli come destinazione download. Rilevamento automatico path UNC (`\\server\share`), verifica `fs.access(W_OK)` con timeout 8 secondi. Toast info per percorsi di rete accessibili, toast errore su TIMEOUT o EPERM.

---

### 6. Electron Auto-Update ✅

**Implementata in**: v0.7.5 (28 marzo 2026)

Integrazione `electron-updater` con GitHub Releases. Auto-check all'avvio (app packaged, delay 3s). UI nella tab Avanzate con stati in tempo reale e pulsante "Riavvia e Installa". `latest.yml` SHA-512 generato dalla build. Configurare `build.publish.owner` in `package.json` con il proprio GitHub username.

---

## ❌ Abortiti

### 1. Auto-sync Schedulato
**Motivo**: Il software è pensato per archiviazione manuale e consapevole. L'auto-sync automatico contrasta con il modello d'uso e introduce complessità (cron in-process, risk di ban CDN, gestione conflitti con download manuali) senza un reale beneficio nel contesto di un data hoarder che gestisce attivamente i propri feed.

---

### 3. Supporto Feed Video
**Motivo**: Fuori scope. Il software è focalizzato su podcast audio. Il supporto video richiederebbe una dipendenza esterna pesante (`yt-dlp`), gestione di formati multipli, e un'UX completamente diversa. Non ci interessa.

---

### 4. Archivio Cloud
**Motivo**: Fuori scope e non in linea con la filosofia del progetto (archiviazione locale, controllo diretto dei file). La gestione di credenziali OAuth2, provider multipli e sync bidirezionale introduce complessità sproporzionata rispetto al valore.

---

### 2. Player Audio Integrato
**Motivo**: Sotto-progetto autonomo di alta complessità (mini-player persistente, gestione stato globale, proxy CORS per streaming remoto, conflitti con download attivi, WaveSurfer in memoria su file lunghi). Non in linea con il focus del software sull'archiviazione.

---

## Stato finale

Tutte le feature pianificate sono state implementate o deliberatamente abortite. Nessun punto aperto.

| Feature | Stato |
|---|:---:|
| Supporto NAS/SMB | ✅ v0.7.5 |
| Electron Auto-Update | ✅ v0.7.5 |
| Auto-sync Schedulato | ❌ Abortito |
| Supporto Feed Video | ❌ Abortito |
| Archivio Cloud | ❌ Abortito |
| Player Audio Integrato | ❌ Abortito |

---

*Documento da mantenere aggiornato spuntando le voci completate e aggiungendo dettagli tecnici al progredire dello sviluppo.*
