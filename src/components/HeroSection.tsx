import React, { useState } from 'react';
import { Search, MapPin, Home, DollarSign, ArrowRight, CheckCircle2 } from 'lucide-react';
import { HERO_IMAGE } from '../data/properties';
import { SearchFilterState } from '../types/property';

interface HeroSectionProps {
  onSearch: (filters: Partial<SearchFilterState>) => void;
  onExploreClick: () => void;
  onAboutClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSearch,
  onExploreClick,
  onAboutClick
}) => {
  const [location, setLocation] = useState('All');
  const [propertyType, setPropertyType] = useState('All');
  const [priceRange, setPriceRange] = useState('Any');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      location: location === 'All' ? '' : location,
      propertyType: propertyType === 'All' ? '' : propertyType,
      priceRange: priceRange === 'Any' ? '' : priceRange
    });
  };

  return (
    <section className="relative pt-24 sm:pt-28 pb-16 lg:pb-24 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Container */}
        <div className="relative rounded-3xl overflow-hidden bg-[#10233B] min-h-[580px] lg:min-h-[620px] flex items-center shadow-xl">
          
          {/* Background Image: High-res luxury contemporary villa */}
          <div className="absolute inset-0 z-0">
            <img
              src={HERO_IMAGE}
              alt="Contemporary architectural luxury villa with infinity pool at dusk"
              className="w-full h-full object-cover object-center lg:object-right scale-100 transition-transform duration-1000 ease-out"
              loading="eager"
              referrerPolicy="no-referrer"
            />
            {/* Scrim Gradients for pristine text legibility on left without masking the pool & architecture */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent lg:w-[60%] z-10 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent lg:hidden z-10 pointer-events-none" />
          </div>

          {/* Hero Content Left Column */}
          <div className="relative z-20 w-full lg:max-w-[50%] p-6 sm:p-10 lg:p-14 flex flex-col justify-center">
            
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#C6A36A] uppercase">
                Exceptional Homes. Extraordinary Living.
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-bold text-[#10233B] leading-[1.12] tracking-tight mb-4 text-balance">
              Find Your <br />
              <span className="text-[#172D49]">Perfect Place </span><br />
              <span className="font-script text-4xl sm:text-5xl lg:text-[62px] text-[#C6A36A] font-normal leading-tight">
                to Call Home.
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-sm sm:text-base text-[#6C7785] leading-relaxed max-w-lg mb-8">
              Discover modern residences, architectural estates, and lifestyle-driven communities curated for design, comfort, and timeless longevity.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <button
                onClick={onExploreClick}
                className="px-6 py-3.5 rounded-full bg-[#10233B] hover:bg-[#172D49] text-white font-medium text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A36A]"
              >
                <span>Explore Properties</span>
                <ArrowRight className="w-4 h-4 text-[#C6A36A]" />
              </button>

              <button
                onClick={onAboutClick}
                className="px-6 py-3.5 rounded-full bg-white/80 hover:bg-white text-[#10233B] border border-[#E7E4DF] font-medium text-sm transition-all duration-200 hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A36A]"
              >
                Discover Our Story
              </button>
            </div>

            {/* Trust statement */}
            <div className="flex items-center gap-2 text-xs text-[#6C7785]">
              <CheckCircle2 className="w-4 h-4 text-[#34785D] shrink-0" />
              <span>Thoughtfully selected homes · Personalized guidance throughout</span>
            </div>
          </div>
        </div>

        {/* Floating Property Search Panel */}
        <div className="relative -mt-10 sm:-mt-12 lg:-mt-14 z-30 max-w-5xl mx-auto px-2 sm:px-4">
          <form
            onSubmit={handleSearchSubmit}
            className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-xl border border-[#E7E4DF] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-center"
          >
            {/* Field 1: Location */}
            <div className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#F7F4EF]/60 transition-colors border border-transparent hover:border-[#E7E4DF]/60">
              <div className="w-9 h-9 rounded-lg bg-[#F7F4EF] flex items-center justify-center text-[#10233B] shrink-0">
                <MapPin className="w-4 h-4 text-[#C6A36A]" />
              </div>
              <div className="flex flex-col flex-1 min-w-0">
                <label htmlFor="hero-location" className="text-[10px] font-bold text-[#89919B] uppercase tracking-wider">
                  Location
                </label>
                <select
                  id="hero-location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="bg-transparent text-sm font-semibold text-[#10233B] focus:outline-none cursor-pointer truncate"
                >
                  <option value="All">All Locations</option>
                  <option value="Austin">Austin, Texas</option>
                  <option value="Denver">Denver, Colorado</option>
                  <option value="Scottsdale">Scottsdale, Arizona</option>
                  <option value="Portland">Portland, Oregon</option>
                  <option value="Seattle">Seattle, Washington</option>
                  <option value="Dallas">Dallas, Texas</option>
                </select>
              </div>
            </div>

            {/* Field 2: Property Type */}
            <div className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#F7F4EF]/60 transition-colors border border-transparent hover:border-[#E7E4DF]/60">
              <div className="w-9 h-9 rounded-lg bg-[#F7F4EF] flex items-center justify-center text-[#10233B] shrink-0">
                <Home className="w-4 h-4 text-[#C6A36A]" />
              </div>
              <div className="flex flex-col flex-1 min-w-0">
                <label htmlFor="hero-type" className="text-[10px] font-bold text-[#89919B] uppercase tracking-wider">
                  Property Type
                </label>
                <select
                  id="hero-type"
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="bg-transparent text-sm font-semibold text-[#10233B] focus:outline-none cursor-pointer truncate"
                >
                  <option value="All">All Properties</option>
                  <option value="House">House</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Villa">Villa</option>
                  <option value="Townhouse">Townhouse</option>
                </select>
              </div>
            </div>

            {/* Field 3: Budget / Price Range */}
            <div className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#F7F4EF]/60 transition-colors border border-transparent hover:border-[#E7E4DF]/60">
              <div className="w-9 h-9 rounded-lg bg-[#F7F4EF] flex items-center justify-center text-[#10233B] shrink-0">
                <DollarSign className="w-4 h-4 text-[#C6A36A]" />
              </div>
              <div className="flex flex-col flex-1 min-w-0">
                <label htmlFor="hero-budget" className="text-[10px] font-bold text-[#89919B] uppercase tracking-wider">
                  Budget
                </label>
                <select
                  id="hero-budget"
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="bg-transparent text-sm font-semibold text-[#10233B] focus:outline-none cursor-pointer truncate"
                >
                  <option value="Any">Any Budget</option>
                  <option value="under-250k">Under $250k</option>
                  <option value="250k-500k">$250k – $500k</option>
                  <option value="500k-1m">$500k – $1M</option>
                  <option value="over-1m">$1M+</option>
                </select>
              </div>
            </div>

            {/* Field 4: Search Button */}
            <div className="p-1">
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-[#10233B] hover:bg-[#172D49] active:scale-[0.98] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A36A]"
              >
                <Search className="w-4 h-4" />
                <span>Find Homes</span>
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};
