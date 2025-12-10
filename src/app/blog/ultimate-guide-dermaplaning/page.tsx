import { Metadata } from 'next';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'The Ultimate Guide to Dermaplaning | The GLO Alchemist Blog',
  description: 'Complete guide to dermaplaning treatment: benefits, process, aftercare, and why it\'s perfect for Colorado\'s dry climate. Expert advice from The GLO Alchemist.',
  openGraph: {
    title: 'The Ultimate Guide to Dermaplaning | The GLO Alchemist Blog',
    description: 'Complete guide to dermaplaning treatment: benefits, process, aftercare, and why it\'s perfect for Colorado\'s dry climate. Expert advice from The GLO Alchemist.',
    url: 'https://thegloalchemist.com/blog/ultimate-guide-dermaplaning',
    siteName: 'The GLO Alchemist',
    locale: 'en_US',
    type: 'article',
  },
  alternates: {
    canonical: 'https://thegloalchemist.com/blog/ultimate-guide-dermaplaning',
  },
};

export default function DermaplaningGuidePage() {
  return (
    <div className="min-h-screen flex flex-col bg-lumina-bg font-body text-lumina-text">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto py-20 px-4 relative">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>

        {/* Breadcrumbs */}
        <nav className="mb-8 text-sm text-lumina-text/60 relative z-10 font-medium">
          <Link href="/" className="hover:text-lumina-primary transition-colors">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/blog" className="hover:text-lumina-primary transition-colors">Blog</Link>
          <span className="mx-2">›</span>
          <span className="text-lumina-text font-bold">Ultimate Guide to Dermaplaning</span>
        </nav>

        {/* Article Header */}
        <header className="mb-12 relative z-10">
          <div className="text-sm text-lumina-primary font-bold mb-4 uppercase tracking-wide font-heading">TREATMENT GUIDES</div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-lumina-text leading-tight">The Ultimate Guide to Dermaplaning: What You Need to Know</h1>
          <div className="flex items-center text-sm text-lumina-text/60 mb-8 font-medium">
            <span>Published December 15, 2024</span>
            <span className="mx-3 text-lumina-primary">•</span>
            <span>5 min read</span>
            <span className="mx-3 text-lumina-primary">•</span>
            <span>By The GLO Alchemist Team</span>
          </div>
          <div className="relative w-full h-64 md:h-96 rounded-3xl overflow-hidden shadow-2xl mb-12 border border-lumina-primary/20">
            <Image
              src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=1200"
              alt="Woman enjoying natural skincare treatment - representing the natural approach to dermaplaning"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              priority
            />
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none relative z-10 prose-headings:font-heading prose-headings:text-lumina-text prose-p:text-lumina-text/80 prose-strong:text-lumina-text prose-li:text-lumina-text/80">
          <div className="glass rounded-3xl p-8 md:p-12 border border-lumina-primary/10">
            <p className="text-xl text-lumina-text font-medium leading-relaxed mb-8">
              Dermaplaning has become one of the most popular facial treatments, and for good reason. This gentle yet effective exfoliation method delivers immediate results, making it perfect for Colorado residents dealing with dry, dull skin from our unique high-altitude climate.
            </p>

            <h2 className="text-2xl font-bold text-lumina-primary mt-12 mb-6 font-heading">What is Dermaplaning?</h2>
            <p className="mb-6 leading-relaxed">
              Dermaplaning is a professional exfoliation treatment that uses a sterile surgical scalpel to gently remove dead skin cells and vellus hair (commonly known as &ldquo;peach fuzz&rdquo;) from the face. This non-invasive procedure reveals smoother, brighter skin and allows skincare products to penetrate more effectively.
            </p>

            <h2 className="text-2xl font-bold text-lumina-primary mt-12 mb-6 font-heading">Why Dermaplaning Works So Well in Colorado</h2>
            <p className="mb-6 leading-relaxed">
              Colorado&apos;s high altitude and low humidity create unique challenges for skin health. The dry air and intense UV exposure at elevation can leave skin feeling rough, flaky, and dull. Dermaplaning addresses these specific concerns by:
            </p>
            <ul className="list-none space-y-4 ml-0 mb-8">
              <li className="flex items-start">
                <span className="text-lumina-primary mr-3 mt-1 text-lg">•</span>
                <span>Removing the buildup of dead skin cells that accumulate faster in dry climates</span>
              </li>
              <li className="flex items-start">
                <span className="text-lumina-primary mr-3 mt-1 text-lg">•</span>
                <span>Allowing moisturizers to penetrate deeper, combating altitude-induced dehydration</span>
              </li>
              <li className="flex items-start">
                <span className="text-lumina-primary mr-3 mt-1 text-lg">•</span>
                <span>Creating a smooth canvas that reflects light better, counteracting dullness</span>
              </li>
              <li className="flex items-start">
                <span className="text-lumina-primary mr-3 mt-1 text-lg">•</span>
                <span>Preparing skin to better absorb SPF products, crucial for UV protection</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-lumina-primary mt-12 mb-6 font-heading">The Dermaplaning Process: What to Expect</h2>
            <p className="mb-6 leading-relaxed">
              During your dermaplaning treatment at The GLO Alchemist, here&apos;s what you can expect:
            </p>
            <ol className="list-decimal list-inside space-y-4 ml-4 mb-8 text-lumina-text/80 marker:text-lumina-primary marker:font-bold">
              <li><strong className="text-lumina-text">Consultation:</strong> We assess your skin type and discuss your goals</li>
              <li><strong className="text-lumina-text">Cleansing:</strong> Your skin is thoroughly cleansed and prepped</li>
              <li><strong className="text-lumina-text">Treatment:</strong> Using gentle, feathering strokes, we remove dead skin and hair</li>
              <li><strong className="text-lumina-text">Soothing Care:</strong> A calming serum or mask is applied</li>
              <li><strong className="text-lumina-text">Protection:</strong> SPF is applied to protect your newly revealed skin</li>
            </ol>

            <h2 className="text-2xl font-bold text-lumina-primary mt-12 mb-6 font-heading">Immediate and Long-Term Benefits</h2>
            <p className="mb-6 leading-relaxed">
              One of the most appealing aspects of dermaplaning is the immediate gratification. Right after treatment, you&apos;ll notice:
            </p>
            <ul className="list-none space-y-4 ml-0 mb-8">
              <li className="flex items-start">
                <span className="text-lumina-primary mr-3 mt-1 text-lg">•</span>
                <span>Instantly smoother skin texture</span>
              </li>
              <li className="flex items-start">
                <span className="text-lumina-primary mr-3 mt-1 text-lg">•</span>
                <span>Brighter, more radiant complexion</span>
              </li>
              <li className="flex items-start">
                <span className="text-lumina-primary mr-3 mt-1 text-lg">•</span>
                <span>Makeup applies more smoothly and evenly</span>
              </li>
              <li className="flex items-start">
                <span className="text-lumina-primary mr-3 mt-1 text-lg">•</span>
                <span>Skincare products absorb better</span>
              </li>
            </ul>
            <p className="mb-8 leading-relaxed">
              With regular treatments every 3-4 weeks, you&apos;ll also see long-term improvements in skin tone, reduced appearance of fine lines, and overall skin health.
            </p>

            <h2 className="text-2xl font-bold text-lumina-primary mt-12 mb-6 font-heading">Post-Treatment Care</h2>
            <p className="mb-6 leading-relaxed">
              Proper aftercare is essential for maintaining your results and protecting your newly exfoliated skin:
            </p>
            <ul className="list-none space-y-4 ml-0 mb-8">
              <li className="flex items-start">
                <span className="text-lumina-primary mr-3 mt-1 text-lg">•</span>
                <span>Avoid direct sun exposure for 24-48 hours</span>
              </li>
              <li className="flex items-start">
                <span className="text-lumina-primary mr-3 mt-1 text-lg">•</span>
                <span>Use a gentle, hydrating cleanser</span>
              </li>
              <li className="flex items-start">
                <span className="text-lumina-primary mr-3 mt-1 text-lg">•</span>
                <span>Apply a rich moisturizer to combat Colorado&apos;s dry air</span>
              </li>
              <li className="flex items-start">
                <span className="text-lumina-primary mr-3 mt-1 text-lg">•</span>
                <span>Use SPF 30+ daily (especially important at altitude)</span>
              </li>
              <li className="flex items-start">
                <span className="text-lumina-primary mr-3 mt-1 text-lg">•</span>
                <span>Avoid harsh scrubs or active ingredients for 2-3 days</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-lumina-primary mt-12 mb-6 font-heading">Common Myths Debunked</h2>
            <div className="bg-lumina-bg/50 border-l-4 border-lumina-primary p-6 my-8 rounded-r-xl">
              <h3 className="font-bold text-lumina-text mb-3 font-heading">Myth: Hair will grow back thicker and darker</h3>
              <p className="text-lumina-text/80 leading-relaxed">
                <strong className="text-lumina-text">Truth:</strong> This is completely false. Vellus hair (peach fuzz) will grow back at exactly the same rate, color, and texture as before. Dermaplaning does not change the hair follicle structure.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-lumina-primary mt-12 mb-6 font-heading">Is Dermaplaning Right for You?</h2>
            <p className="mb-6 leading-relaxed">
              Dermaplaning is suitable for most skin types and is particularly beneficial for:
            </p>
            <ul className="list-none space-y-4 ml-0 mb-8">
              <li className="flex items-start">
                <span className="text-lumina-primary mr-3 mt-1 text-lg">•</span>
                <span>Dry or dehydrated skin (common in Colorado)</span>
              </li>
              <li className="flex items-start">
                <span className="text-lumina-primary mr-3 mt-1 text-lg">•</span>
                <span>Dull or uneven skin tone</span>
              </li>
              <li className="flex items-start">
                <span className="text-lumina-primary mr-3 mt-1 text-lg">•</span>
                <span>Fine lines and mild texture issues</span>
              </li>
              <li className="flex items-start">
                <span className="text-lumina-primary mr-3 mt-1 text-lg">•</span>
                <span>Those wanting better makeup application</span>
              </li>
              <li className="flex items-start">
                <span className="text-lumina-primary mr-3 mt-1 text-lg">•</span>
                <span>Anyone seeking immediate skin improvement</span>
              </li>
            </ul>
            <p className="mb-8 leading-relaxed">
              However, dermaplaning is not recommended for those with active acne, inflamed skin, or certain skin conditions. A consultation with our licensed aestheticians will determine if it&apos;s right for you.
            </p>

            <h2 className="text-2xl font-bold text-lumina-primary mt-12 mb-6 font-heading">Ready to Experience Dermaplaning?</h2>
            <p className="mb-6 leading-relaxed">
              At The GLO Alchemist, our experienced aestheticians understand how Colorado&apos;s unique climate affects your skin. We customize each dermaplaning treatment to address your specific needs and skin goals.
            </p>
          </div>
        </article>

        {/* Call to Action */}
        <div className="mt-16 glass-strong rounded-3xl p-10 text-center border border-lumina-primary/20 relative z-10">
          <h2 className="text-3xl font-heading font-bold mb-6 text-lumina-text">Ready to Try Dermaplaning?</h2>
          <p className="text-lumina-text/80 mb-8 max-w-2xl mx-auto font-medium text-lg leading-relaxed">
            Experience the immediate benefits of professional dermaplaning at The GLO Alchemist.
            Book your consultation today and discover why this treatment is perfect for Colorado skin.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="https://thegloalchemist.myaestheticrecord.com/online-booking"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-lumina-primary text-lumina-bg font-heading font-bold rounded-full hover:bg-lumina-text hover:text-lumina-bg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border border-lumina-primary"
            >
              Book Consultation
            </a>
            <a
              href="tel:3035063582"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-lumina-text font-heading font-bold rounded-full hover:bg-lumina-primary hover:text-lumina-bg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border-2 border-lumina-text hover:border-lumina-primary"
            >
              Call (303) 506-3582
            </a>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16 relative z-10">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center text-lumina-text">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-lumina-primary/10 hover:border-lumina-primary/30 group">
              <h3 className="font-heading font-bold text-xl mb-3 text-lumina-text group-hover:text-lumina-primary transition-colors">Chemical Peels vs. Microneedling</h3>
              <p className="text-lumina-text/70 text-sm mb-6 font-medium leading-relaxed">Compare popular treatments and find the right one for your skin goals.</p>
              <Link href="/blog/chemical-peels-vs-microneedling" className="text-lumina-primary hover:text-lumina-text font-bold text-sm transition-colors flex items-center">
                Read More <span className="ml-2">→</span>
              </Link>
            </div>
            <div className="glass rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-lumina-primary/10 hover:border-lumina-primary/30 group">
              <h3 className="font-heading font-bold text-xl mb-3 text-lumina-text group-hover:text-lumina-primary transition-colors">Winter Skin Care in Colorado</h3>
              <p className="text-lumina-text/70 text-sm mb-6 font-medium leading-relaxed">Protect your skin from Colorado&apos;s harsh winter conditions.</p>
              <Link href="/blog/winter-skincare-colorado" className="text-lumina-primary hover:text-lumina-text font-bold text-sm transition-colors flex items-center">
                Read More <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      {/* Article Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          '@id': 'https://thegloalchemist.com/blog/ultimate-guide-dermaplaning#article',
          headline: 'The Ultimate Guide to Dermaplaning: What You Need to Know',
          description: 'Complete guide to dermaplaning treatment: benefits, process, aftercare, and why it\'s perfect for Colorado\'s dry climate.',
          image: 'https://thegloalchemist.com/blog/dermaplaning-guide.jpg',
          author: {
            '@type': 'Organization',
            name: 'The GLO Alchemist',
            url: 'https://thegloalchemist.com'
          },
          publisher: {
            '@type': 'Organization',
            name: 'The GLO Alchemist',
            logo: {
              '@type': 'ImageObject',
              url: 'https://thegloalchemist.com/logo.png'
            }
          },
          datePublished: '2024-12-15',
          dateModified: '2024-12-15',
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': 'https://thegloalchemist.com/blog/ultimate-guide-dermaplaning'
          }
        }),
      }} />
    </div>
  );
}