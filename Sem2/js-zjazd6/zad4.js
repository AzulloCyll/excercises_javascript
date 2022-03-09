// Write a class that prints the list of the first n Fibonacci numbers.
// The first two Fibonacci numbers are 1 and 1.
// The n + 1-st Fibonacci number can be computed by adding the n-th and the n-1th Fibonacci number.
// The first few are therefore 1, 1, 1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8.

class Fibonacci {
  constructor() {
    this.n = 1;
    this.nMinusOne = 1;
    this.fibonacci;
  }

  countNextElement() {
    let nextElement = this.n + this.nMinusOne;
    this.n = this.nMinusOne;
    this.nMinusOne = nextElement;
    return nextElement;
  }

  countFibonacci(k) {
    let fibonacci = [1, 1];
    for (let i = 0; i < k; i++) {
      fibonacci.push(this.countNextElement());
    }
    this.fibonacci = fibonacci;
  }

  showFibonacci(k) {
    this.countFibonacci(k);
    let string = "";
    for (let item of this.fibonacci) {
      string += item + " ";
    }
    console.log(string);
  }
}

const fib = new Fibonacci();

fib.showFibonacci(10);
