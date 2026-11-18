import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { BuildingsSocietyBanner } from './components/BuildingsSocietyBanner';
import { ProductShowcase } from './components/ProductShowcase';
import { RealProjectsGallery } from './components/RealProjectsGallery';
import { SolarSavingsCalculator } from './components/SolarSavingsCalculator';
import { ConsultationLeadForm } from './components/ConsultationLeadForm';
import { PartnersAndTrust } from './components/PartnersAndTrust';
import { ClientReviews } from './components/ClientReviews';
import { LeadsManagementModal } from './components/LeadsManagementModal';
import { Footer } from './components/Footer';
import { Phone, MessageCircle } from 'lucide-react';

export default function App() {
  const [isLeadsCRMOpen, setIsLeadsCRMOpen] = useState(false);
  const [selectedSystemInterest, setSelectedSystemInterest] = useState<string>('On-Grid Solar System');
  const [selectedMonthlyBill, setSelectedMonthlyBill] = useState<number>(6500);
  const [selectedPropertyType, setSelectedPropertyType] = useState<string>('Residential');

  const scrollToConsultation = () => {
    const el = document.getElementById('consultation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCalculator = () => {
    const el = document.getElementById('calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectSystemForConsultation = (systemName: string) => {
    setSelectedSystemInterest(systemName);
    scrollToConsultation();
  };

  const handleApplyEstimate = (data: {
    monthlyBill: number;
    propertyType: string;
    systemType: string;
    recommendedKw: number;
    annualSavings: number;
  }) => {
    setSelectedMonthlyBill(data.monthlyBill);
    setSelectedPropertyType(data.propertyType);
    setSelectedSystemInterest(data.systemType);
    scrollToConsultation();
  };

  const handleSelectSocietyForConsultation = (propertyType: string) => {
    setSelectedPropertyType(propertyType === 'Residential Societies' ? 'Housing Society' : propertyType === 'Commercial Buildings' ? 'Commercial' : propertyType);
    setSelectedSystemInterest(`Buildings & Society Solar Project (${propertyType})`);
    scrollToConsultation();
  };

  const handleSelectProjectForInquiry = (projectTitle: string) => {
    setSelectedSystemInterest(`Inquiry for project setup similar to: ${projectTitle}`);
    scrollToConsultation();
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 font-sans selection:bg-amber-400 selection:text-neutral-950 overflow-x-clip">
      {/* Top Banner for direct assistance & phone */}
      <div className="bg-neutral-950 text-white text-xs py-2 px-4 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
            <span>Serving Maharashtra, Rajasthan, Delhi NCR & Himachal Pradesh</span>
            <span className="hidden md:inline">· Over 100 kW+ Green Projects Built</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-neutral-300">
            <div className="flex flex-wrap items-center justify-center gap-1.5 font-mono">
              <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <a href="tel:+919561617668" className="hover:text-amber-400 transition-colors whitespace-nowrap">
                +91 95616 17668
              </a>
              <span className="text-neutral-600">/</span>
              <a href="tel:+918788697832" className="hover:text-amber-400 transition-colors whitespace-nowrap">
                +91 87886 97832
              </a>
            </div>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline text-neutral-400">info@topsolarsolutions.com</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <Header
        onOpenConsultation={() => scrollToConsultation()}
        onOpenLeadsCRM={() => setIsLeadsCRMOpen(true)}
      />

      {/* Main Body Flow */}
      <main className="flex-1 min-w-0">
        {/* 1. Hero Section (With Real Project Showcases & Value Proposition) */}
        <HeroSection
          onOpenConsultation={() => scrollToConsultation()}
          onOpenCalculator={() => scrollToCalculator()}
        />

        {/* 2. Official Feature Showcase: Buildings & Housing Society Solar Projects */}
        <BuildingsSocietyBanner
          onOpenConsultationForSociety={handleSelectSocietyForConsultation}
        />

        {/* 3. Comprehensive Products & Efficiency / Sustainability Showcase */}
        <ProductShowcase
          onSelectSystemForConsultation={handleSelectSystemForConsultation}
        />

        {/* 3. Real On-Site Projects Gallery (User's real project photos & inspection) */}
        <RealProjectsGallery
          onSelectProjectForInquiry={handleSelectProjectForInquiry}
        />

        {/* 4. Interactive Financial & Sizing Calculator */}
        <SolarSavingsCalculator
          onApplyEstimateToForm={handleApplyEstimate}
        />

        {/* 5. Solar Panel Consultation Lead Generation Form */}
        <ConsultationLeadForm
          initialSystemInterest={selectedSystemInterest}
          initialMonthlyBill={selectedMonthlyBill}
          initialPropertyType={selectedPropertyType}
        />

        {/* 6. Authorized Brand Partners & Channel Alliances */}
        <PartnersAndTrust />

        {/* 7. Client Reviews & Feedback */}
        <ClientReviews />
      </main>

      {/* Footer */}
      <Footer
        onOpenLeadsCRM={() => setIsLeadsCRMOpen(true)}
        onOpenConsultation={() => scrollToConsultation()}
      />

      {/* Floating Fast Consultation Action Buttons for Mobile / Desktop */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-30 flex flex-col items-end gap-2">
        <a
          href="https://wa.me/919561617668?text=Hello%20Top%20Solar%20Solutions,%20I%20am%20interested%20in%20a%20solar%20panel%20consultation"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 p-3 sm:px-3.5 sm:py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
          title="Chat on WhatsApp with Solar Expert"
          aria-label="Chat on WhatsApp with Solar Expert"
        >
          <MessageCircle className="w-4 h-4 fill-white shrink-0" />
          <span className="hidden sm:inline whitespace-nowrap">WhatsApp Solar Desk</span>
        </a>

        <button
          onClick={() => scrollToConsultation()}
          className="flex items-center gap-2 px-3.5 py-2.5 sm:px-4 sm:py-3 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold rounded-full shadow-lg hover:shadow-xl border border-neutral-700 transition-all cursor-pointer"
          title="Book Free Site Survey"
        >
          <Phone className="w-4 h-4 text-amber-400 shrink-0" />
          <span className="whitespace-nowrap">Book Consultation</span>
        </button>
      </div>

      {/* Leads Management CRM Modal */}
      <LeadsManagementModal
        isOpen={isLeadsCRMOpen}
        onClose={() => setIsLeadsCRMOpen(false)}
      />
    </div>
  );
}
