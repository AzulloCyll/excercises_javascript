//Create a function that based on given array returns new array in pattern [a,b,c,d,e,f] -> [a+b, c+d, e+f]
//[1, 3, 4, 1, 0, 3] => [4, 5, 3] function(array)=> array

let arr = [1, 6, 23, 8, 4, 8, 3, 7]

function returnNewArray(array) {
  let newArr = []
  for (let i = 0; i < array.length; i += 2) {
    let sum = 0
    sum = array[i] + array[i + 1]
    newArr.push(sum)
  }
  return newArr
}

console.log(returnNewArray(arr))
