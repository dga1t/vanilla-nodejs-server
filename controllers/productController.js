const Product = require('../models/productModel');

// @desc gets all products
// @route GET /api/products
async function getProducts(req, res) {
    try {
        const products = await Product.findAll();

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(products));
    } catch (error) {
        console.log(error);
    }
}


// @desc gets single product
// @route GET /api/product/:id
async function getProduct(req, res, id) {
    try {
        const product = await Product.findById(id);

        if (!product) {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'product not found..' }));
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(product));
        }
    } catch (error) {
        console.log(error);
    }
}

// @desc create a product
// @route POST /api/products
async function createProduct(req, res) {
    try {
        const product = {
            title: 'Test product',
            description: 'whatereve',
            price: 100
        };

        const newProduct = await Product.create(product);

        res.writeHead(201, { 'content-type': 'application/json' });
        return res.end(JSON.stringify(newProduct));

    } catch (error) {
        console.log(error);
    }
}

module.exports = { getProducts, getProduct, createProduct };