let fs = require("fs");
let path = "C:/Users/LENOVO/Desktop/jsHomework/js-zjazd4/Data.json";

//wczytuje dane z pliku
let loadedData = (function loadData(path) {
  return JSON.parse(fs.readFileSync(path, "utf-8"));
})(path);

// utworzenie drugiej struktury danych
function Transaction(index, cost, detailsOfPayent) {
  let { Type, company, date } = detailsOfPayent;
  this.index = index;
  this.cost = cost;
  this.type = Type;
  this.company =
    company.split("")[0] + company.toLowerCase().split("").slice(1).join("");
  this.date = date;
  this.dateYear = (function (date) {
    let currentYear = date.split("-")[2];
    return parseInt(currentYear);
  })(date);
  this.dateMonth = (function (date) {
    let currentYear = date.split("-")[1];
    return parseInt(currentYear);
  })(date);
}

let data = loadedData.map((t) => {
  return new Transaction(
    t.index,
    t.cost,
    t.detailsOfPayent,
    t.dateYear,
    t.dateMonth
  );
});

console.log(data[5]);
console.log(data[5].date);
console.log(data[5].dateYear);
console.log(data[5].dateMonth);

// // mapowanie danych
// let mapData = (function (loadedData) {
//   data = loadedData.map((element) => {
//     let obj = {
//       index: element.index,
//       // _id: element._id,
//       cost: element.cost,
//       company: ((element) => {
//         return element.detailsOfPayent.company.toLowerCase();
//       })(element),
//       dateYear: ((element) => {
//         let date = element.detailsOfPayent.date.split("-");
//         return parseInt(date[2]);
//       })(element),
//       dateMonth: ((element) => {
//         let date = element.detailsOfPayent.date.split("-");
//         return date[1];
//       })(element),
//       dateDayOfTheWeek: ((element) => {
//         let date = element.detailsOfPayent.date.split("-");
//         let day = date[0];
//         let month = date[1];
//         let year = date[2];
//         let dateResult = new Date(year, month - 1, day);
//         // 0 is sunday
//         return dateResult.getDay();
//       })(element),
//     };
//     return obj;
//   });
//   return data;
// })(loadedData);

let resultObject = (function (data) {
  innerObject = {
    spentIn2014: spentIn2014(),
    companiesEarns: companiesEarns(),
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
  function companiesEarns() {
    let companies = [];
    let earnings = [];
    data.forEach((item) => {
      companies.push(item.company);
    });
    companies = [...new Set(companies)];

    let companyEarnings = 0;
    companies.forEach((company) => {
      data.forEach((item) => {
        if (item.company === company) {
          companyEarnings += Number(item.cost);
        }
      });
      earnings.push(companyEarnings.toFixed(2));
    });

    //tworzę obiekt z macierzy companies i earnings
    let result = {};
    companies.forEach(function (key, i) {
      result[key] = earnings[i];
    });

    return result;
  }
  return innerObject;
})(data);

console.log("Wydatki w roku 2014:", resultObject.spentIn2014);
console.log("Poszczególne firmy zarobiły:", resultObject.companiesEarns);
