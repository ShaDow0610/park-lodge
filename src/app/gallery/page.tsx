import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import RevealOnScroll from '@/components/RevealOnScroll';
import PlaceholderPhoto from '@/components/PlaceholderPhoto';
import MagneticButton from '@/components/MagneticButton';

export const metadata: Metadata = {
  title: 'Gallery — The Park Lodge Hotel and Apartments',
  description:
    'A closer look at The Park Lodge — exterior, lobby, rooms, Café on Park, conference venues, Pool Bar and guest experiences.',
};

const GALLERY_ITEMS = [
  { name: 'Hotel Exterior', big: true },
  { name: 'Lobby' },
  { name: 'Rooms' },
  { name: 'Café on Park' },
  { name: 'Conference Venues' },
  { name: 'Pool' },
  { name: 'Pool Bar' },
  { name: 'Spa' },
  { name: 'Gym' },
  { name: 'Guest Experiences' },
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
