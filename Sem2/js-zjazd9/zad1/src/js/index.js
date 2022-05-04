import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { Board } from './getBoard';
import { Player } from './player';
import { Visualiser } from './visualiser';

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
		this.visualise = new Visualiser(board).visualise;
	}

	getElement = () => {};

	openCard = (number) => {
		let cards = document.getElementsByClassName('card');
		let card = cards[number];
		// console.log(card.children[0].classList[1]);
		card.children[0].classList.add('hidden');

		let memorizedObject = {
			index: number,
			value: cards[number].innerText
		};

		console.log(number);
		this.player.addToMemory(memorizedObject);
	};

	closeCard = (number) => {
		let cards = document.getElementsByClassName('card');
		let card = cards[number];
		card.children[0].classList.remove('hidden');
	};

	start = () => {
		this.visualise();
		let indexA, indexB;

		//move
		indexA = this.getRandomCard();
		indexB = this.getRandomCard();

		// console.log(this.player.memory);
		console.log(board[indexA]);
		console.log(board[indexB]);

		//move memorizing cards to function and get it there

		//closing cards
		this.closeCard(indexA);
		this.closeCard(indexB);

		//next move
		indexA = this.getRandomCard();
		indexB = this.getRandomCard();

		console.log(this.player.memory);

		//next move
		indexA = this.getRandomCard();
		indexB = this.getRandomCard();

		console.log(this.player.memory);

		// this.closeCard(0);
	};

	getRandomCard = () => {
		let randomNumber = Math.floor(Math.random() * this.board.length);
		this.openCard(randomNumber);
		return randomNumber;
	};
}

let game = new Game(board);

game.start();
