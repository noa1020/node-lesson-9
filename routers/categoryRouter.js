const express = require('express');
const categoryController = require('../controllers/categoryController');
const app = express.Router();

/**
 * Route to get all categories.
 */
app.get('/', categoryController.getAllCategories);

/**
 * Route to get a category by ID.
 */
app.get('/:id', categoryController.getCategoryById);

/**
 * Route to add a new category.
 */
app.post('/', categoryController.addCategory);

/**
 * Route to update a category by ID.
 */
app.put('/:id', categoryController.updateCategory);

/**
 * Route to delete a category by ID.
 */
app.delete('/:id', categoryController.deleteCategory);

module.exports = app;
