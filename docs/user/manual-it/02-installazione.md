# Capitolo 2: Installazione e Primo Avvio

## 2.1 Requisiti di Sistema

Runtime FeedDownloader Pro è un'applicazione desktop basata su tecnologia Electron. È autonoma e non richiede l'installazione di runtime aggiuntivi (Node.js, .NET, Java): tutto il necessario è incluso nel pacchetto di installazione.

**Requisiti minimi:**

| Sistema Operativo | Versione Minima | Architettura |
|-------------------|-----------------|--------------|
| Windows | 10 (build 1903) o Windows 11 | 64-bit (x64) |
| Linux | Ubuntu 22.04 LTS, Debian 11, Fedora 36 o distribuzioni equivalenti | 64-bit (x64) |

**Requisiti hardware consigliati:**
*   **RAM:** 4 GB (8 GB raccomandati per archivi di grandi dimensioni con più thread attivi)
*   **Spazio disco:** 200 MB per l'installazione del programma, più lo spazio necessario per l'archivio audio
*   **Connessione:** Banda larga (almeno 10 Mbps per utilizzare i download paralleli in modo efficace)

*Nota per gli utenti Linux:* Il software è distribuito in formato `.AppImage` (autocontenuto, utilizzabile su qualsiasi distribuzione moderna con librerie glibc aggiornate, senza procedura di installazione tradizionale) e in formato `.deb` per le distribuzioni basate su Debian/Ubuntu.

*Nota su macOS:* Le build ufficiali per macOS non sono distribuite. Il codice è compatibile con Electron su macOS, ma l'eventuale compilazione è a carico dell'utente e non è supportata.

---

## 2.2 Installazione su Windows

1.  Scaricare il file di installazione `Runtime-FeedDownloader-Pro-1.5.0.exe` dalla pagina delle release ufficiale.
2.  Fare doppio clic sul file scaricato per avviare il programma di installazione.
3.  Se Windows mostra un avviso **"Windows ha protetto il PC"** (SmartScreen), cliccare su **"Ulteriori informazioni"** e poi su **"Esegui comunque"**. Questo avviso è standard per i software distribuiti al di fuori del Microsoft Store che non hanno ancora raggiunto una soglia sufficiente di adozione per il sistema di reputazione di Windows.
4.  Seguire le istruzioni a schermo: accettare il contratto di licenza, scegliere la cartella di installazione e cliccare su **"Installa"**.
5.  Al termine, saranno disponibili un collegamento sul **Desktop** e una voce nel menu **Start**.

**Percorsi di installazione e dati:**
Il programma viene installato in `C:\Program Files\Runtime FeedDownloader Pro\`. Il database viene salvato separatamente in `C:\Users\[TuoNome]\AppData\Roaming\Runtime FeedDownloader Pro\`. Questa separazione garantisce che la disinstallazione del programma non intacchi i dati dell'archivio.

---

## 2.3 Installazione su Linux

1.  Scaricare il file `Runtime-FeedDownloader-Pro-1.5.0.AppImage` (oppure il pacchetto `.deb` per Debian/Ubuntu).
2.  Rendere il file `.AppImage` eseguibile. Le modalità disponibili sono:
    *   **Tramite interfaccia grafica:** clic destro sul file → Proprietà → scheda Permessi → spunta "Consenti l'esecuzione del file come programma".
    *   **Tramite terminale:** `chmod +x Runtime-FeedDownloader-Pro-1.5.0.AppImage`
3.  Avviare il file con un doppio clic oppure da terminale: `./Runtime-FeedDownloader-Pro-1.5.0.AppImage`

Per il pacchetto `.deb`: installare con `sudo dpkg -i Runtime-FeedDownloader-Pro-1.5.0.deb` (o con il gestore pacchetti grafico della distribuzione).

**Integrazione con il desktop (opzionale):**
Per aggiungere FeedDownloader Pro al launcher e al menu delle applicazioni, è possibile usare **AppImageLauncher** (disponibile nei repository della maggior parte delle distribuzioni), che integra automaticamente i file AppImage nel sistema.

*Nota per ambienti sandbox:* Su distribuzioni con **Flatpak** o ambienti con restrizioni di accesso al filesystem, il software potrebbe non raggiungere i percorsi di rete SMB. In tal caso, verificare che il filesystem di rete sia montato e accessibile dal gestore file prima di avviare il programma.

---

## 2.4 Il Primo Avvio

Alla prima apertura, il software è immediatamente operativo. Non è richiesta alcuna configurazione iniziale, né la creazione di un account o l'inserimento di una licenza. L'interfaccia si presenta con la barra di inserimento URL al centro e la lista degli episodi vuota.

**File creati al primo avvio:**
Il programma genera automaticamente nella cartella dati utente il file:
*   `feeddownloader.sqlite` — Il database SQLite principale. Contiene l'intera cronologia dei download, i metadati degli episodi, le preferenze utente (lingua, download paralleli, cartella di destinazione, ecc.) e lo stato dell'archivio. **Questo file non deve essere cancellato.**

---

## 2.5 Aggiornamenti

Il sistema di aggiornamento funziona **sempre con il consenso dell'utente**, in tre passaggi:

1.  All'avvio (e su richiesta manuale con **Impostazioni → Avanzate → Controlla Aggiornamenti**) il software verifica se esiste una nuova versione. Se disponibile, appare un indicatore persistente **"Aggiornamento disponibile"** nella barra superiore dell'interfaccia.
2.  Il download del pacchetto parte **solo** premendo il pulsante **"Scarica"** dell'indicatore (o **"Scarica aggiornamento"** nelle Impostazioni). Nessun download viene avviato automaticamente.
3.  A download completato, l'indicatore diventa **"Aggiornamento pronto"**: premere **"Riavvia e installa"** per applicare l'aggiornamento. Anche l'installazione non avviene mai in automatico.

I dati dell'archivio non vengono modificati durante un aggiornamento: vengono sostituiti esclusivamente i file del programma. Al primo avvio dopo l'aggiornamento, la finestra **"Novità di questa versione"** riepiloga le modifiche introdotte.

*Nota:* Prima di aggiornare a una versione major (ad esempio da 1.4.x a 1.5.x), si consiglia di eseguire una copia manuale del file `feeddownloader.sqlite` in una posizione sicura.

---

*Vai al Capitolo 3 per una descrizione dettagliata degli elementi dell'interfaccia.*
