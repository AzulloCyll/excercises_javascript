//For time of this example remove last element from the given array.
//Create a function that based on given array return new array in pattern[a, b, c, d, e] -> [a + b, c + d, e + e]

let arr = [1, 6, 23, 8, 4, 8, 3]

function returnNewArray(array) {
  let newArr = []
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0 && i < array.length - 1) {
      let sum = array[i] + array[i + 1]
      newArr.push(sum)
    } else if (i === array.length - 1) {
      let sum = array[i] * 2
      newArr.push(sum)
    }
  }
  return newArr
}

console.log(returnNewArray(arr))
