'use client'

import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'

const categories = [
  { name: 'All', href: '/products?category=all', category: 'all' },
  { name: 'Bracelets', href: '/products?category=bracelets', category: 'bracelets' },
  { name: 'Earrings', href: '/products?category=earrings', category: 'earrings' },
  { name: 'Necklaces', href: '/products?category=necklaces', category: 'necklaces' },
  { name: 'Rings', href: '/products?category=rings', category: 'rings' },
]

export default function NavigationBar() {
  const navigate = useNavigate()
  const location = useLocation()
  const [activeCategory, setActiveCategory] = useState('all')

  // Extract category from URL
  useEffect(() => {
    if (location.pathname === '/products') {
      const params = new URLSearchParams(location.search)
      const category = params.get('category') || 'all'
      setActiveCategory(category)
    } else {
      setActiveCategory('all')
    }
  }, [location.search, location.pathname])

  const handleCategoryClick = (category) => {
    setActiveCategory(category)
    navigate(`/products?category=${category}`)
  }

  return (
    <div className="bg-gradient-to-b from-[#FFF8E7] to-white">
      <header className="relative">
        {/* Elegant promo banner */}
        <div style={{ background: 'linear-gradient(to right, #B8941F, #D4AF37, #B8941F)' }}>
          <p className="flex h-10 items-center justify-center px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
            ✨ Free delivery on orders over $100 ✨
          </p>
        </div>

        {/* Navigation */}
        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-[#F5E6D3]">
            <div className="flex h-20 items-center justify-between">
              {/* Logo */}
              <div className="flex items-center">
                <Link to="/" className="flex items-center space-x-3">
                  <img
                    alt="GoldenTouch Logo"
                    src="/images/logo.png"
                    className="h-20 w-auto transition-transform duration-300 hover:scale-105"
                  />
                  <span className="hidden sm:block text-2xl font-serif font-bold" style={{ background: 'linear-gradient(to right, #B8941F, #A0821A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    GoldenTouch
                  </span>
                </Link>
              </div>

              {/* Center: Category Filters */}
              <div className="hidden lg:flex lg:items-center lg:space-x-1">
                <Link
                  to="/"
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#B8941F] transition-colors duration-200 rounded-md hover:bg-[#FFF8E7]"
                >
                  Home
                </Link>
                {categories.map((item) => (
                  <button
                    key={item.category}
                    onClick={() => handleCategoryClick(item.category)}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                      activeCategory === item.category
                        ? 'text-white shadow-md'
                        : 'text-gray-700 hover:text-[#B8941F] hover:bg-[#FFF8E7]'
                    }`}
                    style={activeCategory === item.category ? { background: 'linear-gradient(to right, #D4AF37, #B8941F)' } : {}}
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              {/* Right side: Search, Account, Cart */}
              <div className="flex items-center space-x-4">
                {/* Mobile menu button for categories - will show on small screens */}
                <div className="lg:hidden">
                  <Link
                    to="/products"
                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#B8941F]"
                  >
                    Products
                  </Link>
                </div>

                {/* Search */}
                <button className="p-2 text-gray-600 hover:text-[#B8941F] transition-colors duration-200 rounded-full hover:bg-[#FFF8E7]">
                  <span className="sr-only">Search</span>
                  <MagnifyingGlassIcon className="h-6 w-6" />
                </button>

                {/* Account */}
                <div className="hidden lg:flex lg:items-center lg:space-x-4">
                  <button className="text-sm font-medium text-gray-700 hover:text-[#B8941F] transition-colors duration-200">
                    Sign in
                  </button>
                  <span aria-hidden="true" className="h-6 w-px bg-gray-300" />
                  <button className="text-sm font-medium text-gray-700 hover:text-[#B8941F] transition-colors duration-200">
                    Create account
                  </button>
                </div>

                {/* Cart */}
                <button className="group relative p-2 text-gray-600 hover:text-[#B8941F] transition-colors duration-200 rounded-full hover:bg-[#FFF8E7]">
                  <ShoppingBagIcon className="h-6 w-6" />
                  <span className="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold text-white" style={{ backgroundColor: '#D4AF37' }}>
                    0
                  </span>
                  <span className="sr-only">items in cart, view bag</span>
                </button>
              </div>
            </div>

            {/* Mobile category filters - horizontal scrollable */}
            <div className="lg:hidden pb-3 overflow-x-auto scrollbar-hide">
              <div className="flex space-x-2 min-w-max px-2">
                {categories.map((item) => (
                  <button
                    key={item.category}
                    onClick={() => handleCategoryClick(item.category)}
                    className={`px-4 py-2 text-xs font-medium rounded-full whitespace-nowrap transition-all duration-200 ${
                      activeCategory === item.category
                        ? 'text-white shadow-md'
                        : 'text-gray-700 bg-gray-100 hover:bg-[#FFF8E7] hover:text-[#B8941F]'
                    }`}
                    style={activeCategory === item.category ? { background: 'linear-gradient(to right, #D4AF37, #B8941F)' } : {}}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
