# Capitolo 7: NAS, Dischi di Rete e Percorsi SMB

## 7.1 Perché i Dischi di Rete Richiedono un Approccio Specifico

La maggior parte delle applicazioni di download desktop gestisce correttamente i percorsi locali (`C:\`, `D:\`) e presenta comportamenti imprevedibili quando la destinazione è un NAS, un server Windows condiviso o un'unità SMB. Il motivo è tecnico: i dischi di rete sono intrinsecamente meno affidabili dei dischi locali. Il NAS può essere spento, la rete locale può subire picchi di latenza, le credenziali SMB possono scadere. Qualsiasi operazione su un percorso di rete che non risponde può bloccare il thread principale dell'applicazione per decine di secondi, rendendo l'interfaccia non reattiva.

FeedDownloader Pro gestisce correttamente questi scenari. Per gli utenti che archiviano su NAS, questo capitolo è essenziale.

---

## 7.2 Come Funziona la Validazione del Percorso di Rete

Ogni volta che viene impostato un percorso di destinazione che inizia con `\\` (percorso UNC, tipico di SMB) o corrisponde a un'unità di rete mappata (es. `Z:\`), FeedDownloader Pro attiva automaticamente il **modulo di validazione del percorso di rete**.

Questo modulo esegue tre operazioni su un **thread separato**, senza mai coinvolgere il thread dell'interfaccia:

1.  **Test di raggiungibilità:** Tenta di accedere alla root del percorso di rete. Se il NAS non è acceso o la rete non è disponibile, questa operazione fallisce.
2.  **Test di accesso in lettura:** Verifica che la cartella di destinazione esista e sia leggibile.
3.  **Test di accesso in scrittura:** Crea e poi elimina un file temporaneo (`_fdp_write_test_[timestamp].tmp`) nella cartella di destinazione per verificare i permessi di scrittura.

L'intera sequenza ha un **timeout di 8 secondi**. Se entro questo intervallo non si riceve risposta, il software considera il percorso non disponibile e mostra un avviso, senza bloccare l'interfaccia.

*Motivazione del timeout:* La maggior parte dei NAS consumer (Synology, QNAP, WD MyCloud) impiega 3–6 secondi per uscire dalla modalità sospensione. 8 secondi è un intervallo sufficiente ad attendere questo ripristino, rimanendo abbastanza breve da non risultare un'attesa percettibile per l'utente.

---

## 7.3 Configurare un Percorso NAS

**Metodo 1 — Percorso UNC diretto:**
Inserire il percorso nel formato `\\NomeServer\NomeCondivisione\Cartella`:

```
\\MYNAS\Podcast\Archivio
\\192.168.1.100\media\podcast
\\NAS-SYNOLOGY\video\audio_archive
```

Il percorso può essere inserito direttamente nel campo di testo della destinazione, oppure tramite la finestra di selezione cartella, che su Windows supporta la navigazione dei percorsi di rete.

**Metodo 2 — Unità di rete mappata:**
Se il NAS è già mappato come unità di rete in Windows (es. `Z:` → `\\MYNAS\Podcast`), è possibile selezionare `Z:\Archivio` come cartella di destinazione. FeedDownloader Pro riconosce automaticamente che si tratta di un percorso di rete e attiva la validazione.

**Metodo 3 — Linux (mount point):**
Su Linux, i percorsi di rete SMB vengono presentati come cartelle normali nel filesystem dopo il montaggio (es. `/mnt/nas/podcast`). Questi percorsi possono essere usati direttamente come cartella di destinazione.

---

## 7.4 Credenziali SMB e Autenticazione

Le credenziali di accesso al NAS devono essere configurate a livello di sistema operativo, non all'interno di FeedDownloader Pro.

**Su Windows:**
1.  Aprire **Esplora file** e navigare fino al percorso del NAS (`\\MYNAS\`).
2.  Inserire le credenziali quando richieste e spuntare **"Memorizza credenziali"**.
3.  Le credenziali vengono salvate nel **Gestore Credenziali di Windows** (`Pannello di Controllo → Gestione credenziali → Credenziali Windows`).
4.  FeedDownloader Pro, come qualsiasi altra applicazione, accederà al NAS senza richiedere ulteriori credenziali.

**Su Linux:**
Montare la condivisione con le credenziali nel file `fstab` o tramite uno strumento grafico come GNOME Files. In alternativa, usare `smbclient` o `mount -t cifs` da terminale.

---

## 7.5 Diagnostica dei Problemi con i Percorsi di Rete

In caso di avviso "Percorso di rete non raggiungibile", verificare i seguenti punti nell'ordine indicato.

**1. Il NAS è acceso e avviato?**
Verificare le spie del dispositivo. Molti NAS consumer entrano in modalità sospensione dopo un periodo di inattività. Prima di avviare il download, aprire il pannello di amministrazione del NAS dal browser per verificarne la disponibilità.

**2. Il NAS è raggiungibile dalla rete?**
Dal Prompt dei comandi (Windows) o dal Terminale (Linux):
```
ping 192.168.1.100
```
Sostituire con l'indirizzo IP del NAS. Se il comando riceve risposta, la connettività di rete di base è funzionante.

**3. La condivisione SMB è accessibile?**
Tentare di aprire il percorso `\\192.168.1.100\NomeCondivisione` direttamente da Esplora file di Windows. Se l'operazione non riesce, il problema risiede nella configurazione SMB del NAS, non in FeedDownloader Pro.

**4. I permessi di scrittura sono corretti?**
Creare manualmente un file nella cartella di destinazione tramite il gestore file. Se l'operazione non è consentita, l'utente con cui si accede al NAS non dispone dei permessi di scrittura su quella condivisione. Configurare i permessi dal pannello di amministrazione del NAS.

**5. Il firewall blocca le connessioni SMB?**
Il protocollo SMB utilizza la porta 445 (e in alcuni casi la porta 139). Verificare che il firewall di sistema o di terze parti non blocchi queste porte per le connessioni sulla rete locale.

---

## 7.6 Prestazioni Ottimali su NAS

I download su NAS presentano una complessità aggiuntiva rispetto a quelli su disco locale: i file vengono scritti attraverso la rete e la velocità dipende sia dalla larghezza di banda della LAN sia dalla capacità di scrittura del NAS.

**Indicazioni operative:**

*   **Usare una connessione cablata (Ethernet):** Il Wi-Fi introduce latenza e instabilità nelle operazioni di scrittura su rete. Per archivi di grandi dimensioni, una connessione Gigabit Ethernet cablata offre prestazioni significativamente migliori.
*   **Ridurre i download paralleli:** La scrittura simultanea di molti file su un NAS può saturarne l'I/O. Con un valore di 1–3 in "Download Paralleli" si ottengono spesso risultati migliori rispetto all'utilizzo del numero massimo disponibile.
*   **Evitare sovrapposizioni con i backup del NAS:** Se il NAS esegue backup automatici, evitare di avviare download batch nelle stesse finestre temporali, poiché la competizione sull'I/O del disco rallenta entrambe le operazioni.
*   **Utilizzare una cache locale:** Per archivi molto grandi, è possibile scaricare prima su un disco locale veloce e spostare i file sul NAS al completamento del download.

---

*Vai al Capitolo 8 per la configurazione del template di rinomina e delle funzionalità di metadati.*
