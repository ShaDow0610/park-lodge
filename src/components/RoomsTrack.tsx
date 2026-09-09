'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Pins the section and scrubs the room cards horizontally as the guest
 * scrolls, on desktop only (matches the prototype's rooms-pin behaviour).
 * Falls back to a normal stacked column on mobile and when the guest
 * prefers reduced motion.
 */
export default function RoomsTrack({ children }: { children: React.ReactNode }) {
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;
      if (prefersReducedMotion) return;

      const mm = gsap.matchMedia();

      mm.add('(min-width: 768px)', () => {
        const track = trackRef.current;
        const pinWrap = pinRef.current;
        if (!track || !pinWrap) return;

        const getDistance = () => track.scrollWidth - pinWrap.offsetWidth;

        const tween = gsap.to(track, {
          x: () => -getDistance(),
          ease: 'none',
          scrollTrigger: {
            trigger: pinWrap,
            start: 'top top+=84',
            end: () => '+=' + getDistance(),
            scrub: 0.6,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        return () => {
          tween.scrollTrigger?.kill();
          tween.kill();
        };
      });

      return () => mm.revert();
    },
    { scope: pinRef }
  );

  return (
    <div ref={pinRef} className="md:overflow-hidden">
      <div
        ref={trackRef}
        className="flex flex-col gap-7 md:w-max md:flex-row"
      >
        {children}
      </div>
    </div>
  );
}
