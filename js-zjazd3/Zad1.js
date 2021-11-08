//1) Create an iffe that returns an object with fields: function setValue(), function showValue() and function reverseValue()Calling functions either logs the value or reverse it in an object. If value was not provided yet or is empty showValue function is to return information about that. Value can be type string or number. reverseValue(): If number do (*(-1)), if string reverse it. Closure pattern.

let result = (value) =>
	(function (copiedValue) {
		copiedValue = value

		let setValue = (function () {
			return copiedValue
		})()

		let showValue = (function () {
			return copiedValue ? copiedValue : "Nie podano wartości"
		})()

		let reverseValue = (function () {
			return typeof copiedValue === "string"
				? copiedValue.split("").reverse().join("")
				: copiedValue * -1
		})()

		return {
			setValue,
			showValue,
			reverseValue,
		}
	})(value)

console.log(result())
console.log(result(500))
console.log(result("Daniel Chmur"))

// MORE

// let resultNull = result()
// console.log(resultNull)
// console.log(resultNull.setValue)
// console.log(resultNull.showValue)
// console.log(resultNull.reverseValue)

// let result500 = result(500)
// console.log(result500)
// console.log(result500.setValue)
// console.log(result500.showValue)
// console.log(result500.reverseValue)

// let resultString = result("Daniel Chmur")
// console.log(resultString)
// console.log(resultString.setValue)
// console.log(resultString.showValue)
// console.log(resultString.reverseValue)
