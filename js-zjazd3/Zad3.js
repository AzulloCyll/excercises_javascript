// 3) Create an array(by hand) of objects and call sum() function in context of each one of them. Sum function is to come from this object BaseObject = {x, y, sum: function () { return this.x + this.y }}

let array = [
  { x: 2, y: 6 },
  { x: -3, y: 7 },
  { x: 5, y: -5 },
]

let x, y
let [obj1, obj2, obj3] = array

BaseObject = {
  x,
  y,
  sum: function () {
    return this.x + this.y
  },
}

console.log(BaseObject.sum.call(obj1))
console.log(BaseObject.sum.call(obj2))
console.log(BaseObject.sum.call(obj3))
