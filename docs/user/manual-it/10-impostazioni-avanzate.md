# Capitolo 10: Impostazioni Avanzate

## 10.1 Panoramica del Pannello Impostazioni

Il pannello delle impostazioni è accessibile in qualsiasi momento tramite l'icona dell'ingranaggio (⚙) nell'angolo superiore dell'interfaccia. Le impostazioni sono organizzate in cinque schede tematiche: **Generale**, **Download**, **Metadati**, **Archivio** e **Avanzate**. Tutte le modifiche vengono salvate automaticamente: non è necessario confermare con un pulsante dedicato.

---

## 10.2 Download

Questa sezione contiene i controlli principali del motore di download. I parametri tecnici interni (timeout di connessione, numero di retry, stall detection) sono fissi nel motore e non richiedono configurazione manuale.

### Thread Paralleli

Il numero di download simultanei. Selezionabile tra tre preset: **1**, **3** e **5**. Per le linee guida sulla scelta del valore, vedi il Capitolo 6.

**Valore predefinito:** 3

### Limite di Velocità

Consente di limitare la banda aggregata utilizzata da tutti i download attivi, per evitare interferenze con altre attività di rete.

**Valori disponibili:** `0` = nessun limite (predefinito); qualsiasi valore positivo in KB/s. Esempio: `500` limita il consumo totale a circa 4 Mbps.

---

## 10.3 Generale

### Lingua

FeedDownloader Pro è disponibile in 8 lingue: Italiano, English, Deutsch, Español, Français, Português, Русский, 中文.

Il cambio di lingua è immediato: l'interfaccia si aggiorna senza necessità di riavviare il software. L'applicazione utilizza esclusivamente il tema scuro "Obsidian Command": non è disponibile un tema chiaro né un selettore di densità della lista.

### Aggiornamento Automatico dei Feed

Consente di sincronizzare automaticamente tutti i feed a intervalli regolari, senza intervento manuale. Sono disponibili quattro preset:

| Opzione | Comportamento |
|---------|--------------|
| **Disattivato** (predefinito) | Nessuna sincronizzazione automatica. |
| **Ogni 6 ore** | Sincronizzazione completa ogni 6 ore dall'avvio. |
| **Ogni 12 ore** | Sincronizzazione completa ogni 12 ore dall'avvio. |
| **Ogni 24 ore** | Sincronizzazione completa ogni 24 ore dall'avvio. |

Il cambio è immediato e non richiede il riavvio del software. Se durante la sincronizzazione automatica vengono trovati nuovi episodi, viene inviata una notifica del sistema operativo. La sincronizzazione automatica non avvia download: segnala soltanto la disponibilità di nuovi contenuti. Per una descrizione dettagliata del comportamento, vedi la sezione 5.9.

---

## 10.4 Sicurezza: Il Sistema Anti-SSRF a 5 Livelli

Questa sezione è documentata a titolo informativo: il sistema di sicurezza opera in modo completamente automatico e non richiede configurazione da parte dell'utente.

**Cos'è un attacco SSRF?**
SSRF (Server-Side Request Forgery) è un tipo di attacco in cui un URL malevolo, invece di puntare a una risorsa pubblica, punta a risorse interne della rete (come il pannello di amministrazione del router, un NAS o un server locale). Nel contesto di un downloader, un feed RSS costruito ad arte potrebbe includere URL audio che puntano a queste risorse interne.

**I 5 livelli di validazione:**

1.  **Validazione del protocollo:** Sono accettati solo i protocolli `http://` e `https://`. Protocolli come `file://`, `ftp://`, `data:`, `javascript:` vengono rifiutati immediatamente.

2.  **Validazione sintattica dell'URL:** L'URL viene analizzato per verificare la conformità allo standard RFC 3986.

3.  **Risoluzione DNS con ispezione dell'IP:** Il dominio nell'URL viene risolto in un indirizzo IP. Se la risoluzione fallisce, l'URL viene rifiutato. Se la risoluzione ha successo, l'indirizzo IP risultante viene verificato al livello successivo.

4.  **Blocco degli indirizzi IP privati e riservati:** Vengono bloccati tutti gli indirizzi IP appartenenti a intervalli privati o riservati, inclusi:
    *   `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16` (reti private RFC 1918)
    *   `127.0.0.0/8` (loopback)
    *   `169.254.0.0/16` (link-local)
    *   `::1/128` (loopback IPv6)
    *   `fc00::/7` (unique local IPv6)
    *   Qualsiasi indirizzo che punti all'host locale.

5.  **Blocco delle porte non standard:** Sono accettate solo le porte 80 e 443. Gli URL con porte non standard (es. `:8080`, `:3000`, `:22`) vengono rifiutati.

*Nota per ambienti aziendali:* Se la rete aziendale include server di podcast interni raggiungibili tramite indirizzi IP privati, il sistema anti-SSRF bloccherà questi URL. In tal caso, contattare il supporto per una configurazione personalizzata che includa specifici intervalli di indirizzi IP nella whitelist interna.

---

## 10.5 Avanzate

### Aggiornamenti

FeedDownloader Pro include un sistema di aggiornamento automatico integrato.

**Verifica automatica all'avvio:** Nella versione installata (pacchetto), il software controlla automaticamente la disponibilità di nuovi aggiornamenti 3 secondi dopo l'avvio, interrogando il repository GitHub. Se una nuova versione è disponibile, il download inizia in background senza richiedere alcuna azione.

**Verifica manuale:** Il pulsante **"Controlla Aggiornamenti"** nella scheda **Avanzate** forza una verifica immediata in qualsiasi momento.

Se una nuova versione è disponibile, il software la scarica in background e mostra il pulsante **"Installa e Riavvia"**. L'installazione non viene mai avviata automaticamente: la decisione spetta sempre all'utente.

**Stati visualizzati durante il processo:**

*   **Verifica in corso…** — il software sta interrogando il repository GitHub.
*   **Sei aggiornato** — la versione installata è la più recente.
*   **Nuova versione disponibile (vX.Y.Z)** — download in corso in background.
*   **Aggiornamento pronto** — il pacchetto è stato scaricato ed è pronto per l'installazione.

### Reset Database

Elimina completamente il database e ricomincia con un archivio vuoto. **Questa operazione è irreversibile.** Il software richiede una doppia conferma esplicita prima di procedere. I file audio sul disco non vengono eliminati: viene azzerata esclusivamente la memoria interna del software (cronologia dei download, metadati, statistiche).

*Quando utilizzarlo:* Esclusivamente quando si intende ripartire da un archivio completamente vuoto, ad esempio dopo una migrazione su un nuovo sistema o per rimuovere i dati di un ciclo di test.

---

*Vai al Capitolo 11 per la risoluzione dei problemi più comuni.*
