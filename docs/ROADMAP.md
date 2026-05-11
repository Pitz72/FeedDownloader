# Roadmap FeedDownloader Pro — Fonte di Verità

**Versione di riferimento:** 1.0.0
**Ultimo aggiornamento:** 11 maggio 2026

Questo è l'unico documento autorevole per tutto il lavoro pendente post-v1.0.0.
I documenti precedenti (`roadmap_technical_fixes.md`, `roadmap_documentation_2026.md`) sono archiviati in `archivio/`.

---

## Stato rapido

| ID | Area | Titolo | Stato |
|----|------|--------|-------|
| A1 | Fix tecnico | Finestra su monitor secondario (Linux) | ✅ Implementato (v1.0.3) |
| A2 | Fix tecnico | Menu contestuale mancante — incolla via mouse | ✅ Implementato (v1.0.3) |
| A3 | Cross-platform | Verifica integrazione nativa Linux | 🔍 Da valutare |
| B1 | Documentazione | Integrazione manuali in-app (help viewer) | 🔲 Pianificato |
| B2 | Documentazione | Scientific Paper IT + traduzione EN | 🔲 Non avviato |
| B3 | Documentazione | ARCHITECTURE.md (developer docs) | 🔲 Non avviato |
| B4 | Documentazione | CONTRIBUTING.md (developer docs) | 🔲 Non avviato |

---

## A — Fix Tecnici e Cross-Platform

### A1 — Posizionamento finestra su monitor secondario (Linux)

- **Stato:** ✅ Implementato in v1.0.3
- **Identificato:** 1 aprile 2026 — segnalazione utente Linux Mint
- **File coinvolto:** `electron/main.ts`
- **Analisi:** La finestra viene creata senza coordinate `x` e `y`. L'evento `ready-to-show` esegue `maximize()` prima di `show()`, lasciando al window manager la scelta del monitor — su Linux Mint questo risulta nel monitor secondario.
- **Soluzione:**
  - Importare il modulo `screen` di Electron
  - Ottenere il `primaryDisplay` e le sue `workArea`
  - Impostare `x` e `y` al centro del primario prima di chiamare `maximize()`

### A2 — Menu contestuale mancante (incolla via mouse)

- **Stato:** ✅ Implementato in v1.0.3
- **Identificato:** 1 aprile 2026 — segnalazione utente
- **File coinvolto:** `electron/main.ts`
- **Analisi:** Electron disabilita i menu contestuali nativi nelle app pacchettizzate. Nessun handler per l'evento `context-menu` sui `webContents`. Il Ctrl+V funziona, il tasto destro no.
- **Soluzione:**
  - Aggiungere un listener `win.webContents.on('context-menu', ...)` in `main.ts`
  - Generare un menu con `Menu.buildFromTemplate` contenente i ruoli standard: `cut`, `copy`, `paste`, `selectAll`
  - Mostrare il menu solo se il target è un elemento editabile (`inputFieldType !== 'none'` o `isEditable`)

### A3 — Verifica integrazione nativa Linux

- **Stato:** 🔍 Da valutare
- **Descrizione:** Verificare se comportamenti legati al system tray, alle scorciatoie da tastiera o alla chiusura dell'app richiedono affinamenti specifici per i desktop environment Linux (Cinnamon, GNOME, KDE Plasma).

---

## B — Documentazione

### B1 — Integrazione manuali in-app (help viewer)

- **Stato:** 🔲 Pianificato
- **Descrizione:** I PDF e i Markdown del manuale (in `docs/user/`) esistono ma non sono accessibili dall'app. Il pulsante "Guida Utente" nelle Impostazioni non è ancora collegato a un viewer in-app o a un'apertura esterna del PDF corretto per lingua.
- **File coinvolti:** `electron/ipc.ts`, `src/components/SettingsModal.tsx`
- **Approccio suggerito:** Aggiungere un canale IPC `OPEN_HELP` che apra il PDF della lingua corrente con `shell.openPath()` — nessun viewer da costruire, usa il lettore PDF di sistema.

### B2 — Scientific Paper (IT + EN)

- **Stato:** 🔲 Non avviato
- **Descrizione:** Articolo tecnico-scientifico sull'architettura "Database-First" di FeedDownloader Pro.
- **Struttura pianificata:**
  - Abstract: fragilità dei feed RSS e persistenza dei dati
  - Architettura: ruolo di SQLite, concorrenza configurabile
  - Network Resilience: timeout, stall detection, SHA-256
  - Security: validazione SSRF a 5 livelli in ambiente Electron
  - Conclusions: risultati su archivi >10.000 episodi
- **Output:** `docs/academic/SCIENTIFIC_PAPER_IT.md` + `SCIENTIFIC_PAPER_EN.md`

### B3 — ARCHITECTURE.md (developer docs)

- **Stato:** 🔲 Non avviato
- **Descrizione:** Documentazione tecnica per sviluppatori: architettura IPC Electron, schema SQLite, service layer, validazione SSRF. Destinata a `docs/` root. Lingue: IT + EN.

### B4 — CONTRIBUTING.md (developer docs)

- **Stato:** 🔲 Non avviato
- **Descrizione:** Guida per contributori: setup ambiente, standard di codifica TypeScript, workflow Vitest, regole di commit. Destinata alla root del progetto.

---

## Archivio roadmap precedenti

| Documento | Archiviato | Contenuto originale |
|-----------|-----------|---------------------|
| [archivio/roadmap_technical_fixes.md](archivio/roadmap_technical_fixes.md) | 11 mag 2026 | Fix tecnici post-v1.0.0 (ora A1–A3) |
| [archivio/roadmap_documentation_2026.md](archivio/roadmap_documentation_2026.md) | 11 mag 2026 | Piano documentazione multilingua (ora B1–B4) |
| [archivio/lungotermine.md](archivio/lungotermine.md) | 28 mar 2026 | Roadmap lungo termine — tutto completato/abortito in v0.7.5 |
| [archivio/indicazioni.md](archivio/indicazioni.md) | — | Backlog feature — tutto completato in v0.7.4 |
