const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

/**
 * Connects to the MongoDB database using Mongoose.
 */
const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = connectToDatabase;
