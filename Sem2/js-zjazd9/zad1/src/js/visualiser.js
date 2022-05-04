class Visualiser {
	constructor(board) {
		this.board = board;
		this.boardEl = document.getElementById("board");
	}

	visualise = () => {
		this.deleteFrame();
		this.newFrame();
	};

	newFrame = () => {
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

	deleteFrame = () => {
		this.boardEl.innerHTML = "";
	};
}

export { Visualiser };
