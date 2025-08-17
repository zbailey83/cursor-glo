import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import { neighborhoods } from '../data/neighborhoods';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

// Lazy load components below the fold
const ServiceOverview = dynamic(() => import('../components/ServiceOverview'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg" />
});
const About = dynamic(() => import('../components/About'), {
  loading: () => <div className="h-64 bg-gray-100 animate-pulse rounded-lg" />
});
const GoogleMap = dynamic(() => import('../components/GoogleMap'), {
  loading: () => <div className="h-64 bg-gray-100 animate-pulse rounded-lg" />
});

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse rounded-lg mx-4" />}>
          <ServiceOverview />
        </Suspense>
        <Suspense fallback={<div className="h-64 bg-gray-100 animate-pulse rounded-lg mx-4" />}>
          <About />
        </Suspense>
        <Suspense fallback={<div className="h-64 bg-gray-100 animate-pulse rounded-lg mx-4" />}>
          <GoogleMap />
        </Suspense>
      </main>

      {/* Social Proof Section */}
      <section className="w-full py-16 bg-gradient-to-br from-yellow-50 via-white to-pink-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-orange-800">Trusted by Colorado Residents</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Join hundreds of satisfied clients who have transformed their skin with our professional treatments
          </p>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-yellow-100 via-white to-yellow-200 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
              <div className="text-5xl font-bold text-pink-600 mb-3">500+</div>
              <div className="text-lg font-semibold text-gray-700">Happy Clients</div>
              <div className="text-sm text-gray-600 mt-2">Satisfied customers across Denver metro</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-100 via-white to-yellow-200 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
              <div className="text-5xl font-bold text-pink-600 mb-3">4.9★</div>
              <div className="text-lg font-semibold text-gray-700">Average Rating</div>
              <div className="text-sm text-gray-600 mt-2">Based on verified reviews</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-100 via-white to-yellow-200 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
              <div className="text-5xl font-bold text-pink-600 mb-3">5+</div>
              <div className="text-lg font-semibold text-gray-700">Years Experience</div>
              <div className="text-sm text-gray-600 mt-2">Professional aesthetic services</div>
            </div>
          </div>

          {/* Client Reviews */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-yellow-100 via-white to-yellow-200 rounded-2xl shadow-xl p-6 border-l-4 border-pink-400 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-lg">★★★★★</div>
                <span className="ml-3 font-semibold text-gray-800">Sarah M.</span>
              </div>
              <p className="text-gray-700 leading-relaxed">&ldquo;Amazing dermaplaning results! My skin has never felt smoother. The staff is professional and knowledgeable.&rdquo;</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-100 via-white to-yellow-200 rounded-2xl shadow-xl p-6 border-l-4 border-pink-400 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-lg">★★★★★</div>
                <span className="ml-3 font-semibold text-gray-800">Jennifer L.</span>
              </div>
              <p className="text-gray-700 leading-relaxed">&ldquo;The chemical peel exceeded my expectations. My skin looks years younger and the results keep improving!&rdquo;</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-100 via-white to-yellow-200 rounded-2xl shadow-xl p-6 border-l-4 border-pink-400 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-lg">★★★★★</div>
                <span className="ml-3 font-semibold text-gray-800">Michelle R.</span>
              </div>
              <p className="text-gray-700 leading-relaxed">&ldquo;Best laser hair removal experience! Professional, clean facility and excellent results. Highly recommend!&rdquo;</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-12">
            <Link
              href="https://thegloalchemist.myaestheticrecord.com/online-booking"
              className="btn-thermal text-white rounded-full px-10 py-4 text-lg font-semibold inline-block hover:scale-105 transition-transform duration-200"
            >
              Book Your Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-orange-800">Serving the Denver Metro Area</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto">
            Conveniently located in Littleton, we proudly serve clients throughout the Denver metro area
            with professional skin care and aesthetic treatments.
          </p>
          <div className="bg-gradient-to-br from-yellow-100 via-white to-yellow-200 rounded-2xl shadow-xl p-10">
            <h3 className="text-2xl font-bold mb-8 text-orange-800">Areas We Serve</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {neighborhoods.map(n => (
                <Link
                  key={n}
                  href={`/neighborhood/${n}`}
                  className="btn-thermal text-white text-sm px-6 py-4 rounded-xl hover:scale-105 transition-all duration-200 text-center block font-semibold shadow-lg hover:shadow-xl"
                >
                  {n.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
                </Link>
              ))}
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <p className="text-gray-700 mb-4">
                <span className="font-semibold text-orange-800">Don&apos;t see your area?</span> We may still be able to serve you!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:3035063582"
                  className="btn-thermal text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-200"
                >
                  Call (303) 506-3582
                </a>
                <Link
                  href="https://thegloalchemist.myaestheticrecord.com/online-booking"
                  className="btn-thermal text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-200"
                >
                  Book Online
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="w-full py-16 bg-gradient-to-br from-pink-50 via-white to-yellow-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-orange-800">Skin Care Education & Tips</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Learn from our experts about treatments, skin care routines, and maintaining healthy skin in Colorado&apos;s unique climate.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <article className="bg-gradient-to-br from-yellow-100 via-white to-yellow-200 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-yellow-200 to-pink-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">✨</div>
                  <span className="text-gray-600 font-medium">Treatment Guide</span>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-pink-600 font-bold mb-2 uppercase tracking-wide">Treatment Guides</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 leading-tight">The Ultimate Guide to Dermaplaning</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">Everything you need to know about this popular treatment, perfect for Colorado&apos;s dry climate.</p>
                <Link href="/blog/ultimate-guide-dermaplaning" className="inline-flex items-center text-pink-600 hover:text-pink-800 font-semibold transition-colors duration-200">
                  Read More
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
            <article className="bg-gradient-to-br from-yellow-100 via-white to-yellow-200 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-pink-200 to-orange-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">❄️</div>
                  <span className="text-gray-600 font-medium">Seasonal Care</span>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-pink-600 font-bold mb-2 uppercase tracking-wide">Seasonal Care</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 leading-tight">Winter Skin Care in Colorado</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">Protect your skin from Colorado&apos;s harsh winter conditions with professional treatments.</p>
                <Link href="/blog/winter-skincare-colorado" className="inline-flex items-center text-pink-600 hover:text-pink-800 font-semibold transition-colors duration-200">
                  Read More
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
            <article className="bg-gradient-to-br from-yellow-100 via-white to-yellow-200 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-orange-200 to-yellow-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🌟</div>
                  <span className="text-gray-600 font-medium">First-Time Guide</span>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-pink-600 font-bold mb-2 uppercase tracking-wide">First-Time Guide</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 leading-tight">Preparing for Your First Facial</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">Everything you need to know before your first professional facial treatment.</p>
                <Link href="/blog/first-facial-guide" className="inline-flex items-center text-pink-600 hover:text-pink-800 font-semibold transition-colors duration-200">
                  Read More
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          </div>
          <div className="text-center">
            <Link href="/blog" className="btn-thermal text-white rounded-xl px-10 py-4 text-lg font-semibold inline-block hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl">
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}