import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

// create a new variable based on a new class of CsvFileReader Class to use the football.csv file
const reader = new CsvFileReader('football.csv');
reader.read();

let manUnitedWins = 0;

// Iterate over the imported class's data array created in CsvFileReader
for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.homeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.awayWin) {
    manUnitedWins++;
  }
}

console.log(`Manchester United won ${manUnitedWins} games`);
