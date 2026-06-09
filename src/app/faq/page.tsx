import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqList from "@/components/FaqList";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { generalFaqs } from "@/lib/faqs";
import { faqSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about roof replacement, drone inspections, fixed-price quotes, storm damage, and how Ridgeline Roofing works in the Indianapolis metro.",
  alternates: { canonical: "/faq/" },
  openGraph: {
    title: "Roofing FAQs | Ridgeline Roofing Co.",
    description:
      "Drone inspections, fixed-price quotes, storm damage, and how we work.",
    url: "/faq/",
  },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema([...generalFaqs])} />

      <div className="page-hero">
        <Breadcrumbs items={[{ name: "FAQ", path: "/faq/" }]} />
        <div className="container" style={{ paddingTop: "2rem" }}>
          <span className="eyebrow">Straight Answers</span>
          <h1>Frequently Asked Questions</h1>
          <p className="lede">
            Everything homeowners ask us most, answered the same way we would
            answer in your driveway. Do not see your question? Call{" "}
            <a href={site.phoneHref}>{site.phone}</a> and ask.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container-narrow">
          <FaqList faqs={[...generalFaqs]} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
