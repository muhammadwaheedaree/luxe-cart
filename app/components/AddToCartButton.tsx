'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Product } from '../data/products'
import { ShoppingCart } from 'lucide-react'
import { useCart } from '@/app/context/CartContext'

export default function AddToCartButton({ product }: { product: Product }) {
  const [isAdding, setIsAdding] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const router = useRouter()
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    setIsAdding(true)
    addToCart(product, quantity)
    setIsAdding(false)
    router.push('/cart')
  }

  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center">
        <button 
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
          className="bg-purple-600 text-white px-3 py-2 rounded-l-md hover:bg-purple-700 transition-colors"
        >
          -
        </button>
        <input 
          type="number" 
          value={quantity} 
          onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
          className="w-16 text-center bg-gray-700 text-white border-t border-b border-purple-600 py-2"
        />
        <button 
          onClick={() => setQuantity(quantity + 1)}
          className="bg-purple-600 text-white px-3 py-2 rounded-r-md hover:bg-purple-700 transition-colors"
        >
          +
        </button>
      </div>
      <button
        onClick={handleAddToCart}
        disabled={isAdding}
        className={`flex items-center justify-center bg-purple-600 text-white px-6 py-3 rounded-md text-lg font-semibold ${
          isAdding ? 'opacity-50 cursor-not-allowed' : 'hover:bg-purple-700'
        } transition-colors`}
      >
        {isAdding ? 'Adding...' : 'Add to Cart'}
        <ShoppingCart className="ml-2 h-5 w-5" />
      </button>
    </div>
  )
}

