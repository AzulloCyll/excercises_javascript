import { board } from "./ExamInput.js";

const createBoard = (board) => {
  let X = board.length;
  let Y = board[0].length;

  let boardEl = document.getElementById("board");

  for (let x = 0; x < X; x++) {
    let line = document.createElement("div");
    line.classList.add("line");
    for (let y = 0; y < Y; y++) {
      let tile = document.createElement("div");
      tile.classList.add("tile");
      if (board[x][y] === "X") {
        tile.classList.add("wall");
      } else if (board[x][y] === "1") {
        tile.classList.add("ball");
      }
      line.append(tile);
    }
    boardEl.append(line);
  }
};

createBoard(board);
