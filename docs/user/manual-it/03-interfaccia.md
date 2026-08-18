# Capitolo 3: Tour dell'Interfaccia

## 3.1 Anatomia della Finestra Principale

All'apertura di FeedDownloader Pro, la finestra è organizzata in quattro zone funzionali:

*   **Barra di comando (in alto):** La barra fissa contenente il campo URL, il pulsante di analisi, il pulsante di accesso alla Palette Comandi e l'icona Impostazioni. Quando è disponibile un aggiornamento del software, in questa barra appare anche l'indicatore persistente di aggiornamento (vedi il Capitolo 2, sezione 2.5). Da qui si avviano tutte le operazioni di aggiunta di nuovi feed.
*   **Barra laterale dei feed (sinistra):** La colonna che contiene la libreria permanente dei feed salvati, la scheda Archivio, i controlli di sincronizzazione e il footer con il percorso di destinazione. La larghezza è regolabile trascinando il bordo destro.
*   **Area principale (centro):** L'area dove vengono visualizzati gli episodi del feed selezionato, con la barra filtri, i controlli del batch e la lista degli episodi.
*   **Pannello Download (destra, sovrapposto):** Il pannello che si apre automaticamente quando è in corso un batch di download. Quando è chiuso, rimane visibile un pulsante flottante in basso a destra per riaprirlo.

Al primo avvio, con la libreria vuota, l'area principale mostra un messaggio guida che indica come aggiungere il primo feed e dove configurare il percorso di destinazione. Il messaggio scompare automaticamente all'aggiunta del primo feed, oppure manualmente tramite il pulsante ×.

---

## 3.2 La Barra di Comando (In Alto)

**Campo URL:** La barra di testo dove si inserisce l'indirizzo RSS del podcast da analizzare. Accetta URL diretti a file XML/RSS. Supporta il **drag and drop**: è possibile trascinare un link direttamente da un browser su quest'area.

**Pulsante "Analizza":** Avvia l'analisi del feed. Il software contatta l'URL, legge il file RSS e popola la lista degli episodi. Al completamento dell'analisi, il feed viene aggiunto permanentemente alla barra laterale. L'operazione richiede generalmente da 1 a 5 secondi, in base alla dimensione del feed e alla velocità della connessione.

**Icona Impostazioni (⚙):** Apre il pannello delle impostazioni. È accessibile in qualsiasi momento, anche durante un download in corso. Per i dettagli, vedi il Capitolo 10.

---

## 3.3 La Barra Laterale dei Feed

La barra laterale è il centro di controllo della libreria podcast. Contiene tutti i feed aggiunti in modo permanente: i feed non si perdono alla chiusura del software.

### Le schede Feed e Archivio

In cima alla barra laterale sono presenti due schede:

*   **Scheda Feed:** Mostra la libreria dei feed salvati. È la vista predefinita.
*   **Scheda Archivio:** Mostra la Vista Archivio, ovvero una tabella con tutti gli episodi scaricati nell'intera libreria. Vedi la sezione 3.10.

### Elementi della libreria feed

Ogni feed nella lista è rappresentato da una riga che mostra:

*   **Thumbnail:** L'immagine di copertina del podcast.
*   **Titolo:** Il nome del podcast come dichiarato nel feed RSS.
*   **Data:** La data dell'ultima sincronizzazione con il server.
*   **Badge "DA SCARICARE":** Un indicatore (es. `3 DA SCARICARE`) che segnala quanti episodi nuovi sono stati rilevati rispetto all'ultima sincronizzazione. Il riconoscimento dei nuovi episodi avviene tramite l'identificatore univoco (GUID) di ciascun episodio, registrato nel database: un episodio viene contato come nuovo solo se il suo GUID non è mai stato visto prima. Il badge scompare dopo aver scaricato tutti i nuovi episodi.

Cliccare su un elemento della lista carica la lista degli episodi di quel feed nell'area principale.

### Aggiungere un feed

Incollare l'URL RSS nel campo URL in cima all'interfaccia e cliccare "Analizza". Una volta completata l'analisi, il feed viene aggiunto automaticamente alla barra laterale e rimane disponibile per le sessioni successive.

### Ricerca e ordinamento

*   **Ricerca feed:** Il campo di ricerca nella barra laterale filtra i feed per nome in tempo reale. Utile con librerie di grandi dimensioni.
*   **Ordinamento A-Z:** Il pulsante di ordinamento ordina alfabeticamente i feed per titolo. Cliccarlo di nuovo ripristina l'ordine originale.

### Sincronizzazione

*   **Sincronizzazione individuale:** Passando il mouse su un elemento feed, appare l'icona di sincronizzazione. Cliccandola, il software rilegge il feed dal server e aggiorna la lista episodi con eventuali nuovi contenuti.
*   **Sincronizza Tutti:** Il pulsante **"Sincronizza Tutti"** in cima alla barra laterale aggiorna tutti i feed in parallelo. Durante l'operazione, ogni thumbnail mostra il proprio stato: icona rotante (in corso), segno di spunta verde (completato), icona di errore rossa (fallito). Il pulsante riporta il progresso in tempo reale (es. `Sincronizzando... 3/7`). Gli stati rimangono visibili per 2,5 secondi al termine dell'operazione, poi scompaiono.

### Footer: percorso di destinazione

In fondo alla barra laterale è visibile il percorso della cartella di destinazione download, abbreviato alle ultime due componenti (es. `Documenti / Podcast`). Cliccare su questa riga apre la cartella nel file manager di sistema. Per modificare il percorso, usare **Impostazioni → Archivio**.

### Ridimensionamento

La larghezza della barra laterale è regolabile trascinando il bordo destro (il cursore diventa una doppia freccia orizzontale). La larghezza minima è 240 px, la massima è 640 px, il valore predefinito è 360 px. L'impostazione viene memorizzata tra le sessioni.

### Indicatore di connessione

Nell'intestazione della barra laterale è visibile lo stato della connessione: **"Connesso"** oppure **"Offline"**. Quando la connessione manca, un banner segnala che i download sono in pausa fino al ripristino; al ritorno della connessione il software riprende automaticamente e verifica la presenza di nuovi episodi.

---

## 3.4 La Lista degli Episodi

Dopo aver selezionato un feed dalla barra laterale, l'area principale viene popolata con la lista degli episodi disponibili per quel podcast.

### Intestazione del feed

In cima all'area principale è visibile l'intestazione del feed selezionato, con thumbnail, titolo del podcast e il numero di episodi. Da questa intestazione sono accessibili i principali controlli del batch (vedi la sezione 3.7).

### Colonne dell'elenco

Ogni riga della lista rappresenta un episodio e contiene le seguenti informazioni:

*   **Titolo:** Il nome dell'episodio come definito nel feed RSS.
*   **Data:** La data di pubblicazione originale dell'episodio.
*   **Durata:** La durata dell'episodio (quando disponibile nel feed).
*   **Dimensione:** La dimensione del file. Prima del download, il valore è dichiarativo (ricavato dal feed); dopo il download, riflette la dimensione reale del file.
*   **Stato:** L'indicatore visivo dello stato del singolo episodio. Vedi la sezione 3.5.

### Barra filtri

Sotto l'intestazione del feed è presente una barra filtri che consente di restringere gli episodi visualizzati:

*   **Ricerca per testo:** Filtra per parole chiave nel titolo (logica AND: tutti i termini inseriti devono essere presenti). Il filtro si azzera automaticamente al cambio feed.
*   **Filtro per stato:** Pulsanti rapidi per mostrare solo gli episodi in un determinato stato: **"Tutti"**, **"Da scaricare"**, **"Scaricati"**.
*   **Filtro per data:** Campi data "dal" e "al" per limitare la lista a un intervallo di pubblicazione.
*   **Filtro per durata:** Limita la lista agli episodi con durata compresa tra un minimo e un massimo (in minuti).
*   **Ordina:** Apre un pannello con cinque opzioni di ordinamento — ordine del feed (predefinito), data più recente, data meno recente, durata più lunga, durata più corta.

Tutti i filtri vengono azzerati automaticamente quando si seleziona un feed diverso.

### Selezione multipla

È possibile selezionare più episodi contemporaneamente per avviarne il download in blocco:

*   **Ctrl+click:** aggiunge o rimuove singolarmente l'episodio dalla selezione.
*   **Shift+click:** seleziona l'intervallo tra l'ultimo episodio selezionato e quello cliccato.
*   Una casella di controllo appare on-hover sugli episodi non selezionati e sempre sugli episodi selezionati.

Quando almeno un episodio è selezionato, nell'intestazione del feed appare il pulsante **"Scarica Selezionati (N)"**. La selezione viene azzerata al cambio feed e dopo l'avvio del download.

---

## 3.5 Gli Stati degli Episodi

Ogni episodio nella lista è contrassegnato da un indicatore di stato. Comprendere questi stati è essenziale per interpretare correttamente la situazione dell'archivio.

| Stato | Etichetta nella lista | Significato |
|-------|-----------------------|-------------|
| **Da scaricare** | Tag **"NUOVO"** | L'episodio è presente nel feed ma non è mai stato scaricato. |
| **In coda** | Voce "in coda" nel Pannello Download | L'episodio attende il proprio turno nella coda di download. |
| **In pausa** | Voce "in pausa" nel Pannello Download | Il download è stato sospeso dall'utente e può riprendere dal punto raggiunto. |
| **In corso** | Barra di avanzamento animata | Il download è attivo. La riga mostra percentuale e velocità in tempo reale. |
| **Errore** | Riepilogo errori nel Pannello Download | Il download non è riuscito dopo tutti i tentativi automatici. |
| **Scaricato** | Tag **"ARCHIVIATO"** | Il file è nel database: scaricato e verificato, in questa sessione o in una precedente. |

*Nota sullo stato **"Scaricato"**:* Questo stato è il risultato della filosofia Database-First. Quando si analizza un feed già elaborato, la maggior parte degli episodi mostra il tag **"ARCHIVIATO"**: il software sa già che sono presenti nell'archivio. Solo gli episodi pubblicati dopo l'ultimo download appariranno con il tag **"NUOVO"**.

---

## 3.6 I Controlli di Download Individuali

A destra di ogni riga nella lista, al passaggio del mouse, compaiono i pulsanti di controllo specifici per quell'episodio. I pulsanti visibili variano in base allo stato:

**Per tutti gli episodi:**
*   **Copia titolo** (icona documento): Copia il titolo dell'episodio negli appunti di sistema.
*   **Casella di controllo:** Per la selezione multipla (vedi sezione 3.4).

**Per gli episodi Da Scaricare o in Errore:**
*   **Scarica** (freccia verso il basso): Aggiunge il singolo episodio alla coda di download.

**Per gli episodi Scaricati (tag "ARCHIVIATO"):**
*   **Riscarica** (freccia verso il basso): Aggiunge nuovamente l'episodio alla coda, sovrascrivendo il file esistente.
*   **Dimentica download** (icona aggiorna): Azzera lo stato dell'episodio, riportandolo a "Da scaricare" senza eliminare il file dal disco.
*   **Apri Cartella** (icona cartella): Apre il file manager di sistema sulla posizione del file scaricato.

**Interazione con il Pannello Dettaglio:**
Un **click semplice** sulla riga dell'episodio apre il Pannello Dettaglio (vedi la sezione 3.9) con i metadati completi e le azioni contestuali. Ctrl+click e Shift+click sono riservati esclusivamente alla selezione multipla e non aprono il pannello.

---

## 3.7 I Controlli del Batch

I controlli del batch operano sull'intera coda di download, non sui singoli episodi. Si trovano nell'intestazione del feed, sopra la barra filtri.

**"Scarica Tutto":** Aggiunge alla coda tutti gli episodi in stato **"Da Scaricare"**. Gli episodi già presenti nel database vengono esclusi automaticamente. Il Pannello Download si apre automaticamente all'avvio.

**"Scarica Selezionati (N)":** Appare quando almeno un episodio è selezionato. Avvia il download esclusivamente per gli episodi selezionati.

**"Ferma download":** Invia un segnale di cancellazione a tutti i download attivi e svuota la coda. I file già completati rimangono nel database. I file `.part` vengono eliminati. Gli episodi interrotti appariranno nuovamente con il tag **"NUOVO"**. Per una sospensione temporanea (senza perdere l'avanzamento) usare invece **"Pausa"** nel Pannello Download (vedi la sezione 3.8).

**"Esporta M3U":** Genera una playlist in formato `.m3u` con i percorsi assoluti locali di tutti gli episodi scaricati per quel podcast. Apre una finestra di salvataggio nativa. Il pulsante è disponibile solo quando sono presenti episodi scaricati per il feed corrente.

**"Apri cartella"** (icona cartella nell'intestazione): Apre il file manager nella cartella di destinazione del feed corrente.

---

## 3.8 Il Pannello Download

Il Pannello Download è il centro di monitoraggio e controllo di tutti i download in corso. Sostituisce la precedente barra di avanzamento fissa nella parte inferiore dell'interfaccia.

### Apertura e chiusura

Il pannello si apre **automaticamente** all'avvio di ogni batch. Quando è chiuso, è visibile il **pulsante flottante** (icona circolare) nell'angolo inferiore destro della finestra: cliccarlo riapre il pannello. La chiusura del pannello non interrompe i download in corso.

### Struttura del pannello

*   **Intestazione:** Mostra il contatore file completati/totale (es. `47 / 312`) e i controlli globali della coda: il pulsante **"Pausa"** (sospende l'intera coda; diventa **"Riprendi"** quando la coda è in pausa e l'intestazione mostra **"Coda in pausa"**), il pulsante **"Ferma download"** per interrompere definitivamente tutti i download, e il pulsante × per chiudere il pannello.
*   **Lista coda:** Ogni download in corso o in attesa è rappresentato da una riga con: titolo dell'episodio, nome del podcast, percentuale di avanzamento, velocità corrente (KB/s o MB/s), barra di avanzamento individuale. Se il server non dichiara la dimensione del file (intestazione `Content-Length` assente), la barra diventa **indeterminata** (animazione continua) e mostra i byte ricevuti. Passando il mouse sulla riga appaiono i pulsanti **"Metti in pausa"** (o **"Riprendi"** se in pausa) e × (**"Annulla download"**) per quel singolo episodio.
*   **Pausa non distruttiva:** La pausa — di un singolo download o dell'intera coda — conserva il file parziale `.part`: alla ripresa il trasferimento continua **dal punto in cui era arrivato**, senza ricominciare da zero.
*   **Sezione Errori:** Al termine del batch, se uno o più download sono falliti, appare nella parte inferiore del pannello un riepilogo espandibile con l'elenco degli episodi non scaricati e il relativo codice di errore, insieme al pulsante **"Riprova falliti"** che rimette in coda in un solo clic tutti gli episodi in errore.

---

## 3.9 Il Pannello Dettaglio Episodio

Il Pannello Dettaglio fornisce una vista approfondita di un singolo episodio: metadati, azioni e, se l'episodio è già nell'archivio, i dati tecnici del file scaricato.

### Come aprirlo

Un **click semplice** su qualsiasi riga della lista episodi apre il pannello, che scorre lateralmente nell'area destra della finestra (sotto la barra di comando). Il pannello si chiude automaticamente quando si seleziona un feed diverso nella barra laterale.

*Nota:* Ctrl+click e Shift+click sono riservati alla selezione multipla e non aprono il pannello.

### Contenuto del pannello

*   **Metadati base:** Data di pubblicazione, durata dichiarata, dimensione del file indicata nel feed.
*   **Azioni contestuali:** I pulsanti disponibili variano in base allo stato dell'episodio: Scarica, Riscarica, Dimentica download, Apri Cartella.
*   **Dati archivio** (visibili solo se l'episodio è già scaricato): Data e ora del download, dimensione reale del file, bitrate, sample rate, nome file sul disco, checksum SHA-256.
*   **Link sorgente:** L'URL originale del file audio nel feed RSS, con pulsante per copiarlo negli appunti.
*   **Note dell'episodio:** Il testo descrittivo dell'episodio estratto dal feed (show notes), presentato in formato testo pulito.

---

## 3.10 La Vista Archivio

La Vista Archivio è accessibile tramite la scheda **Archivio** nella barra laterale. A differenza della lista episodi, che mostra solo gli episodi di un feed alla volta, la Vista Archivio raccoglie in un'unica tabella **tutti gli episodi scaricati nell'intera libreria**, indipendentemente dal podcast di appartenenza.

### Funzionalità

*   **Ricerca:** Il campo di ricerca filtra per titolo dell'episodio o nome del podcast.
*   **Filtro per podcast:** Il menu a tendina consente di limitare la visualizzazione agli episodi di un singolo podcast.
*   **Ordinamento:** La tabella è ordinabile per data di download, data di pubblicazione, dimensione del file e bitrate.
*   **Statistiche:** L'intestazione della Vista Archivio mostra il numero totale di file scaricati, il numero di podcast distinti e la dimensione totale dell'archivio in gigabyte.
*   **Mostra in cartella:** Passando il mouse su una riga, appare il pulsante che apre il file manager nella posizione del file sul disco.

La Vista Archivio si aggiorna automaticamente al completamento di ogni download.

---

## 3.11 La Palette Comandi (Ctrl+K)

La Palette Comandi è uno strumento di accesso rapido che consente di raggiungere qualsiasi funzione principale del software senza usare il mouse.

### Come aprirla

La scorciatoia **Ctrl+K** (da qualsiasi punto dell'app, anche durante un download) apre un overlay con un campo di ricerca centrale.

### Navigazione

*   **Digitare** nel campo di ricerca filtra le azioni e i feed in tempo reale.
*   **Frecce ↑↓** spostano la selezione tra i risultati.
*   **Invio** esegue l'azione selezionata.
*   **Esc** chiude la palette senza eseguire alcuna azione.

### Contenuto

*   **Gruppo "Azioni":** Cinque comandi fissi sempre disponibili: *Apri Impostazioni*, *Sincronizza Tutti*, *Aggiungi Feed* (focalizza il campo URL), *Vai all'Archivio*, *Vai ai Feed*.
*   **Gruppo "Feed":** Quando il campo di ricerca è vuoto, mostra i primi feed della libreria. Digitando, filtra i feed per titolo. Selezionando un feed dalla palette, questo viene caricato direttamente nell'area principale.
*   **Gruppo "Episodi (feed corrente)":** Digitando, la palette cerca anche tra i titoli degli episodi del feed attualmente aperto. Selezionando un episodio, la lista viene filtrata su quel titolo.

---

## 3.12 L'Icona nel System Tray

Quando si chiude la finestra principale cliccando sulla X, FeedDownloader Pro non termina il processo: si riduce nell'area di notifica di sistema (system tray, vicino all'orologio). Questo comportamento è intenzionale: i download e il controllo automatico dei nuovi episodi proseguono in background mentre la finestra non è visibile.

**Interazione con l'icona del tray:**
*   **Clic sull'icona:** Mostra o nasconde la finestra principale.
*   **Menu contestuale (clic destro):** Contiene due voci — **"Show"** (riporta in primo piano la finestra) ed **"Quit"** (chiude il programma e interrompe tutti i download attivi).

*Nota pratica:* Per eseguire un download di grandi dimensioni senza tenere la finestra aperta, avviare il batch, chiudere la finestra e lasciare il computer in esecuzione. L'archivio sarà disponibile al completamento del processo.

---

*Vai al Capitolo 4 per un workflow completo dalla prima analisi al download.*