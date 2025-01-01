import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface">
      <div className="container mx-auto px-6 py-12">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-400">About LuxeCart</h3>
            <p className="text-text-secondary">
              Discover premium products and unparalleled shopping experience with LuxeCart.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-text-secondary hover:text-primary-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-text-secondary hover:text-primary-400">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-text-secondary hover:text-primary-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-text-secondary hover:text-primary-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-400">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-text-secondary hover:text-primary-400">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-text-secondary hover:text-primary-400">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-text-secondary hover:text-primary-400">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-text-secondary hover:text-primary-400">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-400">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-text-secondary hover:text-primary-400">
                <Facebook />
              </a>
              <a href="#" className="text-text-secondary hover:text-primary-400">
                <Twitter />
              </a>
              <a href="#" className="text-text-secondary hover:text-primary-400">
                <Instagram />
              </a>
              <a href="#" className="text-text-secondary hover:text-primary-400">
                <Linkedin />
              </a>
            </div>

            {/* Newsletter Form */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2 text-text-primary">
                Subscribe to our newsletter
              </h4>
              <form className="flex flex-wrap items-center gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-grow px-4 py-2 rounded-md bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-400"
                />
                <button
                  type="submit"
                  className="bg-primary-600 text-text-primary px-4 py-2 rounded-md hover:bg-primary-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-text-secondary text-sm">© 2023 LuxeCart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
