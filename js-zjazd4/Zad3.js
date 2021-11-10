let fs = require("fs")
let path = "C:/Users/dchmur/Desktop/jsHomework/js-zjazd4/Data.json"

console.log(path)

//wczytuje dane z pliku
let loadedData = (function loadData(path) {
	return JSON.parse(fs.readFileSync(path, "utf-8"))
})(path)

let data = []

let mapData = (function (loadedData) {
	data = loadedData.map((element) => {
		obj = {
			index: element.index,
			_id: element._id,
			company: ((element) => {
				return element.detailsOfPayent.company.toLowerCase()
			})(element),
		}
		return obj
	})
})(loadedData)

console.log(loadedData[0])
console.log(data[0])
