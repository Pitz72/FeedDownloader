# Runtime FeedDownloader Pro

**Archiviare podcast in blocco, con verifica d’integrità, anche su NAS.** Versione 1.6.0.

## Cos’è

Runtime FeedDownloader Pro è lo strumento dell’**Ecosystem Runtime | Digital Core** per chi deve
scaricare e conservare interi cataloghi di podcast: archivisti, redazioni, stazioni radio,
ascoltatori metodici. Non è un lettore né un aggregatore: è un archiviatore, pensato per il download
in blocco, la resilienza di rete e l’organizzazione prevedibile dei file sul disco.

---

## La filosofia «database-first»

Al centro del programma c’è un database **SQLite** che ricorda ogni episodio scaricato, invece di
affidarsi solo alla presenza dei file sul disco:

1. **Ricorda ogni download e dove si trova.** Ogni episodio conosce la propria cartella: cambiare
   cartella o spostare l’archivio su un NAS non fa perdere nulla.
2. **Evita i duplicati.** Lo stesso episodio non viene mai scaricato due volte.
3. **Documenta l’integrità.** Per ogni file registra impronta SHA-256, dimensione, bitrate e
   frequenza di campionamento.

## Le funzioni principali

### Un’interfaccia da scrivania

Finestra orizzontale con pannelli affiancati: la barra laterale porta alle viste **Libreria**,
**Download** e **Archivio** e ai feed; ogni pannello scorre per conto proprio. Palette comandi
(**Ctrl+K**), scorciatoie per tutto (**Ctrl+1/2/3** per le tre viste), dimensione dell’interfaccia
dall’80 al 180% e **Riduci animazioni ed effetti**.

### Scaricare tutto, un periodo o una selezione

Nella vista di ogni feed la fascia dei filtri ha sempre il **Periodo**, con intervalli pronti e date
**Dal**/**Al**. Il pulsante principale dice esattamente che cosa farà («Scarica i 23 filtrati») e la
conferma mostra spazio stimato, spazio libero e cartella.

### Resilienza di rete

* **Cinque tentativi** per file, con attesa crescente.
* **Rilevamento degli stalli**: un trasferimento fermo da sessanta secondi viene chiuso e ripreso.
* **File `.part` con ripresa** dal punto raggiunto, verificata contro le modifiche del file remoto.
* **Pausa automatica senza rete** e **coda che sopravvive alla chiusura** del programma.
* Da **1 a 10 download in parallelo** e un **limite di banda condiviso**.

### Archivio sempre aggiornato

**Controlla i feed** su richiesta (**Ctrl+S**) e controlli automatici ogni 6, 12 o 24 ore, anche a
finestra chiusa, con notifica dei nuovi episodi. Con l’**Archivio automatico** acceso su un feed, i
nuovi episodi si scaricano da soli.

### Integrità e verifica

**Verifica dell’archivio** **Rapida** (presenza e dimensione) o **Completa** (ricalcolo delle
impronte), con avanzamento e possibilità di fermarla. **Cerca i file spostati** ritrova per impronta
i file rinominati a mano; **Accetta i file attuali come riferimento** registra le impronte dei file
modificati di proposito.

### Organizzazione dei file

Modello dei nomi con segnaposto (`{title}`, `{podcast}`, `{date}`, `{season}`, `{episode}`…),
estensione reale di ogni file, tag ID3 non distruttivi, metadati accanto ai file (`.json` per
episodio, `podcast.json` e copertina per podcast), inventario CSV, OPML e playlist M3U.

### Sicurezza e reti

Validazione anti-SSRF su ogni indirizzo, ricontrollata a ogni connessione e redirezione. I percorsi
di rete (NAS, SMB) vengono verificati con un limite di otto secondi, senza mai bloccare
l’interfaccia.

---

## Requisiti di sistema

* **Windows**: 10/11 a 64 bit
* **Linux**: distribuzioni moderne (Ubuntu 22.04+, Debian 11+, Fedora 36+), `.AppImage` o `.deb`
* **macOS**: non supportato — nessun pacchetto ufficiale; il codice si compila anche su Mac, ma a
  carico di chi lo fa
* Connessione Internet per la lettura dei feed e i download

---

## Documentazione

* **Guida rapida**: `QUICKSTART_it.md`
* **Manuale completo**: `manual-it/Manuale_FeedDownloader_Pro_Box.pdf`, o i capitoli Markdown nella
  stessa cartella
* **Guida integrata**: dal pulsante **Guida** nella barra superiore del programma

---

## Licenza

Runtime FeedDownloader Pro è software libero, rilasciato sotto **licenza MIT**: si può usare,
studiare, modificare e ridistribuire liberamente. Il programma e la sua documentazione sono stati
scritti con un uso massiccio di modelli linguistici — Google Gemini e Anthropic Claude — sotto la
direzione progettuale di Simone Pizzi.

---

*Parte dell’Ecosystem Runtime | Digital Core — Strumenti costruiti per durare.*
