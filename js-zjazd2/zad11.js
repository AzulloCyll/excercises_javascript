//Create a function that will return the current day name in Polish.

const currentDayInPolish = () => {
  daysInPolish = [
    "Niedziela",
    "Poniedziałek",
    "Wtorek",
    "Środa",
    "Czwartek",
    "Piątek",
    "Sobota",
  ];

  let date = new Date();
  console.log(daysInPolish[date.getDay()]);
};

currentDayInPolish();
