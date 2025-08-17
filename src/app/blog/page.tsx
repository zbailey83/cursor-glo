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
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 max-w-6xl mx-auto py-12 px-4">
        {/* Blog Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-orange-800">Skin Care Education & Tips</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert advice from The GLO Alchemist professionals. Learn about treatments, skin care routines,
            and how to maintain healthy, radiant skin in Colorado&apos;s unique climate.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-yellow-100 via-white to-yellow-200 rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="h-64 md:h-full bg-gradient-to-br from-pink-200 to-orange-200 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Featured Image</span>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <div className="text-sm text-pink-600 font-medium mb-2">FEATURED POST</div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">{blogPosts[0].title}</h2>
                <p className="text-gray-600 mb-4">{blogPosts[0].excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{blogPosts[0].category}</span>
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <Link
                  href={`/blog/${blogPosts[0].slug}`}
                  className="btn-thermal text-white rounded-lg px-6 py-2 inline-block"
                >
                  Read Full Article
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Categories */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Browse by Category</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['All Posts', 'Treatment Guides', 'Seasonal Care', 'Science & Education', 'Aftercare'].map(category => (
              <button
                key={category}
                className="px-4 py-2 rounded-full border border-pink-200 text-pink-700 hover:bg-pink-50 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map(post => (
            <article key={post.slug} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-yellow-100 to-pink-100 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Article Image</span>
              </div>
              <div className="p-6">
                <div className="text-sm text-pink-600 font-medium mb-2">{post.category}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                  <span>{post.readTime}</span>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-pink-600 hover:text-pink-800 font-medium"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-br from-pink-100 via-white to-yellow-100 rounded-2xl shadow-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-orange-800">Stay Updated with Skin Care Tips</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Get the latest skin care advice, treatment updates, and exclusive offers delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button className="btn-thermal text-white rounded-lg px-6 py-2">
              Subscribe
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}