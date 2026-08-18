# Capitolo 4: Il primo archivio, passo passo

## 4.1 Che cosa faremo

Questo capitolo segue un percorso intero: dall’indirizzo di un podcast a una cartella di file
audio ordinati sul disco. Lo scenario è il più comune, cioè scaricare per la prima volta il catalogo
completo di un programma.

Conviene leggerlo una volta dall’inizio alla fine. Presa la mano, aprire un archivio nuovo richiede
meno di un minuto.

---

## 4.2 Trovare l’indirizzo del feed

Si parte dall’indirizzo RSS del podcast. Un feed RSS è un file di testo in formato XML che chi
pubblica il programma mette in rete per elencare gli episodi disponibili: ogni podcast ne ha uno,
anche quando non lo mostra volentieri.

Dove cercarlo:

*   **Sul sito del podcast.** Un’icona arancione con le onde, oppure le parole RSS, Feed, Subscribe,
    Podcast Feed. Il clic di solito apre il file XML nel browser: l’indirizzo nella barra è quello
    che serve.
*   **In un’app di ascolto.** Pocket Casts, Apple Podcasts e simili mostrano spesso il collegamento
    RSS nelle informazioni del programma, a volte nascosto sotto la voce Condividi.
*   **Sulla piattaforma di hosting.** Spreaker, Podbean, Buzzsprout e affini pubblicano l’indirizzo
    del feed nella pagina del podcast o nel pannello di chi lo produce.
*   **Con un motore di ricerca.** Cercare `[nome del podcast] RSS feed` porta spesso al risultato
    giusto al primo colpo.

Un indirizzo RSS valido di solito finisce per `.xml` o `.rss`, oppure contiene `feed`, `rss` o
`podcast` nel percorso. Per esempio: `https://www.esempio.it/feed.xml`,
`https://feeds.spreaker.com/podcast/12345`, `https://anchor.fm/s/abc123/podcast/rss`.

---

## 4.3 Preparare la cartella di destinazione

Prima di analizzare il feed conviene decidere dove finiranno i file, e darsi una struttura fin
dall’inizio.

```
D:\Archivio Podcast\
    ├── Il Mio Podcast\
    ├── Podcast di Tecnologia\
    └── Radio Talk Show\
```

Il programma crea da sé la sottocartella intitolata al podcast dentro la destinazione scelta, e vi
salva i file con i nomi decisi dal template (capitolo 8).

Per impostare la destinazione:

1.  Premere l’icona **cartella** nella barra di comando in alto, oppure aprire **Impostazioni →
    Download** e usare l’icona accanto a **Percorso Download**.
2.  Scegliere la cartella e confermare.
3.  Il percorso resta visibile in fondo alla barra laterale; un clic lo apre nel gestore file.

*Se l’archivio sta su un NAS o su un disco di rete*, il capitolo 7 va letto prima di procedere:
quei percorsi hanno qualche accortezza in più.

---

## 4.4 Analizzare il feed

Con l’indirizzo pronto e la cartella impostata:

1.  Incollare l’indirizzo nel **campo URL** in alto.
2.  Premere **Analizza**, o semplicemente `Invio`.
3.  La lista si riempie. Per un podcast da 200 o 300 episodi bastano pochi secondi; per cataloghi
    oltre il migliaio possono servirne quindici o venti, perché il file XML da leggere è grosso.

Se l’analisi fallisce, in ordine di probabilità: l’indirizzo contiene uno spazio o un carattere di
troppo; il feed è temporaneamente irraggiungibile, e conviene provarlo nel browser; il server
risponde con un codice HTTP che il programma riporta nel messaggio d’errore, tipicamente `403
Forbidden` per i feed che pretendono intestazioni particolari.

---

## 4.5 Leggere i risultati

A analisi finita, la lista mostra il catalogo.

Vale la pena guardare tre cose. Il **numero di episodi**, in cima alla lista: un programma attivo da
qualche anno ne ha facilmente qualche centinaio. Gli episodi già **ARCHIVIATI**, se il feed era già
stato lavorato in passato: quelli il database li conosce e non li riscaricherà. Gli episodi **senza
durata o dimensione**, che semplicemente non le dichiarano nel feed: si scaricano lo stesso, senza
conseguenze.

---

## 4.6 Avviare il download

Ci sono due strade.

**Tutto il catalogo.** Premere **Scarica Tutto**: il programma chiede conferma, controlla lo spazio
libero e mette in coda gli episodi mai scaricati. Attenzione a un dettaglio utile: agisce sugli
episodi **visibili in quel momento**, quindi con un filtro attivo scarica solo quelli. I download
partono in parallelo, tre alla volta salvo diversa impostazione di **Download Paralleli**
(capitolo 10).

**Solo alcuni episodi.** Selezionarli con `Ctrl` e un clic ciascuno, oppure con `Maiusc` per prendere
un intervallo, e premere **Scarica Selezionati (N)** nell’intestazione del feed.

---

## 4.7 Seguire l’avanzamento

Il **pannello download** si apre da solo a destra e mostra ogni episodio con percentuale, velocità e
tempo stimato. Come ordine di grandezza: duecento episodi a 64 kbps occupano fra i due e i tre
gigabyte.

Le righe della lista si aggiornano in tempo reale. Non serve tenere la finestra aperta: chiudendola
il programma resta nell’area di notifica e continua a lavorare.

Durante il lotto il software si occupa da sé dei tentativi dopo un errore di rete, degli stalli e
della verifica di ogni file completato. Se il computer va in sospensione i trasferimenti si
interrompono: al risveglio la sorveglianza degli stalli chiude i trasferimenti fermi e il ciclo dei
tentativi di solito recupera la situazione, ma gli episodi che avevano già esaurito i tre tentativi
finiscono in errore. Si rimettono in coda con **Riprova falliti**.

---

## 4.8 Verificare l’archivio

Quando il pannello dichiara il lotto completato, restano tre cose da fare.

**Controllare gli errori.** Il riepilogo in fondo al pannello download elenca gli episodi mancati
con il relativo codice. Il più frequente è `EPISODE_NOT_FOUND`, cioè un file rimosso dal server
prima che riuscissimo a prenderlo. Per rimettere in coda tutti i falliti in un colpo solo c’è
**Riprova falliti**.

**Esportare l’inventario.** Da **Impostazioni → Archivio → Esporta Inventario (CSV)** si ottiene
l’elenco completo degli episodi archiviati con impronta SHA-256, dimensioni e metadati (capitolo 9).

**Dare un’occhiata al disco.** I file stanno nella cartella di destinazione, nominati secondo il
template (capitolo 8). Se trovi dei `.part` significa che quei trasferimenti sono stati interrotti o
sospesi: rimettendo in coda gli stessi episodi riprendono dal punto raggiunto. Quelli rimasti orfani
si eliminano da **Impostazioni → Avanzate → Pulisci file temporanei**.

---

## 4.9 Tenere aggiornato l’archivio

Qui l’impostazione database-first si fa sentire: il programma sa sempre cosa possiede.

Per un feed già in libreria basta selezionarlo e premere l’icona di sincronizzazione, oppure
**Sincronizza Tutti** per l’intera libreria. Gli episodi nuovi compaiono con il tag **NUOVO** e il
feed espone il badge **DA SCARICARE** nella barra laterale; quelli già presi restano
**ARCHIVIATO**. A quel punto **Scarica Tutto** prende soltanto i nuovi. In alternativa,
**Sincronizza Nuovi** fa le due cose insieme: rilegge il feed e mette subito in coda ciò che manca.

Per un feed non ancora in libreria si incolla l’indirizzo nel campo URL e si preme **Analizza**:
entra in libreria e la lista mostra subito cosa manca.

Lo stesso episodio non viene mai scaricato due volte. Il controllo automatico dei nuovi episodi è
attivo di serie ogni sei ore (capitolo 10 e sezione 5.9).

---

*Il capitolo 5 entra nel dettaglio della gestione dei feed e dei file OPML.*
