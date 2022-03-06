// Choose longest string from the array. [‘Karol’, ‘Adam’,’Rogowski’,’Politechnika’,’Super’,’Weekend’].

let arr = ["Karol", "Adam", "Rogowski", "Politechnika", "Super", "Weekend"];

let longest = 0;
let index = 0;

for (let i = 0; i < arr.length; i++) {
  let numberOfLetters = arr[i].length;
  if (numberOfLetters >= longest) {
    longest = numberOfLetters;
    index = i;
  }
}

console.log(arr[index]);
