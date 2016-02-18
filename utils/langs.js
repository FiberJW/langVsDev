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
    goCount: 0,
    jCount: 0,
    phpCount: 0,
    objcCount: 0,
    perlCount: 0,
    swiftCount: 0,
    haskCount: 0,
    otherCount: 0
  },
  mostPop: '',
  leastPop: ''
};

var preferred = {
  langs: [],
  tally: {
    pyCount: 0,
    JSCount: 0,
    rbCount: 0,
    cCount: 0,
    cppCount: 0,
    csCount: 0,
    goCount: 0,
    jCount: 0,
    phpCount: 0,
    objcCount: 0,
    perlCount: 0,
    swiftCount: 0,
    haskCount: 0,
    otherCount: 0
  },
  mostPop: '',
  leastPop: ''
};

// Populate mostUsed.langs array
data.forEach(function(entry) {
  entry.outOfTheseLanguagesWhichDoYouUseTheMost
    .split(', ')
    .forEach(function(lang) {
      mostUsed.langs.push(lang.trim());
    });
    entry.outOfTheseLanguagesWhichDoYouEnjoyTheMost
      .split(', ')
      .forEach(function(lang) {
        preferred.langs.push(lang.trim());
    });
});

// Tally up most used languages
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
    case 'Go':
      mostUsed.tally.goCount += 1;
      break;
    case 'Swift':
      mostUsed.tally.swiftCount += 1;
      break;
    case 'PHP':
      mostUsed.tally.phpCount += 1;
      break;
    case 'Haskell':
    case 'haskell':
      mostUsed.tally.haskCount += 1;
      break;
    default:
      mostUsed.tally.otherCount += 1;
  }
});
// Find the most common most used language
mostUsed.mostPop = Object.keys(mostUsed.tally).reduce(function(a, b){
  return mostUsed.tally[a] > mostUsed.tally[b] ? a : b;
});

// Find the least common most used language
mostUsed.leastPop = Object.keys(mostUsed.tally).reduce(function(a, b){
  return mostUsed.tally[a] < mostUsed.tally[b] ? a : b;
});


// Tally up preferred languages
preferred.langs.forEach(function(lang) {
  switch (lang) {
    case 'Python':
      preferred.tally.pyCount += 1;
      break;
    case 'JavaScript':
      preferred.tally.JSCount += 1;
      break;
    case 'Java':
      preferred.tally.jCount += 1;
      break;
    case 'Objective-C':
      preferred.tally.objcCount += 1;
      break;
    case 'Perl':
      preferred.tally.perlCount += 1;
      break;
    case 'Ruby':
      preferred.tally.rbCount += 1;
      break;
    case 'C++':
      preferred.tally.cppCount += 1;
      break;
    case 'C':
      preferred.tally.cCount += 1;
      break;
    case 'C#':
      preferred.tally.csCount += 1;
      break;
    case 'Go':
      preferred.tally.goCount += 1;
      break;
    case 'Swift':
      preferred.tally.swiftCount += 1;
      break;
    case 'PHP':
      preferred.tally.phpCount += 1;
      break;
    case 'Haskell':
    case 'haskell':
      preferred.tally.haskCount += 1;
      break;
    default:
      preferred.tally.otherCount += 1;
  }
});
// Find the most common preferred language
preferred.mostPop = Object.keys(preferred.tally).reduce(function(a, b){
  return preferred.tally[a] > preferred.tally[b] ? a : b;
});

// Find the least common preferred language
preferred.leastPop = Object.keys(preferred.tally).reduce(function(a, b){
  return preferred.tally[a] < preferred.tally[b] ? a : b;
});

module.exports = {
  getMostUsedStats: function() {
    return mostUsed;
  },
  getPreferredStats: function() {
    return preferred;
  }
}
