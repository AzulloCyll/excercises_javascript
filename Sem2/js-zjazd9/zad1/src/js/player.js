class Player {
	constructor(name) {
		this.name = name;
		this.memory = [];
	}

	addToMemory = (index) => {
		let cards = document.getElementsByClassName('card');
		let card = cards[index];

		let memorizedObject = {
			index: index,
			value: cards[index].innerText
		};

		this.memory.push(memorizedObject);
	};

	isInMemory = (index) => {
		// checking for card in memory
	};
}

export { Player };
