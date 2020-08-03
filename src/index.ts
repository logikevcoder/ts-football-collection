import fs from 'fs';

// use this to read any type of file
// encoding says to return a string
const matches = fs
  .readFileSync('football.csv', { encoding: 'utf-8' })
  .split('\n')
  .map((row: string): string[] => row.split(','));

let manUnitedWins = 0;
const homeWin = 'H';
const awayWin = 'A';
const draw = 'D';

// BAD VERSION OF CODE
// iterate over strings from the football.csv file containing Man United and add to the manUnitedWins if match[5] contains H or A
for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === homeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === awayWin) {
    manUnitedWins++;
  }
}

console.log(`Manchester United won ${manUnitedWins} games`);
