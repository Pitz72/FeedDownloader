# Capitolo 9: Integrità, statistiche e archiviazione

## 9.1 Perché verificare i file

Un download che arriva in fondo non è per forza un file sano. Un pacchetto perso per strada, un
errore di scrittura, un’interruzione nell’ultimo secondo: il file c’è, pesa quasi quanto dovrebbe, e
si scopre monco il giorno in cui qualcuno prova ad ascoltarlo. Per un archivio è il modo peggiore di
sbagliare, perché il danno si manifesta anni dopo.

FeedDownloader Pro lavora su due piani: controlla la **dimensione** mentre scarica e calcola
l’**impronta SHA-256** appena il file è completo.

---

## 9.2 L’impronta SHA-256

SHA-256 produce, per qualunque file, una sequenza di 64 caratteri esadecimali. Due file identici
danno la stessa impronta; cambiando un solo bit l’impronta diventa irriconoscibile. È il modo
standard per dire «questo file è esattamente quello di allora».

Per ogni download il programma calcola l’impronta e la registra in archivio insieme al nome del file
e alla data.

Serve a tre cose. Il **controllo dell’archivio** (sezione 9.4) ricalcola l’impronta dei file presenti
e la confronta con quella registrata, scoprendo corruzioni e sostituzioni avvenute dopo il download.
La **riparazione per checksum** usa la stessa impronta per riconoscere i file che qualcuno ha
rinominato a mano. E in un contesto professionale, l’impronta è la prova verificabile di cosa
contenesse quel file nel momento in cui è stato archiviato.

---

## 9.3 I metadati tecnici

A download finito il programma legge i dati tecnici **dentro il file**, non dal feed, e li registra.

| Campo | Cosa dice | Esempio |
|-------|-----------|---------|
| Bitrate | Qualità audio in kilobit al secondo | `128 kbps`, `320 kbps` |
| Frequenza di campionamento | Campioni al secondo | `44100 Hz`, `48000 Hz` |
| Dimensione su disco | Peso reale del file | `67,4 MB` |

Finiscono nel pannello di dettaglio dell’episodio e nell’inventario CSV (sezione 9.6).

---

## 9.4 Il controllo dell’archivio

Col tempo un archivio cambia alle spalle del programma: file spostati, rinominati, cancellati per
sbaglio, o rovinati da un disco che sta morendo. Il controllo confronta la realtà del disco con
quanto risulta in archivio.

Si avvia da **Impostazioni → Archivio → Health Check Archivio**, premendo **Avvia Verifica**.

Su ogni file registrato vengono fatte due verifiche: che esista ancora dove risulta, e — per quelli
presenti — che l’impronta SHA-256 ricalcolata coincida con quella di allora. I file che non
corrispondono più vengono segnalati come corrotti, con l’invito a riscaricarli.

Alla fine compaiono quattro numeri:

| Indicatore | Significato |
|------------|-------------|
| **Nel DB** | Episodi registrati in archivio |
| **Su disco** | File trovati dove risultavano |
| **Mancanti** | File non trovati |
| **Spazio occupato** | Spazio complessivo dei file presenti |

Quando qualcosa manca, il programma elenca i primi cinque casi con podcast e nome del file, e offre
due strade.

**Ripara archivio (ricerca per checksum)** cerca nelle cartelle dei podcast i file che qualcuno ha
rinominato a mano: calcola l’impronta dei candidati e, quando trova quella giusta, riaggancia il
file all’episodio con il nome nuovo. Non scarica niente e non tocca i file: aggiorna l’archivio.
Alla fine dichiara quanti ne ha riagganciati e quanti non è riuscito a ritrovare.

**Segna come non scaricati** è per i file davvero perduti: li toglie dal registro, così gli episodi
tornano **NUOVO** nella lista e si possono riscaricare normalmente.

L’ordine sensato è quello: prima si prova a riparare, poi si dichiara perduto ciò che resta.

---

## 9.5 Le statistiche

In **Impostazioni → Archivio** ci sono tre numeri di sintesi: **File Scaricati**, cioè gli episodi
registrati; **Podcast**, quanti programmi distinti compongono l’archivio; **Periodo archivio**, la
data del primo e dell’ultimo download. Si aggiornano ogni volta che apri le impostazioni.

---

## 9.6 L’inventario CSV

L’esportazione produce un file con una riga per episodio: serve per i fogli di calcolo, per i
sistemi editoriali, per gli script, o semplicemente per avere l’elenco di cosa possiedi fuori dal
programma.

Si genera da **Impostazioni → Archivio → Esporta Inventario (CSV)**, scegliendo dove salvarlo.

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

La colonna `Validation Status` dice con quale corredo di garanzie è stato registrato l’episodio, non
l’esito dell’ultimo controllo: vale `OK` quando esiste un’impronta SHA-256 registrata, `LEGACY` per
le righe più vecchie che hanno il nome del file ma non l’impronta, `UNKNOWN` quando manca anche
quello.

*Formato.* CSV separato da virgole, codifica UTF-8 con BOM per far contento Excel, campi fra
virgolette quando contengono virgole.

---

## 9.7 Spostare l’archivio

Per trasferire i file su un altro disco conviene usare la migrazione integrata, che sposta e nel
frattempo tiene allineato l’archivio.

1.  Aprire **Impostazioni → Archivio → Migra Archivio**.
2.  Scegliere la nuova cartella.
3.  Il programma sposta le cartelle dei podcast e aggiorna la destinazione predefinita.
4.  Alla fine dichiara quante cartelle ha spostato e quanti errori ha incontrato.

*Attenzione:* è uno spostamento, non una copia: i file lasciano la posizione di partenza. Meglio
verificare prima che sulla destinazione ci sia spazio.

*Trasloco su un altro computer.* Servono due cose: la cartella dei file audio e il database
`feeddownloader.sqlite` (capitolo 2). Sul computer nuovo si installa il programma, si mette il
database nella cartella dati e, se i file audio sono finiti in un percorso diverso, si usa la
migrazione per riallineare tutto.

---

*Il capitolo 10 passa in rassegna le impostazioni.*
