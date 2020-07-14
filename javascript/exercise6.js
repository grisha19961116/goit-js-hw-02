// Завдання 6
// Напиши скрипт з наступним функціоналом:

// При завантаженні сторінки користувачеві пропонується в prompt ввести число.
//  Введення зберігається в змінну input і додається в масив чисел numbers.
// Операція введення числа користувачем і збереження в масив триває до тих пор, пір,
//  поки користувач не натисне Cancel в prompt.
// Після того як користувач припинив введення натиснувши Cancel, якщо масив не порожній, 
// необхідно порахувати суму всіх елементів масиву і записати її в змінну total.
//  Використовуй цикл for або for...of. Після чого в консоль виведи рядок 'Загальна сума чисел дорівнює [сума]'.
// 🔔 Робити перевірку того, що користувач ввів саме число, а не довільний набір символів,
// не обов'язково. Якщо хочеш, в разі некоректного введення, показуй alert з текстом 'Було введено не число,
// попробуйте ще раз', при цьому результат prompt записувати в масив чисел не потрібно, після чого знову користувачеві пропонується ввести число в prompt.
let total = 0;
const message = "Put number";
let conclusion;
let input;
let numbers = 0 ;
do{
    input = prompt(message);
    if(input === null){
        conclusion = 'General amount is ';
        break;
    } 
    input = Number(input);
    numbers +=input;
    if(Number.isNaN(Number(input))){
        conclusion = 'You put not a number!Please rewrete !That';
        numbers = 'again.';
        break;
    }
} while(true);
numbers = [numbers];
total = numbers;
console.log(conclusion,total);
alert(`${conclusion} ${total}`);
