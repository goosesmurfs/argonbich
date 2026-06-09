import Link from "next/link";
import { site } from "@/lib/site";

export default function CtaBand({
  title = "Let's Look at Your Roof.",
  body = "Schedule your free inspection. The drone flies, you get the full photo report and a fixed-price quote in writing, and the decision stays yours.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="section section-dark cta-band">
      <div className="container cta-grid">
        <div>
          <span className="eyebrow">Free Inspection / Fixed-Price Quote</span>
          <h2>{title}</h2>
          <p className="lede">{body}</p>
        </div>
        <div className="cta-side">
          <a href={site.phoneHref} className="cta-phone">
            {site.phone}
          </a>
          <div className="btn-row">
            <Link href="/contact/" className="btn btn-solid">
              Get a Free Estimate
            </Link>
            <a href={site.phoneHref} className="btn btn-ghost">
              Call Now
            </a>
          </div>
          <p className="form-note" style={{ marginTop: "1.4rem" }}>
            {site.hours} / {site.city}, {site.state}
          </p>
        </div>
      </div>
    </section>
  );
}
