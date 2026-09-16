# [CAFÉ NAME] — Sample Café Website

Frontend-only concept site for the "Café Website" portfolio project. React + Vite +
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
3. Deploy — you'll get a live URL like `https://cafe-sample.vercel.app`.

## Connect it back to the main studio site

Once deployed, copy the live URL and open the **main studio website's**
`src/data/projects.js`. Find the `cafe` project and set:

```js
externalUrl: "https://your-deployed-cafe-url.vercel.app",
```

The studio site's portfolio card for "Café Website" will then link straight
to this live site in a new tab, instead of its internal placeholder page.

## Placeholders to replace before sending to a real client

- `[CAFÉ NAME]` (navbar, footer, page title)
- Address, hours, and map placeholder in the Location section
- WhatsApp number (`https://wa.me/10000000000`)
- Email and Instagram handle in the footer
- Menu items and prices in `src/data/menu.js`
- Gallery images — currently CSS placeholders in `src/data/menu.js` /
  `Gallery.jsx`; swap in real photography when available
