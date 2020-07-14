// Задание 5
// Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку.
//  Функция проверяет ее на содержание слов spam и sale. Если нашли зарещенное слово то функция возвращает true,
//   если запрещенных слов нет функция возвращает false. Слова в строке могут быть в произвольном регистре.
const checkForSpam = function(message) {
    const elemSpam = 'spam';
    const elemSpamUpperCase ='[SPAM]';
    const elemSale = 'sale';
    for (let i = 0; i < message.length; i++) {
        if (message[i] === elemSpam || message[i] === elemSale || message[i] === elemSpamUpperCase) {
            return true;
        }
    }
    return false;
}
let string = 'Latest technology news';
let massiveForString = string.split(' ');
console.log(checkForSpam(massiveForString)); // false

string = 'JavaScript weekly newsletter ';
massiveForString = string.split(' ');
console.log(checkForSpam(massiveForString)); // false

string = 'Get best sale offers now sale!';
massiveForString = string.split(' ');
console.log(checkForSpam(massiveForString)); // true

string ='[SPAM] How to earn fast money ?';
massiveForString = string.split(' ');
console.log(checkForSpam(massiveForString)); // true



