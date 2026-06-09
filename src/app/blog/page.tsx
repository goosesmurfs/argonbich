import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog | Roofing Advice for Central Indiana Homeowners",
  description:
    "Practical articles on roof lifespan, hail damage, repair-or-replace decisions, and home protection, written for Indianapolis-area homeowners by Ridgeline Roofing.",
  alternates: { canonical: "/blog/" },
  openGraph: {
    title: "The Ridgeline Roofing Blog",
    description: "Practical roofing advice for central Indiana homeowners.",
    url: "/blog/",
  },
};

export default function BlogPage() {
  return (
    <>
      <div className="page-hero">
        <Breadcrumbs items={[{ name: "Blog", path: "/blog/" }]} />
        <div className="container" style={{ paddingTop: "2rem" }}>
          <span className="eyebrow">From the Ridge</span>
          <h1>Roofing Advice for Indiana Homes</h1>
          <p className="lede">
            Plain-language articles on the things we explain in driveways
            every week: roof lifespan, hail damage, repair-or-replace calls,
            and how to know what your roof actually needs.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container card-grid">
          {posts.map((p) => (
            <article key={p.slug} className="card">
              <span className="post-meta">
                {new Date(p.date + "T12:00:00").toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
                / {p.readingTime}
              </span>
              <h3 style={{ marginTop: "0.6rem" }}>
                <Link
                  href={`/blog/${p.slug}/`}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  {p.title}
                </Link>
              </h3>
              <p>{p.description}</p>
              <Link href={`/blog/${p.slug}/`} className="card-link">
                Read the article &rarr;
              </Link>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
