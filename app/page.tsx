'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Star, Truck, RefreshCw, ShieldCheck, Award, Gift, Clock } from 'lucide-react'
import { getFeaturedProducts, products } from './data/products'
import ProductCard from './components/ProductCard'

export default function Home() {
  const featuredProducts = getFeaturedProducts()
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % featuredProducts.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [featuredProducts.length])

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section with Carousel */}
      <section className="relative h-screen">
        {featuredProducts.map((product, index) => (
          <div
            key={product.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={product.image}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="brightness-50"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-4">
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 text-white animate-fade-in">
                  {product.name}
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-300 animate-fade-in-delay">
                  {product.description}
                </p>
                <Link
                  href={`/products/${product.id}`}
                  className="inline-block bg-purple-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-purple-700 transition-colors animate-fade-in-delay"
                >
                  Shop Now
                  <ArrowRight className="inline-block ml-2" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Featured Products Section */}
      <section className="container mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-purple-300">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-800 py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-purple-300">Why Choose LuxeCart?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Truck className="w-12 h-12 mx-auto mb-4 text-purple-400" />
              <h3 className="text-xl font-semibold mb-2 text-purple-300">Free Shipping</h3>
              <p className="text-gray-400">Enjoy free shipping on all orders over $50</p>
            </div>
            <div className="text-center">
              <RefreshCw className="w-12 h-12 mx-auto mb-4 text-purple-400" />
              <h3 className="text-xl font-semibold mb-2 text-purple-300">Easy Returns</h3>
              <p className="text-gray-400">30-day return policy for a stress-free shopping</p>
            </div>
            <div className="text-center">
              <ShieldCheck className="w-12 h-12 mx-auto mb-4 text-purple-400" />
              <h3 className="text-xl font-semibold mb-2 text-purple-300">Secure Payments</h3>
              <p className="text-gray-400">Your payments are safe with our secure checkout</p>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="container mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-purple-300">New Arrivals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-800 py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-purple-300">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "David Wilson", comment: "LuxeCart has the best selection of premium products. Their customer service is top-notch!", image: "/images/customers/image1.png?height=100&width=100" },
              { name: "Jane Smith", comment: "I love the quality of products from LuxeCart. Fast shipping and easy returns make shopping here a breeze.", image: "/images/customers/image2.png?height=100&width=100" },
              { name: "Mike Johnson", comment: "The user experience on LuxeCart is fantastic. It's my go-to place for all things luxury.", image: "/images/customers/image3.png?height=100&width=100" }
            ].map((testimonial, i) => (
              <div key={i} className="bg-gray-900 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Image src={testimonial.image} alt={testimonial.name} width={50} height={50} className="rounded-full mr-4" />
                  <div>
                    <h4 className="font-semibold text-purple-300">{testimonial.name}</h4>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-purple-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-400">{testimonial.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center text-purple-300">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Award className="w-12 h-12 mx-auto mb-4 text-purple-400" />
            <h3 className="text-xl font-semibold mb-2 text-purple-300">Premium Quality</h3>
            <p className="text-gray-400">We offer only the highest quality products for our discerning customers.</p>
          </div>
          <div className="text-center">
            <Gift className="w-12 h-12 mx-auto mb-4 text-purple-400" />
            <h3 className="text-xl font-semibold mb-2 text-purple-300">Gift Services</h3>
            <p className="text-gray-400">Special gift wrapping and personalized messages available for all products.</p>
          </div>
          <div className="text-center">
            <Clock className="w-12 h-12 mx-auto mb-4 text-purple-400" />
            <h3 className="text-xl font-semibold mb-2 text-purple-300">24/7 Support</h3>
            <p className="text-gray-400">Our customer support team is always ready to assist you.</p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-purple-600 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-8">Subscribe to our newsletter for exclusive offers and the latest updates.</p>
          <form className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row">
              <input type="email" placeholder="Your email address" className="flex-grow px-4 py-2 mb-2 sm:mb-0 sm:rounded-l-md focus:outline-none bg-white text-gray-900" />
              <button type="submit" className="bg-gray-900 text-white px-6 py-2 rounded-md sm:rounded-l-none hover:bg-gray-800 transition-colors">Subscribe</button>
            </div>
          </form>
        </div>
      </section>

      {/* Luxury Showcase Section */}
      <section className="container mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center text-purple-300">Luxury Showcase</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image src="/images/products/fashion/luxury-watch.jpg?height=600&width=800" alt="Luxury Watch" layout="fill" objectFit="cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Exquisite Timepieces</h3>
                <p className="text-gray-300 mb-4">Discover our collection of luxury watches</p>
                <Link href="/products" className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">
                  Explore Collection
                </Link>
              </div>
            </div>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image src="/images/products/fashion/designer-handbag.jpg?height=600&width=800" alt="Designer Handbag" layout="fill" objectFit="cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Designer Handbags</h3>
                <p className="text-gray-300 mb-4">Elevate your style with our premium handbags</p>
                <Link href="/products" className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Luxury Brands Section */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-purple-300">Our Luxury Brands</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: "Rolex", logo: "/images/brands/rolex.png?height=80&width=160&text=Rolex" },
              { name: "Gucci", logo: "/images/brands/gucci.png?height=80&width=160&text=Gucci" },
              { name: "Louis Vuitton", logo: "/images/brands/louis.png?height=80&width=160&text=Louis+Vuitton" },
              { name: "Cartier", logo: "/images/brands/cartier.png?height=80&width=160&text=Cartier" },
              { name: "Hermès", logo: "/images/brands/hermes.png?height=80&width=160&text=Hermès" },
              { name: "Chanel", logo: "/images/brands/chenel.png?height=80&width=160&text=Chanel" },
            ].map((brand) => (
              <div key={brand.name} className="flex items-center justify-center">
                <Image src={brand.logo} alt={brand.name} width={160} height={80} className="opacity-70 hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* { Featured Collections Section} */}
      <section className="py-16 bg-gradient-to-r from-purple-900 to-indigo-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Featured Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Electronics', 'Fashion', 'Home'].map((category) => (
              <div key={category} className="relative overflow-hidden rounded-lg shadow-lg group">
                <Image
                  src={`/images/collections/${category.toLowerCase()}.jpg`}
                  alt={category}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link href={`/products?category=${category}`} className="bg-white text-purple-900 px-6 py-2 rounded-full font-semibold hover:bg-purple-100 transition-colors">
                    Shop Now
                  </Link>
                </div>
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">{category}</h3>
              </div>
            ))}
          </div>
        </div>
      </section> 
    </div>
  )
}

