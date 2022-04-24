

const leftMoves = [];

for (let i = 1; i < 8; i++) {
	moves.push(
		{ x: -i, y: 0 },
		{ x: i, y: 0 },
		{ x: 0, y: -i },
		{ x: 0, y: i },
		{ x: -i, y: -i },
		{ x: -i, y: i },
		{ x: i, y: -i },
		{ x: i, y: i }
	);
}

console.log(moves);
