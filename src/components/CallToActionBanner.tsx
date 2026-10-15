import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { CTA_ESTATE_IMAGE } from '../data/properties';

interface CallToActionBannerProps {
  onStartSearch: () => void;
  onTalkToAdvisor: () => void;
}

export const CallToActionBanner: React.FC<CallToActionBannerProps> = ({
  onStartSearch,
  onTalkToAdvisor
}) => {
  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-[#10233B] text-white shadow-2xl">
          
          {/* Background Image on Right with Seamless Navy Blend */}
          <div className="absolute inset-y-0 right-0 w-full lg:w-3/5 z-0">
            <img
              src={CTA_ESTATE_IMAGE}
              alt="Luxury residential estate illuminated at twilight"
              className="w-full h-full object-cover object-center"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            {/* Gradient Scrim that blends the twilight image into the solid deep navy on the left */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#10233B] via-[#10233B]/80 to-transparent lg:w-3/4" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#10233B] via-transparent to-transparent lg:hidden" />
          </div>

          {/* Left Text Block */}
          <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-2xl flex flex-col justify-center min-h-[380px] lg:min-h-[420px]">
            <div className="inline-flex items-center gap-2 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#C6A36A]" />
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#C6A36A] uppercase">
                Ready to Find Your Perfect Home?
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 leading-tight text-balance">
              Let’s Make It Happen.
            </h2>

            <p className="text-sm sm:text-base text-[#E7E4DF]/80 leading-relaxed mb-8 max-w-lg">
              Explore the best properties, get personalized market insight, and take the next step towards your dream home.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onStartSearch}
                className="px-6 py-3.5 rounded-full bg-[#C6A36A] hover:bg-[#D8B982] active:scale-95 text-[#10233B] font-bold text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 text-[#10233B]" />
              </button>

              <button
                onClick={onTalkToAdvisor}
                className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium text-sm transition-all duration-200 backdrop-blur-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A36A]"
              >
                Talk to an Advisor
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
