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

---

## 5.4 Historique des feeds

FeedDownloader Pro maintient un **historique des feeds analysés**. Chaque URL saisie dans le champ de recherche est mémorisée avec le nom du podcast et le nombre d'épisodes, pour simplifier les accès futurs.

**Accéder à l'historique :**
Cliquer sur la flèche à droite du champ URL ou commencer à taper : le logiciel propose des suggestions automatiques basées sur l'historique.

**Gérer l'historique :**
Dans les paramètres, il est possible d'afficher la liste complète des feeds en historique, de supprimer des entrées individuelles ou de vider complètement la liste.

*Remarque sur la confidentialité :* L'historique est enregistré exclusivement dans la base de données locale `feeddownloader.db`. Aucune donnée n'est transmise à des serveurs externes.

---

## 5.5 Importer des feeds depuis OPML

**OPML** (Outline Processor Markup Language) est le format standard pour l'export et l'import de listes de podcasts entre différentes applications. Si vous disposez d'une bibliothèque de podcasts dans une application comme Pocket Casts, Overcast, AntennaPod ou tout autre client, il est possible de l'exporter en OPML et de l'importer directement dans FeedDownloader Pro.

**Comment importer un fichier OPML :**
1.  Aller dans **Paramètres → Archive**, section « Données et portabilité ».
2.  Sélectionner le fichier `.opml` exporté depuis l'application de podcast.
3.  FeedDownloader Pro analyse le fichier et affiche la liste des podcasts identifiés, avec la possibilité de sélectionner ceux qui vous intéressent.
4.  Les feeds sélectionnés sont ajoutés à l'historique et, facultativement, analysés en séquence automatique.

*Remarque :* Certaines applications de podcast utilisent des variantes propriétaires du format OPML. FeedDownloader Pro prend en charge les versions les plus répandues. Si un fichier n'est pas importé correctement, l'ouvrir avec un éditeur de texte et vérifier la présence de balises `<outline type="rss" xmlUrl="...">` pour chaque podcast.

---

## 5.6 Exporter la bibliothèque en OPML

Il est possible d'exporter l'historique des feeds au format OPML pour :
*   Créer une sauvegarde de la liste de podcasts.
*   La partager avec d'autres utilisateurs ou avec une autre installation du logiciel.
*   L'importer dans une application de podcast pour suivre les mêmes feeds.

**Comment exporter :**
1.  Aller dans **Paramètres → Archive**, section « Données et portabilité ».
2.  Choisir un nom et un emplacement pour le fichier `.opml`.
3.  Le fichier généré est compatible avec toute application prenant en charge le standard OPML.

---

## 5.7 Feeds de grande taille

Certains podcasts historiques ou archives de production radiophonique peuvent avoir des feeds avec des milliers d'épisodes et des fichiers RSS de taille considérable. Dans ces cas :

*   **L'analyse initiale prend plus de temps :** Un feed avec 2 000 épisodes peut nécessiter 15 à 30 secondes pour le téléchargement et le parsing. Ce comportement est attendu.
*   **Virtualisation de la liste :** Avec des milliers d'entrées, la liste ne charge que les lignes visibles à l'écran pour maintenir la réactivité de l'interface.
*   **Estimation de l'espace nécessaire :** Avec 2 000 épisodes à environ 50 Mo chacun, le volume total est d'environ 100 Go. Le logiciel affiche une estimation de la taille totale avant le lancement du batch. Vérifier la disponibilité d'un espace suffisant avant de procéder.

---

## 5.8 Limitations du feed multiple

FeedDownloader Pro analyse un feed à la fois. Il ne dispose pas d'un gestionnaire de feeds permanents avec mise à jour automatique : le logiciel est optimisé pour le téléchargement batch, et non pour la surveillance continue de plusieurs feeds.

Pour gérer plusieurs feeds en séquence, la stratégie recommandée est :
1.  Utiliser la fonction OPML pour maintenir la liste des feeds dans un fichier centralisé.
2.  Analyser et télécharger un podcast à la fois, en procédant de manière systématique.
3.  Utiliser l'historique des feeds pour rappeler rapidement un podcast déjà analysé.

---

*Voir le Chapitre 6 pour une description détaillée du moteur de téléchargement.*
