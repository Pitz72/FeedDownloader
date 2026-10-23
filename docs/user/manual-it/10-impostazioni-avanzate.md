# Capitolo 10: Le impostazioni

## 10.1 Come sono organizzate

Il pannello si apre in qualsiasi momento con l’ingranaggio in alto a destra, con **Ctrl+,** o dalla
palette comandi, anche mentre un download è in corso. Le voci sono divise in sei schede verticali,
nell’ordine: **Generale**, **Download**, **File e metadati**, **Archivio**, **Accessibilità**,
**Informazioni**.

Ogni modifica viene salvata subito: gli interruttori e i menu al momento della scelta, i campi
numerici e il modello dei nomi quando si esce dal campo. Il pulsante **Fatto** chiude il pannello.

Questo capitolo segue le schede una per una. Il modello dei nomi, i metadati accanto ai file e i tag
ID3 sono trattati nel capitolo 8; la verifica dell’archivio, l’inventario CSV e il cambio di cartella
nel capitolo 9.

---

## 10.2 Generale

### Lingua dell’interfaccia

L’interfaccia parla **Italiano** ed **English**. La scelta vale anche per le notifiche di sistema e
cambia tutto all’istante, senza riavviare. La stessa scelta è disponibile nella schermata d’ingresso.

### Controllo automatico dei feed

Stabilisce ogni quanto il programma cerca nuovi episodi in tutti i feed, anche con la finestra chiusa
nell’area di notifica. Un controllo avviene comunque all’avvio e al ritorno della connessione dopo
un’interruzione.

| **Intervallo** | Comportamento |
|----------------|---------------|
| **Mai (solo a mano)** | Nessun controllo ciclico; restano quello all’avvio e **Controlla i feed**. |
| **Ogni 6 ore** (predefinito) | Rilettura di tutti i feed ogni sei ore. |
| **Ogni 12 ore** | Rilettura ogni dodici ore. |
| **Ogni 24 ore** | Rilettura una volta al giorno. |

La modifica vale subito. Quando un controllo trova episodi nuovi, i feed con l’archivio automatico li
scaricano subito; per gli altri arriva una notifica di sistema cliccabile (capitolo 5, sezione 5.9).

---

## 10.3 Download

### Cartella di download

Mostra il percorso attuale; di serie `Documenti\FeedDownloader\downloads`. Ogni podcast ha la sua
sottocartella, e va bene anche un disco esterno o una cartella di rete (NAS, SMB).

**Cambia cartella** apre il selettore di sistema, verifica che la cartella sia scrivibile (con un
limite di otto secondi per i percorsi di rete, capitolo 7) e, se l’archivio contiene già degli
episodi, chiede se **Sposta l’archivio** o usare la nuova cartella **Solo per i nuovi download**
(capitolo 9, sezione 9.8). Durante uno spostamento il pulsante resta spento e sotto il percorso
compare l’avanzamento.

### Trasferimento

Una riga ricorda il comportamento fisso del motore: ogni download riprova da solo fino a cinque volte
sugli errori passeggeri e riprende i file parziali dal punto in cui si erano fermati. I parametri
interni (timeout di connessione, numero di tentativi, sorveglianza degli stalli) non sono
modificabili.

* **Download in parallelo**: quanti trasferimenti insieme, da **1** a **10**. Il predefinito è 3.
  Per orientarsi nella scelta, si veda il capitolo 6, sezione 6.2.
* **Limite di banda (KB/s)**: il tetto complessivo, condiviso da tutti i download insieme. Sotto il
  campo un promemoria lo ripete (*Totale per tutti i download insieme: 500 KB/s.*). `0` significa
  nessun limite ed è il predefinito.
* **Dimensione massima di un file (MB)**: i file più grandi vengono saltati, con un errore
  definitivo. `0` significa nessun limite ed è il predefinito.

I dettagli di limite e dimensione massima sono nel capitolo 6, sezione 6.9.

---

## 10.4 File e metadati

* **Nomi dei file**: il campo **Modello**, i pulsanti dei **Segnaposto disponibili** e l’**Esempio**
  del risultato. Il modello vale per i download futuri; i file già presenti non vengono rinominati
  (capitolo 8, sezioni 8.2–8.7).
* **Metadati**: gli interruttori **Salva i metadati accanto ai file** (capitolo 8, sezione 8.9) e
  **Scrivi i tag ID3 negli MP3** (capitolo 8, sezione 8.10), entrambi spenti di serie.

---

## 10.5 Archivio

### Archivio

Il riepilogo (*N episodi di M podcast dal …*) e due comandi: **Verifica l’archivio**, che chiude le
impostazioni e apre la verifica (capitolo 9, sezione 9.5), ed **Esporta CSV** (capitolo 9, sezione
9.7). Con l’archivio vuoto entrambi restano spenti.

### Elenco dei feed (OPML)

**Importa da OPML** ed **Esporta in OPML**, per portare i feed da o verso un’altra applicazione di
podcast. L’importazione non modifica i feed già presenti (capitolo 5, sezioni 5.5 e 5.6).

### File temporanei

**Pulisci i file temporanei** elimina i `.part` e i `.part.meta` rimasti da download interrotti che
non verranno ripresi, in tutte le cartelle usate dall’archivio. Non funziona mentre ci sono download
in coda, perché quei file potrebbero essere in uso: il pulsante resta spento (*Attendi che la coda
sia vuota.*). Alla fine riporta quanti file ha rimosso.

### Azzera la cronologia

**Azzera la cronologia dei download** svuota l’archivio e la cronologia dei download, cioè la memoria
di cosa è già stato preso: ogni episodio torna **Da scaricare**. Il programma chiede conferma
(*Azzerare la cronologia?*) e l’operazione non si può annullare. I file audio sul disco **restano
dove sono**, ma il programma non li riconosce più come scaricati: un nuovo download di quegli episodi
creerebbe copie con il suffisso `_2`.

Ha senso in un caso solo: quando si vuole ripartire con un archivio pulito, per esempio al termine di
una serie di prove. Il comando resta spento mentre ci sono download in coda. Prima di usarlo conviene
copiare `feeddownloader.sqlite` in un posto sicuro.

---

## 10.6 Accessibilità

### Dimensione dell’interfaccia

Ingrandisce testi e controlli. Il menu **Dimensione** offre 80, 90, 100, 110, 125, 140, 160 e 180%.
Gli stessi gradini si percorrono da tastiera con **Ctrl +** e **Ctrl −**; **Ctrl 0** torna al 100%.
La scelta viene ricordata.

Con l’interfaccia ingrandita lo spazio disponibile si riduce, e l’impaginazione passa prima alle
varianti per finestre strette (capitolo 3, sezione 3.14).

### Movimento

L’interruttore **Riduci animazioni ed effetti** toglie transizioni e animazioni, compresa quella della
schermata d’ingresso. Chi ha già chiesto movimento ridotto al sistema operativo trova comunque le
animazioni ridotte, anche con l’interruttore spento.

Il programma rispetta inoltre la modalità a contrasto elevato di Windows. I colori dell’interfaccia
rispettano i contrasti WCAG 2.2 AA, il testo non scende mai sotto i 12 pixel e il focus della
tastiera è sempre visibile.

---

## 10.7 Informazioni

### Aggiornamenti

Riporta la **Versione installata** e lo stato degli aggiornamenti. Il sistema di aggiornamento
funziona **col consenso**: niente si scarica e niente si installa da sé.

All’avvio, nella versione installata, il programma interroga la pagina delle release del progetto.
Se trova una versione nuova compaiono l’avviso **Disponibile la versione X.Y.Z** nella barra superiore
e una notifica di sistema, ma il pacchetto **non viene scaricato**. Il pulsante cambia con lo stato:

* **Cerca aggiornamenti** forza la verifica; durante la ricerca compare *Ricerca aggiornamenti…*, poi
  *È installata l’ultima versione.* oppure la versione disponibile;
* **Scarica** avvia lo scaricamento, con *Scaricamento aggiornamento N%*;
* **Riavvia e installa**, a pacchetto pronto, chiude il programma, applica l’aggiornamento e lo
  riapre. Nemmeno l’installazione scatta da sola, e non avviene alla chiusura del programma.

Se il controllo fallisce compare *Non è stato possibile controllare gli aggiornamenti.*

Accanto, **Novità** riapre le note di rilascio della versione installata.

### Documentazione

**Guida** apre la documentazione integrata; **Manuale completo (PDF)** apre nel browser questo
manuale, nella lingua dell’interfaccia.

### Il progetto

La licenza, l’autore e i collegamenti **Contatti**, **Codice sorgente** e **Sostieni il progetto**,
che si aprono nel browser.

---

## 10.8 Come vengono filtrati gli indirizzi (informativo)

Questa sezione spiega qualcosa che il programma fa da solo e che non è configurabile.

Un feed è contenuto che arriva dall’esterno, e gli indirizzi che contiene potrebbero puntare a
risorse della rete locale invece che a un file audio pubblico: il pannello del router, un NAS, un
servizio interno. È la famiglia di attacchi chiamata SSRF. Un archiviatore che segue ciecamente gli
indirizzi di un feed diventerebbe lo strumento con cui raggiungere la rete di chi lo usa.

Ogni indirizzo, del feed, delle sue pagine, dei file audio e delle copertine, passa quindi cinque
filtri:

1. **Sintassi**: deve essere un indirizzo valido.
2. **Protocollo**: solo `http://` e `https://`. Schemi come `file://`, `ftp://`, `data:` o
   `javascript:` vengono respinti subito.
3. **Nomi interni**: `localhost` e i nomi di loopback vengono rifiutati.
4. **Indirizzi privati e riservati**: le reti RFC 1918 (`10.0.0.0/8`, `172.16.0.0/12`,
   `192.168.0.0/16`), il loopback `127.0.0.0/8`, il link-local `169.254.0.0/16`, lo spazio CGNAT, e
   per IPv6 `::1`, `fc00::/7` e gli indirizzi IPv4 incapsulati.
5. **Verifica al momento della connessione**: l’indirizzo IP a cui il nome è stato risolto viene
   ricontrollato a ogni connessione e a ogni redirezione. È il filtro che chiude le scappatoie più
   astute, cioè un dominio pubblico che risolve verso un indirizzo privato o una redirezione che a
   metà strada punta all’interno della rete.

Quando un filtro interviene, il messaggio è *Gli indirizzi della rete locale non sono ammessi.* per
un feed, *L’indirizzo porta alla rete locale: bloccato per sicurezza.* per un download.

*Un limite dichiarato.* Se nella rete esiste un server di podcast interno raggiungibile a un indirizzo
privato, quei filtri lo bloccheranno, e non c’è modo di fare un’eccezione: non esiste una lista di
indirizzi consentiti da configurare. È una scelta deliberata, perché un’eccezione configurabile è
esattamente ciò che un feed ostile cercherebbe di sfruttare. Per quei contenuti serve un percorso
diverso, per esempio scaricarli con un altro strumento.

---

*Il capitolo 11 raccoglie i problemi più comuni e come risolverli.*
