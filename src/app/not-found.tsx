import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section" style={{ textAlign: "center" }}>
      <div className="container-narrow">
        <span className="eyebrow" style={{ justifyContent: "center" }}>
          404
        </span>
        <h1>This Page Sprung a Leak</h1>
        <p className="lede">
          The page you are looking for does not exist or has moved. Let's get
          you back under cover.
        </p>
        <div className="btn-row" style={{ justifyContent: "center" }}>
          <Link href="/" className="btn btn-solid">
            Back to Home
          </Link>
          <Link href="/services/" className="btn btn-ghost">
            Browse Services
          </Link>
        </div>
      </div>
    </section>
  );
}
