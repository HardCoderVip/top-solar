import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import type { SolarLead } from './src/types/solar.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// In-memory lead storage seeded with sample consultation inquiries for immediate review & CRM

const leadsDatabase: SolarLead[] = [
  {
    id: 'TS-LEAD-100',
    createdAt: new Date(Date.now() - 3600000 * 6).toISOString(),
    fullName: 'Anand Shinde (VP Operations, Apex Auto Engineering)',
    phone: '+91 98231 77200',
    email: 'anand.shinde@apexauto.in',
    city: 'Chakan, Pune',
    state: 'Maharashtra',
    pincode: '410501',
    propertyType: 'Industrial',
    averageMonthlyBill: 145000,
    currentSanctionedLoadKw: 125,
    systemInterest: '100 kW+ Commercial & Industrial Solar',
    roofType: 'Tin / Metal Shed',
    estimatedRoofAreaSqFt: 11000,
    preferredContactTime: 'Morning (9am - 12pm)',
    notes: 'Interested in 100 kW+ turnkey C&I rooftop solar array with High-Tension (HT) net-metering synchronization and accelerated depreciation.',
    status: 'new',
    recommendedCapacityKw: 115,
    projectedAnnualSavings: 1560000,
  },
  {
    id: 'TS-LEAD-101',
    createdAt: new Date(Date.now() - 3600000 * 18).toISOString(),
    fullName: 'Rajesh Kulkarni',
    phone: '+91 98220 44512',
    email: 'rajesh.kulkarni@gmail.com',
    city: 'Pune',
    state: 'Maharashtra',
    pincode: '411038',
    propertyType: 'Residential',
    averageMonthlyBill: 7500,
    currentSanctionedLoadKw: 6,
    systemInterest: 'On-Grid Solar System',
    roofType: 'RCC Flat Roof',
    estimatedRoofAreaSqFt: 650,
    preferredContactTime: 'Morning (9am - 12pm)',
    notes: 'Interested in PM Surya Ghar Muft Bijli Yojana rooftop subsidy & Net-metering setup.',
    status: 'new',
    recommendedCapacityKw: 5,
    projectedAnnualSavings: 72000,
  },
  {
    id: 'TS-LEAD-102',
    createdAt: new Date(Date.now() - 3600000 * 48).toISOString(),
    fullName: 'Mahesh Deshmukh',
    phone: '+91 94223 88109',
    email: 'm.deshmukh@agrofoods.in',
    city: 'Satara',
    state: 'Maharashtra',
    pincode: '415001',
    propertyType: 'Industrial',
    averageMonthlyBill: 68000,
    currentSanctionedLoadKw: 50,
    systemInterest: 'Hybrid Solar System',
    roofType: 'Tin / Metal Shed',
    estimatedRoofAreaSqFt: 5000,
    preferredContactTime: 'Afternoon (12pm - 4pm)',
    notes: 'Need heavy duty battery backup and rooftop solar array for food processing plant.',
    status: 'survey_scheduled',
    recommendedCapacityKw: 45,
    projectedAnnualSavings: 648000,
  },
  {
    id: 'TS-LEAD-103',
    createdAt: new Date(Date.now() - 3600000 * 72).toISOString(),
    fullName: 'Sanjay Ranade (Secretary, Green Meadows CHS)',
    phone: '+91 98901 32745',
    email: 'greenmeadows.society@gmail.com',
    city: 'PCMC, Pune',
    state: 'Maharashtra',
    pincode: '411019',
    propertyType: 'Housing Society',
    averageMonthlyBill: 35000,
    currentSanctionedLoadKw: 30,
    systemInterest: 'Solar Water Heater',
    roofType: 'RCC Flat Roof',
    estimatedRoofAreaSqFt: 3000,
    preferredContactTime: 'Evening (4pm - 8pm)',
    notes: 'Central solar water heating system required for 36 flats in housing society.',
    status: 'quote_sent',
    recommendedCapacityKw: 25,
    projectedAnnualSavings: 310000,
  }
];

// Helper to compute system sizing & financial estimates
function calculateSolarMetrics(monthlyBill: number, propertyType: string) {
  // Average commercial tariff in India ~INR 10-12/kWh, residential ~INR 7.5-9/kWh
  const tariffPerUnit = propertyType === 'Residential' ? 8.5 : 10.5;
  const estimatedMonthlyUnits = Math.round(monthlyBill / tariffPerUnit);
  // Average solar generation: 1 kWp produces ~4 units/day = ~120 units/month
  const recommendedKw = Math.max(1, Math.round((estimatedMonthlyUnits / 120) * 10) / 10);
  
  // Roof area required: ~100 sq ft per 1 kW
  const requiredRoofSqFt = Math.round(recommendedKw * 100);
  
  // Monthly solar generation in units
  const monthlySolarUnits = Math.round(recommendedKw * 120);
  // Annual savings in INR (up to ~90% of electricity bill)
  const annualSavings = Math.round(Math.min(monthlyBill * 12 * 0.9, monthlySolarUnits * 12 * tariffPerUnit));
  
  // Approximate system cost (approx 55k-65k per kW for quality Tier-1 hardware)
  const estimatedCost = Math.round(recommendedKw * 60000);
  // Payback period (years)
  const paybackYears = Math.max(2.8, Math.round((estimatedCost / Math.max(annualSavings, 1)) * 10) / 10);
  // Carbon offset: ~0.82 kg CO2 per kWh solar generated
  const co2ReductionTons = Math.round((recommendedKw * 1440 * 0.82) / 100) / 10;
  // Equivalent trees planted: ~1 tree absorbs 22 kg CO2 per year
  const treesEquivalent = Math.round((co2ReductionTons * 1000) / 22);

  return {
    recommendedKw,
    requiredRoofSqFt,
    monthlySolarUnits,
    annualSavings,
    estimatedCost,
    paybackYears,
    co2ReductionTons,
    treesEquivalent,
  };
}

// API: Calculator endpoint
app.post('/api/calculate', (req, res) => {
  try {
    const monthlyBill = Number(req.body.monthlyBill) || 5000;
    const propertyType = String(req.body.propertyType || 'Residential');
    const metrics = calculateSolarMetrics(monthlyBill, propertyType);
    return res.json({ success: true, metrics });
  } catch (err: any) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// API: Lead submission
app.post('/api/leads', (req, res) => {
  try {
    const {
      fullName,
      phone,
      email,
      city,
      state = 'Maharashtra',
      pincode,
      propertyType = 'Residential',
      averageMonthlyBill = 5000,
      currentSanctionedLoadKw,
      systemInterest = 'On-Grid Solar System',
      roofType = 'RCC Flat Roof',
      estimatedRoofAreaSqFt,
      preferredContactTime = 'Anytime',
      notes,
    } = req.body;

    if (!fullName || !phone) {
      return res.status(400).json({ success: false, error: 'Full name and phone number are required.' });
    }

    const metrics = calculateSolarMetrics(Number(averageMonthlyBill) || 5000, propertyType);

    const newLead: SolarLead = {
      id: `TS-${Date.now().toString().slice(-6)}`,
      createdAt: new Date().toISOString(),
      fullName: fullName.trim(),
      phone: phone.trim(),
      email: email ? email.trim() : '',
      city: city ? city.trim() : 'Pune',
      state: state.trim(),
      pincode: pincode ? pincode.trim() : '',
      propertyType,
      averageMonthlyBill: Number(averageMonthlyBill) || 5000,
      currentSanctionedLoadKw: currentSanctionedLoadKw ? Number(currentSanctionedLoadKw) : undefined,
      systemInterest,
      roofType,
      estimatedRoofAreaSqFt: estimatedRoofAreaSqFt ? Number(estimatedRoofAreaSqFt) : metrics.requiredRoofSqFt,
      preferredContactTime,
      notes: notes ? notes.trim() : '',
      status: 'new',
      recommendedCapacityKw: metrics.recommendedKw,
      projectedAnnualSavings: metrics.annualSavings,
    };

    leadsDatabase.unshift(newLead);

    return res.status(201).json({
      success: true,
      message: 'Consultation request registered successfully! Our solar engineer will contact you shortly.',
      lead: newLead,
      analysis: metrics,
    });
  } catch (err: any) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// API: Get all leads (for lead tracking & consultation dashboard)
app.get('/api/leads', (_req, res) => {
  return res.json({
    success: true,
    count: leadsDatabase.length,
    leads: leadsDatabase,
  });
});

// API: Update lead status
app.patch('/api/leads/:id', (req, res) => {
  const { id } = req.params;
  const { status, notes } = req.body;
  const lead = leadsDatabase.find((l) => l.id === id);
  if (!lead) {
    return res.status(404).json({ success: false, error: 'Lead not found.' });
  }

  if (status) {
    lead.status = status;
  }
  if (notes !== undefined) {
    lead.notes = notes;
  }

  return res.json({ success: true, lead });
});

// API: Export leads as CSV
app.get('/api/leads/export', (_req, res) => {
  const headers = [
    'Lead ID',
    'Date',
    'Customer Name',
    'Phone',
    'Email',
    'City',
    'State',
    'Property Type',
    'Monthly Bill (INR)',
    'System Interest',
    'Roof Type',
    'Est. Capacity (kW)',
    'Est. Annual Savings (INR)',
    'Status',
    'Notes'
  ];

  const rows = leadsDatabase.map((lead) => [
    lead.id,
    new Date(lead.createdAt).toLocaleDateString('en-IN'),
    `"${lead.fullName.replace(/"/g, '""')}"`,
    `"${lead.phone}"`,
    `"${lead.email || ''}"`,
    `"${lead.city}"`,
    `"${lead.state}"`,
    `"${lead.propertyType}"`,
    lead.averageMonthlyBill,
    `"${lead.systemInterest}"`,
    `"${lead.roofType}"`,
    lead.recommendedCapacityKw,
    lead.projectedAnnualSavings,
    lead.status,
    `"${(lead.notes || '').replace(/"/g, '""')}"`,
  ]);

  const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
  res.setHeader('Content-Type', 'text/csv');
  res.setHeader('Content-Disposition', 'attachment; filename="TopSolarSolutions_Leads.csv"');
  return res.send(csvContent);
});

// Setup Vite middleware for development or serve built dist in production
async function startServer() {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    if (fs.existsSync(distPath)) {
      app.use(express.static(distPath));
      app.get('*', (_req, res) => {
        res.sendFile(path.resolve(distPath, 'index.html'));
      });
    } else {
      app.get('*', (_req, res) => {
        res.status(200).send('Top Solar Solution server is active.');
      });
    }
  }

  const port = Number(PORT) || 3000;
  app.listen(port, '0.0.0.0', () => {
    console.log(`Top Solar Solution server running on http://0.0.0.0:${port}`);
  });
}

startServer();
