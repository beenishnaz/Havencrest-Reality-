import React from 'react';
import { ShieldCheck, Award, HeartHandshake, Sparkles, ArrowRight } from 'lucide-react';
import { LIVING_ROOM_IMAGE, HERO_IMAGE } from '../data/properties';

interface AboutPageProps {
  onContactClick: () => void;
  onExploreProperties: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onContactClick,
  onExploreProperties
}) => {
  return (
    <div className="pt-28 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Hero */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-[#C6A36A] uppercase block mb-3">
            Our Heritage & Philosophy
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#10233B] tracking-tight mb-6">
            Curating Homes of Distinction, Grace, and Longevity.
          </h1>
          <p className="text-base sm:text-lg text-[#6C7785] leading-relaxed">
            Founded in Austin, Texas, Havencrest Realty was established to redefine property acquisition through architectural discernment, data-grounded valuations, and deeply attentive client stewardship.
          </p>
        </div>

        {/* Dual Visual Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-[#E7E4DF]">
            <img
              src={HERO_IMAGE}
              alt="Havencrest architectural villa"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-[#E7E4DF]">
            <img
              src={LIVING_ROOM_IMAGE}
              alt="Interior design craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-[#FCFBF9] p-8 rounded-3xl border border-[#E7E4DF]">
            <div className="w-12 h-12 rounded-2xl bg-[#10233B] text-[#C6A36A] flex items-center justify-center mb-5">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#10233B] mb-2">
              Architectural Standard
            </h3>
            <p className="text-sm text-[#6C7785] leading-relaxed">
              We review over 50 data and structural parameters before representing any home, guaranteeing our clients genuine long-term value and craftsmanship.
            </p>
          </div>

          <div className="bg-[#FCFBF9] p-8 rounded-3xl border border-[#E7E4DF]">
            <div className="w-12 h-12 rounded-2xl bg-[#10233B] text-[#C6A36A] flex items-center justify-center mb-5">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#10233B] mb-2">
              Uncompromising Transparency
            </h3>
            <p className="text-sm text-[#6C7785] leading-relaxed">
              Every property docket includes verified historical title data, recent comparable sales, building health records, and true rental yield projections.
            </p>
          </div>

          <div className="bg-[#FCFBF9] p-8 rounded-3xl border border-[#E7E4DF]">
            <div className="w-12 h-12 rounded-2xl bg-[#10233B] text-[#C6A36A] flex items-center justify-center mb-5">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#10233B] mb-2">
              Lifelong Relationship
            </h3>
            <p className="text-sm text-[#6C7785] leading-relaxed">
              Our service extends far beyond closing. From interior architectural consults to bespoke property management, our clients rely on us for life.
            </p>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-[0.2em] text-[#C6A36A] uppercase block mb-2">
            The Advisory Team
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#10233B]">
            Principals & Specialists
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-20 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-6 border border-[#E7E4DF] text-center">
            <div className="w-20 h-20 rounded-full bg-[#10233B] text-[#C6A36A] text-xl font-bold flex items-center justify-center mx-auto mb-4">
              CV
            </div>
            <h4 className="text-base font-bold text-[#10233B]">Clara Vance</h4>
            <span className="text-xs text-[#C6A36A] font-semibold block mb-2">Managing Partner</span>
            <p className="text-xs text-[#6C7785] leading-relaxed">
              Over 14 years steering landmark residential sales in Texas and the Pacific Northwest.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#E7E4DF] text-center">
            <div className="w-20 h-20 rounded-full bg-[#10233B] text-[#C6A36A] text-xl font-bold flex items-center justify-center mx-auto mb-4">
              JS
            </div>
            <h4 className="text-base font-bold text-[#10233B]">Julian Sterling</h4>
            <span className="text-xs text-[#C6A36A] font-semibold block mb-2">Director of Developments</span>
            <p className="text-xs text-[#6C7785] leading-relaxed">
              Former urban planner focusing on modern penthouse communities and sustainability certifications.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#E7E4DF] text-center">
            <div className="w-20 h-20 rounded-full bg-[#10233B] text-[#C6A36A] text-xl font-bold flex items-center justify-center mx-auto mb-4">
              ER
            </div>
            <h4 className="text-base font-bold text-[#10233B]">Elena Rostova</h4>
            <span className="text-xs text-[#C6A36A] font-semibold block mb-2">Desert & Coastal Partner</span>
            <p className="text-xs text-[#6C7785] leading-relaxed">
              Specialist in custom architect-designed luxury desert retreats and high-yield rentals.
            </p>
          </div>
        </div>

        {/* Action Callout */}
        <div className="bg-[#10233B] rounded-3xl p-10 sm:p-14 text-white text-center max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3">
            Begin Your Property Search with Havencrest
          </h3>
          <p className="text-sm text-[#E7E4DF]/80 max-w-lg mx-auto mb-6">
            Whether buying your first home or expanding your portfolio, we look forward to welcoming you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onExploreProperties}
              className="px-6 py-3 rounded-full bg-[#C6A36A] hover:bg-[#D8B982] text-[#10233B] text-xs font-bold transition-colors"
            >
              Browse Properties
            </button>
            <button
              onClick={onContactClick}
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-semibold transition-colors"
            >
              Speak with an Advisor
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
