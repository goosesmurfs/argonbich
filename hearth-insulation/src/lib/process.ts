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
    slug: "removal",
    title: "Old Insulation Removal",
    summary:
      "When existing insulation is contaminated, wet, or degraded, we vacuum it out completely so the restoration starts from a clean slate.",
    whyItMatters: [
      "New insulation installed over contaminated material traps odors, droppings, and moisture inside your attic permanently. Whatever was wrong stays wrong, just buried deeper and more expensive to fix later.",
      "Removal also exposes the attic floor itself. Air sealing, the step that drives much of the comfort improvement, is only possible when we can see and reach every gap, seam, and penetration.",
    ],
    howWeDoIt: [
      "We seal off the work area and protect floors and stairways with runners before any material moves.",
      "A high-powered insulation vacuum runs hoses from the attic access directly to a collection system outside, so loose fill never travels through your living space. Batts are bagged in the attic and passed out the same way.",
      "We finish with a HEPA detail of the attic floor, top plates, and joist bays, then photograph the cleared attic and review the findings with you.",
    ],
    signs: [
      "Evidence of mice, raccoons, bats, or squirrels",
      "Insulation soaked by a past roof or plumbing leak",
      "Persistent musty or ammonia-like odors upstairs",
      "Visible mold on insulation or framing",
      "Smoke odor after a fire event, even a small one",
    ],
  },
  {
    number: 2,
    slug: "decontamination",
    title: "Decontamination and Sanitizing",
    summary:
      "After removal, we treat the attic surfaces to neutralize odor sources and biological contamination left behind by pests or moisture.",
    whyItMatters: [
      "Droppings and urine soak into wood framing and drywall dust, not just the insulation. Skip this step and the smell returns with the first humid week of summer, right through your brand-new insulation.",
      "Sanitizing also matters for the air you breathe. Attic air migrates into living space through ceiling penetrations, so a contaminated attic is never fully separate from the rooms below it.",
    ],
    howWeDoIt: [
      "We HEPA vacuum residual droppings and fine debris from framing, top plates, and the attic floor.",
      "An antimicrobial treatment is applied to affected framing and sheathing surfaces to neutralize odor and biological residue.",
      "Where pests were the cause, we document the entry points we find so they can be sealed before the new insulation goes in. A clean attic stays clean only if the animals stay out.",
    ],
    signs: [
      "An attic smell that comes and goes with humidity",
      "History of rodent or wildlife activity, even if removed long ago",
      "Staining on framing or the back of ceiling drywall",
      "Allergy symptoms that worsen at home, especially upstairs",
    ],
  },
  {
    number: 3,
    slug: "air-sealing",
    title: "Attic Air Sealing",
    summary:
      "We seal the dozens of hidden gaps between your living space and the attic, the leaks that let heated air pour out of your house all winter.",
    whyItMatters: [
      "Insulation slows heat conduction, but it does almost nothing to stop moving air. A typical attic floor has gaps around light fixtures, plumbing stacks, wiring holes, duct chases, and wall top plates that together can add up to the equivalent of an open window.",
      "Warm air escaping through these gaps carries moisture with it, which condenses in cold insulation and on the roof deck. Air sealing is as much about protecting your roof and preventing ice dams as it is about saving energy. In Climate Zone 5 winters, it is not optional.",
    ],
    howWeDoIt: [
      "Working from our thermal imaging map, we locate every penetration: top plates, electrical and plumbing holes, recessed lights, bath fans, chimney chases, and the attic hatch itself.",
      "Gaps are sealed with fire-rated sealants and foam appropriate to each location. Heat-producing fixtures get code-required clearances and covers, never just buried.",
      "The attic hatch or pull-down stairs get weatherstripping and an insulated cover, closing one of the largest single leaks in most homes.",
    ],
    signs: [
      "Drafty rooms even with decent insulation depth",
      "Ice dams or heavy icicles along the roof edge",
      "Dust streaks on insulation, the fingerprint of moving air",
      "Frost on the underside of the roof deck in winter",
      "Rooms that never hold temperature despite a healthy HVAC system",
    ],
  },
  {
    number: 4,
    slug: "exterior-sealing",
    title: "Exterior Entry Point Sealing",
    summary:
      "We seal the gaps, vents, and rooflines where pests and outside air get into the attic from outside, protecting the investment before the new insulation goes in.",
    whyItMatters: [
      "If raccoons or mice ruined your last insulation, they will ruin the next batch too unless their entrances are closed. Exterior sealing is what makes an attic restoration permanent rather than a repeating expense.",
      "Open gaps at rooflines and soffits also let wind drive into the attic, which can shift loose-fill insulation and create bare spots over time. Sealing the shell keeps the insulation where we put it.",
    ],
    howWeDoIt: [
      "We walk the roofline, soffits, gable vents, and utility penetrations to find every gap larger than a pencil, because that is all a mouse needs.",
      "Openings are closed with materials matched to the location: metal flashing, hardware cloth over vents that must keep breathing, and exterior-grade sealants at joints and penetrations.",
      "Ventilation is preserved, never blocked. Soffit and ridge vents keep working; they just stop doubling as wildlife doors.",
    ],
    signs: [
      "Scratching or scurrying sounds in the ceiling or walls",
      "Daylight visible at soffit or roofline joints from inside the attic",
      "Nesting material near the eaves",
      "A history of repeat pest problems after past removals",
    ],
  },
  {
    number: 5,
    slug: "blown-in-installation",
    title: "Blown-In Insulation Install",
    summary:
      "With the attic clean, sealed, and protected, we blow new insulation to a verified depth, bringing your home to the R-49 to R-60 recommended for central Indiana.",
    whyItMatters: [
      "This is where the comfort arrives. Indianapolis sits in IECC Climate Zone 5, where the Department of Energy recommends attic insulation of R-49 to R-60. Most homes we evaluate have R-19 or less, which means the attic is bleeding heat all winter and radiating it back down all summer.",
      "Because steps one through four already handled contamination, air leaks, and entry points, the new insulation performs at its full rated value and keeps performing for decades.",
    ],
    howWeDoIt: [
      "Baffles go in at the eaves first to keep soffit ventilation open, and dams are built around the hatch, flues, and anything needing clearance.",
      "Depth markers are placed throughout the attic, and the crew blows insulation evenly to the marked depth, corner to corner.",
      "We photograph the depth markers and the finished attic so you can verify the installed R-value yourself, and the photos are yours to keep with the paperwork.",
    ],
    signs: [
      "Attic insulation measuring below 14 inches",
      "Joist tops visible above the existing insulation",
      "Hot upstairs rooms in summer, cold ones in winter",
      "Heating and cooling bills that keep climbing",
    ],
  },
];

export const processFaqs = [
  {
    q: "Do I need all five steps?",
    a: "Not necessarily. The full sequence applies to attics with contamination or pest history. If your insulation is clean and dry, we typically skip removal and decontamination and go straight to air sealing and the blow-in. Your thermal imaging evaluation determines exactly which steps your attic needs, and the fixed-price quote lists them.",
  },
  {
    q: "How long does the full process take?",
    a: "A full five-step restoration on a typical Indianapolis-area attic takes one to two days. Insulation-only projects are almost always done in a single day.",
  },
  {
    q: "Why is air sealing a separate step from insulation?",
    a: "Because they solve different problems. Insulation resists heat conduction; air sealing stops air movement. An attic with great insulation and no air sealing still leaks heated air through every gap, and that moving air carries moisture into the insulation and onto the roof deck. Doing both is what produces the result.",
  },
  {
    q: "Will my house be a mess during the work?",
    a: "No. Removal runs through vacuum hoses directly to the outside, floors are protected with runners, and the work area is sealed off. We leave the house as clean as we found it, and the attic considerably cleaner.",
  },
  {
    q: "What R-value will my attic end up with?",
    a: "We blow to R-49 at minimum and quote R-60 as an option, in line with Department of Energy recommendations for IECC Climate Zone 5. Depth markers and photos verify the result.",
  },
  {
    q: "Is the evaluation really free?",
    a: "Yes. The thermal scan, attic inspection, measurements, and written fixed-price quote cost nothing and come with no obligation.",
  },
];
