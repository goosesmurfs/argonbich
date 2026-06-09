export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  sections: { heading: string; paragraphs: string[] }[];
};

export const posts: Post[] = [
  {
    slug: "how-much-attic-insulation-does-an-indianapolis-home-need",
    title: "How Much Attic Insulation Does an Indianapolis Home Need?",
    description:
      "Central Indiana sits in IECC Climate Zone 5, and the Department of Energy recommends R-49 to R-60 in the attic. Here is what that means, how to check what you have, and why most local homes fall short.",
    date: "2026-04-14",
    readingTime: "5 min read",
    sections: [
      {
        heading: "The short answer: R-49 to R-60",
        paragraphs: [
          "Indianapolis and the surrounding metro sit in IECC Climate Zone 5. For attics in this zone, the U.S. Department of Energy recommends insulation levels of R-49 to R-60. In practical terms, that is roughly 14 to 18 inches of blown fiberglass or 13 to 16 inches of cellulose, depending on the product.",
          "R-value measures resistance to heat flow. The higher the number, the slower heat moves through your ceiling, out in January and in during July. Climate Zone 5 winters are cold enough, and summers hot enough, that the attic is the single most cost-effective place in the house to add insulation.",
        ],
      },
      {
        heading: "What most local homes actually have",
        paragraphs: [
          "In more than two decades of attic evaluations around Indianapolis, the most common finding is R-19 or less. That includes plenty of homes built in the 1990s and 2000s, because builders insulated to the code minimum of the time, and codes were far less demanding then.",
          "Older homes are often worse. Mid-century ranches in Lawrence or Beech Grove frequently measure under R-10, and some pre-war homes in Indianapolis neighborhoods have essentially nothing between the plaster and the roof deck.",
        ],
      },
      {
        heading: "How to check your own attic in five minutes",
        paragraphs: [
          "Open your attic hatch and look across the floor. If you can see the tops of the joists, the wooden framing members running across the floor, you almost certainly have R-19 or less and are a strong candidate for an upgrade.",
          "Next, measure the depth with a tape measure in a few spots. Old fiberglass runs roughly R-2.5 to R-3 per inch, so 6 inches of settled fiberglass is in the R-15 to R-19 range. Compare that to the 14-plus inches that R-49 requires and the gap becomes obvious.",
        ],
      },
      {
        heading: "Why depth alone is not the whole story",
        paragraphs: [
          "Two attics with identical insulation depth can perform very differently. Air leaks around light fixtures, plumbing stacks, and wall top plates let heated air bypass the insulation entirely. That is why our process always pairs air sealing with insulation, and why we scan every home with a thermal camera before quoting anything.",
          "If you would like to know your attic's real numbers, we measure them for free, with thermal imaging and a written fixed-price quote. Comfort starts here.",
        ],
      },
    ],
  },
  {
    slug: "ice-dams-in-indiana-what-causes-them-and-how-insulation-fixes-them",
    title: "Ice Dams in Indiana: What Causes Them and How Insulation Fixes Them",
    description:
      "Icicles look festive, but ice dams wreck roofs, gutters, and ceilings across central Indiana every winter. The root cause is almost always in the attic, and it is fixable.",
    date: "2026-02-09",
    readingTime: "4 min read",
    sections: [
      {
        heading: "What an ice dam actually is",
        paragraphs: [
          "An ice dam is a ridge of ice that forms along the edge of a roof. Snow on the upper, warmer part of the roof melts, runs down to the cold overhang, and refreezes. As the ridge grows, meltwater pools behind it and works its way under the shingles, into the soffits, and eventually through ceilings and wall cavities.",
          "If you see thick icicles along your gutters every winter, you are watching an ice dam form in real time.",
        ],
      },
      {
        heading: "The cause lives in your attic",
        paragraphs: [
          "Roofs do not warm themselves. The heat that melts the snow escapes from your living space through an under-insulated, leaky attic floor. Recessed lights, bath fan housings, attic hatches, and thin insulation all pump heat against the underside of the roof deck.",
          "That is why ice dams cluster above kitchens, bathrooms, and additions, the places with the most ceiling penetrations and the worst insulation coverage.",
        ],
      },
      {
        heading: "The durable fix: seal, insulate, ventilate",
        paragraphs: [
          "Heat cables and roof raking treat symptoms. The durable fix keeps the roof deck cold in the first place: air seal the attic floor so warm air cannot leak up, insulate to the R-49 to R-60 the Department of Energy recommends for Climate Zone 5, and keep soffit-to-ridge ventilation clear with baffles so any heat that does escape washes away.",
          "This is exactly the sequence of our attic process, and homes we treat stop growing icicles. If your roof edge turns into an ice sculpture every February, the attic is where to look, and we will scan it for free with thermal imaging.",
        ],
      },
    ],
  },
  {
    slug: "signs-your-attic-insulation-needs-to-be-removed-not-topped-up",
    title: "5 Signs Your Attic Insulation Needs to Be Removed, Not Topped Up",
    description:
      "Adding new insulation over bad insulation locks the problem in. Here are the five findings that make removal the right call, and how to tell the difference.",
    date: "2025-11-18",
    readingTime: "4 min read",
    sections: [
      {
        heading: "Topping up is usually fine, until it is not",
        paragraphs: [
          "Good news first: most attics do not need removal. If the existing insulation is dry, clean, and pest-free, blowing new insulation over it is the most economical path and works perfectly well. We recommend it constantly.",
          "But some conditions make removal the only honest recommendation, because covering them up traps contamination, odor, and moisture under fresh material. Here are the five we look for on every evaluation.",
        ],
      },
      {
        heading: "1. Rodent or wildlife contamination",
        paragraphs: [
          "Mice, raccoons, squirrels, and bats leave droppings and urine throughout insulation. The smell migrates into living spaces, and the contamination is a genuine health concern. Soiled insulation needs to leave the house, not get buried.",
        ],
      },
      {
        heading: "2. Water damage",
        paragraphs: [
          "Insulation that has been soaked by a roof or plumbing leak compresses, loses R-value permanently, and can feed mold growth on the framing below. Even after the leak is fixed, wet-history insulation stays compromised.",
        ],
      },
      {
        heading: "3. Mold growth",
        paragraphs: [
          "Visible mold on insulation or the framing it touches means moisture has been present for a while. Removal lets us treat the cause, dry the structure, and start clean.",
        ],
      },
      {
        heading: "4. Smoke or fire damage",
        paragraphs: [
          "Insulation absorbs smoke odor permanently. After any attic fire event, even a minor one, removal is the only way to stop the smell from re-emerging every humid week of an Indiana summer.",
        ],
      },
      {
        heading: "5. Debris-filled or degraded original material",
        paragraphs: [
          "Some older attics contain decades of construction debris, plaster crumbs, and disintegrated early insulation products. When the existing layer is more debris than insulation, clearing it lets us air seal properly, and air sealing is where a large share of the comfort gain comes from.",
          "Unsure which camp your attic falls in? Our evaluation is free, includes thermal imaging and photos of everything we find, and ends with a fixed-price quote either way. We will never recommend removal without showing you the evidence.",
        ],
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
