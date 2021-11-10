let fs = require("fs");
let path = "C:/Users/LENOVO/Desktop/jsHomework/js-zjazd4/Data.json";

console.log(path);

//wczytuje dane z pliku
let loadedData = (function loadData(path) {
  return JSON.parse(fs.readFileSync(path, "utf-8"));
})(path);

// utworzenie drugiej struktury danych???
let data = [];

// mapowanie danych
let mapData = (function (loadedData) {
  data = loadedData.map((element) => {
    let obj = {
      index: element.index,
      // _id: element._id,
      cost: element.cost,
      company: ((element) => {
        return element.detailsOfPayent.company.toLowerCase();
      })(element),
      dateYear: ((element) => {
        let date = element.detailsOfPayent.date.split("-");
        return parseInt(date[2]);
      })(element),
      dateMonth: ((element) => {
        let date = element.detailsOfPayent.date.split("-");
        return date[1];
      })(element),
      dateDayOfTheWeek: ((element) => {
        let date = element.detailsOfPayent.date.split("-");
        let day = date[0];
        let month = date[1];
        let year = date[2];
        let dayOfMonth = new Date(month, day, year);
        return dayOfMonth.getDay();
      })(element),
    };
    return obj;
  });
  return data;
})(loadedData);

let resultObject = (function (data) {
  innerObject = {
    spentIn2014: spentIn2014(),
  };
  function spentIn2014() {
    let sumOfCost = 0;
    data.forEach((item) => {
      if (item.dateYear === 2014) {
        sumOfCost += Number(item.cost);
      }
    });
    sumOfCost = sumOfCost.toFixed(2);
    return sumOfCost;
  }
  return innerObject;
})(data);

console.log(resultObject.spentIn2014);
