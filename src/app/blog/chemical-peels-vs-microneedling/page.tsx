import { Metadata } from 'next';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Chemical Peels vs. Microneedling: Which Treatment is Right for You? | The GLO Alchemist',
  description: 'Compare two popular skin rejuvenation treatments and find out which one addresses your specific skin concerns. Expert advice from The GLO Alchemist in Littleton, CO.',
  openGraph: {
    title: 'Chemical Peels vs. Microneedling: Which Treatment is Right for You?',
    description: 'Compare two popular skin rejuvenation treatments and find out which one addresses your specific skin concerns.',
    url: 'https://thegloalchemist.com/blog/chemical-peels-vs-microneedling',
    siteName: 'The GLO Alchemist',
    locale: 'en_US',
    type: 'article',
  },
  alternates: {
    canonical: 'https://thegloalchemist.com/blog/chemical-peels-vs-microneedling',
  },
};

export default function ChemicalPeelsVsMicroneedlingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-lumina-bg font-body text-lumina-text">
      <Header />

      <main className="flex-1 max-w-4xl mx-auto py-20 px-4 relative">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>

        {/* Hero Section */}
        <div className="text-center mb-16 relative z-10">
          <div className="inline-block bg-lumina-primary/10 text-lumina-primary px-4 py-2 rounded-full text-sm font-bold mb-6 font-heading tracking-wide border border-lumina-primary/20">
            Treatment Comparison
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-8 text-lumina-text leading-tight">
            Chemical Peels vs. Microneedling: Which Treatment is Right for You?
          </h1>
          <p className="text-xl text-lumina-text/80 mb-8 max-w-3xl mx-auto font-medium leading-relaxed">
            Compare two popular skin rejuvenation treatments and find out which one addresses your specific skin concerns.
          </p>
          <div className="flex items-center justify-center space-x-4 text-lumina-text/60 font-medium">
            <span>December 9, 2024</span>
            <span className="text-lumina-primary">•</span>
            <span>7 min read</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-16 relative z-10">
          <div className="relative w-full h-64 md:h-96 rounded-3xl overflow-hidden shadow-2xl border border-lumina-primary/20">
            <Image
              src="/blog-imgs/blog-crystals-candle.jpg"
              alt="Spa treatment comparison - crystals and candles representing holistic skincare approach"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              priority
            />
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none relative z-10 prose-headings:font-heading prose-headings:text-lumina-text prose-p:text-lumina-text/80 prose-strong:text-lumina-text prose-li:text-lumina-text/80">
          <div className="glass rounded-3xl p-8 md:p-12 mb-12 border border-lumina-primary/10">
            <p className="text-lumina-text font-medium text-xl leading-relaxed mb-0">
              When it comes to skin rejuvenation, two treatments consistently top the list of client favorites: chemical peels and microneedling. Both offer remarkable results, but they work in fundamentally different ways. At The GLO Alchemist, we help you choose the perfect treatment based on your unique skin concerns and goals.
            </p>
          </div>

          <h2 className="text-3xl font-heading font-bold text-lumina-primary mb-6">Understanding Chemical Peels</h2>

          <p className="text-lumina-text/80 font-medium leading-relaxed mb-8">
            Chemical peels use carefully formulated acids to remove damaged layers of skin, revealing fresh, healthy skin underneath. Think of it as a controlled exfoliation process that goes deeper than any at-home treatment could achieve.
          </p>

          <h3 className="text-2xl font-heading font-bold text-lumina-text mb-6">Types of Chemical Peels</h3>

          <div className="glass rounded-2xl p-8 mb-12 border border-lumina-primary/10">
            <ul className="space-y-4 text-lumina-text/80 font-medium list-none ml-0">
              <li className="flex items-start">
                <span className="text-lumina-primary mr-3 mt-1 text-lg">•</span>
                <span><strong className="text-lumina-text">Light Peels:</strong> Perfect for mild sun damage and dullness</span>
              </li>
              <li className="flex items-start">
                <span className="text-lumina-primary mr-3 mt-1 text-lg">•</span>
                <span><strong className="text-lumina-text">Medium Peels:</strong> Target deeper wrinkles and pigmentation</span>
              </li>
              <li className="flex items-start">
                <span className="text-lumina-primary mr-3 mt-1 text-lg">•</span>
                <span><strong className="text-lumina-text">Deep Peels:</strong> Address severe sun damage and deep scarring</span>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-heading font-bold text-lumina-primary mb-6">The Science of Microneedling</h2>

          <p className="text-lumina-text/80 font-medium leading-relaxed mb-8">
            Microneedling, also known as collagen induction therapy, uses tiny needles to create controlled micro-injuries in the skin. This triggers your body&apos;s natural healing response, stimulating collagen and elastin production for firmer, smoother skin.
          </p>

          <h3 className="text-2xl font-heading font-bold text-lumina-text mb-6">How Microneedling Works</h3>

          <div className="glass rounded-2xl p-8 mb-12 border border-lumina-primary/10">
            <ol className="space-y-4 text-lumina-text/80 font-medium list-decimal list-inside marker:text-lumina-primary marker:font-bold">
              <li>Micro-channels are created in the skin</li>
              <li>Natural healing response is triggered</li>
              <li>Collagen and elastin production increases</li>
              <li>Skin texture and firmness improve over time</li>
            </ol>
          </div>

          <h2 className="text-3xl font-heading font-bold text-lumina-primary mb-8">Side-by-Side Comparison</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="glass rounded-3xl p-8 border border-lumina-primary/20 hover:border-lumina-primary/40 transition-colors">
              <h4 className="text-xl font-heading font-bold text-lumina-text mb-6 flex items-center">
                <span className="w-3 h-3 bg-lumina-primary rounded-full mr-3"></span>
                Chemical Peels
              </h4>
              <div className="space-y-4 text-lumina-text/80 font-medium">
                <p><strong className="text-lumina-text">Best for:</strong> Pigmentation, sun damage, fine lines</p>
                <p><strong className="text-lumina-text">Downtime:</strong> 3-7 days depending on depth</p>
                <p><strong className="text-lumina-text">Results:</strong> Immediate improvement, continued benefits</p>
                <p><strong className="text-lumina-text">Frequency:</strong> Every 4-6 weeks</p>
              </div>
            </div>

            <div className="glass rounded-3xl p-8 border border-lumina-primary/20 hover:border-lumina-primary/40 transition-colors">
              <h4 className="text-xl font-heading font-bold text-lumina-text mb-6 flex items-center">
                <span className="w-3 h-3 bg-lumina-primary rounded-full mr-3"></span>
                Microneedling
              </h4>
              <div className="space-y-4 text-lumina-text/80 font-medium">
                <p><strong className="text-lumina-text">Best for:</strong> Texture, scars, pore size, firmness</p>
                <p><strong className="text-lumina-text">Downtime:</strong> 1-3 days of mild redness</p>
                <p><strong className="text-lumina-text">Results:</strong> Gradual improvement over months</p>
                <p><strong className="text-lumina-text">Frequency:</strong> Every 4-6 weeks for series</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-heading font-bold text-lumina-primary mb-8">Which Treatment is Right for You?</h2>

          <div className="glass-strong rounded-3xl p-10 mb-12 border border-lumina-primary/20">
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-2xl font-heading font-bold text-lumina-text mb-6">Choose Chemical Peels If:</h3>
                <ul className="space-y-3 text-lumina-text/80 font-medium list-none ml-0">
                  <li className="flex items-start">
                    <span className="text-lumina-primary mr-2">•</span>
                    You have sun spots or melasma
                  </li>
                  <li className="flex items-start">
                    <span className="text-lumina-primary mr-2">•</span>
                    Fine lines are your primary concern
                  </li>
                  <li className="flex items-start">
                    <span className="text-lumina-primary mr-2">•</span>
                    You want immediate visible results
                  </li>
                  <li className="flex items-start">
                    <span className="text-lumina-primary mr-2">•</span>
                    You can commit to proper aftercare
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold text-lumina-text mb-6">Choose Microneedling If:</h3>
                <ul className="space-y-3 text-lumina-text/80 font-medium list-none ml-0">
                  <li className="flex items-start">
                    <span className="text-lumina-primary mr-2">•</span>
                    You have acne scars or large pores
                  </li>
                  <li className="flex items-start">
                    <span className="text-lumina-primary mr-2">•</span>
                    Skin firmness is a priority
                  </li>
                  <li className="flex items-start">
                    <span className="text-lumina-primary mr-2">•</span>
                    You prefer minimal downtime
                  </li>
                  <li className="flex items-start">
                    <span className="text-lumina-primary mr-2">•</span>
                    You want to boost collagen production
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-heading font-bold text-lumina-primary mb-6">Colorado-Specific Considerations</h2>

          <p className="text-lumina-text/80 font-medium leading-relaxed mb-8">
            Living in Colorado presents unique skincare challenges. Our high altitude and intense UV exposure make both treatments excellent choices, but timing matters. We typically recommend chemical peels during fall and winter months when sun exposure is naturally reduced.
          </p>

          <h2 className="text-3xl font-heading font-bold text-lumina-primary mb-6">The GLO Alchemist Difference</h2>

          <p className="text-lumina-text/80 font-medium leading-relaxed mb-8">
            At The GLO Alchemist, we don&apos;t believe in one-size-fits-all solutions. During your consultation, we&apos;ll assess your skin type, concerns, lifestyle, and goals to recommend the perfect treatment plan. Many clients benefit from combining both treatments for comprehensive skin rejuvenation.
          </p>

          <div className="glass-strong rounded-3xl p-10 mb-12 text-center border border-lumina-primary/20">
            <h3 className="text-2xl font-heading font-bold text-lumina-text mb-4">Ready to Transform Your Skin?</h3>
            <p className="text-lumina-text/80 font-medium mb-8 max-w-2xl mx-auto">
              Schedule a consultation to discover which treatment will help you achieve your skin goals.
            </p>
            <a
              href="https://thegloalchemist.myaestheticrecord.com/online-booking"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-lumina-primary text-lumina-bg font-heading font-bold text-lg rounded-full hover:bg-lumina-text hover:text-lumina-bg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border border-lumina-primary"
            >
              Book Your Consultation
            </a>
          </div>
        </article>

        {/* Related Articles */}
        <div className="mt-16 pt-8 border-t border-lumina-primary/20 relative z-10">
          <h3 className="text-2xl font-heading font-bold text-lumina-text mb-8 text-center">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/blog/winter-skincare-colorado" className="group">
              <div className="glass rounded-3xl p-8 hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-lumina-primary/10 hover:border-lumina-primary/30">
                <div className="text-sm text-lumina-primary font-bold mb-3 uppercase tracking-wide font-heading">Seasonal Care</div>
                <h4 className="text-xl font-heading font-bold text-lumina-text mb-3 group-hover:text-lumina-primary transition-colors">
                  Winter Skin Care in Colorado
                </h4>
                <p className="text-lumina-text/80 font-medium">
                  Protect your skin from Colorado&apos;s harsh winter conditions with professional treatments.
                </p>
              </div>
            </Link>

            <div className="glass rounded-3xl p-8 border border-lumina-primary/10 opacity-75">
              <div className="text-sm text-lumina-primary font-bold mb-3 uppercase tracking-wide font-heading">Coming Soon</div>
              <h4 className="text-xl font-heading font-bold text-lumina-text mb-3">
                Post-Treatment Care Guide
              </h4>
              <p className="text-lumina-text/80 font-medium">
                Essential aftercare tips to maximize your treatment results.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Schema Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Chemical Peels vs. Microneedling: Which Treatment is Right for You?',
          description: 'Compare two popular skin rejuvenation treatments and find out which one addresses your specific skin concerns.',
          author: {
            '@type': 'Organization',
            name: 'The GLO Alchemist'
          },
          publisher: {
            '@type': 'Organization',
            name: 'The GLO Alchemist',
            logo: {
              '@type': 'ImageObject',
              url: 'https://thegloalchemist.com/glo-alchemist-logo.png'
            }
          },
          datePublished: '2024-12-09',
          dateModified: '2024-12-09',
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': 'https://thegloalchemist.com/blog/chemical-peels-vs-microneedling'
          }
        }),
      }} />
    </div>
  );
}