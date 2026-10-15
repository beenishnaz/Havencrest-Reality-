export interface Property {
  id: string;
  name: string;
  tagline: string;
  location: string;
  address: string;
  type: 'House' | 'Apartment' | 'Villa' | 'Townhouse';
  status: 'For Sale' | 'For Rent';
  price: number;
  priceDisplay: string;
  bedrooms: number;
  bathrooms: number;
  area: number; // in sq ft
  yearBuilt: number;
  image: string;
  gallery: string[];
  description: string;
  features: string[];
  agent: {
    name: string;
    title: string;
    phone: string;
    email: string;
  };
  featured: boolean;
}

export interface SearchFilterState {
  location: string;
  propertyType: string;
  priceRange: string;
  status: 'All' | 'For Sale' | 'For Rent';
  minBeds: number;
  sortBy: 'recommended' | 'price-asc' | 'price-desc' | 'area-desc';
}

export type ActiveView = 'home' | 'properties' | 'buy' | 'rent' | 'about' | 'contact' | 'favorites';
