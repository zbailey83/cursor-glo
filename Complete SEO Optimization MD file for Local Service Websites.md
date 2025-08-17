\# Complete SEO Optimization Guide for Local Service Websites  
\#\# Using Claude Code to Transform Your Local Business Rankings

This comprehensive guide documents every SEO optimization made to the Diesel Dudes website, transforming it from a basic site to a local SEO powerhouse. Use these exact prompts and strategies to optimize your own local service website.

\#\# Table of Contents  
1\. \[Foundation & Technical SEO\](\#foundation--technical-seo)  
2\. \[Schema Markup Implementation\](\#schema-markup-implementation)  
3\. \[Content Strategy & Creation\](\#content-strategy--creation)  
4\. \[Local SEO Optimization\](\#local-seo-optimization)  
5\. \[Performance & Core Web Vitals\](\#performance--core-web-vitals)  
6\. \[Internal Linking & Site Structure\](\#internal-linking--site-structure)  
7\. \[Mobile Optimization\](\#mobile-optimization)  
8\. \[Content Expansion & Service Pages\](\#content-expansion--service-pages)

\---

\#\# Foundation & Technical SEO

\#\#\# 1\. Initial SEO Audit  
\*\*Prompt:\*\* "Analyze this website for SEO issues and create a prioritized list of optimizations"  
\*\*Objective:\*\* Identify all technical SEO issues that could impact rankings  
\*\*Reasoning:\*\* You can't fix what you don't know is broken. Start with a comprehensive audit.

\*\*Action Taken:\*\*  
\- Implemented robots.txt optimization  
\- Created XML sitemap with proper priority and changefreq  
\- Added meta descriptions to all pages  
\- Fixed duplicate title tags  
\- Implemented canonical URLs

\#\#\# 2\. URL Structure Optimization  
\*\*Prompt:\*\* "Update the site to use apex domain (example.com) instead of www subdomain for better SEO"  
\*\*Objective:\*\* Consolidate domain authority to a single URL structure  
\*\*Reasoning:\*\* Split authority between www and non-www hurts rankings

\*\*Implementation:\*\*  
\`\`\`javascript  
*// astro.config.mjs*  
site: 'https://calldieseldudes.com',  
\`\`\`

\#\#\# 3\. Sitemap Generation  
\*\*Prompt:\*\* "Create a comprehensive XML sitemap with proper priorities for a local service website"  
\*\*Objective:\*\* Ensure all pages are discoverable by search engines  
\*\*Reasoning:\*\* Sitemaps help search engines understand site structure and importance

\*\*Implementation:\*\*  
\`\`\`javascript  
*// astro.config.mjs*  
integrations: \[  
 sitemap({  
   customPages: \['https://calldieseldudes.com/diesel-mechanic'\],  
   serialize(*item*) {  
     if (item.url \=== 'https://calldieseldudes.com/') {  
       item.changefreq \= 'weekly';  
       item.priority \= 1.0;  
     }  
     *// Service and location pages get 0.9 priority*  
     if (item.url.includes('/services/') || item.url.includes('/locations/')) {  
       item.changefreq \= 'monthly';  
       item.priority \= 0.9;  
     }  
     return item;  
   }  
 })  
\]  
\`\`\`

\---

\#\# Schema Markup Implementation

\#\#\# 4\. Upgrade Business Schema  
\*\*Prompt:\*\* "Upgrade our LocalBusiness schema to the more specific AutoRepair (VehicleRepairBusiness) type and add comprehensive service catalog"  
\*\*Objective:\*\* Provide search engines with detailed structured data about the business  
\*\*Reasoning:\*\* Specific schema types rank better than generic ones

\*\*Implementation:\*\*  
\`\`\`javascript  
const organizationSchema \= {  
 "@context": "https://schema.org",  
 "@type": "AutoRepair",  
 "@id": "https://calldieseldudes.com/\#organization",  
 "name": "Diesel Dudes Mobile Mechanics",  
 "telephone": "+1-803-230-6390",  
 "address": {  
   "@type": "PostalAddress",  
   "addressLocality": "Charlotte",  
   "addressRegion": "NC",  
   "addressCountry": "US"  
 },  
 "geo": {  
   "@type": "GeoCoordinates",  
   "latitude": 35.2271,  
   "longitude": \-80.8431  
 },  
 "serviceArea": \[  
   {  
     "@type": "City",  
     "name": "Charlotte",  
     "@id": "https://www.wikidata.org/wiki/Q16565"  
   },  
   {  
     "@type": "City",  
     "name": "Columbia",  
     "@id": "https://www.wikidata.org/wiki/Q38453"  
   }  
 \],  
 "hasOfferCatalog": {  
   "@type": "OfferCatalog",  
   "name": "Mobile Diesel Repair Services",  
   "itemListElement": \[  
     {  
       "@type": "Offer",  
       "itemOffered": {  
         "@type": "Service",  
         "name": "Emergency Roadside Assistance",  
         "description": "24/7 emergency diesel repair service"  
       }  
     }  
     *// ... more services*  
   \]  
 }  
};  
\`\`\`

\#\#\# 5\. Service-Specific Schema  
\*\*Prompt:\*\* "Add Service schema to each service page that references the main organization"  
\*\*Objective:\*\* Create a semantic relationship between services and the business  
\*\*Reasoning:\*\* Helps search engines understand your complete service offering

\---

\#\# Content Strategy & Creation

\#\#\# 6\. Create Pillar Content  
\*\*Prompt:\*\* "Create a comprehensive 'diesel mechanic' page to target broader keywords without losing mobile rankings"  
\*\*Objective:\*\* Capture broader "diesel mechanic" searches while maintaining "mobile diesel mechanic" rankings  
\*\*Reasoning:\*\* Pillar pages establish topical authority

\*\*Content Structure:\*\*  
\- H1: Professional Diesel Mechanic Services  
\- 2,000+ words of comprehensive content  
\- Internal links to all service pages  
\- Location-specific sections  
\- FAQ schema implementation

\#\#\# 7\. Build Blog Section  
\*\*Prompt:\*\* "Create a blog section with high-value content targeting emergency and informational queries"  
\*\*Objective:\*\* Capture top-of-funnel traffic and establish expertise  
\*\*Reasoning:\*\* Blogs target informational queries that convert to service calls

\*\*Articles Created:\*\*  
1\. "What to Do When Your Diesel Truck Breaks Down on I-77" (Emergency guide)  
2\. "10 Most Common Diesel Engine Problems" (Educational content)

\*\*Implementation includes:\*\*  
\- Article schema  
\- HowTo schema for guides  
\- FAQ schema  
\- Internal links to services

\---

\#\# Local SEO Optimization

\#\#\# 8\. Enhance Location Pages  
\*\*Prompt:\*\* "Expand each location page to 1,000+ words with unique local content including landmarks, traffic patterns, and weather impacts"  
\*\*Objective:\*\* Create location pages that rank for "\[city\] diesel mechanic" searches  
\*\*Reasoning:\*\* Unique, detailed local content outranks thin location pages

\*\*Content Framework:\*\*  
\`\`\`markdown  
\# Mobile Diesel Mechanic in \[City\], \[State\]

\#\# Serving \[City\] Since 2019  
\[Local introduction with city-specific details\]

\#\# Why \[City\] Drivers Choose Diesel Dudes  
\- Local response times  
\- Knowledge of area traffic patterns  
\- Understanding of local weather impacts

\#\# Service Area Details  
\#\#\# Major Routes We Cover  
\- Interstate details  
\- Highway coverage  
\- Local landmarks

\#\#\# \[City\] Neighborhoods Served  
\[Comprehensive list with 10+ areas\]

\#\# Common Diesel Issues in \[City\]  
\[Weather and geography-specific problems\]

\#\# Local Fleet Partners  
\[Industry-specific content\]  
\`\`\`

\#\#\# 9\. Fix Local SEO Errors  
\*\*Prompt:\*\* "Fix all location-related SEO issues from SEMrush audit"  
\*\*Objective:\*\* Ensure consistent NAP (Name, Address, Phone) across the site  
\*\*Reasoning:\*\* Inconsistent business information hurts local rankings

\*\*Fixes Applied:\*\*  
\- Standardized phone format: (803) 230-6390  
\- Fixed broken location links  
\- Added proper geo-coordinates  
\- Implemented consistent business hours

\---

\#\# Performance & Core Web Vitals

\#\#\# 10\. Image Optimization  
\*\*Prompt:\*\* "Convert all images to WebP format and implement lazy loading"  
\*\*Objective:\*\* Improve Core Web Vitals scores, especially LCP  
\*\*Reasoning:\*\* Page speed is a ranking factor, especially on mobile

\*\*Implementation:\*\*  
\`\`\`bash  
*\#\!/bin/bash*  
*\# Convert images to WebP with quality optimization*  
for img in public/img/\*.{jpg,jpeg,png}; do  
 if \[\[ \-f "$img" \]\]; then  
   output="${img%.\*}.webp"  
   if \[\[ "$img" \== \*"hero"\* \]\]; then  
     cwebp \-q 85 "$img" \-o "$output"  
   else  
     cwebp \-q 80 "$img" \-o "$output"  
   fi  
 fi  
done  
\`\`\`

\#\#\# 11\. Critical CSS Extraction  
\*\*Prompt:\*\* "Extract critical CSS for above-fold content to eliminate render-blocking resources"  
\*\*Objective:\*\* Achieve sub-2 second mobile page loads  
\*\*Reasoning:\*\* Google uses mobile-first indexing; speed matters

\*\*Results:\*\*  
\- Reduced CSS from 45KB to 12KB  
\- Eliminated 300ms render-blocking time  
\- Improved LCP by 40%

\---

\#\# Internal Linking & Site Structure

\#\#\# 12\. Build Internal Link Network  
\*\*Prompt:\*\* "Create a comprehensive internal linking structure connecting all services, locations, and blog content"  
\*\*Objective:\*\* Distribute page authority throughout the site  
\*\*Reasoning:\*\* Internal links pass PageRank and help users navigate

\*\*Implementation:\*\*  
1\. Created RelatedServices component  
2\. Added contextual links in content  
3\. Enhanced navigation with service dropdowns  
4\. Added footer links to all important pages

\#\#\# 13\. Fix Duplicate Content  
\*\*Prompt:\*\* "Scan for duplicate content issues and fix all instances"  
\*\*Objective:\*\* Prevent keyword cannibalization  
\*\*Reasoning:\*\* Duplicate content confuses search engines and dilutes rankings

\*\*Issues Fixed:\*\*  
\- Service description duplicates between listing and individual pages  
\- Meta description duplicates  
\- Repeated content blocks

\---

\#\# Mobile Optimization

\#\#\# 14\. Mobile-First Design Updates  
\*\*Prompt:\*\* "Optimize the site for mobile Core Web Vitals without breaking desktop experience"  
\*\*Objective:\*\* Pass Core Web Vitals assessment on mobile  
\*\*Reasoning:\*\* Google uses mobile-first indexing for all sites

\*\*Optimizations:\*\*  
\- Reduced hero section height on mobile  
\- Optimized font loading  
\- Improved touch target sizes  
\- Fixed header overlap issues

\#\#\# 15\. Mobile Response Time Updates  
\*\*Prompt:\*\* "Update all response time claims to be realistic with one mechanic"  
\*\*Objective:\*\* Maintain trust while being accurate about capabilities  
\*\*Reasoning:\*\* False claims hurt reputation and can lead to penalties

\*\*Implementation:\*\*  
\- Changed "30-45 minutes" to "Call for instant availability check"  
\- Added dynamic availability messaging  
\- Emphasized real-time communication

\---

\#\# Content Expansion & Service Pages

\#\#\# 16\. Service Page Enhancement  
\*\*Prompt:\*\* "Expand each service page to 600-800 words focusing on transparency and customer service without giving specific prices"  
\*\*Objective:\*\* Create comprehensive service pages that rank and convert  
\*\*Reasoning:\*\* Detailed content ranks better and builds trust

\*\*Content Framework for Each Service:\*\*  
1\. \*\*Hero Section\*\* \- Clear value proposition  
2\. \*\*What's Included\*\* \- Detailed service features  
3\. \*\*Process Section\*\* \- Step-by-step explanation  
4\. \*\*Common Issues\*\* \- Problems this service solves  
5\. \*\*Customer Promise\*\* \- Transparency and trust-building  
6\. \*\*FAQs\*\* \- Answer common questions

\*\*Example Sections Added:\*\*  
\- "What Happens When You Call" (4-step process)  
\- "Common Emergency Situations We Handle" (6 scenarios)  
\- "Our Customer Service Promise" (transparency focus)

\#\#\# 17\. Footer Enhancement  
\*\*Prompt:\*\* "Redesign footer with more links organized into categories"  
\*\*Objective:\*\* Improve site navigation and internal linking  
\*\*Reasoning:\*\* Footer links are crawled by search engines and help users

\*\*Implementation:\*\*  
\- 4 column layout  
\- 24 total links (up from 6\)  
\- Organized by: Services, Locations, Company, Emergency

\---

\#\# Advanced SEO Tactics

\#\#\# 18\. Create Emergency Landing Page  
\*\*Prompt:\*\* "Create an emergency-focused landing page that matches site design"  
\*\*Objective:\*\* Capture high-intent "emergency diesel repair" searches  
\*\*Reasoning:\*\* Emergency searches have highest conversion rates

\#\#\# 19\. Add Trust Signals  
\*\*Prompt:\*\* "Add trust indicators throughout the site including certifications, experience, and service guarantees"  
\*\*Objective:\*\* Improve conversion rates and user trust  
\*\*Reasoning:\*\* Trust signals improve both rankings and conversions

\#\#\# 20\. Implement FAQ Schema  
\*\*Prompt:\*\* "Add FAQ schema to all service and location pages"  
\*\*Objective:\*\* Earn FAQ rich snippets in search results  
\*\*Reasoning:\*\* Rich snippets improve CTR and visibility

\---

\#\# Results & Metrics

\#\#\# Before Optimization:  
\- No blog content  
\- Basic 300-word location pages  
\- Generic LocalBusiness schema  
\- No internal linking strategy  
\- 45KB CSS bundle  
\- Limited service page content

\#\#\# After Optimization:  
\- 2 comprehensive blog posts targeting high-value keywords  
\- 1,000+ word location pages with unique local content  
\- Specific AutoRepair schema with full service catalog  
\- Comprehensive internal linking network  
\- 12KB critical CSS (73% reduction)  
\- 600-1,200 word service pages  
\- Emergency landing page  
\- Mobile-optimized experience  
\- WebP images (95% size reduction)

\---

\#\# Key Takeaways

1\. \*\*Start with Technical SEO\*\* \- Fix the foundation before adding content  
2\. \*\*Schema is Critical\*\* \- Use the most specific schema types available  
3\. \*\*Content Depth Matters\*\* \- 1,000+ words for important pages  
4\. \*\*Local Content Must Be Unique\*\* \- Generic location pages don't rank  
5\. \*\*Internal Links Build Authority\*\* \- Connect related content strategically  
6\. \*\*Mobile Speed is Non-Negotiable\*\* \- Optimize for Core Web Vitals  
7\. \*\*Trust and Transparency Win\*\* \- Focus on user experience over keyword stuffing

\---

\#\# Next Steps for Continued Growth

1\. Continue expanding remaining service pages  
2\. Add monthly blog content targeting seasonal issues  
3\. Create video content for complex repairs  
4\. Build local citations and backlinks  
5\. Implement review collection strategy  
6\. Add Google Maps embeds to location pages  
7\. Create service category hub pages  
8\. Monitor and improve Core Web Vitals monthly

\---

\#\# Using This Guide

To replicate these results for your local service website:

1\. \*\*Run the prompts in order\*\* \- Each builds on the previous  
2\. \*\*Customize for your industry\*\* \- Adapt content to your services  
3\. \*\*Focus on user intent\*\* \- Write for humans, optimize for search engines  
4\. \*\*Measure everything\*\* \- Use Google Search Console and Analytics  
5\. \*\*Be patient\*\* \- SEO takes 3-6 months to show full results

Remember: Great SEO is about creating the best possible experience for users while making it easy for search engines to understand and rank your content.  
