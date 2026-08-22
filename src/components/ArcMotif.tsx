type ArcProps = {
  className?: string;
  size: number;
  color?: string;
  style?: React.CSSProperties;
};

/**
 * Signature decorative arc (drawn from the logo motif). Purely
 * presentational — absolutely positioned by the parent via className/style.
 */
export default function ArcMotif({ className = '', size, color = 'rgba(211,172,120,.35)', style }: ArcProps) {
  return (
    <span
      aria-hidden="true"
      className={`arc pointer-events-none absolute rounded-full border-[1.5px] opacity-50 ${className}`}
      style={{ width: size, height: size, borderColor: color, ...style }}
    />
  );
}
