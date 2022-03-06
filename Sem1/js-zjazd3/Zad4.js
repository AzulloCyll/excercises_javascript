// Given an array of objects, for each object. Call operation() function in context of next object. If object is last, got back to start of the array for operation function. In loop;

const givenArray = [
  {
    x: 1,
    y: "object one value",
    operation: () => "object one prefix" + this.x + this.y,
  },
  {
    x: 2,
    y: "object two value",
    operation: () => "object two prefix" + this.x + this.y,
  },
  {
    x: 3,
    y: "object three value",
    operation: function () {
      return "object three prefix" + this.x + this.y;
    },
  },
];

for (let i = 0; i < givenArray.length; i++) {
  if (i === givenArray.length - 1) {
    console.log(givenArray[0].operation.call(givenArray[0]));
  } else {
    console.log(givenArray[i + 1].operation.call(givenArray[i + 1]));
  }
}
