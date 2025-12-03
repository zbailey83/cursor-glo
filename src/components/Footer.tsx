import React from 'react';

const Footer = () => (
  <footer className="w-full bg-lumina-subtle border-t border-lumina-primary/20 py-12 px-8 text-lumina-text mt-20 font-body">
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8 max-w-6xl mx-auto">
      <div className="text-center lg:text-left">
        <div className="font-heading font-bold text-2xl text-lumina-text mb-3">The GLO Alchemist</div>
        <div className="font-medium text-lg mb-2 text-lumina-text/80">709 W Littleton Blvd Suite 105, Littleton, CO 80120</div>
        <div className="font-bold text-lg text-lumina-text">
          <a href="tel:3035063582" className="hover:text-lumina-primary transition-colors">(303) 506-3582</a> •
          <a href="mailto:info@thegloalchemist.com" className="hover:text-lumina-primary transition-colors ml-2">info@thegloalchemist.com</a>
        </div>
      </div>
      <div className="text-center">
        <div className="font-heading font-bold text-lg text-lumina-text mb-2">Business Hours</div>
        <div className="font-medium text-lumina-text/80">Tuesday - Saturday</div>
        <div className="font-medium text-lumina-text/80">9:30 AM - 5:00 PM</div>
      </div>
      <div className="text-center lg:text-right">
        <div className="font-medium text-lg mb-3">
          <a
            href="https://thegloalchemist.myaestheticrecord.com/online-booking"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-lumina-primary text-lumina-bg font-heading font-bold rounded-full hover:bg-lumina-text hover:text-lumina-bg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border border-lumina-primary"
          >
            Book Online
          </a>
        </div>
        <div className="font-medium text-sm text-lumina-text/60">
          &copy; {new Date().getFullYear()} The GLO Alchemist. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;