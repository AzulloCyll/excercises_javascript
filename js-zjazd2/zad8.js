//Create a function that takes two parameters: array and number off attempts.
//Based on numberof attempts choose a random number from table that many times and return lowest one.

let arr = [1, 6, 23, 8, 4, 8, 3, 7]
noOftimes = 4

lowestNumber = (array, noOftimes) => {
  let resultArr = []
  while (noOftimes) {
    let randomNumber = Math.floor(Math.random() * arr.length)
    resultArr.push(array[randomNumber])
    noOftimes--
  }
  console.log(resultArr)

  // way a)
  let max = resultArr[0]
  resultArr.forEach((item) => {
    if (item > max) {
      max = item
    }
  })
  resultArr.reduce
  return max

  //or way b)
  //return Math.max(...resultArr)
}

console.log()
console.log(lowestNumber(arr, noOftimes))
