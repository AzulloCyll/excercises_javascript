class Player {
	constructor(name) {
		this.name = name;
		this.memory = [];
	}

	addToMemory = (index) => {
		this.memory.push(index);
	};
}

export { Player };
