# Capitolo 5: Gestione dei feed

## 5.1 Cos’è un feed RSS

Un feed RSS è un documento XML che il podcast pubblica perché i programmi possano leggerne l’elenco
degli episodi. Quando esce una puntata nuova, chi pubblica aggiunge una voce a quel documento; i
lettori lo rileggono ogni tanto e si accorgono della novità.

Per FeedDownloader Pro il feed è la sorgente di tutto: contiene la lista degli episodi, gli
indirizzi dei file audio, i metadati (titolo, data, durata, numerazione, descrizione, copertina) e
le informazioni generali sul programma.

Non serve conoscerne la struttura interna per usare il software. Aiuta però a capire perché a volte
mancano dati nell’elenco: quasi sempre è il feed a non dichiararli.

---

## 5.2 Feed ben fatti e feed problematici

La conformità agli standard, nel mondo dei podcast, è un’aspirazione più che una regola.

**Feed ben formato.** Rispetta RSS 2.0 o Atom, dichiara titolo, collegamento, data e indirizzo audio
con il tipo MIME, e magari aggiunge i tag iTunes o Podcast Index per durata, copertina, stagione ed
episodio. Il programma lo legge senza difficoltà.

**Feed incompleto.** Mancano campi facoltativi come durata, dimensione, numerazione o copertina
dell’episodio. I file si scaricano lo stesso, ma nell’elenco qualche informazione resterà vuota.

**Feed con audio irraggiungibile.** Il documento si legge, ma gli indirizzi dei file puntano a
risorse sparite. Succede spesso con programmi abbandonati o migrati altrove. Gli episodi finiscono
tra i non riusciti dopo il tentativo di download.

**Feed protetti da password.** Alcuni podcast privati chiedono credenziali HTTP Basic. Si possono
mettere direttamente nell’indirizzo: `https://utente:password@www.esempio.it/feed.xml`. Le
credenziali restano allora scritte nell’indirizzo salvato in libreria e nelle esportazioni OPML.

---

## 5.3 Cosa succede quando si preme Analizza

In sequenza:

1. **Controllo dell’indirizzo.** Sintassi corretta e superamento delle verifiche contro gli attacchi
   SSRF (capitolo 10, sezione 10.8).
2. **Richiesta al server.** Il programma si presenta con un nome riconoscibile
   (`RuntimeFeedDownloader`) e rinuncia dopo quindici secondi senza risposta. Lo stesso indirizzo
   non può essere richiesto due volte a meno di tre secondi di distanza.
3. **Lettura del documento.** Legge RSS o Atom e tollera le deviazioni più comuni: codifica non
   dichiarata, tag mancanti, namespace inventati. Se l’indirizzo porta a una pagina web invece che a
   un feed, lo dice.
4. **Pagine successive.** Se il feed è diviso in pagine collegate, le segue e ricompone il catalogo
   (sezione 5.8).
5. **Anteprima.** La finestra **Aggiungi un feed** mostra copertina, titolo, numero di episodi e
   intervallo coperto.
6. **Ingresso in libreria.** Con **Aggiungi alla libreria** il feed entra nella barra laterale. Il
   programma registra in quel momento gli identificatori univoci degli episodi presenti, i GUID:
   saranno il riferimento per riconoscere, ai controlli successivi, quali episodi sono nuovi.

Per riconoscere gli episodi già archiviati il programma usa il GUID; quando il feed non lo dichiara,
al suo posto vale l’indirizzo del file audio.

Il feed letto resta in memoria per cinque minuti: riaprirlo in quel tempo non genera una nuova
richiesta al server. **Aggiorna**, nell’intestazione del feed, scavalca questa copia e rilegge
subito.

---

## 5.4 La libreria dei feed

I feed aggiunti restano salvati: non serve reincollare gli indirizzi a ogni avvio. La libreria si
vede in due punti.

* **Nella barra laterale**, con copertina, titolo e una riga di stato: **N da scaricare**, **Tutto
  archiviato** oppure **Non ancora controllato**, e il segno **auto** per l’archivio automatico.
  Sopra l’elenco ci sono **Cerca un feed…** e **Ordina dalla A alla Z** (capitolo 3, sezione 3.3).
* **Nella vista Libreria**, in forma di tabella ordinabile con episodi, archiviati, da scaricare,
  spazio occupato e data dell’ultimo controllo (capitolo 3, sezione 3.4).

Il conteggio degli episodi da scaricare nasce dal confronto fra gli episodi del feed e quelli
registrati in archivio.

### Togliere un feed

1. Aprire il feed.
2. Premere **Rimuovi** nell’intestazione (l’icona del cestino nelle finestre più strette).
3. Confermare con **Rimuovi il feed**.

La rimozione cancella il feed dalla libreria ma **non tocca i file audio già scaricati** né la loro
registrazione: gli episodi restano nella vista Archivio.

*Sulla riservatezza.* La libreria vive soltanto nel database locale. Il programma non manda i feed
a nessuno.

---

## 5.5 Importare feed da un file OPML

OPML è il formato con cui le applicazioni di podcast si scambiano le liste di sottoscrizioni. Una
libreria tenuta in Pocket Casts, Overcast, AntennaPod o simili si può esportare e portare qui.

1. Premere **Importa da OPML**: si trova in fondo alla barra laterale, nella vista Libreria, nella
   finestra **Aggiungi un feed**, in **Impostazioni → Archivio** e nella palette comandi.
2. Scegliere il file `.opml` (o `.xml`).
3. Il programma aggiunge alla libreria i feed che trova e lo conferma (*12 feed nuovi importati.*).

Subito dopo parte un controllo di tutti i feed, che recupera titoli veri, copertine e conteggi al
posto dei nomi riportati nel file OPML.

Da sapere:

* l’importazione **non modifica i feed già presenti**: se un indirizzo c’è già, resta com’era
  (*Nessun feed nuovo: erano già tutti nella libreria.*);
* vengono accettati solo indirizzi HTTP e HTTPS che superano gli stessi controlli di sicurezza di un
  indirizzo scritto a mano;
* un file OPML può contenere al massimo 2000 feed e pesare al massimo 5 MB.

*Se l’importazione non riesce* (*Il file OPML non si è potuto leggere.*), conviene aprire il file
con un editor di testo e cercare le righe `<outline type="rss" xmlUrl="...">`: alcune applicazioni
usano varianti proprietarie del formato e omettono proprio quelle.

---

## 5.6 Esportare la libreria in OPML

L’esportazione serve a tenere una copia della lista, a spostarla su un’altra installazione o a
seguire gli stessi programmi con un’app di ascolto.

1. Aprire **Impostazioni → Archivio**, sezione **Elenco dei feed (OPML)**.
2. Premere **Esporta in OPML** e scegliere nome e posizione (di serie `feeds.opml`).

Il file prodotto è leggibile da qualsiasi applicazione che supporti lo standard.

---

## 5.7 Esportare una playlist M3U

**Esporta playlist M3U**, nell’intestazione del feed, crea una playlist `.m3u` con i percorsi dei
file archiviati di quel podcast, dal più recente al più vecchio per data di pubblicazione, e apre la
finestra di salvataggio. I percorsi puntano alla posizione reale di ogni file, anche quando file
diversi stanno in cartelle diverse.

Se per quel podcast non c’è ancora nulla nell’archivio, il programma lo segnala (*Nessun episodio
archiviato da mettere nella playlist.*) invece di creare un file vuoto.

---

## 5.8 Feed molto grandi

I podcast storici e gli archivi radiofonici arrivano facilmente a migliaia di episodi.

**Paginazione RFC 5005.** Molte piattaforme pubblicano nel feed solo le puntate recenti e spezzano
il resto in pagine collegate fra loro con il link `rel="next"`. Il programma segue quei collegamenti
da sé e ricompone il catalogo in un unico elenco. Ogni pagina passa dagli stessi controlli di
sicurezza di un indirizzo scritto a mano, e una pagina rovinata non fa perdere quelle già lette. Il
numero di pagine seguite si ferma a venti: è un tetto di sicurezza contro i feed che si rimandano
l’un l’altro all’infinito, e su cataloghi enormi significa che la parte più antica potrebbe restare
fuori.

**L’analisi dura di più.** Duemila episodi, o un feed spezzato in molte pagine, possono richiedere
dai quindici ai trenta secondi. È normale.

**L’elenco resta leggero.** Anche con migliaia di voci vengono disegnate solo le righe visibili a
schermo.

**Lo spazio.** Duemila episodi da una cinquantina di megabyte fanno un centinaio di gigabyte: il
pannello **Che cosa scaricherà** e la finestra di conferma riportano la stima prima di cominciare.

---

## 5.9 Controllare i feed

Controllare un feed significa rileggerlo dal server e confrontare i suoi episodi con quelli già
visti. Il programma lo fa in quattro occasioni:

* **all’avvio**, pochi secondi dopo l’apertura;
* **a intervalli regolari**, secondo **Impostazioni → Generale → Controllo automatico dei feed**:
  ogni 6 ore (predefinito), ogni 12 o ogni 24, oppure **Mai (solo a mano)**. Il conteggio parte
  dall’avvio del programma, o dal momento in cui si cambia l’intervallo, e il cambio vale subito;
* **al ritorno della connessione**, dopo un’interruzione;
* **su richiesta**, con **Controlla i feed** (barra superiore, vista Libreria, palette comandi
  oppure **Ctrl+S**).

I controlli proseguono anche con la finestra chiusa nell’area di notifica. Il programma legge
cinque feed per volta e, quando il server lo consente, chiede solo se il feed è cambiato: un feed
invariato non viene riscaricato.

**Come si riconosce un episodio nuovo.** Dal suo GUID, non dal conteggio: un episodio è nuovo solo
se il suo identificatore non è mai stato visto prima. Funziona anche con i podcast «a finestra
mobile», che tolgono le puntate vecchie man mano che pubblicano le nuove. La prima volta che il
programma controlla un feed senza riferimento, per esempio appena importato da OPML, registra gli
episodi presenti senza annunciarli come nuovi.

**Cosa succede dopo.** Il controllo **non scarica niente**, salvo per i feed con l’archivio
automatico (sezione 5.10). Si limita ad aggiornare i conteggi e a segnalare le novità:

* un controllo avviato a mano risponde con un avviso nell’app, per esempio *5 episodi nuovi
  trovati. 2 in archiviazione automatica.* oppure *14 feed controllati: nessun episodio nuovo.*, con
  l’eventuale numero di feed non raggiungibili;
* un controllo in background manda una notifica di sistema, nella lingua dell’interfaccia (*5 nuovi
  episodi trovati in 2 podcast.*). La notifica è cliccabile: riporta in primo piano il programma e,
  se le novità riguardano un solo podcast, apre direttamente quel feed.

**Indirizzi che cambiano.** Quando un feed risponde con un trasferimento permanente (redirezione
301 o 308), il programma aggiorna l’indirizzo salvato e porta con sé la cronologia, così i controlli
successivi vanno direttamente alla posizione nuova.

---

## 5.10 L’archivio automatico per feed

È il modo di seguire un podcast senza toccare niente: con l’interruttore acceso, i nuovi episodi
trovati dai controlli si scaricano da soli.

### Accenderlo

* Al momento dell’aggiunta, con l’interruttore **Archivio automatico** nell’anteprima di **Aggiungi
  un feed**.
* In seguito, con l’interruttore **Archivio automatico** nel pannello di destra della vista del
  feed (nella barra di azione, nelle finestre più strette di 1280 pixel).

Se il feed ha già episodi pubblicati e non archiviati, all’accensione il programma chiede che cosa
farne, nella finestra *Attivare l’archivio automatico?*:

* **Attiva e scarica i N mancanti**: accende l’archivio automatico e prepara il download degli
  episodi mancanti, con la consueta conferma su spazio e cartella;
* **Solo i nuovi**: accende l’archivio automatico senza toccare il pregresso.

I feed con l’archivio automatico acceso portano il segno **auto** nella barra laterale e nella
Libreria, e il distintivo **Archivio automatico** nell’intestazione.

### Come lavora

Ogni volta che un controllo (all’avvio, periodico, al ritorno della rete o con **Controlla i feed**)
trova episodi nuovi in quel feed, li mette in coda senza chiedere conferma. Lo stesso accade quando
si apre o si aggiorna a mano il feed: gli episodi nuovi non vengono «consumati» dalla lettura, ma
accodati.

La notifica di sistema e l’avviso nell’app riportano quanti episodi sono andati in archiviazione
automatica. I download seguono le regole consuete: download in parallelo, limite di banda, pausa
automatica senza rete.

### Spegnerlo

Basta riportare l’interruttore su spento. Gli episodi già in coda restano in coda; da quel momento
i nuovi episodi tornano a essere solo segnalati.

---

## 5.11 Lavorare con molti feed

Non c’è un limite al numero di podcast in libreria, e tutti restano disponibili tra una sessione e
l’altra.

* Per trovarne uno: **Cerca un feed…** nella barra laterale, oppure la palette comandi (**Ctrl+K**),
  che filtra i feed per titolo.
* Per avere il quadro: la vista **Libreria**, ordinabile per colonna. Ordinare per **Da scaricare**
  mette in cima i feed con più arretrati; ordinare per **Ultimo controllo** fa emergere quelli che
  non rispondono da tempo.
* Per aggiornarli tutti: **Controlla i feed**.

All’avvio nessun feed è aperto: il programma mostra la Libreria e aspetta.

---

*Il capitolo 6 racconta come lavora il motore di download.*
