# Photos à fournir — The Park Lodge

Ce fichier liste **toutes** les photos nécessaires pour remplacer les
placeholders (blocs verts avec dégradé) actuellement sur le site.

## Comment faire (2 options)

**Option A — recommandée : déposer les fichiers directement**
Enregistrez chaque photo dans le dossier `public/images/` de ce projet,
avec **exactement** le nom de fichier indiqué dans la colonne "Nom de
fichier" ci-dessous (ex: `hotel-exterior.jpg`). Je m'occupe ensuite de les
intégrer partout où c'est nécessaire, optimisées automatiquement.
→ Le plus fiable : pas de lien qui expire, pas de droits d'accès à gérer.

**Option B — lien externe**
Si c'est plus simple pour vous, collez un lien (Google Drive, WeTransfer,
Dropbox...) dans la colonne "Lien" en face de chaque photo. Assurez-vous
que le lien est en accès "public" ou "toute personne avec le lien", sinon
je ne pourrai pas la télécharger.

Vous pouvez mélanger les deux méthodes, ligne par ligne — peu importe.

---

## Liste des photos

| # | Sujet | Nom de fichier | Statut | Utilisé sur |
|---|-------|-----------------|--------|-------------|
| 1 | Façade / extérieur de l'hôtel | `hotel-exterior.jpg` | ✅ Intégrée | Accueil (section "Welcome"), Galerie (grande tuile) |
| 2 | Lobby / réception | `lobby.jpg` | ✅ Intégrée | Galerie |
| 3 | Standard Room | `room-standard.jpg` | ✅ Intégrée | Accueil, page Rooms & Suites, Galerie |
| 4 | Deluxe Room *(nouvelle catégorie, ajoutée sur le site)* | `room-deluxe.jpg` | ✅ Intégrée | Accueil, page Rooms & Suites |
| 5 | Executive Suite | `room-executive.jpg` | ✅ Intégrée | Accueil, page Rooms & Suites |
| 6 | Self-Catering Apartment | `room-apartment.jpg` | ✅ Intégrée | Accueil, page Rooms & Suites |
| 7 | Café on Park (restaurant) | `cafe-on-park.jpg` | ✅ Intégrée | Accueil, page Dining, Galerie |
| 8 | Pool Bar | `pool-bar.jpg` | ✅ Intégrée | Accueil, Galerie |
| 9 | Salle de conférence / événements | `conference-venue.jpg` | ✅ Intégrée (salle "Magnolia") | Page Meetings & Events, Galerie |
| 10 | Piscine | `pool.jpg` | ✅ Intégrée | Galerie |
| 11 | Spa | `spa.jpg` | ✅ Intégrée (+ ajoutée aux facilités) | Galerie, liste des facilités |
| 12 | Salle de sport / Gym | `gym.jpg` | ⏳ En attente | Galerie |
| 13 | Moment client / expérience | `guest-experience.jpg` | ⏳ En attente | Galerie |

**11 sur 13 sont déjà en ligne.** Il ne manque plus que : le gym et une
photo d'ambiance/expérience client.

> Vos dossiers "Rooms" contenaient aussi un 2e jeu de photos d'appartement
> (`Apt 2`) — non utilisé pour l'instant (une seule photo par catégorie
> suffit), mais conservé dans l'archive si vous voulez varier la galerie
> plus tard.

Les photos brutes originales (toutes les prises de vue, pas seulement
celles retenues) sont conservées dans `photos-source/` à la racine du
projet — ce dossier n'est jamais publié sur le site ni sur Git, c'est
juste une archive locale.

**Photo du Hero (bannière d'accueil)** : déjà en place (`hero.jpg`), pas besoin
de la refournir sauf si vous voulez la changer.

---

## Notes

- **Format** : JPEG ou PNG de préférence (pas besoin de convertir un iPhone
  en HEIC — voir échange précédent). Une photo de bonne résolution
  suffit, je m'occupe de la compresser/redimensionner pour le web.
- **Une même photo peut couvrir plusieurs lignes** si elle convient à
  plusieurs usages (ex: la même photo de chambre standard peut servir à
  la fois sur l'accueil et sur la page Rooms).
- Si une photo n'est pas encore disponible, laissez la ligne vide — le
  placeholder actuel restera en attendant.
