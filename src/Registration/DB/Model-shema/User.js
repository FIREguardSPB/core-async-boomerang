const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/console', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const usersSchema = new mongoose.Schema({
  user_nickname: {
    type: String,
    required: true,
  },
  quantity_games: {
    type: Number,
    default: 0,
  },
});
const User = mongoose.model('User', usersSchema);
module.exports = User;
