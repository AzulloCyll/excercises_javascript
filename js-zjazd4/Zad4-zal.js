class Deck {
  constructor() {
    this.deck = [];

    const colors = [1, 2, 3, 4];
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    for (let color in colors) {
      for (let value in values) {
        let obj = {
          value: Number(value) + 1,
          color: Number(color) + 1,
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
    hand.sort((a, b) => a.value - b.value);
    console.log("Your hand: ");
    for (let card in hand) {
      console.log(`${hand[card].value} of ${hand[card].color}`);
    }
  }

  showReMappedCards(hand) {
    hand.sort((a, b) => a.value - b.value);
    while (hand[0].value === 1) {
      let ace = hand.shift();
      hand.push(ace);
    }
    let clonedHand = [...hand];
    clonedHand.map((card) => {
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
    clonedHand.map((card) => {
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
  }

  checkForPair(hand) {
    let test = [];
    for (let i = 0; i < 4; i++) {
      if (hand[i].value === hand[i + 1].value) {
        test.push(hand[i].value);
      }
    }
    if (test[0]) {
      console.log(`You have Pair: 2x ${test[0]}`);
    }
    return test;
  }

  checkForThree(hand) {
    let test = [];
    for (let i = 0; i < 3; i++) {
      if (
        hand[i].value === hand[i + 1].value &&
        hand[i + 1].value === hand[i + 2].value
      ) {
        test.push(hand[i].value);
      }
    }
    if (test[0]) {
      console.log(`You have Three: 3x ${test[0]}`);
    }
    return test;
  }

  checkForTwoPairs() {
    let test = [];
    for (let i = 0; i < 4; i++) {
      if (hand[i].value === hand[i + 1].value) {
        test.push(hand[i].value);
      }
    }
    test = [...new Set(test)];
    if (test[0] && test[1]) {
      console.log(`You have two Pairs: 2x ${test[0]} and 2x ${test[1]}`);
    }
    return test;
  }

  checkForFullHouse(hand) {
    let test = [];
    for (let i = 0; i < 3; i++) {
      if (
        hand[i].value === hand[i + 1].value &&
        hand[i + 1].value === hand[i + 2].value
      ) {
        test.push(hand[i].value);
      }
    }
    for (let i = 0; i < 4; i++) {
      if (hand[i].value === hand[i + 1].value) {
        test.push(hand[i].value);
      }
    }
    test = [...new Set(test)];
    if (test[0] && test[1]) {
      console.log(`You have Full House: 3x ${test[0]} and 2x ${test[1]}`);
    }
    return test;
  }
}

const deck1 = new Deck();

let hand = [
  {
    value: 11,
    color: 2,
  },
  {
    value: 11,
    color: 3,
  },
  {
    value: 12,
    color: 1,
  },
  {
    value: 11,
    color: 4,
  },
  {
    value: 12,
    color: 2,
  },
];

// hand = deck1.deal5Cards();

deck1.showReMappedCards(hand);
console.log("------------------");
deck1.checkForFullHouse(hand);
deck1.checkForTwoPairs(hand);
deck1.checkForThree(hand);
deck1.checkForPair(hand);
