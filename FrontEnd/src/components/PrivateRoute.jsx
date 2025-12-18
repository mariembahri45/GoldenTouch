import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
//ahmed
function PrivateRoute({ children, requiredRole = null }) {
  const { isAuthenticated, role, loading } = useAuth()

  if (loading) {
    return null
  }

  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />
  }

  if (requiredRole && role !== requiredRole) {
    return <Navigate to="/" replace />
  }

  return children
}

export default PrivateRoute
