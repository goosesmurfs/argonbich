import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { services } from "@/lib/services";
import { offerCatalogSchema } from "@/lib/schema";
import { RoofIcon, HammerIcon, StormIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Roofing Services in Indianapolis, IN",
  description:
    "Roof replacement, roof repair, and storm damage restoration for the Indianapolis metro. Free drone inspections and fixed-price quotes on every service.",
  alternates: { canonical: "/services/" },
  openGraph: {
    title: "Roofing Services in Indianapolis, IN | Ridgeline Roofing Co.",
    description:
      "Roof replacement, repair, and storm restoration with free drone inspections.",
    url: "/services/",
  },
};

const serviceIcons: Record<string, React.ReactNode> = {
  "roof-replacement": <RoofIcon />,
  "roof-repair": <HammerIcon />,
  "storm-damage-restoration": <StormIcon />,
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={offerCatalogSchema([...services])} />
      <div className="page-hero">
        <Breadcrumbs items={[{ name: "Services", path: "/services/" }]} />
        <div className="container" style={{ paddingTop: "2rem" }}>
          <span className="eyebrow">Our Services</span>
          <h1>Roofing Built Like a System</h1>
          <p className="lede">
            Every service starts the same way: a free drone inspection, honest
            findings with photos, and a fixed-price quote in writing. Then our
            in-house crew does the work exactly as the quote describes it.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container card-grid">
          {services.map((s) => (
            <article key={s.slug} className="card">
              <span className="card-index">/{s.index}</span>
              <span className="card-icon">{serviceIcons[s.slug]}</span>
              <h3>{s.name}</h3>
              <p>{s.teaser}</p>
              <Link href={`/services/${s.slug}/`} className="card-link">
                {s.name} details &rarr;
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section-tight section-cream-light">
        <div className="container-narrow" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "1.5rem" }}>
            Not Sure Which Service You Need?
          </h2>
          <p className="lede">
            That is exactly what the free inspection is for. The drone footage
            tells us whether your roof needs a targeted repair, a storm
            documentation report, or a full replacement, and we show you the
            evidence either way. Start with our{" "}
            <Link href="/roof-replacement-process/">
              five-step replacement process
            </Link>{" "}
            to see how the pieces fit together, or read the{" "}
            <Link href="/roof-replacement-cost/">Indianapolis cost guide</Link>{" "}
            to understand the numbers before anyone quotes you.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
