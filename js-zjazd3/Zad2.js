// 2) Create four function definitions. One for every basic math operations and taking two input parameters. Create one more function. This function is to return calculation object. This object is to have parameters object field that holds two operation parameters inside(xand y)and a function field that points to a function with math operation(defined at the beginning). AfunctionsetOperation() that sets the field from previous sentenceand a calculate()function that makes calculation and returns its value.

let operations = {
  sum: (x, y) => x + y,
  sub: (x, y) => x - y,
  mul: (x, y) => x * y,
  div: (x, y) => x / y,
}

let calculation = (function (x, y) {
  let innerObject = {
    param: {
      x,
      y,
    },
    mathOperation: null,
    setOperation,
    calculate,
  }

  function setOperation(mathOperation) {
    this.mathOperation = mathOperation
  }

  function calculate() {
    return this.mathOperation(this.param.x, this.param.y)
  }

  return innerObject
})(6, 2)

calculation.setOperation(operations.div)
console.log(calculation.calculate())
