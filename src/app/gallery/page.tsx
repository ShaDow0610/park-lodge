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
    src: "https://images.pixieset.com/395496621/5928bef1380deaeaa19e35aec303764c-xxlarge.jpg",
  },
  {
    name: "Lobby",
    src: "https://images.pixieset.com/395496621/01ebf43d1d6aa660351c7feedfafea8c-xxlarge.jpg",
  },
  {
    name: "Rooms",
    src: "https://images.pixieset.com/395496621/762e36562f62ce5c08e131bb6494b77e-xxlarge.jpg",
  },
  {
    name: "Café on Park",
    src: "https://images.pixieset.com/395496621/656f72de858361baae761693ddbbc4dc-xxlarge.jpg",
  },
  {
    name: "Conference Venues",
    src: "https://images.pixieset.com/395496621/b8d969a42efb9747afcea722d1542e9f-xxlarge.jpg",
  },
  {
    name: "Pool",
    src: "https://images.pixieset.com/395496621/551f38385306debb9f51bd5a499ac22f-xxlarge.jpg",
  },
  {
    name: "Pool Bar",
    src: "https://images.pixieset.com/395496621/be8004a31013aa10f9bfb4b9e2995bbd-xxlarge.jpg",
  },
  {
    name: "Spa",
    src: "https://images.pixieset.com/395496621/0b205f6b38f52c5a0484f31561674904-xxlarge.jpg",
  },
  {
    name: "Gym",
    src: "https://images.pixieset.com/395496621/79e2686413d6803307dba41ad8178679-xxlarge.jpg",
  },
  {
    name: "Guest Experiences",
    src: "https://images.pixieset.com/395496621/23ca816faa4bfeabf1230af773ac6179-medium.jpg",
  },
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
                className={`reveal ${item.big ? "col-span-2 row-span-2" : ""}`}>
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
