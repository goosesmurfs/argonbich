type IconProps = { size?: number };

function base(size: number) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
}

export function CheckIcon({ size = 16 }: IconProps) {
  return (
    <svg {...base(size)}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function PhoneIcon({ size = 18 }: IconProps) {
  return (
    <svg {...base(size)}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function FlameIcon({ size = 26 }: IconProps) {
  return (
    <svg {...base(size)}>
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 17c1.38 0 2.5-1.12 2.5-2.5 0-1.13-.5-2.16-1.5-3-.55-.47-1-1-1.5-2-1.5 1.5-2 3.13-2 5z" />
      <path d="M12 2c1 3 2.5 4.5 4.5 6.5C18.5 10.5 20 12.5 20 15a8 8 0 1 1-16 0c0-2 .67-4 2-5.5.5 1.5 1.5 2.5 2.5 3C8.5 9.5 9.5 5.5 12 2z" />
    </svg>
  );
}

export function HomeIcon({ size = 26 }: IconProps) {
  return (
    <svg {...base(size)}>
      <path d="m3 11 9-8 9 8" />
      <path d="M5 9.5V21h14V9.5" />
      <path d="M9 21v-6h6v6" />
    </svg>
  );
}

export function LayersIcon({ size = 26 }: IconProps) {
  return (
    <svg {...base(size)}>
      <path d="m12 2 10 5-10 5L2 7Z" />
      <path d="m2 12 10 5 10-5" />
      <path d="m2 17 10 5 10-5" />
    </svg>
  );
}

export function VacuumIcon({ size = 26 }: IconProps) {
  return (
    <svg {...base(size)}>
      <circle cx="8" cy="16" r="5" />
      <circle cx="8" cy="16" r="1.5" />
      <path d="M13 16c2-1 3-7 5-11h3" />
      <path d="M17 21h4l-2-5" />
    </svg>
  );
}

export function CameraIcon({ size = 26 }: IconProps) {
  return (
    <svg {...base(size)}>
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}

export function TagIcon({ size = 26 }: IconProps) {
  return (
    <svg {...base(size)}>
      <path d="M12 2H2v10l9.29 9.29a1 1 0 0 0 1.42 0l8.58-8.58a1 1 0 0 0 0-1.42z" />
      <circle cx="7" cy="7" r="1.5" />
    </svg>
  );
}

export function CrewIcon({ size = 26 }: IconProps) {
  return (
    <svg {...base(size)}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
      <circle cx="10" cy="7" r="4" />
      <path d="M21 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export function MapPinIcon({ size = 18 }: IconProps) {
  return (
    <svg {...base(size)}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function MailIcon({ size = 18 }: IconProps) {
  return (
    <svg {...base(size)}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 7L2 7" />
    </svg>
  );
}

export function ClockIcon({ size = 18 }: IconProps) {
  return (
    <svg {...base(size)}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

export function StarIcon({ size = 18 }: IconProps) {
  return (
    <svg {...base(size)}>
      <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}
