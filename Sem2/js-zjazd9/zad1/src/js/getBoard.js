class Board {
	constructor() {
		this.cards = [
			'00',
			'00',
			'01',
			'01',
			'02',
			'02',
			'03',
			'03',
			'04',
			'04',
			'10',
			'10',
			'11',
			'11',
			'12',
			'12',
			'13',
			'13',
			'14',
			'14',
			'20',
			'20',
			'21',
			'21',
			'22',
			'22',
			'23',
			'23',
			'24',
			'24',
			'30',
			'30',
			'31',
			'31',
			'32',
			'32',
			'33',
			'33',
			'34',
			'34',
			'40',
			'40',
			'41',
			'41',
			'42',
			'42',
			'43',
			'43',
			'44',
			'44',
			'50',
			'50',
			'51',
			'51',
			'52',
			'52',
			'53',
			'53',
			'54',
			'54'
		];

		this.shuffledCards = this.shuffleArr(this.cards);
	}

	shuffleArr = (array) => {
		let currentIndex = array.length;
		let temporaryValue;
		let randomIndex;
		const newArray = array.slice();
		// While there remains elements to shuffle...
		while (currentIndex) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
			// Swap it with the current element.
			temporaryValue = newArray[currentIndex];
			newArray[currentIndex] = newArray[randomIndex];
			newArray[randomIndex] = temporaryValue;
		}
		return newArray;
	};
}

export { Board };
