'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ShoppingCart, Menu, X, Search } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-surface shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary-400 hover:text-primary-300 transition-colors">
            LuxeCart
          </Link>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-text-primary hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-text-primary hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Products
            </Link>
            <Link href="/about" className="text-text-primary hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-text-primary hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Contact
            </Link>
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-background text-text-primary rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-primary-400"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-text-secondary" />
            </div>
            <Link href="/cart" className="text-text-primary hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              <ShoppingCart className="h-6 w-6" />
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-text-primary hover:text-primary-400 focus:outline-none">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <Link href="/" className="block text-text-primary hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Home
            </Link>
            <Link href="/products" className="block text-text-primary hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Products
            </Link>
            <Link href="/about" className="block text-text-primary hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              About
            </Link>
            <Link href="/contact" className="block text-text-primary hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Contact
            </Link>
            <Link href="/cart" className="block text-text-primary hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Cart
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}

