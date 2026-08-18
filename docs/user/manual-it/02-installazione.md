# Capitolo 2: Installazione e primo avvio

## 2.1 Requisiti di sistema

Runtime FeedDownloader Pro è un’applicazione desktop costruita su Electron. È autonoma: non richiede
Node.js, .NET o Java installati sulla macchina, perché tutto il necessario viaggia nel pacchetto.

**Requisiti minimi**

| Sistema operativo | Versione minima | Architettura |
|-------------------|-----------------|--------------|
| Windows | 10 (build 1903) o Windows 11 | 64 bit (x64) |
| Linux | Ubuntu 22.04 LTS, Debian 11, Fedora 36 o equivalenti | 64 bit (x64) |

**Hardware consigliato**

*   **Memoria:** 4 GB, meglio 8 GB per archivi grandi con più download in parallelo
*   **Disco:** 200 MB per il programma, più lo spazio dell’archivio audio
*   **Rete:** banda larga, almeno 10 Mbps perché i download paralleli abbiano senso

*Nota per Linux.* Il software è distribuito come `.AppImage` (autocontenuto, funziona su qualsiasi
distribuzione recente senza installazione) e come `.deb` per le distribuzioni derivate da
Debian e Ubuntu.

*Nota su macOS.* Non esistono build ufficiali per macOS e non sono previste. Il codice sorgente è
compilabile anche su Mac, ma la compilazione è a carico di chi la esegue e non è supportata.

---

## 2.2 Installazione su Windows

1.  Scaricare `Runtime-FeedDownloader-Pro-1.5.0.exe` dalla pagina delle release.
2.  Fare doppio clic sul file scaricato.
3.  Se compare l’avviso **Windows ha protetto il PC** (SmartScreen), premere **Ulteriori
    informazioni** e poi **Esegui comunque**. L’avviso è normale per i programmi distribuiti fuori
    dal Microsoft Store e privi di firma commerciale: riguarda la reputazione del file, non il suo
    contenuto.
4.  Scegliere la cartella di installazione e premere **Installa**.
5.  Al termine trovi il collegamento sul desktop e la voce nel menu Start.

**Dove finiscono i file.** L’installazione è per singolo utente e non richiede privilegi di
amministratore: il programma va in `C:\Users\[TuoNome]\AppData\Local\Programs\Runtime FeedDownloader Pro\`,
salvo diversa scelta nella schermata di installazione. Il database vive altrove, in
`C:\Users\[TuoNome]\AppData\Roaming\Runtime FeedDownloader Pro\`, così disinstallare il programma non
tocca l’archivio.

---

## 2.3 Installazione su Linux

1.  Scaricare `Runtime-FeedDownloader-Pro-1.5.0.AppImage`, oppure il pacchetto `.deb` per
    Debian e Ubuntu.
2.  Rendere eseguibile l’AppImage, in uno dei due modi:
    *   da interfaccia grafica: clic destro sul file → Proprietà → Permessi → spuntare l’esecuzione
        come programma;
    *   da terminale: `chmod +x Runtime-FeedDownloader-Pro-1.5.0.AppImage`
3.  Avviarlo con un doppio clic o da terminale:
    `./Runtime-FeedDownloader-Pro-1.5.0.AppImage`

Per il pacchetto Debian: `sudo dpkg -i Runtime-FeedDownloader-Pro-1.5.0.deb`, oppure il gestore
pacchetti grafico della distribuzione.

**Integrazione con il desktop.** Per avere l’icona nel menu delle applicazioni si può usare
**AppImageLauncher**, presente nei repository della maggior parte delle distribuzioni, che registra
gli AppImage nel sistema.

*Nota per gli ambienti sandbox.* Con **Flatpak** o altri ambienti che limitano l’accesso al
filesystem, il programma potrebbe non vedere i percorsi di rete SMB. In quel caso conviene
verificare che la condivisione sia montata e raggiungibile dal gestore file prima di avviare
l’applicazione.

---

## 2.4 Il primo avvio

All’avvio compare una breve schermata di presentazione con il nome del programma e due pulsanti,
**Avvia Applicazione** e **Salta**: il secondo porta subito all’interfaccia, il primo fa lo stesso
al termine dell’animazione. La schermata torna a ogni apertura del programma.

Poi il software è già operativo. Non serve alcuna configurazione, nessun account, nessun codice di
licenza. L’interfaccia si presenta con la barra di inserimento URL in alto e la lista degli episodi
vuota.

**File creati al primo avvio.** Nella cartella dati dell’utente compare un solo file:

*   `feeddownloader.sqlite`, il database. Contiene la cronologia dei download, i metadati degli
    episodi, l’elenco dei feed e le preferenze (cartella di destinazione, download paralleli, limiti
    di velocità e dimensione, intervallo di aggiornamento). **Questo file non va cancellato.**

La lingua dell’interfaccia fa eccezione: viene ricordata dal programma insieme alle preferenze
grafiche, non dentro il database, e si sceglie da **Impostazioni → Generale**.

---

## 2.5 Aggiornamenti

Gli aggiornamenti richiedono sempre il consenso esplicito. Il percorso è in tre passi.

1.  All’avvio, e su richiesta da **Impostazioni → Avanzate → Controlla Aggiornamenti**, il programma
    verifica se esiste una versione più recente. Se la trova, nella barra superiore compare
    l’indicatore **Aggiornamento disponibile**, che resta lì finché non si interviene (si può
    chiudere con la × e ricompare al riavvio o al controllo successivo).
2.  Lo scaricamento parte **solo** premendo **Scarica** sull’indicatore, oppure **Scarica
    aggiornamento** nelle Impostazioni. Nulla viene scaricato di iniziativa del programma.
3.  A scaricamento completato l’indicatore diventa **Aggiornamento pronto**: premendo **Riavvia e
    installa** il programma si chiude, applica l’aggiornamento e riparte. Nemmeno l’installazione
    avviene da sola, e non scatta alla chiusura dell’applicazione.

L’aggiornamento sostituisce i file del programma e non tocca l’archivio. Al primo avvio della nuova
versione, la finestra **Novità di questa versione** riepiloga cosa è cambiato.

*Consiglio.* Prima di un salto di versione importante (per esempio da 1.4.x a 1.5.x), vale la pena
copiare `feeddownloader.sqlite` in un posto sicuro.

---

*Il capitolo 3 descrive l’interfaccia elemento per elemento.*
