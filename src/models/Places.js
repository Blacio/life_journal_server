const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  name: String,
  date: Number,
  country: String,
  continent: String,
  rating: Number,
  experience: String,
  site: String,
  notes: String
});

mongoose.model('Places', placeSchema);
