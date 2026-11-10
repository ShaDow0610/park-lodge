import Image from "next/image";
import Link from "next/link";
import { heroPhoto } from "@/lib/photos";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex items-end overflow-hidden bg-pine-950 pb-36 pt-40 md:pb-40"
      style={{ minHeight: "max(600px, 90svh)" }}>
      <Image
        src={heroPhoto}
        alt="The Park Lodge pool and terrace in Pretoria"
        fill
        priority
        sizes="100vw"
        quality={75}
        className="-z-20 object-cover object-[58%_center] md:object-center"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,20,12,.55) 0%, transparent 30%, transparent 55%, rgba(10,20,12,.4) 100%), linear-gradient(90deg, rgba(10,20,12,.48) 0%, rgba(10,20,12,.12) 55%, transparent 100%)",
        }}
      />
      <div className="mx-auto w-full max-w-wrap px-8">
        <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-ivory/85">
          Pretoria Central · South Africa
        </p>
        <h1
          id="hero-title"
          className="mt-5 max-w-[12ch] font-serif text-[clamp(48px,6vw,80px)] font-normal leading-[1.06] tracking-[-0.025em] text-ivory"
          style={{ textShadow: "0 2px 24px rgba(0,0,0,.2)" }}>
          Your comfort,
          <br />
          <em className="font-normal">our priority.</em>
        </h1>
        <Link
          href="/contact"
          className="btn-shine mt-8 inline-flex items-center gap-5 rounded-sm bg-brass-500 px-6 py-4 text-xs font-semibold uppercase tracking-[0.08em] text-pine-950 transition-colors hover:bg-brass-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ivory">
          Check Availability
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
            <path d="M4 12h16m-6-6 6 6-6 6" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
