import type { Metadata } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faBuildingColumns,
  faBriefcase,
  faPeopleGroup,
  faBusSimple,
  faUtensils,
  faWifi,
  faSquareParking,
  faChalkboardUser,
} from '@fortawesome/free-solid-svg-icons';
import PageHeader from '@/components/PageHeader';
import RevealOnScroll from '@/components/RevealOnScroll';
import PlaceholderPhoto from '@/components/PlaceholderPhoto';
import MagneticButton from '@/components/MagneticButton';
import ArcSignature from '@/components/ArcSignature';

export const metadata: Metadata = {
  title: 'Meetings & Events — The Park Lodge Hotel and Apartments',
  description:
    'Conference and event facilities in Pretoria Central, suited to corporate travellers, government delegations and tour groups.',
};

const SUITED_FOR = [
  { icon: faBriefcase, label: 'Corporate Travellers' },
  { icon: faBuildingColumns, label: 'Government Departments' },
  { icon: faChalkboardUser, label: 'Conference Delegates' },
  { icon: faBusSimple, label: 'Tour Groups' },
];

const AVAILABLE = [
  { icon: faUtensils, label: 'Conference Catering', desc: 'Dedicated catering coordinated with Café on Park.' },
  { icon: faSquareParking, label: 'Underground Parking', desc: 'On-site parking for delegates and organisers.' },
  { icon: faWifi, label: 'Complimentary Wi-Fi', desc: 'Connectivity throughout the venue.' },
  { icon: faPeopleGroup, label: 'Group Accommodation', desc: 'Rooms and apartments for attending delegates.' },
];

export default function EventsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Meetings & Events"
        title="Conferences, meetings & events"
        crumbLabel="Meetings & Events"
        description="Facilities suited to corporate travellers, government delegations and tour groups — capacities, layouts, equipment and catering available on request."
      />

      {/* INTRO + IMAGE */}
      <section className="bg-stone-50 py-24 md:py-[110px]">
        <RevealOnScroll className="mx-auto grid max-w-wrap grid-cols-1 items-center gap-14 px-8 md:grid-cols-2 md:gap-[70px]">
          <div className="reveal">
            <PlaceholderPhoto label="Conference Venues" tag="Sample image" aspect="aspect-[4/5]" className="rounded-sm" />
          </div>
          <div className="reveal">
            <ArcSignature />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brass-500">
              Venue &amp; Facilities
            </span>
            <h2 className="mt-3 font-serif text-[clamp(28px,3.4vw,40px)] text-ink-900">
              Space that adapts to your gathering
            </h2>
            <p className="mt-6 max-w-[46ch] text-[16px] font-normal leading-[1.75] text-ink-600">
              From a small delegation briefing to a full-day conference, The Park Lodge hosts government, corporate
              and group bookings in the heart of Pretoria Central.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {['Capacity TBC', 'Layouts TBC', 'Equipment TBC'].map((spec) => (
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
            <MagneticButton
              href="/contact"
              className="btn-shine group mt-9 inline-flex items-center gap-2.5 whitespace-nowrap rounded-sm bg-brass-500 px-7 py-[15px] text-[13px] font-semibold uppercase tracking-[0.08em] text-pine-950"
            >
              Request a Quote
              <FontAwesomeIcon icon={faArrowRight} className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </MagneticButton>
          </div>
        </RevealOnScroll>
      </section>

      {/* SUITED FOR */}
      <section className="bg-pine-950 py-20 text-ivory md:py-24">
        <div className="mx-auto max-w-wrap px-8">
          <RevealOnScroll className="reveal mb-12 flex flex-col items-center text-center">
            <ArcSignature />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-sage-300">Who We Host</span>
            <h2 className="mt-3 font-serif text-[clamp(26px,3vw,36px)] text-ivory">Suited for</h2>
          </RevealOnScroll>
          <RevealOnScroll className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {SUITED_FOR.map((item) => (
              <div
                key={item.label}
                className="reveal flex flex-col items-center gap-3.5 border border-line-light p-7 text-center transition-colors duration-300 hover:border-brass-300"
              >
                <FontAwesomeIcon icon={item.icon} className="h-6 w-6 text-brass-300" />
                <span className="text-[13px] font-medium text-ivory">{item.label}</span>
              </div>
            ))}
          </RevealOnScroll>
        </div>
      </section>

      {/* AVAILABLE ON REQUEST */}
      <section className="bg-sand-200 py-20 md:py-24">
        <div className="mx-auto max-w-wrap px-8">
          <RevealOnScroll className="reveal mb-12 flex flex-col items-center text-center">
            <ArcSignature />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brass-500">
              Available On Request
            </span>
            <h2 className="mt-3 font-serif text-[clamp(26px,3vw,36px)] text-ink-900">
              Everything around the room
            </h2>
          </RevealOnScroll>
          <RevealOnScroll className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {AVAILABLE.map((item) => (
              <div
                key={item.label}
                className="reveal flex flex-col gap-3.5 border-t-2 border-brass-500 bg-stone-50 p-8 transition-[transform,box-shadow] duration-500 ease-signature hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-24px_rgba(20,31,16,0.25)]"
              >
                <FontAwesomeIcon icon={item.icon} className="h-6 w-6 text-pine-800" />
                <div className="font-serif text-lg text-ink-900">{item.label}</div>
                <p className="text-[14px] font-normal leading-relaxed text-ink-600">{item.desc}</p>
              </div>
            ))}
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-stone-50 py-20 md:py-[100px]">
        <RevealOnScroll className="mx-auto flex max-w-wrap flex-wrap items-center justify-between gap-8 px-8">
          <div className="reveal">
            <h2 className="max-w-[18ch] font-serif text-[clamp(26px,3.2vw,38px)] text-ink-900">
              Tell us about your event
            </h2>
            <p className="mt-3 max-w-[42ch] text-[15px] leading-relaxed text-ink-600">
              Share your expected numbers, dates and layout preferences — our team will confirm capacity, equipment
              and catering.
            </p>
          </div>
          <MagneticButton
            href="/contact"
            className="btn-shine reveal inline-flex items-center gap-2.5 whitespace-nowrap rounded-sm bg-brass-500 px-7 py-[15px] text-[13px] font-semibold uppercase tracking-[0.08em] text-pine-950"
          >
            Request a Quote
          </MagneticButton>
        </RevealOnScroll>
      </section>
    </>
  );
}
