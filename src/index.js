var testNames = require('./names.json'),
    uniqueRandomArray = require('unique-random-array');

module.exports = {
    all: testNames,
    random: uniqueRandomArray(testNames)
};