const product = require("../models/product");
const getProducts = async (request, response) => {
    try {
        const products = await product.find();
        if (products && products.length > 0) {
            response.status(200).json({ products: products });
        } else {
            response.status(404).json({ msg: "No products found" });
        }
    } catch (error) {
        console.error(error);
        response.status(500).json({ msg: "Error on getting users" });
    }
};

const postProduct = async (request, response) => {
    const productData = request.body;
    try {
        const foundProduct = await product.findOne({ id: productData.id });
        if (foundProduct) {
            response.status(400).json({ msg: "product already exist" });
        } else {
            const newProduct = new product(productData);
            console.log(newProduct)
            await newProduct.save();
            response.status(200).json({ product: newProduct, msg: "product successfully added" });
        }
    } catch (error) {
        console.error(error);
        response.status(500).json({ msg: "error on adding product" })
    }
};


const putProduct = async (req, res) => {
    const id = Number(req.params.id);
    const productData = req.body;
    try {
        const updatedProduct = await product.findOneAndUpdate({ id: id }, productData, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ msg: "Product not found" });
        }
        res.status(200).json({ msg: "Product updated successfully", product: updatedProduct });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error on updating product" });
    }
};


// DELETE PRODUCT
const deleteProduct = async (req, res) => {
    const id = Number(req.params.id);

    try {
        const deletedProduct = await product.findOneAndDelete({ id: id });
        if (!deletedProduct) {
            return res.status(404).json({ msg: "Product not found" });
        }
        res.status(200).json({ msg: "Product deleted successfully", product: deletedProduct });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error deleting product" });
    }
};





module.exports = { getProducts, postProduct, deleteProduct, putProduct }