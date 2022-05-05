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
		this.getCard(this.indexA);
	};

	getUniqueRandomIndex = () => {
		let random;
		do {
			random = getRandomNumber(board);
			if (this.player.isCardInMemory(random)) {
				console.log('Illegal index: ', random);
			}
		} while (this.player.isCardInMemory(random));
		return random;
	};

	getCard = (index) => {
		this.player.addToMemory(index);
		this.visualiser.openCard(index);
	};

	// test = () => {
	// 	let indexes = [];
	// 	for (let i = 0; i < 100; i++) {
	// 		let index = getRandomNumber(board);
	// 		indexes.push(index);
	// 	}
	// 	let min = Math.min(...indexes);
	// 	console.log(this.player.isCardInMemory(min));
	// 	this.getCard(min);
	// };
}

let game = new Game(board);

game.start();
