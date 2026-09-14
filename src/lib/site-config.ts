/**
 * Single source of truth for site-wide SEO/NAP (Name, Address, Phone) data —
 * reused across metadata, JSON-LD structured data, and the sitemap so it
 * never drifts out of sync with what's shown on the page.
 *
 * SITE_URL: update once a custom domain is live (currently the Netlify
 * default). Address: mirrors the "232 Jeff Masemola Street" shown on the
 * Contact page — still flagged pending client confirmation there; update
 * both places together if it changes.
 */
export const SITE_URL = 'https://parcklodge.netlify.app';

export const SITE_NAME = 'The Park Lodge Hotel and Apartments';

export const SITE_DESCRIPTION =
  'A considered hotel and self-catering apartment address in Pretoria Central, Gauteng — comfortable rooms, modern conference facilities, Café on Park, the Pool Bar and exceptional hospitality for business and leisure stays.';

export const CONTACT = {
  telephone: '+27 12 320 0103',
  telephoneAlt: '+27 12 940 4992',
  whatsapp: '+27 81 395 9671',
  email: 'reservations@theparklodge.co.za',
  streetAddress: '232 Jeff Masemola Street',
  addressLocality: 'Pretoria Central',
  addressRegion: 'Gauteng',
  postalCode: '0002',
  addressCountry: 'ZA',
};
