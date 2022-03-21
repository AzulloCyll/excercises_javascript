class Player {
  constructor(min, max) {
    this.min = min;
    this.max = max;
    this.guessedNumber = min;
  }
  makeAGues() {
    this.guessedNumber =
      Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    return this.guessedNumber;
  }
  analyseTheAnswer(answer) {
    if (answer === -1) this.min = this.guessedNumber + 1;
    if (answer === 1) this.max = this.guessedNumber - 1;
  }
}
class Host {
  constructor(min, max) {
    this.min = min;
    this.max = max;
    this.secreNumber = min;
  }
  makeANumber() {
    this.secreNumber =
      Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
  }
  checkAnswer(answer) {
    if (answer < this.secreNumber) return -1;
    if (answer === this.secreNumber) return 0;
    if (answer > this.secreNumber) return 1;
  }
}
class Game {
  constructor(host, player) {
    this.host = host;
    this.player = player;
  }
  start() {
    console.log("Game starts");
    this.host.makeANumber();
    while (true) {
      let guessedNumber = this.player.makeAGues();
      let answer = this.host.checkAnswer(guessedNumber);
      if (answer === 0) {
        console.log("Game finished");
        return;
      }
      this.player.analyseTheAnswer(answer);
    }
  }
}
const min = 0;
const max = 100;
let game = new Game(new Host(min, max), new Player(min, max));
game.start();
