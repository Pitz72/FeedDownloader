# Chapitre 6 : Le moteur de téléchargement

## 6.1 Architecture du moteur

Le moteur de téléchargement de FeedDownloader Pro est un système asynchrone multi-thread. Contrairement à un téléchargeur séquentiel, le logiciel gère plusieurs téléchargements simultanément via un système de file d'attente centrale.

**Composants principaux :**

*   **La file d'attente :** Une liste ordonnée de tous les téléchargements en attente. Chaque épisode ajouté au batch entre dans cette file et attend d'être assigné à un thread disponible.
*   **Les worker threads :** Les processus qui exécutent physiquement les téléchargements. Le nombre de threads actifs est configurable. Chaque thread gère un téléchargement à la fois, de manière indépendante des autres.
*   **Le gestionnaire de base de données :** Le composant qui met à jour en temps réel la base de données SQLite avec l'état de chaque téléchargement (démarré, terminé, échoué, pourcentage de progression).
*   **Le moniteur d'intégrité :** Le processus qui, à la fin de chaque téléchargement, calcule et enregistre le hash SHA-256 du fichier téléchargé.

---

## 6.2 Téléchargements parallèles : configuration

Le nombre de téléchargements simultanés est l'un des paramètres les plus importants à configurer. Une valeur insuffisante ralentit le processus ; une valeur excessive peut saturer la connexion, surcharger le serveur source ou générer des erreurs réseau.

**La valeur par défaut est 3 threads.** Pour la plupart des utilisateurs avec une connexion domestique, cette valeur offre un bon équilibre entre vitesse et stabilité.

**Recommandations de configuration :**

| Scénario | Threads recommandés |
|----------|---------------------|
| Connexion lente ou serveur avec throttling | 1 |
| Connexion domestique standard | 3 (par défaut) |
| Connexion fibre rapide | 5 |
| NAS avec connexion réseau lente | 1 |

**Comment modifier le nombre de threads :**
Aller dans **Paramètres → Download → Téléchargements parallèles** et sélectionner l'un des trois presets disponibles : **1**, **3** ou **5**. La modification est appliquée immédiatement à la file en cours.

*Remarque sur les serveurs avec limites de connexion :* Certains serveurs d'hébergement de podcasts appliquent des limitations au nombre de connexions simultanées par adresse IP. En présence d'erreurs fréquentes `429 Too Many Requests` ou `503 Service Unavailable`, réduire le nombre de threads à 1 ou 2. Le mécanisme de retry gère automatiquement les échecs, mais réduire la charge prévient le problème à la source.

---

## 6.3 Gestion des erreurs et système de retry

Dans un téléchargement batch de centaines de fichiers, les erreurs réseau sont prévisibles. FeedDownloader Pro utilise une stratégie de **retry avec backoff exponentiel** : lorsqu'un téléchargement échoue, le système attend un intervalle croissant avant de réessayer, plutôt que de remettre immédiatement l'épisode en file d'attente.

**Cycle de retry :**

| Tentative | Attente avant le retry |
|-----------|------------------------|
| 1er échec | 2 secondes |
| 2e échec | 4 secondes |
| 3e échec | 8 secondes |
| 4e échec | 16 secondes |
| 5e échec (dernier) | L'épisode est marqué comme **« Erreur »** définitive |

Si un serveur est temporairement surchargé, le système lui laisse le temps de récupérer avant de réessayer. La plupart des erreurs transitoires se résolvent dès la deuxième ou troisième tentative.

**Erreurs définitives (non soumises au retry) :**
*   `404 Not Found` : Le fichier n'existe pas sur le serveur. De nouvelles tentatives sont inutiles.
*   `403 Forbidden` : Le serveur a refusé la requête par manque d'autorisation.
*   Erreurs de validation SSRF : L'URL n'a pas passé les contrôles de sécurité internes.

---

## 6.4 Stall detection

Un téléchargement bloqué est un scénario dans lequel la connexion TCP est techniquement active et les paquets continuent d'arriver, mais le flux de données s'est interrompu. Le système d'exploitation ne signale pas d'erreur car la connexion est encore ouverte ; le fichier continue d'apparaître « en téléchargement » sans progresser.

Cette situation se produit fréquemment avec :
*   Des serveurs sous charge qui appliquent le throttling après avoir envoyé les premiers octets.
*   Des problèmes de routage réseau intermédiaires.
*   Des fichiers audio volumineux servis par des CDN avec des limitations de bande passante.

**Détection :**
Chaque téléchargement actif est surveillé par un processus watchdog qui enregistre les octets reçus toutes les 10 secondes. Si pendant **60 secondes consécutives** aucun nouvel octet n'arrive (ou moins de 1 Ko, seuil excluant les keep-alive TCP), le téléchargement est considéré comme bloqué et :
1.  La connexion est interrompue.
2.  Le fichier `.part` partiel est supprimé.
3.  L'épisode est remis en file d'attente avec le cycle de retry normal.

Le processus est transparent pour l'utilisateur : dans la barre de progression individuelle, une brève réinitialisation du pourcentage est visible, suivie de la reprise du téléchargement. Si le blocage était causé par une condition transitoire, le nouveau téléchargement démarre normalement. Si le problème persiste au-delà du nombre maximal de tentatives, l'épisode est marqué comme **« Erreur »**.

---

## 6.5 Fichiers `.part` : le système anti-corruption

Chaque fichier audio est téléchargé avec l'extension temporaire `.part` pendant le transfert. Le fichier est renommé avec l'extension définitive (`.mp3`, `.m4a`, `.ogg`, etc.) **uniquement** après que :

1.  Le transfert est complété à 100 %.
2.  La taille du fichier correspond à celle déclarée dans l'en-tête HTTP (`Content-Length`), si disponible.
3.  Le hash SHA-256 a été calculé et enregistré dans la base de données.

Ce mécanisme garantit que dans le dossier de destination ne se trouvent jamais de fichiers audio partiels ou corrompus avec une extension définitive. En cas d'interruption soudaine du programme ou d'extinction de l'ordinateur, des fichiers `.part` résiduels se trouveront dans le dossier : le logiciel les supprimera et les retéléchargera lors de la session suivante.

*Emplacement des fichiers `.part` :* Dans le même dossier de destination que les fichiers complétés. Ces fichiers ne doivent pas être ouverts avec un lecteur audio : étant partiels, ils provoqueraient des erreurs de lecture.

---

## 6.6 Interruption et reprise des sessions

**Arrêter le batch :**
Le bouton **« Arrêter »** (dans la barre de progression globale) interrompt tous les threads actifs de manière ordonnée, vide la file d'attente et supprime les fichiers `.part` partiels. Les fichiers déjà complétés restent dans la base de données. Lors de la prochaine analyse du même feed, les épisodes interrompus apparaîtront comme **« À télécharger »**.

**Fermeture du programme pendant un téléchargement :**
Si l'on ferme la fenêtre principale (le programme continue dans la zone de notification) ou si l'on utilise **« Quitter »** depuis le menu du tray pendant un téléchargement actif, le logiciel affiche un avertissement indiquant le nombre de téléchargements en cours et demande une confirmation. En choisissant de quitter, les téléchargements actifs sont interrompus de manière contrôlée et les fichiers `.part` sont conservés.

**Reprendre une session interrompue :**
Au démarrage, si FeedDownloader Pro détecte dans la base de données des épisodes à l'état **« En attente »** ou **« En cours »** de la session précédente, il affiche une notification : *« X téléchargements en suspens trouvés lors de la session précédente. Voulez-vous les reprendre ? »*. En confirmant, le batch reprend immédiatement.

---

## 6.7 Vitesse de téléchargement

La vitesse affichée dans la barre inférieure est la **somme agrégée** de tous les threads actifs. Avec 3 threads actifs téléchargeant chacun à 2 MB/s, la vitesse totale affichée est d'environ 6 MB/s.

**Facteurs influençant la vitesse :**
*   **Largeur de bande de la connexion :** La limite maximale disponible.
*   **Vitesse du serveur source :** De nombreux serveurs d'hébergement de podcasts appliquent des limitations de bande passante pour contenir les coûts. La vitesse d'un seul thread dépasse rarement 2 à 5 MB/s sur ces serveurs.
*   **Nombre de threads :** Un nombre plus élevé de threads compense la lenteur des serveurs individuels en téléchargeant depuis plusieurs connexions simultanées.
*   **Taille des fichiers :** Les fichiers de taille moyenne (20 à 80 Mo, correspondant à des épisodes de 30 à 60 minutes) offrent l'efficacité optimale, avec un overhead relatif de connexion réduit.

---

*Voir le Chapitre 7 pour la configuration des chemins NAS et réseau.*
