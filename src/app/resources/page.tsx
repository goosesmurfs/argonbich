import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Homeowner Resources | Roofing Guides for Central Indiana",
  description:
    "Guides, checklists, and reference numbers for Indianapolis-area homeowners: roof lifespan expectations, the post-storm checklist, and how to read your own roof from the ground.",
  alternates: { canonical: "/resources/" },
  openGraph: {
    title: "Homeowner Resources | Ridgeline Roofing Co.",
    description:
      "Roofing guides and reference numbers for central Indiana homes.",
    url: "/resources/",
  },
};

const referenceRows = [
  {
    label: "Typical asphalt roof life in central Indiana",
    value: "18 to 25 years",
  },
  {
    label: "Most replacements completed in",
    value: "1 to 2 days",
  },
  {
    label: "Peak hail season for the metro",
    value: "April to July",
  },
  {
    label: "Slopes documented in every inspection",
    value: "All of them",
  },
  {
    label: "Cost of the inspection and photo report",
    value: "$0",
  },
];

const groundChecks = [
  {
    title: "Scan the shingle field",
    body: "From the sidewalk, look for missing tabs, dark patches where shingles lost granules, and curling edges along the sun-facing slopes.",
  },
  {
    title: "Check gutters and downspouts",
    body: "Granules collecting at downspout exits mean the wear layer is leaving. Dents in gutters and downspouts mean hail has visited.",
  },
  {
    title: "Look at the lines",
    body: "Ridgelines and roof planes should be straight. Waves and dips can mean deck problems underneath.",
  },
  {
    title: "Walk the yard after wind",
    body: "Shingles and shingle pieces on the ground are the roof telling you its seal strips have let go.",
  },
  {
    title: "Watch ceilings and the attic",
    body: "Stains, damp insulation, or daylight through the boards all mean water has found a path. Note where, and tell us.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <div className="page-hero">
        <Breadcrumbs items={[{ name: "Resources", path: "/resources/" }]} />
        <div className="container" style={{ paddingTop: "2rem" }}>
          <span className="eyebrow">Learn Before You Buy</span>
          <h1>Homeowner Resources</h1>
          <p className="lede">
            The reference numbers, checks, and explanations we share with
            every customer. Use them with us or without us; an informed
            homeowner makes better decisions either way.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container two-col">
          <div>
            <span className="eyebrow">Quick Reference</span>
            <h2>The Numbers That Matter</h2>
            <div className="card" style={{ padding: "1.4rem 2rem" }}>
              <dl style={{ margin: 0 }}>
                {referenceRows.map((row) => (
                  <div
                    key={row.label}
                    style={{
                      padding: "0.85rem 0",
                      borderBottom: "1px solid var(--line)",
                    }}
                  >
                    <dt
                      style={{
                        fontFamily: "var(--font-mono)",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        fontSize: "0.72rem",
                        color: "var(--ink-soft)",
                      }}
                    >
                      {row.label}
                    </dt>
                    <dd
                      style={{
                        margin: 0,
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        fontSize: "1.25rem",
                      }}
                    >
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <p className="form-note" style={{ marginTop: "0.9rem" }}>
              Lifespans vary with ventilation, installation quality, and storm
              history. Our inspection measures where your actual roof sits.
            </p>
          </div>
          <div>
            <span className="eyebrow">Do It Yourself</span>
            <h2>The 5-Minute Ground Check</h2>
            <div className="steps">
              {groundChecks.map((check, i) => (
                <div key={check.title} className="step-row">
                  <span className="step-num">0{i + 1}</span>
                  <div>
                    <h3>{check.title}</h3>
                    <p>{check.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="form-note" style={{ marginTop: "1rem" }}>
              Never get on the roof yourself. Everything worth seeing up there,
              our drone can photograph with zero risk to you.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-cream-light">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Go Deeper</span>
            <h2>Guides From Our Blog</h2>
          </div>
          <div className="card-grid">
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
                <h3 style={{ marginTop: "0.6rem" }}>{p.title}</h3>
                <p>{p.description}</p>
                <Link href={`/blog/${p.slug}/`} className="card-link">
                  Read the guide &rarr;
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Want the Numbers for Your Own Roof?"
        body="The free inspection measures your roof's actual condition, with drone photos you keep."
      />
    </>
  );
}
