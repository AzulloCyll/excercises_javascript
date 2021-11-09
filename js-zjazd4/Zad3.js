let fs = require("fs");
let path = "C:/Users/LENOVO/Desktop/jsHomework/js-zjazd4/Data.json";

console.log(path);

//wczytuje dane z pliku
let loadedData = (function loadedData(path) {
  let data = fs.readFileSync(path, "utf-8");
  return JSON.parse(data);
})(path);

console.log(loadedData);
