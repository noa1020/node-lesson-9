const Product = require('../models/product');
const jwt = require('jsonwebtoken');

/**
 * Service function to get all products.
 */
const getAllProducts = async () => {
  return await Product.find().sort({ name: 1 });
};

/**
 * Service function to get products by category ID.
 */
const getProductsByCategoryId = async (categoryId) => {
  return await Product.find({ categoryId });
};

/**
 * Service function to add a new product.
 */
const addProduct = async (productData) => {
  const { name, price, categoryId, token } = productData;

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  if (decoded.userType !== 'admin') {
    throw new Error('Unauthorized');
  }

  const newProduct = new Product({
    _id: new Date().getTime(),
    name,
    price,
    categoryId,
  });

  await newProduct.save();
  return newProduct;
};

/**
 * Service function to update a product by ID.
 */
const updateProduct = async (id, productData) => {
  const { name, price, categoryId, token } = productData;

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  if (decoded.userType !== 'admin') {
    throw new Error('Unauthorized');
  }

  const updatedProduct = await Product.findByIdAndUpdate(id, { name, price, categoryId }, { new: true });
  if (!updatedProduct) {
    throw new Error('Product not found');
  }
  return updatedProduct;
};

/**
 * Service function to delete a product by ID.
 */
const deleteProduct = async (id, token) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  if (decoded.userType !== 'admin') {
    throw new Error('Unauthorized');
  }

  const deletedProduct = await Product.findByIdAndDelete(id);
  if (!deletedProduct) {
    throw new Error('Product not found');
  }
  return deletedProduct;
};

module.exports = {
  getAllProducts,
  getProductsByCategoryId,
  addProduct,
  updateProduct,
  deleteProduct,
};
