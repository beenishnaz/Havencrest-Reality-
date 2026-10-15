import React, { useState, useEffect } from 'react';
import { X, Heart, MapPin, Bed, Bath, Maximize2, Calendar, Phone, Mail, Check, Calculator, Send, ShieldCheck, Share2 } from 'lucide-react';
import { Property } from '../types/property';

interface PropertyDetailsModalProps {
  property: Property | null;
  isOpen: boolean;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
}

export const PropertyDetailsModal: React.FC<PropertyDetailsModalProps> = ({
  property,
  isOpen,
  onClose,
  isFavorite,
  onToggleFavorite
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [tourDate, setTourDate] = useState('');
  const [tourTime, setTourTime] = useState('11:00 AM');
  const [visitorName, setVisitorName] = useState('');
  const [visitorEmail, setVisitorEmail] = useState('');
  const [visitorPhone, setVisitorPhone] = useState('');
  const [tourSubmitted, setTourSubmitted] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);

  // Mortgage Calculator state
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTermYears, setLoanTermYears] = useState(30);

  useEffect(() => {
    setActiveImageIndex(0);
    setTourSubmitted(false);
  }, [property]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !property) return null;

  // Monthly Mortgage Calculation
  const calculateMonthlyMortgage = () => {
    if (property.status === 'For Rent') return property.price;
    const principal = property.price * (1 - downPaymentPercent / 100);
    const monthlyRate = interestRate / 100 / 12;
    const totalPayments = loanTermYears * 12;
    if (monthlyRate === 0) return principal / totalPayments;
    const monthlyPayment =
      (principal * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments))) /
      (Math.pow(1 + monthlyRate, totalPayments) - 1);
    return Math.round(monthlyPayment);
  };

  const handleTourSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!visitorName.trim() || !visitorEmail.trim()) return;
    setTourSubmitted(true);
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#10233B]/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="min-h-full flex items-center justify-center p-3 sm:p-6 lg:p-8">
        <div className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#E7E4DF] my-8 animate-fadeIn">
          
          {/* Top Bar with actions */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#E7E4DF] bg-white sticky top-0 z-20">
            <div className="flex items-center gap-3">
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                  property.status === 'For Sale'
                    ? 'bg-[#10233B] text-white'
                    : 'bg-[#274565] text-white'
                }`}
              >
                {property.status}
              </span>
              <span className="text-xs text-[#89919B] hidden sm:inline">
                ID: {property.id.toUpperCase()}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleShare}
                className="p-2 text-[#6C7785] hover:text-[#10233B] hover:bg-[#F7F4EF] rounded-full transition-colors flex items-center gap-1.5 text-xs font-medium"
                title="Share Property"
              >
                <Share2 className="w-4 h-4" />
                <span className="hidden sm:inline">
                  {copiedShare ? 'Copied Link!' : 'Share'}
                </span>
              </button>

              <button
                type="button"
                onClick={(e) => onToggleFavorite(property.id, e)}
                className="p-2 text-[#6C7785] hover:text-[#10233B] hover:bg-[#F7F4EF] rounded-full transition-colors"
                aria-label="Toggle Favorite"
              >
                <Heart
                  className={`w-5 h-5 ${
                    isFavorite ? 'fill-[#C6A36A] text-[#C6A36A]' : 'text-[#6C7785]'
                  }`}
                />
              </button>

              <button
                type="button"
                onClick={onClose}
                className="p-2 text-[#6C7785] hover:text-[#10233B] hover:bg-[#F7F4EF] rounded-full transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
            
            {/* Gallery View */}
            <div className="mb-8">
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#F7F4EF] shadow-inner mb-3">
                <img
                  src={property.gallery[activeImageIndex] || property.image}
                  alt={`${property.name} view ${activeImageIndex + 1}`}
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
              </div>

              {property.gallery.length > 1 && (
                <div className="flex items-center gap-3 overflow-x-auto pb-2">
                  {property.gallery.map((imgUrl, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-24 h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                        activeImageIndex === idx
                          ? 'border-[#C6A36A] scale-102 shadow-sm'
                          : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={imgUrl} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Title, Address & Pricing Grid */}
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-8 border-b border-[#E7E4DF]">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#10233B] tracking-tight">
                  {property.name}
                </h2>
                <p className="text-sm text-[#C6A36A] font-medium mt-1 mb-2">
                  {property.tagline}
                </p>
                <div className="flex items-center gap-2 text-sm text-[#6C7785]">
                  <MapPin className="w-4 h-4 text-[#C6A36A] shrink-0" />
                  <span>{property.address}</span>
                </div>
              </div>

              <div className="flex flex-col lg:items-end bg-[#F7F4EF]/70 p-4 rounded-2xl border border-[#E7E4DF]/70">
                <span className="text-xs text-[#89919B] font-semibold uppercase tracking-wider">
                  {property.status === 'For Sale' ? 'Listing Price' : 'Monthly Rental'}
                </span>
                <span className="text-3xl font-extrabold text-[#10233B] tabular-nums mt-0.5">
                  {property.priceDisplay}
                </span>
                <span className="text-xs text-[#6C7785] mt-1">
                  Est. ${calculateMonthlyMortgage().toLocaleString()} / mo
                </span>
              </div>
            </div>

            {/* Key Specifications Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-8 border-b border-[#E7E4DF]">
              <div className="bg-[#FCFBF9] p-4 rounded-xl border border-[#E7E4DF] flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#F7F4EF] flex items-center justify-center text-[#10233B]">
                  <Bed className="w-5 h-5 text-[#C6A36A]" />
                </div>
                <div>
                  <span className="text-xs text-[#89919B] block">Bedrooms</span>
                  <span className="text-base font-bold text-[#10233B] tabular-nums">{property.bedrooms} Beds</span>
                </div>
              </div>

              <div className="bg-[#FCFBF9] p-4 rounded-xl border border-[#E7E4DF] flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#F7F4EF] flex items-center justify-center text-[#10233B]">
                  <Bath className="w-5 h-5 text-[#C6A36A]" />
                </div>
                <div>
                  <span className="text-xs text-[#89919B] block">Bathrooms</span>
                  <span className="text-base font-bold text-[#10233B] tabular-nums">{property.bathrooms} Baths</span>
                </div>
              </div>

              <div className="bg-[#FCFBF9] p-4 rounded-xl border border-[#E7E4DF] flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#F7F4EF] flex items-center justify-center text-[#10233B]">
                  <Maximize2 className="w-5 h-5 text-[#C6A36A]" />
                </div>
                <div>
                  <span className="text-xs text-[#89919B] block">Living Area</span>
                  <span className="text-base font-bold text-[#10233B] tabular-nums">{property.area.toLocaleString()} sq ft</span>
                </div>
              </div>

              <div className="bg-[#FCFBF9] p-4 rounded-xl border border-[#E7E4DF] flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#F7F4EF] flex items-center justify-center text-[#10233B]">
                  <Calendar className="w-5 h-5 text-[#C6A36A]" />
                </div>
                <div>
                  <span className="text-xs text-[#89919B] block">Year Built</span>
                  <span className="text-base font-bold text-[#10233B] tabular-nums">{property.yearBuilt}</span>
                </div>
              </div>
            </div>

            {/* Split Section: Narrative & Features vs Interactive Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 py-8">
              
              {/* Left Column: Description & Amenities (7 cols) */}
              <div className="lg:col-span-7 flex flex-col gap-8">
                <div>
                  <h3 className="text-lg font-bold text-[#10233B] mb-3">
                    Architectural Overview
                  </h3>
                  <p className="text-sm sm:text-base text-[#6C7785] leading-relaxed">
                    {property.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#10233B] mb-4">
                    Key Features & Amenities
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {property.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#243247]">
                        <div className="w-5 h-5 rounded-full bg-[#34785D]/10 text-[#34785D] flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mortgage Estimator Tool (if sale) */}
                {property.status === 'For Sale' && (
                  <div className="bg-[#FCFBF9] p-6 rounded-2xl border border-[#E7E4DF]">
                    <div className="flex items-center gap-2 text-sm font-bold text-[#10233B] mb-4">
                      <Calculator className="w-4 h-4 text-[#C6A36A]" />
                      <span>Mortgage Calculator</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                      <div>
                        <label className="text-xs text-[#89919B] font-medium block mb-1">
                          Down Payment ({downPaymentPercent}%)
                        </label>
                        <input
                          type="range"
                          min="5"
                          max="50"
                          step="5"
                          value={downPaymentPercent}
                          onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                          className="w-full accent-[#C6A36A] cursor-pointer"
                        />
                        <span className="text-xs font-semibold text-[#10233B] tabular-nums mt-1 block">
                          ${((property.price * downPaymentPercent) / 100).toLocaleString()}
                        </span>
                      </div>

                      <div>
                        <label className="text-xs text-[#89919B] font-medium block mb-1">
                          Interest Rate ({interestRate}%)
                        </label>
                        <input
                          type="range"
                          min="4"
                          max="9"
                          step="0.1"
                          value={interestRate}
                          onChange={(e) => setInterestRate(Number(e.target.value))}
                          className="w-full accent-[#C6A36A] cursor-pointer"
                        />
                      </div>

                      <div>
                        <label className="text-xs text-[#89919B] font-medium block mb-1">
                          Loan Term
                        </label>
                        <select
                          value={loanTermYears}
                          onChange={(e) => setLoanTermYears(Number(e.target.value))}
                          className="w-full py-1.5 px-3 rounded-lg border border-[#E7E4DF] text-xs font-semibold text-[#10233B] bg-white"
                        >
                          <option value="15">15 Years Fixed</option>
                          <option value="30">30 Years Fixed</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-[#E7E4DF] text-xs">
                      <span className="text-[#6C7785]">Estimated Monthly Principal & Interest:</span>
                      <span className="text-base font-bold text-[#10233B] tabular-nums">
                        ${calculateMonthlyMortgage().toLocaleString()} / mo
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Tour Booking & Agent Card (5 cols) */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                
                {/* Tour Booking Box */}
                <div className="bg-[#F7F4EF] p-6 rounded-2xl border border-[#E7E4DF]">
                  <h3 className="text-base font-bold text-[#10233B] mb-1">
                    Schedule a Private Viewing
                  </h3>
                  <p className="text-xs text-[#6C7785] mb-4">
                    Tour this residence in-person or virtually with our specialist.
                  </p>

                  {tourSubmitted ? (
                    <div className="bg-white p-5 rounded-xl border border-[#34785D]/30 text-center animate-fadeIn">
                      <div className="w-10 h-10 rounded-full bg-[#34785D]/15 text-[#34785D] mx-auto flex items-center justify-center mb-2">
                        <Check className="w-5 h-5" />
                      </div>
                      <h4 className="text-sm font-bold text-[#10233B]">Viewing Requested!</h4>
                      <p className="text-xs text-[#6C7785] mt-1">
                        Thank you, {visitorName}. {property.agent.name} will reach out shortly at {visitorEmail} to confirm your {tourTime} visit.
                      </p>
                      <button
                        onClick={() => setTourSubmitted(false)}
                        className="mt-3 text-xs text-[#C6A36A] font-semibold hover:underline"
                      >
                        Book another time
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleTourSubmit} className="flex flex-col gap-3">
                      <div>
                        <label className="text-[11px] font-bold text-[#89919B] uppercase tracking-wider block mb-1">
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          required
                          value={tourDate}
                          onChange={(e) => setTourDate(e.target.value)}
                          className="w-full py-2 px-3 bg-white rounded-lg border border-[#E7E4DF] text-xs text-[#10233B] focus:outline-none focus:border-[#C6A36A]"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-bold text-[#89919B] uppercase tracking-wider block mb-1">
                          Preferred Time
                        </label>
                        <select
                          value={tourTime}
                          onChange={(e) => setTourTime(e.target.value)}
                          className="w-full py-2 px-3 bg-white rounded-lg border border-[#E7E4DF] text-xs text-[#10233B] focus:outline-none focus:border-[#C6A36A]"
                        >
                          <option value="10:00 AM">10:00 AM</option>
                          <option value="11:30 AM">11:30 AM</option>
                          <option value="2:00 PM">2:00 PM</option>
                          <option value="4:30 PM">4:30 PM</option>
                          <option value="6:00 PM">6:00 PM (Sunset Viewing)</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-[11px] font-bold text-[#89919B] uppercase tracking-wider block mb-1">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Jane Doe"
                          value={visitorName}
                          onChange={(e) => setVisitorName(e.target.value)}
                          className="w-full py-2 px-3 bg-white rounded-lg border border-[#E7E4DF] text-xs text-[#10233B] focus:outline-none focus:border-[#C6A36A]"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div>
                          <label className="text-[11px] font-bold text-[#89919B] uppercase tracking-wider block mb-1">
                            Email
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="jane@example.com"
                            value={visitorEmail}
                            onChange={(e) => setVisitorEmail(e.target.value)}
                            className="w-full py-2 px-3 bg-white rounded-lg border border-[#E7E4DF] text-xs text-[#10233B] focus:outline-none focus:border-[#C6A36A]"
                          />
                        </div>
                        <div>
                          <label className="text-[11px] font-bold text-[#89919B] uppercase tracking-wider block mb-1">
                            Phone
                          </label>
                          <input
                            type="tel"
                            placeholder="+1 (555) 000-0000"
                            value={visitorPhone}
                            onChange={(e) => setVisitorPhone(e.target.value)}
                            className="w-full py-2 px-3 bg-white rounded-lg border border-[#E7E4DF] text-xs text-[#10233B] focus:outline-none focus:border-[#C6A36A]"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="mt-2 w-full py-2.5 px-4 bg-[#10233B] hover:bg-[#172D49] text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2 shadow-sm transition-colors"
                      >
                        <Send className="w-3.5 h-3.5 text-[#C6A36A]" />
                        <span>Request Private Viewing</span>
                      </button>

                      <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#89919B] mt-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#34785D]" />
                        <span>Zero pressure · Confidential representation</span>
                      </div>
                    </form>
                  )}
                </div>

                {/* Assigned Agent Profile Card */}
                <div className="bg-white p-5 rounded-2xl border border-[#E7E4DF] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold tracking-widest text-[#C6A36A] uppercase block">
                      Assigned Partner
                    </span>
                    <h4 className="text-sm font-bold text-[#10233B] mt-0.5">
                      {property.agent.name}
                    </h4>
                    <span className="text-xs text-[#6C7785] block">
                      {property.agent.title}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={`tel:${property.agent.phone}`}
                      className="w-9 h-9 rounded-full bg-[#F7F4EF] hover:bg-[#10233B] hover:text-white text-[#10233B] flex items-center justify-center transition-colors"
                      title={`Call ${property.agent.name}`}
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                    <a
                      href={`mailto:${property.agent.email}`}
                      className="w-9 h-9 rounded-full bg-[#F7F4EF] hover:bg-[#10233B] hover:text-white text-[#10233B] flex items-center justify-center transition-colors"
                      title={`Email ${property.agent.name}`}
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
