const express = require('express');
const productController = require('../controllers/productController');
const app = express.Router();

/**
 * Route to get all products.
 */
app.get('/', productController.getAllProducts);

/**
 * Route to get products by category ID.
 */
app.get('/:id', productController.getProductsByCategoryId);

/**
 * Route to add a new product.
 */
app.post('/', productController.addProduct);

/**
 * Route to update a product by ID.
 */
app.put('/:id', productController.updateProduct);

/**
 * Route to delete a product by ID.
 */
app.delete('/:id', productController.deleteProduct);

module.exports = app;
