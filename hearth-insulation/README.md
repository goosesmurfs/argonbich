# Hearth Insulation Website

Marketing website for Hearth Insulation, an owner-operated insulation
contractor in Indianapolis, IN. Built with Next.js (App Router, TypeScript)
and fully statically generated (`output: "export"`).

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # static export to ./out
```

Deploy the `out/` directory to any static host.

## Structure

- `src/lib/` holds all content as typed data: business info (`site.ts`),
  services, cities, FAQs, blog posts, the 5-step process, and JSON-LD
  schema builders (`schema.ts`).
- `src/app/` contains the routes. Dynamic routes (`services/[slug]`,
  `areas/[slug]`, `blog/[slug]`) are prerendered from the data files via
  `generateStaticParams`.
- `src/components/` has the shared UI: header with a CSS-only hamburger,
  footer, sticky mobile call bar, FAQ accordion (native `details`), lead
  form, CTA band, breadcrumbs with BreadcrumbList schema.

## Notes

- All content renders without JavaScript: navigation uses the checkbox
  hack, FAQs use `details`/`summary`, and nothing is gated behind
  reveal animations.
- SEO: per-page metadata, LocalBusiness/FAQPage/HowTo/Article/
  BreadcrumbList JSON-LD, generated `sitemap.xml`, `robots.txt`,
  `opengraph-image` (built at export time), and `public/llms.txt`.
- The lead form posts via `mailto:` so it works on a purely static host;
  point the form `action` in `src/components/LeadForm.tsx` at a form
  backend when one is available.
- The phone number (317) 555-0100 is a placeholder; update it in
  `src/lib/site.ts` (one place) before launch, along with the production
  domain in `site.url`.
