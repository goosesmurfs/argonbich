export type City = {
  slug: string;
  name: string;
  county: string;
  blurb: string;
  housingNote: string;
};

export const cities: City[] = [
  {
    slug: "indianapolis",
    name: "Indianapolis",
    county: "Marion County",
    blurb:
      "Our home base. From Broad Ripple bungalows to Irvington four-squares to new builds on the far south side, we have been on Indy roofs since 2008.",
    housingNote:
      "Indianapolis roofs span a century of construction: steep historic gables with layered tear-offs waiting underneath, mid-century low slopes, and 2000s builds hitting the end of their first shingle life all at once. The drone inspection tells us which story your roof is in before anyone quotes a number.",
  },
  {
    slug: "carmel",
    name: "Carmel",
    county: "Hamilton County",
    blurb:
      "Complex rooflines, high-end finishes, and HOA expectations. Carmel roofs reward careful work and punish shortcuts, which suits us fine.",
    housingNote:
      "Carmel homes lean toward steep, cut-up roofs with dormers, valleys, and mixed materials. Valleys and dead valleys are where these roofs fail first, and they are the first thing our inspection documents.",
  },
  {
    slug: "fishers",
    name: "Fishers",
    county: "Hamilton County",
    blurb:
      "Whole neighborhoods in Fishers were shingled within a few years of each other, which means whole neighborhoods age out together. We help you time it right.",
    housingNote:
      "Much of Fishers was built between the mid-90s and late 2000s, so first-generation roofs are reaching replacement age street by street. Hail events accelerate the timeline, and our free inspection gives you an honest read on where your roof sits.",
  },
  {
    slug: "noblesville",
    name: "Noblesville",
    county: "Hamilton County",
    blurb:
      "From historic homes near the courthouse square to new construction along SR 37, Noblesville roofs cover the full range, and we work all of it.",
    housingNote:
      "Older Noblesville homes often carry decades of patchwork and at least one overlay. We always check layer count and deck condition first, because that determines the honest scope of a replacement.",
  },
  {
    slug: "westfield",
    name: "Westfield",
    county: "Hamilton County",
    blurb:
      "One of the fastest-growing cities in Indiana, full of builder-grade roofs installed at production speed. We bring them up to spec when their time comes.",
    housingNote:
      "Production building means production roofing: minimal flashing details and ventilation that just meets code. When Westfield roofs turn over, fixing the ventilation and flashing details is where most of the added lifespan comes from.",
  },
  {
    slug: "zionsville",
    name: "Zionsville",
    county: "Boone County",
    blurb:
      "Village character on the outside, modern performance on top. We keep Zionsville roofs looking right for the street and built right for the weather.",
    housingNote:
      "Zionsville mixes historic village homes with large newer builds on open lots that take wind head-on. Wind rating and proper nailing pattern matter more here than almost anywhere else we work.",
  },
  {
    slug: "greenwood",
    name: "Greenwood",
    county: "Johnson County",
    blurb:
      "South-side storms tend to ride straight up through Greenwood. We handle the hail calls, the wind calls, and the roofs that were patched once too often.",
    housingNote:
      "Greenwood's mix of 60s ranches through 2000s two-stories means everything from shallow-slope tar lines to steep gables. Hail documentation is the most common reason Greenwood homeowners call us first.",
  },
  {
    slug: "avon",
    name: "Avon",
    county: "Hendricks County",
    blurb:
      "Avon's subdivisions went up fast, and their roofs are aging on the same schedule. We quote a fixed price and stand behind the date and the number.",
    housingNote:
      "Open western exposure means Avon roofs catch prevailing storms first. Creased and wind-lifted shingles on west-facing slopes are the most common finding in our Avon inspections.",
  },
  {
    slug: "brownsburg",
    name: "Brownsburg",
    county: "Hendricks County",
    blurb:
      "From established neighborhoods near town to new construction along Ronald Reagan Parkway, we keep Brownsburg dried in and documented.",
    housingNote:
      "Brownsburg sits in a corridor that catches more than its share of hail cells. Even when a roof looks fine from the ground, a documented baseline inspection makes any future storm claim far simpler.",
  },
  {
    slug: "lawrence",
    name: "Lawrence",
    county: "Marion County",
    blurb:
      "Lawrence and the Fort Ben area have great mid-century housing stock with roofs that have seen two or three shingle generations. We do the next one right.",
    housingNote:
      "Mid-century ranches in Lawrence often have low-slope sections and additions where pitches meet badly. Those transitions are leak factories, and they are exactly the details our crews rebuild rather than caulk.",
  },
  {
    slug: "beech-grove",
    name: "Beech Grove",
    county: "Marion County",
    blurb:
      "Beech Grove's compact classic homes mean compact, efficient roof jobs. Most replacements here are done in a single day, at a fixed price quoted up front.",
    housingNote:
      "Smaller footprints keep Beech Grove projects fast and affordable, but older homes here often hide plank decking with gaps that modern shingles need addressed. Our deck inspection catches it before it becomes a callback.",
  },
  {
    slug: "geist",
    name: "Geist",
    county: "Marion and Hamilton Counties",
    blurb:
      "Large homes, complex rooflines, and open water that funnels wind. Geist roofs are exactly the kind of work where documentation and detail pay off.",
    housingNote:
      "Multi-level rooflines around Geist Reservoir mean lots of flashing transitions, dead valleys, and wind exposure off the water. The drone inspection earns its keep here, reaching details no ladder ever sees safely.",
  },
];

export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}
