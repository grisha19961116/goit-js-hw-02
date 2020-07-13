// Завдання 4
// На рахунку користувача є 23580 кредитів, значення зберігається в змінній credits (створи і привласни). Користувач вирішує купити ремонтних дроїд, які коштують по 3000 кредитів за штуку. Ціна одного дроїда зберігається в змінній pricePerDroid (створи і привласни).

// При відвідуванні сторінки, використовуючи prompt, необхідно запитати кількість дроїдів, які користувач хоче купити і зберегти в змінну.

// Напиши скрипт який:

// Якщо в prompt була натиснута кнопка Cancel, виводить в консоль повідомлення 'Скасовано користувачем!'.
// В іншому випадку, розраховує загальну ціну замовлення і зберігає в змінній totalPrice.
// Перевіряє чи зможе користувач оплатити замовлення:
// якщо сума до оплати перевищує кількість кредитів на рахунку, виводь в консоль повідомлення 'Недостатньо коштів на рахунку!'.
// в іншому випадку необхідно порахувати залишок кредитів на рахунку і вивести повідомлення 'Ви купили [число] дроїдів, на рахунку залишилося [число] кредитів.'.?
const credits = 23580;
const pricePerDroid = 3000;
let message = "How many Do you want to buy 'Droids'?Write in thing";
const  input = prompt(message);
let totalPrice;
if(input === null){
        message = 'user is canceled!';
} else { if(Number.isNaN(Number(input))){
    message = 'you put not a number!please rewrete!';
} else {
    totalPrice = Number(input)*pricePerDroid;
     if(credits < totalPrice) {
    message = 'do not have enough many on your rent!';
} else {
    message = `You buy ${input} droids. Cost per droid is ${pricePerDroid},
total prise is ${totalPrice}. You have ${credits - totalPrice} money after buy.`
    }
  }
}
console.log(message);
alert(message);