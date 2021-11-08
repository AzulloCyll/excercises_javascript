//Create a function that on given array will perform operation of adding or subtracting elements.
//Operation is to be chosen at random. And return a result.[a, b, c, d] => (((a + -b) + -c) + -d)

let arr = [1, 6, 23, 8, 4, 8, 3, 7];

const addOrSubstractRandomly = (array) => {
  let result = array[0];
  let string = array[0];
  for (let i = 1; i < array.length; i++) {
    randomNumber = Math.floor(Math.random() * 2);
    if (randomNumber === 1) {
      result += arr[i];
      string += " + " + arr[i];
    } else {
      result -= arr[i];
      string += " - " + arr[i];
    }
  }
  console.log(string);
  return result;
};

console.log(addOrSubstractRandomly(arr));
