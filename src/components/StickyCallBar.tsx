import Link from "next/link";
import { site } from "@/lib/site";
import { PhoneIcon } from "./Icons";

export default function StickyCallBar() {
  return (
    <div className="call-bar">
      <a href={site.phoneHref} className="call-bar-phone">
        <PhoneIcon /> Call {site.phone}
      </a>
      <Link href="/contact/" className="call-bar-quote">
        Get a Free Estimate
      </Link>
    </div>
  );
}
