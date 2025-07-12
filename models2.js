const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  location: String,
  photo: String,
  skillsOffered: [String],
  skillsWanted: [String],
  availability: String,
  isPublic: { type: Boolean, default: true },
});

module.exports = mongoose.model('User', userSchema);