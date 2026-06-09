import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import FaqList from "@/components/FaqList";
import CtaBand from "@/components/CtaBand";
import RoofAnatomy from "@/components/RoofAnatomy";
import { site, trustPoints, stats } from "@/lib/site";
import { services } from "@/lib/services";
import { cities } from "@/lib/cities";
import { generalFaqs } from "@/lib/faqs";
import { faqSchema } from "@/lib/schema";
import {
  CheckIcon,
  RoofIcon,
  HammerIcon,
  StormIcon,
  StarIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: `Roofing Contractor in Indianapolis, IN | ${site.name}`,
  description:
    "Owner-operated Indianapolis roofing contractor since 2008. Roof replacement, roof repair, and storm damage restoration with free drone inspections and fixed-price quotes. Call (317) 555-0148.",
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} | Over Your Head. Under Control.`,
    description:
      "Roof replacement, roof repair, and storm damage restoration for Indianapolis and the surrounding metro.",
    url: "/",
  },
};

const serviceIcons: Record<string, React.ReactNode> = {
  "roof-replacement": <RoofIcon />,
  "roof-repair": <HammerIcon />,
  "storm-damage-restoration": <StormIcon />,
};

const homeFaqs = generalFaqs.slice(0, 6);

const processSummary = [
  {
    title: "Drone inspection, free",
    body: "Every slope, valley, and flashing detail photographed from the air and the ladder. You see the evidence before anyone says a number.",
  },
  {
    title: "Fixed-price quote in writing",
    body: "One number for the full scope, with deck repair priced per sheet up front. The quote is the invoice.",
  },
  {
    title: "Built by our crew, fast",
    body: "Tear-off to ridge cap in one to two days for most homes, by our own in-house crew, with magnetic nail sweeps every evening.",
  },
  {
    title: "Documented and verified",
    body: "A photo report from tear-off to final ridge, warranty registration filed, and a walkthrough before we call it done.",
  },
];

const marqueeItems = [
  "Roof Replacement",
  "Roof Repair",
  "Storm Damage Restoration",
  "Free Drone Inspections",
  "Fixed-Price Quotes",
  "In-House Crews",
];

export default function HomePage() {
  const marquee = (
    <>
      {marqueeItems.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </>
  );

  return (
    <>
      {/* hoisted to <head> by React so the LCP background loads early */}
      <link rel="preload" href="/images/hero-bg.svg" as="image" />
      <JsonLd data={faqSchema(homeFaqs)} />

      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <span className="eyebrow">
            Indianapolis Roofing Contractor / Est. 2008
          </span>
          <h1>
            Over your head.
            <br />
            <span className="accent">Under control.</span>
          </h1>
          <p className="hero-sub">
            Roof replacement, repair, and storm restoration for Indianapolis
            and the surrounding metro. Every free estimate starts with a drone
            inspection and ends with a fixed-price quote in writing.
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
          <div className="hero-stats">
            {stats.map((s) => (
              <div key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {marquee}
          {marquee}
        </div>
      </div>

      {/* Services */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What We Do</span>
            <h2>Three Services. One Standard.</h2>
            <p className="lede">
              Every job starts with drone documentation and ends with a photo
              report. What happens in between is built to outlast the weather.
            </p>
          </div>
          <div className="card-grid">
            {services.map((s) => (
              <article key={s.slug} className="card">
                <span className="card-index">/{s.index}</span>
                <span className="card-icon">{serviceIcons[s.slug]}</span>
                <h3>{s.name}</h3>
                <p>{s.teaser}</p>
                <Link href={`/services/${s.slug}/`} className="card-link">
                  {s.shortName} details &rarr;
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Anatomy of a roof */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Built in Layers</span>
            <h2>Anatomy of a Ridgeline Roof</h2>
            <p className="lede">
              Shingles are just the layer you can see. Hover the legend to
              explore the system underneath, the parts that decide whether a
              roof lasts 12 years or 25.
            </p>
          </div>
          <RoofAnatomy />
          <div className="btn-row" style={{ marginTop: "2.4rem" }}>
            <Link href="/roof-replacement-process/" className="btn btn-ghost">
              How We Build Each Layer
            </Link>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="section section-dark" style={{ paddingTop: 0 }}>
        <div className="container two-col">
          <div>
            <span className="eyebrow">Why Ridgeline</span>
            <h2>We Show You the Roof Before We Quote the Roof</h2>
            <p className="lede">
              Most roofing quotes happen from a driveway. Ours start with a
              drone in the air and end with you looking at photographs of your
              own shingles, because you should never buy a fix for a problem
              you have not seen.
            </p>
            <p style={{ color: "var(--mist)" }}>
              Ridgeline Roofing has been owner-operated by Dan Whitaker since
              2008. The details show it: full tear-offs only, flashing rebuilt
              rather than reused, ventilation balanced on every replacement,
              and a fixed price that survives contact with whatever the
              tear-off reveals.
            </p>
            <Link href="/about/" className="btn btn-ghost">
              Meet Dan
            </Link>
          </div>
          <div>
            <ul className="check-list">
              <li>
                <CheckIcon />
                <span>
                  <strong>Drone inspection on every estimate.</strong> Every
                  slope documented, every photo yours to keep.
                </span>
              </li>
              <li>
                <CheckIcon />
                <span>
                  <strong>Fixed-price quotes.</strong> Deck repair priced per
                  sheet before tear-off. No mid-job phone calls.
                </span>
              </li>
              <li>
                <CheckIcon />
                <span>
                  <strong>In-house crews only.</strong> The people on your
                  roof work for us, to our checklist.
                </span>
              </li>
              <li>
                <CheckIcon />
                <span>
                  <strong>Full tear-offs, never overlays.</strong> Your new
                  roof gets built on inspected wood, not old problems.
                </span>
              </li>
              <li>
                <CheckIcon />
                <span>
                  <strong>Photo-documented results.</strong> Tear-off to ridge
                  cap, in a report you keep.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Process overview */}
      <section className="section section-cream-light">
        <div className="container two-col">
          <div>
            <span className="eyebrow">How It Works</span>
            <h2>From First Flight to Final Ridge Cap</h2>
            <p className="lede">
              A transparent process built around one idea: you should know
              exactly what you are buying before you buy it.
            </p>
            <Link href="/roof-replacement-process/" className="btn btn-solid">
              See Our Full Process
            </Link>
          </div>
          <div className="steps">
            {processSummary.map((step, i) => (
              <div key={step.title} className="step-row">
                <span className="step-num">0{i + 1}</span>
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
              Based in Indianapolis, on rooftops across the metro every week.
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
          <p style={{ textAlign: "center", marginTop: "1.8rem" }}>
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
            <StarIcon size={24} />
          </span>
          <h2 style={{ fontSize: "1.5rem" }}>Worked With Us Before?</h2>
          <p className="lede">
            If we built your roof, we would be grateful for a review. It is how
            a small, owner-operated shop gets found by the next homeowner
            staring at a ceiling stain.
          </p>
          <a
            href={`mailto:${site.email}?subject=Review for Ridgeline Roofing`}
            className="btn btn-ghost"
          >
            Leave Us a Review
          </a>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
