import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { Board } from './getBoard';
import { Player } from './player';
import { Visualiser } from './visualiser';

import { getRandomNumber } from './utils';

console.log('hello world');

let darek = new Player('Darek');
let ela = new Player('Ela');

let board = new Board().shuffledCards;

console.log(darek, ela);
console.log(board);

class Game {
	constructor(board) {
		this.player = darek;
		this.board = board;
		this.visualiser = new Visualiser(board);
	}

	getElement = () => {};

	start = () => {
		this.visualiser.visualise();
		let indexA, indexB;

		//move
		indexA = getRandomNumber(this.board);
		indexB = getRandomNumber(this.board);

		this.visualiser.openCard(indexA);
		this.visualiser.openCard(indexB);

		this.player.addToMemory(indexB);
		this.player.addToMemory(indexA);

		console.log(this.player.memory);

		console.log('indexA', indexA);
		console.log('indexB', indexB);

		console.log('board[indexA]', board[indexA]);
		console.log('board[indexA]', board[indexB]);

		//move memorizing cards to function and get it there

		//closing cards
		// this.visualiser.closeCard(indexA);
		// this.visualiser.closeCard(indexB);

		// //next move
		// indexA = this.getRandomNumber();
		// indexB = this.getRandomNumber();

		// this.visualiser.openCard(indexA);
		// this.visualiser.openCard(indexB);

		// this.player.addToMemory(indexB);
		// this.player.addToMemory(indexA);

		// this.closeCard(0);
	};
}

let game = new Game(board);

game.start();
