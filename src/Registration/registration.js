const readline = require('readline');
const User = require('./DB/Model-shema/User');
const nameUser = new User({});
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question('Fill your nickname = ', async (answer) => {
  // TODO: Log the answer in a database
  console.log(`You are : ${answer}`);
  rl.close();
  nameUser.user_nickname = answer;
  await hero.save(function (err) {
    mongoose.disconnect();
  });
});
module.exports = nameUser;
