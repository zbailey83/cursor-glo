```
import React from 'react';

const About = () => (
  <section className="w-full py-20 bg-lumina-bg font-body relative" id="about">
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-lumina-text">About The GLO Alchemist</h2>
        <div className="w-32 h-2 bg-lumina-primary mx-auto mb-12 rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-6">
          <div className="glass rounded-3xl shadow-xl p-10 border border-lumina-primary/20">
            <div className="space-y-8">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-4 h-4 bg-lumina-primary rounded-full mr-4"></div>
                  <h3 className="text-xl font-heading font-bold text-lumina-text">Our Mission</h3>
                </div>
                <p className="text-lumina-text/80 leading-relaxed font-medium">
                  Let&apos;s get GLOing! At The GLO Alchemist, we are driven by a mission to educate, simplify skincare, provide product knowledge, heal and enhance one&apos;s own natural &ldquo;Glo.&rdquo;
                </p>
              </div>
              
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-4 h-4 bg-lumina-primary/70 rounded-full mr-4"></div>
                  <h3 className="text-xl font-heading font-bold text-lumina-text">Our Expertise</h3>
                </div>
                <p className="text-lumina-text/80 leading-relaxed font-medium">
                  We specialize in skincare and laser treatments, offering progressive treatments that deliver tangible results. Guided by our values of safety, cleanliness, and empowerment through education.
                </p>
              </div>
              
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-4 h-4 bg-lumina-primary/40 rounded-full mr-4"></div>
                  <h3 className="text-xl font-heading font-bold text-lumina-text">Our Approach</h3>
                </div>
                <p className="text-lumina-text/80 leading-relaxed font-medium">
                  Let&apos;s combine the forces of science, nature&apos;s ingredients, vintage and modern technique, and a little love and healing to create your very own GLO potion!
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats/Features */}
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="glass rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-lumina-primary/20">
              <div className="text-4xl font-heading font-bold text-lumina-primary mb-3">500+</div>
              <div className="text-lumina-text font-bold">Happy Clients</div>
            </div>
            <div className="glass rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-lumina-primary/20">
              <div className="text-4xl font-heading font-bold text-lumina-primary mb-3">5+</div>
              <div className="text-lumina-text font-bold">Years Experience</div>
            </div>
          </div>
          
          <div className="glass rounded-3xl p-10 shadow-xl border border-lumina-primary/20">
            <h4 className="text-2xl font-heading font-bold text-lumina-text mb-6">Why Choose Us?</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-2xl mr-4 mt-1">✨</span>
                <span className="text-lumina-text/80 font-medium text-lg">Licensed medical professionals</span>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-4 mt-1">❄️</span>
                <span className="text-lumina-text/80 font-medium text-lg">Advanced laser technology</span>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-4 mt-1">🌟</span>
                <span className="text-lumina-text/80 font-medium text-lg">Personalized treatment plans</span>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-4 mt-1">🍃</span>
                <span className="text-lumina-text/80 font-medium text-lg">Natural & toxin-free products</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
```