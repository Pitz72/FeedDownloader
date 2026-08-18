# Capitolo 7: NAS, dischi di rete e percorsi SMB

## 7.1 Perché i dischi di rete sono un caso a parte

Quasi tutte le applicazioni desktop se la cavano bene con `C:\` e `D:\` e diventano imprevedibili
quando la destinazione è un NAS, una cartella condivisa di Windows o un’unità SMB. Il motivo è
tecnico: un disco di rete è meno affidabile di uno locale. Il NAS può essere spento o addormentato,
la rete può avere un picco di latenza, le credenziali possono essere scadute. E un’operazione su un
percorso che non risponde blocca il programma per decine di secondi, congelando l’interfaccia.

FeedDownloader Pro è costruito per non farsi prendere in ostaggio. Se il tuo archivio vive su un NAS,
questo capitolo ti riguarda.

---

## 7.2 Come viene verificato il percorso

Quando scegli una cartella di destinazione, il programma controlla che esista e che sia scrivibile.
Il controllo gira fuori dal processo che disegna l’interfaccia e ha un **limite di otto secondi**:
scaduti quelli, il percorso viene dichiarato non disponibile e compare un avviso. In nessun caso la
finestra si blocca in attesa.

È un solo controllo, non una batteria di test: il programma chiede al sistema operativo se può
scrivere lì dentro e si accontenta della risposta. Nessun file di prova viene creato nella tua
cartella.

Il programma riconosce come percorsi di rete quelli che iniziano con `\\` o `//` (notazione UNC di
Windows e SMB) e, su Linux e macOS, quelli sotto `/mnt/`, `/media/` e `/Volumes/`. Su questi mostra
un avviso dedicato quando qualcosa non torna. Un’unità mappata a lettera, per esempio `Z:`, viene
trattata dal sistema come un disco qualunque: la verifica di scrivibilità c’è lo stesso, ma il
programma non la riconosce come di rete e non te lo segnala.

*Perché proprio otto secondi.* I NAS di fascia domestica (Synology, QNAP, WD MyCloud) impiegano dai
tre ai sei secondi per svegliarsi dallo standby. Otto bastano ad aspettarli e sono ancora pochi
abbastanza da non sembrare un blocco.

---

## 7.3 Impostare un percorso su NAS

**Percorso UNC diretto.** Nella forma `\\NomeServer\NomeCondivisione\Cartella`:

```
\\MYNAS\Podcast\Archivio
\\192.168.1.100\media\podcast
\\NAS-SYNOLOGY\video\audio_archive
```

Si può scrivere a mano o raggiungere con la finestra di selezione, che su Windows naviga anche le
risorse di rete.

**Unità mappata.** Se il NAS è già montato come unità (per esempio `Z:` verso `\\MYNAS\Podcast`),
basta scegliere `Z:\Archivio`. Funziona senza problemi; semplicemente il programma la tratta come un
disco locale, perché a quel punto è il sistema operativo a occuparsi della rete.

**Linux.** Le condivisioni SMB montate compaiono come cartelle normali (per esempio
`/mnt/nas/podcast`) e si usano direttamente.

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

Davanti all’avviso di percorso non raggiungibile, conviene controllare in quest’ordine.

**Il NAS è sveglio?** Molti dispositivi domestici vanno in standby dopo un periodo di inattività. Un
giro nel pannello di amministrazione dal browser è il modo più rapido per accertarsene.

**È raggiungibile in rete?** Da Prompt dei comandi o Terminale:

```
ping 192.168.1.100
```

Se risponde, la rete di base funziona e il problema è più in alto.

**La condivisione si apre?** Provare `\\192.168.1.100\NomeCondivisione` direttamente dal gestore
file. Se non si apre di lì, il problema sta nella configurazione SMB del NAS e non nel programma.

**Puoi scriverci?** Creare a mano un file nella cartella di destinazione. Se il sistema rifiuta,
l’utente con cui accedi non ha permesso di scrittura su quella condivisione: si sistema dal pannello
del NAS.

**C’è di mezzo un firewall?** SMB usa la porta 445, e in qualche caso la 139. Vale la pena
verificare che non siano bloccate sulla rete locale.

---

## 7.6 Ottenere buone prestazioni

Scrivere su un NAS significa far passare ogni byte due volte per la rete: la velocità dipende dalla
LAN e dalla capacità di scrittura del dispositivo, non solo dalla connessione a Internet.

*   **Meglio il cavo.** Il Wi-Fi aggiunge latenza e instabilità proprio nelle scritture. Per archivi
    grandi, una Gigabit Ethernet cambia le cose.
*   **Meno download in parallelo.** Scrivere molti file insieme satura l’I/O del NAS: uno o due
    trasferimenti rendono spesso più di cinque.
*   **Attenzione ai backup.** Se il NAS fa backup automatici a orari fissi, meglio non sovrapporre i
    lotti di download: si contendono lo stesso disco e rallentano entrambi.
*   **Prima locale, poi in rete.** Per archivi molto grandi conviene scaricare su un disco veloce
    locale e spostare i file sul NAS a lotto finito.

---

*Il capitolo 8 tratta i nomi dei file, i template e i metadati.*
