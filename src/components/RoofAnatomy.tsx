const layers = [
  {
    num: "01",
    title: "Decking",
    body: "The wood structure everything is fastened to. Inspected sheet by sheet at tear-off; soft or rotten sheets replaced at a pre-agreed price.",
  },
  {
    num: "02",
    title: "Ice & Water Shield",
    body: "Self-sealing membrane along the eaves and valleys, where Indiana freeze-thaw pushes water backward under shingles.",
  },
  {
    num: "03",
    title: "Synthetic Underlayment",
    body: "A second water plane across the entire field, capped and lapped to spec under the shingles.",
  },
  {
    num: "04",
    title: "Shingles & Starter",
    body: "Architectural shingles installed to manufacturer spec: correct nail count, placement, and exposure. The wind warranty depends on it.",
  },
  {
    num: "05",
    title: "Flashing",
    body: "New metal at every chimney, sidewall, and pipe. Always replaced, never reused; reused flashing is where future leaks come from.",
  },
  {
    num: "06",
    title: "Ventilation",
    body: "Balanced soffit intake and ridge exhaust so the attic breathes. Trapped heat cooks shingles from below and shortens roof life.",
  },
] as const;

/* ------------------------------------------------------------------ */
/* Isometric roof-plane geometry.                                      */
/* The visible roof plane is parameterized as P(a, b) where a runs     */
/* along the ridge (0 = left/front, 1 = right/back) and b runs down    */
/* the slope (0 = ridge, 1 = eave).                                    */
const RF = { x: 150, y: 150 }; // ridge, front corner
const U = { x: 385, y: 97 }; // along the ridge
const S = { x: 170, y: 165 }; // down the slope
const WALL = 84; // wall height below the eaves

/* unit vectors, used to map texture patterns onto the tilted planes */
const UH = { x: 0.9697, y: 0.2443 };
const SH = { x: 0.7176, y: 0.6965 };
const PLANE_TX = `matrix(${UH.x},${UH.y},${SH.x},${SH.y},${RF.x},${RF.y})`;

function P(a: number, b: number) {
  return {
    x: RF.x + a * U.x + b * S.x,
    y: RF.y + a * U.y + b * S.y,
  };
}

function pt(a: number, b: number) {
  const p = P(a, b);
  return `${p.x.toFixed(1)},${p.y.toFixed(1)}`;
}

function quad(a1: number, b1: number, a2: number, b2: number) {
  return `${pt(a1, b1)} ${pt(a2, b1)} ${pt(a2, b2)} ${pt(a1, b2)}`;
}

/* line down the slope at ridge position a, between b1 and b2 */
function slopeLine(a: number, b1: number, b2: number) {
  const p1 = P(a, b1);
  const p2 = P(a, b2);
  return `M${p1.x.toFixed(1)} ${p1.y.toFixed(1)} L${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
}

/* line along the ridge direction at slope position b, between a1 and a2 */
function ridgeLine(b: number, a1: number, a2: number) {
  const p1 = P(a1, b);
  const p2 = P(a2, b);
  return `M${p1.x.toFixed(1)} ${p1.y.toFixed(1)} L${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
}

/* house body corners */
const EF = P(0, 1); // front-left eave corner
const EB = P(1, 1); // back-right eave corner
const EO = { x: 30, y: 250 }; // far eave of the hidden slope (gable end)

/* chimney: a vertical box seated on the shingle field */
const CH = { a1: 0.68, a2: 0.76, b1: 0.28, b2: 0.4, h: 88 };
const chA = P(CH.a1, CH.b1);
const chB = P(CH.a2, CH.b1);
const chC = P(CH.a2, CH.b2);
const chD = P(CH.a1, CH.b2);

function up(p: { x: number; y: number }, h: number) {
  return { x: p.x, y: p.y - h };
}
const chA2 = up(chA, CH.h);
const chB2 = up(chB, CH.h);
const chC2 = up(chC, CH.h);
const chD2 = up(chD, CH.h);

function poly(points: { x: number; y: number }[]) {
  return points.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
}

function Marker({ x, y, num }: { x: number; y: number; num: string }) {
  return (
    <g>
      <circle cx={x} cy={y} r="13" fill="#12161C" stroke="#FF6B2B" strokeWidth="1.5" />
      <text
        x={x}
        y={y + 3.5}
        textAnchor="middle"
        fontFamily="Space Mono, monospace"
        fontSize="10"
        fill="#FF6B2B"
      >
        {num}
      </text>
    </g>
  );
}

function SideLabel({
  x,
  y,
  text,
  anchor = "start",
}: {
  x: number;
  y: number;
  text: string;
  anchor?: "start" | "end";
}) {
  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      fontFamily="Space Mono, monospace"
      fontSize="11.5"
      letterSpacing="1.5"
      fill="#AAB2BC"
      style={{ textTransform: "uppercase" }}
    >
      {text}
    </text>
  );
}

function Leader({
  x1,
  y1,
  a,
  b,
}: {
  x1: number;
  y1: number;
  a: number;
  b: number;
}) {
  const p = P(a, b);
  return (
    <line
      x1={x1}
      y1={y1}
      x2={p.x}
      y2={p.y}
      stroke="#78818D"
      strokeWidth="1.2"
    />
  );
}

/*
 * A realistically rendered gable roof in isometric view with the covering
 * peeled back in stages, left to right: bare wood decking, ice and water
 * shield at the eave, synthetic underlayment, then the finished shingle
 * field with ridge cap, brick chimney with flashing, and attic airflow.
 * Textures are SVG patterns mapped onto the roof plane; highlighting is
 * CSS-only (hover/:has in globals.css) and the full explanation always
 * lives in the visible legend, so nothing depends on hover or JavaScript.
 */
export default function RoofAnatomy() {
  return (
    <div className="anatomy">
      <figure className="anatomy-figure" style={{ margin: 0 }}>
        <svg
          className="anatomy-svg"
          viewBox="0 0 760 560"
          role="img"
          aria-label="Illustration of a house roof with the layers peeled back in stages: bare wood decking, ice and water shield at the eave, synthetic underlayment, and the finished shingle field, with brick chimney flashing and attic ventilation called out"
        >
          <defs>
            <radialGradient id="rfGlow" cx="0.5" cy="0.5" r="0.6">
              <stop offset="0" stopColor="#2E3845" stopOpacity="0.85" />
              <stop offset="1" stopColor="#2E3845" stopOpacity="0" />
            </radialGradient>
            <linearGradient
              id="rfRoofShade"
              gradientUnits="userSpaceOnUse"
              x1={P(0.5, 0).x}
              y1={P(0.5, 0).y}
              x2={P(0.5, 1).x}
              y2={P(0.5, 1).y}
            >
              <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.16" />
              <stop offset="0.45" stopColor="#FFFFFF" stopOpacity="0" />
              <stop offset="1" stopColor="#000000" stopOpacity="0.22" />
            </linearGradient>
            <linearGradient
              id="rfMembrane"
              gradientUnits="userSpaceOnUse"
              x1={P(0.38, 0.55).x}
              y1={P(0.38, 0.55).y}
              x2={P(0.38, 1).x}
              y2={P(0.38, 1).y}
            >
              <stop offset="0" stopColor="#CB6420" />
              <stop offset="1" stopColor="#7E3C12" />
            </linearGradient>
            <linearGradient id="rfEaveShadow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#000000" stopOpacity="0.5" />
              <stop offset="1" stopColor="#000000" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="rfMetal" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#D7DCE2" />
              <stop offset="1" stopColor="#848D98" />
            </linearGradient>
            <pattern
              id="rfShingles"
              width="56"
              height="30"
              patternUnits="userSpaceOnUse"
              patternTransform={PLANE_TX}
            >
              <rect width="56" height="15" fill="#49515C" />
              <rect y="13" width="56" height="2.2" fill="#22272E" />
              <rect x="13.5" width="1.6" height="15" fill="#2B313A" />
              <rect x="27.5" width="1.6" height="15" fill="#2B313A" />
              <rect x="41.5" width="1.6" height="15" fill="#2B313A" />
              <rect y="15" width="56" height="15" fill="#434B56" />
              <rect y="28" width="56" height="2.2" fill="#22272E" />
              <rect x="6.5" y="15" width="1.6" height="15" fill="#2B313A" />
              <rect x="20.5" y="15" width="1.6" height="15" fill="#2B313A" />
              <rect x="34.5" y="15" width="1.6" height="15" fill="#2B313A" />
              <rect x="48.5" y="15" width="1.6" height="15" fill="#2B313A" />
            </pattern>
            <pattern
              id="rfUnderlay"
              width="26"
              height="26"
              patternUnits="userSpaceOnUse"
              patternTransform={PLANE_TX}
            >
              <rect width="26" height="26" fill="#C7CDD5" />
              <path
                d="M0 0H26M0 13H26M0 0V26M13 0V26"
                stroke="#A2ABB6"
                strokeWidth="0.8"
                fill="none"
              />
            </pattern>
            <pattern
              id="rfDeck"
              width="48"
              height="16"
              patternUnits="userSpaceOnUse"
              patternTransform={PLANE_TX}
            >
              <rect width="48" height="16" fill="#C09A5C" />
              <path
                d="M0 4 Q12 2 24 4 T48 4M0 11 Q14 13 28 11 T48 11"
                stroke="#A37F47"
                strokeWidth="1"
                fill="none"
              />
            </pattern>
            <pattern
              id="rfBrickFront"
              width="30"
              height="11"
              patternUnits="userSpaceOnUse"
              patternTransform={`matrix(${UH.x},${UH.y},0,1,${chD.x},${chD.y})`}
            >
              <rect width="30" height="11" fill="#6B3A26" />
              <rect x="0.6" y="0.6" width="13.8" height="4.4" fill="#9C523A" />
              <rect x="15.4" y="0.6" width="13.8" height="4.4" fill="#96503A" />
              <rect x="-7" y="5.8" width="13.8" height="4.4" fill="#98513A" />
              <rect x="7.8" y="5.8" width="13.8" height="4.4" fill="#9C523A" />
              <rect x="22.6" y="5.8" width="13.8" height="4.4" fill="#944E37" />
            </pattern>
            <pattern
              id="rfBrickSide"
              width="30"
              height="11"
              patternUnits="userSpaceOnUse"
              patternTransform={`matrix(${SH.x},${SH.y},0,1,${chA.x},${chA.y})`}
            >
              <rect width="30" height="11" fill="#462515" />
              <rect x="0.6" y="0.6" width="13.8" height="4.4" fill="#73402C" />
              <rect x="15.4" y="0.6" width="13.8" height="4.4" fill="#6E3D2A" />
              <rect x="-7" y="5.8" width="13.8" height="4.4" fill="#704029" />
              <rect x="7.8" y="5.8" width="13.8" height="4.4" fill="#73402C" />
              <rect x="22.6" y="5.8" width="13.8" height="4.4" fill="#6A3B28" />
            </pattern>
            <filter id="rfBlur" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="6" />
            </filter>
            <clipPath id="rfClipGable">
              <polygon
                points={`${EO.x},${EO.y} ${RF.x},${RF.y} ${pt(0, 1)} ${EF.x},${EF.y + WALL} ${EO.x},${EO.y + WALL}`}
              />
            </clipPath>
            <clipPath id="rfClipFront">
              <polygon
                points={`${pt(0, 1)} ${pt(1, 1)} ${EB.x},${EB.y + WALL} ${EF.x},${EF.y + WALL}`}
              />
            </clipPath>
          </defs>

          {/* backdrop glow + ground shadow */}
          <rect x="0" y="0" width="760" height="560" fill="url(#rfGlow)" />
          <ellipse
            cx="400"
            cy={EB.y + WALL + 18}
            rx="330"
            ry="24"
            fill="#000000"
            opacity="0.5"
            filter="url(#rfBlur)"
          />

          {/* house body: gable end (lit) and front wall (shaded) */}
          <polygon
            points={`${EO.x},${EO.y} ${RF.x},${RF.y} ${pt(0, 1)} ${EF.x},${EF.y + WALL} ${EO.x},${EO.y + WALL}`}
            fill="#9A9286"
            stroke="#4A453E"
            strokeWidth="1"
          />
          <g clipPath="url(#rfClipGable)" stroke="#00000022" strokeWidth="1.2">
            {[196, 209, 222, 235, 248, 261, 274, 287, 300, 313, 326].map(
              (k) => (
                <path key={k} d={`M20 ${k} l300 67`} fill="none" />
              ),
            )}
          </g>
          <polygon
            points={`${pt(0, 1)} ${pt(1, 1)} ${EB.x},${EB.y + WALL} ${EF.x},${EF.y + WALL}`}
            fill="#7E766B"
            stroke="#4A453E"
            strokeWidth="1"
          />
          <g clipPath="url(#rfClipFront)" stroke="#00000026" strokeWidth="1.2">
            {[14, 27, 40, 53, 66, 79].map((k) => (
              <path
                key={k}
                d={`M${EF.x} ${EF.y + k} L${EB.x} ${EB.y + k}`}
                fill="none"
              />
            ))}
          </g>

          {/* gable window */}
          <g>
            <polygon
              points="138,283 184,293 184,329 138,319"
              fill="#27353F"
              stroke="#D9D3C8"
              strokeWidth="3"
            />
            <path d="M161 288 V324 M138 301 L184 311" stroke="#D9D3C8" strokeWidth="1.6" />
            <path d="M142 288 L156 318" stroke="#FFFFFF" strokeWidth="3" opacity="0.14" />
          </g>

          {/* shadow cast by the eaves onto the front wall */}
          <polygon
            points={`${pt(0, 1)} ${pt(1, 1)} ${EB.x},${EB.y + 18} ${EF.x},${EF.y + 18}`}
            fill="url(#rfEaveShadow)"
          />

          {/* fascia board along the eave */}
          <polygon
            points={`${pt(0, 1)} ${pt(1, 1)} ${EB.x},${EB.y + 11} ${EF.x},${EF.y + 11}`}
            fill="#D9D3C8"
            stroke="#8E887D"
            strokeWidth="0.8"
          />

          {/* 01 decking: bare wood on the first peel zone */}
          <g data-layer="1">
            <polygon points={quad(0, 0, 0.38, 1)} fill="url(#rfDeck)" />
            <g stroke="#8F6F3E" strokeWidth="1.5" fill="none">
              <path d={slopeLine(0.12, 0, 1)} />
              <path d={slopeLine(0.24, 0, 0.55)} />
              <path d={ridgeLine(0.5, 0, 0.24)} />
            </g>
            <Leader x1={170} y1={73} a={0.09} b={0.18} />
            <Marker x={170} y={60} num="01" />
            <SideLabel x={192} y={64} text="Decking" />
          </g>

          {/* 02 ice & water shield: membrane band along the eave */}
          <g data-layer="2">
            <polygon points={quad(0.18, 0.55, 0.58, 1)} fill="url(#rfMembrane)" />
            <path
              d={ridgeLine(0.55, 0.18, 0.58)}
              stroke="#FF8B45"
              strokeWidth="2.5"
              fill="none"
            />
            {/* peeled edge */}
            <path
              d={slopeLine(0.18, 0.55, 1)}
              stroke="#E8E2D4"
              strokeWidth="2.5"
              fill="none"
            />
            <Leader x1={300} y1={95} a={0.3} b={0.62} />
            <Marker x={300} y={82} num="02" />
            <SideLabel x={322} y={86} text="Ice & water" />
          </g>

          {/* 03 synthetic underlayment with printed grid */}
          <g data-layer="3">
            <polygon points={quad(0.38, 0, 0.58, 0.88)} fill="url(#rfUnderlay)" />
            <path
              d={ridgeLine(0.88, 0.38, 0.58)}
              stroke="#8B939E"
              strokeWidth="1.5"
              fill="none"
            />
            {/* peeled edge */}
            <path
              d={slopeLine(0.38, 0, 0.88)}
              stroke="#E8E2D4"
              strokeWidth="2.5"
              fill="none"
            />
            <Leader x1={435} y1={121} a={0.48} b={0.25} />
            <Marker x={435} y={108} num="03" />
            <SideLabel x={457} y={112} text="Underlayment" />
          </g>

          {/* 04 shingles: finished field + ridge cap */}
          <g data-layer="4">
            <polygon points={quad(0.58, 0, 1, 1)} fill="url(#rfShingles)" />
            {/* peeled edge */}
            <path
              d={slopeLine(0.58, 0, 1)}
              stroke="#E8E2D4"
              strokeWidth="2.5"
              fill="none"
            />
            {/* ridge cap over the finished section */}
            <polygon
              points={quad(0.55, 0, 1, 0.075)}
              fill="#333A44"
              stroke="#20252C"
              strokeWidth="1"
            />
            <g stroke="#20252C" strokeWidth="1.5" fill="none">
              <path d={slopeLine(0.62, 0, 0.075)} />
              <path d={slopeLine(0.69, 0, 0.075)} />
              <path d={slopeLine(0.76, 0, 0.075)} />
              <path d={slopeLine(0.83, 0, 0.075)} />
              <path d={slopeLine(0.9, 0, 0.075)} />
              <path d={slopeLine(0.97, 0, 0.075)} />
            </g>
            <path
              d={ridgeLine(0, 0.55, 1)}
              stroke="#5A636F"
              strokeWidth="2"
              fill="none"
            />
            <Leader x1={712} y1={332} a={0.97} b={0.6} />
            <Marker x={725} y={330} num="04" />
            <SideLabel x={725} y={302} text="Shingles" anchor="end" />
          </g>

          {/* sunlight wash across the whole roof plane */}
          <polygon
            points={quad(0, 0, 1, 1)}
            fill="url(#rfRoofShade)"
            pointerEvents="none"
          />

          {/* roof outline + metal drip edge at the eave */}
          <polygon
            points={quad(0, 0, 1, 1)}
            fill="none"
            stroke="#1F252D"
            strokeWidth="1.2"
          />
          <path
            d={ridgeLine(1, 0, 1)}
            stroke="url(#rfMetal)"
            strokeWidth="4"
            fill="none"
          />

          {/* 05 brick chimney with flashing */}
          <g data-layer="5">
            {/* soft shadow downslope of the chimney */}
            <polygon
              points={poly([
                chD,
                chC,
                { x: chC.x + S.x * 0.13, y: chC.y + S.y * 0.13 },
                { x: chD.x + S.x * 0.13, y: chD.y + S.y * 0.13 },
              ])}
              fill="#000000"
              opacity="0.3"
              filter="url(#rfBlur)"
            />
            <polygon
              points={poly([chA, chD, chD2, chA2])}
              fill="url(#rfBrickSide)"
              stroke="#2E1A10"
              strokeWidth="1"
            />
            <polygon
              points={poly([chD, chC, chC2, chD2])}
              fill="url(#rfBrickFront)"
              stroke="#2E1A10"
              strokeWidth="1"
            />
            {/* concrete cap */}
            <polygon
              points={poly([
                up({ x: chA2.x - 4, y: chA2.y }, 1),
                up({ x: chB2.x + 4, y: chB2.y }, 1),
                up({ x: chC2.x + 4, y: chC2.y }, 1),
                up({ x: chD2.x - 4, y: chD2.y }, 1),
              ])}
              fill="#CFC9BD"
              stroke="#8E887D"
              strokeWidth="1"
            />
            <polygon
              points={poly([
                up({ x: chD2.x - 4, y: chD2.y }, 1),
                up({ x: chC2.x + 4, y: chC2.y }, 1),
                { x: chC2.x + 4, y: chC2.y + 6 },
                { x: chD2.x - 4, y: chD2.y + 6 },
              ])}
              fill="#A8A296"
              stroke="#8E887D"
              strokeWidth="0.8"
            />
            {/* metal step flashing along the upslope base */}
            <polyline
              points={poly([chA, chD, chC])}
              stroke="url(#rfMetal)"
              strokeWidth="5"
              fill="none"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            <polyline
              points={poly([chA, chD, chC])}
              stroke="#FF6B2B"
              strokeWidth="1.8"
              fill="none"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            <Leader x1={563} y1={156} a={CH.a2} b={CH.b1} />
            <Marker x={572} y={150} num="05" />
            <SideLabel x={594} y={154} text="Flashing" />
          </g>

          {/* 06 ventilation: soffit intake, ridge exhaust */}
          <g data-layer="6">
            <path
              d="M382 480 Q368 420 363 345"
              stroke="#FF6B2B"
              strokeWidth="2.5"
              fill="none"
            />
            <polygon points="361,334 354,350 372,347" fill="#FF6B2B" />
            <Marker x={352} y={500} num="06" />
            <SideLabel x={374} y={504} text="Air in" />
            <path
              d="M542 238 Q560 218 572 198"
              stroke="#FF6B2B"
              strokeWidth="2.5"
              fill="none"
            />
            <polygon points="576,190 562,196 574,206" fill="#FF6B2B" />
            <SideLabel x={590} y={200} text="Air out" />
          </g>
        </svg>
        <figcaption
          style={{
            fontFamily: "var(--font-mono)",
            textTransform: "uppercase",
            letterSpacing: "0.14em",
            fontSize: "0.68rem",
            color: "var(--mist)",
            paddingTop: "0.9rem",
            textAlign: "center",
          }}
        >
          Fig. A / The Ridgeline roof system, peeled back layer by layer
        </figcaption>
      </figure>

      <ol className="anatomy-legend">
        {layers.map((layer) => (
          <li key={layer.num}>
            <span className="anatomy-num">/{layer.num}</span>
            <div>
              <h3>{layer.title}</h3>
              <p>{layer.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
