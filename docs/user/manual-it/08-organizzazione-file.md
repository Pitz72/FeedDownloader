# Capitolo 8: Organizzazione dei File, Template e Metadati

## 8.1 Il Problema dei Nomi Non Significativi

Quando un file audio viene pubblicato su un server di podcast, il suo nome originale è spesso poco leggibile: `ep_2024_03_15_FINALE_v2_mixdown.mp3`, `podcast-episode-187-compressed.m4a`, o anche solo `abc123def456.mp3` sono esempi comuni. Questi nomi hanno senso per i sistemi del produttore, ma rendono un archivio difficile da consultare.

FeedDownloader Pro risolve questo problema attraverso il **sistema di template di rinomina**: un meccanismo che consente di definire un formato di nome personalizzato per tutti i file scaricati, utilizzando informazioni estratte direttamente dal feed RSS.

---

## 8.2 Come Funziona il Template

Un template di rinomina è una stringa di testo che può contenere testo fisso e **token** — variabili racchiuse tra singole parentesi graffe (`{ }`). Al completamento di ogni download, il software sostituisce ogni token con il valore corrispondente dell'episodio.

**Esempio:**

Template configurato: `{date} - {podcast} - {title}`

Risultato: `2024-03-15 - Il Podcast di Mario - Episodio 187: L'intelligenza artificiale spiegata bene.mp3`

L'estensione del file (`.mp3`, `.m4a`, ecc.) viene aggiunta automaticamente in base al formato del file originale: non fa parte del template.

---

## 8.3 I Token Disponibili

| Token | Descrizione | Esempio |
|-------|-------------|---------|
| `{title}` | Titolo dell'episodio dal feed RSS | `Episodio 187: L'AI spiegata bene` |
| `{podcast}` | Nome del podcast (titolo del canale RSS) | `Il Podcast di Mario` |
| `{date}` | Data di pubblicazione nel formato `YYYY-MM-DD` | `2024-03-15` |
| `{year}` | Anno di pubblicazione | `2024` |
| `{month}` | Mese di pubblicazione (2 cifre) | `03` |
| `{day}` | Giorno di pubblicazione (2 cifre) | `15` |

*Nota:* Se nel template viene inserito un testo tra parentesi graffe che non corrisponde a nessuno dei token elencati (ad esempio `{episode}`), il testo viene lasciato invariato nel nome del file risultante.

---

## 8.4 Template Consigliati

**Template predefinito:**
```
{title}
```
Il template predefinito usa il solo titolo dell'episodio. È adatto a cataloghi con titoli descrittivi.

**Per uso generale (consigliato):**
```
{date} - {title}
```
Risultato: `2024-03-15 - Episodio 187: L'AI spiegata bene.mp3`

Questo formato è raccomandato perché l'ordinamento alfabetico dei file coincide con l'ordinamento cronologico.

**Per archivi multi-podcast (cartella condivisa):**
```
{podcast} - {date} - {title}
```
Risultato: `Il Podcast di Mario - 2024-03-15 - Episodio 187.mp3`

Utile quando tutti i podcast vengono salvati nella stessa cartella di destinazione.

**Per organizzazione in sottocartelle per anno e mese:**
```
{year}/{month}/{date} - {title}
```
Crea una struttura di sottocartelle automatica (vedi la sezione 8.7).

---

## 8.5 Normalizzazione Automatica dei Nomi

Alcuni caratteri non sono ammessi nei nomi di file sui principali sistemi operativi: `/`, `\`, `:`, `*`, `?`, `"`, `<`, `>`, `|` su Windows.

FeedDownloader Pro applica automaticamente una **normalizzazione** al nome risultante dal template:

*   I caratteri non ammessi vengono sostituiti con un trattino (`-`) o rimossi.
*   I doppi spazi vengono ridotti a uno spazio singolo.
*   I trattini o spazi iniziali e finali vengono eliminati.
*   Il nome viene troncato a 240 caratteri se supera il limite del filesystem.

*Nota sui titoli lunghi:* Alcuni podcast utilizzano titoli molto descrittivi (oltre 150 caratteri). L'uso del token `{title}` nel template può produrre nomi di file molto lunghi. In questi casi, abbinare `{date}` come elemento cronologico principale può limitare la lunghezza complessiva del nome.

---

## 8.6 Configurare il Template

Il template di rinomina si configura in **Impostazioni → Metadati**, campo **"Template Nome File"**.

Il campo di testo accetta qualsiasi combinazione di testo e token. Sotto il campo è disponibile un'anteprima in tempo reale che mostra il risultato del template applicato a un episodio di esempio, per verificare il formato prima di salvare.

Il template predefinito è `{title}`.

---

## 8.7 Organizzazione in Sottocartelle

Nel template è possibile utilizzare il carattere `/` per creare una struttura di **sottocartelle** automatica all'interno della cartella di destinazione.

**Esempio — organizzazione per anno e mese:**
```
{year}/{month}/{date} - {title}
```

Con una cartella di destinazione `D:\Archivio Podcast\Il Podcast di Mario\`, il risultato sarà:
```
D:\Archivio Podcast\Il Podcast di Mario\
    ├── 2024\
    │   ├── 01\
    │   │   ├── 2024-01-08 - Primo Episodio dell'Anno.mp3
    │   │   └── 2024-01-22 - Secondo Episodio.mp3
    │   └── 03\
    │       └── 2024-03-15 - Episodio 187.mp3
    └── 2023\
        └── 12\
            └── 2023-12-20 - Ultimo Episodio del 2023.mp3
```

Le sottocartelle vengono create automaticamente se non esistono.

*Attenzione:* Il carattere `\` (backslash) non è supportato come separatore di percorso nel template. Usare sempre `/` (forward slash), che il software traduce correttamente per il sistema operativo in uso.

---

## 8.8 File Sidecar JSON

Nella scheda **Impostazioni → Metadati** è disponibile il toggle **"File Sidecar .json"**.

Quando abilitato, per ogni file audio scaricato viene creato un file `.json` con lo stesso nome nella stessa cartella. Il file contiene i metadati dell'episodio in formato strutturato:

```json
{
  "title": "Episodio 187: L'AI spiegata bene",
  "podcast": "Il Podcast di Mario",
  "date": "2024-03-15",
  "sourceUrl": "https://media.esempio.it/ep187.mp3"
}
```

**Scenari d'uso:**
*   Integrazione con script di automazione o sistemi che leggono i metadati direttamente dal filesystem senza interrogare il database.
*   Conservazione dei metadati in modo indipendente dal database, utile in caso di migrazione o ricostruzione dell'archivio.

Questa opzione è disabilitata per impostazione predefinita.

---

## 8.9 Tagging ID3

Nella scheda **Impostazioni → Metadati** è disponibile il toggle **"Tagging ID3"**.

Quando abilitato, al completamento di ogni download il software scrive i metadati direttamente all'interno del file `.mp3`, nei tag ID3 standard:

*   **Titolo:** Il titolo dell'episodio
*   **Artista:** Il nome del podcast
*   **Anno:** L'anno di pubblicazione
*   **Copertina:** L'immagine del podcast (se disponibile nel feed RSS)

I tag ID3 vengono riconosciuti dai principali player audio (Windows Media Player, VLC, iTunes, Foobar2000) e consentono di visualizzare le informazioni dell'episodio indipendentemente dal nome del file.

*Nota:* Il tagging ID3 si applica esclusivamente ai file `.mp3`. I file in altri formati (`.m4a`, `.ogg`, `.opus`) non vengono modificati, anche con questa opzione attiva.

Questa opzione è disabilitata per impostazione predefinita.

---

*Vai al Capitolo 9 per la verifica dell'integrità e la gestione dell'archivio.*
