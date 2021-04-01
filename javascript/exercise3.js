// Exercise3
// Write function findLongestWord(string), which accepts by parameter random string
//  (in string will be only words and spaces) and return the longest word from that row.

const findLongestWordFirst = function (str) {
  let string = str.split(" ");
  let longestWord = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i].length > longestWord) {
      longestWord = string[i].length;
    }
  }
  for (let word of string) {
    if (word.length === longestWord) {
      return `The longest word in this sentence is ${word} and him length is ${longestWord}`;
    }
  }
};
console.log(
  findLongestWordFirst("The quick brown fox jumped over the lazy dog")
); // 'jumped'
console.log(findLongestWordFirst("Google do a roll")); // 'Google'
console.log(findLongestWordFirst("May the force be with you")); // 'force'
console.log(
  findLongestWordFirst(
    " George Washington was one of the principal people in USA in him time"
  )
);

// second solution of this exercise is below

function findLongestWordSecond(string) {
  const longestWord = string
    .split(" ")
    .sort(function (firstElement, secondElement) {
      return secondElement.length - firstElement.length;
    });
  return `The longest word in this sentence is "${longestWord[0]}" and him length is "${longestWord[0].length}".`;
}
console.log(
  findLongestWordSecond("if you wish improve your knowledge in it industry")
);
console.log(findLongestWordSecond("believe in your action")); // 'Google'
console.log(findLongestWordSecond("and in result you will be able")); // 'force'
console.log(findLongestWordSecond("to reach your goal,and get success")); //'its work'
