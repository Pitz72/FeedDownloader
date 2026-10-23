# Capitolo 2: Installazione e primo avvio

## 2.1 Requisiti di sistema

Runtime FeedDownloader Pro è un’applicazione desktop costruita su Electron. È autonoma: non richiede
Node.js, .NET o Java installati sulla macchina, perché tutto il necessario viaggia nel pacchetto.

Requisiti minimi:

| Sistema operativo | Versione minima | Architettura |
|-------------------|-----------------|--------------|
| Windows | 10 (build 1903) o Windows 11 | 64 bit (x64) |
| Linux | Ubuntu 22.04 LTS, Debian 11, Fedora 36 o equivalenti | 64 bit (x64) |

Hardware consigliato:

* **Memoria:** 4 GB, meglio 8 GB per archivi grandi con molti download in parallelo
* **Disco:** 200 MB per il programma, più lo spazio dell’archivio audio
* **Schermo:** la finestra non scende sotto i 960 × 620 pixel; l’impaginazione completa, con tutti i
  pannelli affiancati, si apprezza da 1366 pixel di larghezza in su
* **Rete:** banda larga, almeno 10 Mbps perché i download paralleli abbiano senso

*Nota per Linux.* Il software è distribuito come `.AppImage` (autocontenuto, funziona su qualsiasi
distribuzione recente senza installazione) e come `.deb` per le distribuzioni derivate da Debian e
Ubuntu.

*Nota su macOS.* Non esistono build ufficiali per macOS e non sono previste. Il codice sorgente è
compilabile anche su Mac, ma la compilazione è a carico di chi la esegue e non è supportata.

---

## 2.2 Installazione su Windows

1. Scaricare `Runtime-FeedDownloader-Pro-1.6.0.exe` dalla pagina delle release del progetto.
2. Fare doppio clic sul file scaricato.
3. Se compare l’avviso **Windows ha protetto il PC** (SmartScreen), premere **Ulteriori
   informazioni** e poi **Esegui comunque**. L’avviso è normale per i programmi distribuiti fuori
   dal Microsoft Store e privi di firma commerciale: riguarda la reputazione del file, non il suo
   contenuto.
4. Scegliere la cartella di installazione e premere **Installa**.
5. Al termine il collegamento si trova sul desktop e nel menu Start.

**Dove finiscono i file.** L’installazione è per singolo utente e non richiede privilegi di
amministratore: il programma va in
`C:\Users\[NomeUtente]\AppData\Local\Programs\Runtime FeedDownloader Pro\`, salvo diversa scelta
nella schermata di installazione. Il database vive altrove, in
`C:\Users\[NomeUtente]\AppData\Roaming\Runtime FeedDownloader Pro\`, così disinstallare il
programma non tocca l’archivio.

---

## 2.3 Installazione su Linux

1. Scaricare `Runtime-FeedDownloader-Pro-1.6.0.AppImage`, oppure il pacchetto `.deb` per Debian e
   Ubuntu.
2. Rendere eseguibile l’AppImage, in uno dei due modi:
   * da interfaccia grafica: clic destro sul file → Proprietà → Permessi → spuntare l’esecuzione
     come programma;
   * da terminale: `chmod +x Runtime-FeedDownloader-Pro-1.6.0.AppImage`.
3. Avviarlo con un doppio clic o da terminale: `./Runtime-FeedDownloader-Pro-1.6.0.AppImage`.

Per il pacchetto Debian: `sudo dpkg -i Runtime-FeedDownloader-Pro-1.6.0.deb`, oppure il gestore
pacchetti grafico della distribuzione.

**Integrazione con il desktop.** Per avere l’icona nel menu delle applicazioni si può usare
**AppImageLauncher**, presente nei repository della maggior parte delle distribuzioni, che registra
gli AppImage nel sistema.

*Nota per gli ambienti sandbox.* Con **Flatpak** o altri ambienti che limitano l’accesso al
filesystem, il programma potrebbe non vedere i percorsi di rete SMB. In quel caso conviene
verificare che la condivisione sia montata e raggiungibile dal gestore file prima di avviare
l’applicazione.

*Nota per GNOME.* L’icona nell’area di notifica richiede l’estensione AppIndicator. Senza area di
notifica, chiudere la finestra chiude anche il programma (sezione 3.13).

---

## 2.4 Il primo avvio

### La schermata d’ingresso

All’apertura compare la schermata d’ingresso: il marchio del programma dentro un’orbita animata, il
nome e una riga che riassume a cosa serve. L’animazione dura meno di quattro secondi e poi si ferma;
con **Riduci animazioni ed effetti** attivo (capitolo 10), la schermata compare già composta.

Nella stessa schermata si trovano:

* la scelta della **Lingua dell’interfaccia**, **Italiano** o **English**: al primo avvio il
  programma propone la lingua del sistema operativo;
* una riga di stato sugli aggiornamenti (*Ricerca aggiornamenti…*, oppure la versione disponibile);
* il pulsante **Entra in FeedDownloader**, che porta all’interfaccia; ha già il focus, quindi basta
  premere `Invio`;
* tre collegamenti: **Guida** (la documentazione integrata), **Manuale** (questo manuale in PDF) e
  **Sostieni il progetto**.

La schermata torna a ogni apertura del programma.

### La libreria vuota

Dopo l’ingresso il software è già operativo. Non serve alcuna configurazione, nessun account,
nessun codice di licenza. Con la libreria vuota, la vista **Libreria** mostra un riquadro di
benvenuto con due pulsanti, **Aggiungi feed** e **Importa da OPML**, e i tre passi per cominciare:
aggiungere un feed, scegliere la cartella, archiviare.

**La cartella di download predefinita.** Finché non se ne sceglie un’altra, i file finiscono in
`Documenti\FeedDownloader\downloads` (su Linux `~/Documents/FeedDownloader/downloads` o
l’equivalente localizzato). La cartella si cambia da **Impostazioni → Download → Cambia cartella**
(capitolo 4, sezione 4.3).

**File creati al primo avvio.** Nella cartella dati dell’utente compare un solo file:

* `feeddownloader.sqlite`, il database. Contiene la cronologia dei download, l’archivio con le
  impronte, l’elenco dei feed, la coda salvata e le preferenze (cartella di download, download
  paralleli, limiti di banda e di dimensione, intervallo dei controlli, dimensione
  dell’interfaccia). **Questo file non va cancellato.**

La lingua dell’interfaccia fa eccezione: viene ricordata dal programma insieme alle preferenze
grafiche, non dentro il database, e si cambia dalla schermata d’ingresso o da **Impostazioni →
Generale**.

---

## 2.5 Aggiornamenti

Gli aggiornamenti richiedono sempre il consenso esplicito. Il percorso è in tre passi.

1. All’avvio, e su richiesta da **Impostazioni → Informazioni → Cerca aggiornamenti**, il programma
   verifica se esiste una versione più recente. Se la trova, nella barra superiore compare l’avviso
   **Disponibile la versione X.Y.Z**, accompagnato da una notifica di sistema. L’avviso resta
   finché non si interviene; la × (**Nascondi l’avviso**) lo toglie fino al riavvio o al controllo
   successivo.
2. Lo scaricamento parte **solo** premendo **Scarica** sull’avviso o nelle Impostazioni. Durante lo
   scaricamento l’avviso diventa **Scaricamento aggiornamento N%**. Nulla viene scaricato di
   iniziativa del programma.
3. A scaricamento completato l’avviso diventa **Aggiornamento pronto**: premendo **Riavvia e
   installa** il programma si chiude, applica l’aggiornamento e riparte. Nemmeno l’installazione
   avviene da sola, e non scatta alla chiusura dell’applicazione.

L’aggiornamento sostituisce i file del programma e non tocca l’archivio. Al primo avvio della nuova
versione, la finestra **Novità** riepiloga cosa è cambiato; si riapre in qualsiasi momento da
**Impostazioni → Informazioni → Novità**.

**Passaggio dalla 1.5 alla 1.6.** Alla prima apertura la 1.6.0 aggiunge al database le colonne e
le tabelle nuove (la cartella di ogni episodio, l’archivio automatico, la coda salvata) e completa i
dati esistenti: gli episodi già archiviati vengono associati alla cartella di download in uso in
quel momento. Nessun dato viene tolto.

*Consiglio.* Prima di un salto di versione importante, come questo, conviene copiare
`feeddownloader.sqlite` in un posto sicuro. Chi aveva attivo il tagging ID3 nelle versioni
precedenti trova nella sezione 9.5 come aggiornare le impronte dei file già scaricati.

---

*Il capitolo 3 descrive l’interfaccia vista per vista.*
