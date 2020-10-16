const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  user_nickname: {
    type: String,
    required: true,
  },
  quantity_games: {
    type: Number,
    default: 0,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
