const layers = [
  {
    num: "01",
    title: "Decking",
    body: "The wood structure everything is fastened to. Inspected sheet by sheet at tear-off; soft or rotten sheets replaced at a pre-agreed price.",
  },
  {
    num: "02",
    title: "Ice & Water Shield",
    body: "Self-sealing membrane at eaves, valleys, and penetrations, where Indiana freeze-thaw pushes water backward under shingles.",
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

function Marker({ x, y, num }: { x: number; y: number; num: string }) {
  return (
    <g className="glow">
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

/*
 * Cross-section of a roof system, drawn in the site's blueprint style.
 * Layer highlighting is CSS-only (hover/:has in globals.css), and the full
 * explanation always lives in the visible legend, so nothing depends on
 * hover or JavaScript.
 */
export default function RoofAnatomy() {
  return (
    <div className="anatomy">
      <figure className="anatomy-figure" style={{ margin: 0 }}>
        <svg
          className="anatomy-svg"
          viewBox="0 0 760 520"
          role="img"
          aria-label="Cross-section diagram of a complete roof system showing decking, ice and water shield, underlayment, shingles, flashing, and ventilation"
        >
          {/* construction lines */}
          <g stroke="#2A3340" strokeWidth="1" strokeDasharray="6 6">
            <path d="M60 430H706" />
            <path d="M640 96V470" />
          </g>

          {/* opposite slope hint */}
          <path
            d="M640 150 712 192"
            stroke="#2F3845"
            strokeWidth="2"
            fill="none"
          />

          {/* 01 decking */}
          <g data-layer="1">
            <polygon
              points="120,430 640,150 640,166 120,446"
              fill="#241B10"
              stroke="#46505E"
              strokeWidth="1.5"
            />
            <path
              d="M210 446v18M330 382v18M450 318v18M570 252v18"
              stroke="#39424E"
              strokeWidth="3"
            />
            <Marker x={560} y={200} num="01" />
          </g>

          {/* 03 underlayment (under the membrane visually, full length) */}
          <g data-layer="3">
            <path
              d="M120 404 640 124"
              stroke="#5E6878"
              strokeWidth="3"
              strokeDasharray="14 7"
              fill="none"
            />
            <Marker x={470} y={216} num="03" />
          </g>

          {/* 02 ice & water shield (lower 45% of the slope, thicker) */}
          <g data-layer="2">
            <path
              d="M120 404 354 278"
              stroke="#8A4A22"
              strokeWidth="9"
              strokeLinecap="round"
              fill="none"
            />
            <Marker x={210} y={356} num="02" />
          </g>

          {/* 04 shingles & starter */}
          <g data-layer="4">
            <path
              d="M120 376 640 96"
              stroke="#76808E"
              strokeWidth="9"
              strokeDasharray="26 7"
              strokeLinecap="butt"
              fill="none"
            />
            <path
              d="M112 384l18 -10"
              stroke="#76808E"
              strokeWidth="9"
              strokeLinecap="butt"
            />
            <Marker x={330} y={263} num="04" />
          </g>

          {/* 05 chimney + step flashing */}
          <g data-layer="5">
            <path
              d="M446 140h56v84l-56 30z"
              fill="#161C24"
              stroke="#46505E"
              strokeWidth="2"
            />
            <path d="M438 132h72" stroke="#46505E" strokeWidth="4" />
            <path
              d="M432 264l14 -8v-12l14 -8v-12l14 -8"
              stroke="#FF6B2B"
              strokeWidth="3.5"
              fill="none"
            />
            <Marker x={420} y={152} num="05" />
          </g>

          {/* 06 ventilation: ridge cap + airflow */}
          <g data-layer="6">
            <path
              d="M612 162 640 146 668 162"
              stroke="#76808E"
              strokeWidth="8"
              strokeLinecap="round"
              fill="none"
            />
            {/* exhaust arrow */}
            <path d="M640 134V106" stroke="#FF6B2B" strokeWidth="2.5" />
            <polygon points="640,96 633,110 647,110" fill="#FF6B2B" />
            {/* intake arrow at the eave */}
            <path
              d="M84 474 Q104 452 122 438"
              stroke="#FF6B2B"
              strokeWidth="2.5"
              fill="none"
            />
            <polygon points="128,432 112,438 122,448" fill="#FF6B2B" />
            <Marker x={688} y={128} num="06" />
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
          Fig. A / Ridgeline roof system, cross-section
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
