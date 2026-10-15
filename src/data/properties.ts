import { Property } from '../types/property';

export const HERO_IMAGE = '/src/assets/images/hero_luxury_home_1792071670654.jpg';
export const LIVING_ROOM_IMAGE = '/src/assets/images/interior_living_room_1792071671698.jpg';
export const CTA_ESTATE_IMAGE = '/src/assets/images/cta_residential_estate_1792071671288.jpg';

export const PROPERTIES_DATA: Property[] = [
  {
    id: 'prop-1',
    name: 'The Willow Residence',
    tagline: 'Modern Scandinavian elegance nestled in central Austin',
    location: 'Austin, Texas',
    address: '42 Willow Creek Lane, Austin, TX 78704',
    type: 'House',
    status: 'For Sale',
    price: 685000,
    priceDisplay: '$685,000',
    bedrooms: 4,
    bathrooms: 3,
    area: 3200,
    yearBuilt: 2023,
    image: '/src/assets/images/willow_residence_home_1792071697500.jpg',
    gallery: [
      '/src/assets/images/willow_residence_home_1792071697500.jpg',
      '/src/assets/images/interior_living_room_1792071671698.jpg',
      '/src/assets/images/hero_luxury_home_1792071670654.jpg'
    ],
    description: 'An architectural statement in South Congress, The Willow Residence balances minimalist contemporary lines with warm natural materials. Designed with expansive floor-to-ceiling glass, custom white oak cabinetry, an integrated chef kitchen with waterfall quartz island, and a serene private backyard sanctuary.',
    features: [
      'Chef Kitchen with Miele Appliances',
      'Architectural Floor-to-Ceiling Windows',
      'White Oak Hardwood Flooring',
      'EV Charging Ready Garage',
      'Lush Landscaped Backyard & Covered Patio',
      'Smart Thermostats & Keyless Entry'
    ],
    agent: {
      name: 'Clara Vance',
      title: 'Senior Residential Partner',
      phone: '+1 (555) 234-8901',
      email: 'clara.vance@havencrest.example'
    },
    featured: true
  },
  {
    id: 'prop-2',
    name: 'Meridian Heights',
    tagline: 'Contemporary skyline living above downtown Denver',
    location: 'Denver, Colorado',
    address: '880 Elm Boulevard, Unit 4B, Denver, CO 80202',
    type: 'Apartment',
    status: 'For Sale',
    price: 425000,
    priceDisplay: '$425,000',
    bedrooms: 3,
    bathrooms: 2,
    area: 1650,
    yearBuilt: 2024,
    image: '/src/assets/images/modern_apartment_complex_1792071671856.jpg',
    gallery: [
      '/src/assets/images/modern_apartment_complex_1792071671856.jpg',
      '/src/assets/images/parkline_residence_seattle_1792071734884.jpg',
      '/src/assets/images/interior_living_room_1792071671698.jpg'
    ],
    description: 'Perched in Denver vibrant cultural district, Meridian Heights pairs refined industrial precision with boutique residential tranquility. Features private panoramic corner glass balconies, exposed architectural concrete elements, and full-service resident amenities.',
    features: [
      'Dual Private Corner Terraces',
      'Full Concierge & Secure Parking',
      'Private Resident Wellness Lounge',
      'Custom Matte Black Fixtures',
      'Acoustic Triple-Pane Glass',
      'Pet Spa & Bicycle Atelier'
    ],
    agent: {
      name: 'Julian Sterling',
      title: 'Director of Urban Developments',
      phone: '+1 (555) 345-6712',
      email: 'julian.sterling@havencrest.example'
    },
    featured: true
  },
  {
    id: 'prop-3',
    name: 'The Solstice Villa',
    tagline: 'Sonoran desert sanctuary with infinity reflection pool',
    location: 'Scottsdale, Arizona',
    address: '104 Pinnacle Peak Way, Scottsdale, AZ 85262',
    type: 'Villa',
    status: 'For Rent',
    price: 4200,
    priceDisplay: '$4,200/mo',
    bedrooms: 4,
    bathrooms: 3,
    area: 2850,
    yearBuilt: 2022,
    image: '/src/assets/images/solstice_desert_villa_1792071696653.jpg',
    gallery: [
      '/src/assets/images/solstice_desert_villa_1792071696653.jpg',
      '/src/assets/images/hero_luxury_home_1792071670654.jpg',
      '/src/assets/images/interior_living_room_1792071671698.jpg'
    ],
    description: 'A desert masterwork celebrating raw travertine, rammed earth, and expansive golden-hour horizons. Features an illuminated negative-edge swimming pool, seamless indoor-outdoor sliding glass pocket doors, and native cactus gardens curated for effortless entertaining.',
    features: [
      'Negative-Edge Swimming Pool & Spa',
      'Motorized Pocketing Glass Walls',
      'Travertine Stone Terraces',
      'Sub-Zero Wine Column & Butler Pantry',
      'Solar-Assisted Microgrid',
      'Outdoor Kitchen with Teppanyaki Grill'
    ],
    agent: {
      name: 'Elena Rostova',
      title: 'Luxury Estate Specialist',
      phone: '+1 (555) 456-7823',
      email: 'elena.rostova@havencrest.example'
    },
    featured: true
  },
  {
    id: 'prop-4',
    name: 'Cedar Grove House',
    tagline: 'Architectural forest retreat immersed in Pacific pines',
    location: 'Portland, Oregon',
    address: '315 Forest Ridge Trail, Portland, OR 97229',
    type: 'House',
    status: 'For Sale',
    price: 575000,
    priceDisplay: '$575,000',
    bedrooms: 3,
    bathrooms: 2,
    area: 2100,
    yearBuilt: 2023,
    image: '/src/assets/images/cedar_grove_house_1792071696633.jpg',
    gallery: [
      '/src/assets/images/cedar_grove_house_1792071696633.jpg',
      '/src/assets/images/interior_living_room_1792071671698.jpg',
      '/src/assets/images/willow_residence_home_1792071697500.jpg'
    ],
    description: 'Immersed in Portland lush evergreen hills, Cedar Grove House seamlessly merges blackened structural steel with warm western red cedar. Floor-to-ceiling glass overlooks mossy forest trails while a double-sided architectural fireplace anchors the open-plan great room.',
    features: [
      'Western Red Cedar & Steel Construction',
      'Double-Sided Board-Formed Concrete Hearth',
      'Heated Radiant Concrete Floors',
      'Forest-View Master Suite with Soaking Tub',
      'Rainwater Harvesting System',
      'Detached Cedar Studio / Home Office'
    ],
    agent: {
      name: 'Marcus Thorne',
      title: 'Northwest Portfolio Director',
      phone: '+1 (555) 567-8934',
      email: 'marcus.thorne@havencrest.example'
    },
    featured: true
  },
  {
    id: 'prop-5',
    name: 'The Parkline Residence',
    tagline: 'Panoramic penthouse view over Puget Sound & city skyline',
    location: 'Seattle, Washington',
    address: '1420 5th Avenue, Penthouse 18, Seattle, WA 98101',
    type: 'Apartment',
    status: 'For Rent',
    price: 2800,
    priceDisplay: '$2,800/mo',
    bedrooms: 2,
    bathrooms: 2,
    area: 1250,
    yearBuilt: 2024,
    image: '/src/assets/images/parkline_residence_seattle_1792071734884.jpg',
    gallery: [
      '/src/assets/images/parkline_residence_seattle_1792071734884.jpg',
      '/src/assets/images/interior_living_room_1792071671698.jpg',
      '/src/assets/images/modern_apartment_complex_1792071671856.jpg'
    ],
    description: 'A sun-drenched architectural corner penthouse framing the Space Needle, Olympic Mountains, and tree canopy. Outfitted with bespoke Italian millwork, integrated Dornbracht hardware, and private elevator vestibule access.',
    features: [
      'Bespoke Italian Kitchen Cabinetry',
      'Panoramic Corner Skyline Exposure',
      'Private Elevator Access Key',
      'Motorized Solar & Blackout Shades',
      '24/7 Doorman & Package Receiving',
      'Rooftop Terrace with Gas Fire Tables'
    ],
    agent: {
      name: 'Clara Vance',
      title: 'Senior Residential Partner',
      phone: '+1 (555) 234-8901',
      email: 'clara.vance@havencrest.example'
    },
    featured: true
  },
  {
    id: 'prop-6',
    name: 'Oakstone Estate',
    tagline: 'Monumental contemporary hilltop manor with resort grounds',
    location: 'Dallas, Texas',
    address: '5400 Preston Hollow Road, Dallas, TX 75225',
    type: 'House',
    status: 'For Sale',
    price: 925000,
    priceDisplay: '$925,000',
    bedrooms: 5,
    bathrooms: 4,
    area: 4100,
    yearBuilt: 2023,
    image: '/src/assets/images/oakstone_luxury_estate_1792071697346.jpg',
    gallery: [
      '/src/assets/images/oakstone_luxury_estate_1792071697346.jpg',
      '/src/assets/images/hero_luxury_home_1792071670654.jpg',
      '/src/assets/images/interior_living_room_1792071671698.jpg'
    ],
    description: 'An exceptional private compound set on sprawling manicured grounds in Preston Hollow. Features grand limestone masonry, soaring two-story glass elevations, a custom swimming pool with built-in spa, circular cobblestone motor court, and three-car climate-controlled showroom garage.',
    features: [
      'Gated Private Acre Compound',
      'Heated Resort Pool with Spillover Spa',
      'Three-Car Climate-Controlled Showroom',
      'Two-Story Glass Great Room',
      'Commercial Sub-Zero & Wolf Kitchen',
      'Temperature-Controlled 600-Bottle Cellar'
    ],
    agent: {
      name: 'Julian Sterling',
      title: 'Director of Urban Developments',
      phone: '+1 (555) 345-6712',
      email: 'julian.sterling@havencrest.example'
    },
    featured: true
  }
];

export const TESTIMONIALS_DATA = [
  {
    id: 'test-1',
    quote: "Havencrest made our transition from New York to Austin effortless. Clara showed us properties before they hit the open market, and we found our dream home in two weeks.",
    author: "Alexander & Maya Chen",
    role: "First-time Texas Homebuyers",
    location: "Austin, Texas"
  },
  {
    id: 'test-2',
    quote: "Their architectural appreciation and valuation accuracy are unmatched. Every home they curated matched our exacting standards without wasting a single afternoon.",
    author: "Dr. Evelyn Ross",
    role: "Property Investor",
    location: "Scottsdale, Arizona"
  },
  {
    id: 'test-3',
    quote: "The transparency and dedicated guidance throughout our lease negotiation were world-class. You immediately feel the difference in how Havencrest treats people.",
    author: "David Lindqvist",
    role: "Corporate Relocation Client",
    location: "Seattle, Washington"
  }
];

export const BENEFITS_DATA = [
  {
    id: 'benefit-1',
    title: 'Verified Listings',
    description: 'Explore carefully reviewed property listings with clear, reliable information.',
    iconName: 'BadgeCheck'
  },
  {
    id: 'benefit-2',
    title: 'A Trusted Process',
    description: 'Navigate every step with transparency, thoughtful advice, and care.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'benefit-3',
    title: 'Personal Guidance',
    description: 'Get dedicated support from your first search to your final decision.',
    iconName: 'Headphones'
  },
  {
    id: 'benefit-4',
    title: 'Homes That Fit',
    description: 'Discover spaces aligned with your needs, priorities, and lifestyle.',
    iconName: 'Heart'
  }
];
