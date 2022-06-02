const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  timestamp: Number,
  name: String,
  location: String,
  rating: Number,
  favourite: String,
  notes: String
});

mongoose.model('Events', eventSchema);
