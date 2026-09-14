import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, CONTACT } from '@/lib/site-config';

/**
 * Site-wide JSON-LD (Hotel + amenities). Rendered once in the root layout.
 * Per Schema.org guidance, Hotel is the most specific applicable type for
 * a hotel + self-catering apartment property (more specific than the
 * generic LodgingBusiness).
 *
 * `geo` (lat/long) is deliberately omitted — the street address is still
 * pending client confirmation (see the "Confirm" badge on /contact). Add
 * precise coordinates here once that's settled; a wrong pin is worse than
 * no pin for local search.
 */
export default function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    image: `${SITE_URL}/images/hero.jpg`,
    telephone: CONTACT.telephone,
    email: CONTACT.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT.streetAddress,
      addressLocality: CONTACT.addressLocality,
      addressRegion: CONTACT.addressRegion,
      postalCode: CONTACT.postalCode,
      addressCountry: CONTACT.addressCountry,
    },
    amenityFeature: [
      'Café on Park (restaurant)',
      'Pool Bar',
      'Swimming Pool',
      'Gym',
      'Conference & Event Facilities',
      'Complimentary Wi-Fi',
      'Underground Parking',
      'Airport Shuttle',
      'Guest Laundry',
      '24-Hour Reception',
    ].map((name) => ({
      '@type': 'LocationFeatureSpecification',
      name,
      value: true,
    })),
    petsAllowed: false,
    potentialAction: {
      '@type': 'ReserveAction',
      target: `${SITE_URL}/contact`,
      name: 'Check Availability',
    },
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
