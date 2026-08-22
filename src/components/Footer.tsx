import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-pine-950 px-0 pb-[30px] pt-16 text-stone-50/60">
      <div className="mx-auto max-w-wrap px-8">
        <div className="flex flex-wrap items-start justify-between gap-10 border-b border-line-light pb-11">
          <div className="flex items-center gap-3">
            <span className="flex h-[38px] w-[38px] items-center justify-center rounded-lg bg-gradient-to-br from-pine-700 to-sage-500 font-serif text-sm text-stone-50">
              PL
            </span>
            <span className="font-serif text-[17px] leading-[1.15] text-stone-50">
              The Park Lodge
              <span className="mt-0.5 block font-sans text-[9.5px] uppercase tracking-[0.24em] text-sage-300">
                Hotel &amp; Apartments
              </span>
            </span>
          </div>

          <div className="flex flex-wrap gap-16">
            <div>
              <h4 className="mb-4 text-[11px] font-medium uppercase tracking-[0.14em] text-grey-400">
                Explore
              </h4>
              <div className="flex flex-col gap-2.5">
                <Link href="/rooms" className="text-[13.5px] text-stone-50/70 hover:text-brass-300">
                  Rooms &amp; Suites
                </Link>
                <Link href="/dining" className="text-[13.5px] text-stone-50/70 hover:text-brass-300">
                  Dining
                </Link>
                <Link href="/events" className="text-[13.5px] text-stone-50/70 hover:text-brass-300">
                  Meetings &amp; Events
                </Link>
                <Link href="/gallery" className="text-[13.5px] text-stone-50/70 hover:text-brass-300">
                  Gallery
                </Link>
              </div>
            </div>
            <div>
              <h4 className="mb-4 text-[11px] font-medium uppercase tracking-[0.14em] text-grey-400">
                Connect
              </h4>
              <div className="flex flex-col gap-2.5">
                <Link href="/contact" className="text-[13.5px] text-stone-50/70 hover:text-brass-300">
                  Contact
                </Link>
                <a href="#" className="flex items-center gap-2 text-[13.5px] text-stone-50/70 hover:text-brass-300">
                  <FontAwesomeIcon icon={faInstagram} className="h-4 w-4" /> Instagram
                </a>
                <a href="#" className="flex items-center gap-2 text-[13.5px] text-stone-50/70 hover:text-brass-300">
                  <FontAwesomeIcon icon={faFacebook} className="h-4 w-4" /> Facebook
                </a>
                <a href="#" className="flex items-center gap-2 text-[13.5px] text-stone-50/70 hover:text-brass-300">
                  <FontAwesomeIcon icon={faLinkedin} className="h-4 w-4" /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-[26px] text-xs text-stone-50/40">
          <span>© {new Date().getFullYear()} The Park Lodge Hotel and Apartments — Pretoria Central, South Africa</span>
        </div>
      </div>
    </footer>
  );
}
