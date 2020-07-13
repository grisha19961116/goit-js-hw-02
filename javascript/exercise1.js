// Завдання 1
// Оголоси дві змінні, які зберігають назву та ціну товару: name і price
// Присвойте змінним наступні характеристики товару (відразу при оголошенні)
// назва: Генератор захисного поля
// ціна: 1000
// Використовуючи стандартний рядок виведи в консоль інформацію про товар, вийде: 'Обрано «Генератор захисного поля», ціна за штуку 1000 кредитів'.
// Присвой товару нову ціну - 2000
// Використовуючи стандартний рядок виведи в консоль інформацію про товар, вийде: 'Обрано «Генератор захисного поля», ціна за штуку 2000 кредитів'.
// const name = "Generator protection field";
let price = 1000 ;
let generalInformationAboutProcess = `Chosen "${name}" , price per think is ${price} credits.`;
console.log(generalInformationAboutProcess);
price = 2000;
generalInformationAboutProcess = `Chosen "${name}" , price per think is ${price} credits.`;
console.log(generalInformationAboutProcess);
