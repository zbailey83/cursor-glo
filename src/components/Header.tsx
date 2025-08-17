import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Add smooth scroll globally
if (typeof window !== 'undefined') {
  document.documentElement.style.scrollBehavior = 'smooth';
}

const Header = () => (
  <header className="sticky top-0 w-full bg-gradient-to-br from-yellow-100 via-white to-yellow-200 rounded-2xl shadow-xl py-4 px-6 flex flex-col md:flex-row md:items-center md:justify-between z-50">
    <Link href="/" className="flex items-center hover:opacity-80 transition-opacity duration-200" title="Go to Homepage">
      <Image
        src="/glo-alchemist-logo-new.svg"
        alt="The GLO Alchemist - Home"
        width={240}
        height={80}
        className="h-16 w-auto md:h-12 md:w-auto"
        priority
      />
    </Link>
    <nav className="mt-2 md:mt-0 flex flex-wrap gap-2">
      <Link href="/services" className="btn-thermal text-white text-xs px-3 py-1.5 rounded-lg">Services</Link>
      <Link href="/blog" className="btn-thermal text-white text-xs px-3 py-1.5 rounded-lg">Blog</Link>
      <Link href="/#about" className="btn-thermal text-white text-xs px-3 py-1.5 rounded-lg">About</Link>
      <Link href="/#testimonials" className="btn-thermal text-white text-xs px-3 py-1.5 rounded-lg">Reviews</Link>
      <Link href="/#contact" className="btn-thermal text-white text-xs px-3 py-1.5 rounded-lg">Contact</Link>
    </nav>
    <div className="mt-2 md:mt-0 text-xs text-gray-500 text-right">
      709 W Littleton Blvd Suite 105<br />
      Littleton, CO 80120<br />
      (303) 506-3582
    </div>
  </header>
);

export default Header; 