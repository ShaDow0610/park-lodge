'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import LogoMark from './LogoMark';

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

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [menuOpen]);

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
          <LogoMark className="h-[38px] w-[38px] shrink-0 rounded-lg" />
          <span className="font-serif text-[17px] leading-[1.15] text-ivory">
            The Park Lodge
            <span className="mt-1 block font-sans text-[10px] uppercase leading-[1.5] tracking-[0.2em] text-sage-300">
              Hotel &amp; Apartments
              <br />
              Conference Facilities
            </span>
          </span>
        </Link>

        <div
          aria-hidden="true"
          onClick={() => setMenuOpen(false)}
          className={`fixed inset-0 z-[105] bg-pine-950/50 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${
            menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
        />

        <nav
          id="navLinks"
          className={`fixed inset-y-0 right-0 z-[110] flex w-[78%] max-w-xs flex-col gap-6 bg-pine-950 px-8 pb-8 pt-28 transition-transform duration-[450ms] ease-signature lg:static lg:z-auto lg:w-auto lg:max-w-none lg:flex-row lg:items-center lg:gap-8 lg:bg-transparent lg:p-0 lg:transition-none ${
            menuOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
          }`}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-[13px] tracking-[0.04em] text-ivory opacity-80 transition-opacity after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-brass-300 after:transition-[width] after:duration-300 after:ease-signature hover:opacity-100 hover:after:w-full ${
                pathname === link.href ? 'opacity-100 after:w-full' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="relative z-[120] flex items-center gap-[18px]">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="flex h-8 w-8 items-center justify-center text-ivory/80 transition-colors hover:text-brass-300"
          >
            <FontAwesomeIcon icon={isDark ? faSun : faMoon} className="h-4 w-4" />
          </button>
          <Link
            href="/contact"
            className="btn-shine hidden items-center gap-2.5 whitespace-nowrap rounded-sm bg-brass-500 px-7 py-[15px] text-[13px] font-semibold uppercase tracking-[0.08em] text-pine-950 lg:inline-flex"
          >
            Book Now
          </Link>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span
              className={`block h-[1.5px] w-5 bg-ivory transition-transform ${
                menuOpen ? 'translate-y-[6.5px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-ivory transition-opacity ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-ivory transition-transform ${
                menuOpen ? '-translate-y-[6.5px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </div>
    </header>
  );
}
