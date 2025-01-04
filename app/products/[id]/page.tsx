'use client'

import { useState, } from 'react'
import Image from 'next/image'
import { getProductById, getRelatedProducts } from '../../data/products'
import AddToCartButton from '../../components/AddToCartButton'
import ProductCard from '../../components/ProductCard'
import { Star, Truck, RefreshCw, ShieldCheck } from 'lucide-react'

interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
  date: string;
  image: string;
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id)
  const [reviews, setReviews] = useState<Review[]>([
    { id: 1, author: 'Noah Blake', rating: 5, comment: 'Excellent product! Highly recommended.', date: '2023-05-15', image: '/images/reviews/image1.png?height=50&width=50' },
    { id: 2, author: 'Olivia Bennett', rating: 4, comment: 'Good quality, but a bit pricey.', date: '2023-05-10', image: '/images/reviews/image2.png?height=50&width=50' },
    { id: 3, author: 'James Walker', rating: 5, comment: 'Exceeded my expectations. Will buy again!', date: '2023-05-05', image: '/images/reviews/image3.png?height=50&width=50' },
  ])
  const [newReview, setNewReview] = useState({ author: '', rating: 5, comment: '' })

  if (!product) {
    return <div className="container mx-auto px-4 sm:px-6 py-16 text-center text-purple-400">Product not found</div>
  }

  const relatedProducts = getRelatedProducts(product, 5)

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const reviewToAdd: Review = {
      id: reviews.length + 1,
      ...newReview,
      date: new Date().toISOString().split('T')[0],
      image: '/images/reviews/default.png?height=50&width=50', // Default profile image
    }
    setReviews([reviewToAdd, ...reviews])
    setNewReview({ author: '', rating: 5, comment: '' })
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 py-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Image src={product.image} alt={product.name} width={500} height={500} className="w-full h-auto rounded-lg shadow-md" />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4 text-purple-300">{product.name}</h1>
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-5 h-5 ${i < 4 ? 'text-purple-400 fill-current' : 'text-gray-600'}`} />
            ))}
            <span className="ml-2 text-gray-400">(4.0)</span>
          </div>
          <p className="text-3xl font-bold text-purple-400 mb-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-300 mb-6">{product.description}</p>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2 text-purple-300">Additional Information</h2>
            <p className="text-gray-300">{product.additionalInfo}</p>
          </div>
          <AddToCartButton product={product} />
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8 text-center text-purple-300">Product Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Truck className="w-12 h-12 mx-auto mb-4 text-purple-400" />
            <h3 className="text-xl font-semibold mb-2 text-purple-300">Free Shipping</h3>
            <p className="text-gray-300">Free shipping on orders over $50</p>
          </div>
          <div className="text-center">
            <RefreshCw className="w-12 h-12 mx-auto mb-4 text-purple-400" />
            <h3 className="text-xl font-semibold mb-2 text-purple-300">Easy Returns</h3>
            <p className="text-gray-300">30-day money-back guarantee</p>
          </div>
          <div className="text-center">
            <ShieldCheck className="w-12 h-12 mx-auto mb-4 text-purple-400" />
            <h3 className="text-xl font-semibold mb-2 text-purple-300">Secure Payments</h3>
            <p className="text-gray-300">Your payments are safe with us</p>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8 text-purple-300">Product Reviews</h2>
        <div className="grid gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <Image src={review.image} alt={review.author} width={50} height={50} className="rounded-full mr-4" />
                <div>
                  <h3 className="font-semibold text-purple-300">{review.author}</h3>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'text-purple-400 fill-current' : 'text-gray-600'}`} />
                    ))}
                    <span className="ml-2 text-gray-400 text-sm">{review.date}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-300">{review.comment}</p>
            </div>
          ))}
        </div>

        {/* Review Submission Form */}
        <form onSubmit={handleReviewSubmit} className="mt-8 bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4 text-purple-300">Write a Review</h3>
          <div className="mb-4">
            <label htmlFor="author" className="block text-gray-300 mb-2">Name</label>
            <input
              type="text"
              id="author"
              value={newReview.author}
              onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
              className="w-full bg-gray-700 text-white border border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="rating" className="block text-gray-300 mb-2">Rating</label>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setNewReview({ ...newReview, rating: star })}
                  className="focus:outline-none"
                >
                  <Star
                    className={`w-6 h-6 ${
                      star <= newReview.rating ? 'text-purple-400 fill-current' : 'text-gray-600'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="comment" className="block text-gray-300 mb-2">Comment</label>
            <textarea
              id="comment"
              value={newReview.comment}
              onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
              className="w-full bg-gray-700 text-white border border-gray-600 rounded-md px-3 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            ></textarea>
          </div>
          <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">
            Submit Review
          </button>
        </form>
      </div>

      {/* Related Products Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8 text-purple-300">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {relatedProducts.map((relatedProduct) => (
            <ProductCard key={relatedProduct.id} product={relatedProduct} />
          ))}
        </div>
      </div>
  </div>
  )
}

