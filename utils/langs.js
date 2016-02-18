// Data Schema
// [
//   {
//     "timestamp": "2016-01-18T21:41:56.233Z",
//     "whatProgrammingLanguagesDoYouUseRegularly": "JavaScript (Including compile-to-JavaScript languages like CoffeeScript and TypeScript)",
//     "outOfTheseLanguagesWhichDoYouUseTheMost": "JavaScript (Including compile-to-JavaScript languages like CoffeeScript and TypeScript)",
//     "onAScaleOf1To10RateYourAverageEmotionalStatusWhenWritingInYourPrimaryLanguage": 7,
//     "outOfTheseLanguagesWhichDoYouEnjoyTheMost": "JavaScript (Including compile-to-JavaScript languages like CoffeeScript and TypeScript)",
//     "onAScaleOf1To10RateYourAverageEmotionalStatusWhenWritingInYourFavoredLanguage": 7,
//     "howOldAreYou": 20,
//     "whatIsYourOccupation": "web developer",
//     "wouldYouRecommendThisLanguageWhatAreTheProsAndCons": "yes"
//   },
//   ...
// ]

var data = require('../data');
var mostUsed = {
  langs: [],
  tally: {
    pyCount: 0,
    JSCount: 0,
    rbCount: 0,
    cCount: 0,
    cppCount: 0,
    csCount: 0,
    jCount: 0,
    phpCount: 0,
    objcCount: 0,
    perlCount: 0
    swiftCount: 0,
    otherCount: 0,
  },
  mostPop: '',
  leastPop: ''
};
var preferred = {};

// Populate mostUsed.langs array
data.forEach(function(entry) {
  entry.outOfTheseLanguagesWhichDoYouUseTheMost
    .split(', ')
    .forEach(function(lang) {
      mostUsed.langs.push(lang.trim());
    });
});

mostUsed.langs.forEach(function(lang) {
  switch (lang) {
    case 'Python':
      mostUsed.tally.pyCount += 1;
      break;
    case 'JavaScript':
      mostUsed.tally.JSCount += 1;
      break;
    case 'Java':
      mostUsed.tally.jCount += 1;
      break;
    case 'Objective-C':
      mostUsed.tally.objcCount += 1;
      break;
    case 'Perl':
      mostUsed.tally.perlCount += 1;
      break;
    case 'Ruby':
      mostUsed.tally.rbCount += 1;
      break;
    case 'C++':
      mostUsed.tally.cppCount += 1;
      break;
    case 'C':
      mostUsed.tally.cCount += 1;
      break;
    case 'C#':
      mostUsed.tally.csCount += 1;
      break;



    default:
    mostUsed.tally.otherCount += 1;
  }
})
