'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type SectionHeadProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  /** Extra content on the right side, e.g. a "View all" link */
  aside?: React.ReactNode;
  /** Set true on dark-background sections (dining, events, location) */
  onDark?: boolean;
  className?: string;
};

export default function SectionHead({
  eyebrow,
  title,
  description,
  aside,
  onDark = false,
  className = '',
}: SectionHeadProps) {
  const headRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;
      const path = headRef.current?.querySelector('.arc-path');
      if (!path) return;

      if (prefersReducedMotion) {
        gsap.set(path, { strokeDashoffset: 0 });
        return;
      }

      ScrollTrigger.create({
        trigger: headRef.current,
        start: 'top 85%',
        once: true,
        onEnter: () => gsap.to(path, { strokeDashoffset: 0, duration: 1.1, ease: 'power2.out' }),
      });
    },
    { scope: headRef }
  );

  return (
    <div
      ref={headRef}
      className={`flex flex-wrap items-end justify-between gap-10 mb-14 ${className}`}
    >
      <div>
        <svg
          width="46"
          height="14"
          viewBox="0 0 46 14"
          className="mb-3.5 block"
          aria-hidden="true"
        >
          <path
            className="arc-path"
            d="M1 13C10 2 36 2 45 13"
            fill="none"
            stroke={onDark ? '#d3ac78' : '#b4894f'}
            strokeWidth="1.4"
          />
        </svg>
        <span
          className="text-xs font-semibold uppercase"
          style={{ letterSpacing: '0.22em', color: '#b4894f' }}
        >
          {eyebrow}
        </span>
        <h2
          className={`mt-2 font-serif text-[clamp(30px,4vw,46px)] ${
            onDark ? 'text-stone-50' : 'text-ink-900'
          }`}
        >
          {title}
        </h2>
        {description && (
          <p className={`mt-3 max-w-[38ch] text-[15px] leading-relaxed ${onDark ? 'text-stone-50/70' : 'text-ink-600'}`}>
            {description}
          </p>
        )}
      </div>
      {aside && <div>{aside}</div>}
    </div>
  );
}
