"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
// use this to read any type of file
// encoding says to return a string
var matches = fs_1.default
    .readFileSync('football.csv', { encoding: 'utf-8' })
    .split('\n')
    .map(function (row) { return row.split(','); });
var manUnitedWins = 0;
var homeWin = 'H';
var awayWin = 'A';
var draw = 'D';
// BAD VERSION OF CODE
// iterate over strings from the football.csv file containing Man United and add to the manUnitedWins if match[5] contains H or A
for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
    var match = matches_1[_i];
    if (match[1] === 'Man United' && match[5] === homeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === awayWin) {
        manUnitedWins++;
    }
}
console.log("Manchester United won " + manUnitedWins + " games");
