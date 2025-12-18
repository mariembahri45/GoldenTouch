import React from 'react'
//ahmed
function Admin() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8E7] via-white to-[#FFF8E7] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold mb-6" style={{ 
              background: 'linear-gradient(to right, #B8941F, #D4AF37)', 
              WebkitBackgroundClip: 'text', 
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Admin Panel
            </h1>
            <p className="text-gray-600 mb-8">
              Welcome to the admin dashboard. Here you can manage products, users, and orders.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-[#FFF8E7] to-white p-6 rounded-lg border border-[#F5E6D3] hover:shadow-md transition-shadow">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Manage Products</h2>
                <p className="text-gray-600 text-sm mb-4">Add, edit, or remove products from the store.</p>
                <button 
                  className="px-4 py-2 text-sm font-medium text-white rounded-md transition-all duration-200 hover:shadow-md"
                  style={{ background: 'linear-gradient(to right, #D4AF37, #B8941F)' }}
                >
                  Manage Products
                </button>
              </div>

              <div className="bg-gradient-to-br from-[#FFF8E7] to-white p-6 rounded-lg border border-[#F5E6D3] hover:shadow-md transition-shadow">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Manage Users</h2>
                <p className="text-gray-600 text-sm mb-4">View and manage user accounts.</p>
                <button 
                  className="px-4 py-2 text-sm font-medium text-white rounded-md transition-all duration-200 hover:shadow-md"
                  style={{ background: 'linear-gradient(to right, #D4AF37, #B8941F)' }}
                >
                  Manage Users
                </button>
              </div>

              <div className="bg-gradient-to-br from-[#FFF8E7] to-white p-6 rounded-lg border border-[#F5E6D3] hover:shadow-md transition-shadow">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">View Orders</h2>
                <p className="text-gray-600 text-sm mb-4">Track and manage customer orders.</p>
                <button 
                  className="px-4 py-2 text-sm font-medium text-white rounded-md transition-all duration-200 hover:shadow-md"
                  style={{ background: 'linear-gradient(to right, #D4AF37, #B8941F)' }}
                >
                  View Orders
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Admin

