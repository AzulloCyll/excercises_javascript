//Create a function that tells us how many days till Friday☺

howManyDaysTillFriday = () => {
  let date = new Date();
  let currentDay = date.getDay();
  let daysTillFriday;
  if (currentDay === 5) {
    console.log("It's friday :)))");
  } else if (currentDay < 5) {
    daysTillFriday = 5 - currentDay;
    if (daysTillFriday === 1) {
      console.log("It's " + daysTillFriday + " day till Friday :(");
    } else {
      console.log("There are " + daysTillFriday + " days till Friday :(");
    }
  } else if (currentDay > 5) {
    daysTillFriday = 7 - Math.abs(5 - currentDay);
    console.log("There are " + daysTillFriday + " days till Friday :(");
  }
};

howManyDaysTillFriday();
