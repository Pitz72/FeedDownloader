# Runtime FeedDownloader Pro
**Le moyen le plus puissant d'archiver vos podcasts.**

## Qu'est-ce que c'est
Runtime FeedDownloader Pro est un outil professionnel conçu pour les archivistes, les éditeurs et les passionnés qui ont besoin de télécharger des catalogues entiers de podcasts pour la conservation hors ligne.
Contrairement aux lecteurs standard, ce logiciel est optimisé pour le téléchargement massif (Batch), la résilience du réseau et l'organisation du système de fichiers.

## Caractéristiques Principales
- **Moteur "Database-First":** Le système se souvient de ce que vous avez téléchargé, indépendamment des fichiers sur le disque.
- **Téléchargement par Lot:** Téléchargez des centaines d'épisodes en un seul clic, avec une gestion intelligente de la file d'attente.
- **Portabilité des Données:** Importez et exportez vos flux via le standard OPML. Générez des rapports CSV détaillés de votre archive.
- **Sécurité Avancée:** Système anti-corruption pour les disques pleins, mode hors ligne intelligent et validation des flux entrants.
- **Aide Intégrée:** Guide utilisateur complet accessible directement dans l'application.
- **Smart Truncate:** Renomme automatiquement les fichiers pour éviter les erreurs de longueur de chemin sur Windows.
- **Résilience:** Réessaye automatiquement les téléchargements si la connexion est interrompue.
- **Performance:** Gère des flux avec des milliers d'épisodes sans ralentissement.

## Instructions Rapides
1.  **Analyser:** Collez l'URL du flux RSS dans la barre principale et appuyez sur "Analyser".
2.  **Choisir le Dossier:** Cliquez sur l'icône du dossier pour décider où enregistrer l'archive.
3.  **Télécharger:** Utilisez le bouton "Tout Télécharger" pour l'archive entière ou téléchargez les épisodes individuels manuellement.
4.  **Gérer:** Utilisez les Paramètres (icône d'engrenage) pour gérer la langue ou réinitialiser la base de données.

## Configuration Requise
Le logiciel est multi-plateforme et fonctionne nativement sur :
- **Windows**: 10/11 (64-bit)
- **macOS**: 11.0 (Big Sur) ou supérieur (Intel & Apple Silicon)
- **Linux**: Distributions modernes (Ubuntu, Debian, Fedora) via AppImage ou .deb
- Connexion Internet active

## Téléchargement

Les paquets officiels pour toutes les plateformes sont disponibles sur [GitHub Releases](https://github.com/Pitz72/FeedDownloader/releases) et sont générés automatiquement via GitHub Actions.

| Plateforme | Format | Notes |
|---|---|---|
| Windows 10/11 | `.exe` (installateur NSIS) | Non signé — voir note SmartScreen |
| macOS 11+ | `.dmg` / `.zip` | Non signé — voir note Gatekeeper |
| Linux | `.AppImage` / `.deb` | Aucune signature requise |

**Windows — avertissement SmartScreen :** Au premier lancement, Windows Defender peut afficher l'écran « Windows a protégé votre PC — Éditeur inconnu ». Le logiciel est sûr. Cliquez sur **Plus d'informations** → **Exécuter quand même**.

**macOS — avertissement Gatekeeper :** Le paquet n'est pas signé avec un certificat Apple Developer. Au premier lancement, macOS peut le bloquer. Pour l'ouvrir : clic droit sur l'application → **Ouvrir**, ou aller dans **Réglages système → Confidentialité et sécurité → Ouvrir quand même**.

*Développé avec la technologie Electron & React pour garantir performance et stabilité.*
