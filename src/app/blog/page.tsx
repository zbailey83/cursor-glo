import { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Skin Care Tips & Education | The GLO Alchemist Blog',
  description: 'Expert skin care advice, treatment guides, and beauty tips from The GLO Alchemist professionals. Learn about dermaplaning, chemical peels, facials, and more.',
  openGraph: {
    title: 'Skin Care Tips & Education | The GLO Alchemist Blog',
    description: 'Expert skin care advice, treatment guides, and beauty tips from The GLO Alchemist professionals. Learn about dermaplaning, chemical peels, facials, and more.',
    url: 'https://thegloalchemist.com/blog',
    siteName: 'The GLO Alchemist',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://thegloalchemist.com/blog',
  },
};

const blogPosts = [
  {
    title: 'The Ultimate Guide to Dermaplaning: What You Need to Know',
    slug: 'ultimate-guide-dermaplaning',
    excerpt: 'Discover everything about dermaplaning, from benefits to aftercare. Learn why this treatment is perfect for Colorado\'s dry climate.',
    category: 'Treatment Guides',
    readTime: '5 min read',
    publishDate: '2024-12-15',
    image: '/blog/dermaplaning-guide.jpg'
  },
  {
    title: 'Chemical Peels vs. Microneedling: Which Treatment is Right for You?',
    slug: 'chemical-peels-vs-microneedling',
    excerpt: 'Compare two popular skin rejuvenation treatments and find out which one addresses your specific skin concerns.',
    category: 'Treatment Comparison',
    readTime: '7 min read',
    publishDate: '2024-12-10',
    image: '/blog/peels-vs-microneedling.jpg'
  },
  {
    title: 'Winter Skin Care in Colorado: Protecting Your Skin at High Altitude',
    slug: 'winter-skincare-colorado',
    excerpt: 'Learn how Colorado\'s unique climate affects your skin and discover professional treatments that combat dryness and UV damage.',
    category: 'Seasonal Care',
    readTime: '6 min read',
    publishDate: '2024-12-05',
    image: '/blog/winter-skincare.jpg'
  },
  {
    title: 'Preparing for Your First Facial: A Complete Guide',
    slug: 'first-facial-guide',
    excerpt: 'Everything you need to know before your first professional facial, including what to expect and how to prepare.',
    category: 'First-Time Guide',
    readTime: '4 min read',
    publishDate: '2024-11-28',
    image: '/blog/first-facial.jpg'
  },
  {
    title: 'The Science Behind Microneedling: How It Transforms Your Skin',
    slug: 'science-behind-microneedling',
    excerpt: 'Understand the biological processes that make microneedling so effective for acne scars, fine lines, and skin texture.',
    category: 'Science & Education',
    readTime: '8 min read',
    publishDate: '2024-11-20',
    image: '/blog/microneedling-science.jpg'
  },
  {
    title: 'Post-Treatment Care: Maximizing Your Results',
    slug: 'post-treatment-care-guide',
    excerpt: 'Essential aftercare tips to ensure the best results from your skin treatments and maintain healthy, glowing skin.',
    category: 'Aftercare',
    readTime: '5 min read',
    publishDate: '2024-11-15',
    image: '/blog/aftercare-guide.jpg'
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-lumina-bg font-body text-lumina-text">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto py-20 px-4 relative">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>
        
        {/* Blog Header */}
        <div className="text-center mb-16 relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-lumina-text">Skin Care Education & Tips</h1>
          <div className="w-32 h-2 bg-lumina-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-lumina-text/80 max-w-3xl mx-auto font-medium leading-relaxed">
            Expert advice from The GLO Alchemist professionals. Learn about treatments, skin care routines,
            and how to maintain healthy, radiant skin in Colorado&apos;s unique climate.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16 relative z-10">
          <div className="glass rounded-3xl shadow-xl overflow-hidden border border-lumina-primary/20 hover:shadow-2xl transition-all duration-300">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="h-64 md:h-full bg-lumina-primary/10 flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-lumina-primary/20 transform scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></div>
                  <span className="text-lumina-text/60 font-heading font-bold relative z-10">Featured Image</span>
                </div>
              </div>
              <div className="md:w-1/2 p-10 flex flex-col justify-center">
                <div className="text-sm text-lumina-primary font-bold mb-3 uppercase tracking-wide font-heading">FEATURED POST</div>
                <h2 className="text-3xl font-heading font-bold mb-4 text-lumina-text">{blogPosts[0].title}</h2>
                <p className="text-lumina-text/80 mb-6 font-medium leading-relaxed">{blogPosts[0].excerpt}</p>
                <div className="flex items-center justify-between text-sm text-lumina-text/60 mb-8 font-medium">
                  <span>{blogPosts[0].category}</span>
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <Link
                  href={`/blog/${blogPosts[0].slug}`}
                  className="inline-flex items-center justify-center px-8 py-3 bg-lumina-primary text-lumina-bg font-heading font-bold rounded-full hover:bg-lumina-text hover:text-lumina-bg transition-all duration-300 shadow-lg hover:shadow-xl w-fit"
                >
                  Read Full Article
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Categories */}
        <div className="mb-12 relative z-10">
          <h2 className="text-2xl font-heading font-bold mb-6 text-center text-lumina-text">Browse by Category</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['All Posts', 'Treatment Guides', 'Seasonal Care', 'Science & Education', 'Aftercare'].map(category => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-lumina-primary/30 text-lumina-text font-medium hover:bg-lumina-primary hover:text-lumina-bg transition-all duration-300 glass"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 relative z-10">
          {blogPosts.slice(1).map(post => (
            <article key={post.slug} className="glass rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-lumina-primary/20 flex flex-col">
              <div className="h-48 bg-lumina-primary/5 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-lumina-primary/10 transform scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></div>
                <span className="text-lumina-text/40 font-heading font-bold text-sm relative z-10">Article Image</span>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="text-xs text-lumina-primary font-bold mb-3 uppercase tracking-wide font-heading">{post.category}</div>
                <h3 className="text-xl font-heading font-bold mb-3 text-lumina-text line-clamp-2">{post.title}</h3>
                <p className="text-lumina-text/70 mb-6 line-clamp-3 font-medium text-sm flex-1">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-lumina-text/50 mb-4 font-medium">
                  <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                  <span>{post.readTime}</span>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-lumina-primary hover:text-lumina-text font-bold transition-colors duration-200 inline-flex items-center text-sm"
                >
                  Read More 
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 glass-strong rounded-3xl shadow-xl p-10 text-center border border-lumina-primary/20 relative z-10">
          <h2 className="text-3xl font-heading font-bold mb-4 text-lumina-text">Stay Updated with Skin Care Tips</h2>
          <p className="text-lumina-text/80 mb-8 max-w-2xl mx-auto font-medium">
            Get the latest skin care advice, treatment updates, and exclusive offers delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full border border-lumina-primary/30 bg-white/50 focus:outline-none focus:ring-2 focus:ring-lumina-primary text-lumina-text placeholder-lumina-text/50"
            />
            <button className="px-8 py-3 bg-lumina-primary text-lumina-bg font-heading font-bold rounded-full hover:bg-lumina-text hover:text-lumina-bg transition-all duration-300 shadow-lg hover:shadow-xl">
              Subscribe
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}