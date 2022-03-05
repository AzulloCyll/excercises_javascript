let ammountOfSoldiers = 7; //change amount of soldiers

let soldiers = [];

for (let i = 0; i < ammountOfSoldiers; i++) {
  soldiers.push(i + 1);
}

while (soldiers.length >= 0) {
  if (soldiers.length > 1) {
    console.log(`${soldiers[0]} kills ${soldiers[1]}`);
    soldiers.push(soldiers[0]);
    soldiers.shift();
    soldiers.splice(0, 1);
    if (soldiers.length === 1) {
      console.log(`${soldiers[0]} reamins alive`);
      break;
    }
  }
}
