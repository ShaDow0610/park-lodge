import type { Metadata } from 'next';
import { Fraunces, Work_Sans } from 'next/font/google';
import '@/lib/fontawesome';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyBookBar from '@/components/StickyBookBar';
import StructuredData from '@/components/StructuredData';
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from '@/lib/site-config';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  style: ['normal', 'italic'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Pretoria Central`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'hotel Pretoria Central',
    'accommodation Pretoria',
    'self-catering apartments Pretoria',
    'business hotel Gauteng',
    'conference venue Pretoria',
    'meeting rooms Pretoria',
    'hotel near government offices Pretoria',
    'Café on Park',
    'The Park Lodge',
  ],
  authors: [{ name: SITE_NAME }],
  category: 'travel',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Pretoria Central`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/images/hero.jpg',
        width: 2560,
        height: 1707,
        alt: `${SITE_NAME} — exterior view`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — Pretoria Central`,
    description: SITE_DESCRIPTION,
    images: ['/images/hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-ZA" className={`${fraunces.variable} ${workSans.variable}`}>
      <body className="font-sans">
        <StructuredData />
        <Header />
        <main id="top">{children}</main>
        <Footer />
        <StickyBookBar />
      </body>
    </html>
  );
}
