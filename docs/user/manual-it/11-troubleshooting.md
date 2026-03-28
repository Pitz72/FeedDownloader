# Capitolo 11: Risoluzione dei Problemi

## 11.1 Come Utilizzare Questo Capitolo

Questo capitolo raccoglie i problemi più comuni segnalati dagli utenti, con le cause più probabili e le soluzioni passo-passo. Ogni problema è descritto nel modo in cui si manifesta nell'interfaccia, non in termini tecnici interni.

Se il problema non è presente in questo elenco, consultare i file di log nella cartella `logs/` (vedi il Capitolo 10) e contattare il supporto allegando il log della sessione in cui si è verificato il problema.

---

## Problemi di Feed e Analisi

---

### Problema: "Errore di connessione" o "Timeout" durante l'analisi del feed

**Come si manifesta:** Si clicca su **"Analizza"** e dopo alcuni secondi appare un messaggio di errore che indica un timeout o un fallimento della connessione. La lista rimane vuota.

**Cause probabili e soluzioni:**

*   **Il server del feed non è disponibile.** Aprire l'URL del feed nel browser. Se il browser restituisce un errore (pagina non trovata, "Questo sito non è raggiungibile"), il problema riguarda il server del podcast: non è possibile intervenire se non riprovando in un secondo momento.
*   **La connessione internet non è disponibile o è instabile.** Verificare che altri siti web siano raggiungibili. Se la connessione è instabile, attendere che si stabilizzi prima di riprovare.
*   **Un firewall o proxy aziendale blocca la richiesta.** In ambienti aziendali, il traffico verso certi host può essere bloccato. Provare dalla rete domestica per verificare se il problema è specifico della rete aziendale.

---

### Problema: Il feed viene analizzato ma la lista degli episodi è vuota

**Come si manifesta:** L'analisi si completa senza errori, ma la lista degli episodi non mostra alcun elemento (o mostra 0 episodi).

**Cause probabili e soluzioni:**

*   **Il feed non contiene episodi.** Aprire l'URL nel browser e verificare che il documento XML contenga tag `<item>` o `<entry>`. Se non sono presenti, il podcast non ha ancora pubblicato episodi.
*   **Il feed usa un formato non standard.** FeedDownloader Pro supporta RSS 2.0 e Atom 1.0. Alcuni feed prodotti da piattaforme proprietarie possono avere una struttura non convenzionale. In questo caso, il software mostra un avviso specifico nel messaggio di analisi.
*   **Tutti gli episodi sono già nel database.** Se il feed è stato analizzato in precedenza, gli episodi appaiono con stato **"Scaricato"** (verde tenue). Scorrere la lista e verificare la presenza di questo indicatore di stato.

---

### Problema: Il feed mostra solo gli ultimi N episodi e non l'intero catalogo storico

**Come si manifesta:** Si analizza un podcast con centinaia di episodi noti, ma la lista ne mostra solo 50 o 100.

**Causa:** Questo limite è imposto dall'editore del podcast o dalla sua piattaforma di hosting, non da FeedDownloader Pro. Molte piattaforme limitano il feed RSS agli ultimi 50–100 episodi per ridurre il carico sui propri server. Il software scarica esattamente i dati che il feed rende disponibili.

**Possibili alternative:**
*   Verificare se il podcast offre un "feed completo" come URL alternativo (alcune piattaforme lo mettono a disposizione).
*   Consultare il sito web del podcast o la piattaforma di distribuzione (Spotify, Apple Podcasts) per recuperare i link degli episodi meno recenti.
*   Alcune piattaforme accettano parametri nell'URL per richiedere il feed completo (es. `?limit=0` o `?paged=all`): verificare la documentazione della piattaforma specifica.

---

## Problemi di Download

---

### Problema: Molti episodi risultano in stato "Errore 404"

**Come si manifesta:** Dopo un download batch, numerosi episodi mostrano stato **"Errore"** con il messaggio `404 Not Found`.

**Causa:** Gli episodi sono ancora presenti nel feed RSS (nel documento XML), ma i file audio a cui puntano sono stati rimossi dal server. Questa situazione è frequente con podcast abbandonati o migrati su altre piattaforme.

**Cosa è possibile fare:**
*   Non è possibile scaricare file che non esistono più sul server.
*   Se si tratta di un podcast attivo e gli errori sembrano eccessivi, contattare l'editore del podcast: potrebbe trattarsi di una migrazione temporanea o di un problema tecnico risolvibile.
*   Gli episodi con errore 404 vengono esclusi automaticamente dai batch successivi. Non è necessario rimuoverli dalla lista.

---

### Problema: I download si avviano ma procedono molto lentamente

**Come si manifesta:** La barra di avanzamento si muove, ma la velocità è molto bassa (pochi KB/s) rispetto alla banda disponibile.

**Cause probabili e soluzioni:**

*   **Il server del podcast applica limitazioni di banda.** Molti server di hosting impongono un throttling per contenere i costi. Ridurre i thread a 1 può migliorare la situazione con i server che penalizzano le connessioni multiple.
*   **La connessione Wi-Fi è instabile.** Per download batch intensivi, utilizzare una connessione cablata (Ethernet).
*   **Il disco di destinazione è lento.** La scrittura su NAS con connessione Wi-Fi o su dispositivi USB 2.0 può rappresentare il collo di bottiglia. Considerare di scaricare prima su un disco locale veloce.
*   **La connessione internet è effettivamente limitata.** Verificare la velocità di download effettiva con uno speed test. Se il risultato è inferiore alle aspettative, il problema riguarda la connessione.

---

### Problema: Un episodio rimane bloccato a una percentuale elevata e non completa mai

**Come si manifesta:** Un singolo download mostra una percentuale alta (90%, 95%, 99%) che non raggiunge il 100% e non si aggiorna.

**Causa:** Il server ha inviato quasi tutto il file ma ha interrotto il trasferimento prima del completamento. La stall detection rileverà questa condizione entro 60 secondi dall'ultimo dato ricevuto e riavvierà il download automaticamente.

**Se il problema persiste dopo più tentativi:** Il file sul server potrebbe essere corrotto o troncato. Dopo il numero massimo di tentativi, l'episodio verrà marcato come **"Errore"** con un messaggio che indica una discrepanza tra la dimensione dichiarata e quella ricevuta.

---

### Problema: Il software ha scaricato un file `.mp3` ma il player audio segnala che è corrotto

**Come si manifesta:** Il download risulta completato (stato verde), ma all'apertura del file con un player audio viene restituito un errore o il file non viene riprodotto.

**Causa:** Questo non dovrebbe verificarsi grazie al meccanismo dei file `.part` e alla verifica della dimensione. Se accade, il file originale sul server potrebbe essere già corrotto (problema dell'editore), oppure si è verificato un errore di scrittura su disco.

**Soluzione:**
1.  Cliccare con il tasto destro sull'episodio nella lista → **"Forza Re-Download"**.
2.  Se il file riscaricato è ancora corrotto, il problema riguarda il file sorgente sul server del podcast. Verificarlo aprendo direttamente l'URL del file nel browser.
3.  Eseguire un Health Check (vedi il Capitolo 9) per verificare se altri file nell'archivio presentano problemi.

---

## Problemi di NAS e Rete

---

### Problema: "Percorso di rete non raggiungibile" anche se il NAS è acceso

**Come si manifesta:** Il software mostra l'avviso di percorso non raggiungibile, ma il NAS è accessibile normalmente dal gestore file.

**Soluzioni da verificare nell'ordine:**

1.  **Verificare che il percorso sia esatto.** Una differenza di maiuscole/minuscole (`\\MYNAS\podcast` vs `\\MYNAS\Podcast`) può causare un errore su alcuni sistemi.
2.  **Le credenziali SMB sono memorizzate?** Aprire Esplora file e tentare di accedere manualmente a `\\MYNAS\NomeCondivisione`. Se viene richiesta la password, le credenziali non sono salvate nel Gestore Credenziali di Windows. Inserirle e spuntare **"Memorizza"**.
3.  **Il firewall di Windows blocca FeedDownloader Pro?** Andare in `Pannello di Controllo → Windows Defender Firewall → App consentite` e verificare che FeedDownloader Pro sia elencato con accesso consentito.
4.  **Il NAS supporta SMBv2/3?** Alcuni NAS datati supportano solo SMBv1, disabilitato per impostazione predefinita su Windows 11. Aggiornare il firmware del NAS oppure abilitare SMBv1 dal pannello di amministrazione del NAS.

---

### Problema: I download su NAS si interrompono dopo alcuni minuti

**Come si manifesta:** Il batch si avvia normalmente, scarica alcuni episodi, poi si blocca con errori di scrittura o di percorso non raggiungibile.

**Causa:** Il NAS entra in modalità sospensione durante il download. Alcuni NAS consumer hanno una funzione di risparmio energetico che può attivarsi anche durante trasferimenti attivi se il dispositivo è configurato per monitorare solo il traffico web, ignorando le connessioni SMB.

**Soluzioni:**
*   Disabilitare temporaneamente la modalità sospensione dal pannello di amministrazione del NAS durante i download batch.
*   Ridurre il numero di thread a 1: un flusso di scrittura continuo previene l'attivazione della sospensione in modo più efficace rispetto a burst intensi con pause intermedie.

---

## Problemi Generali

---

### Problema: L'interfaccia risponde con ritardo

**Come si manifesta:** I clic richiedono 1–2 secondi per avere risposta, lo scorrimento della lista è discontinuo, il programma appare lento.

**Cause probabili:**

*   **Database di grandi dimensioni.** Con decine di migliaia di episodi nel database, alcune operazioni possono rallentare. Valutare l'utilizzo di **Reset Database** (**Impostazioni → Avanzate**) solo se l'archivio contiene molti episodi in errore o dati che non si intende recuperare.
*   **Numero elevato di thread su hardware con poca RAM.** Con 5 thread attivi su un sistema con meno di 4 GB di RAM, il processo può risultare lento. Ridurre i thread a 1 o 3.
*   **Antivirus che analizza i file `.part` in tempo reale.** Alcuni software di sicurezza intercettano ogni operazione di scrittura su disco, rallentando i download. Aggiungere la cartella di destinazione alle esclusioni dell'antivirus.

---

### Problema: Il software non si avvia o si chiude immediatamente all'apertura

**Come si manifesta:** Si avvia il programma, il processo appare brevemente nel Task Manager ma poi scompare senza che l'interfaccia venga visualizzata.

**Soluzioni:**

1.  **Controllare i log.** Accedere alla cartella `%APPDATA%\FeedDownloaderPro\logs\` (Windows) o `~/.config/FeedDownloaderPro/logs/` (Linux). Aprire il file di log più recente con un editor di testo: l'ultima riga dovrebbe indicare la causa del problema.
2.  **Database corrotto.** Se il log indica un errore SQLite all'avvio, il file `feeddownloader.db` potrebbe essere corrotto. Sostituirlo con un backup (vedi il Capitolo 9). Se non si dispone di un backup, rinominarlo in `feeddownloader.db.bak`: il software creerà un nuovo database vuoto all'avvio successivo (con perdita della cronologia).
3.  **Reinstallare il software.** Disinstallare FeedDownloader Pro e installare la versione più recente. Il database e le impostazioni non vengono eliminati dalla disinstallazione.

---

### Problema: Ho perso i dati del database — è possibile recuperarli?

**Come si manifesta:** Il database è stato eliminato accidentalmente, è corrotto, oppure è stato eseguito un reset senza un backup preventivo.

**Possibilità di recupero:**

*   **Con un backup disponibile:** Copiare il file `feeddownloader.db` di backup nella cartella dati utente dell'applicazione, a programma chiuso (vedi il Capitolo 2 per il percorso della cartella dati utente).
*   **Senza backup:** I file audio sul disco sono ancora presenti: solo la memoria del software è andata persa. È possibile ricostruire parzialmente l'archivio analizzando nuovamente i feed: gli episodi i cui file sono già presenti sul disco verranno riconosciuti dal sistema e non riscaricati.
*   **Prevenzione:** Eseguire periodicamente una copia manuale del file `feeddownloader.db` in una posizione sicura, oppure esportare la lista dei feed in formato OPML (vedi il Capitolo 5) come backup della configurazione. È consigliabile eseguire questo backup prima di ogni migrazione o aggiornamento del software.

---

*Questo è l'ultimo capitolo del Manuale d'Uso Avanzato di Runtime FeedDownloader Pro.*

*Per assistenza non coperta da questo manuale, fare riferimento alla pagina ufficiale delle release o contattare il supporto tecnico di Ecosystem Runtime | Digital Core.*

---

*Ecosystem Runtime | Digital Core — Strumenti costruiti per durare.*
