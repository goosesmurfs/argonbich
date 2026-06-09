import Link from "next/link";
import JsonLd from "./JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export type Crumb = { name: string; path: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all: Crumb[] = [{ name: "Home", path: "/" }, ...items];
  return (
    <nav className="breadcrumbs container" aria-label="Breadcrumb">
      <JsonLd data={breadcrumbSchema(all)} />
      <ol>
        {all.map((crumb, i) => {
          const isLast = i === all.length - 1;
          return (
            <li key={crumb.path}>
              {isLast ? (
                <span aria-current="page">{crumb.name}</span>
              ) : (
                <Link href={crumb.path}>{crumb.name}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
