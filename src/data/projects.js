// Central portfolio data.
//
// HOW TO ADD A NEW PROJECT
// 1. Duplicate one of the objects below.
// 2. Give it a unique `id` and `slug`.
// 3. If this is a concept project with no live site, leave `externalUrl: null` —
//    it will open the internal /work/:slug detail page built from this data.
// 4. Once a sample site is designed and deployed, set `externalUrl` to its
//    live URL (e.g. "https://cafe-sample.vercel.app"). The portfolio card
//    will then open that URL directly in a new tab instead of the internal page.

export const projects = [
  {
    id: 'cafe',
    slug: 'cafe',
    title: 'Café Website',
    category: 'WEB DESIGN & DEVELOPMENT',
    tag: 'CONCEPT PROJECT',
    description: 'A warm, modern digital home for a contemporary café.',
    size: 'featured',
    palette: 'from-[#EFE6D8] to-[#DCCBAE]',
    externalUrl: null,
    detail: {
      tagline: 'Digital home for a modern neighborhood café.',
      objective:
        'Create a warm, visually appealing website that helps customers discover the café, explore its menu and find the location.',
      whatWeCreated: [
        'Responsive website',
        'Menu section',
        'Gallery',
        'Location',
        'WhatsApp CTA',
        'Mobile-first experience',
      ],
      direction:
        'Soft neutrals, natural textures and unhurried pacing — a site that feels as calm as a Sunday morning at the counter.',
      tools: ['React', 'Tailwind CSS', 'Responsive layout', 'WhatsApp integration'],
    },
  },
  {
    id: 'fashion',
    slug: 'fashion',
    title: 'Fashion Boutique',
    category: 'WEB DESIGN & CREATIVE',
    tag: 'CONCEPT PROJECT',
    description: 'A refined digital experience designed for a modern fashion label.',
    size: 'tall',
    palette: 'from-[#E7E2DA] to-[#B9AFA0]',
    externalUrl: null,
    detail: {
      tagline: 'A refined digital showroom for a modern fashion label.',
      objective:
        'Design a boutique-style website that presents collections with editorial confidence and makes browsing feel like an experience, not a catalogue.',
      whatWeCreated: [
        'Lookbook-style homepage',
        'Collection pages',
        'Editorial product photography layout',
        'Mobile-first browsing experience',
      ],
      direction:
        'Restrained typography and full-bleed imagery let the garments lead, with layout choices borrowed from print editorial.',
      tools: ['React', 'Tailwind CSS', 'Editorial grid system'],
    },
  },
  {
    id: 'skincare',
    slug: 'skincare',
    title: 'Skincare Brand',
    category: 'WEB DESIGN & PRODUCT CONTENT',
    tag: 'CONCEPT PROJECT',
    description: 'A clean, product-focused digital experience for a beauty brand.',
    size: 'wide',
    palette: 'from-[#F1EEE6] to-[#D6CFC0]',
    externalUrl: null,
    detail: {
      tagline: 'A clean, product-first site for a beauty brand.',
      objective:
        'Build a website that communicates ingredient quality and routine clarity, making it easy for customers to find the right product.',
      whatWeCreated: [
        'Product-focused homepage',
        'Ingredient storytelling sections',
        'Routine builder layout',
        'Product photography direction',
      ],
      direction:
        'A quiet, clinical palette with soft light and generous space lets the product photography carry the brand.',
      tools: ['React', 'Tailwind CSS', 'Product content structure'],
    },
  },
  {
    id: 'ai-product',
    slug: 'ai-product',
    title: 'AI Product Campaign',
    category: 'AI CREATIVE',
    tag: 'CONCEPT PROJECT',
    description:
      'An AI-powered visual campaign created to showcase a product in a fresh and memorable way.',
    size: 'square',
    palette: 'from-[#E9E4D6] to-[#C7BBA0]',
    externalUrl: null,
    detail: {
      tagline: 'An AI-assisted visual campaign for a product launch.',
      objective:
        'Explore fresh, unexpected visual directions for a product campaign using AI-assisted creative tools alongside traditional design.',
      whatWeCreated: [
        'AI-generated concept visuals',
        'Campaign key art',
        'Social-ready crops and formats',
        'Creative direction document',
      ],
      direction:
        'AI tools were used to explore visual territory quickly, with every result curated and refined by hand before use.',
      tools: ['AI-assisted visual generation', 'Creative direction', 'Post-production'],
    },
  },
  {
    id: 'youtube',
    slug: 'youtube',
    title: 'YouTube Content',
    category: 'LONG-FORM VIDEO',
    tag: 'CONCEPT PROJECT',
    description: 'From research and scripting to visuals, editing and final delivery.',
    size: 'wide',
    palette: 'from-[#EAE5DA] to-[#B7ADA0]',
    externalUrl: null,
    detail: {
      tagline: 'A complete long-form video, start to finish.',
      objective:
        'Produce a long-form YouTube video that holds attention from the first ten seconds through to the closing message.',
      whatWeCreated: [
        'Research and scripting',
        'Shot planning',
        'Filming direction',
        'Editing and colour',
        'Thumbnail design',
      ],
      direction:
        'Pacing built around clear chapters and a confident voice — nothing filler, nothing rushed.',
      tools: ['Scriptwriting', 'Video editing', 'Colour grading', 'Thumbnail design'],
    },
  },
  {
    id: 'social',
    slug: 'social',
    title: 'Social Media Campaign',
    category: 'CONTENT & COPYWRITING',
    tag: 'CONCEPT PROJECT',
    description:
      'A content concept built around strong hooks, visual storytelling and clear calls to action.',
    size: 'tall',
    palette: 'from-[#EFEAE0] to-[#C9BFA9]',
    externalUrl: null,
    detail: {
      tagline: 'A social campaign built on hooks that hold.',
      objective:
        'Design a short content campaign that stops the scroll, communicates one clear idea, and moves people to act.',
      whatWeCreated: [
        'Content concept and hooks',
        'Caption and copy set',
        'Visual templates',
        'Posting structure',
      ],
      direction:
        'Every post opens with a single clear line — no throat-clearing, no generic captions.',
      tools: ['Copywriting', 'Content strategy', 'Visual templates'],
    },
  },
]

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug)
