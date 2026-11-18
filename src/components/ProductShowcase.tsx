import React, { useState } from 'react';
import { 
  SOLAR_PRODUCTS, 
  ProductSolution 
} from '../data/solarData';
import { 
  Zap, 
  Leaf, 
  Settings, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  SunMedium,
  BatteryCharging,
  Flame,
  Factory
} from 'lucide-react';

interface ProductShowcaseProps {
  onSelectSystemForConsultation: (systemName: string) => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  onSelectSystemForConsultation
}) => {
  const [selectedProductId, setSelectedProductId] = useState<string>('on-grid');
  const [activeTab, setActiveTab] = useState<'efficiency' | 'sustainability' | 'mechanism' | 'specs'>('efficiency');

  const activeProduct = SOLAR_PRODUCTS.find((p) => p.id === selectedProductId) || SOLAR_PRODUCTS[0];

  const getProductIcon = (id: string) => {
    switch (id) {
      case 'on-grid':
        return <SunMedium className="w-4 h-4" />;
      case 'off-grid':
        return <BatteryCharging className="w-4 h-4" />;
      case 'hybrid':
        return <Zap className="w-4 h-4" />;
      case 'solar-water-heater':
        return <Flame className="w-4 h-4" />;
      case 'solar-parks-epc':
        return <Factory className="w-4 h-4" />;
      default:
        return <SunMedium className="w-4 h-4" />;
    }
  };

  return (
    <section id="solutions" className="py-16 lg:py-24 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">
            Engineered For Long-Term Performance
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Comprehensive Solar Energy Solutions & Products
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-600">
            Tailored solar engineering designed for Indian residential, commercial, industrial, and agricultural conditions. Explore the operational efficiency, battery autonomy, and sustainability metrics of each system.
          </p>
        </div>

        {/* Product Selector Segmented Bar */}
        <div className="flex flex-wrap items-center gap-2 pb-5 mb-8 border-b border-neutral-200">
          {SOLAR_PRODUCTS.map((prod) => {
            const isSelected = prod.id === selectedProductId;
            return (
              <button
                key={prod.id}
                onClick={() => {
                  setSelectedProductId(prod.id);
                  setActiveTab('efficiency');
                }}
                className={`flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-neutral-900 text-white shadow-xs'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 hover:text-neutral-900'
                }`}
              >
                <span className={isSelected ? 'text-amber-400 shrink-0' : 'text-neutral-500 shrink-0'}>
                  {getProductIcon(prod.id)}
                </span>
                <span>{prod.name}</span>
              </button>
            );
          })}
        </div>

        {/* Product Details Marquee Card */}
        <div className="bg-neutral-50 rounded-2xl border border-neutral-200 p-4 sm:p-8 lg:p-10 shadow-xs">
          
          {/* Top Title & Badges */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-neutral-200">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs font-semibold text-emerald-700 mb-1">
                <span>{activeProduct.badge}</span>
                <span aria-hidden="true">·</span>
                <span>Tier-1 Hardware</span>
                <span aria-hidden="true">·</span>
                <span>25-Year Warranty</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-neutral-900">
                {activeProduct.name}
              </h3>
              <p className="text-sm font-medium text-amber-700 mt-0.5">
                {activeProduct.tagline}
              </p>
            </div>

            <button
              onClick={() => onSelectSystemForConsultation(activeProduct.name)}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg shadow-xs transition-all text-center md:self-center cursor-pointer"
            >
              <span>Get Quote for {activeProduct.name}</span>
              <ArrowRight className="w-4 h-4 text-amber-400 shrink-0" />
            </button>
          </div>

          {/* Core Description */}
          <p className="mt-6 text-sm sm:text-base text-neutral-700 leading-relaxed max-w-4xl">
            {activeProduct.description}
          </p>

          {/* Sub-tab Navigation (Efficiency, Sustainability, Mechanism, Specs) */}
          <div className="mt-8 grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-1.5 sm:gap-2 border-b border-neutral-200 pb-2">
            <button
              onClick={() => setActiveTab('efficiency')}
              className={`flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg sm:rounded-none sm:border-b-2 transition-colors cursor-pointer ${
                activeTab === 'efficiency'
                  ? 'bg-amber-50 sm:bg-transparent border-amber-600 text-amber-900'
                  : 'border-transparent text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 sm:hover:bg-transparent'
              }`}
            >
              <Zap className="w-4 h-4 text-amber-500 shrink-0" />
              <span>Efficiency Benefits</span>
            </button>

            <button
              onClick={() => setActiveTab('sustainability')}
              className={`flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg sm:rounded-none sm:border-b-2 transition-colors cursor-pointer ${
                activeTab === 'sustainability'
                  ? 'bg-emerald-50 sm:bg-transparent border-emerald-600 text-emerald-900'
                  : 'border-transparent text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 sm:hover:bg-transparent'
              }`}
            >
              <Leaf className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Sustainability Impact</span>
            </button>

            <button
              onClick={() => setActiveTab('mechanism')}
              className={`flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg sm:rounded-none sm:border-b-2 transition-colors cursor-pointer ${
                activeTab === 'mechanism'
                  ? 'bg-blue-50 sm:bg-transparent border-blue-600 text-blue-900'
                  : 'border-transparent text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 sm:hover:bg-transparent'
              }`}
            >
              <Settings className="w-4 h-4 text-blue-600 shrink-0" />
              <span>How It Works</span>
            </button>

            <button
              onClick={() => setActiveTab('specs')}
              className={`flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg sm:rounded-none sm:border-b-2 transition-colors cursor-pointer ${
                activeTab === 'specs'
                  ? 'bg-purple-50 sm:bg-transparent border-purple-600 text-purple-900'
                  : 'border-transparent text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 sm:hover:bg-transparent'
              }`}
            >
              <Layers className="w-4 h-4 text-purple-600 shrink-0" />
              <span>Technical Specs</span>
            </button>
          </div>

          {/* Tab Content Panels */}
          <div className="mt-6">
            
            {/* Efficiency Benefits Tab */}
            {activeTab === 'efficiency' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {activeProduct.efficiencyBenefits.map((eff, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-5 rounded-xl border border-neutral-200 flex flex-col justify-between"
                  >
                    <div>
                      {eff.metric && (
                        <div className="font-display text-2xl font-black text-amber-600 mb-2 tabular-nums">
                          {eff.metric}
                        </div>
                      )}
                      <h4 className="text-base font-bold text-neutral-900 mb-2">
                        {eff.title}
                      </h4>
                      <p className="text-xs text-neutral-600 leading-relaxed">
                        {eff.description}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center gap-1.5 text-[11px] font-semibold text-neutral-500">
                      <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
                      <span>Verified Laboratory Benchmark</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Sustainability Impact Tab */}
            {activeTab === 'sustainability' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {activeProduct.sustainabilityBenefits.map((sus, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-5 rounded-xl border border-neutral-200 flex flex-col justify-between"
                  >
                    <div>
                      {sus.metric && (
                        <div className="font-display text-2xl font-black text-emerald-600 mb-2 tabular-nums">
                          {sus.metric}
                        </div>
                      )}
                      <h4 className="text-base font-bold text-neutral-900 mb-2">
                        {sus.title}
                      </h4>
                      <p className="text-xs text-neutral-600 leading-relaxed">
                        {sus.description}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                      <Leaf className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Clean Energy Transition</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Mechanism / How It Works Tab */}
            {activeTab === 'mechanism' && (
              <div className="bg-white p-6 rounded-xl border border-neutral-200">
                <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-900 mb-4">
                  Operational Architecture & Working Flow
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  {activeProduct.howItWorks.map((step, idx) => (
                    <div
                      key={idx}
                      className="relative p-4 rounded-lg bg-neutral-50 border border-neutral-200/80 flex flex-col"
                    >
                      <div className="w-7 h-7 rounded-md bg-neutral-900 text-white text-xs font-bold flex items-center justify-center mb-3">
                        0{idx + 1}
                      </div>
                      <p className="text-xs text-neutral-700 leading-relaxed">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technical Specifications Tab */}
            {activeTab === 'specs' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-xl border border-neutral-200">
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                    System Engineering Specs
                  </h4>
                  <dl className="divide-y divide-neutral-100 text-sm">
                    {activeProduct.specs.map((spec, idx) => (
                      <div key={idx} className="py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4">
                        <dt className="text-neutral-500">{spec.label}</dt>
                        <dd className="font-semibold text-neutral-900 sm:text-right">{spec.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                    Ideal Applications & Sites
                  </h4>
                  <ul className="space-y-2 text-xs text-neutral-700">
                    {activeProduct.idealFor.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

          </div>

          {/* Key Features Bullets Bar */}
          <div className="mt-8 pt-6 border-t border-neutral-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {activeProduct.keyFeatures.map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs font-medium text-neutral-700">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
