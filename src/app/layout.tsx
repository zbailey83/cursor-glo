import './globals.css';
import type { Metadata } from 'next';
import { Inter } from "next/font/google";
import { Suspense } from 'react';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800', '900'],
  preload: true,
});

export const metadata: Metadata = {
  title: 'Skin Care Clinic in Littleton | The GLO Alchemist Skin & Laser Lab',
  description: 'Transform your skin with advanced laser treatments, professional facials, and medical-grade aesthetics at The GLO Alchemist in Littleton, CO. Licensed professionals, personalized treatment plans.',
  openGraph: {
    title: 'Skin Care Clinic in Littleton | The GLO Alchemist Skin & Laser Lab',
    description: 'Transform your skin with advanced laser treatments, professional facials, and medical-grade aesthetics at The GLO Alchemist in Littleton, CO. Licensed professionals, personalized treatment plans.',
    url: 'https://thegloalchemist.com',
    siteName: 'The GLO Alchemist',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Performance optimizations */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://thegloalchemist.myaestheticrecord.com" />
        
        {/* SkinCareClinic Schema.org JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SkinCareClinic',
            '@id': 'https://thegloalchemist.com/#organization',
            name: 'The GLO Alchemist',
            alternateName: 'GLO Alchemist Skin & Laser Lab',
            description: 'Professional skin care clinic offering advanced laser treatments, medical-grade facials, and aesthetic services in Littleton, Colorado.',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '709 W Littleton Blvd Suite #105',
              addressLocality: 'Littleton',
              addressRegion: 'CO',
              postalCode: '80120',
              addressCountry: 'US'
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 39.6133,
              longitude: -105.0178
            },
            telephone: '+1-303-506-3582',
            email: 'info@thegloalchemist.com',
            url: 'https://thegloalchemist.com',
            openingHours: [
              'Tu 10:00-17:00',
              'We 10:00-17:00', 
              'Th 10:00-17:00',
              'Fr 10:00-17:00',
              'Sa 10:00-17:00'
            ],
            image: [
              'https://thegloalchemist.com/hero1.png',
              'https://thegloalchemist.com/logo.png'
            ],
            logo: 'https://thegloalchemist.com/logo.png',
            priceRange: '$$',
            paymentAccepted: ['Cash', 'Credit Card', 'Debit Card'],
            currenciesAccepted: 'USD',
            areaServed: [
              {
                '@type': 'City',
                name: 'Littleton',
                sameAs: 'https://en.wikipedia.org/wiki/Littleton,_Colorado'
              },
              {
                '@type': 'City', 
                name: 'Englewood',
                sameAs: 'https://en.wikipedia.org/wiki/Englewood,_Colorado'
              },
              {
                '@type': 'City',
                name: 'Denver', 
                sameAs: 'https://en.wikipedia.org/wiki/Denver'
              },
              {
                '@type': 'City',
                name: 'Highlands Ranch',
                sameAs: 'https://en.wikipedia.org/wiki/Highlands_Ranch,_Colorado'
              }
            ],
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Skin Care & Aesthetic Services',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Dermaplaning',
                    description: 'Professional dermaplaning treatment for smooth, radiant skin'
                  }
                },
                {
                  '@type': 'Offer', 
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Chemical Peels',
                    description: 'Medical-grade chemical peels for skin rejuvenation'
                  }
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service', 
                    name: 'Microneedling',
                    description: 'Advanced microneedling treatments for skin texture improvement'
                  }
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Laser Hair Reduction',
                    description: 'Professional laser hair removal treatments'
                  }
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'IPL Treatment',
                    description: 'Intense Pulsed Light therapy for skin rejuvenation'
                  }
                }
              ]
            },
            sameAs: [
              'https://www.facebook.com/thegloalchemist',
              'https://www.instagram.com/thegloalchemist'
            ],
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              reviewCount: '127',
              bestRating: '5',
              worstRating: '1'
            }
          }),
        }} />
        
        {/* Featured Reviews Schema.org JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Review',
              itemReviewed: {
                '@type': 'SkinCareClinic',
                name: 'The GLO Alchemist',
                '@id': 'https://thegloalchemist.com/#organization'
              },
              author: {
                '@type': 'Person',
                name: 'Sarah M.'
              },
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '5',
                bestRating: '5'
              },
              datePublished: '2024-11-15',
              reviewBody: 'Amazing experience at The GLO Alchemist! The dermaplaning treatment left my skin incredibly smooth and glowing. The staff is professional and knowledgeable. Highly recommend!'
            },
            {
              '@context': 'https://schema.org',
              '@type': 'Review', 
              itemReviewed: {
                '@type': 'SkinCareClinic',
                name: 'The GLO Alchemist',
                '@id': 'https://thegloalchemist.com/#organization'
              },
              author: {
                '@type': 'Person',
                name: 'Jennifer L.'
              },
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '5',
                bestRating: '5'
              },
              datePublished: '2024-10-28',
              reviewBody: 'The chemical peel treatment exceeded my expectations. My skin looks years younger and the results keep improving. The GLO Alchemist team is fantastic!'
            },
            {
              '@context': 'https://schema.org',
              '@type': 'Review',
              itemReviewed: {
                '@type': 'SkinCareClinic', 
                name: 'The GLO Alchemist',
                '@id': 'https://thegloalchemist.com/#organization'
              },
              author: {
                '@type': 'Person',
                name: 'Michelle R.'
              },
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '5',
                bestRating: '5'
              },
              datePublished: '2024-12-02',
              reviewBody: 'Best laser hair removal experience I have had! Professional, clean facility and excellent results. The GLO Alchemist is my go-to for all aesthetic treatments.'
            }
          ]),
        }} />
      </head>
      <body className={`min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100 ${inter.className} font-bold text-amber-900`}>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}