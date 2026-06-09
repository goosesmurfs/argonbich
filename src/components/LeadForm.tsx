import { site } from "@/lib/site";
import { services } from "@/lib/services";

/*
 * Plain HTML form so it renders and submits without JavaScript.
 * The mailto action opens the visitor's email client pre-addressed to the
 * shop inbox; swap the action for a form backend endpoint when one is set up.
 */
export default function LeadForm({ heading }: { heading?: string }) {
  return (
    <form
      className="lead-form"
      action={`mailto:${site.email}`}
      method="post"
      encType="text/plain"
      aria-label={heading ?? "Request a free estimate"}
    >
      <div className="form-row">
        <label>
          Name
          <input type="text" name="name" autoComplete="name" required />
        </label>
        <label>
          Phone
          <input type="tel" name="phone" autoComplete="tel" required />
        </label>
      </div>
      <div className="form-row">
        <label>
          Email
          <input type="email" name="email" autoComplete="email" />
        </label>
        <label>
          City
          <input
            type="text"
            name="city"
            autoComplete="address-level2"
            placeholder="Indianapolis, Carmel, Fishers..."
          />
        </label>
      </div>
      <label>
        What do you need help with?
        <select name="service" defaultValue="">
          <option value="" disabled>
            Choose a service
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.name}>
              {s.name}
            </option>
          ))}
          <option value="Not sure yet">Not sure yet, please advise</option>
        </select>
      </label>
      <label>
        Tell us about your home
        <textarea
          name="message"
          rows={4}
          placeholder="Year built, what you are noticing, anything else we should know."
        />
      </label>
      <div className="btn-row">
        <button type="submit" className="btn btn-solid">
          Request My Free Estimate
        </button>
        <a href={site.phoneHref} className="btn btn-ghost">
          Or call {site.phone}
        </a>
      </div>
      <p className="form-note">
        Every estimate includes a thermal imaging scan and a written
        fixed-price quote. No cost, no obligation, no pressure.
      </p>
    </form>
  );
}
