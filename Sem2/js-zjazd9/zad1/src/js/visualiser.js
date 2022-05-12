class Visualiser {
	constructor(board) {
		this.board = board;
		this.boardEl = document.getElementById("board");
		this.cards = document.getElementsByClassName("card");

		this.playerActive = 1;
	}

	visualise = () => {
		for (let item of this.board) {
			let cardEl = document.createElement("div");
			let cover = document.createElement("div");
			cover.classList.add("cover");
			cardEl.classList.add("card");
			cardEl.classList.add(item);
			cardEl.innerHTML = item;
			cardEl.append(cover);
			this.boardEl.append(cardEl);
		}
	};

	visualisePlayers = (activePlayer, ...players) => {
		this.resetPlayers();
		const playersElement = document.getElementsByClassName("players")[0];

		for (let player of players) {

			const div = document.createElement("div");
			const p = document.createElement("p");

			div.classList.add("playerWrapper");
			p.classList.add("player");
			p.innerHTML = `${player.name}: ${player.score}`;
			div.append(p);

			playersElement.append(div);
		}
	};

	resetPlayers = () => {
		const players = document.getElementsByClassName("players")[0];

		players.innerHTML = "";
	};

	setPlayerActive = (number) => {
		let players = document.getElementsByClassName("player");
		players[number].classList.add("active");
	};

	openCard = (card) => {
		this.cards[card.index].children[0].classList.add("hidden");
	};

	closeCard = (card) => {
		this.cards[card.index].children[0].classList.remove("hidden");
	};

	pairCard = (card) => {
		this.cards[card.index].children[0].classList.remove("hidden");
		this.cards[card.index].children[0].classList.add("pair");
	};
}

export { Visualiser };
