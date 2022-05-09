class Player {
	constructor(name) {
		this.name = name;
		this.memory = [];
	}

	addToMemory = (card) => {
		this.memory.push(card);
	};

	getFromMemoryByValue = (card) => {
		let found = this.memory.find((item) => {
			return item.value === card.value;
		});

		if (found) {
			return found;
		} else return false;
	};

	getFromMemoryByIndex = (card) => {
		let found = this.memory.find((item) => {
			return item.index === card.index;
		});

		if (found) {
			return found;
		} else return false;
	};

	searchMemoryForDuplicates = () => {
		let duplicates;
		for (let card of this.memory) {
			duplicates = this.memory.filter((item) => card.value === item.value);
		}

		if (duplicates && duplicates.length > 1) return duplicates;
	};

	memory = () => {
		return this.memory;
	};
}

export { Player };
