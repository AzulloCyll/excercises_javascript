//Given two strings, write a program that efficiently finds the longest common subsequence. ‘karol rolki’
//
//       k a r o l           s e d e s 
//     0 0 0 0 0 0         0 0 0 0 0 0 
//   r 0 0 0 1 0 0       s 0 1 0 0 0 0
//   o 0 0 0 0 2 0       e 0 0 2 0 0 0
//   l 0 0 0 0 0 3       d 0 0 0 3 0 0
//   k 0 1 0 0 0 0       e 0 0 0 0 4 0
//   i 0 0 0 0 0 0       s 0 0 0 0 0 5

class Checker {
  constructor(text, checkMethod) {
    this.text = text;
    this.checkMethod = checkMethod;
  }

  check = () => {
    return this.checkMethod(this.text);
  };
}

class CheckEngine {
  longestCommonSubstring = (text) => {
    let [str1, str2] = text.split(" ");
    str1 = [...str1];
    str2 = [...str2];

    // creating matrix to check for common letters
    const substringMatrix = Array(str2.length + 1)
      .fill(null)
      .map(() => {
        return Array(str1.length + 1).fill(null);
      });

    // fills first row with 0
    for (let col = 0; col <= str1.length; col++) {
      substringMatrix[0][col] = 0;
    }

    // fills first column with 0
    for (let row = 0; row <= str2.length; row++) {
      substringMatrix[row][0] = 0;
    }

    // builds matrix of all substring lengths
    let lsLength = 0;
    let lsCol = 0;
    let lsRow = 0;

    for (let row = 1; row <= str2.length; row++) {
      for (let col = 1; col <= str1.length; col++) {
        if (str1[col - 1] === str2[row - 1]) {
          substringMatrix[row][col] = substringMatrix[row - 1][col - 1] + 1;
        } else {
          substringMatrix[row][col] = 0;
        }
        if (substringMatrix[row][col] > lsLength) {
          lsLength = substringMatrix[row][col];
          lsCol = col;
          lsRow = row;
        }
      }
    }

    // if substrings not found
    if (lsLength === 0) return "No common substrings found";

    // reading longest common substring from the matrix
    let LCS = "";

    while (substringMatrix[lsRow][lsCol] > 0) {
      LCS = str1[lsCol - 1] + LCS;
      lsRow--;
      lsCol--;
    }

    return LCS;
  };
}

let checkEngine = new CheckEngine();
let lcs = new Checker("karol rolki", checkEngine.longestCommonSubstring);

console.log(lcs.check());
