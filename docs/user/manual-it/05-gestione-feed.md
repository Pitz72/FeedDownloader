# Capitolo 5: Gestione dei feed

## 5.1 Cos’è un feed RSS

Un feed RSS è un documento XML che il podcast pubblica perché i programmi possano leggerne l’elenco
degli episodi. Quando esce una puntata nuova, chi pubblica aggiunge una voce a quel documento; i
lettori lo rileggono ogni tanto e si accorgono della novità.

Per FeedDownloader Pro il feed è la sorgente di tutto: contiene la lista degli episodi, gli
indirizzi dei file audio, i metadati (titolo, data, durata, descrizione, copertina) e le
informazioni generali sul programma.

Non serve conoscerne la struttura interna per usare il software. Aiuta però a capire perché a volte
mancano dati nella lista: quasi sempre è il feed a non dichiararli.

---

## 5.2 Feed ben fatti e feed problematici

La conformità agli standard, nel mondo dei podcast, è un’aspirazione più che una regola.

**Feed ben formato.** Rispetta RSS 2.0 o Atom, dichiara titolo, collegamento, data e indirizzo audio
con il tipo MIME, e magari aggiunge i tag iTunes o Podcast Index per durata, copertina e stagioni. Il
programma lo legge senza storie.

**Feed incompleto.** Mancano campi facoltativi come durata, dimensione o copertina dell’episodio. I
file si scaricano lo stesso, ma in lista qualche informazione resterà vuota.

**Feed con audio irraggiungibile.** Il documento si legge, ma gli indirizzi dei file puntano a
risorse sparite. Succede spesso con programmi abbandonati o migrati altrove. Gli episodi finiscono
in errore dopo il tentativo di download.

**Feed protetti da password.** Alcuni podcast privati chiedono credenziali HTTP Basic. Si possono
mettere direttamente nell’indirizzo: `https://utente:password@www.esempio.it/feed.xml`.

---

## 5.3 Cosa succede quando premi Analizza

In sequenza:

1.  **Controllo dell’indirizzo.** Sintassi corretta e superamento delle verifiche contro gli attacchi
    SSRF (capitolo 10).
2.  **Richiesta al server.** Il programma si presenta con uno user-agent normale e rinuncia dopo
    quindici secondi di silenzio.
3.  **Lettura del documento.** Legge RSS o Atom e tollera le deviazioni più comuni: codifica non
    dichiarata, tag mancanti, namespace inventati.
4.  **Confronto con l’archivio.** Ogni episodio viene cercato nel database attraverso il suo
    identificatore univoco, il GUID; quando il feed non lo dichiara, al suo posto vale l’indirizzo
    del file audio.
5.  **Riempimento della lista.** Ogni episodio compare con il proprio stato.
6.  **Ingresso in libreria.** Il feed entra nella barra laterale, se non c’era già; se c’era, il
    conteggio degli episodi viene aggiornato.

---

## 5.4 La libreria dei feed

I feed analizzati restano salvati nella barra laterale: non serve reincollare gli indirizzi a ogni
avvio.

### Cosa mostra ogni riga

Copertina, titolo, data dell’ultima sincronizzazione e, quando ci sono episodi mai scaricati, il
badge **DA SCARICARE** con il conteggio. Il conteggio nasce dal confronto fra i GUID del feed e
quelli già registrati. Un clic carica gli episodi nell’area principale.

### Togliere un feed

Passando il mouse sulla riga compare il cestino, che chiede conferma. La rimozione cancella il feed
dalla libreria ma **non tocca i file audio già scaricati** né la loro registrazione: gli episodi
restano visibili nella vista Archivio.

### Ricerca e ordinamento

Il campo in alto filtra per nome mentre digiti. Il pulsante di ordinamento mette i feed in ordine
alfabetico e, premuto di nuovo, ripristina l’ordine originale.

*Sulla riservatezza.* La libreria vive soltanto nel database locale. Il programma non manda i tuoi
feed a nessuno.

---

## 5.5 Importare feed da un file OPML

OPML è il formato con cui le applicazioni di podcast si scambiano le liste di sottoscrizioni. Se hai
una libreria in Pocket Casts, Overcast, AntennaPod o simili, la puoi esportare e portare qui dentro.

1.  Aprire **Impostazioni → Archivio**, sezione **Dati & Portabilità**.
2.  Premere **Importa Feed (OPML)** e scegliere il file `.opml`.
3.  Il programma lo legge e aggiunge alla libreria i feed che trova.

*Se l’importazione non riesce*, vale la pena aprire il file con un editor di testo e cercare le
righe `<outline type="rss" xmlUrl="...">`: alcune applicazioni usano varianti proprietarie del
formato e omettono proprio quelle.

---

## 5.6 Esportare la libreria in OPML

L’esportazione serve a tenere una copia della lista, a spostarla su un’altra installazione o a
seguire gli stessi programmi con un’app di ascolto.

1.  Aprire **Impostazioni → Archivio**, sezione **Dati & Portabilità**.
2.  Premere **Esporta Feed (OPML)** e scegliere nome e posizione.

Il file prodotto è leggibile da qualsiasi applicazione che supporti lo standard.

---

## 5.7 Feed molto grandi

I podcast storici e gli archivi radiofonici arrivano facilmente a migliaia di episodi.

**Paginazione RFC 5005.** Molte piattaforme pubblicano nel feed solo le puntate recenti e spezzano
il resto in pagine collegate fra loro con il link `rel="next"`. Il programma segue quei collegamenti
da sé e ricompone il catalogo in un’unica lista. Ogni pagina passa dagli stessi controlli di
sicurezza di un indirizzo digitato a mano. Il numero di pagine seguite si ferma a venti: è un tetto
di sicurezza contro i feed che si rimandano l’un l’altro all’infinito, e su cataloghi enormi
significa che la parte più antica potrebbe restare fuori.

**L’analisi dura di più.** Duemila episodi, o un feed spezzato in molte pagine, possono richiedere
dai quindici ai trenta secondi. È normale.

**La lista resta leggera.** Anche con migliaia di voci vengono disegnate solo le righe visibili a
schermo.

**Lo spazio.** Duemila episodi da una cinquantina di megabyte fanno un centinaio di gigabyte:
conviene contarli prima di cominciare.

---

## 5.8 Lavorare con molti feed

Non c’è un limite al numero di podcast in libreria, e tutti restano disponibili tra una sessione e
l’altra.

Un clic su un feed della barra laterale ne carica subito gli episodi. All’avvio nessun feed è
selezionato: il programma non ricorda l’ultimo aperto, mostra la libreria e aspetta.

Per aggiornarli: l’icona di sincronizzazione sulla singola riga rilegge quel feed; **Sincronizza
Tutti** li rilegge tutti in parallelo, mostrando lo stato su ogni copertina e segnalando alla fine
le novità con il badge **DA SCARICARE**.

Per l’aggiornamento programmato, senza toccare nulla, si veda la sezione seguente.

---

## 5.9 Aggiornamento automatico

Il programma controlla i feed da solo: all’avvio, poi a intervalli regolari, e ogni volta che la
connessione torna dopo un’interruzione.

L’intervallo si sceglie in **Impostazioni → Generale → Aggiornamento Automatico Feed**.

| Opzione | Comportamento |
|---------|--------------|
| Disattivato | Niente controlli ciclici; resta quello all’avvio. |
| 6 ore (predefinito) | Rilettura di tutti i feed ogni sei ore. |
| 12 ore | Rilettura ogni dodici ore. |
| 24 ore | Rilettura una volta al giorno. |

Il cambio ha effetto subito, senza riavviare. Il conteggio riparte dall’avvio del programma.

L’aggiornamento automatico **non scarica niente**: si limita a guardare se sono usciti episodi
nuovi. Quando ne trova, manda una notifica di sistema con il riepilogo, nella lingua
dell’interfaccia. La notifica è cliccabile: riporta in primo piano il programma e, se le novità
riguardano un solo podcast, apre direttamente quel feed. Per scaricarli si usano poi i comandi
normali.

---

*Il capitolo 6 racconta come lavora il motore di download.*
