class Visualiser {
	constructor(board) {
		this.board = board;
		this.boardEl = document.getElementById("board");
		this.cards = document.getElementsByClassName("card");
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
