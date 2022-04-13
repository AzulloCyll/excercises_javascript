class Vector {
	constructor(x, y) {
		this.x = x; // -1 / 1
		this.y = y; // -1 / 1
	}
}
class Ball {
	constructor(x, y, vector) {
		this.x = x;
		this.y = y;
		this.vector = vector;
	}
	move() {
		this.ball.x += this.vector.x;
		this.ball.y += this.vector.y;
	}
}
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
	// creates ball object based on passed board
	return null;
}
let game = new Game(getBall(board), board);
game.start();
