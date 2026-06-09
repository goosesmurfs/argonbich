import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import LeadForm from "@/components/LeadForm";
import CtaBand from "@/components/CtaBand";
import { cities, getCity } from "@/lib/cities";
import { services } from "@/lib/services";
import { site } from "@/lib/site";
import { CheckIcon } from "@/components/Icons";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return cities.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const city = getCity(slug);
  if (!city) return {};
  return {
    title: `Roofing Contractor in ${city.name}, IN`,
    description: `Roof replacement, roof repair, and storm damage restoration in ${city.name}, Indiana. Free drone inspections and fixed-price quotes from an owner-operated contractor.`,
    alternates: { canonical: `/areas/${city.slug}/` },
    openGraph: {
      title: `Roofing in ${city.name}, IN | Ridgeline Roofing Co.`,
      description: city.blurb,
      url: `/areas/${city.slug}/`,
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  const otherCities = cities.filter((c) => c.slug !== city.slug);

  return (
    <>
      <div className="page-hero">
        <Breadcrumbs
          items={[
            { name: "Service Areas", path: "/areas/" },
            { name: `${city.name}, IN`, path: `/areas/${city.slug}/` },
          ]}
        />
        <div className="container" style={{ paddingTop: "2rem" }}>
          <span className="eyebrow">{city.county}</span>
          <h1>Roofing Contractor in {city.name}, IN</h1>
          <p className="lede">{city.blurb}</p>
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

      <section className="section">
        <div className="container two-col">
          <div>
            <span className="eyebrow">Local Knowledge</span>
            <h2>What We See on {city.name} Roofs</h2>
            <p className="lede">{city.housingNote}</p>
            <p>
              Like the rest of central Indiana, {city.name} roofs live through
              freeze-thaw winters, spring hail, and straight-line winds. Our
              free inspection includes a drone documentation pass, a photo
              report you keep, and a written fixed-price quote, so you know
              exactly where your roof stands before spending anything.
            </p>
          </div>
          <div>
            <h3>Services in {city.name}</h3>
            <ul className="check-list">
              {services.map((s) => (
                <li key={s.slug}>
                  <CheckIcon />
                  <span>
                    <Link href={`/services/${s.slug}/`}>{s.name}</Link>
                  </span>
                </li>
              ))}
              <li>
                <CheckIcon />
                <span>
                  <Link href="/roof-replacement-process/">
                    Full 5-step replacement process
                  </Link>
                </span>
              </li>
            </ul>
            <h3 style={{ marginTop: "1.6rem" }}>
              Why {city.name} Homeowners Call Us
            </h3>
            <ul className="check-list">
              <li>
                <CheckIcon />
                <span>Free drone inspection with every estimate</span>
              </li>
              <li>
                <CheckIcon />
                <span>Fixed-price quotes that do not change</span>
              </li>
              <li>
                <CheckIcon />
                <span>Our own in-house crews, never subcontractors</span>
              </li>
              <li>
                <CheckIcon />
                <span>Owner-operated since 2008</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-cream-light">
        <div className="container-narrow">
          <div className="section-head center">
            <span className="eyebrow">Get Started in {city.name}</span>
            <h2>Request Your Free Inspection</h2>
          </div>
          <LeadForm />
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <h2 style={{ fontSize: "1.3rem" }}>Nearby Service Areas</h2>
          <ul className="tag-row">
            {otherCities.map((c) => (
              <li key={c.slug}>
                <Link href={`/areas/${c.slug}/`}>{c.name}, IN</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title={`Ready for a Stronger ${city.name} Roof?`}
        body="Schedule your free drone inspection. We are in your area every week."
      />
    </>
  );
}
