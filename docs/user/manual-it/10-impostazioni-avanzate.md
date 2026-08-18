# Capitolo 10: Le impostazioni

## 10.1 Come sono organizzate

Il pannello si apre in qualsiasi momento con l’icona dell’ingranaggio in alto a destra, anche
mentre un download è in corso. Le voci sono divise in cinque schede, nell’ordine: **Generale**,
**Download**, **Metadati**, **Archivio**, **Avanzate**. Ogni modifica viene salvata subito: non
esiste un pulsante di conferma perché non serve.

Questo capitolo segue le schede una per una. Template, sidecar e tag ID3 (scheda Metadati) sono
trattati nel capitolo 8; controllo dell’archivio, inventario CSV e migrazione (scheda Archivio) nel
capitolo 9.

---

## 10.2 Generale

### Lingua

L’interfaccia parla **italiano** e **inglese**. Il cambio è immediato, senza riavviare. Il programma
usa un solo tema, scuro: non c’è un tema chiaro né un controllo della densità delle liste.

### Aggiornamento automatico dei feed

Stabilisce ogni quanto il programma rilegge i feed da solo. Un controllo avviene comunque all’avvio
e al ritorno della connessione dopo un’interruzione.

| Opzione | Comportamento |
|---------|--------------|
| Disattivato | Nessun controllo ciclico; resta quello all’avvio. |
| 6 ore (predefinito) | Rilettura completa ogni sei ore. |
| 12 ore | Rilettura ogni dodici ore. |
| 24 ore | Rilettura una volta al giorno. |

La modifica vale subito. Se il controllo trova episodi nuovi manda una notifica di sistema
cliccabile, che porta in primo piano il programma e apre il feed interessato quando è uno solo.
Nessun download parte da sé: la notifica segnala e basta (sezione 5.9).

### Guida e novità

Nella stessa scheda ci sono due scorciatoie: la **guida utente**, che apre la documentazione
integrata e da lì il manuale completo in PDF, e **Novità di questa versione**, che mostra le note di
rilascio della versione installata. La stessa finestra compare da sé al primo avvio dopo un
aggiornamento.

---

## 10.3 Download

Qui stanno i comandi del motore. I parametri interni (timeout di connessione, numero di tentativi,
sorveglianza degli stalli) sono fissi e non si toccano.

### Percorso Download

La cartella dove finisce tutto, nella sezione **Archiviazione**. Si sceglie con l’icona accanto al
campo, che apre il selettore di sistema, ed è la stessa cosa che fa l’icona cartella nella barra di
comando.

### Download Paralleli

Quanti trasferimenti insieme: **1**, **3** o **5**. Il predefinito è 3. Per orientarsi nella scelta,
si veda il capitolo 6.

### Limite Velocità Download

Limita la banda complessiva usata dai download, per non prendersi tutta la linea. Il valore è in
KB/s; `0` significa nessun limite ed è il predefinito. Per dare un’idea: `500` tiene il consumo
intorno ai 4 Mbps.

### Dimensione Massima File

Rifiuta i file più grandi del valore indicato, espresso in MB; `0` significa nessun limite. Serve
contro le anomalie: dimensioni dichiarate per errore, o server che al posto dell’audio spediscono
tutt’altro. Il file oltre soglia diventa un errore definitivo, senza tentativi ulteriori. Quando il
server dichiara la dimensione, il rifiuto arriva prima di scrivere un byte; quando non la dichiara,
il trasferimento viene interrotto appena supera il tetto.

---

## 10.4 Metadati

Contiene il **Template Nome File** con la sua anteprima, l’interruttore dei **File Sidecar .json** e
quello del **tagging ID3**, che cambia etichetta a seconda dello stato. Sono descritti nel
capitolo 8.

---

## 10.5 Archivio

Raccoglie quattro gruppi: le statistiche dell’archivio, **Dati & Portabilità** con importazione ed
esportazione OPML e l’inventario CSV, l’**Health Check Archivio** con la riparazione per checksum, e
**Migra Archivio** per spostare i file su un altro disco. Tutto nel capitolo 9, tranne l’OPML che sta
nel capitolo 5.

---

## 10.6 Avanzate

### Aggiornamenti

Il sistema di aggiornamento funziona **col consenso**: niente si scarica e niente si installa da sé.

All’avvio, nella versione installata, il programma interroga il repository delle release. Se trova
una versione nuova compaiono l’indicatore **Aggiornamento disponibile** nella barra superiore e una
notifica di sistema, ma il pacchetto **non viene scaricato**. Il pulsante **Controlla Aggiornamenti**
forza la verifica quando vuoi tu.

Lo scaricamento parte premendo **Scarica** sull’indicatore o **Scarica aggiornamento** qui nelle
impostazioni. A pacchetto pronto compare **Riavvia e Installa**, e nemmeno quello scatta da solo:
l’installazione avviene quando lo decidi, mai alla chiusura del programma.

Gli stati che vedrai, nell’ordine: *Ricerca aggiornamenti…*, poi *Hai già la versione più recente*
oppure *Aggiornamento disponibile: vX.Y.Z*, quindi *Download aggiornamento… N%* e infine
*Aggiornamento scaricato — riavvia per installare*.

### Manutenzione

**Pulisci file temporanei** elimina i `.part` orfani rimasti nella cartella di destinazione da
sessioni interrotte. Non funziona mentre ci sono download attivi, perché quei file sono in uso: in
quel caso il programma lo dice invece di procedere. Alla fine riporta quanti file ha rimosso.

### Zona Pericolo

**Resetta Storico Download** cancella dal database la cronologia dei download, cioè la memoria di
cosa è già stato preso. Il programma chiede conferma. I file audio sul disco **restano dove sono**:
dopo il reset gli episodi tornano a mostrarsi come da scaricare, e un nuovo download li
sovrascriverebbe.

Ha senso in un caso solo: quando si vuole ripartire con una cronologia pulita, per esempio dopo aver
spostato tutto su un altro sistema o al termine di una serie di prove.

---

## 10.7 Come vengono filtrati gli indirizzi (informativo)

Questa sezione spiega qualcosa che il programma fa da solo e che non è configurabile.

Un feed è contenuto che arriva dall’esterno, e gli indirizzi che contiene potrebbero puntare a
risorse della tua rete locale invece che a un file audio pubblico: il pannello del router, un NAS,
un servizio interno. È la famiglia di attacchi chiamata SSRF. Un archiviatore che segue ciecamente
gli indirizzi di un feed diventa lo strumento con cui qualcuno bussa alle porte di casa tua.

Ogni indirizzo passa quindi cinque filtri:

1.  **Sintassi**: deve essere un URL valido.
2.  **Protocollo**: solo `http://` e `https://`. Roba come `file://`, `ftp://`, `data:` o
    `javascript:` viene respinta subito.
3.  **Nomi interni**: `localhost` e i nomi di loopback vengono rifiutati.
4.  **Indirizzi privati e riservati**: le reti RFC 1918 (`10.0.0.0/8`, `172.16.0.0/12`,
    `192.168.0.0/16`), il loopback `127.0.0.0/8`, il link-local `169.254.0.0/16`, e per IPv6 `::1`
    e `fc00::/7`.
5.  **Verifica al momento della connessione**: l’indirizzo IP a cui il nome è stato risolto viene
    ricontrollato a ogni connessione e a ogni redirezione. È il filtro che chiude le scappatoie più
    astute, cioè un dominio pubblico che risolve verso un indirizzo privato o una redirezione che a
    metà strada punta all’interno della rete.

*Un limite dichiarato.* Se nella tua rete esiste un server di podcast interno raggiungibile a un
indirizzo privato, quei filtri lo bloccheranno, e non c’è modo di fare un’eccezione: non esiste una
lista di indirizzi consentiti da configurare. È una scelta deliberata, perché un’eccezione
configurabile è esattamente ciò che un feed ostile cercherebbe di sfruttare. Per quei contenuti
serve un percorso diverso, per esempio scaricarli con un altro strumento e importarli come file
locali.

---

*Il capitolo 11 raccoglie i problemi più comuni e come uscirne.*
