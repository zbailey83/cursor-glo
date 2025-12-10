export interface ServiceContent {
  name: string;
  slug: string;
  category: string;
  image?: string;
  description: string;
  benefits: string[];
  process: string[];
  candidateInfo: string;
  expectations: string;
  faqs: { question: string; answer: string }[];
  localConsiderations: Record<string, string>;
}

export interface NeighborhoodContent {
  name: string;
  slug: string;
  description: string;
  landmarks: string[];
  travelInfo: string;
  demographics: string;
  localFactors: string;
  serviceAvailability: string;
}

export const serviceContent: Record<string, ServiceContent> = {
  'dermaplaning': {
    name: 'Dermaplaning',
    slug: 'dermaplaning',
    category: 'Facial Treatments',
    description: 'Dermaplaning is a professional exfoliation treatment that uses a sterile surgical scalpel to gently remove dead skin cells and vellus hair (peach fuzz) from the face. This non-invasive procedure reveals smoother, brighter skin and allows for better product absorption.',
    benefits: [
      'Immediate improvement in skin texture and smoothness',
      'Enhanced product absorption for skincare routines',
      'Reduction in appearance of fine lines and acne scars',
      'Brighter, more radiant complexion',
      'Safe for all skin types, including sensitive skin',
      'No downtime required'
    ],
    process: [
      'Thorough skin cleansing and assessment',
      'Application of gentle dermaplaning technique using sterile blade',
      'Removal of dead skin cells and vellus hair',
      'Soothing treatment application',
      'SPF protection and aftercare instructions'
    ],
    candidateInfo: 'Dermaplaning is suitable for most skin types and concerns. Ideal candidates include those looking to improve skin texture, reduce fine lines, or enhance their skincare routine effectiveness. Not recommended for active acne or inflamed skin.',
    expectations: 'During treatment, you will feel a gentle scraping sensation as the blade removes dead skin. The procedure is painless and takes 30-45 minutes. Immediately after, skin appears brighter and feels incredibly smooth. Results last 3-4 weeks.',
    faqs: [
      {
        question: 'Will my hair grow back thicker after dermaplaning?',
        answer: 'No, this is a common myth. Vellus hair (peach fuzz) will grow back at the same rate and texture as before. Dermaplaning does not change hair follicle structure.'
      },
      {
        question: 'How often should I get dermaplaning treatments?',
        answer: 'Most clients benefit from dermaplaning every 3-4 weeks, which aligns with your skin natural cell turnover cycle.'
      }
    ],
    localConsiderations: {
      'englewood': 'Englewood residents appreciate dermaplaning for its immediate results before special events at the Gothic Theatre or Englewood City Park gatherings.',
      'denver': 'Denver professionals love dermaplaning for maintaining smooth skin in the dry Colorado climate and high altitude environment.',
      'highlands-ranch': 'Highlands Ranch clients often combine dermaplaning with other treatments for comprehensive skin rejuvenation.',
      'ken-caryl': 'Ken Caryl residents find dermaplaning perfect for maintaining healthy skin while enjoying outdoor activities in the foothills.',
      'columbine': 'Columbine area clients appreciate the gentle nature of dermaplaning for sensitive skin common in Colorado climate.',
      'chatfield': 'Chatfield residents benefit from dermaplaning to combat dry skin from outdoor recreation at Chatfield Reservoir.',
      'roxborough': 'Roxborough clients love dermaplaning for maintaining smooth skin while enjoying the natural beauty of Roxborough State Park.'
    }
  }
};

export const neighborhoodContent: Record<string, NeighborhoodContent> = {
  'englewood': {
    name: 'Englewood',
    slug: 'englewood',
    description: 'Englewood is a vibrant city located just south of Denver, known for its historic downtown, thriving arts scene, and convenient access to both urban amenities and outdoor recreation.',
    landmarks: [
      'Gothic Theatre - Historic music venue',
      'Englewood City Park - Community recreation center',
      'Museum of Outdoor Arts - Unique sculpture park',
      'Belleview Station - Shopping and dining district',
      'Englewood Recreation Center - Fitness and wellness facilities'
    ],
    travelInfo: 'Located just 15 minutes from our Littleton clinic via US-85 or Santa Fe Drive. Easy access from light rail stations and major highways. Ample parking available at our facility.',
    demographics: 'Englewood residents are diverse, ranging from young professionals to established families, with a strong appreciation for arts, culture, and wellness services.',
    localFactors: 'Englewood urban environment and proximity to Denver means residents often deal with pollution-related skin concerns and the effects of city living on their complexion.',
    serviceAvailability: 'All GLO Alchemist services are available to Englewood residents, with many clients appreciating our convenient location and comprehensive treatment options.'
  }
};

export const getServiceContent = (slug: string): ServiceContent | null => {
  return serviceContent[slug] || null;
};

export const getNeighborhoodContent = (slug: string): NeighborhoodContent | null => {
  return neighborhoodContent[slug] || null;
};