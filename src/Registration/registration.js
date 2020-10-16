mongoose.connect('mongodb://localhost:27017/console', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const readline = require('readline');
const User = require('./DB/Model-shema/User');
const hero = new User({});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Fill your nickname = ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`You are : ${answer}`);
  rl.close();
  hero['user_nickname'] = answer;
});

hero.save();
module.exports = hero;

