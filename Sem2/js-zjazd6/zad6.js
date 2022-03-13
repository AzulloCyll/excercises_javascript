class Translator {
  constructor(text, translateMethod) {
    this.text = text;
    this.translateMethod = translateMethod;
  }
  Translate() {
    return this.translateMethod(this.text);
  }
}
class TranslationsEngine {
  ToPigLatin(text) {
    let textArr = text.split(" ");
    let pigLatin = [];

    for (let word of textArr) {
      pigLatin.push(word.substring(1) + word[0] + "ay");
    }

    return (
      pigLatin.join(" ").toLowerCase()[0].toUpperCase() +
      pigLatin.join(" ").toLowerCase().substring(1)
    );
  }

  ReverseFromPigLatin(text) {
    let textArr = text.split(" ");
    let english = [];

    for (let word of textArr) {
      let newWord = word[word.length - 3] + word.substring(0, word.length - 3);

      english.push(newWord);
    }

    // accual code transformation
    return (
      english.join(" ").toLowerCase()[0].toUpperCase() +
      english.join(" ").toLowerCase().substring(1)
    );
  }
}

let translationEngine = new TranslationsEngine();

let toPigLatinTranslator = new Translator(
  "The quick brown fox",
  translationEngine.ToPigLatin
);
console.log(toPigLatinTranslator.Translate());

let fromPigLatinToEnglish = new Translator(
  "Hetay uickqay rownbay oxfay",
  translationEngine.ReverseFromPigLatin
);
console.log(fromPigLatinToEnglish.Translate());
