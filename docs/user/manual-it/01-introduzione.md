# Capitolo 1: Introduzione e filosofia

## 1.1 Cos’è Runtime FeedDownloader Pro?

Conviene partire dal problema che il software risolve.

Ogni giorno vengono pubblicati e ascoltati migliaia di episodi di podcast. Nel tempo una parte
consistente di quei contenuti scompare: il conduttore smette di pagare l’hosting, la piattaforma di
distribuzione chiude, il server che ospitava i file audio viene spento. Un episodio ascoltato tre
anni fa oggi può essere irraggiungibile per sempre, non perché qualcuno lo abbia cancellato, ma
perché nessuno ne ha conservato una copia.

Runtime FeedDownloader Pro nasce da qui. Non è un semplice scaricatore di podcast: è
un’applicazione per la conservazione sistematica di contenuti audio pubblicati via feed RSS. Si
rivolge a chi tratta il suono come documento, e quindi lo archivia con lo stesso rigore che
riserverebbe a un testo o a una fotografia: archivisti, redazioni, stazioni radio, ricercatori,
ascoltatori metodici.

---

## 1.2 A chi è rivolto

Quattro modi tipici di usarlo.

*   **L’archivista** vuole scaricare l’intero catalogo di un podcast storico prima che sparisca. Gli
    serve un sistema che ricordi cosa ha già preso, non duplichi nulla e certifichi l’integrità di
    ogni file.

*   **Il produttore radiofonico** tiene la libreria su un NAS condiviso. Gli serve uno strumento che
    lavori su percorsi di rete senza piantarsi, organizzi i file in modo prevedibile e produca
    inventari in CSV per la squadra.

*   **L’editore** conserva una copia locale dei podcast della propria rete, esporta i metadati verso
    il sistema editoriale e tiene d’occhio lo stato dell’archivio nel tempo.

*   **L’ascoltatore** vuole i suoi podcast sul disco, ordinati, senza dipendere dalla connessione né
    ritrovarsi file troncati.

---

## 1.3 La filosofia «database-first»

La differenza tra FeedDownloader Pro e un generico scaricatore sta in dove risiede la verità.

Quasi tutti gli strumenti di download ragionano così: guardano i file sul disco, li confrontano con
il feed RSS e scaricano ciò che manca. Il limite è evidente: il disco non è una fonte affidabile. I
file si spostano, si rinominano, si corrompono, si cancellano per sbaglio. Basta trasferire la
cartella dei podcast da `C:\Podcast` a `D:\Archivio` e lo strumento perde ogni riferimento, salvo
poi riscaricare l’intero catalogo.

FeedDownloader Pro tiene la verità altrove. Al centro di ogni operazione c’è un database SQLite che
registra ogni episodio incontrato o scaricato: l’URL di origine, il nome del file sul disco, la data
di download, l’impronta SHA-256 del contenuto, i metadati audio. Il database è la memoria del
software, e resta esatta anche quando i file si spostano.

Da questa scelta discendono quattro conseguenze pratiche.

1.  **Nessun duplicato.** Anche analizzando lo stesso feed dieci volte, gli episodi già registrati
    non tornano in coda.
2.  **Resilienza agli spostamenti.** L’archivio può traslocare su un altro disco o su un NAS senza
    perdere la cronologia.
3.  **Stato persistente.** Se il programma viene chiuso durante un lotto da 300 episodi, alla
    riapertura la cronologia è intatta e gli episodi mancanti risultano ancora da scaricare.
4.  **Registro delle operazioni.** Ogni file scaricato porta con sé data, URL di origine e impronta
    crittografica.

---

## 1.4 Le tre scelte tecniche di fondo

Oltre all’impostazione database-first, il programma poggia su tre decisioni che si vedono
direttamente all’uso.

### Resilienza di rete

Scaricare centinaia di file audio da Internet è un’operazione che fallisce spesso, e in modi
diversi. I server si sovraccaricano, le connessioni cadono, i trasferimenti si troncano a metà. Il
software affronta la cosa su tre fronti.

*   **Tentativi con attesa crescente.** Quando un download fallisce per una causa temporanea, il
    programma non riprova subito: aspetta un secondo, poi due. I tentativi sono tre in tutto; se il
    server chiede esplicitamente di attendere (intestazione `Retry-After`), il programma rispetta
    quel tempo fino a un massimo di sessanta secondi.
*   **Rilevamento degli stalli.** Un download bloccato è peggio di un download fallito: resta
    appeso e non libera la coda. Il programma sorveglia il flusso dei dati e, se per sessanta
    secondi non arriva un solo byte, chiude il trasferimento e lo conta come tentativo fallito,
    passando al successivo.
*   **File `.part` con ripresa.** Ogni trasferimento scrive su un file temporaneo con estensione
    `.part`. Solo quando il file è completo e la dimensione corrisponde a quella dichiarata dal
    server, il file assume il nome definitivo. Se il trasferimento si interrompe, il `.part` resta
    sul disco e il tentativo successivo **riprende dal punto raggiunto** invece di ricominciare
    (richiesta HTTP Range con validatore If-Range). I `.part` rimasti orfani si eliminano da
    **Impostazioni → Avanzate → Pulisci file temporanei**.

### Sicurezza sugli indirizzi

Il programma elabora URL che arrivano dall’esterno, cioè dai feed. Un indirizzo costruito ad arte
può puntare a risorse della rete locale (il router, il NAS, un server interno) e trasformare
l’applicazione in un tramite per raggiungerle: è la famiglia di attacchi nota come SSRF, *server-side
request forgery*.

Ogni URL passa perciò attraverso una validazione a più livelli: controllo sintattico, accettazione
dei soli protocolli HTTP e HTTPS, blocco degli hostname interni noti, blocco degli intervalli di
indirizzi privati e riservati (RFC 1918, loopback, link-local) e nuova verifica dell’indirizzo IP
risolto a ogni connessione e a ogni redirezione. Il controllo è automatico e invisibile all’uso.

### Percorsi di rete

L’archivio può stare su un disco di rete. La gestione dei percorsi SMB, quelli usati da NAS, server
Windows e cartelle condivise, è una fonte classica di blocchi nelle applicazioni desktop: se il
disco remoto non risponde, l’interfaccia si congela finché il sistema operativo non si arrende.
FeedDownloader Pro verifica il percorso fuori dal processo grafico e si arrende da solo dopo otto
secondi. L’interfaccia resta reattiva in ogni caso.

---

## 1.5 Come leggere questo manuale

Il manuale copre l’uso completo del programma, dall’installazione alle funzioni meno frequentate.
Non serve leggerlo in ordine: i capitoli sono autonomi.

Per prendere confidenza conviene partire dal capitolo 4, che segue un flusso completo dall’analisi
del feed al file archiviato. Chi conosce già il software può andare diretto al capitolo che gli
interessa.
