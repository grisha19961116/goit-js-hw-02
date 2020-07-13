// // Завдання 6
// // Напиши скрипт який просить відвідувача ввести число в prompt до тих пір, поки відвідувач не натисне Cancel і кожен раз додає введене значення до загальної суми.

// // При завантаженні сторінки користувачеві пропонується в prompt ввести число. Введення додається до значення змінної total.
// // Операція введення числа триває до тих пір, поки користувач не натисне кнопку Cancel в prompt.
// // Після того як користувач припинив введення натиснувши кнопку Cancel, показати alert з рядком 'Загальна сума чисел дорівнює [сума]'.
// // 🔔 Робити перевірку того, що користувач ввів саме число, а не довільний набір символів, не потрібно. Якщо хочеш, в разі некоректного введення,
//  показуй alert з текстом 'Було написано не число, спробуйте ще раз', при цьому результат prompt плюсувати до загальної суми не потрібно, 
//  після чого знову користувачеві пропонується ввести число в prompt.

// // let input;
// // let total = 0;
let total = 0;
const message = "Put amount which you wish";
let conclusion;
let input;
do{
    input = prompt(message);
    if(input === null){
        conclusion = 'General amount which you have put is ';
        break;
    } 
    input = Number(input);
    total +=input;
    if(Number.isNaN(Number(input))){
        conclusion = 'You put not a number!Please rewrete!';
        total = 'That!';
        break;
    }
} while(true);
console.log(`${conclusion} ${total}`);
alert(`${conclusion} ${total}`);

