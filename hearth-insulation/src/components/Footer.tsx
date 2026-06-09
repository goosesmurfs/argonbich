import Link from "next/link";
import Logo from "./Logo";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { cities } from "@/lib/cities";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <div className="brand" style={{ marginBottom: "1rem" }}>
            <Logo />
            <span>
              <span className="brand-name" style={{ color: "#fff" }}>
                Hearth Insulation
              </span>
              <span className="brand-tag" style={{ color: "var(--honey-bright)" }}>
                Comfort starts here
              </span>
            </span>
          </div>
          <p>
            Owner-operated insulation contractor serving Indianapolis and the
            surrounding metro since {site.founded}. Thermal imaging on every
            free evaluation, fixed-price quotes, and in-house crews on every
            job.
          </p>
          <p>
            <a href={site.phoneHref}>{site.phone}</a>
            <br />
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <br />
            {site.hours}
          </p>
        </div>

        <div>
          <h4>Services</h4>
          <ul>
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}/`}>{s.name}</Link>
              </li>
            ))}
            <li>
              <Link href="/attic-insulation-process/">
                Attic Restoration Process
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4>Service Areas</h4>
          <ul>
            {cities.slice(0, 7).map((c) => (
              <li key={c.slug}>
                <Link href={`/areas/${c.slug}/`}>{c.name}, IN</Link>
              </li>
            ))}
            <li>
              <Link href="/areas/">All service areas</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4>Company</h4>
          <ul>
            <li>
              <Link href="/about/">About Paul</Link>
            </li>
            <li>
              <Link href="/faq/">FAQ</Link>
            </li>
            <li>
              <Link href="/resources/">Resources</Link>
            </li>
            <li>
              <Link href="/blog/">Blog</Link>
            </li>
            <li>
              <Link href="/contact/">Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>
          Copyright {new Date().getFullYear()} {site.name}. All rights
          reserved.
        </span>
        <span>
          {site.city}, {site.state}. Founded {site.founded}.
        </span>
      </div>
    </footer>
  );
}
