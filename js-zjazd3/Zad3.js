// 3) Create an array(by hand) of objects and call sum() function in context of each one of them. Sum function is to come from this object BaseObject = {x, y, sum: function () { return this.x + this.y }}

let x, y
let array = [
  { x: 2, y: 6 },
  { x: -3, y: 7 },
  { x: 5, y: -5 },
]

BaseObject = {
  x,
  y,
  sum: function () {
    return this.x + this.y
  },
}

let getOneObject = function (array, index) {
  let { x, y } = array[index]
  return {
    x,
    y,
  }
}

let showSum = (function (array) {
  for (let i = 0; i < array.length; i++) {
    let obj = getOneObject(array, i)
    console.log(BaseObject.sum.call(obj))
  }
})(array)
