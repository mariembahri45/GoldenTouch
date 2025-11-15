import 'bootstrap/dist/css/bootstrap.min.css';
import { useMemo } from 'react'
import './App.css'
import ListOfProducts from './components/ListOfProducts'
import { products } from "./data/productsList"
import { BrowserRouter , Routes, Route, useSearchParams} from 'react-router-dom'
import Home from './components/Home'
import NavigationBar from './components/NavigationBar'



// Extract category from image path: "images/bracelets/bracelet1.webp" -> "bracelets"
function getProductCategory(product) {
  if (!product?.image) return null;
  const parts = product.image.toLowerCase().split('/');
  return parts.find(part => ['bracelets', 'earrings', 'necklaces', 'rings'].includes(part)) || null;
}

function ProductsPage() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category')?.toLowerCase().trim();
  
  const filteredProducts = useMemo(() => {
    if (!category || category === 'all') return products;
    return products.filter(product => getProductCategory(product) === category);
  }, [category]);

  return <ListOfProducts product={filteredProducts} />;
}

function App() {
  return (
    <BrowserRouter>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App
