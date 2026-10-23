# Capitolo 7: NAS, dischi di rete e percorsi SMB

## 7.1 Perché i dischi di rete sono un caso a parte

Quasi tutte le applicazioni desktop lavorano senza problemi su `C:\` e `D:\` e diventano
imprevedibili quando la cartella di download è un NAS, una cartella condivisa di Windows o un’unità
SMB. Il motivo è tecnico: un disco di rete è meno affidabile di uno locale. Il NAS può essere spento
o in standby, la rete può avere un picco di latenza, le credenziali possono essere scadute. E
un’operazione su un percorso che non risponde blocca il programma per decine di secondi, congelando
l’interfaccia.

FeedDownloader Pro è costruito per non restare bloccato. Questo capitolo riguarda chi tiene
l’archivio su un NAS o su una cartella di rete.

---

## 7.2 Come viene verificato il percorso

Quando si sceglie una cartella con **Impostazioni → Download → Cambia cartella**, il programma
controlla che esista e che sia scrivibile. Il controllo gira fuori dal processo che disegna
l’interfaccia e ha un **limite di otto secondi**: scaduti quelli, il percorso viene dichiarato non
disponibile e compare l’avviso *La cartella di rete non risponde.* In nessun caso la finestra si
blocca in attesa. Se invece la cartella risponde ma non accetta scritture, l’avviso è *La cartella
scelta non è scrivibile.*

È un solo controllo, non una batteria di test: il programma chiede al sistema operativo se può
scrivere lì dentro e si accontenta della risposta. Nessun file di prova viene creato nella
cartella.

Il programma riconosce come percorsi di rete quelli che iniziano con `\\` o `//` (notazione UNC di
Windows e SMB) e, su Linux, quelli sotto `/mnt/` e `/media/`. Scelto un percorso di questo tipo,
ricorda con un avviso che *se la condivisione si scollega, i download in corso si fermano e si
riprendono dopo*. Un’unità mappata a lettera, per esempio `Z:`, viene trattata dal sistema come un
disco qualunque: la verifica di scrivibilità c’è lo stesso, ma il programma non la riconosce come di
rete e non mostra l’avviso.

*Perché proprio otto secondi.* I NAS di fascia domestica (Synology, QNAP, WD MyCloud) impiegano dai
tre ai sei secondi per uscire dallo standby. Otto bastano ad aspettarli e sono ancora pochi
abbastanza da non sembrare un blocco.

---

## 7.3 Impostare un percorso su NAS

**Percorso UNC diretto.** Nella forma `\\NomeServer\NomeCondivisione\Cartella`:

```text
\\MYNAS\Podcast\Archivio
\\192.168.1.100\media\podcast
\\NAS-SYNOLOGY\video\audio_archive
```

Si raggiunge con la finestra di selezione di **Cambia cartella**, che su Windows naviga anche le
risorse di rete; in alternativa si può scrivere il percorso nella barra degli indirizzi della
finestra di selezione.

**Unità mappata.** Se il NAS è già montato come unità (per esempio `Z:` verso `\\MYNAS\Podcast`),
basta scegliere `Z:\Archivio`. Funziona senza problemi; semplicemente il programma la tratta come un
disco locale, perché a quel punto è il sistema operativo a occuparsi della rete.

**Linux.** Le condivisioni SMB montate compaiono come cartelle normali (per esempio
`/mnt/nas/podcast`) e si usano direttamente.

**Spostare sul NAS un archivio esistente.** Se l’archivio contiene già degli episodi, alla scelta
della nuova cartella il programma chiede che cosa farne: **Sposta l’archivio** trasferisce le
cartelle dei podcast sul NAS, **Solo per i nuovi download** lascia i file dove sono e usa il NAS da
quel momento in poi. In entrambi i casi il programma continua a ritrovare ogni file (capitolo 9,
sezione 9.8).

---

## 7.4 Credenziali e autenticazione

Le credenziali del NAS si configurano nel sistema operativo, non dentro FeedDownloader Pro.

**Windows.** Aprire il percorso del NAS (`\\MYNAS\`) da Esplora file, inserire le credenziali quando
vengono richieste e spuntare la memorizzazione. Finiscono nel Gestore credenziali di Windows
(*Pannello di controllo → Gestione credenziali → Credenziali Windows*), e da quel momento il
programma accede alla condivisione come qualsiasi altra applicazione.

**Linux.** Montare la condivisione con le credenziali in `fstab`, oppure da un gestore file grafico,
oppure a mano con `mount -t cifs`.

---

## 7.5 Quando il percorso di rete non risponde

Davanti all’avviso *La cartella di rete non risponde.*, conviene controllare in quest’ordine.

**Il NAS è attivo?** Molti dispositivi domestici vanno in standby dopo un periodo di inattività.
Aprire il pannello di amministrazione dal browser è il modo più rapido per accertarsene.

**È raggiungibile in rete?** Da Prompt dei comandi o Terminale:

```text
ping 192.168.1.100
```

Se risponde, la rete di base funziona e il problema è più in alto.

**La condivisione si apre?** Provare `\\192.168.1.100\NomeCondivisione` direttamente dal gestore
file. Se non si apre di lì, il problema sta nella configurazione SMB del NAS e non nel programma.

**Si può scrivere?** Creare a mano un file nella cartella. Se il sistema rifiuta, l’utente con cui
si accede non ha permesso di scrittura su quella condivisione: si sistema dal pannello del NAS.

**C’è di mezzo un firewall?** SMB usa la porta 445, e in qualche caso la 139. Conviene verificare
che non siano bloccate sulla rete locale.

---

## 7.6 Ottenere buone prestazioni

Scrivere su un NAS significa far passare ogni byte due volte per la rete: la velocità dipende dalla
rete locale e dalla capacità di scrittura del dispositivo, non solo dalla connessione a Internet.

* **Meglio il cavo.** Il Wi-Fi aggiunge latenza e instabilità proprio nelle scritture. Per archivi
  grandi, una rete Gigabit Ethernet offre prestazioni significativamente migliori.
* **Meno download in parallelo.** Scrivere molti file insieme satura l’I/O del NAS: uno o due
  trasferimenti rendono spesso più di cinque.
* **Attenzione ai backup.** Se il NAS fa backup automatici a orari fissi, meglio non sovrapporre i
  lotti di download: si contendono lo stesso disco e rallentano entrambi.
* **Prima locale, poi in rete.** Per archivi molto grandi conviene scaricare su un disco veloce
  locale e spostare poi l’archivio sul NAS con **Sposta l’archivio**.
* **Verifica rapida per l’uso quotidiano.** Sulla rete, la verifica completa dell’archivio rilegge
  ogni byte e può durare ore; la verifica rapida controlla presenza e dimensione in pochi secondi
  (capitolo 9, sezione 9.5).

---

*Il capitolo 8 tratta i nomi dei file, i modelli e i metadati.*
