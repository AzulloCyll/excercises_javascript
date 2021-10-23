//Create a function that returns the sum of all elements passed in array as parameter. Function(array)=>number

arr = [1, 6, 23, 8, 4, 8, 3, 7]

function sumOfAllElements(array) {
  let sum = 0

  for (let i = 0; i < array.length; i++) {
    sum += array[i]
  }

  return sum
}

console.log(sumOfAllElements(arr))
