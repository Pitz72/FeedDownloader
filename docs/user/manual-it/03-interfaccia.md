# Capitolo 3: Tour dell'Interfaccia

## 3.1 Anatomia della Finestra Principale

All'apertura di FeedDownloader Pro, l'interfaccia è organizzata verticalmente in tre zone funzionali:

*   **Zona di comando (in alto):** La barra di inserimento URL e i controlli principali. Da qui si avviano tutte le operazioni.
*   **Zona di lavoro (al centro):** L'area principale, dove vengono visualizzati gli episodi analizzati con le relative informazioni e i controlli di download individuali.
*   **Zona di stato (in basso):** La barra di avanzamento globale con le informazioni sul batch in corso.

---

## 3.2 La Barra di Comando (In Alto)

**Campo URL:** La barra di testo dove si inserisce l'indirizzo RSS del podcast da analizzare. Accetta URL diretti a file XML/RSS. Supporta il **drag and drop**: è possibile trascinare un link direttamente da un browser su quest'area.

**Pulsante "Analizza":** Avvia l'analisi del feed. Il software contatta l'URL, legge il file RSS e popola la lista degli episodi. L'operazione richiede generalmente da 1 a 5 secondi, in base alla dimensione del feed e alla velocità della connessione.

**Campo Percorso di Destinazione:** Indica la cartella in cui verranno salvati i file scaricati. Cliccando sull'icona della cartella adiacente si apre la finestra di selezione. Il percorso impostato viene mantenuto tra le sessioni.

**Icona Impostazioni (⚙):** Apre il pannello delle impostazioni. È accessibile in qualsiasi momento, anche durante un download in corso. Per i dettagli, vedi il Capitolo 10.

---

## 3.3 La Lista degli Episodi (Al Centro)

Dopo l'analisi di un feed, quest'area viene popolata con la lista degli episodi disponibili. Ogni riga rappresenta un episodio e contiene le seguenti informazioni.

**Colonne principali:**

*   **Titolo:** Il nome dell'episodio come definito nel feed RSS.
*   **Data:** La data di pubblicazione originale dell'episodio.
*   **Durata:** La durata dell'episodio (quando disponibile nel feed).
*   **Dimensione:** La dimensione stimata del file (quando disponibile nel feed). Prima del download, il dato è dichiarativo; dopo il download, riflette la dimensione reale del file.
*   **Stato:** L'indicatore visivo dello stato del singolo episodio. Vedi la sezione 3.4.
*   **Azioni:** I pulsanti di controllo individuali per ogni episodio.

**Ordinamento:**
Le intestazioni delle colonne sono cliccabili per ordinare la lista (per data, per titolo, per dimensione). Il comportamento predefinito è la visualizzazione con gli episodi più recenti in cima.

**Selezione multipla:**
Tenendo premuto `Ctrl` e cliccando su più episodi è possibile selezionarli singolarmente. `Shift` + clic seleziona un intervallo. Sugli episodi selezionati è possibile applicare azioni collettive (avvio download, rimozione dalla lista).

---

## 3.4 Gli Stati degli Episodi

Ogni episodio nella lista è contrassegnato da un indicatore di stato colorato. Comprendere questi stati è essenziale per interpretare correttamente la situazione dell'archivio.

| Stato | Colore | Significato |
|-------|--------|-------------|
| **Da Scaricare** | Grigio | L'episodio è presente nel feed ma non è mai stato scaricato. |
| **In Coda** | Blu | L'episodio è stato aggiunto alla coda e attende il proprio turno. |
| **In Corso** | Azzurro animato | Il download è in corso. La cella mostra anche la percentuale di avanzamento. |
| **Completato** | Verde | Il file è stato scaricato, rinominato e verificato correttamente. |
| **Errore** | Rosso | Il download non è riuscito dopo tutti i tentativi automatici. Il tooltip mostra il codice di errore. |
| **Scaricato** | Verde tenue | Il database registra già questo episodio come scaricato. Non verrà riscaricato. |

*Nota sullo stato **"Scaricato"**:* Questo stato è il risultato della filosofia Database-First. Quando si analizza un feed già elaborato in precedenza, la maggior parte degli episodi risulta in questo stato: il software sa già che sono presenti nell'archivio. Solo gli episodi pubblicati dopo l'ultimo download appariranno come **"Da Scaricare"**.

---

## 3.5 I Controlli di Download Individuali

A destra di ogni riga nella lista sono presenti due pulsanti.

**Icona Download (↓):** Aggiunge il singolo episodio alla coda di download. Se l'episodio è già in stato **"Completato"** o **"Scaricato"**, il sistema richiede conferma prima di procedere a un re-download forzato.

**Icona Informazioni (ℹ):** Apre un pannello con i dettagli completi dell'episodio: URL originale dell'audio, URL dell'immagine di copertina, descrizione estesa, percorso del file sul disco (se già scaricato), hash SHA-256 e metadati tecnici. Questo pannello è utile per la verifica e la diagnostica dell'archivio.

---

## 3.6 I Controlli del Batch (In Alto, Area Destra)

Questi pulsanti operano sull'intera coda di download, non sui singoli episodi.

**"Scarica Tutto":** Aggiunge alla coda tutti gli episodi in stato **"Da Scaricare"**. Gli episodi già presenti nel database vengono esclusi automaticamente.

**"Ferma":** Interrompe il batch e svuota la coda. I file già completati rimangono nel database. I file `.part` vengono eliminati. Alla successiva analisi dello stesso feed, gli episodi interrotti appariranno nuovamente come **"Da Scaricare"**.

---

## 3.7 La Barra di Avanzamento Globale (In Basso)

La barra inferiore è sempre visibile e mostra lo stato complessivo del batch in corso:

*   **Barra di avanzamento:** Riempimento proporzionale al numero di file completati sul totale della coda.
*   **Contatore file:** Ad esempio `47 / 312 episodi` — numero di file completati sul totale della coda.
*   **Velocità media:** Velocità di download aggregata di tutti i thread attivi, espressa in MB/s o KB/s.
*   **Tempo stimato:** Stima del tempo rimanente per completare il batch, calcolata sulla velocità media degli ultimi 30 secondi.

*Nota:* La stima del tempo rimanente può variare significativamente nelle prime fasi di un download, quando i dati disponibili per il calcolo sono ancora limitati. Diventa più affidabile dopo i primi 10–15 file completati.

---

## 3.8 L'Icona nel System Tray

Quando si chiude la finestra principale cliccando sulla X, FeedDownloader Pro non termina il processo: si riduce nell'area di notifica di sistema (system tray, vicino all'orologio di Windows o macOS). Questo comportamento è intenzionale: i download proseguono in background mentre la finestra non è visibile.

**Menu contestuale del tray (clic destro sull'icona):**
*   **Apri FeedDownloader Pro:** Riporta in primo piano la finestra principale.
*   **Stato Download:** Mostra una riga di riepilogo (es. `Downloading: 3 active, 47/312 completed`).
*   **Esci:** Chiude il programma e interrompe tutti i download attivi.

*Nota pratica:* Per eseguire un download di grandi dimensioni senza tenere la finestra aperta, avviare il batch, chiudere la finestra e lasciare il computer in esecuzione. L'archivio sarà disponibile al completamento del processo.

---

*Vai al Capitolo 4 per un workflow completo dalla prima analisi al download.*
