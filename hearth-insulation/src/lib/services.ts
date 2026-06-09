export type Service = {
  slug: string;
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
    slug: "blown-in-attic-insulation",
    name: "Blown-In Attic Insulation",
    shortName: "Blown-In Attic",
    teaser:
      "Loose-fill insulation blown to a consistent depth across your entire attic, sealing out Indiana winters and summer heat alike.",
    heroLine:
      "Bring your attic up to the R-49 to R-60 the Department of Energy recommends for central Indiana.",
    description:
      "Blown-in (loose-fill) insulation is the most effective and economical way to insulate an existing attic. We blow insulation to a uniform depth across the whole attic floor, filling the gaps, odd corners, and framing cavities that batts leave exposed. Indianapolis sits in IECC Climate Zone 5, where the Department of Energy recommends attic insulation of R-49 to R-60. Most homes we evaluate in the metro have R-19 or less, which means heated air pours out through the ceiling all winter and the attic radiates heat back down all summer.",
    benefits: [
      {
        title: "Even coverage, no cold spots",
        body: "Loose-fill flows around wiring, plumbing, and irregular framing, so coverage is consistent in places batts simply cannot reach.",
      },
      {
        title: "Lower heating and cooling bills",
        body: "Bringing a typical under-insulated attic up to R-49 or better noticeably reduces the run time of your furnace and air conditioner.",
      },
      {
        title: "A more comfortable second floor",
        body: "Upstairs rooms that bake in July and freeze in January are usually an attic insulation problem, and this is the fix.",
      },
      {
        title: "Quieter, more stable home",
        body: "A thick blanket of insulation dampens outside noise and evens out room-to-room temperature swings.",
      },
    ],
    signs: [
      "Heating or cooling bills that climb every year",
      "Upstairs rooms noticeably hotter or colder than downstairs",
      "Ice dams or icicles along the roof edge in winter",
      "You can see the tops of your attic floor joists above the insulation",
      "Your HVAC system runs almost constantly on hot or cold days",
    ],
    process: [
      {
        title: "Thermal imaging evaluation",
        body: "We scan your ceilings and attic with a thermal camera to map exactly where heat is escaping, then measure your current insulation depth and R-value.",
      },
      {
        title: "Air sealing first",
        body: "Before any insulation goes in, we seal the gaps around light fixtures, plumbing stacks, wire penetrations, and top plates. Insulation slows heat; air sealing stops the drafts that carry it.",
      },
      {
        title: "Dams and baffles",
        body: "We install baffles at the eaves to protect soffit ventilation and build dams around hatches, flues, and recessed lights that need clearance.",
      },
      {
        title: "Blow to depth",
        body: "Our crew blows insulation to a marked, verified depth across the entire attic, then photographs depth markers so you can see the finished R-value yourself.",
      },
    ],
    faqs: [
      {
        q: "How long does blown-in attic insulation take?",
        a: "Most Indianapolis-area attics are completed in a single day. Air sealing and prep usually take the morning and the blow itself takes a few hours.",
      },
      {
        q: "Do I need to remove my old insulation first?",
        a: "Not always. If the existing insulation is dry, clean, and free of pest contamination, we can top it up. If it is wet, moldy, or soiled by rodents, we recommend removal first, and we will show you the evidence on camera before recommending it.",
      },
      {
        q: "What R-value should my attic have in Indianapolis?",
        a: "Central Indiana is in IECC Climate Zone 5. The Department of Energy recommends R-49 to R-60 for attics here. Most existing homes we evaluate have R-19 or less.",
      },
      {
        q: "Will blown-in insulation settle over time?",
        a: "All loose-fill settles slightly, which is why we blow to a depth that accounts for settling so your attic still meets the target R-value years later.",
      },
    ],
  },
  {
    slug: "batt-insulation-replacement",
    name: "Batt Insulation Replacement",
    shortName: "Batt Replacement",
    teaser:
      "Sagging, compressed, or poorly fitted batts replaced with properly sized, properly installed insulation that actually performs at its rated R-value.",
    heroLine:
      "A batt only performs at its rated R-value when it is cut, fitted, and installed correctly. Most are not.",
    description:
      "Fiberglass and mineral wool batts are everywhere in Indiana homes: walls, crawl space ceilings, band joists, garage ceilings, and attic kneewalls. They are also the most commonly botched insulation product in the industry. Batts that are compressed, stuffed, gapped, or sagging can lose a large share of their rated performance. We remove failed batts and install new ones the way the manufacturer intended: cut to fit, split around wiring, and held in full contact with the surface they insulate.",
    benefits: [
      {
        title: "Full rated performance",
        body: "A correctly fitted batt performs at its label. We cut each batt to the cavity, split it around wires and pipes, and avoid the compression that kills R-value.",
      },
      {
        title: "Warmer floors and bonus rooms",
        body: "Crawl space ceilings, garage ceilings, and kneewalls are where bad batt work hurts most. Fixing them is the difference between a cold floor and a comfortable one.",
      },
      {
        title: "Moisture problems addressed",
        body: "Sagging or fallen batts are often a moisture symptom. We identify the cause before installing new material so the problem does not come back.",
      },
      {
        title: "Cleaner, safer cavities",
        body: "Old batts collect dust, pest debris, and moisture. Replacement removes the contamination along with the failed material.",
      },
    ],
    signs: [
      "Batts sagging or falling from a crawl space or garage ceiling",
      "Cold floors above unheated spaces",
      "Visible gaps, compression, or batts stuffed behind wiring",
      "A musty smell from walls, kneewalls, or rim joists",
      "A bonus room over the garage that never holds temperature",
    ],
    process: [
      {
        title: "Evaluate with thermal imaging",
        body: "The camera shows us exactly which cavities are underperforming, so you only pay to fix what is actually failing.",
      },
      {
        title: "Remove and bag failed batts",
        body: "We pull out the old material, bag it on site, and haul it away. No insulation debris left in your home.",
      },
      {
        title: "Correct the cause",
        body: "We address the air leaks, moisture, or missing supports that made the original install fail.",
      },
      {
        title: "Install to spec",
        body: "New batts are cut to the cavity, split around obstructions, and secured in full contact, then we photograph the finished work.",
      },
    ],
    faqs: [
      {
        q: "How do I know if my batts need replacing instead of just refitting?",
        a: "If batts are dry, intact, and simply fell, refitting may be enough and we will tell you so. Batts that are wet, moldy, pest-soiled, or badly compressed need replacement.",
      },
      {
        q: "What is wrong with compressed batts?",
        a: "Batt insulation works by trapping air. Compressing an R-19 batt into a shallow cavity can cut its real-world performance dramatically. The fix is the right thickness for the cavity, installed without compression.",
      },
      {
        q: "Can you replace batts in finished walls?",
        a: "Finished wall cavities are usually better served by dense-pack approaches, which we will discuss during your evaluation. Our batt replacement work focuses on accessible areas: attics, kneewalls, crawl spaces, band joists, and garage ceilings.",
      },
    ],
  },
  {
    slug: "insulation-removal",
    name: "Insulation Removal",
    shortName: "Removal",
    teaser:
      "Safe, contained removal of contaminated, wet, or failed insulation, vacuumed directly to a truck outside so debris never travels through your home.",
    heroLine:
      "Contaminated insulation does not get better with more insulation on top of it. Sometimes the right first step is a clean slate.",
    description:
      "Old insulation that has been soaked by a roof leak, soiled by rodents or raccoons, or degraded by decades of dust does more harm than good. It holds odors, feeds mold, and undermines anything installed over it. Our removal process uses a high-powered insulation vacuum with hoses run from the attic directly to a collection system outside, so contaminated material never passes through your living space. We finish with a HEPA detail of the attic floor and document the cleared space with photos.",
    benefits: [
      {
        title: "Contained, clean process",
        body: "Vacuum hoses run from the attic straight outside. Floors and stairways are protected with runners, and the work area is sealed off from the rest of the house.",
      },
      {
        title: "Eliminates odor and contamination sources",
        body: "Rodent-soiled insulation is the most common source of persistent attic odor. Removal takes the source out of the house entirely.",
      },
      {
        title: "Reveals what is underneath",
        body: "A bare attic floor lets us find and seal every air leak and inspect for wiring, moisture, and structural issues that insulation was hiding.",
      },
      {
        title: "The right base for new insulation",
        body: "New insulation performs best over a clean, sealed surface. Removal is step one of our full attic restoration process.",
      },
    ],
    signs: [
      "Evidence of mice, raccoons, bats, or squirrels in the attic",
      "Insulation soaked by a past roof or plumbing leak",
      "Persistent musty or ammonia-like odor upstairs",
      "Smoke or fire damage in the attic",
      "Insulation visibly blackened along the eaves or around fixtures",
    ],
    process: [
      {
        title: "Containment setup",
        body: "We protect floors, seal the work area, and run vacuum hoses from the attic access directly to the collection system outside.",
      },
      {
        title: "Vacuum removal",
        body: "Loose fill is vacuumed and batts are bagged in the attic, then passed out without crossing living spaces.",
      },
      {
        title: "HEPA detail",
        body: "We vacuum the attic floor, top plates, and joist bays with HEPA equipment to capture fine dust and droppings.",
      },
      {
        title: "Inspect and document",
        body: "You receive photos of the cleared attic plus our findings on air leaks, ventilation, and any damage that was hidden under the old material.",
      },
    ],
    faqs: [
      {
        q: "Does insulation removal make a mess in my house?",
        a: "No. The vacuum hoses run from your attic access directly to the collection system outside, the work area is sealed, and floors are protected. The material never travels loose through your home.",
      },
      {
        q: "How long does attic insulation removal take?",
        a: "A typical Indianapolis-area attic takes half a day to a full day depending on size, depth of material, and how much batting needs to be bagged by hand.",
      },
      {
        q: "Do you handle the disposal?",
        a: "Yes. All removed material leaves with us the same day and is disposed of properly. Nothing is left at the curb.",
      },
      {
        q: "Should I remove old insulation before adding new?",
        a: "Only when it is contaminated, wet, or moldy. If your existing insulation is clean and dry, topping it up is usually the better value, and we will show you thermal images and photos so you can decide with real evidence.",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
