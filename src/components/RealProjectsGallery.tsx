import React, { useState } from 'react';
import { REAL_PROJECTS, ProjectShowcase } from '../data/solarData';
import { MapPin, Maximize2, X, CheckCircle, ShieldCheck, Zap, ArrowRight } from 'lucide-react';

interface RealProjectsGalleryProps {
  onSelectProjectForInquiry?: (projectTitle: string) => void;
}

export const RealProjectsGallery: React.FC<RealProjectsGalleryProps> = ({
  onSelectProjectForInquiry
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<ProjectShowcase | null>(null);

  const filteredProjects = selectedCategory === 'all'
    ? REAL_PROJECTS
    : REAL_PROJECTS.filter((p) => {
        if (selectedCategory === 'society') return p.title.toLowerCase().includes('society') || p.type.toLowerCase().includes('society') || p.capacity.toLowerCase().includes('society');
        if (selectedCategory === '100kw') return p.capacity.toLowerCase().includes('100 kw') || p.type.toLowerCase().includes('100 kw') || p.title.toLowerCase().includes('100 kw');
        if (selectedCategory === 'rooftop') return p.type.toLowerCase().includes('rooftop');
        if (selectedCategory === 'elevated') return p.type.toLowerCase().includes('elevated');
        if (selectedCategory === 'inverter') return p.type.toLowerCase().includes('inverter') || p.type.toLowerCase().includes('electrical');
        if (selectedCategory === 'industrial') return p.type.toLowerCase().includes('industrial');
        return true;
      });

  return (
    <section id="projects" className="py-16 lg:py-24 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col gap-6 mb-10">
          <div className="max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
              Field-Tested Engineering Across India
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Real On-Site Project Gallery
            </h2>
            <p className="mt-3 text-base sm:text-lg text-neutral-400">
              Photographs from our commissioned installations across Pune, Sangli, Satara, PCMC, and Western India. Demonstrating precision structural fabrication, non-penetrative roof clamps, 100 kW+ C&I arrays, and clean inverter distribution control boards.
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-neutral-800 rounded-xl w-full lg:w-fit">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-amber-500 text-neutral-950 shadow-xs'
                  : 'text-neutral-300 hover:text-white'
              }`}
            >
              All Installations
            </button>
            <button
              onClick={() => setSelectedCategory('society')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                selectedCategory === 'society'
                  ? 'bg-amber-500 text-neutral-950 shadow-xs'
                  : 'text-neutral-300 hover:text-white'
              }`}
            >
              🏢 Buildings & Societies
            </button>
            <button
              onClick={() => setSelectedCategory('100kw')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                selectedCategory === '100kw'
                  ? 'bg-amber-500 text-neutral-950 shadow-xs'
                  : 'text-neutral-300 hover:text-white'
              }`}
            >
              ⚡ 100 kW+ C&I
            </button>
            <button
              onClick={() => setSelectedCategory('rooftop')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                selectedCategory === 'rooftop'
                  ? 'bg-amber-500 text-neutral-950 shadow-xs'
                  : 'text-neutral-300 hover:text-white'
              }`}
            >
              Rooftop Commercial
            </button>
            <button
              onClick={() => setSelectedCategory('elevated')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                selectedCategory === 'elevated'
                  ? 'bg-amber-500 text-neutral-950 shadow-xs'
                  : 'text-neutral-300 hover:text-white'
              }`}
            >
              Elevated Terrace
            </button>
            <button
              onClick={() => setSelectedCategory('inverter')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                selectedCategory === 'inverter'
                  ? 'bg-amber-500 text-neutral-950 shadow-xs'
                  : 'text-neutral-300 hover:text-white'
              }`}
            >
              Inverter & Switchgear
            </button>
            <button
              onClick={() => setSelectedCategory('industrial')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                selectedCategory === 'industrial'
                  ? 'bg-amber-500 text-neutral-950 shadow-xs'
                  : 'text-neutral-300 hover:text-white'
              }`}
            >
              Industrial Tin Shed
            </button>
          </div>
        </div>

        {/* Bento-style Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => {
            const isFeatured = idx === 0 || idx === 1;
            return (
              <div
                key={project.id}
                onClick={() => setActiveModalProject(project)}
                className={`group relative rounded-xl overflow-hidden bg-neutral-800 border border-neutral-700/80 cursor-pointer hover:border-amber-400/80 transition-all duration-300 flex flex-col ${
                  isFeatured ? 'md:col-span-1 lg:col-span-1' : ''
                }`}
              >
                {/* Photo container */}
                <div className="relative h-64 w-full overflow-hidden bg-neutral-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/30 to-transparent" />
                  
                  {/* Top tags */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 text-[11px] font-bold bg-neutral-950/80 backdrop-blur-xs text-amber-400 border border-amber-400/30 rounded-md">
                      {project.capacity}
                    </span>
                    <button
                      className="p-1.5 bg-neutral-950/70 hover:bg-neutral-950 text-white rounded-md transition-colors"
                      title="Enlarge inspection photo"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-xs text-neutral-300">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="truncate">{project.location}</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-display text-lg font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Quick Highlights */}
                  <div className="space-y-1.5 pt-3 border-t border-neutral-700/60">
                    {project.highlights.slice(0, 2).map((h, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-[11px] text-neutral-300">
                        <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs text-amber-400 font-medium">
                    <span>Click to view full inspection details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Inspection Modal for High-Res Zoom & Details */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-neutral-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-neutral-900 border border-neutral-700 rounded-2xl shadow-2xl overflow-y-auto">
            
            {/* Close button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-neutral-950/80 hover:bg-neutral-800 text-neutral-300 hover:text-white rounded-lg border border-neutral-700 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative w-full h-80 sm:h-96 bg-neutral-950">
              <img
                src={activeModalProject.image}
                alt={activeModalProject.title}
                className="w-full h-full object-contain sm:object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-6">
                <span className="px-3 py-1 bg-amber-500 text-neutral-950 text-xs font-bold rounded-md">
                  {activeModalProject.capacity}
                </span>
              </div>
            </div>

            {/* Modal Details */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs text-amber-400 font-medium">
                  <MapPin className="w-4 h-4" />
                  <span>{activeModalProject.location}</span>
                  <span>·</span>
                  <span>{activeModalProject.type}</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-white mt-1">
                  {activeModalProject.title}
                </h3>
                <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
                  {activeModalProject.description}
                </p>
              </div>

              {/* Engineering Highlights */}
              <div className="bg-neutral-800/80 p-5 rounded-xl border border-neutral-700 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Commissioning & Engineering Highlights</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-200">
                  {activeModalProject.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA in modal */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-800">
                <p className="text-xs text-neutral-400">
                  Need a similar installation for your site? Get a customized site survey report.
                </p>
                <button
                  onClick={() => {
                    const title = activeModalProject.title;
                    setActiveModalProject(null);
                    if (onSelectProjectForInquiry) {
                      onSelectProjectForInquiry(title);
                    }
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors text-center whitespace-normal sm:whitespace-nowrap cursor-pointer"
                >
                  Request Proposal for Similar Site
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};
