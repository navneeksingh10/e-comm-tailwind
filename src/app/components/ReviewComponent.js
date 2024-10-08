'use client'

import { useRouter } from 'next/navigation'
import { useCart } from '../components/CartContext'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ReviewComponent({ id }) {
  const router = useRouter()
  const {cart, addToCart } = useCart()
  const [product, setProduct] = useState(null)
  const [isAdded, setIsAdded] = useState(false)


  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product:', error))
  }, [id])

  useEffect(() => {
    if (product && cart.some(item => item.id === product.id)) {
      setIsAdded(true)
    }
  }, [product, cart])

  const handleAddToBag = () => {
    if (product) {
      addToCart(product)
      setIsAdded(true)
    }

    }

  const handleGoToCart = () => {
    router.push('/cart')
  }
  
  if (!product) return <div>Loading...</div>

  return (
    <div className="bg-white">
      <div className="pt-6">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <li>
              <div className="flex items-center">
                <a href="/" className="mr-2 text-sm font-medium text-gray-900">Products</a>
                <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true" className="h-5 w-4 text-gray-300">
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
            <li className="text-sm">
              <a href="#" aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">{product.title}</a>
            </li>
          </ol>
        </nav>
        {/* Product image */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <Image src={product.image} alt={product.title} width={300} height={300} priority={true} className="h-full w-full object-cover object-center" />
            {/* <img src={product.image} alt={product.title}  className="h-full w-full object-cover object-center" /> */}

          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.title}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">${product.price}</p>

            {/* Add to bag button */}
            <form className="mt-10">
              <button
                type="button"
                className={`mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 
                  ${isAdded ? 'opacity-70 cursor-not-allowed' : ''}`}
            
                onClick={handleAddToBag}
                disabled={isAdded}
              >
                {isAdded ? 'Added to Cart' : 'Add to Cart'}
              </button>
            </form>
            

            <form className="mt-5">
              <button
                type="button"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={handleGoToCart}
              >
                Go To Cart
              </button>
            </form>
          </div>
          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>
              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>
            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Category</h3>
              <div className="mt-4">
                <p className="text-sm text-gray-600">{product.category}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}