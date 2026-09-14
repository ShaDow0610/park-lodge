import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import RevealOnScroll from '@/components/RevealOnScroll';
import PlaceholderPhoto from '@/components/PlaceholderPhoto';
import MagneticButton from '@/components/MagneticButton';

const TITLE = 'Gallery';
const DESCRIPTION =
  'A closer look at The Park Lodge Hotel and Apartments — exterior, lobby, rooms, Café on Park, conference venues, Pool Bar and guest experiences in Pretoria Central.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/gallery' },
  openGraph: { title: TITLE, description: DESCRIPTION, url: '/gallery' },
  twitter: { title: TITLE, description: DESCRIPTION },
};

const GALLERY_ITEMS = [
  { name: 'Hotel Exterior', big: true, src: '/images/hotel-exterior.jpg' },
  { name: 'Lobby', src: '/images/lobby.jpg' },
  { name: 'Rooms', src: '/images/room-deluxe.jpg' },
  { name: 'Café on Park', src: '/images/cafe-on-park.jpg' },
  { name: 'Conference Venues', src: '/images/conference-venue.jpg' },
  { name: 'Pool', src: '/images/pool.jpg' },
  { name: 'Pool Bar', src: '/images/pool-bar.jpg' },
  { name: 'Spa', src: '/images/spa.jpg' },
  { name: 'Gym' },
  { name: 'Guest Experiences', src: '/images/guest-experience.jpg' },
];

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="A closer look"
        crumbLabel="Gallery"
        description="Full galleries for exterior, lobby, rooms, Café on Park, conference venues, Pool Bar and guest experiences will replace these placeholders once photography is delivered."
      />

      <section className="bg-stone-50 py-24 md:py-[110px]">
        <div className="mx-auto max-w-wrap px-8">
          <RevealOnScroll className="grid grid-cols-2 gap-3.5 [grid-auto-flow:dense] [grid-auto-rows:140px] sm:grid-cols-3 md:grid-cols-4 md:[grid-auto-rows:170px]">
            {GALLERY_ITEMS.map((item) => (
              <div
                key={item.name}
                className={`reveal ${item.big ? 'col-span-2 row-span-2' : ''}`}
              >
                <PlaceholderPhoto
                  src={item.src}
                  alt={item.src ? `${item.name}, The Park Lodge` : undefined}
                  label={item.name}
                  aspect=""
                  className="h-full rounded-sm"
                />
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
              Like what you see?
            </h2>
            <p className="mt-3 max-w-[42ch] text-[15px] leading-relaxed text-ivory/70">
              Check availability for your dates, or ask our reservations team any questions before you book.
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
