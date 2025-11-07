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
  const [sum, setSum] = useState(0);

  const handleIncrement = (id) => {
    setProduct(
      product.map((elt) => {
        if (elt.id === id) {
          return { ...elt, qte: elt.qte + 1 };
        }
        return elt;
      })
    );
  };
  const handleDecrement = (id) => {
    setProduct(
      product.map((elt) => {
        if (elt.id === id && elt.qte > 0) {
          return { ...elt, qte: elt.qte - 1 };
        }
        return elt;
      })
    );
  };

  const handleDelete = (id) => {
    setProduct(product.filter((elt) => elt.id !== id));
  };

  const handleSumIncrement = (price) => {
    setSum(sum + price); //setSum(prevSum=>prevSum+price)
  };
  const handleSumDecrement = (article) => {
    if (article.qte > 0) {
      setSum(sum - article.price);
    }
  };

  const handleSumDelete = (article) => {
    setSum(sum - article.price * article.qte);
  };
  return (
    <BrowserRouter>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ListOfProducts product={product}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          handleDelete={handleDelete}
          sum={sum}
          handleSumIncrement={handleSumIncrement}
          handleSumDecrement={handleSumDecrement}
          handleSumDelete={handleSumDelete}>
        </ListOfProducts>}>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App
