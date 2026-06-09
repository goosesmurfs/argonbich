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
      <rect width="40" height="40" rx="11" fill="#B0762C" />
      <path
        d="M8 20.5 20 10l12 10.5"
        stroke="#FBF7EC"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 31c-3.4 0-5.6-2.2-5.6-5 0-2.1 1.1-3.6 2.4-4.9.5 1 1.2 1.7 2 2.2-.3-2.4.6-5 3.2-6.8.3 2.1 1.4 3.3 2.5 4.4 1.2 1.2 2.1 2.7 2.1 4.6 0 3-2.4 5.5-6.6 5.5z"
        fill="#FBF7EC"
      />
    </svg>
  );
}
