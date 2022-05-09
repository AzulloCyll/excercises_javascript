class Player {
	constructor(name) {
		this.name = name;
		this.memory = [];
	}

	addToMemory = (card) => {
		this.memory.push(card);
	};

	// getfrommemory by value
	getFromMemory = (card) => {
		let found = this.memory.find((item) => {
			return item.value === card.value;
		});

		if (found) {
			return found;
		} else return false;
	};

	memory = () => {
		return this.memory;
	};
}

export { Player };
