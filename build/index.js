"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
// create a new variable based on a new class of CsvFileReader Class to use the football.csv file
var reader = new CsvFileReader_1.CsvFileReader('football.csv');
reader.read();
// purpose of an enum of mainly to signal other developers this is a collectiong of closely related values
var MatchResult;
(function (MatchResult) {
    MatchResult["homeWin"] = "H";
    MatchResult["awayWin"] = "A";
    MatchResult["draw"] = "D";
})(MatchResult || (MatchResult = {}));
var manUnitedWins = 0;
// Iterate over the imported class's data array created in CsvFileReader
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] === MatchResult.homeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult.awayWin) {
        manUnitedWins++;
    }
}
console.log("Manchester United won " + manUnitedWins + " games");
