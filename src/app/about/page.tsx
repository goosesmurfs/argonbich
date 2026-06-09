import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import { site } from "@/lib/site";
import { CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About Dan Whitaker and Ridgeline Roofing Co.",
  description:
    "Ridgeline Roofing Co. has been owner-operated by Dan Whitaker since 2008. In-house crews, fixed-price quotes, and drone-documented work on every Indianapolis-area roof.",
  alternates: { canonical: "/about/" },
  openGraph: {
    title: "About Ridgeline Roofing Co.",
    description:
      "Owner-operated by Dan Whitaker since 2008. Documented, fixed-price roofing.",
    url: "/about/",
  },
};

export default function AboutPage() {
  return (
    <>
      <div className="page-hero">
        <Breadcrumbs items={[{ name: "About", path: "/about/" }]} />
        <div className="container" style={{ paddingTop: "2rem" }}>
          <span className="eyebrow">Our Story</span>
          <h1>Built by a Roofer Who Got Tired of Roofing's Reputation</h1>
          <p className="lede">
            Ridgeline Roofing has been owner-operated by Dan Whitaker since
            2008. One standard of work, one fixed number on the quote, and a
            name on the truck that answers the phone.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container-narrow prose">
          <span className="eyebrow">Meet Dan</span>
          <h2>From Tear-Off Crews to a Company</h2>
          <p>
            Dan Whitaker started on tear-off crews, the hottest, dirtiest job
            on any roof, and worked his way through every position above it:
            installer, crew lead, estimator. Along the way he kept a private
            list of everything the industry did that he would never do to a
            customer. Quotes invented in driveways. Decking "surprises" priced
            mid-job, when the homeowner had no roof and no leverage. Crews
            assembled that morning from whoever answered the phone.
          </p>
          <p>
            In 2008 he started Ridgeline Roofing to run the list in reverse.
            Document everything, price it once, build it with people on
            payroll, and photograph the work so nobody has to take anyone's
            word for anything. Seventeen years later the company is bigger,
            but the list has not changed.
          </p>
          <h2>Why the Drone Flies on Every Estimate</h2>
          <p>
            Roofing has a trust problem for a simple reason: the product is
            installed where the customer cannot see it. Most homeowners have
            never actually looked at their own roof. Every promise, every
            diagnosis, every scary warning from a door-knocker happens in an
            information vacuum.
          </p>
          <p>
            The drone fixes that. Every Ridgeline estimate starts with a
            documentation flight: every slope, every valley, every flashing
            detail, photographed in high resolution. You look at the same
            images we do, the recommendation comes with the evidence attached,
            and the photos are yours to keep whether you hire us or not.
          </p>
          <h2>Why We Never Use Subcontractors</h2>
          <p>
            A roof is a thousand small decisions made by the people holding
            the nail guns: where each nail lands, how flashing is woven, what
            gets done when nobody is checking. Those decisions are only as
            good as the crew's training and accountability, which is why our
            installers are Ridgeline employees, trained on our process,
            working to our checklist, and answerable to Dan directly. When our
            truck is in your driveway, the people on your roof are our people.
          </p>
          <h2>What We Believe</h2>
          <ul className="check-list">
            <li>
              <CheckIcon />
              <span>
                Show the evidence first. Drone photos and findings before any
                price.
              </span>
            </li>
            <li>
              <CheckIcon />
              <span>
                Quote once, in writing, with deck repair priced before
                tear-off ever starts.
              </span>
            </li>
            <li>
              <CheckIcon />
              <span>
                Build the whole system: deck, barriers, flashing, ventilation.
                Shingles are the last 20 percent.
              </span>
            </li>
            <li>
              <CheckIcon />
              <span>
                Leave every property magnet-swept, photographed, and cleaner
                than we found it.
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container-narrow" style={{ textAlign: "center" }}>
          <span className="eyebrow" style={{ justifyContent: "center" }}>
            Talk to Us
          </span>
          <h2>Questions? Dan Reads This Inbox.</h2>
          <p className="lede">
            Email <a href={`mailto:${site.email}`}>{site.email}</a> or call{" "}
            <a href={site.phoneHref}>{site.phone}</a>, {site.hours}.
          </p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link href="/contact/" className="btn btn-solid">
              Get a Free Estimate
            </Link>
            <Link href="/roof-replacement-process/" className="btn btn-ghost">
              See How We Work
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
