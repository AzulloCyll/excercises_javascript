//Create a function that takes a number and return factorial of that number.

function factorial(number) {
  let result = 1;
  while (number > 0) {
    result = result * number--;
  }
  return result;
}

console.log(factorial(7));
