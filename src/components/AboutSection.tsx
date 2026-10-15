import React from 'react';
import { LIVING_ROOM_IMAGE } from '../data/properties';
import { Sparkles, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onLearnMore?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMore }) => {
  const stats = [
    { value: '1,200+', label: 'Happy Clients' },
    { value: '350+', label: 'Homes Listed' },
    { value: '18', label: 'Neighborhoods' },
    { value: '97%', label: 'Client Satisfaction' }
  ];

  return (
    <section className="py-18 lg:py-28 bg-[#F7F4EF] border-y border-[#E7E4DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Architectural Interior Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white aspect-[4/3] bg-white group">
              <img
                src={LIVING_ROOM_IMAGE}
                alt="Contemporary light-filled living room interior with oak and linen furnishings"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Decorative Subtle Overlay Tag matching reference: 'More Than Just a Home' */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-lg border border-[#E7E4DF]/60">
                <span className="font-script text-2xl sm:text-3xl text-[#10233B] block leading-tight">
                  More Than Just
                </span>
                <span className="text-xs font-bold tracking-widest text-[#C6A36A] uppercase block">
                  a Home
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Credibility Metrics */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#C6A36A]" />
              <span className="text-xs font-bold tracking-[0.2em] text-[#C6A36A] uppercase">
                The Havencrest Difference
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#10233B] tracking-tight leading-[1.15] mb-5 text-balance">
              More Than a Property. <br />
              <span className="text-[#274565]">A Place to Belong.</span>
            </h2>

            <p className="text-base text-[#6C7785] leading-relaxed mb-8">
              Finding a home is about more than square footage and postal codes. We combine deep architectural appreciation, neighborhood intelligence, and transparent advisory so that your next transition feels calm, elevated, and confident.
            </p>

            {/* 4 Statistics in a Balanced Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-[#E7E4DF]">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#10233B] tracking-tight tabular-nums">
                    {stat.value}
                  </span>
                  <span className="text-xs font-medium text-[#89919B] mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {onLearnMore && (
              <div className="mt-8">
                <button
                  onClick={onLearnMore}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#10233B] hover:text-[#C6A36A] transition-colors"
                >
                  <span>Learn more about our standards</span>
                  <ArrowRight className="w-4 h-4 text-[#C6A36A]" />
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
