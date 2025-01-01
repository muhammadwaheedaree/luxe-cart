'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Trash2, ShoppingBag } from 'lucide-react'
import { Product } from '../data/products'

interface CartItem extends Product {
  quantity: number
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  useEffect(() => {
    const storedCart = localStorage.getItem('cart')
    if (storedCart) {
      setCartItems(JSON.parse(storedCart))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems))
  }, [cartItems])

  const updateQuantity = (id: string, newQuantity: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const removeItem = (id: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax = subtotal * 0.1 // Assuming 10% tax
  const total = subtotal + tax

  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-primary-400">Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div className="text-center">
          <ShoppingBag className="mx-auto h-24 w-24 text-primary-400 mb-4" />
          <p className="text-xl text-text-secondary mb-4">Your cart is empty.</p>
          <Link href="/products" className="bg-primary-600 text-text-primary px-6 py-3 rounded-md text-lg font-semibold hover:bg-primary-700 transition-colors">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {cartItems.map(item => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex items-center mb-6 pb-6 border-b border-gray-700"
              >
                <Image src={item.image} alt={item.name} width={100} height={100} className="rounded-md" />
                <div className="ml-4 flex-grow">
                  <h2 className="text-lg font-semibold text-primary-300">{item.name}</h2>
                  <p className="text-text-secondary">${item.price.toFixed(2)}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      className="text-text-secondary focus:outline-none focus:text-primary-400"
                    >
                      <span className="text-2xl">-</span>
                    </button>
                    <span className="text-text-primary mx-2">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="text-text-secondary focus:outline-none focus:text-primary-400"
                    >
                      <span className="text-2xl">+</span>
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 focus:outline-none focus:text-red-600"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </motion.div>
            ))}
          </div>
          <div className="md:col-span-1">
            <div className="bg-surface rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 text-primary-400">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span className="text-text-secondary">Subtotal</span>
                <span className="text-text-primary">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-text-secondary">Tax</span>
                <span className="text-text-primary">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-text-secondary">Shipping</span>
                <span className="text-text-primary">Free</span>
              </div>
              <div className="border-t border-gray-700 pt-2 mt-2">
                <div className="flex justify-between">
                  <span className="font-semibold text-primary-300">Total</span>
                  <span className="font-semibold text-primary-400">${total.toFixed(2)}</span>
                </div>
              </div>
              <button className="w-full bg-primary-600 text-text-primary px-4 py-2 rounded-md mt-4 hover:bg-primary-700 transition-colors">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

