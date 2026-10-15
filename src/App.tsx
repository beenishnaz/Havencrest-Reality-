import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { BenefitsStrip } from './components/BenefitsStrip';
import { FeaturedProperties } from './components/FeaturedProperties';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CallToActionBanner } from './components/CallToActionBanner';
import { Footer } from './components/Footer';
import { PropertySearchPage } from './components/PropertySearchPage';
import { PropertyDetailsModal } from './components/PropertyDetailsModal';
import { ConsultationModal } from './components/ConsultationModal';
import { FavoritesDrawer } from './components/FavoritesDrawer';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { PROPERTIES_DATA } from './data/properties';
import { Property, ActiveView, SearchFilterState } from './types/property';

export function App() {
  const [activeView, setActiveView] = useState<ActiveView>('home');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [favoritesDrawerOpen, setFavoritesDrawerOpen] = useState(false);

  // Persistent favorites in localStorage
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('havencrest_favorites');
      return saved ? JSON.parse(saved) : ['prop-1', 'prop-3']; // seed initial 2 saved favorites
    } catch {
      return ['prop-1', 'prop-3'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('havencrest_favorites', JSON.stringify(favorites));
    } catch {
      // ignore
    }
  }, [favorites]);

  // Search & Filter State
  const [filterState, setFilterState] = useState<SearchFilterState>({
    location: '',
    propertyType: '',
    priceRange: '',
    status: 'All',
    minBeds: 0,
    sortBy: 'recommended'
  });

  const handleToggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleNavigate = (view: ActiveView) => {
    setActiveView(view);
    if (view === 'buy') {
      setFilterState((prev) => ({ ...prev, status: 'For Sale' }));
    } else if (view === 'rent') {
      setFilterState((prev) => ({ ...prev, status: 'For Rent' }));
    } else if (view === 'properties') {
      setFilterState((prev) => ({ ...prev, status: 'All' }));
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHeroSearch = (criteria: Partial<SearchFilterState>) => {
    setFilterState((prev) => ({
      ...prev,
      ...criteria,
      status: 'All'
    }));
    setActiveView('properties');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFilterChange = (updates: Partial<SearchFilterState>) => {
    setFilterState((prev) => ({ ...prev, ...updates }));
  };

  const handleResetFilters = () => {
    setFilterState({
      location: '',
      propertyType: '',
      priceRange: '',
      status: activeView === 'buy' ? 'For Sale' : activeView === 'rent' ? 'For Rent' : 'All',
      minBeds: 0,
      sortBy: 'recommended'
    });
  };

  const favoritePropertiesList = PROPERTIES_DATA.filter((p) => favorites.includes(p.id));

  return (
    <div className="min-h-screen bg-white text-[#243247] flex flex-col font-sans selection:bg-[#C6A36A]/25 selection:text-[#10233B]">
      {/* Fixed Sticky Header Navigation */}
      <Header
        activeView={activeView}
        onNavigate={handleNavigate}
        favoritesCount={favorites.length}
        onOpenFavorites={() => setFavoritesDrawerOpen(true)}
        onOpenConsultation={() => setConsultationOpen(true)}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {activeView === 'home' && (
          <>
            {/* 1. Hero Section inspired by reference composition */}
            <HeroSection
              onSearch={handleHeroSearch}
              onExploreClick={() => handleNavigate('properties')}
              onAboutClick={() => handleNavigate('about')}
            />

            {/* 2. Trust and Benefits 4-Column Strip */}
            <BenefitsStrip />

            {/* 3. Featured Handpicked Properties */}
            <FeaturedProperties
              properties={PROPERTIES_DATA}
              favorites={favorites}
              onToggleFavorite={handleToggleFavorite}
              onSelectProperty={(prop) => setSelectedProperty(prop)}
              onViewAllClick={() => handleNavigate('properties')}
            />

            {/* 4. Split About / Why Choose Us Section with living room photo */}
            <AboutSection onLearnMore={() => handleNavigate('about')} />

            {/* 5. Client Testimonials Section */}
            <TestimonialsSection />

            {/* 6. Full-Width Deep Navy CTA Banner */}
            <CallToActionBanner
              onStartSearch={() => handleNavigate('properties')}
              onTalkToAdvisor={() => setConsultationOpen(true)}
            />
          </>
        )}

        {activeView === 'properties' && (
          <PropertySearchPage
            properties={PROPERTIES_DATA}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onSelectProperty={(prop) => setSelectedProperty(prop)}
            filterState={filterState}
            onFilterChange={handleFilterChange}
            onResetFilters={handleResetFilters}
            pageTitle="All Curated Residences"
            pageSubtitle="Explore our full collection of residences for sale, private villas, and luxury city apartments."
          />
        )}

        {activeView === 'buy' && (
          <PropertySearchPage
            properties={PROPERTIES_DATA}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onSelectProperty={(prop) => setSelectedProperty(prop)}
            filterState={{ ...filterState, status: 'For Sale' }}
            onFilterChange={handleFilterChange}
            onResetFilters={handleResetFilters}
            pageTitle="Exceptional Homes for Sale"
            pageSubtitle="Find premier residential estates, architectural homes, and luxury penthouses ready for acquisition."
          />
        )}

        {activeView === 'rent' && (
          <PropertySearchPage
            properties={PROPERTIES_DATA}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onSelectProperty={(prop) => setSelectedProperty(prop)}
            filterState={{ ...filterState, status: 'For Rent' }}
            onFilterChange={handleFilterChange}
            onResetFilters={handleResetFilters}
            pageTitle="Luxury Residences for Rent"
            pageSubtitle="Discover fully-appointed rental estates and boutique city apartments in premier neighborhoods."
          />
        )}

        {activeView === 'about' && (
          <>
            <AboutPage
              onContactClick={() => handleNavigate('contact')}
              onExploreProperties={() => handleNavigate('properties')}
            />
            <CallToActionBanner
              onStartSearch={() => handleNavigate('properties')}
              onTalkToAdvisor={() => setConsultationOpen(true)}
            />
          </>
        )}

        {activeView === 'contact' && <ContactPage />}
      </main>

      {/* Global Conversion Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConsultation={() => setConsultationOpen(true)}
      />

      {/* Interactive Modals & Drawers */}
      <PropertyDetailsModal
        property={selectedProperty}
        isOpen={Boolean(selectedProperty)}
        onClose={() => setSelectedProperty(null)}
        isFavorite={selectedProperty ? favorites.includes(selectedProperty.id) : false}
        onToggleFavorite={handleToggleFavorite}
      />

      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />

      <FavoritesDrawer
        isOpen={favoritesDrawerOpen}
        onClose={() => setFavoritesDrawerOpen(false)}
        favoriteProperties={favoritePropertiesList}
        onRemoveFavorite={(id) => setFavorites((prev) => prev.filter((item) => item !== id))}
        onSelectProperty={(prop) => setSelectedProperty(prop)}
        onExploreProperties={() => {
          setFavoritesDrawerOpen(false);
          handleNavigate('properties');
        }}
      />
    </div>
  );
}

export default App;
