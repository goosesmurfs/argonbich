import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqList from "@/components/FaqList";
import LeadForm from "@/components/LeadForm";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { processSteps, processFaqs } from "@/lib/process";
import { faqSchema, howToSchema } from "@/lib/schema";
import { CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Our 5-Step Attic Insulation Process | Indianapolis, IN",
  description:
    "How Hearth Insulation restores Indianapolis attics in five steps: removal, decontamination, air sealing, exterior sealing, and blown-in installation to the R-49 to R-60 recommended for IECC Climate Zone 5.",
  alternates: { canonical: "/attic-insulation-process/" },
  openGraph: {
    title: "Our 5-Step Attic Insulation Process | Hearth Insulation",
    description:
      "Removal, decontamination, air sealing, exterior sealing, and blown-in installation. The full attic restoration process, explained step by step.",
    url: "/attic-insulation-process/",
  },
};

export default function ProcessPage() {
  return (
    <>
      <JsonLd
        data={[
          howToSchema({
            name: "The Hearth Insulation 5-Step Attic Restoration Process",
            description:
              "How we take an Indianapolis-area attic from contaminated and under-insulated to clean, sealed, and insulated to R-49 to R-60.",
            path: "/attic-insulation-process",
            steps: processSteps.map((s) => ({ name: s.title, text: s.summary })),
          }),
          faqSchema(processFaqs),
        ]}
      />

      <div className="page-hero">
        <Breadcrumbs
          items={[
            { name: "Our Process", path: "/attic-insulation-process/" },
          ]}
        />
        <div className="container" style={{ paddingTop: "1.6rem" }}>
          <span className="eyebrow">The Deep Dive</span>
          <h1>Our 5-Step Attic Insulation Process</h1>
          <p className="lede">
            A great attic is built in layers, and the insulation is only the
            last one. Here is exactly what we do, why each step matters, and
            how to tell which steps your attic needs.
          </p>
          <div className="btn-row" style={{ marginTop: "1.4rem" }}>
            <Link href="/contact/" className="btn btn-solid">
              Get a Free Estimate
            </Link>
            <a href="tel:+13175550100" className="btn btn-ghost">
              Call Now
            </a>
          </div>
        </div>
      </div>

      <section className="section-tight section-cream-light">
        <div className="container-narrow">
          <span className="eyebrow">Why This Matters in Indiana</span>
          <h2 style={{ fontSize: "1.5rem" }}>
            Central Indiana Homes Are Running at a Third of the Recommended
            R-Value
          </h2>
          <p className="lede">
            Indianapolis sits in IECC Climate Zone 5, where the Department of
            Energy recommends attic insulation of R-49 to R-60. Most homes we
            evaluate across the metro have R-19 or less. That gap is why
            second floors bake in July, why furnaces run all night in January,
            and why ice dams form along so many local rooflines. The five
            steps below close that gap permanently, in the right order.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {processSteps.map((step) => (
            <article
              key={step.slug}
              id={`step-${step.number}`}
              className="process-step"
            >
              <span className="process-step-kicker">
                Step {step.number} of 5
              </span>
              <h2>{step.title}</h2>
              <p className="lede">{step.summary}</p>
              <div className="process-cols">
                <div>
                  <h4>Why It Matters</h4>
                  {step.whyItMatters.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                </div>
                <div>
                  <h4>How We Do It</h4>
                  {step.howWeDoIt.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                </div>
                <div>
                  <h4>Signs You Need This</h4>
                  <ul>
                    {step.signs.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-dark">
        <div className="container two-col">
          <div>
            <span className="eyebrow">The Result</span>
            <h2>What a Finished Hearth Attic Looks Like</h2>
            <p className="lede">
              Clean decking, sealed penetrations, protected ventilation, and a
              deep, even blanket of insulation at a photographed, verifiable
              depth.
            </p>
          </div>
          <ul className="check-list">
            <li>
              <CheckIcon />
              <span>Insulated to R-49 to R-60, the DOE recommendation for Climate Zone 5</span>
            </li>
            <li>
              <CheckIcon />
              <span>Every ceiling penetration air sealed with fire-rated materials</span>
            </li>
            <li>
              <CheckIcon />
              <span>Soffit ventilation protected with baffles at every eave</span>
            </li>
            <li>
              <CheckIcon />
              <span>Exterior entry points sealed so pests stay out for good</span>
            </li>
            <li>
              <CheckIcon />
              <span>Photo documentation of depth markers and finished work</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="section section-cream-light">
        <div className="container-narrow">
          <div className="section-head center">
            <span className="eyebrow">Questions</span>
            <h2>Process FAQs</h2>
          </div>
          <FaqList faqs={processFaqs} />
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          <div className="section-head center">
            <span className="eyebrow">Find Out What Your Attic Needs</span>
            <h2>Start With the Free Thermal Evaluation</h2>
            <p className="lede" style={{ textAlign: "center" }}>
              The camera tells us which of the five steps your attic actually
              needs. The fixed-price quote lists them, and the price does not
              move.
            </p>
          </div>
          <LeadForm />
        </div>
      </section>

      <CtaBand
        title="One Attic. One Quote. One Day, Usually."
        body="Tell us about your home and we will schedule your free thermal imaging evaluation this week."
      />
    </>
  );
}
