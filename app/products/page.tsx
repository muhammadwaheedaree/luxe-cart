"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { products, getProductsByCategory } from "../data/products";

export default function ProductsPage() {
  const [displayedProducts, setDisplayedProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    if (selectedCategory) {
      setDisplayedProducts(getProductsByCategory(selectedCategory));
    } else {
      setDisplayedProducts(products);
    }
  }, [selectedCategory]);

  const categories = ["All", "Electronics", "Fashion", "Home", "Kitchen"];

  return (
    <div className="container mx-auto px-6 py-16">
      {/* Product of the Day Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary-400">
          Product of the Day
        </h2>
        <div className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-lg shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <Image
                src="/images/products/electronics/sleek-smartwatch.jpg"
                alt="Product of the Day"
                width={600}
                height={400}
                className="h-full w-full object-cover md:w-48"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-300 font-semibold">
                Special Offer
              </div>
              <a
                href="#"
                className="block mt-1 text-lg leading-tight font-medium text-white hover:underline"
              >
                Luxury Smartwatch Pro
              </a>
              <p className="mt-2 text-gray-300">
                Experience the pinnacle of technology and style with our Luxury
                Smartwatch Pro. Limited time offer!
              </p>
              <div className="mt-4">
                <span className="text-3xl font-bold text-white">$299.99</span>
                <span className="ml-2 text-lg text-gray-400 line-through">
                  $399.99
                </span>
              </div>
              <Link
                href="/products/1"
                className="inline-block mt-4 bg-white text-purple-900 px-4 py-2 rounded-full font-semibold hover:bg-purple-100 transition-colors"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </section>
      <h1 className="text-4xl font-bold mb-8 text-center text-primary-400">
        Our Products
      </h1>

      <div className="flex justify-center mb-12">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() =>
                setSelectedCategory(category === "All" ? null : category)
              }
              className={`px-4 py-2 text-sm font-medium ${
                selectedCategory === category ||
                (category === "All" && !selectedCategory)
                  ? "bg-primary-600 text-text-primary"
                  : "bg-surface text-text-secondary hover:bg-primary-700 hover:text-text-primary"
              } border border-gray-600 ${
                category === categories[0] ? "rounded-l-lg" : ""
              } ${
                category === categories[categories.length - 1]
                  ? "rounded-r-lg"
                  : ""
              } transition-colors duration-300`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {displayedProducts.map((product) => (
          <motion.div
            key={product.id}
            className="bg-surface rounded-lg shadow-md overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-primary-300">
                {product.name}
              </h2>
              <p className="text-text-secondary mb-4 line-clamp-2">
                {product.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-accent-400">
                  ${product.price.toFixed(2)}
                </span>
                <Link
                  href={`/products/${product.id}`}
                  className="bg-primary-600 text-text-primary px-4 py-2 rounded-md hover:bg-primary-700 transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
