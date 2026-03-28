# ⚡ Runtime FeedDownloader Pro : Guide de Démarrage Rapide

Bienvenue dans **Runtime FeedDownloader Pro**. Ce guide vous accompagnera du premier démarrage jusqu'à votre première archive podcast complète en moins de 3 minutes.

---

## 1. Analyse du Feed

Commencez par indiquer au logiciel quel podcast vous souhaitez archiver :

1. Copiez l'**URL RSS** du podcast que vous souhaitez télécharger (généralement disponible sur le site web du podcast avec des étiquettes comme « RSS », « Feed » ou « Subscribe »).
2. Collez-la dans la **barre de recherche principale** en haut de l'interface.
3. Cliquez sur le bouton **« Analyser »** (ou appuyez sur `Entrée`).
4. Le logiciel interrogera le feed et affichera la liste complète des épisodes disponibles, avec le titre, la durée et la date de publication.

> **Conseil :** Vous pouvez faire glisser l'URL directement sur la fenêtre de l'application (Glisser-Déposer) sans utiliser la barre de recherche.

---

## 2. Choix de la Destination

Avant de démarrer le téléchargement, choisissez où enregistrer vos fichiers :

1. Cliquez sur l'icône du **dossier** à côté du champ de chemin de destination.
2. Sélectionnez (ou créez) le dossier dans lequel vous souhaitez que l'archive soit organisée.
3. Si vous utilisez un **NAS ou un lecteur réseau (SMB)**, entrez le chemin réseau (ex. `\\NAS\Podcasts\`). Le logiciel vérifiera automatiquement l'accès en écriture dans les 8 secondes, sans bloquer l'interface.

> **Conseil :** Créez un dossier dédié pour chaque podcast (ex. `D:\Archive\NomPodcast\`). FeedDownloader Pro enregistrera les fichiers de manière organisée et mémorisera l'emplacement dans sa base de données.

---

## 3. Démarrage du Téléchargement

Le feed est analysé et le dossier est prêt. Vous pouvez maintenant télécharger :

**Option A — Télécharger le catalogue entier :**
1. Cliquez sur le bouton principal **« Tout Télécharger »**.
2. La liste complète des épisodes sera ajoutée à la file d'attente de téléchargement.
3. Le logiciel commencera à télécharger les fichiers en parallèle (le nombre de threads est configurable dans les Paramètres).

**Option B — Téléchargement sélectif :**
1. Dans la liste des épisodes, repérez celui qui vous intéresse.
2. Cliquez sur l'icône de **téléchargement** (flèche vers le bas) à côté de l'épisode.
3. Vous pouvez sélectionner plusieurs épisodes en maintenant `Ctrl` enfoncé, puis les démarrer ensemble.

> **Conseil :** Le système **Stall Detection** surveille chaque téléchargement : si un serveur cesse de répondre pendant 60 secondes, le téléchargement est automatiquement relancé. Vous n'aurez pas besoin de vérifier manuellement la file d'attente.

---

## 4. Gestion de la File d'Attente

Pendant que FeedDownloader Pro travaille, vous avez le contrôle total :

- **Barre de Progression Globale :** Visible en bas de l'interface, elle affiche la progression de l'ensemble du lot (fichiers complétés / total, vitesse moyenne).
- **Pause / Reprendre :** Cliquez sur **Pause** pour suspendre tous les téléchargements. Quand vous êtes prêt, cliquez sur **Reprendre**.
- **Arrêt :** Arrête le lot. Les fichiers déjà terminés sont conservés dans la base de données. Au prochain démarrage, FeedDownloader Pro reconnaîtra les fichiers déjà téléchargés et évitera les doublons.
- **Icône Système (Zone de Notification) :** Vous pouvez fermer la fenêtre principale : le logiciel continuera à fonctionner en arrière-plan. L'icône dans la zone de notification (barre des tâches) vous permet de rouvrir l'application ou d'arrêter les téléchargements à tout moment.

---

## 5. Export et Statistiques

Une fois le téléchargement terminé, accédez aux **Paramètres** (icône engrenage ⚙️) pour les fonctionnalités avancées :

- **Exporter CSV :** Génère un fichier tableur avec la liste complète des épisodes téléchargés (titre, URL, chemin du fichier, hash SHA-256, taille, bitrate).
- **Importer/Exporter OPML :** Partagez votre liste de feeds avec d'autres applications ou d'autres utilisateurs du logiciel.
- **Statistiques d'Archive :** Visualisez l'espace disque occupé, le nombre total d'épisodes et le résumé d'intégrité (fichiers vérifiés via SHA-256).
- **Modèle de Renommage :** Personnalisez le format du nom de fichier avec des tokens comme `{{title}}`, `{{date}}`, `{{podcast}}` pour une archive parfaitement organisée.

---

## Conseils Utiles & Dépannage

**Le feed n'est pas reconnu :**
Vérifiez que l'URL est directement l'adresse du fichier RSS (se termine généralement par `.xml` ou `.rss`). Certains sites affichent une page HTML avec un lien vers le feed réel : utilisez ce lien.

**Certains épisodes ne se téléchargent pas (erreur 404) :**
L'épisode a été supprimé du serveur du podcast. FeedDownloader Pro enregistrera l'erreur dans la base de données sans bloquer les autres téléchargements. C'est l'une des raisons pour lesquelles l'archivage rapide est essentiel.

**Chemin NAS inaccessible :**
Vérifiez que le NAS est allumé et accessible sur le réseau local avant de démarrer le téléchargement. Si vous utilisez des identifiants SMB, assurez-vous que le partage est monté (ou que les identifiants sont configurés dans Windows).

**Le logiciel a arrêté le téléchargement en raison d'un « espace disque insuffisant » :**
Libérez de l'espace dans la destination et relancez le lot. Les fichiers déjà téléchargés ne seront pas re-téléchargés grâce à la base de données.

---

*Sécurité Garantie : Chaque URL est filtrée par le système anti-SSRF à 5 niveaux avant d'être traitée.*

*Partie de l'Ecosystem Runtime | Digital Core — Des outils conçus pour durer.*
