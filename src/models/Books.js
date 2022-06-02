const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  name: String,
  timestamp: Number,
  category: String,
  author: String,
  rating: Number,
  quote: String,
  notes: String
});

mongoose.model('Books', bookSchema);
