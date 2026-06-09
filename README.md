# Ridgeline Roofing Co. Website

Marketing website for Ridgeline Roofing Co., an owner-operated roofing
contractor in Indianapolis, IN. Built with Next.js (App Router, TypeScript)
and fully statically generated (`output: "export"`).

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # static export to ./out
```

Deploy the `out/` directory to any static host.

## Design system

Editorial, high-contrast aesthetic: near-black graphite (`#0B0E12`) and warm
paper (`#EFECE4`) surfaces with a signal-orange accent (`#FF4D00`).
Space Grotesk for display type, Inter for body, Space Mono for labels and
index numerals. Motifs include outlined oversized numerals, a CSS-only
marquee, hairline-divided stat bands, and a wireframe-roofline hero
illustration. All interactions (hamburger nav, FAQ accordions, marquee) are
CSS-only so content renders without JavaScript.

## Structure

- `src/lib/` holds all content as typed data: business info (`site.ts`),
  services, cities, FAQs, blog posts, the 5-step process, and JSON-LD
  schema builders (`schema.ts`).
- `src/app/` contains the routes. Dynamic routes (`services/[slug]`,
  `areas/[slug]`, `blog/[slug]`) are prerendered from the data files via
  `generateStaticParams`.
- `src/components/` has the shared UI: header, footer, sticky mobile call
  bar, FAQ accordion (native `details`), lead form, CTA band, breadcrumbs
  with BreadcrumbList schema.

## Notes

- SEO: per-page metadata, RoofingContractor/Service/OfferCatalog/FAQPage/
  HowTo/Article/BreadcrumbList JSON-LD, generated `sitemap.xml` (with
  `lastModified`), `robots.txt`, web manifest, `opengraph-image` (built at
  export time), and `public/llms.txt`. Fonts are self-hosted via
  `next/font`; the hero image is preloaded.
- Motion (scroll progress bar, scroll-driven reveals) is pure CSS behind
  `@supports` and `prefers-reduced-motion`, so content renders fully
  without JavaScript everywhere.
- Lead form: set `NEXT_PUBLIC_FORM_ENDPOINT` at build time to POST to a
  form backend (Formspree, Basin, etc.) and point its redirect at
  `/thank-you/`; without it the form falls back to a `mailto:` handoff.
- Analytics: set `NEXT_PUBLIC_GA_ID` (GA4 measurement ID) at build time to
  enable Google Analytics; omitted, no analytics code ships.
- `vercel.json` 301-redirects the legacy `/attic-insulation-process/` URL.
- The phone number (317) 555-0148 is a placeholder; update it in
  `src/lib/site.ts` (one place) before launch, along with the production
  domain in `site.url`.

## Before launch (needs the real business)

- Real photography (drone shots, crew, finished work) to replace the
  illustrated hero, plus a projects/gallery page.
- Street address and geo in `src/lib/schema.ts`, a Google Business
  Profile linked via `sameAs`, and real reviews embedded once they exist.
