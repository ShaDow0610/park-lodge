import type { Metadata } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faWifi,
  faClock,
  faSquareParking,
  faShirt,
  faDumbbell,
} from '@fortawesome/free-solid-svg-icons';
import PageHeader from '@/components/PageHeader';
import RevealOnScroll from '@/components/RevealOnScroll';
import PlaceholderPhoto from '@/components/PlaceholderPhoto';
import MagneticButton from '@/components/MagneticButton';
import ArcSignature from '@/components/ArcSignature';

export const metadata: Metadata = {
  title: 'Rooms & Suites — The Park Lodge Hotel and Apartments',
  description:
    'Standard Rooms, Executive Suites and Self-Catering Apartments at The Park Lodge, Pretoria Central.',
};

const ROOMS = [
  {
    name: 'Standard Room',
    usp: 'A comfortable, well-appointed room for the business or leisure stay.',
    fit: 'Best for short business trips and solo or couple stays.',
  },
  {
    name: 'Executive Suite',
    usp: 'Extra space and a work area, suited to longer business stays.',
    fit: 'Best for extended business travel and delegates who need room to work.',
  },
  {
    name: 'Self-Catering Apartment',
    usp: 'A kitchenette and living space, ideal for long-stay guests.',
    fit: 'Best for relocating teams, month-long stays and travelling families.',
  },
];

const INCLUDED = [
  { icon: faWifi, label: 'Complimentary Wi-Fi' },
  { icon: faClock, label: '24-Hour Reception' },
  { icon: faSquareParking, label: 'Underground Parking' },
  { icon: faShirt, label: 'Guest Laundry' },
  { icon: faDumbbell, label: 'Gym' },
];

export default function RoomsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Accommodation"
        title="Rooms & suites"
        crumbLabel="Rooms & Suites"
        description="Three categories of accommodation across The Park Lodge — from a well-appointed standard room to a self-catering apartment for longer stays. Size, occupancy, bed configuration and full amenity lists will be added once final content is supplied."
      />

      {/* ROOM CATEGORIES */}
      <section className="bg-stone-50 py-24 md:py-[110px]">
        <div className="mx-auto flex max-w-wrap flex-col gap-24 px-8 md:gap-28">
          {ROOMS.map((room, i) => (
            <RevealOnScroll
              key={room.name}
              className={`grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16 ${
                i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div className="reveal">
                <PlaceholderPhoto label={room.name} tag="Sample image" aspect="aspect-[4/3]" className="rounded-sm" />
              </div>
              <div className="reveal">
                <ArcSignature />
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brass-500">
                  Category 0{i + 1}
                </span>
                <h2 className="mt-3 font-serif text-[clamp(28px,3.4vw,40px)] text-ink-900">{room.name}</h2>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {['Size TBC', 'Sleeps TBC', 'Bed config TBC'].map((spec) => (
                    <span
                      key={spec}
                      className="rounded-arc border border-line px-3.5 py-1.5 text-[11.5px] uppercase tracking-[0.05em] text-ink-600"
                    >
                      {spec}
                    </span>
                  ))}
                  <span className="rounded-arc border border-brass-500 px-3.5 py-1.5 text-[11.5px] uppercase tracking-[0.05em] text-brass-500">
                    Content pending
                  </span>
                </div>
                <p className="mt-6 max-w-[46ch] text-[16px] font-normal leading-[1.75] text-ink-600">{room.usp}</p>
                <p className="mt-3 max-w-[46ch] text-sm italic text-ink-600/70">{room.fit}</p>
                <MagneticButton
                  href="/contact"
                  className="btn-shine group mt-8 inline-flex items-center gap-2.5 whitespace-nowrap rounded-sm bg-brass-500 px-7 py-[15px] text-[13px] font-semibold uppercase tracking-[0.08em] text-pine-950"
                >
                  Enquire About This Room
                  <FontAwesomeIcon icon={faArrowRight} className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </MagneticButton>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* INCLUDED WITH EVERY STAY */}
      <section className="bg-sand-200 py-20 md:py-24">
        <RevealOnScroll className="mx-auto max-w-wrap px-8">
          <div className="reveal mb-12 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brass-500">
              Included With Every Stay
            </span>
            <h2 className="mt-3 font-serif text-[clamp(26px,3vw,36px)] text-ink-900">
              Hotel-wide facilities, for every guest
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
            {INCLUDED.map((item) => (
              <div key={item.label} className="reveal flex flex-col items-center gap-3.5 text-center">
                <FontAwesomeIcon icon={item.icon} className="h-6 w-6 text-pine-800" />
                <span className="text-[13px] font-medium text-ink-900">{item.label}</span>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </section>

      {/* CTA */}
      <section className="bg-pine-950 py-20 text-ivory md:py-[100px]">
        <RevealOnScroll className="mx-auto flex max-w-wrap flex-wrap items-center justify-between gap-8 px-8">
          <div className="reveal">
            <h2 className="max-w-[18ch] font-serif text-[clamp(26px,3.2vw,38px)]">
              Ready to check availability?
            </h2>
            <p className="mt-3 max-w-[42ch] text-[15px] leading-relaxed text-ivory/70">
              Tell our reservations team your dates and preferred room category — they&rsquo;ll confirm rates and
              availability directly.
            </p>
          </div>
          <MagneticButton
            href="/contact"
            className="btn-shine reveal inline-flex items-center gap-2.5 whitespace-nowrap rounded-sm bg-brass-500 px-7 py-[15px] text-[13px] font-semibold uppercase tracking-[0.08em] text-pine-950"
          >
            Check Availability
          </MagneticButton>
        </RevealOnScroll>
      </section>
    </>
  );
}
