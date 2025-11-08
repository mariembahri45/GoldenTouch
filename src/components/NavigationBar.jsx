'use client'

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MagnifyingGlassIcon, ShoppingBagIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

const navigation = {
  pages: [
    { name: 'Home', href: '/' },
  ],
}

// Defines menu items for the Products dropdown. It is used to display the categories of the products.
const categories = [
  { name: 'All Products', href: '/products', category: 'all' },
  { name: 'Bracelets', href: '/products?category=bracelets', category: 'bracelets' },
  { name: 'Earrings', href: '/products?category=earrings', category: 'earrings' },
  { name: 'Necklaces', href: '/products?category=necklaces', category: 'necklaces' },
  { name: 'Rings', href: '/products?category=rings', category: 'rings' },
]

export default function NavigationBar() {
  const [isProductsHovered, setIsProductsHovered] = useState(false) // State to handle the hover effect on the Products dropdown

  return (
    <div className="bg-white">
      <header className="relative bg-white">
    
        {/* Promo banner */}
        <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Get free delivery on orders over $100
        </p>

        {/* Navigation */}
        <nav aria-label="Top" className="px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to="/"> 
                  <span className="sr-only">Your Company</span>
                  <img
                    alt=""
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    className="h-8 w-auto"
                  />
                </Link> 
              </div>

              {/* Desktop page links */}
              <div className="hidden lg:ml-8 lg:flex lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.pages.map((page) => (
                    <Link
                      key={page.name}
                      to={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </Link>
                  ))}
                  
                  {/* Products dropdown */}
                  <div
                    className="relative h-full"
                    onMouseEnter={() => setIsProductsHovered(true)}
                    onMouseLeave={() => setIsProductsHovered(false)}
                  >
                    <div className="flex h-full items-center text-sm font-medium text-gray-700 hover:text-gray-800 cursor-pointer">
                      Products
                      <ChevronDownIcon
                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                          isProductsHovered ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </div>
                    
                    {/* Dropdown menu */}
                    <div
                      className={`absolute left-0 top-full z-10 w-48 origin-top-left rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-200 ease-in-out ${
                        isProductsHovered
                          ? 'opacity-100 visible translate-y-0 pointer-events-auto'
                          : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                      }`}
                    >
                      {categories.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side: Account, currency, search, cart */}
              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Sign in
                  </a>
                  <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
                  <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Create account
                  </a>
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 hover:text-gray-800">
                    <img
                      alt=""
                      src="https://tailwindcss.com/plus-assets/img/flags/flag-canada.svg"
                      className="block h-auto w-5 shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium">CAD</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>

                <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon className="h-6 w-6" />
                  </a>
                </div>

                <div className="ml-4 flow-root lg:ml-6">
                  <a href="#" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div>
              </div>

             
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
