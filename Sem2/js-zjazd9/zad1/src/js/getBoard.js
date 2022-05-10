class Board {
	constructor() {
		this.cards = [
			"00",
			"00",
			"01",
			"01",
			"02",
			"02",
			"03",
			"03",
			"04",
			"04",
			"10",
			"10",
			"11",
			"11",
			"12",
			"12",
			"13",
			"13",
			"14",
			"14",
			"15",
			"15",
			"16",
			"16",
			"17",
			"17",
			"18",
			"18",
			"19",
			"19",
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
