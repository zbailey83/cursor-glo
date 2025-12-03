import { Metadata } from 'next';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Winter Skin Care in Colorado: Essential Tips & Treatments | The GLO Alchemist',
    description: 'Learn how to protect your skin from Colorado\'s harsh winter climate. Expert tips on hydration, sun protection, and the best professional treatments for winter skin.',
    openGraph: {
        title: 'Winter Skin Care in Colorado: Essential Tips & Treatments',
        description: 'Learn how to protect your skin from Colorado\'s harsh winter climate. Expert tips on hydration, sun protection, and the best professional treatments for winter skin.',
        url: 'https://thegloalchemist.com/blog/winter-skincare-colorado',
        siteName: 'The GLO Alchemist',
        locale: 'en_US',
        type: 'article',
    },
    alternates: {
        canonical: 'https://thegloalchemist.com/blog/winter-skincare-colorado',
    },
};

export default function WinterSkincarePage() {
    return (
        <div className="min-h-screen flex flex-col bg-lumina-bg font-body text-lumina-text">
            <Header />

            <main className="flex-1 max-w-4xl mx-auto py-20 px-4 relative">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>

                {/* Hero Section */}
                <div className="text-center mb-16 relative z-10">
                    <div className="inline-block bg-lumina-primary/10 text-lumina-primary px-4 py-2 rounded-full text-sm font-bold mb-6 font-heading tracking-wide border border-lumina-primary/20">
                        Seasonal Care
                    </div>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold mb-8 text-lumina-text leading-tight">
                        Winter Skin Care in Colorado: Essential Tips & Treatments
                    </h1>
                    <p className="text-xl text-lumina-text/80 mb-8 max-w-3xl mx-auto font-medium leading-relaxed">
                        Protect your skin from the unique challenges of Colorado&apos;s high-altitude winter climate.
                    </p>
                    <div className="flex items-center justify-center space-x-4 text-lumina-text/60 font-medium">
                        <span>December 1, 2024</span>
                        <span className="text-lumina-primary">•</span>
                        <span>6 min read</span>
                    </div>
                </div>

                {/* Featured Image */}
                <div className="mb-16 relative z-10">
                    <div className="relative w-full h-64 md:h-96 rounded-3xl overflow-hidden shadow-2xl border border-lumina-primary/20">
                        <div className="absolute inset-0 bg-lumina-primary/20 z-10 mix-blend-overlay"></div>
                        <Image
                            src="/blog-imgs/blog-nature-woman.jpg"
                            alt="Woman in winter setting protecting skin"
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
                            Winter in Colorado is magical, but it can be brutal on your skin. The combination of low humidity, high altitude, cold temperatures, and indoor heating creates a perfect storm for dehydration and sensitivity. At The GLO Alchemist, we see many clients struggling with &ldquo;winter skin,&rdquo; but with the right approach, you can maintain a healthy glow all season long.
                        </p>
                    </div>

                    <h2 className="text-3xl font-heading font-bold text-lumina-primary mb-6">The Colorado Winter Challenge</h2>

                    <p className="text-lumina-text/80 font-medium leading-relaxed mb-8">
                        Why is Colorado winter so tough on skin? It comes down to moisture loss. The air here is already dry, but in winter, humidity levels drop even further. When you move between freezing outdoor air and dry, heated indoor air, your skin&apos;s barrier function is compromised, leading to:
                    </p>

                    <ul className="list-none space-y-4 ml-0 mb-8">
                        <li className="flex items-start">
                            <span className="text-lumina-primary mr-3 mt-1 text-lg">•</span>
                            <span>Increased dryness and flakiness</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-lumina-primary mr-3 mt-1 text-lg">•</span>
                            <span>Redness and sensitivity (rosacea often flares up)</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-lumina-primary mr-3 mt-1 text-lg">•</span>
                            <span>Dull, lackluster complexion</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-lumina-primary mr-3 mt-1 text-lg">•</span>
                            <span>More visible fine lines and wrinkles</span>
                        </li>
                    </ul>

                    <h2 className="text-3xl font-heading font-bold text-lumina-primary mb-6">Top Professional Treatments for Winter</h2>

                    <p className="text-lumina-text/80 font-medium leading-relaxed mb-8">
                        While home care is crucial, professional treatments can provide the deep hydration and restoration your skin craves during these months.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="glass rounded-3xl p-8 border border-lumina-primary/20 hover:border-lumina-primary/40 transition-colors">
                            <h4 className="text-xl font-heading font-bold text-lumina-text mb-4 flex items-center">
                                <span className="w-3 h-3 bg-lumina-primary rounded-full mr-3"></span>
                                Hydrating Facials
                            </h4>
                            <p className="text-lumina-text/80 font-medium leading-relaxed">
                                Our signature hydrating facials infuse moisture deep into the skin using professional-grade serums and masks that penetrate far better than home products.
                            </p>
                        </div>

                        <div className="glass rounded-3xl p-8 border border-lumina-primary/20 hover:border-lumina-primary/40 transition-colors">
                            <h4 className="text-xl font-heading font-bold text-lumina-text mb-4 flex items-center">
                                <span className="w-3 h-3 bg-lumina-primary rounded-full mr-3"></span>
                                Dermaplaning
                            </h4>
                            <p className="text-lumina-text/80 font-medium leading-relaxed">
                                By removing the layer of dead skin cells that builds up in dry weather, dermaplaning allows your moisturizers to actually reach your skin instead of sitting on top.
                            </p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-heading font-bold text-lumina-primary mb-6">Essential Home Care Tips</h2>

                    <div className="glass-strong rounded-3xl p-10 mb-12 border border-lumina-primary/20">
                        <ol className="space-y-6 text-lumina-text/80 font-medium list-decimal list-inside marker:text-lumina-primary marker:font-bold marker:text-xl">
                            <li className="pl-2">
                                <strong className="text-lumina-text text-lg block mb-2">Switch to a Creamier Cleanser</strong>
                                Gel and foam cleansers can strip natural oils. In winter, opt for a milk or cream cleanser that hydrates while it cleans.
                            </li>
                            <li className="pl-2">
                                <strong className="text-lumina-text text-lg block mb-2">Layer Your Hydration</strong>
                                Don&apos;t just rely on one heavy cream. Apply a hydrating serum (like Hyaluronic Acid) first, then seal it in with a rich moisturizer.
                            </li>
                            <li className="pl-2">
                                <strong className="text-lumina-text text-lg block mb-2">Don&apos;t Skip SPF!</strong>
                                Snow reflects up to 80% of UV rays, nearly doubling your exposure. Sunscreen is non-negotiable in Colorado, even in January.
                            </li>
                            <li className="pl-2">
                                <strong className="text-lumina-text text-lg block mb-2">Invest in a Humidifier</strong>
                                Running a humidifier in your bedroom can make a massive difference in how your skin feels when you wake up.
                            </li>
                        </ol>
                    </div>

                    <h2 className="text-3xl font-heading font-bold text-lumina-primary mb-6">When to See a Professional</h2>

                    <p className="text-lumina-text/80 font-medium leading-relaxed mb-8">
                        If your skin feels tight, itchy, or painful despite your best efforts at home, it&apos;s time to come in. These are signs of a compromised moisture barrier that needs professional repair. We can assess your skin and recommend a recovery plan to get you back to glowing.
                    </p>

                    <div className="glass-strong rounded-3xl p-10 mb-12 text-center border border-lumina-primary/20">
                        <h3 className="text-2xl font-heading font-bold text-lumina-text mb-4">Give Your Winter Skin Some Love</h3>
                        <p className="text-lumina-text/80 font-medium mb-8 max-w-2xl mx-auto">
                            Don&apos;t let winter dull your glow. Book a hydrating treatment today and feel the difference professional care makes.
                        </p>
                        <a
                            href="https://thegloalchemist.myaestheticrecord.com/online-booking"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-8 py-4 bg-lumina-primary text-lumina-bg font-heading font-bold text-lg rounded-full hover:bg-lumina-text hover:text-lumina-bg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border border-lumina-primary"
                        >
                            Book a Winter Facial
                        </a>
                    </div>
                </article>

                {/* Related Articles */}
                <div className="mt-16 pt-8 border-t border-lumina-primary/20 relative z-10">
                    <h3 className="text-2xl font-heading font-bold text-lumina-text mb-8 text-center">Related Articles</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        <Link href="/blog/ultimate-guide-dermaplaning" className="group">
                            <div className="glass rounded-3xl p-8 hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-lumina-primary/10 hover:border-lumina-primary/30">
                                <div className="text-sm text-lumina-primary font-bold mb-3 uppercase tracking-wide font-heading">Treatment Guide</div>
                                <h4 className="text-xl font-heading font-bold text-lumina-text mb-3 group-hover:text-lumina-primary transition-colors">
                                    The Ultimate Guide to Dermaplaning
                                </h4>
                                <p className="text-lumina-text/80 font-medium">
                                    Why this exfoliation treatment is a winter skin lifesaver.
                                </p>
                            </div>
                        </Link>

                        <Link href="/blog/chemical-peels-vs-microneedling" className="group">
                            <div className="glass rounded-3xl p-8 hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-lumina-primary/10 hover:border-lumina-primary/30">
                                <div className="text-sm text-lumina-primary font-bold mb-3 uppercase tracking-wide font-heading">Comparison</div>
                                <h4 className="text-xl font-heading font-bold text-lumina-text mb-3 group-hover:text-lumina-primary transition-colors">
                                    Chemical Peels vs. Microneedling
                                </h4>
                                <p className="text-lumina-text/80 font-medium">
                                    Find the right rejuvenation treatment for your skin goals.
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />

            {/* Schema Markup */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'BlogPosting',
                    headline: 'Winter Skin Care in Colorado: Essential Tips & Treatments',
                    description: 'Learn how to protect your skin from Colorado\'s harsh winter climate.',
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
                    datePublished: '2024-12-01',
                    dateModified: '2024-12-01',
                    mainEntityOfPage: {
                        '@type': 'WebPage',
                        '@id': 'https://thegloalchemist.com/blog/winter-skincare-colorado'
                    }
                }),
            }} />
        </div>
    );
}
