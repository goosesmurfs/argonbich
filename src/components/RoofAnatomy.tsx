const layers = [
  {
    num: "01",
    title: "Decking",
    body: "The wood structure everything is fastened to. Inspected sheet by sheet at tear-off; soft or rotten sheets replaced at a pre-agreed price.",
  },
  {
    num: "02",
    title: "Ice & Water Shield",
    body: "Self-sealing membrane along the roof edges and valleys, where Indiana freeze-thaw pushes water backward under shingles.",
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

/* Isometric sheet geometry: parallelogram with corners
   L(100,cy)  T(300,cy-62)  R(500,cy)  B(300,cy+62), plus a 12px thickness. */
const HW = 200; // half width
const HD = 62; // half depth
const TH = 12; // sheet thickness

function sheetPoints(cy: number) {
  return {
    top: `100,${cy} 300,${cy - HD} 500,${cy} 300,${cy + HD}`,
    leftFace: `100,${cy} 300,${cy + HD} 300,${cy + HD + TH} 100,${cy + TH}`,
    rightFace: `500,${cy} 300,${cy + HD} 300,${cy + HD + TH} 500,${cy + TH}`,
  };
}

/* a line across the sheet parallel to the left-top edge, at fraction t of
   the depth axis */
function rowLine(cy: number, t: number) {
  const x1 = 100 + HW * t;
  const y1 = cy + HD * t;
  return `M${x1} ${y1} l${HW} ${-HD}`;
}

/* a line parallel to the left-bottom edge, at fraction s of the width axis */
function tabLine(cy: number, s: number) {
  const x1 = 100 + HW * s;
  const y1 = cy - HD * s;
  return `M${x1} ${y1} l${HW} ${HD}`;
}

function Sheet({
  cy,
  fill,
  edge,
}: {
  cy: number;
  fill: string;
  edge: string;
}) {
  const p = sheetPoints(cy);
  return (
    <>
      <polygon points={p.leftFace} fill={edge} stroke="#39424E" strokeWidth="1" />
      <polygon points={p.rightFace} fill={edge} stroke="#39424E" strokeWidth="1" />
      <polygon points={p.top} fill={fill} stroke="#5E6878" strokeWidth="1.5" />
    </>
  );
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

/* sheet vertical positions, top of stack to bottom */
const SHINGLES_Y = 130;
const UNDERLAY_Y = 250;
const MEMBRANE_Y = 370;
const DECK_Y = 490;

/*
 * Exploded view of a roof system: the four sheet layers float in build
 * order with the flashing and ventilation called out on top. Layer
 * highlighting is CSS-only (hover/:has in globals.css), and the full
 * explanation always lives in the visible legend, so nothing depends on
 * hover or JavaScript.
 */
export default function RoofAnatomy() {
  return (
    <div className="anatomy">
      <figure className="anatomy-figure" style={{ margin: 0 }}>
        <svg
          className="anatomy-svg"
          viewBox="0 0 760 620"
          role="img"
          aria-label="Exploded diagram of a complete roof system: decking at the bottom, then ice and water shield, synthetic underlayment, and shingles, with flashing and ventilation called out on top"
        >
          {/* dashed guides showing the layers stack onto each other */}
          <g stroke="#2A3340" strokeWidth="1.5" strokeDasharray="5 7">
            <path d={`M100 ${SHINGLES_Y} V${DECK_Y}`} />
            <path d={`M500 ${SHINGLES_Y} V${DECK_Y}`} />
            <path d={`M300 ${SHINGLES_Y + HD} V${DECK_Y + HD}`} />
          </g>

          {/* 01 decking (bottom) */}
          <g data-layer="1">
            <Sheet cy={DECK_Y} fill="#241B10" edge="#1A130B" />
            <g stroke="#564326" strokeWidth="1.5" fill="none">
              <path d={rowLine(DECK_Y, 0.25)} />
              <path d={rowLine(DECK_Y, 0.5)} />
              <path d={rowLine(DECK_Y, 0.75)} />
            </g>
            <path
              d={`M500 ${DECK_Y} h47`}
              stroke="#39424E"
              strokeWidth="1"
            />
            <Marker x={560} y={DECK_Y} num="01" />
            <SideLabel x={582} y={DECK_Y + 4} text="Decking" />
          </g>

          {/* 02 ice & water shield */}
          <g data-layer="2">
            <Sheet cy={MEMBRANE_Y} fill="#2B1D12" edge="#1E150C" />
            {/* self-sealing band along the eave edge */}
            <path
              d={`M108 ${MEMBRANE_Y + 7} L296 ${MEMBRANE_Y + HD - 1}`}
              stroke="#FF6B2B"
              strokeWidth="7"
              strokeLinecap="round"
              opacity="0.85"
            />
            <path
              d={`M500 ${MEMBRANE_Y} h47`}
              stroke="#39424E"
              strokeWidth="1"
            />
            <Marker x={560} y={MEMBRANE_Y} num="02" />
            <SideLabel x={582} y={MEMBRANE_Y + 4} text="Ice & water" />
          </g>

          {/* 03 synthetic underlayment */}
          <g data-layer="3">
            <Sheet cy={UNDERLAY_Y} fill="#232A33" edge="#1A2028" />
            <g
              stroke="#46505E"
              strokeWidth="1.5"
              strokeDasharray="9 6"
              fill="none"
            >
              <path d={rowLine(UNDERLAY_Y, 0.33)} />
              <path d={rowLine(UNDERLAY_Y, 0.66)} />
            </g>
            <path
              d={`M500 ${UNDERLAY_Y} h47`}
              stroke="#39424E"
              strokeWidth="1"
            />
            <Marker x={560} y={UNDERLAY_Y} num="03" />
            <SideLabel x={582} y={UNDERLAY_Y + 4} text="Underlayment" />
          </g>

          {/* 04 shingles (top of stack) */}
          <g data-layer="4">
            <Sheet cy={SHINGLES_Y} fill="#2E3640" edge="#222932" />
            {/* shingle course grid */}
            <g stroke="#454F5C" strokeWidth="1.5" fill="none">
              <path d={rowLine(SHINGLES_Y, 0.25)} />
              <path d={rowLine(SHINGLES_Y, 0.5)} />
              <path d={rowLine(SHINGLES_Y, 0.75)} />
              <path d={tabLine(SHINGLES_Y, 0.33)} />
              <path d={tabLine(SHINGLES_Y, 0.66)} />
            </g>
            <path
              d={`M500 ${SHINGLES_Y} h47`}
              stroke="#39424E"
              strokeWidth="1"
            />
            <Marker x={560} y={SHINGLES_Y} num="04" />
            <SideLabel x={582} y={SHINGLES_Y + 4} text="Shingles" />
          </g>

          {/* 05 chimney with step flashing, seated on the shingle layer */}
          <g data-layer="5">
            <rect
              x="356"
              y="42"
              width="40"
              height="62"
              fill="#161C24"
              stroke="#5E6878"
              strokeWidth="1.5"
            />
            <path d="M350 42h52" stroke="#5E6878" strokeWidth="4" />
            {/* step flashing at the base */}
            <path
              d="M348 110 l12 -6 v-9 l12 -6 v-9 l12 -6"
              stroke="#FF6B2B"
              strokeWidth="3"
              fill="none"
            />
            <path d="M396 56 h26" stroke="#39424E" strokeWidth="1" />
            <Marker x={435} y={56} num="05" />
            <SideLabel x={457} y={60} text="Flashing" />
          </g>

          {/* 06 ventilation: intake at the eave, exhaust at the ridge */}
          <g data-layer="6">
            {/* exhaust arrow rising from the shingle layer's ridge corner */}
            <path
              d={`M186 ${SHINGLES_Y - 30} q10 -22 28 -34`}
              stroke="#FF6B2B"
              strokeWidth="2.5"
              fill="none"
            />
            <polygon points="222,58 204,62 212,74" fill="#FF6B2B" />
            {/* intake arrow sweeping under the decking layer */}
            <path
              d={`M70 ${DECK_Y + 92} q26 -8 44 -28`}
              stroke="#FF6B2B"
              strokeWidth="2.5"
              fill="none"
            />
            <polygon
              points={`120,${DECK_Y + 56} 104,${DECK_Y + 62} 114,${DECK_Y + 73}`}
              fill="#FF6B2B"
            />
            <SideLabel
              x={64}
              y={DECK_Y + 110}
              text="Air in"
            />
            <SideLabel x={232} y={48} text="Air out" />
            <Marker x={160} y={66} num="06" />
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
          Fig. A / The Ridgeline roof system, exploded view, bottom to top
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
