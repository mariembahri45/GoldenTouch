import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListOfProducts from './components/ListOfProducts'
import { products } from "./data/productsList"
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import NavigationBar from './components/NavigationBar'



function App() {
  const [product, setProduct] = useState(products);
  return (
    <BrowserRouter>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ListOfProducts product={product}>
        </ListOfProducts>}>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App
