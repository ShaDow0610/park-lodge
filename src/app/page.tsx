import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faBed,
  faUtensils,
  faPeopleGroup,
  faWater,
  faDumbbell,
  faPlaneDeparture,
  faSquareParking,
  faWifi,
  faShirt,
  faClock,
} from '@fortawesome/free-solid-svg-icons';
import Hero from '@/components/Hero';
import BookingWidget from '@/components/BookingWidget';
import RevealOnScroll from '@/components/RevealOnScroll';
import SectionHead from '@/components/SectionHead';
import PlaceholderPhoto from '@/components/PlaceholderPhoto';

const MARKET_TAGS = [
  'Corporate Travellers',
  'Government Departments',
  'Conference Delegates',
  'Tour Groups',
  'Leisure Travellers',
  'Long-Stay Guests',
];

const ROOMS = [
  {
    name: 'Standard Room',
    usp: 'A comfortable, well-appointed room for the business or leisure stay.',
  },
  {
    name: 'Executive Suite',
    usp: 'Extra space and a work area, suited to longer business stays.',
  },
  {
    name: 'Self-Catering Apartment',
    usp: 'A kitchenette and living space, ideal for long-stay guests.',
  },
];

const OFFERS = [
  {
    tag: 'Corporate Rate',
    name: 'Business Stay',
    desc: 'Preferential nightly rates for government and corporate accounts, with flexible billing on request.',
  },
  {
    tag: '7+ Nights',
    name: 'Extended Stay',
    desc: 'Reduced rates and apartment-style comfort for long-stay guests and relocating teams.',
  },
  {
    tag: 'Fri – Sun',
    name: 'Weekend Getaway',
    desc: 'A relaxed weekend rate for leisure travellers, with breakfast at Café on Park included.',
  },
];

const FACILITIES = [
  { icon: faBed, label: 'Accommodation' },
  { icon: faUtensils, label: 'Restaurant' },
  { icon: faPeopleGroup, label: 'Conference & Events' },
  { icon: faWater, label: 'Swimming Pool' },
  { icon: faDumbbell, label: 'Gym' },
  { icon: faPlaneDeparture, label: 'Airport Shuttle' },
  { icon: faSquareParking, label: 'Underground Parking' },
  { icon: faWifi, label: 'Complimentary Wi-Fi' },
  { icon: faShirt, label: 'Guest Laundry' },
  { icon: faClock, label: '24-Hour Reception' },
];

const GALLERY_PREVIEW = ['Hotel Exterior', 'Lobby', 'Rooms', 'Restaurant', 'Pool'];

export default function HomePage() {
  return (
    <>
      <Hero />
      <BookingWidget />

      {/* PRESS / REVIEWS STRIP */}
      <div className="border-b border-line bg-stone-100 py-6">
        <RevealOnScroll className="mx-auto flex max-w-wrap flex-wrap items-center gap-10 px-8">
          <span className="reveal whitespace-nowrap text-[11px] uppercase tracking-[0.14em] text-grey-400">
            Guests find &amp; review us on
          </span>
          <span className="reveal font-serif text-base italic text-ink-600/80">Booking.com</span>
          <span className="reveal font-serif text-base italic text-ink-600/80">TripAdvisor</span>
          <span className="reveal font-serif text-base italic text-ink-600/80">Google Reviews</span>
          <span className="reveal font-serif text-base italic text-ink-600/80">Expedia</span>
        </RevealOnScroll>
      </div>

      {/* ABOUT */}
      <section id="about" className="bg-stone-50 py-24 md:py-[120px]">
        <RevealOnScroll className="mx-auto grid max-w-wrap grid-cols-1 items-center gap-14 px-8 md:grid-cols-[0.9fr_1.1fr] md:gap-[72px]">
          <div className="reveal">
            <PlaceholderPhoto
              label="Hotel Exterior"
              tag="Sample image"
              aspect="aspect-[4/5]"
              className="h-full"
            />
          </div>
          <div className="reveal">
            <div className="mb-[18px] text-xs font-semibold uppercase tracking-[0.22em] text-brass-500">
              Welcome to The Park Lodge
            </div>
            <p className="mb-5 font-serif text-[23px] font-normal leading-[1.5] text-ink-900">
              The Park Lodge Hotel and Apartments offers comfortable accommodation, modern conference facilities and
              exceptional hospitality in the heart of Pretoria.
            </p>
            <p className="mb-5 text-[16.5px] font-light leading-[1.8] text-ink-600">
              We cater for both business and leisure travellers by providing quality service, convenient facilities
              and excellent value — from government delegations and conference groups to long-stay guests and
              weekend visitors.
            </p>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {MARKET_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="rounded-arc border border-line px-3.5 py-2 text-[11.5px] uppercase tracking-[0.05em] text-ink-600"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-9 flex flex-wrap gap-x-11 gap-y-8 border-t border-line pt-7">
              <div className="flex min-w-[120px] flex-col gap-1">
                <span className="font-serif text-3xl text-pine-800">3</span>
                <span className="text-[11px] uppercase tracking-[0.08em] text-grey-400">Room Categories</span>
              </div>
              <div className="flex min-w-[120px] flex-col gap-1">
                <span className="font-serif text-3xl text-pine-800">10</span>
                <span className="text-[11px] uppercase tracking-[0.08em] text-grey-400">Facilities &amp; Services</span>
              </div>
              <div className="flex min-w-[120px] flex-col gap-1">
                <span className="font-serif text-3xl text-pine-800">24/7</span>
                <span className="text-[11px] uppercase tracking-[0.08em] text-grey-400">Reception</span>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* ROOMS PREVIEW */}
      <section id="rooms" className="bg-sand-200 py-24 md:py-[120px]">
        <div className="mx-auto max-w-wrap px-8">
          <SectionHead
            eyebrow="Accommodation"
            title="Rooms & suites"
            aside={
              <p className="max-w-[38ch] text-[15px] leading-relaxed text-ink-600">
                Every category will be listed with size, occupancy, bed configuration and amenities once final
                content is supplied.{' '}
                <span className="ml-2 inline-block rounded-arc border border-brass-500 px-2.5 py-0.5 text-[10.5px] uppercase tracking-[0.06em] text-brass-500">
                  Content pending
                </span>
              </p>
            }
          />
          <RevealOnScroll className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {ROOMS.map((room) => (
              <div key={room.name} className="reveal">
                <PlaceholderPhoto label={room.name} tag="Sample image" aspect="aspect-[4/5]" className="rounded-sm" />
                <div className="pt-[22px]">
                  <div className="mb-2 font-serif text-[21px]">{room.name}</div>
                  <div className="mb-3 flex flex-wrap gap-3.5 text-xs text-ink-600">
                    <span>Size TBC</span>
                    <span>Sleeps TBC</span>
                    <span>Bed config TBC</span>
                  </div>
                  <p className="text-sm font-light leading-snug text-ink-600">{room.usp}</p>
                  <Link
                    href="/contact"
                    className="group mt-3.5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.06em] text-pine-800"
                  >
                    Enquire
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="h-3 w-3 text-brass-500 transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </RevealOnScroll>
          <div className="mt-10 text-center">
            <Link
              href="/rooms"
              className="inline-flex items-center gap-2.5 rounded-sm border border-ink-900/20 px-7 py-[15px] text-[13px] font-semibold uppercase tracking-[0.08em] text-ink-900 transition-colors hover:border-brass-500 hover:text-brass-500"
            >
              View All Rooms &amp; Suites
            </Link>
          </div>
        </div>
      </section>

      {/* OFFERS */}
      <section id="offers" className="bg-stone-100 py-24 md:py-[120px]">
        <div className="mx-auto max-w-wrap px-8">
          <SectionHead
            eyebrow="Special Offers"
            title="Packages & promotions"
            description="Rates, inclusions and validity dates will be confirmed once pricing is supplied."
          />
          <RevealOnScroll className="grid grid-cols-1 gap-px bg-line sm:grid-cols-3">
            {OFFERS.map((offer) => (
              <div key={offer.name} className="reveal flex flex-col gap-3.5 border-t-2 border-brass-500 bg-stone-100 p-9">
                <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brass-500">
                  {offer.tag}
                </div>
                <div className="font-serif text-2xl">{offer.name}</div>
                <p className="flex-1 text-[14.5px] font-light leading-relaxed text-ink-600">{offer.desc}</p>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.06em] text-pine-800"
                >
                  Enquire
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="h-3 w-3 text-brass-500 transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            ))}
          </RevealOnScroll>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="bg-stone-50 py-24 md:py-[120px]">
        <div className="mx-auto max-w-wrap px-8">
          <SectionHead eyebrow="Facilities & Services" title="Everything you need, on site" />
          <RevealOnScroll className="grid grid-cols-2 border-l border-t border-line sm:grid-cols-3 md:grid-cols-5">
            {FACILITIES.map((fac) => (
              <div
                key={fac.label}
                className="reveal flex flex-col gap-4 border-b border-r border-line p-6 transition-colors hover:bg-stone-100"
              >
                <FontAwesomeIcon icon={fac.icon} className="h-6 w-6 text-pine-800" />
                <span className="text-[13px] font-medium text-ink-900">{fac.label}</span>
              </div>
            ))}
          </RevealOnScroll>
        </div>
      </section>

      {/* DINING TEASER */}
      <section id="dining" className="bg-pine-950 py-24 text-stone-50 md:py-[120px]">
        <RevealOnScroll className="mx-auto grid max-w-wrap grid-cols-1 items-center gap-14 px-8 md:grid-cols-2 md:gap-[70px]">
          <div className="reveal">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-sage-300">Restaurant &amp; Bar</div>
            <h2 className="mt-4 font-serif text-4xl text-stone-50 md:text-5xl">Café on Park</h2>
            <p className="mt-6 max-w-[48ch] text-base font-light leading-[1.75] text-stone-50/70">
              Breakfast, lunch, dinner and bar service in a relaxed setting — with room service for guests staying
              with us and dedicated catering for conferences and events.
            </p>
            <Link
              href="/dining"
              className="mt-9 inline-flex items-center gap-2.5 whitespace-nowrap rounded-sm border border-line-light px-7 py-[15px] text-[13px] font-semibold uppercase tracking-[0.08em] text-stone-50 transition-colors hover:border-brass-300 hover:text-brass-300"
            >
              View Dining
            </Link>
          </div>
          <div className="reveal">
            <PlaceholderPhoto label="Café on Park" tag="Sample image" aspect="aspect-square" />
          </div>
        </RevealOnScroll>
      </section>

      {/* EVENTS BANNER */}
      <section id="events" className="bg-sage-500 py-16 text-pine-950 md:py-[90px]">
        <RevealOnScroll className="mx-auto flex max-w-wrap flex-wrap items-center justify-between gap-10 px-8">
          <div className="reveal">
            <h2 className="max-w-[14ch] font-serif text-[clamp(28px,3.6vw,42px)] text-pine-950">
              Meetings, conferences &amp; events
            </h2>
            <p className="mt-3.5 max-w-[40ch] text-[15px] leading-relaxed text-pine-950/75">
              Facilities suited to corporate travellers, government delegations and tour groups — capacities,
              layouts, equipment and catering available on request.
            </p>
          </div>
          <Link
            href="/events"
            className="reveal inline-flex items-center gap-2.5 whitespace-nowrap rounded-sm border border-pine-950 px-7 py-[15px] text-[13px] font-semibold uppercase tracking-[0.08em] text-pine-950 transition-colors hover:border-brass-500 hover:text-brass-500"
          >
            Request a Quote
          </Link>
        </RevealOnScroll>
      </section>

      {/* GALLERY PREVIEW */}
      <section id="gallery" className="bg-stone-50 py-24 md:py-[120px]">
        <div className="mx-auto max-w-wrap px-8">
          <SectionHead
            eyebrow="Gallery"
            title="A closer look"
            description="Full galleries for exterior, lobby, rooms, restaurant, conference venues, pool and guest experiences will replace these placeholders once photography is delivered."
          />
          <RevealOnScroll className="grid grid-cols-2 gap-3.5 md:grid-cols-5">
            {GALLERY_PREVIEW.map((name) => (
              <div key={name} className="reveal">
                <PlaceholderPhoto label={name} aspect="aspect-[4/5]" className="rounded-sm" />
              </div>
            ))}
          </RevealOnScroll>
          <div className="mt-10 text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2.5 rounded-sm border border-ink-900/20 px-7 py-[15px] text-[13px] font-semibold uppercase tracking-[0.08em] text-ink-900 transition-colors hover:border-brass-500 hover:text-brass-500"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
