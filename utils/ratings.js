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
var langs = require('./langs');
var ratings = [];
var stats = {
  tally: {
    python: {
      count: 0,
      ratingSum: 0,
      average: 0
    },
    js: {
      count: 0,
      ratingSum: 0,
      average: 0
    },
    ruby:  {
      count: 0,
      ratingSum: 0,
      average: 0
    },
    c: {
      count: 0,
      ratingSum: 0,
      average: 0
    },
    cpp: {
      count: 0,
      ratingSum: 0,
      average: 0
    },
    cs: {
      count: 0,
      ratingSum: 0,
      average: 0
    },
    go: {
      count: 0,
      ratingSum: 0,
      average: 0
    },
    java:  {
      count: 0,
      ratingSum: 0,
      average: 0
    },
    php: {
      count: 0,
      ratingSum: 0,
      average: 0
    },
    objc: {
      count: 0,
      ratingSum: 0,
      average: 0
    },
    perl: {
      count: 0,
      ratingSum: 0,
      average: 0
    },
    swift: {
      count: 0,
      ratingSum: 0,
      average: 0
    },
    haskell: {
      count: 0,
      ratingSum: 0,
      average: 0
    },
    other: {
      count: 0,
      ratingSum: 0,
      average: 0
    }
  },
  highestRated: '',
  leastRated: ''
}
data.forEach(function(entry) {
  var rating1 = {};
  var rating2 = {};
  rating1[entry.outOfTheseLanguagesWhichDoYouUseTheMost.trim()] = entry.onAScaleOf1To10RateYourAverageEmotionalStatusWhenWritingInYourPrimaryLanguage;
  rating2[entry.outOfTheseLanguagesWhichDoYouEnjoyTheMost.trim()] = entry.onAScaleOf1To10RateYourAverageEmotionalStatusWhenWritingInYourFavoredLanguage;
  ratings.push(rating1);
  ratings.push(rating2);
});

ratings.forEach(function(lang) {
  var name = Object.keys(lang)[0];
  switch (name) {
    case 'Python':
      stats.tally.python.count += 1;
      stats.tally.python.ratingSum += lang[name];
      stats.tally.python.average = stats.tally.python.ratingSum / stats.tally.python.count;
      break;
    case 'JavaScript':
      stats.tally.js.count += 1;
      stats.tally.js.ratingSum += lang[name];
      stats.tally.js.average = stats.tally.js.ratingSum / stats.tally.js.count;
      break;
    case 'Java':
      stats.tally.java.count += 1;
      stats.tally.java.ratingSum += lang[name];
      stats.tally.java.average = stats.tally.java.ratingSum / stats.tally.java.count;
      break;
    case 'Objective-C':
      stats.tally.objc.count += 1;
      stats.tally.objc.ratingSum += lang[name];
      stats.tally.objc.average = stats.tally.objc.ratingSum / stats.tally.objc.count;
      break;
    case 'Perl':
      stats.tally.perl.count += 1;
      stats.tally.perl.ratingSum += lang[name];
      stats.tally.perl.average = stats.tally.perl.ratingSum / stats.tally.perl.count;
      break;
    case 'Ruby':
      stats.tally.ruby.count += 1;
      stats.tally.ruby.ratingSum += lang[name];
      stats.tally.ruby.average = stats.tally.ruby.ratingSum / stats.tally.ruby.count;
      break;
    case 'C++':
      stats.tally.cpp.count += 1;
      stats.tally.cpp.ratingSum += lang[name];
      stats.tally.cpp.average = stats.tally.cpp.ratingSum / stats.tally.cpp.count;
      break;
    case 'C':
      stats.tally.c.count += 1;
      stats.tally.c.ratingSum += lang[name];
      stats.tally.c.average = stats.tally.c.ratingSum / stats.tally.c.count;
      break;
    case 'C#':
      stats.tally.cs.count += 1;
      stats.tally.cs.ratingSum += lang[name];
      stats.tally.cs.average = stats.tally.cs.ratingSum / stats.tally.cs.count;
      break;
    case 'Go':
      stats.tally.go.count += 1;
      stats.tally.go.ratingSum += lang[name];
      stats.tally.go.average = stats.tally.go.ratingSum / stats.tally.go.count;
      break;
    case 'Swift':
      stats.tally.swift.count += 1;
      stats.tally.swift.ratingSum += lang[name];
      stats.tally.swift.average = stats.tally.swift.ratingSum / stats.tally.swift.count;
      break;
    case 'PHP':
      stats.tally.php.count += 1;
      stats.tally.php.ratingSum += lang[name];
      stats.tally.php.average = stats.tally.php.ratingSum / stats.tally.php.count;
      break;
    case 'Haskell':
    case 'haskell':
      stats.tally.haskell.count += 1;
      stats.tally.haskell.ratingSum += lang[name];
      stats.tally.haskell.average = stats.tally.haskell.ratingSum / stats.tally.haskell.count;
      break;
    default:
      stats.tally.other.count += 1;
      stats.tally.other.ratingSum += lang[name];
      stats.tally.other.average = stats.tally.other.ratingSum / stats.tally.other.count;
  }
});

stats.highestRated = Object.keys(stats.tally).reduce(function(a, b){ return stats.tally[a]['average'] > stats.tally[b]['average'] ? a : b });

stats.leastRated = Object.keys(stats.tally).reduce(function(a, b){ return stats.tally[a]['average'] < stats.tally[b]['average'] ? a : b });

stats.listRatings = () => {
  var ratingsList = Object.keys(stats.tally).map(function(name) {
    return Math.round(stats.tally[name].average);
  });
  return ratingsList;
}

module.exports = stats;
