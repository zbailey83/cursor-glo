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
  'dermaplaning': '/service-imgs/dermaplaning-ft.png',
  'chemical-peels': '/service-imgs/chemicalpeel-ft.png',
  'microneedling': '/service-imgs/microneedling-ft.png',
  'hydrating-facial': '/service-imgs/hydrating-f.png',
  'detoxifying-facial': '/service-imgs/detoxifying-f.png',
  'vitality-facial': '/service-imgs/vitality-f.png',
};

const ServiceOverview = () => {
  const grouped = groupByCategory(services);
  return (
    <section className="w-full py-20 bg-lumina-bg font-body relative" id="services">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-lumina-text">Our Services</h2>
          <div className="w-32 h-2 bg-lumina-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-lumina-text/80 text-xl max-w-3xl mx-auto font-medium leading-relaxed">
            Discover our comprehensive range of advanced aesthetic treatments designed to help you achieve your skin goals.
          </p>
        </div>
        {Object.entries(grouped).map(([cat, list]) => (
          <div key={cat} className="mb-16">
            <div className="glass rounded-2xl p-8 mb-8 border border-lumina-primary/20">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-lumina-text text-center capitalize">{cat.replace(/-/g, ' ')}</h3>
              <p className="text-center text-lumina-text/70 font-medium mt-2">Premium treatments designed for your unique needs</p>
            </div>
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