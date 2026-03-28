# Capitolo 5: Gestione dei Feed

## 5.1 Cos'è un Feed RSS

Un feed RSS è un documento XML pubblicato da un podcast per consentire alle applicazioni di leggere automaticamente la lista degli episodi disponibili. Quando un editore pubblica un nuovo episodio, aggiorna questo documento aggiungendo una nuova voce. Le applicazioni di podcast leggono periodicamente questi documenti per identificare i contenuti più recenti.

Per FeedDownloader Pro, il feed RSS è la **fonte primaria di dati**: contiene la lista degli episodi, gli URL dei file audio, i metadati (titolo, data, durata, descrizione, copertina) e le informazioni generali sul podcast (nome, autore, categoria).

La conoscenza della struttura interna di un feed RSS non è necessaria per utilizzare il software, ma facilita l'interpretazione dei dati visualizzati nella lista degli episodi e la comprensione delle cause di eventuali informazioni mancanti o incomplete.

---

## 5.2 Feed Validi e Feed Problematici

Non tutti i feed RSS rispettano lo stesso livello di conformità agli standard.

**Feed ben formato:** Segue lo standard RSS 2.0 o Atom, include tutti i campi obbligatori (titolo, link, data di pubblicazione, URL audio con tipo MIME) e, facoltativamente, i tag iTunes/Podcast Index per durata, copertina e stagioni. FeedDownloader Pro legge questi feed senza problemi.

**Feed parzialmente incompleto:** Mancano alcuni campi facoltativi (durata, dimensione file, copertina dell'episodio). Il software scarica comunque i file audio, ma alcune colonne della lista resteranno vuote.

**Feed con URL audio non raggiungibili:** Il feed è leggibile, ma gli URL dei file audio puntano a risorse non più esistenti (errore 404). Questa situazione è frequente con podcast abbandonati o migrati su altri server. FeedDownloader Pro segnala questi episodi con stato **"Errore"** dopo il tentativo di download.

**Feed protetti da autenticazione:** Alcuni podcast privati o a pagamento richiedono credenziali HTTP Basic per accedere al feed. Il software supporta questi feed: le credenziali si includono direttamente nell'URL nel formato `https://utente:password@www.esempio.it/feed.xml`.

---

## 5.3 Analizzare un Feed: Dettaglio

Quando si clicca su **"Analizza"**, FeedDownloader Pro esegue le seguenti operazioni in sequenza:

1.  **Validazione URL:** Verifica che l'URL sia sintatticamente corretto e che superi i 5 controlli anti-SSRF (vedi il Capitolo 10 per i dettagli).
2.  **Richiesta HTTP:** Contatta il server del feed con un user-agent standard. Il timeout per questa operazione è di 30 secondi.
3.  **Parsing XML:** Legge e analizza il documento RSS o Atom. Il software gestisce feed con lievi deviazioni dagli standard (encoding non dichiarato, tag mancanti, namespace non convenzionali).
4.  **Deduplicazione:** Per ogni episodio nel feed, il database viene interrogato per verificare se l'episodio è già stato scaricato. L'URL audio viene utilizzato come chiave di identificazione univoca.
5.  **Popolamento della lista:** Tutti gli episodi vengono visualizzati con il loro stato attuale.

---

## 5.4 Cronologia dei Feed

FeedDownloader Pro mantiene una **cronologia dei feed analizzati**. Ogni URL inserito nel campo di ricerca viene memorizzato insieme al nome del podcast e al numero di episodi, per semplificare gli accessi futuri.

**Accedere alla cronologia:**
Cliccare sulla freccia a destra del campo URL oppure iniziare a digitare: il software propone suggerimenti automatici basati sulla cronologia.

**Gestire la cronologia:**
Nelle impostazioni è possibile visualizzare l'elenco completo dei feed in cronologia, rimuovere singole voci o svuotare completamente la lista.

*Nota sulla privacy:* La cronologia è salvata esclusivamente nel database locale `feeddownloader.db`. Nessun dato viene trasmesso a server esterni.

---

## 5.5 Importare Feed da OPML

**OPML** (Outline Processor Markup Language) è il formato standard per l'esportazione e l'importazione di liste di podcast tra applicazioni diverse. Se si dispone di una libreria podcast in un'app come Pocket Casts, Overcast, AntennaPod o qualsiasi altro client, è possibile esportarla in OPML e importarla direttamente in FeedDownloader Pro.

**Come importare un file OPML:**
1.  Andare in **Impostazioni → Archivio**, sezione "Dati e Portabilità".
2.  Selezionare il file `.opml` esportato dall'applicazione di podcast.
3.  FeedDownloader Pro analizza il file e mostra l'elenco dei podcast individuati, con la possibilità di selezionare quelli di interesse.
4.  I feed selezionati vengono aggiunti alla cronologia e, facoltativamente, analizzati in sequenza automatica.

*Nota:* Alcune applicazioni di podcast utilizzano varianti proprietarie del formato OPML. FeedDownloader Pro supporta le versioni più diffuse. Se un file non viene importato correttamente, aprirlo con un editor di testo e verificare la presenza di tag `<outline type="rss" xmlUrl="...">` per ogni podcast.

---

## 5.6 Esportare la Libreria in OPML

È possibile esportare la cronologia dei feed in formato OPML per:
*   Creare un backup della lista di podcast.
*   Condividerla con altri utenti o con un'altra installazione del software.
*   Importarla in un'applicazione di podcast per seguire gli stessi feed.

**Come esportare:**
1.  Andare in **Impostazioni → Archivio**, sezione "Dati e Portabilità".
2.  Scegliere un nome e una posizione per il file `.opml`.
3.  Il file generato è compatibile con qualsiasi applicazione che supporti lo standard OPML.

---

## 5.7 Feed di Grandi Dimensioni

Alcuni podcast storici o archivi di produzione radiofonica possono avere feed con migliaia di episodi e file RSS di dimensioni considerevoli. In questi casi:

*   **L'analisi iniziale richiede più tempo:** Un feed con 2.000 episodi può richiedere 15–30 secondi per il download e il parsing. Questo comportamento è atteso.
*   **Virtualizzazione della lista:** Con migliaia di voci, la lista carica solo le righe visibili a schermo per mantenere l'interfaccia reattiva.
*   **Stima dello spazio necessario:** Con 2.000 episodi a circa 50 MB ciascuno, il volume totale è di circa 100 GB. Il software mostra una stima della dimensione totale prima dell'avvio del batch. Verificare la disponibilità di spazio sufficiente prima di procedere.

---

## 5.8 Limitazioni del Feed Multiplo

FeedDownloader Pro analizza un feed alla volta. Non dispone di un gestore di feed permanenti con aggiornamento automatico: il software è ottimizzato per il download batch, non per il monitoraggio continuo di più feed.

Per gestire più feed in sequenza, la strategia consigliata è:
1.  Usare la funzione OPML per mantenere la lista dei feed in un file centralizzato.
2.  Analizzare e scaricare un podcast alla volta, procedendo in modo sistematico.
3.  Usare la cronologia dei feed per richiamare rapidamente un podcast già analizzato.

---

*Vai al Capitolo 6 per una descrizione dettagliata del motore di download.*
