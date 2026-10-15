import React from 'react';
import { BadgeCheck, ShieldCheck, Headphones, Heart } from 'lucide-react';
import { BENEFITS_DATA } from '../data/properties';

export const BenefitsStrip: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'BadgeCheck':
        return <BadgeCheck className="w-6 h-6 text-[#10233B]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#10233B]" />;
      case 'Headphones':
        return <Headphones className="w-6 h-6 text-[#10233B]" />;
      case 'Heart':
        return <Heart className="w-6 h-6 text-[#10233B]" />;
      default:
        return <BadgeCheck className="w-6 h-6 text-[#10233B]" />;
    }
  };

  return (
    <section className="py-12 lg:py-16 bg-white border-b border-[#E7E4DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#E7E4DF]">
          {BENEFITS_DATA.map((benefit) => (
            <div
              key={benefit.id}
              className="flex flex-col items-center text-center px-4 sm:px-6 group"
            >
              <div className="w-14 h-14 rounded-full bg-[#F7F4EF] group-hover:bg-[#EFE9DF] flex items-center justify-center mb-4 transition-colors duration-300">
                {getIcon(benefit.iconName)}
              </div>
              <h3 className="text-base font-bold text-[#10233B] mb-1.5 tracking-tight">
                {benefit.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#6C7785] leading-relaxed max-w-xs">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
