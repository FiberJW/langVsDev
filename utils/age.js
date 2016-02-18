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

var count = 0, ageSum = 0, ageAvg = 0;
function averageAge(entry) {
  count += 1;
  ageSum += entry.howOldAreYou;
  ageAvg = ageSum / count;
}
data.forEach(averageAge)

module.exports = {
  getAvg: function() { return Math.round(ageAvg) },
  getPop: function() { return count }
}
