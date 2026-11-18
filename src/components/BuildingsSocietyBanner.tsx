import React, { useState } from 'react';
import { 
  Building2, 
  Home, 
  Factory, 
  ShoppingBag, 
  GraduationCap, 
  Hotel, 
  Maximize2, 
  X, 
  Phone, 
  CheckCircle2, 
  ArrowRight, 
  TrendingDown, 
  Leaf, 
  ShieldCheck, 
  Wrench, 
  Headphones
} from 'lucide-react';
import { COMPANY_INFO } from '../data/solarData';

interface BuildingsSocietyBannerProps {
  onOpenConsultationForSociety: (propertyType: string) => void;
}

export const BuildingsSocietyBanner: React.FC<BuildingsSocietyBannerProps> = ({
  onOpenConsultationForSociety,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const bannerImageUrl = '/assets/aistudio/IMG-20261104-WA0035_5b29eb01.jpg';

  const sectors = [
    {
      title: 'Residential Societies',
      marathiSubtitle: 'गृहनिर्माण संस्था (CHS)',
      description: 'Offsets common electricity meters powering elevators, water pumps, clubhouse, and stairwell lights.',
      icon: <Home className="w-5 h-5 text-amber-500" />,
      tag: 'Co-op Housing Societies'
    },
    {
      title: 'Commercial Buildings',
      marathiSubtitle: 'व्यावसायिक इमारती',
      description: 'Cuts heavy daylight HVAC and IT equipment loads with high-yield mono PERC panels & net metering.',
      icon: <Building2 className="w-5 h-5 text-blue-500" />,
      tag: 'IT Parks & Offices'
    },
    {
      title: 'Industrial Projects',
      marathiSubtitle: 'औद्योगिक प्रकल्प',
      description: '100 kW+ turnkey shed installations reducing peak demand charges and qualifying for 40% depreciation.',
      icon: <Factory className="w-5 h-5 text-emerald-600" />,
      tag: '100 kW+ Industrial Sheds'
    },
    {
      title: 'Malls & Retail Establishments',
      marathiSubtitle: 'शॉपिंग मॉल्स व रिटेल',
      description: 'High visibility green energy infrastructure cutting daytime commercial utility tariffs drastically.',
      icon: <ShoppingBag className="w-5 h-5 text-purple-500" />,
      tag: 'Retail & Showrooms'
    },
    {
      title: 'Schools & Hospitals',
      marathiSubtitle: 'शाळा, कॉलेज व हॉस्पिटल्स',
      description: 'Zero-failure UPS hybrid backup systems ensuring uninterrupted life-saving apparatus & classrooms.',
      icon: <GraduationCap className="w-5 h-5 text-indigo-500" />,
      tag: 'Healthcare & Campus'
    },
    {
      title: 'Hotels & Resorts',
      marathiSubtitle: 'हॉटेल्स व रिसॉर्ट्स',
      description: 'Hybrid PV systems combined with central solar water heating for large guest and kitchen hot water demands.',
      icon: <Hotel className="w-5 h-5 text-rose-500" />,
      tag: 'Hospitality & Banquets'
    }
  ];

  return (
    <section id="society-projects" className="py-16 lg:py-24 bg-neutral-900 text-white border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 px-3 py-1 bg-amber-400/10 border border-amber-400/30 rounded-md text-xs font-bold text-amber-400 uppercase tracking-wider mb-3">
              <span>Top Solar Solution® Official Showcase</span>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-400">सौर ऊर्जा, सुरक्षित भविष्याची दिशा</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
              We Are Experts In Buildings & Housing Society Solar Projects
            </h2>
            <p className="mt-3 text-base sm:text-lg text-neutral-300 leading-relaxed">
              Tailored turnkey rooftop installations for multi-story Cooperative Housing Societies (CHS), corporate commercial towers, and industrial estates across Maharashtra and India.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenConsultationForSociety('Housing Society')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm transition-all cursor-pointer whitespace-nowrap"
            >
              <span>Book Society Site Survey</span>
              <ArrowRight className="w-4 h-4 text-neutral-950" />
            </button>
            <a
              href="tel:+919561617668"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-neutral-800 hover:bg-neutral-700 rounded-lg border border-neutral-700 transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>+91 95616 17668</span>
            </a>
          </div>
        </div>

        {/* Feature Infographic Banner Card */}
        <div className="relative rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-700 shadow-2xl group mb-14">
          <div className="relative w-full aspect-[16/9] md:aspect-[21/10] bg-neutral-950 overflow-hidden cursor-pointer"
               onClick={() => setIsModalOpen(true)}
          >
            <img
              src={bannerImageUrl}
              alt="We Are Expert in Buildings and Society Solar Projects - Top Solar Solution"
              className="w-full h-full object-contain md:object-cover group-hover:scale-[1.02] transition-transform duration-500"
              referrerPolicy="no-referrer"
            />

            {/* Click to inspect overlay */}
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsModalOpen(true);
                }}
                className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 bg-neutral-950/80 hover:bg-neutral-900 text-white text-xs font-semibold rounded-lg border border-neutral-700 shadow-md backdrop-blur-xs transition-colors cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
                <span>View Full Banner</span>
              </button>
            </div>

            <div className="absolute bottom-3 left-4 right-4 hidden sm:flex flex-wrap items-center justify-between gap-2 text-xs text-neutral-300 bg-neutral-950/85 backdrop-blur-md p-3 rounded-xl border border-neutral-800 pointer-events-none">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="font-bold text-amber-400">Official Brand Infographic:</span>
                <span>Buildings & Society Solar Engineering · Residential CHS · Commercial · 100 kW+ Industrial</span>
              </div>
              <span className="text-emerald-400 font-semibold font-mono">GST No.: {COMPANY_INFO.gstNumber}</span>
            </div>
          </div>
        </div>

        {/* 6 Sectors Covered Grid */}
        <div className="mb-14">
          <div className="mb-6">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
              Sectors & Establishments We Power
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Engineered with elevated structural mounting to preserve 100% roof usability for tenants, owners, and facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sectors.map((sec, idx) => (
              <div
                key={idx}
                className="bg-neutral-800/80 hover:bg-neutral-800 border border-neutral-700/80 hover:border-amber-400/80 rounded-xl p-5 transition-all flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="p-2.5 bg-neutral-900 rounded-lg border border-neutral-700">
                      {sec.icon}
                    </div>
                    <span className="px-2.5 py-0.5 text-[10px] font-bold bg-neutral-900 text-amber-400 border border-neutral-700 rounded-md">
                      {sec.tag}
                    </span>
                  </div>
                  <h4 className="font-display text-base font-bold text-white">
                    {sec.title}
                  </h4>
                  <div className="text-[11px] text-amber-300 font-medium mt-0.5">
                    {sec.marathiSubtitle}
                  </div>
                  <p className="mt-2 text-xs text-neutral-300 leading-relaxed">
                    {sec.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-700/60 flex items-center justify-between">
                  <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Net Metering Assured</span>
                  </span>
                  <button
                    onClick={() => onOpenConsultationForSociety(sec.title)}
                    className="text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6 Key Pillars Highlight Strip from Image */}
        <div className="p-6 sm:p-8 bg-neutral-950 rounded-2xl border border-neutral-800 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          <div className="space-y-2">
            <div className="w-10 h-10 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold">
              ₹
            </div>
            <h5 className="text-xs font-bold text-white">Reduce Electricity Bill</h5>
            <p className="text-[11px] text-neutral-400">Save up to 90% monthly</p>
          </div>

          <div className="space-y-2">
            <div className="w-10 h-10 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Leaf className="w-5 h-5" />
            </div>
            <h5 className="text-xs font-bold text-white">Clean & Green Energy</h5>
            <p className="text-[11px] text-neutral-400">100% renewable power</p>
          </div>

          <div className="space-y-2">
            <div className="w-10 h-10 mx-auto rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <TrendingDown className="w-5 h-5" />
            </div>
            <h5 className="text-xs font-bold text-white">Lower Carbon Footprint</h5>
            <p className="text-[11px] text-neutral-400">Displaces coal power</p>
          </div>

          <div className="space-y-2">
            <div className="w-10 h-10 mx-auto rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <Wrench className="w-5 h-5" />
            </div>
            <h5 className="text-xs font-bold text-white">Customized Solutions</h5>
            <p className="text-[11px] text-neutral-400">Elevated & tin-shed</p>
          </div>

          <div className="space-y-2">
            <div className="w-10 h-10 mx-auto rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h5 className="text-xs font-bold text-white">End-to-End Support</h5>
            <p className="text-[11px] text-neutral-400">From NOC to commissioning</p>
          </div>

          <div className="space-y-2">
            <div className="w-10 h-10 mx-auto rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
              <Headphones className="w-5 h-5" />
            </div>
            <h5 className="text-xs font-bold text-white">Long Term Savings</h5>
            <p className="text-[11px] text-neutral-400">25+ years warranty</p>
          </div>
        </div>

      </div>

      {/* Full Resolution Banner Lightbox Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-neutral-950/90 backdrop-blur-md">
          <div className="relative w-full max-w-6xl bg-neutral-900 border border-neutral-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
            <div className="p-4 bg-neutral-950 border-b border-neutral-800 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-amber-400">Top Solar Solution® Official Infographic</span>
                <h4 className="text-sm font-bold text-white mt-0.5">Buildings & Society Solar Projects Banner</h4>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white rounded-lg transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-2 sm:p-4 bg-neutral-950 overflow-auto flex-1 flex items-center justify-center">
              <img
                src={bannerImageUrl}
                alt="Top Solar Solution Buildings and Society Infographic Banner"
                className="w-full h-auto max-h-[75vh] object-contain rounded-lg"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-4 bg-neutral-950 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-neutral-400 font-mono text-center sm:text-left break-words">
                Call for Society Survey: +91 95616 17668 / +91 87886 97832 · GST: {COMPANY_INFO.gstNumber}
              </div>
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  onOpenConsultationForSociety('Housing Society');
                }}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
              >
                Schedule Free Site Survey
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
