import { Metadata } from 'next';
import { services } from '../../../data/services';
import { neighborhoods } from '../../../data/neighborhoods';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';

function groupByCategory(servicesArr: typeof services) {
  return servicesArr.reduce((acc, s) => {
    if (!acc[s.category]) acc[s.category] = [];
    acc[s.category].push(s);
    return acc;
  }, {} as Record<string, typeof services>);
}

export async function generateStaticParams() {
  const params = [];
  for (const service of services) {
    for (const neighborhood of neighborhoods) {
      params.push({ service: service.slug, neighborhood });
    }
  }
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ service: string, neighborhood: string }> }): Promise<Metadata> {
  const { service: serviceSlug, neighborhood: neighborhoodSlug } = await params;
  const service = services.find((s) => s.slug === serviceSlug);
  const neighborhood = neighborhoodSlug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  return {
    title: `${service?.name || 'Professional Service'} in ${neighborhood}, CO | The GLO Alchemist`,
    description: `Professional ${service?.name?.toLowerCase() || 'skin care service'} treatments in ${neighborhood}, Colorado. Expert aestheticians, advanced technology, and personalized care at The GLO Alchemist Skin & Laser Lab.`,
    openGraph: {
      title: `${service?.name || 'Professional Service'} in ${neighborhood}, CO | The GLO Alchemist`,
      description: `Professional ${service?.name?.toLowerCase() || 'skin care service'} treatments in ${neighborhood}, Colorado. Expert aestheticians, advanced technology, and personalized care at The GLO Alchemist Skin & Laser Lab.`,
      url: `https://thegloalchemist.com/${serviceSlug}/${neighborhoodSlug}`,
      siteName: 'The GLO Alchemist',
      locale: 'en_US',
      type: 'website',
    },
    alternates: {
      canonical: `https://thegloalchemist.com/${serviceSlug}/${neighborhoodSlug}`,
    },
  };
}

export default async function NeighborhoodPage({ params }: { params: Promise<{ service: string, neighborhood: string }> }) {
  const { service: serviceSlug, neighborhood: neighborhoodSlug } = await params;
  const service = services.find((s) => s.slug === serviceSlug);
  const neighborhood = neighborhoodSlug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  const grouped = groupByCategory(services);

  // Service-specific content
  const getServiceDescription = (slug: string) => {
    const descriptions: Record<string, string> = {
      'dermaplaning': 'Dermaplaning is a professional exfoliation treatment that uses a sterile surgical scalpel to gently remove dead skin cells and vellus hair (peach fuzz) from the face. This non-invasive procedure reveals smoother, brighter skin and allows for better product absorption.',
      'chemical-peels': 'Chemical peels use carefully selected acids to remove damaged skin layers, revealing fresher, healthier skin underneath. Our medical-grade peels are customized to your skin type and concerns, addressing issues from acne to aging.',
      'microneedling': 'Microneedling creates controlled micro-injuries in the skin using fine needles, stimulating your body\'s natural healing process and collagen production. This results in improved skin texture, reduced scarring, and enhanced overall skin quality.',
      'hydrating-facial': 'Our hydrating facial is designed to restore moisture balance and nourish dehydrated skin. Using intensive hydrating serums, masks, and techniques, this treatment leaves skin plump, radiant, and deeply moisturized.',
      'detoxifying-facial': 'Our detoxifying facial deep cleanses pores, removes impurities, and balances oil production. Using purifying masks, extractions, and clarifying treatments, this facial is perfect for congested, oily, or acne-prone skin.',
      'vitality-facial': 'Our vitality facial is designed to brighten and revitalize tired, dull skin. Using antioxidant-rich serums, brightening masks, and energizing treatments, this facial restores radiance and vitality to your complexion.'
    };
    return descriptions[slug] || 'Professional skin care treatment tailored to your specific needs and skin goals.';
  };

  const getBenefits = (slug: string) => {
    const benefits: Record<string, string[]> = {
      'dermaplaning': [
        'Immediate improvement in skin texture and smoothness',
        'Enhanced product absorption for skincare routines',
        'Reduction in appearance of fine lines and acne scars',
        'Brighter, more radiant complexion',
        'Safe for all skin types, including sensitive skin',
        'No downtime required'
      ],
      'chemical-peels': [
        'Improved skin texture and tone',
        'Reduction in fine lines and wrinkles',
        'Decreased appearance of acne scars',
        'Evening of skin pigmentation',
        'Stimulated collagen production',
        'Minimized pore appearance'
      ],
      'microneedling': [
        'Stimulated collagen and elastin production',
        'Reduced appearance of acne scars',
        'Improved skin texture and firmness',
        'Minimized pore size',
        'Enhanced product absorption',
        'Reduced fine lines and wrinkles'
      ],
      'hydrating-facial': [
        'Deep moisture infusion and hydration',
        'Improved skin plumpness and elasticity',
        'Reduced appearance of fine lines',
        'Enhanced skin barrier function',
        'Immediate radiance and glow',
        'Soothing relief for dry, tight skin'
      ],
      'detoxifying-facial': [
        'Deep pore cleansing and purification',
        'Reduced blackheads and congestion',
        'Balanced oil production',
        'Clearer, healthier-looking skin',
        'Minimized breakouts and blemishes',
        'Refined pore appearance'
      ],
      'vitality-facial': [
        'Brightened and more radiant complexion',
        'Reduced signs of fatigue and stress',
        'Enhanced skin luminosity',
        'Antioxidant protection against environmental damage',
        'Improved skin tone and texture',
        'Energized and refreshed appearance'
      ]
    };
    return benefits[slug] || ['Personalized treatment plan', 'Licensed professionals', 'Advanced techniques'];
  };

  const getLocalConsideration = (serviceSlug: string, neighborhoodSlug: string) => {
    const considerations: Record<string, Record<string, string>> = {
      'dermaplaning': {
        'englewood': 'Englewood residents appreciate dermaplaning for its immediate results before special events at the Gothic Theatre or Englewood City Park gatherings.',
        'denver': 'Denver professionals love dermaplaning for maintaining smooth skin in the dry Colorado climate and high altitude environment.',
        'highlands-ranch': 'Highlands Ranch clients often combine dermaplaning with other treatments for comprehensive skin rejuvenation.',
        'ken-caryl': 'Ken Caryl residents find dermaplaning perfect for maintaining healthy skin while enjoying outdoor activities in the foothills.',
        'columbine': 'Columbine area clients appreciate the gentle nature of dermaplaning for sensitive skin common in Colorado\'s climate.',
        'chatfield': 'Chatfield residents benefit from dermaplaning to combat dry skin from outdoor recreation at Chatfield Reservoir.',
        'roxborough': 'Roxborough clients love dermaplaning for maintaining smooth skin while enjoying the natural beauty of Roxborough State Park.'
      },
      'chemical-peels': {
        'englewood': 'Englewood\'s urban environment makes chemical peels ideal for addressing pollution-related skin damage and maintaining clear complexion.',
        'denver': 'Denver\'s high altitude and dry climate make chemical peels excellent for addressing sun damage and dehydration lines.',
        'highlands-ranch': 'Highlands Ranch residents often choose chemical peels for anti-aging benefits and maintaining youthful skin.',
        'ken-caryl': 'Ken Caryl clients benefit from chemical peels to address sun damage from outdoor mountain activities.',
        'columbine': 'Columbine area residents find chemical peels effective for addressing seasonal skin changes in Colorado\'s variable climate.',
        'chatfield': 'Chatfield residents use chemical peels to maintain healthy skin despite exposure to wind and sun during outdoor activities.',
        'roxborough': 'Roxborough clients appreciate chemical peels for addressing environmental skin damage from Colorado\'s intense UV exposure.'
      }
    };
    return considerations[serviceSlug]?.[neighborhoodSlug] || `${neighborhood} residents benefit from ${service?.name?.toLowerCase() || 'professional skin care'} treatments at The GLO Alchemist.`;
  };

  const getFAQs = (slug: string) => {
    const faqs: Record<string, { question: string; answer: string }[]> = {
      'dermaplaning': [
        {
          question: 'Will my hair grow back thicker after dermaplaning?',
          answer: 'No, this is a common myth. Vellus hair (peach fuzz) will grow back at the same rate and texture as before. Dermaplaning does not change hair follicle structure.'
        },
        {
          question: 'How often should I get dermaplaning treatments?',
          answer: 'Most clients benefit from dermaplaning every 3-4 weeks, which aligns with your skin\'s natural cell turnover cycle.'
        },
        {
          question: 'Is there any downtime with dermaplaning?',
          answer: 'There is no downtime with dermaplaning. You may experience slight redness immediately after treatment, which typically subsides within an hour.'
        }
      ],
      'chemical-peels': [
        {
          question: 'What types of chemical peels do you offer?',
          answer: 'We offer light, medium, and deep peels including glycolic, salicylic, lactic, and TCA peels. Your aesthetician will recommend the best option for your skin.'
        },
        {
          question: 'How long does the peeling process last?',
          answer: 'Peeling typically lasts 3-7 days depending on the peel depth. Light peels may have minimal peeling, while deeper peels have more noticeable shedding.'
        },
        {
          question: 'When will I see results from my chemical peel?',
          answer: 'Initial results are visible once peeling completes (7-10 days). Continued improvement occurs over the following weeks as new skin cells regenerate.'
        }
      ],
      'microneedling': [
        {
          question: 'How many microneedling sessions do I need?',
          answer: 'Most clients see optimal results with 3-6 sessions spaced 4-6 weeks apart. Your aesthetician will create a personalized treatment plan.'
        },
        {
          question: 'Is microneedling painful?',
          answer: 'We apply numbing cream before treatment to minimize discomfort. Most clients describe the sensation as tolerable with mild tingling.'
        },
        {
          question: 'When will I see results from microneedling?',
          answer: 'Initial improvement may be visible within a week, but significant results develop over 4-6 weeks as collagen production increases.'
        }
      ]
    };
    return faqs[slug] || [
      {
        question: 'How do I prepare for my treatment?',
        answer: 'We will provide specific pre-treatment instructions during your consultation. Generally, avoid sun exposure and certain skincare products before your appointment.'
      },
      {
        question: 'How long does the treatment take?',
        answer: 'Treatment time varies by service, typically ranging from 30-90 minutes. We will discuss the expected duration during your consultation.'
      }
    ];
  };

  const serviceName = service?.name || 'Professional Service';

  return (
    <div className="min-h-screen flex flex-col bg-lumina-bg font-body text-lumina-text">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto py-20 px-4 relative">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>

        {/* Breadcrumbs */}
        <nav className="mb-8 text-sm text-lumina-text/60 relative z-10 font-medium">
          <Link href="/" className="hover:text-lumina-primary transition-colors">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/services" className="hover:text-lumina-primary transition-colors">Services</Link>
          <span className="mx-2">›</span>
          <Link href={`/neighborhood/${neighborhoodSlug}`} className="hover:text-lumina-primary transition-colors">{neighborhood}</Link>
          <span className="mx-2">›</span>
          <span className="text-lumina-text font-bold">{serviceName}</span>
        </nav>

        {/* Page Header */}
        <div className="glass rounded-3xl p-10 mb-10 border border-lumina-primary/20 relative z-10">
          <h1 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-lumina-text leading-tight">{serviceName} in {neighborhood}, CO</h1>
          <div className="w-24 h-1.5 bg-lumina-primary mb-6 rounded-full"></div>
        </div>

        {/* Main Service Description Card */}
        <div className="glass rounded-3xl p-10 mb-10 border border-lumina-primary/20 relative z-10">
          <div className="flex items-center mb-6">
            <div className="w-3 h-3 bg-lumina-primary rounded-full mr-3"></div>
            <h2 className="text-2xl font-heading font-bold text-lumina-text">{serviceName} Services for {neighborhood} Residents</h2>
          </div>
          <p className="text-lumina-text/80 leading-relaxed font-medium text-lg">{getServiceDescription(serviceSlug)}</p>
        </div>

        {/* Why Choose Us Card */}
        <div className="glass-strong rounded-3xl p-10 mb-10 border border-lumina-primary/20 relative z-10">
          <div className="flex items-center mb-6">
            <div className="w-3 h-3 bg-lumina-primary rounded-full mr-3"></div>
            <h3 className="text-xl font-heading font-bold text-lumina-text">Why {neighborhood} Clients Choose The GLO Alchemist</h3>
          </div>
          <p className="text-lumina-text/80 leading-relaxed mb-4 font-medium">{getLocalConsideration(serviceSlug, neighborhoodSlug)}</p>
          <p className="text-lumina-text/80 leading-relaxed font-medium">Our Littleton clinic is conveniently located and easily accessible for {neighborhood} residents seeking professional {serviceName.toLowerCase()} treatments.</p>
        </div>

        {/* Benefits Card */}
        <div className="glass rounded-3xl p-10 mb-10 border border-lumina-primary/20 relative z-10">
          <div className="flex items-center mb-6">
            <div className="w-3 h-3 bg-lumina-primary rounded-full mr-3"></div>
            <h3 className="text-xl font-heading font-bold text-lumina-text">Benefits of {serviceName}</h3>
          </div>
          <ul className="space-y-4">
            {getBenefits(serviceSlug).map((benefit, index) => (
              <li key={index} className="flex items-start">
                <span className="text-lumina-primary mr-3 mt-1 text-lg">•</span>
                <span className="text-lumina-text/80 font-medium">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* What to Expect Card */}
        <div className="glass rounded-3xl p-10 mb-10 border border-lumina-primary/20 relative z-10">
          <div className="flex items-center mb-6">
            <div className="w-3 h-3 bg-lumina-primary rounded-full mr-3"></div>
            <h3 className="text-xl font-heading font-bold text-lumina-text">What to Expect</h3>
          </div>
          <p className="text-lumina-text/80 leading-relaxed font-medium">During your {serviceName.toLowerCase()} treatment, our licensed aestheticians will ensure your comfort and safety while delivering exceptional results. We customize each treatment to your specific skin type and concerns, ensuring optimal outcomes for {neighborhood} residents.</p>
        </div>

        {/* Location & Access Card */}
        <div className="glass rounded-3xl p-10 mb-10 border border-lumina-primary/20 relative z-10">
          <div className="flex items-center mb-6">
            <div className="w-3 h-3 bg-lumina-primary rounded-full mr-3"></div>
            <h3 className="text-xl font-heading font-bold text-lumina-text">Getting to Our Clinic from {neighborhood}</h3>
          </div>
          <p className="text-lumina-text/80 leading-relaxed font-medium">Our clinic is conveniently located at 709 W Littleton Blvd Suite 105, with easy access from {neighborhood}. We offer ample parking and a comfortable, professional environment for all your aesthetic needs. Most {neighborhood} residents find us just a short drive away.</p>
        </div>

        {/* About Neighborhood Card */}
        <div className="glass rounded-3xl p-10 mb-10 border border-lumina-primary/20 relative z-10">
          <div className="flex items-center mb-6">
            <div className="w-3 h-3 bg-lumina-primary rounded-full mr-3"></div>
            <h3 className="text-xl font-heading font-bold text-lumina-text">About {neighborhood}</h3>
          </div>
          <p className="text-lumina-text/80 leading-relaxed font-medium">{neighborhood} is a wonderful community in the Denver metro area, and we are proud to serve residents with the highest quality skin care treatments. Our location provides convenient access for {neighborhood} residents seeking professional aesthetic services in a welcoming, state-of-the-art facility.</p>
        </div>

        {/* FAQ Card */}
        <div className="glass rounded-3xl p-10 mb-10 border border-lumina-primary/20 relative z-10">
          <div className="flex items-center mb-8">
            <div className="w-3 h-3 bg-lumina-primary rounded-full mr-3"></div>
            <h3 className="text-xl font-heading font-bold text-lumina-text">Frequently Asked Questions</h3>
          </div>
          <div className="space-y-6">
            {getFAQs(serviceSlug).map((faq, index) => (
              <div key={index} className="bg-lumina-bg/50 rounded-xl p-6 border-l-4 border-lumina-primary">
                <h4 className="font-bold text-lumina-text mb-3 font-heading">{faq.question}</h4>
                <p className="text-lumina-text/80 leading-relaxed font-medium">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule Consultation Card */}
        <div className="glass-strong rounded-3xl p-10 mb-10 border border-lumina-primary/20 relative z-10">
          <div className="flex items-center mb-6">
            <div className="w-3 h-3 bg-lumina-primary rounded-full mr-3"></div>
            <h3 className="text-xl font-heading font-bold text-lumina-text">Schedule Your {serviceName} Consultation</h3>
          </div>
          <p className="text-lumina-text/80 leading-relaxed font-medium mb-8">Ready to experience the benefits of professional {serviceName.toLowerCase()}? Contact The GLO Alchemist today to schedule your consultation. We are proud to serve {neighborhood} residents with the highest quality aesthetic treatments and personalized care.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://thegloalchemist.myaestheticrecord.com/online-booking"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-lumina-primary text-lumina-bg font-heading font-bold rounded-full hover:bg-lumina-text hover:text-lumina-bg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border border-lumina-primary"
            >
              Book Online Now
            </a>
            <a
              href="tel:3035063582"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-lumina-text font-heading font-bold rounded-full hover:bg-lumina-primary hover:text-lumina-bg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border-2 border-lumina-text hover:border-lumina-primary"
            >
              Call (303) 506-3582
            </a>
          </div>
          <p className="text-center text-sm text-lumina-text/60 mt-4 font-medium">
            Serving {neighborhood} residents with convenient access and professional care
          </p>
        </div>

        {/* Related Services Section */}
        <div className="glass rounded-3xl p-10 mb-10 border border-lumina-primary/20 relative z-10">
          <h2 className="text-xl font-heading font-bold mb-6 text-center text-lumina-text">Related Services in {neighborhood}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {services
              .filter(s => s.slug !== serviceSlug && s.category === service?.category)
              .slice(0, 3)
              .map(relatedService => (
                <a
                  key={relatedService.slug}
                  href={`/${relatedService.slug}/${neighborhoodSlug}`}
                  className="block p-4 bg-lumina-bg/50 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-lumina-primary/10 hover:border-lumina-primary/30"
                >
                  <h3 className="font-bold text-lumina-text mb-2 font-heading text-sm">{relatedService.name}</h3>
                  <p className="text-xs text-lumina-text/60 font-medium">Available in {neighborhood}</p>
                </a>
              ))}
          </div>
          <div className="text-center mt-6">
            <a
              href={`/neighborhood/${neighborhoodSlug}`}
              className="text-lumina-primary hover:text-lumina-text font-bold text-sm transition-colors"
            >
              View All Services in {neighborhood} →
            </a>
          </div>
        </div>

        {/* All Services Reference */}
        <div className="glass rounded-3xl p-10 mb-10 border border-lumina-primary/20 relative z-10">
          <h2 className="text-xl font-heading font-bold mb-8 text-center text-lumina-text">Complete Service Menu</h2>
          {Object.entries(grouped).map(([cat, list]) => (
            <div key={cat} className="mb-8 last:mb-0">
              <h3 className="text-lg font-bold text-lumina-primary mb-4 font-heading capitalize">{cat}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {list.map(s => (
                  <div key={s.slug}>
                    {s.slug === service?.slug ? (
                      <div className="block p-4 bg-lumina-primary/10 rounded-xl shadow-sm border border-lumina-primary">
                        <h4 className="font-bold text-lumina-text mb-2 font-heading text-sm">{s.name}</h4>
                        <p className="text-xs text-lumina-primary font-bold">Currently Viewing</p>
                      </div>
                    ) : (
                      <a
                        href={`/${s.slug}/${neighborhoodSlug}`}
                        className="block p-4 bg-lumina-bg/50 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-lumina-primary/10 hover:border-lumina-primary/30"
                      >
                        <h4 className="font-bold text-lumina-text mb-2 font-heading text-sm">{s.name}</h4>
                        <p className="text-xs text-lumina-text/60 font-medium">Available in {neighborhood}</p>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Service Schema.org JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            '@id': `https://thegloalchemist.com/${serviceSlug}/${neighborhoodSlug}#service`,
            name: serviceName,
            description: `Professional ${serviceName.toLowerCase()} treatment available in ${neighborhood}, Colorado`,
            provider: {
              '@type': 'SkinCareClinic',
              '@id': 'https://thegloalchemist.com/#organization',
              name: 'The GLO Alchemist',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '709 W Littleton Blvd Suite 105',
                addressLocality: 'Littleton',
                addressRegion: 'CO',
                postalCode: '80120',
                addressCountry: 'US'
              },
              telephone: '+1-303-506-3582',
              url: 'https://thegloalchemist.com'
            },
            areaServed: {
              '@type': 'City',
              name: neighborhood,
              containedInPlace: {
                '@type': 'State',
                name: 'Colorado',
                containedInPlace: {
                  '@type': 'Country',
                  name: 'United States'
                }
              }
            },
            serviceType: service?.category || 'Skin Care Treatment',
            availableChannel: {
              '@type': 'ServiceChannel',
              serviceUrl: 'https://thegloalchemist.myaestheticrecord.com/online-booking',
              serviceName: 'Online Booking',
              availableLanguage: 'English'
            }
          }),
        }} />

        {/* FAQ Schema.org JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            '@id': `https://thegloalchemist.com/${serviceSlug}/${neighborhoodSlug}#faq`,
            mainEntity: getFAQs(serviceSlug).map(faq => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer
              }
            }))
          }),
        }} />

        {/* Breadcrumb Schema.org JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            '@id': `https://thegloalchemist.com/${serviceSlug}/${neighborhoodSlug}#breadcrumb`,
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://thegloalchemist.com'
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Services',
                item: 'https://thegloalchemist.com/services'
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: neighborhood,
                item: `https://thegloalchemist.com/neighborhood/${neighborhoodSlug}`
              },
              {
                '@type': 'ListItem',
                position: 4,
                name: serviceName,
                item: `https://thegloalchemist.com/${serviceSlug}/${neighborhoodSlug}`
              }
            ]
          }),
        }} />
      </main>
      <Footer />
    </div>
  );
}