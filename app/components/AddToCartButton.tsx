'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Product } from '../data/products'
import { ShoppingCart } from 'lucide-react'

export default function AddToCartButton({ product }: { product: Product }) {
  const [isAdding, setIsAdding] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const router = useRouter()

  const addToCart = () => {
    setIsAdding(true)
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    const existingItem = cart.find((item: Product) => item.id === product.id)
    
    if (existingItem) {
      existingItem.quantity += quantity
    } else {
      cart.push({ ...product, quantity })
    }
    
    localStorage.setItem('cart', JSON.stringify(cart))
    setIsAdding(false)
    router.push('/cart')
  }

  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center">
        <button 
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
          className="bg-primary-600 text-text-primary px-3 py-2 rounded-l-md hover:bg-primary-700 transition-colors"
        >
          -
        </button>
        <input 
          type="number" 
          value={quantity} 
          onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
          className="w-16 text-center bg-surface text-text-primary border-t border-b border-primary-600 py-2"
        />
        <button 
          onClick={() => setQuantity(quantity + 1)}
          className="bg-primary-600 text-text-primary px-3 py-2 rounded-r-md hover:bg-primary-700 transition-colors"
        >
          +
        </button>
      </div>
      <button
        onClick={addToCart}
        disabled={isAdding}
        className={`flex items-center justify-center bg-primary-600 text-text-primary px-6 py-3 rounded-md text-lg font-semibold ${
          isAdding ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary-700'
        } transition-colors`}
      >
        {isAdding ? 'Adding...' : 'Add to Cart'}
        <ShoppingCart className="ml-2 h-5 w-5" />
      </button>
    </div>
  )
}

