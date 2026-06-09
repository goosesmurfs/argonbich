export type ProcessStep = {
  number: number;
  slug: string;
  title: string;
  summary: string;
  whyItMatters: string[];
  howWeDoIt: string[];
  signs: string[];
};

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    slug: "inspection",
    title: "Inspection and Documentation",
    summary:
      "Every project starts with a drone pass, a ladder inspection, and an attic check, compiled into a photo report you keep whether you hire us or not.",
    whyItMatters: [
      "You cannot scope what you have not seen. Roofs fail at details: flashing joints, valleys, penetrations, and deck condition, most of which are invisible from the ground and some of which are unsafe to walk. The drone documents all of it in high resolution.",
      "Documentation also protects you. A timestamped baseline of your roof's condition makes any future storm claim dramatically simpler, and it keeps every contractor honest, including us. The photos are the shared set of facts the fixed price is built on.",
    ],
    howWeDoIt: [
      "A full drone pass captures every slope, valley, penetration, and elevation, plus gutters and soft metals where hail tells its story first.",
      "Where access allows, we verify from the ladder and check the attic side: deck condition, ventilation, moisture staining, and daylight at penetrations.",
      "Everything lands in a photo report we review with you, page by page, before any number is discussed. The report is yours to keep either way.",
    ],
    signs: [
      "You have never seen actual photos of your own roof",
      "A contractor quoted you from the driveway",
      "Your roof is over 15 years old with no documented baseline",
      "A storm passed through and you are not sure what it did",
    ],
  },
  {
    number: 2,
    slug: "tear-off",
    title: "Full Tear-Off",
    summary:
      "We strip the roof to bare decking, every layer, every nail, with catch protection for your home and landscaping and magnetic sweeps every evening.",
    whyItMatters: [
      "Overlaying new shingles on old ones traps heat, telegraphs every defect through the new layer, hides rotten decking, and voids most manufacturer coverage. It saves money for exactly one shingle generation and costs it back with interest.",
      "Tear-off is also the only honest inspection of the deck. The wood under your shingles is the structure everything else depends on, and the only time anyone can truly assess it is when it is bare.",
    ],
    howWeDoIt: [
      "Landscaping, siding, windows, and AC units get catch and cover protection before the first shingle moves. Debris goes straight to a contained trailer.",
      "The crew strips to bare deck, pulls or sets every old nail, and clears valleys and penetrations completely.",
      "Magnetic nail sweeps run across lawns, beds, and driveways every evening, and again at final cleanup. Kids and tires matter.",
    ],
    signs: [
      "Your current roof already has two layers",
      "Rooflines look wavy or shingles telegraph bumps",
      "A contractor proposed shingling over what is there",
      "Your attic shows old leak staining nobody ever traced",
    ],
  },
  {
    number: 3,
    slug: "deck-repair",
    title: "Deck Repair and Preparation",
    summary:
      "Soft, rotten, or delaminated decking gets replaced at a per-sheet price agreed before tear-off, and every replaced sheet is photographed.",
    whyItMatters: [
      "Shingles are only as good as the wood they are nailed to. Compromised decking will not hold fasteners to wind-rating spec, flexes underfoot, and keeps rotting under the brand-new roof if it is covered instead of cured.",
      "This is also where less careful contractors make their margin: the mid-job 'we found rot' phone call with a number invented on the spot. A pre-agreed per-sheet allowance printed on your quote removes that lever entirely.",
    ],
    howWeDoIt: [
      "The bare deck is walked and probed sheet by sheet. Soft spots, delamination, and rot get marked and photographed.",
      "Damaged sheets are replaced with matching-thickness decking, fastened to spec. Plank decks with wide gaps get addressed so modern shingles seat correctly.",
      "Every replaced sheet appears in your photo documentation with the agreed per-sheet price applied. No surprises, by design.",
    ],
    signs: [
      "Visible sagging between rafters from the street",
      "A spongy feeling underfoot reported by past contractors",
      "Attic-side water stains or dark delaminated patches",
      "Your home has plank decking from before plywood era",
    ],
  },
  {
    number: 4,
    slug: "water-barriers",
    title: "Underlayment and Water Barriers",
    summary:
      "Ice and water shield at eaves and valleys, synthetic underlayment everywhere else, and metal flashing rebuilt at every wall, chimney, and penetration.",
    whyItMatters: [
      "Indiana freeze-thaw cycles push meltwater backward under shingles at the eaves, and valleys carry entire slopes' worth of runoff. These are the places roofs actually leak, and shingles alone were never designed to seal them.",
      "Flashing is the difference between a 10-year roof and a 25-year roof. Step flashing woven into siding, properly counter-flashed chimneys, and new pipe boots cost little during a replacement and everything when skipped.",
    ],
    howWeDoIt: [
      "Self-sealing ice and water membrane goes down at eaves, valleys, and around penetrations, gasketing every fastener that passes through it.",
      "High-grade synthetic underlayment covers the remaining field, capped and lapped to spec, giving the roof a true secondary water plane.",
      "All flashing is replaced, not reused: new step flashing at walls, new counter-flashing at chimneys, new boots at every pipe. Old flashing reuse is where future leaks come from.",
    ],
    signs: [
      "Ice dams or icicle walls along your eaves in winter",
      "Past leaks at the chimney or sidewall transitions",
      "Ceiling stains that appear during wind-driven rain",
      "A previous roof installed with reused flashing",
    ],
  },
  {
    number: 5,
    slug: "install-ventilation",
    title: "Shingle Install and Ridge Ventilation",
    summary:
      "Manufacturer-spec installation with correct nailing pattern and balanced ventilation, finished with a photo report and a magnetic-sweep cleanup.",
    whyItMatters: [
      "The same shingle can be a 130 mph roof or a 60 mph roof depending on nail count, placement, and line. Manufacturer specifications exist for a reason, and wind warranties depend on following them exactly.",
      "Ventilation decides how long the whole system lasts. An attic that cannot breathe superheats in summer and condenses moisture in winter, cooking shingles from below and rotting decking from inside. Balanced intake and exhaust is part of the install, not an extra.",
    ],
    howWeDoIt: [
      "Shingles go down to manufacturer spec: correct nail count and placement per shingle, straight courses, proper exposure, and matched ridge caps.",
      "Intake and exhaust are calculated and balanced: clear soffit intake paired with continuous ridge vent, never short-circuited by mixing exhaust types.",
      "The job closes with a full photo report, manufacturer warranty registration, a final walkthrough, and one last magnetic sweep of the property.",
    ],
    signs: [
      "Shingles that failed well before their rated life",
      "A scorching upstairs in summer despite decent insulation",
      "Frost on the attic side of your roof deck in winter",
      "Mixed vent types fighting each other on one roof",
    ],
  },
];

export const processFaqs = [
  {
    q: "Does every roof need all five steps?",
    a: "Every full replacement does, and we do not skip stages to win on price. Repairs are scoped differently: the inspection step always happens, then we rebuild only the failed details. Your photo report shows which path your roof actually needs.",
  },
  {
    q: "How long does the whole process take?",
    a: "Inspection to written quote is usually under 48 hours. The replacement itself takes one to two days for most metro homes, weather permitting, with the schedule committed in writing.",
  },
  {
    q: "Why does tear-off matter so much?",
    a: "Because the deck is the foundation of the roof and tear-off is the only time anyone can see it. Overlays hide problems, void most manufacturer coverage, and shorten the life of the new shingles. We do not install them.",
  },
  {
    q: "What does the per-sheet decking allowance mean?",
    a: "Your quote lists a fixed price per sheet of decking replaced, agreed before tear-off. If we find rot, you pay that printed number per sheet, with photos of each one. If the deck is clean, you pay nothing extra. Either way there is no mid-job renegotiation.",
  },
  {
    q: "Will you be the crew on my roof, or someone you hired that morning?",
    a: "Our own in-house crew, every time. The crew lead's name is on your schedule, the crew works to our checklist, and Dan answers for the result.",
  },
  {
    q: "What do I actually get when the job is done?",
    a: "A photo report covering tear-off through final ridge cap, your manufacturer warranty registration, the workmanship terms in writing, and a property that has been magnet-swept for nails. The roof should be the least dramatic thing about your year.",
  },
];
