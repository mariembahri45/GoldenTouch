import { Link, useNavigate, useParams } from 'react-router-dom'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import { UserIcon } from "@heroicons/react/24/outline"
import { useCart } from "../context/CartContext"
import { useAuth } from "../context/AuthContext"   

//mariem and ahmed mariem: nav links , ahmed authentication behaviour
const categories = [
  { name: 'All', category: 'all' },
  { name: 'Bracelets', category: 'bracelets' },
  { name: 'Earrings', category: 'earrings' },
  { name: 'Necklaces', category: 'necklaces' },
  { name: 'Rings', category: 'rings' },
]

export default function NavigationBar() {
  // used to redirect user to another route using code
  const navigate = useNavigate()
  // get cart array from CartContext (used to show cart badge count)
  const { cart } = useCart()

  //  category comes from URL: /products/:category
  const { category } = useParams()
  const activeCategory = category || 'all'

  
  const { user, isAuthenticated, signOut, role } = useAuth()

  const handleCategoryClick = (cat) => {
    navigate(`/products/${cat}`)
  }

  const handleSignOut = async () => {
    await signOut()
    navigate('/')
  }

  const isAdmin = role === 'admin'
  return (
    <div className="bg-gradient-to-b from-[#FFF8E7] to-white relative z-50">
      <header className="relative">
        {/* Elegant promo banner */}
        <div style={{ background: 'linear-gradient(to right, #B8941F, #D4AF37, #B8941F)' }}>
          <p className="flex h-10 items-center justify-center px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
             Free delivery on orders over $100 
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
                {isAdmin ? (
                  <>
                    <Link
                      to="/admin"
                      className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#B8941F] transition-colors duration-200 rounded-md hover:bg-[#FFF8E7]"
                    >
                      Admin Panel
                    </Link>
                    <Link
                      to="/products"
                      className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#B8941F] transition-colors duration-200 rounded-md hover:bg-[#FFF8E7]"
                    >
                      Products
                    </Link>
                  </>
                ) : (
                  categories.map((item) => (
                    <button
                      key={item.category}
                      onClick={() => handleCategoryClick(item.category)}
                      className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${activeCategory === item.category
                          ? 'text-white shadow-md'
                          : 'text-gray-700 hover:text-[#B8941F] hover:bg-[#FFF8E7]'
                        }`}
                      style={activeCategory === item.category ? { background: 'linear-gradient(to right, #D4AF37, #B8941F)' } : {}}
                    >
                      {item.name}
                    </button>
                  ))
                )}
              </div>

              {/* Right side: Search, Account, Cart */}
              <div className="flex items-center space-x-4">
                {/* Mobile menu button for categories - will show on small screens */}
                <div className="lg:hidden">
                  {isAdmin ? (
                    <Link
                      to="/admin"
                      className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#B8941F]"
                    >
                      Admin
                    </Link>
                  ) : (
                    <Link
                      to="/products"
                      className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#B8941F]"
                    >
                      Products
                    </Link>
                  )}
                </div>

                {/* Profile (hidden for admin since no profile view) */}
                {!isAdmin && (
                  <button className="p-2 text-gray-600 hover:text-[#B8941F] transition-colors duration-200 rounded-full hover:bg-[#FFF8E7]">
                    <span className="sr-only">Profile</span>
                    <UserIcon className="h-6 w-6" />
                  </button>
                )}

                {/* Account */}
                <div className="hidden lg:flex lg:items-center lg:space-x-4">
                  {isAuthenticated ? (
                    <>
                      <span className="text-sm font-medium text-gray-700">
                        {user?.name || 'User'}
                      </span>
                      <span aria-hidden="true" className="h-6 w-px bg-gray-300" />
                      <button
                        onClick={handleSignOut}
                        className="text-sm font-medium text-gray-700 hover:text-[#B8941F] transition-colors duration-200"
                      >
                        Sign out
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/signin"
                        className="text-sm font-medium text-gray-700 hover:text-[#B8941F] transition-colors duration-200"
                      >
                        Sign in
                      </Link>
                      <span aria-hidden="true" className="h-6 w-px bg-gray-300" />
                      <Link
                        to="/signup"
                        className="text-sm font-medium text-gray-700 hover:text-[#B8941F] transition-colors duration-200"
                      >
                        Create account
                      </Link>
                    </>
                  )}
                </div>

                <button
                  onClick={() => navigate("/cart")}
                  className="group relative p-2 text-gray-600 hover:text-[#B8941F] transition-colors duration-200 rounded-full hover:bg-[#FFF8E7]"
                >
                  <ShoppingBagIcon className="h-6 w-6" />

                  {cart.length > 0 && (
                    <span className="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold text-white" style={{ backgroundColor: '#D4AF37' }}>
                      {cart.length}
                    </span>
                  )}
                </button>
              </div>
            </div>

            {/* Mobile category filters - horizontal scrollable */}
          </div>
        </nav>
      </header>
    </div>
  )
}