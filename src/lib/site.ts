export const site = {
  name: "Ridgeline Roofing Co.",
  shortName: "Ridgeline",
  tagline: "Over your head. Under control.",
  url: "https://www.ridgelineroofing.com",
  phone: "(317) 555-0148",
  phoneHref: "tel:+13175550148",
  email: "hello@ridgelineroofing.com",
  owner: "Dan Whitaker",
  founded: "2008",
  city: "Indianapolis",
  state: "IN",
  region: "Indianapolis metro",
  description:
    "Ridgeline Roofing Co. is an owner-operated roofing contractor serving Indianapolis and the surrounding metro. Roof replacement, roof repair, and storm damage restoration, with a drone inspection and full photo report on every free estimate, fixed-price quotes, and in-house crews.",
  hours: "Mon to Fri, 7:00am to 6:00pm",
} as const;

export const trustPoints = [
  "Drone inspection on every estimate",
  "Fixed-price quotes, no surprises",
  "In-house crews, no subcontractors",
  "Owner-operated since 2008",
] as const;

export const stats = [
  { value: "2008", label: "Owner-operated since" },
  { value: "12", label: "Cities served across the metro" },
  { value: "25", label: "Checkpoints in every inspection" },
  { value: "01", label: "Quote. Fixed. It is also the invoice." },
] as const;
