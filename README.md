# Campus GEM Website v2

Premium Next.js website for **The Campus Gem Ministries** — a Christ-centered campus ministry raising transformational leaders.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS v4
- Motion (`motion/react`)
- Atomic Design component architecture

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — local development
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — ESLint
- `npm run typecheck` — TypeScript check

## Architecture

```
src/
├── app/                 # Routes
├── components/
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   ├── sections/
│   └── templates/
├── constants/           # Structured content (nav, events, ministries…)
├── hooks/
├── lib/                 # Utilities + motion variants
└── types/
```

## Design system

Tokens live in `src/app/globals.css`:

- **Ruby** — brand accent (Campus GEM)
- **Lagoon** — secondary accent
- **Ink / Paper** — typography and surfaces
- **Fraunces** — display type
- **Plus Jakarta Sans** — body / UI

## Content

Homepage and route content are driven by structured constants under `src/constants/` to keep presentation separate from copy (CMS-ready).

## Project rules

See `.cursor/rules/` for implementation conventions.
