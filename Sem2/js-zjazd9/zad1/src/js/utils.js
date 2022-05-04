getRandomNumber = (board) => {
	let randomNumber = Math.floor(Math.random() * board.length);
	return randomNumber;
};

export { getRandomNumber };
