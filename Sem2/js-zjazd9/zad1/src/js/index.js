import "core-js/stable";
import "regenerator-runtime/runtime";

import { Board } from "./getBoard";
import { Player } from "./player";
import { Visualiser } from "./visualiser";

import { getRandomNumber } from "./utils";

let darek = new Player("Darek");
let ela = new Player("Ela");

let board = new Board().cards; //change this

class Game {
	constructor(board) {
		this.player = darek;
		this.board = board;
		this.visualiser = new Visualiser(board);
	}

	init = () => {
		const button = document.getElementsByClassName("button")[0];
		button.addEventListener("click", () => {
			this.moveA();
			this.moveB();
			this.checkPair();
			console.log(this.player.memory);
			// this.memoCards();
		});
	};

	start = () => {
		this.visualiser.visualise();
		this.init();
	};

	moveA = () => {
		this.indexA = this.getUniqueRandomIndex();

		this.getCard(this.indexA);
		this.player.addToMemory(this.indexA);
		this.valueA = parseInt(this.board[this.indexA]);
	};

	moveB = () => {
		this.indexB = this.getUniqueRandomIndex();
		this.valueB = parseInt(this.board[this.indexB]);

		//kiedy element o danej value jest już w pamięci
		if (this.player.getElementFromMemoryByValue(this.valueB, this.indexB)) {
			this.indexB = this.player.getElementFromMemoryByValue(
				this.valueB,
				this.indexB
			);
			console.log(this.indexB);
			this.valueB = parseInt(this.board[this.indexB]);
			console.log("found in memory");
		}

		this.getCard(this.indexB);
		this.player.addToMemory(this.indexB);
	};

	getUniqueRandomIndex = () => {
		let random;
		do {
			random = getRandomNumber(board);
			if (this.player.isIndexRemembered(random)) {
				console.log("Illegal index: ", random);
			}
		} while (this.player.isIndexRemembered(random));
		return random;
	};

	checkPair = () => {
		// console.log(this.valueA);
		// console.log(this.valueB);
		// console.log(this.valueA === this.valueB);
		if (this.valueA === this.valueB) {
			this.visualiser.pairCard(this.indexA);
			this.visualiser.pairCard(this.indexB);
		}
	};

	getCard = (index) => {
		// this.player.addToMemory(index);
		this.visualiser.openCard(index);
	};
}

let game = new Game(board);

game.start();
