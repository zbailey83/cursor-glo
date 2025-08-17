import { Metadata } from 'next';
import { services } from '../../data/services';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ServiceCard from '../../components/ServiceCard';

export const metadata: Metadata = {
  title: 'Professional Skin Care Services | The GLO Alchemist Littleton, CO',
  description: 'Comprehensive skin care and aesthetic services including dermaplaning, chemical peels, microneedling, laser treatments, and professional facials at The GLO Alchemist in Littleton, Colorado.',
  openGraph: {
    title: 'Professional Skin Care Services | The GLO Alchemist Littleton, CO',
    description: 'Comprehensive skin care and aesthetic services including dermaplaning, chemical peels, microneedling, laser treatments, and professional facials at The GLO Alchemist in Littleton, Colorado.',
    url: 'https://thegloalchemist.com/services',
    siteName: 'The GLO Alchemist',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://thegloalchemist.com/services',
  },
};

function groupByCategory(servicesArr: typeof services) {
  return servicesArr.reduce((acc, s) => {
    if (!acc[s.category]) acc[s.category] = [];
    acc[s.category].push(s);
    return acc;
  }, {} as Record<string, typeof services>);
}

const serviceDescriptions: Record<string, { description: string; bullets: string[] }> = {
  'dermaplaning': {
    description: 'Professional dermaplaning removes dead skin cells and vellus hair for instantly smoother, brighter skin.',
    bullets: ['Immediate glow and smoothness', 'Better product absorption', 'Safe for all skin types']
  },
  'chemical-peels': {
    description: 'Medical-grade chemical peels improve skin texture, reduce fine lines, and address pigmentation issues.',
    bullets: ['Customized peel strength', 'Minimal downtime options', 'Visible results in days']
  },
  'microneedling': {
    description: 'Advanced microneedling stimulates collagen production to improve skin texture and reduce scarring.',
    bullets: ['Stimulates natural healing', 'Reduces acne scars', 'Improves skin firmness']
  },
  'hydrating-facial': {
    description: 'Deep hydration facial restores moisture balance and leaves skin plump and radiant.',
    bullets: ['Intense moisture infusion', 'Suitable for dry skin', 'Immediate hydration boost']
  },
  'detoxifying-facial': {
    description: 'Purifying facial treatment removes impurities and excess oil for clearer, healthier skin.',
    bullets: ['Deep pore cleansing', 'Reduces breakouts', 'Balances oil production']
  },
  'vitality-facial': {
    description: 'Rejuvenating facial treatment that brightens and revitalizes tired, dull skin.',
    bullets: ['Brightens complexion', 'Reduces signs of fatigue', 'Antioxidant protection']
  }
};

const getServiceInfo = (slug: string) => {
  return serviceDescriptions[slug] || {
    description: 'Professional skin care treatment tailored to your specific needs and skin goals.',
    bullets: ['Personalized treatment plan', 'Licensed professionals', 'Advanced techniques']
  };
};

export default function ServicesMainPage() {
  const grouped = groupByCategory(services);
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 max-w-5xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Skin Care Clinic</h1>
        <p className="text-center text-gray-600 mb-10">Discover our comprehensive range of advanced aesthetic treatments designed to help you achieve your skin goals.</p>
        {Object.entries(grouped).map(([cat, list]) => (
          <div key={cat} className="mb-12">
            <h2 className="text-xl font-semibold mb-6 text-pink-700 text-center">{cat}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {list.map(service => {
                const serviceInfo = getServiceInfo(service.slug);
                return (
                  <ServiceCard
                    key={service.slug}
                    name={service.name}
                    description={serviceInfo.description}
                    bullets={serviceInfo.bullets}
                    href={`/${service.slug}/littleton-co`}
                    category={service.category}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
} 
