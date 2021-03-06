// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const Hero = require("./game-models/Hero");
const Enemy = require("./game-models/Enemy");
// const Boomerang = require('./game-models/Boomerang');
const View = require("./View");
const { runInteractiveConsole } = require("./keyboard");
const Boomerang = require("./game-models/Boomerang");

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.hero = new Hero(new Boomerang()); // Герою можно аргументом передать бумеранг.
    this.enemy = new Enemy({ position: this.trackLength });
    this.view = new View();
    this.track = [];
    this.regenerateTrack();
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track = new Array(this.trackLength).fill(" ");
    this.track[this.hero.position] = this.hero.skin;
    this.track[this.enemy.position] = this.enemy.skin;
    this.track[this.hero.boomerang.position + 1] = this.hero.boomerang.skin;
  }

  check() {
    if (this.hero.position === this.enemy.position) {
      this.hero.die();
    } else if (this.hero.boomerang.position === this.enemy.position) {
      this.enemy.die(this.trackLength);
    }
  }

  play() {
   setInterval(() => {
      // Let's play!
      this.regenerateTrack();
      this.check();
      this.enemy.moveLeft()
      this.view.render(this.track);
    }, 300);
    runInteractiveConsole(this.hero, this.hero.boomerang, this.enemy);
  }
}

module.exports = Game;
