'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function StickyBookBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-[150] hidden items-center justify-between gap-4 border-t border-line-light bg-pine-950 px-5 py-3 text-stone-50 transition-transform duration-[400ms] ease-[cubic-bezier(.22,.68,0,1)] max-[680px]:flex ${
        show ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <span className="font-serif text-sm">
        The Park Lodge <strong className="ml-1 font-medium">Pretoria Central</strong>
      </span>
      <Link
        href="/contact"
        className="whitespace-nowrap rounded-sm bg-brass-500 px-[22px] py-[11px] text-[13px] font-semibold uppercase tracking-[0.08em] text-pine-950 transition-colors hover:bg-brass-300"
      >
        Book Now
      </Link>
    </div>
  );
}
