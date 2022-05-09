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
			this.checkPair();

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

		// sprawdzic czy nie ma dwoch takich samych elementów
		if (this.player.getFirstPairOfDuplicates()) {
			let duplicates = this.player.getFirstPairOfDuplicates();

			card1 = duplicates[0];
			card2 = duplicates[1];
		} else {
			this.getUniqueCard(); //
			card1 = this.card;

			if (this.player.getFromMemoryByValue(card1)) {
				console.log("found");
				card2 = this.player.getFromMemoryByValue(card1);
				this.player.addToMemory(card1);
				this.player.addToMemory(card2);
			} else {
				this.getUniqueCard();
				card2 = this.card;

				this.player.addToMemory(card1);
				this.player.addToMemory(card2);
			}
		}

		this.getCard(card1);
		this.getCard(card2);

		this.cardA = card1;
		this.cardB = card2;
	};

	// ta metoda musi byc zmieniona
	getUniqueCard = () => {
		do {
			this.index = getRandomNumber(board);
			this.value = this.board[this.index];
			this.card = {
				index: this.index,
				value: parseInt(this.value),
			};

			if (this.player.getFromMemoryByIndex(this.card)) {
				console.log("found in memory");
			}
		} while (this.player.getFromMemoryByIndex(this.card));
	};

	checkPair = () => {
		if (this.cardA.value === this.cardB.value) {
			this.visualiser.pairCard(this.cardA);
			this.visualiser.pairCard(this.cardB);
			return true;
		}
	};

	getCard = (index) => {
		// this.player.addToMemory(index);
		this.visualiser.openCard(index);
	};
}

let game = new Game(board);

game.start();
