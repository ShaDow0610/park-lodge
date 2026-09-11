import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faBed,
  faUtensils,
  faPeopleGroup,
  faWater,
  faMartiniGlass,
  faDumbbell,
  faPlaneDeparture,
  faSquareParking,
  faWifi,
  faShirt,
  faClock,
  faLocationDot,
  faPhone,
  faBuilding,
  faHandshake,
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Hero from '@/components/Hero';
import BookingWidget from '@/components/BookingWidget';
import RevealOnScroll from '@/components/RevealOnScroll';
import SectionHead from '@/components/SectionHead';
import PlaceholderPhoto from '@/components/PlaceholderPhoto';
import CountUp from '@/components/CountUp';
import RoomsTrack from '@/components/RoomsTrack';
import MagneticButton from '@/components/MagneticButton';
import ArcSignature from '@/components/ArcSignature';

const MARKET_TAGS = [
  'Corporate Travellers',
  'Government Departments',
  'Conference Delegates',
  'Tour Groups',
  'Leisure Travellers',
  'Long-Stay Guests',
];

const WHY_STAY = [
  {
    icon: faLocationDot,
    title: 'Prime Central Location',
    desc: 'Set in the heart of Pretoria Central, close to government offices, business districts and local attractions.',
  },
  {
    icon: faBuilding,
    title: 'Modern Conference Facilities',
    desc: 'Venues equipped for delegation briefings through to full-day conferences, with catering coordinated for you.',
  },
  {
    icon: faClock,
    title: '24-Hour Reception',
    desc: 'A team on hand around the clock, from early check-in to late arrivals.',
  },
  {
    icon: faHandshake,
    title: 'Exceptional Hospitality',
    desc: 'Quality service and attentive care, for every guest — business or leisure, one night or one month.',
  },
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
  { icon: faUtensils, label: 'Café on Park' },
  { icon: faMartiniGlass, label: 'Pool Bar' },
  { icon: faPeopleGroup, label: 'Conference & Events' },
  { icon: faWater, label: 'Swimming Pool' },
  { icon: faDumbbell, label: 'Gym' },
  { icon: faPlaneDeparture, label: 'Airport Shuttle' },
  { icon: faSquareParking, label: 'Underground Parking' },
  { icon: faWifi, label: 'Complimentary Wi-Fi' },
  { icon: faShirt, label: 'Guest Laundry' },
  { icon: faClock, label: '24-Hour Reception' },
];

const GALLERY_PREVIEW = ['Hotel Exterior', 'Lobby', 'Rooms', 'Café on Park', 'Pool'];

export default function HomePage() {
  return (
    <>
      {/* 1. HOTEL NAME & MAIN PICTURE */}
      <Hero />

      {/* 2. BOOK NOW / CHECK AVAILABILITY */}
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

      {/* 3. SHORT INTRODUCTION */}
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
            <p className="text-[16.5px] font-normal leading-[1.8] text-ink-600">
              We cater for both business and leisure travellers by providing quality service, convenient facilities
              and excellent value — from government delegations and conference groups to long-stay guests and
              weekend visitors.
            </p>
          </div>
        </RevealOnScroll>
      </section>

      {/* 4. WHY STAY AT THE PARK LODGE */}
      <section className="bg-sand-200 py-24 md:py-[120px]">
        <div className="mx-auto max-w-wrap px-8">
          <SectionHead
            eyebrow="Why Stay With Us"
            title="Why stay at The Park Lodge"
            description="A considered base for business and leisure in Pretoria Central — here&rsquo;s what our guests can count on."
          />
          <RevealOnScroll className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_STAY.map((item) => (
              <div key={item.title} className="reveal flex flex-col gap-3.5 border-t-2 border-brass-500 bg-stone-50 p-8">
                <FontAwesomeIcon icon={item.icon} className="h-6 w-6 text-pine-800" />
                <div className="font-serif text-lg text-ink-900">{item.title}</div>
                <p className="text-[14px] font-normal leading-relaxed text-ink-600">{item.desc}</p>
              </div>
            ))}
          </RevealOnScroll>
          <RevealOnScroll className="mt-10 flex flex-wrap gap-2.5">
            {MARKET_TAGS.map((tag) => (
              <span
                key={tag}
                className="reveal rounded-arc border border-line px-3.5 py-2 text-[11.5px] uppercase tracking-[0.05em] text-ink-600"
              >
                {tag}
              </span>
            ))}
          </RevealOnScroll>
          <div className="mt-9 flex flex-wrap gap-x-11 gap-y-8 border-t border-line pt-7">
            <div className="flex min-w-[120px] flex-col gap-1">
              <CountUp to={3} className="font-serif text-3xl text-pine-800" />
              <span className="text-[11px] uppercase tracking-[0.08em] text-grey-400">Room Categories</span>
            </div>
            <div className="flex min-w-[120px] flex-col gap-1">
              <CountUp to={11} className="font-serif text-3xl text-pine-800" />
              <span className="text-[11px] uppercase tracking-[0.08em] text-grey-400">Facilities &amp; Services</span>
            </div>
            <div className="flex min-w-[120px] flex-col gap-1">
              <span className="font-serif text-3xl text-pine-800">24/7</span>
              <span className="text-[11px] uppercase tracking-[0.08em] text-grey-400">Reception</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ROOMS & ACCOMMODATION */}
      <section id="rooms" className="bg-stone-50 py-24 md:py-[120px]">
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
          <RevealOnScroll>
            <RoomsTrack>
              {ROOMS.map((room) => (
                <div key={room.name} className="reveal md:w-[min(38vw,420px)] md:shrink-0">
                  <PlaceholderPhoto label={room.name} tag="Sample image" aspect="aspect-[4/5]" className="rounded-sm" />
                  <div className="pt-[22px]">
                    <div className="mb-2 font-serif text-[21px]">{room.name}</div>
                    <div className="mb-3 flex flex-wrap gap-3.5 text-xs text-ink-600">
                      <span>Size TBC</span>
                      <span>Sleeps TBC</span>
                      <span>Bed config TBC</span>
                    </div>
                    <p className="text-sm font-normal leading-snug text-ink-600">{room.usp}</p>
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
            </RoomsTrack>
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

      {/* 6. CAFÉ ON PARK */}
      <section id="dining" className="bg-pine-950 py-24 text-ivory md:py-[120px]">
        <RevealOnScroll className="mx-auto grid max-w-wrap grid-cols-1 items-center gap-14 px-8 md:grid-cols-2 md:gap-[70px]">
          <div className="reveal">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-sage-300">On-Site Dining</div>
            <h2 className="mt-4 font-serif text-4xl text-ivory md:text-5xl">Café on Park</h2>
            <p className="mt-6 max-w-[48ch] text-base font-normal leading-[1.75] text-ivory/70">
              Breakfast, lunch and dinner in a relaxed setting — with room service for guests staying with us and
              dedicated catering for conferences and events.
            </p>
            <Link
              href="/dining"
              className="mt-9 inline-flex items-center gap-2.5 whitespace-nowrap rounded-sm border border-line-light px-7 py-[15px] text-[13px] font-semibold uppercase tracking-[0.08em] text-ivory transition-colors hover:border-brass-300 hover:text-brass-300"
            >
              View Dining
            </Link>
          </div>
          <div className="reveal">
            <PlaceholderPhoto label="Café on Park" tag="Sample image" aspect="aspect-square" />
          </div>
        </RevealOnScroll>
      </section>

      {/* 7. POOL BAR */}
      <section id="pool-bar" className="bg-sage-500 py-24 text-pine-950 md:py-[120px]">
        <RevealOnScroll className="mx-auto grid max-w-wrap grid-cols-1 items-center gap-14 px-8 md:grid-cols-2 md:gap-[70px]">
          <div className="reveal md:order-2">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-pine-950/70">Poolside</div>
            <h2 className="mt-4 font-serif text-4xl text-pine-950 md:text-5xl">Pool Bar</h2>
            <p className="mt-6 max-w-[48ch] text-base font-normal leading-[1.75] text-pine-950/75">
              Relax with a drink in hand at the Pool Bar — light refreshments and cocktails served poolside, in a
              laid-back setting that&rsquo;s perfect after a day of meetings or a weekend away.
            </p>
            <Link
              href="/dining"
              className="mt-9 inline-flex items-center gap-2.5 whitespace-nowrap rounded-sm border border-pine-950 px-7 py-[15px] text-[13px] font-semibold uppercase tracking-[0.08em] text-pine-950 transition-colors hover:border-brass-500 hover:text-brass-500"
            >
              View Dining &amp; Pool Bar
            </Link>
          </div>
          <div className="reveal md:order-1">
            <PlaceholderPhoto label="Pool Bar" tag="Sample image" aspect="aspect-square" variant="light" />
          </div>
        </RevealOnScroll>
      </section>

      {/* 8. CONFERENCES & EVENTS */}
      <section id="events" className="bg-pine-900 py-16 text-ivory md:py-[90px]">
        <RevealOnScroll className="mx-auto flex max-w-wrap flex-wrap items-center justify-between gap-10 px-8">
          <div className="reveal">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-sage-300">Conferences &amp; Events</div>
            <h2 className="mt-3 max-w-[16ch] font-serif text-[clamp(28px,3.6vw,42px)] text-ivory">
              Meetings, conferences &amp; events
            </h2>
            <p className="mt-3.5 max-w-[40ch] text-[15px] leading-relaxed text-ivory/70">
              Facilities suited to corporate travellers, government delegations and tour groups — capacities,
              layouts, equipment and catering available on request.
            </p>
          </div>
          <MagneticButton
            href="/events"
            className="btn-shine reveal inline-flex items-center gap-2.5 whitespace-nowrap rounded-sm bg-brass-500 px-7 py-[15px] text-[13px] font-semibold uppercase tracking-[0.08em] text-pine-950"
          >
            Request a Quote
          </MagneticButton>
        </RevealOnScroll>
      </section>

      {/* 9. FACILITIES / FREE AMENITIES */}
      <section className="bg-stone-50 py-24 md:py-[120px]">
        <div className="mx-auto max-w-wrap px-8">
          <SectionHead eyebrow="Facilities & Free Amenities" title="Everything you need, on site" />
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

      {/* 10. PACKAGES & PROMOTIONS */}
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
                <p className="flex-1 text-[14.5px] font-normal leading-relaxed text-ink-600">{offer.desc}</p>
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

      {/* 11. GALLERY */}
      <section id="gallery" className="bg-stone-50 py-24 md:py-[120px]">
        <div className="mx-auto max-w-wrap px-8">
          <SectionHead
            eyebrow="Gallery"
            title="A closer look"
            description="Full galleries for exterior, lobby, rooms, Café on Park, conference venues, Pool Bar and guest experiences will replace these placeholders once photography is delivered."
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

      {/* 12 + 13. LOCATION / NEARBY PLACES & CONTACT INFORMATION */}
      <section id="location" className="bg-pine-900 py-24 text-ivory md:py-[110px]">
        <RevealOnScroll className="mx-auto grid max-w-wrap grid-cols-1 gap-14 px-8 md:grid-cols-2 md:gap-[70px]">
          <div className="reveal">
            <ArcSignature color="#a9c088" />
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-sage-300">Find Us</div>
            <h2 className="mt-4 font-serif text-[clamp(28px,3.4vw,40px)] text-ivory">Location &amp; contact</h2>
            <p className="mt-5 max-w-[46ch] text-[15.5px] leading-relaxed text-ivory/70">
              Set in Pretoria Central, close to government offices, business districts and local attractions.
              Nearby places of interest will be added here once confirmed.
            </p>
            <div className="mt-8 flex flex-col gap-[18px]">
              <div className="flex items-start gap-4 border-t border-line-light pt-[18px]">
                <FontAwesomeIcon icon={faLocationDot} className="mt-0.5 h-[18px] w-[18px] shrink-0 text-brass-300" />
                <div>
                  <div className="mb-1 flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-grey-400">
                    Address
                    <span className="rounded-arc border border-brass-300 px-2 py-0.5 text-[10.5px] normal-case tracking-normal text-brass-300">
                      Confirm
                    </span>
                  </div>
                  <div className="text-[15.5px] text-ivory">
                    232 Jeff Masemola Street, Pretoria Central, 0002, South Africa
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4 border-t border-line-light pt-[18px]">
                <FontAwesomeIcon icon={faPhone} className="mt-0.5 h-[18px] w-[18px] shrink-0 text-brass-300" />
                <div>
                  <div className="mb-1 text-[11px] uppercase tracking-[0.14em] text-grey-400">Telephone</div>
                  <div className="text-[15.5px] text-ivory">
                    <a href="tel:0123200103" className="hover:text-brass-300">012 320 0103</a>
                    <span className="mx-2 text-ivory/40">/</span>
                    <a href="tel:0129404992" className="hover:text-brass-300">012 940 4992</a>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4 border-t border-line-light pt-[18px]">
                <FontAwesomeIcon icon={faWhatsapp} className="mt-0.5 h-[18px] w-[18px] shrink-0 text-brass-300" />
                <div>
                  <div className="mb-1 text-[11px] uppercase tracking-[0.14em] text-grey-400">WhatsApp</div>
                  <div className="text-[15.5px] text-ivory">
                    <a href="https://wa.me/27813959671" target="_blank" rel="noopener noreferrer" className="hover:text-brass-300">
                      081 395 9671
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4 border-t border-line-light pt-[18px]">
                <FontAwesomeIcon icon={faEnvelope} className="mt-0.5 h-[18px] w-[18px] shrink-0 text-brass-300" />
                <div>
                  <div className="mb-1 text-[11px] uppercase tracking-[0.14em] text-grey-400">Reservations</div>
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 break-words text-[15.5px] text-ivory">
                    <a href="mailto:reservations@theparklodge.co.za" className="hover:text-brass-300">
                      reservations@theparklodge.co.za
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <MagneticButton
              href="/contact"
              className="btn-shine mt-9 inline-flex items-center gap-2.5 whitespace-nowrap rounded-sm bg-brass-500 px-7 py-[15px] text-[13px] font-semibold uppercase tracking-[0.08em] text-pine-950"
            >
              Send An Enquiry
            </MagneticButton>
          </div>
          <div className="reveal">
            <div className="flex h-full min-h-[320px] items-center justify-center rounded-sm border border-line-light bg-pine-950">
              <div className="flex flex-col items-center gap-2.5 text-center text-ivory/50">
                <FontAwesomeIcon icon={faLocationDot} className="h-6 w-6 text-brass-300" />
                <span className="text-[13px]">Google Maps embed — pending confirmed address</span>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* 14. BOOK NOW */}
      <section className="bg-brass-500 py-16 text-pine-950 md:py-[80px]">
        <RevealOnScroll className="mx-auto flex max-w-wrap flex-wrap items-center justify-between gap-8 px-8">
          <h2 className="reveal max-w-[20ch] font-serif text-[clamp(26px,3.2vw,38px)] text-pine-950">
            Ready to book your stay at The Park Lodge?
          </h2>
          <MagneticButton
            href="/contact"
            className="reveal inline-flex items-center gap-2.5 whitespace-nowrap rounded-sm border border-pine-950 bg-pine-950 px-7 py-[15px] text-[13px] font-semibold uppercase tracking-[0.08em] text-ivory transition-colors hover:bg-pine-800"
          >
            Check Availability
          </MagneticButton>
        </RevealOnScroll>
      </section>

      {/* 15. FULL HOTEL NAME & DESCRIPTION */}
      <section className="bg-stone-50 py-20 md:py-24">
        <RevealOnScroll className="reveal mx-auto max-w-[62ch] px-8 text-center">
          <ArcSignature className="mx-auto mb-4" />
          <h2 className="font-serif text-[clamp(24px,3vw,34px)] text-ink-900">
            The Park Lodge Hotel and Apartments
          </h2>
          <p className="mt-5 text-[15.5px] font-normal leading-[1.8] text-ink-600">
            Located in Pretoria Central, Gauteng, South Africa, The Park Lodge Hotel and Apartments offers
            comfortable accommodation, self-catering apartments, modern conference facilities and exceptional
            hospitality. We welcome corporate travellers, government departments, conference delegates, tour
            groups, leisure travellers and long-stay guests alike, with quality service, convenient on-site
            facilities — including Café on Park, the Pool Bar and a fully equipped gym — and excellent value
            throughout every stay.
          </p>
        </RevealOnScroll>
      </section>
    </>
  );
}
