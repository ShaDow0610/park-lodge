'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type CountUpProps = {
  to: number;
  className?: string;
};

/** Animates 0 → `to` once the number scrolls into view (matches the prototype's count-up facts). */
export default function CountUp({ to, className = '' }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      if (prefersReducedMotion) {
        el.textContent = String(to);
        return;
      }

      const counter = { val: 0 };
      ScrollTrigger.create({
        trigger: el,
        start: 'top 90%',
        once: true,
        onEnter: () =>
          gsap.to(counter, {
            val: to,
            duration: 1.2,
            ease: 'power1.out',
            onUpdate: () => {
              el.textContent = String(Math.round(counter.val));
            },
          }),
      });
    },
    { scope: ref }
  );

  return (
    <span ref={ref} className={className}>
      0
    </span>
  );
}
