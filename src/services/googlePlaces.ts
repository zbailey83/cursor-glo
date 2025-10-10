// Google Places API service for fetching business reviews and details

interface PlaceDetails {
  place_id: string;
  name: string;
  rating: number;
  user_ratings_total: number;
  reviews: Review[];
  formatted_address: string;
  formatted_phone_number: string;
  opening_hours?: {
    weekday_text: string[];
  };
  website?: string;
}

interface Review {
  author_name: string;
  author_url?: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

class GooglePlacesService {
  private apiKey: string;
  private placeId: string;

  constructor() {
    this.apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';
    this.placeId = process.env.NEXT_PUBLIC_BUSINESS_PLACE_ID || '';
  }

  /**
   * Fetch business details including reviews from Google Places API
   */
  async getBusinessDetails(): Promise<PlaceDetails | null> {
    if (!this.apiKey || !this.placeId) {
      console.error('Google Places API key or Place ID not configured');
      return null;
    }

    try {
      const fields = [
        'place_id',
        'name',
        'rating',
        'user_ratings_total',
        'reviews',
        'formatted_address',
        'formatted_phone_number',
        'opening_hours',
        'website'
      ].join(',');

      const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${this.placeId}&fields=${fields}&key=${this.apiKey}`;

      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.status !== 'OK') {
        throw new Error(`Google Places API error: ${data.status}`);
      }

      return data.result;
    } catch (error) {
      console.error('Error fetching business details:', error);
      return null;
    }
  }

  /**
   * Get cached reviews or fetch fresh ones
   */
  async getReviews(): Promise<Review[]> {
    // Check if we have cached reviews (implement your caching strategy)
    const cachedReviews = this.getCachedReviews();
    if (cachedReviews && cachedReviews.length > 0) {
      return cachedReviews;
    }

    // Fetch fresh reviews
    const businessDetails = await this.getBusinessDetails();
    if (businessDetails && businessDetails.reviews) {
      this.setCachedReviews(businessDetails.reviews);
      return businessDetails.reviews;
    }

    return [];
  }

  /**
   * Get business rating summary
   */
  async getRatingSummary(): Promise<{ rating: number; total: number } | null> {
    const businessDetails = await this.getBusinessDetails();
    if (businessDetails) {
      return {
        rating: businessDetails.rating,
        total: businessDetails.user_ratings_total
      };
    }
    return null;
  }

  /**
   * Simple localStorage caching (implement Redis or database caching for production)
   */
  private getCachedReviews(): Review[] | null {
    if (typeof window === 'undefined') return null;
    
    try {
      const cached = localStorage.getItem('glo_reviews');
      const cacheTime = localStorage.getItem('glo_reviews_time');
      
      if (cached && cacheTime) {
        const age = Date.now() - parseInt(cacheTime);
        // Cache for 1 hour
        if (age < 3600000) {
          return JSON.parse(cached);
        }
      }
    } catch (error) {
      console.error('Error reading cached reviews:', error);
    }
    
    return null;
  }

  private setCachedReviews(reviews: Review[]): void {
    if (typeof window === 'undefined') return;
    
    try {
      localStorage.setItem('glo_reviews', JSON.stringify(reviews));
      localStorage.setItem('glo_reviews_time', Date.now().toString());
    } catch (error) {
      console.error('Error caching reviews:', error);
    }
  }

  /**
   * Generate Google My Business review URL
   */
  getReviewUrl(): string {
    if (!this.placeId) {
      // Fallback to search-based URL
      return 'https://www.google.com/maps/search/The+GLO+Alchemist+Littleton+CO/@39.6133,-105.0178,17z';
    }
    
    return `https://www.google.com/maps/place/?q=place_id:${this.placeId}&hl=en`;
  }

  /**
   * Generate directions URL
   */
  getDirectionsUrl(): string {
    const address = '709 W Littleton Blvd Suite 105, Littleton, CO 80120';
    return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
  }
}

// Export singleton instance
export const googlePlacesService = new GooglePlacesService();

// Export types
export type { PlaceDetails, Review };