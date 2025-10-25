import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListOfProducts from './components/ListOfProducts'
import {products} from "./data/productsList"

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
    
      <ListOfProducts product={product}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleDelete={handleDelete}
        sum={sum}
        handleSumIncrement={handleSumIncrement}
        handleSumDecrement={handleSumDecrement}
        handleSumDelete={handleSumDelete}>
      
      </ListOfProducts>
   
  );
}

export default App
