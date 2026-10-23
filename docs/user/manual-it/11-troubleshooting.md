# Capitolo 11: Risoluzione dei problemi

## 11.1 Come usare questo capitolo

Qui sono raccolti i problemi che capitano davvero, descritti come si presentano a schermo e non come
si chiamano dentro il programma. Per ciascuno: perché succede e cosa si può fare.

Se il caso non è in elenco, la pagina pubblica del progetto è il posto giusto per segnalarlo,
indicando i passaggi che lo riproducono e il messaggio esatto che compare.

---

## 11.2 Feed e analisi

### I messaggi di errore dell’analisi

Quando un feed non si legge, sotto il campo di **Aggiungi un feed** (o in un avviso, aprendo un feed
della libreria) compare uno di questi messaggi.

| Messaggio | Cosa significa |
|-----------|----------------|
| *L’indirizzo porta a una pagina web, non a un feed RSS.* | L’indirizzo è quello del sito, non del feed: cercare il collegamento RSS nella pagina (capitolo 4, sezione 4.2). |
| *Il feed non esiste più a questo indirizzo (errore 404).* | Il feed è stato spostato o tolto. Cercare il nuovo indirizzo sul sito del podcast. |
| *Il server ha rifiutato la richiesta: il feed potrebbe essere privato.* | Il server chiede credenziali o blocca l’accesso (errori 401 e 403). |
| *Il server non risponde. Controlla la connessione.* | Rete assente, server spento o risposta oltre i quindici secondi. |
| *L’indirizzo non è valido.* | Errore di battitura, spazi o caratteri di troppo, protocollo diverso da HTTP o HTTPS. |
| *Gli indirizzi della rete locale non sono ammessi.* | L’indirizzo punta alla rete locale ed è bloccato dai controlli di sicurezza (capitolo 10, sezione 10.8). |
| *Lo stesso feed è stato appena richiesto: riprova fra qualche secondo.* | Lo stesso indirizzo è stato richiesto meno di tre secondi prima. Basta attendere. |
| *Il feed non si è potuto leggere.* | Ogni altro caso: documento malformato o formato non riconosciuto. |

Le cause più probabili, in ordine:

* **Il server del feed non risponde.** Provare ad aprire lo stesso indirizzo nel browser: se non si
  apre nemmeno lì, il problema è del podcast e l’unica mossa è riprovare più tardi.
* **La connessione è instabile.** Verificare che altri siti rispondano.
* **Un firewall o un proxy aziendale blocca la richiesta.** Se il feed si apre da casa e non
  dall’ufficio, la causa è quella.

### Il feed viene letto ma l’elenco è vuoto

* **Il feed non contiene episodi.** Aprire l’indirizzo nel browser e cercare i tag `<item>` o
  `<entry>`. Se non ci sono, non c’è niente da scaricare (*Questo feed non contiene episodi.*).
* **I filtri nascondono tutto.** Con *Nessun episodio corrisponde ai filtri.* basta premere **Azzera
  i filtri**.
* **Il formato è fuori standard.** Il programma legge RSS 2.0 e Atom 1.0 e tollera parecchie
  imprecisioni, ma qualche piattaforma proprietaria produce documenti irriconoscibili.

### Il pulsante principale è spento

Il pulsante **Scarica i N mancanti** (o **filtrati**) resta spento in due casi: manca la rete, oppure
fra gli episodi mostrati non c’è niente da scaricare, perché sono tutti archiviati o già in coda. Il
filtro **Archiviati** lo conferma in un colpo d’occhio.

### Vedo solo gli ultimi episodi, non il catalogo storico

*Perché:* il limite lo impone chi pubblica, non il programma. Molte piattaforme espongono nel feed
solo le ultime 50 o 100 puntate per non appesantire i propri server.

*Cosa fa già il programma:* se l’archivio storico è pubblicato in pagine collegate secondo lo
standard RFC 5005, il programma le segue da sé e ricompone il catalogo, fino a un massimo di venti
pagine. Il problema resta solo quando la paginazione non c’è, o quando il catalogo supera quel tetto.

*Cosa si può provare:* cercare un «feed completo» alternativo, che alcune piattaforme offrono;
recuperare gli episodi vecchi dal sito del podcast; verificare se la piattaforma accetta parametri
nell’indirizzo del tipo `?limit=0`.

### Un feed resta «Non ancora controllato»

È lo stato dei feed importati da OPML o mai letti. Subito dopo un’importazione il programma controlla
tutti i feed; se uno resta in questo stato, non ha risposto. Aprendolo dalla barra laterale compare
il motivo.

---

## 11.3 Download

### I messaggi di errore dei download

Nella vista **Download**, sezione **Non riusciti**, ogni episodio fallito riporta un messaggio e, fra
parentesi, il codice tecnico.

| Messaggio | Codice | Cosa significa |
|-----------|--------|----------------|
| *Il file non esiste più sul server (404).* | `EPISODE_NOT_FOUND` | Il file è stato tolto da chi pubblica. Nessun nuovo tentativo. |
| *Il trasferimento si è bloccato per oltre un minuto.* | `DOWNLOAD_STALLED` | Sessanta secondi senza dati, ripetuti fino a esaurire i tentativi. |
| *Il server non ha risposto in tempo.* | `DOWNLOAD_TIMEOUT` | Nessuna risposta alla connessione entro trenta secondi. |
| *Disco pieno.* | `DISK_FULL` | Non c’è più spazio nella cartella di download. |
| *Il file ricevuto è incompleto.* | `INTEGRITY_CHECK_FAILED` | La dimensione ricevuta non corrisponde a quella dichiarata, a ogni tentativo. |
| *Non si può scrivere nella cartella di download.* | `PERMISSION_DENIED` | Permessi insufficienti, disco protetto, file bloccato da un altro programma. |
| *Il server ha risposto con una pagina web invece dell’audio.* | `INVALID_CONTENT_TYPE` | Collegamento scaduto o pagina di cortesia al posto del file. |
| *Il file supera il limite di dimensione impostato.* | `FILE_TOO_LARGE` | Il file è oltre la **Dimensione massima di un file**. |
| *L’indirizzo porta alla rete locale: bloccato per sicurezza.* | `URL_PRIVATE_IP` e simili | Bloccato dai controlli anti-SSRF. |
| *Il server ha rifiutato la richiesta.* | `HTTP_4xx` | Accesso negato, troppe richieste (`HTTP_429`) o altro errore del client. |
| *Il server ha avuto un problema: riprova più tardi.* | `HTTP_5xx` | Errore del server di origine. |
| *Errore di rete.* | vari | Connessione caduta, nome del server non risolto, connessione rifiutata. |
| *Errore imprevisto.* | vari | Ogni altro caso. |

**Riprova** su una riga, o **Riprova tutti (N)**, rimette in coda gli episodi con gli stessi
parametri.

### Molti episodi falliscono con «Il file non esiste più sul server (404).»

*Perché:* gli episodi sono ancora elencati nel feed, ma i file audio non ci sono più. Succede spesso
con programmi abbandonati o migrati altrove.

Non c’è modo di scaricare un file che non esiste. Se però il podcast è attivo e gli errori sono
troppi, conviene avvisare chi lo pubblica: a volte è una migrazione fatta male, e si sistema.

Da sapere: gli episodi falliti **non vengono esclusi** dai lotti successivi. Restano **Da scaricare**
e un nuovo **Scarica i N mancanti** li ritenterà. È voluto, perché un file può tornare disponibile;
se disturbano, un filtro per periodo o una selezione manuale li tengono fuori.

### I download sono molto lenti

* **Il server limita la banda.** È il caso più comune. Con i server che penalizzano le connessioni
  multiple, scendere a uno o due download in parallelo a volte migliora le cose.
* **È attivo un limite di banda.** **Impostazioni → Download → Limite di banda (KB/s)** vale per
  tutti i download insieme: con tre download paralleli e 500 KB/s, ciascuno ne riceve circa un
  terzo.
* **La connessione è in Wi-Fi.** Per i lotti lunghi il cavo è più stabile.
* **Il disco di destinazione è lento**, tipicamente un NAS in Wi-Fi o una chiavetta USB 2.0.
  Conviene scaricare prima in locale e spostare dopo con **Sposta l’archivio**.
* **La linea è quella.** Uno speed test toglie ogni dubbio.

### Un episodio resta fermo al 99% e non finisce mai

*Perché:* il server ha smesso di inviare dati senza chiudere la connessione. Entro sessanta secondi
la sorveglianza degli stalli se ne accorge, chiude il trasferimento e lo conta come tentativo
fallito; il tentativo successivo riprende dal punto raggiunto grazie al file `.part`.

Se la cosa si ripete fino a esaurire i cinque tentativi, l’episodio finisce tra i non riusciti. Di
solito significa che il file sul server è troncato o corrotto: lo si riconosce dal messaggio *Il
file ricevuto è incompleto.*

### La coda si è fermata da sola

Tre possibilità, che la barra superiore distingue:

* **Offline**: la connessione è caduta e la coda si è messa in pausa da sola. Riparte da sola al
  ritorno della rete (capitolo 6, sezione 6.7).
* **Coda in pausa**: la pausa è stata chiesta a mano. Il ritorno della rete non la toglie: serve
  **Riprendi** nella vista Download.
* **Coda vuota** con dei non riusciti: i download rimasti sono falliti. Il motivo è nella sezione
  **Non riusciti**.

### Dopo un riavvio la coda è sparita

Non è sparita: è salvata. Aprendo la vista **Download** compare il riquadro *Download interrotti alla
chiusura precedente*, con **Riprendi** e **Scarta** (capitolo 6, sezione 6.8). Il programma non la
riprende da solo.

### Ho scaricato un file che il lettore dichiara corrotto

*Perché:* non dovrebbe accadere, visti i file `.part`, il controllo della dimensione e il rifiuto dei
contenuti non audio. Se accade, o il file sul server era già rovinato, o c’è stato un errore di
scrittura sul disco.

Cosa fare, nell’ordine:

1. Aprire il dettaglio dell’episodio con un clic sul titolo e premere **Scarica di nuovo**.
2. Se il file arriva rotto una seconda volta, il problema è alla fonte: si verifica aprendo
   l’indirizzo del file (**Copia audio** nel dettaglio) direttamente nel browser.
3. Avviare una verifica **Completa** dell’archivio (capitolo 9, sezione 9.5): elenca tutti i file il
   cui contenuto non corrisponde più a quello registrato al download.

### Bisogna sospendere, senza perdere il lavoro fatto

Non serve fermare tutto in modo definitivo: **Metti in pausa**, nella vista Download, sospende la
coda conservando i file parziali, e **Riprendi** fa ripartire i trasferimenti dal punto esatto in cui
erano. Vale anche per il singolo episodio. **Ferma e svuota la coda**, invece, cancella i parziali:
è la scelta giusta solo quando si vuole davvero scartare il lavoro fatto.

---

## 11.4 Archivio e verifica

### La verifica completa segnala tutti gli MP3 come diversi dall’originale

*Perché:* quei file sono stati scaricati con una versione fino alla 1.5.x con i tag ID3 attivi.
Quelle versioni calcolavano l’impronta prima di scrivere i tag, quindi l’impronta registrata non
corrisponde al file finale.

*Cosa fare:* controllare a campione che i file si ascoltino correttamente, poi premere **Accetta i
file attuali come riferimento** nella finestra della verifica (capitolo 9, sezione 9.5). Con la
1.6.0 il problema non si ripresenta.

### «Il file non si trova più dove era stato salvato.»

Compare premendo **Mostra nella cartella** su un episodio il cui file non c’è più: è stato spostato,
rinominato o cancellato fuori dal programma. Il programma apre almeno la cartella del podcast, se
esiste. La verifica dell’archivio, con **Cerca i file spostati**, ritrova i file rinominati o
spostati in un’altra delle cartelle note; quelli davvero perduti si segnano come da scaricare.

### «La cartella verrà creata al primo download.»

Compare premendo **Apri la cartella** su un feed di cui non è ancora stato scaricato niente: la
sottocartella del podcast non esiste ancora. Non è un errore.

### Dopo un cambio di cartella mancano dei file

Con la 1.6.0 il cambio di cartella non rende mancante l’archivio esistente, perché ogni episodio
ricorda la propria cartella (capitolo 9, sezione 9.8). Se mancano dei file, sono stati spostati a
mano in una posizione che il programma non conosce. Due rimedi:

* impostare come cartella di download quella in cui si trovano ora, con **Solo per i nuovi
  download**: il programma li cerca anche lì;
* oppure riportarli nella posizione originale.

Una verifica rapida conferma il risultato.

---

## 11.5 NAS e rete

### «La cartella di rete non risponde.» ma il NAS funziona

1. **Controllare il percorso carattere per carattere.** Su alcuni sistemi anche le maiuscole contano
   (`\\MYNAS\podcast` non è `\\MYNAS\Podcast`).
2. **Verificare le credenziali.** Aprire `\\MYNAS\NomeCondivisione` da Esplora file: se chiede la
   password, non è memorizzata nel Gestore credenziali di Windows. Inserirla e spuntare la
   memorizzazione.
3. **Controllare il firewall.** In *Windows Defender Firewall → App consentite* il programma deve
   risultare autorizzato.
4. **Controllare la versione di SMB.** I NAS più datati parlano solo SMBv1, che Windows 11 disattiva
   di serie. Meglio aggiornare il firmware del NAS che riabilitare un protocollo insicuro.

### I download su NAS si interrompono dopo qualche minuto

*Perché:* il NAS entra in standby durante il lavoro. Certi modelli domestici sorvegliano solo il
traffico web e ignorano le connessioni SMB, quindi credono di essere inattivi mentre stanno
ricevendo file.

Si risolve disattivando temporaneamente il risparmio energetico dal pannello del NAS, oppure
scendendo a un solo download in parallelo: un flusso continuo tiene attivo il dispositivo meglio di
raffiche intervallate da pause.

---

## 11.6 Problemi generali

### L’interfaccia è troppo piccola, troppo grande o mostra schede al posto dei pannelli

La dimensione dell’interfaccia si regola in **Impostazioni → Accessibilità → Dimensione**, oppure con
**Ctrl +**, **Ctrl −** e **Ctrl 0**. Con l’interfaccia molto ingrandita, o con una finestra stretta,
i pannelli laterali diventano schede o finestre (capitolo 3, sezione 3.14): allargando la finestra,
o riducendo la dimensione, tornano affiancati.

### L’interfaccia risponde in ritardo

* **Archivio molto grande.** Con decine di migliaia di episodi registrati qualche operazione
  rallenta.
* **Troppi download in parallelo su poca memoria.** Molti trasferimenti su una macchina con meno di
  4 GB si sentono: meglio tre o meno.
* **L’antivirus ispeziona ogni `.part`.** Molti prodotti analizzano ogni scrittura su disco.
  Escludere la cartella di download dalla scansione in tempo reale risolve.

### L’icona nell’area di notifica non c’è

Su Linux con GNOME serve l’estensione AppIndicator. Senza area di notifica il programma non può
ridursi a icona, e chiudere la finestra lo chiude: la coda resta comunque salvata e si riprende al
riavvio.

### Il programma non parte, o si chiude subito

1. **Database danneggiato: recupero automatico.** Se all’avvio `feeddownloader.sqlite` risulta
   illeggibile, il programma lo mette da parte rinominandolo `feeddownloader.sqlite.corrupt-[data]` e
   riparte con un database nuovo. L’applicazione si apre comunque.
2. **Ripristino guidato.** Al primo avvio dopo un recupero, cioè con il database vuoto e un backup
   `.corrupt-*` presente, compare la finestra *Trovato un backup del database danneggiato.* con
   **Tenta ripristino** e **Ignora**. Il ripristino recupera dal backup feed, archivio e cronologia
   per quanto sono leggibili: i file audio non vengono toccati e il backup non viene modificato. Alla
   fine un riepilogo dice quanto è stato salvato.
3. **Reinstallare.** Disinstallare e reinstallare l’ultima versione non cancella né il database né
   le impostazioni.

### Il database è andato perso: si può recuperare qualcosa?

* **Con un backup**, basta rimettere `feeddownloader.sqlite` nella cartella dati a programma chiuso
  (il percorso è nel capitolo 2, sezione 2.2).
* **Se il database si è corrotto**, conviene cercare i file `feeddownloader.sqlite.corrupt-[data]`
  nella stessa cartella: con il database attuale vuoto, all’avvio il programma propone da sé il
  ripristino guidato.
* **Senza nessuna delle due cose**, i file audio sono comunque salvi sul disco: si è persa la
  memoria, non l’archivio. Si riparte aggiungendo di nuovo i feed; i metadati accanto ai file, se
  attivi, conservano titoli, date e impronte di ogni episodio. La ricerca dei file spostati in questo
  caso non aiuta, perché le impronte di riferimento stavano proprio nel database perduto.
* **Per evitarlo**, conviene copiare ogni tanto `feeddownloader.sqlite` altrove ed esportare la lista
  dei feed in OPML (capitolo 5, sezione 5.6). Prima di una migrazione o di un aggiornamento
  importante è tempo ben speso.

---

*Qui finisce il manuale di Runtime FeedDownloader Pro. Per quello che non è coperto da queste pagine,
il riferimento è la pagina pubblica del progetto.*
