const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

/**
 * Service function for user registration.
 */
const signup = async (userData) => {
  const { name, email, password, userType } = userData;

  // Check if the email is already in use
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error('Email is already in use');
  }

  // Hash the password before saving
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user
  const newUser = new User({
    _id: new Date().getTime(),
    name,
    email,
    password: hashedPassword,
    userType,
  });

  await newUser.save();
  return newUser;
};

/**
 * Service function for user login.
 */
const login = async (loginData) => {
  const { email, password } = loginData;

  // Find the user by email
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('Invalid email or password');
  }

  // Check if the password is correct
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error('Invalid email or password');
  }

  // Generate a JWT token
  const token = jwt.sign({ userId: user._id, userType: user.userType }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  return token;
};

module.exports = {
  signup,
  login,
};
