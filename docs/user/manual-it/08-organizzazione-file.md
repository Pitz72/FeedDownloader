# Capitolo 8: Organizzazione dei file, modelli e metadati

## 8.1 Il problema dei nomi

Il nome con cui un file audio viene pubblicato di rado è pensato per essere letto da qualcuno:
`ep_2024_03_15_FINALE_v2_mixdown.mp3`, `podcast-episode-187-compressed.m4a`, o addirittura
`abc123def456.mp3`. Hanno senso per i sistemi di chi produce; dentro un archivio sono rumore.

Il programma rimedia con il **modello dei nomi**: si definisce una volta il formato dei nomi e ogni
file scaricato lo rispetta, attingendo alle informazioni del feed.

---

## 8.2 Come funziona un modello

Un modello è una riga di testo che mescola parti fisse e **segnaposto**, cioè variabili fra
parentesi graffe. Al momento del download, ogni segnaposto viene sostituito con il valore di
quell’episodio.

Con il modello `{date} - {podcast} - {title}` si ottiene:

`2024-03-15 - Il Podcast di Mario - Episodio 187 L'intelligenza artificiale spiegata bene.mp3`

L’estensione non fa parte del modello: viene aggiunta in base al formato del file (sezione 8.6).

---

## 8.3 I segnaposto disponibili

| Segnaposto | Cosa contiene | Esempio |
|------------|---------------|---------|
| `{title}` | Titolo dell’episodio dal feed | `Episodio 187 L'AI spiegata bene` |
| `{podcast}` | Nome del podcast | `Il Podcast di Mario` |
| `{date}` | Data di pubblicazione, `AAAA-MM-GG` | `2024-03-15` |
| `{year}` | Anno | `2024` |
| `{month}` | Mese a due cifre | `03` |
| `{day}` | Giorno a due cifre | `15` |
| `{season}` | Numero della stagione, a due cifre | `02` |
| `{episode}` | Numero dell’episodio, almeno a due cifre | `07`, `187` |

Quando un episodio non dichiara la data, i segnaposto temporali diventano la parola `unknown`.

`{season}` ed `{episode}` sono i numeri iTunes dichiarati nel feed (`<itunes:season>` e
`<itunes:episode>`). Quando il feed non li dichiara, o vi scrive qualcosa che non è un numero intero,
diventano `00`.

Un segnaposto inventato, per esempio `{autore}`, resta nel nome così com’è: il programma non lo
riconosce e non lo tocca.

---

## 8.4 Modelli consigliati

Il predefinito è il solo titolo:

```text
{title}
```

Va bene per i cataloghi con titoli già descrittivi.

Per uso generale conviene anteporre la data:

```text
{date} - {title}
```

che produce `2024-03-15 - Episodio 187 L'AI spiegata bene.mp3`. Il vantaggio è pratico: l’ordine
alfabetico dei file coincide con quello cronologico.

Per i podcast organizzati in stagioni la numerazione dà un ordine ancora più stabile:

```text
S{season}E{episode} - {title}
```

che produce `S02E07 - Il ritorno.mp3`. Conviene verificare prima che il feed dichiari davvero i
numeri: altrimenti ogni file comincerà con `S00E00`.

Se più podcast finiscono nella stessa cartella, per esempio dopo uno spostamento a mano, conviene
includere il nome del programma:

```text
{podcast} - {date} - {title}
```

---

## 8.5 Come vengono ripuliti i nomi

Alcuni caratteri non sono ammessi nei nomi di file: su Windows `/`, `\`, `:`, `*`, `?`, `"`, `<`,
`>`, `|`, oltre ai caratteri di controllo. Il programma li **elimina** dal nome prodotto dal modello,
senza sostituirli con altro: `Episodio 12: L'AI` diventa `Episodio 12 L'AI`. Lo stesso vale per il
nome della sottocartella del podcast.

Vengono trattati anche casi meno ovvi:

* **Nomi riservati.** I nomi riservati di Windows (`CON`, `PRN`, `AUX` e simili) non sono
  utilizzabili come nomi di file: se il titolo si riduce a uno di questi, il programma ripiega su
  `episode`. Lo stesso accade per un titolo che, ripulito, resta vuoto.
* **Lunghezza.** Il percorso completo, cartella inclusa, viene tenuto entro 250 caratteri: se serve,
  il titolo viene accorciato, lasciando spazio ai suffissi tecnici che il programma aggiunge durante
  il lavoro (`.part.meta` e l’eventuale suffisso di omonimia).
* **Omonimie.** Se nella cartella esiste già un file con lo stesso nome, o un file di metadati con
  lo stesso nome di base, il nuovo file prende il suffisso `_2`, poi `_3` e così via. Due episodi
  dallo stesso titolo non si sovrascrivono mai, nemmeno quando si scaricano in contemporanea.

*Sui titoli lunghi.* Certi podcast usano titoli da centocinquanta caratteri. Con `{title}` da solo si
ottengono nomi ingombranti che rischiano il troncamento; mettendo `{date}` in testa si ha comunque un
nome ordinabile e riconoscibile anche quando la parte finale viene tagliata.

---

## 8.6 L’estensione del file

Il programma salva ogni file con la sua estensione reale. La ricava dall’indirizzo del file quando
lo contiene (`.mp3`, `.m4a`, `.m4b`, `.aac`, `.ogg`, `.opus`, `.flac`, `.wav`, `.mp4` e altri
formati audio e video); quando l’indirizzo non la dice, usa il tipo MIME dichiarato nel feed, per
esempio `audio/mp4` diventa `.m4a`. Solo in mancanza di entrambe le informazioni il file diventa
`.mp3`.

---

## 8.7 Dove si imposta

Il modello si configura in **Impostazioni → File e metadati**, sezione **Nomi dei file**:

1. Scrivere il modello nel campo **Modello**, oppure comporlo con i pulsanti dei **Segnaposto
   disponibili**: ogni clic aggiunge il segnaposto in fondo al modello.
2. Controllare l’**Esempio** sotto il campo, che mostra il risultato su un episodio fittizio.
3. Uscire dal campo: il modello viene salvato. Un campo lasciato vuoto torna a `{title}`.

Il modello vale per i download futuri: **i file già presenti non vengono rinominati**. Può essere
lungo al massimo 300 caratteri.

---

## 8.8 Una cosa che il modello non fa

Il modello genera **il nome del file, non una struttura di cartelle**. Scrivere
`{year}/{month}/{title}` non crea le sottocartelle per anno e mese: le barre vengono eliminate
insieme agli altri caratteri non ammessi, e il risultato è un unico file dal nome
`202403Titolo.mp3`.

L’organizzazione automatica che il programma applica è una sola, e riguarda i podcast: dentro la
cartella di download ogni programma ha la propria sottocartella, intitolata al podcast.

---

## 8.9 I metadati accanto ai file

In **Impostazioni → File e metadati**, sezione **Metadati**, c’è l’interruttore **Salva i metadati
accanto ai file**, spento di serie. Quando è acceso, il programma scrive accanto ai file audio tre
tipi di file.

### Un file `.json` per ogni episodio

Ha lo stesso nome del file audio, con estensione `.json`, e riporta tutto ciò che si sa
dell’episodio:

```json
{
  "schema": "feeddownloader.episode/1",
  "title": "Episodio 187: L'AI spiegata bene",
  "podcast": "Il Podcast di Mario",
  "feedUrl": "https://www.esempio.it/feed.xml",
  "guid": "https://www.esempio.it/ep187",
  "pubDate": "Fri, 15 Mar 2024 08:00:00 GMT",
  "link": "https://www.esempio.it/episodi/187",
  "description": "In questa puntata…",
  "duration": "00:52:14",
  "season": "2",
  "episode": "187",
  "episodeType": "full",
  "enclosure": {
    "url": "https://media.esempio.it/ep187.mp3",
    "type": "audio/mpeg",
    "length": 75210432
  },
  "file": {
    "name": "2024-03-15 - Episodio 187 L'AI spiegata bene.mp3",
    "size": 75231890,
    "sha256": "9f2c…",
    "bitrateKbps": 192,
    "sampleRateHz": 44100
  },
  "downloadedAt": "2026-10-23T09:14:22.517Z",
  "savedBy": "Runtime FeedDownloader Pro 1.6.0",
  "sourceUrl": "https://media.esempio.it/ep187.mp3",
  "filename": "2024-03-15 - Episodio 187 L'AI spiegata bene.mp3"
}
```

Data, durata e note sono riportate come le pubblica il feed; le note possono quindi contenere codice
HTML. I campi `sourceUrl` e `filename` ripetono informazioni già presenti e restano per gli script
scritti per le versioni precedenti.

### Un `podcast.json` per ogni podcast

Nella cartella del podcast, con schema `feeddownloader.podcast/1`: titolo, indirizzo del feed, sito,
descrizione, autore, lingua, copyright, categorie, indirizzo della copertina, data e versione del
programma che lo ha scritto. Viene aggiornato una volta per sessione, al primo download del podcast.

### La copertina

Nella stessa cartella, `cover.jpg` (oppure `.png`, `.webp`, `.gif`, secondo il formato originale):
l’immagine del podcast dichiarata nel feed. Viene scaricata solo se nella cartella non c’è già una
copertina.

### A cosa servono

Servono a due cose: far leggere i metadati a script e sistemi esterni senza passare dal database, e
rendere l’archivio leggibile anche il giorno in cui il feed sparisce. Con questi file una cartella di
podcast è autosufficiente: audio, note, numerazione, impronte, descrizione e copertina viaggiano
insieme.

---

## 8.10 I tag ID3

Sempre in **Impostazioni → File e metadati**, l’interruttore **Scrivi i tag ID3 negli MP3**, spento
di serie, scrive le informazioni dentro il file:

* **Titolo**: il titolo dell’episodio;
* **Artista** e **Album**: il nome del podcast;
* **Anno**: l’anno di pubblicazione;
* **Copertina**: l’immagine dell’episodio se il feed la dichiara, altrimenti quella del podcast, ma
  **solo se il file non ha già una copertina** incorporata.

La scrittura è **non distruttiva**: i tag già presenti nel file, come capitoli, commenti,
collegamenti e copertina dell’editore, vengono mantenuti. I tag li leggono tutti i lettori audio più
diffusi, quindi le informazioni restano visibili anche se il nome del file cambia.

I tag vengono scritti **prima** di calcolare l’impronta SHA-256, così l’impronta registrata descrive
il file esattamente com’è sul disco. Le versioni fino alla 1.5.x facevano il contrario: chi le ha
usate con i tag attivi trova nella sezione 9.5 come rimettere in ordine le impronte.

*Vale solo per gli MP3.* I file `.m4a`, `.ogg`, `.opus` e degli altri formati non vengono
modificati nemmeno con l’opzione attiva.

---

*Il capitolo 9 tratta l’integrità dei file, la verifica e la gestione dell’archivio.*
