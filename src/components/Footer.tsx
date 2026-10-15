import React from 'react';
import { Home as HomeIcon, Phone, Mail, MapPin, Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';
import { ActiveView } from '../types/property';

interface FooterProps {
  onNavigate: (view: ActiveView) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenConsultation }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-[#E7E4DF] text-[#243247] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#E7E4DF]">
          
          {/* Column 1: Brand (4 cols) */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#10233B] flex items-center justify-center text-[#C6A36A]">
                <HomeIcon className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-[#10233B]">
                  Havencrest <span className="font-light text-[#274565]">Realty</span>
                </span>
                <span className="text-[9px] font-semibold tracking-[0.2em] text-[#C6A36A] uppercase -mt-0.5">
                  Find Your Place
                </span>
              </div>
            </div>
            
            <p className="text-sm text-[#6C7785] leading-relaxed max-w-sm mb-6">
              Thoughtfully selected homes and personalized guidance for every stage of your property journey.
            </p>

            <div className="flex items-center gap-3">
              <button
                onClick={onOpenConsultation}
                className="px-4 py-2 bg-[#F7F4EF] hover:bg-[#EFE9DF] text-[#10233B] text-xs font-semibold rounded-lg transition-colors"
              >
                Request an Appraisal
              </button>
            </div>
          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="text-sm font-bold text-[#10233B] tracking-wide uppercase mb-4">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-[#6C7785]">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#10233B] hover:translate-x-0.5 transition-all"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('buy')}
                  className="hover:text-[#10233B] hover:translate-x-0.5 transition-all"
                >
                  Buy a Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('rent')}
                  className="hover:text-[#10233B] hover:translate-x-0.5 transition-all"
                >
                  Rent a Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('properties')}
                  className="hover:text-[#10233B] hover:translate-x-0.5 transition-all"
                >
                  All Properties
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#10233B] hover:translate-x-0.5 transition-all"
                >
                  About Havencrest
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Get in Touch (3 cols) */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="text-sm font-bold text-[#10233B] tracking-wide uppercase mb-4">
              Get in Touch
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-[#6C7785]">
              <li>
                <a
                  href="tel:+15550102040"
                  className="flex items-center gap-2.5 hover:text-[#10233B] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#C6A36A] shrink-0" />
                  <span>+1 (555) 010-2040</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@havencrest.example"
                  className="flex items-center gap-2.5 hover:text-[#10233B] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#C6A36A] shrink-0" />
                  <span>hello@havencrest.example</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#C6A36A] shrink-0 mt-0.5" />
                  <span>1200 Congress Ave, Suite 800<br />Austin, Texas 78701</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Follow Us (2 cols) */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="text-sm font-bold text-[#10233B] tracking-wide uppercase mb-4">
              Follow Us
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#F7F4EF] hover:bg-[#10233B] hover:text-white text-[#10233B] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#F7F4EF] hover:bg-[#10233B] hover:text-white text-[#10233B] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#F7F4EF] hover:bg-[#10233B] hover:text-white text-[#10233B] flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#F7F4EF] hover:bg-[#10233B] hover:text-white text-[#10233B] flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs text-[#89919B] mt-4 leading-relaxed">
              Curated architectural tours & market analyses published weekly.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#89919B]">
          <p>© {currentYear} Havencrest Realty. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => alert("Privacy Policy: Havencrest Realty respects your privacy. We do not sell or share personal information with third parties.")}
              className="hover:text-[#10233B] transition-colors"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button
              onClick={() => alert("Terms of Service: All property listings are subject to verification and prior sale/lease. Information is provided for personal, non-commercial use.")}
              className="hover:text-[#10233B] transition-colors"
            >
              Terms & Conditions
            </button>
            <span>·</span>
            <button
              onClick={() => alert("Equal Housing Opportunity: Havencrest Realty is pledged to the letter and spirit of U.S. policy for the achievement of equal housing opportunity.")}
              className="hover:text-[#10233B] transition-colors"
            >
              Equal Housing Opportunity
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
