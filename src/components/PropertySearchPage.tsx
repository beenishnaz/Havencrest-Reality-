import React from 'react';
import { Search, RotateCcw, Filter, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { Property, SearchFilterState } from '../types/property';
import { PropertyCard } from './PropertyCard';

interface PropertySearchPageProps {
  properties: Property[];
  favorites: string[];
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
  onSelectProperty: (property: Property) => void;
  filterState: SearchFilterState;
  onFilterChange: (filters: Partial<SearchFilterState>) => void;
  onResetFilters: () => void;
  pageTitle?: string;
  pageSubtitle?: string;
}

export const PropertySearchPage: React.FC<PropertySearchPageProps> = ({
  properties,
  favorites,
  onToggleFavorite,
  onSelectProperty,
  filterState,
  onFilterChange,
  onResetFilters,
  pageTitle = 'Explore Our Portfolio',
  pageSubtitle = 'Browse premier residential properties, modern penthouses, and architectural estates.'
}) => {
  // Apply all filters together
  const filteredProperties = properties
    .filter((prop) => {
      // Status filter
      if (filterState.status !== 'All' && prop.status !== filterState.status) {
        return false;
      }
      // Location filter (case-insensitive substring)
      if (filterState.location && filterState.location !== 'All') {
        const query = filterState.location.toLowerCase();
        const matchesLocation =
          prop.location.toLowerCase().includes(query) ||
          prop.address.toLowerCase().includes(query) ||
          prop.name.toLowerCase().includes(query);
        if (!matchesLocation) return false;
      }
      // Property type filter
      if (filterState.propertyType && filterState.propertyType !== 'All') {
        if (prop.type !== filterState.propertyType) return false;
      }
      // Bedrooms filter
      if (filterState.minBeds > 0 && prop.bedrooms < filterState.minBeds) {
        return false;
      }
      // Price range filter
      if (filterState.priceRange && filterState.priceRange !== 'Any') {
        if (filterState.priceRange === 'under-250k' && prop.price >= 250000) return false;
        if (filterState.priceRange === '250k-500k' && (prop.price < 250000 || prop.price > 500000)) return false;
        if (filterState.priceRange === '500k-1m' && (prop.price < 500000 || prop.price > 1000000)) return false;
        if (filterState.priceRange === 'over-1m' && prop.price < 1000000) return false;
      }
      return true;
    })
    .sort((a, b) => {
      if (filterState.sortBy === 'price-asc') return a.price - b.price;
      if (filterState.sortBy === 'price-desc') return b.price - a.price;
      if (filterState.sortBy === 'area-desc') return b.area - a.area;
      return 0; // recommended
    });

  const isFiltered =
    filterState.location !== '' ||
    filterState.propertyType !== '' ||
    filterState.priceRange !== '' ||
    filterState.status !== 'All' ||
    filterState.minBeds > 0;

  return (
    <div className="pt-28 pb-20 bg-[#FCFBF9] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Breadcrumb & Title */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold tracking-[0.2em] text-[#C6A36A] uppercase block mb-2">
            Curated Listings
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#10233B] tracking-tight mb-3">
            {pageTitle}
          </h1>
          <p className="text-sm sm:text-base text-[#6C7785]">
            {pageSubtitle}
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white rounded-2xl p-5 border border-[#E7E4DF] shadow-xs mb-8">
          
          {/* Top Row: Search Input + Status Tabs */}
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center pb-5 border-b border-[#E7E4DF]/70">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-[#89919B] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search city, neighborhood, or property..."
                value={filterState.location}
                onChange={(e) => onFilterChange({ location: e.target.value })}
                className="w-full pl-10 pr-4 py-2.5 bg-[#FCFBF9] border border-[#E7E4DF] rounded-xl text-xs sm:text-sm text-[#10233B] placeholder:text-[#89919B] focus:outline-none focus:border-[#C6A36A]"
              />
            </div>

            {/* Status Segmented Buttons */}
            <div className="inline-flex p-1 bg-[#F7F4EF] rounded-xl border border-[#E7E4DF] w-full md:w-auto">
              {(['All', 'For Sale', 'For Rent'] as const).map((status) => (
                <button
                  key={status}
                  onClick={() => onFilterChange({ status })}
                  className={`flex-1 md:flex-initial px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                    filterState.status === status
                      ? 'bg-white text-[#10233B] shadow-xs'
                      : 'text-[#6C7785] hover:text-[#10233B]'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          {/* Bottom Row: Detailed Dropdown Filters */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 pt-4 items-center">
            
            {/* Property Type Dropdown */}
            <div>
              <label className="text-[10px] font-bold text-[#89919B] uppercase tracking-wider block mb-1">
                Property Type
              </label>
              <select
                value={filterState.propertyType}
                onChange={(e) => onFilterChange({ propertyType: e.target.value })}
                className="w-full py-2 px-3 bg-[#FCFBF9] border border-[#E7E4DF] rounded-xl text-xs font-medium text-[#10233B] focus:outline-none focus:border-[#C6A36A]"
              >
                <option value="">All Types</option>
                <option value="House">House</option>
                <option value="Apartment">Apartment</option>
                <option value="Villa">Villa</option>
                <option value="Townhouse">Townhouse</option>
              </select>
            </div>

            {/* Price Range */}
            <div>
              <label className="text-[10px] font-bold text-[#89919B] uppercase tracking-wider block mb-1">
                Price Range
              </label>
              <select
                value={filterState.priceRange}
                onChange={(e) => onFilterChange({ priceRange: e.target.value })}
                className="w-full py-2 px-3 bg-[#FCFBF9] border border-[#E7E4DF] rounded-xl text-xs font-medium text-[#10233B] focus:outline-none focus:border-[#C6A36A]"
              >
                <option value="">Any Budget</option>
                <option value="under-250k">Under $250k</option>
                <option value="250k-500k">$250k – $500k</option>
                <option value="500k-1m">$500k – $1M</option>
                <option value="over-1m">$1M+</option>
              </select>
            </div>

            {/* Bedrooms */}
            <div>
              <label className="text-[10px] font-bold text-[#89919B] uppercase tracking-wider block mb-1">
                Min Bedrooms
              </label>
              <select
                value={filterState.minBeds}
                onChange={(e) => onFilterChange({ minBeds: Number(e.target.value) })}
                className="w-full py-2 px-3 bg-[#FCFBF9] border border-[#E7E4DF] rounded-xl text-xs font-medium text-[#10233B] focus:outline-none focus:border-[#C6A36A]"
              >
                <option value="0">Any Beds</option>
                <option value="2">2+ Bedrooms</option>
                <option value="3">3+ Bedrooms</option>
                <option value="4">4+ Bedrooms</option>
                <option value="5">5+ Bedrooms</option>
              </select>
            </div>

            {/* Sort By */}
            <div>
              <label className="text-[10px] font-bold text-[#89919B] uppercase tracking-wider block mb-1">
                Sort Order
              </label>
              <select
                value={filterState.sortBy}
                onChange={(e) => onFilterChange({ sortBy: e.target.value as any })}
                className="w-full py-2 px-3 bg-[#FCFBF9] border border-[#E7E4DF] rounded-xl text-xs font-medium text-[#10233B] focus:outline-none focus:border-[#C6A36A]"
              >
                <option value="recommended">Featured / Curated</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="area-desc">Size: Largest sq ft</option>
              </select>
            </div>

            {/* Clear Filters */}
            <div className="flex items-end col-span-2 sm:col-span-1">
              <button
                onClick={onResetFilters}
                disabled={!isFiltered}
                className={`w-full py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors ${
                  isFiltered
                    ? 'bg-[#F7F4EF] hover:bg-[#EFE9DF] text-[#10233B] cursor-pointer'
                    : 'bg-slate-50 text-slate-300 cursor-not-allowed'
                }`}
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            </div>

          </div>
        </div>

        {/* Results Counter & Active Criteria */}
        <div className="flex items-center justify-between mb-6 text-xs text-[#6C7785]">
          <div>
            Showing <span className="font-bold text-[#10233B] tabular-nums">{filteredProperties.length}</span> of{' '}
            <span className="font-medium tabular-nums">{properties.length}</span> luxury residences
          </div>

          {isFiltered && (
            <div className="flex items-center gap-2">
              <span className="text-[#89919B]">Filtered by active criteria</span>
            </div>
          )}
        </div>

        {/* Property Grid or Empty State */}
        {filteredProperties.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-[#E7E4DF] max-w-lg mx-auto shadow-xs my-8">
            <div className="w-16 h-16 rounded-full bg-[#F7F4EF] flex items-center justify-center text-[#D8B982] mx-auto mb-4">
              <SlidersHorizontal className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-[#10233B] mb-2">
              No matching properties found
            </h3>
            <p className="text-xs sm:text-sm text-[#6C7785] mb-6 leading-relaxed">
              We couldn't find listings matching your specific criteria. Try expanding your search location or clearing your budget filters.
            </p>
            <button
              onClick={onResetFilters}
              className="px-6 py-2.5 bg-[#10233B] text-white rounded-full text-xs font-semibold hover:bg-[#172D49] transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
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
        )}

      </div>
    </div>
  );
};
