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
    name: "Leather Messenger Bag",
    category: "Fashion",
    price: 89.99,
    description: "Carry your essentials in style with this premium leather bag.",
    additionalInfo: "Genuine leather, multiple compartments, adjustable strap",
    image: "/images/products/fashion/leather-messenger-bag.jpg",
  },
  {
    id: "5",
    name: "Designer Sunglasses",
    category: "Fashion",
    price: 159.99,
    description: "Protect your eyes and look fabulous with these trendy sunglasses.",
    additionalInfo: "UV protection, polarized lenses, durable frame",
    image: "/images/products/fashion/designer-sunglasses.jpg",
  },
  {
    id: "6",
    name: "Luxury Watch",
    category: "Fashion",
    price: 299.99,
    description: "Make a statement with this elegant timepiece.",
    additionalInfo: "Swiss movement, sapphire crystal, genuine leather strap",
    image: "/images/products/fashion/luxury-watch.jpg",
  },
  {
    id: "7",
    name: "Ergonomic Office Chair",
    category: "Home",
    price: 199.99,
    description: "Work in comfort with this adjustable and supportive chair.",
    additionalInfo: "Lumbar support, breathable mesh, 360-degree swivel",
    image: "/images/products/home/ergonomic-office-chair.jpg",
  },
  {
    id: "8",
    name: "Smart LED Bulb Set",
    category: "Home",
    price: 79.99,
    description: "Transform your home lighting with these app-controlled LED bulbs.",
    additionalInfo: "16 million colors, voice control compatible, energy-efficient",
    image: "/images/products/home/smart-led-bulb-set.jpg",
  },
  {
    id: "9",
    name: "Luxury Throw Blanket",
    category: "Home",
    price: 69.99,
    description: "Add warmth and style to your living space with this cozy blanket.",
    additionalInfo: "100% premium cotton, machine washable, multiple colors available",
    image: "/images/products/home/luxury-throw-blanket.jpg",
  },
  {
    id: "10",
    name: "Portable Blender",
    category: "Kitchen",
    price: 49.99,
    description: "Make smoothies on-the-go with this compact and powerful blender.",
    additionalInfo: "Rechargeable battery, BPA-free materials, easy to clean",
    image: "/images/products/kitchen/portable-blender.jpg",
  },
  {
    id: "11",
    name: "Chef's Knife Set",
    category: "Kitchen",
    price: 129.99,
    description: "Elevate your culinary skills with this professional-grade knife set.",
    additionalInfo: "High-carbon stainless steel, ergonomic handles, includes knife block",
    image: "/images/products/kitchen/chefs-knife-set.jpg",
  },
  {
    id: "12",
    name: "Smart Coffee Maker",
    category: "Kitchen",
    price: 159.99,
    description: "Brew the perfect cup of coffee with this app-controlled machine.",
    additionalInfo: "Customizable brewing options, scheduled brewing, keep-warm function",
    image: "/images/products/kitchen/smart-coffee-maker.jpg",
  },
];

export const getProductsByCategory = (category: string) =>
  products.filter((product) => product.category === category);

export const getFeaturedProducts = () => {
  const categories = ["Electronics", "Fashion", "Home"];
  return categories.map(
    (category) => getProductsByCategory(category)[0]
  );
};

export const getProductById = (id: string) =>
  products.find((product) => product.id === id);

