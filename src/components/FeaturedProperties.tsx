import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Property } from '../types/property';
import { PropertyCard } from './PropertyCard';

interface FeaturedPropertiesProps {
  properties: Property[];
  favorites: string[];
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
  onSelectProperty: (property: Property) => void;
  onViewAllClick: () => void;
}

export const FeaturedProperties: React.FC<FeaturedPropertiesProps> = ({
  properties,
  favorites,
  onToggleFavorite,
  onSelectProperty,
  onViewAllClick
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'sale' | 'rent'>('all');

  const filteredProperties = properties.filter((p) => {
    if (activeTab === 'sale') return p.status === 'For Sale';
    if (activeTab === 'rent') return p.status === 'For Rent';
    return true;
  });

  return (
    <section className="py-16 lg:py-24 bg-white" id="featured-properties">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-[0.2em] text-[#C6A36A] uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated For You</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#10233B] tracking-tight">
              Exceptional Homes, Selected for You
            </h2>
            <p className="text-sm sm:text-base text-[#6C7785] mt-2 max-w-xl">
              Discover standout residential properties chosen for architectural design, prime locations, and uncompromising quality.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Quick Segmented Filter */}
            <div className="inline-flex p-1 bg-[#F7F4EF] rounded-xl border border-[#E7E4DF]">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  activeTab === 'all'
                    ? 'bg-white text-[#10233B] shadow-xs'
                    : 'text-[#6C7785] hover:text-[#10233B]'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setActiveTab('sale')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  activeTab === 'sale'
                    ? 'bg-white text-[#10233B] shadow-xs'
                    : 'text-[#6C7785] hover:text-[#10233B]'
                }`}
              >
                For Sale
              </button>
              <button
                onClick={() => setActiveTab('rent')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  activeTab === 'rent'
                    ? 'bg-white text-[#10233B] shadow-xs'
                    : 'text-[#6C7785] hover:text-[#10233B]'
                }`}
              >
                For Rent
              </button>
            </div>

            <button
              onClick={onViewAllClick}
              className="hidden sm:inline-flex items-center gap-2 text-sm font-bold text-[#10233B] hover:text-[#C6A36A] transition-colors group"
            >
              <span>View All Properties</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#C6A36A]" />
            </button>
          </div>
        </div>

        {/* 3-Column Responsive Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              isFavorite={favorites.includes(property.id)}
              onToggleFavorite={onToggleFavorite}
              onSelect={onSelectProperty}
            />
          ))}
        </div>

        {/* Mobile View All Link */}
        <div className="mt-10 sm:hidden text-center">
          <button
            onClick={onViewAllClick}
            className="inline-flex items-center justify-center gap-2 w-full py-3 px-6 rounded-xl border border-[#10233B] text-sm font-semibold text-[#10233B] hover:bg-[#F7F4EF]"
          >
            <span>View All Properties</span>
            <ArrowRight className="w-4 h-4 text-[#C6A36A]" />
          </button>
        </div>

      </div>
    </section>
  );
};
