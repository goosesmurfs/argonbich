import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Homeowner Resources | Insulation Guides for Central Indiana",
  description:
    "Guides, checklists, and reference numbers for Indianapolis-area homeowners: Climate Zone 5 R-value targets, how to measure your attic insulation, and what to expect from an evaluation.",
  alternates: { canonical: "/resources/" },
  openGraph: {
    title: "Homeowner Resources | Hearth Insulation",
    description:
      "Insulation guides and reference numbers for central Indiana homes.",
    url: "/resources/",
  },
};

const referenceRows = [
  { label: "IECC climate zone for Indianapolis", value: "Zone 5" },
  {
    label: "DOE recommended attic insulation (Zone 5)",
    value: "R-49 to R-60",
  },
  {
    label: "Typical existing level in local homes",
    value: "R-19 or less",
  },
  {
    label: "Approximate depth for R-49 (blown fiberglass)",
    value: "About 14 to 16 inches",
  },
  {
    label: "Approximate depth for R-60 (blown fiberglass)",
    value: "About 17 to 19 inches",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <div className="page-hero">
        <Breadcrumbs items={[{ name: "Resources", path: "/resources/" }]} />
        <div className="container" style={{ paddingTop: "1.6rem" }}>
          <span className="eyebrow">Learn Before You Buy</span>
          <h1>Homeowner Resources</h1>
          <p className="lede">
            The reference numbers, checks, and explanations we share with every
            customer. Use them with us or without us; an informed homeowner
            makes better decisions either way.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container two-col">
          <div>
            <span className="eyebrow">Quick Reference</span>
            <h2>The Numbers That Matter in Central Indiana</h2>
            <div className="card" style={{ padding: "1.4rem 1.9rem" }}>
              <dl style={{ margin: 0 }}>
                {referenceRows.map((row) => (
                  <div
                    key={row.label}
                    style={{
                      padding: "0.8rem 0",
                      borderBottom: "1px solid var(--line)",
                    }}
                  >
                    <dt
                      style={{
                        fontFamily: "var(--font-label)",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        fontSize: "0.8rem",
                        color: "var(--ink-soft)",
                      }}
                    >
                      {row.label}
                    </dt>
                    <dd
                      style={{
                        margin: 0,
                        fontFamily: "var(--font-heading)",
                        fontSize: "1.15rem",
                      }}
                    >
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <p className="form-note" style={{ marginTop: "0.9rem" }}>
              Depths are approximate and vary by product; settled and older
              materials deliver less R per inch. Our evaluation measures your
              actual numbers.
            </p>
          </div>
          <div>
            <span className="eyebrow">Do It Yourself</span>
            <h2>The 5-Minute Attic Check</h2>
            <div className="steps">
              <div className="step-row">
                <span className="step-num">1</span>
                <div>
                  <h3>Open the hatch and look</h3>
                  <p>
                    If you can see the tops of the floor joists, you likely
                    have R-19 or less and are a strong upgrade candidate.
                  </p>
                </div>
              </div>
              <div className="step-row">
                <span className="step-num">2</span>
                <div>
                  <h3>Measure the depth</h3>
                  <p>
                    Push a tape measure to the drywall in a few spots. Old
                    fiberglass runs roughly R-2.5 to R-3 per inch.
                  </p>
                </div>
              </div>
              <div className="step-row">
                <span className="step-num">3</span>
                <div>
                  <h3>Look for dirty insulation</h3>
                  <p>
                    Gray or black streaks mean air is moving through the
                    insulation, a sign that air sealing is needed.
                  </p>
                </div>
              </div>
              <div className="step-row">
                <span className="step-num">4</span>
                <div>
                  <h3>Check for droppings or odor</h3>
                  <p>
                    Pest evidence or a musty smell points toward removal
                    before anything new goes in.
                  </p>
                </div>
              </div>
              <div className="step-row">
                <span className="step-num">5</span>
                <div>
                  <h3>Note your problem rooms</h3>
                  <p>
                    Hot bonus room? Cold bedroom corner? Tell us; thermal
                    imaging usually explains them in minutes.
                  </p>
                </div>
              </div>
            </div>
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
                  &middot; {p.readingTime}
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
        title="Want the Numbers for Your Own Attic?"
        body="The free evaluation measures your actual insulation depth and R-value, with thermal images you keep."
      />
    </>
  );
}
