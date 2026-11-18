import React, { useState } from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Download, 
  CheckCircle2, 
  Award, 
  Layers, 
  MapPin,
  Maximize2,
  X
} from 'lucide-react';
import { COMPANY_INFO, REAL_PROJECTS } from '../data/solarData';

interface HeroSectionProps {
  onOpenConsultation: () => void;
  onOpenCalculator: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenConsultation,
  onOpenCalculator,
}) => {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);

  const featuredProjects = [
    {
      title: '100 kW+ Commercial & Industrial Rooftop Array',
      location: 'Chakan Industrial Hub, Pune, Maharashtra',
      capacity: '100 kW+ High-Tension (HT) Solar',
      description: 'Turnkey 100 kW+ array powering heavy production machinery with ~1,45,000 units/year generation.',
      image: '/assets/aistudio/IMG-20261029-WA0022_da8b2f9c.jpg',
      tag: '100 kW+ C&I Scale'
    },
    {
      title: '40kW Commercial Rooftop Site',
      location: 'PCMC Pune, Maharashtra',
      capacity: '40 kWp Grid-Tied System',
      description: 'Generates ~58,000 units of clean electricity annually with bi-directional Net Metering.',
      image: '/assets/aistudio/IMG-20261029-WA0022_da8b2f9c.jpg',
      tag: 'Commercial Rooftop'
    },
    {
      title: '20kW High-Tilt Elevated Structure',
      location: 'Sangli - Satara, Maharashtra',
      capacity: '20 kWp Elevated Structure',
      description: 'Elevated terrace installation preserving 100% usable recreational space below.',
      image: '/assets/aistudio/IMG-20261029-WA0021_7473be8d.jpg',
      tag: 'Elevated Terrace'
    },
    {
      title: 'Polycab Inverter Control Station',
      location: 'Industrial Facility, Pune',
      capacity: 'Multi-Inverter ACDB/DCDB Array',
      description: 'BIS-approved string inverters with Type-II surge protection and cloud telemetry.',
      image: '/assets/aistudio/IMG-20261029-WA0019_abb18c17.jpg',
      tag: 'Control Switchgear'
    }
  ];

  const currentProject = featuredProjects[activePhotoIndex];

  return (
    <section className="relative overflow-hidden bg-white border-b border-neutral-200">
      {/* Background ambient solar glow */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-amber-100/40 via-emerald-50/20 to-transparent pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 lg:pt-14 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">
          
          {/* Left Column: Value Proposition & CTAs (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Government Recognition & GST Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-200 rounded-md text-xs font-semibold text-amber-900">
                <Award className="w-3.5 h-3.5 text-amber-600" />
                <span>Recognized by MNRE (Govt of India) · MEDA · GEDA Approved</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 border border-emerald-200 rounded-md text-xs font-semibold text-emerald-900">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>GST: 27KGAPS7418L1ZO</span>
              </div>
            </div>

            {/* Display Headline */}
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight leading-[1.12] text-balance">
              Where Quality Meets Sustainability in Solar Energy.
            </h1>

            {/* Value description */}
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl">
              From high-efficiency <strong className="text-neutral-900 font-semibold">On-Grid</strong>, <strong className="text-neutral-900 font-semibold">Off-Grid</strong>, and <strong className="text-neutral-900 font-semibold">Hybrid solar systems</strong> to industrial <strong className="text-neutral-900 font-semibold">Solar Water Heaters</strong> and megawatt <strong className="text-neutral-900 font-semibold">Turn-Key EPC solutions</strong> across India.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-1">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg shadow-sm hover:shadow transition-all cursor-pointer"
              >
                <span>Book Solar Consultation</span>
                <ArrowRight className="w-4 h-4 text-amber-400 shrink-0" />
              </button>

              <button
                onClick={onOpenCalculator}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm sm:text-base font-semibold text-neutral-800 bg-white border border-neutral-300 hover:bg-neutral-50 rounded-lg transition-colors cursor-pointer"
              >
                <Zap className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Calculate My Savings</span>
              </button>

              <a
                href={COMPANY_INFO.brochurePdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Top_Solar_Solution_Brochure.pdf"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors"
              >
                <Download className="w-4 h-4 text-neutral-500 shrink-0" />
                <span>Download Brochure</span>
              </a>
            </div>

            {/* Key trust bullets */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Tier-1 PV Modules (Waaree, Vikram Solar, Luminous)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>BIS-Approved Inverters & Net Metering Liaison</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Elevated Rooftop Structures (Zero usable space loss)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Full O&M Support & 25-Year Performance Assurance</span>
              </div>
            </div>

          </div>

          {/* Right Column: Horizontal Real Project Showcase (6 cols) */}
          <div className="lg:col-span-6 relative min-w-0">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-900 shadow-xl group">
              
              {/* Top Bar inside image card: Tag & Switcher */}
              <div className="absolute top-2.5 sm:top-3.5 left-2.5 sm:left-4 right-2.5 sm:right-4 z-20 flex flex-wrap items-center justify-between gap-2">
                <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 bg-amber-400 text-neutral-950 text-[10px] sm:text-xs font-bold rounded-md uppercase tracking-wider shadow-xs">
                  {currentProject.tag}
                </span>

                <div className="flex items-center gap-1.5">
                  <div className="flex items-center gap-0.5 sm:gap-1 p-0.5 sm:p-1 bg-neutral-950/85 backdrop-blur-md rounded-lg border border-neutral-700">
                    {featuredProjects.map((p, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActivePhotoIndex(idx)}
                        className={`px-2 sm:px-2.5 py-0.5 sm:py-1 text-[11px] sm:text-xs font-semibold rounded transition-colors cursor-pointer whitespace-nowrap ${
                          activePhotoIndex === idx
                            ? 'bg-amber-400 text-neutral-950 shadow-xs'
                            : 'text-neutral-300 hover:text-white'
                        }`}
                      >
                        0{idx + 1}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setIsPhotoModalOpen(true)}
                    className="p-1.5 bg-neutral-950/85 hover:bg-neutral-950 text-neutral-200 hover:text-white rounded-lg border border-neutral-700 transition-colors cursor-pointer"
                    title="Enlarge horizontal image"
                    aria-label="Enlarge image"
                  >
                    <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                </div>
              </div>

              {/* Main high-impact horizontal layout image */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-neutral-950 overflow-hidden cursor-pointer"
                   onClick={() => setIsPhotoModalOpen(true)}
              >
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Scrim overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/25 to-transparent pointer-events-none" />

                {/* Caption details horizontal strip */}
                <div className="absolute bottom-2.5 sm:bottom-3 left-3 sm:left-4 right-3 sm:right-4 text-white z-10 pointer-events-none">
                  <div className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5 text-[11px] sm:text-xs font-medium text-amber-300 uppercase tracking-wider">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span>{currentProject.location}</span>
                    <span className="text-neutral-400">·</span>
                    <span className="text-white font-semibold">{currentProject.capacity}</span>
                  </div>
                  <h3 className="font-display text-sm sm:text-lg font-bold text-white mt-0.5 line-clamp-1">
                    {currentProject.title}
                  </h3>
                  <p className="text-xs text-neutral-300 mt-0.5 line-clamp-1 hidden sm:block">
                    {currentProject.description}
                  </p>
                </div>
              </div>

              {/* Horizontal Project Quick Switcher Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 bg-neutral-950/95 border-t border-neutral-800 divide-x divide-y sm:divide-y-0 divide-neutral-800">
                {featuredProjects.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePhotoIndex(idx)}
                    className={`p-2 sm:p-2.5 text-left transition-all cursor-pointer min-w-0 ${
                      activePhotoIndex === idx
                        ? 'bg-neutral-800/90 text-white'
                        : 'bg-transparent text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/50'
                    }`}
                  >
                    <div className="flex items-center gap-1 text-[10px] font-bold text-amber-400 uppercase tracking-wider">
                      <span>0{idx + 1}</span>
                      <span className="truncate">{p.tag}</span>
                    </div>
                    <p className="text-xs font-semibold text-neutral-200 truncate mt-0.5">
                      {p.capacity.split(' ')[0]} {p.capacity.split(' ')[1] || ''}
                    </p>
                  </button>
                ))}
              </div>

            </div>

            {/* Overlapping thumbnail card */}
            <div className="hidden lg:flex items-center gap-3 absolute -bottom-5 -left-4 bg-white p-2.5 rounded-xl border border-neutral-200 shadow-lg max-w-xs z-20">
              <img
                src="/assets/aistudio/IMG-20261029-WA0021_7473be8d.jpg"
                alt="20kW High Tilt Elevated Solar Terrace Structure"
                className="w-12 h-12 rounded-lg object-cover shrink-0 border border-neutral-200"
                referrerPolicy="no-referrer"
              />
              <div className="text-left">
                <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">
                  Elevated Terrace
                </span>
                <p className="text-xs font-bold text-neutral-900 leading-tight">
                  20kW Sangli-Satara
                </p>
                <p className="text-[11px] text-neutral-500">
                  100% usable terrace retained
                </p>
              </div>
            </div>

            {/* Overlapping badge */}
            <div className="hidden lg:flex items-center gap-2 absolute -top-3 -left-3 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-neutral-200 shadow-md z-20">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-neutral-800">
                100 kW+ Active Green Projects
              </span>
            </div>

          </div>

        </div>

        {/* High-Resolution Horizontal Image Modal */}
        {isPhotoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-neutral-950/85 backdrop-blur-md">
            <div className="relative w-full max-w-5xl max-h-[92vh] bg-neutral-900 border border-neutral-700 rounded-2xl shadow-2xl overflow-y-auto">
              <button
                onClick={() => setIsPhotoModalOpen(false)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 p-2 bg-neutral-950/80 hover:bg-neutral-800 text-neutral-300 hover:text-white rounded-lg border border-neutral-700 transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative w-full aspect-[16/9] bg-neutral-950">
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-4 sm:p-5 bg-neutral-900 flex flex-col md:flex-row md:items-center justify-between gap-4 border-t border-neutral-800">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs font-medium text-amber-400">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span>{currentProject.location}</span>
                    <span>·</span>
                    <span>{currentProject.capacity}</span>
                  </div>
                  <h4 className="text-base font-bold text-white mt-1">
                    {currentProject.title}
                  </h4>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    {currentProject.description}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2 shrink-0">
                  {featuredProjects.map((p, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActivePhotoIndex(idx)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                        activePhotoIndex === idx
                          ? 'bg-amber-400 text-neutral-950 font-bold'
                          : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                      }`}
                    >
                      Project 0{idx + 1}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 4-Column Proof & Metric Strip below Hero Split */}
        <div className="mt-14 pt-8 border-t border-neutral-200 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="space-y-1">
            <div className="font-display text-3xl sm:text-4xl font-extrabold text-neutral-900 tabular-nums">
              100<span className="text-amber-500"> kW+</span>
            </div>
            <p className="text-xs font-medium text-neutral-500">
              Green Projects & Counting Across India
            </p>
          </div>

          <div className="space-y-1">
            <div className="font-display text-3xl sm:text-4xl font-extrabold text-neutral-900 tabular-nums">
              100<span className="text-emerald-600">+</span>
            </div>
            <p className="text-xs font-medium text-neutral-500">
              Turnkey Projects Successfully Commissioned
            </p>
          </div>

          <div className="space-y-1">
            <div className="font-display text-3xl sm:text-4xl font-extrabold text-neutral-900 tabular-nums">
              90<span className="text-amber-500">%</span>
            </div>
            <p className="text-xs font-medium text-neutral-500">
              Maximum Electricity Bill Reduction with Net-Metering
            </p>
          </div>

          <div className="space-y-1">
            <div className="font-display text-3xl sm:text-4xl font-extrabold text-neutral-900 tabular-nums">
              25<span className="text-emerald-600">Yrs</span>
            </div>
            <p className="text-xs font-medium text-neutral-500">
              Tier-1 PV Module Linear Performance Warranty
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
