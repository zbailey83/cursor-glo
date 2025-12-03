'use client';

import React, { useEffect, useState } from 'react';

interface Review {
  id: string;
  author_name: string;
  author_url?: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

interface BusinessRating {
  rating: number;
  user_ratings_total: number;
}

const GoogleReviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [businessRating, setBusinessRating] = useState<BusinessRating | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error] = useState<string | null>(null);

  // Mock data for demonstration - replace with actual Google Places API call
  const mockReviews: Review[] = [
    {
      id: '1',
      author_name: 'Sarah M.',
      rating: 5,
      relative_time_description: '2 weeks ago',
      text: 'Amazing experience at The GLO Alchemist! The HydraFacial was incredible and my skin has never looked better. The staff is so knowledgeable and professional. Highly recommend!',
      time: Date.now() - 1209600000 // 2 weeks ago
    },
    {
      id: '2',
      author_name: 'Jennifer L.',
      rating: 5,
      relative_time_description: '1 month ago',
      text: 'I\'ve been coming here for chemical peels and the results are outstanding. My skin tone is so much more even now. The atmosphere is relaxing and the service is top-notch.',
      time: Date.now() - 2592000000 // 1 month ago
    },
    {
      id: '3',
      author_name: 'Michelle R.',
      rating: 5,
      relative_time_description: '1 month ago',
      text: 'The microneedling treatment exceeded my expectations. Minimal downtime and amazing results. The team really knows what they\'re doing. Will definitely be back!',
      time: Date.now() - 2678400000 // 1 month ago
    },
    {
      id: '4',
      author_name: 'Amanda K.',
      rating: 5,
      relative_time_description: '2 months ago',
      text: 'Best facial I\'ve ever had! The custom treatment was perfect for my skin type. The GLO Alchemist team is amazing and I love the results. Already booked my next appointment.',
      time: Date.now() - 5184000000 // 2 months ago
    },
    {
      id: '5',
      author_name: 'Lisa T.',
      rating: 5,
      relative_time_description: '2 months ago',
      text: 'Professional, clean, and results-driven. The dermaplaning service was fantastic and my makeup goes on so much smoother now. Highly recommend The GLO Alchemist!',
      time: Date.now() - 5270400000 // 2 months ago
    }
  ];

  const mockBusinessRating: BusinessRating = {
    rating: 4.9,
    user_ratings_total: 127
  };

  useEffect(() => {
    // Simulate API call delay
    const timer = setTimeout(() => {
      setReviews(mockReviews);
      setBusinessRating(mockBusinessRating);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [mockReviews, mockBusinessRating]);

  const renderStars = (rating: number, size: 'sm' | 'lg' = 'sm') => {
    const sizeClass = size === 'lg' ? 'w-6 h-6' : 'w-4 h-4';
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`${sizeClass} ${star <= rating ? 'text-lumina-primary' : 'text-lumina-subtle'
              } fill-current`}
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  const truncateText = (text: string, maxLength: number = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  if (isLoading) {
    return (
      <section className="w-full py-10 md:py-16 bg-lumina-bg font-body">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-8 text-lumina-text">What Our Clients Say</h2>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-lumina-primary"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="w-full py-10 md:py-16 bg-lumina-bg font-body">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-8 text-lumina-text">What Our Clients Say</h2>
          <div className="text-center text-lumina-text/60">
            <p>Reviews are temporarily unavailable. Please check back later.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-10 md:py-16 bg-lumina-bg font-body" id="reviews">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-8 text-lumina-text">What Our Clients Say</h2>

        {/* Overall Rating Summary */}
        {businessRating && (
          <div className="text-center mb-10">
            <div className="inline-flex items-center space-x-2 glass px-6 py-4 rounded-lg border border-lumina-primary/20">
              <div className="text-3xl font-bold text-lumina-text">{businessRating.rating}</div>
              <div className="flex flex-col items-start">
                {renderStars(businessRating.rating, 'lg')}
                <p className="text-sm text-lumina-text/70 mt-1">
                  Based on {businessRating.user_ratings_total} Google reviews
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {reviews.slice(0, 6).map((review) => (
            <div key={review.id} className="glass rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-lumina-primary/10">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-lumina-primary rounded-full flex items-center justify-center text-lumina-bg font-semibold text-sm">
                  {review.author_name.charAt(0)}
                </div>
                <div className="ml-3 flex-1">
                  <h4 className="font-semibold text-lumina-text">{review.author_name}</h4>
                  <div className="flex items-center space-x-2">
                    {renderStars(review.rating)}
                    <span className="text-xs text-lumina-text/60">{review.relative_time_description}</span>
                  </div>
                </div>
              </div>
              <p className="text-lumina-text/80 text-sm leading-relaxed">
                {truncateText(review.text)}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <a
              href="https://www.google.com/maps/place/The+GLO+Alchemist/@39.6133,-105.0178,17z/data=!4m7!3m6!1s0x0:0x0!8m2!3d39.6133!4d-105.0178!9m1!1b1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-transparent text-lumina-text font-heading font-bold rounded-full hover:bg-lumina-primary hover:text-lumina-bg transition-colors border border-lumina-primary"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414-1.414L9 5.586 7.707 4.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L10 4.586l-.293-.293z" clipRule="evenodd" />
              </svg>
              Write a Google Review
            </a>
            <a
              href="https://thegloalchemist.myaestheticrecord.com/online-booking"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-lumina-primary text-lumina-bg font-heading font-bold rounded-full hover:bg-lumina-text hover:text-lumina-bg transition-colors border border-lumina-primary"
            >
              Book Your Treatment
            </a>
          </div>
          <p className="text-sm text-lumina-text/60 mt-4">
            Join our satisfied clients and experience the GLO Alchemist difference
          </p>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;