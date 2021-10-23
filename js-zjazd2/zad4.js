//Create a function that returns given array in reverse order. // no build in functions :)

arr = [1, 6, 23, 8, 4, 8, 3, 7]

function arrayReverse(array) {
  let newArr = []
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(array[i])
  }
  return newArr
}

console.log(arrayReverse(arr))
