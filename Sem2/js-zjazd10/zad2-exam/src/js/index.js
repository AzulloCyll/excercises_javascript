import "core-js/stable";
import "regenerator-runtime/runtime";

import { board } from "./board";
import { Visualiser } from "./visualiser";

class Game {
	constructor(board) {
		this.board = board;
		this.button1 = document.getElementsByClassName("button")[0];
		this.button2 = document.getElementsByClassName("button")[1];
		this.cellSurroundings = [
			{ x: 0, y: 1 },
			{ x: 1, y: 1 },
			{ x: 1, y: 0 },
			{ x: 1, y: -1 },
			{ x: 0, y: -1 },
			{ x: -1, y: -1 },
			{ x: -1, y: 0 },
			{ x: -1, y: 1 },
		];
	}

	init = () => {
		visualiser.updateBoard(board);

		this.button1.addEventListener("click", () => {
			this.start();
		});

		this.button2.addEventListener("click", () => {
			window.location.reload();
		});
	};

	start = () => {
		this.init();

		if (!this.step) {
			this.step = setInterval(() => {
				this.lifeCycle(this.board);
				visualiser.updateBoard(this.board);
			}, 600);
		}
	};

	lifeCycle = () => {
		let X = this.board[0].length;
		let Y = this.board.length;

		let temporaryBoard = this.board.map((arr) => {
			return [...arr];
        });

		for (let x = 0; x < X; x++) {
			for (let y = 0; y < Y; y++) {
				let counter = 0;
				for (let direction of this.cellSurroundings) {
					if (
						x + direction.x >= 0 &&
						x + direction.x < X &&
						y + direction.y >= 0 &&
						y + direction.y < Y
					) {
						counter += this.board[x + direction.x][y + direction.y];
					}
				}

				//warunki życia
				if (counter === 3) {
					temporaryBoard[x][y] = 1;
				} else if (counter === 2 && this.board[x][y] === 1) {
					temporaryBoard[x][y] = 1;
				} else {
					temporaryBoard[x][y] = 0;
				}
			}
		}
		this.board = [...temporaryBoard];
	};
}

const visualiser = new Visualiser(board);
const game = new Game(board);

game.init();
