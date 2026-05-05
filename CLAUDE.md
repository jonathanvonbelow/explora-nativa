# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server on port 3000
npm run build    # Production build
npm run preview  # Preview production build
npm run deploy   # Build and publish to GitHub Pages via gh-pages
```

No lint or test commands are configured.

## Architecture

**Explora Nativa** is a React 19 + TypeScript SPA built with Vite, showcasing native tree species of the Misiones subtropical forest (Jardín Botánico Selva Misionera, UNaM).

### File layout

Source files live at the **project root** — there is no `src/` directory. `App.tsx`, `index.tsx`, `types.ts`, and `constants.ts` are all at the root level alongside `index.html` and `vite.config.ts`. Components go in `components/` and views in `views/`. The Vite config aliases `@` to the project root.

### Routing

There is no React Router. Navigation is handled by a single `currentView` state in `App.tsx` with four values: `'home'`, `'map'`, `'learn'`, `'community'`. The `Layout` component renders the nav and passes `onNavigate` down to views.

### Key files

| File | Purpose |
|------|---------|
| `types.ts` | All TypeScript interfaces (`Species`, `TriviaQuestion`, `Comment`, `EcosystemService`) |
| `constants.ts` | All static data: 10 native species with map coordinates, 15 trivia questions, ecosystem services |
| `components/Layout.tsx` | Top navbar (desktop) + bottom nav (mobile) |
| `components/SpeciesModal.tsx` | 3-tab modal (General / Science / Culture) |
| `components/PanoramaViewer.tsx` | Full-screen panorama lightbox with pinch-to-zoom, drag-to-pan, and mouse-wheel zoom |
| `views/MapExplorer.tsx` | Interactive map using percentage-based pin positions from `Species.mapPosition` |
| `views/Learn.tsx` | Trivia quiz with CSS flip-card effect |
| `views/Community.tsx` | Visitor wall (comments) and survey with live charts; state persisted to `localStorage` |

### Styling

Tailwind CSS is loaded from CDN in `index.html` — **not** installed as an npm package. The custom theme (colors `jungle-*`, `earth-*`, `cream`, `stone-850/950`) and custom utilities (scrollbar hiding, 3D flip perspective) are defined inline in `index.html`. When adding new Tailwind utilities, check whether they need to be added to the inline config first. Fonts (Merriweather serif, Lato sans) are loaded from Google Fonts.

### Images

All images are served from `public/`:

- **Species photos** — local files at `/images/especies/{species-id}/1.JPG`, `2.JPG`, etc. (paths defined in `constants.ts` under each species' `photos` array).
- **Panoramas** — local files at `/images/panoramicas/{name}.jpg` (referenced via `Species.panoramaUrl`).
- **Garden map** — `public/images/mapa.png`.

The `compress-images.mjs` script at the project root uses `sharp` to batch-compress images.

### Persistence

`views/Community.tsx` persists visitor comments and survey results to `localStorage` under keys `explora-nativa-comments` and `explora-nativa-survey`.

### Deployment

The project is configured for both **GitHub Pages** (`npm run deploy` via `gh-pages`) and **Vercel** (project config in `.vercel/project.json`, Vercel project name `explora-nativa`). The Vite `base` is set to `'/'`.

### Environment

`.env.local` contains `GEMINI_API_KEY` which is wired into Vite config but not currently used in the codebase.
