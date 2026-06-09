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
const CH = { a1: 0.68, a2: 0.76, b1: 0.28, b2: 0.4, h: 90 };
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
      stroke="#46505E"
      strokeWidth="1.2"
    />
  );
}

/*
 * A gable roof drawn in isometric view with the covering peeled back in
 * stages, left to right: bare decking, ice and water shield at the eave,
 * synthetic underlayment, then the finished shingle field with ridge cap,
 * chimney flashing, and attic airflow. Layer highlighting is CSS-only
 * (hover/:has in globals.css) and the full explanation always lives in
 * the visible legend, so nothing depends on hover or JavaScript.
 */
export default function RoofAnatomy() {
  return (
    <div className="anatomy">
      <figure className="anatomy-figure" style={{ margin: 0 }}>
        <svg
          className="anatomy-svg"
          viewBox="0 0 760 560"
          role="img"
          aria-label="Diagram of a house roof with the layers peeled back in stages: bare decking, ice and water shield at the eave, synthetic underlayment, and the finished shingle field, with chimney flashing and attic ventilation called out"
        >
          {/* house body */}
          <polygon
            points={`${EO.x},${EO.y} ${RF.x},${RF.y} ${pt(0, 1)} ${EF.x},${EF.y + WALL} ${EO.x},${EO.y + WALL}`}
            fill="#11151B"
            stroke="#2A3340"
            strokeWidth="1.5"
          />
          <polygon
            points={`${pt(0, 1)} ${pt(1, 1)} ${EB.x},${EB.y + WALL} ${EF.x},${EF.y + WALL}`}
            fill="#151A21"
            stroke="#2A3340"
            strokeWidth="1.5"
          />

          {/* 01 decking: bare wood on the first peel zone */}
          <g data-layer="1">
            <polygon points={quad(0, 0, 0.38, 1)} fill="#302615" />
            <g stroke="#564326" strokeWidth="1.5" fill="none">
              <path d={slopeLine(0.06, 0, 1)} />
              <path d={slopeLine(0.12, 0, 1)} />
              <path d={slopeLine(0.24, 0, 0.55)} />
              <path d={slopeLine(0.3, 0, 0.55)} />
            </g>
            <Leader x1={170} y1={73} a={0.09} b={0.18} />
            <Marker x={170} y={60} num="01" />
            <SideLabel x={192} y={64} text="Decking" />
          </g>

          {/* 02 ice & water shield: membrane band along the eave */}
          <g data-layer="2">
            <polygon points={quad(0.18, 0.55, 0.58, 1)} fill="#94521F" />
            <path
              d={ridgeLine(0.55, 0.18, 0.58)}
              stroke="#FF6B2B"
              strokeWidth="2.5"
              fill="none"
            />
            <path
              d={slopeLine(0.18, 0.55, 1)}
              stroke="#76808E"
              strokeWidth="2"
              fill="none"
            />
            <Leader x1={300} y1={95} a={0.3} b={0.62} />
            <Marker x={300} y={82} num="02" />
            <SideLabel x={322} y={86} text="Ice & water" />
          </g>

          {/* 03 synthetic underlayment */}
          <g data-layer="3">
            <polygon points={quad(0.38, 0, 0.58, 0.88)} fill="#3A4450" />
            <g
              stroke="#5E6878"
              strokeWidth="1.5"
              strokeDasharray="8 5"
              fill="none"
            >
              <path d={ridgeLine(0.3, 0.38, 0.58)} />
              <path d={ridgeLine(0.6, 0.38, 0.58)} />
            </g>
            <path
              d={slopeLine(0.38, 0, 0.88)}
              stroke="#76808E"
              strokeWidth="2"
              fill="none"
            />
            <path
              d={ridgeLine(0.88, 0.38, 0.58)}
              stroke="#76808E"
              strokeWidth="1.5"
              fill="none"
            />
            <Leader x1={435} y1={121} a={0.48} b={0.25} />
            <Marker x={435} y={108} num="03" />
            <SideLabel x={457} y={112} text="Underlayment" />
          </g>

          {/* 04 shingles: finished field + ridge cap */}
          <g data-layer="4">
            <polygon points={quad(0.58, 0, 1, 1)} fill="#2E3640" />
            <g stroke="#454F5C" strokeWidth="1.5" fill="none">
              <path d={ridgeLine(0.18, 0.58, 1)} />
              <path d={ridgeLine(0.36, 0.58, 1)} />
              <path d={ridgeLine(0.54, 0.58, 1)} />
              <path d={ridgeLine(0.72, 0.58, 1)} />
              <path d={ridgeLine(0.9, 0.58, 1)} />
            </g>
            <g stroke="#3A4450" strokeWidth="1" fill="none">
              <path d={slopeLine(0.68, 0, 1)} />
              <path d={slopeLine(0.78, 0, 1)} />
              <path d={slopeLine(0.88, 0, 1)} />
            </g>
            <path
              d={slopeLine(0.58, 0, 1)}
              stroke="#76808E"
              strokeWidth="2.5"
              fill="none"
            />
            {/* ridge cap over the finished section */}
            <polygon
              points={quad(0.55, 0, 1, 0.065)}
              fill="#444F5C"
              stroke="#5E6878"
              strokeWidth="1.5"
            />
            <g stroke="#2E3640" strokeWidth="1.5" fill="none">
              <path d={slopeLine(0.64, 0, 0.065)} />
              <path d={slopeLine(0.73, 0, 0.065)} />
              <path d={slopeLine(0.82, 0, 0.065)} />
              <path d={slopeLine(0.91, 0, 0.065)} />
            </g>
            <Leader x1={712} y1={332} a={0.97} b={0.6} />
            <Marker x={725} y={330} num="04" />
            <SideLabel x={725} y={302} text="Shingles" anchor="end" />
          </g>

          {/* roof plane outline + drip edge at the eave */}
          <polygon
            points={quad(0, 0, 1, 1)}
            fill="none"
            stroke="#5E6878"
            strokeWidth="1.5"
          />
          <path
            d={ridgeLine(1, 0, 1)}
            stroke="#5E6878"
            strokeWidth="3.5"
            fill="none"
          />

          {/* 05 chimney with step flashing */}
          <g data-layer="5">
            <polygon
              points={poly([chA, chD, chD2, chA2])}
              fill="#1A2028"
              stroke="#5E6878"
              strokeWidth="1.5"
            />
            <polygon
              points={poly([chD, chC, chC2, chD2])}
              fill="#12161C"
              stroke="#5E6878"
              strokeWidth="1.5"
            />
            <polygon
              points={poly([chA2, chB2, chC2, chD2])}
              fill="#222932"
              stroke="#5E6878"
              strokeWidth="1.5"
            />
            {/* flashing seam where the chimney meets the roof */}
            <polyline
              points={poly([chA, chD, chC])}
              stroke="#FF6B2B"
              strokeWidth="3.5"
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
            {/* intake rising into the soffit under the eave */}
            <path
              d="M382 480 Q368 420 363 345"
              stroke="#FF6B2B"
              strokeWidth="2.5"
              fill="none"
            />
            <polygon points="361,334 354,350 372,347" fill="#FF6B2B" />
            <Marker x={352} y={500} num="06" />
            <SideLabel x={374} y={504} text="Air in" />
            {/* exhaust leaving the ridge cap */}
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
