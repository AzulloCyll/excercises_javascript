//Create a function that returns sum of first and last elements of given array.

arr = [1, 6, 23, 8, 4, 8, 3, 7]

function sumOfFirstAndLastElementOfAnArray(array) {
  let sum = 0
  for (i = 0; i < array.length; i++) {
    sum = arr[0] + array[array.length - 1]
  }
  return sum
}

console.log(sumOfFirstAndLastElementOfAnArray(arr))
