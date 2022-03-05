let ammountOfSoldiers = 7; //change amount of soldiers

let soldiers = [];

for (let i = 0; i < ammountOfSoldiers; i++) {
  soldiers.push(i + 1);
}

let i = 0;
while (soldiers.length >= 0) {
  if (soldiers.length > 1) {
    console.log(`${soldiers[i]} kills ${soldiers[i + 1]}`);
    soldiers.push(soldiers[i]);
    soldiers.shift();
    soldiers.splice(0, 1);
    if (soldiers.length === 1) {
      console.log(`${soldiers[i]} reamins alive`);
      break;
    }
  }
}
