Object.assign(String.prototype, {
	reverse() {
		return this.split("").reverse().join("")
	},
})

let string = "Daniel Chmur"

console.log(string.reverse())
