// 5) Scale riddle. With 8 balls EXAM[1,2,1,1,1,1,1,1]. One of the items will be change to two.
// Indexes are to be chosen at random. Use comparing of weights only two times.

let exam = [1, 2, 1, 1, 1, 1, 1, 1]

// zabiera jeden element z tablicy
let getElement = function (array) {
	let randomIndex = Math.floor(Math.random() * array.length)
	let randomElement = array[randomIndex]
	array = array.splice(randomIndex, 1)
	return randomElement
}

// tworzy macierz z trzech zabranych elementów
function get3Elements(array) {
	let result = []
	for (i = 0; i < 3; i++) {
		result.push(getElement(array))
	}
	return result
}

// tworzy sety z kulkami
let [setA, setB, setC] = [
	[...get3Elements(exam)],
	[...get3Elements(exam)],
	[...exam],
]

console.log(setA, setB, setC)
