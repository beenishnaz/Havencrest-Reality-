import React, { useState } from 'react';
import { Heart, MapPin, Bed, Bath, Maximize2, ArrowRight } from 'lucide-react';
import { Property } from '../types/property';

interface PropertyCardProps {
  property: Property;
  isFavorite: boolean;
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
  onSelect: (property: Property) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  isFavorite,
  onToggleFavorite,
  onSelect
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <article
      onClick={() => onSelect(property)}
      className="group bg-white rounded-2xl border border-[#E7E4DF] overflow-hidden hover:shadow-xl hover:border-[#D8B982]/80 transition-all duration-300 flex flex-col cursor-pointer relative"
    >
      {/* Property Photograph Container */}
      <div className="relative aspect-[1.6/1] w-full overflow-hidden bg-[#F7F4EF]">
        <img
          src={property.image}
          alt={property.name}
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
          referrerPolicy="no-referrer"
        />

        {/* Fallback skeleton while loading */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-[#F7F4EF] animate-pulse flex items-center justify-center">
            <span className="text-xs text-[#89919B]">Loading architecture...</span>
          </div>
        )}

        {/* Listing Status Badge */}
        <div className="absolute top-3.5 left-3.5 z-10">
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide shadow-sm ${
              property.status === 'For Sale'
                ? 'bg-[#10233B]/90 backdrop-blur-xs text-white'
                : 'bg-[#274565]/90 backdrop-blur-xs text-white'
            }`}
          >
            {property.status}
          </span>
        </div>

        {/* Favorite Heart Button */}
        <button
          type="button"
          onClick={(e) => onToggleFavorite(property.id, e)}
          className="absolute top-3.5 right-3.5 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-xs hover:bg-white flex items-center justify-center shadow-md text-[#10233B] hover:scale-110 active:scale-95 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A36A]"
          aria-label={isFavorite ? `Remove ${property.name} from saved favorites` : `Save ${property.name} to favorites`}
        >
          <Heart
            className={`w-4.5 h-4.5 transition-colors duration-200 ${
              isFavorite ? 'fill-[#C6A36A] text-[#C6A36A]' : 'text-[#6C7785] hover:text-[#10233B]'
            }`}
          />
        </button>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-[#10233B] group-hover:text-[#274565] transition-colors line-clamp-1">
            {property.name}
          </h3>

          <div className="flex items-center gap-1.5 text-xs text-[#6C7785] mt-1 mb-4">
            <MapPin className="w-3.5 h-3.5 text-[#C6A36A] shrink-0" />
            <span className="truncate">{property.location}</span>
          </div>

          {/* Specifications Row: Unboxed clean metadata with icons */}
          <div className="grid grid-cols-3 gap-2 py-3 border-y border-[#E7E4DF]/80 text-xs text-[#6C7785] tabular-nums">
            <div className="flex items-center gap-1.5">
              <Bed className="w-4 h-4 text-[#89919B]" />
              <span>{property.bedrooms} Beds</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Bath className="w-4 h-4 text-[#89919B]" />
              <span>{property.bathrooms} Baths</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Maximize2 className="w-3.5 h-3.5 text-[#89919B]" />
              <span>{property.area.toLocaleString()} sq ft</span>
            </div>
          </div>
        </div>

        {/* Price & Action Row */}
        <div className="flex items-center justify-between mt-4 pt-1">
          <div>
            <span className="text-xs text-[#89919B] block font-medium">Guide Price</span>
            <span className="text-xl font-bold text-[#10233B] tabular-nums">
              {property.priceDisplay}
            </span>
          </div>

          <div className="w-8 h-8 rounded-full bg-[#F7F4EF] group-hover:bg-[#10233B] group-hover:text-white text-[#10233B] flex items-center justify-center transition-all duration-300 shadow-xs">
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </div>
        </div>
      </div>
    </article>
  );
};
