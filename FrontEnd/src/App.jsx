import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


import { BrowserRouter , Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import NavigationBar from './components/NavigationBar'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Products from './components/products';
import CartPage from './components/CartPage';
import Admin from './components/Admin';
import PrivateRoute from './components/PrivateRoute';
//Mariem & ahmed
function App() {
  return (
    <BrowserRouter>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/products/:category" element={<Products />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={
          <PrivateRoute>
            <CartPage />
          </PrivateRoute>
        } />
        <Route path="/admin" element={
          <PrivateRoute requiredRole="admin">
            <Admin />
          </PrivateRoute>
        } />

      </Routes>
    </BrowserRouter>

  );
}

export default App
