import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { cities } from "@/lib/cities";
import { posts } from "@/lib/posts";

export const dynamic = "force-static";

const buildDate = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/services",
    "/roof-replacement-process",
    "/roof-replacement-cost",
    "/areas",
    "/about",
    "/contact",
    "/faq",
    "/resources",
    "/blog",
  ];

  return [
    ...staticPaths.map((path) => ({
      url: `${site.url}${path}/`.replace(/\/\/$/, "/"),
      lastModified: buildDate,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...services.map((s) => ({
      url: `${site.url}/services/${s.slug}/`,
      lastModified: buildDate,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...cities.map((c) => ({
      url: `${site.url}/areas/${c.slug}/`,
      lastModified: buildDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...posts.map((p) => ({
      url: `${site.url}/blog/${p.slug}/`,
      lastModified: p.date,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
