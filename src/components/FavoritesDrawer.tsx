import React from 'react';
import { X, Heart, Trash2, ArrowRight, Home as HomeIcon } from 'lucide-react';
import { Property } from '../types/property';

interface FavoritesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  favoriteProperties: Property[];
  onRemoveFavorite: (id: string) => void;
  onSelectProperty: (property: Property) => void;
  onExploreProperties: () => void;
}

export const FavoritesDrawer: React.FC<FavoritesDrawerProps> = ({
  isOpen,
  onClose,
  favoriteProperties,
  onRemoveFavorite,
  onSelectProperty,
  onExploreProperties
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="fixed inset-0 bg-[#10233B]/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10 z-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-[#E7E4DF] animate-slideLeft">
          
          {/* Header */}
          <div className="p-6 border-b border-[#E7E4DF] flex items-center justify-between bg-white">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-[#F7F4EF] flex items-center justify-center text-[#C6A36A]">
                <Heart className="w-5 h-5 fill-[#C6A36A]" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#10233B]">
                  Saved Properties
                </h3>
                <span className="text-xs text-[#89919B]">
                  {favoriteProperties.length} {favoriteProperties.length === 1 ? 'residence' : 'residences'} saved
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-[#6C7785] hover:text-[#10233B] hover:bg-[#F7F4EF] rounded-full transition-colors"
              aria-label="Close saved drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List of Saved Properties */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {favoriteProperties.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6">
                <div className="w-16 h-16 rounded-full bg-[#F7F4EF] flex items-center justify-center text-[#D8B982] mb-4">
                  <HomeIcon className="w-8 h-8" />
                </div>
                <h4 className="text-base font-bold text-[#10233B] mb-1">
                  No Saved Properties Yet
                </h4>
                <p className="text-xs text-[#6C7785] max-w-xs mb-6">
                  Click the heart icon on any residence to save it here for side-by-side comparison.
                </p>
                <button
                  onClick={() => {
                    onClose();
                    onExploreProperties();
                  }}
                  className="px-5 py-2.5 bg-[#10233B] text-white rounded-full text-xs font-semibold hover:bg-[#172D49] transition-colors"
                >
                  Browse Curated Homes
                </button>
              </div>
            ) : (
              favoriteProperties.map((property) => (
                <div
                  key={property.id}
                  className="bg-[#FCFBF9] rounded-2xl p-3 border border-[#E7E4DF] flex gap-3.5 group hover:border-[#D8B982] transition-colors"
                >
                  <div
                    onClick={() => {
                      onClose();
                      onSelectProperty(property);
                    }}
                    className="w-24 h-24 rounded-xl overflow-hidden bg-[#F7F4EF] shrink-0 cursor-pointer"
                  >
                    <img
                      src={property.image}
                      alt={property.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <h4
                          onClick={() => {
                            onClose();
                            onSelectProperty(property);
                          }}
                          className="text-sm font-bold text-[#10233B] hover:text-[#C6A36A] truncate cursor-pointer"
                        >
                          {property.name}
                        </h4>
                        <button
                          onClick={() => onRemoveFavorite(property.id)}
                          className="text-[#89919B] hover:text-red-500 p-1"
                          title="Remove from saved"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <span className="text-[11px] text-[#6C7785] block truncate mt-0.5">
                        {property.location}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <span className="text-sm font-bold text-[#10233B] tabular-nums">
                        {property.priceDisplay}
                      </span>
                      <button
                        onClick={() => {
                          onClose();
                          onSelectProperty(property);
                        }}
                        className="text-xs text-[#C6A36A] font-bold flex items-center gap-1 hover:underline"
                      >
                        <span>View</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Actions */}
          {favoriteProperties.length > 0 && (
            <div className="p-6 border-t border-[#E7E4DF] bg-[#FCFBF9]">
              <button
                onClick={() => {
                  onClose();
                  onExploreProperties();
                }}
                className="w-full py-3 bg-[#10233B] text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 hover:bg-[#172D49] transition-colors"
              >
                <span>Continue Browsing</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C6A36A]" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
