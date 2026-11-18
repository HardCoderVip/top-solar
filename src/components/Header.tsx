import React, { useState, useEffect } from 'react';
import { Sun, Phone, FileText, Users, Menu, X, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/solarData';

interface HeaderProps {
  onOpenConsultation: (systemType?: string) => void;
  onOpenLeadsCRM: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation, onOpenLeadsCRM }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-neutral-200'
          : 'bg-white border-b border-neutral-100'
      }`}
    >
      {/* Top credential micro-bar */}
      <div className="hidden sm:flex bg-neutral-900 text-neutral-300 text-[11px] py-1 px-4 sm:px-8 items-center justify-between gap-4 border-b border-neutral-800">
        <div className="flex items-center gap-2 sm:gap-4 min-w-0 truncate">
          <span className="font-semibold text-amber-400 shrink-0">Top Solar Solution®</span>
          <span className="text-neutral-500 shrink-0">|</span>
          <span className="text-neutral-300 shrink-0">GST No: <strong className="text-white font-mono">{COMPANY_INFO.gstNumber}</strong></span>
          <span className="hidden lg:inline text-neutral-500 shrink-0">|</span>
          <span className="hidden lg:inline text-emerald-400 font-medium truncate">MNRE Govt of India Recognized · MEDA & GEDA Approved</span>
        </div>
        <div className="flex items-center gap-3 font-mono text-neutral-300 shrink-0">
          <a href="tel:+919561617668" className="hover:text-amber-400 transition-colors flex items-center gap-1 whitespace-nowrap">
            <Phone className="w-3 h-3 text-amber-400" />
            <span>+91 95616 17668</span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2 sm:gap-3 xl:gap-4">
          {/* Zone 1: Official Brand Logo */}
          <a
            href="/"
            className="flex items-center text-neutral-900 group shrink-0 min-w-0"
            title="Top Solar Solution® - Clean Energy, Secure Tomorrow"
          >
            <img
              src={COMPANY_INFO.logoUrl}
              alt="Top Solar Solution® - Clean Energy, Secure Tomorrow"
              className="h-9 sm:h-11 xl:h-12 w-auto max-w-[125px] sm:max-w-[180px] xl:max-w-[190px] object-contain transition-transform group-hover:scale-[1.02]"
              referrerPolicy="no-referrer"
            />
          </a>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden xl:flex items-center gap-3.5 2xl:gap-5 text-[13px] 2xl:text-sm font-medium text-neutral-600 min-w-0">
            <a
              href="#society-projects"
              className="text-amber-600 hover:text-amber-700 font-semibold transition-colors whitespace-nowrap shrink-0"
            >
              Buildings & Societies
            </a>
            <a
              href="#solutions"
              className="hover:text-neutral-900 transition-colors whitespace-nowrap shrink-0"
            >
              Solar Systems
            </a>
            <a
              href="#projects"
              className="hover:text-neutral-900 transition-colors whitespace-nowrap shrink-0"
            >
              Projects
            </a>
            <a
              href="#calculator"
              className="hover:text-neutral-900 transition-colors whitespace-nowrap shrink-0"
            >
              Calculator
            </a>
            <a
              href="#partners"
              className="hover:text-neutral-900 transition-colors whitespace-nowrap shrink-0"
            >
              Partners
            </a>
            <a
              href="#reviews"
              className="hover:text-neutral-900 transition-colors whitespace-nowrap shrink-0"
            >
              Reviews
            </a>
          </nav>

          {/* Zone 3: Primary action + CRM portal shortcut */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Quick brochure link */}
            <a
              href={COMPANY_INFO.brochurePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Top_Solar_Solutions_Brochure.pdf"
              className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-2 text-xs font-semibold text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-md transition-colors whitespace-nowrap"
              title="Download Official Top Solar Solution Brochure"
            >
              <FileText className="w-3.5 h-3.5 text-neutral-600 shrink-0" />
              <span>Brochure</span>
            </a>

            {/* Leads Portal CRM view for business management */}
            <button
              onClick={onOpenLeadsCRM}
              className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-md transition-colors whitespace-nowrap cursor-pointer"
              title="View Client Inquiries & Sales CRM"
            >
              <Users className="w-3.5 h-3.5 shrink-0" />
              <span>Leads CRM</span>
            </button>

            {/* Primary Action Button */}
            <button
              onClick={() => onOpenConsultation()}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-3.5 sm:py-2.5 text-xs sm:text-[13px] 2xl:text-sm font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg shadow-xs hover:shadow transition-all whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="sm:hidden">Book Consult</span>
              <span className="hidden sm:inline">Book Solar Consultation</span>
            </button>

            {/* Mobile / Tablet menu button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100 rounded-md cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-neutral-200 px-4 pt-2 pb-6 space-y-3 shadow-lg max-h-[calc(100vh-4.5rem)] overflow-y-auto">
          <div className="flex flex-col space-y-1.5 text-sm sm:text-base font-medium text-neutral-800 pt-2">
            <a
              href="#society-projects"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-md bg-amber-50 text-amber-900 font-semibold hover:bg-amber-100"
            >
              🏢 Buildings & Societies Solar Projects
            </a>
            <a
              href="#solutions"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-md hover:bg-neutral-100"
            >
              Solar Systems & Products
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-md hover:bg-neutral-100"
            >
              Real Projects Gallery
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-md hover:bg-neutral-100"
            >
              Solar Savings Calculator
            </a>
            <a
              href="#partners"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-md hover:bg-neutral-100"
            >
              Authorized Brand Partners
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-md hover:bg-neutral-100"
            >
              Client Reviews
            </a>
          </div>

          <div className="pt-4 border-t border-neutral-200 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-neutral-900 rounded-lg shadow-sm cursor-pointer"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Book Solar Consultation</span>
            </button>
            <div className="flex items-center gap-2">
              <a
                href={COMPANY_INFO.brochurePdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-2.5 text-xs font-semibold text-neutral-700 bg-neutral-100 rounded-md"
              >
                Download PDF Brochure
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLeadsCRM();
                }}
                className="flex-1 text-center py-2.5 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-md cursor-pointer"
              >
                Leads CRM
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
