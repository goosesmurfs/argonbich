import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Thank You",
  description: "We received your request and will be in touch shortly.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/thank-you/" },
};

/*
 * Form-backend redirect target. Point your form provider's redirect/return
 * URL here; it doubles as a conversion event page for analytics.
 */
export default function ThankYouPage() {
  return (
    <section className="section" style={{ textAlign: "center" }}>
      <div className="container-narrow">
        <span className="eyebrow" style={{ justifyContent: "center" }}>
          Request Received
        </span>
        <h1>We're On It.</h1>
        <p className="lede">
          Thanks for reaching out. We respond within one business day, and
          active leaks jump the line. If water is coming in right now, call{" "}
          <a href={site.phoneHref}>{site.phone}</a> and we will get you an
          honest arrival window for an emergency tarp.
        </p>
        <div className="btn-row" style={{ justifyContent: "center" }}>
          <Link href="/roof-replacement-process/" className="btn btn-solid">
            See What Happens Next
          </Link>
          <Link href="/" className="btn btn-ghost">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
