import React from 'react';
import { services } from '../data/services';
import ServiceCard from './ServiceCard';

function groupByCategory(servicesArr: typeof services) {
  return servicesArr.reduce((acc, s) => {
    if (!acc[s.category]) acc[s.category] = [];
    acc[s.category].push(s);
    return acc;
  }, {} as Record<string, typeof services>);
}

const getServiceInfo = (slug: string) => {
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

  return serviceDescriptions[slug] || {
    description: 'Professional skin care treatment tailored to your specific needs and goals.',
    bullets: ['Licensed professionals', 'Advanced technology', 'Personalized care']
  };
};

const serviceImages: Record<string, string> = {
  'dermaplaning': '/dermaplaning-ft.png',
  'chemical-peels': '/chemicalpeel-ft.png',
  'microneedling': '/microneedling-ft.png',
  'hydrating-facial': '/hydrating-f.png',
  'detoxifying-facial': '/detoxifying-f.png',
  'vitality-facial': '/vitality-f.png',
};

const ServiceOverview = () => {
  const grouped = groupByCategory(services);
  return (
    <section className="w-full py-16 bg-white" id="services">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-orange-400 mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our comprehensive range of advanced aesthetic treatments designed to help you achieve your skin goals.
          </p>
        </div>
        {Object.entries(grouped).map(([cat, list]) => (
          <div key={cat} className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-pink-700 text-center">{cat}</h3>
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
                    imgSrc={serviceImages[service.slug]}
                    category={service.category}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceOverview; 