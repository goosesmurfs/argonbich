import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import FaqList from "@/components/FaqList";
import CtaBand from "@/components/CtaBand";
import { site, trustPoints } from "@/lib/site";
import { services } from "@/lib/services";
import { cities } from "@/lib/cities";
import { generalFaqs } from "@/lib/faqs";
import { faqSchema } from "@/lib/schema";
import {
  CheckIcon,
  CameraIcon,
  TagIcon,
  CrewIcon,
  FlameIcon,
  LayersIcon,
  VacuumIcon,
  StarIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: `Attic Insulation Contractor in Indianapolis, IN | ${site.name}`,
  description:
    "Owner-operated Indianapolis insulation contractor since 2004. Blown-in attic insulation, batt replacement, and insulation removal with free thermal imaging evaluations and fixed-price quotes. Call (317) 555-0100.",
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} | Comfort Starts Here`,
    description:
      "Blown-in attic insulation, batt replacement, and insulation removal for Indianapolis and the surrounding metro.",
    url: "/",
  },
};

const serviceIcons: Record<string, React.ReactNode> = {
  "blown-in-attic-insulation": <FlameIcon />,
  "batt-insulation-replacement": <LayersIcon />,
  "insulation-removal": <VacuumIcon />,
};

const homeFaqs = generalFaqs.slice(0, 6);

const processSummary = [
  {
    title: "Free thermal imaging evaluation",
    body: "We scan your ceilings and attic with a thermal camera, measure your current insulation, and show you exactly where the heat is going.",
  },
  {
    title: "Fixed-price quote in writing",
    body: "You get one number for the full scope of work. That number does not change, no matter what we run into.",
  },
  {
    title: "One-day installation by our crew",
    body: "Our own in-house crew air seals, preps, and installs, then documents the finished depth with photos. Most attics are done in a day.",
  },
  {
    title: "Walkthrough and verification",
    body: "We review the before and after photos and depth markers with you, so you can verify the R-value you paid for is the R-value you got.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />

      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <span className="eyebrow" style={{ color: "var(--honey-bright)" }}>
            Indianapolis Insulation Contractor Since 2004
          </span>
          <h1>
            Comfort Starts <span style={{ color: "var(--honey-bright)" }}>Here.</span>
          </h1>
          <p className="hero-sub">
            Blown-in attic insulation, batt replacement, and insulation removal
            for Indianapolis and the surrounding metro. Every free evaluation
            includes a thermal imaging scan and a fixed-price quote.
          </p>
          <div className="btn-row on-dark">
            <Link href="/contact/" className="btn btn-solid">
              Get a Free Estimate
            </Link>
            <a href={site.phoneHref} className="btn btn-ghost">
              Call Now
            </a>
          </div>
          <ul className="trust-pills">
            {trustPoints.map((point) => (
              <li key={point}>
                <CheckIcon /> {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Dark trust strip */}
      <section className="trust-strip" aria-label="Why homeowners choose us">
        <div className="container trust-strip-inner">
          <div className="trust-item">
            <CameraIcon />
            <div>
              <strong>Thermal Imaging Included</strong>
              <span>See your home's heat loss before you spend a dollar.</span>
            </div>
          </div>
          <div className="trust-item">
            <TagIcon />
            <div>
              <strong>Fixed-Price Quotes</strong>
              <span>The quote is the invoice. No surprises, ever.</span>
            </div>
          </div>
          <div className="trust-item">
            <CrewIcon />
            <div>
              <strong>In-House Crews</strong>
              <span>No subcontractors. Our people, our standards.</span>
            </div>
          </div>
          <div className="trust-item">
            <FlameIcon />
            <div>
              <strong>Owner-Operated Since 2004</strong>
              <span>Paul Bryant brings 20+ years of building science.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What We Do</span>
            <h2>Insulation Done Right, Start to Finish</h2>
            <p className="lede">
              Three core services, one standard of work. Every job starts with
              a thermal scan and ends with photo documentation.
            </p>
          </div>
          <div className="card-grid">
            {services.map((s) => (
              <article key={s.slug} className="card">
                <span className="card-icon">{serviceIcons[s.slug]}</span>
                <h3>{s.name}</h3>
                <p>{s.teaser}</p>
                <Link href={`/services/${s.slug}/`} className="card-link">
                  Learn more about {s.shortName.toLowerCase()} &rarr;
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="section section-dark">
        <div className="container two-col">
          <div>
            <span className="eyebrow">Why Hearth</span>
            <h2>We Show You the Problem Before We Quote the Fix</h2>
            <p className="lede">
              Most insulation companies quote from the driveway. We start in
              your attic with a thermal camera, because you should never buy a
              fix for a problem you have not seen with your own eyes.
            </p>
            <p>
              Hearth Insulation has been owner-operated by Paul Bryant since
              2004. Paul has spent more than 20 years in building science, and
              that shows up in the details: air sealing before insulating,
              baffles at every eave, dams around every flue, and depth markers
              photographed so the finished R-value is verifiable, not a
              promise.
            </p>
          </div>
          <div>
            <ul className="check-list">
              <li>
                <CheckIcon />
                <span>
                  <strong>Thermal imaging on every evaluation.</strong> Heat
                  loss made visible, free of charge.
                </span>
              </li>
              <li>
                <CheckIcon />
                <span>
                  <strong>Fixed-price quotes.</strong> We measure carefully,
                  quote once, and absorb the surprises ourselves.
                </span>
              </li>
              <li>
                <CheckIcon />
                <span>
                  <strong>In-house crews only.</strong> The people in your
                  attic work for us, trained on our process.
                </span>
              </li>
              <li>
                <CheckIcon />
                <span>
                  <strong>Building science first.</strong> Air sealing,
                  ventilation, and moisture control come before the blower
                  hose does.
                </span>
              </li>
              <li>
                <CheckIcon />
                <span>
                  <strong>Photo-documented results.</strong> Before, during,
                  and after photos with every job.
                </span>
              </li>
            </ul>
            <Link href="/about/" className="btn btn-ghost">
              Meet Paul
            </Link>
          </div>
        </div>
      </section>

      {/* Process overview */}
      <section className="section section-cream-light">
        <div className="container two-col">
          <div>
            <span className="eyebrow">How It Works</span>
            <h2>From First Call to Finished Attic</h2>
            <p className="lede">
              A simple, transparent process designed around one idea: you
              should know exactly what you are buying before you buy it.
            </p>
            <Link href="/attic-insulation-process/" className="btn btn-solid">
              See Our Full Attic Process
            </Link>
          </div>
          <div className="steps">
            {processSummary.map((step, i) => (
              <div key={step.title} className="step-row">
                <span className="step-num">{i + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">Where We Work</span>
            <h2>Serving Indianapolis and the Surrounding Metro</h2>
            <p className="lede">
              Based in Indianapolis, on attic ladders across the metro every
              week.
            </p>
          </div>
          <ul className="tag-row" style={{ justifyContent: "center" }}>
            {cities.map((c) => (
              <li key={c.slug}>
                <Link href={`/areas/${c.slug}/`}>{c.name}, IN</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-cream-light">
        <div className="container-narrow">
          <div className="section-head center">
            <span className="eyebrow">Questions</span>
            <h2>Frequently Asked Questions</h2>
          </div>
          <FaqList faqs={homeFaqs} />
          <p style={{ textAlign: "center", marginTop: "1.6rem" }}>
            <Link href="/faq/" className="card-link">
              See all frequently asked questions &rarr;
            </Link>
          </p>
        </div>
      </section>

      {/* Review invite */}
      <section className="section-tight">
        <div className="container-narrow" style={{ textAlign: "center" }}>
          <span
            className="card-icon"
            style={{ margin: "0 auto 1rem", display: "inline-flex" }}
          >
            <StarIcon size={26} />
          </span>
          <h2 style={{ fontSize: "1.5rem" }}>Worked With Us Before?</h2>
          <p className="lede">
            If we insulated your home, we would be grateful for a review. It is
            how a small, owner-operated shop like ours gets found by the next
            homeowner with a cold upstairs.
          </p>
          <a href={`mailto:${site.email}?subject=Review for Hearth Insulation`} className="btn btn-ghost">
            Leave Us a Review
          </a>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
