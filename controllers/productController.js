const productService = require('../services/productService');

/**
 * Controller function to get all products.
 */
const getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.json(products);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

/**
 * Controller function to get products by category ID.
 */
const getProductsByCategoryId = async (req, res) => {
  try {
    const products = await productService.getProductsByCategoryId(req.params.id);
    res.json(products);
  } catch (err) {
    res.status(404).send(err.message);
  }
};

/**
 * Controller function to add a new product.
 */
const addProduct = async (req, res) => {
  try {
    const newProduct = await productService.addProduct(req.body);
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

/**
 * Controller function to update a product by ID.
 */
const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await productService.updateProduct(req.params.id, req.body);
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

/**
 * Controller function to delete a product by ID.
 */
const deleteProduct = async (req, res) => {
  try {
    await productService.deleteProduct(req.params.id);
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getAllProducts,
  getProductsByCategoryId,
  addProduct,
  updateProduct,
  deleteProduct,
};
