# Capitolo 10: Impostazioni Avanzate

## 10.1 Panoramica del Pannello Impostazioni

Il pannello delle impostazioni è accessibile in qualsiasi momento tramite l'icona dell'ingranaggio (⚙) nell'angolo superiore dell'interfaccia. Le impostazioni sono organizzate in cinque schede tematiche: **Generale**, **Download**, **Metadati**, **Archivio** e **Avanzate**. Tutte le modifiche vengono salvate automaticamente: non è necessario confermare con un pulsante dedicato.

---

## 10.2 Download

Questa sezione contiene i controlli principali del motore di download. I parametri tecnici interni (timeout di connessione, numero di retry, stall detection) sono fissi nel motore e non richiedono configurazione manuale.

### Download Paralleli

Il numero di download simultanei. Selezionabile tra tre preset: **1**, **3** e **5**. Per le linee guida sulla scelta del valore, vedi il Capitolo 6.

**Valore predefinito:** 3

### Limite Velocità Download

Consente di limitare la banda aggregata utilizzata da tutti i download attivi, per evitare interferenze con altre attività di rete.

**Valori disponibili:** `0` = illimitato (predefinito); qualsiasi valore positivo in KB/s. Esempio: `500` limita il consumo totale a circa 4 Mbps.

### Dimensione Massima File

Rifiuta i download più grandi del limite impostato, in **MB**. Protegge da enclosure anomale (file enormi dichiarati per errore, o server che inviano contenuti diversi dall'audio previsto). Un file oltre il limite viene marcato come errore definitivo, senza retry.

**Valori disponibili:** `0` = illimitato (predefinito); qualsiasi valore positivo in MB.

---

## 10.3 Generale

### Lingua

FeedDownloader Pro è disponibile in 2 lingue: **Italiano** e **English**.

Il cambio di lingua è immediato: l'interfaccia si aggiorna senza necessità di riavviare il software. L'applicazione utilizza esclusivamente il tema scuro "Obsidian Command": non è disponibile un tema chiaro né un selettore di densità della lista.

### Aggiornamento Automatico Feed

Consente di sincronizzare automaticamente tutti i feed a intervalli regolari, senza intervento manuale. Un controllo viene comunque eseguito a ogni avvio dell'applicazione e al ritorno della connessione dopo un periodo offline. Sono disponibili quattro preset:

| Opzione | Comportamento |
|---------|--------------|
| **Disattivato** | Nessuna sincronizzazione ciclica (resta il controllo all'avvio). |
| **6 ore** (predefinito) | Sincronizzazione completa ogni 6 ore. |
| **12 ore** | Sincronizzazione completa ogni 12 ore. |
| **24 ore** | Sincronizzazione completa ogni 24 ore. |

Il cambio è immediato e non richiede il riavvio del software. Se durante la sincronizzazione automatica vengono trovati nuovi episodi, viene inviata una notifica del sistema operativo, cliccabile: porta l'app in primo piano e, se riguarda un solo podcast, apre quel feed. La sincronizzazione automatica non avvia download: segnala soltanto la disponibilità di nuovi contenuti. Per una descrizione dettagliata del comportamento, vedi la sezione 5.9.

### Guida Utente e Novità

Sempre nella scheda **Generale** sono disponibili:

*   **"Guida Utente":** Apre la documentazione integrata, con il pulsante **"Apri il manuale completo in PDF"** per consultare questo manuale.
*   **"Novità di questa versione":** Apre il changelog in-app con le note di rilascio della versione installata. La stessa finestra appare automaticamente al primo avvio dopo un aggiornamento.

---

## 10.4 Sicurezza: Il Sistema Anti-SSRF Multilivello

Questa sezione è documentata a titolo informativo: il sistema di sicurezza opera in modo completamente automatico e non richiede configurazione da parte dell'utente.

**Cos'è un attacco SSRF?**
SSRF (Server-Side Request Forgery) è un tipo di attacco in cui un URL malevolo, invece di puntare a una risorsa pubblica, punta a risorse interne della rete (come il pannello di amministrazione del router, un NAS o un server locale). Nel contesto di un downloader, un feed RSS costruito ad arte potrebbe includere URL audio che puntano a queste risorse interne.

**I livelli di validazione:**

1.  **Validazione sintattica dell'URL:** L'URL viene analizzato per verificare la conformità allo standard.

2.  **Validazione del protocollo:** Sono accettati solo i protocolli `http://` e `https://`. Protocolli come `file://`, `ftp://`, `data:`, `javascript:` vengono rifiutati immediatamente.

3.  **Blocco degli hostname interni noti:** Nomi come `localhost` e gli indirizzi di loopback letterali vengono rifiutati.

4.  **Blocco degli indirizzi IP privati e riservati:** Vengono bloccati tutti gli indirizzi IP appartenenti a intervalli privati o riservati, inclusi:
    *   `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16` (reti private RFC 1918)
    *   `127.0.0.0/8` (loopback)
    *   `169.254.0.0/16` (link-local)
    *   `::1/128` (loopback IPv6)
    *   `fc00::/7` (unique local IPv6)
    *   Qualsiasi indirizzo che punti all'host locale.

5.  **Ri-validazione alla connessione:** L'indirizzo IP risolto via DNS viene verificato di nuovo a ogni connessione e a ogni redirect. Questo neutralizza le tecniche di elusione basate su DNS (un dominio pubblico che risolve verso un indirizzo privato, o un redirect verso una risorsa interna).

*Nota per ambienti aziendali:* Se la rete aziendale include server di podcast interni raggiungibili tramite indirizzi IP privati, il sistema anti-SSRF bloccherà questi URL. In tal caso, contattare il supporto per una configurazione personalizzata che includa specifici intervalli di indirizzi IP nella whitelist interna.

---

## 10.5 Avanzate

### Aggiornamenti

FeedDownloader Pro include un sistema di aggiornamento integrato **basato sul consenso**: nessun download e nessuna installazione avvengono automaticamente.

**Verifica automatica all'avvio:** Nella versione installata (pacchetto), il software controlla automaticamente la disponibilità di nuovi aggiornamenti poco dopo l'avvio, interrogando il repository delle release. Se una nuova versione è disponibile, appare l'indicatore persistente **"Aggiornamento disponibile"** nella barra superiore e una notifica di sistema — ma **non viene scaricato nulla**.

**Verifica manuale:** Il pulsante **"Controlla Aggiornamenti"** nella scheda **Avanzate** forza una verifica immediata in qualsiasi momento.

**Download col consenso:** Il download del pacchetto parte solo premendo **"Scarica"** nell'indicatore della barra superiore, oppure **"Scarica aggiornamento"** nelle Impostazioni. A download completato appare il pulsante **"Riavvia e Installa"**: anche l'installazione richiede un'azione esplicita dell'utente.

**Stati visualizzati durante il processo:**

*   **Ricerca aggiornamenti...** — il software sta interrogando il repository delle release.
*   **Hai già la versione più recente** — la versione installata è la più recente.
*   **Aggiornamento disponibile: vX.Y.Z** — in attesa del consenso al download.
*   **Download aggiornamento... N%** — download in corso (avviato dall'utente).
*   **Aggiornamento scaricato — riavvia per installare** — il pacchetto è pronto per l'installazione.

### Manutenzione

Il pulsante **"Pulisci file temporanei"** rimuove i file `.part` orfani rimasti nella cartella di destinazione da download interrotti in passato. La funzione non è disponibile mentre ci sono download in corso (i loro `.part` sono in uso). Al termine viene mostrato il numero di file rimossi.

### Zona Pericolo: Resetta Storico Download

Il pulsante **"Resetta Storico Download"** cancella la cronologia dei download registrata nel database (i "segni di spunta" degli episodi scaricati). Il software richiede una conferma esplicita prima di procedere. I file audio sul disco **non** vengono eliminati: dopo il reset, gli episodi appariranno di nuovo come da scaricare.

*Quando utilizzarlo:* Esclusivamente quando si intende ripartire da una cronologia vuota, ad esempio dopo una migrazione su un nuovo sistema o per rimuovere i dati di un ciclo di test.

---

*Vai al Capitolo 11 per la risoluzione dei problemi più comuni.*
