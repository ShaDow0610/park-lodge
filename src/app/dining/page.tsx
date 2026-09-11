import Link from 'next/link';
import type { Metadata } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faMugHot,
  faUtensils,
  faMoon,
  faMartiniGlass,
  faBellConcierge,
  faPeopleGroup,
} from '@fortawesome/free-solid-svg-icons';
import PageHeader from '@/components/PageHeader';
import RevealOnScroll from '@/components/RevealOnScroll';
import PlaceholderPhoto from '@/components/PlaceholderPhoto';
import MagneticButton from '@/components/MagneticButton';
import ArcSignature from '@/components/ArcSignature';

export const metadata: Metadata = {
  title: 'Café on Park & Pool Bar | The Park Lodge Hotel and Apartments',
  description:
    'Breakfast, lunch and dinner at Café on Park, with poolside drinks at the Pool Bar — plus room service and conference catering, Pretoria Central.',
};

const HOURS = [
  { name: 'Breakfast', icon: faMugHot },
  { name: 'Lunch', icon: faUtensils },
  { name: 'Dinner', icon: faMoon },
  { name: 'Pool Bar', icon: faMartiniGlass },
];

const SERVICES = [
  {
    icon: faBellConcierge,
    title: 'Room Service',
    desc: 'Available for guests staying with us, so a meal or a drink is never far from your room.',
  },
  {
    icon: faPeopleGroup,
    title: 'Conference Catering',
    desc: 'Dedicated catering for conferences and events, coordinated alongside your booking.',
  },
];

export default function DiningPage() {
  return (
    <>
      <PageHeader
        eyebrow="Café on Park & Pool Bar"
        title="Dining & drinks at The Park Lodge"
        crumbLabel="Dining"
        description="Breakfast, lunch and dinner at Café on Park, with poolside drinks at the Pool Bar — plus room service for guests staying with us and dedicated catering for conferences and events."
      />

      {/* INTRO + IMAGE */}
      <section className="bg-stone-50 py-24 md:py-[110px]">
        <RevealOnScroll className="mx-auto grid max-w-wrap grid-cols-1 items-center gap-14 px-8 md:grid-cols-2 md:gap-[70px]">
          <div className="reveal order-2 md:order-1">
            <PlaceholderPhoto label="Café on Park" tag="Sample image" aspect="aspect-[4/5]" className="rounded-sm" />
          </div>
          <div className="reveal order-1 md:order-2">
            <ArcSignature />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brass-500">
              On-Site Dining
            </span>
            <h2 className="mt-3 font-serif text-[clamp(28px,3.4vw,40px)] text-ink-900">
              A relaxed setting, for every meal
            </h2>
            <p className="mt-6 max-w-[46ch] text-[16px] font-normal leading-[1.75] text-ink-600">
              Café on Park serves guests and visitors alike, from an early breakfast before a day of meetings to a
              quiet dinner in the evening — with poolside drinks at the Pool Bar whenever the sun is out.
            </p>

            <div className="mt-9 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-line pt-8 sm:grid-cols-4">
              {HOURS.map((h) => (
                <div key={h.name} className="flex flex-col gap-2.5">
                  <FontAwesomeIcon icon={h.icon} className="h-5 w-5 text-brass-500" />
                  <div className="font-serif text-base text-ink-900">{h.name}</div>
                  <div className="text-[11.5px] uppercase tracking-[0.04em] text-ink-600/60">Hours TBC</div>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="group mt-9 inline-flex items-center gap-2.5 whitespace-nowrap rounded-sm border border-ink-900/20 px-7 py-[15px] text-[13px] font-semibold uppercase tracking-[0.08em] text-ink-900 transition-colors hover:border-brass-500 hover:text-brass-500"
            >
              View Sample Menu
              <FontAwesomeIcon icon={faArrowRight} className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </RevealOnScroll>
      </section>

      {/* SERVICES */}
      <section className="bg-sand-200 py-20 md:py-24">
        <div className="mx-auto max-w-wrap px-8">
          <RevealOnScroll className="reveal mb-12 flex flex-col items-center text-center">
            <ArcSignature />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brass-500">
              Beyond The Table
            </span>
            <h2 className="mt-3 font-serif text-[clamp(26px,3vw,36px)] text-ink-900">More than a restaurant</h2>
          </RevealOnScroll>
          <RevealOnScroll className="grid grid-cols-1 gap-7 sm:grid-cols-2">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="reveal flex flex-col gap-4 border-t-2 border-brass-500 bg-stone-50 p-9 transition-[transform,box-shadow] duration-500 ease-signature hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-24px_rgba(20,31,16,0.25)]"
              >
                <FontAwesomeIcon icon={s.icon} className="h-6 w-6 text-pine-800" />
                <div className="font-serif text-xl text-ink-900">{s.title}</div>
                <p className="text-[14.5px] font-normal leading-relaxed text-ink-600">{s.desc}</p>
              </div>
            ))}
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-pine-950 py-20 text-ivory md:py-[100px]">
        <RevealOnScroll className="mx-auto flex max-w-wrap flex-wrap items-center justify-between gap-8 px-8">
          <div className="reveal">
            <h2 className="max-w-[18ch] font-serif text-[clamp(26px,3.2vw,38px)]">
              Planning a stay, a meeting or an event?
            </h2>
            <p className="mt-3 max-w-[42ch] text-[15px] leading-relaxed text-ivory/70">
              Ask us about the sample menu, or request catering as part of a conference or event booking.
            </p>
          </div>
          <MagneticButton
            href="/contact"
            className="btn-shine reveal inline-flex items-center gap-2.5 whitespace-nowrap rounded-sm bg-brass-500 px-7 py-[15px] text-[13px] font-semibold uppercase tracking-[0.08em] text-pine-950"
          >
            Send An Enquiry
          </MagneticButton>
        </RevealOnScroll>
      </section>
    </>
  );
}
