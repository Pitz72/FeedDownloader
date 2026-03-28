# Chapitre 11 : Résolution des problèmes

## 11.1 Comment utiliser ce chapitre

Ce chapitre rassemble les problèmes les plus courants signalés par les utilisateurs, avec les causes les plus probables et les solutions pas à pas. Chaque problème est décrit tel qu'il se manifeste dans l'interface, et non en termes techniques internes.

Si le problème n'est pas présent dans cette liste, consulter les fichiers journaux dans le dossier `logs/` (voir le Chapitre 10) et contacter le support en joignant le journal de la session au cours de laquelle le problème s'est produit.

---

## Problèmes de feed et d'analyse

---

### Problème : « Erreur de connexion » ou « Timeout » pendant l'analyse du feed

**Comment il se manifeste :** On clique sur **« Analyser »** et après quelques secondes un message d'erreur apparaît indiquant un timeout ou un échec de connexion. La liste reste vide.

**Causes probables et solutions :**

*   **Le serveur du feed n'est pas disponible.** Ouvrir l'URL du feed dans le navigateur. Si le navigateur retourne une erreur (page introuvable, « Ce site est inaccessible »), le problème concerne le serveur du podcast : il n'est pas possible d'intervenir sinon en réessayant ultérieurement.
*   **La connexion internet est indisponible ou instable.** Vérifier que d'autres sites web sont accessibles. Si la connexion est instable, attendre qu'elle se stabilise avant de réessayer.
*   **Un pare-feu ou proxy d'entreprise bloque la requête.** Dans les environnements d'entreprise, le trafic vers certains hôtes peut être bloqué. Essayer depuis le réseau domestique pour vérifier si le problème est spécifique au réseau de l'entreprise.

---

### Problème : Le feed est analysé mais la liste des épisodes est vide

**Comment il se manifeste :** L'analyse se termine sans erreur, mais la liste des épisodes ne montre aucun élément (ou affiche 0 épisode).

**Causes probables et solutions :**

*   **Le feed ne contient pas d'épisodes.** Ouvrir l'URL dans le navigateur et vérifier que le document XML contient des balises `<item>` ou `<entry>`. Si elles sont absentes, le podcast n'a pas encore publié d'épisodes.
*   **Le feed utilise un format non standard.** FeedDownloader Pro prend en charge RSS 2.0 et Atom 1.0. Certains feeds produits par des plateformes propriétaires peuvent avoir une structure non conventionnelle. Dans ce cas, le logiciel affiche un avertissement spécifique dans le message d'analyse.
*   **Tous les épisodes sont déjà dans la base de données.** Si le feed a été analysé précédemment, les épisodes apparaissent avec l'état **« Téléchargé »** (vert atténué). Faire défiler la liste et vérifier la présence de cet indicateur d'état.

---

### Problème : Le feed n'affiche que les N derniers épisodes et non l'intégralité du catalogue historique

**Comment il se manifeste :** On analyse un podcast avec des centaines d'épisodes connus, mais la liste n'en affiche que 50 ou 100.

**Cause :** Cette limite est imposée par l'éditeur du podcast ou par sa plateforme d'hébergement, et non par FeedDownloader Pro. De nombreuses plateformes limitent le feed RSS aux 50 à 100 derniers épisodes pour réduire la charge sur leurs serveurs. Le logiciel télécharge exactement les données que le feed rend disponibles.

**Alternatives possibles :**
*   Vérifier si le podcast propose un « feed complet » comme URL alternative (certaines plateformes le mettent à disposition).
*   Consulter le site web du podcast ou la plateforme de distribution (Spotify, Apple Podcasts) pour récupérer les liens des épisodes les plus anciens.
*   Certaines plateformes acceptent des paramètres dans l'URL pour demander le feed complet (ex. `?limit=0` ou `?paged=all`) : consulter la documentation de la plateforme spécifique.

---

## Problèmes de téléchargement

---

### Problème : De nombreux épisodes sont à l'état « Erreur 404 »

**Comment il se manifeste :** Après un téléchargement batch, de nombreux épisodes affichent l'état **« Erreur »** avec le message `404 Not Found`.

**Cause :** Les épisodes sont encore présents dans le feed RSS (dans le document XML), mais les fichiers audio vers lesquels ils pointent ont été supprimés du serveur. Cette situation est fréquente avec des podcasts abandonnés ou migrés vers d'autres plateformes.

**Ce qui est possible de faire :**
*   Il n'est pas possible de télécharger des fichiers qui n'existent plus sur le serveur.
*   S'il s'agit d'un podcast actif et que les erreurs semblent excessives, contacter l'éditeur du podcast : il pourrait s'agir d'une migration temporaire ou d'un problème technique résolvable.
*   Les épisodes avec erreur 404 sont automatiquement exclus des batchs suivants. Il n'est pas nécessaire de les supprimer de la liste.

---

### Problème : Les téléchargements démarrent mais progressent très lentement

**Comment il se manifeste :** La barre de progression avance, mais la vitesse est très faible (quelques KB/s) par rapport à la bande passante disponible.

**Causes probables et solutions :**

*   **Le serveur du podcast applique des limitations de bande passante.** De nombreux serveurs d'hébergement imposent un throttling pour contenir les coûts. Réduire les threads à 1 peut améliorer la situation avec les serveurs qui pénalisent les connexions multiples.
*   **La connexion Wi-Fi est instable.** Pour les téléchargements batch intensifs, utiliser une connexion câblée (Ethernet).
*   **Le disque de destination est lent.** L'écriture sur NAS avec connexion Wi-Fi ou sur des dispositifs USB 2.0 peut représenter le goulot d'étranglement. Envisager de télécharger d'abord sur un disque local rapide.
*   **La connexion internet est effectivement limitée.** Vérifier la vitesse de téléchargement effective avec un test de débit. Si le résultat est inférieur aux attentes, le problème concerne la connexion.

---

### Problème : Un épisode reste bloqué à un pourcentage élevé et ne se termine jamais

**Comment il se manifeste :** Un téléchargement individuel affiche un pourcentage élevé (90 %, 95 %, 99 %) qui n'atteint pas 100 % et ne se met pas à jour.

**Cause :** Le serveur a envoyé presque tout le fichier mais a interrompu le transfert avant la fin. La stall detection détectera cette condition dans les 60 secondes suivant la dernière donnée reçue et relancera le téléchargement automatiquement.

**Si le problème persiste après plusieurs tentatives :** Le fichier sur le serveur pourrait être corrompu ou tronqué. Après le nombre maximal de tentatives, l'épisode sera marqué comme **« Erreur »** avec un message indiquant une divergence entre la taille déclarée et celle reçue.

---

### Problème : Le logiciel a téléchargé un fichier `.mp3` mais le lecteur audio signale qu'il est corrompu

**Comment il se manifeste :** Le téléchargement apparaît comme terminé (état vert), mais à l'ouverture du fichier avec un lecteur audio une erreur est retournée ou le fichier ne se lit pas.

**Cause :** Cela ne devrait pas se produire grâce au mécanisme des fichiers `.part` et à la vérification de la taille. Si cela se produit, le fichier original sur le serveur pourrait déjà être corrompu (problème de l'éditeur), ou une erreur d'écriture sur le disque s'est produite.

**Solution :**
1.  Faire un clic droit sur l'épisode dans la liste → **« Forcer le re-téléchargement »**.
2.  Si le fichier retéléchargé est encore corrompu, le problème concerne le fichier source sur le serveur du podcast. Le vérifier en ouvrant directement l'URL du fichier dans le navigateur.
3.  Effectuer une Vérification de l'archive (voir le Chapitre 9) pour vérifier si d'autres fichiers dans l'archive présentent des problèmes.

---

## Problèmes NAS et réseau

---

### Problème : « Chemin réseau inaccessible » même si le NAS est allumé

**Comment il se manifeste :** Le logiciel affiche l'avertissement de chemin inaccessible, mais le NAS est normalement accessible depuis le gestionnaire de fichiers.

**Solutions à vérifier dans l'ordre :**

1.  **Vérifier que le chemin est exact.** Une différence de casse (`\\MYNAS\podcast` vs `\\MYNAS\Podcast`) peut provoquer une erreur sur certains systèmes.
2.  **Les identifiants SMB sont-ils mémorisés ?** Ouvrir l'Explorateur de fichiers et tenter d'accéder manuellement à `\\MYNAS\NomPartage`. Si un mot de passe est demandé, les identifiants ne sont pas enregistrés dans le Gestionnaire d'identifiants Windows. Les saisir et cocher **« Mémoriser »**.
3.  **Le pare-feu Windows bloque-t-il FeedDownloader Pro ?** Aller dans `Panneau de configuration → Pare-feu Windows Defender → Applications autorisées` et vérifier que FeedDownloader Pro est listé avec l'accès autorisé.
4.  **Le NAS prend-il en charge SMBv2/3 ?** Certains NAS anciens ne prennent en charge que SMBv1, désactivé par défaut sur Windows 11. Mettre à jour le firmware du NAS ou activer SMBv1 depuis le panneau d'administration du NAS.

---

### Problème : Les téléchargements sur NAS s'interrompent après quelques minutes

**Comment il se manifeste :** Le batch démarre normalement, télécharge quelques épisodes, puis se bloque avec des erreurs d'écriture ou de chemin inaccessible.

**Cause :** Le NAS passe en mode veille pendant le téléchargement. Certains NAS grand public ont une fonction d'économie d'énergie qui peut s'activer même pendant des transferts actifs si le dispositif est configuré pour surveiller uniquement le trafic web, en ignorant les connexions SMB.

**Solutions :**
*   Désactiver temporairement le mode veille depuis le panneau d'administration du NAS pendant les téléchargements batch.
*   Réduire le nombre de threads à 1 : un flux d'écriture continu prévient l'activation de la veille de manière plus efficace que des bursts intenses avec des pauses intermédiaires.

---

## Problèmes généraux

---

### Problème : L'interface répond avec du retard

**Comment il se manifeste :** Les clics nécessitent 1 à 2 secondes pour avoir une réponse, le défilement de la liste est saccadé, le programme semble lent.

**Causes probables :**

*   **Base de données de grande taille.** Avec des dizaines de milliers d'épisodes dans la base de données, certaines opérations peuvent ralentir. Envisager l'utilisation de **Réinitialiser la base de données** (**Paramètres → Avancé**) uniquement si l'archive contient de nombreux épisodes en erreur ou des données que l'on n'a pas l'intention de récupérer.
*   **Nombre élevé de threads sur du matériel avec peu de RAM.** Avec 5 threads actifs sur un système avec moins de 4 Go de RAM, le processus peut sembler lent. Réduire les threads à 1 ou 3.
*   **Antivirus analysant les fichiers `.part` en temps réel.** Certains logiciels de sécurité interceptent chaque opération d'écriture sur le disque, ralentissant les téléchargements. Ajouter le dossier de destination aux exclusions de l'antivirus.

---

### Problème : Le logiciel ne démarre pas ou se ferme immédiatement à l'ouverture

**Comment il se manifeste :** On lance le programme, le processus apparaît brièvement dans le Gestionnaire des tâches puis disparaît sans que l'interface soit affichée.

**Solutions :**

1.  **Consulter les journaux.** Accéder au dossier `%APPDATA%\FeedDownloaderPro\logs\` (Windows) ou `~/.config/FeedDownloaderPro/logs/` (Linux). Ouvrir le fichier journal le plus récent avec un éditeur de texte : la dernière ligne devrait indiquer la cause du problème.
2.  **Base de données corrompue.** Si le journal indique une erreur SQLite au démarrage, le fichier `feeddownloader.db` peut être corrompu. Le remplacer par une sauvegarde (voir le Chapitre 9). Si aucune sauvegarde n'est disponible, le renommer en `feeddownloader.db.bak` : le logiciel créera une nouvelle base de données vide au prochain démarrage (avec perte de l'historique).
3.  **Réinstaller le logiciel.** Désinstaller FeedDownloader Pro et installer la version la plus récente. La base de données et les paramètres ne sont pas supprimés lors de la désinstallation.

---

### Problème : J'ai perdu les données de la base de données — est-il possible de les récupérer ?

**Comment il se manifeste :** La base de données a été supprimée accidentellement, est corrompue, ou une réinitialisation a été effectuée sans sauvegarde préalable.

**Possibilités de récupération :**

*   **Avec une sauvegarde disponible :** Copier le fichier `feeddownloader.db` de sauvegarde dans le dossier de données utilisateur de l'application, programme fermé (voir le Chapitre 2 pour le chemin du dossier de données utilisateur).
*   **Sans sauvegarde :** Les fichiers audio sur le disque sont encore présents : seule la mémoire du logiciel a été perdue. Il est possible de reconstruire partiellement l'archive en analysant à nouveau les feeds : les épisodes dont les fichiers sont déjà présents sur le disque seront reconnus par le système et ne seront pas retéléchargés.
*   **Prévention :** Effectuer périodiquement une copie manuelle du fichier `feeddownloader.db` dans un emplacement sûr, ou exporter la liste des feeds au format OPML (voir le Chapitre 5) comme sauvegarde de la configuration. Il est conseillé d'effectuer cette sauvegarde avant toute migration ou mise à jour du logiciel.

---

*Ceci est le dernier chapitre du Manuel d'utilisation avancé de Runtime FeedDownloader Pro.*

*Pour toute assistance non couverte par ce manuel, se référer à la page officielle des releases ou contacter le support technique d'Ecosystem Runtime | Digital Core.*

---

*Ecosystem Runtime | Digital Core — Des outils construits pour durer.*
