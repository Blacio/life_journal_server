const mongoose = require('mongoose');

const concertSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  timestamp: Number,
  location: String,
  artist: String,
  category: String,
  rating: Number,
  song: String,
  notes: String
});

mongoose.model('Concerts', concertSchema);
