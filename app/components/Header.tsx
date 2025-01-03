'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ShoppingCart, Menu, X, Search } from 'lucide-react'
import { useCart } from '../context/CartContext'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { cartItems } = useCart()

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className="bg-gray-900 shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-purple-400 hover:text-purple-300 transition-colors">
            LuxeCart
          </Link>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-white hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-white hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Products
            </Link>
            <Link href="/about" className="text-white hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Contact
            </Link>
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-800 text-white rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <Link href="/cart" className="text-white hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors relative">
              <ShoppingCart className="h-6 w-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white hover:text-purple-400 focus:outline-none">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <Link href="/" className="block text-white hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Home
            </Link>
            <Link href="/products" className="block text-white hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Products
            </Link>
            <Link href="/about" className="block text-white hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              About
            </Link>
            <Link href="/contact" className="block text-white hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Contact
            </Link>
            <Link href="/cart" className="block text-white hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Cart ({cartItemCount})
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}

