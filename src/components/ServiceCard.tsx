import React from 'react';
import Link from 'next/link';

type ServiceCardProps = {
  name: string;
  description?: string;
  bullets?: string[];
  href: string;
  imgSrc?: string;
  category?: string;
};

// Get gradient and icon based on service category or name
const getCardStyling = (name: string, category?: string) => {
  // Treatment Guides - Yellow/Orange gradient
  if (category === 'Facial Treatments' || name.toLowerCase().includes('derma') || name.toLowerCase().includes('chemical') || name.toLowerCase().includes('microneedling')) {
    return {
      gradient: 'from-yellow-200 via-orange-100 to-pink-100',
      icon: '✨',
      textColor: 'text-orange-700',
      categoryLabel: 'TREATMENT GUIDES',
      categoryColor: 'text-orange-600'
    };
  }
  
  // Seasonal Care - Pink/Blue gradient
  if (category === 'Laser Treatments' || name.toLowerCase().includes('laser') || name.toLowerCase().includes('ipl')) {
    return {
      gradient: 'from-pink-200 via-blue-100 to-orange-100',
      icon: '❄️',
      textColor: 'text-blue-700',
      categoryLabel: 'LASER TREATMENTS',
      categoryColor: 'text-blue-600'
    };
  }
  
  // First-Time Guide - Yellow gradient (Facials)
  return {
    gradient: 'from-yellow-300 via-yellow-100 to-orange-100',
    icon: '🌟',
    textColor: 'text-yellow-700',
    categoryLabel: 'FACIAL SERVICES',
    categoryColor: 'text-yellow-600'
  };
};

const ServiceCard = ({ name, description, bullets, href, category }: ServiceCardProps) => {
  const styling = getCardStyling(name, category);
  
  return (
    <div className="group hover:scale-[1.02] transition-all duration-300 cursor-pointer">
      <Link href={href} className="block">
        <article className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
          {/* Header with gradient background and icon */}
          <div className={`h-32 bg-gradient-to-br ${styling.gradient} flex items-center justify-center relative`}>
            <div className="text-center">
              <div className="text-4xl mb-2">{styling.icon}</div>
              <span className="text-gray-600 font-medium text-sm">{name}</span>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-6">
            <div className={`text-xs font-bold mb-2 uppercase tracking-wide ${styling.categoryColor}`}>
              {styling.categoryLabel}
            </div>
            <h3 className={`text-xl font-bold mb-3 text-gray-900 leading-tight`}>
              {name}
            </h3>
            {description && (
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                {description}
              </p>
            )}
            {bullets && (
              <ul className="text-xs text-gray-600 mb-4 space-y-1">
                {bullets.slice(0, 3).map((bullet, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            )}
            <div className="inline-flex items-center text-pink-600 hover:text-pink-800 font-semibold transition-colors duration-200 text-sm">
              Read More
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </article>
      </Link>
    </div>
  );
};

export default ServiceCard; 