import Image from 'next/image';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type PlaceholderPhotoProps = {
  /** Small caption shown bottom-left, e.g. room name or facility name */
  label?: string;
  /** Small caption shown bottom-right, e.g. "Suite" or "Garden view" */
  tag?: string;
  /** "dark" (default, pine/sage gradient) or "light" (sand/stone gradient) */
  variant?: 'dark' | 'light';
  className?: string;
  aspect?: string;
  /** Real photo path (e.g. "/images/lobby.jpg"). When set, renders the actual
   * image instead of the brand-styled gradient block. */
  src?: string;
  /** Required alongside `src` — descriptive alt text for SEO/accessibility. */
  alt?: string;
  priority?: boolean;
};

/**
 * Brand-styled placeholder used everywhere a real photo hasn't been supplied
 * yet. Pass `src` (+ `alt`) once photography is available and it renders a
 * real, optimised <Image> instead — same label/tag overlay, same aspect
 * ratio, so swapping in real photos never touches surrounding layout.
 */
export default function PlaceholderPhoto({
  label,
  tag,
  variant = 'dark',
  className = '',
  aspect = 'aspect-[4/5]',
  src,
  alt,
  priority = false,
}: PlaceholderPhotoProps) {
  const isLight = variant === 'light';

  if (src) {
    return (
      <div className={`group relative overflow-hidden flex items-end text-ivory ${aspect} ${className}`}>
        <Image
          src={src}
          alt={alt || label || ''}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-[1200ms] ease-signature group-hover:scale-105"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(0deg, rgba(20,31,16,.7) 0%, rgba(20,31,16,.15) 45%, rgba(20,31,16,0) 70%)',
          }}
        />
        {(label || tag) && (
          <div className="relative z-[2] flex w-full items-end justify-between p-[22px]">
            {label && <span className="font-serif text-[17px]">{label}</span>}
            {tag && (
              <span className="flex items-center gap-1.5 text-[10.5px] uppercase tracking-[0.1em] text-ivory/75">
                {tag}
              </span>
            )}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={`group relative overflow-hidden flex items-end text-ivory ${aspect} ${className}`}
      style={{
        background: isLight
          ? 'linear-gradient(155deg, var(--sand-200) 0%, var(--stone-100) 60%, #a9c088 140%)'
          : 'linear-gradient(155deg, #2a3d22 0%, #3a532e 55%, #7c9b5e 130%)',
      }}
    >
      <span
        aria-hidden="true"
        className="absolute rounded-full transition-transform duration-[1200ms] ease-signature group-hover:scale-105"
        style={{
          width: '160%',
          height: '160%',
          top: '-70%',
          right: '-55%',
          border: `1px solid ${isLight ? 'rgba(28,27,23,.1)' : 'rgba(255,255,255,.16)'}`,
        }}
      />
      <span
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: isLight
            ? 'linear-gradient(0deg, rgba(20,31,16,.35) 0%, rgba(20,31,16,0) 50%)'
            : 'linear-gradient(0deg, rgba(20,31,16,.55) 0%, rgba(20,31,16,0) 45%)',
        }}
      />
      {(label || tag) && (
        <div className="relative z-[2] flex w-full items-end justify-between p-[22px]">
          {label && <span className="font-serif text-[17px]">{label}</span>}
          {tag && (
            <span className="flex items-center gap-1.5 text-[10.5px] uppercase tracking-[0.1em] text-ivory/75">
              <FontAwesomeIcon icon={faCamera} className="h-3 w-3" />
              {tag}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
