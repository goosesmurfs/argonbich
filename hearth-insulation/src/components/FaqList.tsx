import type { Faq } from "@/lib/faqs";

/* Uses native details/summary so FAQs expand without JavaScript. */
export default function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="faq-list">
      {faqs.map((f) => (
        <details key={f.q} className="faq-item">
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}
