import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqList from "@/components/FaqList";
import LeadForm from "@/components/LeadForm";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import { CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Roof Replacement Cost in Indianapolis (2026 Guide)",
  description:
    "What a roof replacement actually costs in the Indianapolis metro, what drives the price up or down, what a complete quote must include, and the red flags that make cheap quotes expensive.",
  alternates: { canonical: "/roof-replacement-cost/" },
  openGraph: {
    title: "Roof Replacement Cost in Indianapolis | Ridgeline Roofing Co.",
    description:
      "Honest market ranges, the factors that move the number, and how our fixed-price quotes work.",
    url: "/roof-replacement-cost/",
  },
};

const costFactors = [
  {
    title: "Roof size and complexity",
    body: "Price scales with area, but complexity moves it more than size. A simple gable costs meaningfully less per square than a cut-up roof with hips, valleys, and dormers, because details are where labor lives.",
  },
  {
    title: "Pitch and access",
    body: "Steep roofs require harnessed crews, staging, and slower work. Limited driveway or landscaping access adds handling time for tear-off debris and materials.",
  },
  {
    title: "Layers coming off",
    body: "One existing layer is the baseline. Two layers mean more tear-off labor and roughly double the disposal weight, and they are common on older homes in the metro.",
  },
  {
    title: "Deck condition",
    body: "Rotten decking gets replaced before anything covers it. We price this per sheet, in writing, before tear-off, so it is a known number instead of a mid-job surprise.",
  },
  {
    title: "Material tier",
    body: "Architectural asphalt shingles are the metro standard and what most ranges assume. Designer shingles, impact-rated products, and metal change the math significantly.",
  },
  {
    title: "Ventilation and flashing scope",
    body: "Roofs that were built with poor intake or mixed exhaust need correction, and chimneys and sidewalls need new flashing. Skipping these is how a cheap quote becomes a short roof.",
  },
];

const quoteIncludes = [
  "Full tear-off to the deck, disposal included",
  "Deck repair allowance priced per sheet, in writing",
  "Ice and water shield at eaves, valleys, and penetrations",
  "Synthetic underlayment across the full field",
  "All-new flashing at walls, chimneys, and pipes",
  "Manufacturer-spec shingle installation",
  "Balanced intake and ridge ventilation",
  "Permits, magnetic nail sweeps, and photo documentation",
];

const redFlags = [
  {
    title: "A price from the driveway",
    body: "Nobody can price a roof they have not inspected. A number quoted without slope-by-slope documentation is a guess that protects the contractor, not you.",
  },
  {
    title: "Decking 'as needed' with no unit price",
    body: "This is the oldest lever in roofing. If the per-sheet price is not printed on the quote, you will learn it mid-job, when your roof is open and your leverage is gone.",
  },
  {
    title: "An overlay to hit a number",
    body: "Shingling over the old roof saves on tear-off today, voids most manufacturer coverage, and hides whatever the deck is doing underneath.",
  },
  {
    title: "No mention of ventilation or flashing",
    body: "If a quote is silent on intake, exhaust, and flashing, assume they are being reused. Both are leading causes of premature failure.",
  },
];

const costFaqs = [
  {
    q: "How much does a roof replacement cost in Indianapolis?",
    a: "Most single-family asphalt replacements in the metro land between roughly $10,000 and $20,000, with small simple roofs below that range and large, steep, or complex roofs above it. The honest answer for your house requires an inspection, which is why ours is free and produces a fixed written number.",
  },
  {
    q: "Why do quotes for the same roof vary so much?",
    a: "Because they rarely describe the same job. One quote includes tear-off, deck allowances, new flashing, and ventilation; another reuses flashing, overlays the old shingles, and leaves decking 'as needed.' Compare scope line by line before comparing totals.",
  },
  {
    q: "Does insurance ever cover replacement?",
    a: "When a storm causes the damage, often yes, subject to your policy and deductible. We provide the timestamped documentation your claim needs and will walk your adjuster across the roof. Coverage decisions stay between you and your insurer.",
  },
  {
    q: "Is a cheaper repair an option instead?",
    a: "Sometimes, and we will tell you when it is. If the failure is local and the roof has life left, a proper repair is the better buy, and our inspection report shows you the evidence behind either recommendation.",
  },
  {
    q: "What does the free estimate include?",
    a: "A drone inspection of every slope, a ladder-and-attic check where access allows, a photo report you keep, and a fixed-price quote with the deck allowance printed on it. It costs nothing and obligates you to nothing.",
  },
];

export default function CostPage() {
  return (
    <>
      <JsonLd data={faqSchema(costFaqs)} />

      <div className="page-hero">
        <Breadcrumbs
          items={[{ name: "Cost Guide", path: "/roof-replacement-cost/" }]}
        />
        <div className="container" style={{ paddingTop: "2rem" }}>
          <span className="eyebrow">2026 Cost Guide</span>
          <h1>What a Roof Replacement Costs in Indianapolis</h1>
          <p className="lede">
            Straight numbers, the factors that move them, and the line items a
            complete quote has to include. Written so you can evaluate any
            contractor's quote, including ours.
          </p>
          <div className="btn-row" style={{ marginTop: "1.6rem" }}>
            <Link href="/contact/" className="btn btn-solid">
              Get My Fixed Price
            </Link>
            <a href={site.phoneHref} className="btn btn-ghost">
              Call Now
            </a>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container two-col">
          <div>
            <span className="eyebrow">The Short Answer</span>
            <h2>Most Metro Homes: $10,000 to $20,000</h2>
            <p className="lede">
              For a full tear-off architectural asphalt replacement on a
              typical single-family home in the Indianapolis metro, that is
              the honest range. Small, simple ranch roofs can come in under
              it. Large, steep, cut-up roofs, premium materials, or major deck
              repair push above it.
            </p>
            <p>
              Treat any number, including these, as context rather than a
              quote. Roofs are priced by what the inspection finds: area,
              pitch, layers, deck condition, flashing scope, and ventilation.
              That is why every Ridgeline estimate starts with a drone
              inspection and ends with one fixed number in writing. The range
              is the market; the quote is your roof.
            </p>
            <p className="form-note">
              Market ranges reflect typical metro pricing as of 2026 and move
              with material costs. Your written quote is the number that
              matters, and ours does not change after it is signed.
            </p>
          </div>
          <div>
            <h3>What Moves the Number</h3>
            <div className="steps">
              {costFactors.map((f, i) => (
                <div key={f.title} className="step-row">
                  <span className="step-num">0{i + 1}</span>
                  <div>
                    <h3>{f.title}</h3>
                    <p>{f.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container two-col">
          <div>
            <span className="eyebrow">Scope, Not Just Totals</span>
            <h2>What a Complete Quote Must Include</h2>
            <p className="lede">
              Two quotes with different totals usually describe two different
              roofs. Before comparing prices, check that every line below is
              present. Every Ridgeline quote includes all of them.
            </p>
            <Link href="/roof-replacement-process/" className="btn btn-ghost">
              See How We Build It
            </Link>
          </div>
          <ul className="check-list">
            {quoteIncludes.map((item) => (
              <li key={item}>
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-cream-light">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Buyer Beware</span>
            <h2>How Cheap Quotes Get Expensive</h2>
          </div>
          <div className="card-grid">
            {redFlags.map((flag, i) => (
              <div key={flag.title} className="card">
                <span className="card-index">/0{i + 1}</span>
                <h3>{flag.title}</h3>
                <p>{flag.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          <div className="section-head center">
            <span className="eyebrow">Questions</span>
            <h2>Cost FAQs</h2>
          </div>
          <FaqList faqs={costFaqs} />
        </div>
      </section>

      <section className="section section-cream-light">
        <div className="container-narrow">
          <div className="section-head center">
            <span className="eyebrow">Get Your Number</span>
            <h2>One Inspection. One Fixed Price.</h2>
          </div>
          <LeadForm />
        </div>
      </section>

      <CtaBand
        title="Stop Guessing. Get the Number."
        body="The free inspection takes about an hour. The quote that follows is fixed, itemized, and yours to compare against anyone."
      />
    </>
  );
}
