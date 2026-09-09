type ArcSignatureProps = {
  className?: string;
  color?: string;
};

/** Small static arc mark used above eyebrow labels for brand consistency (see SectionHead for the scroll-drawn variant). */
export default function ArcSignature({ className = 'mb-3', color = '#b4894f' }: ArcSignatureProps) {
  return (
    <svg width="46" height="14" viewBox="0 0 46 14" className={`block ${className}`} aria-hidden="true">
      <path d="M1 13C10 2 36 2 45 13" fill="none" stroke={color} strokeWidth="1.4" />
    </svg>
  );
}
