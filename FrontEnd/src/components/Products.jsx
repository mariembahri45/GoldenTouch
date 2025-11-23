import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useLocation } from 'react-router-dom'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function Products() {
  const url = "http://localhost:6005/api/products"
  const [products, setProducts] = useState([])
  const location = useLocation()

  const params = new URLSearchParams(location.search)
  const category = params.get('category') || 'all'

  useEffect(() => {
    axios.get(url)
      .then(res => setProducts(res.data.products))
      .catch(err => console.log(err))
  }, [])
 
  const filteredProducts = category === 'all'
    ? products
    : products.filter(product => product.category === category);
  
  return (
    <div className="bg-gradient-to-b from-white to-[#FFF8E7] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <Link
              key={product._id}
              to={`/product/${product._id}`}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 transition-colors group-hover:text-[#B8941F]">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                  {product.description}
                </p>
                <p className="mt-4 text-lg font-bold" style={{ color: '#D4AF37' }}>
                  ${product.price}
                </p>
              </div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="rounded-full p-2 text-white shadow-lg" style={{ backgroundColor: '#D4AF37' }}>
                  <ArrowRightIcon className="h-5 w-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
