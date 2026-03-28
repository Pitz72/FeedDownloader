# Chapitre 3 : Tour de l'interface

## 3.1 Anatomie de la fenêtre principale

À l'ouverture de FeedDownloader Pro, l'interface est organisée verticalement en trois zones fonctionnelles :

*   **Zone de commande (en haut) :** La barre de saisie URL et les contrôles principaux. Toutes les opérations sont lancées depuis ici.
*   **Zone de travail (au centre) :** La zone principale, où les épisodes analysés sont affichés avec leurs informations et les contrôles de téléchargement individuels.
*   **Zone d'état (en bas) :** La barre de progression globale avec les informations sur le batch en cours.

---

## 3.2 La barre de commande (en haut)

**Champ URL :** La barre de texte où saisir l'adresse RSS du podcast à analyser. Accepte les URL directes vers des fichiers XML/RSS. Prend en charge le **drag and drop** : il est possible de faire glisser un lien directement depuis un navigateur vers cette zone.

**Bouton « Analyser » :** Lance l'analyse du feed. Le logiciel contacte l'URL, lit le fichier RSS et remplit la liste des épisodes. L'opération prend généralement 1 à 5 secondes, selon la taille du feed et la vitesse de la connexion.

**Champ Chemin de destination :** Indique le dossier dans lequel les fichiers téléchargés seront enregistrés. Cliquer sur l'icône de dossier adjacente ouvre la fenêtre de sélection. Le chemin défini est conservé entre les sessions.

**Icône Paramètres (⚙) :** Ouvre le panneau des paramètres. Accessible à tout moment, même pendant un téléchargement en cours. Pour les détails, voir le Chapitre 10.

---

## 3.3 La liste des épisodes (au centre)

Après l'analyse d'un feed, cette zone est remplie avec la liste des épisodes disponibles. Chaque ligne représente un épisode et contient les informations suivantes.

**Colonnes principales :**

*   **Titre :** Le nom de l'épisode tel que défini dans le feed RSS.
*   **Date :** La date de publication originale de l'épisode.
*   **Durée :** La durée de l'épisode (lorsque disponible dans le feed).
*   **Taille :** La taille estimée du fichier (lorsque disponible dans le feed). Avant le téléchargement, la donnée est déclarative ; après le téléchargement, elle reflète la taille réelle du fichier.
*   **État :** L'indicateur visuel de l'état de chaque épisode. Voir la section 3.4.
*   **Actions :** Les boutons de contrôle individuels pour chaque épisode.

**Tri :**
Les en-têtes de colonnes sont cliquables pour trier la liste (par date, par titre, par taille). Le comportement par défaut est l'affichage des épisodes les plus récents en tête de liste.

**Sélection multiple :**
En maintenant `Ctrl` enfoncé et en cliquant sur plusieurs épisodes, il est possible de les sélectionner individuellement. `Shift` + clic sélectionne une plage. Des actions collectives peuvent être appliquées aux épisodes sélectionnés (lancer le téléchargement, supprimer de la liste).

---

## 3.4 Les états des épisodes

Chaque épisode dans la liste est marqué par un indicateur d'état coloré. Comprendre ces états est essentiel pour interpréter correctement la situation de l'archive.

| État | Couleur | Signification |
|------|---------|---------------|
| **À télécharger** | Gris | L'épisode est présent dans le feed mais n'a jamais été téléchargé. |
| **En attente** | Bleu | L'épisode a été ajouté à la file d'attente et attend son tour. |
| **En cours** | Bleu animé | Le téléchargement est en cours. La cellule affiche également le pourcentage de progression. |
| **Terminé** | Vert | Le fichier a été téléchargé, renommé et vérifié correctement. |
| **Erreur** | Rouge | Le téléchargement a échoué après toutes les tentatives automatiques. L'infobulle affiche le code d'erreur. |
| **Téléchargé** | Vert atténué | La base de données enregistre déjà cet épisode comme téléchargé. Il ne sera pas retéléchargé. |

*Remarque sur l'état **« Téléchargé »** :* Cet état est le résultat de la philosophie Database-First. Lors de l'analyse d'un feed déjà traité précédemment, la plupart des épisodes apparaissent dans cet état : le logiciel sait déjà qu'ils sont présents dans l'archive. Seuls les épisodes publiés après le dernier téléchargement apparaîtront comme **« À télécharger »**.

---

## 3.5 Les contrôles de téléchargement individuels

À droite de chaque ligne dans la liste se trouvent deux boutons.

**Icône Télécharger (↓) :** Ajoute l'épisode individuel à la file de téléchargement. Si l'épisode est déjà à l'état **« Terminé »** ou **« Téléchargé »**, le système demande une confirmation avant de procéder à un re-téléchargement forcé.

**Icône Informations (ℹ) :** Ouvre un panneau avec les détails complets de l'épisode : URL d'origine du fichier audio, URL de l'image de couverture, description étendue, chemin du fichier sur le disque (s'il a déjà été téléchargé), hash SHA-256 et métadonnées techniques. Ce panneau est utile pour la vérification et le diagnostic de l'archive.

---

## 3.6 Les contrôles du batch (en haut, zone droite)

Ces boutons opèrent sur l'ensemble de la file de téléchargement, et non sur les épisodes individuels.

**« Tout télécharger » :** Ajoute à la file tous les épisodes à l'état **« À télécharger »**. Les épisodes déjà présents dans la base de données sont exclus automatiquement.

**« Arrêter » :** Interrompt le batch et vide la file d'attente. Les fichiers déjà complétés restent dans la base de données. Les fichiers `.part` sont supprimés. Lors de la prochaine analyse du même feed, les épisodes interrompus apparaîtront à nouveau comme **« À télécharger »**.

---

## 3.7 La barre de progression globale (en bas)

La barre inférieure est toujours visible et affiche l'état d'ensemble du batch en cours :

*   **Barre de progression :** Remplissage proportionnel au nombre de fichiers complétés sur le total de la file.
*   **Compteur de fichiers :** Par exemple `47 / 312 épisodes` — nombre de fichiers complétés sur le total de la file.
*   **Vitesse moyenne :** Vitesse de téléchargement agrégée de tous les threads actifs, exprimée en MB/s ou KB/s.
*   **Temps estimé :** Estimation du temps restant pour compléter le batch, calculée sur la vitesse moyenne des 30 dernières secondes.

*Remarque :* L'estimation du temps restant peut varier significativement dans les premières phases d'un téléchargement, lorsque les données disponibles pour le calcul sont encore limitées. Elle devient plus fiable après les 10 à 15 premiers fichiers complétés.

---

## 3.8 L'icône dans la zone de notification système

Lorsque l'on ferme la fenêtre principale en cliquant sur le X, FeedDownloader Pro ne termine pas le processus : il se réduit dans la zone de notification système (system tray, près de l'horloge de Windows ou macOS). Ce comportement est intentionnel : les téléchargements se poursuivent en arrière-plan pendant que la fenêtre n'est pas visible.

**Menu contextuel du tray (clic droit sur l'icône) :**
*   **Ouvrir FeedDownloader Pro :** Ramène la fenêtre principale au premier plan.
*   **État Téléchargement :** Affiche une ligne récapitulative (ex. `Downloading: 3 active, 47/312 completed`).
*   **Quitter :** Ferme le programme et interrompt tous les téléchargements actifs.

*Remarque pratique :* Pour effectuer un téléchargement volumineux sans maintenir la fenêtre ouverte, lancer le batch, fermer la fenêtre et laisser l'ordinateur en fonctionnement. L'archive sera disponible à la fin du processus.

---

*Voir le Chapitre 4 pour un workflow complet de la première analyse au téléchargement.*
