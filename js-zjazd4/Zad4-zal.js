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
    // SZTUCZKA [...nie działało - bo robilo inną referencje na macierz, ale na obiekty zostawała referencja]
    let clonedHand = JSON.parse(JSON.stringify(hand));
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
  }

  // funkcja mapująca do wyniku
  remapValues(array) {
    array = array.map((item) => {
      if (item === 1) {
        return "Ace";
      } else if (item === 11) {
        return "Jack";
      } else if (item === 12) {
        return "Queen";
      } else if (item === 13) {
        return "King";
      } else {
        return item;
      }
    });
    return array;
  }

  checkForPair(hand) {
    let test = [];
    for (let i = 0; i < 4; i++) {
      if (hand[i].value === hand[i + 1].value) {
        test.push(hand[i].value);
      }
    }
    test = this.remapValues(test);
    if (test[0]) {
      console.log(`You have Pair: 2x ${test[0]}`);
    }
    return test;
  }

  checkForThree(hand) {
    hand.sort((a, b) => a.value - b.value);
    let test = [];
    for (let i = 0; i < 3; i++) {
      if (
        hand[i].value === hand[i + 1].value &&
        hand[i + 1].value === hand[i + 2].value
      ) {
        test.push(hand[i].value);
      }
    }
    test = this.remapValues(test);
    if (test[0]) {
      console.log(`You have Three: 3x ${test[0]}`);
    }
    return test;
  }

  checkForTwoPairs(hand) {
    hand.sort((a, b) => a.value - b.value);
    let test = [];
    for (let i = 0; i < 4; i++) {
      if (hand[i].value === hand[i + 1].value) {
        test.push(hand[i].value);
      }
    }
    test = this.remapValues(test);
    test = [...new Set(test)];
    if (test[0] && test[1]) {
      console.log(`You have two Pairs: 2x ${test[0]} and 2x ${test[1]}`);
    }
    return test;
  }

  checkForFullHouse(hand) {
    hand.sort((a, b) => a.value - b.value);
    let test = [];
    for (let i = 0; i < 3; i++) {
      if (
        hand[i].value === hand[i + 1].value &&
        hand[i + 1].value === hand[i + 2].value
      ) {
        test.push(hand[i].value);
        //usuwa z tablicy trójkę
        hand.slice(i, 3);
      }
    }
    // i sprawdza czy jest jeszcze para
    for (let i = 0; i < hand.length - 1; i++) {
      if (hand[i].value === hand[i + 1].value) {
        test.push(hand[i].value);
      }
    }

    test = [...new Set(test)];
    test = this.remapValues(test);
    if (test[0] && test[1]) {
      console.log(`You have Full House: 3x ${test[0]} and 2x ${test[1]}`);
    }
    return test;
  }

  checkForStraight(hand) {
    let test = [];
    let ace = [];
    // poprawka na asy - jesli jest as na pierwszej pozycji, a na drugiej nie jest 2
    // to wydziel asa do innej tablicy, aby dodać go potem na końcu tablicy test
    for (let i = 0; i < 4; i++) {
      if (hand[i].value === 1 && hand[i + 1].value !== 2) {
        ace.push(hand[i].value);
      }
    }
    for (let i = 0; i < 4; i++) {
      if (hand[i].value === hand[i + 1].value - 1) {
        test.push(hand[i].value);
      }
    }
    // dodaje ostatnią wartość tablicy (bo pętla wykonuje sie tylko 4 razy)
    test.push(hand[4].value);
    // dodanie asa z tablicy ace
    if (ace.length) {
      test.push(parseInt(ace));
    }
    if (test.length === 5) {
      console.log(`You have straight!`);
    }
  }

  checkForFlush(hand) {
    let test = [];
    hand.sort((a, b) => a.color - b.color);
    hand.forEach((card) => {
      test.push(card.color);
    });
    test = [...new Set(test)];
    console.log(test);
    if (test.length === 1) {
      console.log(`You have flush of ${test[0]}`);
    }
  }
}

const deck1 = new Deck();

let hand = [
  {
    value: 1,
    color: 2,
  },
  {
    value: 12,
    color: 2,
  },
  {
    value: 5,
    color: 2,
  },
  {
    value: 3,
    color: 2,
  },
  {
    value: 8,
    color: 2,
  },
];

deck1.showReMappedCards(hand);
console.log("--------------------");
deck1.checkForFlush(hand);
deck1.checkForFullHouse(hand);
deck1.checkForStraight(hand);
deck1.checkForThree(hand);
deck1.checkForTwoPairs(hand);
deck1.checkForPair(hand);
