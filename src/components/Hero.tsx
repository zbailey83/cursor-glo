import React from 'react';
import Image from 'next/image';

const features = [
  'Licensed Medical Professionals',
  'Advanced Laser Technology',
  'Personalized Treatment Plans',
];

const Hero = () => (
  <section className="w-full min-h-[80vh] flex items-center justify-center py-20 px-4 bg-gradient-to-br from-amber-100 via-yellow-50 to-amber-50 font-inter">
    <div className="flex flex-col md:flex-row items-center justify-center gap-16 w-full max-w-7xl mx-auto">
      <div className="flex-1 max-w-2xl flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-5xl md:text-7xl mb-8 text-amber-900 leading-tight">
          <span className="italic font-medium">Find Your </span>
          <span className="font-black text-amber-800">GLO</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-black text-amber-900 mb-6">Skin Care Clinic in Littleton, Colorado</h2>
        <p className="text-lg md:text-xl text-amber-800 mb-10 font-medium leading-relaxed">
          Transform your skin with advanced laser treatments, professional facials, and medical-grade aesthetics. Experience the difference at The GLO Alchemist – where <span className="italic font-black">healthy skin is always in</span>.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 mb-10 justify-center md:justify-start">
          <a
            href="https://thegloalchemist.myaestheticrecord.com/online-booking"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 bg-amber-800 text-amber-50 font-black text-lg rounded-full hover:bg-amber-900 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            Book Free Consultation
          </a>
          <a
            href="tel:3035063582"
            className="inline-flex items-center justify-center px-10 py-4 bg-yellow-700 text-yellow-50 font-black text-lg rounded-full hover:bg-yellow-800 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
            </svg>
            Call Now
          </a>
        </div>
        <div className="flex flex-wrap gap-8 mt-6 justify-center md:justify-start">
          {features.map((f) => (
            <div key={f} className="flex items-center gap-3 text-amber-800 font-black">
              <div className="w-6 h-6 bg-amber-700 rounded-full flex items-center justify-center">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                  <path fill="white" d="M9.5 16.5 5 12l1.4-1.4 3.1 3.09 7.09-7.09L18 8l-8.5 8.5Z"/>
                </svg>
              </div>
              {f}
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="w-[30rem] h-[30rem] rounded-3xl shadow-2xl flex items-center justify-center bg-gradient-to-br from-amber-200 via-yellow-200 to-amber-100 overflow-hidden border-4 border-amber-300">
          <Image
            src="/hero1.png"
            alt="Professional skin care treatment at The GLO Alchemist in Littleton, CO"
            width={480}
            height={480}
            className="object-cover w-full h-full"
            priority
            sizes="(max-width: 768px) 100vw, 480px"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Hero; 