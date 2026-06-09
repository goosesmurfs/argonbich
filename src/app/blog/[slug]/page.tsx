import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { posts, getPost } from "@/lib/posts";
import { articleSchema } from "@/lib/schema";
import { site } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}/` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}/`,
      publishedTime: post.date,
      authors: [site.owner],
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const others = posts.filter((p) => p.slug !== post.slug);

  return (
    <>
      <JsonLd data={articleSchema(post)} />

      <div className="page-hero">
        <Breadcrumbs
          items={[
            { name: "Blog", path: "/blog/" },
            { name: post.title, path: `/blog/${post.slug}/` },
          ]}
        />
        <div className="container-narrow" style={{ paddingTop: "1.6rem" }}>
          <span className="post-meta">
            {new Date(post.date + "T12:00:00").toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
            / {post.readingTime} / By {site.owner}
          </span>
          <h1 style={{ marginTop: "0.7rem" }}>{post.title}</h1>
          <p className="lede">{post.description}</p>
        </div>
      </div>

      <article className="section">
        <div className="container-narrow prose">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </section>
          ))}
        </div>
      </article>

      <section className="section-tight section-cream-light">
        <div className="container">
          <h2 style={{ fontSize: "1.3rem" }}>Keep Reading</h2>
          <div className="card-grid">
            {others.map((p) => (
              <article key={p.slug} className="card">
                <span className="post-meta">{p.readingTime}</span>
                <h3 style={{ marginTop: "0.5rem" }}>{p.title}</h3>
                <Link href={`/blog/${p.slug}/`} className="card-link">
                  Read the article &rarr;
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
