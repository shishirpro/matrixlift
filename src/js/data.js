// Content source for MATRIX Lift. Copy follows the client's company profile (M-500-v.1).
window.ML = window.ML || {};

ML.contact = {
  phone: "+88 09678 800 819",
  phoneHref: "tel:+8809678800819",
  phone2: "+88 01973 018796",
  phone2Href: "tel:+8801973018796",
  email: "info@matrixlift.com.bd",
  email2: "matrixlift.bd@gmail.com",
  address: "DDL Sranti Villa, Flat # A/1 (West), House # 1031/33, Road # 9, Avenue # 9, DOHS Mirpur, Dhaka 1216",
  addressShort: "DOHS Mirpur, Dhaka 1216",
  web: "www.matrixlift.com.bd",
  hours: "Sat – Thu, 9:30 AM – 6:30 PM",
};

// Three-tier brand strategy
ML.series = [
  { key: "apex", series: "Apex", brand: "VOLKSLIFT", segment: "Top Notch", tagline: "Precision in Motion · Excellence in Elevation", logo: null, href: "brands.html#volkslift" },
  { key: "prime", series: "Prime", brand: "MATRIX LIFT", segment: "Mid-range", tagline: "Smart, Reliable & Yours.", logo: "img/matrix-lift.png", href: "brands.html#matrix" },
  { key: "value", series: "Value", brand: "ELEVATES", segment: "Budget", tagline: "Affordable & Trusted Performance.", logo: "img/elevate.png", href: "brands.html#elevate" },
];

ML.products = [
  {
    slug: "passenger-lift", name: "Passenger Lift", cat: "Lifts", img: "img/products/p-passenger.jpg",
    line: "Smooth, quiet vertical travel for residential and commercial buildings.",
    overview: "Passenger lifts for apartments, offices, hotels and mixed-use buildings, available in Machine Room on Top (MR) and Machine Room Less (MRL) configurations. Offered across all three series — Apex (VOLKSLIFT), Prime (MATRIX LIFT) and Value (ELEVATES).",
    uses: ["Residential apartments", "Office buildings", "Hotels & hospitality", "Shopping complexes"],
    benefits: ["MR and MRL configurations", "450 – 1600 kg, 6 – 21 persons", "Up to 2.5 m/s, up to 40 floors", "Customised decoration options"],
    specs: true,
  },
  {
    slug: "home-lift", name: "Home Lift", cat: "Lifts", img: "img/products/p-home.jpg",
    line: "Compact, elegant lifts for private residences and duplexes.",
    overview: "Home lifts for villas, duplexes and private homes where space is limited, with minimal pit and headroom and finishes that match the interior.",
    uses: ["Villas & duplexes", "Private residences", "Accessibility upgrades", "Boutique buildings"],
    benefits: ["Small footprint", "Glass or enclosed shaft", "Quiet operation", "Premium cabin finishes"],
  },
  {
    slug: "panoramic-lift", name: "Panoramic Lift", cat: "Lifts", img: "img/products/p-panoramic.jpg",
    line: "Glass cabins that turn vertical travel into an architectural feature.",
    overview: "Panoramic lifts combine glass and stainless steel to create a landmark element in atriums, malls and façades while giving passengers an open view.",
    uses: ["Atriums & lobbies", "Shopping malls", "Hotels", "External façades"],
    benefits: ["Round, semi-round and flat glass", "Laminated safety glass", "Feature lighting", "Custom architectural integration"],
  },
  {
    slug: "hospital-bed-lift", name: "Hospital Bed Lift", cat: "Lifts", img: "img/products/p-hospital.jpg",
    line: "Deep cabins and precise levelling for beds, stretchers and staff.",
    overview: "Bed lifts provide the cabin depth, door width and levelling accuracy hospitals need to move patients safely on beds and stretchers.",
    uses: ["Hospitals", "Clinics", "Diagnostic centres", "Care homes"],
    benefits: ["Deep cabin for beds", "Accurate floor levelling", "Hygienic stainless interiors", "Priority service modes"],
  },
  {
    slug: "cargo-lift", name: "Cargo Lift", cat: "Freight", img: "img/products/p-cargo.jpg",
    line: "Heavy-duty freight lifts for factories, warehouses and logistics.",
    overview: "Cargo lifts built for heavy loads and frequent loading cycles, with reinforced cabins and wide doors. MATRIX has handled lifts up to 6000 kg capacity.",
    uses: ["Garment & manufacturing", "Warehouses", "Retail back-of-house", "Logistics centres"],
    benefits: ["Up to 6000 kg handled", "Reinforced cabin floor", "Wide door openings", "Durable finishes"],
  },
  {
    slug: "cargo-lifting-platform", name: "Cargo Lifting Platform", cat: "Freight", img: "img/products/p-cargo-platform.jpg",
    line: "Open-frame platforms that lift goods between levels.",
    overview: "Guide-rail cargo platforms for moving goods between floors and mezzanines where a full lift shaft is not required.",
    uses: ["Factories", "Warehouses", "Mezzanine floors", "Loading areas"],
    benefits: ["Minimal civil works", "Robust steel frame", "Safety gates and railings", "Flexible sizing"],
  },
  {
    slug: "car-lift", name: "Car Lift", cat: "Parking", img: "img/products/p-car.jpg",
    line: "Vehicle elevators that move cars between parking levels.",
    overview: "Car lifts transport vehicles between floors where ramps are impractical, maximising usable parking space in residential and commercial buildings.",
    uses: ["Basement parking", "Showrooms", "Residential towers", "Commercial buildings"],
    benefits: ["Platform for cars and SUVs", "Heavy-duty drive", "Space-saving vs. ramps", "Clear driver signalling"],
  },
  {
    slug: "car-lifting-platform", name: "Car Lifting Platform", cat: "Parking", img: "img/products/p-car-platform.jpg",
    line: "Shaftless platforms that raise vehicles between levels.",
    overview: "Car lifting platforms move vehicles vertically on a guided steel structure — an economical alternative to a full car lift.",
    uses: ["Residential garages", "Showrooms", "Workshops", "Small buildings"],
    benefits: ["No full shaft required", "Heavy-duty structure", "Mechanical safety locks", "Cost-effective"],
  },
  {
    slug: "2-post-car-park", name: "2 Post Car Park", cat: "Parking", img: "img/products/p-2post.jpg",
    line: "Two-post stackers that double parking in the same footprint.",
    overview: "Two-post parking lifts stack one car above another, doubling capacity in garages and basements with a compact footprint.",
    uses: ["Apartment basements", "Private garages", "Offices", "Dealerships"],
    benefits: ["Doubles parking capacity", "Compact footprint", "Mechanical safety locks", "Low maintenance"],
  },
  {
    slug: "4-post-car-park", name: "4 Post Car Park", cat: "Parking", img: "img/products/p-4post.jpg",
    line: "Four-post stackers for heavier vehicles and extra stability.",
    overview: "Four-post parking lifts support vehicles on four columns for added stability, suitable for SUVs and heavier cars.",
    uses: ["Residential parking", "Commercial parking", "Dealerships", "Service centres"],
    benefits: ["Extra stability", "Suits SUVs", "Mechanical safety locks", "Free-standing installation"],
  },
  {
    slug: "scissor-platform", name: "Scissor Platform", cat: "Platforms", img: "img/products/p-scissor-platform.jpg",
    line: "Hydraulic scissor tables for loading and work positioning.",
    overview: "Scissor platforms raise goods or work pieces over short heights — ideal for loading docks and production lines.",
    uses: ["Loading docks", "Production lines", "Warehouses", "Workshops"],
    benefits: ["Hydraulic operation", "High load capacity", "Low lowered height", "Compact design"],
  },
  {
    slug: "scissor-lift", name: "Scissor Lift", cat: "Platforms", img: "img/products/p-scissor-lift.jpg",
    line: "Mobile elevated work platforms for maintenance at height.",
    overview: "Self-propelled scissor lifts give crews a safe, stable working platform for installation and maintenance at height.",
    uses: ["Building maintenance", "Installation work", "Warehouses", "Event venues"],
    benefits: ["Stable elevated platform", "Guard railings", "Mobile", "Easy controls"],
  },
  {
    slug: "escalator", name: "Escalator", cat: "Escalators", img: "img/products/p-escalator.jpg",
    line: "Reliable people movers for high-traffic public and retail spaces.",
    overview: "Escalators move large numbers of people continuously in malls, transit hubs and public buildings, with energy-saving and safety features.",
    uses: ["Shopping malls", "Airports & metro", "Supermarkets", "Public buildings"],
    benefits: ["Continuous high capacity", "Energy-saving modes", "Indoor & outdoor models", "Comprehensive safety devices"],
  },
  {
    slug: "moving-walk", name: "Moving Walk", cat: "Escalators", img: "img/products/p-moving.jpg",
    line: "Horizontal and inclined walkways for airports and large venues.",
    overview: "Moving walks carry passengers, trolleys and luggage over long horizontal or gently inclined distances.",
    uses: ["Airports", "Hypermarkets", "Exhibition centres", "Transit corridors"],
    benefits: ["Horizontal or inclined", "Trolley-compatible", "Smooth, quiet ride", "Energy-saving modes"],
  },
  {
    slug: "construction-hoist", name: "Construction Hoist", cat: "Construction", img: "img/products/p-hoist.jpg",
    line: "Material hoists that move loads up construction sites.",
    overview: "Construction hoists lift materials up building sites quickly and safely, reducing reliance on cranes and manual handling.",
    uses: ["High-rise construction", "Infrastructure", "Industrial plants", "Renovation projects"],
    benefits: ["Fast material handling", "Modular mast", "Overload protection", "Easy erection"],
  },
  {
    slug: "construction-lift", name: "Construction Lift", cat: "Construction", img: "img/products/p-construction-lift.jpg",
    line: "Rack-and-pinion lifts that carry crews and materials on site.",
    overview: "Construction lifts transport workers and materials up high-rise sites with enclosed cages and rack-and-pinion drive.",
    uses: ["High-rise construction", "Bridges & towers", "Industrial plants", "Large projects"],
    benefits: ["Single or twin cage", "Rack-and-pinion drive", "Overspeed safety device", "Modular mast extension"],
  },
];

// Elevator Planning Guide — Passenger Lift (company profile p.13). Confirm before publishing.
ML.passengerSpecs = [
  { kg: 450, pers: 6, speed: "0.63 – 1.00", car: "1150 × 1100", door: "700 × 2100", floors: "up to 20" },
  { kg: 630, pers: 8, speed: "1.00 – 1.75", car: "1400 × 1100", door: "800 × 2100", floors: "up to 32" },
  { kg: 800, pers: 10, speed: "1.00 – 2.50", car: "1400 × 1350", door: "900 × 2100", floors: "up to 40" },
  { kg: 1000, pers: 13, speed: "1.00 – 2.50", car: "1600 × 1400", door: "900 × 2100", floors: "up to 40" },
  { kg: 1150, pers: 15, speed: "1.00 – 2.50", car: "2000 × 1350", door: "1100 × 2100", floors: "up to 40" },
  { kg: 1350, pers: 18, speed: "1.00 – 2.50", car: "2000 × 1500", door: "1100 × 2100", floors: "up to 40" },
  { kg: 1600, pers: 21, speed: "1.00 – 2.50", car: "2000 × 1700", door: "1100 × 2100", floors: "up to 40" },
];
ML.mrlSpecs = [
  { kg: 630, pers: 8, speed: "1.00 – 1.75", car: "1100 × 1400", door: "700 × 2100", shaft: "1750 × 1800", floors: "up to 30" },
  { kg: 800, pers: 10, speed: "1.00 – 1.75", car: "1350 × 1400", door: "800 × 2100", shaft: "2000 × 1800", floors: "up to 30" },
  { kg: 1000, pers: 13, speed: "1.00 – 1.75", car: "1600 × 1400", door: "900 × 2100", shaft: "2250 × 1800", floors: "up to 30" },
  { kg: 1150, pers: 15, speed: "1.00 – 1.75", car: "1800 × 1500", door: "1100 × 2100", shaft: "2700 × 2000", floors: "up to 30" },
  { kg: 1350, pers: 18, speed: "1.00 – 1.75", car: "2000 × 1500", door: "1100 × 2100", shaft: "2850 × 2000", floors: "up to 30" },
  { kg: 1600, pers: 21, speed: "1.00 – 1.75", car: "2000 × 1700", door: "1100 × 2100", shaft: "2850 × 2200", floors: "up to 30" },
];

ML.services = [
  { key: "planning", name: "Planning", icon: "compass", text: "Planning Vertical Transportation Solutions by means of Traffic Calculation to determine mode of equipment, number of equipment, capacity, speed etc. in logical sequence." },
  { key: "supply", name: "Supply", icon: "truck", text: "Supply chain support by means of faster and on time delivery." },
  { key: "installation", name: "Installation", icon: "wrench", text: "Installation services as per the norms of the industry. Quality Control of Installation Process by qualified Engineers and Technicians." },
  { key: "maintenance", name: "Maintenance", icon: "shield", text: "Dedicated and motivated Skilled Team are engaged to provide Maintenance Services 24/7 - 365 days a year." },
  { key: "modernization", name: "Modernization", icon: "refresh", text: "Modernization and up-grade old lifts and escalators by latest state-of-the-art kits and components." },
  { key: "spare-parts", name: "Spare Parts", icon: "cog", text: "Provide Spare Parts Support to all the equipments supplied by us." },
];

// Company Profile 2026 — Vision, Mission & Values
ML.vision = "To become the industry reference for what we do and to make our Company a happy place to work and elevate living standard of our compatriots.";
ML.mission = "To maintain our core services as an independent and leading provider of Vertical Transportation Solutions (VTS) namely Lift, Escalator, Moving Walk, Parking System and Construction Hoist.";
ML.values = [
  ["Quality", "quality", "‘Zero’ tolerance to all our activities, services and products."],
  ["Safety", "safety", "Our highest priority and may never be compromised."],
  ["Reliability", "reliability", "Reliable partner in all aspects of our business."],
  ["Compliance", "compliance", "Utmost effort to comply industry standards and norms."],
  ["Environment", "environment", "Focused on Eco Friendly Technology."],
  ["Innovation", "innovation", "Proactively explore new territory."],
  ["Excellence", "excellence", "Strive to be the best in Class and proud to put our name on what we do."],
];

ML.team = [
  {
    name: "Soyel Akter Banu (Munni)", short: "Soyel Akter Banu", role: "Chairperson", img: "img/chairperson-shape.png",
    bio: "Masters in Management. Brings with her more than twenty five years experience in the Telecom Industry.",
    edu: ["Masters in Management"], exp: { n: 25, unit: "+ yrs", label: "Telecom Industry" }, sector: "Telecom",
  },
  {
    name: "Emdad Ur Rahman", short: "Emdad Ur Rahman", role: "Managing Director & CEO", img: "img/md_shape.png",
    bio: "A Science Graduate, EMBA and Mechanical Technologist brings with him about 4 decades of experience in the Lift Industry in home and abroad. Well connected in the global elevator industry, elevator core components manufacturers and industry experts. Engaged in various Social Activities. Lead BEELIA, Bangladesh Elevator, Escalators & Lift Importers Association as President for two terms 2022-24 & 2024-26.",
    edu: ["Science Graduate", "EMBA", "Mechanical Technologist"], exp: { n: 40, unit: " yrs", label: "Lift Industry, home & abroad" }, sector: "Lifts",
    badge: "Ex-President, BEELIA · 2022-24, 2024-26",
    quote: "We invite our valued Patrons and Customers to avail our services and feel the difference.",
  },
  {
    name: "Shuvo Ashish Rahman", short: "Shuvo Ashish Rahman", role: "Director", img: "img/director_1_shape.png",
    bio: "Bachelor in Computer Science & Engineering (CSE) and MBA, major in Marketing. Brings with him over 8 years experience in Aviation Industry.",
    edu: ["B.Sc. in CSE", "MBA, Marketing"], exp: { n: 8, unit: "+ yrs", label: "Aviation Industry" }, sector: "Aviation",
  },
  {
    name: "Tamzid Tahmid Nafi", short: "Tamzid Tahmid Nafi", role: "Director", img: "img/director_2_shape.png",
    bio: "Bachelor in Business Administration, (BBA) major in Management Information Systems. Growing into Lift Industry Domain.",
    edu: ["BBA, Management Information Systems"], exp: { n: null, unit: "", label: "Growing into Lift Industry Domain" }, sector: "Lifts",
  },
];

// Functional team (company profile p.5)
ML.staff = [
  { name: "Md. Saiful Haque", role: "General Manager (Sales)", dept: "Sales & Marketing", img: "img/profile/staff-saiful.jpg" },
  { name: "Rasel Talukder", role: "Manager (Sales)", dept: "Sales & Marketing", img: "img/profile/staff-rasel.jpg" },
  { name: "Engr. Sanjana Alam Khan", role: "Executive, Marketing & Sales", dept: "Sales & Marketing", img: "img/profile/staff-sanjana.jpg" },
  { name: "Maria Akter", role: "Executive, Marketing & Sales", dept: "Sales & Marketing", img: "img/profile/staff-maria.jpg" },
  { name: "Engr. Shamim Reza", role: "Sr. Engineer, Maintenance Operations", dept: "Engineering", img: "img/profile/staff-shamim.jpg" },
  { name: "Engr. Maksudul Hassan Rifat", role: "Installation Engineer", dept: "Engineering", img: "img/profile/staff-rifat.jpg" },
  { name: "Raju Ahmed", role: "Office Assistant", dept: "Administration", img: "img/profile/staff-raju.jpg" },
  { name: "Abul Kalam Azad", role: "Driver", dept: "Administration", img: "img/profile/staff-azad.jpg" },
];
ML.teams = ["Field Survey Team", "Maintenance Team", "Servicing Assistants", "Installation Team", "Installation Assistants", "Front Desk"];

// "Why choose us" (company profile p.12)
// "Why Choose US!" (Company Profile 2026)
ML.why = [
  { title: "Industry Expertise", icon: "excellence", points: ["40+ years Industry Experience.", "Second generation involved in the management.", "Affiliation with Industry leading manufacturers.", "Knowledge on Bangladesh Elevator Market, its growth and trend."] },
  { title: "Tailored Solutions", icon: "compass", points: ["Flexible in accommodating difficult shaft sizes.", "Customize Decoration Options."] },
  { title: "Product Mix", icon: "cog", points: ["3-Tire Product Strategy.", "Can serve all the segments of the market."] },
  { title: "Commitment", icon: "shield", points: ["Faster and timely delivery.", "Inventory Control after delivery.", "Qualified Installation Facility.", "QC during Installation.", "Qualified Maintenance Facility.", "24/7 After Sales Service."] },
  { title: "Own Brand Strategy", icon: "quality", points: ["Two of our own Brands will remain with us forever. No other entity can offer these brands or imitate it.", "As we own the Brands, we are much careful about its configuration and quality.", "We don’t have to pay Brand Royalty to anyone thus can reduce cost without compromising quality and aesthetics."] },
];
ML.track = [
  { n: 1000, suffix: "+", label: "unit lift sales handled" },
  { n: 30, suffix: "", label: "storied buildings — installation" },
  { n: 6000, suffix: " kg", label: "capacity lift handled" },
  { n: 40, suffix: "+", label: "years Industry Experience" },
];
ML.sensitive = ["Prime Minister’s Office", "National Assembly", "Bangladesh Secretariat", "Army HQ", "CHM’s", "Airport", "All most all Public Hospitals"];

// Product catalogues — designs
ML.cabins = Array.from({ length: 18 }, (_, i) => ({ code: "MC-" + String(i + 1).padStart(3, "0"), img: "img/catalogue/mc-" + String(i + 1).padStart(3, "0") + ".jpg", brand: "MATRIX LIFT" }));
ML.doors = Array.from({ length: 12 }, (_, i) => ({ code: "MD-" + String(i + 1).padStart(3, "0"), img: "img/catalogue/md-" + String(i + 1).padStart(3, "0") + ".jpg", brand: "MATRIX LIFT" }));
ML.ecabins = [
  { code: "EC-01", img: "img/catalogue/ec-01.png", spec: { Ceiling: "Steel Sheet, LED Lighting", "Cabin Side Walls": "SS Hairline Finish", "Cabin Rear Wall": "SS Hairline Finish", "Cabin Door": "SS Hairline Finish", Floor: "PVC Floor" } },
  { code: "EC-02", img: "img/catalogue/ec-02.png", spec: { Ceiling: "Steel Sheet, acrylic panel, LED Lighting", "Cabin Side Walls": "SS Hairline Finish", "Cabin Rear Wall": "SS Mirror Etching Finish", "Cabin Door": "SS Hairline Finish", Floor: "PVC Floor" } },
  { code: "EC-03", img: "img/catalogue/ec-03.png", spec: { Ceiling: "Steel Sheet, acrylic panel, LED Lighting", "Cabin Side Walls": "SS Hairline Finish", "Cabin Rear Wall": "SS Mirror Etching Finish", "Cabin Door": "SS Hairline Finish", Floor: "PVC Floor" } },
  { code: "EC-04", img: "img/catalogue/ec-04.png", spec: { Ceiling: "Steel Sheet, acrylic panel, LED Lighting", "Cabin Side Walls": "SS Hairline & Mirror Finish", "Cabin Rear Wall": "SS Mirror Etching Finish", "Cabin Door": "SS Hairline Finish", Floor: "PVC Floor" } },
];
ML.edoors = [
  { code: "ED-01", img: "img/catalogue/ed-01.png", spec: "All Landing Door · SS Hairline Finish" },
  { code: "ED-02", img: "img/catalogue/ed-02.png", spec: "Main Landing Door · SS Mirror Etching Finish" },
  { code: "ED-03", img: "img/catalogue/ed-03.png", spec: "All Landing Door · SS Mirror Etching Finish" },
  { code: "ED-04", img: "img/catalogue/ed-04.png", spec: "All Landing Door · SS Mirror Etching Finish" },
];

// Brand catalogues — message & why choose (MATRIX Product Catalogue 2025 / ELEVATES Product Catalogue)
ML.brandMatrix = {
  intro: "MATRIX is a proudly Bangladesh registered trademark and a leading name in the elevator industry. Based on my 40 years industry experience and with a commitment to innovation, efficiency, and affordability, we specializes in providing high-quality lift solutions tailored to our customer’s unique needs.",
  mission: "At MATRIX, our goal is to bridge the gap between affordability and quality. We strive to offer cost-effective lift solutions without compromising on safety, durability and modern design.",
  manufacturing: "We have multiple choices of reputed and modern robotic production facilities in China, leveraging advanced technology and precision engineering. This allows us to maintain international standards while keeping costs competitive, ensuring our customers receive the best value of their investment.",
  why: [
    ["The brand is registered in our name", "We are more careful to maintain the quality and performance to protect our long earn reputation."],
    ["Customization", "We provide tailored lift solutions to meet diverse architectural and operational requirements."],
    ["Affordability", "Our cost-effective manufacturing process helps reduce expenses while maintaining quality."],
    ["Safety & Reliability", "We adhere to strict safety standards to ensure smooth and secure lift operations."],
    ["Modern Design", "Our lifts are designed with aesthetics and functionality in mind, enhancing the value of any space."],
    ["Manufacturer & Certificate details", "We provide manufacturers details and test certificate of critical components with each lift."],
  ],
  commitment: "MATRIX is dedicated to delivering reliable, efficient, and customized lift solutions to businesses and residential properties across Bangladesh. With a customer-centric approach, we continue to innovate and improve, ensuring our lifts meet the evolving needs of the market.",
};
ML.brandElevates = {
  intro: "ELEVATES is a brand developed in Bangladesh keeping in mind to make it “budget friendly”. The brand’s trademark is registered in Bangladesh. We have invested our four decades of industry experience, sourced out the best suitable components, supply chain, options and split the sourcing in to two parts as:",
  imported: ["Traction Machine", "Deflection pulley", "Complete Control Panel", "Complete Cabin", "Door Operator", "Door Header", "Door Panel", "Door Sill", "Safety Gear", "Speed Governor", "Guide rail", "Traction Steel Rope", "Rope Thimble", "Hydraulic Buffer", "Traveling Cable", "Car Operation Panel", "Landing Operation Panel", "Intercom", "Safety Switches", "Car Top Inspection Panel"],
  local: ["Traction machine base", "Counter weight frame", "Counter weight block", "Guide bracket", "Limit bar", "Governor steel rope", "Anchor, nuts & bolts", "Door sill cover", "ARD (Optional)", "AVR (Optional)"],
  why: [
    ["The brand is registered in our name", "We are more careful to maintain the quality and performance to protect our long earn reputation."],
    ["Customization", "We provide tailored lift solutions to meet diverse architectural and operational requirements."],
    ["Affordability", "Our cost-effective sourcing helps reduce expenses while maintaining quality."],
    ["Safety & Reliability", "We adhere to strict safety standards to ensure smooth and secure lift operations."],
    ["Modern Design", "Our lifts are designed with aesthetics and functionality in mind, enhancing the value of any space."],
  ],
  commitment: "ELEVATES is dedicated to delivering reliable, efficient, and customized lift solutions to businesses and residential properties across Bangladesh. With a customer-centric approach, we continue to innovate and improve, ensuring our lifts meet the evolving needs of the market.",
};

ML.clients = [
  "1653733361.jpg","1653733381.jpg","1653733422.png","1653995381.png","1653995412.png","1653995606.png","1653995636.png",
  "1653995659.jpg","1653995679.jpg","1653995731.jpg","1653995779.jpg","1653995795.jpg","1653995812.jpg","1653995940.jpg",
  "1653997044.png","1653997124.jpg","1653997221.jpg","1653997244.png","1653997344.png","1653997370.jfif","1653997388.png",
  "1653997454.png","1653997472.png","1653997490.jpg","1653997508.jpg","1653997526.jpg","1653997544.jpg","1653997624.png",
  "1653997640.jpg","1653997658.png","1653997675.png",
];

ML.news = [
  {
    slug: "message-from-ceo", title: "More than a provider of vertical transportation", cat: "Leadership", date: "2026",
    img: "img/catalogue/md-portrait.png", fit: "portrait", author: "Emdad Ur Rahman", role: "Managing Director & CEO",
    excerpt: "Our MD & CEO on bridging the gap between affordability and quality, and on delivering long-term value through service and engineering.",
  },
  {
    slug: "volkslift-factory", title: "Inside the VOLKSLIFT manufacturing campus", cat: "Brands", date: "Date to confirm",
    img: "img/volkslift_banner.png", author: "MATRIX Lift", role: "Editorial",
    excerpt: "A look at the 100,000 m² Huzhou campus, its 108 m test tower and the production line behind our flagship brand.",
  },
  {
    slug: "cabin-design", title: "Choosing a cabin finish that lasts", cat: "Design", date: "Date to confirm",
    img: "img/catalogue/mc-015.jpg", author: "MATRIX Lift", role: "Design team",
    excerpt: "Stainless, gold, wood-tone or stone: how to choose a lift interior that suits your building and stands up to daily use.",
  },
];

ML.icons = {
  compass: '<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z"/><path d="m16.2 7.8-2.1 6.3-6.3 2.1 2.1-6.3 6.3-2.1Z"/>',
  truck: '<path d="M3 7h11v9H3zM14 10h4l3 3v3h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',
  wrench: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.2L3 17.8V21h3.2l6.3-6.3a4 4 0 0 0 5.2-5.4l-2.6 2.6-2.4-.6-.6-2.4 2.6-2.6Z"/>',
  check: '<path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Z"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',
  shield: '<path d="M12 8v4l3 2"/><circle cx="12" cy="12" r="9"/>',
  cog: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/>',
  refresh: '<path d="M21 12a9 9 0 0 1-15.5 6.2L3 16"/><path d="M3 12a9 9 0 0 1 15.5-6.2L21 8"/><path d="M21 3v5h-5M3 21v-5h5"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  quality: '<circle cx="12" cy="9" r="6"/><path d="m8.5 14-1.5 8 5-3 5 3-1.5-8"/>',
  safety: '<path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Z"/>',
  reliability: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21.2l8.8-8.8a5.5 5.5 0 0 0 0-7.8Z"/>',
  compliance: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"/><path d="M14 2v6h6M9 15l2 2 4-4"/>',
  environment: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10Z"/><path d="M2 21c0-3 1.9-5.4 5.1-6"/>',
  innovation: '<path d="M9 18h6M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2Z"/>',
  excellence: '<path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1L12 2Z"/>',
  grad: '<path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/>',
  briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M2 13h20"/>',
  play: '<path d="m6 4 14 8-14 8V4Z"/>',
  close: '<path d="M18 6 6 18M6 6l12 12"/>',
  chevL: '<path d="m15 18-6-6 6-6"/>',
  chevR: '<path d="m9 18 6-6-6-6"/>',
  facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2Z"/>',
  linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>',
  youtube: '<path d="M22.5 6.4a2.8 2.8 0 0 0-2-2C18.9 4 12 4 12 4s-6.9 0-8.6.5a2.8 2.8 0 0 0-1.9 1.9A29 29 0 0 0 1 12a29 29 0 0 0 .5 5.6 2.8 2.8 0 0 0 1.9 2c1.7.4 8.6.4 8.6.4s6.9 0 8.6-.5a2.8 2.8 0 0 0 1.9-1.9A29 29 0 0 0 23 12a29 29 0 0 0-.5-5.6Z"/><path d="m9.8 15.5 5.7-3.5-5.7-3.5v7Z"/>',
};

ML.icon = (name, cls = "size-5") =>
  `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ML.icons[name] || ""}</svg>`;
