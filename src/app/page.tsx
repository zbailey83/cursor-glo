import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import { neighborhoods } from '../data/neighborhoods';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

// Lazy load components below the fold
const ServiceOverview = dynamic(() => import('../components/ServiceOverview'), {
  loading: () => <div className="h-96 bg-lumina-subtle animate-pulse rounded-lg" />
});
const About = dynamic(() => import('../components/About'), {
  loading: () => <div className="h-64 bg-lumina-subtle animate-pulse rounded-lg" />
});

const GoogleMap = dynamic(() => import('../components/GoogleMap'), {
  loading: () => <div className="h-64 bg-lumina-subtle animate-pulse rounded-lg" />
});

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-lumina-bg font-body text-lumina-text selection:bg-lumina-primary selection:text-lumina-bg">
      <Header />
      <main className="flex-1">
        <Hero />
        <Suspense fallback={<div className="h-96 bg-lumina-subtle animate-pulse rounded-3xl mx-4" />}>
          <ServiceOverview />
        </Suspense>
        <Suspense fallback={<div className="h-64 bg-lumina-subtle animate-pulse rounded-3xl mx-4" />}>
          <About />
        </Suspense>

        <Suspense fallback={<div className="h-64 bg-lumina-subtle animate-pulse rounded-3xl mx-4" />}>
          <GoogleMap />
        </Suspense>
      </main>

      {/* Social Proof Section */}
      <section className="w-full py-20 bg-lumina-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-lumina-text">Trusted by Colorado Residents</h2>
          <p className="text-xl text-lumina-text/80 mb-16 max-w-4xl mx-auto font-medium leading-relaxed">
            Join hundreds of satisfied clients who have transformed their skin with our professional treatments
          </p>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="glass p-10 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:scale-105 border border-lumina-primary/20">
              <div className="text-6xl font-heading font-bold text-lumina-primary mb-4">500+</div>
              <div className="text-xl font-bold text-lumina-text">Happy Clients</div>
              <div className="text-lumina-text/70 mt-3 font-medium">Satisfied customers across Denver metro</div>
            </div>
            <div className="glass p-10 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:scale-105 border border-lumina-primary/20">
              <div className="text-6xl font-heading font-bold text-lumina-primary mb-4">4.9★</div>
              <div className="text-xl font-bold text-lumina-text">Average Rating</div>
              <div className="text-lumina-text/70 mt-3 font-medium">Based on verified reviews</div>
            </div>
            <div className="glass p-10 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:scale-105 border border-lumina-primary/20">
              <div className="text-6xl font-heading font-bold text-lumina-primary mb-4">5+</div>
              <div className="text-xl font-bold text-lumina-text">Years Experience</div>
              <div className="text-lumina-text/70 mt-3 font-medium">Professional aesthetic services</div>
            </div>
          </div>

          {/* Client Reviews */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass p-8 rounded-3xl border-l-4 border-lumina-primary hover:bg-white/10 transition-all duration-300 hover:scale-105 text-left">
              <div className="flex items-center mb-6">
                <div className="text-lumina-primary text-xl font-black">★★★★★</div>
                <span className="ml-4 font-bold text-lumina-text text-lg font-heading">Sarah M.</span>
              </div>
              <p className="text-lumina-text/80 leading-relaxed font-medium">&ldquo;Amazing dermaplaning results! My skin has never felt smoother. The staff is professional and knowledgeable.&rdquo;</p>
            </div>
            <div className="glass p-8 rounded-3xl border-l-4 border-lumina-primary hover:bg-white/10 transition-all duration-300 hover:scale-105 text-left">
              <div className="flex items-center mb-6">
                <div className="text-lumina-primary text-xl font-black">★★★★★</div>
                <span className="ml-4 font-bold text-lumina-text text-lg font-heading">Jennifer L.</span>
              </div>
              <p className="text-lumina-text/80 leading-relaxed font-medium">&ldquo;The chemical peel exceeded my expectations. My skin looks years younger and the results keep improving!&rdquo;</p>
            </div>
            <div className="glass p-8 rounded-3xl border-l-4 border-lumina-primary hover:bg-white/10 transition-all duration-300 hover:scale-105 text-left">
              <div className="flex items-center mb-6">
                <div className="text-lumina-primary text-xl font-black">★★★★★</div>
                <span className="ml-4 font-bold text-lumina-text text-lg font-heading">Michelle R.</span>
              </div>
              <p className="text-lumina-text/80 leading-relaxed font-medium">&ldquo;Best laser hair removal experience! Professional, clean facility and excellent results. Highly recommend!&rdquo;</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-16">
            <Link
              href="https://thegloalchemist.myaestheticrecord.com/online-booking"
              className="inline-flex items-center justify-center px-12 py-5 bg-lumina-primary text-lumina-bg font-heading font-bold text-xl rounded-full hover:bg-white hover:text-lumina-text transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 border border-lumina-primary"
            >
              Book Your Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="w-full py-20 bg-lumina-bg relative">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-lumina-text">Serving the Denver Metro Area</h2>
          <p className="text-xl text-lumina-text/80 mb-16 max-w-4xl mx-auto font-medium leading-relaxed">
            Conveniently located in Littleton, we proudly serve clients throughout the Denver metro area
            with professional skin care and aesthetic treatments.
          </p>
          <div className="glass p-12 rounded-3xl shadow-xl border border-lumina-primary/10">
            <div className="mb-12">
              <h3 className="text-3xl font-heading font-bold mb-4 text-lumina-text">Serving the Denver Metro Area</h3>
              <p className="text-lg text-lumina-text/80 font-medium leading-relaxed max-w-3xl mx-auto">
                Conveniently located in Littleton, we proudly serve clients throughout the Denver metro area with professional skin care and aesthetic treatments.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {/* Special button for Littleton - Main Location */}
              <div className="inline-flex flex-col items-center justify-center text-center">
                <div className="inline-flex items-center justify-center px-6 py-4 bg-lumina-subtle text-lumina-text/50 font-black rounded-full shadow-lg cursor-not-allowed relative border border-lumina-text/10">
                  <span className="relative">
                    Littleton
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-lumina-primary text-lumina-bg text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                      Main Location
                    </div>
                  </span>
                </div>
                <p className="text-sm text-lumina-text/70 font-medium mt-2">Our clinic is located here</p>
              </div>

              {/* Other neighborhood buttons */}
              {neighborhoods.filter(n => n !== 'littleton').map(n => (
                <Link
                  key={n}
                  href={`/neighborhood/${n}`}
                  className="flex items-center justify-center h-12 px-4 bg-lumina-primary text-lumina-bg font-bold text-sm rounded-lg hover:bg-white hover:text-lumina-primary border border-transparent hover:border-lumina-primary transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  {n.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
                </Link>
              ))}
            </div>
            <div className="glass-strong rounded-2xl p-8 shadow-lg">
              <p className="text-lumina-text mb-6 font-medium text-lg">
                <span className="font-bold text-lumina-primary">Don&apos;t see your area?</span> We may still be able to serve you!
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  href="tel:3035063582"
                  className="inline-flex items-center justify-center px-8 py-4 bg-lumina-text text-lumina-bg font-heading font-bold text-lg rounded-full hover:bg-lumina-primary transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Call (303) 506-3582
                </a>
                <Link
                  href="https://thegloalchemist.myaestheticrecord.com/online-booking"
                  className="inline-flex items-center justify-center px-8 py-4 bg-lumina-primary text-lumina-bg font-heading font-bold text-lg rounded-full hover:bg-white hover:text-lumina-primary border border-transparent hover:border-lumina-primary transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Book Online
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="w-full py-20 bg-lumina-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-lumina-text">Skin Care Education & Tips</h2>
            <p className="text-xl text-lumina-text/80 max-w-4xl mx-auto font-medium leading-relaxed">
              Learn from our experts about treatments, skin care routines, and maintaining healthy skin in Colorado&apos;s unique climate.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <article className="glass rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-lumina-primary/20">
              <div className="h-56 bg-lumina-primary/10 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-lumina-primary/20 transform scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></div>
                <div className="text-center relative z-10">
                  <div className="text-5xl mb-3">✨</div>
                  <span className="text-lumina-text font-heading font-bold text-lg">Treatment Guide</span>
                </div>
              </div>
              <div className="p-8">
                <div className="text-sm text-lumina-primary font-bold mb-3 uppercase tracking-wide font-heading">Treatment Guides</div>
                <h3 className="text-2xl font-bold mb-4 text-lumina-text leading-tight font-heading">The Ultimate Guide to Dermaplaning</h3>
                <p className="text-lumina-text/80 mb-6 leading-relaxed font-medium">Everything you need to know about this popular treatment, perfect for Colorado&apos;s dry climate.</p>
                <Link href="/blog/ultimate-guide-dermaplaning" className="inline-flex items-center text-lumina-primary hover:text-lumina-text font-bold transition-colors duration-200">
                  Read More
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
            <article className="glass rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-lumina-primary/20">
              <div className="h-56 bg-lumina-primary/10 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-lumina-primary/20 transform scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></div>
                <div className="text-center relative z-10">
                  <div className="text-5xl mb-3">❄️</div>
                  <span className="text-lumina-text font-heading font-bold text-lg">Seasonal Care</span>
                </div>
              </div>
              <div className="p-8">
                <div className="text-sm text-lumina-primary font-bold mb-3 uppercase tracking-wide font-heading">Seasonal Care</div>
                <h3 className="text-2xl font-bold mb-4 text-lumina-text leading-tight font-heading">Winter Skin Care in Colorado</h3>
                <p className="text-lumina-text/80 mb-6 leading-relaxed font-medium">Protect your skin from Colorado&apos;s harsh winter conditions with professional treatments.</p>
                <Link href="/blog/winter-skincare-colorado" className="inline-flex items-center text-lumina-primary hover:text-lumina-text font-bold transition-colors duration-200">
                  Read More
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
            <article className="glass rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-lumina-primary/20">
              <div className="h-56 bg-lumina-primary/10 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-lumina-primary/20 transform scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></div>
                <div className="text-center relative z-10">
                  <div className="text-5xl mb-3">🌟</div>
                  <span className="text-lumina-text font-heading font-bold text-lg">First-Time Guide</span>
                </div>
              </div>
              <div className="p-8">
                <div className="text-sm text-lumina-primary font-bold mb-3 uppercase tracking-wide font-heading">First-Time Guide</div>
                <h3 className="text-2xl font-bold mb-4 text-lumina-text leading-tight font-heading">Preparing for Your First Facial</h3>
                <p className="text-lumina-text/80 mb-6 leading-relaxed font-medium">Everything you need to know before your first professional facial treatment.</p>
                <Link href="/blog/first-facial-guide" className="inline-flex items-center text-lumina-primary hover:text-lumina-text font-bold transition-colors duration-200">
                  Read More
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          </div>
          <div className="text-center">
            <Link href="/blog" className="inline-flex items-center justify-center px-12 py-5 bg-lumina-primary text-lumina-bg font-heading font-bold text-xl rounded-full hover:bg-white hover:text-lumina-text transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 border border-lumina-primary">
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}