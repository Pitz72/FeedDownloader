# Chapitre 2 : Installation et premier lancement

## 2.1 Configuration requise

Runtime FeedDownloader Pro est une application de bureau basée sur la technologie Electron. Elle est autonome et ne nécessite pas l'installation de runtimes supplémentaires (Node.js, .NET, Java) : tout le nécessaire est inclus dans le package d'installation.

**Configuration minimale requise :**

| Système d'exploitation | Version minimale | Architecture |
|------------------------|-----------------|--------------|
| Windows | 10 (build 1903) ou Windows 11 | 64 bits (x64) |
| macOS | 11.0 Big Sur | Intel x64 ou Apple Silicon (M1/M2/M3) |
| Linux | Ubuntu 22.04 LTS, Debian 11, Fedora 36 ou distributions équivalentes | 64 bits (x64) |

**Configuration matérielle recommandée :**
*   **RAM :** 4 Go (8 Go recommandés pour les archives de grande taille avec plusieurs threads actifs)
*   **Espace disque :** 200 Mo pour l'installation du programme, plus l'espace nécessaire pour l'archive audio
*   **Connexion :** Haut débit (au moins 10 Mbps pour utiliser les téléchargements parallèles de manière efficace)

*Remarque pour les utilisateurs Linux :* Le logiciel est distribué au format `.AppImage`, autonome et utilisable sur n'importe quelle distribution moderne disposant de bibliothèques glibc à jour, sans procédure d'installation traditionnelle.

---

## 2.2 Installation sur Windows

1.  Télécharger le fichier d'installation `Runtime-FeedDownloader-Pro-Setup-0.7.5.exe` depuis la page des releases officielle.
2.  Double-cliquer sur le fichier téléchargé pour lancer le programme d'installation.
3.  Si Windows affiche un avertissement **« Windows a protégé votre PC »** (SmartScreen), cliquer sur **« Informations complémentaires »** puis sur **« Exécuter quand même »**. Cet avertissement est standard pour les logiciels distribués en dehors du Microsoft Store qui n'ont pas encore atteint un seuil suffisant d'adoption pour le système de réputation de Windows.
4.  Suivre les instructions à l'écran : accepter le contrat de licence, choisir le dossier d'installation et cliquer sur **« Installer »**.
5.  À la fin de l'installation, un raccourci sera disponible sur le **Bureau** et une entrée dans le menu **Démarrer**.

**Chemins d'installation et de données :**
Le programme est installé dans `C:\Program Files\Runtime FeedDownloader Pro\`. La base de données et les fichiers de configuration sont enregistrés séparément dans `C:\Users\[VotreNom]\AppData\Roaming\FeedDownloaderPro\`. Cette séparation garantit que la désinstallation du programme ne touche pas aux données de l'archive.

---

## 2.3 Installation sur macOS

1.  Télécharger le fichier `Runtime-FeedDownloader-Pro-0.7.5.dmg`.
2.  Ouvrir le fichier `.dmg` avec un double-clic. Une fenêtre affichant l'icône de l'application apparaît.
3.  Faire glisser l'icône de **FeedDownloader Pro** dans le dossier **Applications**, comme indiqué par la flèche dans la fenêtre du `.dmg`.
4.  **Premier lancement sur macOS :** Comme le logiciel n'est pas distribué via le Mac App Store, macOS affichera un avertissement de sécurité à la première ouverture. Pour continuer :
    *   Aller dans **Réglages Système → Confidentialité et sécurité**.
    *   Dans la section « Sécurité », le message *« FeedDownloader Pro a été bloqué… »* sera visible.
    *   Cliquer sur **« Ouvrir quand même »** puis sur **« Ouvrir »** dans la fenêtre de confirmation.
    *   Lors des lancements suivants, le logiciel s'ouvrira normalement avec un double-clic.

*Remarque pour les utilisateurs Apple Silicon (M1/M2/M3) :* Une version native ARM est disponible. Pour des performances optimales, télécharger le fichier `.dmg` avec le suffixe `-arm64`. La version x64 est utilisable via Rosetta 2, mais la version ARM est plus efficace.

---

## 2.4 Installation sur Linux

1.  Télécharger le fichier `Runtime-FeedDownloader-Pro-0.7.5.AppImage`.
2.  Rendre le fichier exécutable. Les méthodes disponibles sont :
    *   **Via l'interface graphique :** clic droit sur le fichier → Propriétés → onglet Permissions → cocher « Autoriser l'exécution du fichier comme programme ».
    *   **Via le terminal :** `chmod +x Runtime-FeedDownloader-Pro-0.7.5.AppImage`
3.  Lancer le fichier avec un double-clic ou depuis le terminal : `./Runtime-FeedDownloader-Pro-0.7.5.AppImage`

**Intégration avec le bureau (optionnel) :**
Pour ajouter FeedDownloader Pro au launcher et au menu des applications, il est possible d'utiliser **AppImageLauncher** (disponible dans les dépôts de la plupart des distributions), qui intègre automatiquement les fichiers AppImage dans le système.

*Remarque pour les environnements sandbox :* Sur les distributions utilisant **Flatpak** ou des environnements avec des restrictions d'accès au système de fichiers, le logiciel pourrait ne pas accéder aux chemins réseau SMB. Dans ce cas, vérifier que le système de fichiers réseau est monté et accessible depuis le gestionnaire de fichiers avant de lancer le programme.

---

## 2.5 Premier lancement

À la première ouverture, le logiciel est immédiatement opérationnel. Aucune configuration initiale n'est requise, ni la création d'un compte ou la saisie d'une licence. L'interface se présente avec la barre de saisie URL au centre et la liste des épisodes vide.

**Fichiers créés au premier lancement :**
Le programme génère automatiquement dans le dossier de données utilisateur les fichiers suivants :
*   `feeddownloader.db` — La base de données SQLite principale. Elle contient l'intégralité de l'historique des téléchargements, les métadonnées des épisodes et l'état de l'archive. **Ce fichier ne doit pas être supprimé.**
*   `settings.json` — Les préférences utilisateur (langue, nombre de threads, dossier de destination par défaut, etc.).
*   `logs/` — Le dossier des fichiers journaux, utile pour le diagnostic en cas de problème.

---

## 2.6 Mises à jour

Lorsqu'une nouvelle version est disponible, le logiciel affiche une notification dans la barre inférieure de l'interface. L'installation de la mise à jour requiert toujours le consentement explicite de l'utilisateur.

Avant de mettre à jour, le logiciel effectue automatiquement une sauvegarde de la base de données. Dans tous les cas, les données de l'archive ne sont pas modifiées lors d'une mise à jour : seuls les fichiers du programme sont remplacés.

*Remarque :* Avant de mettre à jour vers une version majeure (par exemple de 0.7.x à 0.8.x), il est conseillé d'effectuer une copie manuelle du fichier `feeddownloader.db` dans un emplacement sûr.

---

*Voir le Chapitre 3 pour une description détaillée des éléments de l'interface.*
