let myHand = [
  { n: 1, c: 1 },
  { n: 2, c: 1 },
  { n: 1, c: 2 },
  { n: 4, c: 1 },
  { n: 2, c: 3 },
];

function getUnique(arr, howMany) {
  let nonUnique = [];
  for (let elem of arr) {
    result = arr.filter((item) => item.n === elem.n);
    if (result.length === howMany) {
      nonUnique.push(result);
    }
  }
  return [...new Set(...nonUnique)];
}

let filtered = getUnique(myHand, 2);
console.log(filtered[0]);
console.log(filtered[1]);
