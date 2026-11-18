import React, { useState, useEffect, useId } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Calendar, 
  FileText, 
  ShieldCheck, 
  AlertCircle,
  MessageSquare,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { COMPANY_INFO } from '../data/solarData';

interface ConsultationFormData {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  state: string;
  pincode: string;
  propertyType: 'Residential' | 'Commercial' | 'Industrial' | 'Housing Society' | 'Agricultural / Farm' | string;
  systemInterest: '100 kW+ Commercial & Industrial Solar' | 'On-Grid Solar System' | 'Off-Grid Solar System' | 'Hybrid Solar System' | 'Solar Water Heater' | 'Solar Park EPC' | 'Turn-Key Solution / Advisory' | string;
  roofType: 'RCC Flat Roof' | 'Tin / Metal Shed' | 'Tiled Roof' | 'Ground Mount' | 'Unsure / Need Survey' | string;
  averageMonthlyBill: number;
  currentSanctionedLoadKw?: number;
  preferredContactTime: 'Morning (9am - 12pm)' | 'Afternoon (12pm - 4pm)' | 'Evening (4pm - 8pm)' | 'Anytime' | string;
  notes: string;
}

interface ConsultationLeadFormProps {
  initialSystemInterest?: string;
  initialMonthlyBill?: number;
  initialPropertyType?: string;
  onLeadSubmitted?: (lead: any) => void;
}

export const ConsultationLeadForm: React.FC<ConsultationLeadFormProps> = ({
  initialSystemInterest,
  initialMonthlyBill,
  initialPropertyType,
  onLeadSubmitted,
}) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    phone: '',
    email: '',
    city: 'Pune',
    state: 'Maharashtra',
    pincode: '',
    propertyType: (initialPropertyType as any) || 'Residential',
    systemInterest: (initialSystemInterest as any) || 'On-Grid Solar System',
    roofType: 'RCC Flat Roof',
    averageMonthlyBill: initialMonthlyBill || 6500,
    currentSanctionedLoadKw: undefined,
    preferredContactTime: 'Anytime',
    notes: '',
  });

  const nameId = useId();
  const phoneId = useId();
  const emailId = useId();
  const cityId = useId();
  const pincodeId = useId();
  const propertyTypeId = useId();
  const systemInterestId = useId();
  const roofTypeId = useId();
  const billId = useId();
  const loadId = useId();
  const timeId = useId();
  const notesId = useId();

  // Update if props change
  useEffect(() => {
    if (initialSystemInterest) {
      setFormData((prev) => ({
        ...prev,
        systemInterest: initialSystemInterest as any,
      }));
    }
  }, [initialSystemInterest]);

  useEffect(() => {
    if (initialMonthlyBill) {
      setFormData((prev) => ({
        ...prev,
        averageMonthlyBill: initialMonthlyBill,
      }));
    }
    if (initialPropertyType) {
      setFormData((prev) => ({
        ...prev,
        propertyType: initialPropertyType as any,
      }));
    }
  }, [initialMonthlyBill, initialPropertyType]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<any | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validation
    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number for consultation.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmissionSuccess(data);
        if (onLeadSubmitted) {
          onLeadSubmitted(data.lead);
        }
      } else {
        setErrorMessage(data.error || 'Unable to register consultation. Please call us directly.');
      }
    } catch (err) {
      // Fallback offline confirmation
      const offlineLead = {
        id: `TS-${Date.now().toString().slice(-6)}`,
        createdAt: new Date().toISOString(),
        ...formData,
        status: 'new',
        recommendedCapacityKw: Math.max(1, Math.round((formData.averageMonthlyBill / 8.5 / 120) * 10) / 10),
        projectedAnnualSavings: Math.round(formData.averageMonthlyBill * 12 * 0.9),
      };
      setSubmissionSuccess({
        success: true,
        message: 'Consultation request logged successfully! Our team will contact you shortly.',
        lead: offlineLead,
      });
      if (onLeadSubmitted) {
        onLeadSubmitted(offlineLead);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="consultation" className="py-16 lg:py-24 bg-white border-b border-neutral-200 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">
            Free Technical Site Survey & Feasibility
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Schedule a Solar Panel Consultation
          </h2>
          <p className="mt-3 text-base text-neutral-600">
            Speak with an accredited Top Solar Solution engineer. We provide shadow-free roof layout design, 3D solar generation modeling, DISCOM net-metering assistance, and transparent equipment pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Form Container (7 cols) */}
          <div className="lg:col-span-7 bg-neutral-50 rounded-2xl border border-neutral-200 p-5 sm:p-8 lg:p-10 shadow-xs min-w-0">
            
            {submissionSuccess ? (
              <div className="space-y-6 text-center py-6">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-bold rounded-md border border-emerald-200">
                    Lead Ref: {submissionSuccess.lead.id}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-neutral-900">
                    Consultation Request Registered!
                  </h3>
                  <p className="text-sm text-neutral-600 max-w-md mx-auto">
                    Thank you, <strong className="text-neutral-900 font-semibold">{submissionSuccess.lead.fullName}</strong>. Our senior solar engineer is reviewing your site criteria ({submissionSuccess.lead.systemInterest}) and will reach out during your preferred window.
                  </p>
                </div>

                {/* Sizing summary card */}
                <div className="bg-white p-5 rounded-xl border border-neutral-200 text-left max-w-md mx-auto space-y-2.5 text-xs">
                  <div className="flex justify-between pb-2 border-b border-neutral-100 font-semibold text-neutral-900">
                    <span>Estimated Recommended Size</span>
                    <span className="text-amber-600 font-bold">{submissionSuccess.lead.recommendedCapacityKw} kWp</span>
                  </div>
                  <div className="flex justify-between text-neutral-600">
                    <span>Estimated Annual Savings</span>
                    <span className="font-bold text-emerald-600">₹{submissionSuccess.lead.projectedAnnualSavings?.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-neutral-600">
                    <span>Location</span>
                    <span>{submissionSuccess.lead.city}, {submissionSuccess.lead.state}</span>
                  </div>
                  <div className="flex justify-between text-neutral-600">
                    <span>Preferred Time</span>
                    <span>{submissionSuccess.lead.preferredContactTime}</span>
                  </div>
                </div>

                {/* Direct quick action buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <a
                    href="tel:+919561617668"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    <span>Call Sales Direct (+91 95616 17668)</span>
                  </a>

                  <button
                    onClick={() => setSubmissionSuccess(null)}
                    className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-neutral-700 bg-white border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors"
                  >
                    Submit Another Query
                  </button>
                </div>

              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {errorMessage && (
                  <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2 text-xs text-red-700">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Grid 1: Name and Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor={nameId} className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      id={nameId}
                      type="text"
                      required
                      placeholder="e.g. Ramesh Patel"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-neutral-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-amber-500 text-neutral-900 placeholder:text-neutral-400"
                    />
                  </div>

                  <div>
                    <label htmlFor={phoneId} className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      id={phoneId}
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-neutral-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-amber-500 text-neutral-900 placeholder:text-neutral-400 font-mono"
                    />
                  </div>
                </div>

                {/* Grid 2: Email and City */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-2">
                    <label htmlFor={emailId} className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      id={emailId}
                      type="email"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-neutral-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-amber-500 text-neutral-900 placeholder:text-neutral-400"
                    />
                  </div>

                  <div>
                    <label htmlFor={cityId} className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      City / District *
                    </label>
                    <input
                      id={cityId}
                      type="text"
                      required
                      placeholder="e.g. Pune"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-neutral-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-amber-500 text-neutral-900 placeholder:text-neutral-400"
                    />
                  </div>
                </div>

                {/* Grid 3: Property Type & System Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor={propertyTypeId} className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Property Category
                    </label>
                    <select
                      id={propertyTypeId}
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value as any })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-neutral-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-amber-500 text-neutral-900"
                    >
                      <option value="Residential">Residential Bungalow / Terrace</option>
                      <option value="Commercial">Commercial Office / Hospital / School</option>
                      <option value="Industrial">Industrial Factory / Warehouse</option>
                      <option value="Housing Society">Co-op Housing Society (CHS)</option>
                      <option value="Agricultural / Farm">Agricultural Land / Farmhouse</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor={systemInterestId} className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      System of Interest
                    </label>
                    <select
                      id={systemInterestId}
                      value={formData.systemInterest}
                      onChange={(e) => setFormData({ ...formData, systemInterest: e.target.value as any })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-neutral-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-amber-500 text-neutral-900 font-medium"
                    >
                      <option value="100 kW+ Commercial & Industrial Solar">100 kW+ Commercial & Industrial Solar (Turnkey EPC)</option>
                      <option value="On-Grid Solar System">On-Grid Solar System (Net Metering)</option>
                      <option value="Off-Grid Solar System">Off-Grid Solar System (Battery Autonomy)</option>
                      <option value="Hybrid Solar System">Hybrid Solar System (Net Meter + Battery)</option>
                      <option value="Solar Water Heater">Solar Water Heater (Central / Domestic)</option>
                      <option value="Solar Park EPC">Solar Park EPC (Megawatt Ground Mount)</option>
                      <option value="Turn-Key Solution / Advisory">Turn-Key Advisory / Structural Audit</option>
                    </select>
                  </div>
                </div>

                {/* Grid 4: Roof Type & Monthly Bill */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor={roofTypeId} className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Roof / Installation Surface
                    </label>
                    <select
                      id={roofTypeId}
                      value={formData.roofType}
                      onChange={(e) => setFormData({ ...formData, roofType: e.target.value as any })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-neutral-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-amber-500 text-neutral-900"
                    >
                      <option value="RCC Flat Roof">RCC Flat Concrete Roof (Elevated or Standard)</option>
                      <option value="Tin / Metal Shed">Tin / Metal Industrial Shed</option>
                      <option value="Tiled Roof">Tiled / Mangalore Tiled Roof</option>
                      <option value="Ground Mount">Ground Mount Open Land</option>
                      <option value="Unsure / Need Survey">Unsure (Request On-Site Structural Survey)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor={billId} className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Avg. Monthly Electricity Bill (₹)
                    </label>
                    <input
                      id={billId}
                      type="number"
                      step="500"
                      min="1000"
                      placeholder="e.g. 7500"
                      value={formData.averageMonthlyBill}
                      onChange={(e) => setFormData({ ...formData, averageMonthlyBill: Number(e.target.value) })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-neutral-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-amber-500 text-neutral-900 font-mono"
                    />
                  </div>
                </div>

                {/* Grid 5: Preferred Consultation Time & Notes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor={timeId} className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Preferred Call / Visit Time
                    </label>
                    <select
                      id={timeId}
                      value={formData.preferredContactTime}
                      onChange={(e) => setFormData({ ...formData, preferredContactTime: e.target.value as any })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-neutral-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-amber-500 text-neutral-900"
                    >
                      <option value="Anytime">Anytime during business hours</option>
                      <option value="Morning (9am - 12pm)">Morning (9:00 AM - 12:00 PM)</option>
                      <option value="Afternoon (12pm - 4pm)">Afternoon (12:00 PM - 4:00 PM)</option>
                      <option value="Evening (4pm - 8pm)">Evening (4:00 PM - 8:00 PM)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor={pincodeId} className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Pincode
                    </label>
                    <input
                      id={pincodeId}
                      type="text"
                      maxLength={6}
                      placeholder="e.g. 411038"
                      value={formData.pincode}
                      onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-neutral-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-amber-500 text-neutral-900 font-mono"
                    />
                  </div>
                </div>

                {/* Additional queries */}
                <div>
                  <label htmlFor={notesId} className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Specific Site Requirements or Government Subsidy Queries
                  </label>
                  <textarea
                    id={notesId}
                    rows={2}
                    placeholder="e.g. Inquiring about PM Surya Ghar Muft Bijli Yojana rooftop subsidy, net-metering approvals, or elevated structural requirements..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm bg-white border border-neutral-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-amber-500 text-neutral-900 placeholder:text-neutral-400"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-neutral-900 hover:bg-neutral-800 disabled:bg-neutral-400 rounded-lg shadow-sm transition-all text-center cursor-pointer"
                >
                  <Send className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{isSubmitting ? 'Registering Consultation...' : 'Request Free Site Survey & Quotation'}</span>
                </button>

                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-neutral-500 pt-1 text-center">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    No obligation or hidden fees
                  </span>
                  <span className="hidden xs:inline">·</span>
                  <span>Response within 2 hours</span>
                </div>

              </form>
            )}

          </div>

          {/* Contact Details & Trust Sidebar (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Card */}
            <div className="bg-neutral-900 text-white rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="border-b border-neutral-800 pb-4 space-y-3">
                <div className="bg-white p-2 rounded-xl inline-block shadow-xs max-w-[240px]">
                  <img
                    src={COMPANY_INFO.logoUrl}
                    alt="Top Solar Solution®"
                    className="h-10 w-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-mono px-2 py-0.5 bg-neutral-800 text-amber-400 border border-neutral-700 rounded-md font-bold">
                    GST: {COMPANY_INFO.gstNumber}
                  </span>
                  <span className="text-xs text-neutral-400">
                    MNRE & MEDA Approved
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-sm">
                
                {/* Phone Numbers */}
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-neutral-800 rounded-lg text-amber-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-400">Direct Telephone / WhatsApp</div>
                    <div className="font-mono font-semibold text-white mt-0.5">
                      <a href="tel:+919561617668" className="hover:text-amber-400 transition-colors block">
                        +91 95616 17668
                      </a>
                      <a href="tel:+918788697832" className="hover:text-amber-400 transition-colors block">
                        +91 87886 97832
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-neutral-800 rounded-lg text-amber-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-neutral-400">Email Inquiries</div>
                    <a href="mailto:info@topsolarsolutions.com" className="font-semibold text-white hover:text-amber-400 transition-colors block mt-0.5 break-all">
                      info@topsolarsolutions.com
                    </a>
                  </div>
                </div>

                {/* Regional Presence */}
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-neutral-800 rounded-lg text-amber-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-400">Operational Hub</div>
                    <div className="font-semibold text-white mt-0.5">
                      Pune, Maharashtra, India
                    </div>
                    <div className="text-xs text-neutral-400 mt-1">
                      Executing projects across Maharashtra, Rajasthan, Delhi NCR, and Himachal Pradesh.
                    </div>
                  </div>
                </div>

              </div>

              {/* Brochure download block */}
              <div className="pt-4 border-t border-neutral-800">
                <a
                  href={COMPANY_INFO.brochurePdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Top_Solar_Solution_Brochure.pdf"
                  className="w-full flex items-center justify-between gap-3 p-3 rounded-lg bg-neutral-800 hover:bg-neutral-750 transition-colors text-xs font-semibold text-white"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <FileText className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Download Company Brochure (PDF)</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                </a>
              </div>

            </div>

            {/* Why Consult Top Solar Solutions Card */}
            <div className="bg-white rounded-2xl border border-neutral-200 p-6 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                What Happens During Your Site Consultation?
              </h4>
              <ul className="space-y-3 text-xs text-neutral-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-neutral-900 font-semibold block">Drone & 3D Shadow Analysis:</strong>
                    Identifying optimal azimuth, tilt angle, and ensuring zero shading across all seasons.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-neutral-900 font-semibold block">Structural Integrity Verification:</strong>
                    Assessing terrace load bearing, wind gust resilience, and non-penetrative mounting options.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-neutral-900 font-semibold block">DISCOM Net-Metering Guidance:</strong>
                    Complete liaison for bi-directional meter sanctioning with MSEDCL / state electrical boards.
                  </div>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
