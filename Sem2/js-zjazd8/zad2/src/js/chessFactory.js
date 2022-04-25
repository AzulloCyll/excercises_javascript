const chessFactory = () => {
	class King {
		constructor() {
			this.name = "king";
			this.moves = [
				{ x: 0, y: 1 },
				{ x: 1, y: 1 },
				{ x: 1, y: 0 },
				{ x: 1, y: -1 },
				{ x: 0, y: -1 },
				{ x: -1, y: -1 },
				{ x: -1, y: 0 },
				{ x: -1, y: 1 },
			];
		}
	}

	class Queen {
		constructor() {
			this.name = "queen";
			this.moves = this.queenMoves();
		}

		queenMoves = () => {
			const moves = [];
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
			return moves;
		};
	}

	class Bishop {
		constructor() {
			this.name = "bishop";
			this.moves = this.bishopMoves();
		}

		bishopMoves = () => {
			const moves = [];

			for (let i = 1; i < 8; i++) {
				moves.push(
					{ x: -i, y: -i },
					{ x: -i, y: i },
					{ x: i, y: -i },
					{ x: i, y: i }
				);
			}
			return moves;
		};
	}

	class Knight {
		constructor() {
			this.name = "knight";
			this.moves = [
				{ x: 2, y: 1 },
				{ x: 2, y: -1 },
				{ x: -2, y: 1 },
				{ x: -2, y: -1 },
				{ x: 1, y: 2 },
				{ x: 1, y: -2 },
				{ x: -1, y: 2 },
				{ x: -1, y: -2 },
			];
		}
	}

	class Rook {
		constructor() {
			this.name = "rook";
			this.moves = this.rookMoves();
		}

		rookMoves = () => {
			const moves = [];

			for (let i = 1; i < 8; i++) {
				moves.push(
					{ x: -i, y: 0 },
					{ x: i, y: 0 },
					{ x: 0, y: -i },
					{ x: 0, y: i }
				);
			}
			return moves;
		};
	}

	return {
		getCheck: (type) => {
			if (type === "king") {
				return new King();
			}
			if (type === "queen") {
				return new Queen();
			}
			if (type === "bishop") {
				return new Bishop();
			}
			if (type === "knight") {
				return new Knight();
			}
			if (type === "rook") {
				return new Rook();
			}
		},
	};
};

export { chessFactory };
