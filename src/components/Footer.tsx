import React from 'react';
import { Sun, Phone, Mail, MapPin, Download, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/solarData';

interface FooterProps {
  onOpenLeadsCRM: () => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLeadsCRM, onOpenConsultation }) => {
  return (
    <footer className="bg-neutral-950 text-neutral-300 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Brand & Mission (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href="/"
              className="inline-block bg-white p-2.5 rounded-xl border border-neutral-700/80 shadow-xs max-w-[270px] hover:border-amber-400 transition-colors"
              title="Top Solar Solution®"
            >
              <img
                src={COMPANY_INFO.logoUrl}
                alt="Top Solar Solution® - Clean Energy, Secure Tomorrow"
                className="h-12 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </a>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              One of India's leading solar EPC, residential and commercial rooftop solar panel providers. Recognized by the Ministry of New and Renewable Energy (MNRE), Govt of India, GEDA, and MEDA.
            </p>

            <div className="pt-1 text-xs text-neutral-400 space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-md">
                <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">GSTIN:</span>
                <span className="font-mono font-bold text-amber-400 text-xs">{COMPANY_INFO.gstNumber}</span>
              </div>
              <div className="font-semibold text-neutral-200">
                {COMPANY_INFO.presence}
              </div>
              <div className="text-[11px] text-emerald-400">
                Clean Energy, Secure Tomorrow · Solar Energy, A Safer Future
              </div>
            </div>
          </div>

          {/* Solar Systems Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Solar Systems
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <a href="#solutions" className="hover:text-amber-400 transition-colors">
                  On-Grid Solar (Net Metering)
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-amber-400 transition-colors">
                  Off-Grid Independent Systems
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-amber-400 transition-colors">
                  Hybrid Solar & Battery Storage
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-amber-400 transition-colors">
                  Solar Water Heaters (ETC & FPC)
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-amber-400 transition-colors">
                  Megawatt Solar Parks & EPC
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-amber-400 transition-colors">
                  Elevated Rooftop Structures
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links & Tools */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Tools & Proof
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <a href="#calculator" className="hover:text-amber-400 transition-colors">
                  Solar Savings Calculator
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-amber-400 transition-colors">
                  Commissioned Projects Gallery
                </a>
              </li>
              <li>
                <a href="#partners" className="hover:text-amber-400 transition-colors">
                  Waaree & Vikram Solar Alliance
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-amber-400 transition-colors">
                  Client Case Studies & Reviews
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_INFO.brochurePdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1"
                >
                  <span>Download Full Brochure</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenLeadsCRM}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Sales Leads CRM Portal
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Headquarters & Contact
            </h4>
            <div className="space-y-2.5 text-xs text-neutral-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Pune, Maharashtra, India</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-0.5 font-mono">
                  <a href="tel:+919561617668" className="hover:text-white block">
                    +91 95616 17668
                  </a>
                  <a href="tel:+918788697832" className="hover:text-white block">
                    +91 87886 97832
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <a href="mailto:info@topsolarsolutions.com" className="hover:text-white break-all">
                  info@topsolarsolutions.com
                </a>
              </div>
              <div className="pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-2 px-3 text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors text-center cursor-pointer"
                >
                  Book Free Site Survey
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Quiet Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row flex-wrap items-center justify-between gap-4 text-xs text-neutral-500 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} Top Solar Solution. All rights reserved. Registered domain: <span className="text-neutral-400 font-mono">www.topsolarsolutions.com</span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px]">
            <span>MNRE Recognized</span>
            <span aria-hidden="true">·</span>
            <span>GEDA & MEDA Accredited</span>
            <span aria-hidden="true">·</span>
            <span>BIS Certified</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
