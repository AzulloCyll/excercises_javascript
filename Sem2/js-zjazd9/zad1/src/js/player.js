class Player {
	constructor(name) {
		this.name = name;
		this.memory = [];
	}

	isInMemory = (card) => {
		let found = this.memory.filter(
			(item) => item.value === card.value && item.index === card.index
		);
		return found ? true : false;
	};

	addToMemory = (card) => {
		if (this.isInMemory(card)) {
			this.memory.push(card);
		}
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

	getFirstPairOfDuplicates = () => {
		let values = this.memory.map((item) => item.value);
		let uniqueValues = [...new Set(values)];

		for (let value of uniqueValues) {
			let found = this.memory.filter((item) => item.value === value);
			if (found.length === 2) {
				return found;
			}
		}
		return false;
	};

	memory = () => {
		return this.memory;
	};
}

export { Player };
