class Visualiser {
	constructor(board) {
		this.board = board;
	}

	drawFrame = () => {
		let boardEl = document.getElementById("board");

		for (let i = 0; i < 8; i++) {
			for (let j = 0; j < 8; j++) {
				let field = document.createElement("div");
				if (this.board[i][j] === "king") {
					field.classList.add("king");
				}
				if (this.board[i][j] === "knight") {
					field.classList.add("knight");
				}
				if (this.board[i][j] === "queen") {
					field.classList.add("queen");
				}
				if (this.board[i][j] === "bishop") {
					field.classList.add("bishop");
				}
				if (this.board[i][j] === "rook") {
					field.classList.add("rook");
				}
				boardEl.append(field);
			}
		}
	};

	resetFrame = () => {
		let boardEl = document.getElementById("board");
		boardEl.innerHTML = "";
	};

	addBeaten = (x, y) => {
		let boardEl = document.getElementById("board");
		let field = boardEl.getElementsByTagName("div")[x * 8 + y];
		field.classList.add("beaten");
	};
}

export { Visualiser };
