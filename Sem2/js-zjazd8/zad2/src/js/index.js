import "core-js/stable";
import "regenerator-runtime/runtime";

const board = Array(8)
	.fill(0)
	.map(() => {
		return Array(8).fill(0);
	});

board[2][3] = "king";
board[5][3] = "king";

const visualise = (board) => {
	const boardEl = document.getElementById("board");
	for (let i = 0; i < 8; i++) {
		for (let j = 0; j < 8; j++) {
			let field = document.createElement("div");
			if (board[i][j] === "king") {
				field.classList.add("king");
			}
			boardEl.append(field);
		}
	}
};

visualise(board);
console.table(board);
