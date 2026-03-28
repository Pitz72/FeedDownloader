# Chapitre 9 : Intégrité, statistiques et archivage

## 9.1 Pourquoi vérifier l'intégrité des fichiers

La fin d'un téléchargement ne garantit pas que le fichier reçu est intact. Un paquet réseau perdu pendant le transfert, une erreur d'écriture sur le disque ou une interruption à la dernière seconde peuvent produire un fichier formellement « présent » mais corrompu. En l'absence d'une vérification explicite, une archive apparemment complète peut contenir des fichiers audio non lisibles, dont la corruption n'est détectée qu'à la lecture.

FeedDownloader Pro répond à ce problème avec deux mécanismes complémentaires : la **vérification de la taille** (pendant le téléchargement) et la **vérification SHA-256** (à la fin).

---

## 9.2 La vérification SHA-256

**SHA-256** (Secure Hash Algorithm 256 bits) est une fonction cryptographique qui produit une empreinte numérique de 64 caractères hexadécimaux pour n'importe quel fichier. Deux fichiers identiques produisent toujours le même hash ; une différence d'un seul bit produit un hash complètement différent.

Pour chaque fichier téléchargé, FeedDownloader Pro :
1.  Calcule le hash SHA-256 du fichier à la fin du téléchargement.
2.  Enregistre le hash dans la base de données, avec le chemin du fichier et la date de calcul.
3.  Si le feed RSS inclut un hash de référence (certains feeds modernes incluent le champ `<podcast:integrity>`), il le compare avec celui calculé. En cas de divergence, le fichier est marqué comme **« Corrompu »** et remis en file d'attente pour un nouveau téléchargement.

**Utilisations pratiques :**
*   Il est possible de vérifier à tout moment futur qu'un fichier n'a pas été modifié, corrompu ou remplacé : il suffit de recalculer le hash et de le comparer avec celui enregistré dans la base de données.
*   Après le déplacement des fichiers sur un nouveau disque ou une migration, la **Vérification de l'archive** (voir la section 9.4) permet de vérifier que tous les fichiers sont encore présents.
*   Dans les contextes professionnels, le hash SHA-256 constitue une référence vérifiable de l'intégrité du contenu au moment du téléchargement.

---

## 9.3 Les métadonnées audio extraites

À la fin de chaque téléchargement, FeedDownloader Pro extrait automatiquement les **métadonnées techniques** du fichier audio. Ces informations sont lues directement depuis le fichier (et non depuis le feed RSS) et enregistrées dans la base de données.

**Métadonnées extraites :**

| Champ | Description | Exemple |
|-------|-------------|---------|
| **Bitrate** | Qualité audio en kilobits par seconde | `128 kbps`, `320 kbps` |
| **Sample rate** | Fréquence d'échantillonnage | `44100 Hz`, `48000 Hz` |
| **Taille sur disque** | Taille réelle du fichier téléchargé | `67,4 Mo` |

Ces valeurs sont enregistrées dans la base de données et sont incluses dans l'export CSV (voir la section 9.6).

---

## 9.4 Vérification de l'archive : contrôle d'intégrité

Au fil du temps, une archive peut subir des modifications externes au logiciel : fichiers déplacés ou supprimés directement depuis le système de fichiers. La **Vérification de l'archive** contrôle l'état de l'archive par rapport à ce qui est enregistré dans la base de données.

**Comment effectuer la Vérification de l'archive :**
Aller dans **Paramètres → Archive → Vérification de l'archive** et cliquer sur **« Lancer la vérification »**.

Le processus analyse chaque fichier enregistré dans la base de données et vérifie que le fichier existe encore dans le chemin enregistré. À la fin, un récapitulatif est affiché avec trois indicateurs :

| Indicateur | Signification |
|------------|---------------|
| **Total** | Nombre total d'épisodes dans la base de données |
| **Présents** | Fichiers qui existent dans le chemin enregistré |
| **Manquants** | Fichiers non trouvés dans le chemin enregistré |

L'écran affiche également l'**espace disque total** occupé par les fichiers présents.

En présence de fichiers manquants, le logiciel liste les 5 premiers avec le nom du podcast et le nom du fichier. Pour récupérer un fichier manquant, utiliser la fonction **« Forcer le re-téléchargement »** disponible depuis le menu contextuel de l'épisode dans la liste principale.

---

## 9.5 Statistiques de l'archive

La section statistiques est accessible depuis **Paramètres → Archive** et fournit une vue d'ensemble synthétique des données enregistrées dans la base de données :

*   **Fichiers téléchargés :** Nombre total d'épisodes présents dans la base de données.
*   **Podcasts :** Nombre de feeds distincts représentés dans l'archive.
*   **Plage temporelle :** Date du premier et du dernier épisode téléchargé.

Les statistiques sont mises à jour automatiquement à chaque ouverture du panneau Paramètres.

---

## 9.6 Export CSV

L'export CSV génère un fichier avec les données de chaque épisode présent dans la base de données. Il est utile pour intégrer FeedDownloader Pro avec d'autres outils (tableurs, systèmes de gestion de contenu, scripts d'automatisation).

**Comment exporter :**
Aller dans **Paramètres → Archive → Exporter en CSV** et choisir l'emplacement où enregistrer le fichier.

**Colonnes de l'export :**

| Colonne | Contenu |
|---------|---------|
| `Podcast` | Nom du podcast |
| `Episode Title` | Titre de l'épisode |
| `Publish Date` | Date de publication |
| `Downloaded At` | Date et heure du téléchargement |
| `File Size (bytes)` | Taille du fichier en octets |
| `Bitrate (kbps)` | Bitrate audio en kilobits par seconde |
| `Sample Rate (Hz)` | Fréquence d'échantillonnage en hertz |
| `SHA-256 Checksum` | Hash SHA-256 du fichier |
| `Validation Status` | Résultat du dernier contrôle d'intégrité |
| `GUID` | Identifiant unique de l'épisode dans le feed RSS |

*Format du fichier :* CSV avec séparateur virgole (`,`), encodage UTF-8 avec BOM (pour la compatibilité avec Microsoft Excel). Les champs contenant des virgules sont encadrés par des guillemets.

---

## 9.7 Migration de l'archive

Pour déplacer l'archive vers un nouveau disque ou un nouveau dossier, utiliser la fonction de migration intégrée, qui maintient la base de données synchronisée avec la nouvelle position des fichiers.

**Procédure :**
1.  Aller dans **Paramètres → Archive → Migrer l'archive**.
2.  Sélectionner le **nouveau dossier de destination** via la fenêtre de sélection.
3.  Le logiciel déplace physiquement tous les fichiers audio dans le nouveau dossier et met à jour les chemins dans la base de données.
4.  À la fin, un récapitulatif est affiché : nombre de fichiers déplacés et éventuelles erreurs.

*Attention :* La migration déplace les fichiers depuis le dossier actuel vers le nouveau. Les fichiers sont supprimés de l'emplacement d'origine. Vérifier que le disque de destination dispose d'un espace suffisant avant de lancer l'opération.

*Déplacement vers un nouvel ordinateur :* Copier à la fois le dossier des fichiers audio et le fichier `feeddownloader.db` (depuis le dossier de données utilisateur décrit au Chapitre 2). Sur le nouvel ordinateur, installer FeedDownloader Pro, copier la base de données dans le dossier de données utilisateur et utiliser la fonction de migration si le chemin de l'archive a changé.

---

*Voir le Chapitre 10 pour les paramètres avancés du logiciel.*
