import React from 'react';

const Footer = () => (
  <footer className="w-full bg-gradient-to-br from-amber-200 via-yellow-100 to-amber-100 rounded-3xl shadow-2xl py-12 px-8 text-amber-800 mt-20 font-inter">
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8 max-w-6xl mx-auto">
      <div className="text-center lg:text-left">
        <div className="font-black text-2xl text-amber-900 mb-3">The GLO Alchemist</div>
        <div className="font-medium text-lg mb-2">709 W Littleton Blvd Suite 105, Littleton, CO 80120</div>
        <div className="font-black text-lg text-amber-900">
          <a href="tel:3035063582" className="hover:text-amber-700 transition-colors">(303) 506-3582</a> • 
          <a href="mailto:info@thegloalchemist.com" className="hover:text-amber-700 transition-colors ml-2">info@thegloalchemist.com</a>
        </div>
      </div>
      <div className="text-center">
        <div className="font-black text-lg text-amber-900 mb-2">Business Hours</div>
        <div className="font-medium">Tuesday - Saturday</div>
        <div className="font-medium">9:30 AM - 5:00 PM</div>
      </div>
      <div className="text-center lg:text-right">
        <div className="font-medium text-lg mb-3">
          <a 
            href="https://thegloalchemist.myaestheticrecord.com/online-booking"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-amber-800 text-amber-50 font-black rounded-full hover:bg-amber-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Book Online
          </a>
        </div>
        <div className="font-medium text-sm">
          &copy; {new Date().getFullYear()} The GLO Alchemist. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
);

export default Footer; 