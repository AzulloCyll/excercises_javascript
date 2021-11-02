//Create a function that returns sum of first and last elements of given array.

arr = [1, 6, 23, 8, 4, 8, 3, 7]

function sumOfFirstAndLastElementOfAnArray(array) {
  return array[0] + array[array.length - 1]
}

console.log(sumOfFirstAndLastElementOfAnArray(arr))
