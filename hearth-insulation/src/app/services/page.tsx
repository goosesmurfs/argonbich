import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import { services } from "@/lib/services";
import { FlameIcon, LayersIcon, VacuumIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Insulation Services in Indianapolis, IN",
  description:
    "Blown-in attic insulation, batt insulation replacement, and insulation removal for the Indianapolis metro. Free thermal imaging evaluations and fixed-price quotes on every service.",
  alternates: { canonical: "/services/" },
  openGraph: {
    title: "Insulation Services in Indianapolis, IN | Hearth Insulation",
    description:
      "Blown-in attic insulation, batt replacement, and insulation removal with free thermal imaging evaluations.",
    url: "/services/",
  },
};

const serviceIcons: Record<string, React.ReactNode> = {
  "blown-in-attic-insulation": <FlameIcon />,
  "batt-insulation-replacement": <LayersIcon />,
  "insulation-removal": <VacuumIcon />,
};

export default function ServicesPage() {
  return (
    <>
      <div className="page-hero">
        <Breadcrumbs items={[{ name: "Services", path: "/services/" }]} />
        <div className="container" style={{ paddingTop: "1.6rem" }}>
          <span className="eyebrow">Our Services</span>
          <h1>Insulation Services Built on Building Science</h1>
          <p className="lede">
            Every service starts the same way: a free evaluation with thermal
            imaging, honest findings with photos, and a fixed-price quote in
            writing. Then our in-house crew does the work the way the quote
            describes it.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container card-grid">
          {services.map((s) => (
            <article key={s.slug} className="card">
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
          <h2 style={{ fontSize: "1.5rem" }}>Not Sure Which Service You Need?</h2>
          <p className="lede">
            That is exactly what the free evaluation is for. The thermal camera
            tells us whether your attic needs a top-up, a replacement, or a
            full removal and restoration, and we show you the evidence either
            way. Start with our{" "}
            <Link href="/attic-insulation-process/">
              five-step attic restoration process
            </Link>{" "}
            to see how the pieces fit together.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
