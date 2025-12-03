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
  // Treatment Guides
  if (category === 'Facial Treatments' || name.toLowerCase().includes('derma') || name.toLowerCase().includes('chemical') || name.toLowerCase().includes('microneedling')) {
    return {
      icon: '✨',
      categoryLabel: 'TREATMENT GUIDES',
    };
  }

  // Seasonal Care
  if (category === 'Laser Treatments' || name.toLowerCase().includes('laser') || name.toLowerCase().includes('ipl')) {
    return {
      icon: '❄️',
      categoryLabel: 'LASER TREATMENTS',
    };
  }

  // First-Time Guide
  return {
    icon: '🌟',
    categoryLabel: 'FACIAL SERVICES',
  };
};

const ServiceCard = ({ name, description, bullets, href, category, imgSrc }: ServiceCardProps) => {
  const styling = getCardStyling(name, category);

  return (
    <div className="group hover:scale-[1.02] transition-all duration-300 cursor-pointer h-full">
      <Link href={href} className="block h-full">
        <article className="glass rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col border border-lumina-primary/20">
          {/* Header with service image or gradient background */}
          <div className={`h-48 ${imgSrc ? 'bg-lumina-subtle' : 'bg-lumina-primary/10'} flex items-center justify-center relative overflow-hidden group-hover:bg-lumina-primary/20 transition-colors duration-300`}>
            {imgSrc ? (
              <img
                src={imgSrc}
                alt={name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            ) : (
              <div className="text-center relative z-10">
                <div className="text-5xl mb-3 transform group-hover:scale-110 transition-transform duration-300">{styling.icon}</div>
                <span className="text-lumina-text/60 font-medium text-sm font-heading">{name}</span>
              </div>
            )}
            {!imgSrc && (
              <div className="absolute inset-0 bg-lumina-primary/5 transform scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></div>
            )}
          </div>

          {/* Content */}
          <div className="p-6 flex-1 flex flex-col">
            <div className="text-xs font-bold mb-3 uppercase tracking-wide text-lumina-primary font-heading">
              {styling.categoryLabel}
            </div>
            <h3 className="text-xl font-bold mb-3 text-lumina-text leading-tight font-heading group-hover:text-lumina-primary transition-colors duration-200">
              {name}
            </h3>
            {description && (
              <p className="text-lumina-text/70 mb-4 leading-relaxed text-sm font-medium flex-1">
                {description}
              </p>
            )}
            {bullets && (
              <ul className="text-xs text-lumina-text/70 mb-6 space-y-2">
                {bullets.slice(0, 3).map((bullet, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-lumina-primary mr-2 text-lg leading-none">•</span>
                    <span className="font-medium">{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
            <div className="inline-flex items-center text-lumina-primary hover:text-lumina-text font-bold transition-colors duration-200 text-sm mt-auto">
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