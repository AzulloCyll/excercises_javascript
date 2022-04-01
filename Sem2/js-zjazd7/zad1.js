// Write a program that automatically converts English text to Morse code and vice versa.

class Translator {
  constructor(text, translateMethod, dictionary) {
    this.text = text;
    this.translateMethod = translateMethod;
  }

  translate = () => {
    return this.translateMethod(this.text);
  };
}

class TranslationEngine {
  morse2eng = (text) => {
    let eng2morse = {
      a: ".-",
      b: "-...",
      c: "-.-.",
      d: "-..",
      e: ".",
      f: "..-.",
      g: "--.",
      h: "....",
      i: "..",
      j: ".---",
      k: "-.-",
      l: ".-..",
      m: "--",
      n: "-.",
      o: "---",
      p: ".--.",
      q: "--.-",
      r: ".-.",
      s: "...",
      t: "-",
      u: "..-",
      v: "...-",
      w: ".--",
      x: "-..-",
      y: "-.--",
      z: "--..",
      1: ".----",
      2: "..---",
      3: "...--",
      4: "....-",
      5: ".....",
      6: "-....",
      7: "--...",
      8: "---..",
      9: "----.",
      0: "-----",
    };

    const decodeText = (text) => text.split(" ").map(decodeWord).join("  ");
    const decodeWord = (word) => word.split("").map(decodeLetter).join(" ");
    const decodeLetter = (letter) => eng2morse[letter] || letter;

    return decodeText(text.toLowerCase());
  };

  eng2morse = (text) => {
    let morse2eng = {
      "-----": "0",
      ".----": "1",
      "..---": "2",
      "...--": "3",
      "....-": "4",
      ".....": "5",
      "-....": "6",
      "--...": "7",
      "---..": "8",
      "----.": "9",
      ".-": "a",
      "-...": "b",
      "-.-.": "c",
      "-..": "d",
      ".": "e",
      "..-.": "f",
      "--.": "g",
      "....": "h",
      "..": "i",
      ".---": "j",
      "-.-": "k",
      ".-..": "l",
      "--": "m",
      "-.": "n",
      "---": "o",
      ".--.": "p",
      "--.-": "q",
      ".-.": "r",
      "...": "s",
      "-": "t",
      "..-": "u",
      "...-": "v",
      ".--": "w",
      "-..-": "x",
      "-.--": "y",
      "--..": "z",
    };

    const decodeText = (text) => text.split("  ").map(decodeWord).join(" ");
    const decodeWord = (word) => word.split(" ").map(decodeLetter).join("");
    const decodeLetter = (letter) => morse2eng[letter] || letter;

    return decodeText(text)[0].toUpperCase() + decodeText(text).slice(1);
  };
}

let translationEngine = new TranslationEngine();

let eng2morseTranslator = new Translator(
  "Pack my box with five dozen liquor jugs",
  translationEngine.morse2eng
);

let morse2engTranslator = new Translator(
  ".--. .- -.-. -.-  -- -.--  -... --- -..-  .-- .. - ....  ..-. .. ...- .  -.. --- --.. . -.  .-.. .. --.- ..- --- .-.  .--- ..- --. ...",
  translationEngine.eng2morse
);

console.log(eng2morseTranslator.translate());
console.log(morse2engTranslator.translate());
