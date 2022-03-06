// With a given start value of 0.
// Iterate the array and add even items and subtract odd ones. [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98]

let arr = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
let result = 0;

let i = 0;
while (i < arr.length) {
  if (i % 2 === 0) {
    result += arr[i];
    i++;
  } else {
    result -= arr[i];
    i++;
  }
}

console.log(result);
