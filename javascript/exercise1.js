// Exercise1
// Write function logItems(array), which gets array and uses loop for,
// which for each massive element will lead out into console message same style [number of element] - [meaning of element].
// Numbering have to start from 1.For example for first massive element ['Mango', 'Poly', 'Ajax']
// with index 0 will be show '1 - Mango', and for index will show '3 - Ajax'.
// const logItems = function (array) {
// Your cod
//  * Invoke functions to check  it works your code .Have to be like below two examples.
// logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

const names = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];
const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
const logItems = function (array) {
  for (let i = 0; i < array.length; i += 1) {
    console.log(`number element is ${i + 1} meaning element is ${array[i]}`);
  }
};
logItems(names);
logItems(numbers);
