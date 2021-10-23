//Choose all the indexes on the highest value from the given array. [1,6,23,8,4,98,3,7,3,98,4,98]

let arr = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
let result = [];

let highest = arr[0];

let i = 0;
while (i < arr.length) {
  if (highest <= arr[i]) {
    highest = arr[i];
  }
  i++;
}

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === highest) {
    result.push(i);
    continue;
  }
}

console.log("Highest values are with indexes: ", result);
