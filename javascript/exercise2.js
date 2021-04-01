// Exercise 2
// Write script count price engraving jewelers.For that create function
// calculateEngravingPrice(message, pricePerWord) accept row (in row will be only words and spaces)
// Engraving price one word  and  return engraving price for all words in sentence(row).

const calculateEngravingPrice = function (message, pricePerWord) {
  const result = message.split(" ").length * pricePerWord;
  return `Our result after calculate is ${result}`;
};
const message = "Welcome to Bahamas!";
console.log(calculateEngravingPrice("Hello i'm Sarah", 10));
console.log(
  calculateEngravingPrice("Everest the highest  mountains in the world  ", 20)
);
console.log(calculateEngravingPrice("Last pact already has deprecated", 40));
console.log(calculateEngravingPrice("Let me study all things", 20));
