'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Add smooth scroll globally
if (typeof window !== 'undefined') {
  document.documentElement.style.scrollBehavior = 'smooth';
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 w-full bg-gradient-to-r from-amber-100 via-yellow-50 to-amber-50 py-4 px-4 sm:px-6 lg:px-8 font-inter z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo - Top Left */}
          <Link 
            href="/" 
            className="flex items-center group transition-all duration-300 hover:scale-105" 
            title="The GLO Alchemist - Home"
            onClick={closeMenu}
          >
            <div className="flex items-center space-x-3">
              {/* Crescent Moon Logo */}
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                <svg 
                  viewBox="0 0 100 100" 
                  className="w-full h-full text-amber-800 group-hover:text-amber-900 transition-colors duration-300"
                  fill="currentColor"
                >
                  <path d="M50 10 C 25 10, 10 25, 10 50 C 10 75, 25 90, 50 90 C 40 90, 30 80, 30 50 C 30 20, 40 10, 50 10 Z" />
                </svg>
              </div>
              
              {/* Logo Text */}
              <div className="flex flex-col">
                <span className="text-amber-900 font-black text-lg sm:text-xl leading-tight tracking-wider">
                  THE GLO ALCHEMIST
                </span>
                <span className="text-amber-700 font-medium text-xs sm:text-sm leading-tight tracking-wide">
                  Skin and Laser Lab
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              href="/services" 
              className="text-amber-800 hover:text-amber-900 font-semibold transition-colors duration-200 hover:underline decoration-2 underline-offset-4"
            >
              Services
            </Link>
            <Link 
              href="/blog" 
              className="text-amber-800 hover:text-amber-900 font-semibold transition-colors duration-200 hover:underline decoration-2 underline-offset-4"
            >
              Blog
            </Link>
            <Link 
              href="/#about" 
              className="text-amber-800 hover:text-amber-900 font-semibold transition-colors duration-200 hover:underline decoration-2 underline-offset-4"
            >
              About
            </Link>
            <Link 
              href="/#contact" 
              className="text-amber-800 hover:text-amber-900 font-semibold transition-colors duration-200 hover:underline decoration-2 underline-offset-4"
            >
              Contact
            </Link>
            
            {/* Desktop CTA Button */}
            <a
              href="https://thegloalchemist.myaestheticrecord.com/online-booking"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-2.5 bg-amber-800 text-amber-50 font-black text-sm rounded-full hover:bg-amber-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Book Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <a
              href="tel:3035063582"
              className="text-amber-800 hover:text-amber-900 font-black text-sm transition-colors duration-200"
            >
              (303) 506-3582
            </a>
            
            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-amber-800 hover:text-amber-900 hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500 transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50" onClick={closeMenu}>
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-gradient-to-b from-amber-100 to-yellow-50 shadow-xl transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-4 border-b border-amber-200">
                <span className="text-amber-900 font-black text-lg">Menu</span>
                <button
                  onClick={closeMenu}
                  className="inline-flex items-center justify-center p-2 rounded-md text-amber-800 hover:text-amber-900 hover:bg-amber-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500"
                >
                  <span className="sr-only">Close menu</span>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Mobile Menu Items */}
              <nav className="flex-1 px-4 py-6 space-y-4">
                <Link
                  href="/services"
                  className="block px-4 py-3 text-amber-900 font-semibold hover:bg-amber-200 rounded-lg transition-colors duration-200"
                  onClick={closeMenu}
                >
                  Services
                </Link>
                <Link
                  href="/blog"
                  className="block px-4 py-3 text-amber-900 font-semibold hover:bg-amber-200 rounded-lg transition-colors duration-200"
                  onClick={closeMenu}
                >
                  Blog
                </Link>
                <Link
                  href="/#about"
                  className="block px-4 py-3 text-amber-900 font-semibold hover:bg-amber-200 rounded-lg transition-colors duration-200"
                  onClick={closeMenu}
                >
                  About
                </Link>
                <Link
                  href="/#contact"
                  className="block px-4 py-3 text-amber-900 font-semibold hover:bg-amber-200 rounded-lg transition-colors duration-200"
                  onClick={closeMenu}
                >
                  Contact
                </Link>
                
                {/* Mobile CTA Button */}
                <div className="pt-4">
                  <a
                    href="https://thegloalchemist.myaestheticrecord.com/online-booking"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-6 py-3 bg-amber-800 text-amber-50 font-black rounded-full hover:bg-amber-900 transition-all duration-300 shadow-lg hover:shadow-xl"
                    onClick={closeMenu}
                  >
                    Book Appointment
                  </a>
                </div>
              </nav>

              {/* Mobile Menu Footer */}
              <div className="p-4 border-t border-amber-200 bg-amber-50">
                <div className="text-center">
                  <p className="text-amber-800 font-medium text-sm mb-2">709 W Littleton Blvd Suite 105</p>
                  <p className="text-amber-800 font-medium text-sm mb-2">Littleton, CO 80120</p>
                  <a
                    href="tel:3035063582"
                    className="text-amber-900 font-black text-lg hover:text-amber-700 transition-colors duration-200"
                  >
                    (303) 506-3582
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header; 