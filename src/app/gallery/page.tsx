import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import RevealOnScroll from '@/components/RevealOnScroll';
import PlaceholderPhoto from '@/components/PlaceholderPhoto';

export const metadata: Metadata = {
  title: 'Gallery — The Park Lodge Hotel and Apartments',
  description:
    'A closer look at The Park Lodge — exterior, lobby, rooms, restaurant, conference venues, pool and guest experiences.',
};

const GALLERY_ITEMS = [
  { name: 'Hotel Exterior', big: true },
  { name: 'Lobby' },
  { name: 'Rooms' },
  { name: 'Restaurant' },
  { name: 'Conference Venues' },
  { name: 'Pool' },
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
        description="Full galleries for exterior, lobby, rooms, restaurant, conference venues, pool and guest experiences will replace these placeholders once photography is delivered."
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
    </>
  );
}
