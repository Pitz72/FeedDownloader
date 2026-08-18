# Runtime FeedDownloader Pro

Version 1.4.1

Le moyen le plus puissant d'archiver vos podcasts.

## Qu'est-ce que c'est

Runtime FeedDownloader Pro est un outil professionnel conçu pour les archivistes, les éditeurs et les passionnés qui ont besoin de télécharger des catalogues entiers de podcasts pour une conservation hors ligne.
Contrairement aux lecteurs classiques, ce logiciel est optimisé pour le téléchargement massif (Batch), la résilience réseau et l'organisation structurée sur le système de fichiers.

## Fonctionnalités Principales

### Gestion des flux

* **Bibliothèque de Flux Permanente :** Gérez plusieurs podcasts simultanément avec une barre latérale redimensionnable, recherche et tri A–Z ; les flux sont conservés entre les sessions.
* **Badge « À Télécharger » :** Indicateur numérique sur chaque flux signalant combien d'épisodes ne figurent pas encore dans votre archive.
* **Détection des Nouveaux Épisodes :** Basée sur les GUID des épisodes, et non sur un simple comptage — les notifications restent fiables même avec les podcasts « à fenêtre glissante » qui suppriment les anciens épisodes.
* **Flux Paginés (RFC 5005) :** Suit automatiquement les liens vers les pages suivantes du flux, reconstruisant le catalogue complet même lorsque le fournisseur (Apple Podcasts, Libsyn, Blubrry…) ne publie que les épisodes récents sur la première page.
* **Sync All avec progression par flux :** Actualise tous les flux en parallèle ; chaque vignette affiche son propre état en temps réel.
* **Actualisation Automatique des Flux :** Minuteur en arrière-plan (6/12/24 h) avec notification système pour les nouveaux épisodes.

### Téléchargements et file d'attente

* **Téléchargement par Lots :** Téléchargez des centaines d'épisodes en un clic, avec gestion intelligente de la file d'attente et concurrence configurable (1, 3 ou 5 téléchargements parallèles).
* **Limite de Vitesse :** Bande passante maximale de téléchargement configurable dans les Paramètres (0 = illimitée).
* **Panneau de Téléchargement :** Tiroir latéral avec file d'attente, vitesse (Ko/s), temps estimé et journal d'erreurs pour chaque lot. Bouton flottant pour le rouvrir sans perdre vos téléchargements.
* **Vitesse et Temps Estimé :** Affichés directement dans la ligne de chaque épisode en cours de téléchargement.
* **Annulation Individuelle :** Annulez un téléchargement de la file d'attente sans arrêter les autres.
* **Retélécharger un Épisode :** Possibilité de retélécharger un épisode déjà présent dans l'archive.
* **Sélection Multiple :** Ctrl+clic / Maj+clic pour sélectionner des plages d'épisodes et les télécharger ensemble.

### Interface et navigation

* **Design Moderne « Electric Azure on Deep Dark » :** Interface sombre entièrement repensée, rapide et lisible.
* **Palette de Commandes (Ctrl+K) :** Accès rapide à toutes les actions principales et aux flux enregistrés sans utiliser la souris.
* **Panneau de Détail d'Épisode :** Un clic sur un épisode ouvre un panneau avec les métadonnées complètes, les données d'archive et les notes de l'émission.
* **Tri des Épisodes :** Triez la liste par date, titre ou durée, en plus de l'ordre original du flux.
* **Vue Archive :** Onglet dédié pour consulter, rechercher et trier l'intégralité de votre archive d'épisodes téléchargés.
* **Export de Playlists M3U :** Génère des playlists locales compatibles avec n'importe quel lecteur audio.
* **Prise en Main Guidée :** Conseils au premier lancement pour démarrer immédiatement.

### Résilience et intégrité

* **Moteur « Database-First » :** Le système se souvient de ce que vous avez téléchargé, indépendamment des fichiers présents sur le disque (SQLite).
* **Téléchargements Résilients :** Délai de connexion (30 s) et détection de blocage (60 s), nouvelles tentatives automatiques avec backoff exponentiel, fichiers `.part` anti-corruption.
* **Intégrité des Données :** Calcul automatique SHA-256 et extraction des métadonnées audio (bitrate, fréquence d'échantillonnage) après le téléchargement.
* **Health Check :** Restauration automatique des épisodes manquants sur le disque avec resynchronisation de la base de données.

### Organisation et portabilité

* **Extension Réelle :** Détecte et enregistre le format réel du fichier (`.m4a`, `.ogg`, `.opus`, `.flac`…) au lieu de forcer systématiquement `.mp3`.
* **Tags ID3 avec Pochette :** Écrit automatiquement les tags ID3 dans les fichiers `.mp3`, en donnant la priorité à la pochette spécifique de l'épisode lorsqu'elle est disponible.
* **Modèles de Renommage :** Jetons personnalisables (`{{title}}`, `{{date}}`, `{{podcast}}`) pour des noms de fichiers organisés.
* **Portabilité des Données :** Importez et exportez vos flux via le standard OPML. Générez des rapports CSV détaillés de votre archive.
* **Migration d'Archive :** Déplacez toute la bibliothèque vers un nouveau chemin/disque avec mise à jour automatique de la base de données.
* **Support NAS/SMB :** Validation native et délai d'attente (8 s) pour les chemins réseau, sans blocage de l'interface.

### Système et sécurité

* **Mise à Jour Automatique avec Notification :** Mises à jour automatiques via GitHub Releases, avec notification système lorsqu'une mise à jour est disponible et lorsqu'elle est prête à être installée.
* **Sécurité des URL :** Validation anti-SSRF au niveau de la connexion — bloque les protocoles dangereux, les IP privées, les adresses réservées et les redirections hostiles, pour chaque page de flux.
* **Smart Truncate :** Renomme automatiquement les fichiers pour éviter les erreurs de longueur de chemin sous Windows.
* **Performance :** Liste virtualisée — gère les flux comptant des milliers d'épisodes sans ralentissements.
* **Aide Intégrée :** Guide utilisateur consultable directement dans l'application.

## Certification Multilingue

Le logiciel prend entièrement en charge **8 langues** : Italiano (IT), English (EN), Français (FR), Deutsch (DE), Español (ES), Português (PT), Русский (RU), 中文 (ZH). L'interface, les notifications système et la documentation sont disponibles dans toutes les langues.

## Instructions Rapides

1. **Analyser :** Collez l'URL du flux RSS dans la barre principale et appuyez sur « Analyser ». Le flux est ajouté à la barre latérale pour les accès futurs.
2. **Choisir le Dossier :** Dans Paramètres → Archive, définissez le dossier où enregistrer les fichiers. Le chemin est toujours visible au bas de la barre latérale.
3. **Télécharger :** Utilisez le bouton « Tout Télécharger » pour le catalogue complet, ou sélectionnez les épisodes avec Ctrl+clic et utilisez « Télécharger la Sélection ».
4. **Surveiller :** Le Panneau de Téléchargement s'ouvre automatiquement avec la file d'attente, la vitesse et le temps estimé pour chaque fichier.
5. **Gérer :** Utilisez Ctrl+K pour la Palette de Commandes, ou les Paramètres (⚙) pour la concurrence, la limite de vitesse, les modèles, l'OPML et les statistiques d'archive.

## Configuration Requise

Le logiciel est multiplateforme et fonctionne nativement sur :

* **Windows** : 10/11 (64 bits) — installateur NSIS (`.exe`)
* **Linux** : Distributions modernes (Ubuntu 20.04+, Debian 11+, Fedora 34+) — `.AppImage` ou `.deb`
* **macOS** : 11.0 (Big Sur) ou supérieur — pris en charge par le code, mais les paquets macOS ne sont pas distribués actuellement
* Connexion Internet active

## Téléchargement

Les paquets officiels sont disponibles sur [GitHub Releases](https://github.com/Ecosystem-Runtime/FeedDownloader-Releases/releases) et sont générés via GitHub Actions.

| Plateforme | Format | Remarques |
|---|---|---|
| Windows 10/11 | `.exe` (installateur NSIS) | Logiciel non signé — voir la note SmartScreen |
| Linux | `.AppImage` / `.deb` | Aucune signature requise |

**Windows — avertissement SmartScreen :** Au premier lancement, Windows Defender peut afficher l'écran « Windows a protégé votre ordinateur — Éditeur inconnu ». Le logiciel est sûr. Cliquez sur **Informations complémentaires** → **Exécuter quand même**.

**macOS :** Les paquets `.dmg` ne sont pas publiés actuellement ; il est possible de compiler l'application à partir du code source.

*Développé avec les technologies Electron et React pour garantir performance et stabilité.*
