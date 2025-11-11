import React from 'react'
import { Link } from 'react-router-dom'
import { products } from '../data/productsList'
import { ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/outline'

function Home() {
  // Get featured products (first 4 unique products)
  const featuredProducts = products
    .filter((product, index, self) => 
      index === self.findIndex(p => p.id === product.id)
    )
    .slice(0, 4)

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FFF8E7] via-white to-[#FFF8E7]">
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
        
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-5xl font-serif font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
              <span style={{ background: 'linear-gradient(to right, #B8941F, #D4AF37, #A0821A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                GoldenTouch
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl">
              Discover timeless elegance with our exquisite collection of handcrafted jewelry.
              Each piece tells a story of beauty, sophistication, and unparalleled quality.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/products?category=all"
                className="group rounded-lg px-6 py-3 text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
                style={{ background: 'linear-gradient(to right, #D4AF37, #B8941F)', boxShadow: '0 10px 15px -3px rgba(212, 175, 55, 0.3), 0 4px 6px -2px rgba(212, 175, 55, 0.2)' }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(212, 175, 55, 0.4), 0 10px 10px -5px rgba(212, 175, 55, 0.2)'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(212, 175, 55, 0.3), 0 4px 6px -2px rgba(212, 175, 55, 0.2)'}
              >
                Shop Collection
                <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/products?category=all"
                className="text-base font-semibold leading-6 text-gray-900 hover:text-[#B8941F] transition-colors duration-200"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full" style={{ backgroundColor: '#FFF8E7' }}>
                <SparklesIcon className="h-8 w-8" style={{ color: '#D4AF37' }} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Handcrafted Excellence</h3>
              <p className="mt-2 text-sm text-gray-600">
                Each piece is meticulously crafted by skilled artisans with attention to detail.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full" style={{ backgroundColor: '#FFF8E7' }}>
                <svg className="h-8 w-8" style={{ color: '#D4AF37' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Premium Quality</h3>
              <p className="mt-2 text-sm text-gray-600">
                Made from the finest materials to ensure lasting beauty and durability.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full" style={{ backgroundColor: '#FFF8E7' }}>
                <svg className="h-8 w-8" style={{ color: '#D4AF37' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Satisfaction Guaranteed</h3>
              <p className="mt-2 text-sm text-gray-600">
                We stand behind our products with a comprehensive satisfaction guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="bg-gradient-to-b from-white to-[#FFF8E7] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-serif font-bold tracking-tight text-gray-900 sm:text-4xl">
              Featured Collection
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Discover our handpicked selection of exquisite jewelry pieces.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                to="/products?category=all"
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

          <div className="mt-12 text-center">
            <Link
              to="/products?category=all"
              className="inline-flex items-center rounded-lg px-8 py-3 text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{ background: 'linear-gradient(to right, #D4AF37, #B8941F)', boxShadow: '0 10px 15px -3px rgba(212, 175, 55, 0.3), 0 4px 6px -2px rgba(212, 175, 55, 0.2)' }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(212, 175, 55, 0.4), 0 10px 10px -5px rgba(212, 175, 55, 0.2)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(212, 175, 55, 0.3), 0 4px 6px -2px rgba(212, 175, 55, 0.2)'}
            >
              View All Products
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8" style={{ background: 'linear-gradient(to right, #B8941F, #D4AF37, #A0821A)' }}>
        <div className="absolute inset-0 -z-10 opacity-20" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-serif font-bold tracking-tight text-white sm:text-4xl">
            Ready to Find Your Perfect Piece?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white opacity-90">
            Explore our complete collection and find the jewelry that speaks to your unique style.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/products?category=all"
              className="rounded-lg bg-white px-6 py-3 text-base font-semibold shadow-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105"
              style={{ color: '#D4AF37' }}
            >
              Start Shopping
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
