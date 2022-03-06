// Calculate average value from the given array for even numbers [1,6,23,8,4,98,3,7,3,98,4,98]

let arr = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
let numberOfEvenNumbers = 0;
let sum = 0;
let average = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    sum += arr[i];
    numberOfEvenNumbers++;
  }
}

average = sum / numberOfEvenNumbers;
console.log(average);
