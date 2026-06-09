import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqList from "@/components/FaqList";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { generalFaqs } from "@/lib/faqs";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about attic insulation, R-values, thermal imaging, fixed-price quotes, and how Hearth Insulation works in the Indianapolis metro.",
  alternates: { canonical: "/faq/" },
  openGraph: {
    title: "Insulation FAQs | Hearth Insulation",
    description:
      "R-values, thermal imaging, fixed-price quotes, and how we work.",
    url: "/faq/",
  },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema([...generalFaqs])} />

      <div className="page-hero">
        <Breadcrumbs items={[{ name: "FAQ", path: "/faq/" }]} />
        <div className="container" style={{ paddingTop: "1.6rem" }}>
          <span className="eyebrow">Straight Answers</span>
          <h1>Frequently Asked Questions</h1>
          <p className="lede">
            Everything homeowners ask us most, answered the same way we would
            answer in your kitchen. Do not see your question? Call{" "}
            <a href="tel:+13175550100">(317) 555-0100</a> and ask.
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
