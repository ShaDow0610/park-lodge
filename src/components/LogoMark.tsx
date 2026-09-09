type LogoMarkProps = {
  className?: string;
};

/**
 * Vector reproduction of The Park Lodge brand mark — four quadrants (pine,
 * gray, pine, and a leaf in sage) crossed by the signature arc. This is
 * hand-vectorised from the supplied artwork; swap for the exact exported
 * SVG/PNG in public/images/logo.svg later if pixel-perfect fidelity to the
 * source file matters.
 */
export default function LogoMark({ className = '' }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 512 512"
      className={className}
      role="img"
      aria-label="The Park Lodge Hotel and Apartments"
    >
      <rect x="0" y="0" width="249" height="249" fill="#6d8f4c" />
      <rect x="0" y="263" width="249" height="249" fill="#98999c" />
      <rect x="263" y="263" width="249" height="249" fill="#6d8f4c" />
      <path
        d="M283 249 C283 150 330 40 500 12 C500 140 430 240 283 249 Z"
        fill="#8dc63f"
      />
      <path
        d="M81 256 A175 175 0 0 1 256 81"
        fill="none"
        stroke="#e2ddc2"
        strokeWidth="30"
      />
      <path
        d="M256 81 A175 175 0 0 1 431 256"
        fill="none"
        stroke="#eef0d9"
        strokeWidth="26"
        opacity="0.85"
      />
      <path
        d="M431 256 A175 175 0 0 1 256 431"
        fill="none"
        stroke="#e2ddc2"
        strokeWidth="30"
      />
      <path
        d="M256 431 A175 175 0 0 1 81 256"
        fill="none"
        stroke="#f4f5f0"
        strokeWidth="30"
      />
      <path
        d="M256 431 A175 175 0 0 1 81 256"
        fill="none"
        stroke="#c7c9cb"
        strokeWidth="3"
        transform="translate(6,-4)"
        opacity="0.6"
      />
    </svg>
  );
}
