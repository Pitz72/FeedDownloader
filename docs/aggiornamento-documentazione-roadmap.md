# Roadmap: Aggiornamento Documentazione v1.2.4

**Data:** 12 maggio 2026
**Versione di riferimento del software:** 1.2.4
**Versione alla quale la documentazione esistente fa riferimento:** 0.7.6 / 1.0.0

---

## Contesto

Tra la versione documentata e la v1.2.4 l'interfaccia utente è stata sostanzialmente ridisegnata nella struttura e nelle interazioni. I cambiamenti non riguardano solo feature aggiuntive, ma l'**architettura visiva dell'app stessa**:

- La `GlobalProgressBar` (barra in basso) è stata **eliminata** e sostituita dal `DownloadPanel` (drawer laterale destro + FAB)
- La sidebar è diventata una **libreria feed permanente** con tab, badge, drag-resize, footer path
- Il click semplice su un episodio ora apre l'`EpisodeDetailPanel` invece di non fare nulla
- La Command Palette (Ctrl+K) è un nuovo punto di accesso globale
- La tab Archivio nella sidebar è una nuova vista autonoma

Nessun capitolo del manuale descrive correttamente l'interfaccia attuale. Tre sezioni contengono **informazioni direttamente false** (barra in basso, feed singolo, niente auto-aggiornamento).

---

## Feature software collegate (da implementare separatamente)

Annotate il 12 maggio 2026. Non fanno parte del lavoro di aggiornamento documentazione, ma sono prerequisiti per una documentazione in-app completa. Vanno aggiunte alla roadmap principale del software come nuove voci.

**Changelog in-app**
Dentro il software deve essere apribile un changelog semplificato con le ultime modifiche (ultime versioni). Probabilmente accessibile da Impostazioni → Avanzate o da un pulsante dedicato. Non ancora implementato.

**Manuale interattivo in-app (upgrade B1)**
La `HelpModal` esiste già e funziona ma mostra i `README_*.md` (file per sviluppatori). Va aggiornata per mostrare i `QUICKSTART_*.md` (guida utente reale) con un pulsante "Apri manuale completo" che apre il PDF nella lingua corrente via `shell.openPath()`. I PDF vanno aggiunti agli `extraResources` in `package.json`. Vedere B1 nella ROADMAP.md principale.

---

## Dipendenze tra tier

```
TIER 1 — Sorgente italiano (master)
    docs/user/manual-it/*.md
    docs/user/QUICKSTART_it.md
    README_MASTER.md
          ↓
TIER 2 — Traduzioni (7 lingue, derivate dall'IT)
    docs/user/{en-GB,fr-FR,de-DE,es-ES,pt-PT,ru-RU,zh-CN}/*.md
    docs/user/QUICKSTART_{en,fr,de,es,pt,ru,zh}.md
    README_{EN,FR,DE,ES,PT,RU,CN}.md
          ↓
TIER 3 — PDF compilati (Vivliostyle, da sorgenti aggiornate)
    docs/user/manual-it/Manuale_FeedDownloader_Pro_Box.pdf
    docs/user/{lang}/FeedDownloader_Pro_Manual_{lang}.pdf
          ↓
TIER 4 — File di distribuzione (copie dei prodotti finali)
    DISTRIBUZIONE/distribuzione-windows/guides/*.pdf
    DISTRIBUZIONE/distribuzione-windows/guides/QUICKSTART_*.md
    DISTRIBUZIONE/distribuzione-windows/LEGGIMI*.txt
    (idem linux e macos)
          ↓
TIER 5 — README repository GitHub
    README.md
```

**Regola assoluta:** non avviare un tier prima che il tier precedente sia completamente scritto e revisionato.

---

## Glossario dei nuovi elementi UI da documentare

Riferimento unico da usare in tutto il materiale. Termini e descrizioni canoniche.

| Elemento | Termine IT canonico | Descrizione sintetica |
|----------|--------------------|-----------------------|
| DownloadPanel | **Pannello Download** | Drawer fisso a destra (380px). Si apre automaticamente all'avvio di un batch. Quando chiuso, è visibile un FAB (pulsante flottante) in basso a destra. |
| FAB | **Pulsante flottante** | Icona circolare in basso a destra, visibile quando il Pannello Download è chiuso. Cliccarlo riapre il pannello. |
| Sidebar (feed library) | **Barra laterale dei feed** | Colonna sinistra con la libreria permanente dei feed aggiunti, ridimensionabile via drag. |
| Tab Feed / Archivio | **Scheda Feed / Scheda Archivio** | Le due tab nella barra laterale. La scheda Feed mostra la libreria; la scheda Archivio mostra tutti gli episodi scaricati. |
| Badge "N nuovi" | **Badge episodi nuovi** | Indicatore numerico accanto alla data nell'elemento feed, segnala episodi pubblicati dopo l'ultimo download. |
| EpisodeDetailPanel | **Pannello Dettaglio** | Pannello che si apre lateralmente con un click semplice su un episodio. Mostra meta, azioni, dati archivio, show notes. |
| CommandPalette | **Palette Comandi** | Overlay di ricerca e azioni rapide. Scorciatoia: Ctrl+K. |
| Sync individuale | **Sincronizzazione individuale** | Icona `sync` che appare sull'elemento feed al passaggio del mouse. Aggiorna solo quel feed. |
| Sync All | **Sincronizza tutti** | Pulsante che aggiorna tutti i feed in parallelo con progresso per-feed (spinner/✓/✗ su ogni thumbnail). |
| Auto-refresh | **Aggiornamento automatico feed** | Impostazione (Generale): Disattivato / 6 ore / 12 ore / 24 ore. Invia notifica OS se trova nuovi episodi. |
| Archive View | **Vista Archivio** | Tabella virtualizzata (scheda Archivio) con tutti gli episodi scaricati: ricerca, filtro per podcast, ordinamento, statistiche. |
| Selezione multipla | **Selezione multipla** | Ctrl+click: singolo; Shift+click: intervallo. Checkbox on-hover. Pulsante "Scarica Selezionati (N)" nel header. |
| Export M3U | **Esporta playlist M3U** | Pulsante nel header della lista episodi. Genera file `.m3u` con path assoluti locali. |
| Velocità/ETA inline | **Velocità e tempo stimato** | Durante il download: percentuale + KB/s o MB/s + tempo rimanente (Xs / Xm Ys) visibili nella riga episodio. |
| Re-download | **Riscarica** | Pulsante download che appare on-hover anche su episodi già completati. |

---

## TIER 1 — Sorgente Italiano

### ✅ T1.1 — `00-copertina.md` — Aggiornamento versione — COMPLETATO 12 mag 2026

**Tipo:** cosmético, 2 righe.

- Sostituire `### Versione 0.7.6` con `### Versione 1.2.4`
- Sostituire `**Edizione:** Marzo 2026` con `**Edizione:** Maggio 2026`

---

### ✅ T1.2 — `02-installazione.md` — Aggiornamento nomi file — COMPLETATO 12 mag 2026

**Tipo:** cosmético, occorrenze puntuali.

- Sostituire ogni occorrenza di `Setup-0.7.6.exe` con `Setup-1.2.4.exe`
- Sostituire ogni occorrenza di `0.7.6.dmg` con `1.2.4.dmg`
- Verificare se ci sono altre stringhe di versione e aggiornarle

---

### ✅ T1.3 — `03-interfaccia.md` — Riscrittura quasi totale — COMPLETATO 12 mag 2026

**Tipo:** priorità critica. Questo è il capitolo più danneggiato.

#### Sezioni da tenere (con aggiornamenti minori)
- **3.2 La Barra di Comando** — mantenere, è ancora valida
- **3.4 Gli Stati degli Episodi** — mantenere, la tabella è corretta
- **3.8 L'Icona nel System Tray** — mantenere (rinumerare)

#### Sezioni da aggiornare
- **3.1 Anatomia della Finestra Principale** — riscrivere. Le "tre zone verticali" non corrispondono più all'interfaccia reale. La struttura attuale è: barra URL (top), barra laterale dei feed (sinistra, ridimensionabile), area episodi (centro/destra), Pannello Download (destra, sovrapposto quando aperto). Descrivere ciascuna zona brevemente.
- **3.3 La Lista degli Episodi** — la sezione descrive correttamente colonne e comportamento della lista, ma non menziona che appare **solo dopo aver selezionato un feed dalla barra laterale**. Aggiungere questo contesto. Aggiornare il paragrafo "Ordinamento": i controlli di ordinamento (data, durata) sono ora in una filter bar sotto il header del podcast, non nelle intestazioni di colonna.
- **3.5 I Controlli di Download Individuali** — riscrivere. Il testo attuale descrive due pulsanti. Quelli attuali sono: pulsante download on-hover (↓), pulsante riscarica on-hover (episodi già scaricati), pulsante reset on-hover, pulsante apri cartella on-hover, pulsante copia titolo on-hover. Aggiungere che un **click semplice sulla riga** apre il Pannello Dettaglio (vedi nuova sezione 3.9). Specificare che Ctrl+click e Shift+click sono riservati alla selezione multipla e non aprono il pannello.
- **3.6 I Controlli del Batch** — aggiornare denominazione e posizione. I controlli sono nel header della lista episodi (sopra la lista), non genericamente "in alto a destra". Aggiungere: pulsante "Scarica Selezionati (N)" che appare quando ci sono episodi selezionati, pulsante "Esporta M3U". Aggiornare il pulsante "Ferma": non svuota la coda istantaneamente ma invia un segnale di cancellazione a tutti i download in-flight (AbortController).

#### Sezioni da aggiungere (nuove, nell'ordine indicato)

**Nuova 3.3 — La Barra Laterale dei Feed**
Inserire prima dell'attuale 3.3 (che diventerà 3.4). Coprire:
- La barra laterale è il punto di accesso a tutti i feed salvati permanentemente. L'app ricorda i feed tra le sessioni.
- **Tab Feed / Archivio**: la barra ha due schede. La scheda Feed mostra la libreria; la scheda Archivio mostra la Vista Archivio (vedi sezione 3.10).
- **Elemento feed**: mostra thumbnail, titolo del podcast, data dell'ultima sincronizzazione, badge episodi nuovi (numero di episodi pubblicati dopo l'ultimo download; scompare dopo aver scaricato tutti i nuovi episodi).
- **Aggiungere un feed**: incollare l'URL RSS nel campo URL in alto e cliccare "Analizza". Il feed viene aggiunto permanentemente alla barra laterale. I feed non si perdono alla chiusura dell'app.
- **Ricerca feed**: campo di ricerca nella barra laterale per filtrare i feed per nome.
- **Ordinamento A-Z**: pulsante per ordinare alfabeticamente.
- **Sincronizzazione individuale**: icona `sync` che appare on-hover sull'elemento feed; rilegge il feed dal server e aggiorna la lista episodi.
- **Sync All (Sincronizza tutti)**: pulsante in cima alla barra laterale; aggiorna tutti i feed in parallelo. Durante l'operazione ogni thumbnail mostra lo stato (spinner = in corso, ✓ = completato, ✗ = errore) e il pulsante mostra "Sincronizzando... N/M". Gli stati rimangono visibili 2,5 secondi poi scompaiono.
- **Footer**: in fondo alla barra laterale è visibile il percorso di destinazione download (ultime due componenti del path, es. `Documenti/Podcast`). Cliccarlo apre la cartella nel file manager. Per modificare il percorso, usare Impostazioni → Archivio.
- **Ridimensionamento**: la larghezza della barra laterale è modificabile trascinando il bordo destro (cursore col-resize). Limiti: 240px – 640px. La larghezza viene memorizzata tra le sessioni.

**Nuova 3.8 — Il Pannello Download**
Inserire dopo i controlli del batch (attuale 3.6). Coprire:
- Il Pannello Download sostituisce la precedente barra di avanzamento in basso. È un drawer (pannello scorrevole) fisso a destra con larghezza 380px.
- Si **apre automaticamente** quando viene avviato un batch. Si può chiudere manualmente senza interrompere i download.
- Quando è chiuso, è visibile il **pulsante flottante** (FAB) in basso a destra: cliccarlo riapre il pannello.
- **Contenuto del pannello**: header con contatore file completati/totali, pulsante stop, pulsante chiudi. Lista scorrevole dei download in coda: ogni elemento mostra titolo, nome podcast, percentuale, velocità (KB/s o MB/s), tempo stimato, barra di avanzamento individuale. On-hover appare il pulsante × per cancellare quel singolo download.
- **Sezione errori**: al completamento del batch, se ci sono stati fallimenti, appare una sezione espandibile con l'elenco degli episodi non scaricati e il codice di errore.

**Nuova 3.9 — Il Pannello Dettaglio Episodio**
Inserire dopo il Pannello Download. Coprire:
- Un **click semplice** su qualsiasi riga episodio apre il Pannello Dettaglio, che scorre lateralmente (380px) sotto la barra principale.
- Ctrl+click e Shift+click sono riservati alla selezione multipla e non aprono il pannello.
- **Contenuto**: metadati (data pubblicazione, durata, dimensione dichiarata); azioni contestuali (Scarica / Riscarica / Reset stato / Apri cartella); se l'episodio è già scaricato: dati archivio (data download, dimensione file reale, bitrate, sample rate, nome file, checksum SHA-256); link sorgente con pulsante copia; show notes (testo descrittivo dell'episodio, estratto dall'HTML del feed).
- Il pannello si chiude automaticamente quando si seleziona un feed diverso.

**Nuova 3.10 — La Vista Archivio**
Inserire dopo il Pannello Dettaglio. Coprire:
- Si accede tramite la scheda **Archivio** nella barra laterale.
- Mostra una tabella virtualizzata di tutti gli episodi scaricati nell'intero archivio (non solo del feed corrente).
- **Ricerca**: campo testuale che filtra per titolo episodio o nome podcast.
- **Filtro podcast**: menu a tendina per vedere solo gli episodi di un podcast specifico.
- **Ordinamento**: per data download, data pubblicazione, dimensione file, bitrate.
- **Statistiche**: nell'intestazione sono visibili il numero totale di file, i podcast distinti e la dimensione totale dell'archivio in GB.
- On-hover su ogni riga: pulsante "Mostra in cartella" che apre il file manager sulla posizione del file.

**Nuova 3.11 — La Palette Comandi (Ctrl+K)**
Inserire dopo la Vista Archivio. Coprire:
- Scorciatoia **Ctrl+K** (da qualsiasi punto dell'app) apre la Palette Comandi.
- Overlay con sfondo sfumato e campo di ricerca. Navigazione con ↑↓, conferma con Invio, chiusura con Esc.
- **Gruppo Azioni** (sempre visibili o filtrati dalla ricerca): Apri Impostazioni, Sincronizza tutti i feed, Aggiungi feed (focalizza il campo URL), Vai alla scheda Archivio, Vai alla scheda Feed.
- **Gruppo Feed**: mostra i primi 5 feed quando la ricerca è vuota; filtra per nome con la ricerca. Selezionando un feed dalla palette, questo viene caricato direttamente nella lista episodi.

**Nota di renumerazione**: con le nuove sezioni 3.3, 3.8, 3.9, 3.10, 3.11, le sezioni originali vanno rinumerate di conseguenza. L'attuale 3.8 (System Tray) diventa l'ultima del capitolo.

---

### ✅ T1.4 — `04-primo-archivio.md` — Aggiornamento flusso di lavoro — COMPLETATO 12 mag 2026

**Tipo:** aggiornamento selettivo di tre sezioni.

#### Sezione 4.3 — Preparare la Cartella di Destinazione
Il testo descrive un campo "percorso di destinazione" nell'interfaccia principale che non esiste più in quella forma. **Riscrivere**: il percorso si imposta in **Impostazioni → Archivio → Percorso download** (pulsante cartella). Il percorso attivo è visibile nel footer della barra laterale. Mantenere il consiglio sulla struttura di cartelle.

#### Sezione 4.7 — Monitorare il Progresso
Sostituire ogni riferimento alla "barra globale in basso" con il **Pannello Download** (si apre automaticamente, drawer a destra). Mantenere la nota sull'esecuzione in background (system tray).

#### Sezione 4.9 — Aggiornare l'Archivio in Futuro
Integrare con il flusso della sidebar: per i feed **già presenti in barra laterale**, non è necessario reincollare l'URL. Si può cliccare direttamente il feed in barra laterale (lo seleziona e mostra la lista episodi), poi usare il pulsante sync individuale o Sync All. L'incolla-URL rimane valido per aggiungere **nuovi** feed non ancora in libreria.

---

### ✅ T1.5 — `05-gestione-feed.md` — Riscrittura sezioni 5.4 e 5.8, aggiunta sezioni — COMPLETATO 12 mag 2026

**Tipo:** priorità critica. Due sezioni contengono informazioni false.

#### Sezione 5.4 — Da "Cronologia dei Feed" a "La Libreria dei Feed"
Riscrivere completamente. Il titolo deve diventare **"La Libreria dei Feed"**. Il contenuto deve descrivere:
- I feed vengono salvati permanentemente nella barra laterale quando si analizza un URL per la prima volta.
- Ogni elemento mostra thumbnail, titolo, data ultimo sync, badge episodi nuovi.
- Cliccando un feed in barra laterale si carica la lista episodi corrispondente.
- Per rimuovere un feed dalla libreria: clic destro sull'elemento → Rimuovi, oppure dal menu contestuale. (Verificare il comportamento esatto nel codice prima di scrivere.)
- La ricerca e l'ordinamento A-Z sono disponibili nella barra laterale.

> **Nota prima di scrivere**: verificare nel codice il comportamento esatto della rimozione feed (tasto destro? menu? shortcut?). Cercare in `Sidebar.tsx` e `ipc.ts` il handler `REMOVE_FEED` o simile.

#### Sezione 5.5 — Importare Feed da OPML
**Aggiornare il path UI**: il testo dice "Impostazioni → Archivio, sezione Dati e Portabilità" — questo è ancora corretto (verificato nel codice). Mantenere il contenuto, è valido.

#### Sezione 5.8 — Da "Limitazioni del Feed Multiplo" a nuova sezione
Eliminare completamente il contenuto attuale (che afferma il contrario di quello che fa il software). Riscrivere con due paragrafi:

**5.8 — Gestione di più feed**
L'app gestisce nativamente una libreria di feed multipli. Non c'è limite al numero di feed salvati. La barra laterale mostra tutti i feed aggiunti. È possibile passare da un feed all'altro con un click. Per aggiornare un singolo feed: pulsante sync individuale (icona hover). Per aggiornare tutti i feed contemporaneamente: Sync All.

**Aggiungere 5.9 — Aggiornamento Automatico dei Feed**
Nuova sezione (si può creare come 5.9 o inglobare in 5.8 come sottosezione):
- Impostazione in **Impostazioni → Generale → Aggiornamento automatico feed**.
- Opzioni: Disattivato (predefinito), ogni 6 ore, ogni 12 ore, ogni 24 ore.
- Quando attivo, il software controlla in background tutti i feed all'intervallo impostato. Se vengono trovati nuovi episodi, viene inviata una notifica del sistema operativo.
- L'aggiornamento automatico non avvia download: segnala solo la disponibilità di nuovi episodi.

---

### ✅ T1.6 — `10-impostazioni-avanzate.md` — Aggiornamento struttura e aggiunta auto-refresh — COMPLETATO 12 mag 2026

**Tipo:** aggiornamento medio.

#### Sezione 10.3 — Riposizionamento
La sezione **10.3 "Filtro per Parole Chiave"** descrive la filter bar della lista episodi, non un'impostazione del pannello Impostazioni. **Rimuoverla da questo capitolo** e spostarne il contenuto (o un riferimento) nel Capitolo 3, nella sottosezione della lista episodi (nuova sezione 3.4 o 3.5 dopo la rinumerazione). Rinumerare le sezioni successive.

#### Sezione 10.4 (ex 10.4, ora 10.3 dopo rimozione) — Generale
Aggiungere una sottosezione **"Aggiornamento automatico feed"** dopo la sottosezione Lingua:
- Descrivere i quattro preset: Disattivato, 6 ore, 12 ore, 24 ore.
- Il cambio è immediato: non richiede riavvio.
- Quando attivo, il timer parte all'avvio del software.
- Riferimento incrociato a sezione 5.9 per il comportamento dettagliato.

---

### ✅ T1.7 — `QUICKSTART_it.md` — Riscrittura sezione 4 — COMPLETATO 12 mag 2026

**Tipo:** priorità alta. Sezione 4 è la più visibile per l'utente finale.

Riscrivere l'intera **sezione 4 "Gestione della Coda"**. Il nuovo testo deve coprire:

- Il **Pannello Download** si apre automaticamente quando si avvia un batch. È un pannello che appare a destra dello schermo.
- Mostra ogni episodio in download con titolo, percentuale di avanzamento, velocità e tempo stimato.
- Per **cancellare un singolo download**: passare il mouse sull'elemento nella lista → cliccare ×.
- Per **fermare tutto**: pulsante Stop nell'intestazione del Pannello Download.
- Per **chiudere il pannello** senza fermare i download: pulsante × in alto. Il **pulsante flottante** (FAB) rimane visibile in basso a destra: cliccarlo riapre il pannello.
- Al termine del batch, se ci sono stati errori, il pannello mostra un riepilogo espandibile.

Aggiungere anche un breve **Tip** sulla Command Palette: *"Tip: premi Ctrl+K in qualsiasi momento per aprire la Palette Comandi e avviare Sync All, cambiare feed o aprire le Impostazioni senza usare il mouse."*

Mantenere le sezioni 1, 2, 3, 5 e il Troubleshooting (verificare solo i riferimenti a eventuali "barre in basso").

---

### ✅ T1.8 — `README_MASTER.md` — Aggiornamento lista feature — COMPLETATO 12 mag 2026

**Tipo:** medio. Questo file è l'help in-app; mostrarlo agli utenti con feature mancanti è fuorviante.

La sezione **"Caratteristiche Principali"** lista le feature fino alla v1.0.0 circa. Aggiungere le feature introdotte successivamente, in ordine tematico (non cronologico). Feature da aggiungere:

- **Libreria Feed Permanente:** Gestisce più feed contemporaneamente con barra laterale ridimensionabile; badge "N nuovi episodi" per ogni feed.
- **Vista Archivio:** Tab dedicata per consultare e cercare l'intero archivio di episodi scaricati.
- **Pannello Download:** Drawer laterale con coda, velocità, tempo stimato e log errori per ogni batch.
- **Dettaglio Episodio:** Click su un episodio apre un pannello con metadati completi, dati archivio e show notes.
- **Palette Comandi (Ctrl+K):** Accesso rapido a tutte le azioni principali e ai feed salvati.
- **Aggiornamento Automatico Feed:** Timer in background (6/12/24h) con notifica OS per i nuovi episodi.
- **Selezione Multipla:** Ctrl+click / Shift+click per selezionare intervalli di episodi e scaricarli insieme.
- **Export Playlist M3U:** Genera playlist compatibili con qualsiasi player audio locale.
- **Velocità e Tempo Stimato:** Visualizzati inline per ogni download attivo.
- **Riscarica Episodio:** Possibilità di riscaricciare un episodio già presente nell'archivio.
- **Sync All con progresso per-feed:** Ogni feed mostra il proprio stato durante la sincronizzazione globale.

---

## TIER 2 — Traduzioni (7 lingue)

**Dipendenza:** completare e revisionare tutto il Tier 1 prima di procedere.

**Lingue:** `en-GB`, `fr-FR`, `de-DE`, `es-ES`, `pt-PT`, `ru-RU`, `zh-CN`

Per ciascuna lingua, i file da aggiornare sono esattamente gli stessi del Tier 1, in ordine identico:

| Task | File (sostituire `{lang}`) | Stato |
|------|---------------------------|-------|
| ✅ T2.1 | `{lang}/00-copertina.md` | COMPLETATO 12 mag 2026 — versione 1.2.4 + edizione Maggio 2026 in tutte le 7 lingue |
| ✅ T2.2 | `{lang}/02-installazione.md` | COMPLETATO 12 mag 2026 — riferimenti versione 0.7.6→1.2.4 in tutte le 7 lingue |
| ✅ T2.3 | `{lang}/03-interfaccia.md` | COMPLETATO 12 mag 2026 — en-GB/de-DE/fr-FR/es-ES/pt-PT/ru-RU/zh-CN tutti riscritti con sezioni 3.1–3.12 (sidebar, DownloadPanel, EpisodeDetailPanel, ArchiveView, CommandPalette). MD047 es-ES fixato. Nota: usare `*` + 1 spazio (non 3) — .markdownlint.json ha MD030 attivo con default=1 |
| T2.4 | `{lang}/04-primo-archivio.md` | DA FARE |
| T2.5 | `{lang}/05-gestione-feed.md` | DA FARE |
| T2.6 | `{lang}/10-impostazioni-avanzate.md` | DA FARE |
| ✅ T2.7 | `QUICKSTART_{en/fr/de/es/pt/ru/zh}.md` | COMPLETATO 12 mag 2026 — tutte e 6 le lingue aggiornate (sezioni 1–5 + DownloadPanel + Ctrl+K + M3U) |
| T2.8 | `README_USER_{en/fr/de/es/pt/ru/zh}.md` | DA FARE |

**Metodo di lavoro per le traduzioni:**
1. Prendere il file sorgente italiano aggiornato.
2. Identificare esattamente le sezioni modificate (non ritradurre tutto il file).
3. Tradurre solo le delta rispetto alla versione tradotta esistente.
4. Verificare che i termini tecnici UI corrispondano alle chiavi i18n già usate nell'app (es. il nome italiano "Pannello Download" deve corrispondere a `downloadPanel` nelle traduzioni).

---

## TIER 3 — PDF compilati

**Dipendenza:** completare e revisionare tutto il Tier 2.

Rigenerare gli 8 PDF con Vivliostyle. La configurazione di build è già presente in `docs/user/manual-it/vivliostyle.config.js` e nelle cartelle di ogni lingua.

**Procedura per ogni lingua:**
```bash
# Dalla cartella della lingua
cd docs/user/manual-it/
npx vivliostyle build

# Ripetere per en-GB, fr-FR, de-DE, es-ES, pt-PT, ru-RU, zh-CN
```

**Verificare dopo ogni generazione:**
- Il numero di versione appare correttamente nella copertina (1.2.4)
- L'edizione riporta "Maggio 2026"
- Il sommario riflette le nuove sezioni del Capitolo 3 e del Capitolo 5
- I nuovi paragrafi sono impaginati correttamente (nessun overflow o spezzatura anomala)

**Output attesi:**
- `docs/user/manual-it/Manuale_FeedDownloader_Pro_Box.pdf`
- `docs/user/{lang}/FeedDownloader_Pro_Manual_{lang}.pdf` (7 file)

---

## TIER 4 — File di distribuzione

**Dipendenza:** completare il Tier 3 (PDF pronti).

La cartella `DISTRIBUZIONE/` contiene tre sottocartelle (`distribuzione-windows/`, `distribuzione-linux/`, `distribuzione-macos/`). Gli aggiornamenti sono identici per tutte e tre le piattaforme salvo dove specificato.

### T4.1 — LEGGIMI*.txt (8 file per piattaforma)

Aggiornare in tutti i file:
- Intestazione: `v1.0.0` → `v1.2.4`
- Sezione **"AGGIORNAMENTI SOFTWARE"**: il testo esistente è ancora corretto (il sistema di auto-update è rimasto invariato). Mantenere.
- Sezione **"COSA CONTIENE QUESTO PACCHETTO"**: il testo è generico e non ha bisogno di aggiornamenti specifici.
- Non è necessario elencare le nuove feature nei LEGGIMI: sono documenti di installazione rapida, non release notes.

**File da aggiornare** (per ogni piattaforma):
`LEGGIMI_PER_PRIMO.txt`, `READ_ME_FIRST.txt`, `LISEZ_MOI_EN_PREMIER.txt`, `BITTE_ZUERST_LESEN.txt`, `LEEME_PRIMERO.txt`, `LEIA_ME_PRIMEIRO.txt`, `ПРОЧТИ_МЕНЯ_СНАЧАЛА.txt`, `请先阅读.txt`

### T4.2 — Sostituire i QUICKSTART nella cartella guides/

Copiare i QUICKSTART aggiornati (Tier 2) nella cartella `guides/`:
```bash
cp docs/user/QUICKSTART_it.md DISTRIBUZIONE/distribuzione-windows/guides/QUICKSTART_it.md
cp docs/user/QUICKSTART_en.md DISTRIBUZIONE/distribuzione-windows/guides/QUICKSTART_en.md
# ... ripetere per tutte le lingue e piattaforme
```

### T4.3 — Sostituire i PDF nella cartella guides/

I PDF nella cartella guides sono nominati con la versione nel titolo (`v1.0.0`). Va verificato se il nome file cambia.

- Se Vivliostyle usa il numero versione nel nome del file output: rinominare i vecchi PDF e copiare i nuovi.
- Se il nome file è fisso: sovrascrivere direttamente.

**Verificare il nome dei file output** dal config Vivliostyle prima di procedere.

### T4.4 — Aggiornare l'eseguibile nella distribuzione

- Copiare il nuovo installer in `distribuzione-windows/`:
```bash
cp -f "builds/1.2.4/Runtime FeedDownloader Pro Setup 1.2.4.exe" \
      "DISTRIBUZIONE/distribuzione-windows/Runtime-FeedDownloader-Pro-Setup-1.2.4.exe"
```
- Rimuovere (o archiviare) il vecchio `Runtime-FeedDownloader-Pro-Setup-1.0.0.exe`
- Aggiornare i LEGGIMI se contengono il nome file esplicito dell'installer

---

## TIER 5 — README repository GitHub

**Dipendenza:** nessuna dipendenza dai tier precedenti. Può essere fatto in parallelo al Tier 1.

### T5.1 — `README.md`

**Badge versione (riga 6):**
Aggiornare `version-0.7.6-blue` → `version-1.2.4-blue`

**Sezione "Caratteristiche Principali" (dal paragrafo attuale):**
Il README di repository è letto da sviluppatori e utenti GitHub. Aggiungere le feature principali introdotte dopo v0.7.6 (stessa lista di T1.8, adattata al tono del README GitHub con bullet points brevi).

**Sezione "Download" (tabella):**
Verificare che i link alle GitHub Releases puntino al repository corretto (`Pitz72/FeedDownloader-Releases`). Il testo attuale punta a `Pitz72/FeedDownloader` — verificare e correggere se necessario.

---

## Ordine di esecuzione raccomandato

Dentro il Tier 1, procedere in questo ordine per minimizzare le rilavorazioni:

1. **T1.3** (Cap. 3 — interfaccia) — è il più impattante e stabilisce il vocabolario per tutti gli altri
2. **T1.5** (Cap. 5 — gestione feed) — seconda priorità, sezioni false da correggere subito
3. **T1.7** (QUICKSTART) — breve, alto impatto utente
4. **T1.4** (Cap. 4 — primo archivio) — dipende dal vocabolario stabilito in T1.3
5. **T1.6** (Cap. 10 — impostazioni) — più semplice, aggiunta + rimozione di sezione
6. **T1.8** (README_MASTER) — lista feature, indipendente
7. **T1.1** + **T1.2** — cosmético, ultimi

---

## Checklist finale pre-distribuzione

Prima di aggiornare la cartella di distribuzione, verificare che ogni documento risponda affermativamente a queste domande:

- [ ] La versione indicata è `1.2.4`?
- [ ] L'edizione/data è "Maggio 2026"?
- [ ] Il Capitolo 3 descrive correttamente la barra laterale, il Pannello Download, il Pannello Dettaglio, la Vista Archivio e la Palette Comandi?
- [ ] Il Capitolo 5 **non contiene più** l'affermazione che l'app gestisce un solo feed alla volta?
- [ ] Il QUICKSTART descrive il Pannello Download (non la barra in basso)?
- [ ] L'auto-refresh è documentato nel Capitolo 10 (o QUICKSTART) e nel Capitolo 5?
- [ ] I PDF sono stati rigenerati **dopo** l'aggiornamento dei sorgenti .md (non prima)?
- [ ] I LEGGIMI della distribuzione riportano `v1.2.4`?
- [ ] I QUICKSTART nella cartella `guides/` della distribuzione sono i file aggiornati?
- [ ] I PDF nella cartella `guides/` della distribuzione sono quelli rigenerati dal Tier 3?