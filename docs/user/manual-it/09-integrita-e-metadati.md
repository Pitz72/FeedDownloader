# Capitolo 9: Integrità, Statistiche e Archiviazione

## 9.1 Perché Verificare l'Integrità dei File

Il completamento di un download non garantisce che il file ricevuto sia integro. Un pacchetto di rete perso durante il trasferimento, un errore di scrittura su disco o un'interruzione nell'ultimo secondo possono produrre un file formalmente "presente" ma corrotto. In assenza di una verifica esplicita, un archivio apparentemente completo può contenere file audio non riproducibili, la cui corruzione viene rilevata solo durante la riproduzione.

FeedDownloader Pro affronta questo problema con due meccanismi complementari: la **verifica della dimensione** (durante il download) e la **verifica SHA-256** (al completamento).

---

## 9.2 La Verifica SHA-256

**SHA-256** (Secure Hash Algorithm 256-bit) è una funzione crittografica che produce un'impronta digitale di 64 caratteri esadecimali per qualsiasi file. Due file identici producono sempre lo stesso hash; una differenza di anche un solo bit produce un hash completamente diverso.

Per ogni file scaricato, FeedDownloader Pro:
1.  Calcola l'hash SHA-256 del file al termine del download.
2.  Salva l'hash nel database, insieme al percorso del file e alla data di calcolo.

**Utilizzi pratici:**
*   Il **Health Check** (vedi la sezione 9.4) ricalcola l'hash di ogni file presente e lo confronta con quello registrato: qualsiasi modifica, corruzione o sostituzione successiva al download viene rilevata.
*   La funzione **"Ripara archivio (ricerca per checksum)"** usa lo stesso hash per ritrovare i file rinominati a mano (vedi la sezione 9.4).
*   In contesti professionali, l'hash SHA-256 costituisce un riferimento verificabile dell'integrità del contenuto al momento del download.

---

## 9.3 I Metadati Audio Estratti

Al completamento di ogni download, FeedDownloader Pro estrae automaticamente i **metadati tecnici** del file audio. Queste informazioni vengono lette direttamente dal file (non dal feed RSS) e registrate nel database.

**Metadati estratti:**

| Campo | Descrizione | Esempio |
|-------|-------------|---------|
| **Bitrate** | Qualità audio in kilobit al secondo | `128 kbps`, `320 kbps` |
| **Sample rate** | Frequenza di campionamento | `44100 Hz`, `48000 Hz` |
| **Dimensione su disco** | Dimensione reale del file scaricato | `67.4 MB` |

Questi valori vengono registrati nel database e sono inclusi nell'esportazione CSV (vedi la sezione 9.6).

---

## 9.4 Health Check: Verifica dell'Integrità dell'Archivio

Nel tempo, un archivio può subire modifiche esterne al software: file spostati, rinominati, eliminati o corrotti direttamente dal filesystem. Il **Health Check** verifica lo stato dell'archivio rispetto a quanto registrato nel database.

**Come eseguire il Health Check:**
Andare in **Impostazioni → Archivio → Health Check Archivio** e cliccare su **"Avvia Verifica"**.

Il processo esegue due controlli su ogni file registrato nel database:

1.  **Presenza:** verifica che il file esista ancora nel percorso registrato.
2.  **Integrità reale:** per i file presenti, ricalcola l'hash SHA-256 e lo confronta con quello registrato al momento del download. Un file modificato o danneggiato viene segnalato come **corrotto** ("checksum non corrispondente"), con l'invito a riscaricare gli episodi interessati.

Al termine, viene mostrato un riepilogo con quattro indicatori:

| Indicatore | Significato |
|------------|-------------|
| **Nel DB** | Numero totale di episodi nel database |
| **Su disco** | File che esistono nel percorso registrato |
| **Mancanti** | File non trovati nel percorso registrato |
| **Spazio occupato** | Spazio disco totale dei file presenti |

In presenza di file mancanti, il software elenca i primi 5 con il nome del podcast e il nome del file, e offre due azioni:

*   **"Ripara archivio (ricerca per checksum)":** Cerca nelle cartelle dei podcast eventuali file **rinominati a mano**: ogni file candidato viene identificato tramite l'hash SHA-256 registrato e, in caso di corrispondenza, viene riagganciato al database con il nuovo nome — senza riscaricare nulla. Al termine viene mostrato il riepilogo *"N file riagganciati, M non ritrovati"*.
*   **"Segna come non scaricati":** Rimuove dal registro i file davvero mancanti, che tornano così con il tag **"NUOVO"** nella lista episodi e possono essere riscaricati con i normali controlli (pulsante **"Scarica"** o **"Scarica Tutto"**).

---

## 9.5 Statistiche dell'Archivio

La sezione statistiche è accessibile da **Impostazioni → Archivio** e fornisce una panoramica sintetica dei dati registrati nel database:

*   **File scaricati:** Numero totale di episodi presenti nel database.
*   **Podcast:** Numero di feed distinti rappresentati nell'archivio.
*   **Intervallo temporale:** Data del primo e dell'ultimo episodio scaricato.

Le statistiche vengono aggiornate automaticamente a ogni apertura del pannello Impostazioni.

---

## 9.6 Esportazione CSV

L'esportazione CSV genera un file con i dati di ogni episodio presente nel database. È utile per integrare FeedDownloader Pro con altri strumenti (fogli di calcolo, sistemi di gestione dei contenuti, script di automazione).

**Come esportare:**
Andare in **Impostazioni → Archivio → Esporta CSV** e scegliere il percorso in cui salvare il file.

**Colonne dell'esportazione:**

| Colonna | Contenuto |
|---------|-----------|
| `Podcast` | Nome del podcast |
| `Episode Title` | Titolo dell'episodio |
| `Publish Date` | Data di pubblicazione |
| `Downloaded At` | Data e ora del download |
| `File Size (bytes)` | Dimensione del file in byte |
| `Bitrate (kbps)` | Bitrate audio in kilobit al secondo |
| `Sample Rate (Hz)` | Frequenza di campionamento in hertz |
| `SHA-256 Checksum` | Hash SHA-256 del file |
| `Validation Status` | Esito dell'ultimo controllo di integrità |
| `GUID` | Identificatore univoco dell'episodio nel feed RSS |

*Formato del file:* CSV con separatore virgola (`,`), codifica UTF-8 con BOM (per compatibilità con Microsoft Excel). I campi contenenti virgole sono racchiusi tra virgolette.

---

## 9.7 Migrazione dell'Archivio

Per spostare l'archivio su un nuovo disco o una nuova cartella, utilizzare la funzione integrata di migrazione, che mantiene il database sincronizzato con la nuova posizione dei file.

**Procedura:**
1.  Andare in **Impostazioni → Archivio → Migra Archivio**.
2.  Selezionare la **nuova cartella di destinazione** tramite la finestra di selezione.
3.  Il software sposta fisicamente tutti i file audio nella nuova cartella e aggiorna i percorsi nel database.
4.  Al termine viene mostrato un riepilogo: numero di file spostati ed eventuali errori.

*Attenzione:* La migrazione sposta i file dalla cartella corrente a quella nuova. I file vengono rimossi dalla posizione originale. Verificare che il disco di destinazione disponga di spazio sufficiente prima di avviare l'operazione.

*Spostamento su un nuovo computer:* Copiare sia la cartella dei file audio sia il file `feeddownloader.sqlite` (dalla cartella dati utente descritta nel Capitolo 2). Sul nuovo computer, installare FeedDownloader Pro, copiare il database nella cartella dati utente e utilizzare la funzione di migrazione se il percorso dell'archivio è cambiato.

---

*Vai al Capitolo 10 per le impostazioni avanzate del software.*
