//Create a function that takes given array. Then takes a random element, removes it from the array and pushes it to result arrays.
//This takes place as long as there are elements in source array.

let arr = [1, 6, 23, 8, 4, 8, 3, 7]

randomElToNewArray = (array) => {
	result = []
	while (array.length) {
		let randomNumber = Math.floor(Math.random() * array.length)
		let deletedNumber = parseInt(array.splice(randomNumber, 1))
		result.push(deletedNumber)
	}
	return result
}

console.log(randomElToNewArray(arr))
