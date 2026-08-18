# Benvenuto in Runtime FeedDownloader Pro
**Il modo più potente e resiliente per archiviare i tuoi podcast.**

## Cos'è
Runtime FeedDownloader Pro è lo strumento professionale dell'**Ecosystem Runtime | Digital Core** progettato per archivisti, editori e appassionati che necessitano di scaricare interi cataloghi di podcast per la conservazione offline.

A differenza dei comuni player, questo software è ottimizzato per il **download massivo (Batch)**, la resilienza di rete e l'organizzazione strutturata dei file su disco.

---

## La Filosofia: "Database-First"
Il cuore di FeedDownloader Pro è il suo motore basato su **SQLite**. A differenza di altri software che si affidano esclusivamente alla presenza di file su disco, il nostro sistema:
1.  **Ricorda ogni download:** Anche se sposti l'archivio su un NAS o un disco esterno, il database mantiene lo stato del tuo archivio.
2.  **Evita i duplicati:** Niente più confusione tra file `.mp3`, `.m4a` o episodi scaricati più volte.
3.  **Integrità documentata:** Ogni file scaricato viene verificato tramite hash SHA-256 e i metadati (bitrate, sample rate) vengono estratti automaticamente.

## Caratteristiche Uniche

### 1. Resilienza di Rete Estrema
Gestire il download di centinaia di file audio richiede una gestione impeccabile degli errori. FeedDownloader Pro implementa:
- **Retry Automatici:** Con backoff esponenziale per non sovraccaricare i server.
- **Stall Detection:** Se il server smette di inviare dati per 60 secondi, il download viene riavviato automaticamente.
- **File .part Anti-Corruzione:** I file vengono rinominati con l'estensione finale solo al completamento totale del download.

### 2. Sicurezza e Validazione (SSRF)
L'applicazione implementa una validazione anti-SSRF a 5 livelli su ogni URL inserito. Blocchiamo protocolli pericolosi e indirizzi IP privati, garantendo la tua sicurezza anche con feed RSS provenienti da fonti sconosciute.

### 3. Supporto Professionale NAS/SMB
Progettato per archivisti, il software valida i percorsi di rete con un timeout di 8 secondi, prevenendo i freeze dell'interfaccia comuni quando si lavora con dischi di rete o NAS non pronti.

### 4. Libreria Feed Permanente e Vista Archivio
La barra laterale ridimensionabile mantiene tutti i feed aggiunti tra le sessioni, con un badge numerico che segnala gli episodi nuovi pubblicati dall'ultimo download. La scheda Archivio offre una tabella unica con tutti gli episodi scaricati, con ricerca, filtri per podcast e statistiche aggregate.

### 5. Pannello Download e Palette Comandi
Il Pannello Download laterale mostra la coda in tempo reale con velocità, tempo stimato e log errori per ogni batch. Si apre automaticamente all'avvio dei download e resta accessibile tramite un pulsante flottante. La Palette Comandi (Ctrl+K) permette di richiamare qualsiasi azione o feed dalla tastiera, senza usare il mouse.

### 6. Aggiornamento Automatico dei Feed
Un timer in background (6/12/24 ore) sincronizza tutti i feed senza intervento manuale e invia una notifica del sistema operativo quando vengono trovati nuovi episodi, senza avviare automaticamente i download.

---

## Requisiti di Sistema
- **Windows**: 10/11 (64-bit)
- **Linux**: Distribuzioni moderne (Ubuntu, Debian, Fedora)
- **macOS**: non supportato — nessun pacchetto ufficiale; il codice si compila anche su Mac, ma a
  carico di chi lo fa
- Connessione Internet attiva per l'analisi dei feed.

---
## Licenza

Runtime FeedDownloader Pro è software libero, rilasciato sotto **licenza MIT**: si può usare,
studiare, modificare e ridistribuire liberamente. Il programma e la sua documentazione sono stati
scritti con un uso massiccio di modelli linguistici — Google Gemini e Anthropic Claude — sotto la
direzione progettuale di Simone Pizzi.

---
*Parte dell'Ecosystem Runtime | Digital Core — Strumenti costruiti per durare.*
