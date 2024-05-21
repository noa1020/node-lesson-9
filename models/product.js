const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  _id: Number,
  name: { type: String, required: true, maxLength: 100 },
  price: { type: Number, required: true },
  categoryId: { type: Number, required: true },
});

module.exports = mongoose.model('Product', productSchema);
