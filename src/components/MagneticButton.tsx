'use client';

import { useRef, useEffect, type ComponentProps } from 'react';
import Link from 'next/link';
import gsap from 'gsap';

type MagneticButtonProps = ComponentProps<typeof Link>;

/** Wraps <Link> with a subtle cursor-attraction effect on fine-pointer devices (matches the prototype's magnetic CTAs). */
export default function MagneticButton({ children, ...props }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      !window.matchMedia('(pointer: fine)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const xTo = gsap.quickTo(el, 'x', { duration: 0.4, ease: 'power3' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.4, ease: 'power3' });

    function onMove(e: MouseEvent) {
      const r = el!.getBoundingClientRect();
      xTo((e.clientX - r.left - r.width / 2) * 0.25);
      yTo((e.clientY - r.top - r.height / 2) * 0.35);
    }
    function onLeave() {
      xTo(0);
      yTo(0);
    }

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <Link ref={ref} {...props}>
      {children}
    </Link>
  );
}
