//Create a function that take two numbers and return the object with 4 fields. Result on 4 basic arithmetic operations.

let basicOpr = (a, b) => {
  let sum = (a, b) => a + b;
  let mul = (a, b) => a * b;
  let sub = (a, b) => a - b;
  let div = (a, b) => a / b;
  return {
    sum: sum(a, b),
    mul: mul(a, b),
    sub: sub(a, b),
    div: div(a, b),
  };
};

console.log(basicOpr(2, 3));
