// Write a program that automatically converts English text to Morse code and vice versa.

class Translator {
  constructor(text, translateMethod) {
    this.text = text;
    this.translateMethod = translateMethod;
  }

  translate = () => {
    return this.translateMethod(this.text);
  };
}

class TranslationEngine {
  toMorseCode = (text) => {
    let morseCode = {
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

    const decodeLetter = (letter) => morseCode[letter] || letter;
    const decodeWord = (word) => word.split("").map(decodeLetter).join(" ");
    const decodeText = (text) => text.split(" ").map(decodeWord).join("  ");

    return decodeText(text.toLowerCase());
  };
}

let translationEngine = new TranslationEngine();
let toMorseCodeTranslator = new Translator(
  "Pack my box with five dozen liquor jugs",
  translationEngine.toMorseCode
);
console.log(toMorseCodeTranslator.translate());
