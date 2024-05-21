const userService = require('../services/userService');

/**
 * Controller function for user registration (Sign Up).
 */
const signup = async (req, res) => {
  try {
    const newUser = await userService.signup(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

/**
 * Controller function for user login.
 */
const login = async (req, res) => {
  try {
    const token = await userService.login(req.body);
    res.status(200).json({ token });
  } catch (err) {
    res.status(401).send({ error: err.message });
  }
};

module.exports = {
  signup,
  login,
};
