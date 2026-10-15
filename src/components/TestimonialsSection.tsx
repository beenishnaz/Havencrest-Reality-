import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/properties';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-18 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-[0.2em] text-[#C6A36A] uppercase block mb-2">
            Client Experiences
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#10233B] tracking-tight">
            Stories From Home
          </h2>
          <p className="text-sm sm:text-base text-[#6C7785] mt-2">
            Hear from buyers, renters, and property owners who found their sanctuary with Havencrest Realty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="bg-[#FCFBF9] rounded-2xl p-7 border border-[#E7E4DF] flex flex-col justify-between hover:shadow-md transition-shadow relative"
            >
              <div>
                <Quote className="w-8 h-8 text-[#D8B982]/60 mb-4" />
                <p className="text-sm sm:text-base text-[#243247] leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#E7E4DF]/70">
                <span className="text-sm font-bold text-[#10233B] block">
                  {t.author}
                </span>
                <span className="text-xs text-[#6C7785] block mt-0.5">
                  {t.role} · {t.location}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
