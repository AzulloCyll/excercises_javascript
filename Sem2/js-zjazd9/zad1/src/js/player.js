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

	isCardInMemory = (index) => {
		let found = this.memory.filter((item) => item.index === index);
		if (found.length) {
			return true;
		} else return false;
	};

	memory = () => {
		return this.memory;
	};
}

export { Player };
