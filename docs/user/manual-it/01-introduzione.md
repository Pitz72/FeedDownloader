# Capitolo 1: Introduzione e filosofia

## 1.1 Cos’è Runtime FeedDownloader Pro?

Conviene partire dal problema che il software risolve.

Ogni giorno vengono pubblicati e ascoltati migliaia di episodi di podcast. Nel tempo una parte
consistente di quei contenuti scompare: il conduttore smette di pagare l’hosting, la piattaforma di
distribuzione chiude, il server che ospitava i file audio viene spento. Un episodio ascoltato tre
anni fa oggi può essere irraggiungibile per sempre, non perché qualcuno lo abbia cancellato, ma
perché nessuno ne ha conservato una copia.

Runtime FeedDownloader Pro nasce da qui. Non è un lettore né un aggregatore: è un’applicazione per
la conservazione sistematica di contenuti audio pubblicati via feed RSS. Si rivolge a chi tratta il
suono come documento, e quindi lo archivia con lo stesso rigore che riserverebbe a un testo o a una
fotografia: archivisti, redazioni, stazioni radio, ricercatori, ascoltatori metodici.

---

## 1.2 A chi è rivolto

Quattro modi tipici di usarlo.

* **L’archivista** vuole scaricare l’intero catalogo di un podcast storico prima che sparisca. Gli
  serve un sistema che ricordi cosa ha già preso, non duplichi nulla e certifichi l’integrità di
  ogni file.
* **Il produttore radiofonico** tiene la libreria su un NAS condiviso. Gli serve uno strumento che
  lavori su percorsi di rete senza bloccarsi, organizzi i file in modo prevedibile e produca
  inventari in CSV per la squadra.
* **L’editore** conserva una copia locale dei podcast della propria rete, esporta i metadati verso
  il sistema editoriale e tiene d’occhio lo stato dell’archivio nel tempo.
* **L’ascoltatore** vuole i suoi podcast sul disco, ordinati, senza dipendere dalla connessione né
  ritrovarsi file troncati.

---

## 1.3 La filosofia «database-first»

La differenza tra FeedDownloader Pro e un generico scaricatore sta in dove risiede la verità.

Quasi tutti gli strumenti di download ragionano così: guardano i file sul disco, li confrontano con
il feed RSS e scaricano ciò che manca. Il limite è evidente: il disco non è una fonte affidabile. I
file si spostano, si rinominano, si corrompono, si cancellano per sbaglio. Basta trasferire la
cartella dei podcast da `C:\Podcast` a `D:\Archivio` perché lo strumento perda ogni riferimento e
riscarichi l’intero catalogo.

FeedDownloader Pro tiene la verità altrove. Al centro di ogni operazione c’è un database SQLite che
registra ogni episodio incontrato o scaricato: l’indirizzo di origine, il nome del file, la
cartella in cui è stato salvato, la data di download, l’impronta SHA-256 del contenuto e i metadati
audio. Il database è la memoria del software, e resta esatta anche quando i file si spostano.

Da questa scelta discendono cinque conseguenze pratiche.

1. **Nessun duplicato.** Anche controllando lo stesso feed dieci volte, gli episodi già registrati
   non tornano tra quelli da scaricare.
2. **Ogni file sa dov’è.** Il programma ricorda la cartella di ogni episodio: cambiare la cartella
   di download non rende «mancante» l’archivio già costruito.
3. **Resilienza agli spostamenti.** L’archivio può traslocare su un altro disco o su un NAS senza
   perdere la cronologia.
4. **Stato persistente.** Se il programma si chiude, o si blocca, durante un lotto da 300 episodi,
   alla riapertura la cronologia è intatta e i download rimasti in coda vengono proposti per la
   ripresa.
5. **Registro delle operazioni.** Ogni file scaricato porta con sé data, indirizzo di origine e
   impronta crittografica.

---

## 1.4 Le tre scelte tecniche di fondo

Oltre all’impostazione database-first, il programma poggia su tre decisioni che si vedono
direttamente all’uso.

### Resilienza di rete

Scaricare centinaia di file audio da Internet è un’operazione che fallisce spesso, e in modi
diversi. I server si sovraccaricano, le connessioni cadono, i trasferimenti si troncano a metà. Il
software affronta la cosa su quattro fronti.

* **Tentativi con attesa crescente.** Quando un download fallisce per una causa temporanea, il
  programma non riprova subito: aspetta un secondo, poi due, poi quattro, poi otto. I tentativi sono
  cinque in tutto. Se il server chiede esplicitamente di attendere (intestazione `Retry-After`), il
  programma rispetta quel tempo fino a un massimo di sessanta secondi.
* **Rilevamento degli stalli.** Un download bloccato è peggio di un download fallito: resta appeso e
  non libera la coda. Il programma sorveglia il flusso dei dati e, se per sessanta secondi non
  arriva un solo byte, chiude il trasferimento e lo conta come tentativo fallito.
* **File `.part` con ripresa.** Ogni trasferimento scrive su un file temporaneo con estensione
  `.part`. Solo quando il file è completo e la dimensione corrisponde a quella dichiarata dal
  server, il file assume il nome definitivo. Se il trasferimento si interrompe, il `.part` resta sul
  disco e il tentativo successivo **riprende dal punto raggiunto** invece di ricominciare.
* **Pausa automatica senza rete.** Quando la connessione cade, la coda si ferma da sola e riparte al
  ritorno della rete, invece di consumare i tentativi di ogni episodio in pochi secondi.

### Sicurezza sugli indirizzi

Il programma elabora indirizzi che arrivano dall’esterno, cioè dai feed. Un indirizzo costruito ad
arte può puntare a risorse della rete locale (il router, il NAS, un server interno) e trasformare
l’applicazione in un tramite per raggiungerle: è la famiglia di attacchi nota come SSRF,
*server-side request forgery*.

Ogni indirizzo passa perciò attraverso una validazione a più livelli: controllo sintattico,
accettazione dei soli protocolli HTTP e HTTPS, blocco degli hostname interni noti, blocco degli
intervalli di indirizzi privati e riservati (RFC 1918, loopback, link-local) e nuova verifica
dell’indirizzo IP risolto a ogni connessione e a ogni redirezione. Il controllo è automatico e
invisibile all’uso (capitolo 10, sezione 10.8).

### Percorsi di rete

L’archivio può stare su un disco di rete. La gestione dei percorsi SMB, quelli usati da NAS, server
Windows e cartelle condivise, è una fonte classica di blocchi nelle applicazioni desktop: se il
disco remoto non risponde, l’interfaccia si congela finché il sistema operativo non rinuncia.
FeedDownloader Pro verifica il percorso fuori dal processo grafico e rinuncia da solo dopo otto
secondi. L’interfaccia resta reattiva in ogni caso.

---

## 1.5 Cosa cambia nella versione 1.6.0

Chi arriva dalla 1.5 trova un programma riorganizzato. In sintesi:

* **Un’interfaccia da scrivania.** La finestra è impaginata in orizzontale, con pannelli affiancati
  che scorrono ciascuno per conto proprio. La barra laterale porta alle viste **Libreria**,
  **Download** e **Archivio** e, sotto, ai feed (capitolo 3).
* **Scaricare un periodo.** Nella vista di ogni feed la fascia dei filtri è sempre visibile e
  comprende il **Periodo**, con intervalli pronti e date libere. Il pulsante principale dice
  esattamente quanti episodi prenderà (capitolo 4).
* **Archivio automatico per feed.** I nuovi episodi trovati dai controlli periodici si scaricano da
  soli sui feed scelti (capitolo 5).
* **Coda che sopravvive alla chiusura** e **pausa automatica senza rete** (capitolo 6).
* **Verifica dell’archivio** in due modalità, **Rapida** e **Completa**, con avanzamento e
  possibilità di fermarla (capitolo 9).
* **Metadati accanto ai file** più ricchi, con `podcast.json` e copertina per ogni podcast, e i
  nuovi segnaposto `{season}` ed `{episode}` per i nomi dei file (capitolo 8).
* **Da 1 a 10 download in parallelo**, **cinque tentativi** per file e un **limite di banda
  condiviso** da tutti i download (capitolo 6).
* **Accessibilità**: dimensione dell’interfaccia dall’80 al 180% e interruttore **Riduci animazioni
  ed effetti** (capitolo 10).

La versione corregge anche diversi difetti della 1.5. Il più importante riguarda i tag ID3: le
versioni fino alla 1.5.x calcolavano l’impronta SHA-256 *prima* di scrivere i tag, e la verifica
completa segnalava poi come alterato ogni MP3 taggato. La sezione 9.5 spiega come rimettere in
ordine quei file.

---

## 1.6 Come leggere questo manuale

Il manuale copre l’uso completo del programma, dall’installazione alle funzioni meno frequentate.
Non serve leggerlo in ordine: i capitoli sono autonomi.

Per prendere confidenza conviene partire dal capitolo 4, che segue un flusso completo dall’aggiunta
del feed al file archiviato. Chi conosce già il software può andare direttamente al capitolo che
gli interessa; chi arriva dalla 1.5 trova nel capitolo 3 la nuova disposizione della finestra.

Le etichette dell’interfaccia sono riportate in **grassetto** e nella forma esatta in cui compaiono
sullo schermo. I percorsi di navigazione si scrivono con la freccia: **Impostazioni → Download →
Cambia cartella**.

---

*Il capitolo 2 descrive installazione, primo avvio e aggiornamenti.*
