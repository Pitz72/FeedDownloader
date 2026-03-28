# Chapitre 7 : NAS, disques réseau et chemins SMB

## 7.1 Pourquoi les disques réseau nécessitent une approche spécifique

La plupart des applications de téléchargement de bureau gèrent correctement les chemins locaux (`C:\`, `D:\`) et présentent des comportements imprévisibles lorsque la destination est un NAS, un serveur Windows partagé ou une unité SMB. La raison est technique : les disques réseau sont intrinsèquement moins fiables que les disques locaux. Le NAS peut être éteint, le réseau local peut subir des pics de latence, les identifiants SMB peuvent expirer. Toute opération sur un chemin réseau qui ne répond pas peut bloquer le thread principal de l'application pendant plusieurs dizaines de secondes, rendant l'interface non réactive.

FeedDownloader Pro gère correctement ces scénarios. Pour les utilisateurs qui archivent sur NAS, ce chapitre est essentiel.

---

## 7.2 Fonctionnement de la validation du chemin réseau

Chaque fois qu'un chemin de destination commençant par `\\` (chemin UNC, typique de SMB) ou correspondant à une unité réseau mappée (ex. `Z:\`) est défini, FeedDownloader Pro active automatiquement le **module de validation du chemin réseau**.

Ce module effectue trois opérations sur un **thread séparé**, sans jamais impliquer le thread de l'interface :

1.  **Test de accessibilité :** Tente d'accéder à la racine du chemin réseau. Si le NAS est éteint ou si le réseau est indisponible, cette opération échoue.
2.  **Test d'accès en lecture :** Vérifie que le dossier de destination existe et est lisible.
3.  **Test d'accès en écriture :** Crée puis supprime un fichier temporaire (`_fdp_write_test_[timestamp].tmp`) dans le dossier de destination pour vérifier les droits d'écriture.

L'ensemble de la séquence dispose d'un **timeout de 8 secondes**. Si aucune réponse n'est reçue dans ce délai, le logiciel considère le chemin comme indisponible et affiche un avertissement, sans bloquer l'interface.

*Justification du timeout :* La plupart des NAS grand public (Synology, QNAP, WD MyCloud) mettent 3 à 6 secondes pour sortir du mode veille. 8 secondes est un intervalle suffisant pour attendre cette reprise, tout en restant assez court pour ne pas constituer une attente perceptible pour l'utilisateur.

---

## 7.3 Configurer un chemin NAS

**Méthode 1 — Chemin UNC direct :**
Saisir le chemin au format `\\NomServeur\NomPartage\Dossier` :

```
\\MYNAS\Podcast\Archive
\\192.168.1.100\media\podcast
\\NAS-SYNOLOGY\video\audio_archive
```

Le chemin peut être saisi directement dans le champ texte de la destination, ou via la fenêtre de sélection de dossier, qui sur Windows prend en charge la navigation dans les chemins réseau.

**Méthode 2 — Unité réseau mappée :**
Si le NAS est déjà mappé comme unité réseau dans Windows (ex. `Z:` → `\\MYNAS\Podcast`), il est possible de sélectionner `Z:\Archive` comme dossier de destination. FeedDownloader Pro reconnaît automatiquement qu'il s'agit d'un chemin réseau et active la validation.

**Méthode 3 — macOS et Linux (point de montage) :**
Sur macOS et Linux, les chemins réseau SMB sont présentés comme des dossiers normaux dans le système de fichiers après le montage (ex. `/Volumes/MYNAS/Podcast` sur macOS, `/mnt/nas/podcast` sur Linux). Ces chemins peuvent être utilisés directement comme dossier de destination.

---

## 7.4 Identifiants SMB et authentification

Les identifiants d'accès au NAS doivent être configurés au niveau du système d'exploitation, et non à l'intérieur de FeedDownloader Pro.

**Sur Windows :**
1.  Ouvrir l'**Explorateur de fichiers** et naviguer jusqu'au chemin du NAS (`\\MYNAS\`).
2.  Saisir les identifiants lorsqu'ils sont demandés et cocher **« Mémoriser les identifiants »**.
3.  Les identifiants sont enregistrés dans le **Gestionnaire d'identifiants Windows** (`Panneau de configuration → Gestionnaire d'identifiants → Identifiants Windows`).
4.  FeedDownloader Pro, comme toute autre application, accédera au NAS sans demander d'identifiants supplémentaires.

**Sur macOS :**
Les identifiants SMB sont demandés au montage du partage (depuis le Finder : **Aller → Se connecter au serveur** → `smb://192.168.1.100/NomPartage`). macOS les mémorise dans le Trousseau.

**Sur Linux :**
Monter le partage avec les identifiants dans le fichier `fstab` ou via un outil graphique comme GNOME Files. Alternativement, utiliser `smbclient` ou `mount -t cifs` depuis le terminal.

---

## 7.5 Diagnostic des problèmes avec les chemins réseau

En cas d'avertissement « Chemin réseau inaccessible », vérifier les points suivants dans l'ordre indiqué.

**1. Le NAS est-il allumé et démarré ?**
Vérifier les voyants du dispositif. De nombreux NAS grand public passent en mode veille après une période d'inactivité. Avant de lancer le téléchargement, ouvrir le panneau d'administration du NAS depuis le navigateur pour vérifier sa disponibilité.

**2. Le NAS est-il accessible depuis le réseau ?**
Depuis l'Invite de commandes (Windows) ou le Terminal (macOS/Linux) :
```
ping 192.168.1.100
```
Remplacer par l'adresse IP du NAS. Si la commande reçoit une réponse, la connectivité réseau de base est fonctionnelle.

**3. Le partage SMB est-il accessible ?**
Tenter d'ouvrir le chemin `\\192.168.1.100\NomPartage` directement depuis l'Explorateur de fichiers Windows. Si l'opération échoue, le problème réside dans la configuration SMB du NAS, et non dans FeedDownloader Pro.

**4. Les droits d'écriture sont-ils corrects ?**
Créer manuellement un fichier dans le dossier de destination via le gestionnaire de fichiers. Si l'opération n'est pas autorisée, l'utilisateur avec lequel on accède au NAS ne dispose pas des droits d'écriture sur ce partage. Configurer les droits depuis le panneau d'administration du NAS.

**5. Le pare-feu bloque-t-il les connexions SMB ?**
Le protocole SMB utilise le port 445 (et dans certains cas le port 139). Vérifier que le pare-feu système ou tiers ne bloque pas ces ports pour les connexions sur le réseau local.

---

## 7.6 Performances optimales sur NAS

Les téléchargements sur NAS présentent une complexité supplémentaire par rapport à ceux sur disque local : les fichiers sont écrits via le réseau et la vitesse dépend à la fois de la largeur de bande du LAN et de la capacité d'écriture du NAS.

**Recommandations opérationnelles :**

*   **Utiliser une connexion câblée (Ethernet) :** Le Wi-Fi introduit de la latence et de l'instabilité dans les opérations d'écriture sur le réseau. Pour les archives volumineuses, une connexion Gigabit Ethernet câblée offre des performances significativement meilleures.
*   **Réduire les threads parallèles :** L'écriture simultanée de nombreux fichiers sur un NAS peut saturer ses entrées/sorties. Avec 2 à 3 threads parallèles, on obtient souvent de meilleurs résultats qu'en utilisant le nombre maximal disponible.
*   **Éviter les chevauchements avec les sauvegardes du NAS :** Si le NAS effectue des sauvegardes automatiques, éviter de lancer des téléchargements batch dans les mêmes plages horaires, car la compétition sur les entrées/sorties du disque ralentit les deux opérations.
*   **Utiliser un cache local :** Pour les archives très volumineuses, il est possible de télécharger d'abord sur un disque local rapide et de déplacer les fichiers sur le NAS à la fin du téléchargement.

---

*Voir le Chapitre 8 pour la configuration du template de renommage et des fonctionnalités de métadonnées.*
