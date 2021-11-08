// Create a function the return one random element from given array. // use random function

let array = [1, 6, 23, 8, 4, 8, 3, 7];

function randomValue(arr) {
  let randomNumber = Math.floor(Math.random() * arr.length);
  return arr[randomNumber];
}

console.log(randomValue(array));
