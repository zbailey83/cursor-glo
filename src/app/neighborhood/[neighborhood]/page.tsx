import { Metadata } from 'next';
import { services } from '../../../data/services';
import { neighborhoods } from '../../../data/neighborhoods';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import ServiceCard from '../../../components/ServiceCard';
import { notFound } from 'next/navigation';

function groupByCategory(servicesArr: typeof services) {
  return servicesArr.reduce((acc, s) => {
    if (!acc[s.category]) acc[s.category] = [];
    acc[s.category].push(s);
    return acc;
  }, {} as Record<string, typeof services>);
}

export async function generateStaticParams() {
  return neighborhoods.map((neighborhood) => ({ neighborhood }));
}

// Neighborhood-specific content mapping
const neighborhoodContent: Record<string, { title: string; h1: string; description: string }> = {
  'littleton': {
    title: 'Custom Facials & MedSpa Services',
    h1: 'Specialized Littleton Custom Facials and Advanced Anti-Aging Skin Treatments',
    description: 'Welcome to the premier destination for dermatological skincare serving the Littleton community. Located just a short drive from historic Downtown Littleton and the South Platte River, The Glo Alchemist is your expert partner for achieving radiant skin. We specialize in personalized, medical-grade skin treatments, including our signature Littleton Custom Facials and effective Anti-Aging Chemical Peels. Whether you\'re dealing with dryness from the Colorado climate or seeking comprehensive skin rejuvenation, our experts use the latest technology to ensure flawless results for our Littleton clients.'
  },
  'englewood': {
    title: 'Englewood HydraFacial & Acne Treatment Specialists',
    h1: 'Expert Englewood HydraFacial Services and Advanced Clinical Acne Treatments',
    description: 'Residents of Englewood seeking clinical-grade skincare and exceptional results turn to The Glo Alchemist. Conveniently serving the vibrant Englewood neighborhoods near the Gothic Theatre, we offer specialized care tailored to your specific skin concerns. Our most sought-after services include our advanced Englewood HydraFacial treatments, designed to detoxify and hydrate, and our targeted protocols for Clinical Acne Treatment. Trust our licensed skincare experts to craft a regimen that addresses your needs, from age correction to clear, healthy skin in Englewood.'
  },
  'denver': {
    title: 'Luxury Denver Micro-Needling & High Altitude Skin Repair',
    h1: 'Denver Micro-Needling Experts for High Altitude Skin Correction and Rejuvenation',
    description: 'As the leading Denver medspa for luxury and performance, The Glo Alchemist understands the unique challenges posed by the Mile High City\'s climate. Our treatments are specifically designed for High Altitude Skin Repair and deep hydration, perfect for clients in the Denver and Cherry Creek area. We are renowned for transformative services like Denver Micro-Needling, which stimulates collagen production for firmer, youthful skin. Schedule a consultation with our Denver experts today to discuss how we can restore your skin\'s vitality against the elements.'
  },
  'highlands-ranch': {
    title: 'Highlands Ranch Skincare & Hydrating Facial Specialists',
    h1: 'Top-Rated Highlands Ranch Hydrating Facials and Bespoke Skincare Consultations',
    description: 'The Glo Alchemist proudly serves the elegant community of Highlands Ranch, offering high-end, personalized Skincare solutions. Located close to the historic Highlands Ranch Mansion, our clinic provides a luxurious and comfortable experience. We specialize in effective treatments like our deeply Hydrating Facial and professional Toxin and Filler Services, helping you maintain a refreshed and youthful appearance. When the residents of Highlands Ranch demand excellence, they choose The Glo Alchemist for their complete aesthetic needs.'
  },
  'ken-caryl': {
    title: 'Ken Caryl Sport Skincare & Post-Sun Damage Treatment',
    h1: 'Specialized Ken Caryl Sport Skincare and Reconstructive Post-Sun Damage Treatments',
    description: 'For the active residents of Ken Caryl Ranch and the surrounding foothills, The Glo Alchemist offers specialized Sport Skincare designed to combat the effects of an outdoor lifestyle. We recognize the high exposure to sun and wind in Ken Caryl and prioritize treatments for Post-Sun Damage Treatment and deep environmental correction. Our clinical peels and restorative facials are tailored to repair, renew, and protect your skin. Visit our clinic near Ken Caryl for an expert skin consultation that matches your active, outdoor life.'
  },
  'columbine': {
    title: 'Columbine Bespoke Skin Treatments & Anti-Aging Consultation',
    h1: 'Columbine Bespoke Skin Treatments and Personalized Anti-Aging Skincare Solutions',
    description: 'Elevate your skin health in Columbine with the personalized approach of The Glo Alchemist. Serving the established residential areas of Columbine Valley, we focus on delivering Bespoke Skin Treatments that cater precisely to your unique biology. Our specialists excel in providing detailed Anti-Aging Consultations, ensuring every step of your skin journey is guided by expertise. Experience a relaxing yet results-driven approach to beauty and wellness that makes us a trusted favorite among the Columbine community.'
  },
  'chatfield': {
    title: 'Chatfield Dry Skin Solutions & Active Lifestyle Facials',
    h1: 'Chatfield Dry Skin Solutions and Deep Pore Cleansing for Active Lifestyles',
    description: 'The Glo Alchemist is dedicated to helping the active community near Chatfield State Park maintain skin health despite intense recreation and sun exposure. We offer powerful Chatfield Dry Skin Solutions and signature Deep Pore Cleansing treatments essential for an active lifestyle. Whether you\'re recovering from a weekend on the water or battling the effects of Colorado\'s dry air, our targeted facials and skin remedies provide crucial hydration and repair. Stop in after a day outdoors for the restorative Active Lifestyle Skincare treatment you need.'
  }
};

export async function generateMetadata({ params }: { params: Promise<{ neighborhood: string }> }): Promise<Metadata> {
  const { neighborhood } = await params;
  const prettyName = neighborhood.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  const content = neighborhoodContent[neighborhood];

  const title = content ? `${content.title} | The GLO Alchemist` : `Skin Care Services in ${prettyName}, CO | The GLO Alchemist`;
  const description = content ? content.description.substring(0, 160) + '...' : `Professional skin care treatments, laser services, and medical aesthetics in ${prettyName}, Colorado. Advanced facials, dermaplaning, chemical peels, and more at The GLO Alchemist.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://thegloalchemist.com/neighborhood/${neighborhood}`,
      siteName: 'The GLO Alchemist',
      locale: 'en_US',
      type: 'website',
    },
    alternates: {
      canonical: `https://thegloalchemist.com/neighborhood/${neighborhood}`,
    },
  };
}

export default async function NeighborhoodServicesPage({ params }: { params: Promise<{ neighborhood: string }> }) {
  const { neighborhood } = await params;
  if (!neighborhoods.includes(neighborhood)) return notFound();
  const grouped = groupByCategory(services);
  const prettyName = neighborhood.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  const content = neighborhoodContent[neighborhood];

  return (
    <div className="min-h-screen flex flex-col bg-lumina-bg font-body text-lumina-text">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto py-20 px-4 relative">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>

        {/* Hero Section with Neighborhood-Specific Content */}
        <div className="text-center mb-16 relative z-10">
          <div className="glass rounded-3xl p-12 shadow-xl border border-lumina-primary/20">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-lumina-text leading-tight">
              {content ? content.h1 : `All Services in ${prettyName}, CO`}
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-lumina-text/80 leading-relaxed mb-10 font-medium">
                {content ? content.description : `Explore our advanced treatments available in ${prettyName}. Click any card to view details for this neighborhood.`}
              </p>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
              <a
                href="https://thegloalchemist.myaestheticrecord.com/online-booking"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-4 bg-lumina-primary text-lumina-bg font-heading font-bold text-lg rounded-full hover:bg-lumina-text hover:text-lumina-bg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border border-lumina-primary"
              >
                Book Your Consultation
              </a>
              <a
                href="tel:3035063582"
                className="inline-flex items-center justify-center px-10 py-4 bg-transparent text-lumina-text font-heading font-bold text-lg rounded-full hover:bg-lumina-primary hover:text-lumina-bg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border-2 border-lumina-text hover:border-lumina-primary"
              >
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                Call (303) 506-3582
              </a>
            </div>
          </div>
        </div>

        {/* Services by Category */}
        <div className="mb-16 relative z-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-6 text-lumina-text">
            Professional Services for {prettyName} Residents
          </h2>
          <p className="text-center text-lumina-text/80 mb-12 max-w-4xl mx-auto text-lg font-medium leading-relaxed">
            Discover our comprehensive range of advanced aesthetic treatments, each tailored to address the unique skincare needs of {prettyName} clients.
          </p>
        </div>

        {Object.entries(grouped).map(([cat, list]) => (
          <div key={cat} className="mb-20 relative z-10">
            <div className="glass rounded-2xl p-8 mb-8 border border-lumina-primary/20">
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-2 text-lumina-text text-center capitalize">{cat}</h3>
              <p className="text-center text-lumina-text/70 font-medium">Premium treatments designed for your unique needs</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {list.map(service => (
                <ServiceCard
                  key={service.slug}
                  name={service.name}
                  description={`Expert ${service.name.toLowerCase()} treatments for ${prettyName} residents. Personalized care using advanced techniques and medical-grade technology.`}
                  bullets={[
                    `Serving ${prettyName} community`,
                    'Licensed aesthetic professionals',
                    'Advanced medical-grade technology',
                    'Personalized treatment plans'
                  ]}
                  href={`/${service.slug}/${neighborhood}`}
                  category={service.category}
                />
              ))}
            </div>
          </div>
        ))}

        {/* Location and Contact Information */}
        <div className="mt-20 glass-strong rounded-3xl p-12 text-center shadow-xl border border-lumina-primary/20 relative z-10">
          <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-lumina-text">
            Conveniently Located for {prettyName} Residents
          </h3>
          <p className="text-lumina-text/80 mb-10 max-w-3xl mx-auto text-lg font-medium leading-relaxed">
            Our state-of-the-art facility is easily accessible from {prettyName}, providing you with premium aesthetic services in a comfortable, professional environment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center bg-lumina-bg/50 rounded-2xl p-6 backdrop-blur-sm border border-lumina-primary/10">
              <div className="w-16 h-16 bg-lumina-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg text-lumina-bg">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h4 className="font-heading font-bold text-lumina-text mb-2 text-lg">Our Location</h4>
              <p className="text-lumina-text/80 font-medium">709 W Littleton Blvd Suite 105<br />Littleton, CO 80120</p>
            </div>
            <div className="text-center bg-lumina-bg/50 rounded-2xl p-6 backdrop-blur-sm border border-lumina-primary/10">
              <div className="w-16 h-16 bg-lumina-text rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg text-lumina-bg">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
              </div>
              <h4 className="font-heading font-bold text-lumina-text mb-2 text-lg">Contact Us</h4>
              <p className="text-lumina-text/80 font-medium">(303) 506-3582<br />info@thegloalchemist.com</p>
            </div>
            <div className="text-center bg-lumina-bg/50 rounded-2xl p-6 backdrop-blur-sm border border-lumina-primary/10">
              <div className="w-16 h-16 bg-lumina-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg text-lumina-bg">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h4 className="font-heading font-bold text-lumina-text mb-2 text-lg">Hours</h4>
              <p className="text-lumina-text/80 font-medium">Tuesday - Saturday<br />9:30 AM - 5:00 PM</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="https://thegloalchemist.myaestheticrecord.com/online-booking"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-lumina-primary text-lumina-bg font-heading font-bold text-lg rounded-full hover:bg-lumina-text hover:text-lumina-bg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border border-lumina-primary"
            >
              Schedule Online
            </a>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent('709 W Littleton Blvd Suite 105, Littleton, CO 80120')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-lumina-text font-heading font-bold text-lg rounded-full hover:bg-lumina-primary hover:text-lumina-bg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border-2 border-lumina-text hover:border-lumina-primary"
            >
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
              Get Directions
            </a>
          </div>
        </div>

        {/* Enhanced Schema.org JSON-LD with Neighborhood-Specific Content */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            '@id': `https://thegloalchemist.com/neighborhood/${neighborhood}#services`,
            name: content ? content.title : `Skin Care Services in ${prettyName}, CO`,
            description: content ? content.description : `Complete list of professional skin care and aesthetic services available to ${prettyName} residents at The GLO Alchemist`,
            numberOfItems: services.length,
            itemListElement: services.map((service, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              item: {
                '@type': 'Service',
                '@id': `https://thegloalchemist.com/${service.slug}/${neighborhood}#service`,
                name: service.name,
                description: `Professional ${service.name.toLowerCase()} treatment available for ${prettyName} residents at The GLO Alchemist`,
                provider: {
                  '@type': 'MedicalBusiness',
                  '@id': 'https://thegloalchemist.com/#organization',
                  name: 'The GLO Alchemist',
                  address: {
                    '@type': 'PostalAddress',
                    streetAddress: '709 W Littleton Blvd Suite 105',
                    addressLocality: 'Littleton',
                    addressRegion: 'CO',
                    postalCode: '80120'
                  },
                  telephone: '(303) 506-3582',
                  url: 'https://thegloalchemist.com'
                },
                areaServed: {
                  '@type': 'City',
                  name: prettyName,
                  containedInPlace: {
                    '@type': 'State',
                    name: 'Colorado',
                    containedInPlace: {
                      '@type': 'Country',
                      name: 'United States'
                    }
                  }
                },
                serviceType: service.category,
                availableChannel: {
                  '@type': 'ServiceChannel',
                  serviceUrl: 'https://thegloalchemist.myaestheticrecord.com/online-booking',
                  servicePhone: '(303) 506-3582'
                }
              }
            }))
          }),
        }} />

        {/* Local Business Schema for SEO */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'MedicalBusiness',
            '@id': 'https://thegloalchemist.com/#organization',
            name: 'The GLO Alchemist',
            description: content ? content.description : `Professional skin care and aesthetic services serving ${prettyName}, Colorado`,
            url: 'https://thegloalchemist.com',
            telephone: '(303) 506-3582',
            email: 'info@thegloalchemist.com',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '709 W Littleton Blvd Suite 105',
              addressLocality: 'Littleton',
              addressRegion: 'CO',
              postalCode: '80120',
              addressCountry: 'US'
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 39.6134676,
              longitude: -104.9964836
            },
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                opens: '09:30',
                closes: '17:00'
              }
            ],
            areaServed: [
              {
                '@type': 'City',
                name: prettyName,
                containedInPlace: {
                  '@type': 'State',
                  name: 'Colorado'
                }
              }
            ],
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: `Skin Care Services for ${prettyName}`,
              itemListElement: services.map(service => ({
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: service.name,
                  description: `Professional ${service.name.toLowerCase()} treatment`
                }
              }))
            }
          }),
        }} />
      </main>
      <Footer />
    </div>
  );
}