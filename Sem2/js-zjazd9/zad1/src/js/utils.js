getRandomNumber = (board) => {
	let randomNumber = Math.floor(Math.random() * board.length);
	return randomNumber;
};

getRandom = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

export { getRandomNumber, getRandom };
