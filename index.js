let introduction = (name) => `Hi, my name is ${name}.`;

let introductionWithLanguage = (name, language) =>
  `Hi, my name is ${name} and I am learning to program in ${language}.`;

let introductionWithLanguageOptional = (name, language = "JavaScript") =>
  `Hi, my name is ${name} and I am learning to program in ${language}.`;
