import "core-js/stable";
import "regenerator-runtime/runtime";

import { Board } from "./getBoard";
import { Player } from "./player";
import { Visualiser } from "./visualiser";

import { getRandomNumber, getRandom } from "./utils";

let board = new Board().shuffledCards;
let shuffler = new Board().shuffleArr; //wzialem sobie metode z Board do użcia przy playersqualifier

let waitingPlayers = ["radek", "ela", "daniel", "ewka"];

class PlayersQualifyier {
	constructor(...players) {
		this.playersPool = [...players];
		this.numberOfPlayersToGet = getRandom(1, 4);
		this.players = [];
	}

	getPlayers = () => {
		this.playersPoolRandomised = shuffler(this.playersPool);
		console.log(this.playersPoolRandomised);
		let playersToPop = 4 - this.numberOfPlayersToGet;

		for (let i = 0; i < playersToPop; i++) {
			this.playersPoolRandomised.pop();
		}

		for (let player of this.playersPoolRandomised) {
			let newPlayer = new Player(player);
			this.players.push(newPlayer);
		}
		console.log("Players in game:", this.playersPoolRandomised.join(", "));
		return this.players;
	};
}

//get four random Player objects
let players = new PlayersQualifyier(...waitingPlayers).getPlayers();

class Game {
	constructor(board, ...players) {
		this.player = null;
		this.currentPlayer = 0;
		this.players = [...players];
		this.board = board;
		this.visualiser = new Visualiser(board);
		this.pairedMemory = [];
	}

	init = () => {
		const button = document.getElementsByClassName("button")[0];
		button.addEventListener("click", () => {
			if (this.pairedMemory.length < this.board.length) {
				this.move();
				let isPair = this.checkPair();
				if (!isPair) {
					setTimeout(() => {
						this.visualiser.closeCard(this.cardA);
						this.visualiser.closeCard(this.cardB);
					}, 1000);
				}
			} else console.log("game over");
		});
	};

	start = () => {
		this.player = this.players[0]; // pierwszy gracz --> dopisać zmiane graczy
		console.log("FIRST:", this.player.name);

		this.visualiser.visualise();
		this.visualiser.visualisePlayers(0, ...this.players);
		this.init();
	};

	nextPlayer = (currentPlayer, numberOfPlayers) => {
		if (currentPlayer >= numberOfPlayers - 1) return 0;
		return currentPlayer + 1;
	};

	move = () => {
		// wez 1 karte, sprawdz czy byla w pamieci po wartosci
		// jesli byla, to wez druga karte z pamieci
		// jeslo nie byla, to zapamietaj ja i
		// wez 2 karte, i zapamietaj ja
		// porownaj obie

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
				card2 = this.player.getFromMemoryByValue(card1);
				this.getUniqueCard();
				card1 = this.card;
				this.player.addToMemory(card1);
			} else {
				this.player.addToMemory(card1);
				this.getUniqueCard();
				card2 = this.card;
				this.player.addToMemory(card2);
			}
		}

		this.getCard(card1);
		this.getCard(card2);

		this.cardA = card1;
		this.cardB = card2;

		//ZMIANA GRACZA
		this.currentPlayer = this.nextPlayer(
			this.currentPlayer,
			this.players.length
		);

		this.visualiser.visualisePlayers(this.currentPlayer, ...this.players);
		this.player = this.players[this.currentPlayer];
	};

	getUniqueCard = () => {
		do {
			this.index = getRandomNumber(board);
			this.value = this.board[this.index];

			this.card = {
				index: this.index,
				value: parseInt(this.value),
			};
		} while (
			this.isInPairedInMemory(this.card) ||
			this.player.getFromMemoryByIndex(this.card)
		);
	};

	checkPair = () => {
		if (this.cardA.value === this.cardB.value) {
			this.visualiser.pairCard(this.cardA);
			this.visualiser.pairCard(this.cardB);

			let A = this.player.removeFromMemory(this.cardA);
			let B = this.player.removeFromMemory(this.cardB);

			this.addToPaired(A[0]);
			this.addToPaired(B[0]);
		}
	};

	isInPairedInMemory = (card) => {
		let found = this.pairedMemory.find((item) => item.index === card.index);
		if (found) {
			return true;
		}
	};

	addToPaired = (card) => {
		this.pairedMemory.push(card);
		console.log(this.pairedMemory);
	};

	getCard = (index) => {
		this.visualiser.openCard(index);
	};
}

let game = new Game(board, ...players);
game.start();
