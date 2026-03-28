# Capitolo 6: Il Motore di Download

## 6.1 Architettura del Motore

Il motore di download di FeedDownloader Pro è un sistema asincrono a thread multipli. A differenza di un downloader sequenziale, il software gestisce più download contemporaneamente attraverso un sistema di coda centrale.

**Componenti principali:**

*   **La coda:** Una lista ordinata di tutti i download in attesa. Ogni episodio aggiunto al batch entra in questa coda e attende di essere assegnato a un thread disponibile.
*   **I worker thread:** I processi che eseguono fisicamente i download. Il numero di thread attivi è configurabile. Ogni thread gestisce un download alla volta, in modo indipendente dagli altri.
*   **Il database manager:** Il componente che aggiorna in tempo reale il database SQLite con lo stato di ogni download (avviato, completato, fallito, percentuale di avanzamento).
*   **Il monitor di integrità:** Il processo che, al completamento di ogni download, calcola e registra l'hash SHA-256 del file scaricato.

---

## 6.2 Download Paralleli: Configurazione

Il numero di download simultanei è uno dei parametri più rilevanti da configurare. Un valore insufficiente rallenta il processo; un valore eccessivo può saturare la connessione, sovraccaricare il server sorgente o generare errori di rete.

**Il valore predefinito è 3 thread.** Per la maggior parte degli utenti con connessione domestica, questo valore offre un buon equilibrio tra velocità e stabilità.

**Linee guida per la configurazione:**

| Scenario | Thread consigliati |
|----------|--------------------|
| Connessione lenta o server con throttling | 1 |
| Connessione domestica standard | 3 (predefinito) |
| Connessione in fibra veloce | 5 |
| NAS con connessione di rete lenta | 1 |

**Come modificare il numero di thread:**
Andare in **Impostazioni → Download → Thread Paralleli** e selezionare uno dei tre preset disponibili: **1**, **3** o **5**. La modifica viene applicata immediatamente alla coda in corso.

*Nota sui server con limiti di connessione:* Alcuni server di hosting podcast applicano limitazioni al numero di connessioni simultanee per singolo indirizzo IP. In presenza di errori frequenti `429 Too Many Requests` o `503 Service Unavailable`, ridurre il numero di thread a 1 o 2. Il meccanismo di retry gestisce automaticamente i fallimenti, ma ridurre il carico previene il problema alla radice.

---

## 6.3 Gestione degli Errori e Sistema di Retry

In un download batch di centinaia di file, gli errori di rete sono prevedibili. FeedDownloader Pro utilizza una strategia di **retry con backoff esponenziale**: quando un download fallisce, il sistema attende un intervallo crescente prima di riprovare, anziché rimettere immediatamente l'episodio in coda.

**Ciclo di retry:**

| Tentativo | Attesa prima del retry |
|-----------|------------------------|
| 1° fallimento | 2 secondi |
| 2° fallimento | 4 secondi |
| 3° fallimento | 8 secondi |
| 4° fallimento | 16 secondi |
| 5° fallimento (ultimo) | L'episodio viene marcato come **"Errore"** definitivo |

Se un server è temporaneamente sovraccarico, il sistema dà al server il tempo di recuperare prima di riprovare. La maggior parte degli errori transienti si risolve entro il secondo o il terzo tentativo.

**Errori definitivi (non soggetti a retry):**
*   `404 Not Found`: Il file non esiste sul server. Nuovi tentativi non sono utili.
*   `403 Forbidden`: Il server ha rifiutato la richiesta per mancanza di autorizzazione.
*   Errori di validazione SSRF: L'URL non ha superato i controlli di sicurezza interni.

---

## 6.4 Stall Detection

Un download bloccato è uno scenario in cui la connessione TCP è tecnicamente attiva e i pacchetti continuano ad arrivare, ma il flusso di dati si è interrotto. Il sistema operativo non segnala errori poiché la connessione è ancora aperta; il file continua a risultare "in download" senza progredire.

Questa condizione si verifica frequentemente con:
*   Server sotto carico che applicano il throttling dopo aver inviato i primi byte.
*   Problemi di routing di rete intermedi.
*   File audio di grandi dimensioni serviti da CDN con limitazioni di banda.

**Rilevamento:**
Ogni download attivo è monitorato da un processo watchdog che registra i byte ricevuti ogni 10 secondi. Se per **60 secondi consecutivi** non arrivano nuovi byte (o arrivano meno di 1 KB, soglia che esclude i keep-alive TCP), il download viene considerato bloccato e:
1.  La connessione viene interrotta.
2.  Il file `.part` parziale viene eliminato.
3.  L'episodio viene reinserito in coda con il normale ciclo di retry.

Il processo è trasparente per l'utente: nella barra di avanzamento individuale è visibile un breve reset della percentuale, seguito dalla ripresa del download. Se il blocco era causato da una condizione transitoria, il nuovo download parte normalmente. Se il problema persiste oltre i tentativi massimi, l'episodio viene marcato come **"Errore"**.

---

## 6.5 File `.part`: Il Sistema Anti-Corruzione

Ogni file audio viene scaricato con l'estensione temporanea `.part` durante il trasferimento. Il file viene rinominato con l'estensione definitiva (`.mp3`, `.m4a`, `.ogg`, ecc.) **solo** dopo che:

1.  Il trasferimento è completato al 100%.
2.  La dimensione del file corrisponde a quella dichiarata nell'intestazione HTTP (`Content-Length`), se disponibile.
3.  L'hash SHA-256 è stato calcolato e registrato nel database.

Questo meccanismo garantisce che nella cartella di destinazione non siano mai presenti file audio parziali o corrotti con estensione definitiva. In caso di interruzione improvvisa del programma o di spegnimento del computer, nella cartella si troveranno file `.part` residui: il software li eliminerà e riscaricherà alla sessione successiva.

*Posizione dei file `.part`:* Nella stessa cartella di destinazione dei file completati. Questi file non devono essere aperti con un player audio: essendo parziali, causerebbero errori di lettura.

---

## 6.6 Interruzione e Ripresa delle Sessioni

**Fermare il Batch:**
Il pulsante **"Ferma"** (nella barra di avanzamento globale) interrompe tutti i thread attivi in modo ordinato, svuota la coda ed elimina i file `.part` parziali. I file già completati rimangono nel database. Alla successiva analisi dello stesso feed, gli episodi interrotti appariranno come **"Da Scaricare"**.

**Chiusura del programma durante un download:**
Se si chiude la finestra principale (il programma continua nel system tray) oppure si utilizza **"Esci"** dal menu del tray durante un download attivo, il software mostra un avviso con il numero di download in corso e richiede conferma. Scegliendo di uscire, i download attivi vengono interrotti in modo controllato e i file `.part` vengono mantenuti.

**Riprendere una sessione interrotta:**
All'avvio, se FeedDownloader Pro rileva nel database episodi in stato **"In Coda"** o **"In Corso"** dalla sessione precedente, mostra una notifica: *"Trovati X download in sospeso dalla sessione precedente. Vuoi riprenderli?"*. Confermando, il batch riprende immediatamente.

---

## 6.7 Velocità di Download

La velocità visualizzata nella barra inferiore è la **somma aggregata** di tutti i thread attivi. Con 3 thread attivi che scaricano ciascuno a 2 MB/s, la velocità totale visualizzata è di circa 6 MB/s.

**Fattori che influenzano la velocità:**
*   **Larghezza di banda della connessione:** Il limite massimo disponibile.
*   **Velocità del server sorgente:** Molti server di hosting podcast applicano limitazioni di banda per contenere i costi. La velocità di un singolo thread raramente supera i 2–5 MB/s su questi server.
*   **Numero di thread:** Un numero maggiore di thread compensa la lentezza dei singoli server scaricando da più connessioni simultanee.
*   **Dimensione dei file:** File di dimensione media (20–80 MB, corrispondenti a episodi di 30–60 minuti) offrono l'efficienza ottimale, con un overhead relativo di connessione ridotto.

---

*Vai al Capitolo 7 per la configurazione dei percorsi NAS e di rete.*
