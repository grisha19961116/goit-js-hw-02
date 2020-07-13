// Завдання 3
// Напиши скрипт, який імітує авторизацію адміністратора в панелі управління.

// Є змінна message в яку буде записано повідомлення про результат. При завантаженні сторінки у відвідувача запитується пароль через prompt:

// Якщо натиснули Cancel, записати в message рядок 'Скасовано користувачем!'
// В іншому випадку, якщо введений пароль який збігається зі значенням константи ADMIN_PASSWORD, записати в message рядок 'Ласкаво просимо!'
// В іншому випадку, тобто якщо жодна з попередніх умов не виконалася, записати в message рядок 'Доступ заборонений, невірний пароль!'
// Після всіх перевірок вивести в alert значення змінної message.
// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;
// const message = "Put your password pleas";
// let  put = prompt(message);
// prompt(message);
// const ADMIN_PASSWORD = 'jqueryismyjam';
// if(put === ADMIN_PASSWORD){
//    const accepted = 'Ласкаво просимо!';
//    console.log(accepted) 
// } else if(put === null){
//     const bag = 'Скасовано користувачем!';
//     console.log(bag)
// }
//  else {
//     const wrong = 'Доступ заборонений, невірний пароль!';
//     console.log(wrong)
// }
let message = "Put your password pleas";
const  input = prompt(message);
const ADMIN_PASSWORD = 'HasaJama2020';
if(input === null){
    message = 'User canceled!';
} else if(input === ADMIN_PASSWORD){
    message = 'Well come!';
} else{
    message = 'You can not pass ,password is wrong!';
}
    console.log(message);
    alert(message);
