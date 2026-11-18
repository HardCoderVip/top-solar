import React from 'react';
import { BRAND_PARTNERS } from '../data/solarData';
import { ShieldCheck, Award, CheckCircle2, Zap } from 'lucide-react';

export const PartnersAndTrust: React.FC = () => {
  return (
    <section id="partners" className="py-16 lg:py-20 bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">
            Authorized Channel Partnerships
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Tier-1 Global & National Brand Alliances
          </h2>
          <p className="mt-3 text-base text-neutral-600">
            Top Solar Solution works exclusively with globally recognized technology providers and Bureau of Indian Standards (BIS) approved equipment manufacturers.
          </p>
        </div>

        {/* Primary PV & Inverter Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BRAND_PARTNERS.authorizedPartners.map((partner, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl border border-neutral-200/90 shadow-2xs hover:shadow-sm hover:border-amber-400 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-neutral-100 mb-4">
                  <span className="font-display text-xl font-black text-neutral-900">
                    {partner.name}
                  </span>
                  <span className="px-2 py-0.5 text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-200 rounded-md">
                    {partner.tier}
                  </span>
                </div>
                <h4 className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-2">
                  {partner.title}
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {partner.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-neutral-100 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Genuine Factory Warranty</span>
              </div>
            </div>
          ))}
        </div>

        {/* Solar Water Heater Brand Partners Bar */}
        <div className="mt-12 bg-white rounded-xl border border-neutral-200 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-200 mb-6">
            <div>
              <h3 className="text-base font-bold text-neutral-900">
                Solar Water Heater & Thermal Heating Brand Partners
              </h3>
              <p className="text-xs text-neutral-500 mt-0.5">
                Authorized distributor & channel partner for residential and commercial central water heating
              </p>
            </div>
            <span className="text-xs font-semibold text-neutral-500">
              18+ Reputed Manufacturers Supported
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {BRAND_PARTNERS.waterHeaterPartners.map((brand, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 rounded-md text-xs font-semibold text-neutral-800 transition-colors"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>

        {/* Regulatory & Institutional Accreditation Banner */}
        <div className="mt-8 bg-neutral-900 text-white rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-amber-500 text-neutral-950 flex items-center justify-center shrink-0">
              <Award className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-display text-lg font-bold text-white">
                Government Recognitions & Statutory Standards
              </h4>
              <p className="text-xs text-neutral-300 mt-0.5">
                Recognized by the Ministry of New and Renewable Energy (MNRE), Govt of India · GEDA · MEDA accredited EPC installer.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold text-neutral-300 md:shrink-0">
            <span className="flex items-center gap-1.5 whitespace-nowrap">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              BIS Certified Gear
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1.5 whitespace-nowrap">
              <Zap className="w-4 h-4 text-amber-400 shrink-0" />
              Net Metering Approved
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
