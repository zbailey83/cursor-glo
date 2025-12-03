import React from 'react';

const CTA = () => (
  <section className="w-full py-10 md:py-16 flex justify-center items-center bg-transparent font-body" id="contact">
    <div className="w-full max-w-2xl glass rounded-2xl shadow-xl p-8 mx-4 text-center flex flex-col items-center border border-lumina-primary/20">
      <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-lumina-text">Ready to GLO?</h2>
      <p className="mb-6 text-lumina-text/80 font-medium">Start your journey to radiant skin today.</p>
      <a
        href="https://thegloalchemist.myaestheticrecord.com/online-booking"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-lumina-primary text-lumina-bg font-heading font-bold rounded-full px-8 py-4 hover:bg-lumina-text hover:text-lumina-bg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border border-lumina-primary"
      >
        Book Your Consultation
      </a>
    </div>
  </section>
);

export default CTA;