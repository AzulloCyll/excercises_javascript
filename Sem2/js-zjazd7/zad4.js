class matrixCalculator {
  constructor(m1, m2, calculation) {
    this.m1 = m1;
    this.m2 = m2;
    this.calculation = calculation;
  }

  calculate = () => {
    return this.calculation(this.m1, this.m2);
  };
}

class Calculation {
  multiplyM = (m1, m2) => {
    let row_m1 = m1.length;
    let col_m1 = m1[0].length;
    let row_m2 = m2.length;
    let col_m2 = m2[0].length;

    if (col_m1 != row_m2) {
      return console.error("Matrices cannot be multiplied");
    } else {
      let result = new Array(row_m1)
        .fill(0)
        .map(() => new Array(col_m2).fill(0));

      for (let x = 0; x < result.length; x++) {
        for (let y = 0; y < result[0].length; y++) {
          for (let z = 0; z < col_m1; z++) {
            result[x][y] += m1[x][z] * m2[z][y];
          }
        }
      }
      return result;
    }
  };
}

//test

let m1 = [
  [1, 2, -2],
  [2, 2, 1],
];

let m2 = [
  [2, -1],
  [1, -1],
  [-2, 3],
];

let calculation = new Calculation(m1, m2);
let matrixMultiplier = new matrixCalculator(m1, m2, calculation.multiplyM);

console.table(matrixMultiplier.calculate());
