import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import { site } from "@/lib/site";
import { CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About Paul Bryant and Hearth Insulation",
  description:
    "Hearth Insulation has been owner-operated by Paul Bryant since 2004. More than 20 years of building science experience, in-house crews, and a fixed-price promise on every Indianapolis-area job.",
  alternates: { canonical: "/about/" },
  openGraph: {
    title: "About Hearth Insulation",
    description:
      "Owner-operated by Paul Bryant since 2004. Building science first, on every job.",
    url: "/about/",
  },
};

export default function AboutPage() {
  return (
    <>
      <div className="page-hero">
        <Breadcrumbs items={[{ name: "About", path: "/about/" }]} />
        <div className="container" style={{ paddingTop: "1.6rem" }}>
          <span className="eyebrow">Our Story</span>
          <h1>Built by One Guy Who Could Not Stand Bad Attic Work</h1>
          <p className="lede">
            Hearth Insulation has been owner-operated by Paul Bryant since
            2004. Twenty-plus years of building science, one standard of work,
            and a name on the truck that answers the phone.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container-narrow prose">
          <span className="eyebrow">Meet Paul</span>
          <h2>From Crawl Spaces to a Company</h2>
          <p>
            Paul Bryant got his start in building science the unglamorous way:
            in the crawl spaces, attics, and rim joists of central Indiana
            homes, figuring out why some houses were comfortable and cheap to
            run while identical floor plans next door were drafty and
            expensive. The answer almost never lived in the furnace. It lived
            in the building shell, in the insulation that was missing,
            compressed, or bypassed by air leaks nobody had bothered to seal.
          </p>
          <p>
            After years of seeing insulation jobs that looked fine from the
            hatch and failed everywhere the eye could not reach, Paul founded
            Hearth Insulation in 2004 with a simple premise: do the parts of
            the job nobody can see as carefully as the parts they can. Air
            seal before you insulate. Protect the ventilation. Dam the flues.
            Photograph the depth markers. Then stand behind the number you
            quoted.
          </p>
          <h2>Why the Thermal Camera Goes on Every Truck</h2>
          <p>
            Early on, Paul noticed that homeowners were being asked to take an
            awful lot on faith. A contractor would glance at an attic, name a
            price, and the homeowner had no way to judge whether the diagnosis
            or the price made sense. The thermal camera changed that. Heat
            loss stops being an abstraction when you can see your own ceiling
            glowing blue around every can light.
          </p>
          <p>
            That is why every Hearth evaluation, every single one, includes a
            thermal imaging scan at no charge. You see the problem before you
            are asked to pay for the fix, and you keep the images either way.
          </p>
          <h2>Why We Never Use Subcontractors</h2>
          <p>
            Insulation work is detail work, and details are the first thing
            lost when a job is handed to the lowest-bidding crew of the week.
            Our installers are Hearth employees, trained on our process,
            working to our checklist, and accountable to Paul directly. When
            our truck is in your driveway, the people in your attic are our
            people. That is not a slogan; it is the operating model, and it is
            why we can put a fixed price on the work and keep it.
          </p>
          <h2>What We Believe</h2>
          <ul className="check-list">
            <li>
              <CheckIcon />
              <span>
                Show the evidence first. Thermal images and photos, before any
                quote.
              </span>
            </li>
            <li>
              <CheckIcon />
              <span>
                Quote once, in writing, and absorb the surprises ourselves.
              </span>
            </li>
            <li>
              <CheckIcon />
              <span>
                Building science before product. Air sealing and ventilation
                are not upsells; they are the job.
              </span>
            </li>
            <li>
              <CheckIcon />
              <span>
                Leave every home cleaner than we found it and every attic
                verifiably better.
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container-narrow" style={{ textAlign: "center" }}>
          <span className="eyebrow">Talk to Us</span>
          <h2>Questions? Paul Reads This Inbox.</h2>
          <p className="lede">
            Email <a href={`mailto:${site.email}`}>{site.email}</a> or call{" "}
            <a href={site.phoneHref}>{site.phone}</a>, {site.hours}.
          </p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link href="/contact/" className="btn btn-solid">
              Get a Free Estimate
            </Link>
            <Link href="/attic-insulation-process/" className="btn btn-ghost">
              See How We Work
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
