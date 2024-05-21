const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userTypes = {
  USER: 'user',
  ADMIN: 'admin'
};

const userSchema = new Schema({
  _id: { type: Number, required: true },
  name: { type: String, required: true, maxLength: 100 },
  password: { type: String, required: true, minLength: 5 },
  email: { type: String, required: true },
  userType: { type: String, enum: [userTypes.USER, userTypes.ADMIN], required: true },
});

module.exports = mongoose.model('User', userSchema);
