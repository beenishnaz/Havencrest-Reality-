import React, { useState, useEffect } from 'react';
import { Heart, Menu, X, ArrowRight, Home as HomeIcon } from 'lucide-react';
import { ActiveView } from '../types/property';

interface HeaderProps {
  activeView: ActiveView;
  onNavigate: (view: ActiveView) => void;
  favoritesCount: number;
  onOpenFavorites: () => void;
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeView,
  onNavigate,
  favoritesCount,
  onOpenFavorites,
  onOpenConsultation
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; view: ActiveView }[] = [
    { label: 'Home', view: 'home' },
    { label: 'Buy', view: 'buy' },
    { label: 'Rent', view: 'rent' },
    { label: 'Properties', view: 'properties' },
    { label: 'About', view: 'about' },
    { label: 'Contact', view: 'contact' }
  ];

  const handleNavClick = (view: ActiveView) => {
    onNavigate(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E7E4DF] py-3.5'
            : 'bg-white/90 backdrop-blur-sm border-b border-[#E7E4DF]/60 py-4.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Wordmark (Single cohesive lockup) */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A36A] rounded-md p-1"
              aria-label="Havencrest Realty Home"
            >
              <div className="w-10 h-10 rounded-lg bg-[#10233B] flex items-center justify-center text-[#C6A36A] shadow-sm group-hover:bg-[#172D49] transition-colors">
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:scale-105"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 10.5L12 3l9 7.5" />
                  <path d="M5 9.5V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5" />
                  <path d="M10 21V12h4v9" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold tracking-tight text-[#10233B] whitespace-nowrap">
                  Havencrest <span className="font-light text-[#274565]">Realty</span>
                </span>
                <span className="text-[9px] font-semibold tracking-[0.2em] text-[#C6A36A] uppercase -mt-0.5">
                  Find Your Place
                </span>
              </div>
            </button>

            {/* Zone 2: Navigation Links (Single-line, quiet hover underlines) */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = activeView === link.view;
                return (
                  <button
                    key={link.view}
                    onClick={() => handleNavClick(link.view)}
                    className={`relative py-1 text-sm font-medium whitespace-nowrap transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A36A] rounded ${
                      isActive
                        ? 'text-[#10233B] font-semibold'
                        : 'text-[#6C7785] hover:text-[#10233B]'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C6A36A] rounded-full animate-fadeIn" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Zone 3: Primary Actions (Favorites + Book Consultation) */}
            <div className="flex items-center gap-3">
              <button
                onClick={onOpenFavorites}
                className="relative p-2.5 text-[#243247] hover:text-[#10233B] hover:bg-[#F7F4EF] rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A36A]"
                aria-label={`Saved properties: ${favoritesCount} items`}
                title="View Saved Properties"
              >
                <Heart className={`w-5 h-5 ${favoritesCount > 0 ? 'fill-[#C6A36A] text-[#C6A36A]' : 'text-[#6C7785]'}`} />
                {favoritesCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-[#10233B] text-white text-[10px] font-bold rounded-full flex items-center justify-center tabular-nums">
                    {favoritesCount}
                  </span>
                )}
              </button>

              <button
                onClick={onOpenConsultation}
                className="hidden sm:inline-flex items-center gap-2 px-4.5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#10233B] hover:bg-[#172D49] active:scale-[0.98] rounded-full shadow-sm hover:shadow-md transition-all duration-200 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A36A]"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C6A36A]" />
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-[#10233B] hover:bg-[#F7F4EF] rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A36A]"
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-5/6 max-w-sm bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto z-10 animate-slideLeft">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#E7E4DF]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#10233B] flex items-center justify-center text-[#C6A36A]">
                    <HomeIcon className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-[#10233B]">Havencrest Realty</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-[#6C7785] hover:text-[#10233B] rounded-lg"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-2 mt-6">
                {navLinks.map((link) => {
                  const isActive = activeView === link.view;
                  return (
                    <button
                      key={link.view}
                      onClick={() => handleNavClick(link.view)}
                      className={`flex items-center justify-between py-3 px-3 text-left font-medium rounded-lg text-sm transition-colors ${
                        isActive
                          ? 'bg-[#F7F4EF] text-[#10233B] font-semibold'
                          : 'text-[#6C7785] hover:text-[#10233B] hover:bg-[#FBF9F5]'
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && <div className="w-1.5 h-1.5 rounded-full bg-[#C6A36A]" />}
                    </button>
                  );
                })}
              </nav>
            </div>

            <div className="pt-6 border-t border-[#E7E4DF] flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenFavorites();
                }}
                className="flex items-center justify-between w-full py-2.5 px-3 rounded-lg border border-[#E7E4DF] text-sm font-medium text-[#243247] hover:bg-[#F7F4EF]"
              >
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-[#C6A36A]" />
                  <span>Saved Properties</span>
                </div>
                <span className="text-xs bg-[#10233B] text-white px-2 py-0.5 rounded-full tabular-nums">
                  {favoritesCount}
                </span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 px-4 bg-[#10233B] text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#C6A36A]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
