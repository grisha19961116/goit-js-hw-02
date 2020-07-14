// // Задание 3
// // Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку
//  (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.
function findLongestWord(string) {
    const longestWord = string.split(' ').sort(function(firstElement, secondElement) { return secondElement.length - firstElement.length; });
    return `The longest word in this sentanse is "${longestWord[0]}" and him lenght is "${longestWord[0].length}".`;
  }
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
console.log(findLongestWord('May the fff  ff f ggghjd d  gg gh h j  3333  ghhhh GeorgrWashington for hhh  hh  h hh h h h ceh you'));  //'its work'