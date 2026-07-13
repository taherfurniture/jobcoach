# Job Coach (working title)

AI career coach for early- and mid-career professionals across the UAE and GCC. Personalized profile, explainable AI coaching, job discovery — built with Claude as the primary intelligence layer.

Product name, domain, and brand are still open — see `docs/phase3-ux-framework.html` for the current asset checklist.

## Stack

- **Framework:** Next.js (TypeScript, App Router)
- **Hosting:** Cloudflare Workers (via the OpenNext adapter)
- **Database / Auth / Storage:** Supabase
- **AI:** Claude API (Anthropic), server-side only
- **Design:** Direction B ("Studio Dark") — see `docs/phase4b-design-system.html`

Full rationale for every choice above is in `docs/phase2-technical-architecture.html`.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project documentation

The `docs/` folder holds the full product and technical framework this project is being built against, in phase order:

1. `phase1-product-framework.html` — vision, scope, MVP definition, risks
2. `phase2-technical-architecture.html` — stack, diagrams, schema, cost model
3. `phase3-ux-framework.html` — sitemap, flows, screen specs
4. `phase4a-visual-directions.html` / `phase4b-design-system.html` — visual direction and full component system
5. `phase5-implementation-plan.html` — sprint plan, work breakdown, launch checklist

## Status

Foundation sprint (Sprint 1 of 6) — repo, hosting, and design tokens in progress. See `phase5-implementation-plan.html` for the current milestone.
