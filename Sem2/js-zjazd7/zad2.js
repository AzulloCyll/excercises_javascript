// 2) Write a program that finds the longest palindromic substring of a given string.
// ‘karakis’, ‘baerren’, ‘kajak’, ‘inni’, ’sedes’.

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
  longestPalindrome = (text) => {
    if (text.length < 1 || text === null) return "";

    let longest = "";

    for (let i = 0; i < text.length; i++) {
      let odd = this.expandFromCenter(text, i, i);
      let even = this.expandFromCenter(text, i - 1, i);

      if (odd.length > longest.length) {
        longest = odd;
      }

      if (even.length > longest.length) {
        longest = even;
      }
    }
    return longest;
  };

  expandFromCenter = (text, left, right) => {
    let i = 0;
    while (text[left - i] && text[left - i] === text[right + i]) {
      i++;
    }
    i--;

    return text.slice(left - i, right + i + 1);
  };
}

let checkEngine = new CheckEngine();
let palindromeChecker1 = new Checker("karakis", checkEngine.longestPalindrome);
let palindromeChecker2 = new Checker("baerren", checkEngine.longestPalindrome);
let palindromeChecker3 = new Checker("inni", checkEngine.longestPalindrome);
let palindromeChecker4 = new Checker("sedes", checkEngine.longestPalindrome);

console.log(palindromeChecker1.check());
console.log(palindromeChecker2.check());
console.log(palindromeChecker3.check());
console.log(palindromeChecker4.check());
