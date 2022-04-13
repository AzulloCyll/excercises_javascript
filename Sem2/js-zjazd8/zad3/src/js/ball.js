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

export { Vector, Ball };
