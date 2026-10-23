# Capitolo 3: Tour dell’interfaccia

## 3.1 Com’è fatta la finestra

FeedDownloader Pro è un’applicazione da scrivania, pensata per una finestra orizzontale. I pannelli
stanno **affiancati** e ognuno scorre per conto proprio: l’elenco degli episodi scorre senza
portarsi dietro i filtri, la coda dei download senza spostare gli esiti.

La finestra si divide in tre zone.

* **La barra superiore**, in alto. Riporta lo stato della coda dei download e contiene i comandi
  globali: **Controlla i feed**, la ricerca (Ctrl+K), la **Guida** e le **Impostazioni**. Quando
  esiste un aggiornamento, qui compare anche il relativo avviso (capitolo 2, sezione 2.5).
* **La barra laterale**, a sinistra. In alto porta alle tre viste trasversali, **Libreria**,
  **Download** e **Archivio**; sotto elenca i feed della libreria; in fondo ha i pulsanti
  **Aggiungi feed** e **Importa da OPML**.
* **L’area principale**, al centro e a destra. Mostra la vista scelta: la Libreria, un feed, i
  Download o l’Archivio.

Le finestre di lavoro più circoscritte, come l’aggiunta di un feed, le impostazioni o la verifica
dell’archivio, si aprono sopra l’interfaccia come finestre di dialogo (sezione 3.10).

---

## 3.2 La barra superiore

Da sinistra a destra:

* **Il marchio**, con il nome del programma.
* **L’avviso di aggiornamento**, solo quando ce n’è uno disponibile, in scaricamento o pronto.
* **Lo stato della coda.** Una pillola dice a parole cosa sta succedendo: **Coda vuota** (con il
  riepilogo dell’ultimo lavoro, per esempio *ultima: 12 scaricati, 1 non riusciti*), **3 in
  download** (con l’avanzamento, per esempio *47 di 312*), **Coda in pausa**, oppure **Offline**.
  Un pallino colorato accompagna lo stato: verde quando si scarica, giallo in pausa, rosso senza
  rete. Un clic sulla pillola apre la vista **Download**.
* **Controlla i feed.** Rilegge subito tutti i feed della libreria in cerca di episodi nuovi e
  avvia l’archivio automatico dove è acceso (capitolo 5, sezione 5.9). Durante il lavoro
  l’etichetta diventa *Controllo 3/7*. Scorciatoia: **Ctrl+S**.
* **La lente**: apre la palette comandi (sezione 3.11). Scorciatoia: **Ctrl+K**.
* **Il libro**: apre la **Guida**, la documentazione integrata.
* **L’ingranaggio**: apre le **Impostazioni**, anche mentre un download è in corso (capitolo 10).
  Scorciatoia: **Ctrl+,**.

Nelle finestre più strette di 1024 pixel **Controlla i feed** resta come sola icona, e il dettaglio
dello stato della coda si nasconde.

---

## 3.3 La barra laterale

### Le tre viste

In cima ci sono tre voci, sempre visibili.

* **Libreria** (Ctrl+1): il cruscotto di tutti i feed (sezione 3.4). Accanto compare il totale
  degli episodi da scaricare, per esempio *42 da scaricare*.
* **Download** (Ctrl+2): la coda, gli interrotti, i non riusciti e i completati (sezione 3.8).
  Accanto compare il numero dei download in coda oppure, a coda vuota, quello dei non riusciti
  (*2 non riusciti*).
* **Archivio** (Ctrl+3): tutti gli episodi scaricati (sezione 3.9), con il loro numero.

La voce della vista aperta è evidenziata da una barretta viola sul bordo sinistro.

### L’elenco dei feed

Sotto le viste c’è l’elenco dei feed, con il loro numero e il pulsante **Ordina dalla A alla Z**:
acceso dispone i feed in ordine alfabetico, spento ripristina l’ordine di inserimento. La scelta
viene ricordata. Con almeno un feed in libreria compare anche il campo **Cerca un feed…**, che
filtra per titolo e per indirizzo mentre si digita.

Ogni riga mostra la copertina, il titolo dichiarato nel feed e una riga di stato:

* **N da scaricare**, quando ci sono episodi non ancora archiviati;
* **Tutto archiviato**, quando non manca niente;
* **Non ancora controllato**, per un feed che il programma non ha ancora letto, per esempio appena
  importato da un file OPML.

I feed con l’archivio automatico acceso portano in più il segno verde **auto**.

Un clic sulla riga apre il feed nell’area principale; mentre il programma lo legge, sulla
copertina gira un indicatore. Un feed già aperto si ritrova subito, senza rileggerlo.

### In fondo

**Aggiungi feed** (Ctrl+N) apre la finestra di aggiunta (sezione 3.10). **Importa da OPML** importa
un elenco di feed da un’altra applicazione (capitolo 5, sezione 5.5).

*Rimuovere un feed* non si fa dalla barra laterale: il comando **Rimuovi** sta nell’intestazione del
feed (sezione 3.5), lontano da un clic sbagliato.

---

## 3.4 La vista Libreria

È la vista d’apertura. Con la libreria vuota mostra il riquadro di benvenuto (capitolo 2, sezione
2.4); altrimenti presenta il cruscotto dell’intera libreria.

### L’intestazione della Libreria

Il titolo **La tua libreria**, i pulsanti **Controlla i feed** e **Aggiungi feed**, e tre cifre:
**Feed**, **Da scaricare** e **Archiviati**. Durante un controllo dei feed, sotto il titolo compare
l’avanzamento (*Controllo dei feed in corso: 3 di 7…*).

### La tabella dei feed

Una riga per feed, con queste colonne:

| Colonna | Contenuto |
|---------|-----------|
| **Podcast** | Copertina, titolo e, se acceso, il segno **auto** dell’archivio automatico |
| **Episodi** | Quanti episodi elenca il feed |
| **Archiviati** | Quanti episodi del feed sono nell’archivio |
| **Da scaricare** | Quanti mancano; **completo** quando non manca niente, un trattino se il feed non è ancora stato controllato |
| **Spazio** | Lo spazio occupato dai file archiviati di quel feed |
| **Ultimo controllo** | Data e ora dell’ultima lettura del feed; **mai** se non è ancora avvenuta |

Un clic sull’intestazione di una colonna ordina la tabella per quel valore; un secondo clic inverte
l’ordine. Un clic su una riga apre il feed.

### I riquadri a destra della tabella

Nelle finestre larghe (da circa 1320 pixel), accanto alla tabella c’è una colonna con tre riquadri:

* **Coda dei download**: lo stato della coda e l’avanzamento del lavoro, con **Apri Download**;
* **Archivio**: quanti episodi sono archiviati e quanto spazio occupano, con **Apri l’Archivio** e
  **Importa da OPML**;
* **Scorciatoie da tastiera**: il promemoria delle combinazioni principali (sezione 3.12).

Nelle finestre più strette la colonna scompare e la tabella prende tutto lo spazio; scompare anche
la colonna **Episodi**.

---

## 3.5 La vista Feed

Si apre con un clic su un feed. È impaginata su due fasce orizzontali, l’intestazione e i filtri,
sopra un’area di lavoro divisa in due: l’elenco degli episodi a sinistra e un pannello a destra.

### L’intestazione del feed

* **Copertina e titolo** del podcast, con il distintivo **Archivio automatico** quando è acceso.
* **Controllato** seguito da data e ora dell’ultima lettura, e il percorso della cartella in cui
  finiscono i file di questo podcast.
* **I comandi del feed**:
  * **Aggiorna**: rilegge il feed dal server, ignorando la copia letta pochi minuti prima, e dice
    quanti episodi nuovi ha trovato. Non scarica niente, salvo per i feed con l’archivio automatico
    (capitolo 5, sezione 5.10);
  * **Apri la cartella**: apre nel gestore file la cartella del podcast;
  * **Esporta playlist M3U**: crea una playlist con i file archiviati del podcast (capitolo 5,
    sezione 5.7);
  * **Copia l’indirizzo**: copia negli appunti l’indirizzo del feed;
  * **Rimuovi**: toglie il feed dalla libreria, dopo una conferma (capitolo 5, sezione 5.4).

  Nelle finestre larghe almeno 1600 pixel i comandi hanno l’etichetta scritta; più in stretto resta
  l’icona, che mostra il nome al passaggio del mouse.
* **Le cifre**: **Episodi**, **Archiviati**, **Da scaricare** e **Spazio occupato**. Sotto i 1280
  pixel resta solo lo spazio occupato, perché le altre tre si leggono già nei filtri di stato.

### La fascia dei filtri

Sempre visibile, su una riga. I filtri si combinano tra loro.

* **Ricerca** (*Cerca nel titolo e nella descrizione…*): filtra per parole chiave nel titolo e nella
  descrizione. Vale la logica AND: devono comparire tutte le parole digitate. **Ctrl+F** porta il
  cursore qui.
* **Stato**: tre pulsanti, **Tutti**, **Da scaricare** e **Archiviati**, ciascuno con il suo
  conteggio. **Da scaricare** esclude anche gli episodi già in coda.
* **Periodo**: un menu di intervalli pronti, **Tutto il feed**, **Ultimi 30 giorni**, **Ultimi 90
  giorni**, **Ultimi 12 mesi**, **Quest’anno**, **L’anno scorso**, e **Date scelte**.
* **Dal** e **Al**: le date di pubblicazione, estremi inclusi. Scegliere un intervallo pronto
  compila questi due campi; modificarli a mano porta il menu su **Date scelte**. Si può compilare
  anche un solo estremo.
* **Durata**: minimo e massimo in minuti. Gli episodi che non dichiarano la durata non vengono
  esclusi.
* **Ordine**: **Ordine del feed** (predefinito), **Più recenti prima**, **Più vecchi prima**,
  **Titolo (A–Z)**, **Più lunghi prima**, **Più brevi prima**.
* **Azzera i filtri**: compare quando almeno un filtro è attivo e li riporta tutti a zero.

Aprendo un altro feed, i filtri ripartono da zero.

### La barra di azione

Sopra l’elenco, una riga dice che cosa farà il pulsante principale:

* il riepilogo, per esempio *120 di 312 episodi mostrati · 87 da scaricare*, seguito dal periodo
  attivo (*pubblicati dal 1° gennaio 2025 al 30 giugno 2025*) e dal numero degli episodi
  selezionati;
* con una selezione attiva, **Deseleziona** e **Scarica i N selezionati**;
* il **pulsante principale**, che dice esattamente quanti episodi prenderà: **Scarica i N mancanti**
  senza filtri, **Scarica i N filtrati** con almeno un filtro attivo. Conta solo gli episodi
  visibili che non sono già archiviati né in coda.

Il pulsante resta spento senza rete o quando non c’è niente da scaricare.

### L’elenco degli episodi

Una riga per episodio, con tre colonne:

* **Episodio**: il titolo e, sotto, data di pubblicazione, durata, numerazione (per esempio `S2
  E7`, quando il feed la dichiara) e dimensione dichiarata;
* **Stato**: lo stato dell’episodio (sezione 3.6), con la barra di avanzamento durante il download;
* **le azioni**, sempre visibili: l’icona di download per un episodio da scaricare, la × per
  annullare un episodio in coda, l’icona della cartella per mostrare nel gestore file un episodio
  archiviato.

Un clic sul titolo apre il dettaglio dell’episodio (sezione 3.7).

L’elenco disegna solo le righe visibili a schermo, quindi resta scorrevole anche con migliaia di
episodi.

### La selezione

Ogni riga ha la sua casella di spunta.

* Un clic sulla casella aggiunge o toglie quell’episodio.
* **Maiusc** + clic su una casella seleziona l’intervallo dall’ultimo episodio scelto a quello
  cliccato.
* La casella nell’intestazione dell’elenco seleziona, o deseleziona, tutti gli episodi mostrati.
* **Ctrl+A**, fuori dai campi di testo, seleziona tutti gli episodi visibili.

La selezione si azzera dopo l’avvio del download e quando si apre un altro feed.

### Il pannello di destra

Nelle finestre larghe almeno 1280 pixel, a destra dell’elenco c’è un pannello fisso. Quando nessun
episodio è aperto, contiene:

* l’interruttore **Archivio automatico**, con la sua descrizione (capitolo 5, sezione 5.10);
* **Che cosa scaricherà**: il piano del pulsante principale, con il numero di **Episodi**, lo
  **Spazio stimato** e il periodo attivo. Il testo dice se il piano riguarda tutti gli episodi non
  archiviati, quelli filtrati o quelli selezionati, e la stima si aggiorna mentre cambiano i filtri;
* **Il podcast**: la descrizione pubblicata nel feed e il suo indirizzo.

Quando si apre un episodio, il pannello mostra il suo dettaglio; la freccia **Torna alla scheda del
feed** riporta alla vista precedente.

Sotto i 1280 pixel il pannello non c’è: l’interruttore **Archivio automatico** si sposta nella
barra di azione, e il dettaglio dell’episodio si apre in una finestra laterale.

---

## 3.6 Gli stati degli episodi

Ogni episodio porta un’indicazione di stato, scritta a parole. Saperla leggere è il modo più rapido
per capire com’è messo l’archivio.

| Stato | Dove si legge | Significato |
|-------|---------------|-------------|
| **Da scaricare** | Colonna Stato | L’episodio è nel feed e non è nell’archivio. |
| **In coda** | Colonna Stato, con un indicatore rotante | Attende il proprio turno. |
| Avanzamento | Barra con percentuale, velocità e tempo stimato | Trasferimento in corso. |
| **In pausa** | Barra gialla ferma | Sospeso; riprende dal punto raggiunto. |
| **Non riuscito** | Colonna Stato, in rosso; motivo nella vista Download | Il download è fallito dopo i tentativi automatici, oppure per un errore definitivo. |
| **Archiviato** | Colonna Stato, in verde | Il file è registrato nell’archivio, di questa sessione o di una precedente. |

Lo stato **Archiviato** discende direttamente dall’impostazione database-first. Riaprendo un feed
già lavorato, quasi tutti gli episodi risulteranno archiviati: il programma sa di averli.

Se il server non dichiara la dimensione del file, la barra di avanzamento diventa indeterminata e
al posto della percentuale scorrono i byte ricevuti.

---

## 3.7 Il dettaglio dell’episodio

Si apre con un clic sul titolo. Nelle finestre larghe occupa il pannello di destra; in quelle
strette compare in una finestra laterale.

Contiene, dall’alto:

* **I distintivi**: **Archiviato** oppure **Da scaricare**, e il tipo dell’episodio quando il feed
  lo dichiara diverso da un episodio normale (per esempio `trailer` o `bonus`).
* **I dati del feed**: **Pubblicato**, **Durata**, **Numerazione** (stagione ed episodio),
  **Dimensione dichiarata** e **Formato** (il tipo MIME dichiarato).
* **Nell’archivio**, solo per gli episodi archiviati: **Scaricato il**, **Dimensione su disco**,
  **Qualità** (bitrate e frequenza di campionamento), **File** (cartella, podcast e nome del file)
  e **Impronta SHA-256 (registrata al download)**.
* **Note dell’episodio**: il testo descrittivo pubblicato nel feed, ripulito dal codice HTML.
* **Indirizzi**: la pagina web dell’episodio con **Copia pagina** e il file audio con **Copia
  audio**.

In fondo, le azioni:

* **Scarica**, per un episodio da scaricare; diventa **In coda** mentre attende.
* **Scarica di nuovo**, per un episodio archiviato. Scarica una nuova copia: se il file precedente
  è ancora nella cartella, la copia nuova prende il suffisso `_2` e l’archivio passa a quella. Il
  file precedente non viene cancellato.
* **Mostra nella cartella**: apre il gestore file sul file archiviato.
* **Segna come da scaricare**: toglie l’episodio dall’archivio, dopo una conferma, e lo riporta tra
  quelli da scaricare. Il file sul disco non viene cancellato.

---

## 3.8 La vista Download

È il posto da cui si sorveglia e si governa tutto ciò che sta scaricando. Si apre dalla barra
laterale, con **Ctrl+2** o con un clic sullo stato della coda nella barra superiore. Chiudere la
finestra o cambiare vista non ferma nulla.

### L’intestazione dei Download

Il titolo **Download** e una frase sullo stato (la coda lavora in background, è in pausa, è ferma
per mancanza di rete, oppure è vuota). Poi i comandi che valgono per tutta la coda:

* **Metti in pausa**: sospende ogni trasferimento conservando i file parziali; diventa **Riprendi**
  mentre la coda è in pausa;
* **Ferma e svuota la coda**: interrompe tutto, dopo una conferma (sezione 6.6).

Infine due cifre: **In corso** e **In attesa**.

Sotto l’intestazione, durante un lavoro, una barra riporta l’avanzamento complessivo: *47 di 312
conclusi*, con la percentuale.

### La coda

Il pannello di sinistra elenca i download in coda: prima quelli attivi, poi quelli in attesa, poi
quelli in pausa. Ogni riga mostra il titolo dell’episodio, il podcast e lo stato (*in download*, *in
attesa*, *in pausa*); per i download attivi o sospesi anche la barra con percentuale, velocità e
tempo stimato. A destra di ogni riga ci sono la pausa (o la ripresa) di quel solo download e la ×
per annullarlo.

### Interrotti, non riusciti e completati

Nelle finestre larghe almeno 1280 pixel, accanto alla coda c’è una colonna con tre sezioni.

* **Download interrotti alla chiusura precedente.** Compare solo quando, all’avvio, sono rimasti
  download in coda dalla sessione precedente, per esempio dopo una chiusura con il lotto ancora in
  corso o un blocco del programma. Dice quanti sono e di quali podcast, e offre **Riprendi** o
  **Scarta** (capitolo 6, sezione 6.8).
* **Non riusciti.** I download falliti in questa sessione, ciascuno con il motivo in chiaro e il
  codice tecnico fra parentesi, per esempio *Il file non esiste più sul server (404).
  (EPISODE_NOT_FOUND)*. Ogni riga ha **Riprova** e la × per toglierla dall’elenco; in cima ci sono
  **Svuota l’elenco** e **Riprova tutti (N)**.
* **Completati.** Gli episodi archiviati in questa sessione, con dimensione e ora, e il totale
  scaricato (*In questa sessione · 2,4 GB scaricati*). Ogni riga ha l’icona per mostrare il file
  nella cartella; **Svuota l’elenco** toglie le righe senza toccare i file.

Sotto i 1280 pixel le tre liste diventano schede: **Coda**, **Non riusciti** e **Completati**,
ciascuna con il suo conteggio. Il riquadro dei download interrotti resta in alto, sopra le schede.

---

## 3.9 La vista Archivio

Si raggiunge dalla barra laterale o con **Ctrl+3**. Mentre la vista Feed mostra un podcast per
volta, qui compaiono in un’unica tabella tutti gli episodi scaricati, di qualunque podcast.

### L’intestazione dell’Archivio

Il titolo **Archivio** e l’intervallo coperto (*Episodi pubblicati dal … al …*). Poi due comandi:

* **Verifica l’archivio**: apre la verifica di presenza e integrità dei file (capitolo 9, sezione
  9.5);
* **Esporta CSV**: salva l’inventario completo (capitolo 9, sezione 9.7).

Infine tre cifre: **Episodi**, **Podcast** e **Spazio occupato**.

### La colonna dei filtri

Nelle finestre larghe almeno 1360 pixel, a sinistra della tabella c’è una colonna con:

* **la ricerca** (*Titolo, podcast, nome del file o data…*): cerca nel titolo dell’episodio, nel
  nome del podcast, nel nome del file e nelle date, sia nella forma mostrata a schermo sia in forma
  ISO (`2026-08-18`). **Ctrl+F** porta il cursore qui;
* **il Periodo di pubblicazione**: **Tutto l’archivio**, gli stessi intervalli pronti della vista
  Feed, **Date scelte**, e i campi **Dal** e **Al**;
* **l’elenco dei Podcast**: **Tutti i podcast** e poi ogni podcast in ordine alfabetico, con il
  numero dei suoi episodi archiviati. Un clic su un podcast filtra la tabella; il passaggio del
  mouse mostra anche lo spazio occupato.

Sotto i 1360 pixel gli stessi filtri stanno in una fascia sopra la tabella, e i podcast si scelgono
da un menu a tendina.

### La tabella

Sopra la tabella, una riga riassume la selezione (*240 di 1.180 episodi · 11,2 GB*) e offre
**Azzera i filtri** quando un filtro è attivo. Le colonne sono **Podcast**, **Episodio**,
**Pubblicato**, **Scaricato**, **Dimensione** e **Qualità** (le ultime due solo nelle finestre
larghe). Un clic sull’intestazione ordina per quella colonna; di partenza la tabella è ordinata per
data di download, dalla più recente. L’icona della cartella, a fine riga, mostra il file nel gestore
file.

La tabella si aggiorna da sola a ogni download completato.

---

## 3.10 Le finestre di dialogo

Alcune funzioni si aprono in una finestra sopra l’interfaccia. Si chiudono con **Esc**, con la × o
con il loro pulsante di chiusura.

* **Aggiungi un feed** (Ctrl+N): il campo **Indirizzo del feed**, il pulsante **Analizza**,
  l’anteprima del podcast e il pulsante **Aggiungi alla libreria** (capitolo 4, sezione 4.4).
* **Impostazioni** (Ctrl+,): sei schede verticali, descritte nel capitolo 10.
* **Verifica dell’archivio**: le verifiche **Rapida** e **Completa** e le azioni sui file mancanti
  o alterati (capitolo 9, sezione 9.5).
* **Guida**: la documentazione integrata, con il collegamento a questo manuale in PDF.
* **Novità**: le note di rilascio della versione installata. Compare da sola al primo avvio dopo un
  aggiornamento; il pulsante **Ho capito** la chiude.

Le richieste di conferma (rimozione di un feed, download di più episodi, azzeramento della
cronologia) usano finestre più piccole, con il pulsante principale che dice esattamente che cosa
farà.

---

## 3.11 La palette comandi (Ctrl+K)

La palette raggiunge le funzioni principali senza mouse. Si apre con **Ctrl+K**, o con la lente
della barra superiore, da qualsiasi punto del programma, anche durante un download. Il titolo della
finestra è *Cerca azioni, feed ed episodi*.

Si digita per filtrare, si scorre con le **frecce ↑↓** (**Home** e **Fine** saltano al primo e
all’ultimo risultato), si conferma con **Invio**, si esce con **Esc** senza eseguire niente.

I risultati sono raggruppati.

* **Azioni**: **Aggiungi un feed**, **Controlla tutti i feed**, **Vai alla Libreria**, **Vai a
  Download**, **Vai all’Archivio**, **Verifica l’archivio**, **Importa da OPML**, **Impostazioni** e
  **Guida**. Accanto a ciascuna compare la sua scorciatoia, quando esiste.
* **Feed**: a campo vuoto mostra i primi feed della libreria; digitando li filtra per titolo.
  Scegliendone uno, viene aperto.
* **Episodi di [podcast]**: digitando, la palette cerca anche tra i titoli degli episodi del feed
  aperto. Scegliendone uno, si torna alla vista del feed con la ricerca già compilata su quel
  titolo.

---

## 3.12 Le scorciatoie da tastiera

| Combinazione | Effetto |
|--------------|---------|
| **Ctrl+K** | Apre la palette comandi |
| **Ctrl+N** | Apre **Aggiungi un feed** |
| **Ctrl+S** | **Controlla i feed** (fuori dai campi di testo) |
| **Ctrl+F** | Porta il cursore nella ricerca della vista aperta (Feed o Archivio) |
| **Ctrl+A** | Seleziona tutti gli episodi visibili (vista Feed, fuori dai campi di testo) |
| **Ctrl+1** | Vista **Libreria** |
| **Ctrl+2** | Vista **Download** |
| **Ctrl+3** | Vista **Archivio** |
| **Ctrl +** e **Ctrl −** | Ingrandisce o riduce l’interfaccia |
| **Ctrl 0** | Riporta l’interfaccia al 100% |
| **Ctrl+,** | Apre le **Impostazioni** |

Dentro un campo di testo **Ctrl+A** conserva il suo significato abituale (seleziona tutto il
testo). Il clic destro nei campi di testo apre il menu con taglia, copia, incolla e seleziona tutto.

Ogni comando è raggiungibile anche da tastiera, con **Tab** e **Maiusc+Tab**, e il focus resta
sempre visibile.

---

## 3.13 L’icona nell’area di notifica

Chiudendo la finestra con la ×, il programma non esce: si riduce nell’area di notifica, vicino
all’orologio. È voluto, perché i download e il controllo automatico dei nuovi episodi proseguono
anche a finestra chiusa.

Un clic sull’icona mostra o nasconde la finestra. Il menu del tasto destro ha due voci, in inglese:
**Show** riporta la finestra in primo piano, **Quit** chiude il programma e interrompe i download
attivi. I download rimasti in coda non vanno perduti: alla riapertura la vista Download propone di
riprenderli (capitolo 6, sezione 6.8).

Se il sistema non offre un’area di notifica (per esempio GNOME senza l’estensione AppIndicator),
chiudere la finestra chiude il programma.

In pratica: per un archivio grande conviene avviare il lotto, chiudere la finestra e lasciare
lavorare il computer.

---

## 3.14 Finestre strette e interfaccia ingrandita

L’impaginazione resta orizzontale anche quando lo spazio si riduce: i pannelli laterali lasciano il
posto a schede o a finestre, ma la pagina non si impila mai in una colonna.

| Larghezza della finestra | Cosa cambia |
|--------------------------|-------------|
| Sotto 1600 pixel | I comandi del feed restano come icone |
| Sotto 1360 pixel | Archivio: i filtri passano in una fascia sopra la tabella; spariscono Dimensione e Qualità |
| Sotto 1320 pixel | Libreria: sparisce la colonna di destra e la colonna Episodi |
| Sotto 1280 pixel | Feed: il dettaglio si apre in una finestra laterale e l’archivio automatico va nella barra di azione; Download: le liste diventano schede |
| Sotto 1024 pixel | **Controlla i feed** resta come icona |

Le soglie valgono in pixel dell’interfaccia: ingrandendola, per esempio al 140%, lo stesso schermo
offre meno spazio e le soglie scattano prima. La finestra non scende sotto i 960 × 620 pixel;
quando l’altezza non basta, l’area principale scorre.

---

*Il capitolo 4 percorre un flusso completo, dall’aggiunta del feed al file archiviato.*
