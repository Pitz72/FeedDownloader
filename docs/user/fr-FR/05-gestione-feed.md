# Chapitre 5 : Gestion des feeds

## 5.1 Qu'est-ce qu'un feed RSS

Un feed RSS est un document XML publié par un podcast pour permettre aux applications de lire automatiquement la liste des épisodes disponibles. Lorsqu'un éditeur publie un nouvel épisode, il met à jour ce document en ajoutant une nouvelle entrée. Les applications de podcast lisent périodiquement ces documents pour identifier les contenus les plus récents.

Pour FeedDownloader Pro, le feed RSS est la **source primaire de données** : il contient la liste des épisodes, les URL des fichiers audio, les métadonnées (titre, date, durée, description, couverture) et les informations générales sur le podcast (nom, auteur, catégorie).

La connaissance de la structure interne d'un feed RSS n'est pas nécessaire pour utiliser le logiciel, mais facilite l'interprétation des données affichées dans la liste des épisodes et la compréhension des causes d'éventuelles informations manquantes ou incomplètes.

---

## 5.2 Feeds valides et feeds problématiques

Tous les feeds RSS ne respectent pas le même niveau de conformité aux standards.

**Feed bien formé :** Suit le standard RSS 2.0 ou Atom, inclut tous les champs obligatoires (titre, lien, date de publication, URL audio avec type MIME) et, facultativement, les balises iTunes/Podcast Index pour la durée, la couverture et les saisons. FeedDownloader Pro lit ces feeds sans problème.

**Feed partiellement incomplet :** Certains champs facultatifs sont absents (durée, taille du fichier, couverture de l'épisode). Le logiciel télécharge quand même les fichiers audio, mais certaines colonnes de la liste resteront vides.

**Feed avec URL audio inaccessibles :** Le feed est lisible, mais les URL des fichiers audio pointent vers des ressources qui n'existent plus (erreur 404). Cette situation est fréquente avec des podcasts abandonnés ou migrés vers d'autres serveurs. FeedDownloader Pro signale ces épisodes à l'état **« Erreur »** après la tentative de téléchargement.

**Feed protégé par authentification :** Certains podcasts privés ou payants nécessitent des identifiants HTTP Basic pour accéder au feed. Le logiciel prend en charge ces feeds : les identifiants sont inclus directement dans l'URL au format `https://utilisateur:motdepasse@www.exemple.fr/feed.xml`.

---

## 5.3 Analyser un feed : détail

Lorsque l'on clique sur **« Analyser »**, FeedDownloader Pro exécute les opérations suivantes en séquence :

1.  **Validation de l'URL :** Vérifie que l'URL est syntaxiquement correcte et qu'elle passe les 5 contrôles anti-SSRF (voir le Chapitre 10 pour les détails).
2.  **Requête HTTP :** Contacte le serveur du feed avec un user-agent standard. Le timeout pour cette opération est de 30 secondes.
3.  **Parsing XML :** Lit et analyse le document RSS ou Atom. Le logiciel gère les feeds avec de légères déviations par rapport aux standards (encodage non déclaré, balises manquantes, espaces de noms non conventionnels).
4.  **Déduplication :** Pour chaque épisode dans le feed, la base de données est interrogée pour vérifier si l'épisode a déjà été téléchargé. L'URL audio est utilisée comme clé d'identification unique.
5.  **Remplissage de la liste :** Tous les épisodes sont affichés avec leur état actuel.
6.  **Ajout à la bibliothèque :** Le feed est inséré de manière permanente dans la barre latérale s'il n'est pas déjà présent. Les feeds déjà dans la bibliothèque sont mis à jour avec le nombre d'épisodes le plus récent.

---

## 5.4 La bibliothèque de feeds

FeedDownloader Pro maintient une **bibliothèque de feeds permanente**. Chaque feed analysé est enregistré dans la barre latérale et reste disponible entre les sessions, sans qu'il soit nécessaire de ressaisir l'URL à chaque lancement.

### Affichage

Chaque élément de la bibliothèque affiche : la couverture du podcast (vignette), le titre, la date de la dernière synchronisation avec le serveur et un badge numérique indiquant combien d'épisodes ont été publiés depuis le dernier téléchargement. Le badge disparaît dès que tous les nouveaux épisodes ont été téléchargés.

Un clic sur un feed dans la barre latérale met immédiatement à jour la liste des épisodes dans la zone principale.

### Supprimer un feed de la bibliothèque

Pour supprimer un feed, passer la souris sur l'élément dans la barre latérale : le bouton corbeille apparaît dans l'angle droit de la ligne. Cliquer dessus ouvre une fenêtre de confirmation. La suppression efface le feed de la bibliothèque mais **n'efface pas les fichiers audio déjà téléchargés** ni les données associées dans la base de données ; les épisodes restent visibles dans la Vue Archive.

### Recherche et tri

*   **Recherche de feeds :** Le champ de recherche en haut de la barre latérale filtre les feeds par nom en temps réel. Utile pour les grandes bibliothèques.
*   **Tri A–Z :** Le bouton de tri organise les feeds par ordre alphabétique de titre. Un nouveau clic rétablit l'ordre original.

*Remarque sur la confidentialité :* La bibliothèque de feeds est enregistrée exclusivement dans la base de données locale. Aucune donnée n'est transmise à des serveurs externes.

---

## 5.5 Importer des feeds depuis OPML

**OPML** (Outline Processor Markup Language) est le format standard pour l'export et l'import de listes de podcasts entre différentes applications. Si vous disposez d'une bibliothèque de podcasts dans une application comme Pocket Casts, Overcast, AntennaPod ou tout autre client, il est possible de l'exporter en OPML et de l'importer directement dans FeedDownloader Pro.

**Comment importer un fichier OPML :**

1.  Aller dans **Paramètres → Archive**, section « Données et portabilité ».
2.  Cliquer sur **Importer feeds (OPML)** et sélectionner le fichier `.opml` exporté depuis l'application de podcast.
3.  FeedDownloader Pro analyse le fichier et ajoute les feeds identifiés à la bibliothèque.

*Remarque :* Certaines applications de podcast utilisent des variantes propriétaires du format OPML. FeedDownloader Pro prend en charge les versions les plus répandues. Si un fichier n'est pas importé correctement, l'ouvrir avec un éditeur de texte et vérifier la présence de balises `<outline type="rss" xmlUrl="...">` pour chaque podcast.

---

## 5.6 Exporter la bibliothèque en OPML

Il est possible d'exporter la bibliothèque de feeds au format OPML pour :

*   Créer une sauvegarde de la liste de podcasts.
*   La partager avec d'autres utilisateurs ou avec une autre installation du logiciel.
*   L'importer dans une application de podcast pour suivre les mêmes feeds.

**Comment exporter :**

1.  Aller dans **Paramètres → Archive**, section « Données et portabilité ».
2.  Cliquer sur **Exporter feeds (OPML)** et choisir un nom et un emplacement pour le fichier.
3.  Le fichier généré est compatible avec toute application prenant en charge le standard OPML.

---

## 5.7 Feeds de grande taille

Certains podcasts historiques ou archives de production radiophonique peuvent avoir des feeds avec des milliers d'épisodes et des fichiers RSS de taille considérable. Dans ces cas :

*   **L'analyse initiale prend plus de temps :** Un feed avec 2 000 épisodes peut nécessiter 15 à 30 secondes pour le téléchargement et le parsing. Ce comportement est attendu.
*   **Virtualisation de la liste :** Avec des milliers d'entrées, la liste ne charge que les lignes visibles à l'écran pour maintenir la réactivité de l'interface.
*   **Estimation de l'espace nécessaire :** Avec 2 000 épisodes à environ 50 Mo chacun, le volume total est d'environ 100 Go. Vérifier la disponibilité d'un espace suffisant avant de procéder.

---

## 5.8 Gestion de plusieurs feeds

FeedDownloader Pro gère nativement une bibliothèque de plusieurs feeds. Il n'y a pas de limite au nombre de podcasts pouvant être ajoutés : tous sont conservés dans la barre latérale et restent accessibles d'une session à l'autre.

### Naviguer entre les feeds

Un clic sur un feed dans la barre latérale met immédiatement à jour la liste des épisodes dans la zone principale. Le logiciel se souvient du feed sélectionné à la dernière fermeture.

### Synchroniser les feeds

*   **Synchronisation individuelle :** Passer la souris sur un élément de feed dans la barre latérale pour faire apparaître l'icône de synchronisation. Cliquer dessus relit ce feed depuis le serveur et met à jour la liste avec les éventuels nouveaux épisodes.
*   **Tout synchroniser :** Le bouton « Tout synchroniser » rafraîchit tous les feeds en parallèle en une seule opération. Pendant le processus, chaque vignette dans la barre latérale affiche son propre état en temps réel. À la fin, les éventuels nouveaux épisodes sont mis en évidence par le badge nouveaux épisodes.

Pour la mise à jour automatique programmée sans intervention manuelle, voir la section 5.9.

---

## 5.9 Mise à jour automatique des feeds

FeedDownloader Pro peut synchroniser automatiquement tous les feeds à intervalles réguliers, en arrière-plan, sans aucune action requise de l'utilisateur.

### Configuration

Le paramètre se trouve dans **Paramètres → Général → Mise à jour automatique des feeds**. Quatre options sont disponibles :

| Option | Comportement |
|--------|--------------|
| **Désactivé** (par défaut) | Aucune synchronisation automatique. |
| **Toutes les 6 heures** | Le logiciel synchronise tous les feeds toutes les 6 heures à partir du lancement. |
| **Toutes les 12 heures** | Le logiciel synchronise tous les feeds toutes les 12 heures à partir du lancement. |
| **Toutes les 24 heures** | Le logiciel synchronise tous les feeds une fois toutes les 24 heures à partir du lancement. |

Le changement de paramètre est immédiat et ne nécessite pas le redémarrage du logiciel. Le minuteur démarre au lancement de l'application.

### Comportement

La mise à jour automatique **ne lance pas de téléchargements** : elle se limite à vérifier si de nouveaux épisodes ont été publiés. Si lors de la synchronisation automatique de nouveaux épisodes sont trouvés sur un ou plusieurs feeds, le système envoie une **notification du système d'exploitation** avec un récapitulatif des contenus trouvés (disponible dans les 8 langues prises en charge).

Pour télécharger les nouveaux épisodes signalés, ouvrir le logiciel et utiliser les commandes habituelles du batch.

---

*Voir le Chapitre 6 pour une description détaillée du moteur de téléchargement.*
