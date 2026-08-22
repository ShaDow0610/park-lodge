import type { Metadata } from 'next';
import { Fraunces, Work_Sans } from 'next/font/google';
import '@/lib/fontawesome';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyBookBar from '@/components/StickyBookBar';

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
  title: 'The Park Lodge Hotel and Apartments — Pretoria Central',
  description:
    'A quiet, garden-set address in Pretoria Central offering rooms, self-catering apartments, dining and event spaces.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${workSans.variable}`}>
      <body className="font-sans">
        <Header />
        <main id="top">{children}</main>
        <Footer />
        <StickyBookBar />
      </body>
    </html>
  );
}
