# Chapitre 8 : Organisation des fichiers, templates et métadonnées

## 8.1 Le problème des noms non significatifs

Lorsqu'un fichier audio est publié sur un serveur de podcast, son nom original est souvent peu lisible : `ep_2024_03_15_FINALE_v2_mixdown.mp3`, `podcast-episode-187-compressed.m4a`, ou même simplement `abc123def456.mp3` sont des exemples courants. Ces noms ont un sens pour les systèmes du producteur, mais rendent une archive difficile à consulter.

FeedDownloader Pro résout ce problème grâce au **système de templates de renommage** : un mécanisme permettant de définir un format de nom personnalisé pour tous les fichiers téléchargés, en utilisant des informations extraites directement du feed RSS.

---

## 8.2 Fonctionnement du template

Un template de renommage est une chaîne de texte pouvant contenir du texte fixe et des **tokens** — des variables encadrées par des accolades simples (`{ }`). À la fin de chaque téléchargement, le logiciel remplace chaque token par la valeur correspondante de l'épisode.

**Exemple :**

Template configuré : `{date} - {podcast} - {title}`

Résultat : `2024-03-15 - Le Podcast de Marie - Épisode 187 : L'intelligence artificielle bien expliquée.mp3`

L'extension du fichier (`.mp3`, `.m4a`, etc.) est ajoutée automatiquement en fonction du format du fichier original : elle ne fait pas partie du template.

---

## 8.3 Les tokens disponibles

| Token | Description | Exemple |
|-------|-------------|---------|
| `{title}` | Titre de l'épisode issu du feed RSS | `Épisode 187 : L'IA bien expliquée` |
| `{podcast}` | Nom du podcast (titre du canal RSS) | `Le Podcast de Marie` |
| `{date}` | Date de publication au format `YYYY-MM-DD` | `2024-03-15` |
| `{year}` | Année de publication | `2024` |
| `{month}` | Mois de publication (2 chiffres) | `03` |
| `{day}` | Jour de publication (2 chiffres) | `15` |

*Remarque :* Si dans le template est inséré un texte entre accolades qui ne correspond à aucun des tokens listés (par exemple `{episode}`), le texte est laissé tel quel dans le nom de fichier résultant.

---

## 8.4 Templates recommandés

**Template par défaut :**
```
{title}
```
Le template par défaut utilise uniquement le titre de l'épisode. Il convient aux catalogues avec des titres descriptifs.

**Pour usage général (recommandé) :**
```
{date} - {title}
```
Résultat : `2024-03-15 - Épisode 187 : L'IA bien expliquée.mp3`

Ce format est recommandé car le tri alphabétique des fichiers coïncide avec le tri chronologique.

**Pour les archives multi-podcasts (dossier partagé) :**
```
{podcast} - {date} - {title}
```
Résultat : `Le Podcast de Marie - 2024-03-15 - Épisode 187.mp3`

Utile lorsque tous les podcasts sont enregistrés dans le même dossier de destination.

**Pour une organisation en sous-dossiers par année et mois :**
```
{year}/{month}/{date} - {title}
```
Crée une structure de sous-dossiers automatique (voir la section 8.7).

---

## 8.5 Normalisation automatique des noms

Certains caractères ne sont pas autorisés dans les noms de fichiers sur les principaux systèmes d'exploitation : `/`, `\`, `:`, `*`, `?`, `"`, `<`, `>`, `|` sur Windows.

FeedDownloader Pro applique automatiquement une **normalisation** au nom résultant du template :

*   Les caractères non autorisés sont remplacés par un tiret (`-`) ou supprimés.
*   Les doubles espaces sont réduits à un espace simple.
*   Les tirets ou espaces en début et fin de nom sont supprimés.
*   Le nom est tronqué à 240 caractères s'il dépasse la limite du système de fichiers.

*Remarque sur les titres longs :* Certains podcasts utilisent des titres très descriptifs (plus de 150 caractères). L'utilisation du token `{title}` dans le template peut produire des noms de fichiers très longs. Dans ces cas, associer `{date}` comme élément chronologique principal peut limiter la longueur totale du nom.

---

## 8.6 Configurer le template

Le template de renommage se configure dans **Paramètres → Métadonnées**.

Le champ texte accepte toute combinaison de texte et de tokens. Sous le champ, un aperçu en temps réel est disponible, montrant le résultat du template appliqué à un épisode d'exemple, pour vérifier le format avant d'enregistrer.

Le template par défaut est `{title}`.

---

## 8.7 Organisation en sous-dossiers

Dans le template, il est possible d'utiliser le caractère `/` pour créer une structure de **sous-dossiers** automatique à l'intérieur du dossier de destination.

**Exemple — organisation par année et mois :**
```
{year}/{month}/{date} - {title}
```

Avec un dossier de destination `D:\Archive Podcasts\Le Podcast de Marie\`, le résultat sera :
```
D:\Archive Podcasts\Le Podcast de Marie\
    ├── 2024\
    │   ├── 01\
    │   │   ├── 2024-01-08 - Premier Épisode de l'Année.mp3
    │   │   └── 2024-01-22 - Deuxième Épisode.mp3
    │   └── 03\
    │       └── 2024-03-15 - Épisode 187.mp3
    └── 2023\
        └── 12\
            └── 2023-12-20 - Dernier Épisode de 2023.mp3
```

Les sous-dossiers sont créés automatiquement s'ils n'existent pas.

*Attention :* Le caractère `\` (backslash) n'est pas pris en charge comme séparateur de chemin dans le template. Toujours utiliser `/` (slash), que le logiciel traduit correctement pour le système d'exploitation utilisé.

---

## 8.8 Fichier sidecar JSON

Dans l'onglet **Paramètres → Métadonnées**, un toggle **« Fichier sidecar .json »** est disponible.

Lorsqu'il est activé, pour chaque fichier audio téléchargé, un fichier `.json` avec le même nom est créé dans le même dossier. Le fichier contient les métadonnées de l'épisode au format structuré :

```json
{
  "title": "Épisode 187 : L'IA bien expliquée",
  "podcast": "Le Podcast de Marie",
  "date": "2024-03-15",
  "sourceUrl": "https://media.exemple.fr/ep187.mp3"
}
```

**Cas d'utilisation :**
*   Intégration avec des scripts d'automatisation ou des systèmes qui lisent les métadonnées directement depuis le système de fichiers sans interroger la base de données.
*   Conservation des métadonnées de manière indépendante de la base de données, utile en cas de migration ou de reconstruction de l'archive.

Cette option est désactivée par défaut.

---

## 8.9 Balisage ID3

Dans l'onglet **Paramètres → Métadonnées**, un toggle **« Balisage ID3 »** est disponible.

Lorsqu'il est activé, à la fin de chaque téléchargement, le logiciel écrit les métadonnées directement à l'intérieur du fichier `.mp3`, dans les balises ID3 standard :

*   **Titre :** Le titre de l'épisode
*   **Artiste :** Le nom du podcast
*   **Année :** L'année de publication
*   **Couverture :** L'image du podcast (si disponible dans le feed RSS)

Les balises ID3 sont reconnues par les principaux lecteurs audio (Windows Media Player, VLC, iTunes, Foobar2000) et permettent d'afficher les informations de l'épisode indépendamment du nom du fichier.

*Remarque :* Le balisage ID3 s'applique exclusivement aux fichiers `.mp3`. Les fichiers dans d'autres formats (`.m4a`, `.ogg`, `.opus`) ne sont pas modifiés, même avec cette option active.

Cette option est désactivée par défaut.

---

*Voir le Chapitre 9 pour la vérification de l'intégrité et la gestion de l'archive.*
