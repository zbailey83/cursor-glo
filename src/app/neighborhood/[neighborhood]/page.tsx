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

export async function generateMetadata({ params }: { params: Promise<{ neighborhood: string }> }): Promise<Metadata> {
  const { neighborhood } = await params;
  const prettyName = neighborhood.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  
  return {
    title: `Skin Care Services in ${prettyName}, CO | The GLO Alchemist`,
    description: `Professional skin care treatments, laser services, and medical aesthetics in ${prettyName}, Colorado. Advanced facials, dermaplaning, chemical peels, and more at The GLO Alchemist.`,
    openGraph: {
      title: `Skin Care Services in ${prettyName}, CO | The GLO Alchemist`,
      description: `Professional skin care treatments, laser services, and medical aesthetics in ${prettyName}, Colorado. Advanced facials, dermaplaning, chemical peels, and more at The GLO Alchemist.`,
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
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 max-w-5xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">All Services in {prettyName}, CO</h1>
        <p className="text-center text-gray-600 mb-10">Explore our advanced treatments available in {prettyName}. Click any card to view details for this neighborhood.</p>
        {Object.entries(grouped).map(([cat, list]) => (
          <div key={cat} className="mb-12">
            <h2 className="text-xl font-bold mb-6 text-pink-700 text-center">{cat}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {list.map(service => (
                <ServiceCard
                  key={service.slug}
                  name={service.name}
                  description={`Professional ${service.name.toLowerCase()} treatments available in ${prettyName}. Advanced techniques and personalized care.`}
                  bullets={[
                    'Licensed professionals',
                    'Advanced technology',
                    'Personalized treatment plans'
                  ]}
                  href={`/${service.slug}/${neighborhood}`}
                  category={service.category}
                />
              ))}
            </div>
          </div>
        ))}
        
        {/* Location Services Schema.org JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            '@id': `https://thegloalchemist.com/neighborhood/${neighborhood}#services`,
            name: `Skin Care Services in ${prettyName}, CO`,
            description: `Complete list of professional skin care and aesthetic services available to ${prettyName} residents at The GLO Alchemist`,
            numberOfItems: services.length,
            itemListElement: services.map((service, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              item: {
                '@type': 'Service',
                '@id': `https://thegloalchemist.com/${service.slug}/${neighborhood}#service`,
                name: service.name,
                description: `Professional ${service.name.toLowerCase()} treatment available in ${prettyName}, Colorado`,
                provider: {
                  '@type': 'SkinCareClinic',
                  '@id': 'https://thegloalchemist.com/#organization',
                  name: 'The GLO Alchemist'
                },
                areaServed: {
                  '@type': 'City',
                  name: prettyName,
                  containedInPlace: {
                    '@type': 'State',
                    name: 'Colorado'
                  }
                }
              }
            }))
          }),
        }} />
      </main>
      <Footer />
    </div>
  );
}