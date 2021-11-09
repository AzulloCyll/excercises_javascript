String.prototype.reverse = function () {
	return this.split("").reverse().join("")
}

let string = "Daniel Chmur"

console.log(string.reverse())
