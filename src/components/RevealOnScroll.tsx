'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Wrap any block of content in <RevealOnScroll> and give each direct child
 * (or nested element) the class "reveal" — they'll fade + slide up as they
 * enter the viewport, staggered, exactly like the prototype's
 * ScrollTrigger.batch behaviour. Respects prefers-reduced-motion.
 */
export default function RevealOnScroll({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;
      if (prefersReducedMotion || !scope.current) return;

      const items = scope.current.querySelectorAll('.reveal');
      if (!items.length) return;

      ScrollTrigger.batch(items, {
        start: 'top 88%',
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            stagger: 0.1,
            overwrite: true,
          }),
      });
    },
    { scope }
  );

  return (
    <div ref={scope} className={className}>
      {children}
    </div>
  );
}
