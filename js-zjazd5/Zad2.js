Object.assign(Number.prototype, {
	reverse() {
		return this * -1
	},
})

let number = 500

console.log(number.reverse())
