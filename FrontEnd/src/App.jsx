import 'bootstrap/dist/css/bootstrap.min.css';
import { useMemo } from 'react'
import './App.css'

import { products } from "./data/productsList"
import { BrowserRouter , Routes, Route, useSearchParams} from 'react-router-dom'
import Home from './components/Home'
import NavigationBar from './components/NavigationBar'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Products from './components/products';
import CartPage from './components/CartPage';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={
          <PrivateRoute>
            <CartPage />
          </PrivateRoute>
        } />

      </Routes>
    </BrowserRouter>

  );
}

export default App
