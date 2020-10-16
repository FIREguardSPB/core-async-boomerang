const readline = require('readline');
const User = require('./DB/Model-shema/User');
const user0 = new User({});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Fill your nickname = ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`You are : ${answer}`);
  rl.close();
  user0['user_nickname'] = answer;
});

module.exports = user0;

