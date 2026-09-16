# [STUDIO NAME] — Digital Creative Studio Website

Frontend-only React + Vite site (no backend, no database, no auth).

## Install & run

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this project to a GitHub repository.
2. In Vercel: **New Project → Import** the repository.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Deploy. No environment variables are required — this is a static frontend.

## Adding a new portfolio project

Open `src/data/projects.js` and add a new object to the `projects` array
(copy an existing one as a template). Give it a unique `id` and `slug`.
With `externalUrl: null`, the project automatically gets an internal detail
page at `/work/<slug>` built from the `detail` fields you provide — no new
route or component needed.

## Pointing a project at its live sample website

Once a sample site (e.g. the café concept) is designed and deployed on its
own, open `src/data/projects.js` and set that project's `externalUrl`:

```js
externalUrl: "https://your-deployed-sample.vercel.app",
```

The portfolio card will then open that URL directly in a new tab instead of
the internal `/work/<slug>` page — no other code changes required.

## Notes on structure

- All copywriting content lives close to the pages/components that render it,
  except portfolio data, which is centralized in `src/data/projects.js` as
  the single source of truth for both the `/work` grid and the `/work/:slug`
  detail pages.
- One dynamic `ProjectDetail.jsx` page renders all six project detail routes
  from that shared data, instead of six near-identical files — this avoids
  duplicated markup while still serving the exact `/work/cafe`, `/work/fashion`,
  `/work/skincare`, `/work/ai-product`, `/work/youtube` and `/work/social` URLs.
- The contact form is entirely frontend-only. On submit it opens a pre-filled
  `mailto:` link (via `window.location.href`) and shows an on-screen
  confirmation — nothing is sent to a server.
- "[STUDIO NAME]" and all contact details (email, WhatsApp, Instagram,
  LinkedIn) are placeholders — replace them before sending this to clients.
