import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/data/products'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <Link href={`/products/${product.id}`}>
        <div className="relative h-48 sm:h-64">
          <Image 
            src={product.image} 
            alt={product.name} 
            layout="fill" 
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-110"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2 text-purple-300 line-clamp-1">{product.name}</h3>
          <p className="text-gray-400 mb-2 text-sm line-clamp-2">{product.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-purple-400">${product.price.toFixed(2)}</span>
            <button className="bg-purple-600 text-white px-3 py-1 rounded-md text-sm hover:bg-purple-700 transition-colors">
              View Details
            </button>
          </div>
        </div>
      </Link>
    </div>
  )
}

