import React, { useState, useId } from 'react';
import { 
  Zap, 
  IndianRupee, 
  ArrowRight, 
  Leaf, 
  TreeDeciduous, 
  Clock, 
  Building2, 
  Maximize,
  Sparkles
} from 'lucide-react';

interface SolarSavingsCalculatorProps {
  onApplyEstimateToForm: (data: {
    monthlyBill: number;
    propertyType: string;
    systemType: string;
    recommendedKw: number;
    annualSavings: number;
  }) => void;
}

export const SolarSavingsCalculator: React.FC<SolarSavingsCalculatorProps> = ({
  onApplyEstimateToForm
}) => {
  const [monthlyBill, setMonthlyBill] = useState<number>(6500);
  const [propertyType, setPropertyType] = useState<string>('Residential');
  const [systemType, setSystemType] = useState<string>('On-Grid Solar System');

  const billInputId = useId();

  // Dynamic calculations based on Indian average tariffs:
  // Residential ~₹8.5/kWh; Commercial/Industrial ~₹10.8/kWh
  const tariffPerUnit = propertyType === 'Residential' ? 8.5 : 10.8;
  const estimatedUnitsPerMonth = Math.round(monthlyBill / tariffPerUnit);
  
  // 1 kWp produces ~4 kWh (units) per day = ~120 units per month in Maharashtra/Western India
  const recommendedKw = Math.max(1, Math.round((estimatedUnitsPerMonth / 120) * 10) / 10);
  
  // Area required: ~100 sq ft per 1 kW
  const roofAreaSqFt = Math.round(recommendedKw * 100);

  // Solar generation
  const monthlySolarUnits = Math.round(recommendedKw * 120);
  // Net annual savings
  const annualSavings = Math.round(Math.min(monthlyBill * 12 * 0.92, monthlySolarUnits * 12 * tariffPerUnit));
  // 25-year cumulative savings (factoring modest 2% tariff rise vs panel degradation)
  const cumulative25YearsSavings = Math.round(annualSavings * 23.5);

  // Payback period
  const estimatedCost = Math.round(recommendedKw * 58000);
  const paybackYears = Math.max(2.9, Math.round((estimatedCost / Math.max(annualSavings, 1)) * 10) / 10);

  // Environmental impact
  const co2ReductionTons = Math.round((recommendedKw * 1440 * 0.82) / 100) / 10;
  const treesEquivalent = Math.round((co2ReductionTons * 1000) / 22);

  const handleApply = () => {
    onApplyEstimateToForm({
      monthlyBill,
      propertyType,
      systemType,
      recommendedKw,
      annualSavings,
    });
  };

  return (
    <section id="calculator" className="py-16 lg:py-24 bg-neutral-100/70 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100/80 border border-amber-300 rounded-md text-xs font-bold text-amber-900 mb-2">
            <Zap className="w-3.5 h-3.5 text-amber-600" />
            <span>Interactive Financial & Energy Modeler</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Calculate Your Solar Sizing, Savings & Carbon Offset
          </h2>
          <p className="mt-3 text-base text-neutral-600">
            Estimate your required rooftop solar capacity in kW, estimated annual electricity bill savings, payback timeline, and ecological impact.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Inputs Section (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-neutral-200 space-y-6">
            <h3 className="font-display text-xl font-bold text-neutral-900">
              1. Input Your Site Details
            </h3>

            {/* Property Type Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-2">
                Property / Connection Type
              </label>
              <div className="grid grid-cols-2 gap-2">
                {['Residential', 'Commercial', 'Industrial', 'Housing Society'].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setPropertyType(type)}
                    className={`px-3 py-2 text-xs font-semibold rounded-lg border text-left transition-colors ${
                      propertyType === type
                        ? 'bg-neutral-900 text-white border-neutral-900'
                        : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Monthly Electricity Bill */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor={billInputId} className="text-xs font-bold uppercase tracking-wider text-neutral-600">
                  Average Monthly Bill (₹)
                </label>
                <span className="font-display text-lg font-bold text-neutral-900 tabular-nums">
                  ₹{monthlyBill.toLocaleString('en-IN')}
                </span>
              </div>
              
              <input
                id={billInputId}
                type="range"
                min="1500"
                max="250000"
                step="1000"
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(Number(e.target.value))}
                className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />

              <div className="flex justify-between gap-2 text-[10px] sm:text-[11px] text-neutral-400 mt-1">
                <span>₹1,500</span>
                <span>₹50,000</span>
                <span className="hidden xs:inline">₹1.3L (100 kW+)</span>
                <span>₹2,50,000+</span>
              </div>

              {/* Quick preset chips */}
              <div className="flex flex-wrap items-center gap-1.5 mt-3">
                {[
                  { label: '₹6k', value: 6000 },
                  { label: '₹15k', value: 15000 },
                  { label: '₹35k', value: 35000 },
                  { label: '₹75k', value: 75000 },
                  { label: '⚡ 100 kW+ (₹1.3L)', value: 130000 },
                  { label: '₹2.0L', value: 200000 }
                ].map((item) => (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() => {
                      setMonthlyBill(item.value);
                      if (item.value >= 100000 && propertyType === 'Residential') {
                        setPropertyType('Industrial');
                      }
                    }}
                    className={`px-2.5 py-1 text-xs rounded-md border font-medium transition-colors cursor-pointer ${
                      monthlyBill === item.value
                        ? 'bg-amber-400 border-amber-500 text-neutral-950 font-bold shadow-2xs'
                        : 'bg-white border-neutral-200 text-neutral-600 hover:bg-neutral-50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* System Preference */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-2">
                Preferred System Solution
              </label>
              <select
                value={systemType}
                onChange={(e) => setSystemType(e.target.value)}
                className="w-full px-3 py-2.5 text-sm bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-amber-500 text-neutral-800 font-medium"
              >
                <option value="100 kW+ Commercial & Industrial Solar (Turnkey EPC)">100 kW+ Commercial & Industrial Solar (Turnkey EPC)</option>
                <option value="On-Grid Solar System">On-Grid Solar System (Maximum Net-Metering ROI)</option>
                <option value="Hybrid Solar System">Hybrid Solar System (Net-Meter + Battery Backup)</option>
                <option value="Off-Grid Solar System">Off-Grid Solar System (100% Autonomy & Battery)</option>
                <option value="Solar Water Heater">Solar Water Heater (Thermal Heating)</option>
              </select>
            </div>

            <div className="p-3.5 bg-neutral-50 rounded-xl border border-neutral-200 text-xs text-neutral-600 space-y-1">
              <p className="font-semibold text-neutral-900">
                Tariff Benchmark Applied: ₹{tariffPerUnit}/unit
              </p>
              <p>
                Calculations conform to Western India solar insolation averages (~4 to 4.5 peak sun hours daily).
              </p>
            </div>
          </div>

          {/* Results Section (7 cols) */}
          <div className="lg:col-span-7 p-5 sm:p-8 lg:p-10 bg-gradient-to-br from-neutral-900 to-neutral-950 text-white flex flex-col justify-between space-y-8 min-w-0">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 pb-4 border-b border-neutral-800">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  2. Sizing & Estimated Financial Yield
                </span>
                <span className="text-xs text-neutral-400 break-words">
                  {propertyType} · {systemType}
                </span>
              </div>

              {/* Main Headline KPIs */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                
                {/* Recommended Capacity */}
                <div className="p-5 bg-neutral-800/80 rounded-xl border border-neutral-700">
                  <div className="text-xs font-semibold text-neutral-400 mb-1">
                    Recommended Solar Capacity
                  </div>
                  <div className="font-display text-3xl sm:text-4xl font-extrabold text-amber-400 tabular-nums">
                    {recommendedKw} <span className="text-xl font-bold text-white">kWp</span>
                  </div>
                  {recommendedKw >= 100 && (
                    <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-amber-400 text-neutral-950 text-[11px] font-extrabold rounded-md uppercase tracking-wider">
                      <Sparkles className="w-3 h-3 fill-neutral-950" />
                      <span>100 kW+ C&I Scale System</span>
                    </div>
                  )}
                  <div className="mt-2 flex items-center gap-1.5 text-xs text-neutral-300">
                    <Maximize className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Requires ~{roofAreaSqFt} sq. ft. shadow-free roof</span>
                  </div>
                </div>

                {/* Annual Savings */}
                <div className="p-5 bg-neutral-800/80 rounded-xl border border-neutral-700">
                  <div className="text-xs font-semibold text-neutral-400 mb-1">
                    Projected Annual Bill Savings
                  </div>
                  <div className="font-display text-3xl sm:text-4xl font-extrabold text-emerald-400 tabular-nums">
                    ₹{annualSavings.toLocaleString('en-IN')}
                  </div>
                  <div className="mt-2 flex items-center gap-1.5 text-xs text-neutral-300">
                    <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Est. Capital Payback: ~{paybackYears} years</span>
                  </div>
                </div>

              </div>

              {/* Secondary Metrics Strip */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                <div className="p-3 bg-neutral-800/50 rounded-lg border border-neutral-800">
                  <div className="text-[11px] text-neutral-400">Monthly Solar Yield</div>
                  <div className="text-sm sm:text-base font-bold text-white tabular-nums">
                    ~{monthlySolarUnits} Units/mo
                  </div>
                </div>

                <div className="p-3 bg-neutral-800/50 rounded-lg border border-neutral-800">
                  <div className="text-[11px] text-neutral-400">25-Yr Cumulative Savings</div>
                  <div className="text-sm sm:text-base font-bold text-white tabular-nums">
                    ₹{(cumulative25YearsSavings / 100000).toFixed(1)} Lakhs
                  </div>
                </div>

                <div className="p-3 bg-neutral-800/50 rounded-lg border border-neutral-800 col-span-2 sm:col-span-1">
                  <div className="text-[11px] text-neutral-400">Hardware Warranty</div>
                  <div className="text-sm sm:text-base font-bold text-white">
                    25 Years Linear
                  </div>
                </div>
              </div>

              {/* Environmental Carbon Offset Card */}
              <div className="mt-6 p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                    <Leaf className="w-3.5 h-3.5 shrink-0" />
                    <span>Annual Environmental Abatement</span>
                  </div>
                  <p className="text-xs text-emerald-200/80">
                    Your clean solar installation will offset substantial fossil-fuel carbon emissions.
                  </p>
                </div>

                <div className="flex items-center gap-4 shrink-0">
                  <div className="text-left sm:text-right">
                    <div className="text-sm font-bold text-white tabular-nums">
                      {co2ReductionTons} Tonnes
                    </div>
                    <div className="text-[10px] text-emerald-300">CO2 / Year</div>
                  </div>
                  <div className="h-6 w-px bg-emerald-800" />
                  <div className="text-left sm:text-right">
                    <div className="text-sm font-bold text-white tabular-nums">
                      ~{treesEquivalent}
                    </div>
                    <div className="text-[10px] text-emerald-300">Trees Planted Eq.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action to transfer calculation to Consultation Form */}
            <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-neutral-400 text-center sm:text-left">
                Ready to confirm roof orientation and feasibility with a site engineer?
              </p>
              <button
                onClick={handleApply}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm transition-all text-center whitespace-normal sm:whitespace-nowrap cursor-pointer"
              >
                <span>Transfer Sizing to Consultation Form</span>
                <ArrowRight className="w-4 h-4 text-neutral-950 shrink-0" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
