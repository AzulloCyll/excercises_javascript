// 3) Create an array(by hand) of objects and call sum() function in context of each one of them. Sum function is to come from this object BaseObject= {x,y, sum: function (){ returnthis.x+this.y}}

let array = [
  { x: 2, y: 6 },
  { x: -3, y: 7 },
  { x: 5, y: -5 },
]

array.forEach((item) => {
  let { x, y } = item
  BaseObject = {
    x,
    y,
    sum: function () {
      return this.x + this.y
    },
  }
  console.log(BaseObject.sum())
})
