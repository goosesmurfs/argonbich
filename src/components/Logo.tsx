export default function Logo({ size = 38 }: { size?: number }) {
  return (
    <svg
      className="brand-mark"
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <rect width="40" height="40" rx="6" fill="#FF4D00" />
      <path
        d="M6 26 16 14l6 7 5-6 7 8"
        stroke="#0B0E12"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M6 31h28" stroke="#0B0E12" strokeWidth="3.2" strokeLinecap="round" />
    </svg>
  );
}
