import "core-js/stable";
import "regenerator-runtime/runtime";

import { Visualiser } from "./visualiser";
import { chessFactory } from "./chessFactory";
import { RandomChessTypeGenerator, GetRandomPlaceOnBoard } from "./utils";

// empty board
const board = Array(8)
	.fill("0")
	.map(() => {
		return Array(8).fill("0");
	});

const button = document.getElementsByClassName("button")[0];
button.addEventListener("click", () => {
	visualise.resetFrame();
	visualise.drawFrame();
});

let visualise = new Visualiser(board);
visualise.drawFrame(); //initial render

board[2][3] = "king";
board[2][6] = "knight";
board[7][7] = "queen";
board[6][4] = "bishop";
board[4][6] = "rook";
visualise.resetFrame();
visualise.drawFrame(); //initial render

//pobieranie randomowego typu
let randomChessTypeGenerator = new RandomChessTypeGenerator();
let randomChessType = randomChessTypeGenerator.getRandomChessType();

let randomChess = chessFactory().getCheck(randomChessType);

console.log(randomChess.moves);

let randomPositionGenerator = new GetRandomPlaceOnBoard(board);

let randomPosition = randomPositionGenerator.generatePosition();

console.log(randomPosition);

console.table(board);
