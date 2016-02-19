var utils = require('./utils/utils');

var summary = `${utils.ages.getPop()} people submitted responsed to my survey. Out of these people, the average age was ${utils.ages.getAvg()}. The most used language was JavaScript and the most liked language was Python. JavaScript had an average rating of ${Math.floor(utils.ratings.tally.js.average)}/10 and Python had an average rating of ${Math.floor(utils.ratings.tally.python.average)}/10. The highest rated language was Swift with a rating of ${Math.floor(utils.ratings.tally.swift.average)}/10. The lowest rated language was Java with a rating of ${Math.floor(utils.ratings.tally.java.average)}/10. (Averages are rounded)`;

console.log(summary);
