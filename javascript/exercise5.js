// // Завдання 5
// // Користувач може оформити доставку товару до себе в країну, вказавши її при відвідуванні сторінки в prompt. 
// Врахуй, користувач може ввести ім'я країни не тільки буквами нижнього регістра, а наприклад 'кИтАЙ'.

// // Напиши скрипт який виводить повідомлення про вартість доставки в зазначену країну. Обов'язково використовуй switch.
//  Формат повідомлення: 'Доставка в [країна] буде коштувати [ціна] кредитів'.

// // Але доставка є не скрізь, якщо зазначеної країни немає в списку, то виводь в alert повідомлення 'У вашій країні доставка недоступна'.

// Нижче наведено список країн і вартість доставки.

// Китай - 100 кредитів
// Чилі - 250 кредитів
// Австралія - 170 кредитів
// Індія - 80 кредитів
// Ямайка - 120 кредитів
const message = "Put please name country from which you want order.";
let input = prompt(message);
let rent;
let generalInformationAboutProcces;
if(input !== null){
    input = input.toLocaleLowerCase();
}
switch(input){
    case 'china':
        rent="100";
        generalInformationAboutProcces = `Delivery ${input} will be cost  ${rent} coins`;
        break;
    case 'chili':
        rent="250";
        generalInformationAboutProcces = `Delivery ${input} will be cost  ${rent} coins`;
        break;
    case 'australia':
        rent="170";
        generalInformationAboutProcces = `Delivery ${input} will be cost  ${rent} coins`;
        break;
    case 'india':
        rent="80";
        generalInformationAboutProcces = `Delivery ${input} will be cost  ${rent} coins`;
        break;
    case 'jamika':
        rent="120";
        generalInformationAboutProcces = `Delivery ${input} will be cost  ${rent} coins`;
        break;
    default:
     if(input===null){
        generalInformationAboutProcces = "User canceled window!";
        break;
    } else { 
        generalInformationAboutProcces = 'In your country deliveri is not access';
        break;
    }  
}
console.log(generalInformationAboutProcces);
alert(generalInformationAboutProcces);



