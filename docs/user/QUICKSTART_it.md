# Runtime FeedDownloader Pro — Guida rapida

Dal primo avvio al primo archivio completo in pochi minuti. Versione 1.6.0.

---

## 1. Scegliere dove salvare

1. Aprire **Impostazioni → Download** (ingranaggio in alto a destra, oppure **Ctrl+,**).
2. Premere **Cambia cartella** e scegliere, o creare, la cartella dell’archivio. Senza una scelta
   esplicita i file finiscono in `Documenti\FeedDownloader\downloads`.
3. Per un **NAS o un disco di rete** si può indicare il percorso di rete (per esempio
   `\\NAS\Podcast\`). Il programma verifica di poterci scrivere entro otto secondi, senza mai
   bloccare la finestra.

> Il programma crea da sé una sottocartella per ogni podcast dentro la cartella di download.

---

## 2. Aggiungere il feed

1. Copiare l’**indirizzo RSS** del podcast: di solito è sul sito, dietro le etichette RSS, Feed o
   Subscribe.
2. Premere **Aggiungi feed** in fondo alla barra laterale (**Ctrl+N**) e incollare l’indirizzo nel
   campo **Indirizzo del feed**.
3. Premere **Analizza**, o `Invio`: compare l’anteprima con copertina, titolo, numero di episodi e
   intervallo coperto.
4. Volendo, accendere **Archivio automatico** per scaricare da soli gli episodi futuri.
5. Premere **Aggiungi alla libreria**: si apre la vista del feed.

> Si può anche trascinare il collegamento dal browser direttamente sulla finestra, oppure importare
> un elenco da un’altra app con **Importa da OPML**.

---

## 3. Scegliere che cosa scaricare

Il pulsante principale, sopra l’elenco degli episodi, dice sempre quanti episodi prenderà.

* **Tutto il catalogo.** Senza filtri il pulsante si chiama **Scarica i N mancanti**.
* **Un periodo.** Nella fascia dei filtri, scegliere un **Periodo** pronto (**Ultimi 30 giorni**,
  **Quest’anno**, **L’anno scorso**…) oppure le date **Dal** e **Al**: il pulsante diventa
  **Scarica i N filtrati**, e il pannello **Che cosa scaricherà** riporta lo spazio stimato.
* **Una selezione.** Spuntare le caselle degli episodi (**Maiusc** + clic per un intervallo,
  **Ctrl+A** per tutti quelli visibili) e premere **Scarica i N selezionati**.
* **Un solo episodio.** L’icona di download sulla sua riga.

Per più di un episodio la conferma riporta periodo, spazio stimato, spazio libero e cartella; **Metti
in coda** avvia i download.

---

## 4. Seguire e governare i download

La barra superiore dice sempre quanti download sono in corso; un clic apre la vista **Download**
(**Ctrl+2**).

* **La coda**, con percentuale, velocità e tempo stimato di ogni episodio.
* **Metti in pausa** e **Riprendi**: sospendono e riprendono tutta la coda dal punto raggiunto; sulla
  singola riga ci sono gli stessi comandi per un solo episodio, e la × per annullarlo.
* **Ferma e svuota la coda**: interrompe tutto e cancella i file parziali, mentre la pausa li
  conserva.
* **Non riusciti**: gli episodi falliti con il motivo; **Riprova tutti** li rimette in coda.
* **Senza rete** la coda si mette in pausa da sola e riparte al ritorno della connessione.
* **Chiudendo la finestra** il programma resta nell’area di notifica e continua a lavorare. Se si
  chiude del tutto, al riavvio la vista Download propone di riprendere i download rimasti in coda.

> **Ctrl+K** apre la palette comandi: azioni, feed e ricerca fra gli episodi del feed aperto.

---

## 5. Tenere aggiornato l’archivio

* **Controlla i feed** (barra superiore, **Ctrl+S**) cerca nuovi episodi in tutta la libreria.
* Il programma controlla i feed anche da solo, all’avvio e ogni sei ore (**Impostazioni →
  Generale**), e manda una notifica quando trova novità.
* Con l’**Archivio automatico** acceso su un feed, i nuovi episodi si scaricano senza chiedere.

---

## 6. Impostazioni utili

* **Download → Download in parallelo** (da 1 a 10), **Limite di banda (KB/s)**, condiviso da tutti i
  download, e **Dimensione massima di un file (MB)**.
* **File e metadati → Modello** dei nomi, con i segnaposto `{title}`, `{podcast}`, `{date}`,
  `{year}`, `{month}`, `{day}`, `{season}`, `{episode}` e l’esempio dal vivo.
* **File e metadati → Salva i metadati accanto ai file**: un `.json` per episodio, `podcast.json` e
  copertina per ogni podcast.
* **Archivio → Verifica l’archivio**, in modalità **Rapida** o **Completa**, con **Cerca i file
  spostati** per i file rinominati a mano.
* **Archivio → Esporta CSV** ed **Esporta in OPML**.
* **Accessibilità → Dimensione** (dall’80 al 180%) e **Riduci animazioni ed effetti**.

---

## Se qualcosa non va

**Il feed non viene riconosciuto.** L’indirizzo deve puntare al file RSS, non alla pagina web che lo
contiene: di solito finisce per `.xml` o `.rss`.

**Alcuni episodi danno «Il file non esiste più sul server (404).»** Il file è stato tolto da chi
pubblica. Il programma segnala l’errore e prosegue con gli altri: è esattamente il motivo per cui
conviene archiviare per tempo.

**La cartella di rete non risponde.** Verificare che il NAS sia acceso e raggiungibile, e che le
credenziali della condivisione siano già memorizzate nel sistema.

**Spazio disco insufficiente.** Liberare spazio e premere **Riprova tutti**: grazie al database, ciò
che è già stato scaricato non viene ripreso una seconda volta.

---

*Ogni indirizzo, prima di essere contattato, passa dai controlli anti-SSRF descritti nel manuale.*

*Runtime FeedDownloader Pro è software libero sotto licenza MIT. Scritto con Google Gemini e
Anthropic Claude, sotto la direzione progettuale di Simone Pizzi.*
