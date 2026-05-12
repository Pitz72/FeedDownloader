# Bienvenue sur Runtime FeedDownloader Pro
**Le moyen le plus puissant et le plus résilient d'archiver vos podcasts.**

## Qu'est-ce que c'est ?
Runtime FeedDownloader Pro est l'outil professionnel de l'**Ecosystem Runtime | Digital Core** conçu pour les archivistes, les éditeurs et les passionnés qui ont besoin de télécharger des catalogues complets de podcasts pour une conservation hors ligne.

Contrairement aux lecteurs classiques, ce logiciel est optimisé pour le **téléchargement massif (Batch)**, la résilience réseau et l'organisation structurée des fichiers sur le disque.

---

## La Philosophie : "Database-First"
Le cœur de FeedDownloader Pro est son moteur basé sur **SQLite**. Contrairement à d'autres logiciels qui s'appuient exclusivement sur la présence de fichiers sur le disque, notre système :
1.  **Mémorise chaque téléchargement :** Même si vous déplacez vos archives vers un NAS ou un disque externe, la base de données conserve l'état de votre collection.
2.  **Évite les doublons :** Plus de confusion entre les fichiers `.mp3`, `.m4a` ou les épisodes téléchargés plusieurs fois.
3.  **Intégrité documentée :** Chaque fichier téléchargé est vérifié via un hash SHA-256 et les métadata (bitrate, taux d'échantillonnage) sont extraits automatiquement.

## Caractéristiques Uniques

### 1. Résilience Réseau Extrême
Télécharger des centaines de fichiers audio nécessite une gestion des erreurs impeccable. FeedDownloader Pro implémente :
- **Tentatives Automatiques :** Avec un backoff exponentiel pour ne pas surcharger les serveurs.
- **Stall Detection :** Si le serveur cesse d'envoyer des données pendant 60 secondes, le téléchargement est automatiquement relancé.
- **Fichiers .part Anti-Corrosion :** Les fichiers ne sont renommés avec l'extension finale qu'une fois le téléchargement totalement terminé.

### 2. Sécurité et Validation (SSRF)
L'application implémente une validation anti-SSRF à 5 niveaux sur chaque URL saisie. Nous bloquons les protocoles dangereux et les adresses IP privées, garantissant votre sécurité même avec des flux RSS provenant de sources inconnues.

### 3. Support Professionnel NAS/SMB
Conçu pour les archivistes, le logiciel valide les chemins réseau avec un timeout de 8 secondes, évitant les gels de l'interface fréquents lors du travail avec des disques réseau ou des NAS non prêts.

### 4. Bibliothèque de feeds permanente et Vue Archive
La barre latérale redimensionnable conserve tous les feeds ajoutés entre les sessions, avec un badge numérique signalant les nouveaux épisodes publiés depuis le dernier téléchargement. L'onglet Archive offre un tableau unique avec tous les épisodes téléchargés, avec recherche, filtre par podcast et statistiques agrégées.

### 5. Panneau de téléchargement et Palette de commandes
Le Panneau de téléchargement latéral affiche la file en temps réel avec la vitesse, le temps estimé et le journal d'erreurs pour chaque batch. Il s'ouvre automatiquement au démarrage des téléchargements et reste accessible via un bouton flottant. La Palette de commandes (Ctrl+K) permet de lancer toute action ou tout feed au clavier, sans utiliser la souris.

### 6. Mise à jour automatique des feeds
Un minuteur en arrière-plan (6/12/24 heures) synchronise tous les feeds sans intervention manuelle et envoie une notification du système d'exploitation lorsque de nouveaux épisodes sont trouvés, sans lancer automatiquement les téléchargements.

---

## Configuration Requise
- **Windows** : 10/11 (64 bits)
- **macOS** : 11.0 (Big Sur) ou supérieur
- **Linux** : Distributions modernes (Ubuntu, Debian, Fedora)
- Connexion Internet active pour l'analyse des flux.

---
*Fait partie de l'Ecosystem Runtime | Digital Core — Des outils conçus per durer.*
