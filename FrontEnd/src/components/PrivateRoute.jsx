import { Navigate } from 'react-router-dom'
import { isAuthenticated, getUserRole, getUser } from '../utils/authUtils'

function PrivateRoute({ children, requiredRole = null }) {
  if (!isAuthenticated()) {
    return <Navigate to="/signin" replace />
  }

  if (requiredRole) {
    const user = getUser()
    const role = getUserRole()
    
    if (!role || role !== requiredRole) {
      return <Navigate to="/" replace />
    }
  }

  return children
}

export default PrivateRoute

