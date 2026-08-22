import Link from "next/link";
import ArcMotif from "./ArcMotif";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  crumbLabel: string;
};

/**
 * Compact "sub-hero" banner used at the top of every inner page (Rooms,
 * Dining, Events, Gallery, Contact) so they share a consistent identity
 * with the homepage hero without repeating its full-screen treatment.
 */
export default function PageHeader({
  eyebrow,
  title,
  description,
  crumbLabel,
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-pine-950 pb-16 pt-[150px] text-stone-50 md:pb-20 md:pt-[170px]">
      <ArcMotif
        className="-top-[260px] -right-[220px]"
        size={620}
        color="rgba(211,172,120,.3)"
      />
      <ArcMotif
        className="-bottom-[320px] -left-[260px]"
        size={560}
        color="rgba(169,192,136,.22)"
      />

      <div className="relative z-[2] mx-auto max-w-wrap px-8">
        <div className="mb-5 flex items-center gap-2 text-[11.5px] uppercase tracking-[0.08em] text-stone-50/50">
          <Link href="/" className="transition-colors hover:text-brass-300">
            Home
          </Link>
          <span>/</span>
          <span className="text-stone-50/80">{crumbLabel}</span>
        </div>
        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-brass-300">
          {eyebrow}
        </div>
        <h1 className="mt-4 max-w-[16ch] font-serif text-[clamp(34px,5vw,58px)] text-stone-50">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-[54ch] text-[15.5px] font-light leading-relaxed text-stone-50/70">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
