# The Park Lodge — site web

Next.js 14 (App Router) + TypeScript + Tailwind CSS + GSAP + Font Awesome.

## Démarrage

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:3000

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

## Remplacer les images placeholder

Toutes les zones photo utilisent `<PlaceholderPhoto />` pour l'instant (dégradé
pine/sage + arc + libellé), en attendant les vraies photos. Pour les
remplacer :

1. Déposer les fichiers dans `public/images/`
2. Remplacer `<PlaceholderPhoto ... />` par un composant Next `<Image src="/images/xxx.jpg" ... />`

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
