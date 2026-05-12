# Chapitre 4 : La première archive — Guide pas à pas

## 4.1 Introduction au workflow

Ce chapitre décrit un workflow complet, de l'URL d'un podcast à une archive organisée sur le disque. Le scénario de référence est le plus courant : télécharger l'intégralité du catalogue d'un podcast pour la première fois.

Il est conseillé de lire ce chapitre du début à la fin au moins une fois. Une fois les étapes maîtrisées, démarrer une nouvelle archive prend moins d'une minute.

---

## 4.2 Étape 1 : Trouver l'URL RSS

Le point de départ est l'URL du feed RSS du podcast à archiver. Un feed RSS est un fichier texte au format XML que les services de podcast publient pour distribuer la liste des épisodes disponibles. Chaque podcast dispose d'un feed RSS.

**Comment trouver l'URL RSS :**

*   **Sur le site web du podcast :** Rechercher une icône orange avec des ondes radio, ou les textes « RSS », « Feed », « Subscribe » ou « Podcast Feed ». Cliquer sur l'élément ouvre généralement le fichier XML dans le navigateur : l'URL affichée dans la barre d'adresse est celle à utiliser.
*   **Depuis une application de podcast :** Des applications comme Pocket Casts, Apple Podcasts et similaires affichent souvent le lien RSS dans les informations du podcast. Sur certaines applications, le lien est accessible via la fonction « Partager ».
*   **Depuis des services d'hébergement :** Si le podcast est hébergé sur Spreaker, Podbean, Buzzsprout ou des plateformes équivalentes, l'URL du feed est généralement disponible dans le tableau de bord du publisher ou dans les informations publiques du podcast.
*   **Depuis un moteur de recherche :** Rechercher `[Nom du Podcast] RSS feed`. Le premier résultat mène souvent directement à l'URL correcte.

*Comment reconnaître une URL RSS valide :* Elle se termine généralement par `.xml` ou `.rss`, ou contient des mots comme `feed`, `rss` ou `podcast` dans le chemin. Exemples : `https://www.exemple.fr/feed.xml`, `https://feeds.spreaker.com/podcast/12345`, `https://anchor.fm/s/abc123/podcast/rss`.

---

## 4.3 Étape 2 : Préparer le dossier de destination

Avant d'analyser le feed, il convient de définir le dossier de destination. Il est conseillé de créer une structure organisée dès le départ.

**Structure recommandée :**
```
D:\Archive Podcasts\
    ├── Mon Podcast\
    ├── Podcast Technologie\
    └── Radio Talk Show\
```

Créer le dossier spécifique au podcast à archiver (ex. `D:\Archive Podcasts\Mon Podcast\`). FeedDownloader Pro enregistrera tous les fichiers de ce podcast dans ce dossier, avec les noms définis par le template de renommage (voir le Chapitre 8).

**Pour définir le dossier de destination dans FeedDownloader Pro :**

1.  Ouvrir **Paramètres → Archive** et cliquer sur l'icône de **dossier** à côté du champ de chemin de destination.
2.  Naviguer jusqu'au dossier créé et le sélectionner.
3.  Le chemin configuré est toujours visible dans le pied de page de la barre latérale gauche ; un clic dessus ouvre le dossier directement dans le gestionnaire de fichiers.

*Remarque :* Pour les chemins sur NAS ou disques réseau, consulter le Chapitre 7 avant de continuer. La configuration pour les chemins réseau présente quelques spécificités décrites dans ce chapitre.

---

## 4.4 Étape 3 : Analyser le feed

Avec l'URL prête et le dossier de destination défini :

1.  Coller l'URL RSS dans le **champ URL** en haut de l'interface.
2.  Cliquer sur **« Analyser »** (ou appuyer sur `Entrée`).
3.  La liste au centre est remplie avec les épisodes. Pour un podcast avec 200 à 300 épisodes, l'opération prend typiquement 2 à 5 secondes. Pour les archives très volumineuses (1 000 épisodes ou plus), jusqu'à 15 à 20 secondes peuvent être nécessaires, car le fichier XML du feed peut atteindre une taille considérable.

**En cas d'erreur d'analyse :**
*   Vérifier que l'URL est correcte (pas d'espace au début ou à la fin, aucun caractère manquant).
*   Ouvrir l'URL dans le navigateur : si le navigateur retourne une erreur ou une page vide, le feed peut être temporairement indisponible ou l'URL peut avoir changé.
*   Certains feeds nécessitent des en-têtes HTTP spécifiques. Dans ce cas, le logiciel affiche un message d'erreur avec le code HTTP reçu (par exemple `403 Forbidden`).

---

## 4.5 Étape 4 : Lire les résultats de l'analyse

Après l'analyse, la liste affiche tous les épisodes du podcast.

**Éléments à vérifier :**
*   **Nombre total d'épisodes :** Visible dans l'en-tête de la liste ou dans le compteur en bas. Un podcast actif depuis plusieurs années peut avoir 300 à 500 épisodes ou davantage.
*   **Épisodes à l'état **« Téléchargé »** :** Si le podcast a déjà été analysé précédemment, la plupart des épisodes apparaîtront dans cet état. La base de données enregistre déjà ces fichiers comme présents dans l'archive.
*   **Épisodes avec des données manquantes :** Il est possible que certains épisodes n'indiquent pas de durée ou de taille. Cela signifie que le producteur du podcast n'a pas inclus ces informations dans le fichier RSS. Le téléchargement s'effectue correctement dans tous les cas.

---

## 4.6 Étape 5 : Lancer le téléchargement

Deux modes de téléchargement sont disponibles.

**Mode A — Téléchargement complet :**
Cliquer sur **« Tout télécharger »**. Le logiciel ajoute à la file tous les épisodes à l'état **« À télécharger »** et lance les téléchargements en parallèle. Le nombre de téléchargements simultanés dépend du paramètre de threads (voir le Chapitre 10 ; la valeur par défaut est 3).

**Mode B — Téléchargement sélectif :**
Pour ne télécharger que certains épisodes :
1.  Sélectionner les épisodes en maintenant `Ctrl` enfoncé et en cliquant sur chacun d'eux.
2.  Pour sélectionner une plage, cliquer sur le premier épisode, maintenir `Shift` enfoncé et cliquer sur le dernier.
3.  Cliquer sur le bouton **« Télécharger la sélection (N) »** qui apparaît dans l'en-tête du feed dès qu'au moins un épisode est sélectionné.

---

## 4.7 Étape 6 : Surveiller la progression

Pendant le téléchargement :

*   **Panneau de téléchargement :** S'ouvre automatiquement sur le côté droit de la fenêtre au démarrage du batch. Affiche chaque épisode en file d'attente avec le pourcentage, la vitesse actuelle et le temps estimé jusqu'à la fin. Pour une archive de 200 épisodes à 64 kbps en moyenne, le volume total de données est d'environ 2 à 3 Go.
*   **État dans la liste :** Chaque ligne se met à jour en temps réel. Les épisodes en cours affichent une barre de progression individuelle avec le pourcentage complété.
*   **Exécution en arrière-plan :** Il n'est pas nécessaire de maintenir la fenêtre ouverte. Il est possible de la fermer (le programme continue à opérer dans la zone de notification) et de la rouvrir à la fin du processus.

Le logiciel gère automatiquement les retries en cas d'erreur réseau, la stall detection en cas de serveurs lents et la vérification de l'intégrité à la fin de chaque fichier. Si l'ordinateur passe en mode veille, les téléchargements sont interrompus et repris automatiquement au retour de la session.

---

## 4.8 Étape 7 : Vérifier l'archive complétée

Lorsque le Panneau de téléchargement indique le batch comme terminé et que tous les épisodes apparaissent à l'état vert, l'archive est prête.

**Opérations conseillées à la fin :**

1.  **Vérifier les erreurs :** Si certains épisodes affichent l'état **« Erreur »** (rouge), cliquer dessus pour ouvrir le Panneau de détail de l'épisode et lire le code d'erreur. Sinon, consulter la section de récapitulatif des erreurs au bas du Panneau de téléchargement. La cause la plus fréquente est `404 Not Found`, indiquant que le fichier a été supprimé du serveur du podcast avant le téléchargement.

2.  **Exporter un récapitulatif CSV :** Aller dans **Paramètres → Archive → Exporter en CSV**. Le fichier généré liste tous les épisodes téléchargés avec le hash SHA-256, les dimensions et les métadonnées (voir le Chapitre 9).

3.  **Vérifier les fichiers sur le disque :** Ouvrir le dossier de destination dans le gestionnaire de fichiers. Les fichiers audio sont organisés selon le template de renommage configuré (voir le Chapitre 8). La présence de fichiers `.part` indique des téléchargements interrompus, qui seront complétés au prochain lancement du batch.

---

## 4.9 Mettre à jour l'archive à l'avenir

Le système Database-First simplifie les mises à jour de l'archive. La procédure varie selon que le feed est déjà présent dans la bibliothèque ou non.

**Feed déjà dans la barre latérale :**

1.  Cliquer sur le feed dans la barre latérale pour le sélectionner.
2.  Passer la souris sur l'élément et cliquer sur l'icône de synchronisation, ou utiliser le bouton **« Tout synchroniser »** pour rafraîchir l'ensemble de la bibliothèque en parallèle.
3.  Les nouveaux épisodes apparaissent à l'état **« À télécharger »** ; ceux déjà présents restent en **« Téléchargé »**.
4.  Cliquer sur **« Tout télécharger »** pour ne télécharger que les nouveaux épisodes.

**Feed pas encore dans la bibliothèque :**

Coller l'URL RSS dans le champ URL en haut de l'interface et cliquer sur **« Analyser »** : le feed est ajouté à la bibliothèque et la liste est remplie avec l'état actuel.

Le système ne télécharge jamais deux fois le même épisode. Il est également possible de configurer une mise à jour automatique périodique (voir le Chapitre 10 et la section 5.9).

---

*Voir le Chapitre 5 pour approfondir la gestion des feeds et les fonctionnalités OPML.*
