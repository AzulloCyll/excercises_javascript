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
			this.move();
			// this.checkPair();
			console.log(this.player.memory);
		});
	};

	start = () => {
		this.visualiser.visualise();
		this.init();
	};

	move = () => {
		// wez 1 karte, sprawdz czy byla w pamieci po wartosci
		// jesli byla, to wez druga karte z pamieci
		// jeslo nie byla, to zapamietaj ja i
		// wez 2 karte, i zapamietaj ja
		// porownaj obi

		let card1, card2;

		this.getUniqueCard();
		card1 = this.card;
		x;

		if (this.player.getFromMemory(card1)) {
			card2 = this.player.getFromMemory(card1);
		} else {
			this.getUniqueCard();
			card2 = this.card;

			this.player.addToMemory(card1);
			this.player.addToMemory(card2);
		}

		this.getCard(card1);
		this.getCard(card2);
	};

	getUniqueCard = () => {
		do {
			this.index = getRandomNumber(board);
			this.value = this.board[this.index];
			this.card = {
				index: this.index,
				value: parseInt(this.value),
			};
			if (this.player.getFromMemory(this.card)) {
				console.log("found in memory");
			}
		} while (this.player.getFromMemory(this.card));
	};

	//poprawic
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
