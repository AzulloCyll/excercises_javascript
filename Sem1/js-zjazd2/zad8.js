//Create a function that takes two parameters: array and number off attempts.
//Based on numberof attempts choose a random number from table that many times and return lowest one.

let arr = [1, 6, 23, 8, 4, 8, 3, 7];
let noOftimes = 5;

//wynosić funkcjonalności jako utilsy
let randomNumberGenerator = (max) => {
  return Math.floor(Math.random() * max);
};

lowestNumber = (array, noOftimes) => {
  let resultArr = [];
  while (noOftimes) {
    let randomNumber = randomNumberGenerator(arr.length);
    resultArr.push(array[randomNumber]);
    noOftimes--;
  }
  console.log(resultArr);

  // way a)
  let min = Infinity;
  resultArr.forEach((item) => {
    if (item < min) {
      min = item;
    }
  });
  return min;

  //or way b)
  //return Math.min(...resultArr)
};

console.log(lowestNumber(arr, noOftimes));
