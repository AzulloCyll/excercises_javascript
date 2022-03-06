class Translator {
  constructor(textToBeTranslated, translateMethod) {
    this.textToBeTranslated = textToBeTranslated;
    this.translateMethod = translateMethod;
  }

  Translate() {
    return this.translateMethod(this.textToBeTranslated);
  }
}

class Translations {
  ToPigLatin(text) {
    let translatedText;
    translatedText = text.spit(" ").map((x) => this.s);
    return text;
  }
}

let translations = new Translations();
let translatorToPigLatin = new Translator(
  "The quick brown fox",
  translations.ToPigLatin
);

let translationResult = translatorToPigLatin.Translate();
console.log(translationResult);
