import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqList from "@/components/FaqList";
import LeadForm from "@/components/LeadForm";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { services, getService } from "@/lib/services";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import { CheckIcon } from "@/components/Icons";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.name} in Indianapolis, IN`,
    description: `${service.teaser} Free drone inspection and fixed-price quote. Serving the Indianapolis metro since 2008.`,
    alternates: { canonical: `/services/${service.slug}/` },
    openGraph: {
      title: `${service.name} | Ridgeline Roofing Co.`,
      description: service.teaser,
      url: `/services/${service.slug}/`,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd data={[serviceSchema(service), faqSchema(service.faqs)]} />

      <div className="page-hero">
        <Breadcrumbs
          items={[
            { name: "Services", path: "/services/" },
            { name: service.name, path: `/services/${service.slug}/` },
          ]}
        />
        <div className="container" style={{ paddingTop: "2rem" }}>
          <span className="eyebrow">
            Service /{service.index} / Indianapolis Metro
          </span>
          <h1>{service.name}</h1>
          <p className="lede">{service.heroLine}</p>
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
            <span className="eyebrow">Overview</span>
            <h2>What This Service Covers</h2>
            <p className="lede">{service.description}</p>
          </div>
          <div>
            <h3>Signs You Need This</h3>
            <ul className="check-list">
              {service.signs.map((sign) => (
                <li key={sign}>
                  <CheckIcon />
                  <span>{sign}</span>
                </li>
              ))}
            </ul>
            <p className="form-note">
              Noticing any of these? The inspection that confirms it is free,
              and the drone photos are yours to keep.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Why It Pays Off</span>
            <h2>What You Get Out of It</h2>
          </div>
          <div className="card-grid">
            {service.benefits.map((b, i) => (
              <div key={b.title} className="card dark">
                <span className="card-index">/0{i + 1}</span>
                <h3>{b.title}</h3>
                <p>{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-cream-light">
        <div className="container two-col">
          <div>
            <span className="eyebrow">Our Approach</span>
            <h2>How We Do the Work</h2>
            <p className="lede">
              The same crew, the same standards, the same documented process on
              every job.
            </p>
            <Link href="/roof-replacement-process/" className="btn btn-ghost">
              See the Full 5-Step Process
            </Link>
          </div>
          <div className="steps">
            {service.process.map((step, i) => (
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

      <section className="section">
        <div className="container-narrow">
          <div className="section-head center">
            <span className="eyebrow">Questions</span>
            <h2>{service.shortName} FAQs</h2>
          </div>
          <FaqList faqs={service.faqs} />
        </div>
      </section>

      <section className="section section-cream-light">
        <div className="container-narrow">
          <div className="section-head center">
            <span className="eyebrow">Get Started</span>
            <h2>Request Your Free Inspection</h2>
          </div>
          <LeadForm />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
