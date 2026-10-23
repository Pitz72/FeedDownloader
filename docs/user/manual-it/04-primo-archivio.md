# Capitolo 4: Il primo archivio, passo passo

## 4.1 Il percorso

Questo capitolo segue un percorso intero: dall’indirizzo di un podcast a una cartella di file audio
ordinati sul disco. Lo scenario è il più comune, cioè scaricare per la prima volta il catalogo di un
programma, tutto oppure solo un periodo.

Conviene leggerlo una volta dall’inizio alla fine. Presa la mano, aprire un archivio nuovo richiede
meno di un minuto.

---

## 4.2 Trovare l’indirizzo del feed

Si parte dall’indirizzo RSS del podcast. Un feed RSS è un file di testo in formato XML che chi
pubblica il programma mette in rete per elencare gli episodi disponibili: ogni podcast ne ha uno,
anche quando non lo mostra volentieri.

Dove cercarlo:

* **Sul sito del podcast.** Un’icona arancione con le onde, oppure le parole RSS, Feed, Subscribe,
  Podcast Feed. Il clic di solito apre il file XML nel browser: l’indirizzo nella barra è quello
  che serve.
* **In un’app di ascolto.** Pocket Casts, Apple Podcasts e simili mostrano spesso il collegamento
  RSS nelle informazioni del programma, a volte sotto la voce Condividi.
* **Sulla piattaforma di hosting.** Spreaker, Podbean, Buzzsprout e affini pubblicano l’indirizzo
  del feed nella pagina del podcast o nel pannello di chi lo produce.
* **Con un motore di ricerca.** Cercare `[nome del podcast] RSS feed` porta spesso al risultato
  giusto al primo colpo.

Un indirizzo RSS valido di solito finisce per `.xml` o `.rss`, oppure contiene `feed`, `rss` o
`podcast` nel percorso. Per esempio: `https://www.esempio.it/feed.xml`,
`https://feeds.spreaker.com/podcast/12345`, `https://anchor.fm/s/abc123/podcast/rss`.

---

## 4.3 Scegliere la cartella di download

Prima di aggiungere il feed conviene decidere dove finiranno i file. Il programma crea da sé, dentro
la cartella di download, una sottocartella per ogni podcast, e vi salva i file con i nomi decisi dal
modello (capitolo 8):

```text
D:\Archivio Podcast\
    ├── Il Mio Podcast\
    ├── Podcast di Tecnologia\
    └── Radio Talk Show\
```

Senza una scelta esplicita, la cartella è `Documenti\FeedDownloader\downloads`. Per cambiarla:

1. Aprire **Impostazioni → Download** (ingranaggio in alto a destra, oppure **Ctrl+,**).
2. Premere **Cambia cartella** nella sezione **Cartella di download**.
3. Scegliere la cartella e confermare. Il programma verifica di poterci scrivere e conferma con
   *Cartella di download aggiornata.*

Se l’archivio contiene già degli episodi, il programma chiede che cosa farne: spostarli nella nuova
cartella oppure lasciarli dove sono e usare la nuova solo per i prossimi download (capitolo 9,
sezione 9.8). Al primo archivio la domanda non compare.

*Se l’archivio sta su un NAS o su un disco di rete*, il capitolo 7 va letto prima di procedere:
quei percorsi hanno qualche accortezza in più.

---

## 4.4 Aggiungere il feed

1. Premere **Aggiungi feed** in fondo alla barra laterale, oppure **Ctrl+N**.
2. Incollare l’indirizzo nel campo **Indirizzo del feed**. Il prefisso `https://` si può omettere, e
   gli indirizzi che iniziano con `feed:` o `podcast:` vengono convertiti da soli.
3. Premere **Analizza**, o semplicemente `Invio`. Per un podcast da 200 o 300 episodi bastano pochi
   secondi; per cataloghi oltre il migliaio, o divisi in molte pagine, possono servirne quindici o
   trenta.
4. Compare l’anteprima: copertina, titolo, numero di episodi e intervallo coperto (*dal … al …*),
   con l’inizio della descrizione. È il momento di verificare che sia il podcast giusto.
5. Volendo, accendere qui **Archivio automatico**: i nuovi episodi trovati dai controlli periodici
   si scaricheranno senza chiedere (capitolo 5, sezione 5.10).
6. Premere **Aggiungi alla libreria**. Il feed entra nella barra laterale e si apre la sua vista.

Se il feed è già in libreria, l’anteprima lo dice e il pulsante diventa **Apri il feed**.

**Due scorciatoie.** Si può trascinare un indirizzo dal browser direttamente sulla finestra del
programma: si apre **Aggiungi un feed** con l’analisi già avviata. E chi ha già un elenco di
podcast in un’altra applicazione può importarlo con **Importa da OPML** (capitolo 5, sezione 5.5).

Se l’analisi fallisce, sotto il campo compare il motivo, per esempio *L’indirizzo porta a una
pagina web, non a un feed RSS.* oppure *Il server non risponde. Controlla la connessione.* Il
capitolo 11 raccoglie tutti i messaggi e il loro significato.

---

## 4.5 Leggere la vista del feed

Aperto il feed, conviene guardare tre cose.

* **Le cifre** nell’intestazione: **Episodi**, **Archiviati**, **Da scaricare** e **Spazio
  occupato**. Un programma attivo da qualche anno ha facilmente qualche centinaio di episodi.
* **Gli episodi già archiviati**, se il feed era già stato lavorato in passato: il database li
  conosce e non li riscaricherà. Il filtro **Archiviati** li mostra tutti insieme.
* **Gli episodi senza durata o dimensione**: semplicemente il feed non le dichiara. Si scaricano lo
  stesso, senza conseguenze; la stima dello spazio, per loro, usa un valore medio.

---

## 4.6 Scegliere che cosa scaricare

Il pulsante principale, sopra l’elenco, prende sempre gli episodi **mostrati** che non sono già
archiviati né in coda, e lo dice nell’etichetta. Ci sono tre modi di usarlo.

### Tutto il catalogo

Senza filtri attivi il pulsante si chiama **Scarica i N mancanti**: prende tutti gli episodi non
ancora archiviati.

### Un periodo

Per scaricare «dal giorno X al giorno Y»:

1. Nella fascia dei filtri, aprire il menu **Periodo** e scegliere un intervallo pronto (**Ultimi 30
   giorni**, **Ultimi 90 giorni**, **Ultimi 12 mesi**, **Quest’anno**, **L’anno scorso**), oppure
   compilare le date **Dal** e **Al**.
2. Volendo, combinare altri filtri: lo stato **Da scaricare**, una durata minima, una parola nel
   titolo.
3. Il pulsante diventa **Scarica i N filtrati**, e il pannello **Che cosa scaricherà**, a destra,
   riporta il numero degli episodi, lo spazio stimato e il periodo.

### Una selezione

Spuntare le caselle degli episodi voluti; **Maiusc** + clic su una casella prende un intervallo,
**Ctrl+A** tutti quelli visibili. Compare **Scarica i N selezionati**.

Per un solo episodio basta l’icona di download sulla sua riga, oppure **Scarica** nel dettaglio.

---

## 4.7 Confermare e avviare

Per più di un episodio il programma chiede conferma. La finestra *Scaricare N episodi?* riporta:

* quanti episodi vanno in coda e di quale podcast;
* il **Periodo**, se è attivo un filtro per data;
* lo **Spazio stimato** e lo **Spazio libero** sul disco di destinazione;
* la **Cartella** in cui finiranno i file.

Se lo spazio libero potrebbe non bastare (meno di una volta e un quinto della stima), la finestra lo
segnala in giallo. Se sul disco restano meno di 200 MB, il programma non avvia nulla e lo dice:
*Spazio quasi esaurito (… liberi): download non avviati.*

Premendo **Metti in coda** i download partono, tanti per volta quanti indicati in **Impostazioni →
Download → Download in parallelo**: tre, salvo diversa scelta (capitolo 6).

La stima dello spazio usa la dimensione dichiarata dal feed; quando manca, la deduce dalla durata
(a 192 kbps), e in mancanza anche di quella conta 45 minuti per episodio.

---

## 4.8 Seguire l’avanzamento

La barra superiore dice in ogni momento quanti download sono in corso e a che punto è il lavoro
(*3 in download · 47 di 312*). Le righe dell’elenco degli episodi mostrano la propria barra, con
percentuale, velocità e tempo stimato.

Per il quadro completo c’è la vista **Download** (**Ctrl+2**, oppure un clic sullo stato della
coda): la coda con i comandi di pausa e annullamento, i non riusciti con il motivo, i completati
della sessione.

Non serve tenere la finestra aperta: chiudendola il programma resta nell’area di notifica e
continua a lavorare. A lotto finito arriva una notifica di sistema (*Download completato: 312 file
scaricati.*).

Durante il lotto il software si occupa da sé dei tentativi dopo un errore di rete, degli stalli e
della verifica di ogni file completato. Se la connessione cade, la coda si mette in pausa da sola e
riparte al ritorno della rete. Se il computer va in sospensione, al risveglio la sorveglianza degli
stalli chiude i trasferimenti fermi e il ciclo dei tentativi di solito recupera la situazione; gli
episodi che avevano già esaurito i cinque tentativi finiscono tra i non riusciti, da cui si
rimettono in coda con **Riprova tutti**.

---

## 4.9 Verificare il risultato

Quando la coda si svuota, restano tre cose da fare.

**Controllare i non riusciti.** Nella vista **Download**, la sezione **Non riusciti** elenca gli
episodi mancati con il motivo. Il più frequente è *Il file non esiste più sul server (404).*, cioè
un file rimosso prima che il programma riuscisse a prenderlo. **Riprova tutti (N)** li rimette in
coda in un colpo solo.

**Dare un’occhiata al disco.** **Apri la cartella**, nell’intestazione del feed, apre la cartella
del podcast. I file portano i nomi decisi dal modello (capitolo 8). Se si trovano dei `.part`,
quei trasferimenti sono stati interrotti o sospesi: rimettendo in coda gli stessi episodi
riprendono dal punto raggiunto. Quelli rimasti orfani si eliminano da **Impostazioni → Archivio →
Pulisci i file temporanei**.

**Esportare l’inventario.** Nella vista **Archivio**, **Esporta CSV** produce l’elenco completo
degli episodi archiviati con impronta SHA-256, dimensioni, metadati e cartella (capitolo 9).

---

## 4.10 Tenere aggiornato l’archivio

Qui l’impostazione database-first si fa sentire: il programma sa sempre cosa possiede, e lo stesso
episodio non viene mai scaricato due volte.

* **A mano.** **Controlla i feed** (barra superiore, oppure **Ctrl+S**) rilegge tutta la libreria.
  I feed con episodi nuovi mostrano *N da scaricare* nella barra laterale e nella Libreria; aprendo
  il feed, **Scarica i N mancanti** prende soltanto quelli. Per un singolo feed c’è **Aggiorna**
  nella sua intestazione.
* **Da solo.** Il programma controlla tutti i feed all’avvio e poi ogni sei ore, anche a finestra
  chiusa (l’intervallo si cambia in **Impostazioni → Generale**). Quando trova episodi nuovi manda
  una notifica di sistema.
* **Senza toccare niente.** Con l’**Archivio automatico** acceso su un feed, gli episodi nuovi
  trovati dai controlli vanno in coda da soli (capitolo 5, sezione 5.10). È il modo più semplice
  per seguire un podcast nel tempo.

---

*Il capitolo 5 entra nel dettaglio della gestione dei feed, dei file OPML e dei controlli.*
