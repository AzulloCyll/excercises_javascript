import "core-js/stable";
import "regenerator-runtime/runtime";

import { board } from "./ExamInput";
import { Visualiser } from "./visualiser";
import { getBall } from "./getBall";

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
		this.state = 1;

		this.board[this.ball.x][this.ball.y] = "0";

		this.makeMove();
		this.makeMove();
		this.makeMove();
		this.makeMove();
		this.makeMove();
		this.makeMove();
		this.makeMove();



		this.board[this.ball.x][this.ball.y] = "1";
		visualisation.updateBoard(board);

		// do {
		// 	this.makeMove();
		// } while (!this.isBallOnStartingPosition());
		this.state = 2;
	}
	isBallOnStartingPosition() {
		// check if ball is back on starting possition; if so return true;
	}
	makeMove() {
		if (this.willColideOnXAxis()) this.ball.vector.x *= -1;
		if (this.willColideOnYAxis()) this.ball.vector.y *= -1;

		this.ball.move();
	}
	willColideOnXAxis() {
		if (this.ball.vector.x === 1) {
			if (this.board[this.ball.x + 1][this.ball.y] === "X") {
				return true;
			} else return false;
		}
		// if (this.vector.x === -1) {
		// 	if (this.board[this.ball.x - 1][this.ball.y] === "X") {
		// 		return true;
		// 	} else return false;
		// }
	}
	willColideOnYAxis() {
		console.log(this.board[this.ball.x][this.ball.y + 1]);
		if (this.board[this.ball.x][this.ball.y + 1] === "X") {
			return true;
		} else return false;
	}
}

let ball = getBall(board);
let game = new Game(ball, board);
let visualisation = new Visualiser(board);
visualisation.updateBoard(board);

// console.log(ball);
// console.log(game);

game.start();
