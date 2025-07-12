const mongoose = require('mongoose');

const swapSchema = new mongoose.Schema({
  from: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  to: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  skill: String,
  status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' },
  feedback: String
});

module.exports = mongoose.model('Swap', swapSchema);