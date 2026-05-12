# ⚡ Runtime FeedDownloader Pro : Guide de Démarrage Rapide

Bienvenue dans **Runtime FeedDownloader Pro**. Ce guide vous accompagnera du premier démarrage jusqu'à votre première archive podcast complète en moins de 3 minutes.

---

## 1. Analyse du Feed

Commencez par indiquer au logiciel quel podcast vous souhaitez archiver :

1. Copiez l'**URL RSS** du podcast que vous souhaitez télécharger (généralement disponible sur le site web du podcast avec des étiquettes comme « RSS », « Feed » ou « Subscribe »).
2. Collez-la dans la **barre de recherche principale** en haut de l'interface.
3. Cliquez sur le bouton **« Analyser »** (ou appuyez sur `Entrée`).
4. Le logiciel interrogera le feed et affichera la liste complète des épisodes disponibles, avec le titre, la durée et la date de publication. Le feed est automatiquement ajouté à la barre latérale gauche pour les accès futurs.

> **Conseil :** Vous pouvez faire glisser l'URL directement sur la fenêtre de l'application (Glisser-Déposer) sans utiliser la barre de recherche.

---

## 2. Choix de la Destination

Avant de démarrer le téléchargement, choisissez où enregistrer vos fichiers :

1. Allez dans **Paramètres → Archive** et cliquez sur l'icône du **dossier** à côté du champ de chemin de destination.
2. Sélectionnez (ou créez) le dossier dans lequel vous souhaitez que l'archive soit organisée.
3. Le chemin configuré est toujours visible dans le pied de page de la barre latérale gauche : cliquer dessus ouvre le dossier directement dans le gestionnaire de fichiers.
4. Si vous utilisez un **NAS ou un lecteur réseau (SMB)**, entrez le chemin réseau (ex. `\\NAS\Podcasts\`). Le logiciel vérifiera automatiquement l'accès en écriture dans les 8 secondes, sans bloquer l'interface.

> **Conseil :** Créez un dossier dédié pour chaque podcast (ex. `D:\Archive\NomPodcast\`). FeedDownloader Pro enregistrera les fichiers de manière organisée et mémorisera l'emplacement dans sa base de données.

---

## 3. Démarrage du Téléchargement

Le feed est analysé et le dossier est prêt. Vous pouvez maintenant télécharger :

**Option A — Télécharger le catalogue entier :**

1. Cliquez sur le bouton principal **« Tout Télécharger »** dans l'en-tête de la liste des épisodes.
2. La liste complète des épisodes sera ajoutée à la file d'attente de téléchargement.
3. Le logiciel commencera à télécharger les fichiers en parallèle (le nombre de threads est configurable dans les Paramètres).

**Option B — Téléchargement sélectif :**

1. Dans la liste des épisodes, repérez les épisodes qui vous intéressent.
2. Cliquez sur l'icône de **téléchargement** (flèche vers le bas) qui apparaît au survol à côté de l'épisode.
3. Pour sélectionner plusieurs épisodes, maintenez `Ctrl` enfoncé et cliquez sur chacun (ou utilisez `Maj`+clic pour sélectionner une plage), puis cliquez sur **« Télécharger la sélection (N) »**.

> **Conseil :** Le système **Stall Detection** surveille chaque téléchargement : si un serveur cesse de répondre pendant 60 secondes, le téléchargement est automatiquement relancé.

---

## 4. Suivi des Téléchargements

Lorsque vous démarrez un lot, le **Panneau de Téléchargement** s'ouvre automatiquement sur le côté droit de la fenêtre.

* **Ce qu'il affiche :** chaque épisode en file d'attente avec le pourcentage d'avancement, la vitesse actuelle (KB/s ou MB/s) et le temps estimé jusqu'à la fin.
* **Annuler un téléchargement unique :** survolez l'épisode dans le panneau et cliquez sur le bouton **×** qui apparaît.
* **Tout arrêter :** cliquez sur le bouton **Arrêt** dans l'en-tête du panneau.
* **Fermer le panneau sans arrêter les téléchargements :** cliquez sur le **×** en haut à droite du panneau. Un **bouton flottant** reste visible en bas à droite : cliquer dessus rouvre le panneau à tout moment.
* **Journal des erreurs :** à la fin du lot, si certains épisodes ont échoué, le panneau affiche un résumé dépliable avec les titres et les codes d'erreur.
* **Fonctionnement en arrière-plan :** vous pouvez fermer la fenêtre principale en cliquant sur le X : le logiciel continue de fonctionner dans la zone de notification (barre des tâches) et les téléchargements se poursuivent sans interruption.

> **Conseil :** Appuyez sur **Ctrl+K** à tout moment pour ouvrir la Palette de Commandes : de là, vous pouvez lancer « Synchroniser tous les feeds », ouvrir les Paramètres ou passer à un autre podcast sans utiliser la souris.

---

## 5. Export et Statistiques

Une fois le téléchargement terminé, accédez aux **Paramètres** (icône engrenage ⚙️) pour les fonctionnalités avancées :

* **Exporter CSV :** Génère un fichier tableur avec la liste complète des épisodes téléchargés (titre, URL, chemin du fichier, hash SHA-256, taille, bitrate).
* **Importer/Exporter OPML :** Partagez votre liste de feeds avec d'autres applications ou une autre installation du logiciel.
* **Statistiques d'Archive :** Visualisez l'espace disque occupé, le nombre total d'épisodes et les podcasts distincts dans l'archive.
* **Modèle de Renommage :** Personnalisez le format du nom de fichier avec des tokens comme `{{title}}`, `{{date}}`, `{{podcast}}` pour une archive parfaitement organisée.
* **Exporter M3U :** Depuis le bouton « Exporter M3U » dans l'en-tête de la liste des épisodes, générez une liste de lecture avec les chemins locaux de tous les épisodes téléchargés d'un podcast.

---

## Conseils Utiles & Dépannage

**Le feed n'est pas reconnu :**
Vérifiez que l'URL est directement l'adresse du fichier RSS (se termine généralement par `.xml` ou `.rss`). Certains sites affichent une page HTML avec un lien vers le feed réel : utilisez ce lien.

**Certains épisodes ne se téléchargent pas (erreur 404) :**
L'épisode a été supprimé du serveur du podcast. FeedDownloader Pro enregistrera l'erreur dans le Panneau de Téléchargement sans bloquer les autres téléchargements. C'est l'une des raisons pour lesquelles l'archivage rapide est essentiel.

**Chemin NAS inaccessible :**
Vérifiez que le NAS est allumé et accessible sur le réseau local avant de démarrer le téléchargement. Si vous utilisez des identifiants SMB, assurez-vous que le partage est monté (ou que les identifiants sont configurés dans Windows).

**Le logiciel a arrêté le téléchargement en raison d'un « espace disque insuffisant » :**
Libérez de l'espace dans la destination et relancez le lot. Les fichiers déjà téléchargés ne seront pas re-téléchargés grâce à la base de données.

---

*Sécurité Garantie : Chaque URL est filtrée par le système anti-SSRF à 5 niveaux avant d'être traitée.*

*Partie de l'Ecosystem Runtime | Digital Core — Des outils conçus pour durer.*
