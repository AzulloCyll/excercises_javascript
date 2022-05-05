class Player {
	constructor(name) {
		this.name = name;
		this.memory = [];
	}

	addToMemory = (index) => {
		let cards = document.getElementsByClassName("card");

		let memorizedObject = {
			index: index,
			value: cards[index].innerText,
		};

		this.memory.push(memorizedObject);
	};

	isIndexRemembered = (index) => {
		let found = this.memory.find((item) => item.index === index);
		if (found) {
			return true;
		} else return false;
	};

	getElementFromMemoryByValue = (value, index) => {
		console.log(index);
		let found = this.memory.filter(
			(item) =>
				parseInt(item.value) === parseInt(value) &&
				parseInt(item.index) !== parseInt(index)
		);
		console.log(found);
		if (found) {
			return found.index;
		} else return false;
	};

	memory = () => {
		return this.memory;
	};
}

export { Player };
