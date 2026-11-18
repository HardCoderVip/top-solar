export interface SolarLead {
  id: string;
  createdAt: string;
  fullName: string;
  phone: string;
  email: string;
  city: string;
  state: string;
  pincode?: string;
  propertyType: 'Residential' | 'Commercial' | 'Industrial' | 'Housing Society' | 'Agricultural / Farm';
  averageMonthlyBill: number; // in INR
  currentSanctionedLoadKw?: number;
  systemInterest: '100 kW+ Commercial & Industrial Solar' | 'On-Grid Solar System' | 'Off-Grid Solar System' | 'Hybrid Solar System' | 'Solar Water Heater' | 'Solar Park EPC' | 'Turn-Key Solution / Advisory' | string;
  roofType: 'RCC Flat Roof' | 'Tin / Metal Shed' | 'Tiled Roof' | 'Ground Mount' | 'Unsure / Need Survey';
  estimatedRoofAreaSqFt?: number;
  preferredContactTime: 'Morning (9am - 12pm)' | 'Afternoon (12pm - 4pm)' | 'Evening (4pm - 8pm)' | 'Anytime';
  notes?: string;
  status: 'new' | 'contacted' | 'survey_scheduled' | 'quote_sent' | 'installed' | 'closed';
  recommendedCapacityKw: number;
  projectedAnnualSavings: number;
}
