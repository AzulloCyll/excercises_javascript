import "core-js/stable";
import "regenerator-runtime/runtime";

import { Visualiser } from "./visualiser";
import { chessFactory, chessFactory } from "./chessFactory";
import { RandomChessTypeGenerator, GetRandomPlaceOnBoard } from "./utils";

// empty board
const board = Array(8)
	.fill("0")
	.map(() => {
		return Array(8).fill("0");
	});

let visualise = new Visualiser(board);
let randomChessTypeGenerator = new RandomChessTypeGenerator();
let randomPositionGenerator = new GetRandomPlaceOnBoard(board);

visualise.drawFrame(); //initial render

const button = document.getElementsByClassName("button")[0];
button.addEventListener("click", () => {
	addFigure(board);
	visualise.resetFrame();
	visualise.drawFrame();
});

// board[2][3] = "king";
// board[2][6] = "knight";
// board[7][7] = "queen";
// board[6][4] = "bishop";
// board[4][6] = "rook";
// board[3][6] = "rook";
// board[2][6] = "rook";
// board[1][6] = "rook";
// board[0][6] = "rook";
// board[5][5] = "rook";
// board[5][1] = "rook";
// board[5][2] = "rook";
// board[5][3] = "rook";
// board[5][4] = "rook";
// board[5][5] = "rook";
// visualise.resetFrame();
// visualise.drawFrame(); //initial render

//pobieranie randomowego typu

addFigure = (board) => {
	const randomChessType = randomChessTypeGenerator.getRandomChessType();
	let randomPosition = randomPositionGenerator.generateUniquePosition();
	board[randomPosition.x][randomPosition.y] = randomChessType;
	console.table(board);
};

// wywołania
let checker1 = chessFactory().getCheck("king");
let checker2 = chessFactory().getCheck("queen");
let checker3 = chessFactory().getCheck("bishop");
let checker4 = chessFactory().getCheck("knight");
let checker5 = chessFactory().getCheck("rook");
console.log(checker1);
console.log(checker2);
console.log(checker3);
console.log(checker4);
console.log(checker5);
