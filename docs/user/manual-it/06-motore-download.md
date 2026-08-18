# Capitolo 6: Il motore di download

## 6.1 Com’è fatto

Il motore lavora in modo asincrono e parallelo: invece di scaricare un file per volta, gestisce più
trasferimenti insieme attraverso una coda centrale.

Le parti in gioco sono quattro. La **coda** raccoglie in ordine tutti gli episodi in attesa. I
**processi di download** prendono dalla coda un episodio ciascuno e lo portano a termine, senza
sapere nulla degli altri; quanti ne lavorano insieme lo decidi tu. Il **gestore del database**
registra momento per momento lo stato di ogni trasferimento. Il **controllo di integrità** calcola
l’impronta SHA-256 di ogni file appena arrivato e la scrive in archivio.

---

## 6.2 Quanti download in parallelo

È il parametro che conviene tarare per primo. Troppo pochi e l’archiviazione si trascina; troppi e si
satura la connessione, si irrita il server o si moltiplicano gli errori.

Il valore predefinito è **3**, che su una linea domestica è un buon compromesso.

| Situazione | Download in parallelo |
|------------|-----------------------|
| Connessione lenta, o server che limita la banda | 1 |
| Linea domestica normale | 3 (predefinito) |
| Fibra veloce | 5 |
| NAS raggiunto da una rete lenta | 1 |

Si cambia da **Impostazioni → Download → Download Paralleli**, scegliendo fra **1**, **3** e **5**.
La modifica vale subito, anche sulla coda in corso.

*Se il server protesta.* Diversi servizi di hosting limitano le connessioni simultanee per indirizzo
IP. Quando compaiono spesso errori `429 Too Many Requests` o `503 Service Unavailable`, conviene
scendere a uno o due. Il meccanismo dei tentativi gestisce comunque i fallimenti, ma togliere carico
risolve il problema all’origine.

---

## 6.3 Errori e tentativi

Su centinaia di file, qualche errore di rete è certo. Il programma non insiste subito: aspetta, e
l’attesa cresce a ogni fallimento.

| Tentativo | Cosa succede |
|-----------|--------------|
| Dopo il primo fallimento | attende 1 secondo e riprova |
| Dopo il secondo | attende 2 secondi e riprova |
| Dopo il terzo | l’episodio è dichiarato in **errore** |

Se il server risponde `429 Too Many Requests` indicando un tempo di attesa nell’intestazione
`Retry-After`, il programma lo rispetta fino a un massimo di sessanta secondi. Poiché il file
parziale `.part` sopravvive fra un tentativo e l’altro, la ripresa riparte dal punto raggiunto
invece che da capo.

Alcuni errori non meritano un secondo tentativo, e il programma lo riconosce:

*   **File inesistente** (`404 Not Found`): riprovare non lo farà comparire.
*   **Contenuto non audio**: il server ha risposto con una pagina web al posto del file, tipico dei
    collegamenti scaduti che rimbalzano su una pagina di cortesia. Il download viene rifiutato con
    il messaggio *Il server ha inviato una pagina web, non audio*.
*   **File troppo grande**: supera il valore di **Dimensione Massima File** impostato (capitolo 10).
*   **Disco pieno o accesso negato** alla cartella di destinazione.
*   **Indirizzo bocciato dai controlli di sicurezza** contro gli attacchi SSRF.

A fine lotto, **Riprova falliti** rimette in coda tutti gli episodi in errore con un solo clic.

---

## 6.4 Il rilevamento degli stalli

C’è un caso peggiore dell’errore: il trasferimento che non finisce e non fallisce. La connessione
resta tecnicamente aperta, il sistema operativo non segnala niente, ma i byte hanno smesso di
arrivare. Senza una difesa, quel download resterebbe appeso a occupare un posto in coda.

Capita soprattutto con server sotto carico che strozzano la banda dopo i primi byte, con problemi di
instradamento lungo la strada e con file grossi serviti da reti di distribuzione limitate.

Ogni trasferimento attivo è quindi sorvegliato. Se per **sessanta secondi** non arriva un solo byte,
il programma chiude la connessione, **conserva il file `.part`** e conta l’accaduto come un
tentativo fallito: il tentativo successivo riprende dal punto raggiunto. Se lo stallo era passeggero
la cosa si risolve da sé; se invece si ripete fino a esaurire i tre tentativi, l’episodio finisce in
errore.

---

## 6.5 I file `.part`

Durante il trasferimento il contenuto finisce in un file temporaneo con estensione `.part`. Il nome
definitivo arriva solo quando il trasferimento è completo e la dimensione corrisponde a quella
dichiarata dal server. Così nella cartella di destinazione non compare mai un file audio troncato
con l’estensione buona.

L’impronta SHA-256 viene calcolata subito dopo, sul file ormai definitivo, e registrata in archivio
insieme a dimensione, bitrate e frequenza di campionamento.

**La ripresa.** In caso di pausa, errore temporaneo o interruzione, accanto al `.part` resta un
piccolo file `.part.meta` con il «validatore» fornito dal server (ETag oppure Last-Modified). Al
tentativo successivo il programma chiede soltanto i byte mancanti, con una richiesta HTTP `Range`
accompagnata da `If-Range`: se nel frattempo il file remoto è cambiato, il server lo dichiara e il
download riparte da zero. È la garanzia contro il rischio peggiore della ripresa, cioè incollare
insieme pezzi di due file diversi.

**La pulizia.** I `.part` rimasti orfani da sessioni passate si eliminano da **Impostazioni →
Avanzate → Manutenzione → Pulisci file temporanei**; la funzione lavora solo a download fermi.

I file parziali stanno nella stessa cartella dei file completati. Non ha senso aprirli con un
lettore audio: sono monconi, e il lettore protesterà.

---

## 6.6 Pausa, ripresa, interruzione

**Pausa.** Dal pannello download si sospende un singolo trasferimento, con **Metti in pausa** sulla
riga, oppure tutta la coda, con **Pausa** in fondo al pannello: la scritta **Coda in pausa** segnala
lo stato. La pausa conserva i file parziali e il posto nella coda; **Riprendi** fa continuare il
trasferimento dal punto esatto in cui si era fermato.

**Interruzione.** **Ferma download** è un’altra cosa: chiude ordinatamente i trasferimenti attivi,
svuota la coda ed elimina i file parziali. Ciò che era già completo resta in archivio; gli episodi
interrotti tornano a mostrarsi come **NUOVO**.

**Chiusura della finestra.** Con la × il programma si ritira nell’area di notifica e continua a
scaricare. La voce **Quit** del menu del tray invece chiude tutto e interrompe i trasferimenti; i
`.part` restano sul disco, quindi rimettendo in coda quegli episodi alla sessione successiva la
ripresa riparte da dove eravamo.

---

## 6.7 La velocità

Ogni riga del pannello mostra la velocità del proprio trasferimento. Non c’è un totale aggregato a
schermo: per farsi un’idea della banda occupata si sommano a occhio le righe attive.

Quattro fattori la determinano.

*   **La tua linea**, che resta il tetto.
*   **Il server di origine**, che spesso è il vero collo di bottiglia: molti servizi di hosting
    limitano la banda per contenere i costi, e un singolo trasferimento raramente supera i 2–5 MB/s.
*   **Il numero di download paralleli**, che compensa la lentezza del singolo server usando più
    connessioni insieme.
*   **La dimensione dei file**: i file da 20–80 MB, cioè episodi da mezz’ora o un’ora, sono i più
    efficienti, perché il tempo speso ad aprire la connessione pesa poco sul totale.

---

*Il capitolo 7 tratta i percorsi su NAS e dischi di rete.*
