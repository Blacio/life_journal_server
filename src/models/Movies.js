const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  timestamp: Number,
  name: String,
  director: String,
  category: String,
  rating: Number,
  quote: String,
  notes: String
});

mongoose.model('Movies', movieSchema);
