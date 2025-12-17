const express = require("express");
const productRoute = express.Router();

const {getProducts , postProduct, putProduct,deleteProduct}=require("../Controllers/productController");

productRoute.get("/products",getProducts);
productRoute.post("/products",postProduct);
productRoute.put("/products/:id", putProduct);
productRoute.delete("/products/:id", deleteProduct);
module.exports=productRoute;