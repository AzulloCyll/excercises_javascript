class Deck {
    constructor() {
        this.deck = [];

        const colors = [1, 2, 3, 4];
        const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

        for (let color in colors) {
            for (let value in values) {
                let obj = {
                    value: Number(value) + 1,
                    color: Number(color) + 1
                };
                this.deck.push(obj);
            }
        }

    }
    dealCard() {
        let randomIndex = Math.floor(Math.random() * this.deck.length);
        return this.deck.splice(randomIndex, 1)[0];
    }
    deal5Cards() {
        let array = [];
        for (let i = 0; i < 5; i++) {
            array.push(this.dealCard());
        }
        return array;
    }
    showHand(hand) {
        console.log("Your hand: ");
        for (let card in hand) {
            console.log(`${hand[card].value} of ${hand[card].color}`);
        }
    }
    showReMappedCards(hand) {
        let clonedHand = [...hand];
        clonedHand.map(card => {
            if (card.color === 1) {
                card.color = "Clubs";
            } else if (card.color === 2) {
                card.color = "Diamonds";
            } else if (card.color === 3) {
                card.color = "Spades";
            } else if (card.color === 4) {
                card.color = "Hearts";
            }
        });
        clonedHand.map(card => {
            if (card.value === 1) {
                card.value = "Ace";
            } else if (card.value === 11) {
                card.value = "Jack";
            } else if (card.value === 12) {
                card.value = "Queen";
            } else if (card.value === 13) {
                card.value = "King";
            }
        });
        this.showHand(clonedHand);
        return clonedHand;
    };
}

const deck1 = new Deck();
let hand = deck1.deal5Cards();
deck1.showHand(hand);
console.log(deck1.checkForPair(hand));





