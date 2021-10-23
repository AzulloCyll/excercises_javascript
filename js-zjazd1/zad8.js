// Calculate average value of items at even indexes.
// Zero is not considered to be even number. [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98]

let arr = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
let sumOfNumbersAtEvenIndexes = 0;
let numberOfEvenIndexes = 0;
let average = 0;

for (let i = 1; i < arr.length; i++) {
  if (i % 2 === 0) {
    sumOfNumbersAtEvenIndexes += arr[i];
    numberOfEvenIndexes++;
  }
}

average = sumOfNumbersAtEvenIndexes / numberOfEvenIndexes;
console.log(average);
