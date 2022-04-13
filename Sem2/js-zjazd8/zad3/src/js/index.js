import "core-js/stable";
import "regenerator-runtime/runtime";

import { board } from "./ExamInput";
import { Visualiser } from "./visualiser";
import { Ball, Vector } from "./ball";

const start = () => {
	let visualisation = new Visualiser(board);
	visualisation.updateBoard(board);

	let start = setInterval(() => visualisation.updateBoard(board), 1000);
	let button = document.getElementsByClassName("button")[0];

	button.addEventListener("click", () => clearInterval(start), false);
};

start();

// State: 0-stop, 1 - active, 2 - ended
class Game {
	constructor(ball, board) {
		this.ball = ball;
		this.board = board;
		this.state = 0;
		this.startingX = ball.x;
		this.startingY = ball.y;
	}

	start() {
		console.log(ball.x);
		this.state = 1;
		do {
			this.makeMove();
		} while (!this.isBallOnStartingPosition());
		this.state = 2;
	}
	isBallOnStartingPosition() {
		// check if ball is back on starting possition; if so return true;
	}
	makeMove() {
		if (this.willColideOnYAxis) this.ball.vector.y *= -1;
		if (this.willColideOnXAxis) this.ball.vector.x *= -1;
		this.ball.move();
	}
	willColideOnYAxis() {
		// return true if collision in next move on Y axis
		// return false otherwise
	}
	willColideOnXAxis() {
		// return true if collision in next move on X axis
		// return false otherwise
	}
}

function getBall(board) {
	let X = board.length;
	let Y = board[0].length;
	let ballx, bally;
	let vectorx, vectory;

	for (let x = 0; x < X; x++) {
		for (let y = 0; y < Y; y++) {
			if (board[x][y] === "1") {
				ballx = x;
				bally = y;

				console.log(board[ballx + 0][bally + 1]);

				// XXX
				// X10
				// X00
				if (
					board[ballx + 1][bally + 1] === "0" &&
					board[ballx][bally + 1] === "0" &&
					board[ballx + 1][bally] === "0"
				) {
					vectorx = 1;
					vectory = 1;
				}

				// X00
				// X10
				// XXX
				if (
					board[ballx - 1][bally + 1] === "0" &&
					board[ballx - 1][bally] === "0" &&
					board[ballx][bally + 1] === "0"
				) {
					vectorx = 1;
					vectory = -1;
				}
			}
		}
	}

	let vector = new Vector(vectorx, vectory);

	let ball = new Ball(ballx, bally, vector);

	console.log(ball);

	return null;
}

getBall(board);

// let vector = new Vector(1, 1);
// let ball = new Ball(1, 1, vector);
// let game = new Game(new Ball(1, 1, vector), board);
// game.start();
