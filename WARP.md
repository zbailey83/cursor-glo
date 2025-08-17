# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is **The GLO Alchemist** - a local SEO-optimized website for a skin care and laser clinic in Littleton, Colorado. The project is built with Next.js 15 using the App Router, TypeScript, and Tailwind CSS v4. It features a neuromorphic UI design with SEO-focused architecture targeting Google Map Pack rankings.

**Business Context:**
- **Business**: The GLO Alchemist Skin & Laser Lab
- **Location**: 709 W Littleton Blvd Ste 105, Littleton, CO 80120
- **Phone**: (303) 506-3582
- **Online Booking**: https://thegloalchemist.myaestheticrecord.com/online-booking
- **Hours**: Tues-Sat 9:30 AM - 5:00 PM

## Essential Development Commands

### Development
```bash
npm run dev          # Start development server on http://localhost:3000
npm run build        # Production build with static optimization
npm run start        # Start production server
npm run lint         # Run ESLint
npm run analyze      # Bundle analysis (when ANALYZE=true is set)
npm run export       # Build and export static files
```

### Testing & Quality
- **Linting**: Uses ESLint with Next.js TypeScript configuration
- **Code Quality**: TypeScript strict mode enabled
- **Performance**: Core Web Vitals optimized with SSG where possible

## Architecture & Structure

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 + Neuromorphic CSS
- **UI Library**: Styled Components (for specialized components)
- **Fonts**: Inter (Google Fonts, optimized with next/font)
- **Images**: Next.js Image component with WebP/AVIF optimization

### Key Architectural Decisions

**1. Local SEO Focus**
- Homepage optimized for "Medical Aesthetics in Littleton" 
- Service pages with URL structure: `/[service]-littleton-co`
- Neighborhood targeting: Englewood, Denver, Highlands Ranch, Ken Caryl, Columbine, Chatfield, Roxborough
- Schema.org structured data (SkinCareClinic, LocalBusiness, MedicalBusiness)

**2. Performance Optimization**
- Static Site Generation (SSG) prioritized over SSR
- Dynamic imports for below-the-fold components
- Image optimization with next/image
- Bundle splitting and lazy loading
- Core Web Vitals targeting <2s LCP, <0.1 CLS

**3. Neuromorphic UI Design**
- Custom CSS classes: `.btn-thermal`, `.card-spike`, `.neumorph`
- Thermal hover effects (color transitions from purple to pink/orange)
- Micro-animations for user interactions
- Altitude-aware content (Colorado-specific references)

### File Organization

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with SEO schema
│   ├── page.tsx           # Homepage (main landing page)
│   └── globals.css        # Global styles + neuromorphic CSS
├── components/             # Reusable UI components
│   ├── Header.tsx         # Sticky navigation with NAP info
│   ├── Footer.tsx         # Footer with business details
│   ├── Hero.tsx           # Landing hero section
│   ├── ServiceOverview.tsx # Service category sections
│   ├── About.tsx          # About section
│   ├── GoogleMap.tsx      # Embedded Google Maps
│   └── SEOHead.tsx        # SEO metadata component
└── data/                  # Static data files
    ├── services.ts        # Service definitions (12 services)
    ├── neighborhoods.ts   # Target neighborhoods (7 areas)
    └── serviceContent.ts  # Service-specific content
```

### Services & Content Structure

**Service Categories:**
- **Facial Treatments**: Dermaplaning, Chemical Peels, Microneedling
- **Facials**: Hydrating, Detoxifying, Vitality
- **Laser Treatments**: Radio Fractional Microneedling, Laser Hair Reduction, Laser Skin Resurfacing, Q-Switch Tattoo Removal, IPL, Long Pulsed Yag

**Target Neighborhoods**: Englewood, Denver, Highlands Ranch, Ken Caryl, Columbine, Chatfield, Roxborough

## SEO Implementation Details

### Schema.org Structured Data (in layout.tsx)
- **SkinCareClinic** schema with complete NAP, hours, services
- **Review** schemas for featured testimonials  
- **OfferCatalog** for service listings
- **AggregateRating** (4.9 stars, 127 reviews)
- **areaServed** includes all target neighborhoods

### URL Structure Pattern
- Homepage: `/`
- Service pages: `/services/[service]/littleton-co` 
- Neighborhood pages: `/services/[service]/[neighborhood]`
- Blog: `/blog/[slug]`

### Critical SEO Elements
- **Title Tag**: "Medical Aesthetics in Littleton | The GLO Alchemist Skin & Laser Lab"
- **H1**: Must exactly match title tag
- **NAP Consistency**: Address, phone, hours must match Google Business Profile exactly
- **Local Keywords**: Include altitude references (5,430 ft), Colorado climate considerations
- **Internal Linking**: Service cards link to individual service pages

## Development Guidelines

### Component Development
- Use TypeScript interfaces for all props
- Implement proper loading states with Suspense
- Optimize images with next/image (priority for above-fold)
- Use semantic HTML (header, nav, section, article)
- Include proper ARIA labels and alt text

### Performance Requirements  
- **Core Web Vitals**: LCP <2.5s, CLS <0.1, INP <200ms
- **Bundle Size**: Monitor with `npm run analyze`
- **Image Optimization**: WebP/AVIF with appropriate sizing
- **Font Loading**: Use next/font with display: 'swap'

### SEO Best Practices
- Every page needs unique meta title and description
- Include local keywords naturally in content
- Maintain NAP consistency across all pages
- Use structured data for services and reviews
- Optimize for mobile-first indexing

### Styling Approach
- **Primary**: Tailwind CSS utility classes
- **Custom**: Neuromorphic styles in globals.css
- **Components**: Use `.btn-thermal` and `.card-spike` classes
- **Colors**: Purple to pink/orange gradients for CTAs
- **Responsive**: Mobile-first design approach

## Local Development Setup

1. **Prerequisites**: Node.js 18+, npm/pnpm
2. **Installation**: `npm install`
3. **Environment**: No environment variables required for basic development
4. **Development Server**: `npm run dev` (auto-reloads on changes)
5. **Build Test**: `npm run build` to verify production build
6. **Type Checking**: TypeScript runs automatically with Next.js

## Deployment Configuration

- **Platform**: Optimized for Vercel deployment
- **Static Export**: Supports `npm run export` for static hosting
- **Image Optimization**: Configured for Vercel Image API
- **Performance**: Automatically optimized for Edge functions
- **Analytics**: Ready for Google Analytics 4 integration

## Business Logic & Content Rules

### NAP Information (Critical - Must Match GBP Exactly)
- **Name**: "The GLO Alchemist" or "GLO Alchemist Skin & Laser Lab"  
- **Address**: "709 W Littleton Blvd Ste 105, Littleton, CO 80120"
- **Phone**: "(303) 506-3582" or "+1-303-506-3582"
- **Hours**: "Tu-Sa 09:30-17:00"

### Content Guidelines
- Always mention Colorado altitude effects (5,430 ft) for skin treatments
- Include neighborhood names naturally in service descriptions
- Reference local landmarks when appropriate
- Maintain professional, medical aesthetic tone
- Include clear pricing and consultation CTAs

### Booking Integration
- **Primary CTA**: "Book Free Consultation"  
- **URL**: https://thegloalchemist.myaestheticrecord.com/online-booking
- **Phone**: Click-to-call functionality for mobile users
- **Placement**: Hero section, service pages, footer

## Key Files for Modifications

- **Homepage Content**: `src/app/page.tsx`
- **Site-wide SEO**: `src/app/layout.tsx` 
- **Service Data**: `src/data/services.ts`
- **Neighborhoods**: `src/data/neighborhoods.ts`
- **Styling**: `src/app/globals.css`
- **Navigation**: `src/components/Header.tsx`
- **Build Config**: `next.config.ts`

This website is designed to achieve top 3 Google Map Pack rankings through technical SEO excellence, local optimization, and user experience focused on converting local search traffic into consultation bookings.
