import { Board } from "./getBoard";
import { Player } from "./player";
import { getRandom } from "./utils";

let shuffler = new Board().shuffleArr; //wzialem sobie metode z Board do użycia przy playersqualifier

class PlayersQualifyier {
	constructor(...players) {
		this.playersPool = [...players];
		this.numberOfPlayersToGet = getRandom(1, 4);
		this.players = [];
	}

	getPlayers = () => {
		this.playersPoolRandomised = shuffler(this.playersPool);
		const playersToPop = 4 - this.numberOfPlayersToGet;

		for (let i = 0; i < playersToPop; i++) {
			this.playersPoolRandomised.pop();
		}

		for (let player of this.playersPoolRandomised) {
			let newPlayer = new Player(player);
			this.players.push(newPlayer);
		}
		return this.players;
	};
}

export { PlayersQualifyier };
