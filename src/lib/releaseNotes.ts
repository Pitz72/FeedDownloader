/**
 * v1.5.0 — Note di rilascio localizzate in-code (standard Titan).
 *
 * Punti salienti per versione, IT + EN (le due lingue dell'app dalla v1.4.2).
 * Il ChangelogModal le mostra al posto del Markdown quando la versione corrente
 * è presente qui; il Markdown (docs/changelog/<version>.md, solo IT) resta come
 * approfondimento e come fallback per le versioni non elencate.
 */

export type ReleaseNotesLang = 'it' | 'en';

export const RELEASE_NOTES: Record<string, Record<ReleaseNotesLang, string[]>> = {
    '1.5.0': {
        it: [
            'Il programma è libero: licenza MIT, sorgente pubblico su GitHub, nessun acquisto.',
            'I download si mettono in pausa e riprendono da dove erano: singolarmente o tutta la coda insieme.',
            'I download falliti si riprovano con un solo pulsante, senza rifare la selezione.',
            'L’Health Check ora ripara: ritrova i file rinominati a mano tramite l’impronta SHA-256 e li riaggancia.',
            'Se il database si danneggia, al riavvio l’app propone di recuperare feed, archivio e cronologia dal backup.',
            'Un indirizzo che risponde con una pagina web non viene più salvato come audio.',
            'Nuovo limite di dimensione per file nelle Impostazioni (0 = illimitato).',
            'La notifica sui nuovi episodi è cliccabile e apre il podcast interessato.',
            'Ctrl+K cerca anche tra gli episodi del feed aperto.',
            'Gli aggiornamenti chiedono il permesso: prima «Scarica», poi «Riavvia e installa». Niente download automatici.',
            'Icona nuova ovunque: finestra, tray, installer — ora senza il bordo bianco attorno agli angoli.',
        ],
        en: [
            'The program is free software: MIT licence, public source on GitHub, nothing to buy.',
            'Downloads can pause and resume right where they left off — one at a time or the whole queue.',
            'Failed downloads retry with a single button, no need to reselect anything.',
            'Health Check now repairs: manually renamed files are found again via their SHA-256 fingerprint and re-linked.',
            'If the database gets damaged, on restart the app offers to recover feeds, archive and history from the backup.',
            'A link that answers with a web page is no longer saved as audio.',
            'New per-file size cap in Settings (0 = unlimited).',
            'The new-episodes notification is clickable and opens the podcast in question.',
            'Ctrl+K also searches the open feed’s episodes.',
            'Updates ask permission: first “Download”, then “Restart & install”. No silent downloads.',
            'New icon everywhere: window, tray, installer — now without the white fringe around its corners.',
        ],
    },
    '1.4.2': {
        it: [
            'L’app ora parla due lingue: italiano e inglese. Le altre sei sono state rimosse.',
            'Annullare un download in coda non blocca più il conteggio del lotto né la notifica di fine.',
            'Dopo uno Stop nessuna riga resta più congelata sullo spinner.',
            'Cambiare feed durante «Sincronizza tutti» non ti riporta più al feed precedente.',
            'Aggiornata la libreria di auto-update: chiusa un’allerta di sicurezza sulle intestazioni.',
            'Rimuovere un episodio dalla cronologia agisce solo sul feed giusto, anche con identificativi condivisi.',
            'I file vengono richiesti non compressi: spariscono i falsi errori di integrità su server mal configurati.',
        ],
        en: [
            'The app now speaks two languages: Italian and English. The other six were removed.',
            'Cancelling a queued download no longer stalls the batch counter or the completion notice.',
            'After a Stop, no row stays frozen on a spinner anymore.',
            'Switching feeds during “Sync all” no longer drags you back to the previous feed.',
            'The auto-update library was upgraded, closing a security advisory about leaked headers.',
            'Removing an episode from history only touches the right feed, even with shared identifiers.',
            'Files are requested uncompressed: false integrity errors on misconfigured servers are gone.',
        ],
    },
    '1.4.1': {
        it: [
            'L’Health Check ora ricalcola davvero lo SHA-256 e segnala i file corrotti, non solo quelli mancanti.',
            'Senza dimensione dichiarata dal server, la barra di download diventa indeterminata invece di restare a 0%.',
            'Con il limite di velocità attivo, la barra segue i byte scritti su disco, non l’arrivo di rete.',
        ],
        en: [
            'Health Check now truly re-computes SHA-256 and flags corrupted files, not just missing ones.',
            'When the server declares no size, the download bar turns indeterminate instead of sitting at 0%.',
            'With a speed limit on, the bar follows bytes written to disk, not the faster network arrival.',
        ],
    },
    '1.4.0': {
        it: [
            'Indicatore di aggiornamento sempre visibile in alto, con «Riavvia e installa» a portata di clic.',
            'I feed si controllano da soli: all’avvio, a cicli regolari e al ritorno della connessione.',
            'Novità di versione e manuali PDF consultabili direttamente dentro l’app.',
            'Chiudere la finestra riduce l’app nel tray; il lavoro in background continua.',
            'Pulizia dei file temporanei .part orfani dalle Impostazioni.',
        ],
        en: [
            'An always-visible update indicator up top, with “Restart and install” one click away.',
            'Feeds check themselves: at startup, on a regular cycle, and when connectivity returns.',
            'Release notes and PDF manuals are now readable right inside the app.',
            'Closing the window minimises to the tray; background work carries on.',
            'Orphaned .part temp files can be cleaned up from Settings.',
        ],
    },
};

/** Notes for `version` in the closest language to `lang`, or null if unknown. */
export function getReleaseNotes(version: string, lang: string): string[] | null {
    const entry = RELEASE_NOTES[version];
    if (!entry) return null;
    const l: ReleaseNotesLang = lang.toLowerCase().startsWith('it') ? 'it' : 'en';
    return entry[l] ?? null;
}
