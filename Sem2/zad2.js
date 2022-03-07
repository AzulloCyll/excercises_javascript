// Write a guessing game where the user has to guess a secret number. After every guess the
// program tells the user whether their number was too large or too small. At the end the number
// of tries needed should be printed. It counts only as one try if they input the same number
// multiple times consecutively. Range 1-100.

class Host {
  constructor() {
    this.secretNumber;
    this.guesses = [];
  }

  setNumber = (number) => {
    this.secretNumber = number;
  };

  answer = (number) => {
    if (number === this.secretNumber) {
      this.guesses.push(number);
      console.log(
        `Correct ${number} is the number! You guessed it with ${this.guesses.length} try(ies)!`
      );
    } else if (number >= this.secretNumber) {
      if (!this.guesses.includes(number)) {
        this.guesses.push(number);
        console.log(`Wrong! Your number is too high`);
      } else console.log("You asked for that number yet");
    } else if (number <= this.secretNumber) {
      if (!this.guesses.includes(number)) {
        this.guesses.push(number);
        console.log(`Wrong! Your number is too low`);
      } else console.log("You asked for that number yet!");
    }
  };
}

const host = new Host();
host.setNumber(26); // number to guess

host.answer(50);
host.answer(25);
host.answer(42);
host.answer(42);
host.answer(26);
