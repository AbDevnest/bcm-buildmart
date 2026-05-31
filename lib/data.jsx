/* ============================================
   BCM BUILDMART — SITE DATA
   Founder: Vijendra Kumawat
   Phone: +91 9462613147
   Location: Jaipur, Rajasthan
   ============================================ */

// ---- Company Info ----
export const COMPANY = {
  name: 'BCM BuildMart',
  tagline: 'Building Rajasthan with Quality Materials',
  founder: 'Vijendra Kumawat',
  phone: '+91 9462613147',
  phoneRaw: '919462613147',
  email: 'info@bcmbuildmart.com',
  address: 'Near Industrial Area, Sitapura, Jaipur, Rajasthan — 302022',
  city: 'Jaipur, Rajasthan',
  hours: 'Mon–Sat: 8:00 AM – 8:00 PM',
  gst: '08XXXXX1234X1ZX',
  established: '2009',
}

// ---- Products ----
export const products = [
  {
    id: 1,
    name: 'Banas Bajri (River Sand)',
    category: 'Bajri & Sand',
    price: 4500,
    unit: 'per Truck',
    rating: 4.8,
    reviews: 234,
    stock: 'In Stock',
    badge: 'Best Seller',
    isBulk: true,
    description:
      'Premium quality Banas river bajri sourced directly from Banas River, Rajasthan. Ideal for concrete mixing, plastering, and all construction work. Clean, washed, and graded for superior strength.',
    specs: {
      Source: 'Banas River, Rajasthan',
      Grade: 'Fine to Medium',
      Quantity: '1 Truck = ~8–10 Ton',
      Delivery: 'Tata Truck',
      Availability: 'Same Day Jaipur',
      'Bulk Order': 'Available',
    },
    image: '/products/product-1.jpg',
  },
  {
    id: 2,
    name: 'Crushed Rodi (Stone Aggregate)',
    category: 'Rodi & Aggregate',
    price: 5200,
    unit: 'per Truck',
    rating: 4.9,
    reviews: 189,
    stock: 'In Stock',
    badge: 'Premium',
    isBulk: true,
    description:
      'High-strength crushed stone aggregate (Rodi) for RCC work, foundation, and road construction. Available in 6mm, 12mm, 20mm, and 40mm sizes. Sourced from Rajasthan quarries.',
    specs: {
      Type: 'Crushed Stone',
      Sizes: '6mm, 12mm, 20mm, 40mm',
      Quantity: '1 Truck = ~8–10 Ton',
      Delivery: 'Tata Truck',
      Availability: 'Same Day Jaipur',
      'Bulk Order': 'Available',
    },
    image: '/products/product-2.jpg',
  },
  {
    id: 3,
    name: 'Construction Sand (Dust/Grit)',
    category: 'Bajri & Sand',
    price: 3800,
    unit: 'per Truck',
    rating: 4.7,
    reviews: 156,
    stock: 'In Stock',
    badge: 'Popular',
    isBulk: true,
    description:
      'Fine construction sand and grit material for plastering, tile fixing, and block work. Properly screened and free from organic matter.',
    specs: {
      Type: 'Fine Sand / Grit',
      Use: 'Plastering, Tile Work',
      Quantity: '1 Truck = ~8–10 Ton',
      Delivery: 'Tata Truck',
      Availability: 'Same Day Jaipur',
      'Bulk Order': 'Available',
    },
    image: '/products/product-3.jpg',
  },
  {
    id: 4,
    name: 'UltraTech Cement (OPC 53 Grade)',
    category: 'Cement',
    price: 380,
    unit: 'per bag (50kg)',
    rating: 4.9,
    reviews: 412,
    stock: 'In Stock',
    badge: 'Top Brand',
    isBulk: false,
    description:
      "UltraTech OPC 53 Grade cement — India's #1 cement brand. High early strength, excellent workability, and superior durability.",
    specs: {
      Brand: 'UltraTech',
      Grade: 'OPC 53',
      Weight: '50 kg per bag',
      Strength: '53 MPa',
      'Setting Time': '30 min initial',
      'Bulk Order': 'Available (Min 100 bags)',
    },
    image: '/products/product-4.jpg',
  },
  {
    id: 5,
    name: 'TMT Steel Bars (Fe-500D)',
    category: 'Steel & TMT',
    price: 68000,
    unit: 'per ton',
    rating: 4.8,
    reviews: 298,
    stock: 'In Stock',
    badge: 'Premium Grade',
    isBulk: false,
    description:
      'TATA Tiscon Fe-500D TMT steel bars for earthquake-resistant construction. Superior ductility, high tensile strength, and excellent weldability.',
    specs: {
      Brand: 'TATA Tiscon',
      Grade: 'Fe-500D',
      Sizes: '8mm to 25mm',
      Standard: 'IS:1786',
      Ductility: 'High (D Grade)',
      'Bulk Order': 'Available',
    },
    image: '/products/product-5.jpg',
  },
  {
    id: 6,
    name: 'JK Wall Putty (White Cement Based)',
    category: 'Paints & Putty',
    price: 850,
    unit: 'per 40kg bag',
    rating: 4.7,
    reviews: 187,
    stock: 'In Stock',
    badge: 'Best Quality',
    isBulk: false,
    description:
      'JK White Cement Based Wall Putty for smooth, durable wall finish. Excellent adhesion, water resistance, and whiteness.',
    specs: {
      Brand: 'JK Cement',
      Type: 'White Cement Based',
      Weight: '40 kg bag',
      Coverage: '14–16 sq ft/kg',
      Finish: 'Smooth Matt',
      Application: 'Interior & Exterior',
    },
    image: '/products/product-6.jpg',
  },
  {
    id: 7,
    name: 'Asian Paints Primer (Interior)',
    category: 'Paints & Putty',
    price: 1200,
    unit: 'per 20L',
    rating: 4.6,
    reviews: 143,
    stock: 'In Stock',
    badge: 'Trusted Brand',
    isBulk: false,
    description:
      'Asian Paints Interior Wall Primer for superior paint adhesion and coverage. Seals porous surfaces and ensures uniform topcoat finish.',
    specs: {
      Brand: 'Asian Paints',
      Type: 'Interior Primer',
      Volume: '20 Litre',
      Coverage: '120–140 sq ft/L',
      'Drying Time': '2–3 hours',
      Finish: 'Matt',
    },
    image: '/products/product-7.jpg',
  },
  {
    id: 8,
    name: 'PVC Pipes (UPVC Pressure)',
    category: 'Plumbing',
    price: 450,
    unit: 'per 6m pipe',
    rating: 4.5,
    reviews: 98,
    stock: 'In Stock',
    badge: 'ISI Marked',
    isBulk: false,
    description:
      'Supreme UPVC pressure pipes for water supply and plumbing. ISI marked, UV resistant, and corrosion-free.',
    specs: {
      Brand: 'Supreme',
      Type: 'UPVC Pressure',
      Length: '6 meters',
      Sizes: '1/2" to 4"',
      Standard: 'IS:4985',
      'Pressure Rating': 'Class 4 / 6',
    },
    image: '/products/product-8.jpg',
  },
  {
    id: 9,
    name: 'Dr. Fixit Waterproofing',
    category: 'Waterproofing',
    price: 2800,
    unit: 'per 20L',
    rating: 4.8,
    reviews: 167,
    stock: 'In Stock',
    badge: 'Expert Choice',
    isBulk: false,
    description:
      'Dr. Fixit Pidiproof LW+ integral waterproofing compound for concrete and mortar. Reduces water permeability and prevents seepage.',
    specs: {
      Brand: 'Dr. Fixit',
      Type: 'Integral Waterproofing',
      Volume: '20 Litre',
      Coverage: '200 sq ft/L',
      Application: 'Concrete, Mortar',
      Use: 'Roof, Basement, Tank',
    },
    image: '/products/product-9.jpg',
  },
  {
    id: 10,
    name: 'Vitrified Floor Tiles (600×600mm)',
    category: 'Tiles & Flooring',
    price: 55,
    unit: 'per sq ft',
    rating: 4.6,
    reviews: 221,
    stock: 'In Stock',
    badge: 'Premium',
    isBulk: false,
    description:
      'Premium double charged vitrified tiles for living rooms, bedrooms, and commercial spaces. High gloss finish, scratch resistant.',
    specs: {
      Size: '600×600 mm',
      Type: 'Double Charged Vitrified',
      Finish: 'High Gloss',
      Thickness: '9–10 mm',
      'Water Absorption': '<0.5%',
      'Slip Resistance': 'R9',
    },
    image: '/products/product-10.jpg',
  },
]

// ---- Product Categories ----
// count is computed dynamically so it stays in sync with the products array
const _getCount = (name) =>
  name === 'All Products' ? products.length : products.filter(p => p.category === name).length

export const categories = [
  { name: 'All Products',      icon: '🏗️', get count() { return _getCount(this.name) } },
  { name: 'Bajri & Sand',      icon: '🏖️', get count() { return _getCount(this.name) } },
  { name: 'Rodi & Aggregate',  icon: '🪨', get count() { return _getCount(this.name) } },
  { name: 'Cement',            icon: '🏭', get count() { return _getCount(this.name) } },
  { name: 'Steel & TMT',       icon: '⚙️', get count() { return _getCount(this.name) } },
  { name: 'Paints & Putty',    icon: '🎨', get count() { return _getCount(this.name) } },
  { name: 'Plumbing',          icon: '🔧', get count() { return _getCount(this.name) } },
  { name: 'Waterproofing',     icon: '💧', get count() { return _getCount(this.name) } },
  { name: 'Tiles & Flooring',  icon: '🏠', get count() { return _getCount(this.name) } },
]

// ---- Stats ----
export const stats = [
  { value: 5000, suffix: '+', label: 'Happy Customers',  icon: '👥' },
  { value: 15,   suffix: '+', label: 'Years Experience', icon: '🏆' },
  { value: 50,   suffix: '+', label: 'Tata Trucks',      icon: '🚛' },
  { value: 200,  suffix: '+', label: 'Products',         icon: '📦' },
]

// ---- Services ----
export const services = [
  {
    icon: '🏗️',
    title: 'Building Material Supply',
    description:
      'Complete range of construction materials — cement, steel, sand, and aggregates — delivered directly to your site.',
    features: ['All major brands', 'Bulk discounts', 'Quality certified', 'Same-day delivery'],
  },
  {
    icon: '🚛',
    title: 'Tata Truck Transportation',
    description:
      'Our fleet of 50+ Tata trucks ensures timely delivery of bulk materials across Jaipur and Rajasthan.',
    features: ['50+ truck fleet', 'GPS tracked', 'Experienced drivers', 'Bulk capacity'],
  },
  {
    icon: '🏖️',
    title: 'Banas Bajri Supply',
    description:
      'Premium quality Banas river sand sourced directly from Rajasthan. Available in bulk truck loads.',
    features: ['River sourced', 'Clean & washed', 'Multiple grades', 'Bulk orders'],
  },
  {
    icon: '🪨',
    title: 'Rodi & Aggregate Supply',
    description:
      'Crushed stone aggregate in all sizes (6mm to 40mm) for RCC, PCC, and road construction work.',
    features: ['All sizes available', 'Rajasthan quarries', 'High strength', 'Bulk supply'],
  },
  {
    icon: '🏭',
    title: 'Cement & TMT Supply',
    description:
      'Authorized dealer for UltraTech, ACC, Ambuja cement and TATA Tiscon, Kamdhenu TMT steel bars.',
    features: ['Authorized dealer', 'All grades', 'ISI certified', 'Competitive pricing'],
  },
  {
    icon: '📦',
    title: 'Construction Site Delivery',
    description:
      'Direct delivery to your construction site anywhere in Jaipur. We handle logistics so you focus on building.',
    features: ['Site delivery', 'Jaipur coverage', 'Scheduled delivery', 'Unloading support'],
  },
]

// ---- Testimonials ----
export const testimonials = [
  {
    name: 'Rajesh Kumar Sharma',
    role: 'Civil Contractor, Jaipur',
    rating: 5,
    text: 'BCM BuildMart has been my go-to supplier for 3 years. Their Banas Bajri quality is unmatched and Tata truck delivery is always on time. Highly recommend for bulk orders.',
    initials: 'RK',
    project: 'Residential Complex, Vaishali Nagar',
  },
  {
    name: 'Suresh Meena',
    role: 'Builder & Developer',
    rating: 5,
    text: 'Best rodi supplier in Jaipur. Consistent material quality and very competitive pricing. Their same-day delivery service is a lifesaver on tight project timelines.',
    initials: 'SM',
    project: 'Commercial Building, Malviya Nagar',
  },
  {
    name: 'Priya Agarwal',
    role: 'Interior Designer',
    rating: 5,
    text: 'Excellent range of tiles, putty, and finishing materials. The JK Wall Putty they supply is genuine and Asian Paints products are always fresh stock. Great service.',
    initials: 'PA',
    project: 'Villa Renovation, C-Scheme',
  },
  {
    name: 'Mohammad Iqbal',
    role: 'Construction Site Manager',
    rating: 5,
    text: 'We use BCM BuildMart for our large housing project. Bulk material supply is reliable and TMT steel quality is certified. Very professional and responsive team.',
    initials: 'MI',
    project: 'Housing Society, Mansarovar',
  },
  {
    name: 'Vikram Singh Rathore',
    role: 'Real Estate Developer',
    rating: 5,
    text: 'Ordered 50 trucks of bajri and rodi for our township project. BCM delivered everything on schedule with proper documentation. Outstanding partnership.',
    initials: 'VS',
    project: 'Township Project, Ajmer Road',
  },
  {
    name: 'Anita Joshi',
    role: 'Home Builder',
    rating: 4,
    text: 'Very happy with cement and steel quality. The WhatsApp ordering system is very convenient. Prices are fair and delivery was prompt. Recommended.',
    initials: 'AJ',
    project: 'Individual House, Sanganer',
  },
]

// ---- FAQs ----
// Keys use `question` and `answer` to match FAQSection.js
export const faqs = [
  {
    question: 'What is the minimum order quantity for Bajri and Rodi?',
    answer: 'Minimum order is 1 truck load (approximately 8–10 tons). For smaller quantities, we can arrange half-truck loads at slightly higher per-ton pricing. Contact us on WhatsApp for custom requirements.',
  },
  {
    question: 'Do you deliver outside Jaipur?',
    answer: 'Yes, we deliver across Rajasthan including Ajmer, Jodhpur, Kota, Udaipur, Bikaner, and other major cities. Delivery charges vary by distance. Contact us for outstation delivery quotes.',
  },
  {
    question: 'How can I place a bulk order?',
    answer: 'For bulk orders, call us directly, WhatsApp us, or fill the inquiry form on our website. Our team will provide a customized quote with best pricing and delivery schedule.',
  },
  {
    question: 'Are your products ISI certified and genuine?',
    answer: 'Yes, all products are 100% genuine and ISI certified. We are authorized dealers for UltraTech, ACC, Asian Paints, TATA Tiscon, and other major brands. We provide proper bills and documentation.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept cash, bank transfer (NEFT/RTGS/IMPS), UPI (PhonePe, GPay, Paytm), and cheque payments. For large orders, we also offer credit terms to established contractors.',
  },
  {
    question: 'How long does delivery take in Jaipur?',
    answer: 'For Jaipur city deliveries, we offer same-day delivery for orders placed before 12 PM. For bulk material (bajri, rodi), delivery is typically within 4–6 hours of order confirmation.',
  },
  {
    question: 'Do you provide truck on rent service?',
    answer: 'Yes, we provide Tata trucks on rent for construction material transportation. Available for daily, weekly, and monthly hire. Contact us for truck rental rates and availability.',
  },
  {
    question: 'Can I visit your warehouse to check material quality?',
    answer: 'Absolutely! Our warehouse is in Jaipur and you are welcome to visit and inspect materials before ordering. Our team will guide you through our product range.',
  },
]
