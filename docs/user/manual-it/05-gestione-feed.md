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
6.  **Aggiunta alla libreria:** Il feed viene inserito permanentemente nella barra laterale, se non è già presente. I feed già in libreria vengono aggiornati con il conteggio degli episodi più recente.

---

## 5.4 La Libreria dei Feed

FeedDownloader Pro mantiene una **libreria permanente dei feed**. Ogni feed analizzato viene salvato nella barra laterale e rimane disponibile tra le sessioni, senza necessità di reinserire l'URL ad ogni avvio.

### Visualizzazione

Ogni elemento della libreria mostra: la copertina del podcast (thumbnail), il titolo, la data dell'ultima sincronizzazione con il server e un badge numerico che indica quanti episodi sono stati pubblicati dopo l'ultimo download. Il badge scompare non appena tutti i nuovi episodi vengono scaricati.

Cliccando su un feed nella barra laterale, la lista degli episodi si aggiorna immediatamente nell'area principale.

### Rimuovere un feed dalla libreria

Per rimuovere un feed, passare il mouse sull'elemento nella barra laterale: compare il pulsante cestino nell'angolo destro della riga. Cliccarlo apre una finestra di conferma. La rimozione elimina il feed dalla libreria ma **non cancella i file audio già scaricati** né i relativi dati nel database; gli episodi rimangono visibili nella Vista Archivio.

### Ricerca e ordinamento

*   **Ricerca feed:** Il campo di ricerca nella parte superiore della barra laterale filtra i feed per nome in tempo reale. Utile con librerie di grandi dimensioni.
*   **Ordinamento A-Z:** Il pulsante di ordinamento ordina i feed alfabeticamente per titolo. Cliccarlo di nuovo ripristina l'ordine originale.

*Nota sulla privacy:* La libreria dei feed è salvata esclusivamente nel database locale. Nessun dato viene trasmesso a server esterni.

---

## 5.5 Importare Feed da OPML

**OPML** (Outline Processor Markup Language) è il formato standard per l'esportazione e l'importazione di liste di podcast tra applicazioni diverse. Se si dispone di una libreria podcast in un'app come Pocket Casts, Overcast, AntennaPod o qualsiasi altro client, è possibile esportarla in OPML e importarla direttamente in FeedDownloader Pro.

**Come importare un file OPML:**
1.  Andare in **Impostazioni → Archivio**, sezione "Dati e Portabilità".
2.  Cliccare su **Importa Feed (OPML)** e selezionare il file `.opml` esportato dall'applicazione di podcast.
3.  FeedDownloader Pro analizza il file e aggiunge i feed individuati alla libreria.

*Nota:* Alcune applicazioni di podcast utilizzano varianti proprietarie del formato OPML. FeedDownloader Pro supporta le versioni più diffuse. Se un file non viene importato correttamente, aprirlo con un editor di testo e verificare la presenza di tag `<outline type="rss" xmlUrl="...">` per ogni podcast.

---

## 5.6 Esportare la Libreria in OPML

È possibile esportare la libreria dei feed in formato OPML per:
*   Creare un backup della lista di podcast.
*   Condividerla con altri utenti o con un'altra installazione del software.
*   Importarla in un'applicazione di podcast per seguire gli stessi feed.

**Come esportare:**
1.  Andare in **Impostazioni → Archivio**, sezione "Dati e Portabilità".
2.  Cliccare su **Esporta Feed (OPML)** e scegliere un nome e una posizione per il file.
3.  Il file generato è compatibile con qualsiasi applicazione che supporti lo standard OPML.

---

## 5.7 Feed di Grandi Dimensioni

Alcuni podcast storici o archivi di produzione radiofonica possono avere feed con migliaia di episodi e file RSS di dimensioni considerevoli. In questi casi:

*   **L'analisi iniziale richiede più tempo:** Un feed con 2.000 episodi può richiedere 15–30 secondi per il download e il parsing. Questo comportamento è atteso.
*   **Virtualizzazione della lista:** Con migliaia di voci, la lista carica solo le righe visibili a schermo per mantenere l'interfaccia reattiva.
*   **Stima dello spazio necessario:** Con 2.000 episodi a circa 50 MB ciascuno, il volume totale è di circa 100 GB. Verificare la disponibilità di spazio sufficiente prima di procedere.

---

## 5.8 Gestione di Più Feed

FeedDownloader Pro gestisce nativamente una libreria di feed multipli. Non c'è limite al numero di podcast che è possibile aggiungere: tutti vengono conservati nella barra laterale e rimangono accessibili tra una sessione e l'altra.

### Navigare tra i feed

Cliccando su un feed nella barra laterale, la lista degli episodi nell'area principale si aggiorna immediatamente. Il software ricorda quale feed era selezionato all'ultima chiusura.

### Sincronizzare i feed

*   **Sincronizzazione individuale:** Passare il mouse su un elemento feed nella barra laterale per visualizzare l'icona di sincronizzazione. Cliccandola, il software rilegge quel feed dal server e aggiorna la lista con gli eventuali nuovi episodi.
*   **Sincronizza tutti:** Il pulsante "Sincronizza tutti" aggiorna tutti i feed in parallelo con un'unica operazione. Durante il processo, ogni thumbnail nella barra laterale mostra il proprio stato in tempo reale. Al termine, eventuali nuovi episodi vengono evidenziati con il badge episodi nuovi.

Per l'aggiornamento automatico programmato senza intervento manuale, vedi la sezione 5.9.

---

## 5.9 Aggiornamento Automatico dei Feed

FeedDownloader Pro può sincronizzare automaticamente tutti i feed a intervalli regolari, in background, senza richiedere alcuna azione da parte dell'utente.

### Configurazione

L'impostazione si trova in **Impostazioni → Generale → Aggiornamento automatico feed**. Sono disponibili quattro opzioni:

| Opzione | Comportamento |
|---------|--------------|
| **Disattivato** (predefinito) | Nessuna sincronizzazione automatica. |
| **Ogni 6 ore** | Il software sincronizza tutti i feed ogni 6 ore dall'avvio. |
| **Ogni 12 ore** | Il software sincronizza tutti i feed ogni 12 ore dall'avvio. |
| **Ogni 24 ore** | Il software sincronizza tutti i feed una volta ogni 24 ore dall'avvio. |

Il cambio di impostazione è immediato e non richiede il riavvio del software. Il timer parte dall'avvio dell'applicazione.

### Comportamento

L'aggiornamento automatico **non avvia download**: si limita a verificare se sono stati pubblicati nuovi episodi. Se durante la sincronizzazione automatica vengono trovati nuovi episodi su uno o più feed, il sistema invia una **notifica del sistema operativo** con il riepilogo dei contenuti trovati (disponibile in tutte e 8 le lingue supportate).

Per scaricare i nuovi episodi segnalati, aprire il software e usare i normali controlli del batch.

---

*Vai al Capitolo 6 per una descrizione dettagliata del motore di download.*