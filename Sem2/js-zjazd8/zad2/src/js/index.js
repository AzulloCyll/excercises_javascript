import "core-js/stable";
import "regenerator-runtime/runtime";

import { Visualiser } from "./visualiser";
import {
	RandomChessTypeGenerator,
	GetRandomPlaceOnBoard,
	ChessValidation,
} from "./utils";

class GameChess {
	constructor() {
		this.board = Array(8)
			.fill("0")
			.map(() => {
				return Array(8).fill("0");
			});
		this.gameState = true;
		this.visualise = new Visualiser(this.board);
		this.randomChessTypeGenerator = new RandomChessTypeGenerator();
		this.randomPositionGenerator = new GetRandomPlaceOnBoard(this.board);
		this.validation = new ChessValidation();
		this.button = document.getElementsByClassName("button")[0];
	}

	addFigure = () => {
		const randomChessType = this.randomChessTypeGenerator.getRandomChessType();
		const randomPosition =
			this.randomPositionGenerator.generateUniquePosition();
		this.board[randomPosition.x][randomPosition.y] = randomChessType;
	};

	start = () => {
		this.visualise.drawFrame();
		this.button.addEventListener("click", this.game);
	};

	game = () => {
		if (this.gameState) {
			this.addFigure(board);

			let beaten = this.validation.checkBeating(this.board);

			this.visualise.resetFrame();
			this.visualise.drawFrame();
			if (beaten) {
				this.gameState = false;
				this.button.classList.add("disabled");
				this.visualise.addBeaten(beaten.x, beaten.y);
			}
		}
	};
}

let game = new GameChess();
game.start();
