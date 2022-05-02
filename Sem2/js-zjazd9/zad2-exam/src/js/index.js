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
		this.YPositions = this.getYPositions();
	}

	getYPositions = () => {
		let arrOfY = [];
		for (let i = 0; i < this.board.length; i++) {
			for (let j = 0; j < this.board[0].length; j++) {
				if (this.board[i][j] === "Y") {
					arrOfY.push({ x: i, y: j });
				}
			}
		}
		return arrOfY;
	};

	start() {
		visualisation.updateBoard(board);

		const step = setInterval(() => {
			this.board[this.ball.x][this.ball.y] = "0";

			if (this.isBallonYPos(this.ball)) {
				this.changeVectorDirectionOtherThanBackwards(
					this.ball.vector.x,
					this.ball.vector.y
				);
				// dopisac zmiane wektora na losowy (inny niż z powrotem)
			}

			this.makeMove();
			this.board[this.ball.x][this.ball.y] = "1";

			visualisation.updateBoard(board);

			if (this.isBallOnStartingPosition()) {
				clearInterval(step);
			}
		}, 200);
	}

	isBallonYPos = () => {
		for (let position of this.YPositions) {
			if (position.x === this.ball.x && position.y === this.ball.y) {
				let newArr = this.YPositions.filter(
					(item) => item.x !== this.ball.x && item.y !== this.ball.y
				);
				this.YPositions = [...newArr];
				return true;
			} else return false;
		}
	};

	isBallOnStartingPosition() {
		if (this.startingX === this.ball.x && this.startingY === this.ball.y) {
			return true;
		} else return false;
	}

	makeMove() {
		if (this.willColideOnXAxis()) this.ball.vector.x *= -1;
		if (this.willColideOnYAxis()) this.ball.vector.y *= -1;

		if (this.willCollideOnBothAxis()) {
			this.ball.vector.x *= -1;
			this.ball.vector.y *= -1;
		}

		this.ball.move();
	}

	willCollideOnBothAxis() {
		if (
			this.board[this.ball.x + this.ball.vector.x][
				this.ball.y + this.ball.vector.y
			] === "X"
		) {
			return true;
		} else return false;
	}

	willColideOnXAxis() {
		if (this.board[this.ball.x + this.ball.vector.x][this.ball.y] === "X") {
			return true;
		} else return false;
	}

	willColideOnYAxis() {
		if (this.board[this.ball.x][this.ball.y + this.ball.vector.y] === "X") {
			return true;
		} else return false;
	}

	randomDirection() {
		let random = Math.floor(Math.random() * 10 + 1);
		return random <= 5 ? -1 : 1;
	}

	changeVectorDirectionOtherThanBackwards(vectorx, vectory) {
		this.ball.vector.x = this.randomDirection();
		this.ball.vector.y = this.randomDirection();
		if (
			this.ball.vector.x === vectorx * -1 &&
			this.ball.vector.y === vectory * -1
		) {
			this.changeVectorDirectionOtherThanBackwards(vectorx, vectory);
		}
	}
}

let ball = getBall(board);
let game = new Game(ball, board);
let visualisation = new Visualiser(board);
visualisation.updateBoard(board);

game.start();
