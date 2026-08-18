# Capitolo 8: Organizzazione dei file, template e metadati

## 8.1 Il problema dei nomi

Il nome con cui un file audio viene pubblicato di rado è pensato per essere letto da qualcuno:
`ep_2024_03_15_FINALE_v2_mixdown.mp3`, `podcast-episode-187-compressed.m4a`, o addirittura
`abc123def456.mp3`. Hanno senso per i sistemi di chi produce; dentro un archivio sono rumore.

Il programma rimedia con i **template di rinomina**: si definisce una volta il formato dei nomi e
ogni file scaricato lo rispetta, attingendo alle informazioni del feed.

---

## 8.2 Come funziona un template

Un template è una riga di testo che mescola parti fisse e **token**, cioè variabili fra parentesi
graffe. A download finito, ogni token viene sostituito con il valore di quell’episodio.

Con il template `{date} - {podcast} - {title}` si ottiene:

`2024-03-15 - Il Podcast di Mario - Episodio 187: L'intelligenza artificiale spiegata bene.mp3`

L’estensione non fa parte del template: viene aggiunta in base al formato del file di origine.

---

## 8.3 I token disponibili

| Token | Cosa contiene | Esempio |
|-------|---------------|---------|
| `{title}` | Titolo dell’episodio dal feed | `Episodio 187: L'AI spiegata bene` |
| `{podcast}` | Nome del podcast | `Il Podcast di Mario` |
| `{date}` | Data di pubblicazione, `AAAA-MM-GG` | `2024-03-15` |
| `{year}` | Anno | `2024` |
| `{month}` | Mese a due cifre | `03` |
| `{day}` | Giorno a due cifre | `15` |

Quando un episodio non dichiara la data, i token temporali diventano la parola `unknown`. Un token
inventato, per esempio `{episode}`, resta nel nome così com’è: il programma non lo riconosce e non
lo tocca.

---

## 8.4 Template consigliati

Il predefinito è il solo titolo:

```
{title}
```

Va bene per i cataloghi con titoli già descrittivi.

Per uso generale conviene anteporre la data:

```
{date} - {title}
```

che produce `2024-03-15 - Episodio 187: L'AI spiegata bene.mp3`. Il vantaggio è pratico: l’ordine
alfabetico dei file coincide con quello cronologico.

Se più podcast finiscono nella stessa cartella, conviene includere il nome del programma:

```
{podcast} - {date} - {title}
```

---

## 8.5 Come vengono ripuliti i nomi

Alcuni caratteri non sono ammessi nei nomi di file: su Windows `/`, `\`, `:`, `*`, `?`, `"`, `<`,
`>`, `|`. Il programma li **elimina** dal nome prodotto dal template, senza sostituirli con altro:
`Episodio 12: L'AI` diventa `Episodio 12 L'AI`.

Vengono trattati anche due casi meno ovvi. I nomi riservati di Windows (`CON`, `PRN`, `AUX` e
compagnia) non sono utilizzabili come nomi di file: se il titolo si riduce a uno di questi, il
programma ripiega su `episode`. E il percorso completo, cartella inclusa, viene tenuto entro 250
caratteri: se serve, il titolo viene accorciato, lasciando spazio ai suffissi tecnici che il
programma aggiunge durante il lavoro (`.part.meta` e l’eventuale `_2` in caso di omonimia).

*Sui titoli lunghi.* Certi podcast usano titoli da centocinquanta caratteri. Con `{title}` da solo si
ottengono nomi ingombranti che rischiano il troncamento; mettendo `{date}` in testa si ha comunque
un nome ordinabile e riconoscibile anche quando la coda viene tagliata.

---

## 8.6 Dove si imposta

Il template si configura in **Impostazioni → Metadati**, campo **Template Nome File**. Sotto il
campo c’è un’anteprima che mostra il risultato su un episodio d’esempio, così si vede l’effetto
prima di chiudere le impostazioni.

---

## 8.7 Una cosa che il template non fa

Il template genera **il nome del file, non una struttura di cartelle**. Scrivere
`{year}/{month}/{title}` non crea le sottocartelle per anno e mese: le barre vengono eliminate
insieme agli altri caratteri non ammessi, e il risultato è un unico file dal nome `202403Titolo.mp3`.

L’organizzazione automatica che il programma applica è una sola, e riguarda i podcast: dentro la
cartella di destinazione ogni programma ha la propria sottocartella, intitolata al podcast. Per
suddividere ulteriormente per anno conviene usare cartelle di destinazione diverse, cambiandole
quando serve dall’icona cartella della barra di comando.

---

## 8.8 I file sidecar JSON

In **Impostazioni → Metadati** c’è l’interruttore **File Sidecar .json**, disattivato di serie.

Quando è attivo, accanto a ogni file audio ne compare uno `.json` con lo stesso nome, che riporta i
dati dell’episodio:

```json
{
  "title": "Episodio 187: L'AI spiegata bene",
  "podcast": "Il Podcast di Mario",
  "guid": "https://esempio.it/ep187",
  "pubDate": "2024-03-15T08:00:00.000Z",
  "downloadedAt": "2026-08-18T09:14:22.517Z",
  "sourceUrl": "https://media.esempio.it/ep187.mp3",
  "filename": "2024-03-15 - Episodio 187 L'AI spiegata bene.mp3"
}
```

Serve a due cose: far leggere i metadati a script e sistemi esterni senza passare dal database, e
tenerne una copia indipendente dal database stesso, utile se un giorno l’archivio andasse
ricostruito.

---

## 8.9 I tag ID3

Sempre in **Impostazioni → Metadati**, l’interruttore del tagging ID3 cambia etichetta secondo lo
stato: **Tagging ID3 Abilitato** oppure **Tagging ID3 Disabilitato**. Di serie è spento.

Quando è acceso, a download finito il programma scrive i dati dentro il file:

*   **Titolo**: il titolo dell’episodio.
*   **Artista** e **Album**: il nome del podcast.
*   **Anno**: l’anno di pubblicazione.
*   **Copertina**: l’immagine dell’episodio se il feed la dichiara, altrimenti quella del podcast.

I tag li leggono tutti i lettori audio più diffusi, quindi le informazioni restano visibili anche se
il nome del file cambia.

*Vale solo per gli MP3.* I file `.m4a`, `.ogg` e `.opus` non vengono modificati nemmeno con
l’opzione attiva.

---

*Il capitolo 9 tratta l’integrità dei file e la gestione dell’archivio.*
