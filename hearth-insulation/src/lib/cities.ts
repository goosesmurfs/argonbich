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
      "Our home base. From Broad Ripple bungalows to Irvington four-squares to newer builds on the far south side, we have insulated attics in every corner of Indy since 2004.",
    housingNote:
      "Indianapolis housing spans more than a century of construction. Pre-war homes often have little or no attic insulation and leaky balloon framing, while even 1990s and 2000s builds usually carry only the code minimum of their era, well below today's R-49 to R-60 recommendation.",
  },
  {
    slug: "carmel",
    name: "Carmel",
    county: "Hamilton County",
    blurb:
      "Carmel's housing stock leans newer, but newer does not mean well insulated. Builder-grade attics from the 80s, 90s, and 2000s routinely measure R-19 to R-30, far short of what Climate Zone 5 calls for.",
    housingNote:
      "Many Carmel homes feature complex rooflines, bonus rooms over garages, and vaulted ceilings. These are exactly the spots where builder-grade insulation falls short and where thermal imaging earns its keep.",
  },
  {
    slug: "fishers",
    name: "Fishers",
    county: "Hamilton County",
    blurb:
      "Fishers grew fast, and fast growth meant attics insulated to the minimum the code allowed at the time. We bring them up to modern standards, usually in a single day.",
    housingNote:
      "Two-story homes with bonus rooms are everywhere in Fishers. If the room over your garage swings hot and cold, the kneewalls and floor cavities are the usual culprits, and we inspect both on every evaluation.",
  },
  {
    slug: "noblesville",
    name: "Noblesville",
    county: "Hamilton County",
    blurb:
      "From historic homes near the courthouse square to new subdivisions along SR 37, Noblesville attics show the full range of insulation problems, and we have seen them all.",
    housingNote:
      "Older Noblesville homes often hide knob-and-tube era framing quirks and zero air sealing. Our process always starts with a careful attic inspection before anything gets installed.",
  },
  {
    slug: "westfield",
    name: "Westfield",
    county: "Hamilton County",
    blurb:
      "One of the fastest-growing cities in Indiana, with thousands of homes built to yesterday's energy codes. We upgrade Westfield attics to today's R-49 to R-60 recommendation.",
    housingNote:
      "Even homes less than 15 years old in Westfield commonly measure under R-38. A quick top-up to R-49 or better is one of the most cost-effective comfort upgrades available.",
  },
  {
    slug: "zionsville",
    name: "Zionsville",
    county: "Boone County",
    blurb:
      "Village charm comes with village-era insulation. We help Zionsville homeowners keep historic character on the outside and modern comfort on the inside.",
    housingNote:
      "Zionsville mixes historic village homes with large newer builds on rural lots. Both benefit from air sealing first: old homes leak through original framing, and large new homes leak through complex ceiling penetrations.",
  },
  {
    slug: "greenwood",
    name: "Greenwood",
    county: "Johnson County",
    blurb:
      "South-side homeowners call us most often about uneven upstairs temperatures and rising utility bills. Both usually trace straight back to the attic.",
    housingNote:
      "Greenwood's mix of ranches and two-stories from the 60s through the 2000s means a lot of attics with compacted, dusty original insulation that has lost much of its effectiveness.",
  },
  {
    slug: "avon",
    name: "Avon",
    county: "Hendricks County",
    blurb:
      "Avon's newer subdivisions were built quickly, and attic insulation was rarely the builder's priority. We measure what you actually have and quote a fixed price to fix it.",
    housingNote:
      "Bonus rooms, cathedral ceilings, and attic HVAC equipment are common in Avon homes. Each needs specific prep work, dams, and clearances that our in-house crews handle as standard practice.",
  },
  {
    slug: "brownsburg",
    name: "Brownsburg",
    county: "Hendricks County",
    blurb:
      "From established neighborhoods near town to new construction along Ronald Reagan Parkway, we help Brownsburg homes hold their temperature year-round.",
    housingNote:
      "Many Brownsburg attics we evaluate have insulation pushed away from the eaves or disturbed by past cable and HVAC work, leaving cold strips along exterior walls that show up clearly on thermal imaging.",
  },
  {
    slug: "lawrence",
    name: "Lawrence",
    county: "Marion County",
    blurb:
      "Lawrence and the Fort Ben area have some of the best mid-century housing stock in the metro, and some of the thinnest attic insulation. We fix that.",
    housingNote:
      "Mid-century ranches in Lawrence often have shallow attics and original rock wool or early fiberglass measuring R-10 or less. Blown-in insulation transforms these homes.",
  },
  {
    slug: "beech-grove",
    name: "Beech Grove",
    county: "Marion County",
    blurb:
      "Beech Grove's classic smaller homes heat up fast in summer and bleed heat in winter when the attic is thin. An insulation upgrade here pays back quickly.",
    housingNote:
      "Smaller homes mean smaller attics and smaller jobs, and we price them that way. A typical Beech Grove attic is a one-day project with a fixed quote up front.",
  },
  {
    slug: "geist",
    name: "Geist",
    county: "Marion and Hamilton Counties",
    blurb:
      "Large homes around Geist Reservoir have large attics, complex rooflines, and high conditioning costs. Proper insulation and air sealing make a measurable difference.",
    housingNote:
      "Vaulted great rooms, multiple attic zones, and attic-mounted HVAC are common around Geist. Our evaluation maps every zone with thermal imaging so nothing gets missed.",
  },
];

export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}
