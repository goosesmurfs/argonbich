import Link from "next/link";
import Logo from "./Logo";
import { site } from "@/lib/site";

const navLinks = [
  { href: "/services/", label: "Services" },
  { href: "/roof-replacement-process/", label: "Our Process" },
  { href: "/areas/", label: "Service Areas" },
  { href: "/about/", label: "About" },
  { href: "/blog/", label: "Blog" },
  { href: "/contact/", label: "Contact" },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner" style={{ position: "relative" }}>
        <Link href="/" className="brand" aria-label={`${site.name} home`}>
          <Logo />
          <span>
            <span className="brand-name">Ridgeline Roofing</span>
            <span className="brand-tag">Indianapolis, IN</span>
          </span>
        </Link>

        {/* CSS-only hamburger so navigation works without JavaScript */}
        <input
          type="checkbox"
          id="nav-toggle"
          className="nav-toggle-input"
          aria-hidden="true"
        />
        <label
          htmlFor="nav-toggle"
          className="nav-toggle"
          aria-label="Toggle navigation menu"
        >
          <span />
          <span />
          <span />
        </label>

        <nav className="site-nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
          <a href={site.phoneHref} className="btn btn-solid">
            {site.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
