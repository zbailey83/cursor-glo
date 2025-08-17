import React from 'react';

const About = () => (
  <section className="w-full py-16 bg-gradient-to-br from-gray-50 via-white to-gray-50" id="about">
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">About The GLO Alchemist</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-orange-400 mx-auto mb-8"></div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full mr-3"></div>
              <h3 className="text-lg font-semibold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Let&apos;s get GLOing! At The GLO Alchemist, we are driven by a mission to educate, simplify skincare, provide product knowledge, heal and enhance one&apos;s own natural &ldquo;Glo.&rdquo;
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-pink-400 rounded-full mr-3"></div>
              <h3 className="text-lg font-semibold text-gray-900">Our Expertise</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We specialize in skincare and laser treatments, offering progressive treatments that deliver tangible results. Guided by our values of safety, cleanliness, and empowerment through education.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full mr-3"></div>
              <h3 className="text-lg font-semibold text-gray-900">Our Approach</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Let&apos;s combine the forces of science, nature&apos;s ingredients, vintage and modern technique, and a little love and healing to create your very own GLO potion!
            </p>
          </div>
        </div>
        
        {/* Stats/Features */}
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-pink-600 mb-2">500+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-pink-50 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Why Choose Us?</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-pink-500 mr-3 mt-1">✨</span>
                <span className="text-gray-600">Licensed medical professionals</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">❄️</span>
                <span className="text-gray-600">Advanced laser technology</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-3 mt-1">🌟</span>
                <span className="text-gray-600">Personalized treatment plans</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">🍃</span>
                <span className="text-gray-600">Natural & toxin-free products</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About; 