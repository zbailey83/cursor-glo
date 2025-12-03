import React from 'react';

const Testimonials = () => (
  <section className="w-full py-10 md:py-16 bg-transparent font-body" id="testimonials">
    <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-lumina-text text-center">What Our Clients Say</h2>
    <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
      <div className="p-8 glass rounded-2xl shadow-xl border border-lumina-primary/20 hover:scale-[1.02] transition-transform duration-300">
        <p className="text-lumina-text/80 font-medium italic">"The GLO Alchemist transformed my skin. The attention to detail and personalized care is unmatched."</p>
        <div className="mt-4 text-sm text-lumina-primary font-heading font-bold">- Sarah J.</div>
      </div>
      <div className="p-8 glass rounded-2xl shadow-xl border border-lumina-primary/20 hover:scale-[1.02] transition-transform duration-300">
        <p className="text-lumina-text/80 font-medium italic">"Professional, relaxing, and effective. I've never felt more confident in my complexion."</p>
        <div className="mt-4 text-sm text-lumina-primary font-heading font-bold">- Michael T.</div>
      </div>
    </div>
  </section>
);

export default Testimonials;