# Chapitre 10 : Paramètres avancés

## 10.1 Vue d'ensemble du panneau Paramètres

Le panneau des paramètres est accessible à tout moment via l'icône d'engrenage (⚙) dans le coin supérieur de l'interface. Les paramètres sont organisés en cinq onglets thématiques : **Général**, **Download**, **Métadonnées**, **Archive** et **Avancé**. Toutes les modifications sont enregistrées automatiquement : aucune confirmation avec un bouton dédié n'est nécessaire.

---

## 10.2 Download

Cette section contient les contrôles principaux du moteur de téléchargement. Les paramètres techniques internes (timeout de connexion, nombre de retries, stall detection) sont fixes dans le moteur et ne nécessitent pas de configuration manuelle.

### Téléchargements parallèles

Le nombre de téléchargements simultanés. Sélectionnable parmi trois presets : **1**, **3** et **5**. Pour les recommandations sur le choix de la valeur, voir le Chapitre 6.

**Valeur par défaut :** 3

### Limite de vitesse

Permet de limiter la bande passante agrégée utilisée par tous les téléchargements actifs, pour éviter les interférences avec d'autres activités réseau.

**Valeurs disponibles :** `0` = aucune limite (par défaut) ; toute valeur positive en KB/s. Exemple : `500` limite la consommation totale à environ 4 Mbps.

---

## 10.3 Filtre par mots-clés

Le filtre textuel permet de **restreindre la liste des épisodes affichés** en fonction du texte contenu dans le titre. C'est un outil de consultation et de sélection rapide, particulièrement utile avec les catalogues de grande taille.

**Comment utiliser le filtre :**
La barre de filtre est positionnée dans la partie supérieure de la liste des épisodes, immédiatement sous les contrôles du batch. En saisissant un ou plusieurs termes, la liste se met à jour en temps réel en affichant uniquement les épisodes dont le titre contient **tous les termes saisis** (logique AND).

*   Pour rechercher les épisodes contenant le mot « interview », saisir `interview`.
*   Pour rechercher les épisodes contenant à la fois « interview » et « 2024 », saisir `interview 2024`.
*   Le filtre ne distingue pas les majuscules des minuscules : `Bonus` et `bonus` produisent le même résultat.

**Cas d'utilisation typiques :**
*   Identifier rapidement les épisodes d'une saison spécifique dans un catalogue étendu.
*   Sélectionner un sous-ensemble d'épisodes à télécharger sans parcourir toute la liste.
*   Vérifier si un épisode avec un titre particulier est déjà présent dans la base de données.

*Remarque :* Le filtre agit sur l'affichage de la liste en cours et ne modifie ni la file de téléchargement ni l'état des épisodes dans la base de données. Pour supprimer le filtre, vider la barre de texte.

---

## 10.4 Général

### Langue

FeedDownloader Pro est disponible en 8 langues : Italiano, English, Deutsch, Español, Français, Português, Русский, 中文.

Le changement de langue est immédiat : l'interface se met à jour sans nécessiter de redémarrage du logiciel. L'application utilise exclusivement le thème sombre « Obsidian Command » : aucun thème clair ni sélecteur de densité de liste n'est disponible.

---

## 10.5 Sécurité : le système anti-SSRF à 5 niveaux

Cette section est documentée à titre informatif : le système de sécurité fonctionne de manière entièrement automatique et ne nécessite aucune configuration de la part de l'utilisateur.

**Qu'est-ce qu'une attaque SSRF ?**
SSRF (Server-Side Request Forgery) est un type d'attaque dans lequel une URL malveillante, au lieu de pointer vers une ressource publique, pointe vers des ressources internes du réseau (comme le panneau d'administration du routeur, un NAS ou un serveur local). Dans le contexte d'un téléchargeur, un feed RSS construit de manière malveillante pourrait inclure des URL audio pointant vers ces ressources internes.

**Les 5 niveaux de validation :**

1.  **Validation du protocole :** Seuls les protocoles `http://` et `https://` sont acceptés. Les protocoles tels que `file://`, `ftp://`, `data:`, `javascript:` sont rejetés immédiatement.

2.  **Validation syntaxique de l'URL :** L'URL est analysée pour vérifier sa conformité au standard RFC 3986.

3.  **Résolution DNS avec inspection de l'IP :** Le domaine dans l'URL est résolu en adresse IP. Si la résolution échoue, l'URL est rejetée. Si la résolution réussit, l'adresse IP résultante est vérifiée au niveau suivant.

4.  **Blocage des adresses IP privées et réservées :** Toutes les adresses IP appartenant à des plages privées ou réservées sont bloquées, notamment :
    *   `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16` (réseaux privés RFC 1918)
    *   `127.0.0.0/8` (loopback)
    *   `169.254.0.0/16` (link-local)
    *   `::1/128` (loopback IPv6)
    *   `fc00::/7` (unique local IPv6)
    *   Toute adresse pointant vers l'hôte local.

5.  **Blocage des ports non standard :** Seuls les ports 80 et 443 sont acceptés. Les URL avec des ports non standard (ex. `:8080`, `:3000`, `:22`) sont rejetées.

*Remarque pour les environnements d'entreprise :* Si le réseau de l'entreprise inclut des serveurs de podcasts internes accessibles via des adresses IP privées, le système anti-SSRF bloquera ces URL. Dans ce cas, contacter le support pour une configuration personnalisée incluant des plages d'adresses IP spécifiques dans la liste blanche interne.

---

## 10.6 Avancé

### Mises à jour

FeedDownloader Pro inclut un système de mise à jour automatique intégré.

**Vérification automatique au démarrage :** Dans la version installée (package), le logiciel vérifie automatiquement la disponibilité de nouvelles mises à jour 3 secondes après le démarrage, en interrogeant le dépôt GitHub. Si une nouvelle version est disponible, le téléchargement démarre en arrière-plan sans nécessiter aucune action.

**Vérification manuelle :** Le bouton **« Vérifier les mises à jour »** dans l'onglet **Avancé** force une vérification immédiate à tout moment.

Si une nouvelle version est disponible, le logiciel la télécharge en arrière-plan et affiche le bouton **« Installer et redémarrer »**. L'installation n'est jamais lancée automatiquement : la décision appartient toujours à l'utilisateur.

**États affichés pendant le processus :**
*   **Vérification en cours…** — le logiciel interroge le dépôt GitHub.
*   **À jour** — la version installée est la plus récente.
*   **Nouvelle version disponible (vX.Y.Z)** — téléchargement en cours en arrière-plan.
*   **Mise à jour prête** — le package a été téléchargé et est prêt à être installé.

### Réinitialiser la base de données

Supprime complètement la base de données et repart avec une archive vide. **Cette opération est irréversible.** Le logiciel demande une double confirmation explicite avant de procéder. Les fichiers audio sur le disque ne sont pas supprimés : seule la mémoire interne du logiciel est effacée (historique des téléchargements, métadonnées, statistiques).

*Quand l'utiliser :* Uniquement lorsque l'on souhaite repartir d'une archive entièrement vide, par exemple après une migration vers un nouveau système ou pour supprimer les données d'un cycle de test.

---

*Voir le Chapitre 11 pour la résolution des problèmes les plus courants.*
