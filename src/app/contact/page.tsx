import type { Metadata } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import PageHeader from '@/components/PageHeader';
import RevealOnScroll from '@/components/RevealOnScroll';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact — The Park Lodge Hotel and Apartments',
  description:
    'Find The Park Lodge in Pretoria Central, or send an enquiry for stays, conference bookings or events.',
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get In Touch"
        title="Find us in Pretoria Central"
        crumbLabel="Contact"
        description="For stays, conference bookings or events — tell us what you need and our reservations team will respond directly."
      />

      <section className="bg-pine-900 py-24 text-stone-50 md:py-[110px]">
        <RevealOnScroll className="mx-auto grid max-w-wrap grid-cols-1 gap-16 px-8 md:grid-cols-2 md:gap-[70px]">
          {/* CONTACT DETAILS */}
          <div className="reveal">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-sage-300">Contact Details</span>
            <h2 className="mt-4 font-serif text-2xl text-stone-50">Reach our reservations team</h2>

            <div className="mt-8 flex flex-col gap-[22px]">
              <div className="flex items-start gap-4 border-t border-line-light pt-[18px]">
                <FontAwesomeIcon icon={faLocationDot} className="mt-0.5 h-[18px] w-[18px] shrink-0 text-brass-300" />
                <div>
                  <div className="mb-1 flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-grey-400">
                    Address
                    <span className="rounded-arc border border-brass-300 px-2 py-0.5 text-[9.5px] normal-case tracking-normal text-brass-300">
                      Confirm
                    </span>
                  </div>
                  <div className="text-[15.5px] text-stone-50">
                    232 Jeff Masemola Street, Pretoria Central, 0002, South Africa
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 border-t border-line-light pt-[18px]">
                <FontAwesomeIcon icon={faPhone} className="mt-0.5 h-[18px] w-[18px] shrink-0 text-brass-300" />
                <div>
                  <div className="mb-1 text-[11px] uppercase tracking-[0.14em] text-grey-400">Telephone</div>
                  <div className="text-[15.5px] text-stone-50">
                    <a href="tel:0123200103" className="hover:text-brass-300">
                      012 320 0103
                    </a>
                    <span className="mx-2 text-stone-50/40">/</span>
                    <a href="tel:0129404992" className="hover:text-brass-300">
                      012 940 4992
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 border-t border-line-light pt-[18px]">
                <FontAwesomeIcon icon={faWhatsapp} className="mt-0.5 h-[18px] w-[18px] shrink-0 text-brass-300" />
                <div>
                  <div className="mb-1 text-[11px] uppercase tracking-[0.14em] text-grey-400">WhatsApp</div>
                  <div className="text-[15.5px] text-stone-50">
                    <a
                      href="https://wa.me/27813959671"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-brass-300"
                    >
                      081 395 9671
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 border-t border-line-light pt-[18px]">
                <FontAwesomeIcon icon={faEnvelope} className="mt-0.5 h-[18px] w-[18px] shrink-0 text-brass-300" />
                <div>
                  <div className="mb-1 text-[11px] uppercase tracking-[0.14em] text-grey-400">Reservations</div>
                  <div className="text-[15.5px] text-stone-50">
                    <a href="mailto:reservations@theparklodge.co.za" className="hover:text-brass-300">
                      reservations@theparklodge.co.za
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ENQUIRY FORM */}
          <div className="reveal">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-sage-300">
              Send An Enquiry
            </span>
            <h2 className="mt-4 font-serif text-2xl text-stone-50">Request availability</h2>
            <p className="mt-3.5 max-w-[40ch] text-[14.5px] font-light leading-[1.65] text-stone-50/60">
              For stays, conference bookings or events — tell us what you need and our reservations team will
              respond directly.
            </p>
            <ContactForm />
          </div>
        </RevealOnScroll>

        {/* MAP */}
        <RevealOnScroll className="mx-auto mt-16 max-w-wrap px-8">
          <div className="reveal flex h-[240px] items-center justify-center rounded-sm border border-line-light bg-pine-950">
            <div className="flex flex-col items-center gap-2.5 text-center text-stone-50/50">
              <FontAwesomeIcon icon={faLocationDot} className="h-6 w-6 text-brass-300" />
              <span className="text-[13px]">Google Maps embed — pending confirmed address</span>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
}
