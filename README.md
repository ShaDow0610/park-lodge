# The Park Lodge — site web

Next.js 14 (App Router) + TypeScript + Tailwind CSS + GSAP + Font Awesome.

## Démarrage

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:3000

`npm run build` et `npm start` utilisent `.next-production/`, séparé du
dossier `.next/` de développement pour éviter les conflits avec `npm run dev`.

## Structure

```
src/
  app/
    layout.tsx        → layout global (polices, header, footer, sticky book bar)
    page.tsx           → page d'accueil (Home)
    globals.css         → design tokens (variables CSS) + styles de base
    rooms/              → page Rooms & Suites (à venir)
    dining/             → page Dining (à venir)
    events/             → page Meetings & Events (à venir)
    gallery/            → page Gallery (à venir)
    contact/            → page Contact (à venir)
  components/
    Header.tsx           → nav fixe, menu mobile, toggle dark mode
    Footer.tsx
    StickyBookBar.tsx     → barre "Book Now" mobile qui apparaît au scroll
    Hero.tsx              → hero avec animation GSAP (stagger texte + parallax)
    BookingWidget.tsx      → barre de recherche flottante
    SectionHead.tsx        → titre de section avec l'arc signature qui se dessine au scroll
    RevealOnScroll.tsx     → wrapper GSAP ScrollTrigger.batch pour les reveals
    PlaceholderPhoto.tsx   → placeholder visuel stylisé (à remplacer par les vraies photos)
    ArcMotif.tsx           → motif d'arc décoratif (issu du logo)
```

## Photos et optimisation

Les photos proviennent exclusivement de Pixieset. Leurs liens sont regroupés
dans `src/lib/photos.ts` ; aucun fichier photo local n'est utilisé.
Next Image adapte la résolution à l'écran, compresse les images et les met
en cache pendant au moins 24 heures. Le hero est chargé en priorité et les
autres photos à la demande. Les proportions réservées évitent les décalages
de mise en page pendant le chargement.

## Design tokens

Les couleurs de marque (pine, sage, brass) sont fixes et définies dans
`tailwind.config.ts`. Les couleurs "de surface" (stone, sand, ink, grey,
line) changent selon le mode clair/sombre — elles sont pilotées par des
variables CSS dans `globals.css`, togglées via l'attribut
`data-theme="dark"` sur `<html>` (voir `Header.tsx`).

## État d'avancement

- [x] Scaffolding du projet (config, layout, header, footer, sticky bar)
- [x] Page d'accueil (Home)
- [ ] Page Rooms & Suites
- [ ] Page Dining
- [ ] Page Meetings & Events
- [ ] Page Gallery
- [ ] Page Contact
