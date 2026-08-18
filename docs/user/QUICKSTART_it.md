# Runtime FeedDownloader Pro — Guida rapida

Dal primo avvio al primo archivio completo in pochi minuti.

---

## 1. Analizzare il feed

1. Copia l'**indirizzo RSS** del podcast: di solito è sul sito, dietro le etichette RSS, Feed o
   Subscribe.
2. Incollalo nella barra in cima all'interfaccia.
3. Premi **Analizza**, o `Invio`.
4. Compare l'elenco completo degli episodi con titolo, durata e data. Il feed entra nella barra
   laterale e resta lì per le prossime volte.

> Puoi anche trascinare il collegamento dal browser direttamente sul campo, senza copiarlo.

---

## 2. Scegliere dove salvare

1. Premi l'icona **cartella** nella barra di comando, oppure apri **Impostazioni → Download** e usa
   l'icona accanto a **Percorso Download**.
2. Scegli o crea la cartella dell'archivio.
3. Il percorso resta visibile in fondo alla barra laterale: un clic lo apre nel gestore file.
4. Se usi un **NAS o un disco di rete**, indica il percorso di rete (per esempio
   `\\NAS\Podcasts\`). Il programma verifica di poterci scrivere entro otto secondi, senza mai
   bloccare la finestra.

> Il programma crea da sé una sottocartella per ogni podcast dentro la destinazione scelta.

---

## 3. Scaricare

**Tutto il catalogo.** Premi **Scarica Tutto** nell'intestazione della lista. Il programma chiede
conferma, controlla lo spazio libero e mette in coda gli episodi mai scaricati. Occhio ai filtri
attivi: agisce su ciò che è visibile in quel momento.

**Solo alcuni episodi.** Passa il mouse su un episodio e premi l'icona di download. Per prenderne
più d'uno tieni `Ctrl` e clicca, oppure usa `Maiusc` per un intervallo, poi premi **Scarica
Selezionati (N)**.

**Solo le novità.** **Sincronizza Nuovi** rilegge il feed e mette subito in coda gli episodi appena
usciti.

> Se un server smette di rispondere per sessanta secondi, il programma chiude quel trasferimento e
> lo ritenta da dove si era fermato.

---

## 4. Seguire e governare i download

Il **pannello download** si apre da solo sulla destra.

* **Cosa mostra:** ogni episodio in coda con percentuale, velocità e tempo stimato.
* **Pausa e ripresa:** in fondo al pannello, **Pausa** sospende tutta la coda e **Riprendi** la fa
  ripartire dal punto raggiunto. Sulla singola riga ci sono gli stessi comandi per un solo episodio.
* **Annullare un download:** il pulsante × sulla riga.
* **Fermare tutto:** **Ferma download**, in fondo al pannello. Attenzione: questo cancella i file
  parziali, mentre la pausa li conserva.
* **Chiudere il pannello** con la × non ferma niente: resta il pulsante rotondo in basso a destra per
  riaprirlo.
* **Errori:** a fine lotto compare il riepilogo con i titoli e i codici. **Riprova falliti** li
  rimette in coda tutti insieme.
* **In background:** chiudendo la finestra il programma resta nell'area di notifica e continua a
  lavorare.

> **Ctrl+K** apre la palette comandi: azioni, feed e ricerca fra gli episodi del feed aperto.

---

## 5. Impostazioni utili

Dall'ingranaggio:

* **Download Paralleli**, **Limite Velocità Download** e **Dimensione Massima File** per adattare il
  motore alla tua linea e al tuo disco.
* **Template Nome File** (scheda Metadati) con token `{title}`, `{date}`, `{podcast}`, `{year}`,
  `{month}`, `{day}` e anteprima dal vivo.
* **Esporta Inventario (CSV)** per l'elenco completo con impronte SHA-256, dimensioni e bitrate.
* **Importa/Esporta Feed (OPML)** per spostare la lista dei podcast fra applicazioni.
* **Health Check Archivio** per sapere cosa manca o è stato alterato, con **Ripara archivio
  (ricerca per checksum)** che ritrova i file rinominati a mano.
* **Esporta M3U**, dall'intestazione del feed, per una playlist locale del podcast.

---

## Se qualcosa non va

**Il feed non viene riconosciuto.** Assicurati che l'indirizzo punti al file RSS, non alla pagina
web che lo contiene: di solito finisce per `.xml` o `.rss`.

**Alcuni episodi danno «File non trovato sul server».** Il file è stato tolto da chi pubblica. Il
programma segnala l'errore e prosegue con gli altri: è esattamente il motivo per cui conviene
archiviare per tempo.

**Il percorso di rete non risponde.** Verifica che il NAS sia acceso e raggiungibile, e che le
credenziali della condivisione siano già memorizzate nel sistema.

**Spazio disco insufficiente.** Libera spazio e rilancia: grazie al database, ciò che è già stato
scaricato non viene ripreso una seconda volta.

---

*Ogni indirizzo, prima di essere contattato, passa dai controlli anti-SSRF descritti nel manuale.*
