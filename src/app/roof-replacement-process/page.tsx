import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqList from "@/components/FaqList";
import LeadForm from "@/components/LeadForm";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { processSteps, processFaqs } from "@/lib/process";
import { faqSchema, howToSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import { CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Our 5-Step Roof Replacement Process | Indianapolis, IN",
  description:
    "How Ridgeline Roofing replaces Indianapolis roofs in five documented steps: inspection, full tear-off, deck repair, water barriers and flashing, and manufacturer-spec installation with balanced ventilation.",
  alternates: { canonical: "/roof-replacement-process/" },
  openGraph: {
    title: "Our 5-Step Roof Replacement Process | Ridgeline Roofing Co.",
    description:
      "Inspection, tear-off, deck repair, water barriers, and spec installation. The full roof replacement process, explained step by step.",
    url: "/roof-replacement-process/",
  },
};

export default function ProcessPage() {
  return (
    <>
      <JsonLd
        data={[
          howToSchema({
            name: "The Ridgeline 5-Step Roof Replacement Process",
            description:
              "How we take an Indianapolis-area roof from aging and undocumented to fully rebuilt, ventilated, and photo-verified.",
            path: "/roof-replacement-process",
            steps: processSteps.map((s) => ({ name: s.title, text: s.summary })),
          }),
          faqSchema(processFaqs),
        ]}
      />

      <div className="page-hero">
        <Breadcrumbs
          items={[{ name: "Our Process", path: "/roof-replacement-process/" }]}
        />
        <div className="container" style={{ paddingTop: "2rem" }}>
          <span className="eyebrow">The Deep Dive</span>
          <h1>Our 5-Step Roof Replacement Process</h1>
          <p className="lede">
            A roof is a system, and systems fail at the step somebody skipped.
            Here is exactly what we do, why each step matters, and how to tell
            which steps your roof needs.
          </p>
          <div className="btn-row" style={{ marginTop: "1.6rem" }}>
            <Link href="/contact/" className="btn btn-solid">
              Get a Free Estimate
            </Link>
            <a href={site.phoneHref} className="btn btn-ghost">
              Call Now
            </a>
          </div>
        </div>
      </div>

      <section className="section-tight section-cream-light">
        <div className="container-narrow">
          <span className="eyebrow">Why This Matters in Indiana</span>
          <h2 style={{ fontSize: "1.5rem" }}>
            Indiana Weather Finds the Step Somebody Skipped
          </h2>
          <p className="lede">
            Central Indiana roofs face freeze-thaw cycles that pry open every
            gap, spring hail that bruises shingle mats, straight-line winds
            that test every nail, and attic heat that cooks shingles from
            below. A roof that lasts here is not a product; it is a sequence
            done in the right order. These are the five steps, and we do not
            skip any of them.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {processSteps.map((step) => (
            <article
              key={step.slug}
              id={`step-${step.number}`}
              className="process-step"
              data-num={`0${step.number}`}
            >
              <span className="process-step-kicker">
                Step 0{step.number} / 05
              </span>
              <h2>{step.title}</h2>
              <p className="lede">{step.summary}</p>
              <div className="process-cols">
                <div>
                  <h4>Why It Matters</h4>
                  {step.whyItMatters.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                </div>
                <div>
                  <h4>How We Do It</h4>
                  {step.howWeDoIt.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                </div>
                <div>
                  <h4>Signs You Need This</h4>
                  <ul>
                    {step.signs.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-dark">
        <div className="container two-col">
          <div>
            <span className="eyebrow">The Result</span>
            <h2>What a Finished Ridgeline Roof Looks Like</h2>
            <p className="lede">
              Inspected decking, layered water barriers, rebuilt flashing,
              balanced ventilation, and shingles installed to the spec their
              warranty depends on. All of it photographed.
            </p>
          </div>
          <ul className="check-list">
            <li>
              <CheckIcon />
              <span>Full tear-off with every layer and nail removed</span>
            </li>
            <li>
              <CheckIcon />
              <span>
                Deck repaired at a per-sheet price agreed before tear-off
              </span>
            </li>
            <li>
              <CheckIcon />
              <span>
                Ice and water shield at eaves, valleys, and penetrations
              </span>
            </li>
            <li>
              <CheckIcon />
              <span>All flashing replaced, never reused</span>
            </li>
            <li>
              <CheckIcon />
              <span>Balanced intake and ridge ventilation</span>
            </li>
            <li>
              <CheckIcon />
              <span>Photo report, warranty registration, magnetic sweep</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="section section-cream-light">
        <div className="container-narrow">
          <div className="section-head center">
            <span className="eyebrow">Questions</span>
            <h2>Process FAQs</h2>
          </div>
          <FaqList faqs={processFaqs} />
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          <div className="section-head center">
            <span className="eyebrow">Find Out What Your Roof Needs</span>
            <h2>Start With the Free Drone Inspection</h2>
            <p className="lede" style={{ textAlign: "center" }}>
              The photos tell us which of the five steps your roof actually
              needs. The fixed-price quote lists them, and the price does not
              move.
            </p>
          </div>
          <LeadForm />
        </div>
      </section>

      <CtaBand
        title="One Roof. One Quote. One Crew."
        body="Tell us about your home and we will schedule your free drone inspection this week."
      />
    </>
  );
}
