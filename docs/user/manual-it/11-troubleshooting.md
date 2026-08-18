# Capitolo 11: Risoluzione dei problemi

## 11.1 Come usare questo capitolo

Qui trovi i problemi che capitano davvero, descritti come si presentano a schermo e non come si
chiamano dentro il programma. Per ciascuno: perché succede e cosa si può fare.

Se il tuo caso non è in elenco, la pagina pubblica delle release è il posto giusto per segnalarlo,
indicando i passaggi che lo riproducono e il messaggio esatto che compare.

---

## Feed e analisi

### Errore di connessione o timeout mentre analizzo un feed

*Cosa vedi:* premi **Analizza**, passa qualche secondo e compare un errore di rete. La lista resta
vuota.

Le cause, in ordine di probabilità.

*   **Il server del feed non risponde.** Prova ad aprire lo stesso indirizzo nel browser: se non si
    apre nemmeno lì, il problema è del podcast e l’unica mossa è riprovare più tardi.
*   **La tua connessione è instabile.** Verifica che altri siti rispondano.
*   **Un firewall o un proxy aziendale ti sta bloccando.** Se il feed si apre da casa e non
    dall’ufficio, hai la risposta.

Il programma rinuncia dopo quindici secondi di silenzio: è un timeout voluto, per non lasciarti
davanti a una finestra bloccata.

### Il feed viene letto ma la lista è vuota

*   **Il feed non contiene episodi.** Apri l’indirizzo nel browser e cerca i tag `<item>` o
    `<entry>`. Se non ci sono, non c’è niente da scaricare.
*   **Il formato è fuori standard.** Il programma legge RSS 2.0 e Atom 1.0 e perdona parecchie
    imprecisioni, ma qualche piattaforma proprietaria produce documenti irriconoscibili.
*   **Hai già tutto.** Se il feed era stato lavorato in passato, gli episodi ci sono ma portano il
    tag **ARCHIVIATO**. Il filtro **Scaricati** lo conferma in un colpo d’occhio.

### Vedo solo gli ultimi episodi, non il catalogo storico

*Perché:* il limite lo impone chi pubblica, non il programma. Molte piattaforme espongono nel feed
solo le ultime 50 o 100 puntate per non appesantire i propri server.

*Cosa fa già il programma:* se l’archivio storico è pubblicato in pagine collegate secondo lo
standard RFC 5005, il programma le segue da sé e ricompone il catalogo, fino a un massimo di venti
pagine. Il problema resta solo quando la paginazione non c’è, o quando il catalogo supera quel tetto.

*Cosa puoi provare:* cercare un «feed completo» alternativo, che alcune piattaforme offrono;
recuperare gli episodi vecchi dal sito del podcast; verificare se la piattaforma accetta parametri
nell’indirizzo del tipo `?limit=0`.

---

## Download

### Molti episodi finiscono in errore «File non trovato sul server»

*Perché:* gli episodi sono ancora elencati nel feed, ma i file audio non ci sono più. Succede
spesso con programmi abbandonati o migrati altrove.

Non c’è modo di scaricare un file che non esiste. Se però il podcast è vivo e gli errori sono
troppi, vale la pena avvisare chi lo pubblica: a volte è una migrazione fatta male, e si sistema.

Da sapere: gli episodi falliti **non vengono esclusi** dai lotti successivi. Restano segnati come da
scaricare e un nuovo **Scarica Tutto** li ritenterà. È voluto, perché un file può tornare
disponibile; se ti danno fastidio, il filtro per data o la selezione manuale li tengono fuori.

### I download vanno lentissimi

*   **Il server limita la banda.** È il caso più comune. Con i server che penalizzano le connessioni
    multiple, scendere a un solo download in parallelo a volte migliora le cose.
*   **Sei in Wi-Fi.** Per i lotti lunghi, il cavo fa la differenza.
*   **Il disco di destinazione è lento**, tipicamente un NAS in Wi-Fi o una chiavetta USB 2.0.
    Scarica prima in locale e sposta dopo.
*   **La linea è quella.** Uno speed test toglie ogni dubbio.

### Un episodio resta fermo al 99% e non finisce mai

*Perché:* il server ha smesso di inviare dati senza chiudere la connessione. Entro sessanta secondi
la sorveglianza degli stalli se ne accorge, chiude il trasferimento e lo conta come tentativo
fallito; il tentativo successivo riprende dal punto raggiunto grazie al file `.part`.

Se la cosa si ripete fino a esaurire i tre tentativi, l’episodio finisce in errore. Di solito
significa che il file sul server è troncato o corrotto: lo si riconosce dal messaggio sulla verifica
di integrità, cioè la dimensione ricevuta non corrisponde a quella dichiarata.

### Ho scaricato un `.mp3` che il lettore dichiara corrotto

*Perché:* non dovrebbe accadere, visti i file `.part` e il controllo della dimensione. Se accade, o
il file sul server era già rovinato, o c’è stato un errore di scrittura sul disco.

Cosa fare, nell’ordine:

1.  Aprire il pannello di dettaglio dell’episodio con un clic sulla riga e premere **Riscarica**.
2.  Se il file arriva rotto una seconda volta, il problema è alla fonte: si verifica aprendo
    l’indirizzo del file direttamente nel browser.
3.  Lanciare il controllo dell’archivio (capitolo 9): la verifica SHA-256 elenca tutti i file il cui
    contenuto non corrisponde più a quello registrato al download.

Dalla versione 1.5.0 il programma rifiuta anche le risposte che non sono audio: se il server manda
una pagina web al posto del file, il download fallisce con *Il server ha inviato una pagina web, non
audio* invece di salvare un file inservibile. Allo stesso modo, un file oltre il tetto impostato in
**Dimensione Massima File** viene respinto con *File oltre il limite di dimensione impostato*.

### Devo sospendere, non buttare via

Non serve fermare tutto in modo definitivo: **Pausa** nel pannello download sospende la coda
conservando i file parziali, e **Riprendi** fa ripartire i trasferimenti dal punto esatto in cui
erano. Vale anche per il singolo episodio. **Ferma download**, invece, cancella i parziali: è la
scelta giusta solo quando vuoi davvero buttare via il lavoro fatto.

A fine lotto, per rimettere in coda tutti gli episodi andati storti c’è **Riprova falliti**.

---

## NAS e rete

### «Percorso di rete non raggiungibile» ma il NAS funziona

1.  **Controlla il percorso carattere per carattere.** Su alcuni sistemi anche le maiuscole contano
    (`\\MYNAS\podcast` non è `\\MYNAS\Podcast`).
2.  **Verifica le credenziali.** Apri `\\MYNAS\NomeCondivisione` da Esplora file: se ti chiede la
    password, non è memorizzata nel Gestore credenziali di Windows. Inseriscila e spunta la
    memorizzazione.
3.  **Guarda il firewall.** In *Windows Defender Firewall → App consentite* il programma deve
    risultare autorizzato.
4.  **Controlla la versione di SMB.** I NAS più datati parlano solo SMBv1, che Windows 11 disattiva
    di serie. Meglio aggiornare il firmware del NAS che riabilitare un protocollo insicuro.

### I download su NAS si interrompono dopo qualche minuto

*Perché:* il NAS si addormenta durante il lavoro. Certi modelli domestici sorvegliano solo il
traffico web e ignorano le connessioni SMB, quindi credono di essere inattivi mentre stanno
ricevendo file.

Si risolve disattivando temporaneamente il risparmio energetico dal pannello del NAS, oppure
scendendo a un solo download in parallelo: un flusso continuo tiene sveglio il dispositivo meglio di
raffiche intervallate da pause.

---

## Problemi generali

### L’interfaccia risponde in ritardo

*   **Archivio molto grande.** Con decine di migliaia di episodi registrati qualche operazione
    rallenta.
*   **Troppi download in parallelo su poca memoria.** Cinque trasferimenti su una macchina con meno
    di 4 GB si sentono: meglio uno o tre.
*   **L’antivirus ispeziona ogni `.part`.** Molti prodotti analizzano ogni scrittura su disco.
    Escludere la cartella di destinazione dalla scansione in tempo reale risolve.

### Il programma non parte, o si chiude subito

1.  **Database danneggiato: recupero automatico.** Se all’avvio `feeddownloader.sqlite` risulta
    illeggibile, il programma lo mette da parte rinominandolo `feeddownloader.sqlite.corrupt-[data]`
    e riparte con un database nuovo. L’applicazione si apre comunque.
2.  **Ripristino guidato.** Al primo avvio dopo un recupero, cioè con il database vuoto e un backup
    `.corrupt-*` presente, compare la finestra *Trovato un backup del database danneggiato* con
    **Tenta ripristino** e **Ignora**. Il ripristino recupera dal backup feed, archivio e cronologia
    per quanto sono leggibili: i file audio non vengono toccati e il backup non viene modificato.
    Alla fine un riepilogo dice quanto è stato salvato.
3.  **Reinstallare.** Disinstallare e reinstallare l’ultima versione non cancella né il database né
    le impostazioni.

### Ho perso il database: posso recuperare qualcosa?

*   **Se hai un backup**, basta rimettere `feeddownloader.sqlite` nella cartella dati a programma
    chiuso (il percorso è nel capitolo 2).
*   **Se il database si è corrotto**, cerca i file `feeddownloader.sqlite.corrupt-[data]` nella
    stessa cartella: con il database attuale vuoto, all’avvio il programma propone da sé il
    ripristino guidato.
*   **Se non hai nulla di tutto questo**, i file audio sono comunque salvi sul disco: si è persa la
    memoria, non l’archivio. Rianalizzando i feed si riparte, tenendo presente che la riparazione
    per checksum in questo caso non aiuta, perché le impronte stavano proprio nel database perduto.
*   **Per non ritrovartici**, ogni tanto copia `feeddownloader.sqlite` altrove ed esporta la lista
    dei feed in OPML (capitolo 5). Prima di una migrazione o di un aggiornamento importante è tempo
    ben speso.

---

*Qui finisce il manuale di Runtime FeedDownloader Pro. Per quello che non è coperto da queste
pagine, il riferimento è la pagina pubblica delle release del progetto.*
