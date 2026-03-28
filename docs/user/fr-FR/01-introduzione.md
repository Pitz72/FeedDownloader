# Chapitre 1 : Introduction et philosophie

## 1.1 Qu'est-ce que Runtime FeedDownloader Pro ?

Pour décrire le logiciel, il est utile de partir du problème qu'il résout.

Chaque jour, des milliers d'épisodes de podcast sont publiés, distribués et écoutés. Au fil du temps, cependant, une partie considérable de ces contenus disparaît : le créateur cesse de payer son service d'hébergement, la plateforme de distribution interrompt son activité, le CDN qui hébergeait les fichiers audio est mis hors service. Un épisode écouté il y a trois ans pourrait être définitivement inaccessible aujourd'hui — non pas parce qu'il a été intentionnellement supprimé, mais parce que personne n'en a conservé une copie.

**Runtime FeedDownloader Pro** est né pour répondre à ce problème. Ce n'est pas un simple outil de téléchargement de podcasts : c'est une application professionnelle pour la **conservation et l'archivage systématique** de contenus audio provenant de feeds RSS. Il est conçu pour les archivistes, les éditeurs, les stations de radio, les producteurs de contenus et les passionnés pour lesquels la documentation sonore requiert la même rigueur conservatoire que celle réservée à d'autres types de documents.

---

## 1.2 À qui s'adresse FeedDownloader Pro ?

FeedDownloader Pro répond à des besoins divers :

*   **L'archiviste :** Il souhaite télécharger l'intégralité du catalogue d'un podcast historique avant qu'il ne soit retiré. Il a besoin d'un système qui mémorise les épisodes déjà téléchargés, évite les doublons et vérifie l'intégrité de chaque fichier.

*   **Le producteur radiophonique :** Il gère une bibliothèque de contenus sur un NAS partagé. Il a besoin d'un outil qui fonctionne sur des chemins réseau sans se bloquer, organise les fichiers de manière prévisible et produit des rapports en format CSV pour son équipe.

*   **L'éditeur :** Il souhaite conserver une copie locale de tous les podcasts de son réseau, exporter des métadonnées pour les systèmes de gestion de contenu et surveiller l'état de l'archive dans le temps.

*   **Le passionné :** Il veut conserver ses podcasts préférés sur son disque, organisés de façon ordonnée, sans dépendre de la disponibilité de la connexion internet ni risquer de recevoir des fichiers corrompus.

---

## 1.3 La philosophie « Database-First »

La différence fondamentale entre FeedDownloader Pro et un outil de téléchargement générique réside dans l'approche de la gestion des données.

La plupart des outils de téléchargement fonctionnent ainsi : ils analysent les fichiers présents sur le disque, les comparent avec le feed RSS et téléchargent ce qui manque. Cette approche présente une limite critique : **le disque n'est pas une source de vérité fiable**. Les fichiers peuvent être déplacés, renommés, corrompus ou accidentellement supprimés. Si l'on déplace le dossier des podcasts de `C:\Podcast` vers `D:\Archivio`, l'outil perd la référence aux épisodes déjà téléchargés et recommence à télécharger l'intégralité du catalogue.

FeedDownloader Pro adopte une approche différente. Au cœur de chaque opération se trouve une **base de données SQLite** qui enregistre chaque épisode analysé ou téléchargé : l'URL d'origine, le chemin du fichier sur le disque, la date de téléchargement, le hash SHA-256 du contenu et les métadonnées audio. La base de données est la mémoire persistante du logiciel. Quelle que soit la position physique des fichiers, la base de données conserve l'état complet de l'archive.

Cette architecture a des conséquences pratiques directes :

1.  **Aucun doublon.** Même si l'on analyse le même feed plusieurs fois, le système reconnaît les épisodes déjà présents dans la base de données et ne les ajoute pas à nouveau en file d'attente.
2.  **Résilience aux déplacements.** Il est possible de déplacer l'archive sur un nouveau disque ou sur un NAS : l'historique reste intact dans la base de données.
3.  **État persistant entre les sessions.** Si le programme est fermé pendant un téléchargement batch de 300 épisodes, à la réouverture la file d'attente est disponible dans le même état qu'elle avait été laissée.
4.  **Registre des opérations.** Chaque fichier téléchargé est documenté : date de téléchargement, URL d'origine et résultat de la vérification d'intégrité.

---

## 1.4 Les trois piliers du logiciel

Au-delà de l'approche Database-First, FeedDownloader Pro est construit autour de trois principes techniques ayant un impact direct sur les fonctionnalités.

### Résilience réseau

Télécharger des centaines de fichiers audio en séquence sur Internet n'est pas une opération sans complexité. Les serveurs peuvent être surchargés, les connexions s'interrompre, les transferts corrompre les fichiers. FeedDownloader Pro gère ces scénarios avec trois mécanismes :

*   **Retry avec backoff exponentiel :** Quand un téléchargement échoue, le logiciel ne répète pas immédiatement la tentative. Il attend plutôt un intervalle croissant : 2 secondes, puis 4, puis 8, jusqu'à la limite maximale configurée. Cette approche, standard dans les systèmes distribués, augmente les probabilités de succès sans aggraver la charge sur le serveur source.
*   **Détection de blocage :** Un téléchargement bloqué est plus problématique qu'un téléchargement échoué. Si un serveur commence à envoyer des données puis s'interrompt sans fermer la connexion, un logiciel dépourvu de ce contrôle resterait en attente indéfinie. FeedDownloader Pro surveille le flux de données en temps réel : si aucun nouvel octet n'arrive pendant 60 secondes consécutives, le téléchargement est interrompu et réinséré automatiquement en file d'attente.
*   **Fichiers `.part` anti-corruption :** Chaque fichier est téléchargé avec l'extension temporaire `.part`. Ce n'est qu'à l'achèvement total et vérifié du transfert que le fichier est renommé avec son extension définitive (`.mp3`, `.m4a`, etc.). En cas d'interruption soudaine, aucun fichier audio partiel ou corrompu ne se trouvera dans le dossier de destination : seulement des fichiers `.part` résiduels, que le logiciel supprimera et re-téléchargera lors de la session suivante.

### Sécurité intégrée

FeedDownloader Pro traite des URL provenant de sources externes (les feeds RSS). Une URL construite de manière malveillante, pointant vers des ressources internes du réseau (un routeur, un NAS, un serveur local), pourrait être utilisée pour accéder à des informations confidentielles — une attaque connue sous le nom de **SSRF (Server-Side Request Forgery)**.

Pour prévenir ce risque, chaque URL est soumise à une validation à **5 niveaux** avant traitement : vérification du protocole, résolution DNS avec inspection de l'adresse IP résultante, blocage des plages d'adresses privées (RFC 1918), blocage des protocoles non HTTP/HTTPS et normalisation du chemin. Cette procédure est entièrement automatique et transparente pour l'utilisateur.

### Support NAS et chemins réseau

FeedDownloader Pro est conçu pour fonctionner avec des archives sur des disques réseau. La gestion des chemins SMB — le protocole utilisé par les NAS, les serveurs Windows et les partages réseau — est une source fréquente de problèmes dans les applications de bureau : un disque réseau inaccessible peut bloquer le thread principal de l'application pendant un temps considérable. FeedDownloader Pro résout ce problème en exécutant la validation du chemin réseau sur un thread séparé, avec un timeout de 8 secondes. L'interface reste toujours réactive, quelle que soit l'état du chemin réseau.

---

## 1.5 Contenu du manuel

Ce manuel couvre l'utilisation complète de FeedDownloader Pro, de l'installation aux fonctionnalités les plus avancées. Il n'est pas nécessaire de le lire dans l'ordre : chaque chapitre est autonome et peut être consulté indépendamment.

Pour une première approche du logiciel, il est recommandé de suivre le **Chapitre 4 (La première archive)**, qui illustre un workflow complet de l'analyse du feed au téléchargement. Les utilisateurs qui connaissent déjà le logiciel peuvent accéder directement au chapitre qui les intéresse via la table des matières.

---

*Ecosystem Runtime | Digital Core — Des outils construits pour durer.*
