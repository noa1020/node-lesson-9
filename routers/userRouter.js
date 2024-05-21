const express = require('express');
const userController = require('../controllers/userController');
const app = express.Router();

/**
 * Route for user registration (Sign Up).
 */
app.post('/signup', userController.signup);

/**
 * Route for user login.
 */
app.post('/login', userController.login);

module.exports = app;
