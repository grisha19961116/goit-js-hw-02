// Exercise 6
// Write script with next functional:
// When  page is downloading sagest to user input number into prompt.
// Input value will save to variable 'input' and add to massive numbers.
// Operation input user number and save into massive are doing for that moment
//  while  user doesn't tap  Cancel into prompt.
// After that like user has been finished input by tap 'Cancel ', if massive is not empty,
// necessary to count amount all massive elements and save it into variables total.

let total = 0;
const message = "Put number";
let conclusion;
let input;
do {
  input = prompt(message);
  input = Number(input);
  if (input === null) {
    conclusion = "General amount is ";
    break;
  }
  if (Number.isNaN(input)) {
    conclusion = "You put not a number!Please rewrite !That";
    total = "again.";
    break;
  }
  total += input;
} while (true);
console.log(conclusion, total);
alert(`${conclusion} ${total}`);
