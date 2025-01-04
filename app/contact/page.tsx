'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Globe, ChevronDown, ChevronUp } from 'lucide-react'

interface FAQItem {
  question: string;
  answer: string;
}

export default function ContactPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqs: FAQItem[] = [
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for all our products. If you're not satisfied with your purchase, you can return it for a full refund within 30 days of delivery."
    },
    {
      question: "How long does shipping take?",
      answer: "Shipping times vary depending on your location. Typically, orders are processed within 1-2 business days, and shipping takes 3-5 business days for domestic orders and 7-14 business days for international orders."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to most countries worldwide. Shipping costs and delivery times may vary depending on the destination."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order is shipped, you will receive a confirmation email with a tracking number. You can use this number to track your package on our website or the carrier's website."
    }
  ]

  const toggleFAQ = (index: number) => {
    if (openFAQ === index) {
      setOpenFAQ(null)
    } else {
      setOpenFAQ(index)
    }
  }

  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-primary-400">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-primary-300">Get in Touch</h2>
          <p className="text-text-secondary mb-6">
            We're here to help and answer any question you might have. We look forward to hearing from you!
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-accent-400 mr-2" />
              <span className="text-text-secondary">support@luxecart.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-accent-400 mr-2" />
              <span className="text-text-secondary">+92 (323) 829-3672</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-6 h-6 text-accent-400 mr-2" />
              <span className="text-text-secondary">123 LuxeCart Street, Luxury City, 12345</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-6 h-6 text-accent-400 mr-2" />
              <span className="text-text-secondary">Mon - Fri: 9:00 AM - 5:00 PM</span>
            </div>
            <div className="flex items-center">
              <Globe className="w-6 h-6 text-accent-400 mr-2" />
              <span className="text-text-secondary">www.luxecart.com</span>
            </div>
          </div>
        </div>
        
        <div>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-1">Name</label>
              <input type="text" id="name" name="name" className="w-full px-3 py-2 bg-surface border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600 text-text-primary" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1">Email</label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 bg-surface border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600 text-text-primary" />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-text-secondary mb-1">Subject</label>
              <input type="text" id="subject" name="subject" className="w-full px-3 py-2 bg-surface border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600 text-text-primary" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-1">Message</label>
              <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 bg-surface border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600 text-text-primary"></textarea>
            </div>
            <button type="submit" className="w-full bg-primary-600 text-text-primary px-4 py-2 rounded-md hover:bg-primary-700 transition-colors">Send Message</button>
          </form>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center text-primary-300">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-surface rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-primary-300">{faq.question}</h3>
                {openFAQ === index ? (
                  <ChevronUp className="w-5 h-5 text-accent-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 textaccent-400" />
                )}
              </button>
              {openFAQ === index && (
                <div className="px-6 py-4 bg-background">
                  <p className="text-text-secondary">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-8 text-center text-primary-300">Visit Our Store</h2>
        <div className="bg-surface rounded-lg shadow-md p-6">
          <div className="aspect-w-16 aspect-h-9 mb-6">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14482.471993038563!2d66.4959539!3d25.1929837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1696241267919!5m2!1sen!2s" 
              width="600" 
              height="450" 
              style={{border:0}} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full rounded-md"
            ></iframe>
          </div>
          <p className="text-text-secondary text-center">Visit our flagship store located in the heart of Luxury City. Experience our products firsthand and get expert advice from our staff.</p>
        </div>
      </div>

      {/* Live Chat Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-8 text-center text-primary-300">Need Immediate Assistance?</h2>
        <div className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-lg shadow-md p-6 text-center">
          <h3 className="text-xl font-semibold mb-4 text-white">Start a Live Chat</h3>
          <p className="text-gray-300 mb-6">Our customer support team is available 24/7 to assist you with any questions or concerns.</p>
          <a
            href="https://wa.me/923180297567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-purple-900 px-6 py-3 rounded-full font-semibold hover:bg-purple-100 transition-colors"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}

