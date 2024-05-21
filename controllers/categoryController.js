const categoryService = require('../services/categoryService');

/**
 * Controller function to get all categories.
 */
const getAllCategories = async (req, res) => {
  try {
    const categories = await categoryService.getAllCategories();
    res.json(categories);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

/**
 * Controller function to get a category by ID.
 */
const getCategoryById = async (req, res) => {
  try {
    const category = await categoryService.getCategoryById(req.params.id);
    res.json(category);
  } catch (err) {
    res.status(404).send(err.message);
  }
};

/**
 * Controller function to add a new category.
 */
const addCategory = async (req, res) => {
  const token = req.header('Authorization');
  try {
    const newCategory = await categoryService.addCategory(req.body.name, token);
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

/**
 * Controller function to update a category by ID.
 */
const updateCategory = async (req, res) => {
  const token = req.header('Authorization');
  try {
    const updatedCategory = await categoryService.updateCategory(req.params.id, req.body.name, token);
    res.status(200).json(updatedCategory);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

/**
 * Controller function to delete a category by ID.
 */
const deleteCategory = async (req, res) => {
  const token = req.header('Authorization');
  try {
    await categoryService.deleteCategory(req.params.id, token);
    res.status(200).json({ message: 'Category deleted successfully' });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getAllCategories,
  getCategoryById,
  addCategory,
  updateCategory,
  deleteCategory,
};
