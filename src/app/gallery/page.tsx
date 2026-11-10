import { cafePhoto, conferencePhoto, exteriorPhoto, gymPhoto, lobbyPhoto, poolBarPhoto, poolPhoto, restaurantPhoto, spaPhoto, standardPhoto } from "@/lib/photos";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import RevealOnScroll from "@/components/RevealOnScroll";
import PlaceholderPhoto from "@/components/PlaceholderPhoto";
import MagneticButton from "@/components/MagneticButton";

const TITLE = "Gallery";
const DESCRIPTION =
  "A closer look at The Park Lodge Hotel and Apartments — exterior, lobby, rooms, Café on Park, conference venues, Pool Bar and guest experiences in Pretoria Central.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/gallery" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/gallery" },
  twitter: { title: TITLE, description: DESCRIPTION },
};

const GALLERY_ITEMS = [
  {
    name: "Hotel Exterior",
    big: true,
    src: exteriorPhoto,
  },
  {
    name: "Lobby",
    src: lobbyPhoto,
  },
  {
    name: "Rooms",
    src: standardPhoto,
  },
  {
    name: "Café on Park",
    src: cafePhoto,
  },
  {
    name: "Conference Venues",
    src: conferencePhoto,
  },
  {
    name: "Pool",
    src: poolPhoto,
  },
  {
    name: "Pool Bar",
    src: poolBarPhoto,
  },
  {
    name: "Spa",
    src: spaPhoto,
  },
  {
    name: "Gym",
    src: gymPhoto,
  },
  {
    name: "Guest Experiences",
    src: restaurantPhoto,
  },
];

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="A closer look"
        crumbLabel="Gallery"
        description="Explore the rooms, dining spaces, pool and conference venues at The Park Lodge."
      />

      <section className="bg-stone-50 py-24 md:py-[110px]">
        <div className="mx-auto max-w-wrap px-8">
          <RevealOnScroll className="grid grid-cols-2 gap-3.5 [grid-auto-flow:dense] [grid-auto-rows:140px] sm:grid-cols-3 md:grid-cols-4 md:[grid-auto-rows:170px]">
            {GALLERY_ITEMS.map((item) => (
              <div
                key={item.name}
                className={`reveal ${item.big ? "col-span-2 row-span-2" : ""}`}>
                <PlaceholderPhoto
                  src={item.src}
                  sizes={item.big
                    ? '(max-width: 639px) calc(100vw - 64px), (max-width: 767px) 66vw, (max-width: 1179px) 50vw, 550px'
                    : '(max-width: 639px) 50vw, (max-width: 767px) 33vw, (max-width: 1179px) 25vw, 270px'}
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
              Check availability for your dates, or ask our reservations team
              any questions before you book.
            </p>
          </div>
          <MagneticButton
            href="/contact"
            className="btn-shine reveal inline-flex items-center gap-2.5 whitespace-nowrap rounded-sm bg-brass-500 px-7 py-[15px] text-[13px] font-semibold uppercase tracking-[0.08em] text-pine-950">
            Check Availability
          </MagneticButton>
        </RevealOnScroll>
      </section>
    </>
  );
}
