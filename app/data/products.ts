export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  additionalInfo: string;
  image: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Sleek Smartwatch",
    category: "Electronics",
    price: 199.99,
    description: "Stay connected with this stylish and feature-packed smartwatch.",
    additionalInfo: "Water-resistant, 3-day battery life, heart rate monitor",
    image: "/images/products/electronics/sleek-smartwatch.jpg",
  },
  {
    id: "2",
    name: "Wireless Earbuds",
    category: "Electronics",
    price: 129.99,
    description: "Immerse yourself in crystal-clear audio with these comfortable earbuds.",
    additionalInfo: "Noise-cancelling, 24-hour battery life, touch controls",
    image: "/images/products/electronics/wireless-earbuds.jpg",
  },
  {
    id: "3",
    name: "4K Action Camera",
    category: "Electronics",
    price: 249.99,
    description: "Capture your adventures in stunning 4K resolution.",
    additionalInfo: "Waterproof, image stabilization, Wi-Fi connectivity",
    image: "/images/products/electronics/4k-action-camera.jpg",
  },
  {
    id: "4",
    name: "Smart Home Security Camera",
    category: "Electronics",
    price: 129.99,
    description: "Keep your home safe with this advanced security camera.",
    additionalInfo: "1080p HD, night vision, two-way audio, mobile app control",
    image: "/images/products/electronics/smart-home-security-camera.jpg",
  },
  {
    id: "5",
    name: "Leather Messenger Bag",
    category: "Fashion",
    price: 89.99,
    description: "Carry your essentials in style with this premium leather bag.",
    additionalInfo: "Genuine leather, multiple compartments, adjustable strap",
    image: "/images/products/fashion/leather-messenger-bag.jpg",
  },
  {
    id: "6",
    name: "Designer Sunglasses",
    category: "Fashion",
    price: 159.99,
    description: "Protect your eyes and look fabulous with these trendy sunglasses.",
    additionalInfo: "UV protection, polarized lenses, durable frame",
    image: "/images/products/fashion/designer-sunglasses.jpg",
  },
  {
    id: "7",
    name: "Luxury Watch",
    category: "Fashion",
    price: 299.99,
    description: "Make a statement with this elegant timepiece.",
    additionalInfo: "Swiss movement, sapphire crystal, genuine leather strap",
    image: "/images/products/fashion/luxury-watch.jpg",
  },
  {
    id: "8",
    name: "Designer Handbag",
    category: "Fashion",
    price: 199.99,
    description: "Elevate your style with this elegant designer handbag.",
    additionalInfo: "Genuine leather, multiple compartments, detachable strap",
    image: "/images/products/fashion/designer-handbag.jpg",
  },
  {
    id: "9",
    name: "Ergonomic Office Chair",
    category: "Home",
    price: 199.99,
    description: "Work in comfort with this adjustable and supportive chair.",
    additionalInfo: "Lumbar support, breathable mesh, 360-degree swivel",
    image: "/images/products/home/ergonomic-office-chair.jpg",
  },
  {
    id: "10",
    name: "Smart LED Bulb Set",
    category: "Home",
    price: 79.99,
    description: "Transform your home lighting with these app-controlled LED bulbs.",
    additionalInfo: "16 million colors, voice control compatible, energy-efficient",
    image: "/images/products/home/smart-led-bulb-set.jpg",
  },
  {
    id: "11",
    name: "Luxury Throw Blanket",
    category: "Home",
    price: 69.99,
    description: "Add warmth and style to your living space with this cozy blanket.",
    additionalInfo: "100% premium cotton, machine washable, multiple colors available",
    image: "/images/products/home/luxury-throw-blanket.jpg",
  },
  {
    id: "12",
    name: "Smart Thermostat",
    category: "Home",
    price: 149.99,
    description: "Control your home's temperature with this intelligent thermostat.",
    additionalInfo: "Wi-Fi enabled, energy-saving, voice control compatible",
    image: "/images/products/home/smart-thermostat.jpg",
  },
  {
    id: "13",
    name: "Portable Blender",
    category: "Kitchen",
    price: 49.99,
    description: "Make smoothies on-the-go with this compact and powerful blender.",
    additionalInfo: "Rechargeable battery, BPA-free materials, easy to clean",
    image: "/images/products/kitchen/portable-blender.jpg",
  },
  {
    id: "14",
    name: "Chef's Knife Set",
    category: "Kitchen",
    price: 129.99,
    description: "Elevate your culinary skills with this professional-grade knife set.",
    additionalInfo: "High-carbon stainless steel, ergonomic handles, includes knife block",
    image: "/images/products/kitchen/chefs-knife-set.jpg",
  },
  {
    id: "15",
    name: "Smart Coffee Maker",
    category: "Kitchen",
    price: 159.99,
    description: "Brew the perfect cup of coffee with this app-controlled machine.",
    additionalInfo: "Customizable brewing options, scheduled brewing, keep-warm function",
    image: "/images/products/kitchen/smart-coffee-maker.png",
  },
  {
    id: "16",
    name: "Air Fryer",
    category: "Kitchen",
    price: 89.99,
    description: "Enjoy healthier fried foods with this versatile air fryer.",
    additionalInfo: "6-quart capacity, digital controls, dishwasher-safe parts",
    image: "/images/products/kitchen/air-fryer.png",
  },
];

export const getProductsByCategory = (category: string) =>
  products.filter((product) => product.category === category);

export const getFeaturedProducts = () => {
  const categories = ["Electronics", "Fashion", "Home", "Kitchen"];
  return categories.map(
    (category) => getProductsByCategory(category)[0]
  );
};

export const getProductById = (id: string) =>
  products.find((product) => product.id === id);

export const getRelatedProducts = (product: Product, limit: number = 4) =>
  products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit);

