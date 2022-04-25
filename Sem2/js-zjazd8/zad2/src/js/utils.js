import { chessFactory } from "./chessFactory";

class RandomChessTypeGenerator {
	constructor() {
		this.chessTypes = ["king", "queen", "bishop", "knight", "rook"];
		// this.chessTypes = ["king", "queen", "bishop", "knight", "rook"];
	}

	getRandomChessType = () => {
		const min = 0;
		const max = this.chessTypes.length - 1;
		const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
		return this.chessTypes[randomNumber];
	};
}

class GetRandomPlaceOnBoard {
	constructor(board) {
		this.board = board;
	}

	getRandom = () => {
		const min = 0;
		const max = this.board.length - 1;
		const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
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
				"----> invalid --->",
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

class ChessValidation {
	constructor(board) {
		this.board = board;
	}

	checkBeating = (board) => {
		for (let i = 0; i < 8; i++) {
			for (let j = 0; j < 8; j++) {
				if (board[i][j] !== "0") {
					let check = chessFactory().getCheck(board[i][j]);
					let checkMoves = check.moves;

					for (let move of checkMoves) {
						if (
							i + move.x >= 0 &&
							i + move.x < 8 &&
							j + move.y >= 0 &&
							j + move.y < 8
						) {
							if (board[i + move.x][j + move.y] !== "0") {
								return { x: i + move.x, y: j + move.y };
							}
						}
					}
				}
			}
		}
	};
}

export { RandomChessTypeGenerator, GetRandomPlaceOnBoard, ChessValidation };
