import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import LeadForm from "@/components/LeadForm";
import { site } from "@/lib/site";
import { PhoneIcon, MailIcon, ClockIcon, MapPinIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact Us | Free Roof Inspection in Indianapolis",
  description:
    "Request a free roof inspection with drone documentation. Call (317) 555-0148 or send the form and we will get back to you within one business day.",
  alternates: { canonical: "/contact/" },
  openGraph: {
    title: "Contact Ridgeline Roofing Co.",
    description:
      "Free drone inspections and fixed-price quotes for the Indianapolis metro.",
    url: "/contact/",
  },
};

export default function ContactPage() {
  return (
    <>
      <div className="page-hero">
        <Breadcrumbs items={[{ name: "Contact", path: "/contact/" }]} />
        <div className="container" style={{ paddingTop: "2rem" }}>
          <span className="eyebrow">Get In Touch</span>
          <h1>Let's Put a Drone Over Your Roof</h1>
          <p className="lede">
            Call, email, or send the form. We respond within one business day,
            most inspections are scheduled within the week, and active leaks
            jump the line.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container two-col">
          <div>
            <span className="eyebrow">Request an Estimate</span>
            <h2>Free Inspection, Fixed-Price Quote</h2>
            <LeadForm />
          </div>
          <div>
            <h3>Reach Us Directly</h3>
            <ul className="check-list" style={{ marginBottom: "2rem" }}>
              <li>
                <PhoneIcon />
                <span>
                  <a href={site.phoneHref}>{site.phone}</a>
                </span>
              </li>
              <li>
                <MailIcon />
                <span>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </span>
              </li>
              <li>
                <ClockIcon />
                <span>{site.hours}</span>
              </li>
              <li>
                <MapPinIcon />
                <span>
                  Based in Indianapolis, IN. Serving the surrounding metro.
                </span>
              </li>
            </ul>
            <iframe
              className="map-frame"
              title="Map of Ridgeline Roofing's Indianapolis service area"
              src="https://www.google.com/maps?q=Indianapolis,+IN&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
