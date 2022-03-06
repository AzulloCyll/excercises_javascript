// Calculate the sum of the odd items [1,6,23,8,4,98,3,7,3,98,4,98]

let arr = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  let value = arr[i];
  if (value % 2 != 0) {
    sum += arr[i];
  }
}

console.log(sum);
