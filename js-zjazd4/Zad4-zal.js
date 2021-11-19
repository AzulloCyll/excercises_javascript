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
    // SZTUCZKA [...spread nie działało - bo robilo inną referencje na macierz, ale na obiekty zostawała referencja]
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

  // funkcja mapująca values do wyniku
  remapValues(array) {
    array = array.map((item) => {
      if (item === 1) {
        return "Ace";
      } else if (item === 2) {
        return "Jack";
      } else if (item === 3) {
        return "Queen";
      } else if (item === 4) {
        return "King";
      } else {
        return item;
      }
    });
    return array;
  }

  // funkcja mapująca colors do wyniku
  remapColors(array) {
    array = array.map((item) => {
      if (item === 1) {
        return "Clubs";
      } else if (item === 2) {
        return "Diamonds";
      } else if (item === 3) {
        return "Spades";
      } else if (item === 4) {
        return "Hearts";
      }
    });
    return array;
  }
  // funkcja mapująca values do wyniku
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
      return true;
    }
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
      return true;
    }
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
      return true;
    }
  }

  checkForFullHouse(hand) {
    let test = [];
    hand.sort((a, b) => {
      a.value - b.value;
    });
    if (hand[0].value === hand[1].value && hand[1].value === hand[2].value && hand[3].value === hand[4].value) {
      test.push(hand[0].value);
      test.push(hand[3].value);
    } else if (hand[0].value === hand[1].value && hand[2].value === hand[3].value && hand[3].value === hand[4].value) {
      test.push(hand[2].value);
      test.push(hand[0].value);
    }
    test = this.remapValues(test);
    if (test.length === 2) {
      console.log(`You have Full House: 3x ${test[0]} and 2x ${test[1]}`);
      return true;
    }

  }

  checkForStraight(hand) {
    let test = [];
    let ace = [];
    hand.sort((a, b) => a.value - b.value);
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
      console.log(`You have Straight!`);
      return true;
    }
  }

  checkForFlush(hand) {
    let test = [];
    hand.sort((a, b) => a.color - b.color);
    hand.forEach((card) => {
      test.push(card.color);
    });
    test = [...new Set(test)];
    test = this.remapColors(test);
    if (test.length === 1) {
      console.log(`You have Flush of ${test[0]}`);
      return true;
    }
  }

  checkForFour(hand) {
    let test = [];
    hand.sort((a, b) => a.value - b.value);
    for (let i = 0; i < 2; i++) {
      if (
        hand[i].value === hand[i + 1].value &&
        hand[i + 1].value === hand[i + 2].value &&
        hand[i + 2].value === hand[i + 3].value
      ) {
        test.push(hand[i].value);
      }
    }
    test = this.remapValues(test);
    if (test[0]) {
      console.log(`You have Quads: 4x ${test[0]}`);
      return true;
    }
  }

  checkForStraightFlush(hand) {
    let test = [];
    let test1 = [];
    hand.sort((a, b) => a.value - b.value);
    for (let i = 0; i < 4; i++) {
      if (hand[i].value === hand[i + 1].value - 1) {
        test.push(hand[i].value);
      }
    }
    // dodaje ostatnią wartość tablicy (bo pętla wykonuje sie tylko 4 razy)
    test.push(hand[4].value);

    hand.sort((a, b) => a.color - b.color);
    hand.forEach((card) => {
      test1.push(card.color);
    });
    test1 = [...new Set(test1)];
    test1 = this.remapColors(test1);
    if (test.length === 5 && test1.length === 1) {
      console.log(`You have Straight Flush of ${test1[0]}!`);
      return true;
    }
  }

  checkForRoyalFlush(hand) {
    let test = [];
    let test1 = [];
    let ace = [];
    hand.sort((a, b) => a.value - b.value);
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

    hand.sort((a, b) => a.color - b.color);
    hand.forEach((card) => {
      test1.push(card.color);
    });
    test1 = [...new Set(test1)];
    test1 = this.remapColors(test1);
    if ((test.length === 5 && test1.length === 1) && test[4] === 1) {
      console.log(`You have Royal Flush of ${test1[0]}!`);
      return true;
    }
  }

  checkForHighCard(hand) {
    let test = [];
    let test1 = [];
    hand.sort((a, b) => { a.value - b.value; });
    // przerzucam asa na koniec tablicy
    if (hand[0].value === 1) {
      let ace = hand.shift();
      hand.push(ace);
    }
    test.push(hand[4].value);
    hand.sort((a, b) => { a.color - b.color; });
    test1.push(hand[4].color);
    test = this.remapValues(test);
    test1 = this.remapColors(test1);
    console.log(`You have High Card: ${test[0]} of ${test1[0]}`);
  }
}

const deck1 = new Deck();

let hand = [
  {
    value: 1,
    color: 1,
  },
  {
    value: 3,
    color: 2,
  },
  {
    value: 3,
    color: 3,
  },
  {
    value: 3,
    color: 2,
  },
  {
<<<<<<< HEAD
    value: 1,
    color: 4,
=======
    value: 8,
    color: 1,
>>>>>>> 029d1d891f430a77a4e4741ec47a2efbda48bac5
  },
];

// let hand = deck1.deal5Cards();

deck1.showReMappedCards(hand);
console.log("--------------------");

if (deck1.checkForRoyalFlush(hand)) { return; }
else if (deck1.checkForStraightFlush(hand)) { return; }
else if (deck1.checkForFour(hand)) { return; }
else if (deck1.checkForFullHouse(hand)) { return; }
else if (deck1.checkForFlush(hand)) { return; }
else if (deck1.checkForStraight(hand)) { return; }
else if (deck1.checkForThree(hand)) { return; }
else if (deck1.checkForTwoPairs(hand)) { return; }
else if (deck1.checkForPair(hand)) { return; }
else if (deck1.checkForHighCard(hand)) { return; }

/// flush nie działa



