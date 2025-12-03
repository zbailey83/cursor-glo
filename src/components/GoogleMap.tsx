```javascript
import React from 'react';

const GoogleMap = () => {
  const businessInfo = {
    name: 'The GLO Alchemist',
    address: '709 W Littleton Blvd Suite 105, Littleton, CO 80120',
    phone: '(303) 506-3582',
    hours: 'Tue-Sat: 10:00 AM - 5:00 PM'
  };

  return (
    <section className="w-full py-16 md:py-20 bg-lumina-bg flex flex-col items-center font-body" id="map">
      <h2 className="text-4xl md:text-5xl font-heading font-bold mb-12 text-center text-lumina-text">Find Us</h2>
      <div className="w-full max-w-5xl h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-lumina-primary/30">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3073.609976547109!2d-104.9964836!3d39.6134676!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c81010f78623f%3A0xf7353f98e0bea434!2sThe%20Glo%20Alchemist!5e0!3m2!1sen!2sus!4v1760021441301!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="The GLO Alchemist Location"
        />
      </div>
      <div className="mt-12 text-center max-w-2xl glass rounded-3xl p-8 shadow-xl border border-lumina-primary/20">
        <p className="text-2xl font-heading font-bold mb-4 text-lumina-text">{businessInfo.name}</p>
        <p className="text-lg font-medium mb-3 text-lumina-text/80">{businessInfo.address}</p>
        <p className="text-lg font-medium mb-8 text-lumina-text/80">{businessInfo.phone} • {businessInfo.hours}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a 
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(businessInfo.address)}`}
target = "_blank"
rel = "noopener noreferrer"
className = "inline-flex items-center justify-center px-8 py-4 bg-lumina-primary text-lumina-bg font-heading font-bold text-lg rounded-full hover:bg-lumina-text hover:text-lumina-bg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border border-lumina-primary"
  >
  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
  </svg>
            Get Directions
          </a >
  <a
    href="https://thegloalchemist.myaestheticrecord.com/online-booking"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-lumina-text font-heading font-bold text-lg rounded-full hover:bg-lumina-primary hover:text-lumina-bg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border-2 border-lumina-text hover:border-lumina-primary"
  >
    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414-1.414L9 5.586 7.707 4.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L10 4.586l-.293-.293z" clipRule="evenodd" />
    </svg>
    Book Appointment
  </a>
        </div >
      </div >
    </section >
  );
};

export default GoogleMap;
```