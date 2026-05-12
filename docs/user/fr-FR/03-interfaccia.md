# Chapitre 3 : Visite de l'interface

## 3.1 Anatomie de la fenêtre principale

À l'ouverture de FeedDownloader Pro, la fenêtre est organisée en quatre zones fonctionnelles :

*   **Barre de commande (en haut) :** La barre fixe contenant le champ URL, le bouton Analyser et l'icône Paramètres. Toutes les opérations d'ajout de nouveaux flux sont lancées depuis ici.
*   **Barre latérale des flux (gauche) :** La colonne contenant la bibliothèque permanente des flux enregistrés, l'onglet Archive, les contrôles de synchronisation et le pied de page avec le chemin de destination. Sa largeur est réglable en faisant glisser le bord droit.
*   **Zone principale (centre) :** La zone où sont affichés les épisodes du flux sélectionné, avec la barre de filtres, les contrôles de lot et la liste des épisodes.
*   **Panneau de téléchargement (droite, superposé) :** Le panneau qui s'ouvre automatiquement lorsqu'un lot de téléchargements est en cours. Lorsqu'il est fermé, un bouton flottant reste visible en bas à droite pour le rouvrir.

Au premier lancement, avec une bibliothèque vide, la zone principale affiche un message d'aide expliquant comment ajouter le premier flux et où configurer le chemin de destination. Le message disparaît automatiquement à l'ajout du premier flux, ou manuellement via le bouton ×.

---

## 3.2 La barre de commande (En haut)

**Champ URL :** La barre de texte où saisir l'adresse RSS du podcast à analyser. Accepte des URL directes vers des fichiers XML/RSS. Prend en charge le **glisser-déposer** : vous pouvez faire glisser un lien directement depuis un navigateur vers cette zone.

**Bouton « Analyser » :** Lance l'analyse du flux. Le logiciel contacte l'URL, lit le fichier RSS et remplit la liste des épisodes. À la fin de l'analyse, le flux est ajouté définitivement à la barre latérale. L'opération prend généralement entre 1 et 5 secondes selon la taille du flux et la vitesse de la connexion.

**Icône Paramètres (⚙) :** Ouvre le panneau des paramètres. Accessible à tout moment, même pendant un téléchargement actif. Voir le chapitre 10 pour les détails.

---

## 3.3 La barre latérale des flux

La barre latérale est le centre de contrôle de la bibliothèque de podcasts. Elle contient tous les flux ajoutés de façon permanente : les flux ne sont pas perdus à la fermeture du logiciel.

### Les onglets Flux et Archive

En haut de la barre latérale se trouvent deux onglets :

*   **Onglet Flux :** Affiche la bibliothèque des flux enregistrés. Il s'agit de la vue par défaut.
*   **Onglet Archive :** Affiche la Vue Archive — un tableau de tous les épisodes téléchargés dans l'ensemble de la bibliothèque. Voir la section 3.10.

### Éléments de la bibliothèque de flux

Chaque flux dans la liste est représenté par une ligne affichant :

*   **Miniature :** L'image de couverture du podcast.
*   **Titre :** Le nom du podcast tel que déclaré dans le flux RSS.
*   **Date :** La date de la dernière synchronisation avec le serveur.
*   **Badge nouveaux épisodes :** Un indicateur numérique indiquant combien d'épisodes ont été publiés depuis le dernier téléchargement. Le badge disparaît après le téléchargement de tous les nouveaux épisodes.

Cliquer sur un élément de la liste charge la liste des épisodes de ce flux dans la zone principale.

### Ajouter un flux

Coller l'URL RSS dans le champ URL en haut de l'interface et cliquer sur « Analyser ». Une fois l'analyse terminée, le flux est automatiquement ajouté à la barre latérale et reste disponible pour les sessions suivantes.

### Recherche et tri

*   **Recherche de flux :** Le champ de recherche dans la barre latérale filtre les flux par nom en temps réel. Utile avec les grandes bibliothèques.
*   **Tri A–Z :** Le bouton de tri ordonne les flux alphabétiquement par titre. Cliquer à nouveau rétablit l'ordre d'origine.

### Synchronisation

*   **Synchronisation individuelle :** En survolant un élément de flux, l'icône de synchronisation apparaît. En cliquant dessus, le logiciel relit le flux depuis le serveur et met à jour la liste des épisodes avec tout nouveau contenu.
*   **Tout synchroniser :** Le bouton « Tout synchroniser » en haut de la barre latérale met à jour tous les flux en parallèle. Pendant l'opération, chaque miniature affiche son propre état : icône tournante (en cours), coche verte (terminé), icône d'erreur rouge (échec). Le bouton indique la progression en temps réel (p. ex. `Synchronisation… 3/7`). Les états restent visibles 2,5 secondes après l'opération, puis disparaissent.

### Pied de page : chemin de destination

En bas de la barre latérale est affiché le chemin du dossier de destination des téléchargements, abrégé aux deux derniers composants (p. ex. `Documents / Podcasts`). Cliquer sur cette ligne ouvre le dossier dans le gestionnaire de fichiers système. Pour modifier le chemin, utiliser **Paramètres → Archive**.

### Redimensionnement

La largeur de la barre latérale est réglable en faisant glisser le bord droit (le curseur se transforme en double flèche horizontale). La largeur minimale est de 240 px, la maximale de 640 px et la valeur par défaut de 456 px. Le réglage est mémorisé entre les sessions.

---

## 3.4 La liste des épisodes

Après avoir sélectionné un flux dans la barre latérale, la zone principale est remplie avec la liste des épisodes disponibles pour ce podcast.

### En-tête du flux

En haut de la zone principale est visible l'en-tête du flux sélectionné, avec miniature, titre du podcast et nombre d'épisodes. Les principaux contrôles de lot sont accessibles depuis cet en-tête (voir section 3.7).

### Colonnes de la liste

Chaque ligne de la liste représente un épisode et contient les informations suivantes :

*   **Titre :** Le nom de l'épisode tel que défini dans le flux RSS.
*   **Date :** La date de publication originale de l'épisode.
*   **Durée :** La durée de l'épisode (quand elle est disponible dans le flux).
*   **Taille :** La taille du fichier. Avant le téléchargement, la valeur est déclarative (tirée du flux) ; après le téléchargement, elle reflète la taille réelle du fichier.
*   **Statut :** L'indicateur visuel de statut de l'épisode individuel. Voir section 3.5.

### Barre de filtres

Sous l'en-tête du flux se trouve une barre de filtres permettant de restreindre les épisodes affichés :

*   **Recherche textuelle :** Filtre par mots-clés dans le titre (logique ET : tous les termes saisis doivent être présents). Le filtre est automatiquement effacé lors du changement de flux.
*   **Filtre par statut :** Boutons rapides pour afficher uniquement les épisodes dans un statut donné : Tous, Nouveaux (non téléchargés), Téléchargés, Erreurs.
*   **Filtre par date :** Champs de date « Du » et « Au » pour limiter la liste à une plage de dates de publication.
*   **Filtre par durée :** Limite la liste aux épisodes d'une durée comprise entre un minimum et un maximum (en minutes).
*   **Trier :** Ouvre un panneau avec cinq options de tri — ordre du flux (par défaut), date la plus récente, date la plus ancienne, durée la plus longue, durée la plus courte.

Tous les filtres sont automatiquement effacés lors de la sélection d'un flux différent.

### Sélection multiple

Vous pouvez sélectionner plusieurs épisodes simultanément pour lancer leur téléchargement en bloc :

*   **Ctrl+clic** (ou Cmd+clic sur macOS) : ajoute ou retire l'épisode de la sélection individuellement.
*   **Maj+clic :** sélectionne la plage entre le dernier épisode sélectionné et celui cliqué.
*   Une case à cocher apparaît au survol pour les épisodes non sélectionnés et en permanence pour les épisodes sélectionnés.

Lorsqu'au moins un épisode est sélectionné, le bouton **« Télécharger la sélection (N) »** apparaît dans l'en-tête du flux. La sélection est effacée lors du changement de flux et après le lancement du téléchargement.

---

## 3.5 Les statuts des épisodes

Chaque épisode dans la liste est marqué d'un indicateur de statut. Comprendre ces statuts est essentiel pour interpréter correctement l'état de l'archive.

| Statut | Couleur | Signification |
|--------|---------|---------------|
| **À télécharger** | Gris | L'épisode est présent dans le flux mais n'a jamais été téléchargé. |
| **En file d'attente** | Bleu | L'épisode a été ajouté à la file d'attente et attend son tour dans le Panneau de téléchargement. |
| **En cours** | Bleu clair animé | Le téléchargement est en cours. La ligne affiche le pourcentage, la vitesse et le temps estimé en temps réel. |
| **Terminé** | Vert | Le fichier a été téléchargé, renommé et vérifié correctement. |
| **Erreur** | Rouge | Le téléchargement a échoué après toutes les tentatives automatiques. |
| **Téléchargé** | Vert atténué | La base de données enregistre déjà cet épisode comme téléchargé lors d'une session précédente. |

*Note sur le statut **« Téléchargé »** :* Ce statut est le résultat de la philosophie Database-First. Lors de l'analyse d'un flux déjà traité, la plupart des épisodes apparaissent dans ce statut : le logiciel sait déjà qu'ils sont présents dans l'archive. Seuls les épisodes publiés après le dernier téléchargement apparaîtront comme **« À télécharger »**.

---

## 3.6 Contrôles de téléchargement individuels

À droite de chaque ligne de la liste, au survol, des boutons de contrôle spécifiques à l'épisode apparaissent. Les boutons visibles varient selon le statut :

**Pour tous les épisodes :**

*   **Copier le titre** (icône document) : Copie le titre de l'épisode dans le presse-papiers système.
*   **Case à cocher :** Pour la sélection multiple (voir section 3.4).

**Pour les épisodes À télécharger ou En erreur :**

*   **Télécharger** (flèche vers le bas) : Ajoute l'épisode individuel à la file de téléchargement.

**Pour les épisodes Terminés ou Téléchargés :**

*   **Télécharger à nouveau** (flèche vers le bas) : Ajoute à nouveau l'épisode à la file, en écrasant le fichier existant.
*   **Réinitialiser le statut** (icône actualiser) : Efface le statut de l'épisode, le ramenant à « À télécharger » sans supprimer le fichier du disque. Utile pour forcer une nouvelle analyse.
*   **Ouvrir le dossier** (icône dossier) : Ouvre le gestionnaire de fichiers système à l'emplacement du fichier téléchargé.

**Interaction avec le Panneau de détail :**
Un **simple clic** sur la ligne de l'épisode ouvre le Panneau de détail (voir section 3.9) avec les métadonnées complètes et les actions contextuelles. Ctrl+clic et Maj+clic sont réservés exclusivement à la sélection multiple et n'ouvrent pas le panneau.

---

## 3.7 Contrôles de lot

Les contrôles de lot agissent sur l'ensemble de la file de téléchargement, pas sur les épisodes individuels. Ils se trouvent dans l'en-tête du flux, au-dessus de la barre de filtres.

**« Tout télécharger » :** Ajoute à la file tous les épisodes au statut **« À télécharger »**. Les épisodes déjà présents dans la base de données sont exclus automatiquement. Le Panneau de téléchargement s'ouvre automatiquement au lancement.

**« Télécharger la sélection (N) » :** Apparaît lorsqu'au moins un épisode est sélectionné. Lance le téléchargement exclusivement pour les épisodes sélectionnés.

**« Arrêter » :** Envoie un signal d'annulation à tous les téléchargements actifs et vide la file. Les fichiers déjà terminés restent dans la base de données. Les fichiers `.part` sont supprimés. Lors de la prochaine analyse, les épisodes interrompus réapparaîtront comme **« À télécharger »**.

**« Exporter M3U » :** Génère une playlist au format `.m3u` avec les chemins locaux absolus de tous les épisodes téléchargés pour ce podcast. Ouvre une boîte de dialogue de sauvegarde native. Le bouton n'est disponible que lorsqu'il y a des épisodes téléchargés pour le flux actuel.

**« Ouvrir le dossier »** (icône dossier dans l'en-tête) : Ouvre le gestionnaire de fichiers dans le dossier de destination du flux actuel.

---

## 3.8 Le Panneau de téléchargement

Le Panneau de téléchargement est le centre de surveillance et de contrôle de tous les téléchargements en cours. Il remplace l'ancienne barre de progression fixe en bas de l'interface.

### Ouverture et fermeture

Le panneau s'ouvre **automatiquement** au lancement de chaque lot. Lorsqu'il est fermé, le **bouton flottant** (icône circulaire) est visible dans le coin inférieur droit de la fenêtre : cliquer dessus rouvre le panneau. La fermeture du panneau n'interrompt pas les téléchargements en cours.

### Structure du panneau

*   **En-tête :** Affiche le compteur de fichiers terminés/total (p. ex. `47 / 312`), le bouton Arrêter pour interrompre tous les téléchargements, et le bouton × pour fermer le panneau.
*   **Liste de la file :** Chaque téléchargement en cours ou en attente est représenté par une ligne avec : titre de l'épisode, nom du podcast, pourcentage d'avancement, vitesse actuelle (Ko/s ou Mo/s), temps estimé jusqu'à la fin (p. ex. `2m 30s`), barre de progression individuelle. Au survol de la ligne apparaît le bouton × pour annuler ce téléchargement individuel.
*   **Section Erreurs :** À la fin du lot, si un ou plusieurs téléchargements ont échoué, un résumé dépliable apparaît en bas du panneau avec la liste des épisodes non téléchargés et leur code d'erreur.

---

## 3.9 Le Panneau de détail de l'épisode

Le Panneau de détail offre une vue approfondie d'un épisode unique : métadonnées, actions et — si l'épisode est déjà dans l'archive — données techniques du fichier téléchargé.

### Ouvrir le panneau de détail

Un **simple clic** sur n'importe quelle ligne de la liste des épisodes ouvre le panneau, qui glisse depuis le côté droit de la fenêtre (sous la barre de commande). Le panneau se ferme automatiquement lorsqu'un flux différent est sélectionné dans la barre latérale.

*Note :* Ctrl+clic et Maj+clic sont réservés à la sélection multiple et n'ouvrent pas le panneau.

### Contenu du panneau

*   **Métadonnées de base :** Date de publication, durée déclarée, taille du fichier indiquée dans le flux.
*   **Actions contextuelles :** Les boutons disponibles varient selon le statut de l'épisode : Télécharger, Télécharger à nouveau, Réinitialiser le statut, Ouvrir le dossier.
*   **Données d'archive** (visibles uniquement si l'épisode a déjà été téléchargé) : Date et heure du téléchargement, taille réelle du fichier, débit binaire, fréquence d'échantillonnage, nom du fichier sur le disque, somme de contrôle SHA-256.
*   **Lien source :** L'URL originale du fichier audio dans le flux RSS, avec un bouton pour la copier dans le presse-papiers.
*   **Notes de l'épisode :** Le texte descriptif de l'épisode extrait du flux (show notes), présenté en texte brut.

---

## 3.10 La Vue Archive

La Vue Archive est accessible via l'onglet **Archive** dans la barre latérale. Contrairement à la liste des épisodes, qui n'affiche que les épisodes d'un seul flux à la fois, la Vue Archive rassemble dans un seul tableau **tous les épisodes téléchargés dans l'ensemble de la bibliothèque**, quel que soit le podcast d'appartenance.

### Fonctionnalités

*   **Recherche :** Le champ de recherche filtre par titre d'épisode ou nom de podcast.
*   **Filtre par podcast :** Le menu déroulant permet de limiter l'affichage aux épisodes d'un seul podcast.
*   **Tri :** Le tableau peut être trié par date de téléchargement, date de publication, taille de fichier et débit binaire.
*   **Statistiques :** L'en-tête de la Vue Archive affiche le nombre total de fichiers téléchargés, le nombre de podcasts distincts et la taille totale de l'archive en gigaoctets.
*   **Afficher dans le dossier :** Au survol d'une ligne, le bouton qui ouvre le gestionnaire de fichiers à l'emplacement du fichier sur le disque apparaît.

La Vue Archive se met à jour automatiquement à la fin de chaque téléchargement.

---

## 3.11 La Palette de commandes (Ctrl+K)

La Palette de commandes est un outil d'accès rapide permettant d'atteindre n'importe quelle fonction principale du logiciel sans utiliser la souris.

### Ouvrir la palette de commandes

Le raccourci **Ctrl+K** (depuis n'importe où dans l'application, même pendant un téléchargement) ouvre un calque avec un champ de recherche central.

### Navigation

*   **Saisir** dans le champ de recherche filtre les actions et les flux en temps réel.
*   **Les flèches ↑↓** déplacent la sélection entre les résultats.
*   **Entrée** exécute l'action sélectionnée.
*   **Échap** ferme la palette sans exécuter d'action.

### Contenu

*   **Groupe Actions :** Cinq commandes fixes toujours disponibles : *Ouvrir les paramètres*, *Synchroniser tous les flux*, *Ajouter un flux* (focalise le champ URL), *Aller à l'onglet Archive*, *Aller à l'onglet Flux*.
*   **Groupe Flux :** Quand le champ de recherche est vide, affiche les cinq premiers flux de la bibliothèque. La saisie filtre les flux par titre. Sélectionner un flux depuis la palette le charge directement dans la zone principale.

---

## 3.12 L'icône dans la zone de notification

Lorsque la fenêtre principale est fermée en cliquant sur le X, FeedDownloader Pro ne termine pas le processus : il se réduit dans la zone de notification système (system tray, près de l'horloge Windows ou macOS). Ce comportement est intentionnel : les téléchargements se poursuivent en arrière-plan pendant que la fenêtre n'est pas visible.

**Menu contextuel du tray (clic droit sur l'icône) :**

*   **Ouvrir FeedDownloader Pro :** Ramène la fenêtre principale au premier plan.
*   **État des téléchargements :** Affiche une ligne récapitulative de l'activité en cours.
*   **Quitter :** Ferme le programme et arrête tous les téléchargements actifs.

*Note pratique :* Pour effectuer un téléchargement volumineux sans garder la fenêtre ouverte, lancer le lot, fermer la fenêtre et laisser l'ordinateur fonctionner. L'archive sera disponible à la fin du processus.

---

*Aller au chapitre 4 pour un workflow complet de la première analyse au téléchargement.*