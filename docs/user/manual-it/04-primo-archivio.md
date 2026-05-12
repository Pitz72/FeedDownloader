# Capitolo 4: Il Primo Archivio — Guida Passo-Passo

## 4.1 Introduzione al Workflow

Questo capitolo descrive un workflow completo, dall'URL di un podcast a un archivio ordinato sul disco. Lo scenario di riferimento è il più comune: scaricare l'intero catalogo di un podcast per la prima volta.

Si consiglia di leggere il capitolo dall'inizio alla fine almeno una volta. Acquisita familiarità con i passaggi, l'avvio di un nuovo archivio richiede meno di un minuto.

---

## 4.2 Fase 1: Trovare l'URL RSS

Il punto di partenza è l'URL del feed RSS del podcast da archiviare. Un feed RSS è un file di testo in formato XML che i servizi di podcast pubblicano per distribuire la lista degli episodi disponibili. Ogni podcast dispone di un feed RSS.

**Come trovare l'URL RSS:**

*   **Sul sito web del podcast:** Cercare un'icona arancione con le onde radio, oppure i testi "RSS", "Feed", "Subscribe" o "Podcast Feed". Cliccando sull'elemento si apre generalmente il file XML nel browser: l'URL visualizzato nella barra degli indirizzi è quello da utilizzare.
*   **Da un'app di podcast:** Applicazioni come Pocket Casts, Apple Podcasts e simili mostrano spesso il link RSS nelle informazioni del podcast. Su alcune app il link è accessibile tramite la funzione "Condividi".
*   **Da servizi di hosting:** Se il podcast è ospitato su Spreaker, Podbean, Buzzsprout o piattaforme equivalenti, l'URL del feed è di solito disponibile nel pannello del publisher o nelle informazioni pubbliche del podcast.
*   **Da un motore di ricerca:** Cercare `[Nome Podcast] RSS feed`. Il primo risultato porta spesso direttamente all'URL corretto.

*Come riconoscere un URL RSS valido:* Generalmente termina con `.xml` o `.rss`, oppure contiene parole come `feed`, `rss` o `podcast` nel percorso. Esempi: `https://www.esempio.it/feed.xml`, `https://feeds.spreaker.com/podcast/12345`, `https://anchor.fm/s/abc123/podcast/rss`.

---

## 4.3 Fase 2: Preparare la Cartella di Destinazione

Prima di analizzare il feed, conviene definire la cartella di destinazione. Si consiglia di creare una struttura organizzata fin dall'inizio.

**Struttura consigliata:**
```
D:\Archivio Podcast\
    ├── Il Mio Podcast\
    ├── Podcast di Tecnologia\
    └── Radio Talk Show\
```

Creare la cartella specifica per il podcast da archiviare (es. `D:\Archivio Podcast\Il Mio Podcast\`). FeedDownloader Pro salverà tutti i file di quel podcast in quella cartella, con i nomi definiti dal template di rinomina (vedi il Capitolo 8).

**Per impostare la cartella di destinazione in FeedDownloader Pro:**

1.  Aprire **Impostazioni → Archivio** e cliccare sull'icona della **cartella** accanto al campo del percorso di destinazione.
2.  Navigare fino alla cartella creata e selezionarla.
3.  Il percorso impostato è sempre visibile nel footer della barra laterale sinistra; cliccarlo apre la cartella direttamente nel file manager.

*Nota:* Per i percorsi su NAS o dischi di rete, consultare il Capitolo 7 prima di procedere. La configurazione per i percorsi di rete presenta alcune specificità descritte in quel capitolo.

---

## 4.4 Fase 3: Analizzare il Feed

Con l'URL pronto e la cartella di destinazione impostata:

1.  Incollare l'URL RSS nel **campo URL** in cima all'interfaccia.
2.  Cliccare su **"Analizza"** (oppure premere `Invio`).
3.  La lista al centro viene popolata con gli episodi. Per un podcast con 200–300 episodi l'operazione richiede tipicamente 2–5 secondi. Per archivi molto grandi (1000+ episodi), possono essere necessari fino a 15–20 secondi, poiché il file XML del feed può raggiungere dimensioni considerevoli.

**In caso di errore di analisi:**
*   Verificare che l'URL sia corretto (nessuno spazio iniziale o finale, nessun carattere mancante).
*   Aprire l'URL nel browser: se il browser restituisce un errore o una pagina vuota, il feed potrebbe essere temporaneamente non disponibile o l'URL potrebbe essere cambiato.
*   Alcuni feed richiedono intestazioni HTTP specifiche. In questo caso il software mostra un messaggio di errore con il codice HTTP ricevuto (ad esempio `403 Forbidden`).

---

## 4.5 Fase 4: Leggere i Risultati dell'Analisi

Dopo l'analisi, la lista mostra tutti gli episodi del podcast.

**Elementi da verificare:**
*   **Numero totale di episodi:** Visibile nell'intestazione della lista o nel contatore in basso. Un podcast attivo da diversi anni può avere 300–500 episodi o più.
*   **Episodi in stato **"Scaricato"**:** Se il podcast è già stato analizzato in precedenza, la maggior parte degli episodi apparirà in questo stato. Il database registra già questi file come presenti nell'archivio.
*   **Episodi con dati mancanti:** È possibile che alcuni episodi non riportino durata o dimensione. Questo indica che il produttore del podcast non ha incluso queste informazioni nel file RSS. Il download viene eseguito correttamente in ogni caso.

---

## 4.6 Fase 5: Avviare il Download

Sono disponibili due modalità di download.

**Modalità A — Download completo:**
Cliccare su **"Scarica Tutto"**. Il software aggiunge alla coda tutti gli episodi in stato **"Da Scaricare"** e avvia i download in parallelo. Il numero di download simultanei dipende dall'impostazione dei thread (vedi il Capitolo 10; il valore predefinito è 3).

**Modalità B — Download selettivo:**
Per scaricare solo determinati episodi:
1.  Selezionare gli episodi tenendo premuto `Ctrl` e cliccando su ciascuno.
2.  Per selezionare un intervallo, cliccare sul primo episodio, tenere premuto `Shift` e cliccare sull'ultimo.
3.  Cliccare il pulsante **"Scarica Selezionati (N)"** che appare nell'intestazione del feed quando almeno un episodio è selezionato.

---

## 4.7 Fase 6: Monitorare il Progresso

Durante il download:

*   **Pannello Download:** Si apre automaticamente a destra della finestra all'avvio del batch. Mostra ogni episodio in coda con percentuale, velocità e tempo stimato al completamento. Per un archivio da 200 episodi a 64 kbps di media, il volume di dati totale è di circa 2–3 GB.
*   **Stato nella lista:** Ogni riga si aggiorna in tempo reale. Gli episodi in corso mostrano una barra di avanzamento individuale con la percentuale completata.
*   **Esecuzione in background:** Non è necessario mantenere la finestra aperta. È possibile chiuderla (il programma continua a operare nel system tray) e riaprirla al completamento del processo.

Il software gestisce automaticamente i retry in caso di errore di rete, la stall detection in caso di server lenti e la verifica dell'integrità al completamento di ogni file. Se il computer entra in modalità sospensione, i download vengono interrotti e ripresi automaticamente al ripristino della sessione.

---

## 4.8 Fase 7: Verificare l'Archivio Completato

Quando il Pannello Download mostra il batch completato e tutti gli episodi risultano in stato verde, l'archivio è pronto.

**Operazioni consigliate al completamento:**

1.  **Controllare gli errori:** Se alcuni episodi mostrano lo stato **"Errore"** (rosso), cliccarci sopra per aprire il Pannello Dettaglio e leggere il codice di errore. In alternativa, consultare la sezione riepilogo errori in fondo al Pannello Download. La causa più comune è `404 Not Found`, che indica la rimozione del file dal server del podcast prima del download.

2.  **Esportare un riepilogo CSV:** Andare in **Impostazioni → Archivio → Esporta CSV**. Il file generato elenca tutti gli episodi scaricati con hash SHA-256, dimensioni e metadati (vedi il Capitolo 9).

3.  **Verificare i file sul disco:** Aprire la cartella di destinazione nel gestore file. I file audio sono organizzati secondo il template di rinomina configurato (vedi il Capitolo 8). La presenza di file `.part` indica download interrotti, che verranno completati all'avvio successivo del batch.

---

## 4.9 Aggiornare l'Archivio in Futuro

Il sistema Database-First semplifica gli aggiornamenti dell'archivio. Il procedimento varia in base al fatto che il feed sia già presente nella libreria o meno.

**Feed già nella barra laterale:**

1.  Cliccare sul feed nella barra laterale per selezionarlo.
2.  Passare il mouse sull'elemento e cliccare l'icona di sincronizzazione, oppure usare il pulsante **"Sincronizza tutti"** per aggiornare l'intera libreria in parallelo.
3.  Gli episodi nuovi compaiono in stato **"Da Scaricare"**; quelli già presenti restano in **"Scaricato"**.
4.  Cliccare su **"Scarica Tutto"** per scaricare i soli episodi nuovi.

**Feed non ancora in libreria:**

Incollare l'URL RSS nel campo URL in cima all'interfaccia e cliccare **"Analizza"**: il feed viene aggiunto alla libreria e la lista viene popolata con lo stato corrente.

Il sistema non scarica mai due volte lo stesso episodio. È possibile anche configurare un aggiornamento automatico periodico (vedi il Capitolo 10 e la sezione 5.9).

---

*Vai al Capitolo 5 per approfondire la gestione dei feed e le funzionalità OPML.*
