class RandomChessTypeGenerator {
	constructor() {
		this.chessTypes = ["king", "queen", "bishop", "knight", "rook"];
	}

	getRandomChessType = () => {
		let min = 0;
		let max = this.chessTypes.length - 1;
		let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
		return this.chessTypes[randomNumber];
	};
}

class GetRandomPlaceOnBoard {
	constructor(board) {
		this.board = board;
	}

	getRandom = () => {
		let min = 0;
		let max = this.board.length - 1;
		let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
		return randomNumber;
	};

	checkPosition = (x, y) => {
		for (let i = 0; i < 7; i++) {
			for (let j = 0; j < 7; j++) {
				if (this.board[x][y] === "0") {
					return false;
				} else return true;
			}
		}
	};

	generatePosition = () => {
		this.x = this.getRandom();
		this.y = this.getRandom();
		if (!this.checkPosition(this.x, this.y)) {
			return {
				x: this.x,
				y: this.y,
			};
		} else {
			console.log(
				{ x: this.x, y: this.y },
				"----> invalid -->",
				this.board[this.x][this.y]
			);
			this.generatePosition();
		}
	};

	generateUniquePosition = () => {
		do {
			this.generatePosition();
		} while (!this.generatePosition());
		return {
			x: this.x,
			y: this.y,
		};
	};
}

export { RandomChessTypeGenerator, GetRandomPlaceOnBoard };
