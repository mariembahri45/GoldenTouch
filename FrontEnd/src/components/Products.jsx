//Mariem

import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CardItem from "./CardItem";

export default function Products() {
  const url = "http://localhost:6005/api/products";
  const [products, setProducts] = useState([]);

  const { category = "all" } = useParams();

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  const filteredProducts =
    category === "all"
      ? products
      : products.filter((product) => product.category === category);

  return (
    <div className="bg-gradient-to-b from-white to-[#FFF8E7] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <CardItem key={product._id} elt={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
