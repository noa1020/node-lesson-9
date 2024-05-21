const Category = require('../models/category');
const jwt = require('jsonwebtoken');

/**
 * Service function to get all categories.
 */
const getAllCategories = async () => {
  return await Category.find().sort({ name: 1 });
};

/**
 * Service function to get a category by ID.
 */
const getCategoryById = async (id) => {
  const category = await Category.findById(id);
  if (!category) {
    throw new Error('Category not found');
  }
  return category;
};

/**
 * Service function to add a new category.
 */
const addCategory = async (name, token) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  if (decoded.userType !== 'admin') {
    throw new Error('Unauthorized');
  }

  const newCategory = new Category({ _id: new Date().getTime(), name });
  await newCategory.save();
  return newCategory;
};

/**
 * Service function to update a category by ID.
 */
const updateCategory = async (id, name, token) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  if (decoded.userType !== 'admin') {
    throw new Error('Unauthorized');
  }

  const updatedCategory = await Category.findByIdAndUpdate(id, { name }, { new: true });
  if (!updatedCategory) {
    throw new Error('Category not found');
  }
  return updatedCategory;
};

/**
 * Service function to delete a category by ID.
 */
const deleteCategory = async (id, token) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  if (decoded.userType !== 'admin') {
    throw new Error('Unauthorized');
  }

  const deletedCategory = await Category.findByIdAndDelete(id);
  if (!deletedCategory) {
    throw new Error('Category not found');
  }
  return deletedCategory;
};

module.exports = {
  getAllCategories,
  getCategoryById,
  addCategory,
  updateCategory,
  deleteCategory,
};
