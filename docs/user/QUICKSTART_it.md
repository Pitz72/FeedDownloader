# ⚡ Runtime FeedDownloader Pro: Guida Rapida

Benvenuto in **Runtime FeedDownloader Pro**. Questa guida ti porterà dal primo avvio al tuo primo archivio podcast completo in meno di 3 minuti.

---

## 1. Analisi del Feed

Prima di tutto, devi indicare al software quale podcast vuoi archiviare:

1. Copia l'**URL RSS** del podcast che vuoi scaricare (di solito lo trovi sul sito del podcast con etichette tipo "RSS", "Feed" o "Subscribe").
2. Incollalo nella **barra di ricerca principale** in cima all'interfaccia.
3. Clicca sul pulsante **"Analizza"** (o premi `Invio`).
4. Il software interrogherà il feed e mostrerà l'elenco completo degli episodi disponibili, con titolo, durata e data di pubblicazione. Il feed viene aggiunto automaticamente alla barra laterale sinistra per gli accessi futuri.

> **Tip:** Puoi trascinare l'URL direttamente sulla finestra dell'applicazione (Drag & Drop) senza usare la barra di ricerca.

---

## 2. Scelta della Destinazione

Prima di avviare il download, scegli dove salvare i tuoi file:

1. Vai in **Impostazioni → Archivio** e clicca sull'icona della **cartella** accanto al campo del percorso di destinazione.
2. Seleziona (o crea) la cartella dove vuoi che l'archivio venga organizzato.
3. Il percorso impostato è sempre visibile nel footer della barra laterale sinistra: cliccarlo apre la cartella direttamente nel file manager.
4. Se stai usando un **NAS o un disco di rete (SMB)**, inserisci il percorso di rete (es. `\\NAS\Podcasts\`). Il software verificherà automaticamente l'accesso in scrittura entro 8 secondi, senza bloccare l'interfaccia.

> **Tip:** Crea una cartella dedicata per ogni podcast (es. `D:\Archivio\NomePodcast\`). FeedDownloader Pro salverà i file in modo organizzato e ricorderà la posizione nel suo database.

---

## 3. Avvio del Download

Hai il feed analizzato e la cartella pronta. Ora puoi scaricare:

**Opzione A — Scarica l'intero catalogo:**

1. Clicca il pulsante principale **"Scarica Tutto"** nell'intestazione della lista episodi.
2. L'intera lista di episodi verrà aggiunta alla coda di download.
3. Il software inizierà a scaricare i file in parallelo (il numero di thread è configurabile nelle Impostazioni → Archivio).

**Opzione B — Download selettivo:**

1. Nella lista degli episodi, individua quello che ti interessa.
2. Clicca l'icona di **download** (freccia verso il basso) che appare accanto all'episodio al passaggio del mouse.
3. Per selezionare più episodi, tieni premuto `Ctrl` e clicca su ciascuno (oppure usa `Shift`+clic per selezionare un intervallo), poi clicca **"Scarica Selezionati (N)"**.

> **Tip:** Il sistema **Stall Detection** monitora ogni download: se un server smette di rispondere per 60 secondi, il download viene riavviato automaticamente.

---

## 4. Monitoraggio del Download

Quando avvii un batch, il **Pannello Download** si apre automaticamente sul lato destro della finestra.

* **Cosa mostra:** ogni episodio in coda con percentuale di avanzamento, velocità corrente (KB/s o MB/s) e tempo stimato al completamento.
* **Cancellare un singolo download:** passa il mouse sull'episodio nel pannello e clicca il pulsante **×** che appare.
* **Fermare tutto:** clicca il pulsante **Stop** nell'intestazione del pannello.
* **Chiudere il pannello senza fermare i download:** clicca il pulsante **×** in alto a destra del pannello. Un **pulsante flottante** rimane visibile in basso a destra: cliccarlo riapre il pannello in qualsiasi momento.
* **Log errori:** al termine del batch, se alcuni episodi non sono stati scaricati, il pannello mostra un riepilogo espandibile con i titoli e i codici di errore.
* **Esecuzione in background:** puoi chiudere la finestra principale cliccando sulla X: il software continua a lavorare nell'area di notifica di sistema (system tray) e i download proseguono senza interruzioni.

> **Tip:** Premi **Ctrl+K** in qualsiasi momento per aprire la Palette Comandi: da lì puoi avviare "Sincronizza tutti i feed", aprire le Impostazioni o passare a un altro podcast senza usare il mouse.

---

## 5. Esportazione e Statistiche

Una volta completato il download, accedi alle **Impostazioni** (icona ingranaggio ⚙️) per le funzioni avanzate:

* **Esporta CSV:** Genera un file spreadsheet con l'elenco completo degli episodi scaricati (titolo, URL, percorso file, hash SHA-256, dimensione, bitrate).
* **Importa/Esporta OPML:** Condividi la tua lista di feed con altre app o con un'altra installazione del software.
* **Statistiche Archivio:** Visualizza lo spazio disco occupato, il numero totale di episodi e i podcast distinti nell'archivio.
* **Template Rinomina:** Personalizza il formato del nome file usando token come `{{title}}`, `{{date}}`, `{{podcast}}` per un archivio perfettamente organizzato.
* **Esporta M3U:** Dal pulsante "Esporta M3U" nell'intestazione della lista episodi, genera una playlist con i percorsi locali di tutti gli episodi scaricati di un podcast.

---

## Consigli Utili & Troubleshooting

**Il feed non viene riconosciuto:**
Verifica che l'URL sia direttamente l'indirizzo del file RSS (di solito termina in `.xml` o `.rss`). Alcuni siti mostrano una pagina HTML con un link al feed vero: usa quel link.

**Alcuni episodi non si scaricano (errore 404):**
L'episodio è stato rimosso dal server del podcast. FeedDownloader Pro registrerà l'errore nel Pannello Download senza bloccare gli altri download. Questa è una delle ragioni per cui l'archiviazione tempestiva è fondamentale.

**Percorso NAS non raggiungibile:**
Verifica che il NAS sia acceso e raggiungibile nella rete locale prima di avviare il download. Se usi credenziali SMB, assicurati che la condivisione sia montata (o che le credenziali siano configurate in Windows).

**Il software ha fermato il download per "spazio disco insufficiente":**
Libera spazio nella destinazione e riavvia il batch. I file già scaricati non verranno riscaricati grazie al database.

---

*Sicurezza Garantita: Ogni URL viene filtrato dal sistema anti-SSRF a 5 livelli prima di essere elaborato.*

*Parte dell'Ecosystem Runtime | Digital Core — Strumenti costruiti per durare.*
