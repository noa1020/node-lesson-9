const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const categorySchema = new Schema({
  _id: Number,
  name: { type: String, required: true, maxLength: 100 },
});

module.exports = mongoose.model('Category', categorySchema);
