// 5) Scale riddle. With 8 balls EXAM[1,2,1,1,1,1,1,1]. One of the items will be change to two.
// Indexes are to be chosen at random. Use comparing of weights only two times.

let exam = [1, 2, 1, 1, 1, 1, 1, 1];

// zabiera jeden element z tablicy
let getElement = function (array) {
  let randomIndex = Math.floor(Math.random() * array.length);
  let randomElement = array[randomIndex];
  array = array.splice(randomIndex, 1);
  return randomElement;
};

// tworzy macierz z trzech zabranych elementów
function getNElements(array, n) {
  let result = [];
  for (i = 0; i < n; i++) {
    result.push(getElement(array));
  }
  return result;
}

// tworzy sety z kulkami losując elementy
console.log("New sets:");
let [setA, setB, setC] = [
  [...getNElements(exam, 3)],
  [...getNElements(exam, 3)],
  [...getNElements(exam, 2)],
];
console.log(`setA = [${setA}], setB = [${setB}], setC = [${setC}]`);

let sumA = setA.reduce((a, b) => a + b);
let sumB = setB.reduce((a, b) => a + b);
let sumC = setC.reduce((a, b) => a + b);

console.log("weighing ONE: setA & setB");

if (sumA === sumB) {
  //tworzy kolejne sety z kulkami losując elementy
  let [setD, setE] = [[getNElements(setC, 1)], [getNElements(setC, 1)]];
  console.log(`setA = setB => heavy ball must be in setC`);
  console.log("New sets:");
  console.log(`setD = [${setD}], setE = [${setE}]`);
  console.log("weighing TWO: setD & setE");
  if (setD > setE) {
    console.log("setD > setE => !!! heavy ball is in setD !!!");
  } else {
    console.log("setD < setE => !!! heavy ball is in setE !!!");
  }
} else if (sumA > sumB) {
  console.log(`setA > setB => heavy ball must be in setA`);
  let [setD, setE, setF] = [
    [getNElements(setA, 1)],
    [getNElements(setA, 1)],
    [getNElements(setA, 1)],
  ];
  console.log("New sets:");
  console.log(`setD = [${setD}], setE = [${setE}], setF = [${setF}]`);
  console.log("weighing TWO: setD & setE");
  if (setD > setE) {
    console.log("setD > setE => !!! heavy ball is in setD !!!");
  } else if (setD < setE) {
    console.log("setD < setE => !!! heavy ball is in setE !!!");
  } else {
    console.log("setD = setE !!! heavy ball is in setF !!!");
  }
} else if (sumA < sumB) {
  console.log(`setA < setB => heavy ball must be in setB`);
  let [setD, setE, setF] = [
    [getNElements(setB, 1)],
    [getNElements(setB, 1)],
    [getNElements(setB, 1)],
  ];
  console.log("New sets:");
  console.log(`setD = [${setD}], setE = [${setE}], setF = [${setF}]`);
  console.log("weighing TWO: setD & setE");
  if (setD > setE) {
    console.log("setD > setE => !!! heavy ball is in setD !!!");
  } else if (setD < setE) {
    console.log("setD < setE => !!! heavy ball is in setE !!!");
  } else {
    console.log("setD = setE !!! heavy ball is in setF !!!");
  }
}
