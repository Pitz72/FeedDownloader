# Capitolo 2: Installazione e Primo Avvio

## 2.1 Requisiti di Sistema

Runtime FeedDownloader Pro è un'applicazione desktop basata su tecnologia Electron. È autonoma e non richiede l'installazione di runtime aggiuntivi (Node.js, .NET, Java): tutto il necessario è incluso nel pacchetto di installazione.

**Requisiti minimi:**

| Sistema Operativo | Versione Minima | Architettura |
|-------------------|-----------------|--------------|
| Windows | 10 (build 1903) o Windows 11 | 64-bit (x64) |
| macOS | 11.0 Big Sur | Intel x64 o Apple Silicon (M1/M2/M3) |
| Linux | Ubuntu 22.04 LTS, Debian 11, Fedora 36 o distribuzioni equivalenti | 64-bit (x64) |

**Requisiti hardware consigliati:**
*   **RAM:** 4 GB (8 GB raccomandati per archivi di grandi dimensioni con più thread attivi)
*   **Spazio disco:** 200 MB per l'installazione del programma, più lo spazio necessario per l'archivio audio
*   **Connessione:** Banda larga (almeno 10 Mbps per utilizzare i download paralleli in modo efficace)

*Nota per gli utenti Linux:* Il software è distribuito in formato `.AppImage`, autocontenuto e utilizzabile su qualsiasi distribuzione moderna con librerie glibc aggiornate, senza procedura di installazione tradizionale.

---

## 2.2 Installazione su Windows

1.  Scaricare il file di installazione `Runtime-FeedDownloader-Pro-Setup-1.2.4.exe` dalla pagina delle release ufficiale.
2.  Fare doppio clic sul file scaricato per avviare il programma di installazione.
3.  Se Windows mostra un avviso **"Windows ha protetto il PC"** (SmartScreen), cliccare su **"Ulteriori informazioni"** e poi su **"Esegui comunque"**. Questo avviso è standard per i software distribuiti al di fuori del Microsoft Store che non hanno ancora raggiunto una soglia sufficiente di adozione per il sistema di reputazione di Windows.
4.  Seguire le istruzioni a schermo: accettare il contratto di licenza, scegliere la cartella di installazione e cliccare su **"Installa"**.
5.  Al termine, saranno disponibili un collegamento sul **Desktop** e una voce nel menu **Start**.

**Percorsi di installazione e dati:**
Il programma viene installato in `C:\Program Files\Runtime FeedDownloader Pro\`. Il database e i file di configurazione vengono salvati separatamente in `C:\Users\[TuoNome]\AppData\Roaming\FeedDownloaderPro\`. Questa separazione garantisce che la disinstallazione del programma non intacchi i dati dell'archivio.

---

## 2.3 Installazione su macOS

1.  Scaricare il file `Runtime-FeedDownloader-Pro-1.2.4.dmg`.
2.  Aprire il file `.dmg` con un doppio clic. Verrà visualizzata una finestra con l'icona dell'applicazione.
3.  Trascinare l'icona di **FeedDownloader Pro** nella cartella **Applicazioni**, come indicato dalla freccia nella finestra del `.dmg`.
4.  **Primo avvio su macOS:** Poiché il software non è distribuito tramite il Mac App Store, macOS mostrerà un avviso di sicurezza alla prima apertura. Per procedere:
    *   Andare in **Impostazioni di Sistema → Privacy e Sicurezza**.
    *   Nella sezione "Sicurezza" sarà visibile il messaggio *"FeedDownloader Pro è stato bloccato..."*.
    *   Cliccare su **"Apri comunque"** e poi su **"Apri"** nella finestra di conferma.
    *   Agli avvii successivi, il software si aprirà normalmente con un doppio clic.

*Nota per utenti Apple Silicon (M1/M2/M3):* È disponibile una versione nativa ARM. Per prestazioni ottimali, scaricare il file `.dmg` con suffisso `-arm64`. La versione x64 è utilizzabile tramite Rosetta 2, ma la versione ARM è più efficiente.

---

## 2.4 Installazione su Linux

1.  Scaricare il file `Runtime-FeedDownloader-Pro-1.2.4.AppImage`.
2.  Rendere il file eseguibile. Le modalità disponibili sono:
    *   **Tramite interfaccia grafica:** clic destro sul file → Proprietà → scheda Permessi → spunta "Consenti l'esecuzione del file come programma".
    *   **Tramite terminale:** `chmod +x Runtime-FeedDownloader-Pro-1.2.4.AppImage`
3.  Avviare il file con un doppio clic oppure da terminale: `./Runtime-FeedDownloader-Pro-1.2.4.AppImage`

**Integrazione con il desktop (opzionale):**
Per aggiungere FeedDownloader Pro al launcher e al menu delle applicazioni, è possibile usare **AppImageLauncher** (disponibile nei repository della maggior parte delle distribuzioni), che integra automaticamente i file AppImage nel sistema.

*Nota per ambienti sandbox:* Su distribuzioni con **Flatpak** o ambienti con restrizioni di accesso al filesystem, il software potrebbe non raggiungere i percorsi di rete SMB. In tal caso, verificare che il filesystem di rete sia montato e accessibile dal gestore file prima di avviare il programma.

---

## 2.5 Il Primo Avvio

Alla prima apertura, il software è immediatamente operativo. Non è richiesta alcuna configurazione iniziale, né la creazione di un account o l'inserimento di una licenza. L'interfaccia si presenta con la barra di inserimento URL al centro e la lista degli episodi vuota.

**File creati al primo avvio:**
Il programma genera automaticamente nella cartella dati utente i seguenti file:
*   `feeddownloader.db` — Il database SQLite principale. Contiene l'intera cronologia dei download, i metadati degli episodi e lo stato dell'archivio. **Questo file non deve essere cancellato.**
*   `settings.json` — Le preferenze utente (lingua, numero di thread, cartella di destinazione predefinita, ecc.).
*   `logs/` — La cartella dei file di log, utile per la diagnostica in caso di problemi.

---

## 2.6 Aggiornamenti

Quando è disponibile una nuova versione, il software mostra una notifica nella barra inferiore dell'interfaccia. L'installazione dell'aggiornamento richiede sempre il consenso esplicito dell'utente.

Prima di aggiornare, il software esegue automaticamente un backup del database. In ogni caso, i dati dell'archivio non vengono modificati durante un aggiornamento: vengono sostituiti esclusivamente i file del programma.

*Nota:* Prima di aggiornare a una versione major (ad esempio da 1.2.x a 1.3.x), si consiglia di eseguire una copia manuale del file `feeddownloader.db` in una posizione sicura.

---

*Vai al Capitolo 3 per una descrizione dettagliata degli elementi dell'interfaccia.*
