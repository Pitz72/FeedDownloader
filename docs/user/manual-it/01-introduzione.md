# Capitolo 1: Introduzione e Filosofia

## 1.1 Cos'è Runtime FeedDownloader Pro?

Per descrivere il software, è utile partire dal problema che risolve.

Ogni giorno vengono pubblicati, distribuiti e ascoltati migliaia di episodi di podcast. Nel tempo, tuttavia, una parte consistente di questi contenuti scompare: il conduttore cessa di pagare il servizio di hosting, la piattaforma di distribuzione interrompe l'attività, il CDN che ospitava i file audio viene dismesso. Un episodio ascoltato tre anni fa potrebbe oggi essere irraggiungibile in modo definitivo — non perché sia stato cancellato intenzionalmente, ma perché nessuno ne ha conservato una copia.

**Runtime FeedDownloader Pro** nasce per rispondere a questo problema. Non è un semplice strumento di download di podcast: è un'applicazione professionale per la **conservazione e l'archiviazione sistematica** di contenuti audio provenienti da feed RSS. È progettato per archivisti, editori, stazioni radio, produttori di contenuti e appassionati per i quali la documentazione sonora richiede lo stesso rigore conservativo riservato ad altri tipi di documenti.

---

## 1.2 A Chi È Rivolto

FeedDownloader Pro risponde a esigenze diverse:

*   **L'Archivista:** Vuole scaricare l'intero catalogo di un podcast storico prima che venga rimosso. Ha bisogno di un sistema che ricordi gli episodi già scaricati, eviti i duplicati e verifichi l'integrità di ogni file.

*   **Il Produttore Radiofonico:** Gestisce una biblioteca di contenuti su un NAS condiviso. Ha bisogno di uno strumento che operi su percorsi di rete senza bloccarsi, organizzi i file in modo prevedibile e produca report in formato CSV per il proprio team.

*   **L'Editore:** Vuole mantenere una copia locale di tutti i podcast della propria rete, esportare metadati per i sistemi di gestione dei contenuti e monitorare lo stato dell'archivio nel tempo.

*   **L'Appassionato:** Vuole conservare i podcast preferiti sul proprio disco, organizzati in modo ordinato, senza dipendere dalla disponibilità della connessione internet o rischiare di ricevere file corrotti.

---

## 1.3 La Filosofia "Database-First"

La differenza fondamentale tra FeedDownloader Pro e un generico strumento di download è l'approccio alla gestione del dato.

La maggior parte degli strumenti di download funziona in questo modo: analizza i file presenti sul disco, li confronta con il feed RSS e scarica ciò che manca. Questo approccio ha un limite critico: **il disco non è una fonte di verità affidabile**. I file possono essere spostati, rinominati, corrotti o cancellati accidentalmente. Se si sposta la cartella dei podcast da `C:\Podcast` a `D:\Archivio`, lo strumento perde il riferimento agli episodi già scaricati e ricomincia a scaricare l'intero catalogo.

FeedDownloader Pro adotta un approccio diverso. Al centro di ogni operazione si trova un **database SQLite** che registra ogni episodio analizzato o scaricato: l'URL originale, il percorso del file sul disco, la data di download, l'hash SHA-256 del contenuto e i metadati audio. Il database è la memoria persistente del software. Indipendentemente dalla posizione fisica dei file, il database conserva lo stato completo dell'archivio.

Questa architettura ha conseguenze pratiche dirette:

1.  **Nessun duplicato.** Anche se si analizza lo stesso feed più volte, il sistema riconosce gli episodi già presenti nel database e non li inserisce nuovamente in coda.
2.  **Resilienza agli spostamenti.** È possibile spostare l'archivio su un nuovo disco o su un NAS: la cronologia rimane intatta nel database.
3.  **Stato persistente tra le sessioni.** Se il programma viene chiuso durante un download batch da 300 episodi, alla riapertura la coda è disponibile nella stessa condizione in cui è stata lasciata.
4.  **Registro delle operazioni.** Ogni file scaricato è documentato: data di download, URL di origine e stato della verifica di integrità.

---

## 1.4 I Tre Pilastri del Software

Oltre all'approccio Database-First, FeedDownloader Pro è costruito attorno a tre principi tecnici con impatto diretto sulle funzionalità.

### Resilienza di Rete

Scaricare centinaia di file audio in sequenza su Internet non è un'operazione priva di complessità. I server possono essere sovraccarichi, le connessioni interrompersi, i trasferimenti corrompere il file. FeedDownloader Pro gestisce questi scenari con tre meccanismi:

*   **Retry con backoff esponenziale:** Quando un download fallisce, il software non ripete il tentativo immediatamente. Attende invece un intervallo crescente: 1 secondo, poi 2, poi 4. Questo approccio, standard nei sistemi distribuiti, aumenta le probabilità di successo senza aggravare il carico sul server sorgente.
*   **Stall detection:** Un download bloccato è più problematico di un download fallito. Se un server inizia a inviare dati e poi si interrompe senza chiudere la connessione, un software privo di questo controllo rimarrebbe in attesa indefinita. FeedDownloader Pro monitora il flusso dati in tempo reale: se non arrivano nuovi byte per 60 secondi consecutivi, il download viene interrotto e reinserito in coda automaticamente.
*   **File `.part` anti-corruzione con ripresa:** Ogni file viene scaricato con l'estensione temporanea `.part`. Solo al completamento totale e verificato del trasferimento il file viene rinominato con l'estensione definitiva (`.mp3`, `.m4a`, ecc.). In caso di interruzione, il file `.part` viene conservato: al tentativo successivo il download **riprende dal punto in cui si era fermato** (richiesta HTTP Range con validatore If-Range), invece di ricominciare da zero. Eventuali file `.part` orfani si eliminano con **Impostazioni → Avanzate → Pulisci file temporanei**.

### Sicurezza Integrata

FeedDownloader Pro elabora URL provenienti da fonti esterne (i feed RSS). Un URL costruito in modo malevolo, che punti a risorse interne della rete (un router, un NAS, un server locale), potrebbe essere usato per accedere a informazioni riservate — un attacco noto come **SSRF (Server-Side Request Forgery)**.

Per prevenire questo rischio, ogni URL viene sottoposto a una validazione **multilivello** prima dell'elaborazione: verifica sintattica, accettazione dei soli protocolli HTTP/HTTPS, blocco degli hostname interni noti, blocco degli intervalli di indirizzi IP privati e riservati (RFC 1918, loopback, link-local) e ri-validazione dell'indirizzo IP risolto via DNS a ogni connessione e a ogni redirect. Questa procedura è completamente automatica e trasparente per l'utente.

### Supporto NAS e Percorsi di Rete

FeedDownloader Pro è progettato per operare con archivi su dischi di rete. La gestione dei percorsi SMB — il protocollo utilizzato da NAS, server Windows e condivisioni di rete — è una fonte frequente di problemi nelle applicazioni desktop: un disco di rete non raggiungibile può causare il blocco dell'intera interfaccia per un tempo considerevole. FeedDownloader Pro risolve questo problema eseguendo la validazione del percorso di rete su un thread separato, con un timeout di 8 secondi. L'interfaccia rimane sempre reattiva, indipendentemente dallo stato del percorso di rete.

---

## 1.5 Contenuto del Manuale

Questo manuale copre l'uso completo di FeedDownloader Pro, dall'installazione alle funzionalità più avanzate. Non è necessario leggerlo in sequenza: ogni capitolo è autonomo e consultabile indipendentemente.

Per un primo approccio al software, si consiglia di seguire il **Capitolo 4 (Il Primo Archivio)**, che illustra un workflow completo dall'analisi del feed al download. Chi già conosce il software può accedere direttamente al capitolo di interesse tramite l'indice generale.

---

*Ecosystem Runtime | Digital Core — Strumenti costruiti per durare.*
