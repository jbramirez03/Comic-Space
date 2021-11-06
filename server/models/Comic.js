const mongoose = require('mongoose');

const { Schema } = mongoose;

const comicSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0
  },
});

const Comic = mongoose.model('Comic', comicSchema);

module.exports = Comic;
