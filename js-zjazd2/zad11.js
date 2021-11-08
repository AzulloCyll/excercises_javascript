//Create a function that will return the current day name in Polish.

const currentDayInPolish = () => {
  daysInPolish = [
    "Poniedziałek",
    "Wtorek",
    "Środa",
    "Czwartek",
    "Piątek",
    "Sobota",
    "Niedziela",
  ];

  let date = new Date();
  console.log(daysInPolish[date.getDay() - 1]);
};

currentDayInPolish();
