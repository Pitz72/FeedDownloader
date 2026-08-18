# Capitolo 3: Tour dell’interfaccia

## 3.1 Anatomia della finestra principale

La finestra si divide in quattro zone.

*   **Barra di comando, in alto.** Contiene il campo URL, il pulsante di analisi, il pulsante per
    cambiare cartella di destinazione, l’accesso alla palette comandi e l’icona delle impostazioni.
    Quando esiste un aggiornamento, qui compare anche il relativo indicatore (capitolo 2, sezione
    2.5).
*   **Barra laterale dei feed, a sinistra.** Ospita la libreria dei feed salvati, la scheda
    Archivio, i controlli di sincronizzazione e, in fondo, il percorso di destinazione. La larghezza
    si regola trascinando il bordo destro.
*   **Area principale, al centro.** Mostra gli episodi del feed selezionato, con l’intestazione del
    podcast, la barra dei filtri e la lista.
*   **Pannello download, a destra.** Si apre da solo quando parte un lotto di download. Quando è
    chiuso resta un pulsante rotondo in basso a destra per richiamarlo.

Al primo avvio, con la libreria vuota, l’area principale mostra un riquadro guida che spiega come
aggiungere il primo feed e dove impostare la cartella di destinazione. Sparisce da sé quando il
primo feed entra in libreria.

---

## 3.2 La barra di comando

**Campo URL.** Qui si incolla l’indirizzo RSS del podcast. Accetta URL che puntano a file XML o RSS
e supporta il trascinamento: si può prendere un link dal browser e lasciarlo sul campo.

**Analizza.** Contatta l’indirizzo, legge il feed e riempie la lista degli episodi. Al termine il
feed entra stabilmente nella barra laterale. In genere richiede da uno a cinque secondi, secondo la
dimensione del feed e la rete.

**Icona cartella.** Apre il selettore per cambiare la cartella di destinazione dei download, senza
passare dalle impostazioni.

**Icona impostazioni.** Apre il pannello delle impostazioni, anche mentre un download è in corso
(capitolo 10).

---

## 3.3 La barra laterale dei feed

La barra laterale è il centro della libreria: i feed che contiene restano anche dopo la chiusura del
programma.

### Le schede Feed e Archivio

In cima ci sono due schede. **Feed** mostra la libreria ed è la vista predefinita. **Archivio**
apre la tabella di tutti gli episodi scaricati nell’intera libreria (sezione 3.10).

### Come si legge una riga della libreria

Ogni feed mostra la copertina, il titolo dichiarato nel feed RSS e la data dell’ultima
sincronizzazione. Quando ci sono episodi mai scaricati compare il badge **DA SCARICARE** con il
numero (per esempio `3 DA SCARICARE`). Il conteggio si basa sull’identificatore univoco degli
episodi, il GUID, registrato nel database: un episodio conta come nuovo solo se il suo GUID non è
mai stato visto prima. Il badge sparisce quando tutti i nuovi episodi sono stati scaricati.

Un clic sulla riga carica gli episodi di quel feed nell’area principale.

### Aggiungere un feed

Si incolla l’URL nel campo in alto e si preme **Analizza**. Il feed viene salvato in libreria e
resta disponibile nelle sessioni successive.

### Ricerca e ordinamento

Il campo di ricerca filtra i feed per nome mentre si digita, utile quando la libreria cresce. Il
pulsante di ordinamento dispone i feed in ordine alfabetico; premuto di nuovo ripristina l’ordine
originale.

### Sincronizzazione

Passando il mouse su un feed compare l’icona di sincronizzazione: rilegge il feed dal server e
aggiorna la lista con gli episodi nuovi.

Il pulsante **Sincronizza Tutti**, in cima alla barra laterale, aggiorna l’intera libreria in
parallelo. Durante l’operazione ogni copertina mostra il proprio stato con un’icona: rotante mentre
lavora, spunta verde a buon fine, segnale rosso se il feed non risponde. Il pulsante riporta
l’avanzamento (`Sincronizzando... 3/7`). Gli esiti restano visibili due secondi e mezzo, poi
scompaiono.

### In fondo: il percorso di destinazione

L’ultima riga della barra laterale mostra la cartella di destinazione abbreviata alle ultime due
componenti (per esempio `Documenti / Podcast`). Un clic la apre nel gestore file del sistema. Per
cambiarla si usa l’icona cartella della barra di comando oppure **Impostazioni → Download**.

### Ridimensionamento

La larghezza si regola trascinando il bordo destro: minimo 240 pixel, massimo 640, valore
predefinito 360. La misura scelta viene ricordata.

### Stato della connessione

L’intestazione della barra laterale segnala se il programma è **Connesso** oppure **Offline**.
Quando la rete manca, un avviso in alto ricorda che i download restano fermi fino al ripristino; al
ritorno della connessione il programma riprende e controlla se nel frattempo sono usciti episodi
nuovi.

---

## 3.4 La lista degli episodi

Selezionato un feed, l’area principale si popola con i suoi episodi.

### Intestazione del feed

In cima trovi copertina, titolo del podcast e numero di episodi. Da qui si raggiungono i comandi che
agiscono sull’intero feed (sezione 3.7).

### Cosa mostra ogni riga

*   **Titolo** dell’episodio come compare nel feed.
*   **Data** di pubblicazione.
*   **Durata**, quando il feed la dichiara.
*   **Stato**, con il tag corrispondente (sezione 3.5).

La dimensione del file non compare in lista: si legge nel pannello di dettaglio, dove prima del
download è il valore dichiarato dal feed e dopo quello reale del file su disco.

### Barra dei filtri

Sotto l’intestazione una barra permette di restringere la lista.

*   **Ricerca testuale.** Filtra per parole chiave cercandole nel titolo e nella descrizione
    dell’episodio. Vale la logica AND: tutti i termini digitati devono comparire.
*   **Stato.** Tre pulsanti rapidi: **Tutti**, **Da scaricare**, **Scaricati**.
*   **Data.** Due campi, **Da** e **A**, per limitare l’intervallo di pubblicazione.
*   **Durata.** Minimo e massimo in minuti.
*   **Ordina.** Cinque criteri: ordine del feed (predefinito), data più recente, data meno recente,
    durata più lunga, durata più corta.

Cambiando feed, tutti i filtri tornano a zero.

### Selezione multipla

Si possono scegliere più episodi e scaricarli in blocco.

*   **Ctrl+clic** aggiunge o toglie il singolo episodio dalla selezione.
*   **Maiusc+clic** seleziona l’intervallo tra l’ultimo episodio scelto e quello cliccato.
*   La casella di spunta appare al passaggio del mouse sugli episodi non selezionati e resta sempre
    visibile su quelli selezionati.

Con almeno un episodio selezionato, nell’intestazione compare **Scarica Selezionati (N)**. La
selezione si azzera al cambio feed e dopo l’avvio del download.

---

## 3.5 Gli stati degli episodi

Ogni episodio porta un indicatore di stato. Saperli leggere è il modo più rapido per capire com’è
messo l’archivio.

| Stato | Dove si legge | Significato |
|-------|---------------|-------------|
| Da scaricare | Tag **NUOVO** nella lista | L’episodio è nel feed e non è mai stato scaricato. |
| In coda | Voce *in coda* nel pannello download | Attende il proprio turno. |
| In pausa | Voce *in pausa* nel pannello download | Sospeso dall’utente; riprende dal punto raggiunto. |
| In corso | Barra di avanzamento animata | Trasferimento attivo, con percentuale e velocità. |
| Errore | Riepilogo errori del pannello download | Falliti tutti i tentativi automatici. |
| Scaricato | Tag **ARCHIVIATO** nella lista | Il file è registrato nel database, di questa sessione o di una precedente. |

Il tag **ARCHIVIATO** discende direttamente dall’impostazione database-first. Rianalizzando un feed
già lavorato, quasi tutti gli episodi risulteranno archiviati: il programma sa di averli. Compaiono
come **NUOVO** solo quelli usciti dopo l’ultimo download.

---

## 3.6 I comandi sul singolo episodio

Al passaggio del mouse, a destra di ogni riga compaiono i comandi dedicati a quell’episodio. Variano
con lo stato.

**Sempre disponibili**

*   **Copia titolo**: copia il titolo dell’episodio negli appunti.
*   **Casella di spunta**: serve alla selezione multipla (sezione 3.4).

**Episodi da scaricare o in errore**

*   **Scarica**: mette l’episodio in coda.

**Episodi già archiviati**

*   **Dimentica download**: riporta l’episodio a «da scaricare» senza toccare il file sul disco.
*   **Apri Cartella**: apre il gestore file sulla posizione del file.

Per riscaricare un episodio già archiviato si passa dal pannello di dettaglio, dove il pulsante
**Riscarica** rimette il file in coda sovrascrivendo quello esistente.

Un clic semplice sulla riga apre il pannello di dettaglio (sezione 3.9). Ctrl+clic e Maiusc+clic
restano riservati alla selezione multipla e non aprono nulla.

---

## 3.7 I comandi sull’intero feed

Questi comandi stanno nell’intestazione del feed, sopra la barra dei filtri, e agiscono su molti
episodi insieme.

**Scarica Tutto** mette in coda gli episodi mai scaricati fra quelli **attualmente visibili**: se un
filtro è attivo, agisce solo su quelli. Prima di partire il programma chiede conferma («Vuoi davvero
scaricare tutti i N episodi?») e controlla lo spazio libero sul disco di destinazione, avvertendo se
non basta. Il pannello download si apre da solo.

**Scarica Selezionati (N)** compare quando c’è una selezione attiva e scarica soltanto quella.

**Sincronizza Nuovi** rilegge il feed dal server e mette subito in coda gli episodi appena
comparsi, senza passare dalla lista. Anche qui vale il controllo dello spazio disponibile.

**Esporta M3U** genera una playlist `.m3u` con i percorsi locali degli episodi scaricati di quel
podcast e apre la finestra di salvataggio. Il pulsante è sempre presente: se per quel feed non c’è
ancora nulla sul disco, il programma lo segnala con un avviso invece di creare un file vuoto.

**Cambia Cartella**, l’icona cartella dell’intestazione, apre il selettore della cartella di
destinazione.

Per fermare o sospendere i download attivi si usano invece i comandi del pannello download
(sezione 3.8).

---

## 3.8 Il pannello download

È il posto da cui si sorveglia e si governa tutto ciò che sta scaricando.

### Aprirlo e chiuderlo

Si apre da solo quando parte un lotto. Chiudendolo resta il pulsante rotondo in basso a destra, che
lo richiama. Chiudere il pannello non ferma nulla.

### Com’è fatto

*   **In cima**, il contatore dei file completati sul totale (per esempio `47 / 312`), il riepilogo
    di quanti download sono attivi e quanti in coda, e il pulsante × per chiudere il pannello.
*   **Al centro**, la coda: una riga per ogni download, con titolo dell’episodio, nome del podcast,
    percentuale, velocità corrente e barra di avanzamento. Se il server non dichiara la dimensione
    del file, la barra diventa indeterminata e al posto della percentuale scorrono i byte ricevuti.
    Su ogni riga ci sono **Metti in pausa** (che diventa **Riprendi** quando la riga è sospesa) e
    **Annulla download**.
*   **In fondo**, i comandi che valgono per tutta la coda: **Pausa**, che sospende ogni
    trasferimento e diventa **Riprendi** mentre la scritta accanto segnala **Coda in pausa**, e
    **Ferma download**, che interrompe tutto e svuota la coda.

### Pausa e interruzione non sono la stessa cosa

La pausa, di un singolo episodio o dell’intera coda, conserva il file parziale `.part`: alla ripresa
il trasferimento riparte dal punto raggiunto. **Ferma download** invece è definitivo: cancella i
file parziali, svuota la coda e riporta gli episodi interrotti allo stato **NUOVO**. I file già
completati restano naturalmente nell’archivio.

### Quando qualcosa va storto

Alla fine del lotto, se dei download sono falliti, compare in basso un riepilogo espandibile con
gli episodi mancati e il codice di errore di ciascuno. Accanto c’è **Riprova falliti**, che li
rimette in coda tutti insieme senza doverli ricercare nella lista.

---

## 3.9 Il pannello di dettaglio

Un clic semplice su una riga apre il pannello di dettaglio, che entra da destra sotto la barra di
comando. Si chiude da solo quando si passa a un altro feed. Ctrl+clic e Maiusc+clic non lo aprono:
servono alla selezione multipla.

Contiene:

*   **Metadati di base**: data di pubblicazione, durata dichiarata, dimensione indicata nel feed.
*   **Azioni**, che cambiano con lo stato dell’episodio: Scarica, Riscarica, Dimentica download,
    Apri Cartella.
*   **Dati d’archivio**, solo per gli episodi già scaricati: data del download, dimensione reale,
    bitrate, frequenza di campionamento, nome del file sul disco e impronta SHA-256 registrata al
    momento del download.
*   **Link alla sorgente**: l’URL del file audio nel feed, con il pulsante per copiarlo.
*   **Note dell’episodio**: il testo descrittivo pubblicato nel feed, ripulito dal codice HTML.

---

## 3.10 La vista Archivio

Si raggiunge dalla scheda **Archivio** della barra laterale. Mentre la lista episodi mostra un feed
per volta, qui compaiono in un’unica tabella tutti gli episodi scaricati, di qualunque podcast.

*   **Ricerca**: cerca nel titolo dell’episodio, nel nome del podcast e nella data, sia come la
    vedi a schermo sia in forma ISO (`2026-08-18`).
*   **Filtro per podcast**: un menu a tendina restringe la tabella a un solo show.
*   **Ordinamento**: per data di download, data di pubblicazione, dimensione o bitrate.
*   **Statistiche**: in cima, il numero di file, quello dei podcast distinti e lo spazio occupato.
*   **Mostra in cartella**: al passaggio del mouse su una riga, apre il gestore file sul file.

La tabella si aggiorna da sola a ogni download completato.

---

## 3.11 La palette comandi (Ctrl+K)

La palette raggiunge le funzioni principali senza mouse. Si apre con **Ctrl+K** da qualsiasi punto
del programma, anche durante un download, e presenta un campo di ricerca al centro.

Si digita per filtrare, si scorre con le **frecce ↑↓**, si conferma con **Invio**, si esce con
**Esc** senza eseguire niente.

I risultati sono raggruppati.

*   **Azioni rapide**: cinque comandi sempre presenti, cioè apri impostazioni, sincronizza tutti i
    feed, aggiungi feed (che porta il cursore nel campo URL), apri archivio, torna ai feed.
*   **Salta al feed**: a campo vuoto mostra i primi feed della libreria; digitando li filtra per
    titolo. Scegliendone uno, viene caricato nell’area principale.
*   **Episodi (feed corrente)**: digitando, la palette cerca anche tra i titoli degli episodi del
    feed aperto. Scegliendone uno, la lista viene filtrata su quel titolo.

---

## 3.12 L’icona nell’area di notifica

Chiudendo la finestra con la ×, il programma non esce: si riduce nell’area di notifica, vicino
all’orologio. È voluto, perché i download e il controllo automatico dei nuovi episodi proseguono
anche a finestra chiusa.

Un clic sull’icona mostra o nasconde la finestra. Il menu con il tasto destro ha due voci, in
inglese perché fornite dal sistema: **Show** riporta la finestra in primo piano, **Quit** chiude il
programma e interrompe i download attivi.

In pratica: per un archivio grande conviene avviare il lotto, chiudere la finestra e lasciare
lavorare il computer.

---

*Il capitolo 4 percorre un flusso completo, dalla prima analisi al file archiviato.*
