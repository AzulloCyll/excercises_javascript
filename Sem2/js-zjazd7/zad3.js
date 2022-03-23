//Given two strings, write a program that efficiently finds the longest common subsequence. ‘karol rolki’
class Checker {
  constructor(text, checkMethod) {
    this.text = text;
    this.checkMethod = checkMethod;
  }

  check = () => {
    return this.checkMethod(this.text);
  };
}

class CheckEngine {}
