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
		});
	};

	start = () => {
		this.visualiser.visualise();
		this.init();
	};

	moveA = () => {
		this.indexA = this.getUniqueRandomIndex();
		this.valueA = parseInt(this.board[this.indexA]);
		console.log("A value:", this.valueA, "on index", this.indexA);
		this.getCard(this.indexA);
	};

	moveB = () => {
		this.indexB = this.getUniqueRandomIndex();
		this.valueB = parseInt(this.board[this.indexB]);

		console.log("B value:", this.valueB, "on index", this.indexB);

		//kiedy element o danej value jest już w pamięci
		if (this.player.getElementFromMemoryByValue(this.indexA, this.valueA)) {
			let returnedElement = this.player.getElementFromMemoryByValue(
				this.indexA,
				this.valueA
			);

			this.indexB = returnedElement.index;
			this.valueB = returnedElement.value;

			console.log(
				"found in memory",
				"value:",
				returnedElement.value,
				"on index",
				returnedElement.index,
				"----> B"
			);
		}

		this.getCard(this.indexB);
		this.player.addToMemory(this.indexA);
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
		console.log(this.valueA, this.valueB);
		if (this.valueA === this.valueB) {
			this.visualiser.pairCard(this.indexA);
			this.visualiser.pairCard(this.indexB);
			console.log("PAIR");
		}
	};

	getCard = (index) => {
		// this.player.addToMemory(index);
		this.visualiser.openCard(index);
	};
}

let game = new Game(board);

game.start();
