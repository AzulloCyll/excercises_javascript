import "core-js/stable";
import "regenerator-runtime/runtime";

import { Board } from "./getBoard";
import { Player } from "./player";
import { Visualiser } from "./visualiser";

console.log("hello world");

let darek = new Player("Darek");
let ela = new Player("Ela");

let board = new Board().shuffledCards;

console.log(darek, ela);
console.log(board);

class Game {
	constructor(board) {
		this.player = darek;
		this.board = board;
		this.visualise = new Visualiser(board).visualise;
	}

	getElement = () => {};

	openCard = (number) => {
		let cards = document.getElementsByClassName("card");
		let card = cards[number];
		// console.log(card.children[0].classList[1]);
		card.children[0].classList.add("hidden");
		console.log(card);

		let memorizedObject = {
			index: number,
			value: cards[number],
		};

		console.log(number);
		this.player.addToMemory(memorizedObject);
	};

	closeCard = (number) => {
		let cards = document.getElementsByClassName("card");
		let card = cards[number];
		card.children[0].classList.remove("hidden");
	};

	start = () => {
		this.visualise();
		this.openCard(0);
		this.openCard(5);
		console.log(this.player.memory);

		this.closeCard(0);
	};
}

let game = new Game(board);

game.start();
