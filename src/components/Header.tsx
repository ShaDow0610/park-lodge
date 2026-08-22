'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const NAV_LINKS = [
  { href: '/rooms', label: 'Rooms & Suites' },
  { href: '/dining', label: 'Dining' },
  { href: '/events', label: 'Meetings & Events' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  function toggleTheme() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.dataset.theme = next ? 'dark' : 'light';
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] transition-all duration-[400ms] ease-[cubic-bezier(.22,.68,0,1)] ${
        scrolled
          ? 'bg-pine-950/[.92] py-3.5 shadow-[0_1px_0_var(--line-light)] backdrop-blur-md'
          : 'bg-transparent py-[26px]'
      }`}
    >
      <div className="mx-auto flex max-w-wrap items-center justify-between gap-6 px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-[38px] w-[38px] items-center justify-center rounded-lg bg-gradient-to-br from-pine-700 to-sage-500 font-serif text-sm text-stone-50">
            PL
          </span>
          <span className="font-serif text-[17px] leading-[1.15] text-stone-50">
            The Park Lodge
            <span className="mt-0.5 block font-sans text-[9.5px] uppercase tracking-[0.24em] text-sage-300">
              Hotel &amp; Apartments
            </span>
          </span>
        </Link>

        <nav
          id="navLinks"
          className={`fixed inset-x-0 top-full flex flex-col gap-6 bg-pine-950 p-8 transition-transform duration-300 md:static md:flex-row md:items-center md:gap-[34px] md:bg-transparent md:p-0 md:transition-none ${
            menuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
          }`}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[13px] tracking-[0.04em] text-stone-50 opacity-80 transition-opacity hover:opacity-100 ${
                pathname === link.href ? 'opacity-100' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-[18px]">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="flex h-8 w-8 items-center justify-center text-stone-50/80 transition-colors hover:text-brass-300"
          >
            <FontAwesomeIcon icon={isDark ? faSun : faMoon} className="h-4 w-4" />
          </button>
          <Link
            href="/contact"
            className="hidden items-center gap-2.5 whitespace-nowrap rounded-sm bg-brass-500 px-7 py-[15px] text-[13px] font-semibold uppercase tracking-[0.08em] text-pine-950 transition-colors hover:bg-brass-300 md:inline-flex"
          >
            Book Now
          </Link>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span
              className={`block h-[1.5px] w-5 bg-stone-50 transition-transform ${
                menuOpen ? 'translate-y-[6.5px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-stone-50 transition-opacity ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-stone-50 transition-transform ${
                menuOpen ? '-translate-y-[6.5px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </div>
    </header>
  );
}
