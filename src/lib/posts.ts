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
    slug: "how-long-does-a-roof-last-in-indiana",
    title: "How Long Does a Roof Actually Last in Indiana?",
    description:
      "Shingle packaging says 30 years. Indiana weather says otherwise. Here is what really determines your roof's lifespan in the Midwest, and how to read where yours is on the curve.",
    date: "2026-04-21",
    readingTime: "5 min read",
    sections: [
      {
        heading: "The packaging number versus the Indiana number",
        paragraphs: [
          "Most architectural shingles sold today carry a 'limited lifetime' or 30-year label. In central Indiana, the realistic service life of a typical installation is 18 to 25 years. The gap is not a scam; it is climate. Lifespan ratings assume moderate conditions, and the Midwest is not moderate.",
          "Indiana roofs absorb everything: 95-degree attic-baking summers, freeze-thaw cycles that pump water into every gap, spring hail, and straight-line winds. Each one taxes the shingle's asphalt and granule system, and the taxes compound.",
        ],
      },
      {
        heading: "What actually kills roofs here",
        paragraphs: [
          "Heat from below is the quiet killer. An attic without balanced ventilation can run 30 to 40 degrees hotter than it should, cooking the asphalt until shingles go brittle years early. This is why two identical roofs on the same street can age a decade apart.",
          "Freeze-thaw is the structural one. Water that gets under a lifted shingle edge or behind aging flashing expands when it freezes, prying the gap wider with every cycle. Ice dams at the eaves push meltwater backward up the slope, against the direction shingles are designed to shed.",
          "Then there is the weather you can see: hail bruises the shingle mat and knocks granules loose, exposing asphalt to UV that degrades it fast. Wind lifts and creases shingles along edges and ridgelines, breaking their seal strips so the next storm gets a grip.",
        ],
      },
      {
        heading: "Reading your own roof's age honestly",
        paragraphs: [
          "Granules in the gutters and at downspout exits mean the wear layer is leaving. Curling or cupping edges mean the mat is drying out. Shingles cracking when a worker walks the roof mean it is brittle through. Any of these on a roof past 15 years is the system telling you where it is on the curve.",
          "The honest answer usually is not 'replace it today.' Plenty of 18-year roofs have years left. The point of a documented inspection is knowing which kind you have, before a leak or a storm decides for you. Ours is free, the drone photographs everything, and you keep the report either way.",
        ],
      },
    ],
  },
  {
    slug: "hail-damage-roof-what-to-look-for",
    title: "Hail Hit Your Neighborhood. Does Your Roof Actually Have Damage?",
    description:
      "After a hailstorm, half the doors in the subdivision get knocked. Here is how hail damage actually works, what it looks like, and how to handle the aftermath without getting played.",
    date: "2026-03-10",
    readingTime: "5 min read",
    sections: [
      {
        heading: "Why you cannot tell from the ground",
        paragraphs: [
          "Functional hail damage is a bruise, not a hole. A hailstone strike crushes the shingle's fiberglass mat and dislodges granules, exposing asphalt to UV. The shingle does not leak that week; it dies early over the next several years. From the driveway, a badly bruised roof and a fine one look identical.",
          "That invisibility is exactly what makes post-storm door knocking work as a sales tactic. The fix is not trusting anyone's word, ours included. It is photographs.",
        ],
      },
      {
        heading: "Where hail tells the truth",
        paragraphs: [
          "Soft metals confess first. Check your gutters, downspouts, AC condenser fins, and any aluminum vents for dings and dents. If the metals took strikes, the shingles likely did too, and the dent pattern even shows which direction the storm drove from.",
          "On the roof itself, the tells are circular bruises that feel soft under a fingertip, fresh black asphalt exposed where granules were blasted away, and granule piles at downspout exits. On the drone imagery, strike patterns concentrate on the slopes that faced the storm.",
        ],
      },
      {
        heading: "How to handle the week after a storm",
        paragraphs: [
          "First, if water is coming in, get it tarped today; stopping damage always comes first. Second, do not sign anything on your doorstep, especially documents that assign your insurance claim or commit you to a contractor sight-unseen.",
          "Third, get the roof documented by a contractor you chose, with timestamped photos of every slope and the soft metals. Then read your policy and decide, on your timeline, whether a claim makes sense. A real inspection report makes every step after it easier.",
          "We do that documentation flight for free across the Indianapolis metro. If your roof took real damage, you will have the evidence. If it did not, you will have a baseline and one less thing to worry about, and we will be the ones who told you that you did not need a roof.",
        ],
      },
    ],
  },
  {
    slug: "roof-repair-or-replacement-how-to-decide",
    title: "Repair or Replace? How to Make the Call on an Aging Roof",
    description:
      "Some repairs buy your roof a decade. Others are rent paid on borrowed time. A practical framework for deciding which side of the line your roof is on.",
    date: "2025-12-02",
    readingTime: "4 min read",
    sections: [
      {
        heading: "The question underneath the question",
        paragraphs: [
          "Repair versus replace is really one question: is the failure local or systemic? A tree branch through an otherwise healthy roof is local. Brittle shingles shedding granules on every slope is systemic. Local failures are worth repairing well. Systemic ones make every repair a down payment on the next leak.",
        ],
      },
      {
        heading: "When repair is the right call",
        paragraphs: [
          "Repair wins when the roof has life left and the failure has a specific address: a failed pipe boot, wind-stripped shingles on one exposure, step flashing that was caulked instead of woven, a valley that was cut wrong. Rebuilt properly, these details can outlast the rest of the roof.",
          "The repair must actually be a rebuild, though. Sealant smeared over a failed detail is not a repair; it is a delay with a receipt. If a contractor's fix for a flashing leak does not involve removing shingles, you are buying the same leak twice.",
        ],
      },
      {
        heading: "When replacement is the honest answer",
        paragraphs: [
          "Three findings push us to recommend replacement: widespread granule loss with exposed asphalt, shingles brittle enough to crack underfoot during the repair itself, and a pattern of leaks at multiple unrelated details. Each means the system, not a component, is done.",
          "Age plus a coming storm season matters too. An Indiana roof at year 22 with bruised slopes is a bad bet against April hail, and replacement on your schedule always beats replacement on the weather's schedule.",
        ],
      },
      {
        heading: "Decide from photographs, not pressure",
        paragraphs: [
          "Whoever advises you should show you the evidence: photos of the failed detail for a repair case, or slope-by-slope photos of systemic wear for a replacement case. Our free inspection produces exactly that report, and the recommendation comes with the pictures attached. If a repair will genuinely hold, that is what we will tell you to buy.",
        ],
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
