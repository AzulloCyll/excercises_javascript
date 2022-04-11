const board = [
  [34, 21, 32, 41, 25],
  [14, 42, 43, 14, 31],
  [54, 45, 52, 42, 23],
  [33, 15, 51, 31, 35],
  [21, 52, 33, 13, 23],
];

class TreasureGame {
  constructor(board) {
    this.board = board;
  }

  nextTile = (coords) => {
    coords = String(coords);

    let X = coords.split("")[0] - 1;
    let Y = coords.split("")[1] - 1;

    let boardXY = String(this.board[X][Y]);

    let boardX = boardXY.split("")[0];
    let boardY = boardXY.split("")[1];

    return boardX + boardY;
  };

  isThereTreasure = (coords) => {
    coords = String(coords);

    let X = coords.split("")[0] - 1;
    let Y = coords.split("")[1] - 1;

    let boardXY = String(this.board[X][Y]);

    if (coords === boardXY) {
      return true;
    }
    return false;
  };

  play = (startingCoords) => {
    let currentCoords = String(startingCoords);
    let check;

    do {
      check = this.isThereTreasure(currentCoords);
      console.log(currentCoords);
      currentCoords = this.nextTile(currentCoords);
    } while (!check);

    return "Treasure is on: " + currentCoords;
  };
}

let treasureHunt = new TreasureGame(board);
console.log(treasureHunt.play(11));
