import Link from "next/link";
import { site } from "@/lib/site";

export default function CtaBand({
  title = "Ready for a More Comfortable Home?",
  body = "Schedule your free home evaluation. We bring the thermal camera, you get the full picture and a fixed-price quote in writing.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="section section-dark cta-band">
      <div className="container-narrow">
        <span className="eyebrow">Free Evaluation, Fixed-Price Quote</span>
        <h2>{title}</h2>
        <p className="lede">{body}</p>
        <p>
          <a href={site.phoneHref} className="cta-phone">
            {site.phone}
          </a>
        </p>
        <div className="btn-row">
          <Link href="/contact/" className="btn btn-solid">
            Get a Free Estimate
          </Link>
          <a href={site.phoneHref} className="btn btn-ghost">
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
