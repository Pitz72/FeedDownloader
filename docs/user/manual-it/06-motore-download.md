# Capitolo 6: Il motore di download

## 6.1 Com’è fatto

Il motore lavora in modo asincrono e parallelo: invece di scaricare un file per volta, gestisce più
trasferimenti insieme attraverso una coda centrale.

Le parti in gioco sono quattro. La **coda** raccoglie in ordine tutti gli episodi in attesa, ed è
salvata nel database finché ogni download non si conclude. I **processi di download** prendono dalla
coda un episodio ciascuno e lo portano a termine, senza sapere nulla degli altri; quanti ne lavorano
insieme lo stabilisce un’impostazione. Il **gestore del database** registra lo stato di ogni
trasferimento. Il **controllo di integrità** verifica la dimensione di ogni file appena arrivato, ne
calcola l’impronta SHA-256 e la scrive nell’archivio.

Ogni via d’ingresso passa dalla stessa coda: il pulsante principale della vista Feed, il download di
un singolo episodio, l’archivio automatico, la ripresa dei download interrotti e **Riprova**.

---

## 6.2 Quanti download in parallelo

È il parametro che conviene tarare per primo. Troppo pochi e l’archiviazione si trascina; troppi e si
satura la connessione, si sovraccarica il server o si moltiplicano gli errori.

Il valore predefinito è **3**, che su una linea domestica è un buon compromesso.

| Situazione | Download in parallelo |
|------------|-----------------------|
| Connessione lenta, o server che limita le connessioni | 1–2 |
| Linea domestica normale | 3 (predefinito) |
| Fibra veloce, server robusti | 5–6 |
| Fibra molto veloce, molti podcast di server diversi | fino a 10 |
| NAS raggiunto da una rete lenta | 1–2 |

Si cambia da **Impostazioni → Download → Download in parallelo**, scegliendo un valore da **1** a
**10**. La modifica vale subito, anche sulla coda in corso.

*Se il server protesta.* Diversi servizi di hosting limitano le connessioni simultanee per indirizzo
IP. Quando compaiono spesso errori come *Il server ha rifiutato la richiesta.* (codice `HTTP_429`) o
*Il server ha avuto un problema: riprova più tardi.* (`HTTP_503`), conviene scendere a uno o due. Il
meccanismo dei tentativi gestisce comunque i fallimenti, ma togliere carico risolve il problema
all’origine.

---

## 6.3 Errori e tentativi

Su centinaia di file, qualche errore di rete è certo. Il programma non insiste subito: aspetta, e
l’attesa raddoppia a ogni fallimento. Ogni episodio ha a disposizione **cinque tentativi**.

| Tentativo | Cosa succede se fallisce |
|-----------|--------------------------|
| Primo | attende 1 secondo e riprova |
| Secondo | attende 2 secondi e riprova |
| Terzo | attende 4 secondi e riprova |
| Quarto | attende 8 secondi e riprova |
| Quinto | l’episodio passa tra i **non riusciti** |

Se il server risponde `429 Too Many Requests` indicando un tempo di attesa nell’intestazione
`Retry-After`, il programma lo rispetta fino a un massimo di sessanta secondi. Poiché il file
parziale `.part` sopravvive fra un tentativo e l’altro, la ripresa riparte dal punto raggiunto
invece che da capo.

La connessione iniziale ha trenta secondi per rispondere; oltre, il tentativo conta come fallito
(*Il server non ha risposto in tempo.*).

Alcuni errori non meritano un secondo tentativo, e il programma lo riconosce:

* **File inesistente** (`404`): riprovare non lo farà comparire. Messaggio: *Il file non esiste più
  sul server (404).*
* **Contenuto non audio**: il server ha risposto con una pagina web al posto del file, tipico dei
  collegamenti scaduti che rimbalzano su una pagina di cortesia. Messaggio: *Il server ha risposto
  con una pagina web invece dell’audio.*
* **File troppo grande**: supera la **Dimensione massima di un file** impostata (sezione 6.9).
* **Disco pieno** o **cartella non scrivibile**.
* **Indirizzo bocciato dai controlli di sicurezza** contro gli attacchi SSRF.
* **Annullamento** da parte dell’utente.

Un file arrivato con una dimensione diversa da quella dichiarata dal server (*Il file ricevuto è
incompleto.*) viene scartato insieme al suo `.part` e riscaricato da zero, entro i cinque tentativi.

Gli episodi falliti compaiono nella vista **Download**, sezione **Non riusciti**, con il motivo.
**Riprova** su una riga, o **Riprova tutti (N)**, li rimette in coda con gli stessi parametri.

---

## 6.4 Il rilevamento degli stalli

C’è un caso peggiore dell’errore: il trasferimento che non finisce e non fallisce. La connessione
resta tecnicamente aperta, il sistema operativo non segnala niente, ma i byte hanno smesso di
arrivare. Senza una difesa, quel download resterebbe appeso a occupare un posto in coda.

Capita soprattutto con server sotto carico che strozzano la banda dopo i primi byte, con problemi di
instradamento lungo la strada e con file grossi serviti da reti di distribuzione limitate.

Ogni trasferimento attivo è quindi sorvegliato. Se per **sessanta secondi** non arriva un solo byte,
il programma chiude la connessione, **conserva il file `.part`** e conta l’accaduto come un tentativo
fallito: il tentativo successivo riprende dal punto raggiunto. Se lo stallo era passeggero la cosa si
risolve da sé; se invece si ripete fino a esaurire i tentativi, l’episodio finisce tra i non riusciti
con il messaggio *Il trasferimento si è bloccato per oltre un minuto.*

---

## 6.5 I file `.part` e la ripresa

Durante il trasferimento il contenuto finisce in un file temporaneo con estensione `.part`. Il nome
definitivo arriva solo quando il trasferimento è completo e la dimensione corrisponde a quella
dichiarata dal server. Così nella cartella di download non compare mai un file audio troncato con
l’estensione giusta.

Subito dopo, nell’ordine, il programma scrive gli eventuali tag ID3 (capitolo 8), calcola
l’impronta SHA-256 sul file ormai definitivo e la registra nell’archivio insieme a dimensione,
bitrate e frequenza di campionamento. L’impronta descrive quindi il file esattamente com’è sul
disco.

**La ripresa.** In caso di pausa, errore temporaneo o interruzione, accanto al `.part` resta un
piccolo file `.part.meta` con il «validatore» fornito dal server (ETag oppure Last-Modified). Al
tentativo successivo il programma chiede soltanto i byte mancanti, con una richiesta HTTP `Range`
accompagnata da `If-Range`: se nel frattempo il file remoto è cambiato, il server lo dichiara e il
download riparte da zero. È la garanzia contro il rischio peggiore della ripresa, cioè incollare
insieme pezzi di due file diversi. Se il server non fornisce alcun validatore, la ripresa non è
verificabile e il download riparte da zero.

**La pulizia.** I `.part` rimasti orfani da sessioni passate si eliminano da **Impostazioni →
Archivio → Pulisci i file temporanei**. La funzione lavora solo a coda vuota e cerca in tutte le
cartelle usate dall’archivio.

I file parziali stanno nella stessa cartella dei file completati. Non ha senso aprirli con un
lettore audio: sono frammenti, e il lettore li rifiuterà.

---

## 6.6 Pausa, ripresa, interruzione

**Pausa.** Dalla vista **Download** si sospende un singolo trasferimento, con il pulsante di pausa
sulla sua riga, oppure tutta la coda, con **Metti in pausa** nell’intestazione. La barra superiore
segnala **Coda in pausa**. La pausa conserva i file parziali e il posto nella coda; **Riprendi** fa
continuare il trasferimento dal punto esatto in cui si era fermato.

**Annullamento di un download.** La × su una riga della coda, o accanto a un episodio in coda nella
vista del feed, toglie quell’episodio dalla coda e ne cancella il file parziale. L’episodio torna da
scaricare.

**Interruzione.** **Ferma e svuota la coda** è un’altra cosa: dopo la conferma *Fermare tutti i
download?* chiude i trasferimenti attivi, svuota la coda ed elimina i file parziali. Ciò che era già
completo resta in archivio; gli episodi interrotti tornano da scaricare. La coda svuotata non viene
riproposta all’avvio successivo.

**Chiusura della finestra.** Con la × il programma si ritira nell’area di notifica e continua a
scaricare. La voce **Quit** del menu dell’icona invece chiude tutto e interrompe i trasferimenti: i
`.part` restano sul disco e la coda resta salvata, quindi al riavvio i download si riprendono da
dove erano (sezione 6.8).

---

## 6.7 La pausa automatica senza rete

Quando la connessione cade, il programma mette in pausa la coda da solo. La barra superiore mostra
**Offline**, e in cima all’area principale compare l’avviso: *Sei offline: la coda è in pausa e
riparte da sola al ritorno della connessione.* I file parziali restano sul disco.

Al ritorno della rete la coda riparte da sola, dal punto raggiunto, e pochi secondi dopo il
programma controlla i feed in cerca di episodi usciti nel frattempo.

Senza questa pausa, un calo di rete trasformerebbe un lotto in una pioggia di errori in meno di un
minuto, perché ogni episodio consumerebbe i propri tentativi a vuoto.

Una pausa decisa dall’utente ha la precedenza: se la coda era già stata messa in pausa a mano, il
ritorno della rete non la fa ripartire.

---

## 6.8 La coda che sopravvive alla chiusura

Ogni download accettato in coda viene registrato nel database e tolto solo quando si conclude,
bene o male. Se il programma si chiude con dei download ancora in coda, per una chiusura con
**Quit**, un arresto del computer o un blocco improvviso, al riavvio la vista **Download** mostra il
riquadro *Download interrotti alla chiusura precedente*, con il numero dei download e i podcast a cui
appartengono.

* **Riprendi** li rimette in coda; grazie ai `.part`, i trasferimenti a metà riprendono dal punto
  raggiunto.
* **Scarta** li dimentica. I file parziali restano sul disco fino a una pulizia dei file temporanei.

Il programma non riprende mai la coda da solo: la rete, la cartella o le intenzioni potrebbero
essere cambiate nel frattempo. Gli episodi che nel frattempo risultano già archiviati non vengono
riproposti.

---

## 6.9 Limite di banda e dimensione massima

Due impostazioni in **Impostazioni → Download**, sezione **Trasferimento**, regolano quanto il motore
può prendersi.

**Limite di banda (KB/s).** Un tetto unico, **condiviso da tutti i download insieme**: con un limite
di 500 KB/s, tre download paralleli si dividono 500 KB/s, non ne usano 500 ciascuno. `0` significa
nessun limite ed è il predefinito. Per dare un’idea, `500` tiene il consumo intorno ai 4 Mbps. La
modifica vale subito, anche sui download in corso.

**Dimensione massima di un file (MB).** Rifiuta i file più grandi del valore indicato; `0` significa
nessun limite. Serve contro le anomalie: dimensioni dichiarate per errore, o server che al posto
dell’audio spediscono tutt’altro. Quando il server dichiara la dimensione, il rifiuto arriva prima di
scrivere un byte; quando non la dichiara, il trasferimento viene interrotto appena supera il tetto.
Il file oltre soglia è un errore definitivo, senza ulteriori tentativi: *Il file supera il limite di
dimensione impostato.*

---

## 6.10 La velocità

Ogni riga della coda mostra la velocità del proprio trasferimento e il tempo stimato. La barra sotto
l’intestazione della vista Download riporta invece l’avanzamento del lavoro in numero di file.

Quattro fattori determinano la velocità.

* **La linea**, che resta il tetto.
* **Il server di origine**, che spesso è il vero collo di bottiglia: molti servizi di hosting
  limitano la banda per contenere i costi, e un singolo trasferimento raramente supera i 2–5 MB/s.
* **Il numero di download paralleli**, che compensa la lentezza del singolo server usando più
  connessioni insieme.
* **La dimensione dei file**: i file da 20–80 MB, cioè episodi da mezz’ora o un’ora, sono i più
  efficienti, perché il tempo speso ad aprire la connessione pesa poco sul totale.

---

## 6.11 Lo spazio su disco

Prima di mettere in coda più episodi, il programma controlla lo spazio libero sul disco della
cartella di download e lo confronta con la stima (capitolo 4, sezione 4.7):

* sotto i 200 MB liberi non avvia nulla;
* se lo spazio libero è meno di una volta e un quinto della stima, la conferma lo segnala in giallo;
* durante il lotto, un file che non trova più posto si ferma con *Disco pieno.* senza ulteriori
  tentativi, e gli altri proseguono finché c’è spazio.

Liberato lo spazio, **Riprova tutti** rimette in coda gli episodi fermati.

---

*Il capitolo 7 tratta i percorsi su NAS e dischi di rete.*
