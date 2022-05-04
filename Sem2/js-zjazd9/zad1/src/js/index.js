import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { Board } from './getBoard';
import { Player } from './player';
import { Visualiser } from './visualiser';

import { getRandomNumber } from './utils';

console.log('hello world');

let darek = new Player('Darek');
let ela = new Player('Ela');

let board = new Board().cards; //change this

console.log(darek, ela);
console.log(board);

class Game {
	constructor(board) {
		this.player = darek;
		this.board = board;
		this.visualiser = new Visualiser(board);
	}

	init = () => {
		const button = document.getElementsByClassName('button')[0];
		button.addEventListener('click', () => {
			this.move();
		});
	};

	start = () => {
		this.visualiser.visualise();
		this.init();
	};

	move = () => {
		this.indexA = this.getUniqueRandomIndex();

		if (this.indexA) {
			this.getCard(this.indexA);

			this.indexB = this.getUniqueRandomIndex();
			if (this.indexB) {
				this.getCard(this.indexB);
			}
		} else {
			this.move();
			console.log('bummer');
		}

		if (
			parseInt(this.board[this.indexA]) ===
			parseInt(this.board[this.indexB])
		) {
			console.log(this.board[this.indexA]);
			console.log(this.board[this.indexB]);

			console.log('same');
			this.visualiser.pairCard(this.indexA);
			this.visualiser.pairCard(this.indexB);
		} else {
			// this.visualiser.closeCard(this.indexA);
			// this.visualiser.closeCard(this.indexB);
			console.log(this.board[this.indexA], this.board[this.indexB]);
		}

		console.log(this.player.memory);
	};

	getUniqueRandomIndex = () => {
		let random = getRandomNumber(board);

		if (!this.player.isCardInMemory(random)) {
			return random;
		} else this.getUniqueRandomIndex();
	};

	getCard = (index) => {
		this.player.addToMemory(index);
		this.visualiser.openCard(index);
	};
}

let game = new Game(board);

game.start();
