// Умеешь работать с keypress? Попробуй разобраться в этом файле.
// Вместо keypress можно использовать и стандартный readline.
// Главное не используй всё вместе!

const keypress = require('keypress');
// const hero = require('Hero')

// Управление.
// Настроим соответствия нажатий на клавиши и действий в игре.

// const keyboard = {
//   q: () => console.log('left'),
//   w: () => console.log(this.hero),
//   e: () => console.log('e'),
//   // r: () => console.log('r'),
//   // t: () => console.log('t'),
//   // y: () => console.log('y'),
// };

// // Какая-то функция.

function runInteractiveConsole(hero, boomerang, enemy) {
  const keyboard = {
    q: () => hero.moveLeft(),
    w: () => hero.moveRight(),
    e: () => boomerang.fly(boomerang.position, enemy.position),
    // r: () => console.log('r'),
    // t: () => console.log('t'),
    // y: () => console.log('y'),
  };


  keypress(process.stdin);
  process.stdin.on('keypress', (ch, key) => {
    if (key) {
      // Вызывает команду, соответствующую нажатой кнопке.
      if (key.name in keyboard) {
        keyboard[key.name]();
      }
      // Прерывание программы.
      if (key.ctrl && key.name === 'c') {
        process.exit();
      }
    }
  });
  process.stdin.setRawMode(true);
}

// Давай попробуем запустить этот скрипт!

// runInteractiveConsole();


module.exports = {runInteractiveConsole}
