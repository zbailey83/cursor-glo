'use client';

import React, { useState } from 'react';
import Link from 'next/link';

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
      <header className="sticky top-0 w-full bg-lumina-bg/80 backdrop-blur-md border-b border-lumina-primary/20 py-4 px-4 sm:px-6 lg:px-8 font-body z-50">
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
                  className="w-full h-full text-lumina-primary group-hover:text-lumina-text transition-colors duration-300"
                  fill="currentColor"
                >
                  <path d="M50 10 C 25 10, 10 25, 10 50 C 10 75, 25 90, 50 90 C 40 90, 30 80, 30 50 C 30 20, 40 10, 50 10 Z" />
                </svg>
              </div>

              {/* Logo Text */}
              <div className="flex flex-col">
                <span className="text-lumina-text font-heading font-bold text-lg sm:text-xl leading-tight tracking-wider">
                  THE GLO ALCHEMIST
                </span>
                <span className="text-lumina-primary font-medium text-xs sm:text-sm leading-tight tracking-wide font-heading">
                  Skin and Laser Lab
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/services"
              className="text-lumina-text hover:text-lumina-primary font-semibold transition-colors duration-200 hover:underline decoration-2 underline-offset-4 decoration-lumina-primary"
            >
              Services
            </Link>
            <Link
              href="/blog"
              className="text-lumina-text hover:text-lumina-primary font-semibold transition-colors duration-200 hover:underline decoration-2 underline-offset-4 decoration-lumina-primary"
            >
              Blog
            </Link>
            <Link
              href="/#about"
              className="text-lumina-text hover:text-lumina-primary font-semibold transition-colors duration-200 hover:underline decoration-2 underline-offset-4 decoration-lumina-primary"
            >
              About
            </Link>
            <Link
              href="/#contact"
              className="text-lumina-text hover:text-lumina-primary font-semibold transition-colors duration-200 hover:underline decoration-2 underline-offset-4 decoration-lumina-primary"
            >
              Contact
            </Link>

            {/* Desktop CTA Button */}
            <a
              href="https://thegloalchemist.myaestheticrecord.com/online-booking"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-2.5 bg-lumina-primary text-lumina-bg font-heading font-bold text-sm rounded-full hover:bg-lumina-text hover:text-lumina-bg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border border-lumina-primary"
            >
              Book Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <a
              href="tel:3035063582"
              className="text-lumina-text hover:text-lumina-primary font-bold text-sm transition-colors duration-200"
            >
              (303) 506-3582
            </a>

            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-lumina-text hover:text-lumina-primary hover:bg-lumina-primary/10 focus:outline-none transition-colors duration-200"
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
        <div className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" onClick={closeMenu}>
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-lumina-bg shadow-2xl transform transition-transform duration-300 ease-in-out border-l border-lumina-primary/20">
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-4 border-b border-lumina-primary/20">
                <span className="text-lumina-text font-heading font-bold text-lg">Menu</span>
                <button
                  onClick={closeMenu}
                  className="inline-flex items-center justify-center p-2 rounded-md text-lumina-text hover:text-lumina-primary hover:bg-lumina-primary/10 focus:outline-none"
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
                  className="block px-4 py-3 text-lumina-text font-semibold hover:bg-lumina-primary/10 hover:text-lumina-primary rounded-lg transition-colors duration-200"
                  onClick={closeMenu}
                >
                  Services
                </Link>
                <Link
                  href="/blog"
                  className="block px-4 py-3 text-lumina-text font-semibold hover:bg-lumina-primary/10 hover:text-lumina-primary rounded-lg transition-colors duration-200"
                  onClick={closeMenu}
                >
                  Blog
                </Link>
                <Link
                  href="/#about"
                  className="block px-4 py-3 text-lumina-text font-semibold hover:bg-lumina-primary/10 hover:text-lumina-primary rounded-lg transition-colors duration-200"
                  onClick={closeMenu}
                >
                  About
                </Link>
                <Link
                  href="/#contact"
                  className="block px-4 py-3 text-lumina-text font-semibold hover:bg-lumina-primary/10 hover:text-lumina-primary rounded-lg transition-colors duration-200"
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
                    className="block w-full text-center px-6 py-3 bg-lumina-primary text-lumina-bg font-heading font-bold rounded-full hover:bg-lumina-text hover:text-lumina-bg transition-all duration-300 shadow-lg hover:shadow-xl"
                    onClick={closeMenu}
                  >
                    Book Appointment
                  </a>
                </div>
              </nav>

              {/* Mobile Menu Footer */}
              <div className="p-4 border-t border-lumina-primary/20 bg-lumina-primary/5">
                <div className="text-center">
                  <p className="text-lumina-text/70 font-medium text-sm mb-2">709 W Littleton Blvd Suite 105</p>
                  <p className="text-lumina-text/70 font-medium text-sm mb-2">Littleton, CO 80120</p>
                  <a
                    href="tel:3035063582"
                    className="text-lumina-text font-heading font-bold text-lg hover:text-lumina-primary transition-colors duration-200"
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