export type Service = {
  slug: string;
  index: string;
  name: string;
  shortName: string;
  teaser: string;
  description: string;
  heroLine: string;
  benefits: { title: string; body: string }[];
  signs: string[];
  process: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "roof-replacement",
    index: "01",
    name: "Roof Replacement",
    shortName: "Replacement",
    teaser:
      "Full tear-off and rebuild of your roof system: decking inspected, water barriers layered correctly, shingles installed to manufacturer spec, ventilation done right.",
    heroLine:
      "A roof is a system, not a layer of shingles. We replace the whole system, documented from tear-off to final ridge cap.",
    description:
      "Most asphalt roofs in central Indiana are ready for replacement somewhere between year 18 and year 25, and storm seasons can shorten that window considerably. Our replacements are always full tear-off, never an overlay, because the deck underneath is where most roof failures actually start. We strip to the deck, repair what we find, rebuild the water barrier system with ice and water shield at the eaves and valleys, and install the new roof to manufacturer specification with balanced intake and exhaust ventilation. Every stage is photographed, and the fixed price we quote before tear-off is the price you pay after.",
    benefits: [
      {
        title: "Full tear-off, every time",
        body: "Overlays hide rotten decking and void most manufacturer coverage. We strip to the wood so you know exactly what your new roof is built on.",
      },
      {
        title: "The deck gets fixed, not covered",
        body: "Soft, delaminated, or rotten decking is replaced before anything goes over it. Your quote includes a per-sheet price agreed up front, so deck repairs never become a surprise bill.",
      },
      {
        title: "Ventilation engineered, not guessed",
        body: "An unvented attic cooks shingles from below and cuts years off a roof. We balance intake and exhaust as part of every replacement.",
      },
      {
        title: "Documented from start to finish",
        body: "Drone photos before, progress photos during, and a final photo report after. You see your own roof the way we do.",
      },
    ],
    signs: [
      "Shingles past 18 to 20 years old in Indiana weather",
      "Curling, cupping, or cracking shingles across large areas",
      "Granules collecting in gutters and downspout splash zones",
      "Multiple leaks or repairs in the last few years",
      "Sagging rooflines or visible deck deflection between rafters",
    ],
    process: [
      {
        title: "Drone inspection and photo report",
        body: "We document every slope, penetration, and flashing detail from the air and the ladder, then walk you through the findings before talking price.",
      },
      {
        title: "Fixed-price proposal",
        body: "One written number covering tear-off, deck repair allowances, materials, labor, and cleanup. The number does not move.",
      },
      {
        title: "Tear-off and rebuild",
        body: "Most homes are stripped, repaired, dried in, and shingled in one to two days by our own crew, with magnetic nail sweeps every evening.",
      },
      {
        title: "Final walkthrough and report",
        body: "We review the photo documentation together, registration paperwork for the manufacturer warranty is filed, and your yard is cleaner than we found it.",
      },
    ],
    faqs: [
      {
        q: "How long does a roof replacement take?",
        a: "Most Indianapolis-area homes take one to two days from tear-off to cleanup. Larger or steeper roofs, or significant deck repair, can add a day. You get the expected schedule in writing with the quote.",
      },
      {
        q: "Do you do overlays over existing shingles?",
        a: "No. An overlay traps heat, hides deck damage, and voids most manufacturer coverage. Every Ridgeline replacement is a full tear-off to the deck.",
      },
      {
        q: "What happens if you find rotten decking?",
        a: "Your quote includes a pre-agreed per-sheet price for deck replacement, and we photograph every sheet we replace. You will never get a mid-job phone call inventing a new number.",
      },
      {
        q: "How disruptive is the work?",
        a: "Tear-off is loud for a day. We protect landscaping and siding with catch systems, keep driveways clear for your vehicles, and run magnetic sweeps for nails every evening and at final cleanup.",
      },
    ],
  },
  {
    slug: "roof-repair",
    index: "02",
    name: "Roof Repair",
    shortName: "Repair",
    teaser:
      "Leak diagnosis and permanent repair: flashing, valleys, pipe boots, wind-lifted shingles, and the tricky stuff other crews caulk over and call done.",
    heroLine:
      "Most leaks are not where the stain is. We find the actual entry point and fix it once.",
    description:
      "Water travels. A stain on the bedroom ceiling can start at a flashing joint ten feet upslope, which is why caulk-and-go repairs fail within a season. Our repair visits start with a drone pass and an attic-side moisture check to trace the leak to its true entry point. Then we rebuild that detail the way it should have been built: step flashing rewoven into the siding, pipe boots replaced rather than smeared, valleys relined, wind-damaged shingles replaced with matched material. You get photos of the damage, photos of the fix, and a fixed price before we start.",
    benefits: [
      {
        title: "Diagnosis before repair",
        body: "Drone imaging plus an attic-side inspection traces the water to its entry point, so we fix the cause instead of chasing stains.",
      },
      {
        title: "Rebuilt details, not caulked ones",
        body: "Sealant is a gasket, not a repair. We rebuild flashing, boots, and valleys with the right materials so the fix outlives the rest of the roof.",
      },
      {
        title: "Honest repair-or-replace advice",
        body: "If a repair will buy your roof years, we say so. If you would be paying us twice within a season, we say that too, with photos either way.",
      },
      {
        title: "Matched materials",
        body: "We match shingle profile and color as closely as the market allows and tell you up front how visible the repair will be.",
      },
    ],
    signs: [
      "Water stains on ceilings or around light fixtures",
      "Shingles in the yard after a windstorm",
      "Cracked or lifted pipe boot rubber at plumbing vents",
      "Drips in the attic during wind-driven rain",
      "Daylight visible through the roof deck in the attic",
    ],
    process: [
      {
        title: "Trace the leak",
        body: "Drone pass over the suspect slopes plus an attic inspection with a moisture meter to find the true entry point.",
      },
      {
        title: "Show you the evidence",
        body: "Photos of the failed detail and a fixed price for the rebuild, plus an honest read on remaining roof life.",
      },
      {
        title: "Rebuild the detail",
        body: "Flashing rewoven, boots replaced, valleys relined, shingles matched and installed to spec. Same-week scheduling for active leaks.",
      },
      {
        title: "Verify and document",
        body: "We water-test where practical and send the after photos, so you can see the repair you paid for.",
      },
    ],
    faqs: [
      {
        q: "Can you fix my leak this week?",
        a: "Active leaks get priority scheduling, usually within a couple of days, and we can install an emergency tarp the same day in most of the metro.",
      },
      {
        q: "Why did my last repair leak again?",
        a: "Usually because sealant was used where flashing belonged. Caulk shrinks and cracks within a few seasons; metal flashing woven into the roof system does not. We rebuild details rather than coating them.",
      },
      {
        q: "Will the repair match my existing shingles?",
        a: "We match the profile and get the closest available color, but a weathered roof never matches new material perfectly. We show you the expected difference honestly before work starts.",
      },
      {
        q: "When is repair the wrong call?",
        a: "When failures are systemic: widespread granule loss, brittle shingles that crack as we work on them, or chronic leaks at multiple details. At that point repairs are rent, not investment, and we will show you why on camera.",
      },
    ],
  },
  {
    slug: "storm-damage-restoration",
    index: "03",
    name: "Storm Damage Restoration",
    shortName: "Storm",
    teaser:
      "Hail and wind damage documented, tarped, and restored, with the inspection evidence and photo reports your insurance process needs from day one.",
    heroLine:
      "After the storm, you need two things fast: the water stopped and the damage documented. We do both on the first visit.",
    description:
      "Central Indiana sits in the middle of hail alley's eastern edge, and spring storm season tests every roof in the metro. After hail or high wind, we start with emergency stabilization if you need it, then a full drone documentation pass: every slope, every elevation, soft metals, gutters, and collateral damage, all timestamped and organized into a report you can hand to your insurance company. We restore the roof with the same full-system standard as any Ridgeline replacement, and our fixed-price quote means the scope you approve is the work that happens. We are a roofing contractor, not a claims negotiator, and we recommend you work with your insurer or a licensed adjuster directly on coverage questions.",
    benefits: [
      {
        title: "Same-day stabilization",
        body: "Emergency tarping and water diversion for active leaks across most of the metro, so a damaged roof does not become a damaged house.",
      },
      {
        title: "Documentation built for the process",
        body: "Timestamped drone photos of every slope and elevation, organized into a clean report. Whatever your claim outcome, you have the evidence.",
      },
      {
        title: "Restoration to system standard",
        body: "Storm restorations get the same full tear-off, deck inspection, and ventilation standard as every Ridgeline replacement. No patch-and-pray.",
      },
      {
        title: "Straight answers about damage",
        body: "If your roof took cosmetic damage but is functionally fine, we tell you that. We document what is there, not what would be convenient.",
      },
    ],
    signs: [
      "Hail strikes visible on gutters, downspouts, or AC fins",
      "Shingles missing or creased after high wind",
      "Granule piles at downspout exits after a hailstorm",
      "Neighbors' roofs being replaced after a storm event",
      "Water spots appearing on ceilings after wind-driven rain",
    ],
    process: [
      {
        title: "Stabilize",
        body: "Emergency tarping the same day for active leaks. Stopping the water comes before everything else.",
      },
      {
        title: "Document everything",
        body: "Full drone pass, slope-by-slope photos, soft metal checks, and collateral damage notes, organized and timestamped.",
      },
      {
        title: "Scope and fixed price",
        body: "A written restoration scope with one fixed number, built from the documentation so nothing is missed or padded.",
      },
      {
        title: "Restore and verify",
        body: "Full-system restoration by our in-house crew, finished with a photo report and final walkthrough.",
      },
    ],
    faqs: [
      {
        q: "What should I do first after a hailstorm?",
        a: "If water is coming in, call us for emergency tarping. If not, avoid signing anything with door-knocking crews, get your roof documented by a contractor you choose, and review your policy before filing. Our inspection and report are free either way.",
      },
      {
        q: "Do you handle my insurance claim for me?",
        a: "We provide the inspection, documentation, and a clear fixed-price scope, and we will walk your adjuster across the roof. Coverage decisions are between you and your insurer, and we think you are best served by a contractor who focuses on the roof.",
      },
      {
        q: "How do I know if my roof actually has hail damage?",
        a: "Hail damage is often invisible from the ground. The tells are bruised shingle mats, displaced granules with exposed asphalt, and strikes on soft metals. Our drone and ladder inspection finds and photographs them, and if there is no real damage we say so.",
      },
      {
        q: "How fast can you tarp an active leak?",
        a: "Same day across most of the Indianapolis metro during storm season, weather permitting. Call (317) 555-0148 and we will give you an honest arrival window.",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
