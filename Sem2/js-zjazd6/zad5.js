// Write a code that takes a number/string and returns a list of its digits.
// So for 2342 it should return [2, 3, 4, 2].’A243b’ -> [2, 4, 3].

class ReturnNumbersInArray {
  constructor() {
    this.input;
    this.output = [];
    this.numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  }

  setInput = (input) => {
    this.input = input.toString().split("");
  };

  getData = () => {
    for (let item of this.input) {
      if (this.numbers.includes(parseInt(item))) {
        this.output.push(parseInt(item));
      }
    }
    return this.output;
  };
}

testData1 = "2342";
testData2 = "A243b";

let returnNumbers1 = new ReturnNumbersInArray();
let returnNumbers2 = new ReturnNumbersInArray();

let input1 = returnNumbers1.setInput(testData1);
let input2 = returnNumbers2.setInput(testData2);

let result1 = returnNumbers1.getData();
let result2 = returnNumbers2.getData();

console.log(result1);
console.log(result2);
