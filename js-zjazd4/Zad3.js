//wczytuje dane z pliku
let loadedData = require("./Data.json");

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
  this.dateDayOfTheWeek = (function (date) {
    let currentDate = date.split("-");
    let day = currentDate[0];
    let month = currentDate[1];
    let year = currentDate[2];
    let dateResult = new Date(year, month - 1, day);
    // 0 is Sunday
    return dateResult.getDay();
  })(date);
}

let data = loadedData.map((t) => {
  return new Transaction(
    t.index,
    t.cost,
    t.detailsOfPayent,
    t.company,
    t.type,
    t.dateYear,
    t.dateMonth,
    t.dateDayOfTheWeek
  );
});

let resultObject = (function (data) {
  innerObject = {
    spentIn2014: spentIn2014(),
    companiesEarns: companiesEarns(),
    mostSpendingType: mostSpendingType(),
    spendingsInMonth: spendingsInMonth(),
    spendingsInEachDayofTheWeek: spendingsInEachDayofTheWeek(),
  };

  function spentIn2014() {
    let sumOfCost = 0;

    sumOfCost = data
      .filter((item) => item.dateYear === 2014)
      .reduce((prev, curr) => (prev += Number(curr.cost)), 0);

    sumOfCost = sumOfCost.toFixed(2);
    return sumOfCost;
  }

  function companiesEarns() {
    let companies = [];
    let earnings = [];

    //way1
    companies = [...new Set(data.map((item) => item.company))];

    //way2
    // data.forEach((item) => {
    //   if (!companies.includes(item.company)) {
    //     companies.push(item.company);
    //   }
    // });

    //way3
    // for (let item of data) {
    //   if (!companies.includes(item.company)) {
    //     companies.push(item.company);
    //   }
    // }

    //way4
    // for (let item in data) {
    //   if (!companies.includes(data[item].company)) {
    //     companies.push(data[item].company);
    //   }
    // }

    //way5
    // for (let i = 0; i < data.length; i++) {
    //   if (!companies.includes(data[i].company)) {
    //     companies.push(data[i].company);
    //   }
    // }

    // companies.forEach((company) => {
    //   let companyEarnings = 0;
    //   data.forEach((item) => {
    //     if (item.company === company) {
    //       companyEarnings += Number(item.cost);
    //     }
    //   });
    //   earnings.push(companyEarnings.toFixed(2));
    // });

    for (let company of companies) {
      let singleCompanyEarnings = data
        .filter((item) => item.company === company)
        .reduce((prev, curr) => (prev += Number(curr.cost)), 0);
      singleCompanyEarnings = singleCompanyEarnings.toFixed(2);
      earnings.push(singleCompanyEarnings);
    }

    //tworzę obiekt z macierzy companies i earnings
    let result = {};
    companies.forEach(function (key, i) {
      result[key] = earnings[i];
    });
    return result;
  }

  function mostSpendingType() {
    let types = [...new Set(data.map((item) => item.type))];
    let spendings = [];

    for (let type of types) {
      let typeSpendings = 0;
      for (let item of data) {
        if (item.type === type) {
          typeSpendings += Number(item.cost);
        }
      }
      spendings.push(typeSpendings.toFixed(2));
    }

    let result = {};
    types.forEach(function (key, i) {
      result[key] = spendings[i];
    });
    return result;
  }

  function spendingsInMonth() {
    let months = [...new Set(data.map((item) => item.dateMonth))];
    let spendings = [];

    for (let month of months) {
      let monthSpendings = 0;
      for (let item of data) {
        if (item.dateMonth === month) {
          monthSpendings += Number(item.cost);
        }
      }
      spendings.push(monthSpendings.toFixed(2));
    }

    let result = {};
    months.forEach(function (key, i) {
      result[key] = spendings[i];
    });
    return result;
  }

  function spendingsInEachDayofTheWeek() {
    let daysOfWeek = [...new Set(data.map((item) => item.dateDayOfTheWeek))];
    let spendings = [];

    for (let day of daysOfWeek) {
      let daySpendings = 0;
      for (let item of data) {
        if (item.dateDayOfTheWeek === day) {
          daySpendings += Number(item.cost);
        }
      }
      spendings.push(daySpendings.toFixed(2));
    }

    let result = {};
    daysOfWeek.forEach(function (key, i) {
      result[key] = spendings[i];
    });

    return result;
  }

  return innerObject;
})(data);

console.log("Spendings in 2014:", resultObject.spentIn2014);
console.log("Companies earnings", resultObject.companiesEarns);
console.log("Spendings by type:", resultObject.mostSpendingType);
console.log("Spendings by month:", resultObject.spendingsInMonth);
console.log(
  "Spendings by day of the week:",
  resultObject.spendingsInEachDayofTheWeek
);
