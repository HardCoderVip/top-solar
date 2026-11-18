export interface ProductSolution {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  description: string;
  image: string;
  howItWorks: string[];
  efficiencyBenefits: {
    title: string;
    description: string;
    metric?: string;
  }[];
  sustainabilityBenefits: {
    title: string;
    description: string;
    metric?: string;
  }[];
  idealFor: string[];
  keyFeatures: string[];
  specs: {
    label: string;
    value: string;
  }[];
}

export interface ProjectShowcase {
  id: string;
  title: string;
  location: string;
  capacity: string;
  type: string;
  image: string;
  description: string;
  highlights: string[];
}

export interface ClientReview {
  id: string;
  clientName: string;
  location: string;
  rating: number;
  review: string;
  projectType: string;
}

export const COMPANY_INFO = {
  name: "Top Solar Solution",
  legalName: "Top Solar Solution",
  logoUrl: "/assets/top_solar_solution_logo.jpg",
  gstNumber: "27KGAPS7418L1ZO",
  tagline: "Clean Energy, Secure Tomorrow · Solar Energy, A Safer Future",
  motto: "Powering Today · Sustaining Tomorrow · Building a Better Future",
  presence: "100 kW+ Green projects & counting across Maharashtra, Rajasthan, Delhi NCR, and Himachal Pradesh",
  headquarters: "Pune, Maharashtra, India",
  phones: ["+91 95616 17668", "+91 87886 97832"],
  email: "info@topsolarsolutions.com",
  website: "www.topsolarsolutions.com",
  brochurePdfUrl: "/assets/aistudio/top_solar_solution_brochure__1__2d9fd4d9.pdf",
  certifications: [
    "Registered Trademark: Top Solar Solution®",
    "GST Registered: 27KGAPS7418L1ZO",
    "Recognized by Ministry of New and Renewable Energy (MNRE), Govt of India",
    "GEDA (Gujarat Energy Development Agency) Accredited",
    "MEDA (Maharashtra Energy Development Agency) Approved",
    "Tier 1 BIS Approved Inverters & PV Modules"
  ],
  stats: [
    { label: "Green Projects", value: "100 kW+" },
    { label: "Completed Projects", value: "100+" },
    { label: "Institutional & B2B Clients", value: "50+" },
    { label: "Typical Bill Reduction", value: "Up to 90%" },
    { label: "PV Module Lifespan", value: "25+ Years" }
  ]
};

export const SOLAR_PRODUCTS: ProductSolution[] = [
  {
    id: "on-grid",
    name: "On-Grid Solar System",
    tagline: "Smart Solar Solution for Maximum Savings",
    badge: "Most Popular for Urban Rooftops",
    description: "Connected directly to the electricity grid via Net Metering. During the day, solar panels power your premises, and surplus generation is automatically exported to the grid for utility credits, drastically cutting your electric bill.",
    image: "/assets/aistudio/IMG-20261029-WA0022_da8b2f9c.jpg",
    howItWorks: [
      "Solar PV panels absorb sunlight and generate Direct Current (DC) electricity.",
      "High-efficiency string or central inverter converts DC power to 230V/415V Alternating Current (AC).",
      "Power first feeds your home, office, or factory equipment in real time.",
      "Surplus electricity flows seamlessly through the bi-directional Net Meter to the grid.",
      "At night, draw electricity from the grid, offset by your daytime export credits."
    ],
    efficiencyBenefits: [
      {
        title: "21.5%+ High-Efficiency PV Modules",
        description: "Mono PERC and TOPCon cell architecture maximizes energy yield even under high ambient temperatures.",
        metric: "21.5%+"
      },
      {
        title: "98.4% Inverter Conversion",
        description: "Tier-1 BIS-approved inverters (Polycab, Sungrow, Growatt) ensure near-zero transmission losses.",
        metric: "98.4%"
      },
      {
        title: "Maximum Financial ROI",
        description: "Zero battery replacement expenditure provides the fastest capital recovery of 3 to 4 years.",
        metric: "3-4 Yrs ROI"
      }
    ],
    sustainabilityBenefits: [
      {
        title: "Direct Coal Power Replacement",
        description: "Every 1 kWp installed displaces ~1.4 tons of CO2 emissions annually from conventional thermal plants.",
        metric: "1.4t CO2/kW/yr"
      },
      {
        title: "25+ Years Environmental Lifecycle",
        description: "Ultra-durable tempered glass with anti-reflective coating delivers clean power for over a quarter-century.",
        metric: "25+ Years"
      },
      {
        title: "Zero Operational Waste",
        description: "Requires only periodic rainwater or soft-water washing with zero consumable chemical residues."
      }
    ],
    idealFor: [
      "Residential bungalows & apartment terraces",
      "Commercial office buildings & IT parks",
      "Manufacturing facilities & warehouses with continuous grid supply",
      "Hospitals, schools, and university campuses"
    ],
    keyFeatures: [
      "Bi-directional Net Metering approval assistance",
      "No recurring battery maintenance or replacement costs",
      "Real-time mobile app energy generation monitoring",
      "Eligible for Government Rooftop Solar Subsidies (PM Surya Ghar)"
    ],
    specs: [
      { label: "Panel Technology", value: "Tier 1 Mono PERC / TOPCon Half-cut" },
      { label: "Inverter Type", value: "Grid-Tied String Inverter (BIS Approved)" },
      { label: "Grid Synchronisation", value: "Single Phase 230V / Three Phase 415V" },
      { label: "System Warranty", value: "25 Years Performance Warranty" }
    ]
  },
  {
    id: "off-grid",
    name: "Off-Grid Solar System",
    tagline: "Independent Solar Power Solution",
    badge: "100% Grid Autonomy",
    description: "An autonomous solar solution operating completely independent of the electricity utility. Excess daytime solar energy is stored in advanced battery banks, guaranteeing clean, dependable power throughout the night and during severe grid blackouts.",
    image: "/assets/aistudio/IMG-20261029-WA0021_7473be8d.jpg",
    howItWorks: [
      "Solar panels convert sunlight into DC electricity.",
      "Smart MPPT solar charge controller manages incoming current with 99% tracking accuracy.",
      "Primary power supplies domestic or business load immediately.",
      "Surplus energy charges the heavy-duty battery bank (Tubular or Lithium-ion).",
      "During nighttime, cloudy weather, or grid failure, the inverter powers loads directly from the batteries."
    ],
    efficiencyBenefits: [
      {
        title: "99% MPPT Solar Tracking",
        description: "Advanced maximum power point tracking harvests up to 30% more energy during weak sunrise and twilight hours.",
        metric: "99% MPPT"
      },
      {
        title: "High-Discharge Lithium / Tubular Options",
        description: "Customized battery sizing provides 80% Depth of Discharge with long cycle endurance.",
        metric: "3000+ Cycles"
      },
      {
        title: "Total Energy Independence",
        description: "Complete immunity against frequent voltage fluctuations, load shedding, and escalating utility tariffs."
      }
    ],
    sustainabilityBenefits: [
      {
        title: "Eliminates Diesel Generator Smog",
        description: "Directly replaces noisy, polluting diesel gensets, saving thousands of liters of fossil fuel every year.",
        metric: "100% Diesel-Free"
      },
      {
        title: "Decentralized Clean Micro-Power",
        description: "Brings modern electricity to remote farmland, farmhouses, and villages without laying destructive power lines."
      },
      {
        title: "Eco-Friendly Battery Recycling",
        description: "All battery packs comply with strict RoHS and national lead/lithium takeback environmental norms."
      }
    ],
    idealFor: [
      "Remote agricultural farms & agro-processing sheds",
      "Luxury eco-resorts & off-grid villas",
      "Telecom tower backup power stations",
      "Villages & rural healthcare centers with irregular power"
    ],
    keyFeatures: [
      "Uninterrupted 24/7 power autonomy",
      "Heavy-duty surge capacity for pump and motor start-ups",
      "Intelligent battery protection from overcharging & deep discharge",
      "Expandable modular battery bank configuration"
    ],
    specs: [
      { label: "Battery Chemistry", value: "LiFePO4 Lithium or C10 Solar Tubular" },
      { label: "Charge Controller", value: "High-Efficiency MPPT Controller" },
      { label: "Inverter Output", value: "Pure Sine Wave AC Output" },
      { label: "Autonomy Period", value: "1 to 3 Days reserve (Customizable)" }
    ]
  },
  {
    id: "hybrid",
    name: "Hybrid Solar System",
    tagline: "Best of Grid + Battery Backup",
    badge: "Smartest & Most Resilient",
    description: "The most advanced solar solution engineered today. It combines the financial savings of On-Grid Net Metering with the security of battery storage, ensuring your premises never experience dark moments during grid failures while still banking excess units with the utility.",
    image: "/assets/aistudio/IMG-20261029-WA0019_abb18c17.jpg",
    howItWorks: [
      "Solar panels generate clean DC electricity in real-time.",
      "Hybrid smart inverter feeds current directly to connected home and facility loads first.",
      "Extra solar power seamlessly charges the backup battery bank to 100%.",
      "Any remaining excess solar overflows through the Net Meter into the utility grid.",
      "During grid cuts, the hybrid inverter switches seamlessly (<10ms) to battery power without restarting sensitive equipment."
    ],
    efficiencyBenefits: [
      {
        title: "Smart Priority Energy Routing",
        description: "Microprocessor algorithm dynamically routes power: Load -> Battery -> Grid export.",
        metric: "100% Automated"
      },
      {
        title: "Zero Switchover Delay (<10ms)",
        description: "Instantaneous UPS-grade transition protects sensitive electronics, servers, and hospital apparatus.",
        metric: "< 10ms"
      },
      {
        title: "Peak Tariff Shaving",
        description: "Programmed to discharge stored battery power during expensive peak hours, slashing commercial demand charges."
      }
    ],
    sustainabilityBenefits: [
      {
        title: "Maximum Carbon Abatement",
        description: "Captures 100% of daytime generation with zero curtailment, maximizing green energy utilization.",
        metric: "98% Clean Share"
      },
      {
        title: "Resilient Distributed Grid Support",
        description: "Reduces strain on regional distribution transformers during hot afternoon peak demand windows."
      },
      {
        title: "Long Life Smart Inverter Core",
        description: "Tier-1 BIS-approved inverters with integrated IP65 weatherproofing ensure 15+ years service life."
      }
    ],
    idealFor: [
      "Modern luxury residences & smart homes",
      "Hospitals, diagnostic clinics & laboratories",
      "Cold storages & food processing plants",
      "Commercial businesses where power outages cause revenue losses"
    ],
    keyFeatures: [
      "Simultaneous Net Metering & Battery Backup",
      "Seamless UPS switchover without rebooting computers",
      "Intelligent Time-of-Day (ToD) tariff optimization",
      "Compact wall-mounted modular storage architecture"
    ],
    specs: [
      { label: "Inverter Technology", value: "Bi-directional Hybrid Inverter (BIS Approved)" },
      { label: "Battery Compatibility", value: "High-Voltage Lithium ESS / 48V Tubular" },
      { label: "Switchover Speed", value: "Instantaneous (< 10 ms)" },
      { label: "Monitoring", value: "Dual Wi-Fi / 4G Cloud Telemetry" }
    ]
  },
  {
    id: "solar-water-heater",
    name: "Solar Water Heaters",
    tagline: "High-Efficiency Thermal Energy Systems",
    badge: "Heavy-Duty Stainless Steel",
    description: "High-performance solar thermal water heating systems for housing societies, hotels, hospitals, and residential bungalows. Authorized partner for India's leading manufacturers including V-Guard, Racold Solar, Sudarshan Saur, Supreme Solar, and Ashirwad Solar.",
    image: "/assets/aistudio/IMG-20261029-WA0016_f279e9e4.jpg",
    howItWorks: [
      "High-grade evacuated glass tubes (ETC) or flat plate copper collectors (FPC) absorb solar radiation.",
      "The thermosiphon principle causes hot water to naturally rise into the insulated storage tank.",
      "Colder water from the tank bottom flows down into the solar collector tubes to repeat the heating cycle.",
      "Multi-layer polyurethane insulation (PUF) retains water hot at 60°C to 80°C for over 48 hours."
    ],
    efficiencyBenefits: [
      {
        title: "85%+ Solar Thermal Efficiency",
        description: "Triple-target selective coating (Cu/SS/Al-N) captures maximum infra-red heat even on hazy and cold winter mornings.",
        metric: "85%+ Thermal"
      },
      {
        title: "Massive Electricity Savings",
        description: "Replacing conventional 2kW to 3kW electric geysers saves an average of 1,500 to 3,000 units of electricity per flat annually.",
        metric: "75% Energy Cut"
      },
      {
        title: "48-Hour Thermal Retention",
        description: "High-density CFC-free PUF insulation retains steaming hot water through chilling overnight temperatures."
      }
    ],
    sustainabilityBenefits: [
      {
        title: "Direct Clean Heat Harvesting",
        description: "Zero electrical conversion loss; direct photon-to-thermal absorption yields the lowest carbon footprint in heating.",
        metric: "1.2t CO2/system"
      },
      {
        title: "Food-Grade Stainless Steel Inner Tanks",
        description: "Rust-proof SS304/SS316 inner tanks prevent heavy metal contamination and ensure potable, hygienic water."
      },
      {
        title: "Long Working Life",
        description: "Built to withstand hard water conditions and thermal shocks for 15+ dependable years."
      }
    ],
    idealFor: [
      "Multi-story cooperative housing societies (central manifold distribution)",
      "Bungalows, row houses & private villas",
      "Hotels, guest houses & resorts",
      "Hostels, boarding schools & hospital laundries"
    ],
    keyFeatures: [
      "Authorized channel partner for Racold, V-Guard, Sudarshan Saur & Supreme Solar",
      "High-pressure and non-pressure configurations available",
      "Electrical heating element backup for extended monsoon periods",
      "Corrosion-resistant powder-coated outer casing"
    ],
    specs: [
      { label: "Capacities Available", value: "100 LPD to 10,000+ LPD Central Systems" },
      { label: "Collector Type", value: "Three-target Evacuated Tube (ETC) / Copper FPC" },
      { label: "Inner Tank Material", value: "High Grade SS-304L / SS-316 / Glass Lined" },
      { label: "Insulation", value: "50mm High-Density Injected PUF" }
    ]
  },
  {
    id: "solar-parks-epc",
    name: "Solar Parks & Turn-Key EPC",
    tagline: "Industrial Scale Megawatt Solar Infrastructure",
    badge: "100 kW+ Track Record",
    description: "Comprehensive end-to-end EPC (Engineering, Procurement, and Construction) services for utility-scale solar parks, ground-mounted MW arrays, and large-scale industrial rooftops across India.",
    image: "/assets/aistudio/IMG-20261029-WA0020_441e86a2.jpg",
    howItWorks: [
      "Precision 3D shadow analysis, soil resistivity testing, and topographical drone survey.",
      "Detailed engineering design, string configuration, and high-voltage transmission substation planning.",
      "Procurement of Tier-1 PV modules (Waaree, Vikram Solar) and central inverters at competitive scale.",
      "Civil foundation pile driving, hot-dip galvanized mounting structures, and cabling.",
      "Testing, grid synchronization, regulatory approvals (MEDA, GEDA, DISCOMs), and SCADA telemetry."
    ],
    efficiencyBenefits: [
      {
        title: "Optimized Plant Performance Ratio",
        description: "State-of-the-art engineering yields Performance Ratios (PR) consistently exceeding 78% to 82%.",
        metric: "80%+ PR"
      },
      {
        title: "Turn-Key Execution Speed",
        description: "Experienced on-site project management guarantees on-time commissioning within contract milestones."
      },
      {
        title: "Preventive O&M Management",
        description: "Dedicated operations and maintenance teams with thermal drone inspections maintain peak generation."
      }
    ],
    sustainabilityBenefits: [
      {
        title: "Gigawatt-Scale Clean Power",
        description: "Delivers millions of kilowatt-hours of green electricity directly into state and national power grids.",
        metric: "100 kW+ Built"
      },
      {
        title: "Industrial Decarbonization",
        description: "Enables corporate clients to achieve 100% ESG compliance, RE100 commitments, and carbon neutrality."
      }
    ],
    idealFor: [
      "Independent Power Producers (IPPs) & solar investors",
      "Heavy industrial manufacturers (textiles, steel, automotive, chemicals)",
      "Captive and Open Access solar consumers",
      "Government & municipal infrastructure projects"
    ],
    keyFeatures: [
      "Full regulatory liaison (CEIG approval, DISCOM NOC, Net Metering / Open Access)",
      "High-grade hot-dip galvanized mounting structures (wind resistance up to 150 km/h)",
      "Central SCADA remote telemetry and string-level fault diagnostics",
      "Comprehensive long-term Operation & Maintenance (O&M) contracts"
    ],
    specs: [
      { label: "Project Capacity", value: "100 kW to 25 MW+ Utility Scale" },
      { label: "Structure Rating", value: "HDG 80 Micron, Wind tested to 150 km/h" },
      { label: "Grid Interconnection", value: "11 kV / 33 kV / 66 kV / 132 kV Substation" },
      { label: "O&M Service", value: "24/7 Monitoring with On-Site Technical Team" }
    ]
  }
];

export const REAL_PROJECTS: ProjectShowcase[] = [
  {
    id: "project-buildings-societies",
    title: "Buildings & Housing Society Solar Projects",
    location: "Pune, PCMC & Maharashtra Metropolitan Region",
    capacity: "Turnkey Society & Commercial EPC",
    type: "Buildings & Society Solar Projects",
    image: "/assets/aistudio/IMG-20261104-WA0035_5b29eb01.jpg",
    description: "Specialized rooftop solar installations for Cooperative Housing Societies (CHS), multi-story commercial towers, hospitals, and industrial warehouses. Directly offsets high common-area electricity bills for elevators, water pumping systems, and corridor lighting.",
    highlights: [
      "Specialized for Housing Societies (CHS), Commercial Buildings & Hospitals",
      "Offsets up to 90% of society common electricity meter bills (lifts & pumps)",
      "Elevated hot-dip galvanized super-structures preserving 100% usable terrace space",
      "Complete DISCOM net-metering approvals and society committee consultation"
    ]
  },
  {
    id: "project-100kw-ci-epc",
    title: "100 kW+ Commercial & Industrial Rooftop Array",
    location: "Chakan Industrial Hub, Pune, Maharashtra",
    capacity: "100 kW+ High-Tension (HT) Solar",
    type: "100 kW+ Industrial Turnkey EPC",
    image: "/assets/aistudio/IMG-20261029-WA0022_da8b2f9c.jpg",
    description: "Flagship 100 kW+ grid-tied rooftop solar array engineered with Tier-1 mono PERC/TOPCon solar modules. Powers heavy manufacturing equipment during daytime hours with substantial HT tariff offsets and bi-directional net metering.",
    highlights: [
      "100 kW+ generation capacity offsetting heavy motor and machinery loads",
      "Generates ~1,45,000 units of clean electricity annually",
      "Reduces industrial electricity costs by ₹14.8+ Lakhs per year",
      "Eligible for 40% Year 1 accelerated depreciation tax deduction"
    ]
  },
  {
    id: "project-pcmc-pune",
    title: "40kW Rooftop Solar Installation at PCMC Pune",
    location: "Pimpri-Chinchwad (PCMC), Pune, Maharashtra",
    capacity: "40 kWp Commercial Rooftop",
    type: "Commercial Grid-Tied System",
    image: "/assets/aistudio/IMG-20261029-WA0022_da8b2f9c.jpg",
    description: "Turnkey rooftop solar installation atop a multi-story commercial complex in Pune. Features Tier-1 high-efficiency mono PV modules mounted on elevated structural steel, powering building common areas and elevators with significant net metering credits.",
    highlights: [
      "40 kWp installed capacity with dual MPPT inverters",
      "Generates approx. 58,000 units of clean electricity annually",
      "Reduces commercial electricity expenditure by ₹5.2 Lakhs/year",
      "Overcoming roof equipment shading with elevated hot-dip galvanized purlins"
    ]
  },
  {
    id: "project-sangli-satara",
    title: "20kW High-Tilt Elevated Solar Structure",
    location: "Sangli - Satara Region, Maharashtra",
    capacity: "20 kWp Elevated Residential / Agri Structure",
    type: "Elevated High-Tilt Solar Solution",
    image: "/assets/aistudio/IMG-20261029-WA0021_7473be8d.jpg",
    description: "Custom-engineered super-structure elevated over the terrace to preserve complete roof usability beneath. Optimally angled to harvest peak year-round Maharashtra solar irradiance while serving as a sheltered shade pavilion.",
    highlights: [
      "Elevated 10ft clearance structure preserving usable terrace space",
      "Engineered to withstand heavy monsoon gusts up to 140 km/h",
      "Over 29,000 units generated annually with Net-Metering synchronization",
      "Rapid 3.2-year capital payback achieved"
    ]
  },
  {
    id: "project-polycab-inverters",
    title: "Multi-Inverter Control Wall & ACDB/DCDB Station",
    location: "Industrial Facility, Pune, Maharashtra",
    capacity: "Multi-String Inverter Control Station",
    type: "Electrical Protection & Distribution Array",
    image: "/assets/aistudio/IMG-20261029-WA0019_abb18c17.jpg",
    description: "Pristine electrical engineering installation featuring an array of wall-mounted Polycab BIS-approved solar inverters paired with dedicated ACDB and DCDB surge protection switchgear and structured cable trays.",
    highlights: [
      "Equipped with Type II SPDs (Surge Protection Devices) & MCBs",
      "Polycab BIS-approved string inverters with real-time digital displays",
      "Zero-downtime maintenance isolation per string",
      "Conforms to MNRE and state DISCOM electrical safety standards"
    ]
  },
  {
    id: "project-tin-shed",
    title: "Industrial Tin Shed Rooftop Solar Array",
    location: "Industrial Corridor, Maharashtra",
    capacity: "50 kWp Industrial Rooftop",
    type: "Industrial Metal Shed Solar Mounting",
    image: "/assets/aistudio/IMG-20261029-WA0016_f279e9e4.jpg",
    description: "Direct trapezoidal sheet non-penetrative solar rail mounting on an industrial factory tin shed. High efficiency modules feed continuous daytime factory machinery with zero disruption to plant production.",
    highlights: [
      "Non-penetrative leak-proof aluminum clamp mounting",
      "Substantial daytime load offset for heavy machinery",
      "Accelerated depreciation tax benefits for the factory owner",
      "Thermal insulation effect: lowers temperature inside shed by 3-4°C"
    ]
  },
  {
    id: "project-control-technician",
    title: "Precision Commissioning & Quality Testing",
    location: "Pune Engineering Center, Maharashtra",
    capacity: "Testing, Commissioning & Quality Audit",
    type: "Technical Quality Assurance",
    image: "/assets/aistudio/IMG-20261029-WA0020_441e86a2.jpg",
    description: "Certified Top Solar Solution electrical engineer performing insulation resistance testing, earthing measurement, and string voltage calibration before grid synchronization.",
    highlights: [
      "Rigorous four-stage safety and dielectric resistance audit",
      "Copper bonded chemical earthing pits for panel structures and inverters",
      "Real-time monitoring telemetry commissioning and client handover",
      "Full statutory DISCOM synchronization documentation"
    ]
  }
];

export const BRAND_PARTNERS = {
  authorizedPartners: [
    {
      name: "Waaree",
      title: "India's No. 1 Solar Panel Brand",
      description: "High-efficiency PV modules, advanced TOPCon & Mono PERC technology, longer life and trusted by millions.",
      tier: "Authorised Channel Partner"
    },
    {
      name: "Vikram Solar",
      title: "Performance. Reliability. Trust.",
      description: "High-performance solar modules, advanced automated manufacturing, Made in India & trusted worldwide.",
      tier: "Authorised Channel Partner"
    },
    {
      name: "Luminous",
      title: "Energy Solutions for a Brighter Tomorrow",
      description: "High-efficiency panels, robust mechanical durability, superior low-light performance.",
      tier: "Authorised Channel Partner"
    },
    {
      name: "Polycab",
      title: "Tier 1 BIS Approved Solar Inverters",
      description: "High-efficiency string inverters with built-in protections, digital telemetry, and reliable service network.",
      tier: "Technology Partner"
    }
  ],
  waterHeaterPartners: [
    "V-Guard",
    "Racold Solar",
    "Sudarshan Saur",
    "Supreme Solar",
    "Ashirwad Solar",
    "Haier Solar",
    "A.O. Smith",
    "Venus",
    "Havells",
    "Chromagen",
    "Nuetech",
    "Jain Solar",
    "Hindustan",
    "Kamal Solar",
    "Tata Power Solar",
    "Sonha Green",
    "Octava",
    "Sai Sunblaze"
  ]
};

export const CLIENT_REVIEWS: ClientReview[] = [
  {
    id: "review-ranjekar",
    clientName: "Mr. Ranjekar Builder",
    location: "Pune, Maharashtra",
    rating: 5,
    projectType: "Commercial & Solar Water Heater Installation",
    review: "Top Solar Solution completed our solar water heater installation with excellent workmanship and professionalism. The team was punctual, transparent, and ensured every detail was handled perfectly. We are highly satisfied with their genuine service and would confidently recommend them."
  },
  {
    id: "review-shelar",
    clientName: "Mr. Shelar – PCMC Society",
    location: "Pimpri-Chinchwad, Pune",
    rating: 5,
    projectType: "Cooperative Housing Society Solar System",
    review: "A trustworthy and highly professional team. From the initial discussion to the final installation, everything was completed smoothly and on time. Their genuine work, quality materials, and prompt after-sales support exceeded our expectations."
  },
  {
    id: "review-akshay",
    clientName: "Mr. Akshay Tower Society",
    location: "Pune, Maharashtra",
    rating: 5,
    projectType: "Central Solar Water Heating System",
    review: "Our solar water heater system was installed perfectly by Top Solar Solution. The installation quality was excellent, and even after long-term usage, we have not faced a single issue. The system performs efficiently every day, and we truly appreciate their commitment to quality and customer satisfaction."
  }
];
