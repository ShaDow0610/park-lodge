"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faSquareParking,
  faPlaneDeparture,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import ArcMotif from "./ArcMotif";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { icon: faClock, label: "24-Hour Reception" },
  { icon: faSquareParking, label: "Underground Parking" },
  { icon: faPlaneDeparture, label: "Airport Shuttle" },
  { icon: faWifi, label: "Complimentary Wi-Fi" },
];

function wrapWords(text: string) {
  return text
    .split(" ")
    .map(
      (w, i) =>
        `<span class="inline-block overflow-hidden align-bottom"><span class="word-inner inline-block" data-i="${i}">${w}</span></span>`,
    )
    .join(" ");
}

export default function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      const tl = gsap.timeline({ delay: 0.1 });
      const heroAnims = gsap.utils.toArray<HTMLElement>(".hero-anim");

      if (prefersReducedMotion) {
        gsap.set(heroAnims, { opacity: 1, y: 0 });
      } else {
        heroAnims.forEach((el, i) => {
          tl.fromTo(
            el,
            { opacity: 0, y: 18 },
            { opacity: 1, y: 0, duration: 0.9, ease: "power2.out" },
            i * 0.15,
          );
        });

        const words = rootRef.current?.querySelectorAll(".word-inner");
        if (words?.length) {
          gsap.set(words, { yPercent: 120, opacity: 0 });
          gsap.to(words, {
            yPercent: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.06,
            delay: 0.25,
          });
        }

        gsap.to(".hero-bg-img", {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.utils.toArray<HTMLElement>(".hero-arc").forEach((arc, i) => {
          const dist = [60, 100, 30][i] ?? 50;
          gsap.to(arc, {
            y: dist,
            ease: "none",
            scrollTrigger: {
              trigger: rootRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
        });
      }
    },
    { scope: rootRef },
  );

  return (
    <section
      ref={rootRef}
      className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-[120px]">
      <div className="absolute inset-0 z-0">
        <div
          className="hero-bg-img absolute inset-0 h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/_MG_9987_8PM.jpg')",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(20,31,16,.55) 0%, rgba(20,31,16,.25) 35%, rgba(20,31,16,.55) 70%, rgba(20,31,16,.92) 100%), radial-gradient(120% 90% at 78% 8%, rgba(58,83,46,.35) 0%, rgba(30,44,24,.15) 45%, rgba(20,31,16,.35) 100%)",
          }}
        />
      </div>

      <ArcMotif
        className="hero-arc -top-[420px] -right-[320px]"
        size={900}
        color="rgba(211,172,120,.35)"
      />
      <ArcMotif
        className="hero-arc -top-[220px] -right-[140px]"
        size={620}
        color="rgba(169,192,136,.28)"
      />
      <ArcMotif
        className="hero-arc -bottom-[1100px] -left-[460px]"
        size={1400}
        color="rgba(255,255,255,.06)"
      />

      <div className="relative z-[2] mx-auto grid w-full max-w-wrap grid-cols-1 gap-14 px-8 md:grid-cols-[1.15fr_.85fr] md:items-end md:gap-[60px]">
        <div>
          <div
            className="hero-anim text-xs font-semibold uppercase tracking-[0.22em] text-brass-300"
            style={{ textShadow: "0 2px 18px rgba(0,0,0,.35)" }}>
            Pretoria Central · Gauteng · South Africa
          </div>
          <h1
            className="hero-anim mt-6 max-w-[12ch] font-serif text-[clamp(44px,6.6vw,86px)] text-stone-50"
            style={{ textShadow: "0 4px 30px rgba(0,0,0,.4)" }}
            dangerouslySetInnerHTML={{
              __html: `${wrapWords("Your comfort,")}<br/><em class="font-normal italic text-sage-300">${wrapWords("our priority.")}</em>`,
            }}
          />
          <p
            className="hero-anim mt-7 max-w-[46ch] text-[17px] font-light leading-[1.65] text-stone-50/70"
            style={{ textShadow: "0 2px 16px rgba(0,0,0,.3)" }}>
            A considered base for business and leisure in the heart of Pretoria
            — comfortable rooms, modern conference facilities and hospitality
            that pays attention to the details.
          </p>
          <div className="hero-anim mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-sm bg-brass-500 px-7 py-[15px] text-[13px] font-semibold uppercase tracking-[0.08em] text-pine-950 transition-colors hover:bg-brass-300">
              Check Availability
            </Link>
            <a
              href="#about"
              className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-sm border border-line-light px-7 py-[15px] text-[13px] font-semibold uppercase tracking-[0.08em] text-stone-50 transition-colors hover:border-brass-300 hover:text-brass-300">
              Explore The Lodge
            </a>
          </div>
        </div>

        <div className="hero-anim text-left md:text-right">
          <div className="ml-0 max-w-[280px] border-t border-line-light pt-[18px] font-serif text-[22px] italic text-stone-50 md:ml-auto">
            &ldquo;Comfortable accommodation, modern conference facilities,
            exceptional hospitality.&rdquo;
            <span className="mt-2.5 block font-sans text-[11px] not-italic uppercase tracking-[0.2em] text-grey-400">
              Brand positioning — The Park Lodge
            </span>
          </div>
        </div>
      </div>

      <div className="hero-anim relative z-[2] mx-auto mt-20 flex w-full max-w-wrap flex-wrap gap-x-11 gap-y-5 border-t border-line-light px-8 pt-5">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="flex items-center gap-2.5 text-[12.5px] tracking-[0.05em] text-stone-50/65">
            <FontAwesomeIcon
              icon={stat.icon}
              className="h-4 w-4 text-brass-300"
            />
            {stat.label}
          </div>
        ))}
      </div>
    </section>
  );
}
