import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import { cities } from "@/lib/cities";
import { site } from "@/lib/site";
import { MapPinIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Service Areas | Roofing Contractor for the Indianapolis Metro",
  description:
    "Ridgeline Roofing serves Indianapolis, Carmel, Fishers, Noblesville, Westfield, Zionsville, Greenwood, Avon, Brownsburg, Lawrence, Beech Grove, and Geist with free drone roof inspections.",
  alternates: { canonical: "/areas/" },
  openGraph: {
    title: "Service Areas | Ridgeline Roofing Co.",
    description:
      "Roofing services across Indianapolis and the surrounding metro.",
    url: "/areas/",
  },
};

export default function AreasPage() {
  return (
    <>
      <div className="page-hero">
        <Breadcrumbs items={[{ name: "Service Areas", path: "/areas/" }]} />
        <div className="container" style={{ paddingTop: "2rem" }}>
          <span className="eyebrow">Where We Work</span>
          <h1>Serving the Indianapolis Metro Since 2008</h1>
          <p className="lede">
            We are based in Indianapolis and run our in-house crews across the
            metro every week. If you are in one of the communities below, the
            drone inspection is free and scheduling is usually within the
            week.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container card-grid">
          {cities.map((c) => (
            <article key={c.slug} className="card">
              <span className="card-icon">
                <MapPinIcon size={24} />
              </span>
              <h3>{c.name}, IN</h3>
              <p>{c.blurb}</p>
              <Link href={`/areas/${c.slug}/`} className="card-link">
                Roofing in {c.name} &rarr;
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section-tight section-cream-light">
        <div className="container-narrow" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "1.5rem" }}>Just Outside These Areas?</h2>
          <p className="lede">
            We regularly take jobs a little beyond this list when the schedule
            allows. Call <a href={site.phoneHref}>{site.phone}</a> and ask. The
            worst we can say is not this week.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
