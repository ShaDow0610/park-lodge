import { SITE_URL } from '@/lib/site-config';

export default function BreadcrumbSchema({
  crumbLabel,
  path,
}: {
  crumbLabel: string;
  path: string;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: crumbLabel, item: `${SITE_URL}${path}` },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
