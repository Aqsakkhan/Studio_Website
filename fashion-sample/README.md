# [BOUTIQUE NAME] — Sample Fashion Boutique Website

Frontend-only concept site for the "Fashion Boutique" portfolio project. React + Vite +
Tailwind, no backend.

## Install & run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this folder to its own GitHub repository.
2. In Vercel: **New Project → Import** the repo. Framework preset: **Vite**.
3. Deploy — you'll get a live URL like `https://fashion-sample.vercel.app`.

## Connect it back to the main studio site

Once deployed, copy the live URL and open the **main studio website's**
`src/data/projects.js`. Find the `fashion` project and set:

```js
externalUrl: "https://your-deployed-fashion-url.vercel.app",
```

The studio site's "Fashion Boutique" portfolio card will then open this live
site directly in a new tab instead of its internal placeholder page.

## Placeholders to replace before sending to a real client

- `[BOUTIQUE NAME]` (navbar, footer, page title)
- Collection items and categories in `src/data/collection.js`
- Newsletter/contact email in `Contact.jsx` and `Footer.jsx`
- Instagram handle in the footer
- Lookbook imagery — currently CSS placeholders (`LookVisual.jsx`); swap in
  real photography when available
