'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    console.log('Subscribed with email:', email)
    setIsSubmitted(true)
    setTimeout(() => setIsOpen(false), 3000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full mx-4 relative">
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Subscribe to Our Newsletter</h2>
        {isSubmitted ? (
          <p className="text-green-600">Thank you for subscribing!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <p className="mb-4 text-gray-600">Stay updated with our latest offers and products.</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
              required
            />
            <button
              type="submit"
              className="w-full bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

