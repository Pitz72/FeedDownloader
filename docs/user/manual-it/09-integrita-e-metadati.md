# Capitolo 9: Integrità, verifica e archiviazione

## 9.1 Perché verificare i file

Un download che arriva in fondo non è per forza un file sano. Un pacchetto perso per strada, un
errore di scrittura, un’interruzione nell’ultimo secondo: il file c’è, pesa quasi quanto dovrebbe, e
si scopre incompleto il giorno in cui qualcuno prova ad ascoltarlo. Per un archivio è il modo
peggiore di sbagliare, perché il danno si manifesta anni dopo.

FeedDownloader Pro lavora su due piani: controlla la **dimensione** mentre scarica e calcola
l’**impronta SHA-256** appena il file è completo. Poi, nel tempo, la **verifica dell’archivio**
confronta il disco con ciò che è stato registrato.

---

## 9.2 L’impronta SHA-256

SHA-256 produce, per qualunque file, una sequenza di 64 caratteri esadecimali. Due file identici
danno la stessa impronta; cambiando un solo bit l’impronta diventa irriconoscibile. È il modo
standard per dire «questo file è esattamente quello di allora».

Per ogni download il programma calcola l’impronta e la registra nell’archivio insieme al nome del
file, alla cartella e alla data. Il calcolo avviene **dopo** l’eventuale scrittura dei tag ID3,
quindi sul file esattamente com’è sul disco.

Serve a tre cose. La **verifica completa** (sezione 9.5) ricalcola l’impronta dei file presenti e la
confronta con quella registrata, scoprendo corruzioni e modifiche avvenute dopo il download. **Cerca
i file spostati** usa la stessa impronta per riconoscere i file che qualcuno ha rinominato o spostato
a mano. E in un contesto professionale l’impronta è la prova verificabile di cosa contenesse quel
file nel momento in cui è stato archiviato.

L’impronta si legge nel dettaglio dell’episodio (**Impronta SHA-256 (registrata al download)**),
nell’inventario CSV e, se attivi, nei metadati accanto ai file.

---

## 9.3 I metadati tecnici

A download finito il programma legge i dati tecnici **dentro il file**, non dal feed, e li registra.

| Campo | Cosa dice | Esempio |
|-------|-----------|---------|
| Bitrate | Qualità audio in kilobit al secondo | `128 kbps`, `320 kbps` |
| Frequenza di campionamento | Campioni al secondo | `44,1 kHz`, `48 kHz` |
| Dimensione su disco | Peso reale del file | `67,4 MB` |

Compaiono nel dettaglio dell’episodio (**Qualità** e **Dimensione su disco**), nella vista Archivio
(colonne **Dimensione** e **Qualità**) e nell’inventario CSV.

---

## 9.4 La vista Archivio

La vista **Archivio** (**Ctrl+3**) riunisce in un’unica tabella tutti gli episodi scaricati, di
qualunque podcast, con data di pubblicazione e di download, dimensione e qualità. La sua struttura è
descritta nel capitolo 3, sezione 3.9.

Alcuni usi tipici:

* **Che cosa ho di un podcast.** Un clic sul podcast nella colonna di sinistra: la riga di riepilogo
  dice quanti episodi e quanto spazio.
* **Che cosa è uscito in un periodo.** Il **Periodo di pubblicazione**, con un intervallo pronto o le
  date **Dal** e **Al**.
* **Dove sta un file.** La ricerca accetta anche il nome del file; l’icona della cartella lo mostra
  nel gestore file, ovunque si trovi.
* **Che cosa è arrivato oggi.** L’ordine predefinito, per data di download dalla più recente.

---

## 9.5 La verifica dell’archivio

Col tempo un archivio cambia alle spalle del programma: file spostati, rinominati, cancellati per
sbaglio, ritoccati da un altro programma, o rovinati da un disco che si sta guastando. La verifica
confronta la realtà del disco con quanto risulta nell’archivio.

### Avviarla

La finestra **Verifica dell’archivio** si apre in tre modi:

* **Verifica l’archivio** nell’intestazione della vista Archivio;
* **Verifica l’archivio** in **Impostazioni → Archivio**;
* **Verifica l’archivio** nella palette comandi (**Ctrl+K**).

In alto si sceglie il **Tipo di verifica**, poi si preme **Avvia la verifica**.

### Rapida o Completa

| Tipo | Che cosa controlla | Durata |
|------|--------------------|--------|
| **Rapida** | Che ogni file esista dove risulta e abbia la dimensione registrata | Pochi secondi anche su archivi grandi |
| **Completa** | In più, ricalcola l’impronta SHA-256 di ogni file e la confronta con quella registrata | Proporzionale ai gigabyte: su archivi grandi o su NAS può richiedere ore |

La verifica rapida è adatta all’uso frequente: scopre file mancanti, troncati o sostituiti. La
completa trova anche i file danneggiati che hanno conservato la dimensione, ed è quella da usare
periodicamente su un archivio che conta. Le righe registrate dalle versioni più vecchie, prive di
impronta, vengono controllate solo nella presenza.

Durante la verifica una barra mostra l’avanzamento (*Verifica in corso…* con il numero dei file
controllati sul totale) e il pulsante **Ferma la verifica** la interrompe. Una verifica fermata
riporta i risultati dei file già esaminati (*Verifica fermata: i risultati riguardano i primi N
episodi.*). Finché è in corso, la finestra non si chiude.

Il programma ritrova ogni file nella cartella in cui era stato scaricato; se lì non c’è, lo cerca
anche nella cartella di download attuale.

### I risultati

Alla fine compaiono cinque cifre:

| Indicatore | Significato |
|------------|-------------|
| **Controllati** | Episodi esaminati |
| **Presenti** | File trovati |
| **Mancanti** | File non trovati |
| **Dimensione diversa** (rapida) oppure **Diversi dall’originale** (completa) | File presenti ma non più identici a quelli registrati |
| **Su disco** | Spazio complessivo dei file presenti |

Se non c’è niente da segnalare compare *Tutto a posto: ogni file è presente e integro.* Altrimenti
compaiono una o due sezioni, ciascuna con l’elenco dei file coinvolti (i primi cinquanta, con il
conteggio dei restanti).

### I file mancanti

Sono file spostati, rinominati o cancellati. Due azioni, da usare in quest’ordine:

1. **Cerca i file spostati.** Cerca nella cartella del podcast i file che qualcuno ha rinominato o
   spostato a mano, sia nella cartella in cui l’episodio era stato scaricato sia in quella di
   download attuale. Li riconosce dall’impronta SHA-256: per ogni episodio mancante calcola
   l’impronta dei file candidati della stessa dimensione e, quando trova quella giusta, ricollega il
   file all’episodio con il suo nome e la sua posizione nuovi. Non scarica niente e non tocca i
   file: aggiorna l’archivio. Alla fine dice quanti file ha ritrovato e quanti no (*3 file ritrovati
   e ricollegati · 1 non trovati.*) e ripete la verifica. Funziona solo per gli episodi che hanno
   un’impronta registrata.
2. **Segna i mancanti come da scaricare.** È per i file davvero perduti: dopo la conferma li toglie
   dall’archivio, così gli episodi tornano **Da scaricare** e si possono riscaricare normalmente.

### I file diversi dall’originale

Sono file presenti ma con dimensione o impronta diversa da quella registrata. Le cause sono due:

* **un danno**: un errore del disco, una copia interrotta, un file sostituito per sbaglio. In questo
  caso il file va riscaricato: si apre l’episodio e si preme **Scarica di nuovo**;
* **una modifica voluta**: tag scritti da un altro programma, un file ritagliato o normalizzato. In
  questo caso il file è buono, ed è cambiato il riferimento.

Per il secondo caso c’è **Accetta i file attuali come riferimento**: registra come nuova impronta e
nuova dimensione quelle dei file attualmente sul disco, e la verifica smette di segnalarli. Va usato
solo dopo aver controllato che i file si ascoltino correttamente.

*I file taggati dalle versioni fino alla 1.5.x.* Quelle versioni calcolavano l’impronta prima di
scrivere i tag ID3, quindi ogni MP3 taggato risulta **Diverso dall’originale** alla prima verifica
completa con la 1.6.0. È esattamente il caso di **Accetta i file attuali come riferimento**: dopo un
controllo a campione dell’ascolto, un clic rimette in ordine tutte le impronte.

### Il controllo all’avvio

Pochi secondi dopo ogni avvio, il programma controlla in background che i file archiviati esistano
ancora. Se ne mancano, manda una notifica di sistema (*N file archiviati risultano mancanti su
disco…*) che invita ad aprire la verifica. Il controllo non modifica nulla.

---

## 9.6 Le statistiche

I numeri di sintesi stanno in tre punti:

* **Impostazioni → Archivio**: *N episodi di M podcast dal [data del primo download].*;
* **la vista Archivio**: **Episodi**, **Podcast** e **Spazio occupato**, più l’intervallo delle date
  di pubblicazione;
* **la vista Libreria**: **Feed**, **Da scaricare** e **Archiviati**, e per ogni feed lo spazio
  occupato.

Si aggiornano da soli a ogni download completato.

---

## 9.7 L’inventario CSV

L’esportazione produce un file con una riga per episodio: serve per i fogli di calcolo, per i sistemi
editoriali, per gli script, o semplicemente per avere l’elenco di cosa si possiede fuori dal
programma.

Si genera con **Esporta CSV**, nell’intestazione della vista Archivio oppure in **Impostazioni →
Archivio**, scegliendo dove salvarlo (di serie `archive_report.csv`).

| Colonna | Contenuto |
|---------|-----------|
| `Podcast` | Nome del podcast |
| `Episode Title` | Titolo dell’episodio |
| `Publish Date` | Data di pubblicazione |
| `Downloaded At` | Data e ora del download |
| `File Size (bytes)` | Dimensione in byte |
| `Bitrate (kbps)` | Bitrate audio |
| `Sample Rate (Hz)` | Frequenza di campionamento |
| `SHA-256 Checksum` | Impronta del file |
| `Validation Status` | Vedi sotto |
| `GUID` | Identificatore dell’episodio nel feed |
| `Feed URL` | Indirizzo del feed |
| `File` | Nome del file |
| `Folder` | Cartella di download in cui si trova la sottocartella del podcast |

Le ultime tre colonne sono nuove nella 1.6.0 e stanno in coda, così i fogli di calcolo che leggono le
prime dieci continuano a funzionare.

La colonna `Validation Status` dice con quale corredo di garanzie è stato registrato l’episodio, non
l’esito dell’ultima verifica: vale `OK` quando esiste un’impronta SHA-256 registrata, `LEGACY` per le
righe più vecchie che hanno il nome del file ma non l’impronta, `UNKNOWN` quando manca anche quello.

*Formato.* CSV separato da virgole, codifica UTF-8 con BOM per la compatibilità con Excel, ogni campo
fra virgolette. I valori che inizierebbero con `=`, `+`, `-`, `@` sono preceduti da un apostrofo,
perché un foglio di calcolo non li esegua come formule.

---

## 9.8 Cambiare la cartella di download

Ogni episodio archiviato ricorda la cartella in cui è stato salvato. Cambiare la cartella di download
non rende quindi «mancante» l’archivio già costruito: il programma continua a ritrovare ogni file.

La cartella si cambia da **Impostazioni → Download → Cambia cartella**. Se l’archivio è vuoto, la
nuova cartella vale subito. Se contiene già degli episodi, il programma chiede *Che cosa fare
dell’archivio esistente?* e offre due strade.

### Sposta l’archivio

Sposta le sottocartelle della cartella di download attuale dentro quella nuova, aggiorna l’archivio e
usa la nuova cartella per i download futuri.

* Durante lo spostamento le Impostazioni mostrano l’avanzamento (*Spostamento in corso: 3 di 12
  cartelle*); alla fine il programma dice quante cartelle ha spostato (*Archivio spostato: 12
  cartelle.*).
* Ogni podcast ricorda dove si trova davvero: se alcune cartelle non si possono spostare, per esempio
  perché nella destinazione esiste già una cartella con lo stesso nome, restano dov’erano e il
  programma continua a trovarle (*Spostate 10 cartelle, 2 non spostate: …*). Se non se ne sposta
  nessuna, la cartella di download non cambia.
* Lo spostamento non parte mentre ci sono download in coda (*Attendi la fine dei download prima di
  spostare l’archivio.*), né quando la nuova cartella sta dentro quella attuale o la contiene.

*Attenzione:* è uno spostamento, non una copia: i file lasciano la posizione di partenza. Conviene
verificare prima che sulla destinazione ci sia spazio.

### Solo per i nuovi download

Lascia i file dove sono e usa la nuova cartella solo per i download futuri. L’archivio resta diviso
fra due (o più) cartelle, ma il programma conosce la posizione di ogni episodio: vista Archivio,
**Mostra nella cartella**, playlist M3U, verifica e ricerca dei file spostati funzionano su tutte.

È la scelta adatta quando un disco si riempie: i podcast già archiviati restano sul disco vecchio, i
nuovi episodi vanno sul nuovo.

---

## 9.9 Traslocare su un altro computer

Servono due cose: la cartella (o le cartelle) dei file audio e il database `feeddownloader.sqlite`
(capitolo 2, sezione 2.4).

1. Installare il programma sul computer nuovo e chiuderlo.
2. Copiare il database nella cartella dati, sostituendo quello creato dall’installazione.
3. Copiare i file audio. Se finiscono nello stesso percorso di prima, non serve altro.
4. Se finiscono in un percorso diverso, aprire il programma e impostare quel percorso con **Cambia
   cartella**, scegliendo **Solo per i nuovi download**. Il programma cerca ogni file prima nella
   cartella registrata e poi in quella di download attuale, quindi li ritrova, purché ciascun
   podcast mantenga la propria sottocartella. Una verifica rapida lo conferma; per i file che nel
   frattempo hanno cambiato nome c’è **Cerca i file spostati**.

---

*Il capitolo 10 passa in rassegna le impostazioni.*
