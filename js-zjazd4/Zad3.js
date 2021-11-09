let file = require("./Data.json")

function getJSON(file) {
	return JSON.stringify(file)
}

console.log(getJSON(file))
