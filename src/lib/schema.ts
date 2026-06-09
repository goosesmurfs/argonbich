import { site } from "./site";
import { cities } from "./cities";
import type { Faq } from "./faqs";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "@id": `${site.url}/#business`,
    name: site.name,
    slogan: site.tagline,
    description: site.description,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    foundingDate: site.founded,
    founder: { "@type": "Person", name: site.owner },
    image: `${site.url}/opengraph-image`,
    logo: `${site.url}/icon.svg`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressRegion: site.state,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 39.7684,
      longitude: -86.1581,
    },
    areaServed: cities.map((c) => ({
      "@type": "City",
      name: `${c.name}, IN`,
    })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    knowsAbout: [
      "Roof replacement",
      "Roof repair",
      "Storm damage restoration",
      "Hail damage inspection",
      "Drone roof inspection",
    ],
  };
}

export function serviceSchema(service: {
  slug: string;
  name: string;
  teaser: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${site.url}/services/${service.slug}/#service`,
    name: service.name,
    serviceType: service.name,
    description: service.teaser,
    url: `${site.url}/services/${service.slug}/`,
    provider: { "@id": `${site.url}/#business` },
    areaServed: cities.map((c) => ({
      "@type": "City",
      name: `${c.name}, IN`,
    })),
  };
}

export function offerCatalogSchema(
  items: { slug: string; name: string; teaser: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Roofing Services",
    url: `${site.url}/services/`,
    itemListElement: items.map((s, i) => ({
      "@type": "Offer",
      position: i + 1,
      itemOffered: {
        "@type": "Service",
        name: s.name,
        description: s.teaser,
        url: `${site.url}/services/${s.slug}/`,
        provider: { "@id": `${site.url}/#business` },
      },
    })),
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}

export function articleSchema(post: {
  slug: string;
  title: string;
  description: string;
  date: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Person", name: site.owner },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
    mainEntityOfPage: `${site.url}/blog/${post.slug}/`,
  };
}

export function howToSchema(args: {
  name: string;
  description: string;
  path: string;
  steps: { name: string; text: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: args.name,
    description: args.description,
    step: args.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
      url: `${site.url}${args.path}#step-${i + 1}`,
    })),
  };
}
