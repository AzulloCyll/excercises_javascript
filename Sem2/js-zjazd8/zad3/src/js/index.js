import "core-js/stable";
import "regenerator-runtime/runtime";

import { board } from "./ExamInput";
import { Visualiser } from "./visualiser";
import { getBall } from "./getBall";

// State: 0  -stop, 1 - active, 2 - ended
class Game {
	constructor(ball, board) {
		this.ball = ball;
		this.board = board;
		this.state = 0;
		this.startingX = ball.x;
		this.startingY = ball.y;
	}

	start() {
		visualisation.updateBoard(board);

		let move = () => {
			this.board[this.ball.x][this.ball.y] = "0";
			this.makeMove();
			this.board[this.ball.x][this.ball.y] = "1";
			visualisation.updateBoard(board);
		};

		const start = setInterval(move, 300);
	}
	
	isBallOnStartingPosition() {

			if (this.staringX === this.ball.x && this.startingY === this.ball.y) {
			return true;
		} else return false;
	}
	makeMove() {
		if (this.willColideOnXAxis()) this.ball.vector.x *= -1;
		if (this.willColideOnYAxis()) this.ball.vector.y *= -1;

		this.ball.move();
	}
	willColideOnXAxis() {
		if (this.board[this.ball.x + this.ball.vector.x][this.ball.y] === "X") {
			return true;
		} else return false;

		// if (this.vector.x === -1) {
		// 	if (this.board[this.ball.x - 1][this.ball.y] === "X") {
		// 		return true;
		// 	} else return false;
		// }
	}
	willColideOnYAxis() {
		if (this.board[this.ball.x][this.ball.y + this.ball.vector.y] === "X") {
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
