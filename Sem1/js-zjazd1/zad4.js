//Choose highest and lowest values from the given array. [1,6,23,8,4,98,3,7,3,98,4,98]. One loop run.

let arr = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];

let highest = arr[0];
let lowest = arr[0];

for (let i = 0; i < arr.length; i++) {
  let value = arr[i];

  if (value >= highest) {
    highest = value;
  } else if (value <= lowest) {
    lowest = value;
  }
}

console.log("highest: ", highest);
console.log("lowest: ", lowest);
